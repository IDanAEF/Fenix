<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <title><?php the_title(); ?></title>
    <?php
        wp_head();
    ?>
</head>
<body>
    <div id="header"></div>
    <header class="header text text_fz12 text_white">
        <div class="container">
            <div class="header__mobile">
                <div class="header__humburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <?php the_custom_logo(); ?>
            </div>
            <nav class="header__nav">
                <?php 
					wp_nav_menu( [
						'menu'            => 'Main',
						'container'       => false,
						'menu_class'      => 'header__nav-list',
						'echo'            => true,
						'fallback_cb'     => 'wp_page_menu',
						'items_wrap'      => '<ul class="header__nav-list">%3$s</ul>',
						'depth'           => 2
					] );
				?>
            </nav>
            <div class="header__right">
                <div class="header__lang">
                    <div>RU</div>
                    <span></span>
                    <a href="/en<?php echo $_SERVER['REQUEST_URI']; ?>">EN</a>
                </div>
                <div class="header__contact">
                    <a href="tel:+<?php echo preg_replace('/[^0-9]/', '', get_field('phone', 12)); ?>"><?php the_field('phone', 12); ?></a>
                    <a href="<?php the_field('telegram', 12); ?>"><img src="<?php echo bloginfo('template_url') ?>/assets/images/telegram.svg" alt="telegram"></a>
                </div>
                <button class="header__button button button_orange text_orange">
                    оставить заявку
                </button>
            </div>
        </div>
    </header>