<?php

/*
Plugin Name: [Fenix] Интеграция bitrix лиды
Plugin URI: https://fenixcrm.ru/
Description: Собственная разработка
Version: 1.0
Author: Fenix
Author URI: https://fenixcrm.ru/
*/

 add_action( 'wpcf7_mail_sent', 'fenix_bitrix_integration');
 
 function fenix_bitrix_integration($contact_form)
 {
    try{
        $data = [
            'name' => $_POST['feedname'] ,
        	'phone' => $_POST['phone'] ,
        	'email' => $_POST['mail'] ,
        	'message' => $_POST['text'] ,
        	'file' => $_POST['file'] ,
        	'url' => $_SERVER['HTTP_REFERER'] ?? '',
        ]; 
     
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,"https://fenixcrm.fenix-development.ru/bitrix24/site/99f9c8c86566a0a77679c6b0dace98fa");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        curl_setopt($ch, CURLOPT_POSTFIELDS,
        
                    json_encode($data));
        // In real life you should use something like:
        // curl_setopt($ch, CURLOPT_POSTFIELDS,
        //          http_build_query(array('postvar1' => 'value1')));
        // Receive server response ...
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch,  CURLOPT_RETURNTRANSFER, false);
        curl_setopt($ch, CURLOPT_FORBID_REUSE, true);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 1);
        curl_setopt($ch, CURLOPT_DNS_CACHE_TIMEOUT, 100);
        $server_output = curl_exec($ch);
        file_put_contents(__DIR__.'/response.log',print_r($server_output, true));
        curl_close($ch);

    }catch(\Throwable $e){
        file_put_contents(__DIR__.'/error.log',print_r($e->getMessage(), true));
        throw $e;
    }
    
 }