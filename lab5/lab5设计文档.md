# lab5设计文档

## 1.获取name

实现方法：利用search函数，先通过` var start = str.search("name=");`来找到开始的位置，然后在子串` str.substring(start,str.length)`中来寻找字符‘&’，这就得到name的参数值结束的位置，最后得到的结果是` str.substring(start+5,end)`，start要加5，因为要去除"name="这5个字符。



## 2.数字翻倍

通过`var f = setInterval(timeTest, 5000);`来实现每5秒运行一次timeTest，运行之前，用`date=new Date()`记录开始的时间，getSeconds()可以获取秒数，用cnt来记录次数。如果当前的秒数小于开始的秒数，就说明分钟已经加了1。当cnt大于等于10，或者当前的秒数小于开始的秒数，就要通过`clearInterval(f)`停止运行f。



## 3.统计出现次数最多的字符

用str来保存输入的字符串，用times来记录各字符出现的次数，用max和max_ch来记录出现的最大次数和出现最多的字符。字符串的遍历方法是`for(var i = 0; i < str.length; i++)`，如果已经有str[i]的记录，就str[i]++,否则，就令str[i] = 1。同时，比较max和times[str[i]]，这样就能得出最次数和相应的字符。

## Github截图

![github截图](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge55jjimz5j31fr0u0nc1.jpg)



## 网页效果图

![网页效果图](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge562asy9vj31fk0u048p.jpg)