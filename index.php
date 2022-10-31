<!DOCTYPE HTML>
<head>
  <title>Pure</title>
  <meta charset="UTF-8">
  <link rel="shortcut icon" href="http://localhost/resources/favicon.ico"/>
  <link rel="stylesheet" type="text/css" href="resources/s.css">
  <script type="text/javascript" src="resources/s.js" async></script>
</head>
<html>
<body id="action">
<div class="box">
</div>

  <form onsubmit="StageOne(document.getElementById('search').value)">
    <input id="search" type="text" autocomplete="off" autofocus list="bookmarks">
    <datalist id="bookmarks">
      <?php
      if (($h = fopen("resources/bookmark.csv", "r")) !== false) {
        while (($data = fgetcsv($h, 1000, ",")) !== false) {
            foreach ($data as $i) {
              echo "<option value='$i'>";
            };
          };
        };
      fclose($h);
      ?>
    </datalist>
  </form>
  <footer>
    <?php
      echo "Updated: ".date("d/m/Y H:i:s.", filemtime("index.php"));
    ?>
  </footer>
</body>
</html>
