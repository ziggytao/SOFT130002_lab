# Lab10 文档

陶越 16307110469



## Exercise 7

### PDO

![img1](https://tva1.sinaimg.cn/large/007S8ZIlgy1gfjrfk13zdj31d70u0dok.jpg)

 通过PDO连接数据库的结果如上图所示。

首先，通过`$pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS); `与数据库建立了连接，然后通过`$sql = "select * from Artists order by LastName"; $result = $pdo->query($sql);`执行sql语句，得到结果$result。通过`while ($row = $result->fetch()) {
echo $row['ArtistID'] . " - " . $row['LastName'] . "<br/>";  }`可以逐行输出ArtistID和对应的LastName。最后要关闭连接。

### Mysqli

![img2](https://tva1.sinaimg.cn/large/007S8ZIlgy1gfjrktrp6jj31d70u043g.jpg)

上图是通过Mysqli连接数据库的结果。

首先通过mysqli_connect()函数建立与数据库的连接，函数的参数是host、user、password、dbname，返回一个连接。然后通过mysqli_query()执行sql，参数是之前的connection和要执行的sql，返回result。mysqli_fetch_assoc()可以得到一行结果，

```php
echo '<option value="' . $row['GenreID'] . '">'; 
echo $row['GenreName'];
echo "</option>";
```

上面这段代码是输出了一个option，value是GenreID，选项文字内容是GenreName。



## Exercise 8

![img3](https://tva1.sinaimg.cn/large/007S8ZIlgy1gfjrs6mnu4j31dd0u01kx.jpg)

上图是exercise8的结果。

### outputArtists()

outputArtists()函数负责按照姓氏的顺序显示30位artist，点击相应的姓之后会在页面的URL中加上相应的id。

首先用PDO的形式与art数据库建立连接，从中得到30位artist的信息，而且按照姓氏字母顺序排序。

```php
echo '<a href="' . $_SERVER["SCRIPT_NAME"] . '?id=' . $row['ArtistID'] . '" class="';
if (isset($_GET['id']) && $_GET['id'] == $row['ArtistID']) echo 'active ';
echo 'item">';
echo $row['LastName'] . '</a>';
```

上面的代码输出了一个html超链接，链接的href就是当前php文件的路径加上id。如果当前页面的id与artistid相同，就在class中加上active。链接显示的文字就是artist的lastname。

最后通过`$pdo = null;`来结束与数据库的连接。

### outputPaintings()

outputPaintings()负责显示画家的画作信息。

```php
$sql = 'select * from Paintings where ArtistId=' . $_GET['id'];
$result = $pdo->query($sql);
```

上面的代码可以得到特定AtristId的painting的信息，然后会逐项显示这些painting。

### outputSinglePainting()
outputSinglePainting()用于显示单个的painting。该函数接受一个参数$row，即一行painting的信息。`echo '<img src="images/art/works/square-medium/' .$row['ImageFileName'] .'.jpg">';`输出图片；`echo $row['Title'];`输出标题；`echo $row['Excerpt'];`输出描述。



## Exercise 9

执行sql的方式有query()，exec()，和预处理语句prepare()和execute()。

### query()

query()的参数是一个要执行的sql语句，返回一个PDOStatement对象。

### exec()

exec()的参数也是一个要执行的sql语句，返回执行查询时受影响的行数，该方法通常用于INSERT，DELETE和UPDATE语句。

### 预处理语句

预处理语句包括prepare()和execute()两种方法。首先，通过prepare()方法做查询准备工作，然后通过execute()方法执行查询。

prepare()的参数包括要处理的sql语句，sql语句中可以预留参数，在PDO中的形式为VALUES (:firstname, :lastname, :email)。然后可以通过bindParam()或者bindValue()来绑定参数。

预处理语句的优点在于：大大减少了分析时间，因为只做了一次查询，但可以多次执行sql语句；预处理语句通过绑定参数减少了服务器带宽，只需要发送查询的参数，而不是整个语句；预处理语句还可以有效针对SQL注入。



## Exercise 10

![img4](https://tva1.sinaimg.cn/large/007S8ZIlgy1gfjumihlnjj31da0u01l0.jpg)

![img5](https://tva1.sinaimg.cn/large/007S8ZIlgy1gfjv2nf1glj31db0u07fc.jpg)

exercise10的效果如上图所示。

上图中展示了不同体裁的图片和体裁名称，点击图片或者名称会跳转到对应体裁的页面。

###  constructGenreLink()

这个函数可以根据体裁的id和一个标签，生成一个链接，标签可以是文字，也可以是一个img tag。点击链接时，会执行genre.php，并且id等于该体裁的id。

### outputSingleGenre()

这个函数展示单个的体裁，里面包括一张图片和体裁的名称。

### outputGenres()

这个函数通过PDO与数据库链接，获得所有体裁的GenreId, GenreName, Description并展示。