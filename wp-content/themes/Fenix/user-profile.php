<?php
    /*
        Template Name: Личный кабинет 
    */
    get_header();

    if (is_user_logged_in()) :

    $userData = get_userdata(get_current_user_id());
?>
<main class="user-profile">
    <div class="user-profile__side">
        <?php the_custom_logo() ?>
        <ul class="user-profile__side-points text_white text_fz16 text_fw700 text_upper">
            <li class="active">проекты<img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_side.svg" alt="arrow_side"></li>
            <li>виджеты<img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_side.svg" alt="arrow_side"></li>
            <li>проекты<img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_side.svg" alt="arrow_side"></li>
            <li>виджеты<img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_side.svg" alt="arrow_side"></li>
            <li>проекты<img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_side.svg" alt="arrow_side"></li>
            <li>виджеты<img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_side.svg" alt="arrow_side"></li>
        </ul>
        <div class="side_slide">
            <img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_right_slide_side.png" alt="">
        </div>
    </div>
    <div class="user-profile__main">
        <div class="user-profile__main-top">
            <div class="user-profile__main-top-out text text_fz14">
                <a href="mailto:<?=$userData->user_email?>"><?=$userData->user_email?></a>
                <a id="profile_out" href="/?user_out=true"><img src="<?php echo bloginfo('template_url') ?>/assets/images/out.svg" alt="out" title="Выйти"></a>
            </div>
        </div>
        <div class="user-profile__main-cont">
            <div class="user-profile__main-title">
                <h1 class="title title_fz32 text_upper text_fw700">все обращения и цели</h1>
                <div class="links">
                    <div class="links__item"><img src="<?php echo bloginfo('template_url') ?>/assets/images/link_head.svg" alt=""></div>
                    <div class="links__item"><img src="<?php echo bloginfo('template_url') ?>/assets/images/link_head2.svg" alt=""></div>
                    <div class="links__item"><img src="<?php echo bloginfo('template_url') ?>/assets/images/link_head3.svg" alt=""></div>
                </div>
            </div>
            <div class="user-profile__main-cont-inputs text text_fz14">
                <div class="input_block">
                    <div class="input_block-text date">
                        <img src="<?php echo bloginfo('template_url') ?>/assets/images/calendar.svg" alt="">
                        <input type="date" id="finddate">
                    </div>
                </div>
                <div class="input_block">
                    <div class="input_block-text"><span>Теги</span><img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_down_profile_gray.svg" alt=""></div>
                </div>
                <div class="input_block">
                    <div class="input_block-text"><span>Сотрудник</span><img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_down_profile_gray.svg" alt=""></div>
                    <div class="input_block-list">
                        <div class="input_block-list-item">Александр</div>
                        <div class="input_block-list-item">Александр</div>
                    </div>
                </div>
                <div class="input_block">
                    <div class="input_block-text key">
                        <input type="text" id="findphone" placeholder="Номер абонента">
                        <img src="<?php echo bloginfo('template_url') ?>/assets/images/loop.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="user-profile__main-cont-filter text text_fz14 text_upper">
                <div class="filter-item active">Заявки</div>
                <div class="filter-item active">Звонки</div>
                <div class="filter-item">Цели</div>
                <div class="filter-item">Чаты</div>
                <div class="filter-more text_normal text_orange">
                    Еще фильтры
                    <img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_down_menu_orange.svg" alt="">
                </div>
            </div>
            <div class="user-profile__main-cont-sett text text_fz14">
                <img src="<?php echo bloginfo('template_url') ?>/assets/images/blocks_sett.svg" alt="blocks">Настроить столбцы
            </div>
            <div class="user-profile__main-cont-table">
                <table>
                    <tr class="table_head text text_fz12 text_fw700 text_upper">
                        <td style="min-width: 112px">Тип обращения</td>
                        <td style="min-width: 102px">Дата / время</td>
                        <td style="min-width: 145px">Номер абонента</td>
                        <td style="min-width: 148px">Виртуальный номер</td>
                        <td style="min-width: 190px">ФИО котакта</td>
                        <td style="min-width: 152px">Теги</td>
                        <td style="min-width: 103px">Запись разговора</td>
                        <td style="min-width: 131px">Длительность общения</td>
                        <td style="min-width: 129px">Тип звонка</td>
                        <td style="min-width: 111px">Статус звонка</td>
                        <td style="min-width: 132px">Направление звонка</td>
                        <td style="min-width: 135px">Сотрудник</td>
                    </tr>
                    <?php
                        for($i = 0; $i < 5; $i++) {
                            ?>
                            <tr class="text text_fz14 tr-search">
                                <td>Звонки</td>
                                <td class="date-search">04.05.2022 10:12:56</td>
                                <td class="phone-search">+7 (919) 053-19-13</td>
                                <td>+7 (958) 003-19-13</td>
                                <td></td>
                                <td><img src="<?php echo bloginfo('template_url') ?>/assets/images/tag_1.svg" alt=""></td>
                                <td><img src="<?php echo bloginfo('template_url') ?>/assets/images/tag_2.svg" alt=""><img src="<?php echo bloginfo('template_url') ?>/assets/images/tag_3.svg" alt=""></td>
                                <td>00:00:21</td>
                                <td>Звонок ВАТС</td>
                                <td>Принятый</td>
                                <td>Входящий звонок</td>
                                <td>Александр</td>
                            </tr>
                            <?php
                        }
                    ?>
                </table>
            </div>
        </div>
    </div>
</main>
<style>
    #wpadminbar {
        display: none;
    }
    html {
        margin-top: 0 !important;
    }
    main {
        padding: 0 !important;
    }
</style>
<?php endif; ?>
<?php
    get_footer();
?>