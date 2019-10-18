window.onload = function (ev) {
    //1、获取标签
    var allLis = $('tab_header').getElementsByTagName('li');
    var allDom = $('tab_content').getElementsByClassName('dom');

    //2、遍历监听
    for (var i = 0; i < allLis.length; i++) {
        var li = allLis[i];
        li.index = i;
        li.onmousemove = function (ev) {//鼠标进入
            //1、清除同级别的选中样式类
            /*思路是;当鼠标移到li上后,先清除所有li上面的selected样式，然后再添加selected样式*/
            for (var j = 0; j < allLis.length; j++) {
                allLis[j].className = '';//将class属性设置为空白，实现了清除样式
                allDom[j].style.display = 'none';
            }
            //2、添加所选中的li标签样式类
            this.className = 'selected'//鼠标移动li上面后，添加selected样式
            allDom[this.index].style.display = 'block';
        }


    }
    //2、遍历监听-闭包
    /* for (var i = 0; i < allLis.length; i++) {
         var li = allLis[i];
         //闭包
         (function (i) {
             li.onmousemove = function (ev) {//鼠标进入
                 //1、清除同级别的选中样式类
                 /!*思路是;当鼠标移到li上后,先清除所有li上面的selected样式，然后再添加selected样式*!/
                 for (var j = 0; j < allLis.length; j++) {
                     allLis[j].className = '';//将class属性设置为空白，实现了清除样式
                     allDom[j].style.display = 'none';

                 }
                 //2、添加所选中的li标签样式类
                 this.className = 'selected'//鼠标移动li上面后，添加selected样式
                 allDom[i].style.display = 'block';
             }
         })(i)
     }*/

};

/*docment少了一个t*/

/*function $(id) {
    return typeof id === "string" ? documen.getElementById(id) : null;

}*/


function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : null;
}

//