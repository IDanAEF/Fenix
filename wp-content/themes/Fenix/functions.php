<?php

add_theme_support( 'custom-logo' );

add_theme_support( 'menus' );

function fenixAddScripts() {
    wp_enqueue_style( 'fenix_main_style', get_template_directory_uri() . '/assets/css/style.min.css' );

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

add_filter('nav_menu_link_attributes', 'filter_nav_menu_link_attributes', 10, 3);

add_theme_support( 'post-thumbnails' );