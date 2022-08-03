<?php
    get_header();
?>
<main class="main">
    <section class="main__promo text text_fz14 text_white">
        <div class="container">
            <h1 class="main__promo-logo">
                <img src="<?php echo bloginfo('template_url') ?>/assets/images/logo.svg" alt="logo">
                <div class="main__promo-under text_fw400 text_fz14">
                    VIP интегратор RetailCRM
                </div>
            </h1>
            <div class="main__promo-slider">
                <?php
                    $i = 0;
                    while(have_rows('slider')) {
                        the_row();
                        ?>
                        <img src="<?php the_sub_field('image') ?>" alt="" class="main__promo-slider-item img_bg">
                        <?php
                    }
                ?>
                
            </div>
            <div class="main__promo-about">
                <h2 class="main__promo-about-title title_fz32 text_fw700">О компании</h2>
                <div class="main__promo-about-descr">
                    <?php the_field('about_descr') ?>
                    <a href="<?php the_field('about_button') ?>" class="main__promo-about-button button button_arrow">Подробнее<div class="arrow"><img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt=""></div></a>
                </div>
            </div>
        </div>
    </section>
    <section class="main__advantages">
        <div class="container">
            <h2 class="main__advantages-title text text_fz14 text_fw400">
                Наши преимущества
            </h2>
            <div class="main__advantages-items text text_fz14">
            <?php
                while(have_rows('advantages')) {
                    the_row();
                    ?>
                        <div class="main__advantages-item">
                            <img src="<?php echo bloginfo('template_url') ?>/assets/images/point.svg" alt="point">
                            <div class="main__advantages-item-info">
                                <h3 class="main__advantages-item-title title title_fz24 text_fw700 text_upper"><?php the_sub_field('name'); ?></h3>
                                <div class="main__advantages-item-undertitle"><?php the_sub_field('descr'); ?></div>
                            </div>
                        </div>
                    <?php
                }
			?>
            </div>
        </div>
    </section>
    <section class="main__services">
        <div class="container">
            <h2 class="main__services-title title title_fz120 text_fw700">Услуги</h2>
            <div class="main__services-pages">
            <?php
                $names = [];
                $my_posts = get_posts(array(
                    'numberposts' => -1,
                    'category_name'    => 'services',
                    'orderby'     => 'date',
                    'order'       => 'DESC',
                    'post_type'   => 'post',
                    'suppress_filters' => true
                ));

                foreach ($my_posts as $post) {
                    setup_postdata($post);
                    $names[] = get_the_title();
                    ?>
                        <article class="main__services-page text text_fz14">
                            <div class="main__services-page-info">
                                <h3 class="main__services-page-title title_fz32 text_fw700"><?php the_title(); ?></h3>
                                <div class="main__services-page-blocks">
                                    <div class="main__services-page-blocks-item">
                                        <div class="main__services-page-blocks-title text_fw700">Что делаем</div>
                                        <div class="main__services-page-blocks-descr"><?php the_field('todo'); ?></div>
                                    </div>
                                    <div class="main__services-page-blocks-item">
                                        <div class="main__services-page-blocks-title text_fw700">Результат</div>
                                        <div class="main__services-page-blocks-descr"><?php the_field('result'); ?></div>
                                    </div>
                                </div>
                                <a href="<?php echo get_permalink(); ?>" class="main__services-page-button button button_arrow">Подробнее<div class="arrow"><img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt=""></div></a>
                            </div>
                            <div class="main__services-page-image">
                                <?php the_post_thumbnail(); ?>
                            </div>
                        </article>
                    <?php
			    }

			    wp_reset_postdata();
			?>
            </div>
            <div class="main__services-names text text_fz14">
                <?php
                    for($i = count($names) - 1; $i >= 0; $i--) {
                        ?>
                        <div class="main__services-name<?=$i == count($names) - 1 ? ' active': ''?>">
                            <img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt=""><span><?=$names[$i]?></span>
                        </div>
                        <?php
                    }
                ?>
            </div>
            <div class="main__services-skip">
                <img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt="">
            </div>
        </div>
    </section>
    <section class="main__market">
        <?php
            $market = [];
            $my_posts = get_posts(array(
                'numberposts' => 4,
                'category_name'    => 'market',
                'orderby'     => 'date',
                'order'       => 'ASC',
                'post_type'   => 'post',
                'suppress_filters' => true
            ));

            foreach ($my_posts as $post) {
                setup_postdata($post);
                $market[] = [
                    'title' => get_the_title(),
                    'for' => get_field('for'),
                    'problem' => get_field('problem'),
                    'file' => get_field('file'),
                    'link' => get_the_permalink()
                ];
            }

            wp_reset_postdata();
        ?>
        <div class="container">
            <h1 class="main__market-title title title_fz120 text_fw700 text_upper">
                <div class="main__market-title-top">
                    <span class="text_fz14 text_fw400 text_normal">(35+ готовых решений)</span>
                    Маркетплейс
                </div>
                <div class="main__market-title-bott">
                    решений
                    <span class="text_fz14 text_fw400 text_normal">Разрабатываем индивидуальные решения под клиентов и универсальные публичные модули</span>
                </div>
            </h1>
            <div class="main__market-items">
                <?php
                    foreach($market as $val) {
                        ?>
                        <article class="main__market-item text text_fz14">
                            <div class="main__market-item-info">
                                <h2 class="main__market-item-title title_fz48 text_fw700 text_upper"><?=$val['title']?></h2>
                                <div class="main__market-item-blocks">
                                    <div class="main__market-item-blocks-item">
                                        <div class="main__market-item-blocks-title title_fz24 text_fw700 text_upper">Для кого</div>
                                        <div class="main__market-item-blocks-undertitle"><?=$val['for']?></div>
                                    </div>
                                    <div class="main__market-item-blocks-item">
                                        <div class="main__market-item-blocks-title title_fz24 text_fw700 text_upper">решает проблему</div>
                                        <div class="main__market-item-blocks-undertitle"><?=$val['problem']?></div>
                                    </div>
                                </div>
                                <a href="<?=$val['link']?>" class="main__market-item-button button button_arrow">Подробнее<div class="arrow"><img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt=""></div></a>
                            </div>
                            <div class="main__market-item-file">
                                <?php
                                    if (strpos($val['file'], '.jpg') !== false || strpos($val['file'], '.png') !== false || strpos($val['file'], '.svg') !== false || strpos($val['file'], '.jpeg') !== false || strpos($val['file'], '.webp') !== false) {
                                        ?>
                                        <img src="<?=$val['file']?>" alt="<?=$val['title']?>" class="img_bg">
                                        <?php
                                    } else {
                                        ?>
                                        <video src="<?=$val['file']?>" autoplay preload muted loop></video>
                                        <?php
                                    }
                                ?>
                            </div>
                        </article>
                        <?php
                    }
                ?>
            </div>
            <a href="/market/" class="main__market-all button button_black title title_fz48 text_fw700">все решения<span class="text text_fz12 text_fw400 text_normal">(35)</span></a>
        </div>
    </section>
    <section class="main__blog">
        <div class="container">
            <h2 class="main__blog-title title title_fz48 text_fw700 text_upper">Блог</h2>
            <div class="main__blog-items">
            <?php
                $my_posts = get_posts(array(
                    'numberposts' => 3,
                    'category_name'    => 'blog',
                    'orderby'     => 'date',
                    'order'       => 'ASC',
                    'post_type'   => 'post',
                    'suppress_filters' => true
                ));

                foreach ($my_posts as $post) {
                    setup_postdata($post);
                    ?>
                    <article class="main__blog-item text text_fz14">
                        <div class="main__blog-item-info">
                            <div class="main__blog-item-top">
                                <h3 class="main__blog-item-title text_fw700 text_upper"><?php the_title(); ?></h3>
                                <div class="main__blog-item-undertitle">
                                    <?php the_field('descr'); ?>
                                </div>
                            </div>
                            <div class="main__blog-item-bott title_fz32 text_fw700 text_upper">
                                <?php the_field('gain'); ?>
                            </div>
                        </div>
                        <div class="main__blog-item-result text_white">
                            <span><?php the_field('result'); ?></span>
                            <img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_light.svg" alt="arrow_light" class="<?php the_field('arrow'); ?>">
                        </div>
                    </article>
                    <?php
                }

                wp_reset_postdata();
            ?>
            </div>
            <a href="/blog/" class="main__market-all button button_black title title_fz48 text_fw700">смотреть все<span class="text text_fz12 text_fw400 text_normal">(35)</span></a>
        </div>
    </section>
    <section class="main__cases">
        <div class="container">
            <h2 class="main__cases-title text text_fz14 text_fw400">Кейсы наших клиентов</h2>
            <div class="main__cases-items">
            <?php
                $my_posts = get_posts(array(
                    'numberposts' => 5,
                    'category_name'    => 'cases',
                    'orderby'     => 'date',
                    'order'       => 'ASC',
                    'post_type'   => 'post',
                    'suppress_filters' => true
                ));
                $i = 1;
                foreach ($my_posts as $post) {
                    setup_postdata($post);
                    ?>
                    <article class="main__cases-item text text_fz14" onclick="window.location.href='<?php echo get_the_permalink(); ?>';">
                        <div class="main__cases-item-main">
                            <div class="main__cases-item-number">(<?=$i++?>)</div>
                            <div class="main__cases-item-logo"><?php the_post_thumbnail(); ?></div>
                            <div class="main__cases-item-info">
                                <h3 class="main__cases-item-title title_fz48 text_fw700 text_upper"><?php the_title(); ?></h3>
                                <div class="main__cases-item-undertitle"><?php the_field('descr'); ?></div>
                            </div>
                        </div>
                        <div class="main__cases-item-character">
                            <div class="main__cases-item-result"><?php the_field('result'); ?></div>
                            <div class="main__cases-item-type">
                                <?php
                                    while(have_rows('type')) {
                                        the_row();
                                        ?>
                                        <span class="main__cases-item-type-item text_fz10 text_orange"><?php the_sub_field('name') ?></span>
                                        <?php
                                    }
                                ?>
                            </div>
                        </div>
                    </article>
                    <?php
                }

                wp_reset_postdata();
            ?>
            </div>
            <a href="/projects/" class="main__market-all button button_black title title_fz48 text_fw700">все кейсы<span class="text text_fz12 text_fw400 text_normal">(17)</span></a>
        </div>
    </section>
    <?php if(have_rows('stocks')) : ?>
    <section class="main__stocks">
        <div class="container">
            <h2 class="main__stocks-title title_fz120 text_fw700 text_upper text_orange">Акции</h2>
            <div class="main__stocks-items">
                <?php
                    $stocks = 0;
                    while(have_rows('stocks')) {
                        the_row();
                        $stocks++;
                        ?>
                        <div class="main__stocks-item text text_fz14 text_white">
                            <div class="main__stocks-item-image">
                                <img src="<?php the_sub_field('image'); ?>" alt="<?php the_sub_field('title'); ?>" class="img_bg">
                            </div>
                            <div class="main__stocks-item-info">
                                <h3 class="main__stocks-item-title title_fz32 text_fw700"><?php the_sub_field('title'); ?></h3>
                                <div class="main__stocks-item-undertitle"><?php the_sub_field('descr'); ?></div>
                            </div>
                        </div>
                        <?php
                    }
                ?>
                <div class="main__stocks-list">
                    <?php
                        if ($stocks > 1) {
                            while(have_rows('stocks')) {
                                the_row();
                                ?>
                                    <div class="main__stocks-list-item">
                                        <img src="<?php the_sub_field('image'); ?>" alt="<?php the_sub_field('title'); ?>" class="img_bg">
                                    </div>
                                <?php
                                $i++;
                            }
                        }
                    ?>
                </div>
            </div>
        </div>
    </section>
    <?php endif; ?>
</main>
<?php
    get_footer();
?>