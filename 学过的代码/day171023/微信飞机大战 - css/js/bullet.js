//子弹  
function Bullet(){
	this.init = function(){
		this.body = create("div");
		this.body.className = "bullet";
		new GameEngine().body.appendChild(this.body);
		var mp = new MyPlane();
		this.left( mp.left() + mp.width()/2 - this.width()/2 );
		this.top( mp.top() - this.height() );
		
		return this;//当前方法返回一个this   可以实现链式调用
	}
	this.move = function(){
		this.moveTimer = setInterval(function(){
			this.top( this.top() - 3 );
			if( this.top() < -this.height() ){
				this.body.remove();
				clearInterval( this.moveTimer );
			}
					
			//在子弹移动时  实时监测每一个移动的子弹和所有的敌机      
			// 以  一个子弹 为准  遍历所有的敌机
			// 如何找到所有的敌机
			// console.log( new GameEngine().enemes );
			var enemes = new GameEngine().enemes;
			for( var enemy of enemes ){
				//console.log(value)
				if( pz( this.body, enemy.body ) ){
					//子弹和敌机碰撞后  子弹销毁     定时器停止
					this.explode();
					enemy.hurt(); //敌机碰上子弹后  会受伤的
					clearInterval( this.moveTimer );
				}
			}
			
		}.bind(this),30)
	}
	this.destroy = function(){ //子弹销毁
		this.body.remove();
	}
	this.explode = function(){
		//子弹爆炸  换 className
		this.body.className = "bullet_die";
		setTimeout(function(){ //100毫秒后 子弹爆炸换图  die2.png
			this.body.style.background = "url(images/die2.png)";
			//爆炸后 100毫秒后 让子弹销毁
			setTimeout(function(){
			 	this.destroy();
			}.bind(this),100)
		}.bind(this),100)
	}
	this.width = function(){
		return this.body.offsetWidth;
	}
	this.height = function(){
		return this.body.offsetHeight;
	}
	this.left = function(val){
		if( val || val == 0 ){
			this.body.style.left = val + "px";
		}
		return this.body.offsetLeft;
	}
	this.top = function(val){
		if( val || val == 0 ){
			this.body.style.top = val + "px";
		}
		return this.body.offsetTop;
	}
}
//碰撞函数
function pz(obj1,obj2){
	var l1 = obj1.offsetLeft;
	var r1 = obj1.offsetLeft + obj1.offsetWidth;
	var t1 = obj1.offsetTop;
	var b1 = obj1.offsetTop + obj1.offsetHeight;
	
	var l2 = obj2.offsetLeft;
	var r2 = obj2.offsetLeft + obj2.offsetWidth;
	var t2 = obj2.offsetTop;
	var b2 = obj2.offsetTop + obj2.offsetHeight;
	
	//碰不上返回false  碰上 返回true
	if( r1<l2 || r2<l1 || b1<t2 || b2<t1){  //碰不上   
		return false;
	}else{
		return true;
	}
}