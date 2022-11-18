<?php
    /*
        Template Name: Маркетплейс решений
    */
    get_header();
?>
<main class="market">
    <div class="breadcrumbs container text text_fz14 text_fz14-1">
        <a href="/">Главная</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt=""><?php the_title() ?>
    </div>
    <h1 class="market__title">
        <div class="market__title-top">
            <span class="text text_fz14 text_fz14-1 text_fw400">(35+ готовых решений)</span>
            <div class="title title_fz120 title_fz120-1 text_fw700 text_upper"><?php the_field('title_top'); ?></div>
        </div>
        <div class="market__title-bott">
            <div class="title title_fz120 title_fz120-1 text_fw700 text_upper"><?php the_field('title_bott'); ?></div>
            <span class="text text_fz14 text_fz14-1 text_fw400"><?php the_field('title_undertitle'); ?></span>
        </div>
    </h1>
    <section class="market__table">
        <?php
            while(have_rows('table')) {
                the_row();
                ?>
                <div class="market__table-line">
                    <div class="container">
                        <h2 class="market__table-line-title title title_fz48 text_fw700 text_upper"><?php the_sub_field('name') ?></h2>
                        <div class="market__table-line-tap">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="market__table-list text text_fz14 text_fz14-1">
                    <div class="container">
                        <?php
                            while(have_rows('items')) {
                                the_row();
                                ?>
                                <div class="market__table-item">
                                    <div class="market__table-item-title">
                                        <h3 class="title title_fz24 text_fw700 text_upper"><?php the_sub_field('name') ?></h3>
                                        <a href="<?php the_sub_field('link') ?>" class="button button_arrow">Подробнее<div class="arrow"><img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt=""></div></a>
                                    </div>
                                    <div class="market__table-item-cost title title_fz24">
                                        <?php
                                            for ($i = 0; $i < 4; $i++) {
                                                ?>
                                                <span <?=($i >= get_sub_field('cost') ? 'style="opacity: 0.5;"' : '')?>>₽</span>
                                                <?php
                                            }
                                        ?>
                                    </div>
                                    <div class="market__table-item-descr">
                                        <?php the_sub_field('descr') ?>
                                    </div>
                                    <div class="market__table-item-result">
                                        <?php the_sub_field('result') ?>
                                    </div>
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