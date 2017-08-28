$(function(){
	var navHeight=$('#nav').offset().top;
	var navFix=$('#nav');
	$(window).scroll(function(){
		if ($(this).scrollTop() > navHeight) {
            navFix.addClass("navFixed");
        } else {
            navFix.removeClass("navFixed");
        }
	})
	$('#nav span').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index=$(this).index();
		var height=$('.j_gg').css('height');
		// alert(height)
		var high=height.split('px')[0];
		var scrolltop = $("#"+$(this).attr("name")).offset().top;
		$("body,html").stop(true,true).animate({"scrollTop":scrolltop-high},1000);
	}) 
	// $('#nav span').click(function(){
	// 	var index=$(this).index();
	// 	var height=0;
	// 	height=$('.j_gg').css('height');
	// 	var high=height.split('px')[0];
		
	// 	$(this).addClass('active').siblings().removeClass('active');
	// 	var scrolltop =Number(arr[index])-high;
	// 	$("body,html").stop(true,true).animate({"scrollTop":scrolltop},1000);
	// });
	// alert($("#gg").offset().top)
	// var arr=[];
	// arr.push(Math.floor($("#js").offset().top));
	// arr.push(Math.floor($("#rz").offset().top))
	// arr.push(Math.floor($("#gg").offset().top))
	// arr.push(Math.floor($("#fx").offset().top))

	
	var url = window.location.href;
    var id1 = url.split('?')[1];
    var id2=id1.split('&')[0];
    var true_id=id2.split('=')[1];//app里的pid
	// console.log(true_id)
	$.ajax({
		type: "post",
        url: "https://www.coucouchina.com/api/index1/details",
        async: true,
        data: {id: true_id},
        success: function (e) {
        	var data=e.data;
        	if(e.code==0){
				// console.log(data)
				// console.log(data.banner)
				// console.log(data.img)
				// 视频
				var src='https://www.coucouchina.com/Public/';
				$('.banner').attr('src',src+data.img)
				// if(data.banner=='https://59.110.219.165'){
				// 	$('.banner').attr('src',src+data.img)
				// }else{
				// 	$('.videos source').attr('src',data.banner);
				// 	$('.videos').css('zIndex','2')
				// }
				// 标题
				$('.tit1').html(data.name);
				$('.tit2').html(data.slogen);
				$('.province').html(data.province)
				$('.city').html(data.city)
				//标签
				var tab=data.tab;
				var tabs=$('.con_pj');
				for(var i=0;i<tab.length;i++){
					var nowtab=tab[i].name;
					var nowtabArray=nowtab.split(',')
				}
				for(var g=0;g<nowtabArray.length;g++){
					var spans=$('<span></span>')
					spans.appendTo(tabs);
					spans.html(nowtabArray[g]);
				}
				// 进度条
				var money_marketings=data.money_marketings;
				var rg=parseFloat(money_marketings);//认购总额
				var ze=parseFloat(data.moneys);//项目总额
				var bd=(rg/ze*100).toFixed(2);//百分比--进度条的百分比
				$('.number_shown').css('width',bd+'%');
				$('.number_num').html(bd+'%');
				if(bd>=100){
					$('.number_shown').css({'width':100+'%'})
				}else if(bd<=10){
					$('.number_shown').css({'width':bd+'%'})
					$('.number_num').css({'right':'-25px'})
				}
				// 投资人数 起投金额 项目总额 投资总额
				$('.invest_num').html(data.invest_num+'人');
				$('.start_money').html(parseInt(data.amount)/10000+'万元/份');
				$('.all_money').html(data.moneys+'万元');
				$('.all_invest').html(data.money_marketings+'万元');
				// 项目介绍
				
				var introduces=data.introduces;
				// console.log(introduces)
				for (var i=0;i<introduces.length;i++) {
					// console.log(i)
					var introHtml='';
					var url='https://www.coucouchina.com/Public';
					if(introduces[i].img=='' && introduces[i].name==''){
						introHtml+='<span class="intros">'+
								'<a href="#x">'+introduces[i].intro+'</a>'+
								'</span>';
					}else if(introduces[i].img=='' && introduces[i].intro==''){
						introHtml+='<span class="intros">'+
								'<b>'+introduces[i].name+'</b>'+
								'</span>';
					}else if(introduces[i].intro=='' && introduces[i].name==''){
						introHtml+='<span class="intros">'+
								'<img src="'+url+''+introduces[i].img+'" class="js_banner"/>'+
								'</span>';
					}else if(introduces[i].img==''){
						introHtml+='<span class="intros">'+
						'<b>'+introduces[i].name+'</b>'+
								'<a href="#x">'+introduces[i].intro+'</a>'+
								'</span>';
					}else if(introduces[i].name==''){
						introHtml+='<span class="intros">'+
								'<img src="'+url+''+introduces[i].img+'" class="js_banner"/>'+
								'<a href="#x">'+introduces[i].intro+'</a>'+
								'</span>';
					}else if(introduces[i].intro==''){
						introHtml+='<span class="intros">'+
								'<b>'+introduces[i].name+'</b>'+
								'<img src="'+url+''+introduces[i].img+'" class="js_banner"/>'+
								'</span>';
					}else{
						introHtml+='<span class="intros">'+
								'<b>'+introduces[i].name+'</b>'+
								'<img src="'+url+''+introduces[i].img+'" class="js_banner"/>'+
								'<a href="#x">'+introduces[i].intro+'</a>'+
								'</span>';
					}
					$('#xmIntro').append(introHtml)
				}
					// 直营门店
				var store=data.store;
				// console.log(store)
                for(var i=0;i<store.length;i++){
                    var storeHtml='';
					storeHtml+='<tr>'+
							'<td class="store_name">'+store[i].name+'</td>'+
							'<td class="store_dq">'+store[i].address+'</td>'+
						'</tr>'
					$('#store').append(storeHtml)	
                }
				// 融资方案
					// 融资总额
				var rzMoney=data.scheme.county;
				$('.rz_moneys').html(rzMoney)
				// 融资份数
				var start_t=data.amount/10000;
				var fs=parseFloat(rzMoney)/start_t;
				$('.rz_part').html(fs+'份');
				// 每份金额
				$('.every_money').html(data.amount+'元')
				// 分红占比
				var z_fh=parseFloat(data.scheme.unit);//总的分红
				var fh_b=parseFloat(z_fh/fs).toFixed(2)+'%';
				$('.part_num').html(fh_b);
					// 出资方案
				var scheme=data.scheme;
				$('.money1').html(scheme.name);
				$('.money2').html(scheme.province);
				$('.money3').html(scheme.city);
				$('.money4').html(scheme.county);
				$('.money5').html(scheme.address);
				$('.money6').html(scheme.unit);
				$('.money7').html(scheme.name_www);
				$('.money8').html(scheme.name_print);
				$('.money9').html(scheme.money_marketing);
				// 开店计划
                var myPlan=data.plan;
                // console.log(data.plan)
                for(var i=0;i<myPlan.length;i++){

                    var tableHtml='';
					tableHtml+='<tr>'+
							'<td>'+myPlan[i].name+'</td>'+
							'<td>'+myPlan[i].intro+'</td>'+
						'</tr>'
					$('#openShop').append(tableHtml)	
                }
                //分红计划
                var myPart=data.rule;
                // console.log(myPart);
                for(var i=0;i<myPart.length;i++){
                    var partHtml='';
					partHtml+='<tr>'+
							'<td>'+myPart[i].name+'</td>'+
							'<td>'+myPart[i].intro+'</td>'+
						'</tr>'
					$('#partPlan').append(partHtml)	
                }
                // 品牌管理费说明
                var brandMoney=data.explain;
                for(var i=0;i<brandMoney.length;i++){
                    var brandHtml='';
					brandHtml+='<tr>'+
							'<td>'+brandMoney[i].name+'</td>'+
							'<td>'+brandMoney[i].intro+'</td>'+
						'</tr>'
					$('#brandIntro').append(brandHtml)	
                }
                // 股东选拔标准
                var choiceNorm=data.choose;
                for(var i=0;i<choiceNorm.length;i++){
                    var choiceHtml='';
					choiceHtml+='<tr>'+
								'<td class="xb_img"><img src="/Public/img/xq_03.png"/></td>'+
								'<td>'+choiceNorm[i].intro+'</td>'+
							'</tr>'
					$('#choiceNorm').append(choiceHtml)	
                }	
                // 股东享受权益
                var enjoyEquity=data.privilege;
                // console.log(enjoyEquity.intro)
                for(var i=0;i<enjoyEquity.length;i++){
                	var enjoyHtml='';
					if(!enjoyEquity[i].img==""){
						enjoyHtml+='<span class="tq1">'+
						'<img src="https://www.coucouchina.com/Public/'+enjoyEquity[i].img+'" alt="" />'+
					'</span>'
					}else{
						enjoyHtml+='<span class="tq1">'+
						'<span class="tq_nr">'+enjoyEquity[i].intro+'</span>'+
					'</span>';
					}
					$('#enjoyEquity').append(enjoyHtml)	;
                }
				// 项目公告
				var notice=data.affiche;
				$('.gg_nr').append(notice.intro);
				$('.xmImg').attr('src','https://www.coucouchina.com/Public/'+notice.img)
				$('.gg_ss').append(notice.description);
				$('.wxh').html(notice.name)
				// 投资风险
				$('.fx_con').append(data.risk_tip)
        	}
        	
        }
	})
	function OpenAPP() {
        var ua = navigator.userAgent.toLowerCase();
        var uaArr = ua.split("/");
        var tmp = uaArr[uaArr.length -2];
        var url = location.search;  
        var theRequest = new Object(); 
        if (url.indexOf("?") != -1) { 
            var str = url.substr(1); 
            strs = str.split("&"); 
            for(var i = 0; i < strs.length; i ++) { 
                theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
            } 
        }
        var pidStr = theRequest["pid"];
        var pStatus = theRequest["status"];
        var pState = theRequest["state"];
        var openURL = "https://aizsvo.mlinks.cc/AKRy?name1="+'Detail'+"&name2="+pidStr+"&name3="+pStatus+"&name4="+pState;
        // var openURL = "https://www.coucouchina.com/Home/Appintroduce/index.html?name1="+'WebPage'+"&name2="+'Test'+"&name3="+'https://www.coucouchina.com/Home/Appintroduce/index.html'+"&name4="+'';
        // var openURL = "http://a.mlinks.cc/AKRy?name1="+'Detail'+"&name2="+pidStr+"&name3="+pStatus+"&name4="+pState;
        window.location= openURL;
    }
    function downAPP() {
       window.location.href="https://itunes.apple.com/cn/app/id1216109434";//如果超时就跳转到app下载页
    }
	$('#btn1').click(function(){
		downAPP();
	})
	$('#btn2').click(function(){
		OpenAPP();
	})
})
