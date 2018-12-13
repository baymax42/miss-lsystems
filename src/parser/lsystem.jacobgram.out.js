var lsystemParser = (function (undefined) {
function Parser(environment){
if(!(this instanceof Parser)) return new Parser(environment);
var env,modules,imports;
env=modules=imports=environment;
this.action={"0":{"0":["reduce",[2,0,5]],"4":["reduce",[2,0,5]],"8":["reduce",[2,0,5]]},"1":{"0":["accept",[]]},"2":{"0":["reduce",[1,1,0]],"4":["shift",[4]],"8":["shift",[5]]},"3":{"0":["reduce",[2,2,6]],"4":["reduce",[2,2,6]],"8":["reduce",[2,2,6]]},"4":{"5":["shift",[6]]},"5":{"0":["reduce",[3,1,2]],"4":["reduce",[3,1,2]],"8":["reduce",[3,1,2]]},"6":{"9":["shift",[8]]},"7":{"7":["shift",[9]]},"8":{"7":["reduce",[6,1,4]],"10":["shift",[10]]},"9":{"0":["reduce",[3,4,1]],"4":["reduce",[3,4,1]],"8":["reduce",[3,4,1]]},"10":{"9":["shift",[8]]},"11":{"7":["reduce",[6,3,3]]}};
this.goto={"0":{"1":1,"2":2},"2":{"3":3},"6":{"6":7},"10":{"6":11}};
this.actions=[function (productions) {
                                              return productions.join('')
                                            },function (id, _, parameters, _) {
                                              // we add parameters at front, so we need to reverse it
                                              this.params.reverse()
                                              for (rule of this[id]) {
                                                if (rule.params.length === this.params.length && rule.check(...this.params)) {
                                                  let retVal = rule.create(...this.params)
                                                  this.params = []
                                                  return retVal
                                                }
                                              }
                                              this.params = []
                                              return `${id}(${parameters})`
                                            },function (id) {
                                              return id
                                            },function (param, _, parameters) {
                                              console.log(this.params);
                                              this.params.push(param)
                                              return `${param},${parameters}`
                                            },function (param) {
                                            console.log(this.params)
                                              this.params.push(param)
                                              return param
                                            },function(){return [];},function(){
                return arguments[0].concat(Array.prototype.slice.call(arguments,1));
            }];
this.startstate=0;
this.symbolsTable={"<<EOF>>":0,"Start":1,"Repeat_0_0":2,"Statement":3,"PARAM":4,"(":5,"Parameters":6,")":7,"NONPARAM":8,"NUMBER":9,",":10};
this.actionMode='function';
}
Parser.prototype.identity=function (x) {
        "use strict";
        return x;
    };
Parser.prototype.parse=function (lexer, context) {
        this.stack = [];
        this.context =  context || {};

        this.lexer = lexer;
        this.a = this.lexer.nextToken();
        this.stack.push({s: this.startstate, i: 0});
        this.accepted = false;
        this.inerror = false;
        while (!this.accepted && !this.inerror) {
            var top = this.stack[this.stack.length - 1];
            var s = top.s;
            //this.a = this.currentToken;
            if(lexer.isEOF(this.a))
                this.an = 0;
            else
                this.an = this.symbolsTable[this.a.name];
            var action = this.action[s][this.an];
            if (action !== undefined) {
                this[action[0]].apply(this, action[1]);
            } else {
                this.inerror = true;
                this.error(this.a,this);
            }
        }
        return top.i.value;
    };
Parser.prototype.shift=function (state) {
        "use strict";
        this.stack.push({s: state, i: this.a});
        this.a = this.lexer.nextToken();

    };
Parser.prototype.reduce=function (head, length, prodindex) {
        "use strict";
        //var prod = this.productions[prodnumber];
        var self = this;
        var rhs = this.stack.splice(-length, length);
        var t = this.stack[this.stack.length - 1];
        var ns = this.goto[t.s][head];
        var value;
        if (this.actions) {
            var action = this.actions[prodindex] || this.identity;
            var values = rhs.map(function (si) {
                return si.i.value;
            });

            if(self.actionMode==='constructor')
                value =  this.create(action,values);
            else
                value =  action.apply(this.context, values);
        }
        //If we are debugging

        if(this.symbols) {
            var nt = {name: this.symbols[head].name, value:value};
            this.stack.push({s: ns, i: nt});
        }
        else
        {
            this.stack.push({s: ns,i:{value: value}});
        }

    };
Parser.prototype.accept=function () {
        "use strict";
        this.accepted = true;
    };
Parser.prototype.error=function(token){
        if(typeof token === 'string')
        {
            throw Error(token);
        }
        if(this.lexer.isEOF(token)){
            throw Error("Unexpected EOF at "+this.lexer.jjline+':'+this.lexer.jjcol);
        } else
        throw Error('Unexpected token '+token.name+' "'+token.lexeme+'" at ('+token.pos.line+':'+token.pos.col+')');
    };
Parser.prototype.create=function(ctor,args){
        var args = [this.context].concat(args);
        var factory = ctor.bind.apply(ctor,args);
        return new factory();
    };
if (typeof(module) !== 'undefined') { module.exports = Parser; }
return Parser;
})();