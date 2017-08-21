//offsetWidth  计算的是盒模型的宽  并不是单纯的Width，
			function getStyle(obj,name){
				if(obj.currentStyle){
					return obj.currentStyle[name];
				}
				else{
					return getComputedStyle(obj,false)[name];
				}
			}

			function startMove(obj,name,iTarget){
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					var speed=0;
					var curr;
					if(name=='opacity'){
						//0.07*100=7.00000001,Math.round()四舍五入
						curr=Math.round(parseFloat(getStyle(obj,name))*100);
					}
					else{
				   curr=parseInt(getStyle(obj,name));
				  }
				   speed=(iTarget-curr)/50;//10
				   speed=speed>0?Math.ceil(speed):Math.floor(speed);
					if(curr==iTarget){
						clearInterval(obj.timer);
					}
					else{
						if(name=='opacity'){
							obj.style[name]=(curr+speed)/100;
							obj.style.filter="alpha(opacity:"+(curr+speed)+")";
						}
					obj.style[name]=curr+speed+'px';
					//alert(obj.offsetWidth+","+speed);

					}
				},30);
			}
