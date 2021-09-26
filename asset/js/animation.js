$(document).ready(function(){

    $(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller();

        var mainAni = new TimelineMax()
			// animate to second panel	
			.to("#main", .5, {opacity : "0", delay: 0.5});

            new ScrollMagic.Scene({
				triggerElement: "#main",
				triggerHook: 0,
				duration: "200%"
			})
			.setPin("#main")
			.setTween(mainAni)
			.addIndicators() 
			.addTo(controller);


            new ScrollMagic.Scene({
				triggerElement: "#about",
				triggerHook: 0,
				duration: "200%"
			})
			.setPin("#about")
            .setClassToggle('#about','active')
			.addIndicators({name:"about"}) 
			.addTo(controller);


            var skillTrigger = $('#about').outerHeight();

            var endAni = new TimelineMax()
			.to("body", 1, {backgroundColor: "#111", delay: 0.5})
            .to("#ab-inner", 1.5, {opacity : "0", delay: 0.5});

            new ScrollMagic.Scene({
				triggerElement: "#end-trigger",
				triggerHook: 0,
				duration: "100%",
			})
            .setTween(endAni)
			.addIndicators({name:"skill-on"}) 
			.addTo(controller);

            var skillAni = new TimelineMax()
			.to("#skill-box", .3, {opacity:"1", delay: 0.5});

            new ScrollMagic.Scene({
				triggerElement: "#end-trigger",
				triggerHook: 0.5,
				duration: "150%",
                offset: "1000%",
			})
            .setTween(skillAni)
			.addIndicators({name:"skill-op"}) 
			.addTo(controller);

            var bodyAni = new TimelineMax()
			.to("body", 0.1, {backgroundColor: "#fff", delay: 0.5});
            
            new ScrollMagic.Scene({
				triggerElement: "#skill-box",
				triggerHook: 0,
				duration: "200%",
			})
			.setPin("#skill-box")
            .setTween(bodyAni)
            .setClassToggle('#skill-box','active')
			.addIndicators({name:"skill"}) 
			.addTo(controller);

            var skillHeight = $('#skill-box').outerHeight();
            var careerHeight = $('#career-box').outerHeight();
            var titInnerHeight = $('#tit-box').outerHeight();

            var skAni = new TimelineMax()
			.to("#skill-box", 1, {opacity:"0", delay: 0.5});
            
            new ScrollMagic.Scene({
				triggerElement: "#skill-box",
				triggerHook: 0,
				duration: "100%",
                offset:skillHeight,
			})
            .setTween(skAni)
			.addIndicators({name:"skill-end-op"}) 
			.addTo(controller);

            var titleAni = new TimelineMax()
			.to("#tit-box",3, {opacity: 1, delay: 0.5});

            new ScrollMagic.Scene({
				triggerElement: "#tit-box",
				triggerHook: 0.5,
				duration: "100%",
			})
			.setPin("#tit-box")
            .setTween(titleAni)
			.addIndicators({name:"title"}) 
			.addTo(controller);

            var slides = document.querySelectorAll("#career .cw1 .cont-box");

            
            
            for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i],
                    triggerHook: "onLeave",
                    duration: "200%",
				})
				.setPin(slides[i], {pushFollowers: false})
				.addIndicators({name:"career"}) // add indicators (requires plugin)
                .setClassToggle(slides[i],'active')
				.addTo(controller);
		}



            
		// define movement of panels
		var wipeAnimation = new TimelineMax()
			// animate to second panel	
			.to("#slideContainer", 1,   {x: "-91%"});// move back to origin in 3D space
			
		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: 0.25,
				duration: "1000%"
			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addIndicators({name:"verti"}) 
			.addTo(controller);

            var caAnimation = new TimelineMax()
			// animate to second panel	
			.to("#career .cw1", .1, {opacity:"0"});

            new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: 1,
				duration: "50%"
			})
			.setTween(caAnimation)
			.addIndicators({name:"verti2"}) 
			.addTo(controller);


         
            

	    });

});