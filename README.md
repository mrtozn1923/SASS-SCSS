# SASS (Syntactically Awesome Style Sheets)

Bu repository SCSS için hızlı öğretici niteliğindedir.

SASS, CSS’te olmayan özellikleri veren bir css ön işlemcisidir (css-preprocessor). Söz dizimini CSS'e uygun hale getirmek için daha sonra SCSS ortaya çıkmıştır. Aralarında mantıksal olarak hiçbir fark yoktur. Sadece söz dizimini CSS'e benzetmek için SASS üzerinde bazı değişiklikler yapılmıştır.

```sass
/* .sass file */
$bgcolor: blue
$textcolor: red
$fontsize: 25px
  
/* Use the variables */
body
  background-color: $bgcolor
  color: $textcolor
  font-size: $fontsize
```

```scss
/* .scss file */
$bgcolor: blue;
$textcolor: red;
$fontsize: 25px;
  
/* Use the variables */
body {
  background-color: $bgcolor;
  color: $textcolor;
  font-size: $fontsize;
}
```

