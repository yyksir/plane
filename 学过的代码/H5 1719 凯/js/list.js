
var deff=$.ajax({
	type:"get",
	url:"data/list.json",
	async:true
});
	deff.done(function(json){
		
		pageNum=30;
		var html="";
		var index=1;
		for(var i=(index-1)*30;i<index*30;i++){
			if(i<json.length){
				html+=`<li>
						<a class="search-img" href="/detail-309123.html">
							<img src="img/list/${json[i].src}"/>
						</a>
						<div class="data">
							<p class="price">
								<span class="redel">¥</span>
								<span class="now-price">${json[i].nowPrice}</span>
								<span class="old-price">${json[i].oldPrice}</span>
							</p>
							<p class="title">
								<span class="redel">2折/</span>
								<a href="#">[设计师 · 亲肤保暖塑形显瘦] 新米粒 日单700D秋冬全棉竖条显瘦保暖连裤袜打</a>
							</p>
							<p class="function">
								5人收藏<span>|</span>0条评论
							</p>
							
						</div>
					</li>`
			}
			
		}
		$(".search-list ul").html(html);
		pageCount =Math.ceil( json.length / 30 ) ;
		
		var page="";
		for(var j=1;j<=pageCount ;j++){
			page+=`
			<li>${j}</li>
			`
		}
		$(".page ul").html(page);
		
		$(".page ul").click(function(e){
				var e=e||event;
				var target=e.target||e.srcElement;
				if(target.nodeName=="LI"){
					page=target.innerHTML;
					
					$.getJSON('data/list.json',function(json){
						var html="";
						var index=page;
						for(var i=(index-1)*30;i<index*30;i++){
							if(i<json.length){
								html+=`<li>
										<a class="search-img" href="/detail-309123.html">
											<img src="img/list/${json[i].src}"/>
										</a>
										<div class="data">
											<p class="price">
												<span class="redel">¥</span>
												<span class="now-price">${json[i].nowPrice}</span>
												<span class="old-price">${json[i].oldPrice}</span>
											</p>
											<p class="title">
												<span class="redel">2折/</span>
												<a href="#">[设计师 · 亲肤保暖塑形显瘦] 新米粒 日单700D秋冬全棉竖条显瘦保暖连裤袜打</a>
											</p>
											<p class="function">
												5人收藏<span>|</span>0条评论
											</p>
											
										</div>
									</li>`
							}
							
						}
						$(".search-list ul").html(html);
						
					})
					
				}
			
		})
		
		$(".page-up-link").click(function(){
			if(index==1){
					index=1;
//					alert("已到第一页")
			}else{
				index--;
			}
			page=index;
			$.getJSON('data/list.json',function(json){
						var html="";
						index=page;
						for(var i=(index-1)*30;i<index*30;i++){
							if(i<json.length){
								html+=`<li>
										<a class="search-img" href="/detail-309123.html">
											<img src="img/list/${json[i].src}"/>
										</a>
										<div class="data">
											<p class="price">
												<span class="redel">¥</span>
												<span class="now-price">${json[i].nowPrice}</span>
												<span class="old-price">${json[i].oldPrice}</span>
											</p>
											<p class="title">
												<span class="redel">2折/</span>
												<a href="#">[设计师 · 亲肤保暖塑形显瘦] 新米粒 日单700D秋冬全棉竖条显瘦保暖连裤袜打</a>
											</p>
											<p class="function">
												5人收藏<span>|</span>0条评论
											</p>
											
										</div>
									</li>`
							}
							
						}
						$(".search-list ul").html(html);
						
					})
				
			
			
		})
		
		
		
		
		
	})