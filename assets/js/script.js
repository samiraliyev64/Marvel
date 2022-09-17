const myBtn = document.querySelector("#top");

myBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Slick
$(".slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autplaySpeed: 1500,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

//Load Effect
$(function () {
  function count($this) {
    var current = parseInt($this.html(), 10);
    $this.html(++current);
    if (current == 650) {
      return;
    }
    if (current !== $this.data("count")) {
      setTimeout(function () {
        count($this);
      }, 8);
    }
  }
  $("#likes").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("0");
    count($(this));
  });
});

$(function () {
  function count($this) {
    var current = parseInt($this.html(), 10);
    $this.html(++current);
    if (current == 500) {
      return;
    }
    if (current !== $this.data("count")) {
      setTimeout(function () {
        count($this);
      }, 10);
    }
  }
  $("#comments").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("0");
    count($(this));
  });
});

$(function () {
  function count($this) {
    var current = parseInt($this.html(), 10);
    $this.html(++current);
    if (current == 130) {
      return;
    }
    if (current !== $this.data("count")) {
      setTimeout(function () {
        count($this);
      }, 50);
    }
  }
  $("#purchases").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("0");
    count($(this));
  });
});

//Typewriter effect
consoleText(["WELCOME TO MARVEL'S GAMING WORLD."], "text", ["wheat"]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";
      visible = true;
    }
  }, 400);
}
