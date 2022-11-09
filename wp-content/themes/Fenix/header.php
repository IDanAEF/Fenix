<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <title><?php the_title(); ?></title>
    <?php
        wp_head();
        global $post;
    ?>
</head>
<body>
    <?php if ($post->ID != 400) : ?>
    <div id="header"></div>
    <header class="header text text_fz14 text_white">
        <div class="container">
            <div class="header__mobile">
                <div class="header__humburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <?php the_custom_logo(); ?>
            </div>
            <nav class="header__nav">
                <?php 
					wp_nav_menu( [
						'menu'            => 'Main',
						'container'       => false,
						'menu_class'      => 'header__nav-list',
						'echo'            => true,
						'fallback_cb'     => 'wp_page_menu',
						'items_wrap'      => '<ul class="header__nav-list">%3$s</ul>',
						'depth'           => 2
					] );
				?>
            </nav>
            <div class="header__right">
                <!--<div class="header__lang">
                    <div>RU</div>
                    <span></span>
                    <a href="/en<?php echo $_SERVER['REQUEST_URI']; ?>">EN</a>
                </div>-->
                <div class="header__contact">
                    <a href="tel:+<?php echo preg_replace('/[^0-9]/', '', get_field('phone', 12)); ?>"><?php the_field('phone', 12); ?></a>
                    <a href="<?php the_field('telegram', 12); ?>" target="_blank"><img src="<?php echo bloginfo('template_url') ?>/assets/images/telegram.svg" alt="telegram"></a>
                </div>
                <a href="#feedmail" class="header__button button button_orange text_orange">
                    оставить заявку
                </a>
            </div>
        </div>
        <div class="market-sub" data-place="servicesplace">
            <div class="market-sub__left">
                <div class="market-sub__left-points">
                <?php
                    $markets = [];

                    $my_posts = get_posts(array(
                        'numberposts' => 6,
                        'category_name'    => 'services',
                        'orderby'     => 'date',
                        'order'       => 'ASC',
                        'post_type'   => 'post',
                        'suppress_filters' => true
                    ));

                    foreach ($my_posts as $post) {
                        setup_postdata($post);

                        $markets[] = [
                            'title' => get_the_title(),
                            'file' => get_field('svg_code'),
                            'link' => get_the_permalink(),
                            'menu_text' => get_field('menu_descr'),
                            'back' => get_field('slide_back')
                        ];
                    }

                    wp_reset_postdata();

                    foreach($markets as $mitem) {
                        ?>
                        <div class="market-sub__left-item">
                            <a href="<?=$mitem['link']?>" class="market-sub__left-item-title text_white text_fz16"><?=$mitem['title']?></a>
                            <div class="market-sub__left-item-descr text_white text_fz14"><?=$mitem['menu_text']?></div>
                        </div>
                        <?php
                    }
                ?>
                </div>
                <!-- <a href="/services/" class="market-sub__button button button_arrow text_fz14 text_white">
                    Все услуги
                    <div class="arrow">
                        <img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt="">
                    </div>
                </a> -->
            </div>
            <div class="market-sub__right">
                <div class="market-sub__right-slider">
                    <div class="market-sub__right-slider-line">
                        <?php
                            for ($i = 0; $i < count($markets) - 2; $i += 2) {
                                ?>
                                    <a href="<?=$markets[$i]['link']?>" class="market-sub__right-slider-item">
                                        <div class="market-sub__right-slider-item-file" style="background: <?=$markets[$i]['back']?>;">
                                            <?=$markets[$i]['file']?>
                                        </div>
                                        <div class="market-sub__right-slider-item-title text_white text_fz16">
                                            <?=$markets[$i]['title']?>
                                        </div>
                                    </a>
                                <?php
                            }
                        ?>
                    </div>
                </div>
                <div class="market-sub__right-slider">
                    <div class="market-sub__right-slider-line">
                        <?php
                            for ($i = 1; $i < count($markets); $i++) {
                                if ($i % 2 != 0 || $i == count($markets) - 1) {
                                ?>
                                    <a href="<?=$markets[$i]['link']?>" class="market-sub__right-slider-item">
                                        <div class="market-sub__right-slider-item-file" style="background: <?=$markets[$i]['back']?>;">
                                            <?=$markets[$i]['file']?>
                                        </div>
                                        <div class="market-sub__right-slider-item-title text_white text_fz16">
                                            <?=$markets[$i]['title']?>
                                        </div>
                                    </a>
                                <?php
                                }
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="market-sub" data-place="marketplace">
            <div class="market-sub__left">
                <div class="market-sub__left-points">
                <?php
                    $markets = [];

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

                        $markets[] = [
                            'title' => get_the_title(),
                            'file' => get_field('file'),
                            'link' => get_the_permalink(),
                            'file_pos' => get_field('file_pos'),
                            'file_mobile' => get_field('file_mobile'),
                            'menu_text' => get_field('menu_descr')
                        ];
                    }

                    wp_reset_postdata();
                ?>
                    <div class="market-sub__left-item">
                        <a href="<?=$markets[0]['link']?>" class="market-sub__left-item-title text_white text_fz16"><?=$markets[0]['title']?></a>
                        <div class="market-sub__left-item-descr text_white text_fz14"><?=$markets[0]['menu_text']?></div>
                    </div>
                    <div class="market-sub__left-item">
                        <a href="<?=$markets[2]['link']?>" class="market-sub__left-item-title text_white text_fz16"><?=$markets[2]['title']?></a>
                        <div class="market-sub__left-item-descr text_white text_fz14"><?=$markets[2]['menu_text']?></div>
                    </div>
                    <div class="market-sub__left-item">
                        <a href="<?=$markets[1]['link']?>" class="market-sub__left-item-title text_white text_fz16"><?=$markets[1]['title']?></a>
                        <div class="market-sub__left-item-descr text_white text_fz14"><?=$markets[1]['menu_text']?></div>
                    </div>
                    <div class="market-sub__left-item">
                        <a href="<?=$markets[3]['link']?>" class="market-sub__left-item-title text_white text_fz16"><?=$markets[3]['title']?></a>
                        <div class="market-sub__left-item-descr text_white text_fz14"><?=$markets[3]['menu_text']?></div>
                    </div>
                </div>
                <a href="/market/" class="market-sub__button button button_arrow text_fz14 text_white">
                    Все решения
                    <div class="arrow">
                        <img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt="">
                    </div>
                </a>
            </div>
            <div class="market-sub__right">
                <div class="market-sub__right-slider">
                    <div class="market-sub__right-slider-line">
                        <?php
                            for($i = 0; $i < count($markets); $i += 2) {
                                ?>
                                    <a href="<?=$markets[$i]['link']?>" class="market-sub__right-slider-item">
                                        <div class="market-sub__right-slider-item-file">
                                        <?php
                                            if (strpos($markets[$i]['file'], '.jpg') !== false || strpos($markets[$i]['file'], '.png') !== false || strpos($markets[$i]['file'], '.svg') !== false || strpos($markets[$i]['file'], '.jpeg') !== false || strpos($markets[$i]['file'], '.webp') !== false) {
                                                ?>
                                                <img class="market-sub__right-slider-item-file-elem" style="object-position: <?=$markets[$i]['file_pos'] ? $markets[$i]['file_pos'] : 'center'?>;" src="<?=$markets[$i]['file']?>" alt="<?=$markets[$i]['title']?>">
                                                <?php
                                            } else {
                                                ?>
                                                <video class="market-sub__right-slider-item-file-elem" style="transform: scale(1.<?=($i == 0 ? '3' : '0')?>); object-position: <?=$markets[$i]['file_pos'] ? $markets[$i]['file_pos'] : 'center'?>;" src="<?=($i == 2 ? $markets[$i]['file_mobile'] : $markets[$i]['file'])?>" muted="muted" autoplay="autoplay" loop preload></video>
                                                <?php
                                            }
                                        ?>
                                        </div>
                                        <div class="market-sub__right-slider-item-title text_white text_fz16">
                                            <?=$markets[$i]['title']?>
                                        </div>
                                    </a>
                                <?php
                            }
                        ?>
                    </div>
                </div>
                <div class="market-sub__right-slider">
                    <div class="market-sub__right-slider-line">
                        <?php
                            for($i = 1; $i < count($markets); $i += 2) {
                                ?>
                                    <a href="<?=$markets[$i]['link']?>" class="market-sub__right-slider-item">
                                        <div class="market-sub__right-slider-item-file">
                                        <?php
                                            if (strpos($markets[$i]['file'], '.jpg') !== false || strpos($markets[$i]['file'], '.png') !== false || strpos($markets[$i]['file'], '.svg') !== false || strpos($markets[$i]['file'], '.jpeg') !== false || strpos($markets[$i]['file'], '.webp') !== false) {
                                                ?>
                                                <img class="market-sub__right-slider-item-file-elem" style="object-position: <?=$markets[$i]['file_pos'] ? $markets[$i]['file_pos'] : 'center'?>;" src="<?=$markets[$i]['file']?>" alt="<?=$markets[$i]['title']?>">
                                                <?php
                                            } else {
                                                ?>
                                                <video class="market-sub__right-slider-item-file-elem" style="transform: scale(1.<?=($i == 0 ? '2' : '0')?>); object-position: <?=$markets[$i]['file_pos'] ? $markets[$i]['file_pos'] : 'center'?>;" src="<?=($i == 3 ? $markets[$i]['file_mobile'] : $markets[$i]['file'])?>" muted="muted" autoplay="autoplay" loop preload></video>
                                                <?php
                                            }
                                        ?>
                                        </div>
                                        <div class="market-sub__right-slider-item-title text_white text_fz16">
                                            <?=$markets[$i]['title']?>
                                        </div>
                                    </a>
                                <?php
                            }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <?php endif; ?>