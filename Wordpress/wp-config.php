<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'pn`Fap8@^c5){PAW+^NYVU9>Sym`|fRaI/Y#rln3GfAbDi0Zns{?QQaFnmg6l`up');
define('SECURE_AUTH_KEY',  '8g,<V[7.jAw;FZ![2_^mn2O^j_Aus4B1&{PLb&],emi[@d+`]kb&z8[5w!7l0_/:');
define('LOGGED_IN_KEY',    '-11D6P[@e=TEP7H9~9|?OlC-OD~e1sTH*d`s)t?;k|NQBPcng+O}C8}N+/:-}%es');
define('NONCE_KEY',        'UX)tUrWsRV t3QA:m`8=+jLuMB89Hu|r ne*N^D%?27}d;-)<w08yB|?=v|;[gCc');
define('AUTH_SALT',        'c.Mq!{dj*yW^bYv5|Ziv:[qK*]E$nDtj=kj/ :tK niaTbs0BwnT0-`4#|zj%IW=');
define('SECURE_AUTH_SALT', ':)[(+Mt}Lon|Jn.F/bwB54)GTZ;mohIb*RFCn~6T(Mb}wd]-j0o>2Sx6IL0kyCwE');
define('LOGGED_IN_SALT',   'ai58noEMihPq;?&ADSYXx(ELjK>}T5k(Q3=b6g~9)NV*ViZ@#|b|t65K4}*<8y=j');
define('NONCE_SALT',       'xX_u/pfoQ}ID,Y54Z0v-,o.@#@-PttTTFSt5IC|r:]0R+ M-x>vk:FV+g+}|5YVE');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
