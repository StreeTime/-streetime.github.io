var term = ""; //global var

function go(url,con,ext) {
  window.open(url + term.slice(2).split(" ").join(con) + ext);
  document.getElementById("search").focus().value(""); //clears, and returns focus to, the search bar
}

function bookmarkGo(url) {
  url = term.split('|')[1];
  window.open(url);
  document.getElementById("search").focus().value(""); //clears, and returns focus to, the search bar
}

function research() {
  var FirstLetter = term.charAt(0);
  var SecondLetter = term.charAt(1);
  var ThirdLetter = term.charAt(2);

  if (FirstLetter == "[") {
    bookmarkGo(term);
    return;
  };

  switch (SecondLetter) {
    case " ": //this is a search. find search engine from first letter
      switch (FirstLetter) { //eg : go(root url,connector,extension)
        case "a": go("https://www.amazon.co.uk/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=","+",""); break;
        case "b": go("https://www.bing.com/search?q=","+",""); break;
        case "c": go("https://www.desktopbackground.org/search?kwd=","",""); break;
	      case "i": go("https://www.bing.com/images/search?q=","+","&qft=+filterui:imagesize-custom_2560_1440"); break;
        case "l": go("https://genius.com/search?q=","+",""); break;
        case "n": go("https://search.nixos.org/packages?channel=22.05&from=0&size=50&sort=relevance&type=packages&query=","-",""); break;
        case "r": go("https://libreddit.spike.codes/search?q=","",""); break;
        case "s": go("https://stackoverflow.com/search?q=","+",""); break; //do i want stack exchange??
        case "t": go("https://translate.google.com/#auto/en/","+",""); break;
        case "v": go("https://www.bing.com/videos/search?q=","+",""); break;
        case "w": go("https://en.wikipedia.org/w/index.php?search="," ","&title=Special%3ASearch&fulltext=1&ns0=1"); break;
        case "y": go("https://www.youtube.com/search?q=","+",""); break;
        case "4": go("https://boards.4chan.org/search#/","",""); break;
      } //close switch
    break; //case break
    case "/": //this is a link (reddit or 4chan) find out which, go link
      switch (FirstLetter) {
        case "4": go("https://boards.4channel.org/","","/catalog"); break;
    break; //case break
    default : //standard search
      term = "aa" + term; //add two letters that will be removed in go
      go("https://duckduckgo.com/?t=ffab&q=","+","");
  }
}

function StageOne(enteredtext) {
  term = enteredtext;

  if (term.length == 0) {
    return;
  }
  if (term.length == 1) {
    switch (term) {
      case "2": window.open("/resources/02.jpg"); break;
      case "a": window.open("https://amazon.co.uk"); break;
      case "b": window.open("http://192.168.1.254/"); break;
      case "f": window.open("https://facebook.com"); break;
      case "i": window.open("https://images.google.co.uk"); break;
      case "l": window.open("https://genius.com"); break;
      case "p": window.open("http://192.168.1.247/admin/"); break;
      case "r": window.open("https://www.reddit.com/r/all/"); break;
      case "t": window.open("https://twitter.com"); break;
      case "w": window.open("https://wikipedia.org"); break;
      case "y": window.open("https://youtube.com"); break;
    }
  }
  if (term.length > 1) {
      research();
  }
}
