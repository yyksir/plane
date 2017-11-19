//敌机
function Enemy(type){
	this.type=type;
	this.body=create("div");
	this.rand=function(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	this.init=function(){
		switch(this.type){
			case "small":{
				this.body.className="enemy-small";
				this.speed=8;
				this.hp=1;
				this.dieImgs=["plain1_die1.png","plain1_die2.png","plain1_die3.png"];
				new GameEngine().body.appendChild(this.body);
				this.left(this.rand(0,new GameEngine().width()-this.width()));
				this.top(-this.height());
				break;
			}
			case "middle":{
				this.body.className="enemy-middle";
				this.speed=5;
				this.hp=2;
				this.dieImgs=["plain2_die1.png","plain2_die2.png","plain2_die3.png","plain2_die4.png"];
				new GameEngine().body.appendChild(this.body);
				this.left(this.rand(0,new GameEngine().width()-this.width()));
				this.top(-this.height());
				break;
			}
			case "large";{
				this.body.className="enemy-large";
				this.speed=3;
				this.hp=6;
				this.dieImgs=["plain3_die1.png","plain3_die2.png","plain3_die3.png","plain3_die4.png","plain3_die5.png","plain3_die6.png"];
				new GameEngine().body.appendChild(this.body);
				this.left(this.rand(0,new GameEngine().width()-this.width()));
				this.top(-this.height());
				break;
			}
		}
		return this;
	}
	this.move=function(){
		this.moveTimer=setInterval(function(){
			this.top(this.top()+this.speed);
			if(this.top()>new GameEngine().height()){
				this.destroy();
				clearInterval(this.moveTimer);
			}
		}.bind(this),30)
		return this;
	}
	this.width = function(){
		return this.body.offsetWidth;
	}
	this.height = function(){
		return this.body.offsetHeight;
	}
	this.left = function(val){
		if( val ||val == 0 ){
			this.body.style.left = val + "px"
		}
		return this.body.offsetLeft;
	}
	this.top = function(val){
		if( val ||val == 0 ){
			this.body.style.top = val + "px"
		}
		return this.body.offsetTop;
	}
	this.hurt=function(){
		--this.hp==0?this.explode():"";
	}
	this.explode=function(){
		new GameEngine().enemes.delete(this);
		clearInterval(this.moveTimer);
		var t=setInterval(function(){
			if(this.dieImgs.length==0){
				clearInterval(t);
				this.destroy()
			}
			this.body.style.background="url(images/"+this.dieImgs.shift()+")";
			
		}.bind(this),300)
	}
	this.destroy=function(){
		this.body.remove();
	}
}
















/*function Enemy(type){
	this.type = type;
	this.body = create("div");
	this.rand = function(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	this.init = function(){
		switch( this.type ){
			case "small" : {
				this.body.className = "enemy-small";
				this.speed = 8;
				this.hp = 1;
				this.dieImgs = ["plain1_die1.png","plain1_die2.png","plain1_die3.png"];//shift()
				new GameEngine().body.appendChild(this.body);
				this.left( this.rand( 0, new GameEngine().width() - this.width() ) );
				this.top( -this.height() );
				break;
			}
			case "middle" : {
				this.body.className = "enemy-middle";
				this.speed = 5;
				this.hp = 2;
				this.dieImgs = ["plain2_die1.png","plain2_die2.png","plain2_die3.png","plain2_die4.png"];//shift()
				new GameEngine().body.appendChild(this.body);
				this.left( this.rand( 0, new GameEngine().width() - this.width() ) );
				this.top(  -this.height() );
				break;
			}
			case "large" : {
				this.body.className = "enemy-large";
				this.speed = 3;
				this.hp = 6;
				this.dieImgs = ["plain3_die1.png","plain3_die2.png","plain3_die3.png","plain3_die4.png","plain3_die5.png","plain3_die6.png"];//shift()
				new GameEngine().body.appendChild(this.body);
				this.left( this.rand( 0, new GameEngine().width() - this.width() ) );
				this.top(  -this.height() );
				break;
			}
		}
		return this;
	}
	this.move = function(){
		this.moveTimer = setInterval(function(){
			this.top( this.top() + this.speed );
			if( this.top() > new GameEngine().height() ){
				this.destroy();
				clearInterval(this.moveTimer);
			}
		}.bind(this),30)
		return this;
	}
	this.width = function(){
		return this.body.offsetWidth;
	}
	this.height = function(){
		return this.body.offsetHeight;
	}
	this.left = function(val){
		if( val ||val == 0 ){
			this.body.style.left = val + "px"
		}
		return this.body.offsetLeft;
	}
	this.top = function(val){
		if( val ||val == 0 ){
			this.body.style.top = val + "px"
		}
		return this.body.offsetTop;
	}
	this.hurt = function(){
		--this.hp == 0 ? this.explode() : "";
	}
	this.explode = function(){ //敌机血 值 减到0后 会爆炸
		//如果敌机中弹销毁时  这个过程 不能在实现碰撞     将敌机从集合中删除
		new GameEngine().enemes.delete(this);
		//敌机爆炸了  定时器也要停止
		clearInterval(this.moveTimer);
		var t = setInterval(function(){
			if( this.dieImgs.length == 0 ){ //当数组长度变为 0 时  停止换图 并销毁敌机
				clearInterval(t);
				this.destroy();
			}
			this.body.style.background = "url(images/"+this.dieImgs.shift()+")";
		}.bind(this),300)
	}
	this.destroy = function(){
		this.body.remove();
	}
}*/