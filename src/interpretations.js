/* eslint-disable no-new-func */

// Definition of default actions with default options
// Functions here must accept variable amount of parameters
const DEFAULT_ACTIONS = {
  'DRAW': (...args) => {
    return [
      'DRAW', {
        'length': args[0] || 10,
        'width': args[1] || 1
      }
    ]
  },
  'MOVE': (...args) => {
    return [
      'MOVE', {
        'length': args[0] || 10
      }
    ]
  },
  'ROTX': (...args) => {
    return [
      'ROTX', {
        'angle': args[0] || 0
      }
    ]
  },
  'ROTY': (...args) => {
    return [
      'ROTY', {
        'angle': args[0] || 0
      }
    ]
  },
  'ROTZ': (...args) => {
    return [
      'ROTZ', {
        'angle': args[0] || 0
      }
    ]
  }
}

// Default grammar with corresponding interpretation
// This is object is need to properly transform l-system
const DEFAULT_GRAMMAR = {
  'F': 'DRAW',
  'f': 'MOVE',
  '+': 'ROTZ',
  '&': 'ROTY',
  '\\': 'ROTX'
}

// Create the conversion context in format like transformedRules
// create function will produce object with type of actions and options for drawing engine
function conversionContext (transformedRules, grammar = DEFAULT_GRAMMAR, actions = DEFAULT_ACTIONS) {
  let context = {}
  context.params = null
  for (let prop in transformedRules) {
    if (transformedRules[prop] instanceof Array) {
      context[prop] = []
      for (let rule of transformedRules[prop]) {
        context[prop].push({
          params: rule.params,
          create: actions[grammar[prop]],
          check: () => true
        })
      }
    }
  }
  context.assemble = (array) => array
  return context
}

export default {
  DEFAULT_ACTIONS,
  DEFAULT_GRAMMAR,
  conversionContext
}
