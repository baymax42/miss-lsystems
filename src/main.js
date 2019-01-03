// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import lsystem from './parser'

Vue.config.productionTip = false

let tRules = lsystem.transformRules([
  'F(x, a) : x <= 0 -> F(0, a)',
  'F(x, a) : x > 0 -> F(x - 1, x * a)'
])

let out = lsystem.evolve('F(-5, -1)F(6, 1)', tRules, 5)
console.log(out)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
