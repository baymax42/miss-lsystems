var lsystem = (function (undefined) {
function CDFA_base(){
	this.ss=undefined;
	this.as=undefined;
	this.tt=undefined;
this.stt={};
}
CDFA_base.prototype.reset = function (state) {
	this.cs = state || 	this.ss;
this.bol=false;
};
CDFA_base.prototype.readSymbol = function (c) {
	this.cs = this.nextState(this.cs, c);
};
CDFA_base.prototype.isAccepting = function () {
	var acc = this.as.indexOf(this.cs)>=0;
if((this.stt[this.cs]===-1)&&!this.bol){
acc=false;}
return acc;};
CDFA_base.prototype.isInDeadState = function () {
	return this.cs === undefined || this.cs === 0;
};
CDFA_base.prototype.getCurrentToken = function(){
	var t= this.tt[this.cs];
var s=this.stt[this.cs];
if(s!==undefined){return this.bol?t:s;}
return t;};

function CDFA_DEFAULT(){
	this.ss=1;
	this.as=[1,2,3,4,5,6,7,8,9,10];
	this.tt=[null,3,6,3,3,0,5,2,0,1,2];
this.stt={};
}
CDFA_DEFAULT.prototype= new CDFA_base();
CDFA_DEFAULT.prototype.nextState = function(state, c){
    var next = 0;
    switch(state){
case 1:
if((c < "\t" || "\n" < c)  && (c < "\r" || "\r" < c)  && (c < " " || " " < c)  && (c < "&" || "&" < c)  && (c < "(" || "(" < c)  && (c < "+" || "+" < c)  && (c < "/" || "9" < c)  && (c < "A" || "[" < c)  && (c < "]" || "]" < c)  && (c < "_" || "_" < c)  && (c < "a" || "z" < c)  && (c < " " || " " < c) ){
next = 2;
} else if(("\t" === c ) || (" " === c ) || (" " === c )){
next = 3;
} else if(("\n" === c ) || ("\r" === c )){
next = 3;
} else if(("&" === c ) || ("+" === c ) || ("/" === c )){
next = 5;
} else if(("(" === c )){
next = 6;
} else if(("0" <= c && c <= "9")  || ("_" === c ) || ("a" <= c && c <= "e")  || ("g" <= c && c <= "z") ){
next = 7;
} else if(("A" <= c && c <= "Z")  || ("f" === c )){
next = 8;
} else if(("[" === c ) || ("]" === c )){
next = 9;
}
break;
case 3:
if(("\t" <= c && c <= "\n")  || ("\r" === c ) || (" " === c ) || (" " === c )){
next = 3;
}
break;
case 7:
if(("0" <= c && c <= "9")  || ("A" <= c && c <= "Z")  || ("_" === c ) || ("a" <= c && c <= "z") ){
next = 7;
}
break;
case 8:
if(("0" <= c && c <= "9")  || ("A" <= c && c <= "Z")  || ("_" === c ) || ("a" <= c && c <= "z") ){
next = 7;
}
break;
	}
	return next;
};

function CDFA_EXPR(){
	this.ss=1;
	this.as=[1,2,3,4,5,6,7,8,9,11];
	this.tt=[null,11,12,11,11,7,8,12,10,9,null,10];
this.stt={};
}
CDFA_EXPR.prototype= new CDFA_base();
CDFA_EXPR.prototype.nextState = function(state, c){
    var next = 0;
    switch(state){
case 1:
if((c < "\t" || "\n" < c)  && (c < "\r" || "\r" < c)  && (c < " " || " " < c)  && (c < "(" || ")" < c)  && (c < "." || "." < c)  && (c < "0" || "9" < c)  && (c < " " || " " < c) ){
next = 2;
} else if(("\t" === c ) || (" " === c ) || (" " === c )){
next = 3;
} else if(("\n" === c ) || ("\r" === c )){
next = 3;
} else if(("(" === c )){
next = 5;
} else if((")" === c )){
next = 6;
} else if(("." === c )){
next = 7;
} else if(("0" <= c && c <= "9") ){
next = 8;
}
break;
case 3:
if(("\t" <= c && c <= "\n")  || ("\r" === c ) || (" " === c ) || (" " === c )){
next = 3;
}
break;
case 7:
if(("0" <= c && c <= "9") ){
next = 9;
}
break;
case 8:
if(("." === c )){
next = 10;
} else if(("0" <= c && c <= "9") ){
next = 8;
}
break;
case 9:
if(("0" <= c && c <= "9") ){
next = 9;
}
break;
case 10:
if(("0" <= c && c <= "9") ){
next = 9;
}
break;
	}
	return next;
};

var EOF={};
function Lexer(){

if(!(this instanceof Lexer)) return new Lexer();

this.pos={line:0,col:0};

this.states={};
this.state = ['DEFAULT'];
this.lastChar = '\n';
this.actions = [function anonymous(
) {
 return 'PARAM' 
},function anonymous(
) {
 return 'NONPARAM' 
},function anonymous(
) {
 return 'ID' 
},function anonymous(
) {
 
},function anonymous(
) {
 return 'EOF' 
},function anonymous(
) {

  this.pushState('EXPR')
  this.count = 0
  return '('

},function anonymous(
) {
 return this.jjtext 
},function anonymous(
) {

  this.count++
  return '('

},function anonymous(
) {

  if (this.count === 0) {
    this.popState()
  } else {
    this.count--
  }
  return ')'

},function anonymous(
) {

  this.jjval = parseFloat(this.jjtext)
  return 'NUMBER'

},function anonymous(
) {

  this.jjval = parseInt(this.jjtext)
  return 'NUMBER'

},function anonymous(
) {
 
},function anonymous(
) {
 return this.jjtext 
}];
this.states["DEFAULT"] = {};
this.states["DEFAULT"].dfa = new CDFA_DEFAULT();
this.states["EXPR"] = {};
this.states["EXPR"].dfa = new CDFA_EXPR();
}
Lexer.prototype.setInput=function(input){
        this.pos={row:0, col:0};
        if(typeof input === 'string')
        {input = new StringReader(input);}
        this.input = input;
        this.state = ['DEFAULT'];
        this.lastChar='\n';
        this.getDFA().reset();
        return this;
    };
Lexer.prototype.nextToken=function () {


        var ret = undefined;
        while(ret === undefined){
            this.resetToken();
            ret = this.more();
        }


        if (ret === EOF) {
            this.current = EOF;
        } else {
            this.current = {};
            this.current.name = ret;
            this.current.value = this.jjval;
            this.current.lexeme = this.jjtext;
            this.current.position = this.jjpos;
            this.current.pos = {col: this.jjcol, line: this.jjline};
        }
        return this.current;
    };
Lexer.prototype.resetToken=function(){
        this.getDFA().reset();
        this.getDFA().bol = (this.lastChar === '\n');
        this.lastValid = undefined;
        this.lastValidPos = -1;
        this.jjtext = '';
        this.remains = '';
        this.buffer = '';
        this.startpos = this.input.getPos();
        this.jjline = this.input.line;
        this.jjcol = this.input.col;
    };
Lexer.prototype.halt=function () {
        if (this.lastValidPos >= 0) {
            var lastValidLength = this.lastValidPos-this.startpos+1;
            this.jjtext = this.buffer.substring(0, lastValidLength);
            this.remains = this.buffer.substring(lastValidLength);
            this.jjval = this.jjtext;
            this.jjpos = this.lastValidPos + 1-this.jjtext.length;
            this.input.rollback(this.remains);
            var action = this.getAction(this.lastValid);
            if (typeof ( action) === 'function') {
                return action.call(this);
            }
            this.resetToken();
        }
        else if(!this.input.more()){//EOF
            var actionid = this.states[this.getState()].eofaction;
            if(actionid){
                action = this.getAction(actionid);
                if (typeof ( action) === 'function') {
                    //Note we don't care of returned token, must return 'EOF'
                    action.call(this);
                }
            }
            return EOF;
        } else {//Unexpected character
            throw new Error('Unexpected char \''+this.input.peek()+'\' at '+this.jjline +':'+this.jjcol);
        }
    };
Lexer.prototype.more=function(){
        var ret;
        while (this.input.more()) {
            var c = this.input.peek();
            this.getDFA().readSymbol(c);
            if (this.getDFA().isInDeadState()) {

                ret = this.halt();
                return ret;

            } else {
                if (this.getDFA().isAccepting()) {
                    this.lastValid = this.getDFA().getCurrentToken();
                    this.lastValidPos = this.input.getPos();

                }
                this.buffer = this.buffer + c;
                this.lastChar = c;
                this.input.next();
            }

        }
        ret = this.halt();
        return ret;
    };
Lexer.prototype.less=function(length){
        this.input.rollback(length);
    };
Lexer.prototype.getDFA=function(){
        return this.states[this.getState()].dfa;
    };
Lexer.prototype.getAction=function(i){
        return this.actions[i];
    };
Lexer.prototype.pushState=function(state){
        this.state.push(state);
        this.getDFA().reset();
    };
Lexer.prototype.popState=function(){
        if(this.state.length>1) {
            this.state.pop();
            this.getDFA().reset();
        }
    };
Lexer.prototype.getState=function(){
        return this.state[this.state.length-1];
    };
Lexer.prototype.restoreLookAhead=function(){
        this.tailLength = this.jjtext.length;
        this.popState();
        this.less(this.tailLength);
        this.jjtext = this.lawhole.substring(0,this.lawhole.length-this.tailLength);


    };
Lexer.prototype.evictTail=function(length){
        this.less(length);
        this.jjtext = this.jjtext.substring(0,this.jjtext.length-length);
    };
Lexer.prototype.isEOF=function(o){
        return o===EOF;
    }
;
function StringReader(str){
        if(!(this instanceof StringReader)) return new StringReader(str);
		this.str = str;
		this.pos = 0;
        this.line = 0;
        this.col = 0;
	}
StringReader.prototype.getPos=function(){
        return this.pos;
    };
StringReader.prototype.peek=function()
	{
		//TODO: handle EOF
		return this.str.charAt(this.pos);
	};
StringReader.prototype.eat=function(str)
	{
		var istr = this.str.substring(this.pos,this.pos+str.length);
		if(istr===str){
			this.pos+=str.length;
            this.updatePos(str,1);
		} else {
			throw new Error('Expected "'+str+'", got "'+istr+'"!');
		}
	};
StringReader.prototype.updatePos=function(str,delta){
        for(var i=0;i<str.length;i++){
            if(str[i]=='\n'){
                this.col=0;
                this.line+=delta;
            }else{
                this.col+=delta;
            }
        }
    };
StringReader.prototype.rollback=function(str)
    {
        if(typeof str === 'string')
        {
            var istr = this.str.substring(this.pos-str.length,this.pos);
            if(istr===str){
                this.pos-=str.length;
                this.updatePos(str,-1);
            } else {
                throw new Error('Expected "'+str+'", got "'+istr+'"!');
            }
        } else {
            this.pos-=str;
            this.updatePos(str,-1);
        }

    };
StringReader.prototype.next=function()
	{
		var s = this.str.charAt(this.pos);
		this.pos=this.pos+1;
		this.updatePos(s,1);
		return s;
	};
StringReader.prototype.more=function()
	{
		return this.pos<this.str.length;
	};
StringReader.prototype.reset=function(){
        this.pos=0;
    };
if (typeof(module) !== 'undefined') { module.exports = Lexer; }
return Lexer;})();