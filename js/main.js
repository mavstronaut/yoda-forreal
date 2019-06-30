
    // Constructors and Objects for Fighters
    
    // Combat Actions

    // Movement Actions

    // Turn Order

    // Time Over- Game End HTML; Create JS Timer using setTimeout() standard function;    
    
    // Game Start

    // Instructions Screen

    // Create grid (show HTML elements)


    // Game Audio, leave this here for later

    $(document).ready(function() {
        var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "./assets/audio/Star-Wars-Duel-of-the-Fates.mp3");
        $("#play-button").on("click", function() {
            audioElement.play();
            console.log('audio on');
        });
        $("#mute-button").on("click", function() {
            audioElement.pause();
            console.log('audio off');
        });

        $("#startButton").on("click", function() {
            $("#mainGame").css("display", "block");
        })
    
    
    });
