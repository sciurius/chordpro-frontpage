[![Bootstrap 5](https://img.shields.io/badge/Bootstrap%205-7952b3.svg)](https://www.getbootstrap.com/)
[![SCSS](https://img.shields.io/badge/SCSS-c46c98.svg)](https://sass-lang.com/)
[![Node.js](https://img.shields.io/badge/Node.js-6eaa51.svg)](https://nodejs.org/en/)

# ChordPro Frontpage

**ChordPro Frontpage** provides an NPM setup that allows you to build the chordpro.org frontpage.

## How to use

### Clone/install the ChordPro Frontpage Repo

```sh
git clone https://github.com/glewe/chordpro-frontpage
cd chordpro-frontpage
npm install
```
### Customize

Edit the corresponding files with your changes. Note, the repo uses `.ejs` files for HTML includes.

### Compile

From the command line run:

```sh
npm run build
```
This will compile the new frontpage files based on your customizations. The files will be placed in the `dist` folder.

### Review your changes

You can run a local web server on port 3000 like so:

```sh
npm run start
```
Navigate your browser to `http://localhost:3000/` to see a sample page reflecting your custom Bootstrap styles.

## Enjoy

If you encounter problems or have ideas for improvement, go ahead and open an issue here at GitHub.

Enjoy and best regards,

George
