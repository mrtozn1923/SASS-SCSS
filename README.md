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
## 7-1 Sass Architecture

```
sass/
|
|– abstracts/
|   |– _variables.scss    # Sass Variables
|   |– _mixins.scss       # Sass Mixins
|   |– _functions.scss    # Sass Functions
|
|– vendors/
|   |– _bootstrap.scss    # Bootstrap
|
|– base/
|   |– _normalize.scss    # Reset/normalize
|   |– _typography.scss   # Typography rules
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _dropdown.scss     # Dropdown
|
|– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|
|– themes/
|   |– _theme.scss        # Default theme
|   |– _dark-theme.scss   # Dark Mode theme
|
 – main.scss              # Main Sass input file
```

`Abstracts:` gerçek stilleri içermezler sadece stilleri oluştururken kullanılan yardımcı sass mekanizmalarını içerir. Bazen isimlendirme yapılırken “helpers” olarak da adlandırıldığını görebilirsiniz.

`Base:` projenin tamamında etkili olacak biçimlendirmeleri burada yapabiliriz. Örneğin, reset.css veya normalize.css eklemeleri burada yapılabilir veya oluşturulabilir. Ayrıca tipografide burada oluşturulabilir.

`Layout:` navbar, header, footer gibi yapılar burada oluşturulur. Çünkü sitenin genelinde değişmeyen ortak parçalardır. Izgara sistemi de burada tanımlanabilir.

`Components:` yeniden kullanılabilecek parçaların tasarımları burada yapılır. Sitenin genelinden bağımsız olarak hareket ettirilebilen yapılar bileşen olarak ifade edilmektedir. Örneğin, buttons, carousel, inputs vb. yapılar.

`Pages:` sayfalara özgü stillerin bulunduğu yerdir. Örneğin, bir projede yalnızca "Bize Ulaşın" sayfasında kullanılan özel bir stil kuralı varsa, burada bir _contact.scss dosyası oluşturularak biçimlendirme yapılabilir.

`Themes:` bir sitenin birden fazla teması olduğunda kullanılır. Örneğin, bir proje de yönetici için farklı bir tasarım varsayılan da farklı bir tasarım istenebilir. Bu nedenle, oturum açmış yöneticiler için tamamen farklı bir tarza sahip olduğunu varsayabiliriz. Belki de bir Yöneticinin sahip olduğu ek özellikleri daha iyi sunmak ve barındırmak içinde kullanılabilir. Bazı web siteleri, düşük ışıklı ortamlarda yazıların daha kolay okunabilmesi için sitenin arka planında koyu renkler kullanırken yazılarda açık renkler kullanır. Bunun gibi bir işlem içi bu tasarımlar themes klasöründe olmalıdır.

`Vendors:` Projemizde kullandığımız tüm üçüncü taraf stil sayfalarını içerir. Örneğin, Bootstrap için hazırlanan scss dosyasını burada dahil edebiliriz.

