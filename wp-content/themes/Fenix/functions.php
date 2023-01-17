<?php

add_theme_support( 'custom-logo' );

add_theme_support( 'menus' );

function fenixAddScripts() {
    wp_enqueue_style( 'fenix_main_style', get_template_directory_uri() . '/assets/css/style.min.css' );
    wp_enqueue_style( 'fenix_custom_style', get_template_directory_uri() . '/custom.css' );

    wp_enqueue_script( 'fenix_main_scrit', get_template_directory_uri() . '/assets/js/script.js', array(), null, true );
    wp_enqueue_script( 'fenix_custom_scrit', get_template_directory_uri() . '/custom.js', array(), null, true );
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

function clients_posts(){
	function reviewAdd($review, $r) {
        return '
            <img class="capt" src="/wp-content/themes/Fenix/assets/images/'.($review['black'] ? 'capt-double-white.svg' : 'capt-double.svg').'" alt="capt-double">
            '.($review['image'] ? '<img class="image hide_mobile" src="'.$review['image'].'" alt="review-'.$r.'">' : '').'
            '.($review['image-mob'] ? '<img class="image hide_descr" src="'.$review['image-mob'].'" alt="review-'.$r.'">' : '').'
            '.($review['logo'] ? '<img class="logo" src="'.$review['logo'].'" alt="review-logo-'.$r.'">' : '').'
            <div class="clients__item-top">
                '.($review['title'] ? '<h3 class="title_fz48 text_fw700 text_upper">'.$review['title'].'</h3>' : '').'
                <div class="descr text_fz14 text_fz14-1">
                    '.$review['message'].'
                </div>
            </div>
            <div class="clients__item-bott">
                <h4 class="text_fz18 text_fw700">'.$review['person']['name'].'</h4>
                <span class="pers-stat text_fz12">'.$review['person']['stat'].'</span>
            </div>
        ';
    }

    $allFields = get_fields(34);
    $clients = $allFields['clients'];
    $reviews = $allFields['reviews'];
    $r = $_GET['items-two'];
    $it = $_GET['items'];
    $res = '';
    $data = [];

    for($i = $it; $i < count($clients); $i++) {
        if (($i == $it + 8 || $i == $it + 12 || $i == $it + 16 || $i == $it + 26) && $reviews[$r]) {
            $res .= '
            <div class="clients__item load-more-item-two review'.($i == $it + 12 || $i == $it + 26 ? ' right' : ' left').($reviews[$r]['black'] ? ' text_white black' : '').'">
                '.reviewAdd($reviews[$r], $r).'
            </div>
            ';
            $r++;
            if ($i == $it + 16 && $reviews[$r]) {
                $res .= '
                <div class="clients__item load-more-item-two review right'.($reviews[$r]['black'] ? ' text_white black' : '').'">
                    '.reviewAdd($reviews[$r], $r).'
                </div>
                ';
                $r++;
            }
        }
        if ($i >= $it + 26) break;
        $res .= '
        <div class="clients__item client load-more-item">
            <div class="clients__item-image">
                <img src="'.$clients[$i]['image'].'" alt="'.$clients[$i]['name'].'">
                <h3 class="text_white title_fz24 text_fw700 text_upper">'.$clients[$i]['name'].'</h3>
            </div>
            <div class="clients__item-descr text text_fz14 text_fz14-1">
                '.$clients[$i]['descr'].'
            </div>
        </div>
        ';
        if ($i + 1 == count($clients) && $reviews[$r]) {
            $res .= '
            <div class="clients__item load-more-item-two review right'.($reviews[$r]['black'] ? ' text_white black' : '').'">
                '.reviewAdd($reviews[$r], $r).'
            </div>
            ';
            $r++;
        }
    }

    $data['cont'] = $res;
    if ($it + 26 >= count($clients)) $data['more'] = false;
    else $data['more'] = true;

    echo json_encode($data);

    die();
}
 
 
add_action('wp_ajax_clients_posts', 'clients_posts');
add_action('wp_ajax_nopriv_clients_posts', 'clients_posts');