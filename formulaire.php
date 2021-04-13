<!DOCTYPE html>
	<head>
		<title>Test PHP</title>
	</head>

	<body>

 <?php
	$Nom = $_POST['nom']; 
	$Email = $_POST['email'];
	$Message = $_POST['Message']; 
	$Body = "";
	$Body .= "Nom: ";
	$Body .= $Nom;
	$Body .= "\n";
	$Body .= "Email: ";
	$Body .= $Email;
	$Body .= "\n";
	$Body .= "Message: ";
	$Body .= $Message;
	$Body .= "\n";
	$mailheaders = "From: Mon test de formulaire<> \n";
	$mailheaders .= "Reply-To: pilgrim86@gmail.com\n\n";
 	$success = mail('pilgrim86@gmail.com', 'Envoi depuis page Contact', $Body, $mailheaders);
	if ($success){
  		echo '<p>Votre message a bien été envoyé.</p>';
	}
	else{
  		echo '<p>Une erreur s est produite à l envoi de votre message.</p>';
	}?>

 	</body>
 </html>