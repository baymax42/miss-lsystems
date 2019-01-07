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
  },
  'PUSH': () => {
    return [
      'PUSH', {}
    ]
  },
  'POP': () => {
    return [
      'POP', {}
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
  '/': 'ROTX',
  '[': 'PUSH',
  ']': 'POP'
}

// Create the conversion context in format like transformedRules
// create function will produce object with type of actions and options for drawing engine
function conversionContext (transformedRules, grammar = DEFAULT_GRAMMAR, actions = DEFAULT_ACTIONS) {
  let context = {}
  context.params = null
  // iterate through registered tokens
  // that is every token with defined action
  for (let prop in grammar) {
    // if there is explicit rule then use it
    if (transformedRules[prop] instanceof Array) {
      context[prop] = []
      for (let rule of transformedRules[prop]) {
        context[prop].push({
          params: rule.params,
          create: actions[grammar[prop]],
          check: () => true
        })
      }
    } else {
      // if there is not explicit rule for registered token
      // create default rule in form: +(x, y) -> x(x, y)
      // where x, y are defined in actions
      context[prop] = [{
        params: Object.keys(actions[grammar[prop]]()[1]),
        create: actions[grammar[prop]],
        check: () => true
      }]
    }
  }
  // filter out nulls - user-defined rules for tokens without actions
  context.assemble = (array) => array.filter(v => !!v)
  // by default ignore any other tokens - do not assign any action to it
  context.defaultCreate = () => null
  return context
}

export default {
  DEFAULT_ACTIONS,
  DEFAULT_GRAMMAR,
  conversionContext
}
