<?php
    function converterdata($data){
        $novadata = substr($data,8,2).'/'.substr($data,5,2).'/'.substr($data,0.4);
    
        return $novadata;
        //substr($data,8,2) => 01
        //substr($data,5,2) => 05
        //substr($data,0.4) => 2017
    
    }
    
    //executa a query com base na conexão
    include_once('src/conexao.php');
    
    //executa a query com base na conexão
    $query = mysqli_query($conexao, "select * from usuarios");

    if (!$query){
        die('Query Invalida: ' . @mysqli_error($conexao)); //mostra o erro 
    }
    
    //retorna uma matriz que corresponde a linha - ponteiro
    $dados = mysqli_fetch_array($query);

    //recupera as informações do array $dados, usando o nome do campo como referencia
    echo "<b> Id: </b>".$dados['id']."<br>";
    echo "<b> E-mail: </b>".$dados['email']."<br>";
    echo "<b> Apelido: </b>".$dados['apelido']."<br>";
    echo "<b> Ano de ingresso na UFSCar: </b>".$dados['ano_ingresso']."<br>";
    echo "<b> ID do curso: </b>".$dados['curso_id']."<br>";
    echo "<b> Data de criação do usuário: </b>".$dados['data_criacao']."<br>";  

    //finaliza a conexao
    mysqli_close($conexao);
?>

