<?php
    global $seoH1;
    global $post;

    $seoTitle = get_field('seo-title') ?: get_the_title();
    $seoDescr = get_field('seo-description');
    $seoKeywords = get_field('seo-keywords');
    $seoH1 = get_field('seo-h1');
    $seoUrl = get_site_url();

    if (is_404()) {
        $seoTitle = "404. Страница не найдена";
        $seoDescr = "Вы неправильно набрали адресс, или такой страницы больше не существует";
    }
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    <meta property="og:url" content="<?=$seoUrl?><?=$_SERVER['REQUEST_URI']?>">
    <meta property="og:type" content="website">
    <meta property="twitter:card" content="summary">
    <meta property="twitter:url" content="<?=$seoUrl?><?=$_SERVER['REQUEST_URI']?>">

    <title><?=$seoTitle?></title>
    <meta name="title" content="<?=$seoTitle?>">
    <meta property="og:title" content="<?=$seoTitle?>">
    <meta property="twitter:title" content="<?=$seoTitle?>">

    <?php if ($seoDescr) : ?>
    <meta name="description" content="<?=$seoDescr?>">
    <meta property="og:description" content="<?=$seoDescr?>">
    <meta property="twitter:description" content="<?=$seoDescr?>">
    <?php endif; ?>

    <?php if ($seoKeywords) : ?>
    <meta name="keywords" content="<?=$seoKeywords?>">
    <?php endif; ?>

    <?php
        $data = [
            '@context' => 'http://schema.org',
            '@type' => 'Organization',
            'address' => [
                '@type' => 'PostalAddress',
                'addressLocality' => get_field('city', 12),
                'streetAddress' => get_field('street', 12),
            ],
            'name' => get_bloginfo('name'),
            'email' => get_field('email', 12),
            'telephone' => get_field('phone', 12),
        ];

        $data = json_encode($data);
        echo '<script type="application/ld+json">' . $data . '</script>';

        $data = [
            '@context' => 'http://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [
                ['@type' => 'ListItem',
                'position' => '1',
                    'item' => [
                        '@id' => $seoUrl,
                        'name' => 'Главная',
                    ],
                ]
            ],
        ];

        $arrPath = explode('/', $_SERVER['REQUEST_URI']);

        if (count($arrPath) > 2) {
            $pos = '2';

            if (count($arrPath) > 3) {
                $pageTitle = get_page_by_path($arrPath[1], ARRAY_A, ['page', 'post'])['post_title'];

                $data['itemListElement'][] = [
                    '@type' => 'ListItem',
                    'position' => $pos,
                    'item' => [
                        '@id' => $seoUrl.'/'.$arrPath[1],
                        'name' => $pageTitle,
                    ],
                ];

                $pos = '3';
            }

            $data['itemListElement'][] = [
                '@type' => 'ListItem',
                'position' => $pos,
                'item' => [
                    '@id' => $seoUrl.$_SERVER['REQUEST_URI'],
                    'name' => $post->post_title,
                ],
            ];
        }

        $data = json_encode($data);
        echo '<script type="application/ld+json">' . $data . '</script>';

        $mainMenu = wp_get_nav_menu_items('Main');
        $comprMenu = [];

        $pos = 1;

        foreach($mainMenu as $menuItem) {
            $item = [
                'name' =>  $menuItem->title,
                'url' => $menuItem->url
            ];

            $pid = $menuItem->menu_item_parent;

            if ($pid != 0) {
                foreach($mainMenu as $menuItem) {
                    if ($menuItem->ID == $pid) {
                        $comprMenu[$pid]['childs'][] = $item;
                    }
                }
            } else {
                $comprMenu[$menuItem->ID] = $item;
            }
        }

        $data = [
            '@context' => 'http://schema.org',
            '@type' => 'SiteNavigationElement'
        ];

        foreach($comprMenu as $menuItem) {
            $item = [
                '@type' => 'ListItem',
                'position' => $pos++,
                'name' =>  $menuItem['title'],
                'url' => $menuItem['url']
            ];

            if ($menuItem['childs']) {
                $pos2 = 1;
                foreach($menuItem['childs'] as $child) {
                    $item['itemListElement'][] = [
                        '@type' => 'ListItem',
                        'position' => $pos2++,
                        'name' =>  $child['title'],
                        'url' => $child['url']
                    ];
                }
            }

            $data['itemListElement'][] = $item;
        }

        $data = json_encode($data);
        echo '<script type="application/ld+json">' . $data . '</script>';
    ?>
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        setTimeout(() => {
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(92739474, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true });
        }, 5000);
    </script>
    <!-- /Yandex.Metrika counter -->
    <?php
        wp_head();
    ?>
