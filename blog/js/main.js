/**
 * Created by Li Man on 2017/1/2.
 */
  if(window.innerHeight){
     winHeight=window.innerHeight
  }else if(document.body && document.body.clientHeight){
      winHeight=document.body.clientHeight;
  }
var upper=parseFloat(winHeight)/5;//(parseFloat(innerHeight)-parseFloat(divHeight))/2;
var down=4*parseFloat(winHeight)/5;
$(document).scroll(function(){
    //遍历楼层，为每个h2执行相同操作
    var scrollTop=$('body').scrollTop() ||( document.documentElement.scrollTop + document.body.scrollTop);
	console.log(scrollTop);
    $.each($('.my-title'), function (i, elem) {
       // var divHeight=$(elem).parent().parent().parent().css('height');//每个元素区域的高度
       // var upper=parseFloat(innerHeight)/5;//(parseFloat(innerHeight)-parseFloat(divHeight))/2;
       // var down=4*parseFloat(innerHeight)/5;//upper+parseFloat(divHeight);//可见区域上线和下线


        //$h2距离文档顶部的距离
        //body滚动出文档的距离
        var offset=$(elem).offset().top;

        //console.log('a='+(upper+scrollTop));
        //console.log('offset='+offset);
        //console.log('down='+(down+scrollTop));
        if(offset>(upper+scrollTop) &&(offset<(down+scrollTop))){
            $(elem).addClass('hover');
        }else{
            $(elem).removeClass('hover');
        }
    });

    if($('#skill .my-title').hasClass('hover')){
        var $right=$('.out-container .rightCircle');
        var $left=$('.out-container .leftCircle');

        $.each($right,function(i,elem){
            changeBorderColor(i,elem,'run');
            //var innerDeg=$(elem).parent().parent().parent().children('.innerText').text();//$('.out-container .innerText').innerText;
            //var rotateDeg=225-360*(100-parseFloat(innerDeg.slice(-1,1)));
            //console.log(parseFloat(innerDeg.slice(-1,1)))
            //if(rotateDeg>=90){
            //    $(elem).addClass('circleBorder-red run');
            //}else if(rotateDeg>80 && rotateDeg<90){
            //    $(elem).addClass('circleBorder-blue run');
            //}else{
            //    $(elem).addClass('circleBorder-green run');
            //}
        });
        $.each($left,function(i,elem){
            changeBorderColor(i,elem,'stop_0'+(i+1));
            //var innerDeg=$(elem).parent().parent().parent().children('.innerText').text();//$('.out-container .innerText').innerText;
            //var rotateDeg=225-360*(1-parseFloat(innerDeg));
            //if(rotateDeg>=90){
            //    $(elem).addClass('circleBorder-red stop_0'+(i+1));
            //}else if(rotateDeg>80 && rotateDeg<90){
            //    $(elem).addClass('circleBorder-blue stop_0'+(i+1));
            //}else{
            //    $(elem).addClass('circleBorder-green stop_0'+(i+1));
            //}

        });

        function changeBorderColor(i,elem,event){
			
            var innerDeg=$(elem).parent().parent().parent().children('.innerText').text();//$('.out-container .innerText').innerText;
            innerDeg=innerDeg.substr(0,innerDeg.length-1);
           // var rotateDeg=225-360*(100-innerDeg);
            if(innerDeg>=90){
                $(elem).addClass('circleBorder-red '+event);
            }else if(innerDeg>85 && innerDeg<90){
                $(elem).addClass('circleBorder-blue '+event);
            }else if(innerDeg >75 && innerDeg<85){
                $(elem).addClass('circleBorder-green '+event);
            }else{
                $(elem).addClass('circleBorder-orange '+event);
            }
        }
        //$('.out-container .rightCircle').addClass('circleBorder run');
        //$('.out-container .leftCircle').addClass('circleBorder stop');
    }
});

