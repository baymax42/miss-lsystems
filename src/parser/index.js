import conversion from '../interpretations'

const RuleLexer = require('./rule.jacoblex.out')
const RuleParser = require('./rule.jacobgram.out')
const SystemLexer = require('./lsystem.jacoblex.out')
const SystemParser = require('./lsystem.jacobgram.out')

// Concrete parser and lexer for rules
const ruleLexer = new RuleLexer()
const ruleParser = new RuleParser()

// Concrete parser and lexer for generating systems
const systemLexer = new SystemLexer()
const systemParser = new SystemParser()

// Context produced by below functions is of form:
//
// context = {
// <token>: [
//      {
//        params // parameters for this token
//        create // function returning content of production rule
//        check  // function checking if parameters are meeting condition
//      }
//    ],
//    assemble   // function used at the end of parsing for assembling all results from 'create' functions
//  }
//
//  For each token parser iterates through this context and checks
//  if found token meets conditions: check function and number of parameters.
//
//  Similar context is used to transform result of parsing
//  to more computer friendly format used by drawing engine.
//

// Parse one rule string and return object with actions for given token
//  {
//    params: array    # parameters for this token
//    create: function # function returning content of production rule
//    check: function  # function checking if parameters are meeting condition
//  }
function digestRule (ruleStr) {
  let context = {
    params: [],
    create: null,
    check: null
  }
  ruleLexer.setInput(ruleStr)
  let token = ruleParser.parse(ruleLexer, context)
  return [token, context]
}

// Parse array of rules
//  array # array of parsed rules
function transformRules (rules) {
  let parserContext = {}
  for (let rule of rules) {
    let result = digestRule(rule)
    if (parserContext[result[0]] == null) {
      parserContext[result[0]] = []
    }
    parserContext[result[0]].push(result[1])
  }
  parserContext.assemble = (array) => array.join('')
  parserContext.defaultCreate = (id, params) => `${id}(${params})`
  return parserContext
}

// Make one iteration of word with set of rules
//  string # result for given ruleset
function iterateSystem (system, parserContext) {
  parserContext.params = []
  systemLexer.setInput(system)
  return systemParser.parse(systemLexer, parserContext)
}

// Iterate 'iterations' times generating system from given ruleset
function evolve (axiom, transformedRules, iterations) {
  let system = axiom
  while (iterations-- > 0) {
    system = iterateSystem(system, transformedRules)
  }
  return iterateSystem(system, conversion.conversionContext(transformedRules))
}

export default {
  _ruleLexer: ruleLexer,
  _ruleParser: ruleParser,
  _systemLexer: systemLexer,
  _systemParser: systemParser,
  _digestRule: digestRule,
  transformRules,
  iterateSystem,
  evolve
}
