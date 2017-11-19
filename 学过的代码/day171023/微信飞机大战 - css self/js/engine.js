	//游戏引擎
	
	function GameEngine(){
		
		if(!GameEngine.instance){
			GameEngine.instance={
				body:document.getElementById("main"),
				level:0,
				enemes:new Set(),
				start:function(){
					this.initMenu();
				},
				initMenu:function(){
					var oUl=document.getElementById("option");
					oUl.addEventListener("click",function(e){
						var e=e||event;
						var target=e.target||e.srcElement;
						if(target.nodeName=="LI"){
							this.level=target.getAttribute("level");
							oUl.remove();
							this.gameStart();
							
						}
					}.bind(this))
				},
				gameStart:function(){
					this.logo=create("div");
					this.loading=create("div");
					this.logo.className="logo";
					this.loading.className="loading";
					this.body.appendChild(this.logo);
					this.body.appendChild(this.loading);
					
					var timer=null;
					var index=1;
					timer=setInterval(function(){
						this.loading.style.background="url(images/loading"+(++index)+".png)";
						if(index==3){
							index=0;
						}
					}.bind(this),500)
					var count=0;
					setInterval(function(){
						this.body.style.background="url(images/bg.jpg) 0px "+(++count) + "px";
					}.bind(this),30)
					setTimeout(function(){
						clearInter(timer);
						this.logo.remove();
						this.loading.remove();
						
						new MyPlane.show();
						this.autoCreateEnemy();
					}.bind(this),3000)
					
					
					
				},
				
				width:function(){
					return this.body.offsetWidth;
				},
				height:function(){
					return this.body.offsetHeight;
				},
				left:function(){
					return this.body.offsetLeft;
				},
				autoCreateEnemy:function(){
					setInterval(function(){
						if(Math.random()>0.2){
							this.enemes.add(new Enemy("small").init().move());
						}
					}.bind(this),800)
					setInterval(function(){
						if(Math.random()>0.35){
							this.enemes.add(new Ememy("middle").init().move());
						}
						
					}.bind(this),1200)
					setInterval(function(){
						if( Math.random() > 0.6){
							this.enemes.add( new Enemy("large").init().move() );
						}
						
					}.bind(this),6000)
				}
				
			}
		}
		return GameEngine.instance
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*function GameEngine(){
		bullet
		if( !GameEngine.instance){
			GameEngine.instance = {
				body : document.getElementById("main"), // 引擎容器
				level : 0,//记录游戏等级
				enemes : new Set(),//enemes 属性用来存储所有的敌机
				start : function(){ //游戏开始
					//初始化游戏菜单
					this.initMenu();
				},
				
				initMenu : function(){ //初始化菜单
					//点击每一个li  实现记录等级，同时菜单消失
					var oUl = document.getElementById("options");
					oUl.addEventListener("click",function(e){
						var e = e || event;
						var target = e.target || e.srcElement;
						if( target.nodeName == "LI" ){
							//记录等级
							this.level = target.getAttribute("level");
							//菜单消失
							oUl.remove();
							
							//logo  loading动画出场 背景动画出场   
							this.gameStart();
						}
					}.bind(this))
				},
				gameStart : function(){
					//logo  loading动画出场 背景动画出场 
					this.logo = create("div");
					this.loading = create("div");
					this.logo.className = "logo";
					this.loading.className = "loading";
					this.body.appendChild(this.logo);
					this.body.appendChild(this.loading);
					
					//loading动画
					var timer = null;
					var index = 1;
					timer = setInterval(function(){
						this.loading.style.background = "url(images/loading"+(++index)+".png)";
						if( index == 3 ){
							index = 0;
						}
					}.bind(this),500)
					
					//背景移动
					var count = 0;
					setInterval(function(){
						this.body.style.background = "url(images/bg.jpg) 0px " + (++count) + "px";
					}.bind(this),30)
					
					//3秒后   logo 和 loading消失   飞机出场
					setTimeout(function(){
						clearInterval(timer);
						this.logo.remove(); //  this.body.removeChild(this.logo);
						this.loading.remove();
						
						//飞机出场了
						new MyPlane().show();
						this.autoCreateEnemy();//敌机出场了
					}.bind(this),3000)
				},
				width : function(){
					return this.body.offsetWidth;
				},
				height : function (){
					return this.body.offsetHeight;
				},
				left :function(){
					return this.body.offsetLeft;
				},
				autoCreateEnemy : function(){ 
					// 不同类型的敌机出场   new Enemy("small")  new Enemy("middle")
					//小飞机
					setInterval(function(){
						if( Math.random() > 0.2 ){
							//将创建的敌机 存入到集合new中  保证 move方法返回的就是一个敌机对象    在move方法最后加一句话  return this
							this.enemes.add( new Enemy("small").init().move() ) ;
						}
					}.bind(this),800)
					//中型飞机
					setInterval(function(){
						if( Math.random() > 0.35 ){
							this.enemes.add( new Enemy("middle").init().move() );
						}
					}.bind(this),1200)
					
					//大飞机
					setInterval(function(){
						if( Math.random() > 0.6){
							this.enemes.add( new Enemy("large").init().move() );
						}
					}.bind(this),6000)
				}
			}
		}
		return GameEngine.instance;
	}*/