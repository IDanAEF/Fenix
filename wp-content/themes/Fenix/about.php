<?php
/*
    Template Name: О компании
*/
get_header(); ?>
<main class="about">
    <div class="breadcrumbs container text text_fz14 text_fz14-1">
        <a href="/">Главная</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt="bread" title="›"><?php the_title() ?>
    </div>
    <div class="container">
        <h1 class="about__title title title_fz120-1 text_upper text_fw700">
            <?php the_title(); ?>
        </h1>
    </div>
    <!-- <hr class="about__line"> -->
    <div class="about__undertitle title title_fz36 text_fw700 text_upper">
        <div class="container">
            <?php the_field('undertitle'); ?>
        </div>
    </div>
    <section class="about__sert">
        <div class="container">
            <div class="about__sert-text">
                <?php the_field('sert_text') ?>
            </div>
            <img src="<?php the_field('sert_image') ?>" alt="sert" title="Сертификат" class="about__sert-img">
        </div>
    </section>
    <section class="main__advantages">
        <div class="container">
            <h2 class="main__advantages-title text text_fz14 text_fz14-1 text_fw400">
                Наши преимущества
            </h2>
            <div class="main__advantages-items text text_fz14 text_fz14-1">
            <?php
                while(have_rows('advant')) {
                    the_row();
                    ?>
                        <div class="main__advantages-item<?=(get_sub_field('hide-mobile') ? ' hide_mobile' : '')?>">
                            <img src="<?php echo bloginfo('template_url') ?>/assets/images/point.svg" alt="point" title="Преимущество">
                            <div class="main__advantages-item-info">
                                <h3 class="main__advantages-item-title title title_fz24 text_fw700 text_upper"><?php the_sub_field('title'); ?></h3>
                                <div class="main__advantages-item-undertitle"><?php the_sub_field('descr'); ?></div>
                            </div>
                        </div>
                    <?php
                }
			?>
            </div>
        </div>
    </section>
    <section class="main__services about__products services-slider-target">
        <div class="container">
            <h2 class="main__services-title title title_fz120-1 text_fw700 text_upper"><?php the_field('products_title'); ?><div class="main__services-rage text_fz18 text_fw400"><span class="curr text_orange"></span> / <span class="all"></span></div></h2>
            <div class="main__services-window">
                <div class="main__services-pages">
                <?php
                    $products = [];
                    while(have_rows('products_blocks')) {
                        the_row();
                        $products[] = [
                            'title' => get_sub_field('title'),
                            'descr' => get_sub_field('descr'),
                            'link' => get_sub_field('link')
                        ];
                    }
                    for($i = count($products) - 1; $i >= 0; $i--) {
                        ?>
                        <article class="main__services-page about__products-page text text_fz14 text_fz14-1">
                            <div class="about__products-item">
                                <h3 class="about__products-item-title title title_fz32 text_fw700 text_upper"><?= $products[$i]['title'] ?></h3>
                                <div class="about__products-item-undertitle text text_fz14 text_fz14-1"><?= $products[$i]['descr'] ?></div>
                                <a href="<?= $products[$i]['link'] ?>" class="about__products-item-button button button_arrow text text_fz14 text_fz14-1 text_upper">
                                    Подробнее<div class="arrow"><img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt="arrow" title="Подробнее"></div>
                                </a>
                            </div>
                        </article>
                        <?php
                    }
                ?>
                </div>
                <div class="main__services-names text text_fz14 text_fz14-1 text_upper">
                    <?php
                        foreach($products as $prod) {
                            ?>
                            <div class="main__services-name">
                                <img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt="arrow" title="<?= $prod['title'] ?>"><span><?= $prod['title'] ?></span>
                            </div>
                            <?php
                        }
                    ?>
                </div>
            </div>
            <a href="/market/" class="main__market-all button button_black title title_fz48 text_fw700">все решения<span class="text text_fz12 text_fw400 text_normal">(35)+</span></a>
        </div>
    </section>
    <section class="about__products">
        <div class="container">
            <h2 class="about__products title title_fz120-1 text_upper text_fw700">
                <?php the_field('products_title'); ?>
            </h2>
            <div class="about__products-blocks">
                <?php
                    while(have_rows('products_blocks')) {
                        the_row();
                        ?>
                        <div class="about__products-item">
                            <h3 class="about__products-item-title title title_fz32 text_fw700 text_upper"><?php the_sub_field('title') ?></h3>
                            <div class="about__products-item-undertitle text text_fz14 text_fz14-1"><?php the_sub_field('descr') ?></div>
                            <a href="<?php the_sub_field('link') ?>" class="about__products-item-button button button_arrow text text_fz14 text_fz14-1 text_upper">
                                Подробнее<div class="arrow"><img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt="arrow" title="Подробнее"></div>
                            </a>
                        </div>
                        <?php
                    }
                ?>
            </div>
            <a href="/market/" class="main__market-all button button_black title title_fz48 text_fw700">все решения<span class="text text_fz12 text_fw400 text_normal">(35)+</span></a>
        </div>
    </section>
    <section class="main__services about__projects services-slider-target">
        <div class="container">
            <h2 class="main__services-title title title_fz120-1 text_fw700 text_upper">наши проекты<div class="main__services-rage text_fz18 text_fw400"><span class="curr text_orange"></span> / <span class="all"></span></div></h2>
            <div class="main__services-window">
                <div class="main__services-pages">
                <?php
                    $names = [];
                    $my_posts = get_posts(array(
                        'numberposts' => 5,
                        'category_name'    => 'cases',
                        'orderby'     => 'date',
                        'order'       => 'DESC',
                        'post_type'   => 'post',
                        'exclude'     => array(197, 945),
                        'suppress_filters' => true
                    ));

                    foreach ($my_posts as $post) {
                        setup_postdata($post);
                        $names[] = get_the_title();
                        ?>
                            <article class="main__services-page about__projects-page text text_fz14 text_fz14-1">
                                <div class="about__projects-page-info">
                                    <div class="mobile-text">
                                        <h3 class="mobile-text-title title title_fz32 text_upper text_fw700">
                                            <?php the_title(); ?>
                                        </h3>
                                        <div class="mobile-text-udnertitle text text_fz14 text_fz14-1">
                                            <?php the_field('descr'); ?>
                                        </div>
                                    </div>
                                    <div class="top">
                                        <img src="<?=get_field('slider-image-mob') ?: get_field('slider-image')?>" alt="<?php the_title(); ?>" tilte="<?php the_title(); ?>" class="mob_img">
                                        <h3 class="about__projects-page-title title title_fz48 text_fw700 text_upper"><?php the_title(); ?></h3>
                                        <div class="about__projects-page-undertitle text text_fz14">
                                            <?php the_field('descr'); ?>
                                        </div>
                                    </div>
                                    <div class="about__projects-page-result text text_fz14 text_fz14-1 text_white">
                                        <?php the_field('result'); ?>
                                    </div>
                                </div>
                                <div class="about__projects-page-image">
                                    <img src="<?php the_field('slider-image') ?>" alt="<?php the_title(); ?>" title="<?php the_title(); ?>">
                                    <?php if (get_the_post_thumbnail()) : ?>
                                    <div class="title_block_image">
                                        <?=get_the_post_thumbnail()?>
                                    </div>
                                    <?php endif; ?>
                                </div>
                            </article>
                        <?php
                    }

                    wp_reset_postdata();
                ?>
                </div>
                <div class="main__services-names text text_fz14 text_fz14-1 text_upper">
                    <?php
                        for($i = count($names) - 1; $i >= 0; $i--) {
                            ?>
                            <div class="main__services-name">
                                <img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt="arrow" title="<?=$names[$i]?>"><span><?=$names[$i]?></span>
                            </div>
                            <?php
                        }
                    ?>
                </div>
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
<?php get_footer(); ?>
