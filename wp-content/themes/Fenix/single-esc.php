<?php
	/*
	    Template Name: Сопровождение и развитие
	    Template Post Type: post
	*/
    get_header();
?>
<main class="develop">
    <div class="breadcrumbs container text text_fz14 text_fz14-1">
        <a href="/">Главная</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt="bread" title="›"><a href="/services/">Услуги</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt="bread" title="›">Сопровождение
    </div>
    <div class="container">
        <h1 class="develop__title title title_fz120 title_fz120-1 text_fw700 text_upper">
            <?php the_field('title-esc'); ?>
        </h1>
    </div>
    <section class="develop__descr text text_fz16 text_upper">
        <img src="<?php echo bloginfo('template_url') ?>/assets/images/point.svg" alt="point" title="Fenix">
        <span><?php the_field('descr') ?></span>
    </section>
    <section class="develop__services">
        <div class="container">
            <?php
                $i = 1;
                while(have_rows('services')) {
                    the_row();
                    ?>
                    <div class="develop__services-item">
                        <div class="develop__services-item-number"><?=$i++?></div>
                        <div class="develop__services-item-text text text_fz14 text_fz14-1"><?php the_sub_field('descr'); ?></div>
                    </div>
                    <?php
                }
            ?>
        </div>
    </section>
    <section class="develop__situate">
        <div class="container">
            <div class="develop__situate-top">
                <h2 class="develop__situate-title title title_fz48 text_fw700 text_upper">В каких случаях требуется сопровождение RetailCRM?</h2>
                <div class="develop__situate-descr text text_fz14 text_fz14-1 lh-24"><?php the_field('esc_right') ?></div>
            </div>
            <div class="develop__situate-undertitle text text_fz14 text_fz14-1 text_fw700">Помимо этого, поддержка нужна в следующих ситуациях:</div>
            <div class="develop__situate-items text_white text_fz14 text_fz14-1">
                <div class="develop__situate-list">
                    <?php
                        $problems = [];
                        while(have_rows('esc_problems')) {
                            the_row();
                            $problems[] = get_sub_field('name');
                        }
                        for($i = 0; $i < round(count($problems) / 2); $i++) {
                            ?>
                            <span><img src="<?php echo bloginfo('template_url') ?>/assets/images/point.svg" alt="point" title="<?=$problems[$i]?>"> <?=$problems[$i]?></span>
                            <?php
                        }
                    ?>
                </div>
                <div class="develop__situate-list">
                    <?php
                        for($i = round(count($problems) / 2); $i < count($problems); $i++) {
                            ?>
                            <span><img src="<?php echo bloginfo('template_url') ?>/assets/images/point.svg" alt="point" title="<?=$problems[$i]?>"> <?=$problems[$i]?></span>
                            <?php
                        }
                    ?>
                </div>
            </div>
        </div>
    </section>
    <section class="develop__todo">
        <div class="container">
            <h2 class="develop__todo-title title title_fz48 text_fw700 text_upper">Чем занимается Аналитик CRM? </h2>
            <div class="develop__todo-block">
                <div class="develop__todo-image">
                    <img src="<?php the_field('analyz_image'); ?>" alt="analyz" title="Аналитик" class="img_bg">
                </div>
                <div class="develop__todo-list">
                    <?php
                        $i = 1;
                        while(have_rows('analyz_services')) {
                            the_row();
                            ?>
                            <div class="develop__todo-item">
                                <div class="develop__todo-item-number text_orange title_fz24 text_upper text_fw700"><?=($i < 10 ? '0'.$i++ : $i++)?></div>
                                <div class="develop__todo-item-text">
                                    <div class="develop__todo-item-title text text_fz16 text_fw700 text_upper"><?php the_sub_field('name') ?></div>
                                    <div class="develop__todo-item-descr text text_fz14 text_fz14-1"><?php the_sub_field('descr') ?></div>
                                </div>
                            </div>
                            <?php
                        }
                    ?>
                </div>
            </div>
        </div>
    </section>
    <section class="develop__banner">
        <div class="container">
            <img src="<?php echo bloginfo('template_url') ?>/assets/images/point.svg" alt="point" title="Баннер">
            <div class="develop__banner-descr text_white title_fz24 text_upper text_fw700">
                <?php the_field('banner-esc') ?>
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
<?php
    get_footer();
?>