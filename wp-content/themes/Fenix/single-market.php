<?php
	/*
	    Template Name: Детальная страница решения
	    Template Post Type: post
	*/
    get_header();
?>
<main class="single-market">
    <div class="breadcrumbs container text text_white text_fz14 text_fz14-1">
        <a href="/">Главная</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt="bread" title="›"><a href="/market/">Маркетплейс решений</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt="bread" title="›"><span class="text_upper"><?php the_title() ?></span>
    </div>
    <section class="single-market__promo<?=(get_field('promo-video') ? ' video' : '')?>">
        <?php
            if (get_field('promo-video')) {
                echo get_field('promo-video');
            } else {
                ?>
                <img src="<?php the_field('promo'); ?>" alt="promo" title="Промо" class="hide_mobile">
                <img src="<?php the_field('promo-mobile'); ?>" alt="promo" title="Промо" class="hide_descr">
                <?php
            }
        ?>
    </section>
    <section class="single-market__info">
        <div class="container">
            <h1 class="single-market__info-title title title_fz48 text_upper text_fw700"><?=$seoH1 ?: get_the_title()?></h1>
            <div class="single-market__info-descr title title_fz24 text_upper text_fw700">
                <?php the_field('main-info_undertitle') ?>
            </div>
            <div class="single-market__info-block">
                <div class="single-market__info-text text text_fz18">
                    <?php if (get_field('main-info_who')): ?>
                      <span class="text_upper text_fw700 mb8">Для кого</span>
                      <p><?php the_field('main-info_who'); ?></p>
                    <?php endif; ?>
                    <?php if (get_field('main-info_what')): ?>
                      <span class="text_upper text_fw700 mb8">Для чего</span>
                      <p><?php the_field('main-info_what'); ?></p>
                    <?php endif; ?>
                    <?php if (get_field('main-info_polza')): ?>
                      <span class="text_upper text_fw700 mb8">Польза решения</span>
                        <p><?php the_field('main-info_polza'); ?></p>
                    <?php endif; ?>
                    <span class="text_upper text_fw700"><?php the_field('main-info_points_list-name'); ?></span>
                    <ul>
                        <?php
                            while(have_rows('main-info_points_list')) {
                                the_row();
                                ?>
                                <li><img src="<?php echo bloginfo('template_url') ?>/assets/images/point.svg" alt="point" title="<?php the_sub_field('name'); ?>"><?php the_sub_field('name'); ?></li>
                                <?php
                            }
                        ?>
                    </ul>
                    <span class="text_orange text_upper text_fw700">Особенность:</span>
                    <p><?php the_field('main-info_feature'); ?></p>
                </div>
                <img src="<?php the_field('main-info_image'); ?>" alt="info-image" title="Особенность" class="single-market__info-image hide_mobile">
            </div>
        </div>
    </section>
    <?php if (have_rows('users')) : ?>
    <section class="single-market__slider move-slider-field">
        <div class="single-market__slider-cont">
            <div class="container">
                <h2 class="single-market__slider-title title title_fz48 text_fw700 text_upper">Где применяли</h2>
                <div class="single-market__slider-line move-slider-line">
                    <?php
                        while(have_rows('users')) {
                            the_row();
                            ?>
                            <div class="single-market__slider-item move-slider-item">
                                <div class="single-market__slider-item-left">
                                    <img src="<?php the_sub_field('logo') ?>" alt="<?php the_sub_field('name') ?>" title="<?php the_sub_field('name') ?>" class="single-market__slider-item-logo">
                                    <div class="single-market__slider-item-title title title_fz48 text_fw700 text_upper hide_mobile"><?php the_sub_field('name') ?></div>
                                    <div class="single-market__slider-item-descr text text_fz16"><?php the_sub_field('descr') ?></div>
                                </div>
                                <picture>
                                    <source media="(max-width: 576px)" srcset="<?=get_sub_field('image-mobile') ? get_sub_field('image-mobile')['sizes']['large'] : get_sub_field('image')['sizes']['medium']?>">
                                    <img src="<?= get_sub_field('image')['sizes']['large'] ?>" alt="<?php the_sub_field('name') ?>" title="<?php the_sub_field('name') ?>" class="single-market__slider-item-image">
                                </picture>
                            </div>
                            <?php
                        }
                    ?>
                </div>
            </div>
        </div>
        <div class="single-market__slider-progress move-slider-bar">
            <span></span>
        </div>
    </section>
    <?php endif; ?>
    <?php if(get_field('review_descr')) : ?>
    <section class="single-market__review">
        <div class="container">
            <h2 class="single-market__review-title title title_fz48 text_fw700 text_upper">Случайный отзыв клиента</h2>
            <div class="single-market__review-item">
                <div class="single-market__review-item-title title title_fz48 text_fw700 text_upper">
                    <img src="<?php echo bloginfo('template_url') ?>/assets/images/capt-double.svg" alt="capt-double" title="Отзыв">
                    <?php the_field('review_name'); ?>
                </div>
                <div class="single-market__review-item-descr text text_fz18">
                    <?php the_field('review_descr'); ?>
                </div>
                <div class="single-market__review-item-user text text_fz18 text_fw700">
                    <?php the_field('review_user_fname'); ?>
                </div>
                <div class="single-market__review-item-level text text_fz12">
                    <?php the_field('review_user_level'); ?>
                </div>
            </div>
        </div>
    </section>
    <?php endif; ?>
    <?php if(have_rows('inter')) : ?>
    <section class="single-market__inter">
        <div class="container">
            <h2 class="single-market__inter-title title title_fz48 text_fw700 text_upper">Вам может быть интересно</h2>
            <div class="single-market__inter-list text text_fz16">
                <?php
                    while(have_rows('inter')) {
                        the_row();
                        ?>
                        <div>
                          <div class="single-market__inter-item">
                              <div class="single-market__inter-item-top">
                                  <div>
                                      <h3 class="text_fz18 text_fw700 text_upper"><?php the_sub_field('name') ?></h3>
                                      <p><?php the_sub_field('desr') ?></p>
                                  </div>
                                  <span class="title title_fz32 text_fw700 text_upper"><?php the_sub_field('percent') ?></span>
                              </div>
                              <div class="single-market__inter-item-bott text_white text_fw700">
                                  <?php the_sub_field('result') ?>
                              </div>
                          </div>

                          <?php if (get_sub_field('link-decisions')): ?>
                            <a href="<?php get_sub_field('link-decisions'); ?>" class="button button_arrow text text_fz14 text_fz14-1">
                                Перейти
                                <div class="arrow"><img src="<?=bloginfo('template_url')?>/assets/images/arrow_orange.svg" alt="arrow" title="Смотреть кейс"></div>
                            </a>
                          <?php endif; ?>

                        </div>


                        <?php
                    }
                ?>
            </div>
        </div>
    </section>
    <?php endif; ?>
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
