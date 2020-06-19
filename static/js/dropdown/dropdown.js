window.onload=function(){

    //获取所有+按钮
    var increment=document.getElementsByClassName("increase");

    for(var i=0;i<increment.length;i++)
    {
        //为a标签添加index属性，用于记录下标
        increment[i].index=i;

        //点击+数量增加的功能函数
        increment[i].onclick=function()
        {
            var flag=this.index;
            //获取当前a标签对应的那个数量框
           var q=document.getElementsByClassName("quantity")[flag];

           var newvalue=parseInt(q.value)+1;

           //用q.value=parseInt(q.value)+1
           //会导致数值只在点击的一瞬间发生变化，然后又跳回1
           q.setAttribute('value',newvalue);

           //更新此商品对应的‘小计’
           changeSum(flag,newvalue);
        }
    }

    //获取所有-按钮
    var decrement=document.getElementsByClassName('decrease');

    //点击-数量减少的功能函数
    for(var j=0;j<decrement.length;j++)
    {
        decrement[j].index=j;

        decrement[j].onclick=function()
        {
            var flag=this.index;
             //获取当前a标签对应的那个数量框
           var q=document.getElementsByClassName("quantity")[flag];

           if(parseInt(q.value)>1)
           {
            var newvalue=parseInt(q.value)-1;

            q.setAttribute('value',newvalue);

            changeSum(flag,newvalue);
           }
        }
    }

    //获取所有删除按钮
    var del=document.getElementsByClassName("deleteItem");

    for(var k=0;k<del.length;k++)
    {
        del[k].index=k;

        del[k].onclick=function(){

            //alert(this.index);
            var flag=this.index;

            var item=document.getElementsByClassName("item")[flag];

            var itemList=document.getElementsByClassName("item-list")[0];

            itemList.removeChild(item);

            //更新商品的下标
            updateIndex();
        }
    }

    //结算功能
    var calculate=document.getElementById('calculate');

    calculate.onclick=function(){
        var radios=document.getElementsByName('p-radio');

        var sumPrice=0;

        var p=document.getElementsByClassName('onlySum');

    
        //var count=0;

        for(var m=0;m<radios.length;m++)
        {
            if(radios[m].checked==true)
            {
                sumPrice=sumPrice+parseInt(p[m].innerHTML);
            }
        }

        //alert("现在有"+count+"个商品被选中");
        document.getElementsByClassName("sum-price")[0].innerHTML=sumPrice;
    }

    
}

//更新每个商品的‘小计’
function changeSum(flag,num){
    //获取对应单价所在的标签
    var temp=document.getElementsByClassName("onlyPrice")[flag];

    //获取单价
    var unitPrice=temp.innerHTML;

    //计算新的小计价格
    var newPrice=parseInt(unitPrice)*num;

    var sum=document.getElementsByClassName("onlySum")[flag];

    sum.innerHTML=newPrice;
}

//更新下标
function updateIndex(){
    var del=document.getElementsByClassName("deleteItem");

    for(var i=0;i<del.length;i++)
    {
        del[i].index=i;
    }
}

//设置全选/全不选的功能
function setAll(){
    var box=document.getElementById('allchecked');

    var radios=document.getElementsByName('p-radio');

    //alert(box.checked);

    if(box.checked==false)
    {
        for(var i=0;i<radios.length;i++)
        {
            radios[i].checked=false;
        }
    }else{
        for(var i=0;i<radios.length;i++)
        {
            radios[i].checked=true;
        }
    }
}

// function updateSum(){
//     var radios=document.getElementsByName('p-radio');

//     var sumPrice=0;

//     var p=document.getElementsByClassName('onlySum');

    
//     var count=0;

//     for(var m=0;m<radios.length;m++)
//     {
//         if(radios[m].checked==true)
//         {
//             count++;
//         }
//     }

//     alert("现在有"+count+"个商品被选中");
//     //document.getElementsByClassName("sum-price")[0].innerHTML=sumPrice;
// }