//gulp导入
var gulp = require("gulp");
//使用gulp插件前  先进行插件的引入
var sass = require("gulp-sass");
var cssmin = require("gulp-cssmin");
var uglify = require("gulp-uglify"); //压缩js文件
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");

//压缩图片
gulp.task("imagemin",function(){
	return gulp.src("image/*.jpg")
			   .pipe( imagemin() )
			   .pipe( gulp.dest( "minImg" ) )
})

//压缩js   并重命名
gulp.task("uglify",function(){
	return gulp.src( "dest/js/sport5.js" )
			   .pipe( uglify() )
			   .pipe( rename("sport.min.js") )
			   .pipe( gulp.dest( "dest/js" ) )
})


//将dest目录下的css中的非压缩的css文件进行合并  合并后重命名一个新文件
gulp.task("concat",function(){
	return gulp.src(["dest/css/shopcar.css","dest/css/style.css"])
			   .pipe( concat("aa.css") )
			   .pipe( rename("all.css") )
			   .pipe( gulp.dest( "dest/css" ) )
})

//将css下的scss文件 转成css文件   输送到dest文件夹下的css目录中
gulp.task("sass",function(){
	return gulp.src( "css/style.scss" )
			   .pipe( sass() )
			   .pipe( gulp.dest( "dest/css" ) )
})

//将css下的某个scss文件 转成css文件    并进行压缩      输送到dest文件夹下的css目录中
gulp.task("cssmin",function(){
	return gulp.src( "css/shopcar.scss" )
			   .pipe( sass() )   //插件应用
			   .pipe( cssmin() )  //插件应用
			   .pipe( gulp.dest("dest/css") )
})

//将css下的某个scss文件 转成css文件    并进行压缩    压缩后重命名      输送到dest文件夹下的css目录中
gulp.task("rename",function(){
	return gulp.src( "css/page.scss" )
			   .pipe( sass() )   //插件应用
			   .pipe( cssmin() )  //插件应用
			   .pipe( rename( "page.min.css" ) )
			   .pipe( gulp.dest("dest/css") )
})

//压缩 dest 目录下 css中的style.css  并重命名
gulp.task("cssmin2",function(){
	return gulp.src("dest/css/style.css")
			   .pipe( cssmin() )
			   .pipe( rename("style.min.css") )
			   .pipe( gulp.dest( "dest/css" ) )
})



//监听方法    
gulp.task("watch",function(){
	return gulp.watch("src/index.html",["copyHtml"])
})



//将  src目录下的index.html文件复制到  dest的文件夹下
gulp.task("copyHtml",function(){
	return gulp.src("src/index.html")
		.pipe( gulp.dest("dest") )
})

//将 script 下的js文件 和  lib下的js文件  复制到     dest下的js目录下
gulp.task("copyJs",function(){
	return gulp.src(["script/*.js","lib/*.js"])
		       .pipe( gulp.dest( "dest/js" ) )
})

//布置任务
gulp.task("default",["say","eat"],function(){
	console.log("default任务执行");
})

gulp.task("say",function(){
	console.log("say任务在执行");
})

gulp.task("eat",function(){
	console.log("eat任务执行");
})
