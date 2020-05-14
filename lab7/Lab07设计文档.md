# Lab07设计文档

陶越 16307110469

--------

lab7的内容主要是通过js DOM来生成元素，通过js来修改CSS。

由于四个部分的结构基本一致，所以采用循环的方式来解决。每次循环生成一个item，类名为“item”。通过`var main = document.getElementsByClassName("flex-container justify");`可以得到类为"flex-container justify"的元素，由于只有一个这样的元素，所以main[0]就是item的父元素。通过`main[0].appendChild(item);`让item成为main[0]的子元素。

接下来是向item中依次加入各种元素，包括head、author_info、photos、visit_btn。

### 1 head

head的标签应该是h4，`var head = document.createElement("h4");`就可以生成head。向head中添加文字的方法是，先生成一个node，在使node成为head的子元素，即：

```
var node = document.createTextNode("Genre : "+works[i].tips);
head.appendChild(node);
```

最后`item.appendChild(head);`，让head成为item的子元素，这样就会被包含在item中，后面的也是类似的方法。

### 2 author_info

author_info是一个类名为inner-box的div，包括了author和lifetime，author是h3，lifetime是h5。让author的float值为left，lifetime的display值为inline-block，就可以让lifetime排在author的左边，然后设置margin、padding让其对齐。



### 3 photos

photos包括一个h3元素和数张图片，在works中给出了图片的名称，这也就是图片的路径。通过`for(var j = 0; j < works[i].photos.length; j++)`这样一个循环来添加图片，图片的类名为photo，`pic.src = works[i].photos[j];`可以设置图片的src。



### 4 visit_btn

生成一个button元素，其中的visit文字是h5，由于h5默认有margin，需要`h5.style.margin = "0px";`来清除默认margin。

