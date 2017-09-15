$(document).ready(function(){
        //  JavaScript string containing JSON syntax and converted it to Javascript variable
        var quote = ' {"kalam": [ '+
                    ' "If you want to shine like a sun. First burn like a sun.", ' +
                    ' "Without your involvement you can\'t succeed. With your involvement you can\'t fail.", ' +
                    ' "Man needs difficulties in life because they are necessary to enjoy the success.", ' +
                    ' "Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.", ' +
                    ' "All Birds find shelter during a rain. But Eagle avoids rain by flying above the Clouds.", ' +
                    ' "Excellence is a continuous process and not an accident.",' +
                    ' "All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents.", ' +
                    ' "You have to dream before your dreams can come true.", ' +
                    ' "Those who cannot work with their hearts achieve but a hollow, half-hearted success that breeds bitterness all around.", ' +
                    ' "Be more dedicated to making solid achievements than in running after swift but synthetic happiness.", ' +
                    ' "Great dreams of great dreamers are always transcended.", ' +
                    ' "To succeed in your mission, you must have single-minded devotion to your goal.", ' +
                    ' "Those who cannot work with their hearts achieve but a hollow, half-hearted success that breeds bitterness all around." ], ' +

                    ' "younus": [ ' +
                    ' "People should wake up in the morning and say \'I am not a job seeker, I am a job-creator.", ' +
                    ' "All human beings are born entrepreneurs. Some get a chance to unleash that capacity. Some never got the chance, never knew that he or she has that capacity.", ' +
                    ' "The fact that the poor are alive is clear proof of their ability.", ' +
                    ' "Poverty is unnecessary.", ' +
                    ' "In my experience, poor people are the world\'s greatest entrepreneurs. Every day, they must innovate in order to survive. They remain poor because they do not have the opportunities to turn their creativity into sustainable income.", ' +
                    ' "I am proposing to create another kind of business, based on \'selflessness\' that is in all of us. I am calling it social business.", ' +
                    ' "One day our grandchildren will go to museums to see what poverty was like.", ' +
                    ' "All people are entrepreneurs, but many don\'t have the opportunity to find that out.", ' +
                    ' "The poor themselves can create a poverty-free world all we have to do is to free them from the chains that we have put around them.", ' +
                    ' "A culture that holds people back should and can be changed", ' +
                    ' "My greatest challenge has been to change the mindset of people. Mindsets play strange tricks on us. We see things the way our minds have instructed our eyes to see." ], ' +

                    ' "linus": [ ' +
                    ' "Software is like sex: it\'s better when it\'s free.", ' +
                    ' "Talk is cheap. Show me the code.", ' +
                    ' "The Linux philosophy is \'Laugh in the face of danger\'. Oops. Wrong One. \'Do it yourself\'. Yes, that\'s it.", ' +
                    ' "Intelligence is the ability to avoid doing work, yet getting the work done.", ' +
                    ' "Shareware tends to combine the worst of commercial software with the worst of free software.", ' +
                    ' "No-one has ever called me a cool dude. I\'m somewhere between geek and normal.", ' +
                    ' "Those that can, do. Those that can\'t, complain.", ' +
                    ' "That\'s what makes Linux so good: you put in something, and that effort multiplies. It\'s a positive feedback cycle.", ' +
                    ' "Intelligence is the ability to avoid doing work, yet getting the work done.", ' +
                    ' "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.", ' +
                    ' "Given enough eyeballs, all bugs are shallow.", ' +
                    ' "Microsoft isn\'t evil, they just make really crappy operating systems." ' +
                    ' ]} ';
        var obj = JSON.parse(quote);

        // hiding blockquote and #choose
        $("blockquote").hide();
        $("#choose a").hide();

        var a = 0;
        var clicked = "";
        var count = 0;
        var random = [];

        // when clicking in a picture
        $("#box div a").click(function(event){
          event.preventDefault();
          clicked = $(this).attr('href');
          count = 0;

          //if user clicked on showed picture again it will do nothing
          if (a!=0)
            return false;

          // showing clicked picture and quote
          $("#box div img, #box div h3").fadeOut(507, function(){
            if(clicked == "younus"){
              $("body").css("background-color", "#31708F");
              $("body").css("color", "black");
              $("#box div:odd img").attr('src', 'https://dl.dropboxusercontent.com/s/hmjarkmpjcxr2oh/younus.jpg?dl=0');
              $("#box div:odd h3").text("Muhammad Yunus");
              $("#box div:odd img, #box div:odd h3").fadeIn(507);
              $("#box div:odd a").attr('href', 'younus').css("cursor", "default");
            }
            else if(clicked == "linus"){
              $("body").css("background-color", "#3C763D");
              $("body").css("color", "black");
              $("#box div:odd img").attr('src', 'https://dl.dropboxusercontent.com/s/ydjyanwkr155lbp/linus.jpg?dl=0" class="img-responsive img-circle');
              $("#box div:odd h3").text("Linus Torvalds");
              $("#box div:odd img, #box div:odd h3").fadeIn(507);
              $("#box div:odd  a").attr('href', 'linus').css("cursor", "default");
            }
            else{
              $("body").css("background-color", "#A94442");
              $("body").css("color", "black");
              $("#box div:odd img, #box div:odd h3").fadeIn(507);
              $("#box div:odd  a").css("cursor", "default");
            }
          });

          // changing #choose
          $("#choose h4").hide();
          $("#choose a").show();

          // showing quotes
          random[1] = Math.floor( Math.random()*(obj[clicked].length) );
          random[0] = random[1];
          $("blockquote").prepend("<p>"+ obj[clicked][random[1]] +"</p>");
          $("blockquote").show(915);
          a = 1;

        });  //end picture click event

          // for clicking new quote
          $("blockquote a.right").click(function(){
                $("blockquote p").remove();
                random[0] = random[1];
                random[1] = Math.floor( Math.random()*(obj[clicked].length) );
                //if it generates same number again 
                random[0] == random[1] ? random[1] = Math.floor( Math.random()*(obj[clicked].length) ) : true;
                $("blockquote").prepend("<p>"+ obj[clicked][random[1]] +"</p>");
          });

          // for clicking previous
          $("blockquote a.left").click(function(){
            $("blockquote p").remove();
            $("blockquote").prepend("<p>"+ obj[clicked][random[0]] +"</p>");
            random[1] = random[0];
          });

          // for clicking Choose Another, reset everything
          $("#choose a").click(function(event){
            event.preventDefault();
          $("#box div:odd img, #box div:odd h3").fadeOut(307, function(){
            $("body").css("background-color", "sandybrown");
            $("body").css("color", "#333333");
            $("#box div:odd img").attr('src', 'https://dl.dropboxusercontent.com/s/lf5q20kv8gjvjpn/kalam.jpg?dl=0');
            $("#box div:odd h3").text("A. P. J. Abdul Kalam");
            $("#box div:odd a").attr('href', 'kalam');
            $("#box div img, #box div h3").fadeIn(307);
            $("blockquote").hide();
            $("#choose h4").show();
            $("#choose a").hide();
            $("blockquote p").remove();
            a = 0;
            $("#box div:odd  a").css("cursor", "pointer");
            });
          });

          //for tweet
          $("#tweet").click(function(e){
            e.preventDefault();
            // console.log( obj[clicked][count] );
            window.open("https://twitter.com/intent/tweet?text="+obj[clicked][random[1]]+"");
          });

      });