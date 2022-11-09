<?php
    get_header();
?>
<main class="empty">
    <div class="breadcrumbs container text text_fz14 text_fz14-1">
        <a href="/">Главная</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt="">Ошибка 404
    </div>
    <h1 class="empty__title title title_fz120 title_fz120-1 text_fw700 text_upper">Ошибка</h1>
    <img class="empty__code" src="<?php echo bloginfo('template_url') ?>/assets/images/404.svg" alt="404">
    <h2 class="empty__name title title_fz32 text_fw700 text_upper">СТРАНИЦА НЕ НАЙДЕНА</h2>
    <div class="empty__descr text text_fz14 text_fz14-1">вы неправильно набрали адресс, или такой страницы больше не существует</div>
    <a href="/" class="empty__link text text_fz14 text_fz14-1 text_fw700">
        <img src="<?php echo bloginfo('template_url') ?>/assets/images/home.svg" alt="home">
        Вернуться на главную страницу
    </a>
</main>
<?php
    get_footer();
?>