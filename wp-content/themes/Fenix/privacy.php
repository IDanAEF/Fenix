<?php 
    /*
        Template Name: Политика
    */
    get_header();
?>
<main class="privacy">
    <div class="breadcrumbs container text text_fz14 text_fz14-1">
        <a href="/">Главная</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt="bread" title="›"><?php the_title() ?>
    </div>
    <div class="container default-content">
        <h1 class="privacy__title title title_fz48 text_upper text_fw700"><?=$seoH1 ?: get_the_title()?></h1>
        <?php the_content(); ?>
    </div>
</main>
<?php
    get_footer();
?>