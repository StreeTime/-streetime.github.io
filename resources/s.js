var term = ""; //global var

function go(url,con,ext) {
  window.open(url + term.slice(2).split(" ").join(con) + ext); // this cleans up the search text into a full link
  document.getElementById("search").focus().value(""); //clears, and returns focus to, the search bar
}

function research() {
  var FirstLetter = term.charAt(0);
  var SecondLetter = term.charAt(1);
  var ThirdLetter = term.charAt(2);

  if (FirstLetter == "[") {
    term = term.substring(0,2) + term.split('|')[1];
    go("","",""); // send blank variables to fix the complications brought by having to convert searches
    return;
  };

  if (SecondLetter == "/") {
    switch (FirstLetter) {
      case "4": window.open("https://boards.4chan.org/" + term.substring(0,2)); break;
      case "r": window.open("https://www.reddit.com/r/" + term.substring(0,2)); break;
      window.alert("unknown usage");
      return;
    }
  }

  if (SecondLetter == " ") {
    switch (FirstLetter) { //eg : go(root url,connector,extension)
      case "a": go("https://www.amazon.co.uk/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=","+",""); break;
      case "b": go("https://www.bing.com/search?q=","+",""); break;
      case "c": go("https://www.desktopbackground.org/search?kwd=","",""); break;
      case "i": go("https://www.bing.com/images/search?q=","+","&qft=+filterui:imagesize-custom_2560_1440&form=IRFLTR&first=1&tsc=ImageHoverTitle"); break;
      case "l": go("https://genius.com/search?q=","+",""); break;
      case "n": go("https://search.nixos.org/packages?channel=23.05&from=0&size=50&sort=relevance&type=packages&query=","-",""); break;
      case "r": go("https://www.reddit.com/search/?q=","",""); break;
      case "s": go("https://stackoverflow.com/search?q=","+",""); break; //do i want stack exchange??
      case "t": go("https://translate.google.com/#auto/en/","+",""); break;
      case "v": go("https://www.bing.com/videos/search?q=","+",""); break;
      case "w": go("https://en.wikipedia.org/w/index.php?search="," ","&title=Special%3ASearch&fulltext=1&ns0=1"); break;
      case "y": go("https://www.youtube.com/search?q=","+",""); break;
    } // close switch, default is unnecessary
  } // close if
  term = "aa" + term; //add two letters that will be removed in go
  go("https://duckduckgo.com/?t=ffab&q=","+",""); // this picks up anything who is not a bookmark or a devised search term. aka default behaviour
}

function StageOne(enteredtext) {
  term = enteredtext;

  if (term.length == 0) {
    return;
  }
  if (term.length == 1) {
    switch (term) {
      case "1": window.open("/resources/01.jpg"); break;
      case "2": window.open("/resources/02.jpg"); break;
      case "3": window.open("/resources/03.jpg"); break;
      case "4": window.open("/resources/04.jpg"); break;
      case "5": window.open("/resources/05.jpg"); break;
      case "6": window.open("/resources/06.jpg"); break;
      case "a": window.open("https://amazon.co.uk"); break;
      case "b": window.open("http://192.168.1.254/"); break;
      case "f": window.open("https://facebook.com"); break;
      case "g": window.open("https://github.com"); break;
      case "i": window.open("https://images.google.co.uk"); break;
      case "l": window.open("https://genius.com"); break;
      case "p": window.open("https://www.pixiv.net/en/"); break;
      case "r": window.open("https://www.reddit.com/r/all/"); break;
      case "t": window.open("https://www.tumblr.com"); break;
      case "w": window.open("https://wikipedia.org"); break;
      case "y": window.open("https://youtube.com"); break;
    }
  }
  if (term.length > 1) {
      research();
  }
}
