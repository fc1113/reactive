window.onload=function(){

    var oDiv=document.getElementById('banner');
    var oUl=oDiv.getElementsByTagName('ul')[0];
    var aImg=oDiv.getElementsByTagName('img');
    var aLi=oUl.children;
    var timer;

    //轮播器初始化
        for(var j=0;j<aLi.length;j++){
          aImg[j].style.zIndex=0;
          aImg[j].style.opacity=0;
          aLi[j].style.color='pink';
          aLi[j].index=j;
        }
        aImg[0].style.opacity=1;
        aImg[0].style.zIndex=1;
        aLi[0].style.color='#999';
        var index=aImg[0].index;
        timer=setInterval(function(){
          index++;
          if(index<aLi.length){
            banner(index);
          }
          else{
            index=0;
            banner(index);
          }
        },3000);



      for(var i=0;i<aLi.length;i++){
        aLi[i].onmouseover=function(){
          clearInterval(timer);
          for(var j=0;j<aLi.length;j++){
            aImg[j].style.zIndex=0;
            //aImg[j].style.opacity=0;
            startMove(aImg[j],'opacity',0);
            aLi[j].style.color='pink';
          }
          startMove(aImg[this.index],'opacity',100);
          aImg[this.index].style.zIndex=1;
          aLi[this.index].style.color='#999';
        }
        aLi[i].onmouseout=function(){
          var index=this.index;
          timer=setInterval(function(){
            index++;
            if(index<aLi.length){
              banner(index);
            }
            else{
              index=0;
              banner(index);
            }
          },3000);
        }

      }
      //轮播模块
      function banner(index){
        for(var j=0;j<aLi.length;j++){
          aImg[j].style.zIndex=0;
          //aImg[j].style.opacity=0;
          startMove(aImg[j],'opacity',0);
          aLi[j].style.color='pink';
        }
        startMove(aImg[index],'opacity',100);
        aImg[index].style.zIndex=1;
        aLi[index].style.color='#999';
      }

}