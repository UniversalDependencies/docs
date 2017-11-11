---
layout: base
title:  'UD_Persian'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Persian

Language: [Persian](../fa/overview/fa-hub.html) (code: `fa`)<br/>
Family: Indo-European, Iranian

This treebank has been part of Universal Dependencies since the UD v1.1 release.

The following people have contributed to making this treebank part of UD: Mojgan Seraji, Filip Ginter, Joakim Nivre.

Repository: [UD_Persian](https://github.com/UniversalDependencies/UD_Persian)

License: CC BY-SA 4.0

Genre: news, fiction, medical, legal, social, spoken, nonfiction

Questions, comments?
General annotation questions (either Persian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Persian/issues).
If you want to collaborate, please contact [mojgan&nbsp;•&nbsp;seraji96&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].

| Annotation | Source |
|------------|--------|
| Lemmas | (undocumented) |
| UPOS | (undocumented) |
| XPOS | (undocumented) |
| Features | (undocumented) |
| Relations | (undocumented) |

## Description
The Persian Universal Dependency Treebank (Persian UD) is based on Uppsala Persian Dependency Treebank (UPDT). The conversion of the UPDT to the Universal Dependencies was performed semi-automatically with extensive manual checks and corrections.


The Persian Universal Dependency Treebank (Persian UD) is the converted version of the <a href="https://sites.google.com/site/mojganserajicom/home/updt "> Uppsala Persian Dependency Treebank (UPDT)</a> (Seraji, 2015). The treebank has its original annotation scheme based on Stanford Typed Dependencies (de Marneffe et al., 2006; de Marneffe and Manning, 2008). The scheme was extended for Persian to include the language specific syntactic relations that could not be covered by the primary scheme developed for English. The treebank consists of ca 6000 annotated and validated sentences of written texts with large domain variations, in terms of different genres (containing newspaper articles, fictions, technical descriptions, and documents about culture and art) and tokenization. The variations in the tokenization are due to the orthographic variations of compound words and fixed expressions in the language.

Apart from the universal annotation scheme and the general rules in the UD, the Persian UD and the UPDT differ further in tokenization. All words containing unsegmented clitics (pronominal and copula clitics) annotated with complex labels in the UPDT have been separated from the clitics and received distinct labels in the Persian UD.

The conversion of the UPDT to the Universal Dependencies has been carried out semi-automatically. In this process, we used a conversion script for reversing the head and dependent relations in the prepositional modifier (prep) and object of a preposition (pobj). Furthermore, we have used other scripts tailored for Persian to separate different types of clitics from their host. Subsequently we added different rules for rewriting the coarse-grained part-of-speech tags and the dependency labels. Morphological features were then mapped semi-automatically. In the current release, lemmas are added for a large number of tokens. This process is further done semi-automatically. The entire process has been manually validated.

## Acknowledgments

# Statistics of UD Persian

## POS Tags

[ADJ](fa-pos-ADJ.html) – [ADP](fa-pos-ADP.html) – [ADV](fa-pos-ADV.html) – [AUX](fa-pos-AUX.html) – [CCONJ](fa-pos-CCONJ.html) – [DET](fa-pos-DET.html) – [INTJ](fa-pos-INTJ.html) – [NOUN](fa-pos-NOUN.html) – [NUM](fa-pos-NUM.html) – [PART](fa-pos-PART.html) – [PRON](fa-pos-PRON.html) – [PUNCT](fa-pos-PUNCT.html) – [SCONJ](fa-pos-SCONJ.html) – [VERB](fa-pos-VERB.html) – [X](fa-pos-X.html)

## Features

[Case](fa-feat-Case.html) – [Degree](fa-feat-Degree.html) – [Mood](fa-feat-Mood.html) – [Number](fa-feat-Number.html) – [NumType](fa-feat-NumType.html) – [Person](fa-feat-Person.html) – [Polarity](fa-feat-Polarity.html) – [PronType](fa-feat-PronType.html) – [Reflex](fa-feat-Reflex.html) – [Tense](fa-feat-Tense.html) – [VerbForm](fa-feat-VerbForm.html)

## Relations

[acl:relcl](fa-dep-acl-relcl.html) – [advcl](fa-dep-advcl.html) – [advmod](fa-dep-advmod.html) – [amod](fa-dep-amod.html) – [appos](fa-dep-appos.html) – [aux](fa-dep-aux.html) – [aux:pass](fa-dep-aux-pass.html) – [case](fa-dep-case.html) – [cc](fa-dep-cc.html) – [cc:preconj](fa-dep-cc-preconj.html) – [ccomp](fa-dep-ccomp.html) – [compound](fa-dep-compound.html) – [compound:lvc](fa-dep-compound-lvc.html) – [compound:prt](fa-dep-compound-prt.html) – [conj](fa-dep-conj.html) – [cop](fa-dep-cop.html) – [dep](fa-dep-dep.html) – [det](fa-dep-det.html) – [det:predet](fa-dep-det-predet.html) – [dislocated](fa-dep-dislocated.html) – [fixed](fa-dep-fixed.html) – [flat](fa-dep-flat.html) – [flat:foreign](fa-dep-flat-foreign.html) – [mark](fa-dep-mark.html) – [nmod](fa-dep-nmod.html) – [nmod:poss](fa-dep-nmod-poss.html) – [nsubj](fa-dep-nsubj.html) – [nsubj:nc](fa-dep-nsubj-nc.html) – [nsubj:pass](fa-dep-nsubj-pass.html) – [nummod](fa-dep-nummod.html) – [obj](fa-dep-obj.html) – [obl](fa-dep-obl.html) – [parataxis](fa-dep-parataxis.html) – [punct](fa-dep-punct.html) – [root](fa-dep-root.html) – [vocative](fa-dep-vocative.html) – [xcomp](fa-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>

<ul>
<li>This corpus contains 5997 sentences, 151625 tokens and 152920 syntactic words.</li>
<li>This corpus contains 13133 tokens (9%) that are not followed by a space.</li>
<li>This corpus does not contain words with spaces.</li>
<li>This corpus contains 2 types of words that contain both letters and punctuation. Examples: بود؛, می‌زد؛</li>
<li>This corpus contains 1291 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 715 types of multi-word tokens. Examples: خودش، خودشان، خودم، مرا، معتقدند، بدین، برایش، خودت، دلم، اوست، چیست، کشورمان، ماست، پیداست، خودمان، پدرش، درین، بدان، سرش، مادرش، همسرم، پدرم، آخرش، آن‌هاست، امیدواریم، خانواده‌اش، نامه‌ات، ازین، امیدوارم، امیدوارند، بهش، دستش، دلش، همه‌اش، پایش، کارش، کجاست، آزادند، ارزشهاست، برخوردارند، توست، خانه‌اش، خداست، خودتان، رویش، زین، صدایش، قبلی‌اش، مدتهاست، منظورم.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PROPN, SYM</li>
<li>This corpus contains 3 word types tagged as particles (PART): را, رو, و</li>
</ul>

<ul>
<li>This corpus contains 42 lemmas tagged as pronouns (PRON): _, آن, آنرا, آنها, آنچه, آن‌ها, او, ایشان, این, اینگونه, برخی, بسیاری, بعضی, تمام, تو, جنابعالی, حضرتعالی, خود, خویش, دیگر, دیگری, شما, ما, من, هرکدام, هرکس, هرکه, هم, همان, همدیگر, همه, همگان, همگی, همین, هیچکدام, هیچکس, هیچیک, هیچ‌یک, وی, کی, یک, یکدیگر</li>
</ul>

<ul>
<li>This corpus contains 25 lemmas tagged as determiners (DET): _, آن, این, اینهمه, اینگونه, برخی, بعض, بعضی, تعدادی, تمام, تنها, دیگر, سراسر, فلان, هر, همان, همه, همچین, همین, هیچگونه, چنان, چنین, چگونه, کدام, کلیه</li>
</ul>

<ul>
<li>Out of the above, 11 lemmas occurred sometimes as PRON and sometimes as DET: _, آن, این, اینگونه, برخی, بعضی, تمام, دیگر, همان, همه, همین</li>
</ul>

<ul>
<li>This corpus contains 20 lemmas tagged as auxiliaries (AUX): _, آورد#آور, است, باد, بایست#باید, برد#بر, بود, بود#باش, توان, توانست#توان, خواست#خواه, داشت#دار, زایید#زا, ساخت#ساز, شدید, هست, کرد, کرد#کن, گردید#گرد, گشت#گرد</li>
</ul>

<ul>
<li>Out of the above, 15 lemmas occurred sometimes as AUX and sometimes as VERB: _, آورد#آور, است, باد, برد#بر, بود, بود#باش, توانست#توان, خواست#خواه, داشت#دار, ساخت#ساز, هست, کرد, کرد#کن, گشت#گرد</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a>
<ul>
  <li>Fin
  <ul>
    <li>AUX: خواهد, خواهند, نخواهد, دارد, داریم, دارند, خواهم, دارم, خواهیم, نتوانند</li>
    <li>VERB: بتواند, بتوانند, بتوانم, بتوانیم</li>
  </ul>
  </li>
  <li>Inf
  <ul>
    <li>AUX: باید, نباید, بایستی, می‌باید, می‌بایست, بباید, می‌شود, نمی‌باید, نبایستی, نمی‌بایست</li>
  </ul>
  </li>
  <li>Part
  <ul>
    <li>ADJ: آمده, ساخته, یادشده, بسته, توقیف‌شده, ناخواسته, انجام‌شده, عقب‌افتاده, کاسته, کشته</li>
    <li>AUX: شده, بوده, شده‌اند, نشده, بوده‌اند, نبوده, نشده‌اند, گردیده, شده‌ایم, بوده‌ایم</li>
    <li>VERB: کرده, داشته, داده, شده, گرفته, آمده, کرده‌اند, نوشته, دیده, بوده</li>
  </ul>
  </li>
</ul>
</li>
</ul>

<h3>Nominal Features</h3>



<li><a>Number</a>
  <ul>
    <li>Plur
      <ul>
        <li>AUX: هستند, بودند, ند, می‌شوند, شدند, باشند, خواهند, شده‌اند, شوند, اند</li>
        <li>AUX-Fin: خواهند, داریم, دارند, خواهیم, نتوانند, نخواهند, خواهید, دارن, نخواهیم</li>
        <li>AUX-Part: شده‌اند, بوده‌اند, نشده‌اند, شده‌ایم, بوده‌ایم, اند, شده‌اید, نگردیده‌اند, ‌ایم</li>
        <li>NOUN: انتخابات, افراد, مواد, کسانی, کشورهای, برنامه‌های, اصلاحات, حدود, مطبوعات, آثار</li>
        <li>PRON: ما, آن‌ها, شان, شما, آنان, این‌ها, مان, ایشان, تان, اینان</li>
        <li>VERB: کنند, می‌کنند, دارند, کردند, بودند, کرده‌اند, کنیم, داشتند, می‌گویند, کردیم</li>
        <li>VERB-Fin: بتوانند, بتوانیم</li>
        <li>VERB-Part: کرده‌اند, داده‌اند, داشته‌اند, گرفته‌اند, گفته‌اند, نکرده‌اند, آمده‌اند, بوده‌اند, شده‌اند, نوشته‌اند</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>ADJ-Part: آمده, ساخته, یادشده, بسته, توقیف‌شده, ناخواسته, انجام‌شده, عقب‌افتاده, کاسته, کشته</li>
        <li>AUX: است, بود, شد, شده, می‌شود, خواهد, نیست, شود, باشد, ست</li>
        <li>AUX-Fin: خواهد, نخواهد, دارد, خواهم, دارم, نخواهم, خواهی, داره, داری, داشت</li>
        <li>AUX-Part: شده, بوده, نشده, نبوده, گردیده, شده‌ای, شده‌ام, می‌شده, نگردیده, بوده‌ام</li>
        <li>NOUN: ایران, سال, مردم, کشور, روز, کار, قرار, دست, انقلاب, تهران</li>
        <li>PRON: خود, آن, او, این, ش, من, وی, تو, م, اش</li>
        <li>VERB: است, کرد, گفت, دارد, می‌کند, بود, کرده, کند, داشت, داد</li>
        <li>VERB-Fin: بتواند, بتوانم</li>
        <li>VERB-Part: کرده, داشته, داده, شده, گرفته, آمده, نوشته, دیده, بوده, ساخته</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Case</a>
  <ul>
    <li>Loc
      <ul>
        <li>ADV: بالا, اینجا, آنجا, پیش, بیرون, پایین, آن‌جا, زیر</li>
      </ul>
    </li>
    <li>Tem
      <ul>
        <li>ADV: بعد, پس, پیش, حالا, امروز, قبل, اکنون, کنون, همیشه, دیروز</li>
      </ul>
    </li>
    <li>Voc
      <ul>
        <li>NOUN: پروردگارا, الهی, حافظا</li>
      </ul>
    </li>
  </ul>
</li>



<h3>Degree and Polarity</h3>

<li><a>Degree</a>
  <ul>
    <li>Cmp
      <ul>
        <li>ADJ: بیشتر, بیش, کمتر, بیشتری, بهتر, بالاتر, برتر, بزرگتر, فراتر, نزدیکتر</li>
      </ul>
    </li>
    <li>Pos
      <ul>
        <li>ADJ: اسلامی, دیگر, سیاسی, دوم, گذشته, فرهنگی, جدید, چند, ملی, پیدا</li>
      </ul>
    </li>
    <li>Sup
      <ul>
        <li>ADJ: نخستین, بهترین, اولین, آخرین, بزرگترین, دومین, مهمترین, بیشترین, سومین, بالاترین</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Polarity</a>
  <ul>
    <li>Neg
      <ul>
        <li>ADJ-Part: ناخواسته, نیاورده, ناخواسته‌ای, نبوده, نجنگیده, نمرده, نیفزوده, پرداخت‌نشده, کشف‌ناشده‌ای</li>
        <li>ADV: هیچ, نه, غیر, هرگز, دیگر, خیر, هیچ‌گاه</li>
        <li>AUX: نیست, نباید, نشده, نیستند, نخواهد, نباشد, نیستم, نشود, نبوده, نشده‌اند</li>
        <li>AUX-Fin: نخواهد, نتوانند, نخواهم, نخواهند, نخواهی, نخواهیم</li>
        <li>AUX-Inf: نباید, نبایستی, نمی‌بایست, نمی‌شود</li>
        <li>AUX-Part: نشده, نبوده, نشده‌اند, نگردیده, نگردیده‌اند</li>
        <li>VERB: نیست, نداشته, ندارند, نکرده, نمی‌کند, نمی‌تواند, نمی‌کنند, نمی‌دانستند, نمی‌توانند, نمی‌دانم</li>
        <li>VERB-Part: نداشته, نکرده, نیامده, نداده, نکرده‌اند, نرسیده, نشده, نتوانسته, نمانده, نداشته‌اند</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Verbal Features</h3>


<li><a>Mood</a>
  <ul>
    <li>Imp
      <ul>
        <li>AUX: باش</li>
        <li>VERB: کن, گو, بگو, بگیر, بده, ببین, برو, بیا, بدانید, بزن</li>
      </ul>
    </li>
    <li>Sub
      <ul>
        <li>AUX: شود, باشد, باشند, بشود, شوند, نباشد, گردد, نشود, بشوند, باشید</li>
        <li>AUX-Fin: نتوانند</li>
        <li>VERB: کنند, کند, باشد, کنیم, کنم, دهد, باشند, کنید, دهند, گیرد</li>
        <li>VERB-Fin: بتواند, بتوانند, بتوانم, بتوانیم</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Tense</a>
  <ul>
    <li>Fut
      <ul>
        <li>AUX-Fin: خواهد, خواهند, نخواهد, خواهم, خواهیم, نخواهم, نخواهند, خواهی, خواهید, نخواهی</li>
      </ul>
    </li>
    <li>Past
      <ul>
        <li>AUX: بود, شد, بودند, می‌شد, شدند, نبود, بودم, نشد, می‌شدند, نمی‌شد</li>
        <li>AUX-Fin: داشت</li>
        <li>VERB: کرد, گفت, بود, داشت, کردند, داد, افزود, گرفت, بودند, می‌کرد</li>
      </ul>
    </li>
    <li>Pres
      <ul>
        <li>AUX: است, می‌شود, نیست, شود, باشد, هستند, ست, ند, می‌شوند, باشند</li>
        <li>AUX-Fin: دارد, داریم, دارند, دارم, نتوانند, داره, دارن, داری, می‌توان</li>
        <li>VERB: است, دارد, می‌کند, کنند, کند, می‌کنند, دارند, می‌دهد, باشد, می‌گوید</li>
        <li>VERB-Fin: بتواند, بتوانند, بتوانم, بتوانیم</li>
      </ul>
    </li>
  </ul>
</li>



<h3>Pronouns, Determiners, Quantifiers</h3>

<li><a>PronType</a>
  <ul>
    <li>Dem
      <ul>
        <li>PRON: آن, این, آن‌ها, آنان, این‌ها, همین, آنرا, همان, اینان, دان</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>PRON: بعضی, برخی, دیگران, هرکس, یک, دیگری, بعضی‌ها, بسیاری, تک‌تک, دیگر</li>
      </ul>
    </li>
    <li>Int
      <ul>
        <li>ADV: چه, چرا, چی, چگونه, کجا, مگر, چقدر, چطور, کی, چه‌طور</li>
        <li>PRON: هرکه, کی</li>
      </ul>
    </li>
    <li>Neg
      <ul>
        <li>PRON: هیچکدام, هیچکس, هیچیک, هیچ‌یک</li>
      </ul>
    </li>
    <li>Prs
      <ul>
        <li>PRON: خود, او, ما, ش, من, وی, تو, شان, م, شما</li>
      </ul>
    </li>
    <li>Rcp
      <ul>
        <li>PRON: هم, یکدیگر, همدیگر</li>
      </ul>
    </li>
    <li>Rel
      <ul>
        <li>PRON: آنچه</li>
      </ul>
    </li>
    <li>Tot
      <ul>
        <li>PRON: همه, همهٔ, همگی, همگان, همه‌, تمام, هرکدام</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>NumType</a>
  <ul>
    <li>Card
      <ul>
        <li>NUM: یک, دو, یکی, هزار, سه, میلیون, ۲, چهار, ۵, ۳</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Reflex</a>
  <ul>
    <li>Yes
      <ul>
        <li>PRON: خود, خودم, خودت, خودمو, خویشتن</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Person</a>
  <ul>
    <li>1
      <ul>
        <li>AUX: م, هستیم, بودم, یم, نیستم, هستم, داریم, خواهم, شدم, شدیم</li>
        <li>AUX-Fin: داریم, خواهم, دارم, خواهیم, نخواهم, نخواهیم</li>
        <li>AUX-Part: شده‌ایم, بوده‌ایم, شده‌ام, بوده‌ام, میشده‌ام, ‌ایم</li>
        <li>PRON: ما, من, م, مان, ام, منم, خودم, خودمو, منِ</li>
        <li>VERB: می‌کنم, کنیم, کردیم, کنم, کردم, می‌کنیم, دارم, باشیم, داریم, گفتم</li>
        <li>VERB-Fin: بتوانم, بتوانیم</li>
        <li>VERB-Part: کرده‌ایم, کرده‌ام, آمده‌ام, آمده‌ایم, دیده‌ایم, خوانده‌ام, داده‌ام, دیده‌ام, نکرده‌ام, نیامده‌ایم</li>
      </ul>
    </li>
    <li>2
      <ul>
        <li>AUX: هستی, باشید, نیستی, باش, هستید, ای, ید, باشی, خواهی, شده‌ای</li>
        <li>AUX-Fin: خواهی, خواهید, داری, نخواهی</li>
        <li>AUX-Part: شده‌ای, بوده‌ای, شده‌اید</li>
        <li>PRON: تو, شما, ت, تان, ات, جنابعالی, شماها, خود, خودت</li>
        <li>VERB: کنید, کن, گو, بگو, دارید, کنی, کردید, ببینید, می‌توانید, کردی</li>
        <li>VERB-Part: شنیده‌اید, کرده‌ای, کرده‌اید, نوشته‌ای, داده‌ای, ساخته‌ای, آمده‌ای, آمده‌اید, افکنده‌ای, بوده‌اید</li>
      </ul>
    </li>
    <li>3
      <ul>
        <li>ADJ-Part: آمده, ساخته, یادشده, بسته, توقیف‌شده, ناخواسته, انجام‌شده, عقب‌افتاده, کاسته, کشته</li>
        <li>AUX: است, بود, شد, شده, می‌شود, خواهد, نیست, شود, باشد, هستند</li>
        <li>AUX-Fin: خواهد, خواهند, نخواهد, دارد, دارند, نتوانند, نخواهند, داره, دارن, داشت</li>
        <li>AUX-Part: شده, بوده, شده‌اند, نشده, بوده‌اند, نبوده, نشده‌اند, گردیده, می‌شده, نگردیده</li>
        <li>PRON: خود, او, ش, وی, شان, اش, ایشان, خویش, حضرتعالی, و</li>
        <li>VERB: است, کرد, گفت, دارد, می‌کند, بود, کرده, کنند, کند, می‌کنند</li>
        <li>VERB-Fin: بتواند, بتوانند</li>
        <li>VERB-Part: کرده, داشته, داده, شده, گرفته, آمده, کرده‌اند, نوشته, دیده, بوده</li>
      </ul>
    </li>
  </ul>
</li>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 17 lemmas as copulas (<a>cop</a>). Examples: کرد#کن، است، بود#باش، هست، بود، _، گشت#گرد، کرد، گردید#گرد، آورد#آور، باد، برد#بر، داشت#دار، زایید#زا، ساخت#ساز، شدید، مجدد.</li>
<li>This corpus uses 12 lemmas as auxiliaries (<a>aux</a>). Examples: است، خواست#خواه، بایست#باید، بود#باش، توانست#توان، بود، توان، _، داشت#دار، کرد#کن، آمد#آ، رفت#رو.</li>
<li>This corpus uses 4 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: کرد#کن، بود#باش، کرد، گشت#گرد.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (3762)</li>
      <li>VERB--NOUN-ADP(را) (10)</li>
      <li>VERB--PRON (795)</li>
      <li>VERB--PRON-ADP(را) (1)</li>
      <li>VERB-Part--NOUN (820)</li>
      <li>VERB-Part--PRON (117)</li>
      <li>VERB-Part--PRON-ADP(را) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1037)</li>
      <li>VERB--NOUN-ADP(را) (1676)</li>
      <li>VERB--NOUN-ADP(را)-ADP(را) (1)</li>
      <li>VERB--NOUN-ADP(رو) (2)</li>
      <li>VERB--PRON (30)</li>
      <li>VERB--PRON-ADP(را) (258)</li>
      <li>VERB-Part--NOUN (219)</li>
      <li>VERB-Part--NOUN-ADP(را) (330)</li>
      <li>VERB-Part--PRON (6)</li>
      <li>VERB-Part--PRON-ADP(را) (35)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 13 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: کرد#کن خود، دانست#دان خود، _ خود، داد#ده خود، زد#زن خود، رساند#رسان خود، رسانید#رسان خود، بست#بند خود، حلیم خود، دید#بین خود، دیدار خود، پوشاند#پوشان خود، کشید#کش خود</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 10 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:lvc</a>, <a>compound:prt</a>, <a>det:predet</a>, <a>flat:foreign</a>, <a>nmod:poss</a>, <a>nsubj:nc</a>, <a>nsubj:pass</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>acl</a></li>
<li>The following 9 relation types are not used in this corpus at all: <a>iobj</a>, <a>csubj</a>, <a>expl</a>, <a>discourse</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
