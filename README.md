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

## Önemli Konular

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

#### Default Values(!default)
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

> (SASS Dokümantasyonu-Operatörler)[https://sass-lang.com/documentation/operators]

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
- Parent seçiciyi bir `@mixin` içerisinde kullanabilmekte mümkün. Bu işlem için `unify` fonksiyonu kullanılabilir. Tabi burada daha önce görmediğimiz `@at-root` ve `@content` ifadeleri bulunmaktadır. Bunları göz ardı ediniz.

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