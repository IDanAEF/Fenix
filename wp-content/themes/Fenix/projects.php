<?php
    /*
        Template Name: Проекты
    */
    get_header();
?>
<main class="projects">
    <div class="breadcrumbs container text text_fz14 text_fz14-1">
        <a href="/">Главная</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt="bread" title="›"><?php the_title() ?>
    </div>
    <div class="container">
        <h1 class="projects__title title title_fz120-1 text_upper text_fw700">
            <?=$seoH1 ?: 'Наши проекты'?>
        </h1>
    </div>
    <!-- <hr> -->
    <section class="projects__list about__projects load-more-field" data-view="6">
        <div class="container">
        <?php
            $names = [];
            $my_posts = get_posts(array(
                'numberposts' => -1,
                'category_name'    => 'cases',
                'orderby'     => 'date',
                'order'       => 'DESC',
                'post_type'   => 'post',
                'exclude'     => array(),
                'suppress_filters' => true
            ));

            foreach ($my_posts as $post) {
                setup_postdata($post);
                $names[] = get_the_title();
                ?>
                    <article class="main__services-page about__projects-page load-more-item text text_fz14 text_fz14-1" itemscope itemtype="https://schema.org/Project">
                        <div class="about__projects-page-info">
                            <div class="mobile-text">
                                <h3 class="mobile-text-title title title_fz32 text_upper text_fw700">
                                    <?php the_title(); ?>
                                </h3>
                                <div class="mobile-text-udnertitle text text_fz14 text_fz14-1">
                                    <?php
                                        if (get_field('descr-proj-mobile')) {
                                            echo get_field('descr-proj-mobile');
                                        } else {
                                            echo get_field('descr-proj');
                                        }
                                    ?>
                                </div>
                                <?php if (get_field('prolog_text')) : ?>
                                <a href="<?=get_permalink()?>" class="button button_arrow text text_fz14 text_fz14-1">
                                    смотреть кейс
                                    <div class="arrow"><img src="<?=bloginfo('template_url')?>/assets/images/arrow_orange.svg" alt="arrow" title="Смотреть кейс"></div>
                                </a>
                                <?php endif; ?>
                            </div>
                            <div class="top">
                                <img src="<?=get_field('slider-image-mob')['sizes']['medium'] ?: get_field('slider-image')['sizes']['medium']?>" alt="<?php the_title(); ?>" class="mob_img" loading="lazy">
                                <h3 class="about__projects-page-title title title_fz48 text_fw700 text_upper" itemprop="name"><?php the_title(); ?></h3>
                                <div class="about__projects-page-undertitle text text_fz14 text_fz14-1" itemprop="description">
                                    <?php the_field('descr-proj'); ?>
                                </div>
                                <?php if (get_field('prolog_text')) : ?>
                                <meta itemprop="url" content="<?=get_permalink()?>">
                                <a href="<?=get_permalink()?>" class="button button_arrow text text_fz14 text_fz14-1">
                                    смотреть кейс
                                    <div class="arrow"><img src="<?=bloginfo('template_url')?>/assets/images/arrow_orange.svg" alt="arrow" title="Смотреть кейс"></div>
                                </a>
                                <?php endif; ?>
                            </div>
                            <div class="about__projects-page-result text text_fz14 text_fz14-1 text_white">
                                <?php the_field('result'); ?>
                            </div>
                        </div>
                        <div class="about__projects-page-image">
                            <img src="<?=get_field('slider-image')['sizes']['large'] ?>" alt="<?php the_title(); ?>" title="<?php the_title(); ?>" itemprop="image" loading="lazy">
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
        <div class="button button_refr load-more-btn text text_fz14 text_fz14-1">
            <img src="<?=bloginfo('template_url')?>/assets/images/repfr.svg" alt="refr" title="Показать еще">
            <span>показать еще</span>
        </div>
    </section>
</main>
<?php
    get_footer();
?>