</head>
<body itemscope itemtype="https://schema.org/WebPage">
    <noscript><div><img src="https://mc.yandex.ru/watch/92739474" style="position:absolute; left:-9999px;" alt="YandexMetrika"></div></noscript>
    <?php if ($post->ID != 400) : ?>
    <div id="header"></div>
    <header class="header text text_fz14 text_white" itemscope itemtype="https://schema.org/WPHeader">
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
                    <a href="<?php the_field('telegram', 12); ?>" target="_blank"><img src="<?php echo bloginfo('template_url') ?>/assets/images/telegram.svg" alt="telegram" title="telegram"></a>
                </div>
                <a href="#feedmail" data-url="/contacts/" class="header__button button button_orange text_orange">
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
                        <div class="market-sub__left-item" itemscope itemtype="https://schema.org/Service">
                            <meta itemprop="url" content="<?=$mitem['link']?>">
                            <a href="<?=$mitem['link']?>" class="market-sub__left-item-title text_white text_fz16" itemprop="name"><?=$mitem['title']?></a>
                            <div class="market-sub__left-item-descr text_white text_fz14" itemprop="description"><?=$mitem['menu_text']?></div>
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
                                        <div class="market-sub__right-slider-item-file back-orange">
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
                                        <div class="market-sub__right-slider-item-file back-dark">
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
                    <div class="market-sub__left-item" itemscope itemtype="https://schema.org/Article">
                        <meta itemprop="name" content="<?=$markets[0]['title']?>">
                        <a href="<?=$markets[0]['link']?>" class="market-sub__left-item-title text_white text_fz16" itemprop="url"><?=$markets[0]['title']?></a>
                        <div class="market-sub__left-item-descr text_white text_fz14" itemprop="description"><?=$markets[0]['menu_text']?></div>
                    </div>
                    <div class="market-sub__left-item" itemscope itemtype="https://schema.org/Article">
                        <meta itemprop="name" content="<?=$markets[2]['title']?>">
                        <a href="<?=$markets[2]['link']?>" class="market-sub__left-item-title text_white text_fz16" itemprop="url"><?=$markets[2]['title']?></a>
                        <div class="market-sub__left-item-descr text_white text_fz14" itemprop="description"><?=$markets[2]['menu_text']?></div>
                    </div>
                    <div class="market-sub__left-item" itemscope itemtype="https://schema.org/Article">
                        <meta itemprop="name" content="<?=$markets[1]['title']?>">
                        <a href="<?=$markets[1]['link']?>" class="market-sub__left-item-title text_white text_fz16" itemprop="url"><?=$markets[1]['title']?></a>
                        <div class="market-sub__left-item-descr text_white text_fz14" itemprop="description"><?=$markets[1]['menu_text']?></div>
                    </div>
                    <div class="market-sub__left-item" itemscope itemtype="https://schema.org/Article">
                        <meta itemprop="name" content="<?=$markets[3]['title']?>">
                        <a href="<?=$markets[3]['link']?>" class="market-sub__left-item-title text_white text_fz16" itemprop="url"><?=$markets[3]['title']?></a>
                        <div class="market-sub__left-item-descr text_white text_fz14" itemprop="description"><?=$markets[3]['menu_text']?></div>
                    </div>
                </div>
                <a href="/market/" class="market-sub__button button button_arrow text_fz14 text_white">
                    Все решения
                    <div class="arrow">
                        <img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt="arrow" title="Все решения">
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
                                                <img class="market-sub__right-slider-item-file-elem obj-pos-<?=$markets[$i]['file_pos'] ? $markets[$i]['file_pos'] : 'center'?>" alt="<?=$markets[$i]['title']?>" title="<?=$markets[$i]['title']?>">
                                                <?php
                                            } else {
                                                ?>
                                                <video class="market-sub__right-slider-item-file-elem scale-<?=($i == 0 ? '3' : '0')?> obj-pos-<?=$markets[$i]['file_pos'] ? $markets[$i]['file_pos'] : 'center'?>" data-load="<?=($i == 2 ? $markets[$i]['file_mobile'] : $markets[$i]['file'])?>" src="" muted="muted" autoplay="autoplay" loop preload="metadata" playsinline></video>
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
                                                <img class="market-sub__right-slider-item-file-elem obj-pos-<?=$markets[$i]['file_pos'] ? $markets[$i]['file_pos'] : 'center'?>" src="<?=$markets[$i]['file']?>" alt="<?=$markets[$i]['title']?>" title="<?=$markets[$i]['title']?>">
                                                <?php
                                            } else {
                                                ?>
                                                <video class="market-sub__right-slider-item-file-elem scale-<?=($i == 0 ? '2' : '0')?> obj-pos-<?=$markets[$i]['file_pos'] ? $markets[$i]['file_pos'] : 'center'?>" data-load="<?=($i == 3 ? $markets[$i]['file_mobile'] : $markets[$i]['file'])?>" src="" muted="muted" autoplay="autoplay" loop preload="metadata" playsinline></video>
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
