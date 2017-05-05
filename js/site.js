
          $(document).ready(function() {
			  "use strict";
			  
		 /*------------------------------------------------------------------
          STICKY HEADER / COLOR CHANGE
        -------------------------------------------------------------------*/
			   if($('header').length >0 ){
			  
			    window.addEventListener('scroll', function(e) {
                var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                    shrinkOn = 300,
                    header = document.querySelector("header");
                if (distanceY > shrinkOn) {
                    classie.add(header, "smaller");
                    classie.add(header, "reserve-color");
                } else {
                    if (classie.has(header, "smaller")) {
                        classie.remove(header, "smaller");
                    }
                }
            });
	
			}		
		/*------------------------------------------------------------------
          RESERVATION MODAL
        -------------------------------------------------------------------*/
			/**/
			var theForm = document.getElementById('theForm');

        new stepsForm(theForm, {
            onSubmit: function(form) {
                // hide form
                classie.addClass(theForm.querySelector('.simform-inner'), 'hide');

                /*
					form.submit()
					or
					AJAX request (maybe show loading indicator while we don't have an answer..)
					*/

                // let's just simulate something...
				//var email = document.forms["theForm"]["q2"].value;
				var name =$("#q1").val();
				
				
				var data = {
					name: $("#q1").val(),
					email: $("#q2").val(),
					arrival: $("#q3").val(),
					departure: $("#q4").val(),
					adults: $("#q5").val(),
					children: $("#q6").val(),
					room: $("#q7").val(),
					requests: $("#q8").val()
				};
				$.ajax({
					type: "POST",
					url: "email.php",
					data: data,
					success: function(){
						var messageEl = theForm.querySelector('.final-message');
						messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
						classie.addClass(messageEl, 'show');
					}
				});
				
                
            }
        });
		
		
		

        $(window).load(function() {
            $("#loading").fadeOut(500);
        })
		
		/**/
		
		/*------------------------------------------------------------------
          Date Picker
        -------------------------------------------------------------------*/
		
      var date_input=$('input[name="date"]'); //our date input has the name "date"
      var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
      var options={
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
      };
      date_input.datepicker(options);
			
			
		/*------------------------------------------------------------------
          WOW JS
        -------------------------------------------------------------------*/

		//Initiat WOW JS
		 new WOW().init(); 
	


		/*------------------------------------------------------------------
          OWL Carousel
        -------------------------------------------------------------------*/

		$("#owl-demo").owlCarousel({
 
     	 navigation : false, // Show next and prev buttons
     	 slideSpeed : 300,
     	 paginationSpeed : 400,
     	 singleItem:true
 
     
  });


    /*------------------------------------------------------------------
         About Counters
        -------------------------------------------------------------------*/
	
	 $(".fact-counters").appear(function () {
		$(".fact-counters [data-to]").each(function () {
		  var e = $(this).attr("data-to");
		  $(this).delay(6e3).countTo({
			 from: 50,
			 to: e,
			 speed: 3e3,
			 refreshInterval: 50
		  })
		})
	 });


		
		}); /*End document Ready */
		
		
		
		 
		/*------------------------------------------------------------------
          Match Height JS
        -------------------------------------------------------------------*/ 
		 	 
    	$('.box').matchHeight();
		
		
		/*------------------------------------------------------------------
          Smooth Scroll
        -------------------------------------------------------------------*/ 
		 
        smoothScroll.init();
    

		 
		 /*------------------------------------------------------------------
          Google Maps
        -------------------------------------------------------------------*/
		 
		 
		 function initMap() {
         var mapDiv = document.getElementById('map');
         var map = new google.maps.Map(mapDiv, {
            center: {lat: 32.245452, lng: 77.184152}, //manipulate numbers for different location
            zoom: 15,
			scrollwheel: false,
    		navigationControl: false,
    		mapTypeControl: false,
    		scaleControl: false,
    		draggable: true,
			mapTypeId:google.maps.MapTypeId.hybrid
		});
		
		var marker = new google.maps.Marker({
          position: {lat: 32.248752, lng: 77.176152}, //manipulate numbers for different location
          map: map,
          label:"The Duffdun House",
          labelAnchor:new google.maps.Point(3, 30)

        });
      }
    
	  
	 
	 
	