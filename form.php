<?php

	$subject = 'New Email for Shiny Metal Marketing'; // Set email subject line here
	$mailto  = 'mjclinefelter@gmail.com'; // Email address to send form submission to

	$name = $_POST['banner-name'];
	$email = $_POST['banner-email'];
	$timestamp = date("F jS Y, h:iA.", time());

	// HTML for email to send submission details
	$body = "
	<br>
	<p>Contact Shiny Metal Marketing</p>
	<p><strong>Name</strong>: $name</p>
	<p><strong>Email</strong>: $email</p>
	<hr/>
	<p>This form was submitted on <strong>$timestamp</strong></p>
	";

	// Success Message
	$success = "Message Sent";

	$headers = "From: $name <$email> \r\n";
	$headers .= "Reply-To: $email \r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$message = "<html><body>$body</body></html>";

	if (mail($mailto, $subject, $message, $headers)) {
		echo "$success"; // success
	} else {
		echo 'Form submission failed. Please try again...'; // failure
	}
?>
