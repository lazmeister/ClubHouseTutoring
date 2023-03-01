<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Don't run this unless we're handling a form submission
if (array_key_exists('email', $_POST)) {
    date_default_timezone_set('Etc/UTC');
		
		require 'src/PHPMailer.php';
		require 'src/SMTP.php';
		require 'src/POP3.php';
		
	//SMTP needs accurate times, and the PHP time zone MUST be set
	//This should be done in your php.ini, but this is how to do it if you don't have access to that
	date_default_timezone_set('Etc/UTC');

	/*
	 * ------------------------------------
	 * Contact Form Configuration
	 * ------------------------------------
	 */

	$name     = $_POST["name"];
	$email    = $_POST["email"];
	$inquiry    = $_POST["inquiry"];
	$website  = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	$website = "$_SERVER[HTTP_HOST]";
	$messagefrom = $_POST["message"];

	if (isset($email) && isset($name)) {
		/*
		 * ------------------------------------
		 * END CONFIGURATION
		 * ------------------------------------
		 */
		 //Create a new PHPMailer instance
		$mail = new PHPMailer;
		//Tell PHPMailer to use SMTP
		// $mail->isSMTP();
		//Enable SMTP debugging
		// 0 = off (for production use)
		// 1 = client messages
		// 2 = client and server messages
		// $mail->SMTPDebug = 2;
		//Set the hostname of the mail server
        $mail->Host = 'localhost';
		// $mail->Host = 'mail.clubhousetutoring.com';
		//Set the SMTP port number - likely to be 25, 465 or 587
		// $mail->Port = 587;

		//Whether to use SMTP authentication
		// $mail->SMTPAuth = true;
		// $mail->SMTPSecure = "ssl"; 
		//Username to use for SMTP authentication
		// $mail->Username = 'website@clubhousetutoring.com';
		//Password to use for SMTP authentication
		// $mail->Password = '2lATiB[4Kh?3';
		//Set who the message is to be sent from
		$mail->setFrom('hello@clubhousetutoring.com', 'Club House Tutoring');
		//Set an alternative reply-to address
		$mail->addReplyTo($email, $name);
		//Set who the message is to be sent to
		$mail->addAddress('hello@clubhousetutoring.com', 'Club House Tutoring');
		//Set the subject line
		$mail->Subject = 'Clubhouse Tutoring Contact Form Submitted';
		//Read an HTML message body from an external file, convert referenced images to embedded,
		//convert HTML into a basic plain-text alternative body
		$msg     .= ' <table border="1" cellpadding="6" cellspacing="0" style="border: 0px">';
		foreach ($_POST as $label => $value) {
				$msg .= "<tr><td width='100'>". ucfirst($label) . "</td><td width='300'>" . $value . " </tr>";
		}
		$msg      .= " </table> <br> --- <br>This e-mail was sent from $website";
		
		$mail->Body    = $msg;
		
		// $mail->msgHTML(file_get_contents('contents.html'), __DIR__);
		//Replace the plain text body with one created manually
		$mail->AltBody = 'This is a plain-text message body';

		 //send the message, check for errors
		if (!$mail->send()) {
			echo 'Mailer Error: ' . $mail->ErrorInfo;
		} else {
			echo "success";
		}
	} // END isset
}
?>