<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'viepratique');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         '41=&US}Eel07SX,Ep?c^ 8BKx2,`TT8]N~s!-:bweJ5}M@?NA3>wnq0H0HI !du]');
define('SECURE_AUTH_KEY',  '^}>Lzd9]*v(iiy;2ms)[@1z?;.zG 8Jx*a7&^1|D&X7~w@<}0dKK3PYI<4TwL.l9');
define('LOGGED_IN_KEY',    'JJR8/oYH]Zo,5S75CJj@jJ&:d9T*{n1u[ir$4/K`,K{3bGJE1mbNElD_rv<s;5>k');
define('NONCE_KEY',        '_n]!Bz2_!_#*lN6&XUy+P.)[azBX}9s{qTo;`~;T=;/;>H m oBdh~{z1Lic2LqF');
define('AUTH_SALT',        'tHrSqp!epWf}5+k.cx2 wZpoTl[hh9?9cPG4YkEs!Pxa%o4<Xq<gpOml`j?Xyz=r');
define('SECURE_AUTH_SALT', 'r2J~5|W@vIqn=jQ:$t}&.6Yks_S/+0+CM25;BZmMpk,`Q>t&VfbdMZ/.puGuLe^v');
define('LOGGED_IN_SALT',   '3G8;v$kZ_}`M96L@]tr/D/ex&k !RNQ:nX5tzq70+<$HZb$WN$UQ+>`P^w!H8+0T');
define('NONCE_SALT',       'l$?al8P(rKx.r}?Qnv0c9{4AryP#UN:X;q;lL,qhQ~BCax#A3:r~jQRim?EBPZK9');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
