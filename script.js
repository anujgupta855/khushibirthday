$(document).ready(function () {
    var count = 0;
    document.addEventListener("DOMContentLoaded", (event) => {
      const audio = document.querySelector('audio');
      audio.play().catch((err) => console.log("Audio playback error:", err));
    });
    
  
    $(".tarot-card").click(function () {
      var card = $(this);
      if (count < 11) {
        $(this).removeClass("top").addClass("bottom");
  
        count++;
      }
      if (count == 11) {
        $("div").removeClass("bottom");
  
        count = 0;
      }
      shuffle(card);
    });
  });
  document.getElementById('video1').addEventListener('ended', function () {
    // Hide video1 and show video2
    document.getElementById('video1').style.display = 'none'; 
    document.getElementById('video2').style.display = 'block'; 
    
    // Play video2
    document.getElementById('video2').play();
  });
  
  function shuffle(card) {
    TweenLite.fromTo(
      card,
      0.6,
      {
        x: 410,
        y: -15,
        ease: Expo.easeOut
      },
      {
        x: 0,
        y: 0,
        ease: Expo.easeIn
      }
    );
  }
