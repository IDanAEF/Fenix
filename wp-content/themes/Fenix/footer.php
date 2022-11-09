<?php
    global $post;
    if ($post->ID != 400) :
?>
<footer class="footer text text_fz12 text_white">
    <div class="container">
        <div class="footer__top">
            <nav class="footer__nav-services">
                <a href="/services/" class="footer__nav-title text_fw700 text_upper">Услуги</a>
                <?php 
                    wp_nav_menu( [
                        'menu'            => 'Services',
                        'container'       => false,
                        'menu_class'      => 'footer__nav-services-list',
                        'echo'            => true,
                        'fallback_cb'     => 'wp_page_menu',
                        'items_wrap'      => '<ul class="footer__nav-services-list">%3$s</ul>',
                        'depth'           => 1
                    ] );
                ?>
            </nav>
            <nav class="footer__nav-market">
                <a href="/market/" class="footer__nav-title text_fw700 text_upper">Маркетплейс решений</a>
                <?php 
                    wp_nav_menu( [
                        'menu'            => 'Market',
                        'container'       => false,
                        'menu_class'      => 'footer__nav-market-list',
                        'echo'            => true,
                        'fallback_cb'     => 'wp_page_menu',
                        'items_wrap'      => '<ul class="footer__nav-market-list">%3$s</ul>',
                        'depth'           => 1
                    ] );
                ?>
            </nav>
            <nav class="footer__nav-pages text_fw700 text_upper">
                <?php 
                    wp_nav_menu( [
                        'menu'            => 'Pages',
                        'container'       => false,
                        'menu_class'      => 'footer__nav-pages-list',
                        'echo'            => true,
                        'fallback_cb'     => 'wp_page_menu',
                        'items_wrap'      => '<ul class="footer__nav-pages-list">%3$s</ul>',
                        'depth'           => 1
                    ] );
                ?>
            </nav>
            <a href="<?php the_field('boss_link', 12); ?>" class="footer__boss">
                <div class="footer__boss-image">
                    <img src="<?php the_field('boss_photo', 12); ?>" alt="<?php the_field('boss_name', 12); ?>" class="personal img_bg">
                    <img src="<?php echo bloginfo('template_url') ?>/assets/images/telegram.svg" alt="telegram" class="telegram">
                    <div class="online"></div>
                </div>
                <div class="footer__boss-info">
                    <h3 class="footer__boss-title text_fz18 text_fw700"><?php the_field('boss_name', 12); ?></h3>
                    <div class="footer__boss-undertitle">Руководитель проектов </div>
                </div>
            </a>
            <div class="footer__siteinfo">
                <a href="mailto:<?php the_field('email', 12); ?>" class="email text_fz18 text_fw700"><?php the_field('email', 12); ?></a>
                <span class="address"><?php the_field('address', 12); ?></span>
                <a href="tel:+<?php echo preg_replace('/[^0-9]/', '', get_field('phone', 12)); ?>" class="phone text_fw700"><?php the_field('phone', 12); ?></a>
                <span class="work"><?php the_field('work', 12); ?></span>
                <div class="social">
                    <a href="<?php the_field('telegram', 12); ?>" target="_blank" class="social__item"><img src="<?php echo bloginfo('template_url') ?>/assets/images/telegram.svg" alt="telegram"></a>
                    <a href="<?php the_field('whatsapp', 12); ?>" target="_blank" class="social__item"><img src="<?php echo bloginfo('template_url') ?>/assets/images/whatsapp.svg" alt="whatsapp"></a>
                    <a href="<?php the_field('youtube', 12); ?>" target="_blank" class="social__item"><img src="<?php echo bloginfo('template_url') ?>/assets/images/youtube.svg" alt="youtube"></a>
                </div>
            </div>
        </div>
        <div class="footer__bott">
            <div class="footer__bott-left">
                <!--<div class="header__lang">
                    <div>RU</div>
                    <span></span>
                    <a href="/en<?php echo $_SERVER['REQUEST_URI']; ?>">EN</a>
                </div>-->
                <span class="half text_fz10">Fenix 2022©</span>
                <a href="#" class="policy text_fz10">Политика персональных данных</a>
            </div>
            <div class="footer__bott-right">
                <?php the_custom_logo(); ?>
            </div>
        </div>
    </div>
</footer>
<a href="#header" class="back_top">
    <img src="<?php echo bloginfo('template_url') ?>/assets/images/back_top.svg" alt="back_top">
