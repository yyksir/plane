window.onload = function(){
	waterfall();//页面加载 定位每一张图片的位置
	
	//瀑布流无限加载数据
	window.onscroll = function(){
		//获取最后一个图片的高度值
		var lastBox = boxs[boxs.length-1];
		var lastBoxHeight = lastBox.offsetTop + lastBox.offsetHeight/2;
		var wHeight = window.innerHeight;
		var sTop = document.body.scrollTop || document.documentElement.scrollTop;
		//加载条件 ：最后一个盒子的top + 自身高度的一半 <  窗口的高度 + 页面滚走的距离
		if( lastBoxHeight < wHeight + sTop ){
			var data = { src : ["3.jpg","21.jpg","5.jpg"] };
			for( var i = 0 ; i < data.src.length ; i++ ){
				var box = create("div");
				box.className = "box";
				$("main").appendChild(box);
				
				var pic = create("div");
				pic.className = "pic";
				box.appendChild(pic);
				
				var oImg = create("img");
				oImg.src = "images/" +  data.src[i];
				pic.appendChild(oImg);
			}
		}
		waterfall();
	}
}
function $(id){
	return document.getElementById(id);
}
function create(ele){
	return document.createElement(ele);
}
//瀑布流
function waterfall(){
	boxs = document.getElementsByClassName("box");
	//得到某个box的宽度
	var boxWidth = boxs[0].offsetWidth;

	//定义一个数组 存放  每一列的高度值
	hArr = [];
	//将boxs中前六个图片的高度存入到数组中  第七张及其后面的图片需要定位
	for( var i = 0 ; i < boxs.length ; i++ ){
		if( i < 6 ){
			hArr.push( boxs[i].offsetHeight );
		}else{
			//第七张及其后面的图片需要定位
			var index = getIndex();
			//定位第七张及其后面图片的位置
			boxs[i].style.position = "absolute";
			boxs[i].style.left = boxWidth*index + "px";
			boxs[i].style.top = hArr[index] + "px";
			
			//改变index对应的列的高度值 = 原来的值 + boxs[i].offsetHeight
			hArr[index] += boxs[i].offsetHeight;
		}
	}	
}
//获取数组中最小高度值的索引
function getIndex(){
	var index = 0;
	for( var i = 0 ; i < hArr.length ; i++ ){
		if( hArr[i] < hArr[index] ){
			index = i;
		}
	}
	return index;//返回最小值的索引
}
