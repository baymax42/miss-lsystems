const RuleLexer = require('./rule.jacoblex.out')
const RuleParser = require('./rule.jacobgram.out')
const SystemLexer = require('./lsystem.jacoblex.out')
const SystemParser = require('./lsystem.jacobgram.out')

const ruleLexer = new RuleLexer()
const ruleParser = new RuleParser()

const systemLexer = new SystemLexer()
const systemParser = new SystemParser()

function digestRule (ruleStr) {
  let context = {
    params: []
  }
  ruleLexer.setInput(ruleStr)
  let token = ruleParser.parse(ruleLexer, context)
  return [token, context]
}

function transformRules (rules) {
  let parserContext = {}
  for (let rule of rules) {
    let result = digestRule(rule)
    if (parserContext[result[0]] == null) {
      parserContext[result[0]] = []
    }
    parserContext[result[0]].push(result[1])
  }
  return parserContext
}

function iterateSystem (system, parserContext) {
  parserContext.params = []
  systemLexer.setInput(system)
  return systemParser.parse(systemLexer, parserContext)
}

function evolve (axiom, transformedRules, iterations) {
  let system = axiom
  while (iterations-- > 0) {
    console.log(system)
    system = iterateSystem(system, transformedRules)
  }
  return system
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
