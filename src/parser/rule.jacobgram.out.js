var lsystemRuleParser = (function (undefined) {
function Parser(environment){
if(!(this instanceof Parser)) return new Parser(environment);
var env,modules,imports;
env=modules=imports=environment;
this.action={"0":{"7":["shift",[3]]},"1":{"0":["accept",[]]},"2":{"3":["shift",[4]]},"3":{"8":["shift",[5]]},"4":{"5":["reduce",[4,0,21]],"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"5":{"11":["shift",[15]]},"6":{"5":["shift",[16]]},"7":{"5":["reduce",[4,1,22]]},"8":{"15":["shift",[17]],"16":["shift",[18]],"17":["shift",[19]],"18":["shift",[20]],"19":["shift",[21]],"20":["shift",[22]],"21":["shift",[23]],"22":["shift",[24]],"23":["shift",[25]],"24":["shift",[26]],"25":["shift",[27]]},"9":{"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"10":{"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"11":{"5":["reduce",[14,1,17]],"10":["reduce",[14,1,17]],"12":["reduce",[14,1,17]],"15":["reduce",[14,1,17]],"16":["reduce",[14,1,17]],"17":["reduce",[14,1,17]],"18":["reduce",[14,1,17]],"19":["reduce",[14,1,17]],"20":["reduce",[14,1,17]],"21":["reduce",[14,1,17]],"22":["reduce",[14,1,17]],"23":["reduce",[14,1,17]],"24":["reduce",[14,1,17]],"25":["reduce",[14,1,17]]},"12":{"5":["reduce",[26,1,25]],"10":["reduce",[26,1,25]],"12":["reduce",[26,1,25]],"15":["reduce",[26,1,25]],"16":["reduce",[26,1,25]],"17":["reduce",[26,1,25]],"18":["reduce",[26,1,25]],"19":["reduce",[26,1,25]],"20":["reduce",[26,1,25]],"21":["reduce",[26,1,25]],"22":["reduce",[26,1,25]],"23":["reduce",[26,1,25]],"24":["reduce",[26,1,25]],"25":["reduce",[26,1,25]]},"13":{"5":["reduce",[26,1,26]],"10":["reduce",[26,1,26]],"12":["reduce",[26,1,26]],"15":["reduce",[26,1,26]],"16":["reduce",[26,1,26]],"17":["reduce",[26,1,26]],"18":["reduce",[26,1,26]],"19":["reduce",[26,1,26]],"20":["reduce",[26,1,26]],"21":["reduce",[26,1,26]],"22":["reduce",[26,1,26]],"23":["reduce",[26,1,26]],"24":["reduce",[26,1,26]],"25":["reduce",[26,1,26]]},"14":{"10":["shift",[30]]},"15":{"10":["reduce",[9,1,3]],"12":["shift",[31]]},"16":{"0":["reduce",[6,0,23]],"7":["reduce",[6,0,23]]},"17":{"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"18":{"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"19":{"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"20":{"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"21":{"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"22":{"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"23":{"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"24":{"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"25":{"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"26":{"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"27":{"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"28":{"10":["shift",[44]],"21":["shift",[23]],"22":["shift",[24]],"23":["shift",[25]],"24":["shift",[26]],"25":["shift",[27]]},"29":{"5":["reduce",[14,2,16]],"10":["reduce",[14,2,16]],"12":["reduce",[14,2,16]],"15":["reduce",[14,2,16]],"16":["reduce",[14,2,16]],"17":["reduce",[14,2,16]],"18":["reduce",[14,2,16]],"19":["reduce",[14,2,16]],"20":["reduce",[14,2,16]],"21":["shift",[23]],"22":["reduce",[14,2,16]],"23":["reduce",[14,2,16]],"24":["shift",[26]],"25":["shift",[27]]},"30":{"3":["reduce",[2,4,1]]},"31":{"11":["shift",[15]]},"32":{"0":["reduce",[1,5,0]],"7":["shift",[47]]},"33":{"5":["reduce",[13,3,4]],"21":["shift",[23]],"22":["shift",[24]],"23":["shift",[25]],"24":["shift",[26]],"25":["shift",[27]]},"34":{"5":["reduce",[13,3,5]],"21":["shift",[23]],"22":["shift",[24]],"23":["shift",[25]],"24":["shift",[26]],"25":["shift",[27]]},"35":{"5":["reduce",[13,3,6]],"21":["shift",[23]],"22":["shift",[24]],"23":["shift",[25]],"24":["shift",[26]],"25":["shift",[27]]},"36":{"5":["reduce",[13,3,7]],"21":["shift",[23]],"22":["shift",[24]],"23":["shift",[25]],"24":["shift",[26]],"25":["shift",[27]]},"37":{"5":["reduce",[13,3,8]],"21":["shift",[23]],"22":["shift",[24]],"23":["shift",[25]],"24":["shift",[26]],"25":["shift",[27]]},"38":{"5":["reduce",[13,3,9]],"21":["shift",[23]],"22":["shift",[24]],"23":["shift",[25]],"24":["shift",[26]],"25":["shift",[27]]},"39":{"5":["reduce",[14,3,10]],"10":["reduce",[14,3,10]],"12":["reduce",[14,3,10]],"15":["reduce",[14,3,10]],"16":["reduce",[14,3,10]],"17":["reduce",[14,3,10]],"18":["reduce",[14,3,10]],"19":["reduce",[14,3,10]],"20":["reduce",[14,3,10]],"21":["shift",[23]],"22":["reduce",[14,3,10]],"23":["reduce",[14,3,10]],"24":["reduce",[14,3,10]],"25":["reduce",[14,3,10]]},"40":{"5":["reduce",[14,3,11]],"10":["reduce",[14,3,11]],"12":["reduce",[14,3,11]],"15":["reduce",[14,3,11]],"16":["reduce",[14,3,11]],"17":["reduce",[14,3,11]],"18":["reduce",[14,3,11]],"19":["reduce",[14,3,11]],"20":["reduce",[14,3,11]],"21":["shift",[23]],"22":["reduce",[14,3,11]],"23":["reduce",[14,3,11]],"24":["shift",[26]],"25":["shift",[27]]},"41":{"5":["reduce",[14,3,12]],"10":["reduce",[14,3,12]],"12":["reduce",[14,3,12]],"15":["reduce",[14,3,12]],"16":["reduce",[14,3,12]],"17":["reduce",[14,3,12]],"18":["reduce",[14,3,12]],"19":["reduce",[14,3,12]],"20":["reduce",[14,3,12]],"21":["shift",[23]],"22":["reduce",[14,3,12]],"23":["reduce",[14,3,12]],"24":["shift",[26]],"25":["shift",[27]]},"42":{"5":["reduce",[14,3,13]],"10":["reduce",[14,3,13]],"12":["reduce",[14,3,13]],"15":["reduce",[14,3,13]],"16":["reduce",[14,3,13]],"17":["reduce",[14,3,13]],"18":["reduce",[14,3,13]],"19":["reduce",[14,3,13]],"20":["reduce",[14,3,13]],"21":["shift",[23]],"22":["reduce",[14,3,13]],"23":["reduce",[14,3,13]],"24":["reduce",[14,3,13]],"25":["reduce",[14,3,13]]},"43":{"5":["reduce",[14,3,14]],"10":["reduce",[14,3,14]],"12":["reduce",[14,3,14]],"15":["reduce",[14,3,14]],"16":["reduce",[14,3,14]],"17":["reduce",[14,3,14]],"18":["reduce",[14,3,14]],"19":["reduce",[14,3,14]],"20":["reduce",[14,3,14]],"21":["shift",[23]],"22":["reduce",[14,3,14]],"23":["reduce",[14,3,14]],"24":["reduce",[14,3,14]],"25":["reduce",[14,3,14]]},"44":{"5":["reduce",[14,3,15]],"10":["reduce",[14,3,15]],"12":["reduce",[14,3,15]],"15":["reduce",[14,3,15]],"16":["reduce",[14,3,15]],"17":["reduce",[14,3,15]],"18":["reduce",[14,3,15]],"19":["reduce",[14,3,15]],"20":["reduce",[14,3,15]],"21":["reduce",[14,3,15]],"22":["reduce",[14,3,15]],"23":["reduce",[14,3,15]],"24":["reduce",[14,3,15]],"25":["reduce",[14,3,15]]},"45":{"10":["reduce",[9,3,2]]},"46":{"0":["reduce",[6,2,24]],"7":["reduce",[6,2,24]]},"47":{"8":["shift",[48]]},"48":{"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"49":{"10":["shift",[51]]},"50":{"10":["reduce",[28,1,20]],"12":["shift",[52]],"21":["shift",[23]],"22":["shift",[24]],"23":["shift",[25]],"24":["shift",[26]],"25":["shift",[27]]},"51":{"0":["reduce",[27,4,18]],"7":["reduce",[27,4,18]]},"52":{"8":["shift",[9]],"11":["shift",[13]],"23":["shift",[10]],"29":["shift",[12]]},"53":{"10":["reduce",[28,3,19]]}};
this.goto={"0":{"1":1,"2":2},"4":{"4":6,"13":7,"14":8,"26":11},"5":{"9":14},"9":{"14":28,"26":11},"10":{"14":29,"26":11},"16":{"6":32},"17":{"14":33,"26":11},"18":{"14":34,"26":11},"19":{"14":35,"26":11},"20":{"14":36,"26":11},"21":{"14":37,"26":11},"22":{"14":38,"26":11},"23":{"14":39,"26":11},"24":{"14":40,"26":11},"25":{"14":41,"26":11},"26":{"14":42,"26":11},"27":{"14":43,"26":11},"31":{"9":45},"32":{"27":46},"48":{"14":50,"26":11,"28":49},"52":{"14":50,"26":11,"28":53}};
this.actions=[function (v, _, _, _, body) {
                                              this.create = new Function(
                                                ...this.params,
                                                `return [${body}].map((v => v(...[${this.params}]))).join('')`
                                              )
                                              return v
                                            },function (id, _, _, _) {
                                              // we add parameters at front, so we need to reverse it
                                              this.params.reverse()
                                              return id
                                            },function (param) {
                                              this.params.push(param)
                                            },function (param) {
                                              this.params.push(param)
                                            },function (e1, _, e2) {
                                              this.check = new Function(
                                                ...this.params,
                                                `return ${e1} !== ${e2}`
                                              )
                                            },function (e1, _, e2) {
                                              this.check = new Function(
                                                ...this.params,
                                                `return ${e1} >= ${e2}`
                                              )
                                            },function (e1, _, e2) {
                                              this.check = new Function(
                                                ...this.params,
                                                `return ${e1} <= ${e2}`
                                              )
                                            },function (e1, _, e2) {
                                              this.check = new Function(
                                                ...this.params,
                                                `return ${e1} > ${e2}`
                                              )
                                            },function (e1, _, e2) {
                                              this.check = new Function(
                                                ...this.params,
                                                `return ${e1} < ${e2}`
                                              )
                                            },function (e1, _, e2) {
                                              this.check = new Function(
                                                ...this.params,
                                                `return ${e1} === ${e2}`
                                              )
                                            },function (e1, _, e2) {
                                              return `Math.pow(${e1}, ${e2})`
                                            },function (e1, _, e2) {
                                              return `${e1} + ${e2}`
                                            },function (e1, _, e2) {
                                              return `${e1} - ${e2}`
                                            },function (e1, _, e2) {
                                              return `${e1} * ${e2}`
                                            },function (e1, _, e2) {
                                              return `${e1} / ${e2}`
                                            },function (_, e1) {
                                              return `(${e1})`
                                            },function (_, e1) {
                                              return `(-${e1})`
                                            },function (v) { return v },function (id, _, params) {
                                              return new Function(
                                                ...this.params,
                                                `return '${id}(' + ${params} + ')'`
                                              )
                                            },function (exp, _, parameters) {
                                              return `Number(${exp})+','+${parameters}`
                                            },function (exp) {
                                              console.log(exp)
                                              return `Number(${exp})`
                                            },function () {
                return undefined;
            },function () {
                return arguments[0];
            },function(){return [];},function(){
                return arguments[0].concat(Array.prototype.slice.call(arguments,1));
            },function () {
                    return arguments[0];
                },function () {
                    return arguments[0];
                }];
this.startstate=0;
this.symbolsTable={"<<EOF>>":0,"Start":1,"Statement":2,":":3,"Optional_0_0":4,"ARROW":5,"Repeat_0_2":6,"TOKEN":7,"(":8,"Parameters":9,")":10,"VAR":11,",":12,"Predicate":13,"Expression":14,"NEQ":15,"GTE":16,"LTE":17,">":18,"<":19,"=":20,"^":21,"+":22,"-":23,"*":24,"/":25,"Group17_4":26,"Body":27,"ExpParameter":28,"NUMBER":29};
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