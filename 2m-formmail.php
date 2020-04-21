<?php
	$_POST = json_decode(file_get_contents("php://input"),true);
	$name = $_POST['name']; 
	$email_address = $_POST['email']; 
	$message = $_POST['message']; 
	$send_to = 'hi@brittanyludwig.com';
	$domain = 'brittanyludwig.com';		
	$subject = 'Website Form Submission';		
	$thank_you_message = 'Thank you, Message has been sent!';
	$thank_you_page = '';
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n ".
	"Email: $email_address\n Message \n $message";
	$headers = "From: $send_to\n";
	$headers .= "Reply-To: $email_address";

	error_log(print_r($_POST, true));

	// Stop the form being used from an external URL 
	$pos = strpos($_SERVER['HTTP_REFERER'], $domain);
	if (($pos === false) or ($pos == '')) {
		die("Thank you!!");
		// actually, message not sent!
	}


	mail($send_to, $subject, $email_body, $headers);

if ($thank_you_page =='' ) {
	echo $thank_you_message; 
	} else {
	header('Location: '.$thank_you_page);
}	

?>