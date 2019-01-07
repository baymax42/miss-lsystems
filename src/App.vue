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
        scene: null,
        isClosed: true,
        presets: [
          {
            name: '3d pitagorian tree',
            axiom: 'A(5)',
            rulesAmount: 4,
            rules: [
              'A(x) : -> F(x)[+(45)/(45)A(x)][+(45)/(-45)A(x)][+(-45)/(45)A(x)]+(-45)/(-45)A(x)',
              '+(x) : -> +(x)',
              '/(x) : -> /(x)',
              'F(x) : -> F(2*x)'
            ],
            steps: 5
          },
          {
            name: 'simple leaf',
            axiom: 'A(0)',
            rulesAmount: 5,
            rules: [
              'A(x) : x>0 -> A(x-1)',
              'A(x) : x=0 -> F(1)[+(30)/(10)A(0)][+(-30)/(10)A(0)]F(1)A(0)',
              'F(a) : -> /(-0.7)F(a*2)',
              '+(x) :-> +(x)',
              '/(x) : -> /(x)'
            ],
            steps: 6
          },
          {
            name: 'other plant',
            axiom: 'A(2)',
            rulesAmount: 4,
            rules: [
              'A(x) : -> F(x)+(25)/(10)[[A(x)]+(-25)/(-30)A(x)]+(-25)/(5)F(x)[+(-25)/(-5)F(x)A(x)]+(25)/(-20)A(x)',
              'F(x) : -> F(x)F(x)',
              '+(x) : -> +(x)',
              '/(x) : -> /(x)'
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
      drawPreset (systemName) {
        let preset = this.presets.find(x => x.name === systemName)
        this.axiom = preset.axiom
        this.rulesAmount = preset.rulesAmount
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
        rules = lsystem.transformRules(rules)
        let out = lsystem.evolve(this.axiom, rules, this.simulationSteps)
        tur.drawSystem(out).forEach(v => this.scene.add(v))
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
      console.log(this.scene, this)
      var OrbitControls = require('three-orbit-controls')(THREE)
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.set(0, 0, 100)
      camera.lookAt(0, 0, 0)
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(renderer.domElement)

      let control = new OrbitControls(camera)
      this.createGrid()

      var animate = function () {
        requestAnimationFrame(animate)
        renderer.render(this.scene, camera)
      }.bind(this)
      animate()
    }
  }
</script>

<style>
    body {
        margin: 0;
    }

    .menu--content {
        z-index: 1;
        background: #2e2e2e;
        width: 310px;
        position: fixed;
        height: 100%;
        display: flex;
        transition: transform 0.2s ease-out;
    }

    .closed {
        transform: translate(-310px);
    }

    .menu--button {
        z-index: 2;
        position: absolute;
        left: 310px;
        width: 40px;
        height: 100%;
        background: lightgrey;
        border-left: 8px double #2e2e2e;
        justify-content: center;
        align-items: center;
        display: flex;
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
        margin: 20px;
        letter-spacing: 2px;
        color: lightgrey;
        margin-top: 30px;
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