</a>
<div class="mobile text_white">
    <div class="mobile__close">
        <span></span>
        <span></span>
    </div>
    <div class="mobile__top">
        <div class="mobile__nav">
            <nav class="mobile__nav-pages title_fz32 text_fw700 text_upper">
                <?php 
                    wp_nav_menu( [
                        'menu'            => 'Mobile-pages',
                        'container'       => false,
                        'menu_class'      => 'mobile__nav-pages-list',
                        'echo'            => true,
                        'fallback_cb'     => 'wp_page_menu',
                        'items_wrap'      => '<ul class="mobile__nav-pages-list">%3$s</ul>',
                        'depth'           => 1
                    ] );
                ?>
            </nav>
            <nav class="mobile__nav-market text_fz12">
                <a href="/market/" class="mobile__nav-title anim_left title_fz32 text_fw700 text_upper text_orange"><img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_mobile_orange.svg" class="mobile__arrows orange_left">Маркетплейс решений<img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_mobile_light.svg" class="mobile__arrows active light_right"></a>
                <?php 
                    wp_nav_menu( [
                        'menu'            => 'Market',
                        'container'       => false,
                        'menu_class'      => 'mobile__nav-market-list',
                        'echo'            => true,
                        'fallback_cb'     => 'wp_page_menu',
                        'items_wrap'      => '<ul class="mobile__nav-market-list">%3$s</ul>',
                        'depth'           => 1
                    ] );
                ?>
            </nav>
            <nav class="mobile__nav-services text_fz12">
                <a href="/services/" class="mobile__nav-title anim_left title_fz32 text_fw700 text_upper text_orange"><img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_mobile_orange.svg" class="mobile__arrows orange_left">Услуги<img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_mobile_light.svg" class="mobile__arrows active light_right"></a>
                <?php 
                    wp_nav_menu( [
                        'menu'            => 'Services',
                        'container'       => false,
                        'menu_class'      => 'mobile__nav-services-list',
                        'echo'            => true,
                        'fallback_cb'     => 'wp_page_menu',
                        'items_wrap'      => '<ul class="mobile__nav-services-list">%3$s</ul>',
                        'depth'           => 1
                    ] );
                ?>
            </nav>
        </div>
        <a href="tel:+<?php echo preg_replace('/[^0-9]/', '', get_field('phone', 12)); ?>" class="mobile__phone anim_left text_fz12"><?php the_field('phone', 12); ?></a>
    </div>
    <div class="mobile__bott text_fz12">
        <a href="#feedmail" class="mobile__button button button_arrow anim_left text_fz14 text_white">Оставить заявку<div class="arrow"><img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt=""></div></a>
        <div class="mobile__info">
            <div class="social anim_left">
                <a href="<?php the_field('telegram', 12); ?>" target="_blank" class="social__item"><img src="<?php echo bloginfo('template_url') ?>/assets/images/telegram.svg" alt="telegram"></a>
                <a href="<?php the_field('whatsapp', 12); ?>" target="_blank" class="social__item"><img src="<?php echo bloginfo('template_url') ?>/assets/images/whatsapp.svg" alt="whatsapp"></a>
                <a href="<?php the_field('youtube', 12); ?>" target="_blank" class="social__item"><img src="<?php echo bloginfo('template_url') ?>/assets/images/youtube.svg" alt="youtube"></a>
            </div>
            <!--<div class="header__lang text_fz12 anim_left">
                <div>RU</div>
                <span></span>
                <a href="/en<?php echo $_SERVER['REQUEST_URI']; ?>">EN</a>
            </div>-->
        </div>
    </div>
</div>
<?php endif; ?>
<div class="auth<?=(!is_user_logged_in() && $post->ID == 400 ? ' active' : '')?>">
    <?php the_custom_logo(); ?>
    <a href="/" class="auth__close"><img src="<?php echo bloginfo('template_url') ?>/assets/images/close-circle.svg" alt="auth__close"></a>
    <div class="auth__field main-form active">
        <h2 class="auth__title title title_fz48 text_fw700 text_upper">войти</h2>
        <form action="/personal/" method="get" enctype="multipart/form-data" class="auth__form">
            <div class="auth__form-block" class="text text_fz14">
                <label for="authemail">E-mail</label>
                <input type="email" name="authemail" id="authemail"<?=$_GET['authemail'] ? ' value="'.$_GET['authemail'].'"' : ''?> required>
            </div>
            <div class="auth__form-block" class="text text_fz14">
                <label for="authpass">Пароль</label>
                <input type="password" name="authpass" id="authpass"<?=$_GET['authpass'] ? ' value="'.$_GET['authpass'].'"' : ''?> required>
            </div>
            <button class="auth__form-button text_white text_fz16 text_fw700 text_upper">войти</button>
            <div class="auth__form-check">
                <div class="auth__form-check-field">
                    <input type="checkbox" name="authcheck" id="authcheck" hidden<?=$_GET['authcheck'] ? ' checked' : ''?>>
                    <label for="authcheck" class="text text_fz14"><span><img src="<?php echo bloginfo('template_url') ?>/assets/images/check_field.svg" alt="check_field"></span>Запомнить меня</label>
                </div>
                <span class="auth__forget text text_fz14">Забыли пароль?</span>
            </div>
        </form>
        <?=($_GET['auth_error'] ? '<div class="res_field">Поле E-mail или Пароль неверно</div>' : '')?>
        <div class="auth__links">
            <a href="<?php the_field('telegram', 12); ?>" class="auth__link-item">
                <img src="<?php echo bloginfo('template_url') ?>/assets/images/telegram_black.svg" alt="telegram">
            </a>
            <a href="<?php the_field('whatsapp', 12); ?>" class="auth__link-item">
                <img src="<?php echo bloginfo('template_url') ?>/assets/images/whatsapp_black.svg" alt="whatsapp">
            </a>
            <a href="<?php the_field('youtube', 12); ?>" class="auth__link-item">
                <img src="<?php echo bloginfo('template_url') ?>/assets/images/youtube_black.svg" alt="youtube">
            </a>
        </div>
    </div>
    <div class="auth__field rememb">
        <h2 class="auth__title title title_fz24 text_fw700 text_upper">Восстановление пароля</h2>
        <form action="/personal/" method="get" enctype="multipart/form-data" class="auth__form">
            <div class="auth__form-block" class="text text_fz14">
                <label for="authemail-rememb">E-mail</label>
                <input type="email" name="authemail-rememb" id="authemail-rememb" require>
            </div>
            <button class="auth__form-button text_white text_fz16 text_fw700 text_upper">восстановить пароль</button>
        </form>
    </div>
    <div class="auth__field send">
        <h2 class="auth__title title title_fz24 text_fw700 text_upper">Письмо отправлено</h2>
        <div class="auth__field-text text text_fz20">
            Инструкция по восстановлению пароля<br>отправлена на указанный E-mail
        </div>
    </div>
</div>
<?php
    wp_footer();
?>
</body>
</html>