<?php
    /*
        Template Name: Проекты
    */
    get_header();
?>
<main class="projects">
    <div class="breadcrumbs container text text_fz14 text_fz14-1">
        <a href="/">Главная</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt=""><?php the_title() ?>
    </div>
    <div class="container">
        <h1 class="projects__title title title_fz120-1 text_upper text_fw700">
            Наши проекты
        </h1>
    </div>
    <hr>
    <section class="projects__list">
        <div class="container">
        <?php
            $names = [];
            $my_posts = get_posts(array(
                'numberposts' => -1,
                'category_name'    => 'cases',
                'orderby'     => 'date',
                'order'       => 'DESC',
                'post_type'   => 'post',
                'suppress_filters' => true
            ));

            foreach ($my_posts as $post) {
                setup_postdata($post);
                $names[] = get_the_title();
                ?>
                    <article class="about__projects-page text text_fz14 text_fz14-1">
                        <div class="about__projects-page-info">
                            <div class="top">
                                <img src="<?php the_field('slider-image-mob') ?>" alt="" class="mob_img">
                                <h3 class="about__projects-page-title title title_fz48 text_fw700 text_upper"><?php the_title(); ?></h3>
                                <div class="about__projects-page-undertitle text text_fz14 text_fz14-1">
                                    <?php the_field('descr'); ?>
                                </div>
                            </div>
                            <div class="about__projects-page-result text text_fz14 text_fz14-1 text_white">
                                <?php the_field('result'); ?>
                            </div>
                        </div>
                        <div class="about__projects-page-image">
                            <img src="<?php the_field('slider-image') ?>" alt="">
                        </div>
                    </article>
                <?php
            }
            wp_reset_postdata();
        ?>
        </div>
    </section>
</main>
<?php
    get_footer();
?>