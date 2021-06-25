# SASS (Syntactically Awesome Style Sheets)

Bu repository SCSS için hızlı öğretici niteliğindedir.

SASS, CSS’te olmayan özellikleri veren bir css ön işlemcisidir (css-preprocessor). Söz dizimini CSS'e uygun hale getirmek için daha sonra SCSS ortaya çıkmıştır. Aralarında mantıksal olarak hiçbir fark yoktur. Sadece söz dizimini CSS'e benzetmek için SASS üzerinde bazı değişiklikler yapılmıştır.

`NOT:` Buradaki ifadeler `dart sass` üzerinden ifade edilmektedir. Yani resmi olarak desteklenen sürüm `dart sass` sürümüdür.

`NOT:` Başlıkları bilerek İngilizce bıraktım. Çünkü araştırma yaparken resmi dokümantasyonda bulmanız kolay olsun.
 
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
## 7-1 SASSS ARCHITECTURE

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

## TÜRKÇE DOKÜMANTASYON
Bu dokümantasyon 25.06.2021 tarihinde Mert Özen tarafından Türkçeleştirilmiştir.
- [Variables](#variables)
    - [Default Flag](#default-flag)
    - [Scope](#scope)
    - [Shadowing](#shadowing)
- [Lists](#lists)
    - [Access an Element](#access-an-element)
    - [Add to List](#add-to-list)
    - [Find an Element in a List](#find-an-element-in-a-list)
- [Maps](#maps)
    - [Look Up a Value](#look-up-a-value)
    - [@each loop](#each-loop)
    - [Add to a Map](#add-to-a-map)
    - [Argument Lists](#argument-lists)
- [Booleans](#booleans)
- [Null](#null)
- [Interpolation](#interpolation)
- [Style Rules](#style-rules)
    - [Selector Lists](#selector-lists)
    - [Selector Combinators](#selector-combinators)
    - [Nesting Property](#nesting-property)
    - [Parent Selector(&)](#parent-selector)
    - [Placeholder Selectors(%)](#placeholder-selectors)
- [Mixin and Include](#mixin-and-include)
    - [Arguments](#arguments)
    - [Content Blocks](#content-blocks)
- [Function](#function)
    - [Optional Arguments](#optional-arguments)
- [Flow Control](#flow-control)
    - [Conditional Statements](#conditional-statements)
    - [Loops](#loops)
- [Inheritance(@extend)](#inheritance)
    - [Placeholder Selectors(%)](#placeholder-selectors)
- [Modules](#modules)
    - [@import](#import)
      - [Index Files](#index-files)
      - [Nesting and Interpolation](#nesting-and-interpolation)
    - [@use](#use)
      - [Choosing a Namespace](#choosing-a-namespace)
      - [Private Members](#private-members)
      - [Mixin Configure](#mixin-configure)
    - [@forward](#forward)
      - [Adding a Prefix](#adding-a-prefix)
      - [Controlling Visibility](#controlling-visibility)
      - [Configuring Modules](#configuring-modules)
- [Rules to help you prepare a library](#rules-to-help-you-prepare-a-library)
  - [@debug](#debug)
  - [@warn](#warn)
  - [@error](#error)

### Variables
- Değişkenler `$` işareti ile bildirilirler. Değişkenler tek bir yerden kontrol edilebilirler bu sayede hızlı değişiklikler yapabiliriz.
```scss
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);

.alert {
  border: 1px solid $border-dark;
}
```

```css
.alert {
  border: 1px solid rgba(198, 83, 140, 0.88);
}
```

`NOT:` `SASS` değişkenleri ile `CSS` değişkenleri farklıdır. CSS değişkenleri `--` ile bildirilirler. `SASS` değişkenleri farklı bir yerde bir daha tanımlandığı zaman önceki değeri değiştirilmez sadece tekrar tanımlandığı yerden itibaren değişiklikler geçerli olur. `CSS'te` bir daha tanımlanıp içeriği değiştirilirse kullanıldığı her yerde içerik değişir. Ayrıca `SASS` değişkenleri derlenene kadar geçerlidir. `CSS` değişkenleri derleme yapıldıktan sonrada geçerlidir.

`NOT:` SASS geçmişe yönelik destek için isimlendirmelerde `-` ve `_` aynı görmektedir. Aşağıdaki isimlendirmelerin ikiside aynı anlama gelmektedir.
```scss
$color-list
$color_list
```

#### Default Flag
Kullanıcıların kütüphanenizdeki değişkenleri kullandıkları yerde değiştirebilmelerine izin vermek için `!default` anahtar kelimesi eklenmelidir. Bu sayede değişken başka nerede kullanıldıysa otomatik olarak tamamı yeni atanan değer ile değiştirilecektir. Bunun açıklamasını yukarıdaki notta ifade ettik. Kısacası eğer bir değer atanmaz ise `!default` anahtar kelimesi ile birlikte bildirilen değer atanır.
```scss
  // _library.scss
  $black: #000 !default;
  $border-radius: 0.25rem !default;
  $box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

  code {
    border-radius: $border-radius;
    box-shadow: $box-shadow;
  }

  // style.scss
  @use 'library' with (
    $black: #222,
    $border-radius: 0.1rem
  );
```

```css
  code {
    border-radius: 0.1rem;
    box-shadow: 0 0.5rem 1rem rgba(34, 34, 34, 0.15);
  }
```
#### Scope
Bir stil sayfasının en üst düzeyinde bildirilen değişkenler globaldir. Bu, beyan edildikten sonra modüllerin herhangi biri tarafından erişilebilir oldukları anlamına gelir. Ama bu tüm değişkenler için geçerli değil. Bloklar halinde bildirilenler (SCSS'de küme parantezleri veya Sass'ta girintili kod) genellikle yereldir(local) ve yalnızca bildirildikleri blok içinde erişilebilir.

```scss
  $global-variable: global value;

  .content {
    $local-variable: local value;
    global: $global-variable;
    local: $local-variable;
  }

  .sidebar {
    global: $global-variable;
    local: $local-variable; //Burada atama olmaz.
  }
```

```css
  .content {
    global: global value;
    local: local value;
  }

  .sidebar {
    global: global value;
  }
```
#### Shadowing
Yerel değişkenler, global bir değişkenle aynı adla bile bildirilebilir. Bu gerçekleşirse, aslında aynı ada sahip iki farklı değişken oluşur: bir yerel ve bir genel. Bu, yerel bir değişken yazan bir yazarın, farkında bile olmadığı bir global değişkenin değerini yanlışlıkla değiştirmemesini sağlamaya yardımcı olur.

```scss
  $variable: global value;

  .content {
    $variable: local value;
    value: $variable;
  }

  .sidebar {
    value: $variable;
  }
```

```css
  .content {
    value: local value;
  }

  .sidebar {
    value: global value;
  }
```

Yerel bir kapsamdan bir global değişkenin değerini ayarlamanız gerekiyorsa (örneğin bir mixin içerisinde), `!global` bayrağını kullanabilirsiniz. `!global` olarak işaretlenen bir değişken bildirimi her zaman global kapsama atanır.

```scss
  $variable: first global value;

  .content {
    $variable: second global value !global;
    value: $variable;
  }

  .sidebar {
    value: $variable;
  }
```

```css
  .content {
    value: second global value;
  }

  .sidebar {
    value: second global value;
  }
```

`NOT:` `!global` bayrağı yalnızca bir dosyanın en üst düzeyinde önceden bildirilmiş bir değişkeni ayarlamak için kullanılabilir. Yeni bir değişken bildirmek için kullanılamaz.

### Lists

Listeler sıralı elemanları bildirmek için kullanılır. Bu dizilerin elemanlarına döngüler ile erişilebilir. Sadece fikir vermesi amaçlı `@each` döngüsü örneğini veriyorum.

```scss
  $sizes: 40px, 50px, 80px; //bu bir listedir.

  @each $size in $sizes {
    .icon-#{$size} {
      font-size: $size;
      height: $size;
      width: $size;
    }
  }
```

```css
  .icon-40px {
  font-size: 40px;
  height: 40px;
  width: 40px;
}

.icon-50px {
  font-size: 50px;
  height: 50px;
  width: 50px;
}

.icon-80px {
  font-size: 80px;
  height: 80px;
  width: 80px;
}
```
#### Access an Element
Bir liste elemanına erişmek için `list.nth(liste,indis)` şeklinde erişim yapılabilir. Buradaki `@use` ifadesi parçalı dosyaları dahil etmek için kullanılmaktadır. `SASS` içerisinde bulunan `list` dosyasını dahil etmiş oluyor.

```scss
  @use "sass:list";
  $sizes: 40px, 50px, 80px;
  list.nth(10px 12px 16px, 1); //10px
  list.nth($sizes, 2); //50px
```

#### Add to List
Bir listeye eleman eklemek için `append(liste,yeni elemean)` yöntemi kullanılır. Burada mevcut liste bozulmadan yeni bir liste oluşturulur.

`NOT:` Buradaki `@debug` sonucu konsol penceresinde görmek için kullanılmaktadır. İsterseniz dönen değeri aşağıdaki gibi değişkene de atabilirsiniz.

```scss
@debug append(10px 12px 16px, 25px); // 10px 12px 16px 25px
$newList: append([col1-line1], col1-line2); // [col1-line1, col1-line2]
```

#### Find an Element in a List
Bir liste içerisinde elemanın varlığını kontrol etmek için `list.index(liste,aranan eleman)` şeklinde bir kullanım gerçekleştirilebilir. Aşağıda görüldüğü gibi listeleri tanımlarken virgül yerine boşlukta kullanılabilmektedir. Hatta / işaretinin bile kullanıldığını görebilirsiniz.

```scss
  @debug list.index(1px solid red, 1px); // 1
  @debug list.index(1px solid red, solid); // 2
  @debug list.index(1px solid red, dashed); // null
```
`NOT:` Eğer eleman bulunamaz ise `null` döndürecektir. Bu değerde karar yapısında kontrol ettirilerek işlem yapılabilir. Örnek olarak aşağıdaki kodu inceleyebilirsiniz.
```scss
  @if not list.index($valid-sides, $side) {
    @error "#{$side} is not a valid side. Expected one of #{$valid-sides}.";
  }
```
### Maps
Haritalarda aslında bir çeşit listedir. Burada önemli olan şey her verinin `key:value` şeklinde tutulduğudur. Anahtar değer verilerek karşısındaki içerik alınabilir.

```scss
$font-weights: ("regular": 400, "medium": 500, "bold": 700);
```

#### Look Up a Value
Bir haritanın içerisinde ilgili anahtara göre arama yapabilmek için `map.get($map,$key)` şeklinde bir format kullanılmalıdır. Eğer değer bulunmazsa `null` döndürülecektir.

```scss
  $font-weights: ("regular": 400, "medium": 500, "bold": 700);

  @debug map.get($font-weights, "medium");  // 500
  @debug map.get($font-weights, "extra-bold");  // null
```

#### @each loop
Map ile sık kullanılan `@each` döngüsünü burada örneklendirerek vermem gerekiyor. Buradaki döngüde `key:value` şeklinde yapılan tanımlamalara ait `$icons` haritasında değerler sırayla aktarılmaktadır.

```scss
  $icons: ("eye": "\f112", "start": "\f12e", "stop": "\f12f");

  @each $name, $glyph in $icons {
    .icon-#{$name}:before {
      display: inline-block;
      font-family: "Icon Font";
      content: $glyph;
    }
  }
```

```css
  @charset "UTF-8";
  .icon-eye:before {
    display: inline-block;
    font-family: "Icon Font";
    content: "";
  }

  .icon-start:before {
    display: inline-block;
    font-family: "Icon Font";
    content: "";
  }

  .icon-stop:before {
    display: inline-block;
    font-family: "Icon Font";
    content: "";
  }
```
#### Add to a Map
Bir haritaya değer eklemek için `map.set($map,$key,$value)` yöntemi kullanılır.
Listelerde olduğu gibi orijinal haritalar değiştirilmez. Yeni bir harita döndürülür.
```scss
  @use "sass:map";

  $font-weights: ("regular": 400, "medium": 500, "bold": 700);

  @debug map.set($font-weights, "extra-bold", 900);
  // ("regular": 400, "medium": 500, "bold": 700, "extra-bold": 900)
  @debug map.set($font-weights, "bold", 900);
  // ("regular": 400, "medium": 500, "bold": 900)
```
Tek tek değerleri ayarlamak yerine iki harita birleştirilebilir.
```scss
  @use "sass:map";

  $light-weights: ("lightest": 100, "light": 300);
  $heavy-weights: ("medium": 500, "bold": 700);

  @debug map.merge($light-weights, $heavy-weights);
  // ("lightest": 100, "light": 300, "medium": 500, "bold": 700)
```
Eğer iki haritanın anahtarlarıda aynıysa ikinci haritanın değerleri döndürülür.
```scss
  @use "sass:map";

  $weights: ("light": 300, "medium": 500);

  @debug map.merge($weights, ("medium": 700));
  // ("light": 300, "medium": 700)
```
`NOT:` Eğer orijinal haritayı değiştirmek isterseniz geri dönen değeri `!global` anahtar kelimesiyle birlikte global olarak tanımlanmış değişkene(haritaya) yazdırabilirsiniz.
```scss
@use "sass:map";
  $prefixes-by-browser: ("firefox": moz, "safari": webkit, "ie": ms);

  @mixin add-browser-prefix($browser, $prefix) {
    $prefixes-by-browser: map.merge($prefixes-by-browser, ($browser: $prefix)) !global;
  }

  @include add-browser-prefix("opera", o);
  @debug $prefixes-by-browser;
  // ("firefox": moz, "safari": webkit, "ie": ms, "opera": o)
```
#### Argument Lists
Eğer anahtar kelimelere direkt olarak ihtiyacınız varsa `meta.keyword($args)` metodu kullanılabilir. Aşağıda bir `mixin` kullanımı bulunmaktadır. `Mixin` kısmına çok kafanız takılmasın daha sonra açıklayacağım. Ancak bir `şablon` gibi düşünebilirsiniz. İstediğiniz yerde bu şablonu dahil ederek kullanabilmektesiniz.

Örnekte `@include` ile ilgili `@mixin` dahil edilirken `key:value` şeklinde parametreler gönderilmektedir. Dikkat ederseniz harita mantığı kullanılmış ancak bizim buradaki anahtar değerlere (değişkenlere) ihtiyacımız var ve bu anahtar değerlerinde isimlerini olduğu gibi kullanmamız gerekiyor. İşte burada devreye `meta.keywords($args)` giriyor. Burada `@mixin` kullanımıyla `$args...` kullanımını da görmüş olduk. Eğer parametre sayısı bilinmiyorsa bir listeye (isterseniz dizide diyebilirsiniz) çevirecek olan `$args...` kullanılmaktadır. İsim değişebilir önemli olan `...` ifadesidir.

```scss
  @use "sass:meta";

  @mixin syntax-colors($args...) {
    @debug meta.keywords($args);
    // (string: #080, comment: #800, variable: #60b)

    @each $name, $color in meta.keywords($args) {
      pre span.stx-#{$name} {
        color: $color;
      }
    }
  }

  @include syntax-colors(
    $string: #080,
    $comment: #800,
    $variable: #60b,
  );
```
```css
  pre span.stx-string {
    color: #080;
  }

  pre span.stx-comment {
    color: #800;
  }

  pre span.stx-variable {
    color: #60b;
  }
```
### Booleans
`TRUE` veya `FALSE` olmak üzere iki booleans değer bulunmaktadır. SASS tarafında bizi ilgilendiren en önemli detay sadece ve sadece `false` ve `null` ifadeleri `false` değerini verir. Diğer dillerde bazen boş diziler, sıfır(0) değeride `false` olarak kabul edilmektedir. Boş dizeler, boş listeler ve 0 sayısı, SASS'ta `true` olarak kabul edilmektedir.

```scss
  @debug 1px == 2px; // false
  @debug 1px == 1px; // true
  @debug 10px < 3px; // false
  @debug math.comparable(100px, 3in); // true

  @debug true and true; // true
  @debug true and false; // false

  @debug true or false; // true
  @debug false or false; // false

  @debug not true; // false
  @debug not false; // true
```
Yukarıdaki örneklerde `operatör` ve `math` sınıfına ait bazı kullanımlar bulunmaktadır. Bunlar basit konular olduğu için çok üstünde durmuyorum. 

> [SASS Dokümantasyonu-Operatörler](https://sass-lang.com/documentation/operators)

### Null
Bir değerin yokluğunu temsil eder ve genellikle bir sonucun olmadığını belirtmek için fonksiyonlar tarafından döndürülür. Boolean değer olarak `false` olarak tanımlanmaktadır.

- Eğer bir liste içerisinde değer yoksa o özellik atanmaz.

```scss
  $fonts: ("serif": "Helvetica Neue", "monospace": "Consolas");

  h3 {
    font: 18px bold map-get($fonts, "sans");
  }
```
```css
  h3 {
  font: 18px bold;
}
```
- Eğer tek başına bir özellik olarak atanacaksa CSS tarafına hiç eklenmez.
```scss
  $fonts: ("serif": "Helvetica Neue", "monospace": "Consolas");

  h3 {
    font: {
      size: 18px;
      weight: bold;
      family: map-get($fonts, "sans");
    }
  }
```

```css
  h3 {
    font-size: 18px;
    font-weight: bold;
  }    
```
### Interpolation
Dinamik olarak değişecek yerlerde CSS içerisine olduğu gibi gömülesi gereken ifadeleri içeren konuya `interpolation` denilmektedir. Türkçeye `ekleme yapma` olarak çevirebiliriz.

```scss
  @mixin corner-icon($name, $top-or-bottom, $left-or-right) {
  .icon-#{$name} {
    background-image: url("/icons/#{$name}.svg");
    position: absolute;
    #{$top-or-bottom}: 0;
    #{$left-or-right}: 0;
  }
}

@include corner-icon("mail", top, left);
```
```css
  .icon-mail {
    background-image: url("/icons/mail.svg");
    position: absolute;
    top: 0;
    left: 0;
  }
```

`NOT:` Sayılarla enterpolasyon kullanmak kötü bir fikirdir. Örneğin, `#{$width}px` yazmak yerine `$width * 1px` yazın veya daha iyisi `$width` değişkenini başlangıçta `px` cinsinden bildirin.

`NOT:` Interpolation `" "` ifadesini kaldırır. Bu nedenle eklenmesi gereken durumlarda `string.quote()` SASS built-in modülünden faydalanabilirsiniz. Eğer tırnakları kaldırmak istiyorsanız interpolation bir yöntem gibi gözükse de kullanılması tavsiye edilmez yerine `string.unquote()` fonksiyonunun kullanılması tavsiye edilir.

> Buraya kadar olan konular temel konulardı. Şimdi daha önemli konulara giriş yapacağız.

### Style Rules
Biçimlendirme kuralları CSS tarafında olduğu gibi kullanılmaktadır. Yani seçiciler ile ilgili HTML elemanı seçilir ve CSS özelliği yazılır. Ancak SASS bunlarla sınırlı değil. En kullanışlı özelliklerinden biri `nesting` yani iç içe ilgili seçici tekrarından kaçınarak `CSS` yazma özelliğidir. Ancak farkında olmadan bunu abartabilirsiniz. Kodları yazarken seçiciler kısa gibi gözükür ancak CSS çıktısında oldukça uzun bir seçici ortaya çıkabilir. CSS tarafında daha performanslı kod çalıştırmak için mümkün olduğunca az seçici kullanın.

Örneğin aşağıdaki örnek kullanımdan `uzak durun.`

```scss
  .container{
    header{
      //css kodları
      nav {
        //css kodları
        ul {
          //css kodları
          li { 
            //css kodları
            a {
              display: block;
              padding: 6px 12px;
              text-decoration: none;
            } 
          }
        }
      }
    }
  }
```
```css
/*css çıktısı*/
.container header nav ul li a{
    display: block;
    padding: 6px 12px;
    text-decoration: none;
}
```
Seçici sayısı arttıkça kodun analiz edilip çalıştırılması zorlaşacaktır Aşağıdaki gibi bir yöntem kullanılabilir. Kısacası özelleştirmeyi olabildiğince minimum tutmakta fayda var hatta sınıf adları ile tanımlamalar yapılabilir.
```scss
  .container{
    header{
      //css kodları
      nav {
        //css kodları
        ul {
          //css kodları
        }
        li { 
          //css kodları   
        }
        a {
          display: block;
          padding: 6px 12px;
          text-decoration: none;
        }
      }
    }
  }
```

```css
/*css çıktısı*/
.container header nav a{
    display: block;
    padding: 6px 12px;
    text-decoration: none;
}
/*li için çıktı*/
.container header nav li{
    
}

```
`NOT:` Yeri gelmişken değinmekte fayda var. SASS tarafında yorum yazmak için kullanılan `//` ifadesi CSS tarafında olmadığı için yorumlar CSS çıktısına işlemeyecektir.

#### Selector Lists
Birden fazla sınıf için tekrarlı seçici kullanımı SASS tarafında oldukça kolay halledilebiliyor.

```scss
  .alert, .warning {
    ul, p {
      margin-right: 0;
      margin-left: 0;
      padding-bottom: 0;
    }
  }
```
```css
  .alert ul, .alert p, .warning ul, .warning p {
    margin-right: 0;
    margin-left: 0;
    padding-bottom: 0;
  }
```
#### Selector Combinators
CSS tarafındaki birleştiricileri(>, +, ~) yine iç içe kullanabilirsiniz.
```scss
    ul > {
      li {
        list-style-type: none;
      }
    }

    h2 {
      + p {
        border-top: 1px solid gray;
      }
    }

    p {
      ~ {
        span {
          opacity: 0.8;
        }
      }
      + {
        span {
          background-color:blue;
        }
      }
    }
```
```css
  ul > li {
    list-style-type: none;
  }

  h2 + p {
    border-top: 1px solid gray;
  }

  p ~ span {
    opacity: 0.8;
  }
  p + span {
    background-color:blue;
  }
```
Daha önce görmüş olsakta hatırlatmakta fayda var. `Interpolation` kullanımını seçiciler ile birlikte kullanabilmekteyiz. Bu sayede `@mixin` kullanımında dinamik atamaları rahatlıkla yapabiliyoruz.

```scss
  @mixin define-emoji($name, $glyph) {
  span.emoji-#{$name} {
    font-family: IconFont;
    font-variant: normal;
    font-weight: normal;
    content: $glyph;
    }
  }

  @include define-emoji("women-holding-hands", "👭");
```
```css
  @charset "UTF-8";
  span.emoji-women-holding-hands {
    font-family: IconFont;
    font-variant: normal;
    font-weight: normal;
    content: "👭";
  }
```
`NOT:`Interpolation çözümlenmeden daha doğrusu doğru çözümlenmeden seçicilerde kullanılmaz. Yani gelen değerlerde bir yanlışlık varsa ilgili yapı oluşturulmaz.

#### Nesting Property
Eğer aynı ifade ile başlayan CSS özellikleriniz varsa bunlar için ortak olan ifade bir kere yazılarak işlem gerçekleştirilebilir.

```scss
  .enlarge {
  font-size: 14px;
  transition: {
    property: font-size;
    duration: 4s;
    delay: 2s;
  }

  &:hover { font-size: 36px; }
}
```
```css
  .enlarge {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
  }
  .enlarge:hover {
    font-size: 36px;
  }
```
Ortak bir değer verip daha sonra değiştirme işlemide gerçekleştirilebilir.
```scss
  .info-page {
    margin: auto {
      bottom: 10px;
      top: 2px;
    }
}
```
```css
  .info-page {
    margin: auto;
    margin-bottom: 10px;
    margin-top: 2px;
  }
```
#### Parent Selector(&)
- Dıştaki seçiciye ait sözde sınıf tanımlamak veya tekrar bir ek ile kullanmak isterseniz `&` işaretini kullanabilirsiniz.
```scss
  .alert {
  &:hover {
    font-weight: bold;
  }

  [dir=rtl] & {
    margin-left: 0;
    margin-right: 10px;
  }
  :not(&) {
    opacity: 0.8;
  }
}
```
```css
  .alert:hover {
    font-weight: bold;
  }
  [dir=rtl] .alert {
    margin-left: 0;
    margin-right: 10px;
  }
  :not(.alert) {
    opacity: 0.8;
  }
```
- Ön ek eklemek için boşluk bırakmadan devam edebilirsiniz.Buradaki söz dizimi aynı zamanda `BEM` metodolojisine bir örnektir.
```scss
  .accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;

  &__copy {
    display: none;
    padding: 1rem 1.5rem 2rem 1.5rem;
    color: gray;
    line-height: 1.6;
    font-size: 14px;
    font-weight: 500;

    &--open {
      display: block;
    }
  }
}
```
```css
  .accordion {
    max-width: 600px;
    margin: 4rem auto;
    width: 90%;
    font-family: "Raleway", sans-serif;
    background: #f4f4f4;
  }
  .accordion__copy {
    display: none;
    padding: 1rem 1.5rem 2rem 1.5rem;
    color: gray;
    line-height: 1.6;
    font-size: 14px;
    font-weight: 500;
  }
  .accordion__copy--open {
    display: block;
  }
```
- Parent seçiciyi bir `@mixin` içerisinde kullanabilmekte mümkün. Bu işlem için `unify` fonksiyonu kullanılabilir. Tabi burada daha önce görmediğimiz `@at-root` ve `@content` ifadeleri bulunmaktadır. `@content` ifadesi mixinin kullanıldığı yerde block içerisine yazılan değerleri olduğu gibi aktarmak için kullanılır. `@at-root` ise standart iç içe geçmiş yapılanma yerine belgesinin kökünde CSS çıktısının oluşturulmasını sağlar.

```scss
  @use "sass:selector";

  @mixin unify-parent($child) {
    @at-root #{selector.unify(&, $child)} {
      @content;
    }
  }

  .wrapper .field {
    @include unify-parent("input") {
      /* ... */
    }
    @include unify-parent("select") {
      /* ... */
    }
  }
```
```css
  .wrapper input.field {
    /* ... */
  }

  .wrapper select.field {
    /* ... */
  }
```

#### Placeholder Selectors(%)
Yer tutucular CSS çıktılarına dahil edilmezler. Bu özellik en çok kalıtım `(inheritance)` konusunda işinize yarayacaktır. Eğer ortak özelliklere sahib sınıflarınız varsa bunun için `yer tutucu(%)` ile tanımlama yapılarak `@extend` ile dahil edebiliriz. Bu sayede ilgili sınıflar ortak sınıf adı eklenmeden oluşturulabilecektir.

```scss
  %toolbelt {
    box-sizing: border-box;
    border-top: 1px rgba(#000, .12) solid;
    padding: 16px 0;
    width: 100%;

    &:hover { border: 2px rgba(#000, .5) solid; }
  }

  .action-buttons {
    @extend %toolbelt;
    color: #4285f4;
  }

  .reset-buttons {
    @extend %toolbelt;
    color: #cddc39;
  }
```
```css
  .action-buttons, .reset-buttons {
    box-sizing: border-box;
    border-top: 1px rgba(0, 0, 0, 0.12) solid;
    padding: 16px 0;
    width: 100%;
  }
  .action-buttons:hover, .reset-buttons:hover {
    border: 2px rgba(0, 0, 0, 0.5) solid;
  }

  .action-buttons {
    color: #4285f4;
  }

  .reset-buttons {
    color: #cddc39;
  }
```
### Mixin and Include
Tekrarlı kod parçacıklarınızı veya belirli bir amaca hizmet eden kod şablonlarınızı tekrar tekrar yazmanıza gereken kalmadan dahil etmenizi sağlayan yapılar oluşturmak için `@mixin` ve `@include` kurallarını kullanabilirisiniz.

İçerisinde karar yapıları, döngüler, css kodları vb. kullanılabilir. Fonksiyonlardan farkı geriye bir değer döndürmezler. Kod bloğunu olduğu gibi eklerler. Ayrıca parametrede alabilirler.

```scss
  @mixin reset-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  @mixin horizontal-list {
    @include reset-list;

    li {
      display: inline-block;
      margin: {
        left: -2px;
        right: 2em;
      }
    }
  }

nav ul {
  @include horizontal-list;
}
```

```css
  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  nav ul li {
    display: inline-block;
    margin-left: -2px;
    margin-right: 2em;
  }
```
#### Arguments
- Mixin'ler, her çağrıldıklarında davranışlarının özelleştirilmesine olanak tanıyan bağımsız değişkenler de alabilir.
```scss
  @mixin rtl($property, $ltr-value, $rtl-value) {
    #{$property}: $ltr-value;

    [dir=rtl] & {
      #{$property}: $rtl-value;
    }
  }

  .sidebar {
    @include rtl(float, left, right);
  }
```

```css
  .sidebar {
    float: left;
  }
  [dir=rtl] .sidebar {
    float: right;
  }
```
- Eğer parametreleri isteğe bağlı olarak bildirmek veya girilmediğinde varsayılan bir değer atamak istiyorsanız. Aşağıdaki gibi `$variable:default-value` şeklinde bildirim yapabilirsiniz.
```scss
  @mixin replace-text($image, $x: 50%, $y: 50%) {
    text-indent: -99999em;
    overflow: hidden;
    text-align: left;

    background: {
      image: $image;
      repeat: no-repeat;
      position: $x $y;
    }
  }

  .mail-icon {
    @include replace-text(url("/images/mail.svg"), 0);
  }
```

```css
  .mail-icon {
    text-indent: -99999em;
    overflow: hidden;
    text-align: left;
    background-image: url("/images/mail.svg");
    background-repeat: no-repeat;
    background-position: 0 50%;
  }
```
- Eğer isteğe bağlı argüman sayısı fazlaysa tek tek sırayı gözeterek işlem yapmak yerine direkt olarak argüman adını değeriyle birlikte gönderebilirsiniz.
```scss
  @mixin square($size, $radius: 0) {
    width: $size;
    height: $size;

    @if $radius != 0 {
      border-radius: $radius;
    }
  }

  .avatar {
    @include square(100px, $radius: 4px);
  }
```

```css
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 4px;
  }
```
- Eğer çoklu değer şeklinde yani bir liste olarak argüman almak isterseniz bunu `...` ile bildirebilirsiniz. Yalnız buradaki sıralamaya dikkat etmelisiniz. Çoklu argünman alma işlemi `@mixin` üzerinde en sonda olmalıdır.

```scss
@mixin order($height, $selectors...) {
  @for $i from 0 to length($selectors) {
    #{nth($selectors, $i + 1)} {
      position: absolute;
      height: $height;
      margin-top: $i * $height;
    }
  }
}

@include order(150px, "input.name", "input.address", "input.zip");
```

```css
  input.name {
    position: absolute;
    height: 150px;
    margin-top: 0px;
  }

  input.address {
    position: absolute;
    height: 150px;
    margin-top: 150px;
  }

  input.zip {
    position: absolute;
    height: 150px;
    margin-top: 300px;
  }
```

- Daha önce ifade ettiğim gibi eğer değişkenlerden oluşan bir liste argüman olarak geliyorsa ve sizinde `$` olmadan sadece isimlerine ihtiyacınız varsa `meta.keywords($args)` fonksiyonu kullanılabilir.

```scss
  @use "sass:meta";

  @mixin syntax-colors($args...) {
    @debug meta.keywords($args);
    // (string: #080, comment: #800, variable: #60b)

    @each $name, $color in meta.keywords($args) {
      pre span.stx-#{$name} {
        color: $color;
      }
    }
  }

  @include syntax-colors(
    $string: #080,
    $comment: #800,
    $variable: #60b,
  )
```

```css
  pre span.stx-string {
    color: #080;
  }

  pre span.stx-comment {
    color: #800;
  }

  pre span.stx-variable {
    color: #60b;
  }
```
#### Content Blocks
Bir mixin, argümanları almaya ek olarak, içerik bloğu olarak bilinen bir stil bloğunun tamamını alabilir.
Bir mixin, gövdesine `@content` kuralı ekleyerek bir içerik bloğu aldığını bildirebilir. İçerik bloğu, Sass'taki diğer bloklar gibi küme parantezleri kullanılarak iletilir ve `@content` kuralının yerine enjekte edilir.

```scss
  @mixin hover {
    &:not([disabled]):hover {
      @content;
    }
  }

  .button {
    border: 1px solid black;
    @include hover {
      border-width: 2px;
    }
  }
```

```css
  .button {
    border: 1px solid black;
  }
  .button:not([disabled]):hover {
    border-width: 2px;
  }
```

`NOT:`Bir mixin, birden çok `@content` kuralı içerebilir. Varsa, içerik bloğu her bir @içerik için ayrı olarak eklenir.

### Function
Fonksiyonlar `@function` kuralı ile tanımlanır. Mixinler olduğu yerde genişletilirken fonksiyonlar tarafında geri döndürülen değere göre işlem yapılır. Aşağıda parametreli bir fonksiyon örneği verilmiştir. Bu fonksiyon işlemi tamamladığında değer döndürme işlemini `@return` kuralı ile gerçekleştirmekteyiz.

Fonksiyonlar değerleri hesaplamak üzere kurgulanmış yapılardır. Yani mixinler fonksiyonları kullanarak kabiliyetlerini arttırırlar. Tabi fonksiyon içerisinde mixin kullanarakta işlem yapılabilir.

```scss
  @function pow($base, $exponent) {
    $result: 1;
    @for $_ from 1 through $exponent {
      $result: $result * $base;
    }
    @return $result;
  }

  .sidebar {
    float: left;
    margin-left: pow(4, 3) * 1px;
  }
```

```css
  .sidebar {
    float: left;
    margin-left: 64px;
  }
```

`NOT:` SASS tarafında işlerimizi kolaylaştıran `built-in` fonksiyonlar bulunmaktadır. Bunları tek tek anlatmak burada mantıksız olacaktır. Kendi dokümantasyonunda İngilizce bilmesenizde rahatlıkla anlayabileceğiniz ölçüde örnekleri bulunmaktadır. Bunlara sadece bir göz gezdirmeniz yeterli olacaktır. İhtiyacınız olduğu zaman tekrar bir tarama yapabilirsiniz. Bunları kesinlikle ezberlemek zorunda değilsiniz.

> (SASS Dokümantasyonu-Built-In Modules)[https://sass-lang.com/documentation/modules]

#### Optional Arguments
Aşağıda örnek bir `built-in` fonksiyon olan `mix` ile opsiyonel argüman kullanıımı bulunmaktadır. Seçimlik parametre kullanımını daha önce ifade etmiştim. Bu aynı zamanda varsayılan değer ataması olarakta ifade edilmektedir. Aşağıdaki örnekte `$amount:100%` ile varsayılan bir değer ataması yapılmıştır. Eğer buraya parametre gönderilirse `100%` geçersiz kılınacaktır.

```scss
  @function invert($color, $amount: 100%) {
    $inverse: change-color($color, $hue: hue($color) + 180);
    @return mix($inverse, $color, $amount);
  }

  $primary-color: #036;
  .header {
    background-color: invert($primary-color, 80%);
  }
```

```css
  .header {
    background-color: #523314;
  }
```

`NOT:` Argümanların isimlere göre atanabileceğini `@mixin` kullanımında da ifade etmiştim. Yine fonksiyonlarda da bu işlem mümkündür.

`NOT:` Çoklu parametre almak için yani liste olarak almak için `@mixin` kullanımında olduğu gibi `...` kullanılabilir.

`NOT:` Mixin için kullanmış olduğumuz harita kullanımında değişkenlerin adlarına erişmek için `meta.keywords()` fonksiyonunu yine fonksiyonlarla birlikte argüman olarak kullanabiliriz.

### Flow Control
Aslında burası en kolay kısım zaten bir programlama dili hakkında bilginiz varsa bunları bildiğinizi düşünerek sonlara atma ihtiyacı duydum. Eğer bilmediğiniz yerler varsa ve detay bilgi gerekliyse burada hepsine değineceğim.

#### Conditional Statements
Koşullu ifadeler olarak bilinen `@if`, `@else`, `@else if`  kuralları yazdığınız kodları farklı durumlar için uygulanabilir hale getirmektedir. Burada karşılaştırma operatörlerini `(==, !=, <, >, <=, >=)` bilmekte fayda var. Ayrıca mantıksal ifadeleri `(and, or, not)` bilmekte faydalı olacaktır. Bunları uzun uzun açıklamıyorum çünkü standart programlama bilgisi kapsamındadır. Eğer programlama bilginiz yoksa SASS kafanızı karıştırabilir anlamakta güçlük çekebilirsiniz. Öncelikle bu bilgiyi edinmelisiniz.

Yukarıda ifade ettiğim karşılaştırma operatörleri ve mantıksal ifadelerin doğru kullanımı sonucunda `boolean` değer üretilmektedir. Bu değer `true` veya `false` olabilmektedir. İşte koşullu ifadeler bu iki değere göre işlem yapmaktadır.

```scss
  @use "sass:math";

  @mixin triangle($size, $color, $direction) {
    height: 0;
    width: 0;

    border-color: transparent;
    border-style: solid;
    border-width: math.div($size, 2);

    @if $direction == up {
      border-bottom-color: $color;
    } @else if $direction == right {
      border-left-color: $color;
    } @else if $direction == down {
      border-top-color: $color;
    } @else if $direction == left {
      border-right-color: $color;
    } @else {
      @error "Unknown direction #{$direction}.";
    }
  }

  .next {
    @include triangle(5px, black, right);
  }
```

```css
  .next {
    height: 0;
    width: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 2.5px;
    border-left-color: black;
  }
```
Yukarıdaki örneğe baktığımızda `@if` doğru(true) değeri oluştuğunda çalışacak bloktur. `@else if` blokları ise sırayla çalıştırılarak doğru(true) sonucunu bulunana dek adım adım işletilecektir. Eğer `@if` bloğu çalışırsa diğer blokların hiçbirine girmeyecektir. `@else if` bloklarından herhangi birine girerse `@else` bloğuna girmeyecektir. Ancak yukarıdakilerden hiçbiri çalışmaz ise `@else` bloğu çalışacaktır.

`NOT:` Burada `@error` kuralının kullanıldığını görüyoruz. Bu kural sayesinde hatalı sonuçları konsol penceresine yazdırabilmekteyiz.

#### Loops
Tekrarlı işlemler için kullandığımız döngüler üç çeşittir. Bunlar; `@for`, `@each`, `@while` döngüleridir.

-`@for:` Başlangıç ve bitiş değerlerinin verildiği `to` ile son değerin dahil edilmediği, `through` ile son değerinde dahil edildiği döngü türüdür. Bu döngü türünde listeler ve haritalar genelde kullanılmamaktadır. Daha çok belirli bir başlangıç ve bitiş değerinin olduğu durumlarda kullanılmaktadır. Ancak listeler ve haritalar üzerinde de kullanılabilmektedir. Liste veya haritanın eleman sayısını aldığımız zaman bu işlemi gerçekleştirebiliriz. Tabi daha kolayı varken zoru tercih etmek doğru olmaz.

```scss
  $base-color: #036;

  @for $i from 1 through 3 {
    ul:nth-child(3n + #{$i}) {
      background-color: lighten($base-color, $i * 5%);
    }
  }
```
```css
  ul:nth-child(3n + 1) {
    background-color: #004080;
  }

  ul:nth-child(3n + 2) {
    background-color: #004d99;
  }

  ul:nth-child(3n + 3) {
    background-color: #0059b3;
  }
```

-`@each:` @each kuralı, bir listenin her bir öğesi veya bir haritadaki her bir çift için stiller yayınlamayı veya kodu değerlendirmeyi kolaylaştırır.

`Listeler ile kullanımı:`

```scss
  $sizes: 40px, 50px, 80px;

  @each $size in $sizes {
    .icon-#{$size} {
      font-size: $size;
      height: $size;
      width: $size;
    }
  }
```

```css
.icon-40px {
  font-size: 40px;
  height: 40px;
  width: 40px;
}

.icon-50px {
  font-size: 50px;
  height: 50px;
  width: 50px;
}

.icon-80px {
  font-size: 80px;
  height: 80px;
  width: 80px;
}
```

`Haritalar ile kullanımı:`

```scss
  $icons: ("eye": "\f112", "start": "\f12e", "stop": "\f12f");

  @each $name, $glyph in $icons {
    .icon-#{$name}:before {
      display: inline-block;
      font-family: "Icon Font";
      content: $glyph;
    }
  }
```

```css
  @charset "UTF-8";
  .icon-eye:before {
    display: inline-block;
    font-family: "Icon Font";
    content: "";
  }

  .icon-start:before {
    display: inline-block;
    font-family: "Icon Font";
    content: "";
  }

  .icon-stop:before {
    display: inline-block;
    font-family: "Icon Font";
    content: "";
  }
```

`Destructuring:` Çoklu değer taşıyan yapıları parçalamak için `@each` parçalama (desctructuring) yapabilir.

```scss
  $icons:
    "eye" "\f112" 12px,
    "start" "\f12e" 16px,
    "stop" "\f12f" 10px;

  @each $name, $glyph, $size in $icons {
    .icon-#{$name}:before {
      display: inline-block;
      font-family: "Icon Font";
      content: $glyph;
      font-size: $size;
    }
  }
```

```css
  @charset "UTF-8";
  .icon-eye:before {
    display: inline-block;
    font-family: "Icon Font";
    content: "";
    font-size: 12px;
  }

  .icon-start:before {
    display: inline-block;
    font-family: "Icon Font";
    content: "";
    font-size: 16px;
  }

  .icon-stop:before {
    display: inline-block;
    font-family: "Icon Font";
    content: "";
    font-size: 10px;
  }
```
-`@while:` Bu döngü türü boolean ifade mantığına göre hareket etmektedir. Eğer geçerli karşılaştırma doğruysa(true) döngü işletilmeye devam eder. Eğer geçerli karşılaştırma yanlış(false) olursa döngü sonlandırılır.

```scss
  @use "sass:math";

  @function scale-below($value, $base, $ratio: 1.618) {
    @while $value > $base {
      $value: math.div($value, $ratio);
    }
    @return $value;
  }

  $normal-font-size: 16px;
  sup {
    font-size: scale-below(20px, 16px);
  }
```

```css
  sup {
    font-size: 12.36094px;
  }
```

`NOT:` Yukarıdaki örnekte bölme işlemi için `math` modülünden yararlanıldığına dikkat ediniz. Dart SASS artık `/` oparetörü yerine `math` modülündeki `div` fonksiyonunu kullanmaktadır.

### Inheritance(@extend)
Eğer ortak özelliklere sahip biçimlendirmeleriniz varsa üst bir sınıfta yazarak diğer yerlerde genişletebilirsiniz. Bu işleme miras alma(inheritance) denilmektedir. Mixinlerden farkı ne? sorusunu soracaksınız. Mixin kullanırken parametre gönderebilmekteyiz ve seçici ile birlikte bir genişletme söz konusu değildir. `@extend` kuralıyla birebir kodları ilgili blok içerisine seçicisiyle birlikte kopyalamış oluyorsunuz. Eğer `placeholder selector(%)` kullanırsanız seçici değeri gelmeden genişletme yapılmış olur.

```scss
  .error:hover {
    background-color: #fee;
  }

  .error--serious {
    @extend .error;
    border-width: 3px;
  }
```

```css
  .error:hover, .error--serious:hover {
    background-color: #fee;
  }

  .error--serious {
    border-width: 3px;
  }
```
#### Placeholder Selectors(%)
Eğer genişletme yaparken sınıf adının gelmesini istemiyorsanız `%` işaretini kullanabilirsiniz.
```scss
  %button-format {
      padding: 10px 20px;
      border-radius: 15px;
      color: black;
  }

  .toolbar-button {
      @extend %button-format;
      background-color: lightpink;

      &:hover {
          background-color: rgb(155, 106, 114);
      }
  }

  .status-bar-button {
      @extend %button-format;
      background-color: lightblue;

      &:hover {
          background-color: blue;
      }
  }
```

```css
  .status-bar-button, .toolbar-button {
    padding: 10px 20px;
    border-radius: 15px;
    color: black;
  }
  
  .toolbar-button {
    background-color: lightpink;
  }
  .toolbar-button:hover {
    background-color: #9b6a72;
  }
  
  .status-bar-button {
    background-color: lightblue;
  }
  .status-bar-button:hover {
    background-color: blue;
  }
```

### Modules
Modüller kodların daha kolay yönetilmesi için hazırlanmış parçalanmış kod topluluklarıdır. Tüm kodları ve yapıları dahil etmek yerine ilgili modülü dahil edip kullanmak hem bağımlılık yönetimini kolaylaştırır hemde kod okunurluluğunu arttırır.

Modüler dediğimiz zaman karşımıza 3 kural çıkmaktadır. Bunlar; `@use`, `@forward`, `@import` şeklindedir. Aslında `@import` kuralı zaten CSS tarafında da kullanılmaktadır. Ancak SASS tarafında parçalı dosya yapılarını yönetmek için `@use` kullanılması tavsiye edilmektedir. Aşağıda farklarına değiniyor olacağız.

`NOT:` Dart SASS `@use` kullanımını tavsiye etmektedir. İlerleyen süreçte modüller ile `@import` kullanımını kaldıracaklar. Ayrıca `@use` kullanımı `DART SASS` için geçerlidir. SASS geliştiricileri için ana proje `DART SASS` olduğunuda unutmayın. Güncel özellikler ve yöntemler ilk olarak `DART SASS` ile karşımıza gelmektedir. 

#### @import
@import ile `tüm içeriği olduğu gibi` dahil etmektedir. Bu nedenle her parçalı dosya her değişkene veya içeriğe erişebilmektedir. Bu nedenle çakışmalar meydana gelebilmektedir. @import sadece global olarak benzersiz eklemeler için kullanılması uygundur. Örneğin `google fonts` ile bir font ekleyecekseniz bunu `@import` ile dahil etmek yanlış bir kullanım değildir.

Aşağıdaki örnekte `2 farklı scss` dosyasını ana dosya olan `style.scss` dosyasına dahil etme işlemini görüyorsunuz.

```scss
  // foundation/_code.scss
  code {
    padding: .25em;
    line-height: 0;
  }

  // foundation/_lists.scss
  ul, ol {
    text-align: left;

    & & {
      padding: {
        bottom: 0;
        left: 0;
      }
    }
  }

  // style.scss
  @import 'foundation/code', 'foundation/lists';
```

```css
  code {
    padding: .25em;
    line-height: 0;
  }

  ul, ol {
    text-align: left;
  }
  ul ul, ol ol {
    padding-bottom: 0;
    padding-left: 0;
  }
```
`NOT:` SASS dosyaları için `partial file` kavramı bulunmaktadır. Yani ilgili SASS(SCSS) dosyasının parçalı bir dosya olduğunu ana dosyada birleştirileceğini ifade eder ve tek başına derlemez. Bunun için `_filename.scss` şeklinde dosya adını `_` kullanarak başlatmanız gerekir.

##### Index Files
Eğer bir klasör içerisinde `_index.scss` dosyası varsa klasör ana scss dosyasında dahil edildiğinde direkt olarak `_index.scss` dosyası dahil edilir. Yani klasörleme yapıldığında `_index.scss` olmadan ilgili klasörlerin altındaki scss dosyalarını tek tek yüklemek gerekirken. Klasörleme yapıldığında `_index.scss` dosyasında mevcut klasördeki scss dosyaları dahil edilerek daha kolay yönetim sağlanabilir.

```scss
  // foundation/_code.scss
  code {
    padding: .25em;
    line-height: 0;
  }

  // foundation/_lists.scss
  ul, ol {
    text-align: left;

    & & {
      padding: {
        bottom: 0;
        left: 0;
      }
    }
  }

  // foundation/_index.scss
  @import 'code', 'lists';

  // style.scss
  @import 'foundation';
```
Yukarıda görüldüğü gibi `foundation` klasörü altında bulunan `_code.scss` ve `_lists.scss` dosyaları yine `foundation` altında bulunan `_index.scss` dosyasında birleştirilmiştir. Bu sayede `style.scss` dosyasında sadece ilgili klasörü dahil etmemeiz yeterli olmuştur.

##### Nesting and Interpolation
Bir mixin ile alınan parametreye göre `@import` kullanılabilir.

```scss
  @mixin google-font($family) {
    @import url("http://fonts.googleapis.com/css?family=#{$family}");
  }

  @include google-font("Droid Sans");
```

```css
  @import url("http://fonts.googleapis.com/css?family=Droid Sans");
```

`NOT:` `@use` kuralları içeren bir dosyayı içe aktardığınızda(@import), içe aktarılan dosyanın doğrudan o dosyada tanımlanan tüm üyelere (hatta özel üyeler) erişimi olur, ancak dosyanın yüklediği modüllerden hiçbir üyeye erişemez. Ancak bu dosya `@forward` kuralları içeriyorsa içe aktarılan dosyanın yönlendirilen üyelere erişimi olur. Bu, modül sistemiyle kullanılmak üzere yazılmış bir kitaplığı içe aktarabileceğiniz anlamına gelir.

`NOT:` Modüller yalnızca bir kez yüklenir, bu nedenle, bir modülü ilk kez içe aktardıktan(@import) sonra (dolaylı olarak bile olsa) yapılandırmayı değiştirirseniz, modülü tekrar içe aktarırsanız(@import) değişiklik yoksayılır.

#### @use
- @use kuralı, diğer SASS stil sayfalarından `mixins`, `functions` ve `variables` ifadelerini yükler ve birden çok stil sayfasından CSS'yi birleştirir. `@use` tarafından yüklenen stil sayfalarına `modüller` denir. SASS ayrıca kullanışlı işlevlerle dolu yerleşik modüller `(built-in modules)` sağlar.

- En basit @use kuralı, modülü verilen URL'ye yükleyen @use "url" şeklinde yazılır. Bu şekilde yüklenen stiller, bu stiller kaç kez yüklenmiş olursa olsun, derlenmiş CSS çıktısına tam olarak bir kez dahil edilir.

```scss
  // foundation/_code.scss
  code {
    padding: .25em;
    line-height: 0;
  }

  // foundation/_lists.scss
  ul, ol {
    text-align: left;

    & & {
      padding: {
        bottom: 0;
        left: 0;
      }
    }
  }

  // style.scss
  @use 'foundation/code';
  @use 'foundation/lists';
```

```css
  code {
    padding: .25em;
    line-height: 0;
  }

  ul, ol {
    text-align: left;
  }
  ul ul, ol ol {
    padding-bottom: 0;
    padding-left: 0;
  }
```

- namespace.variable, namespace.function>() veya @include namespace.mixin() yazarak başka bir modülden değişkenlere, işlevlere ve karışımlara erişebilirsiniz. Varsayılan olarak ad alanı, modülün URL'sinin yalnızca son bileşenidir. `@use` ile yüklenen üyeler (değişkenler, işlevler ve karışımlar) yalnızca onları yükleyen stil sayfasında görünür. Diğer stil sayfalarının da erişmek istiyorlarsa kendi `@use` kurallarını yazmaları gerekir. Bu, her üyenin tam olarak nereden geldiğini bulmayı kolaylaştırır. Birçok dosyadan üyeleri aynı anda yüklemek istiyorsanız, hepsini tek bir paylaşılan dosyadan iletmek için `@forward` kuralını kullanabilirsiniz.

```scss
// src/_corners.scss
$radius: 3px;

@mixin rounded {
  border-radius: $radius;
}

// style.scss
@use "src/corners";

.button {
  @include corners.rounded;
  padding: 5px + corners.$radius;
}
```

```css
.button {
  border-radius: 3px;
  padding: 8px;
}
```
- Yukarıdaki örnekte görüldüğü gibi @use ile dahil edilen corners.scss dosyasının içerisindeki  `$radius` değişkenine `corners.$radius` olarak eriştik.

##### Choosing a Namespace
- Namespace özelleştirmesi için `as` anahtar kelimesi kullanılabilir. Bu sayede uzun uzun namespace yazmak zorunda kalmayacaksınız.

```scss
// src/_corners.scss
  $radius: 3px;

  @mixin rounded {
    border-radius: $radius;
  }

  // style.scss
  @use "src/corners" as c;

  .button {
    @include c.rounded;
    padding: 5px + c.$radius;
  }
```

```css
  .button {
    border-radius: 3px;
    padding: 8px;
  }
```

- @use "url" ifadesini * olarak yazarak ad alanı olmayan bir modülü bile yükleyebilirsiniz. Ancak bu çok tavsiye edilmez. Eğer baştan sona kendi yapılarınızı kullanıyorsanız uygun olacaktır. Yoksa dahil edilen farklı dosyalardaki variable, mixin, function için ad çakışması yaşayabilirsiniz. 


```scss
// src/_corners.scss
  $radius: 3px;

  @mixin rounded {
    border-radius: $radius;
  }

// style.scss
  @use "src/corners" as *;

  .button {
    @include rounded;
    padding: 5px + $radius;
  }
```

```css
  .button {
    border-radius: 3px;
    padding: 8px;
  }
```

##### Private Members
Eğer gizli değişkenler oluşturmak istiyorsanız `$-degiskenadi` şeklinde değişkenkleri bildirebilirsiniz. Bu sayede sadece ilgili modüle özel olarak kullanılabilecektir ve dışarıdan erişilemeyecektir.

```scss
// src/_corners.scss
$-radius: 3px;

@mixin rounded {
  border-radius: $-radius;
}

// style.scss
@use "src/corners";

.button {
  @include corners.rounded;

  // $-radius değişkenine erişilemez hata alırsınız.
  padding: 5px + corners.$-radius;
}
```

`!default` flag: daha önce açıklamasını vermiştim ancak hatırlatmakta fayda var. Bu bayrak sayesinde değişkenin bir varsayılan değeri olur ve dışarıdan bir değer atanana kadar mevcut değeri korumaya devam eder.

Aşağıdaki örnekte @use ile dahil edilen modül için tanımlı !default bayraklarına sahip değişkenlerin değerlerini yükleme aşamasında `with` ile değiştirebilmekteyiz.

```scss
  // _library.scss
  $black: #000 !default;
  $border-radius: 0.25rem !default;
  $box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

  code {
    border-radius: $border-radius;
    box-shadow: $box-shadow;
  }
  // style.scss
  @use 'library' with (
    $black: #222,
    $border-radius: 0.1rem
  );
```

```css
  code {
    border-radius: 0.1rem;
    box-shadow: 0 0.5rem 1rem rgba(34, 34, 34, 0.15);
  }
```

##### Mixin Configure
Yukarıda basit bir örneği verilen `with` ve `!default` ile başlangıç yapılandırmasını `mixin` kullanarak yapmak daha sağlıklı olacaktır.


```scss
// _library.scss
  $-black: #000;
  $-border-radius: 0.25rem;
  $-box-shadow: null;

  @function -box-shadow() {
    @return $-box-shadow or (0 0.5rem 1rem rgba($-black, 0.15));
  }

  @mixin configure($black: null, $border-radius: null, $box-shadow: null) {
    @if $black {
      $-black: $black !global;
    }
    @if $border-radius {
      $-border-radius: $border-radius !global;
    }
    @if $box-shadow {
      $-box-shadow: $box-shadow !global;
    }
  }

  @mixin styles {
    code {
      border-radius: $-border-radius;
      box-shadow: -box-shadow();
    }
  }

// style.scss
  @use 'library';

  @include library.configure(
    $black: #222,
    $border-radius: 0.1rem
  );

  @include library.styles;
```

```css
  code {
    border-radius: 0.1rem;
    box-shadow: 0 0.5rem 1rem rgba(34, 34, 34, 0.15);
  }
```

#### @forward
- `@forward` kuralı bir SASS stil sayfası yükler ve stil sayfanız `@use` kuralı ile yüklendiğinde `mixins`,`functions` ve `variables` ifadeleri kullanılabilir hale gelir. Kullanıcılarının tek bir giriş noktası dosyası yüklemesine izin verirken, birçok dosyada SASS kitaplıklarını düzenlemeyi mümkün kılar.

- `@forward` kuralı, bir modülün CSS'si söz konusu olduğunda tıpkı `@use` gibi davranır. Yönlendirilen bir modülden gelen stiller, `derlenmiş CSS` çıktısına `dahil edilir` ve `@forward` içeren modül, @use ile kullanılmamış olsa bile onu genişletebilir.

```scss
// src/_list.scss
  @mixin list-reset {
    margin: 0;
    padding: 0;
    list-style: none;
  }
// bootstrap.scss
  @forward "src/list";
// styles.scss
  @use "bootstrap";

  li {
    @include bootstrap.list-reset;
  }
```

```css
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
```
##### Adding a Prefix
- Modül üyeleri genellikle bir ad alanıyla(namespace) kullanıldığından, kısa ve basit adlar genellikle en okunaklı seçenektir. Ancak bu adlar, tanımlandıkları modülün dışında bir anlam ifade etmeyebilir, bu nedenle `@forward`, yönlendirdiği tüm üyelere fazladan bir önek(prefix) ekleme seçeneğine sahiptir.


```scss
// src/_list.scss
  @mixin reset {
    margin: 0;
    padding: 0;
    list-style: none;
  }
// bootstrap.scss
  @forward "src/list" as list-*;
// styles.scss
  @use "bootstrap";

  li {
    @include bootstrap.list-reset;
  }
```

```css
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
```

##### Controlling Visibility
Bazen her üyeyi bir modülden yönlendirmek istemezsiniz. Yalnızca paketinizin kullanabilmesi için bazı üyeleri gizli tutmak veya kullanıcılarınızın bazı üyeleri farklı bir şekilde yüklemesini zorunlu kılmak isteyebilirsiniz. @forward "url" hide members... veya @forward "url" show members... yazarak tam olarak hangi üyelerin yönlendirileceğini kontrol edebilirsiniz.


```scss
  // src/_list.scss
  $horizontal-list-gap: 2em;

  @mixin list-reset {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  @mixin list-horizontal {
    @include reset;

    li {
      display: inline-block;
      margin: {
        left: -2px;
        right: $horizontal-list-gap;
      }
    }
  }
  // bootstrap.scss
  @forward "src/list" hide list-reset, $horizontal-list-gap;
```

#### Configuring Modules
`@forward` kuralı, yapılandırmalı bir modül de yükleyebilir. Bu, çoğunlukla `@use` için olduğu gibi çalışır, bir ek ile: `@forward` kuralının yapılandırmasında `!default` bayrağını kullanabilir. Bu, bir modülün bir üst stil sayfasının varsayılanlarını değiştirmesine izin verirken, ayrıca altındaki stil sayfalarının da bunları geçersiz kılmasına izin verir.

```scss
  // _library.scss
  $black: #000 !default;
  $border-radius: 0.25rem !default;
  $box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

  code {
    border-radius: $border-radius;
    box-shadow: $box-shadow;
  }

  // _opinionated.scss
  @forward 'library' with (
    $black: #222 !default,
    $border-radius: 0.1rem !default
  );
  // style.scss
  @use 'opinionated' with ($black: #333);
```

```css
  code {
    border-radius: 0.1rem;
    box-shadow: 0 0.5rem 1rem rgba(51, 51, 51, 0.15);
  }
```

### Rules to help you prepare a library

#### @debug
Stil sayfanızı geliştirirken bazen bir değişkenin veya ifadenin değerini görmek faydalı olabilir. @debug kuralı bunun içindir: @debug expression olarak yazılır. Çıktı olarak dosya adı ve satır numarasıyla birlikte bu ifadenin değerini yazdırır.

```scss
  @mixin inset-divider-offset($offset, $padding) {
    $divider-offset: (2 * $padding) + $offset;
    @debug "divider offset: #{$divider-offset}";

    margin-left: $divider-offset;
    width: calc(100% - #{$divider-offset});
  }
```

```console
  test.scss:3 Debug: divider offset: 132px
```

#### @warn
Mixins ve Functions yazarken, kullanıcıları belirli argümanları veya belirli değerleri iletmekten caydırmak isteyebilirsiniz. Artık kullanımdan kaldırılan eski argümanları iletiyorlar veya API'nizi pek uygun olmayan bir şekilde çağırıyor olabilirler. @error kuralından farklı olarak sass derlemesini durdurmazlar.

```scss
  @mixin inset-divider-offset($offset, $padding) {
    $divider-offset: (2 * $padding) + $offset;
    @debug "divider offset: #{$divider-offset}";

    margin-left: $divider-offset;
    width: calc(100% - #{$divider-offset});
  }
```

```console
  test.scss:3 Debug: divider offset: 132px
```

#### @error
Bağımsız değişken alan mixin ve function yazarken, genellikle bu bağımsız değişkenlerin API'nizin beklediği türlere ve biçimlere sahip olduğundan emin olmak istersiniz. Değillerse, kullanıcının bilgilendirilmesi ve mixin/function çalışmayı durdurması gerekir.

```scss
  @mixin reflexive-position($property, $value) {
    @if $property != left and $property != right {
      @error "Property #{$property} must be either left or right.";
    }

    $left-value: if($property == right, initial, $value);
    $right-value: if($property == right, $value, initial);

    left: $left-value;
    right: $right-value;
    [dir=rtl] & {
      left: $right-value;
      right: $left-value;
    }
  }

  .sidebar {
    @include reflexive-position(top, 12px);
  }
```

```console
Error: "Property top must be either left or right."
  ╷
3 │     @error "Property #{$property} must be either left or right.";
  │     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ╵
  example.scss 3:5   reflexive-position()
  example.scss 19:3  root stylesheet
```




