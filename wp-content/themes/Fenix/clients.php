<?php
    /*
        Template Name: Клиенты
    */
    get_header();

    $allFields = get_fields();
?>
<main class="clients">
    <div class="breadcrumbs container text text_fz14">
        <a href="/">Главная</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt="bread" title="›"><?php the_title() ?>
    </div>
    <div class="container">
        <h1 class="clients__title title title_fz120 title_fz120-1 text_fw700 text_upper"><?=$seoH1 ?: get_field('title')?></h1>
    </div>
    <div class="clients__brands">
        <?php
            $my_posts = get_posts(array(
                'numberposts' => 6,
                'category_name'    => 'cases',
                'orderby'     => 'date',
                'order'       => 'DESC',
                'post_type'   => 'post',
                'include'     => array(945, 195, 188, 544, 209, 197),
                'suppress_filters' => true
            ));

            foreach ($my_posts as $post) {
                setup_postdata($post);
                the_post_thumbnail();
            }
            foreach ($my_posts as $post) {
                setup_postdata($post);
                the_post_thumbnail();
            }
            foreach ($my_posts as $post) {
                setup_postdata($post);
                the_post_thumbnail();
            }
            wp_reset_postdata();
        ?>
    </div>
    <section class="clients__slider single-market__slider move-slider-field">
        <div class="single-market__slider-cont">
            <div class="container">
                <div class="single-market__slider-line move-slider-line">
                    <?php
                        while(have_rows('slider')) {
                            the_row();
                            ?>
                            <div class="single-market__slider-item move-slider-item" itemscope itemtype="https://schema.org/Project">
                                <div class="single-market__slider-item-left">
                                    <img src="<?php the_sub_field('logo') ?>" alt="<?php the_sub_field('title') ?>" title="<?php the_sub_field('title') ?>" class="single-market__slider-item-logo" itemprop="image">
                                    <div class="single-market__slider-item-title title title_fz48 text_fw700 text_upper" itemprop="name"><?php the_sub_field('title') ?></div>
                                    <div class="single-market__slider-item-descr text text_fz16" itemprop="description"><?php the_sub_field('descr') ?></div>
                                </div>
                                <picture>
                                    <source media="(max-width: 576px)" srcset="<?=get_sub_field('image-mob') ? get_sub_field('image-mob')['sizes']['large'] : get_sub_field('image')['sizes']['medium']?>">
                                    <img src="<?=get_sub_field('image')['sizes']['large']?>" alt="<?php the_sub_field('title') ?>" title="<?php the_sub_field('title') ?>" class="single-market__slider-item-image" loading="lazy">
                                </picture>
                                <?php if (get_sub_field('review-add')) : ?>
                                <?php
                                    $review = get_sub_field('review');
                                ?>
                                <div class="clients__slider-review hide_mobile clients__item review black<?= $review['white-text'] ? ' text_white' : ''?>" itemscope itemtype="https://schema.org/Review">
                                    <img class="capt" src="<?=bloginfo('template_url')?>/assets/images/<?=$review['white-text'] ? 'capt-double-white.svg' : 'capt-double.svg'?>" alt="capt-double" title="Отзыв">
                                    <div class="clients__item-top">
                                        <div class="descr text_fz14 text_fz14-1" itemprop="reviewBody">
                                            <?=$review['message']?>
                                        </div>
                                    </div>
                                    <div class="clients__item-bott">
                                        <h4 class="text_fz18 text_fw700" itemprop="author"><?= $review['person'] ?></h4>
                                        <span class="pers-stat text_fz12"><?= $review['person-stat'] ?></span>
                                    </div>
                                </div>
                                <?php endif; ?>
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
    <?php
        function reviewAdd($review, $r) {
            ?>
            <img class="capt" src="<?=bloginfo('template_url')?>/assets/images/<?=$review['black'] ? 'capt-double-white.svg' : 'capt-double.svg'?>" alt="capt-double" title="Отзыв">
            <?php if ($review['image'] || $review['image-mob']) : ?>
                <picture>
                    <source media="(max-width: 576px)" srcset="<?=$review['image-mob']['sizes']['large']?>">
                    <img class="image" src="<?=$review['image']['sizes']['large']?>" alt="review-<?=$r?>" title="Отзыв от - <?=$review['person']['name']?>">
                </picture>
            <?php endif; ?>
            <?php if ($review['logo']) : ?>
            <img class="logo" src="<?=$review['logo']?>" alt="review-logo-<?=$r?>" title="Отзыв от - <?=$review['person']['name']?>">
            <?php endif; ?>
            <div class="clients__item-top">
                <?php if ($review['title']) : ?>
                <h3 class="title_fz48 text_fw700 text_upper" itemprop="name"><?=$review['title']?></h3>
                <?php endif; ?>
                <div class="descr text_fz14 text_fz14-1" itemprop="reviewBody">
                    <?=$review['message']?>
                </div>
            </div>
            <div class="clients__item-bott">
                <h4 class="text_fz18 text_fw700" itemprop="author"><?=$review['person']['name']?></h4>
                <span class="pers-stat text_fz12"><?=$review['person']['stat']?></span>
            </div>
            <?php
        }
    ?>
    <?php
        $clients = $allFields['clients'];
        $reviews = $allFields['reviews'];
        $r = 0;
    ?>
    <section class="clients__items load-more-field-ajax"  data-all="<?=count($clients)?>" data-view="26" data-url="<?=admin_url( "admin-ajax.php" )?>" data-action="clients_posts">
        <div class="container">
            <!-- <h2 class="clients__items-slogan text text_fz16 text_fw700 text_upper"><?php the_field('slogan') ?></h2> -->
            <div class="clients__items-list load-container-items">
                <?php
                    for($i = 0; $i < count($clients); $i++) {
                        if (($i == 8 || $i == 12 || $i == 16 || $i == 26) && $reviews[$r]) {
                            ?>
                            <div class="clients__item load-more-item-two review<?=($i == 12 || $i == 26 ? ' right' : ' left')?><?=$reviews[$r]['black'] ? ' text_white black' : ''?>" itemscope itemtype="https://schema.org/Review">
                                <?php reviewAdd($reviews[$r], $r); ?>
                            </div>
                            <?php
                            $r++;
                            if ($i == 16 && $reviews[$r]) {
                                ?>
                                <div class="clients__item load-more-item-two review right<?=$reviews[$r]['black'] ? ' text_white black' : ''?>" itemscope itemtype="https://schema.org/Review">
                                    <?php reviewAdd($reviews[$r], $r); ?>
                                </div>
                                <?php
                                $r++;
                            }
                        }
                        if ($i >= 26) break;
                        ?>
                        <div class="clients__item client load-more-item" itemscope itemtype="https://schema.org/Project">
                            <div class="clients__item-image">
                                <!-- <img src="<?=$clients[$i]['image']?>" alt="<?=$clients[$i]['name']?>" title="<?=$clients[$i]['name']?>" itemprop="image"> -->
                                <picture>
                                    <source media="(max-width: 768px)" srcset="<?=$clients[$i]['image']['sizes']['medium']?>">
                                    <img src="<?=$clients[$i]['image']['sizes']['large']?>" alt="<?=$clients[$i]['name']?>" title="<?=$clients[$i]['name']?>" itemprop="image" loading="lazy">
                                </picture>
                                <h3 class="text_white title_fz24 text_fw700 text_upper" itemprop="name"><?=$clients[$i]['name']?></h3>
                            </div>
                            <div class="clients__item-descr text text_fz14 text_fz14-1" itemprop="description">
                                <?=$clients[$i]['descr']?>
                            </div>
                        </div>
                        <?php
                        if ($i + 1 == count($clients) && $reviews[$r]) {
                            ?>
                            <div class="clients__item load-more-item-two review right<?=$reviews[$r]['black'] ? ' text_white black' : ''?>">
                                <?php reviewAdd($reviews[$r], $r); ?>
                            </div>
                            <?php
                            $r++;
                        }
                    }
                ?>
            </div>
            <div class="button button_refr load-more-btn text text_fz14 text_fz14-1">
                <img src="<?=bloginfo('template_url')?>/assets/images/repfr.svg" alt="refr" title="Показать еще">
                <span>показать еще</span>
            </div>
        </div>
    </section>
</main>
<?php
    get_footer();
?>
