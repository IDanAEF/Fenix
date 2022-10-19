<?php

add_theme_support( 'custom-logo' );

add_theme_support( 'menus' );

function fenixAddScripts() {
    wp_enqueue_style( 'fenix_main_style', get_template_directory_uri() . '/assets/css/style.min.css' );
    wp_enqueue_style( 'fenix_custom_style', get_template_directory_uri() . '/custom.css' );

    wp_enqueue_script( 'fenix_main_scrit', get_template_directory_uri() . '/assets/js/script.js', array(), null, true );
}

add_action( 'wp_enqueue_scripts', 'fenixAddScripts' );

function filter_nav_menu_link_attributes($atts, $item, $args) {
    if ($args->menu === 'Main') {
        if ($item->current) {
            $atts['class'] = 'active';
        }
    }

    return $atts;
}

function wp_auth_profile() {
    if ($_GET['authemail'] && !is_user_logged_in()) {
        $user = get_user_by('email', $_GET['authemail']);
        $creds = [
            'user_login'    => $user->user_login,
            'user_password' => $_GET['authpass'],
            'remember'      => $_GET['authcheck'] == 'on' ? true : $_GET['authcheck'],
        ];
        $logIn = wp_signon($creds, false);
        if (is_wp_error($logIn)) {
            $_GET['auth_error'] = 'error';
        }
        if (!$_GET['auth_error']) {
            header("Refresh:0");
        }
    }
    if ($_GET['user_out'] && is_user_logged_in()) {
        wp_logout();
        header("Refresh:0");
    }
}

add_action('init', 'wp_auth_profile');

add_filter('nav_menu_link_attributes', 'filter_nav_menu_link_attributes', 10, 3);

add_theme_support( 'post-thumbnails' );