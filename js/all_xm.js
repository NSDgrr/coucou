$(function(){
	// a标签列表
	$('.all_con_cen ul').find('a').click(function(){
		$(this).addClass('active').siblings().removeClass()
	})
	// 返回顶部
	$("#g_top").click(function(){ 
		$('body,html').animate({scrollTop:0},300); 
		return false; 
	});
								// 数据交互
	$.ajax({
		type:"post",
		url:"https://www.coucouchina.com/api/index1/all",
		dataType:'json',
		async:true,
		success:function(e){
			console.log(e)
			var data=e.data;
								// 加载更多
			if(data.length<16){
				$('.all_see_more').css('display','none')
			}else{
				$('.all_see_more').click(function(){
				})
			}
			// 数据交互
			if(e.code==200){
				for(var i=0;i<data.length;i++){
					// 正在融资
					if(data[i].state==0){
						var html='';
						var rg=parseFloat(data[i].money_marketings);
						var ze=parseFloat(data[i].moneys);
						var bd=(rg/ze*100).toFixed(2);
						html='<a href="https://www.coucouchina.com/home/index/index1.html?'+data[i].id+'">'+
							'<div class="now_main hover_shadow">'+
								'<span class="now_pic">'+
									'<img src="'+data[i].img+'" alt=""/>'+
									'<span class="pic_pos"></span>'+
									'<span class="now_btn">剩余<b>'+data[i].endtime+'</b>天</span>'+
								'</span>'+
								'<span class="now_con">'+
									'<p class="now_tit">'+
										'<b>'+data[i].name+'</b>'+
										'<e>'+data[i].city+'</e>'+
										'<e style="margin-right:5px;">'+data[i].province+'</e>'+
									'</p>'+
									'<p class="now_des">'+data[i].slogen+'</p>'+
									'<span class="now_tiao">'+
										'<span class="now_shown" id="now_shown" style="width:'+bd+'%;">'+
											'<span class="now_num" id="now_num" style="right:0px;">'+bd+'%'+'</span>'+
										'</span>'+
									'</span>'+
									'<p class="now_money">'+
										'<span>'+
											'<b>融资总额</b>'+
											'<e>'+data[i].moneys+'万</e>'+
										'</span>'+
										'<span>'+
											'<b>认购金额</b>'+
											'<e>'+data[i].money_marketings+'万</e>'+
										'</span>'+
									'</p>'+
								'</span>'+
							'</div>'+
							'</a>'
						$('.xm_nowing').prepend(html)
						if(bd<=10){
							$('.now_shown').eq(i).css({'width':bd+'%'})
							
							$('.now_num').eq(i).css({'right':'-42px'})
						}
						if(bd>=100){
							// $('.now_shown').eq(i).css('background','-webkit-linear-gradient(left,#ff990c,#f46441)')
							$('.now_shown').css('background','-webkit-linear-gradient(left,#ff990c,#f46441)')
							$('.now_num').eq(i).css({'right':'0px'})
						}
						else{
							$('.now_shown').eq(i).css({'width':bd+'%'})
							$('.now_shown').eq(i).css({'background':'black'})
						}
					}
					// 融资完成						
					if(data[i].state==1){
						var Finish='';
						var rg2=parseFloat(data[i].money_marketings);
						var ze2=parseFloat(data[i].moneys);
						var bd2=(rg2/ze2*100).toFixed(2);
						Finish='<a href="https://www.coucouchina.com/home/index/index2.html?'+data[i].id+'">'+
								'<div class="finish_main hover_shadow">'+
									'<span class="finish_pic">'+
										'<img src="'+data[i].img+'" alt="" />'+
										'<span class="finish_but">融资成功</span>'+
									'</span>'+
									'<span class="finish_con">'+
										'<p class="finish_tit">'+
											'<b>'+data[i].name+'</b>'+
											'<e>'+data[i].city+'</e>'+
											'<e style="margin-right:5px;">'+data[i].province+'</e>'+
										'</p>'+
										'<p class="finish_des">'+data[i].slogen+'</p>'+
										'<span class="f_tiao">'+
											'<span class="f_shown" id="now_shown" style="width:'+bd2+'%;">'+
												'<span class="f_num" id="now_num" style="right:0px;">'+bd2+'%</span>'+
											'</span>'+
										'</span>'+
										'<p class="finish_money">'+
											'<span>'+
												'<b>融资总额</b>'+
												'<e>'+data[i].moneys+'万</e>'+
											'</span>'+
											'<span>'+
												'<b>认购金额</b>'+
												'<e>'+data[i].money_marketings+'万</e>'+
											'</span>'+
										'</p>'+
									'</span>'+							
								'</div>'+
								'</a>'
						$('.xm_finish').prepend(Finish);
						if(bd2<=10){
							$('.f_shown').eq(i).css({'width':bd+'%'})
							$('.f_num').eq(i).css({'right':'-42px'})
						}
						else if(bd2>=100){
							$('.f_shown').eq(i).css({'width':100+'%'})
							$('.f_num').eq(i).css({'right':'0px'})
						}
						else{
							$('.f_shown').eq(i).css({'width':bd+'%'})
						}	
					}
					// 即将上线
					if(data[i].state==2){
						var label=data[i].label;
						var label1=label.substring(0,1);
						var label2=label.substring(1,2);
						var html2='';
						html2='<div class="soon_main">'+
							'<img src="'+data[i].img+'" alt="" />'+
							'<span class="soon_pos"></span>'+
							'<div class="soon_hid"></div>'+
							'<p class="soon_mkf">'+data[i].name+'</p>'+
							'<p class="soon_xt">'+data[i].slogen+'</p>'+
							'<span class="soon_label">'+
								'<b>'+label1+'</b>'+
								'<b>'+label2+'</b>'+
							'</span>'+
							'<p class="soon_qd">敬请期待</p>'+
						'</div>'
						$('.xm_soon').append(html2)
					}					
				}
			}
		},
		error:function(data){
			alert('网站正在维护中，更多精彩内容请下载凑凑APP')
		}
	})	
})