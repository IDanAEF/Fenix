<?php
    /*
        Template Name: Клиенты
    */
    get_header();

    $allFields = get_fields();
?>
<main class="clients">
    <div class="breadcrumbs container text text_fz14">
        <a href="/">Главная</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt=""><?php the_title() ?>
    </div>
    <div class="container">
        <h1 class="clients__title title title_fz120 title_fz120-1 text_fw700 text_upper"><?=get_field('title')?></h1>
    </div>
    <section class="clients__items">
        <div class="container">
            <h2 class="clients__items-slogan text text_fz16 text_fw700 text_upper"><?php the_field('slogan') ?></h2>
            <?php
                $clients = $allFields['clients'];
                $reviews = $allFields['reviews'];

                $max = 9;
                
                $rev = 0;
                $row = 1;

                print_r($clients[0]);
            ?>
            <div class="clients__items-list" data-view="<?=$max?>">
                <?php
                    foreach($clients as $ckey => $citem) {
                        if () {

                        }
                    }
                ?>
            </div>
        </div>
    </section>
</main>
<?php
    get_footer();
?>