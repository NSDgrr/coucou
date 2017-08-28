/**
 * Created by Administrator on 2017/5/8.
 */

window.onload = function () {
    
//*-------------------------------------------------------*/
    // 获取url后面的id
    var url = window.location.href;
    var lastDigits = url.substring(url.lastIndexOf('/') + 1).match(/[0-9]*$/)[0];

    // 调取接口
    $.ajax({
        type: "post",
        url: "https://www.coucouchina.com/Api/Index/newContent",
        async: true,
        data: {
            uid:1,
            type:2,
            status:1,
            id: lastDigits
        },
        success: function (info) {
            console.log(info)
            //    标题
            var headlineName = document.getElementById("headline");
                headlineName.innerHTML = info.data.name;
            //倒计时
               var  myendtime=info.data.endtime;//结束时间
                   // console.log(myendtime);
              // var mynow=info.now_time;//当前时间;
            var mynows = Date.parse(new Date())/1000;
            function GetRTime() {
                var time_s=myendtime-mynows;
                var d = 0;
                var h = 0;
                var m = 0;
                var s = 0;
                if (time_s >= 0) {
                    d = Math.floor(time_s  / 60 / 60 / 24);
                    h = Math.floor(time_s  / 60 / 60 % 24);
                    m = Math.floor(time_s  / 60 % 60);
                    s = Math.floor(time_s  % 60);
                    //天
                    if(d<10){
                        document.getElementById("t_d").innerHTML ="0"+ d;
                    }else {
                        document.getElementById("t_d").innerHTML = d;
                    }
                    //时
                    if(h<10){
                        document.getElementById("t_h").innerHTML ="0"+ h;
                    }else {
                        document.getElementById("t_h").innerHTML = h;
                    }
                    //分
                    if(m<10){
                        document.getElementById("t_m").innerHTML ="0"+ m;
                    }else {
                        document.getElementById("t_m").innerHTML = m;
                    }

                    //秒
                    if(s<10){
                        document.getElementById("t_s").innerHTML ="0"+ s;
                    }else {
                        document.getElementById("t_s").innerHTML = s;
                    }
                }

                // document.getElementById("t_d").innerHTML =d;
                // document.getElementById("t_h").innerHTML = h
                // document.getElementById("t_m").innerHTML = m
                // document.getElementById("t_s").css = color = "#FFFFFF";
                //document.getElementById("t_s").innerHTML = s;
            }
            var mynows;
            setInterval(function () {
                mynows++;
                GetRTime();
            },1000);

            // 视频及图片
            var banners =document. getElementsByClassName("banners");
            var videoMP4=document.getElementById("videoMP4");
            var banner=document.getElementById("banners");

            videoMP4.src=info.data.banner;

            // banners.src="https://jiekou.coucouchina.com:80" + info.data.img;

            // banners[0].src = "https://jiekou.coucouchina.com:80" + info.data.img;
            // banners[1].src = "https://jiekou.coucouchina.com:80" + info.data.img;
            banners.src="https://www.coucouchina.com/Public" + info.data.img;

            banners[0].src = "https://www.coucouchina.com/Public" + info.data.img;
            banners[1].src = "https://www.coucouchina.com/Public" + info.data.img;


            //console.log(banners);
            for(var i=0;i<banners.length;i++){
                    banners[i].src= "https://www.coucouchina.com/Public" + info.data.img;
              //    }
              //    else {
              //       banners[i].src= "https://jiekou.coucouchina.com/upload/29/2017/04/23/58fc555ef3bfc.mp4"
              // }
            }

            //地区
            var locationCity = document.getElementById("locationCity");
            locationCity.innerHTML = "&nbsp;" + info.data.province + "&nbsp;" + info.data.city;

            //起投金额 及项目总额
            var riseMoney = document.getElementsByClassName("riseMoney");
            var money = info.data.amount.substring(0, 1);
            riseMoney[0].innerHTML = (info.data.amount)/10000 + "万";
            riseMoney[1].innerHTML = info.data.moneys + "万";
            riseMoney[2].innerHTML = info.data.money_marketings + "万";
            //认购人数
            var personNumber3 = document.getElementById("personNumber3");
            personNumber3.innerHTML = info.data.invest_num + "人";

            //小标题
            var state = document.getElementById("state");
            state.innerHTML = info.data.slogen;


            //关键字
            var myTab=info.data.tab;
            var btnLG=document.getElementById("btnLG");

            for(var q=0;q<myTab.length;q++){
               var myTab1=myTab[q].name;
               var myTabArray=myTab1.split(",");
            }
            for(var w=0;w<myTabArray.length;w++){

                var a=document.createElement("a");
                btnLG.appendChild(a);

                a.innerHTML=myTabArray[w];
            }
            //进度条
            var bar=document.getElementById('bar');//进度条
            var total=document.getElementById("total");//按钮
            key = (info.data.money_marketings) / (info.data.moneys);//百分比
            num=(key * 100).toFixed(2);

            bar.style.width=num+'%';
            total.innerHTML=num+'%';
            var barWidth=parseFloat(bar.style.width);
            if(barWidth<=10){
              total.style.right='-48px';
            }else if(barWidth>=100){
               total.style.right=0;
            }
            
            //项目介绍一整块
            var myIntroduces=info.data.introduces;

            var conent2=document.getElementsByClassName("conent2");
            var detail=document.getElementById("detail");

            for(var r=0;r<myIntroduces.length;r++) {
                var conentP=document.createElement("h3");
                conentP.className="conentP";
                detail.appendChild(conentP);

                var coffee = document.createElement("img");
                coffee.className="coffee";
                detail.appendChild(coffee);

                var img_introduce = document.createElement("p");  //创建标题p
                img_introduce.className = "img_introduce";//给标题p，添加class
                detail.appendChild(img_introduce);

                if(myIntroduces[r].img==""){
                    coffee.style.display="none";
                }else{
                    coffee.src = "https://www.coucouchina.com/Public/"+myIntroduces[r].img;
                }

                if(myIntroduces[r].name==""){
                     conentP.style.display="none";
                }else {
                    conentP.innerHTML = myIntroduces[r].name;
                }

                if(myIntroduces[r].intro==""){
                    img_introduce.style.display="none";
                }else {
                    img_introduce.innerHTML = myIntroduces[r].intro;
                }

            }
            //项目介绍——直营门店
            // 直营门店标题
            var detail=document.getElementById("detail");
            var store=document.createElement("p");
            detail.appendChild(store);
            store.innerHTML="直营门店";
            store.id="store";

            var table=document.createElement("table");
            detail.appendChild(table);
            table.id="table";
            var myStore=info.data.store;
            for(var t=0;t<myStore.length;t++){
                tr=document.createElement("tr");
                table.appendChild(tr);
                tr.className="tr";
                td=document.createElement("td");
                td.className="td1";
                tr.appendChild(td);
                td.innerHTML=myStore[t].name;
                td2=document.createElement("td");
                tr.appendChild(td2);
                p=document.createElement("p");
                td2.appendChild(p);
                p.innerHTML=myStore[t].address;
                p.className="site";
            }
            // 融资概况
            $('.company').html('项目公司：'+info.data.company)
            $('.pattern').html('筹集模式：'+info.data.income_mode)
            $('.deadline').html('投资期限：'+info.data.invest_time)
            //融资方案
            var countys=((info.data.amount)/10000);
            var myScheme=info.data.scheme;

            var moneyNumber1=document.getElementById("moneyNumber1");
            moneyNumber1.innerHTML=myScheme.county;//融资总额

            var moneyNumber2=document.getElementById("moneyNumber2");
            moneyNumber2.innerHTML=[parseFloat(myScheme.county)/countys]+"份"; //起投金额

            var moneyNumber3=document.getElementById("moneyNumber3");
            moneyNumber3.innerHTML=info.data.amount; //每份金额

            var sunMoney=parseFloat(myScheme.county)/countys; //每份金额
            var poolMoney=parseFloat(myScheme.unit);  //融资总额


            var moneyNumber4=document.getElementById("moneyNumber4");
            var fh=parseFloat(poolMoney/sunMoney).toFixed(2)+"%";   //分红占比
            moneyNumber4.innerHTML=fh;

            //出资方案   unit/100  融资总额/起投金额

            var money1=document.getElementById("money1");
            money1.innerHTML=myScheme.name;

            var money2=document.getElementById("money2");
            money2.innerHTML=myScheme.province;

            var money3=document.getElementById("money3");
            money3.innerHTML=myScheme.city;

            var money4=document.getElementById("money4");
            money4.innerHTML=myScheme.county;

            var money5=document.getElementById("money5");
             money5.innerHTML=myScheme.address;

            var money6=document.getElementById("money6");
            money6.innerHTML=myScheme.unit;

            var money7=document.getElementById("money7");
            money7.innerHTML=myScheme.name_share;

            var money8=document.getElementById("money8");
            money8.innerHTML=myScheme.name_print;

            var money9=document.getElementById("money9");
            money9.innerHTML=myScheme.money_marketing;
            

            // 回报方案
            // type=2 固化收益 type=1 
            var pattern=info.data.scheme;
            if(pattern.type==2){
                $('.re_part_top2').html(info.data.year+info.data.year_income);
                $('.re_part_top3').css('display','none');
                // $('.special').css('display','none');
                // $('#comeMoney_Table').css('display','none');
            
            }else{
                $('.re_part_top2').html(fh+'*N*M')
                $('.fh').html(fh+'：')
            }
            //平均分红
            var averageMoney=document.getElementById("re_part_bot");
            var myRule=info.data.rule;

            for(var i=0;i<myRule.length;i++){
                var partHtml='';
                partHtml+='<tr>'+
                        '<td>'+myRule[i].name+'</td>'+
                        '<td>'+myRule[i].intro+'</td>'+
                    '</tr>'
                $('#re_part_bot').append(partHtml)
            }
            //股东特权
            var enjoyEquity=info.data.privilege;
            var vipMoney=document.getElementById("enjoyEquity");
            for(var e=0;e<enjoyEquity.length;e++){
                var enjoyHtml='';
                if(!enjoyEquity[e].img&&enjoyEquity[e].intro==""){
                    enjoyHtml+='<span class="enjoyBox">'+
                    '<img src="http://share.coucouchina.com/Public/'+enjoyEquity[e].img+'" alt="" />'+
                    '<span class="eIntro">'+enjoyEquity[e].intro+'</span>'+
                '</span>'
                }else if(!enjoyEquity[e].img==""){
                    enjoyHtml+='<span class="enjoyBox">'+
                    '<img src="http://share.coucouchina.com/Public/'+enjoyEquity[e].img+'" alt="" />'+
                '</span>'
                }else{
                    enjoyHtml+='<span class="enjoyBox">'+
                    '<span class="eIntro">'+enjoyEquity[e].intro+'</span>'+
                '</span>';
                }
                $('.enjoyEquity').append(enjoyHtml);
            }
            //开店信息
            var openShop=document.getElementById("openShop");
            var myPlan=info.data.plan;

            for(var i=0;i<myPlan.length;i++){
                var tr=document.createElement("tr");
                openShop.appendChild(tr);
                var td=document.createElement("td");
                tr.appendChild(td);
                td.className="td_color";
                var p=document.createElement("p");
                td.appendChild(p);

                p.innerHTML=myPlan[i].name;


                var td1=document.createElement("td1");
                tr.appendChild(td1);
                var p1=document.createElement("p");
                td1.appendChild(p1);
                p1.className="p_color";

                p1.innerHTML=myPlan[i].intro
            }
            //股东选拔标准
            var stateMoney=document.getElementById("stateMoney");
            var myChoose=info.data.choose;
            for (var z=0;z<myChoose.length;z++){
                var tr=document.createElement("tr");
                stateMoney.appendChild(tr);
                var td=document.createElement("td");
                tr.appendChild(td);
                td.className="td_color";
                var img=document.createElement("img");
                td.appendChild(img);
                img.src="/Public/img/21.png";
                var td1=document.createElement("td");
                tr.appendChild(td1);
                var p=document.createElement("p");
                td1.appendChild(p);
                p.className="p_color";
                p.innerHTML=myChoose[z].intro
            }
            //风险提示
            var inform_right2=document.getElementById("inform_right2");
            inform_right2.innerHTML=info.data.risk_tip;
            //项目公告
            var inform_right3=document.getElementById("inform_right3");
            inform_right3.innerHTML=info.data.affiche.intro;
                //微信;
            var wxImg=document.getElementById('wxImg');
            wxImg.src='https://www.coucouchina.com/Public/'+info.data.affiche.img;
            var wxh=document.getElementById('wxh');
            wxh.innerHTML='微信号：'+info.data.affiche.name;
            var weiXin=document.getElementById("weiXin");//
            weiXin.innerHTML=info.data.affiche.description;


        },
        error: function () {
        }
    });
//项目介绍选项卡
    function cut() {
        var p = 0;
        var conent = document.getElementsByClassName("left_content");
        var oli = document.getElementsByClassName("inform_left_li");
        var OLA = document.getElementsByClassName("inform_left_a");


        for (var i = 0; i < oli.length; i++) {
            conent[p].style.display = "block";
            OLA[p].style.color = "#b981D1";
            oli[i].idx = i;
            oli[i].onclick = function () {

                var index = this.idx;
                for (var y = 0; y < conent.length; y++) {
                    OLA[y].style.color = "#333333";
                    conent[y].style.display = "none";

                    }
                OLA[index].style.color = "#b981D1";
                conent[index].style.display = "block";
            };
        }
    }

    cut();


    // 点击关注按钮
    function clikconcern() {
        $("#four_ul_li4").click(function () {
            $("#Heart").attr('src', 'PUBLIC/img/8.png');
        })
    }
    clikconcern();
};

