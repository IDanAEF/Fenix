<?php 
    /*
        Template Name: Контакты
    */
    get_header();
?>
<main class="contacts">
    <div class="breadcrumbs container text text_fz14 text_fz14-1">
        <a href="/">Главная</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt=""><?php the_title() ?>
    </div>
    <section class="contacts__info">
        <div class="container">
            <h1 class="contacts__title title title_fz120 title_fz120-1 text_fw700 text_upper"><?php the_title() ?></h1>
            <div class="contacts__data text text_fz16">
                <div class="contacts__data-block">
                    Адрес
                    <span class="text_fz18 text_fw700"><?php the_field('address', 12); ?></span>
                </div>
                <div class="contacts__data-block">
                    E-mail
                    <a href="mailto:<?php the_field('email', 12); ?>" class="text_fz18 text_fw700"><?php the_field('email', 12); ?></a>
                </div>
                <div class="contacts__data-block">
                    Контактный номер
                    <a href="tel:+<?php echo preg_replace('/[^0-9]/', '', get_field('phone', 12)); ?>" class="text_fz18 text_fw700"><?php the_field('phone', 12); ?></a>
                </div>
                <div class="contacts__data-block">
                    Социальные сети
                    <div class="contacts__data-social">
                        <a href="<?php the_field('telegram', 12); ?>" target="_blank"><img src="<?php echo bloginfo('template_url') ?>/assets/images/telegram.svg" alt="telegram"></a>
                        <a href="<?php the_field('whatsapp', 12); ?>" target="_blank"><img src="<?php echo bloginfo('template_url') ?>/assets/images/whatsapp.svg" alt="whatsapp"></a>
                        <a href="<?php the_field('youtube', 12); ?>" target="_blank"><img src="<?php echo bloginfo('template_url') ?>/assets/images/youtube.svg" alt="youtube"></a>
                    </div>
                </div>
            </div>
            <div class="contacts__inter">
                <a href="<?php the_field('inter_tel_link'); ?>" class="contacts__inter-block">
                    <div class="contacts__inter-block-image">
                        <img src="<?php the_field('inter_tel_image'); ?>" alt="" class="personal img_bg">
                        <img src="<?php echo bloginfo('template_url') ?>/assets/images/telegram.svg" alt="" class="center">
                    </div>
                    <div class="contacts__inter-block-info">
                        <div class="contacts__inter-block-title title title_fz22 text_fw700"><?php the_field('inter_tel_name'); ?></div>
                        <div class="contacts__inter-block-descr text text_fz14"><?php the_field('inter_tel_descr'); ?></div>
                    </div>
                </a>
                <a href="<?php the_field('inter_whats_link'); ?>" class="contacts__inter-block">
                    <div class="contacts__inter-block-image">
                        <img src="<?php the_field('inter_whats_image'); ?>" alt="" class="personal img_bg">
                        <img src="<?php echo bloginfo('template_url') ?>/assets/images/whatsapp.svg" alt="" class="center">
                    </div>
                    <div class="contacts__inter-block-info">
                        <div class="contacts__inter-block-title title title_fz22 text_fw700"><?php the_field('inter_whats_name'); ?></div>
                        <div class="contacts__inter-block-descr text text_fz14"><?php the_field('inter_whats_descr'); ?></div>
                    </div>
                </a>
                <a href="<?php the_field('boss_link', 12); ?>" class="contacts__inter-block">
                    <div class="contacts__inter-block-image">
                        <img src="<?php the_field('boss_photo', 12); ?>" alt="<?php the_field('boss_name', 12); ?>" class="personal img_bg">
                        <img src="<?php echo bloginfo('template_url') ?>/assets/images/telegram.svg" alt="" class="center">
                    </div>
                    <div class="contacts__inter-block-info">
                        <div class="contacts__inter-block-title title title_fz22 text_fw700"><?php the_field('boss_name', 12); ?></div>
                        <div class="contacts__inter-block-descr text text_fz14">Руководитель проектов </div>
                    </div>
                </a>
            </div>
            <div class="contacts__map">
                <div class="shape"></div>
                <?php the_field('map') ?>
            </div>
        </div>
    </section>
    <section class="main__feed" id="feedmail">
        <div class="container">
            <h2 class="main__feed-title title title_fz120 title_fz120-1 text_fw700 text_upper">Напишите нам</h2>
            <?php echo do_shortcode('[contact-form-7 id="6" title="Main"]'); ?>
        </div>
    </section>
</main>
<?php
    get_footer();
?>