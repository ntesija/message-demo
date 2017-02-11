var loopHandle = null;

// The messageSystem object is where you should do all of your work
// Use any combination of javascript, HTML and CSS that you feeling
// is appropriate
messageSystem = {
    showMessage: function(msg) {
		var id = this.messageId;
		var color = this.getRandomColorString();
		$("#message-container").append(
		"<div class='message' id='" + id + "' style='background-color:rgb" + color + ";'> \
			<span class='close' onClick='messageSystem.closeMessage(" + id + ")'>X</span> \
			<p>" + msg + "</p> \
		</msg>");
		setTimeout( function() {
			$('#' + id).fadeOut('fast', function() { $(this).remove(); });
		}, 3000);
		this.messageId++;
    },
	messageId: 0,
	getRandomColorString: function() {
		//Creates a string with random rgb values on the lighter side of the scale (150+)
		var rgb = "(" + (Math.floor(Math.random() * (255 - 150)) + 150) + "," + (Math.floor(Math.random() * (255 - 150)) + 150) + "," + (Math.floor(Math.random() * (255 - 150)) + 150) + ")"
		return rgb;
	},
	closeMessage: function(id) {
		$('#' + id).fadeOut('fast', function() { $(this).remove(); });
	}
}



function showMsg() {
    quotes = [
    "What we've got here is failure to communicate.",
    'Go ahead, make my day.',
    "I've got a bad feeling about this.",
    "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
    "I find your lack of faith disturbing.",
    "You're gonna need a bigger boat.",
    "Tell Mike it was only business.",
    "I have come here to chew bubble gum and kick ass, and I'm all out of bubble gum."
    ];
    messageSystem.showMessage(_.sample(quotes));
    
}

function loop() {
    showMsg();
    var rand = Math.round(Math.random() * (3000 - 500)) + 500;
    loopHandle = setTimeout(loop, rand);
}


$(function() {
   $('#msgButton').click(function() {
       var btn = $(this),
      btnTxt = btn.text();
       if (btnTxt === 'Start Messages') {
           btn.text('Stop Messages');
           loopHandle = setTimeout(loop, 500);
       } else {
           btn.text('Start Messages');
           clearTimeout(loopHandle);
           loopHandle = null;
       }
   } );
});
