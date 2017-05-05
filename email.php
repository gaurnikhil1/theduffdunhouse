<?php 
	session_start();
	//Ajax Questions Form 
	if(isset($_POST['email'])){
		
		$name = $_POST['name'];
		$email = $_POST['email'];
		$arrival = $_POST['arrival'];
		$departure = $_POST['departure'];
		$adults = $_POST['adults'];
		$children = $_POST['children'];
		$room = $_POST['room'];
		$requests = $_POST['requests'];
		$to = 'karanparmar7993@gmail.com'; //Replace with recipient email address

		$subject = 'Hotel Reservation Form'; //Subject line for emails
		$message = 'From: '.$name."\r\n".'Email: '.$email."\r\n".'Arrival: '.$arrival."\r\n".'Departure: '.$departure."\r\n".'Adults: '.$adults."\r\n".'Children: '.$children."\r\n".'Room: '.$room."\r\n".'Requests: '.$requests;
		// Mail Functions 
		if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
			mail($to, $subject, $message) or die('Error sending Mail'); //This method sends the mail.
			
			echo "Your email was sent!"; // success message
		}
		

	}
	
	//Contact Php Form 
	if(isset($_POST['contact_email'])){
		
		$contact_name = $_POST['contact_name'];
		$email = $_POST['contact_email'];
		$contact_message = $_POST['message'];
		$to = 'whatsup@themecub.com.com'; //Replace with recipient email address
		$subject = 'Contact Form'; //Subject line for emails
		$message = 'From: '.$contact_name."\r\n".'Email: '.$email."\r\n".'Message: '.$contact_message;
		// Mail Functions 
		if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // This line checks that we have a valid email address
			mail($to, $subject, $message) or die('Error sending Mail'); //This method sends the mail.
			

		}

	}
	
	
	
	

?>