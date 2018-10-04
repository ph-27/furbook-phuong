
	// **********************************************************
	// Used by jQuery datepicker 		  						    						
	// **********************************************************

		$(function() {
			$("#reqdt").datepicker({showOn: 'button', buttonImageOnly: true, 
				buttonImage: './img/calendar.gif', buttonText: 'Select Date'} );
			$("#evaldt").datepicker({showOn: 'button', buttonImageOnly: true, 
				buttonImage: './img/calendar.gif', buttonText: 'Select Date'} );
			$("#mrreldt").datepicker({showOn: 'button', buttonImageOnly: true, 
				buttonImage: './img/calendar.gif', buttonText: 'Select Date'} );
			$("#ereldt").datepicker({showOn: 'button', buttonImageOnly: true, 
				buttonImage: './img/calendar.gif', buttonText: 'Select Date'} );
		});

	
	// **********************************************************
	// Used by jQuery tabs      																	
	// **********************************************************

		$(function() {
			var $tabs = $('#tabs').tabs();

			//When page loads...
			$(".tab_content").hide(); 													//Hide all content
			$("ul.tabs li:first").addClass("active").show(); 		//Activate first tab
																													//Load first tab content from onDeck
			$(".tab_content:first").show(); 										//Show first tab content
			
			//On Click Event
			$("ul.tabs li").click(function() {
																													//Save page contents to onDeck and to server
				$("ul.tabs li").removeClass("active"); 						//Remove any "active" class
				$(this).addClass("active"); 											//Add "active" class to selected tab
				$(".tab_content").hide(); 												//Hide all tab content

				var activeTab = $(this).find("a").attr("href"); 	//Find the href attribute value to identify the active tab + content
																													//Load activeTab content from onDeck
				$(activeTab).fadeIn(); 														//Fade in the active ID content
				return false;
			});
		}); 
	

	// ********************************************************* 
	// Radio button validation                                   
	// copyright Stephen Chapman, 15th Nov 2004,14th Sep 2005    
	// See URL: http://javascript.about.com/library/blradio1.htm 
	// ********************************************************* 

		function valButton(btn) {
			var cnt = -1;
			for (var i=btn.length-1; i > -1; i--) {
				if (btn[i].checked) {cnt = i; i = -1;}
			}
			if (cnt > -1) return btn[cnt].value;
			else return null;
		}

	
	// **********************************************************
	// Used for reference links in left nav select dropdown      
	// **********************************************************

		function nav() {
		   var w = document.reflinkform.reflinklist.selectedIndex;
		   var url_add = document.reflinkform.reflinklist.options[w].value;
		   window.location.href = url_add;
		}
