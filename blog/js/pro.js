/**
 * Created by web on 2017/1/7.
 */



$('.thumbnail .media-img-content').on('click','img',function(e){
  var img=$(this).data("src");
  console.log(img);
  $('#proImg').attr('src',img);

})


//$('.thumbnail .media-img-content').each('img','click',function(i,value){
//  console.log(i)
//})