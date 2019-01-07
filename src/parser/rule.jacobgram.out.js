var lsystemRuleParser = (function (undefined) {
function Parser(environment){
if(!(this instanceof Parser)) return new Parser(environment);
var env,modules,imports;
env=modules=imports=environment;
this.action={"0":{"6":["shift",[3]]},"1":{"0":["accept",[]]},"2":{"4":["reduce",[3,0,25]],"31":["shift",[5]]},"3":{"7":["shift",[6]]},"4":{"4":["shift",[7]]},"5":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"6":{"10":["shift",[17]]},"7":{"0":["reduce",[5,0,27]],"6":["reduce",[5,0,27]]},"8":{"4":["reduce",[3,2,26]]},"9":{"4":["reduce",[12,1,6]],"14":["shift",[19]],"15":["shift",[20]]},"10":{"17":["shift",[21]],"18":["shift",[22]],"19":["shift",[23]],"20":["shift",[24]],"21":["shift",[25]],"22":["shift",[26]],"23":["shift",[27]],"24":["shift",[28]],"25":["shift",[29]],"26":["shift",[30]],"27":["shift",[31]]},"11":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"12":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"13":{"4":["reduce",[16,1,20]],"9":["reduce",[16,1,20]],"11":["reduce",[16,1,20]],"14":["reduce",[16,1,20]],"15":["reduce",[16,1,20]],"17":["reduce",[16,1,20]],"18":["reduce",[16,1,20]],"19":["reduce",[16,1,20]],"20":["reduce",[16,1,20]],"21":["reduce",[16,1,20]],"22":["reduce",[16,1,20]],"23":["reduce",[16,1,20]],"24":["reduce",[16,1,20]],"25":["reduce",[16,1,20]],"26":["reduce",[16,1,20]],"27":["reduce",[16,1,20]]},"14":{"4":["reduce",[28,1,29]],"9":["reduce",[28,1,29]],"11":["reduce",[28,1,29]],"14":["reduce",[28,1,29]],"15":["reduce",[28,1,29]],"17":["reduce",[28,1,29]],"18":["reduce",[28,1,29]],"19":["reduce",[28,1,29]],"20":["reduce",[28,1,29]],"21":["reduce",[28,1,29]],"22":["reduce",[28,1,29]],"23":["reduce",[28,1,29]],"24":["reduce",[28,1,29]],"25":["reduce",[28,1,29]],"26":["reduce",[28,1,29]],"27":["reduce",[28,1,29]]},"15":{"4":["reduce",[28,1,30]],"9":["reduce",[28,1,30]],"11":["reduce",[28,1,30]],"14":["reduce",[28,1,30]],"15":["reduce",[28,1,30]],"17":["reduce",[28,1,30]],"18":["reduce",[28,1,30]],"19":["reduce",[28,1,30]],"20":["reduce",[28,1,30]],"21":["reduce",[28,1,30]],"22":["reduce",[28,1,30]],"23":["reduce",[28,1,30]],"24":["reduce",[28,1,30]],"25":["reduce",[28,1,30]],"26":["reduce",[28,1,30]],"27":["reduce",[28,1,30]]},"16":{"9":["shift",[34]]},"17":{"9":["reduce",[8,1,3]],"11":["shift",[35]]},"18":{"0":["reduce",[1,4,0]],"6":["shift",[37]]},"19":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"20":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"21":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"22":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"23":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"24":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"25":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"26":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"27":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"28":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"29":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"30":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"31":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"32":{"9":["shift",[51]],"23":["shift",[27]],"24":["shift",[28]],"25":["shift",[29]],"26":["shift",[30]],"27":["shift",[31]]},"33":{"4":["reduce",[16,2,19]],"9":["reduce",[16,2,19]],"11":["reduce",[16,2,19]],"14":["reduce",[16,2,19]],"15":["reduce",[16,2,19]],"17":["reduce",[16,2,19]],"18":["reduce",[16,2,19]],"19":["reduce",[16,2,19]],"20":["reduce",[16,2,19]],"21":["reduce",[16,2,19]],"22":["reduce",[16,2,19]],"23":["shift",[27]],"24":["reduce",[16,2,19]],"25":["reduce",[16,2,19]],"26":["shift",[30]],"27":["shift",[31]]},"34":{"4":["reduce",[2,4,1]],"31":["reduce",[2,4,1]]},"35":{"10":["shift",[17]]},"36":{"0":["reduce",[5,2,28]],"6":["reduce",[5,2,28]]},"37":{"0":["reduce",[29,1,22]],"6":["reduce",[29,1,22]],"7":["shift",[53]]},"38":{"4":["reduce",[12,3,4]]},"39":{"4":["reduce",[12,3,5]]},"40":{"4":["reduce",[13,3,7]],"14":["reduce",[13,3,7]],"15":["reduce",[13,3,7]],"23":["shift",[27]],"24":["shift",[28]],"25":["shift",[29]],"26":["shift",[30]],"27":["shift",[31]]},"41":{"4":["reduce",[13,3,8]],"14":["reduce",[13,3,8]],"15":["reduce",[13,3,8]],"23":["shift",[27]],"24":["shift",[28]],"25":["shift",[29]],"26":["shift",[30]],"27":["shift",[31]]},"42":{"4":["reduce",[13,3,9]],"14":["reduce",[13,3,9]],"15":["reduce",[13,3,9]],"23":["shift",[27]],"24":["shift",[28]],"25":["shift",[29]],"26":["shift",[30]],"27":["shift",[31]]},"43":{"4":["reduce",[13,3,10]],"14":["reduce",[13,3,10]],"15":["reduce",[13,3,10]],"23":["shift",[27]],"24":["shift",[28]],"25":["shift",[29]],"26":["shift",[30]],"27":["shift",[31]]},"44":{"4":["reduce",[13,3,11]],"14":["reduce",[13,3,11]],"15":["reduce",[13,3,11]],"23":["shift",[27]],"24":["shift",[28]],"25":["shift",[29]],"26":["shift",[30]],"27":["shift",[31]]},"45":{"4":["reduce",[13,3,12]],"14":["reduce",[13,3,12]],"15":["reduce",[13,3,12]],"23":["shift",[27]],"24":["shift",[28]],"25":["shift",[29]],"26":["shift",[30]],"27":["shift",[31]]},"46":{"4":["reduce",[16,3,13]],"9":["reduce",[16,3,13]],"11":["reduce",[16,3,13]],"14":["reduce",[16,3,13]],"15":["reduce",[16,3,13]],"17":["reduce",[16,3,13]],"18":["reduce",[16,3,13]],"19":["reduce",[16,3,13]],"20":["reduce",[16,3,13]],"21":["reduce",[16,3,13]],"22":["reduce",[16,3,13]],"23":["shift",[27]],"24":["reduce",[16,3,13]],"25":["reduce",[16,3,13]],"26":["reduce",[16,3,13]],"27":["reduce",[16,3,13]]},"47":{"4":["reduce",[16,3,14]],"9":["reduce",[16,3,14]],"11":["reduce",[16,3,14]],"14":["reduce",[16,3,14]],"15":["reduce",[16,3,14]],"17":["reduce",[16,3,14]],"18":["reduce",[16,3,14]],"19":["reduce",[16,3,14]],"20":["reduce",[16,3,14]],"21":["reduce",[16,3,14]],"22":["reduce",[16,3,14]],"23":["shift",[27]],"24":["reduce",[16,3,14]],"25":["reduce",[16,3,14]],"26":["shift",[30]],"27":["shift",[31]]},"48":{"4":["reduce",[16,3,15]],"9":["reduce",[16,3,15]],"11":["reduce",[16,3,15]],"14":["reduce",[16,3,15]],"15":["reduce",[16,3,15]],"17":["reduce",[16,3,15]],"18":["reduce",[16,3,15]],"19":["reduce",[16,3,15]],"20":["reduce",[16,3,15]],"21":["reduce",[16,3,15]],"22":["reduce",[16,3,15]],"23":["shift",[27]],"24":["reduce",[16,3,15]],"25":["reduce",[16,3,15]],"26":["shift",[30]],"27":["shift",[31]]},"49":{"4":["reduce",[16,3,16]],"9":["reduce",[16,3,16]],"11":["reduce",[16,3,16]],"14":["reduce",[16,3,16]],"15":["reduce",[16,3,16]],"17":["reduce",[16,3,16]],"18":["reduce",[16,3,16]],"19":["reduce",[16,3,16]],"20":["reduce",[16,3,16]],"21":["reduce",[16,3,16]],"22":["reduce",[16,3,16]],"23":["shift",[27]],"24":["reduce",[16,3,16]],"25":["reduce",[16,3,16]],"26":["reduce",[16,3,16]],"27":["reduce",[16,3,16]]},"50":{"4":["reduce",[16,3,17]],"9":["reduce",[16,3,17]],"11":["reduce",[16,3,17]],"14":["reduce",[16,3,17]],"15":["reduce",[16,3,17]],"17":["reduce",[16,3,17]],"18":["reduce",[16,3,17]],"19":["reduce",[16,3,17]],"20":["reduce",[16,3,17]],"21":["reduce",[16,3,17]],"22":["reduce",[16,3,17]],"23":["shift",[27]],"24":["reduce",[16,3,17]],"25":["reduce",[16,3,17]],"26":["reduce",[16,3,17]],"27":["reduce",[16,3,17]]},"51":{"4":["reduce",[16,3,18]],"9":["reduce",[16,3,18]],"11":["reduce",[16,3,18]],"14":["reduce",[16,3,18]],"15":["reduce",[16,3,18]],"17":["reduce",[16,3,18]],"18":["reduce",[16,3,18]],"19":["reduce",[16,3,18]],"20":["reduce",[16,3,18]],"21":["reduce",[16,3,18]],"22":["reduce",[16,3,18]],"23":["reduce",[16,3,18]],"24":["reduce",[16,3,18]],"25":["reduce",[16,3,18]],"26":["reduce",[16,3,18]],"27":["reduce",[16,3,18]]},"52":{"9":["reduce",[8,3,2]]},"53":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"54":{"9":["shift",[56]]},"55":{"9":["reduce",[30,1,24]],"11":["shift",[57]],"23":["shift",[27]],"24":["shift",[28]],"25":["shift",[29]],"26":["shift",[30]],"27":["shift",[31]]},"56":{"0":["reduce",[29,4,21]],"6":["reduce",[29,4,21]]},"57":{"7":["shift",[11]],"10":["shift",[15]],"25":["shift",[12]],"32":["shift",[14]]},"58":{"9":["reduce",[30,3,23]]}};
this.goto={"0":{"1":1,"2":2},"2":{"3":4},"5":{"12":8,"13":9,"16":10,"28":13},"6":{"8":16},"7":{"5":18},"11":{"16":32,"28":13},"12":{"16":33,"28":13},"18":{"29":36},"19":{"13":38,"16":10,"28":13},"20":{"13":39,"16":10,"28":13},"21":{"16":40,"28":13},"22":{"16":41,"28":13},"23":{"16":42,"28":13},"24":{"16":43,"28":13},"25":{"16":44,"28":13},"26":{"16":45,"28":13},"27":{"16":46,"28":13},"28":{"16":47,"28":13},"29":{"16":48,"28":13},"30":{"16":49,"28":13},"31":{"16":50,"28":13},"35":{"8":52},"53":{"16":55,"28":13,"30":54},"57":{"16":55,"28":13,"30":58}};
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
                                                `return ${e1} && ${e2}`
                                              )
                                            },function (e1, _, e2) {
                                              this.check = new Function(
                                                ...this.params,
                                                `return ${e1} || ${e2}`
                                              )
                                            },function (e1) {
                                              this.check = new Function(
                                                ...this.params,
                                                `return ${e1}`
                                              )
                                            },function (e1, _, e2) {
                                              return `${e1} !== ${e2}`
                                            },function (e1, _, e2) {
                                              return `${e1} >= ${e2}`
                                            },function (e1, _, e2) {
                                              return `${e1} <= ${e2}`
                                            },function (e1, _, e2) {
                                              return `${e1} > ${e2}`
                                            },function (e1, _, e2) {
                                              return `${e1} < ${e2}`
                                            },function (e1, _, e2) {
                                              return `${e1} === ${e2}`
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
this.symbolsTable={"<<EOF>>":0,"Start":1,"Statement":2,"Optional_0_0":3,"ARROW":4,"Repeat_0_2":5,"TOKEN":6,"(":7,"Parameters":8,")":9,"VAR":10,",":11,"Check":12,"Predicate":13,"AND":14,"OR":15,"Expression":16,"NEQ":17,"GTE":18,"LTE":19,">":20,"<":21,"=":22,"^":23,"+":24,"-":25,"*":26,"/":27,"Group20_4":28,"Body":29,"ExpParameter":30,":":31,"NUMBER":32};
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