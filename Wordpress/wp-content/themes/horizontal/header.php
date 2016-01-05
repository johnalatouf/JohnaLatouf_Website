<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package Horizontal
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Expires" CONTENT="-1">
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<link href='http://fonts.googleapis.com/css?family=Alegreya+Sans' rel='stylesheet' type='text/css'>


<?php wp_head(); ?>
<?php comments_popup_script(420, 500); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'horizontal' ); ?></a>

	<header id="masthead" class="site-header" role="banner">
		<div class="site-branding">
			<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
		</div>

		<nav id="site-navigation" class="main-navigation" role="navigation">
			<button class="menu-toggle"><?php _e( 'Primary Menu', 'horizontal' ); ?></button>
			<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->

	<!--Foreground image-->
	<div class="foreground"> 
	</div>
	<!--Background image-->
	<div class="background"> 
	</div>
	<!--Background stars-->
	<div class="stars"> 
	</div>
	<!--Background sky-->
	<div class="sky"> 
	</div>
	
	
	    <!-- TESTING DIV -->
     <!--<div id="testing">
     <br /><br /><br />
   	 <p>Window Size: <span id="windowWidth">...</span> x <span id="windowHeight">...</span></p>
   	 <p>Panel width: <span id="panelWidth">...</span></p>
   	 <p>Panel padding: <span id="panelPadding">...</span></p>
   	 <p>Main width: <span id="mainWidth">...</span></p>
   	 <p>Number of pages: <span id="pageNum">...</span></p>
    </div>-->
	
	<div id="content" class="site-content">
