<?php
	/*
	    Template Name: Детальная страница услуги
	    Template Post Type: post
	*/
    get_header();
?>
<main class="single-service">
    <div class="breadcrumbs container text text_fz14">
        <a href="/">Главная</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt=""><a href="/services/">Услуги</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt=""><?php the_title() ?>
    </div>
    <h1 class="single-service__title title title_fz120 title_fz120-1 text_fw700 text_upper">
        <span><?php the_field('title_top') ?></span>
        <span><?php the_field('title_bott') ?></span>
    </h1>
    <section class="single-service__banner">
        <div class="single-service__banner-title text_white title_fz32 text_fw700 text_upper"><?php the_field('banner_title') ?></div>
        <img src="<?php echo bloginfo('template_url') ?>/assets/images/point.svg" alt="point" class="single-service__banner-img">
        <div class="single-service__banner-descr text_white text_fz14">
            <?php the_field('banner_descr'); ?>
            <a href="#feedmail" class="single-service__banner-button button button_arrow">Оставить заявку<div class="arrow"><img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt=""></div></a>
        </div>
    </section>
    <section class="single-service__points">
        <?php
            $i = 1;
            while(have_rows('points')) {
                the_row();
                ?>
                <div class="single-service__point">
                    <div class="single-service__point-number text text_fz12">(<?=($i < 10 ? '0'.$i++ : $i++)?>)</div>
                    <div class="single-service__point-top">
                        <div class="single-service__point-title title title_fz24 text_fw700 text_upper"><?php the_sub_field('name'); ?></div>
                        <img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt="" class="single-service__point-tap">
                    </div>
                    <div class="single-service__point-list text text_fz14">
                        <?php
                            while(have_rows('underpoints')) {
                                the_row();
                                ?>
                                <div class="single-service__point-list-item">
                                    <img src="<?php echo bloginfo('template_url') ?>/assets/images/point.svg" alt="point"><?php the_sub_field('name') ?>
                                </div>
                                <?php
                            }
                        ?>
                    </div>
                </div>
                <?php
            }
        ?>
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