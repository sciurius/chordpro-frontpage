[![Bootstrap 5](https://img.shields.io/badge/Bootstrap%205-7952b3.svg)](https://www.getbootstrap.com/)
[![SCSS](https://img.shields.io/badge/SCSS-c46c98.svg)](https://sass-lang.com/)
[![Node.js](https://img.shields.io/badge/Node.js-6eaa51.svg)](https://nodejs.org/en/)

# Bootstrap Customizer

**Bootstrap Customizer** provides an NPM setup that allows you to quickly build your own Bootstrap theme based on Bootstrap's SASS and JS. Simply change a base color for example and recompile Bootstrap based on it.

Include [Bootstrap](https://getbootstrap.com)'s source Sass and compiled JavaScript bundle via npm. Also includes the [Autoprefixer](https://github.com/postcss/autoprefixer) for cross-browser CSS, [Stylelint](https://stylelint.io) for Sass code quality, and [Popper](https://popper.js.org), a peer dependency of Bootstrap's JS used to position dropdowns, popovers, and tooltips.

Bootstrap Customizer also includes the [Bootstrap CSS Tooltips](https://github.com/glewe/bootstrap-css-tooltips).

## How to use

### Install Bootstrap Customizer

```sh
git clone https://github.com/glewe/bootstrap-customizer
cd bootstrap-customizer
npm install
```
### Customize Bootstrap

Edit the file `src\scss\bootstrap-custom.scss`. Scroll down to the section that is headed:

```scss
/* ----------------------------------------------------------------------------
 * Bootstrap custom styles
 */
```
In that section you can either directly change styles or import a file that contains your changes.

In this example, we want to change the color red that is used for Bootstrap's 'danger' objects. Just enter the new value of your liking, e.g.:

```scss
$red: #cf3231;
```
### Compile Bootstrap

From the command line run:

```sh
npm run build
```
This will compile the Bootstrap .css and .js based on your customizations. The files will be placed in the `dist` folder.

### Review your changes

You can run a local web server on port 3000 like so:

```sh
npm run start
```
Navigate your browser to `http://localhost:3000/` to see a sample page reflecting your custom Bootstrap styles.

## Enjoy

If you have use for this library, feel free to use it anywhere for free.

If you encounter problems or have ideas for improvement, go ahead and open an issue here at GitHub.

Enjoy and best regards,

George
