<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>
<hr/>
<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear)
//echo "This was output using PHP";
//echo "This page was generated: " . date("M dS, Y"). "<hr/>";
//echo "<br>"; //notice we must echo tags in php.
$d = date("l, M dS , Y H:i:s");
$y = date("Y");
$days = date("z");
$total = 365;
if(($y % 4 == 0 && $y % 100 != 0) || $y % 400 == 0){
    ++$total;
}
echo "This page was generated: " . $d . "<hr/>";
$remaining = $total - $days;
echo "There are ". $remaining . " days left in the year";

?>
</body>
</html>