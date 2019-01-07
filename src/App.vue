<template>
    <v-app class="height">
        <v-container class="margin">
            <v-content>
                <div class='menu--content' :class="isClosed ? 'closed' : ''">
                    <div @click="isClosed = !isClosed" class="menu--button">
                        <v-icon medium>{{setIcon}}</v-icon>
                    </div>
                    <v-layout class="scroll">
                        <v-flex>
                            <div class="list--title">PRESETS</div>
                            <v-list class="background--color">
                                <v-list-tile-content v-for="system in presets" :key="system">
                                    <v-btn
                                            dark
                                            flat
                                            large
                                            @click="drawPreset(system.name)"
                                            class="list--element">
                                        {{system.name}}
                                    </v-btn>
                                </v-list-tile-content>
                            </v-list>
                            <v-switch
                                    dark
                                    color="#1565C0"
                                    v-model="advancedOptions"
                                    label="Advanced Options"
                                    class="mode--switch">
                            </v-switch>
                            <div v-if="advancedOptions">
                                <v-text-field
                                        dark
                                        label="Axiom"
                                        v-model="axiom"
                                        class="advanced--inputs">
                                </v-text-field>
                                <v-text-field
                                        dark
                                        label="Number of simulation steps"
                                        class="advanced--inputs"
                                        type='text'
                                        :rules="[
                      v => (!!Number(v) && v >= 0) || 'Value must be a number non-negative integer.'
                  ]"
                                        v-model="simulationSteps">
                                </v-text-field>
                                <v-text-field
                                        dark
                                        label="Number of rules"
                                        class="advanced--inputs"
                                        type='text'
                                        :rules="[
                      v => (!!Number(v) && v >= 0) || 'Value must be a number non-negative integer.'
                  ]"
                                        v-model="rulesAmount">
                                </v-text-field>
                                <v-text-field
                                        dark
                                        v-for="rule in Number(rulesAmount)"
                                        :key="rule"
                                        label="Rule"
                                        class="advanced--inputs"
                                        v-model="rules[rule - 1]">
                                </v-text-field>
                                <span class="mx-auto">
                  <v-btn
                          large
                          @click="clearForm"
                          class="draw--button">
                      CLEAR
                  </v-btn>
                  <v-btn
                          large
                          :disabled="!isValid"
                          @click="drawSystem"
                          class="draw--button">
                      DRAW
                  </v-btn>
                </span>
                            </div>
                        </v-flex>
                    </v-layout>
                </div>
            </v-content>
        </v-container>
        <v-dialog
                v-model="dialog"
                width="500"
        >
            <v-card>
                <v-card-title
                        class="headline red lighten-2"
                        primary-title
                >
                    {{ error.title }}
                </v-card-title>
                <v-card-text>
                    <p>{{ error.message }}</p>
                    <b>Error message:</b>
                    <p>{{ error.original }}</p>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="grey"
                            flat
                            @click="dialog = false"
                    >
                        Continue
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
  import tur from './turtle'
  import lsystem from './parser'

  let THREE = require('three')
  export default {
    name: 'App',
    data () {
      return {
        dialog: false,
        error: {},
        scene: null,
        isClosed: true,
        presets: [
          {
            name: '3d pitagorian tree',
            axiom: 'A(5)',
            rules: [
              'A(x) -> F(x, 1)[+(45)/(30)A(x)][+(45)/(-30)A(x)][+(-45)/(30)A(x)]+(-45)/(-30)A(x)',
              'F(x, y) -> F(2^(1/2)*x, y + 1)'
            ],
            steps: 5
          },
          {
            name: 'simple leaf',
            axiom: 'A(0)',
            rules: [
              'A(x) : x>0 -> A(x-1)',
              'A(x) : x=0 -> F(1)[+(30)/(10)A(0)][+(-30)/(10)A(0)]F(1)A(0)',
              'F(a) -> /(-0.7)F(a*2)'
            ],
            steps: 6
          },
          {
            name: 'other plant',
            axiom: 'A(2)',
            rules: [
              'A(x) -> F(x)+(25)/(10)[[A(x)]+(-25)/(-30)A(x)]+(-25)/(5)F(x)[+(-25)/(-5)F(x)A(x)]+(25)/(-20)A(x)',
              'F(x) -> F(2*x)'
            ],
            steps: 5
          }
        ],
        advancedOptions: false,
        rulesAmount: 0,
        simulationSteps: 0,
        rules: [],
        axiom: ''
      }
    },
    computed: {
      isValid: function () {
        if (this.rulesAmount > 0 && this.axiom !== '' && this.simulationSteps > 0) {
          for (let rule = 0; rule < this.rulesAmount; rule++) {
            if (this.rules[rule] == null || this.rules[rule] === '') {
              return false
            }
          }
          return true
        }
        return false
      },
      setIcon: function () {
        if (this.isClosed) {
          return 'keyboard_arrow_right'
        } else {
          return 'keyboard_arrow_left'
        }
      }
    },
    methods: {
      handleError (err) {
        this.dialog = true
        if (err.message.includes('Unexpected')) {
          this.error.title = 'Parsing error'
          this.error.message = 'Problem might have occurred because of invalid rules. Check rules for any anomalies and try again.'
          this.error.original = err.message
        } else {
          this.error.title = 'Critical error'
          this.error.message = 'An unknown error has occurred. Try again or contact the developers.'
          this.error.original = err.message
        }
      },
      drawPreset (systemName) {
        let preset = this.presets.find(x => x.name === systemName)
        this.axiom = preset.axiom
        this.rulesAmount = preset.rules.length
        this.simulationSteps = preset.steps
        this.rules = preset.rules
        this.drawSystem()
      },
      drawSystem () {
        this.createGrid()
        let rules = []
        for (let i = 0; i < this.rulesAmount; i++) {
          rules[i] = this.rules[i]
        }
        try {
          rules = lsystem.transformRules(rules)
          let out = lsystem.evolve(this.axiom, rules, this.simulationSteps)
          console.log(out)
          tur.drawSystem(out).forEach(v => this.scene.add(v))
        } catch (e) {
          this.handleError(e)
        }
      },
      createGrid () {
        while (this.scene.children.length > 0) {
          this.scene.remove(this.scene.children[0])
        }
        var helper = new THREE.GridHelper(2000, 100)
        helper.position.y = 0
        helper.material.opacity = 0.25
        helper.material.transparent = true
        this.scene.add(helper)
      },
      clearForm () {
        this.axiom = ''
        this.rulesAmount = 0
        this.simulationSteps = 0
        this.rules = []
        this.createGrid()
      }
    },
    mounted () {
      this.scene = new THREE.Scene()
      let OrbitControls = require('three-orbit-controls')(THREE)
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.set(0, 0, 100)
      camera.lookAt(0, 0, 0)
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      let canvas = renderer.domElement
      canvas.id = 'canvas'
      document.getElementById('canvas').replaceWith(canvas)
      new OrbitControls(camera, document.getElementById('canvas'))
      this.createGrid()

      let animate = function () {
        requestAnimationFrame(animate)
        renderer.render(this.scene, camera)
      }.bind(this)
      animate()
    }
  }
