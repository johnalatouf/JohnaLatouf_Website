<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Horizontal
 */
?>

	</div><!-- #content -->
	
	

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<a href="<?php echo esc_url( __( 'http://wordpress.org/', 'horizontal' ) ); ?>"><?php printf( __( 'Proudly powered by %s', 'horizontal' ), 'WordPress' ); ?></a>
			<span class="sep"> | </span>
			<?php printf( __( 'Theme: %1$s by %2$s.', 'horizontal' ), 'Horizontal', '<a href="http://www.johnalatouf.com" rel="designer">Johna Latouf</a>' ); ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
