<?php
// Verifica se o formulário foi submetido
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

	// Configurações do e-mail
	$para = 'igoradasilvaoliveira014@gmail.com';
	$assunto = 'Formulário de Contato';

	// Coleta as informações do formulário
	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$telefone = $_POST['telefone'];
	$mensagem = $_POST['mensagem'];

	// Monta o corpo da mensagem
	$mensagem_corpo = "Nome: $nome\n\n";
	$mensagem_corpo .= "Email: $email\n\n";
	$mensagem_corpo .= "Telefone: $telefone\n\n";
	$mensagem_corpo .= "Mensagem:\n$mensagem";

	// Envia o e-mail
	if (mail($para, $assunto, $mensagem_corpo)) {
		// Redireciona para a página de confirmação
		header('Location: confirmacao.html');
		exit;
	} else {
		// Se o envio falhar, exibe uma mensagem de erro
		echo 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.';
	}
}