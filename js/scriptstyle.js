
var box=document.getElementById('box')
var list=document.getElementById('list').children
var one=document.getElementById('one')
var left=document.getElementById('left')
var right=document.getElementById('right')
var num=0;
var timer;
timer=setInterval(function(){
    num++;
    if(num==3){
        num=0
    };
    //移动
    box.style.transform='translateX('+-num*750+'px)';

    for(i=0;i<list.length;i++){
        list[i].removeAttribute('class')
    }
    //圆点变色
    list[num].setAttribute('class','current')
},2000)
// 鼠标移入移出
one.onmouseenter=function(){
    clearInterval(timer)
}
//鼠标移出
one.onmouseleave=function(){
    timer=setInterval(function(){
    num++;
    if(num==3){
        num=0
    };
    //移动
    box.style.transform='translateX('+-num*750+'px)';

    for(i=0;i<list.length;i++){
        list[i].removeAttribute('class')
    }
    //圆点变色
    list[num].setAttribute('class','current')
},1000)
}
// 点击圆点，移动图片，圆点自身变色
    for(var i=0;i<list.length;i++){
        // 动态增加属性
        list[i].setAttribute('index',i)
        list[i].onmouseenter=function(){
            // 获取属性
            num=this.getAttribute('index')
            for(t=0;t<list.length;t++){
                list[t].removeAttribute('class')
            }
            box.style.transform='translateX('+-num*750+'px)';
            this.setAttribute('class','current')
        }
    }
// 左右按钮点击
    left.onclick=function(){
        num--;
        if(num==-1){
            num=2
        }; 
        box.style.transform='translateX('+-num*750+'px)';
        for(t=0;t<list.length;t++){
                list[t].removeAttribute('class')
            }
            list[num].setAttribute('class','current')
    }
    right.onclick=function(){
        num++;
        if(num==3){
            num=0
        };
        box.style.transform='translateX('+-num*750+'px)';
        for(d=0;d<list.length;d++){
            list[d].removeAttribute('class')
        }
        list[num].setAttribute('class','current')
    }
    // 下拉框

    
