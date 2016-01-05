<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package Horizontal
 */

get_header(); ?>

	<!--<div id="post" class="panel" class="content-area">
	<div class="scrollbar"></div><div class="scrollable">
	</div>
	</div> -->
	<!-- post holding div --> 
	<div id="primary" class="panel" class="content-area">
	<div class="scrollbar"></div><div class="scrollable">
		<main id="main" class="site-main" role="main">

		
		<?php if ( have_posts() ) : ?>

			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>
				
				<?php
					/* Include the Post-Format-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					get_template_part( 'content', get_post_format() );
				?>

			<?php endwhile; ?>

			<?php horizontal_paging_nav(); ?>

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>
		<?php
		  comments_popup_link( 'No comments yet', '1 comment', '% comments', 'comments-link', 'Comments are off for this post');
		?>

		</main><!-- #main -->
	</div></div><!-- #primary -->
	
	<!--set up the page divs -->
	<div id="page1" class="panel">
	<div class="scrollbar"></div><div class="scrollable">
		<?php 
		$id=2; 
		$post = get_post($id); 
		$content = apply_filters('the_content', $post->post_content); 
		echo $content;  
		?>
	</div></div><!--page1-->
	
	<div id="page2" class="panel">
	<div class="scrollbar"></div><div class="scrollable">
		<?php 
		$id=6; 
		$post = get_post($id); 
		$content = apply_filters('the_content', $post->post_content); 
		echo $content;  
		?>
	</div></div><!--page2-->
	
	<div id="page3" class="panel">
	<div class="scrollbar"></div>
	<div class="scrollable">
		<?php 
		$id=8; 
		$post = get_post($id); 
		$content = apply_filters('the_content', $post->post_content); 
		echo $content;  
		?>
	</div></div><!--page3-->
	
	<div id="page4" class="panel">
	<div class="scrollbar"></div><div class="scrollable">
		<?php 
		$id=87; 
		$post = get_post($id); 
		$content = apply_filters('the_content', $post->post_content); 
		echo $content;  
		?>
	</div></div><!--page4-->
	


<?php get_footer(); ?>
