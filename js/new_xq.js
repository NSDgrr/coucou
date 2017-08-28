$(function(){
	var navh=$('#nav').height();
	var navtop=$('#nav').offset().top;
	var navFix=$('#navfixed');
	var boxLength=$('#main>div').length;
	$(window).scroll(function(){
		if ($(this).scrollTop() > navtop) {
            navFix.css("display","block");
            $("#nav").css("visibility","hidden");
        } else {
            navFix.css("display","none");
			$("#nav").css("visibility","visible");
        }
        for(var i=0;i<boxLength;i++){
			var index = i;
			if($('body').scrollTop()>$("#con_"+i).offset().top-navh-10){
				$("#navfixed").find('span').eq(index).addClass("active").siblings().removeClass("active");
			}
		}
	})
	$('#nav').on('click','span',function(){
		if($(this).index()<$("#nav>span").length){
			var scroll=$('#con_'+$(this).index()).offset().top-navh-8;
			$('body').stop(true).animate({"scrollTop":scroll},1000)
		}	
	})
	$('#navfixed').on('click','span',function(){
		if($(this).index()<$("#navfixed>span").length){
			var scroll=$('#con_'+$(this).index()).offset().top-navh-8;
			$('body').stop(true).animate({"scrollTop":scroll},1000)

		}	
	})
	// var navHeight=$('#nav').offset().top;
	// var navFix=$('#nav');
	// $(window).scroll(function(){
	// 	if ($(this).scrollTop() > navHeight) {
 //            navFix.addClass("navFixed");
 //        } else {
 //            navFix.removeClass("navFixed");
 //        }
	// })
	// $('#nav span').click(function(){
	// 	var index=$(this).index();
	// 	var height=$('.j_gg').css('height');
	// 	var high=height.split('px')[0];
	// 	$(this).addClass('active').siblings().removeClass('active');
	// 	var scrolltop = $("#"+$(this).attr("name")).offset().top;
	// 	$("body,html").stop(true).animate({"scrollTop":scrolltop-high},1000);
	// }) 
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
    var true_id=id2.split('=')[1];//pid
	// console.log(true_id)
	// https://www.coucouchina.com/Api/Index/newContent?uid=310&id=3157&type=2&status=1
	$.ajax({
		type: "post",
        url: "https://www.coucouchina.com/Api/Index/newContent",
        async: true,
        data: {
        	uid:1,
        	type:2,
        	status:1,
        	id: true_id
        },
        success: function (e) {
        	var data=e.data;
        	console.log(data)
        	if(e.code==0){
				// 视频
				var src='http://share.coucouchina.com/Public/';
				$('.banner').attr('src',src+data.img)
				// if(data.banner=='http://59.110.219.165'){
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
					spans.html(nowtabArray[g])
				}
				// 进度条
				var money_marketings=data.money_marketings
				var rg=parseFloat(money_marketings);//认购总额
				var ze=parseFloat(data.moneys);//项目总额
				var bd=(rg/ze*100).toFixed(1);//百分比--进度条的百分比
				$('.number_shown').css('width',bd+'%');
				$('.number_num').html(bd+'%');
				if(bd>=100){
					$('.number_shown').css({'width':100+'%'})
				}else if(bd<=10){
					$('.number_shown').css({'width':bd+'%'})
					$('.number_num').css({'right':'-25px'})
				}
				// 投资人数 起投金额 项目总额 投资总额
				// var amount=parseInt(data.amount);
				// amount+='';
				// var reg1=amount.indexOf('.')>-1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g;
				// amount=amount.replace(reg1,'$1,');
				// var moneys=data.moneys*10000;
				// moneys+='';
				// var reg2=moneys.indexOf('.')>-1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g;
				// moneys=moneys.replace(reg2,'$1,');
				// var money_marketings=data.money_marketings*10000;
				// money_marketings+='';
				// var reg3=money_marketings.indexOf('.')>-1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g;
				// money_marketings=money_marketings.replace(reg3,'$1,');
				$('.invest_num').html(data.invest_num+'人');
				$('.start_money').html(parseInt(data.amount)+'元');
				$('.all_money').html(data.moneys+'万');
				$('.all_invest').html(parseInt(data.money_marketings)+'万');
				// 项目介绍
				
				var introduces=data.introduces;
				for (var i=0;i<introduces.length;i++) {
					var introHtml='';
					var url='http://share.coucouchina.com/Public';
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
                for(var i=0;i<store.length;i++){
                    var storeHtml='';
					storeHtml+='<tr>'+
							'<td class="store_name">'+store[i].name+'</td>'+
							'<td class="store_dq">'+store[i].address+'</td>'+
						'</tr>'
					$('#store').append(storeHtml)	
                }
                // 
                $('.company').html('项目公司：'+data.company)
                $('.pattern').html('筹集模式：'+data.income_mode)
                $('.deadline').html('投资期限：'+data.invest_time)
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
				$('.money7').html(scheme.name_share);
				$('.money8').html(scheme.name_print);
				$('.money9').html(scheme.money_marketing);
				// 回报方案
                // type=2 固化收益 type=1 
                var pattern=data.scheme;
                if(pattern.type==2){
                	$('.re_part_top2').html(data.year+data.year_income);
                	$('.re_part_top3').css('display','none');
                	// $('.special').css('display','none');
                	// $('.chuzi_num').css('display','none');
            	
                }else{
                	$('.re_part_top2').html(fh_b+'*N*M')
                	$('.fh').html(fh_b+'：')
                }
                var myPart=data.rule;
            	for(var i=0;i<myPart.length;i++){
                    var partHtml='';
					partHtml+='<tr>'+
							'<td>'+myPart[i].name+'</td>'+
							'<td>'+myPart[i].intro+'</td>'+
						'</tr>'
					$('.re_part_bot').append(partHtml)	
                }
				// 开店计划
                var myPlan=data.plan;
                console.log(myPlan)
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
                // 股东特权
                var enjoyEquity=data.privilege;
                for(var i=0;i<enjoyEquity.length;i++){
                	var enjoyHtml='';
                	if(!enjoyEquity[i].img&&enjoyEquity[i].intro==""){
						enjoyHtml+='<span class="enjoyBox">'+
						'<img src="http://share.coucouchina.com/Public/'+enjoyEquity[i].img+'" alt="" />'+
						'<span class="eIntro">'+enjoyEquity[i].intro+'</span>'+
					'</span>'
					}else if(!enjoyEquity[i].img==""){
						enjoyHtml+='<span class="enjoyBox">'+
						'<img src="http://share.coucouchina.com/Public/'+enjoyEquity[i].img+'" alt="" />'+
					'</span>'
					}else{
						enjoyHtml+='<span class="enjoyBox">'+
						'<span class="eIntro">'+enjoyEquity[i].intro+'</span>'+
					'</span>';
					}
					$('.enjoyEquity').append(enjoyHtml);
                }
				// 项目公告
				var notice=data.affiche;
				$('.gg_nr').append(notice.intro);
				$('.xmImg').attr('src','http://share.coucouchina.com/Public/'+notice.img)
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
        var pageStr = theRequest["page"];
        var pStatus = theRequest["status"];
        var openURL = "http://a.mlinks.cc/AKRy?name1="+pidStr+"&name2="+pStatus+"&name3="+pageStr;
        window.location= openURL;
    }
    function downAPP() {
       window.location.href="http://itunes.apple.com/cn/app/id1216109434";//如果超时就跳转到app下载页
    }
	$('#btn1').click(function(){
		downAPP();
	})
	$('#btn2').click(function(){
		OpenAPP();
	})
})
// window.onload = function(){

// 	var oDiv = document.getElementById('nav');
// 	var top = oDiv.offsetTop;
// 	window.onscroll = function(){
// 		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
// 		if(top <= scrollTop){
// 			oDiv.style.position = 'fixed';
// 		}else{
// 			oDiv.style.position = '';
// 		}
// 	};
// };
