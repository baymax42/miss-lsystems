// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import lsystem from './parser'

Vue.config.productionTip = false

let tRules = lsystem.transformRules(['F(x, y) : (2+2)^3!=10 -> F(x + 5, y ^ 2)F(y, x)'])
let out = lsystem.evolve('F(1, 2)', tRules, 2)
console.log(out)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