// function run(width){

//     var bar = document.getElementById("bar");
//     var total = document.getElementById("total");

//     var numLength=((parseFloat(bar.style.width))-1+(width-0)).toFixed(2);
//     var numLengthB=numLength+"%";
//     bar.style.width=(parseFloat(bar.style.width))-1+(width-0)+"%";
// //console.log(numLengthB)
//             total.innerHTML = bar.style.width;
//     total.innerHTML=numLengthB;
//     if(bar.style.width ==width+"%"){
//         return;
//     }
//     if(bar.style.width=95){
//         total.style.right="-10px"
//     }


// }



// function run(width) {
//     var bar = document.getElementById("bar");
//     var total = document.getElementById("total");
//     var num = 1;
//     bar.style.width = num + "%";
//     total.innerHTML = num + "%";
//     var time = setInterval(function () {
//
//         num++;
//
//         bar.style.width = num + "%";
//         total.innerHTML = num + "%";
//         if (num == width){
//             clearInterval(time)
//         }
//         // if (num=1){
//         //     total.style.right="-45px";
//         // }
//         // if (num=90){
//         //     total.style.right="0";
//         // }
//
//     }, 100);
//
//
// }

//左边导航 向下走的效果；
// window.onscroll = function() {
//     //为了保证兼容性，这里取两个值，哪个有值取哪一个　　
//     /var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     console.log(scrollTop)
// //scrollTop就是触发滚轮事件时滚轮的高度
// }

window.onscroll=function(){

//变量t就是滚动条滚动时，到顶部的距离
    //var inform_left=document.getElementById("inform_left");
var t =document.documentElement.scrollTop||document.body.scrollTop;

    var inform_left =document.getElementById("inform_left");if( t >=600) {
        //当拖动到距离顶部100px处时，左边导航固定，不随滚动条滚动

        inform_left.style.position="fixed";     inform_left.style.top="10%";

   }
else{

//恢复正常
        inform_left.style.position="absolute";        inform_left.style.top="0";}
};