</script>

<style>
    html {
        margin: 0;
        height: 100vh;
        overflow: hidden;
    }

    #canvas {
        z-index: 0;
        position: relative;
    }

    .menu--content {
        z-index: 1;
        background: #2e2e2e;
        width: 320px;
        position: fixed;
        height: 100%;
        display: flex;
        transition: transform 0.2s ease-out;
    }

    .closed {
        transform: translate(-320px);
    }

    .menu--button {
        z-index: 2;
        position: absolute;
        left: 320px;
        width: 40px;
        height: 100%;
        background: lightgrey;
        border-left: 8px double #2e2e2e;
        justify-content: center;
        align-items: center;
        display: flex;
        cursor: pointer;
    }

    .height {
        height: 0;
    }

    .margin {
        margin: 0;
        padding: 0;
    }

    .list--element {
        width: 100%;
        margin: 0;
        height: 45px;
    }

    .list--title {
        text-align: center;
        font-size: 1.4rem;
        font-weight: bold;
        letter-spacing: 2px;
        color: lightgrey;
        margin: 30px 20px 20px;
    }

    .background--color {
        background: #2e2e2e !important;
    }

    .mode--switch {
        justify-content: center;
        padding-top: 20px;
    }

    .advanced--inputs {
        padding-right: 20px;
        padding-left: 20px;
    }

    .draw--button {
        background: aqua;
        margin-top: 20px;
        width: 130px;
        height: 50px;
        justify-content: center;
    }

    .scroll {
        overflow-y: auto;
    }
</style>
