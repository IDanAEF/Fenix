<?php
	/*
	    Template Name: Аудит бизнес-процессов
	    Template Post Type: post
	*/
    get_header();
?>
<main class="audit">
	<div class="breadcrumbs container text text_fz14 text_fz14-1">
        <a href="/">Главная</a><img src="<?php echo bloginfo('template_url') ?>/assets/images/bread_arrow.svg" alt="bread"><?php the_title() ?>
    </div>
	<h1 class="audit__title title title_fz120 title_fz120-1 text_fw700 text_upper container">
		Аудит <br>бизнес-процессов
	</h1>
	<section class="audit__banner">
		<img src="<?php echo bloginfo('template_url') ?>/assets/images/point.svg" alt="point" class="audit__banner-point">
		<div class="container text text_white">
			<div class="audit__banner-left text_fz18 text_fw700 text_upper">
				<?php the_field('banner-aud_left') ?>
			</div>
			<div class="audit__banner-right text_fz14 text_fz14-1">
				<?php the_field('banner-aud_right') ?>
			</div>
			<a href="<?php the_field('scheme') ?>" download class="audit__banner-scheme text_fz18 text_upper text_orange">
				<img src="<?php echo bloginfo('template_url') ?>/assets/images/pdf.svg" alt="pdf">
				схемы процессов
			</a>
		</div>
	</section>
	<?php include('assets/images/scheme.svg'); ?>
	<!-- <img src="<?php echo bloginfo('template_url') ?>/assets/images/scheme.svg" alt="scheme" class="audit__scheme"> -->
	<section class="audit__work text text_fz14 text_fz14-1">
		<div class="container">
			<div class="audit__work-points">
				<?php
					while(have_rows('points-aud')) {
						the_row();
						?>
						<div class="audit__work-item">
							<h3 class="text_fz16 text_fw700 text_upper some-tap-place">
								<?php the_sub_field('name') ?>
								<img src="<?php echo bloginfo('template_url') ?>/assets/images/arrow_orange.svg" alt="arrow">
							</h3>
							<ul class="audit__work-list">
								<?php
									while(have_rows('underpoints')) {
										the_row();
										?>
										<li>
											<img src="<?php echo bloginfo('template_url') ?>/assets/images/point.svg" alt="point">
											<?php the_sub_field('name') ?>
										</li>
										<?php
									}
								?>
							</ul>
						</div>
						<?php
					}
				?>
			</div>
			<div class="audit__work-text text_white text_fw700">
				<div class="audit__work-result">
					<h2 class="title_fz24 text_upper">Результат</h2>
					<?php the_field('result-block') ?>
				</div>
				<div class="audit__work-bott">
					<h2 class="title_fz24 text_upper"><?php the_field('underresult_title') ?></h2>
					<?php the_field('underresult_descr') ?>
				</div>
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