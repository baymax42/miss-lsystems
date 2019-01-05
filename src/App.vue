<template>
  <div class="canvas"></div>
</template>

<script>
  import tur from './turtle'
  import lsystem from './parser'

  let tRules = lsystem.transformRules([
    'A(x) : -> F(x)[+(45)/(45)A(x)][+(45)/(-45)A(x)][+(-45)/(45)A(x)]+(-45)/(-45)A(x)',
    '+(x) : -> +(x)',
    '/(x) : -> /(x)',
    'F(x) : -> F(2*x)'
  ])

  let out = lsystem.evolve('A(5)', tRules, 6)
  console.log(out)
  export default {
    name: 'App',
    created () {
      let THREE = require('three')
      var OrbitControls = require('three-orbit-controls')(THREE)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.set(0, 0, 100)
      camera.lookAt(0, 0, 0)
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(renderer.domElement)

      let control = new OrbitControls(camera)
      var helper = new THREE.GridHelper(2000, 100)
      helper.position.y = 0
      helper.material.opacity = 0.25
      helper.material.transparent = true
      scene.add(helper)
      tur.drawSystem(out).forEach(v => scene.add(v))

      var animate = function () {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
      }
      animate()
    }
  }
</script>

<style>
  .canvas{
    width: 100%;
    height: 100%;
  }
  body{
    margin: 0;
  }
</style>
