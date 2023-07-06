<?php
	/*
	    Template Name: Детальная страница кейса
	    Template Post Type: post
	*/
    get_header();
?>
<main class="single-case">
    <div class="breadcrumbs container text text_fz14 text_fz14-1">
        <a href="/">Главная</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt="bread" title="›"><a href="/projects/">Проекты</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt="bread" title="›"><span class="text_upper"><?php the_title() ?></span>
    </div>
    <h1 style="display: none;"><?=$seoH1 ?: get_the_title()?></h1>
    <section class="single-case__promo">
        <picture>
            <source media="(max-width: 576px)" srcset="<?=get_field('promo_back_mobile') ? get_field('promo_back_mobile')['sizes']['medium'] : get_field('promo_back')['sizes']['medium']?>">
            <img src="<?=get_field('promo_back')['url']?>" alt="promo" title="Промо" class="single-case__promo-back img_bg desk">
        </picture>
        <div class="container"> 
            <h3 class="single-case__promo-slogan title title_fz36 text_fw400 text_upper text_ffIbm"><?php the_field('promo_slogan') ?></h3>
            <?php if (get_field('promo_logo')) : ?>
            <img src="<?php the_field('promo_logo') ?>" alt="logo" title="Лого" class="single-case__promo-logo">
            <?php endif; ?>
            <?php if (get_field('promo_link')) : ?>
            <a href="<?php the_field('promo_link') ?>" target="_blank" class="single-case__promo-link title title_fz22">
                <img src="<?php echo bloginfo('template_url') ?>/assets/images/globe.svg" alt="globe" title="Ссылка">
                <?php the_field('promo_link') ?>
            </a>
            <?php endif; ?>
        </div>
    </section>
    <?php if (have_rows('stack')) : ?>
    <section class="single-case__stack">
        <h2 class="single-case__stack-title text_white title_fz48 text_fw700 text_upper">стек технологий</h2>
        <ul class="single-case__stack-list text_white text_fz14 text_fz14-1 text_upper">
            <?php
                while(have_rows('stack')) {
                    the_row();
                    ?>
                    <li><img src="<?php echo bloginfo('template_url') ?>/assets/images/point.svg" alt="point" title="<?php the_sub_field('name'); ?>"><span><b><?php the_sub_field('name'); ?></b> : <?php the_sub_field('descr') ?></span></li>
                    <?php
                }
            ?>
        </ul>
    </section>
    <?php endif; ?>
    <?php if (get_field('prolog_text')) : ?>
    <section class="single-case__prolog">
        <picture>
            <source media="(max-width: 768px)" srcset="<?=get_field('prolog_left')['sizes']['medium'] ?>">
            <img src="<?=get_field('prolog_left')['sizes']['large'] ?>" alt="left" title="Пролог" class="single-case__prolog-image">
        </picture>
        <div class="single-case__prolog-text text text_fz14 text_fz14-1">
            <h2 class="single-case__prolog-title title_fz48 text_upper">Пролог</h2>
            <div class="load-text">
                <span><?php the_field('prolog_text') ?></span>
                <span class="load-target">.. <span class="text_orange text_fw700">Читать далее</span></span>
                <span class="load-mobile"><?php the_field('prolog_text-hide') ?></span>
            </div>
        </div>
        <picture>
            <source media="(max-width: 768px)" srcset="<?=get_field('prolog_right')['sizes']['medium'] ?>">
            <img src="<?=get_field('prolog_right')['sizes']['large'] ?>" alt="right" title="Пролог" class="single-case__prolog-image">
        </picture>
    </section>
    <?php endif; ?>
    <?php if (have_rows('problems_left') || have_rows('problems_right')) : ?>
    <section class="single-case__problem">
        <div class="container text_white text_fz14 text_fz14-1">
            <h2 class="single-case__problem-title title_fz32 text_fw700 text_upper">Проблемы, с которыми столкнулись</h2>
            <div class="single-case__problem-lists">
                <ul>
                    <?php
                        while(have_rows('problems_left')) {
                            the_row();
                            ?>
                            <li><img src="<?php echo bloginfo('template_url') ?>/assets/images/point.svg" alt="point" title="<?php the_sub_field('name') ?>"><?php the_sub_field('name') ?></li>
                            <?php
                        }
                    ?>
                </ul>
                <ul>
                    <?php
                        while(have_rows('problems_right')) {
                            the_row();
                            ?>
                            <li><img src="<?php echo bloginfo('template_url') ?>/assets/images/point.svg" alt="point" title="<?php the_sub_field('name') ?>"><?php the_sub_field('name') ?></li>
                            <?php
                        }
                    ?>
                </ul>
            </div>
        </div>
    </section>
    <?php endif; ?>
    <?php if (get_field('realize_text')) : ?>
    <section class="single-case__realize">
        <picture>
            <source media="(max-width: 768px)" srcset="<?=get_field('realize_image')['sizes']['medium'] ?>">
            <img src="<?=get_field('realize_image')['sizes']['large'] ?>" alt="real" title="Реализация" class="single-case__realize-image">
        </picture>
        <div class="single-case__realize-text text text_fz14 text_fz14-1">
            <h2 class="single-case__realize-title title_fz48 text_upper text_fw700">РЕАЛИЗАЦИЯ</h2>
            <div class="load-text">
                <span><?php the_field('realize_text') ?></span>
                <span class="load-target">.. <span class="text_orange text_fw700">Читать далее</span></span>
                <span class="load-mobile"><?php the_field('realize_text-hide') ?></span>
            </div>
        </div>
    </section>
    <?php endif; ?>
    <?php if (get_field('banner_mobile')) : ?>
    <img src="<?php the_field('banner_mobile') ?>" alt="banner" title="Баннер" class="single-case__banner hide_descr">
    <?php endif; ?>
    <?php if (get_field('banner_main')) : ?>
    <img src="<?php the_field('banner_main') ?>" alt="banner" title="Баннер" class="single-case__banner hide_mobile">
    <?php endif; ?>
    <section class="single-case__effect">
        <div class="container text text_fz14 text_fz14-1">
            <?php if (have_rows('effect')) : ?>
            <h2 class="single-case__effect-title title_fz48 text_fw700 text_upper">ЭФФЕКТ</h2>
            <div class="single-case__effect-list">
                <?php
                    $i = 0;
                    while(have_rows('effect')) {
                        the_row();
                        ?>
                        <div class="single-case__effect-item">
                            <div class="single-case__effect-item-number text_fw700 text_fz18 text_white">
                                <span><?=++$i?></span>
                                <img src="<?php echo bloginfo('template_url') ?>/assets/images/flag.svg" alt="flag" title="<?php the_sub_field('name') ?>">
                            </div>
                            <h4 class="single-case__effect-item-title text_upper">
                                <?php the_sub_field('name') ?>
                            </h4>
                            <div class="single-case__effect-item-descr">
                                <?php the_sub_field('descr') ?>
                            </div>
                        </div>
                        <?php
                    }
                ?>
            </div>
            <?php endif; ?>
            <a href="/projects/" class="single-case__effect-button button button_arrow button_arrow_rev text_upper">
                <div class="arrow"><img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt="arrow" title="Назад ко всем проектам"></div>
                назад ко всем проектам
            </a>
        </div>
    </section>
</main>
<?php
    get_footer();
?>