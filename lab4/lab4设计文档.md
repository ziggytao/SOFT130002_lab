# Lab4 设计文档

## 网站头图

实现头图的显示需要设置图片路径，并设置` width: 100%; max-height: 700px;`，使图片横向铺满整个屏幕，纵向设置最大高700px，让图片不至于太长。

<img src="https://tva1.sinaimg.cn/large/00831rSTly1gdi129sghyj31c00u0qv9.jpg" alt="头图" style="zoom:80%;" />

--------------------

## 图片展示

在头图下面就是图片展示区域，图片展示通过bootstrap的table和table-bordered来排版，所展示的图片采用了img-responsive和img-rounded，这样图片会自动调整宽度，并且四周带有圆角，更加美观。对table还设置了` width: 90%; margin: 0 auto;`，让表格位于网页中央，并且和边缘有一定间隔。对于每个td，也设置` padding: 15px;`，让图片排列得稍微宽松一些。

<img src="https://tva1.sinaimg.cn/large/00831rSTly1gdi13ugrbzj31c00u0b2b.jpg" alt="图片展示" style="zoom:80%;" />

--------------------

## 页尾

在图片展示之后增加了一个页码元素，当前页码的背景会变为蓝色（未实现切换页面的功能）。页面的右下角“回到顶部”和“刷新页面”两个按钮使用了bootstrap的Glyphicons 字体图标，位置始终固定在右下角。页脚中的相关图片都使用了github的logo代替。

![页脚](https://tva1.sinaimg.cn/large/00831rSTly1gdi13vweu8j31c00u0hdu.jpg)

