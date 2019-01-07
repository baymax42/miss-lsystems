var lsystemRuleParser = (function (undefined) {
function Parser(environment){
if(!(this instanceof Parser)) return new Parser(environment);
var env,modules,imports;
env=modules=imports=environment;
this.action={"0":{"6":["shift",[3]]},"1":{"0":["accept",[]]},"2":{"4":["reduce",[3,0,22]],"28":["shift",[5]]},"3":{"7":["shift",[6]]},"4":{"4":["shift",[7]]},"5":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"6":{"10":["shift",[16]]},"7":{"0":["reduce",[5,0,24]],"6":["reduce",[5,0,24]]},"8":{"4":["reduce",[3,2,23]]},"9":{"14":["shift",[18]],"15":["shift",[19]],"16":["shift",[20]],"17":["shift",[21]],"18":["shift",[22]],"19":["shift",[23]],"20":["shift",[24]],"21":["shift",[25]],"22":["shift",[26]],"23":["shift",[27]],"24":["shift",[28]]},"10":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"11":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"12":{"4":["reduce",[13,1,17]],"9":["reduce",[13,1,17]],"11":["reduce",[13,1,17]],"14":["reduce",[13,1,17]],"15":["reduce",[13,1,17]],"16":["reduce",[13,1,17]],"17":["reduce",[13,1,17]],"18":["reduce",[13,1,17]],"19":["reduce",[13,1,17]],"20":["reduce",[13,1,17]],"21":["reduce",[13,1,17]],"22":["reduce",[13,1,17]],"23":["reduce",[13,1,17]],"24":["reduce",[13,1,17]]},"13":{"4":["reduce",[25,1,26]],"9":["reduce",[25,1,26]],"11":["reduce",[25,1,26]],"14":["reduce",[25,1,26]],"15":["reduce",[25,1,26]],"16":["reduce",[25,1,26]],"17":["reduce",[25,1,26]],"18":["reduce",[25,1,26]],"19":["reduce",[25,1,26]],"20":["reduce",[25,1,26]],"21":["reduce",[25,1,26]],"22":["reduce",[25,1,26]],"23":["reduce",[25,1,26]],"24":["reduce",[25,1,26]]},"14":{"4":["reduce",[25,1,27]],"9":["reduce",[25,1,27]],"11":["reduce",[25,1,27]],"14":["reduce",[25,1,27]],"15":["reduce",[25,1,27]],"16":["reduce",[25,1,27]],"17":["reduce",[25,1,27]],"18":["reduce",[25,1,27]],"19":["reduce",[25,1,27]],"20":["reduce",[25,1,27]],"21":["reduce",[25,1,27]],"22":["reduce",[25,1,27]],"23":["reduce",[25,1,27]],"24":["reduce",[25,1,27]]},"15":{"9":["shift",[31]]},"16":{"9":["reduce",[8,1,3]],"11":["shift",[32]]},"17":{"0":["reduce",[1,4,0]],"6":["shift",[34]]},"18":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"19":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"20":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"21":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"22":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"23":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"24":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"25":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"26":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"27":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"28":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"29":{"9":["shift",[46]],"20":["shift",[24]],"21":["shift",[25]],"22":["shift",[26]],"23":["shift",[27]],"24":["shift",[28]]},"30":{"4":["reduce",[13,2,16]],"9":["reduce",[13,2,16]],"11":["reduce",[13,2,16]],"14":["reduce",[13,2,16]],"15":["reduce",[13,2,16]],"16":["reduce",[13,2,16]],"17":["reduce",[13,2,16]],"18":["reduce",[13,2,16]],"19":["reduce",[13,2,16]],"20":["shift",[24]],"21":["reduce",[13,2,16]],"22":["reduce",[13,2,16]],"23":["shift",[27]],"24":["shift",[28]]},"31":{"4":["reduce",[2,4,1]],"28":["reduce",[2,4,1]]},"32":{"10":["shift",[16]]},"33":{"0":["reduce",[5,2,25]],"6":["reduce",[5,2,25]]},"34":{"0":["reduce",[26,1,19]],"6":["reduce",[26,1,19]],"7":["shift",[48]]},"35":{"4":["reduce",[12,3,4]],"20":["shift",[24]],"21":["shift",[25]],"22":["shift",[26]],"23":["shift",[27]],"24":["shift",[28]]},"36":{"4":["reduce",[12,3,5]],"20":["shift",[24]],"21":["shift",[25]],"22":["shift",[26]],"23":["shift",[27]],"24":["shift",[28]]},"37":{"4":["reduce",[12,3,6]],"20":["shift",[24]],"21":["shift",[25]],"22":["shift",[26]],"23":["shift",[27]],"24":["shift",[28]]},"38":{"4":["reduce",[12,3,7]],"20":["shift",[24]],"21":["shift",[25]],"22":["shift",[26]],"23":["shift",[27]],"24":["shift",[28]]},"39":{"4":["reduce",[12,3,8]],"20":["shift",[24]],"21":["shift",[25]],"22":["shift",[26]],"23":["shift",[27]],"24":["shift",[28]]},"40":{"4":["reduce",[12,3,9]],"20":["shift",[24]],"21":["shift",[25]],"22":["shift",[26]],"23":["shift",[27]],"24":["shift",[28]]},"41":{"4":["reduce",[13,3,10]],"9":["reduce",[13,3,10]],"11":["reduce",[13,3,10]],"14":["reduce",[13,3,10]],"15":["reduce",[13,3,10]],"16":["reduce",[13,3,10]],"17":["reduce",[13,3,10]],"18":["reduce",[13,3,10]],"19":["reduce",[13,3,10]],"20":["shift",[24]],"21":["reduce",[13,3,10]],"22":["reduce",[13,3,10]],"23":["reduce",[13,3,10]],"24":["reduce",[13,3,10]]},"42":{"4":["reduce",[13,3,11]],"9":["reduce",[13,3,11]],"11":["reduce",[13,3,11]],"14":["reduce",[13,3,11]],"15":["reduce",[13,3,11]],"16":["reduce",[13,3,11]],"17":["reduce",[13,3,11]],"18":["reduce",[13,3,11]],"19":["reduce",[13,3,11]],"20":["shift",[24]],"21":["reduce",[13,3,11]],"22":["reduce",[13,3,11]],"23":["shift",[27]],"24":["shift",[28]]},"43":{"4":["reduce",[13,3,12]],"9":["reduce",[13,3,12]],"11":["reduce",[13,3,12]],"14":["reduce",[13,3,12]],"15":["reduce",[13,3,12]],"16":["reduce",[13,3,12]],"17":["reduce",[13,3,12]],"18":["reduce",[13,3,12]],"19":["reduce",[13,3,12]],"20":["shift",[24]],"21":["reduce",[13,3,12]],"22":["reduce",[13,3,12]],"23":["shift",[27]],"24":["shift",[28]]},"44":{"4":["reduce",[13,3,13]],"9":["reduce",[13,3,13]],"11":["reduce",[13,3,13]],"14":["reduce",[13,3,13]],"15":["reduce",[13,3,13]],"16":["reduce",[13,3,13]],"17":["reduce",[13,3,13]],"18":["reduce",[13,3,13]],"19":["reduce",[13,3,13]],"20":["shift",[24]],"21":["reduce",[13,3,13]],"22":["reduce",[13,3,13]],"23":["reduce",[13,3,13]],"24":["reduce",[13,3,13]]},"45":{"4":["reduce",[13,3,14]],"9":["reduce",[13,3,14]],"11":["reduce",[13,3,14]],"14":["reduce",[13,3,14]],"15":["reduce",[13,3,14]],"16":["reduce",[13,3,14]],"17":["reduce",[13,3,14]],"18":["reduce",[13,3,14]],"19":["reduce",[13,3,14]],"20":["shift",[24]],"21":["reduce",[13,3,14]],"22":["reduce",[13,3,14]],"23":["reduce",[13,3,14]],"24":["reduce",[13,3,14]]},"46":{"4":["reduce",[13,3,15]],"9":["reduce",[13,3,15]],"11":["reduce",[13,3,15]],"14":["reduce",[13,3,15]],"15":["reduce",[13,3,15]],"16":["reduce",[13,3,15]],"17":["reduce",[13,3,15]],"18":["reduce",[13,3,15]],"19":["reduce",[13,3,15]],"20":["reduce",[13,3,15]],"21":["reduce",[13,3,15]],"22":["reduce",[13,3,15]],"23":["reduce",[13,3,15]],"24":["reduce",[13,3,15]]},"47":{"9":["reduce",[8,3,2]]},"48":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"49":{"9":["shift",[51]]},"50":{"9":["reduce",[27,1,21]],"11":["shift",[52]],"20":["shift",[24]],"21":["shift",[25]],"22":["shift",[26]],"23":["shift",[27]],"24":["shift",[28]]},"51":{"0":["reduce",[26,4,18]],"6":["reduce",[26,4,18]]},"52":{"7":["shift",[10]],"10":["shift",[14]],"22":["shift",[11]],"29":["shift",[13]]},"53":{"9":["reduce",[27,3,20]]}};
this.goto={"0":{"1":1,"2":2},"2":{"3":4},"5":{"12":8,"13":9,"25":12},"6":{"8":15},"7":{"5":17},"10":{"13":29,"25":12},"11":{"13":30,"25":12},"17":{"26":33},"18":{"13":35,"25":12},"19":{"13":36,"25":12},"20":{"13":37,"25":12},"21":{"13":38,"25":12},"22":{"13":39,"25":12},"23":{"13":40,"25":12},"24":{"13":41,"25":12},"25":{"13":42,"25":12},"26":{"13":43,"25":12},"27":{"13":44,"25":12},"28":{"13":45,"25":12},"32":{"8":47},"48":{"13":50,"25":12,"27":49},"52":{"13":50,"25":12,"27":53}};
this.actions=[function (v, _, _, body) {
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
                                            },function (id) {
                                              return new Function(
                                                [],
                                                `return '${id}'`
                                              )
                                            },function (exp, _, parameters) {
                                              return `Number(${exp})+','+${parameters}`
                                            },function (exp) {
                                              return `Number(${exp})`
                                            },function () {
                return [];
            },function () {
                return [].slice.apply(arguments);
            },function(){return [];},function(){
                return arguments[0].concat(Array.prototype.slice.call(arguments,1));
            },function () {
                    return arguments[0];
                },function () {
                    return arguments[0];
                }];
this.startstate=0;
this.symbolsTable={"<<EOF>>":0,"Start":1,"Statement":2,"Optional_0_0":3,"ARROW":4,"Repeat_0_2":5,"TOKEN":6,"(":7,"Parameters":8,")":9,"VAR":10,",":11,"Predicate":12,"Expression":13,"NEQ":14,"GTE":15,"LTE":16,">":17,"<":18,"=":19,"^":20,"+":21,"-":22,"*":23,"/":24,"Group17_4":25,"Body":26,"ExpParameter":27,":":28,"NUMBER":29};
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