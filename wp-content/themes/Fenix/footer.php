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
            <a href="<?php the_field('link', 12); ?>" class="footer__boss">
                <div class="footer__boss-image">
                    <img src="<?php the_field('boss_photo', 12); ?>" alt="<?php the_field('boss_name', 12); ?>" class="personal img_bg">
                    <img src="<?php echo bloginfo('template_url') ?>/assets/images/telegram.svg" alt="telegram" class="telegram">
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
                    <a href="<?php the_field('telegram', 12); ?>" class="social__item"><img src="<?php echo bloginfo('template_url') ?>/assets/images/telegram.svg" alt="telegram"></a>
                    <a href="<?php the_field('whatsapp', 12); ?>" class="social__item"><img src="<?php echo bloginfo('template_url') ?>/assets/images/whatsapp.svg" alt="whatsapp"></a>
                    <a href="<?php the_field('youtube', 12); ?>" class="social__item"><img src="<?php echo bloginfo('template_url') ?>/assets/images/youtube.svg" alt="youtube"></a>
                </div>
            </div>
        </div>
        <div class="footer__bott">
            <div class="footer__bott-left">
                <div class="header__lang">
                    <div>RU</div>
                    <span></span>
                    <a href="/en<?php echo $_SERVER['REQUEST_URI']; ?>">EN</a>
                </div>
                <span class="half text_fz10">Fenix 2022©</span>
                <a href="#" class="policy text_fz10">Политика персональных данных</a>
            </div>
            <div class="footer__bott-right">
                <?php the_custom_logo(); ?>
            </div>
        </div>
    </div>
</footer>
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
                <a href="/market/" class="mobile__nav-title title_fz32 text_fw700 text_upper text_orange">Маркетплейс решений</a>
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
                <a href="/services/" class="mobile__nav-title title_fz32 text_fw700 text_upper text_orange">Услуги</a>
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
        <a href="tel:+<?php echo preg_replace('/[^0-9]/', '', get_field('phone', 12)); ?>" class="mobile__phone text_fz12"><?php the_field('phone', 12); ?></a>
    </div>
    <div class="mobile__bott text_fz12">
        <button class="mobile__button button button_arrow text_fz14 text_white">Оставить заявку<div class="arrow"><img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt=""></div></button>
        <div class="mobile__info">
            <div class="social">
                <a href="<?php the_field('telegram', 12); ?>" class="social__item"><img src="<?php echo bloginfo('template_url') ?>/assets/images/telegram.svg" alt="telegram"></a>
                <a href="<?php the_field('whatsapp', 12); ?>" class="social__item"><img src="<?php echo bloginfo('template_url') ?>/assets/images/whatsapp.svg" alt="whatsapp"></a>
                <a href="<?php the_field('youtube', 12); ?>" class="social__item"><img src="<?php echo bloginfo('template_url') ?>/assets/images/youtube.svg" alt="youtube"></a>
            </div>
            <div class="header__lang text_fz12">
                <div>RU</div>
                <span></span>
                <a href="/en<?php echo $_SERVER['REQUEST_URI']; ?>">EN</a>
            </div>
        </div>
    </div>
</div>
<?php
    wp_footer();
?>
</body>
</html>