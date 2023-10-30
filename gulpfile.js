const {src , dest,series}=require('glup');

const globs={
    html:"project/*.html",
    js:"project/*.js",
    css:"project/*.css",
    img:"project/pitures/*"
}

const htmlmin = require('gulp-html-minifier-terser');
function htmltask(){

    return src(globs.html)
    .pipe(htmlmin({ collapseWhitespace: true,removecomments:true }))
    .pipe(dest("dist"))
}
exports.html =htmltask



var concat = require('gulp-concat');
const terser = require('gulp-terser');
function jstask(){

    return src(globs.js).pipe(concat ("script.min.js") ).pipe(terser()).pipe(dest("dist/assets"))
}
exports.n=jstask

const cleancss=require("gulp-clean-css")
function csstask(){
    return src(globs.css).pipe(cleancss()).pipe(dest("dist/assets"))
}
exports.css=csstask


const optimizeImages =require("gulp-optimize-images");
function imgtask(){
    return src(globs.img).pipe(imageoptimization({compressoptions:{jpeg:{quality:70}}}))
    .pipe(dest("dist/images"))
}
exports.img=imgtask 


exports.default=series(imgtask,htmltask,jstask,csstask)