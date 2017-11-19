	//战斗机
	function MyPlane(){
		if( !MyPlane.instance ){
			MyPlane.instance = {
				body : create("div"),//飞机元素
				show : function(){
					this.init();//初始化
					this.addListener({ type:"mouse" }); //飞机移动   鼠标或键盘
					this.fire(); //开火
				},
				fire : function(){
					setInterval(function(){
						new Bullet().init().move();//确保init方法返回一个this时  才可以实现链式调用
					},new GameEngine().level*200)
				},
				addListener : function(obj){
					switch(obj.type){
						case "mouse": { //鼠标操作
							new GameEngine().body.onmousemove = function(e){ //在游戏引擎上移动
								var e = e || event;
								var x = e.pageX - this.width()/2 - new GameEngine().left();
								//x = x<0?0:(x>new GameEngine().width() - this.width() ? new GameEngine().width() - this.width() :x);
								x = Math.min( new GameEngine().width() - this.width(), Math.max(0,x) ); 
								// 0,x  Math.max(0,x)  取最小边界0
								this.left(x);
							}.bind(this)
							break;
						}
						case "key" : {   //键盘操作
							document.onkeydown = function(e){
								var e = e || event;
								var code = e.keyCode || e.which;
								switch( code ){
									case 37 : {
										this.left( Math.max(0, this.left()-3 ) );
										break;
									}
									case 39 : {
										this.left( Math.min( new GameEngine().width()-this.width() , this.left()+3 ) );
										break;
									}
								}
							}.bind(this)
							break;
						}
					}
				},
				init : function(){  //初始化飞机的样式及位置
					this.body.className = "my-warplain";
					new GameEngine().body.appendChild(this.body);//将战斗机添加到游戏引擎中
					this.body.style.bottom = 0;
					this.body.style.left = (new GameEngine().width() - this.width())/2 +"px";
				},
				width : function(){
					return this.body.offsetWidth;
				},
				height : function(){
					return this.body.offsetHeight;
				},
				left : function(val){
					if(val|| val == 0){ //根据传递的值设置飞机的left
						this.body.style.left = val + "px";
					}
					return this.body.offsetLeft;
				},
				top : function (){
					return this.body.offsetTop;
				}
			}
		}
		return MyPlane.instance;
	}