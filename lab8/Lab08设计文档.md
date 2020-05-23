# Lab08设计文档

陶越    16307110469



## 任务一

图片的切换通过修改wrap的left属性来完成，具体做法是定义rightonclick和leftonclick，分别对应点击右键头和左箭头。用pic来记录当前图片的编号，用btnnumber来记录右下角span的编号。当点击箭头时，会将当前span的类置为空，然后pic和btnnumber都加一，如果pic和btnnumber超过边界，就恢复为初始值。初始pic为1，btnnumber为0，wrap的left值等于（pic * 600 * -1）px。



## 任务二

任务二的具体代码如下
```javascript
var time = setInterval(rightonclick,2000);
container.onmouseover = function () {
    clearInterval(time);
};
container.onmouseout = function () {
    time = setInterval(rightonclick,2000);
};
```

自动轮播的效果可以通过每隔2秒就调用一次rightonclick函数来实现，通过container.onmouseover和container.onmouseout可以实现当鼠标移入轮播区域内时，停止自动播放，当鼠标不在轮播区域内时，开始自动播放。



## 任务三

实现的方法是：遍历一遍btns.children，令每个btns.children[i]的onclick都等于调用一个函数，此函数的返回值也是一个函数，在这个函数中，当前span的类会被置为空，即`btns.children[btnnumber].className = "";`,然后pic和btnnumber更新为i+1和i，再`btns.children[btnnumber].className = "on";`最后修改wrap的left值，这样就可以实现点击数字切换图片。



## 任务四

本部分是用jQuery实现的。

`$("td").click(on);`是使在点击表格某一单元格时，调用on函数。在on函数中，通过`var tdnode = $(this);`获得当前td，`var text = tdnode.text();`获得当前td中的文字，`var input = $("<input type='text' value='" + text + "'/>");`生成了一个input元素，value为之前获取的text。然后，修改一下input的样式，并通过`tdnode.html(input);input.focus();`把input放进td，并使光标自动定位于首个字符或汉字前。

下面的语句实现了点击其他地方之后在界面上显示修改后的内容

```javascript
input.blur(function () {
    tdnode.html(input.val());
});
```

下面这一部分是为了防止多次点击同一单元格之后单元格内的文字消失

```javascript
if(tdnode.children('input').length > 0){
    return false;
}
```

