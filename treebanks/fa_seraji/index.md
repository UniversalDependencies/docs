---
layout: base
title:  'UD_Persian-Seraji'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Persian Seraji

Language: [Persian](/fa/index.html) (code: `fa`)<br/>
Family: Indo-European, Iranian

This treebank has been part of Universal Dependencies since the UD v1.1 release.

The following people have contributed to making this treebank part of UD: Mojgan Seraji, Filip Ginter, Joakim Nivre.

Repository: [UD_Persian-Seraji](https://github.com/UniversalDependencies/UD_Persian-Seraji)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfa_seraji211)<br />
Download all treebanks: [UD 2.11](/#download)

License: CC BY-SA 4.0

Genre: news, fiction, medical, legal, social, spoken, nonfiction

Questions, comments?
General annotation questions (either Persian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Persian-Seraji/issues).
If you want to collaborate, please contact [mojgan&nbsp;•&nbsp;seraji96&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

The Persian Universal Dependency Treebank (Seraji) is based on Uppsala Persian Dependency Treebank (UPDT).
The conversion of the UPDT to the Universal Dependencies was performed semi-automatically with extensive manual checks and corrections.



The Persian Universal Dependency Treebank (Persian UD) is the converted version of the
[Uppsala Persian Dependency Treebank (UPDT)](https://sites.google.com/site/mojganserajicom/home/updt) (Seraji, 2015).
The treebank has its original annotation scheme based on Stanford Typed Dependencies (de Marneffe et al., 2006;
de Marneffe and Manning, 2008). The scheme was extended for Persian to include the language specific syntactic relations
that could not be covered by the primary scheme developed for English. The treebank consists of ca 6000 annotated and
validated sentences of written texts with large domain variations, in terms of different genres (containing newspaper
articles, fiction, technical descriptions, and documents about culture and art) and tokenization. The variations in
the tokenization are due to the orthographic variations of compound words and fixed expressions in the language.

Apart from the universal annotation scheme and the general rules in UD, the Persian UD and the UPDT differ further in
tokenization. All words containing unsegmented clitics (pronominal and copula clitics) annotated with complex labels
in UPDT have been separated from the clitics and received distinct labels in the Persian UD.

The conversion of the UPDT to the Universal Dependencies has been carried out semi-automatically. In this process, we used a conversion script for reversing the head and dependent relations in the prepositional modifier (prep) and object of a preposition (pobj). Furthermore, we have used other scripts tailored for Persian to separate different types of clitics from their host. Subsequently we added different rules for rewriting the coarse-grained part-of-speech tags and the dependency labels. Morphological features were then mapped semi-automatically. In the current release, lemmas are added for a large number of tokens. This process is further done semi-automatically. The entire process has been manually validated.

## Acknowledgments

The conversion of the UPDT to the Persian UD has been performed by Mojgan Seraji in collaboration with Filip Ginter. The annotations (PoS tags and dependency relations) were manually checked and corrected by Mojgan Seraji. The universal morphological features and lemmas were further added by Mojgan. The process has been carried out in consultation with Joakim Nivre. The original UPDT was also developed by Mojgan Seraji at Uppsala University. Mojgan is deeply thankful to Joakim Nivre and Carina Jahani for their consultations during the development of the UPDT.


# Statistics of UD Persian Seraji

## POS Tags

[ADJ](fa_seraji-pos-ADJ.html) – [ADP](fa_seraji-pos-ADP.html) – [ADV](fa_seraji-pos-ADV.html) – [AUX](fa_seraji-pos-AUX.html) – [CCONJ](fa_seraji-pos-CCONJ.html) – [DET](fa_seraji-pos-DET.html) – [INTJ](fa_seraji-pos-INTJ.html) – [NOUN](fa_seraji-pos-NOUN.html) – [NUM](fa_seraji-pos-NUM.html) – [PART](fa_seraji-pos-PART.html) – [PRON](fa_seraji-pos-PRON.html) – [PUNCT](fa_seraji-pos-PUNCT.html) – [SCONJ](fa_seraji-pos-SCONJ.html) – [VERB](fa_seraji-pos-VERB.html) – [X](fa_seraji-pos-X.html)

## Features

[Case](fa_seraji-feat-Case.html) – [Degree](fa_seraji-feat-Degree.html) – [Mood](fa_seraji-feat-Mood.html) – [Number](fa_seraji-feat-Number.html) – [NumType](fa_seraji-feat-NumType.html) – [Person](fa_seraji-feat-Person.html) – [Polarity](fa_seraji-feat-Polarity.html) – [PronType](fa_seraji-feat-PronType.html) – [Reflex](fa_seraji-feat-Reflex.html) – [Tense](fa_seraji-feat-Tense.html) – [VerbForm](fa_seraji-feat-VerbForm.html)

## Relations

[acl](fa_seraji-dep-acl.html) – [acl:relcl](fa_seraji-dep-acl-relcl.html) – [advcl](fa_seraji-dep-advcl.html) – [advmod](fa_seraji-dep-advmod.html) – [amod](fa_seraji-dep-amod.html) – [appos](fa_seraji-dep-appos.html) – [aux](fa_seraji-dep-aux.html) – [aux:pass](fa_seraji-dep-aux-pass.html) – [case](fa_seraji-dep-case.html) – [cc](fa_seraji-dep-cc.html) – [cc:preconj](fa_seraji-dep-cc-preconj.html) – [ccomp](fa_seraji-dep-ccomp.html) – [compound](fa_seraji-dep-compound.html) – [compound:lvc](fa_seraji-dep-compound-lvc.html) – [compound:prt](fa_seraji-dep-compound-prt.html) – [conj](fa_seraji-dep-conj.html) – [cop](fa_seraji-dep-cop.html) – [dep](fa_seraji-dep-dep.html) – [det](fa_seraji-dep-det.html) – [det:predet](fa_seraji-dep-det-predet.html) – [discourse](fa_seraji-dep-discourse.html) – [dislocated](fa_seraji-dep-dislocated.html) – [fixed](fa_seraji-dep-fixed.html) – [flat](fa_seraji-dep-flat.html) – [flat:foreign](fa_seraji-dep-flat-foreign.html) – [mark](fa_seraji-dep-mark.html) – [nmod](fa_seraji-dep-nmod.html) – [nmod:poss](fa_seraji-dep-nmod-poss.html) – [nsubj](fa_seraji-dep-nsubj.html) – [nsubj:nc](fa_seraji-dep-nsubj-nc.html) – [nsubj:pass](fa_seraji-dep-nsubj-pass.html) – [nummod](fa_seraji-dep-nummod.html) – [obj](fa_seraji-dep-obj.html) – [obl](fa_seraji-dep-obl.html) – [parataxis](fa_seraji-dep-parataxis.html) – [punct](fa_seraji-dep-punct.html) – [root](fa_seraji-dep-root.html) – [vocative](fa_seraji-dep-vocative.html) – [xcomp](fa_seraji-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 5997 sentences, 151625 tokens and 152920 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 13133 tokens (9%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 2 types of words that contain both letters and punctuation. Examples: بود؛, می‌زد؛</li>
</ul>

<ul>
<li>This corpus contains 1291 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 715 types of multi-word tokens. Examples: خودش، خودشان، خودم، مرا، معتقدند، بدین، برایش، خودت، دلم، اوست، چیست، کشورمان، ماست، پیداست، خودمان، پدرش، درین، بدان، سرش، مادرش، همسرم، پدرم، آخرش، آن‌هاست، امیدواریم، خانواده‌اش، نامه‌ات، ازین، امیدوارم، امیدوارند، بهش، دستش، دلش، همه‌اش، پایش، کارش، کجاست، آزادند، ارزشهاست، برخوردارند، توست، خانه‌اش، خداست، خودتان، رویش، زین، صدایش، قبلی‌اش، مدتهاست، منظورم.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PROPN, SYM</li>
</ul>

<ul>
<li>This corpus contains 3 word types tagged as particles (PART): را, رو, و</li>
</ul>

<ul>
<li>This corpus contains 54 lemmas tagged as pronouns (PRON): _, آن, آنرا, آنها, آنچه, آن‌ها, ات, ام, او, ایشان, این, اینو, اینگونه, برخی, بسیاری, بعضی, تمام, تو, تک‌تک, جنابعالی, حضرتعالی, خود, خودت, خودم, خودمو, خوی, خویش, خویشتن, دیگر, دیگری, شما, ما, من, منم, هرکدام, هرکس, هرکه, هم, همان, همانی, همدیگر, همه, همه‌, همگان, همگی, همین, هیچکدام, هیچکس, هیچیک, هیچ‌یک, وی, کی, یک, یکدیگر</li>
</ul>

<ul>
<li>This corpus contains 30 lemmas tagged as determiners (DET): آن, اون, این, اینهمه, اینگونه, برخی, بعض, بعضی, تعدادی, تمام, تنها, تک‌تک, دیگر, سراسر, غیر, فلان, هر, همان, همه, همچین, همین, هیچ, هیچگونه, چنان, چنین, چه, چگونه, کدام, کلیه, یک‌یک</li>
</ul>

<ul>
<li>Out of the above, 11 lemmas occurred sometimes as PRON and sometimes as DET: آن, این, اینگونه, برخی, بعضی, تمام, تک‌تک, دیگر, همان, همه, همین</li>
</ul>

<ul>
<li>This corpus contains 11 lemmas tagged as auxiliaries (AUX): _, است, بایست, بود, توان, توانست, خواست, داشت, کرد, گردید, گشت</li>
</ul>

<ul>
<li>Out of the above, 8 lemmas occurred sometimes as AUX and sometimes as VERB: _, است, بود, توانست, خواست, داشت, کرد, گشت</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: خواهد, خواهند, نخواهد, بتواند, دارد, بتوانند, داریم, دارند, می‌باید, خواهم</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: باید, نباید, بایستی, می‌بایست, می‌باید, بباید, می‌شود, نبایستی, نمی‌بایست, نمی‌شود</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: آمده, ساخته, یادشده, بسته, توقیف‌شده, ناخواسته, انجام‌شده, عقب‌افتاده, کاسته, کشته</li>
    <li>AUX: بوده, شده, بوده‌اند, نبوده, گردیده, شده‌اند, نشده, بوده‌ایم, شده‌ای, می‌شده</li>
    <li>VERB: شده, کرده, داشته, داده, گرفته, آمده, کرده‌اند, نوشته, دیده, ساخته</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>




<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>AUX: بودند, باشند, خواهند, می‌توانند, نیستند, باشیم, بوده‌اند, نمی‌توانند, می‌خواهند, می‌خواهیم</li>
      <li>AUX-Fin: خواهند, بتوانند, داریم, دارند, خواهیم, نتوانند, نخواهند, بتوانیم, خواهید, دارن</li>
      <li>AUX-Part: بوده‌اند, شده‌اند, بوده‌ایم, توانسته‌اند, شده‌اید, شده‌ایم, نتوانسته‌اند, نگردیده‌اند</li>
      <li>NOUN: انتخابات, افراد, مواد, کسانی, کشورهای, برنامه‌های, اصلاحات, حدود, مطبوعات, آثار</li>
      <li>PRON: ما, آن‌ها, شان, شما, آنان, این‌ها, مان, ایشان, تان, اینان</li>
      <li>VERB: کنند, می‌کنند, هستند, دارند, کردند, ند, کرده‌اند, می‌شوند, کنیم, داشتند</li>
      <li>VERB-Part: کرده‌اند, شده‌اند, داده‌اند, داشته‌اند, گرفته‌اند, گفته‌اند, نشده‌اند, نکرده‌اند, آمده‌اند, نوشته‌اند</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ-Part: آمده, ساخته, یادشده, بسته, توقیف‌شده, ناخواسته, انجام‌شده, عقب‌افتاده, کاسته, کشته</li>
      <li>AUX: است, بود, خواهد, باشد, ست, بوده, شده, می‌تواند, می‌شود, نبود</li>
      <li>AUX-Fin: خواهد, نخواهد, بتواند, دارد, خواهم, دارم, نخواهم, بتوانم, خواهی, داره</li>
      <li>AUX-Part: بوده, شده, نبوده, گردیده, نشده, شده‌ای, می‌شده, نمی‌توانسته, نگردیده, بوده‌ام</li>
      <li>NOUN: ایران, سال, مردم, کشور, روز, کار, قرار, دست, انقلاب, تهران</li>
      <li>PRON: خود, آن, او, این, ش, من, وی, تو, م, اش</li>
      <li>VERB: کرد, گفت, شد, شده, می‌شود, دارد, می‌کند, کرده, نیست, است</li>
      <li>VERB-Part: شده, کرده, داشته, داده, گرفته, آمده, نوشته, دیده, ساخته, رسیده</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADV: بالا, اینجا, آنجا, پیش, بیرون, پایین, آن‌جا, زیر</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tem
    <ul>
      <li>ADV: بعد, پس, پیش, حالا, امروز, قبل, اکنون, کنون, همیشه, دیروز</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>INTJ: ای</li>
      <li>NOUN: پروردگارا, الهی, حافظا</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: بیشتر, بیش, کمتر, بیشتری, بهتر, بالاتر, برتر, بزرگتر, فراتر, نزدیکتر</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: اسلامی, دیگر, سیاسی, دوم, گذشته, فرهنگی, جدید, چند, ملی, پیدا</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: نخستین, بهترین, اولین, آخرین, بزرگترین, دومین, مهمترین, بیشترین, سومین, بالاترین</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADJ-Part: ناخواسته, نیاورده, ناخواسته‌ای, نبوده, نجنگیده, نمرده, نیفزوده, پرداخت‌نشده, کشف‌ناشده‌ای</li>
      <li>ADV: نه, غیر, هرگز, دیگر, هیچ, خیر, هیچ‌گاه</li>
      <li>AUX: نباید, نیستند, نخواهد, نباشد, نمی‌تواند, نمی‌توانند, نبوده, نباشند, نمی‌توانیم, نبودند</li>
      <li>AUX-Fin: نخواهد, نتوانند, نخواهم, نخواهند, نخواهی, نخواهیم, نمی‌باید</li>
      <li>AUX-Inf: نباید, نبایستی, نمی‌بایست, نمی‌شود</li>
      <li>AUX-Part: نبوده, نشده, نمی‌توانسته, نگردیده, نتوانسته, نتوانسته‌اند, نگردیده‌اند</li>
      <li>VERB: نیست, نداشته, ندارند, نکرده, نشده, نمی‌کند, نمی‌کنند, نمی‌دانستند, نیستم, نمی‌دانم</li>
      <li>VERB-Part: نداشته, نکرده, نشده, نیامده, نداده, نشده‌اند, نکرده‌اند, نرسیده, نمانده, نتوانسته</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: باش</li>
      <li>VERB: کن, گو, بگو, بگیر, بده, ببین, برو, بیا, بدانید, بزن</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: باشد, باشند, باشیم, شود, گردد, نباشد, بتواند, باشم, باشید, بشوند</li>
      <li>AUX-Fin: بتواند, بتوانند, نتوانند, بتوانم, بتوانیم</li>
      <li>VERB: کنند, کند, شود, کنیم, کنم, دهد, بشود, کنید, باشد, شوند</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: خواهد, خواهند, نخواهد, خواهم, خواهیم, نخواهم, نخواهند, خواهی, خواهید, نخواهی</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: بود, بودند, نبود, شد, بودم, می‌خواست, توانست, بودیم, توانستند, گردید</li>
      <li>AUX-Fin: داشت</li>
      <li>VERB: کرد, گفت, شد, داشت, کردند, داد, افزود, بود, گرفت, می‌کرد</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: است, باشد, ست, باشند, می‌تواند, می‌شود, می‌باشد, می‌توانند, می‌خواهد, نیستند</li>
      <li>AUX-Fin: بتواند, دارد, بتوانند, داریم, دارند, دارم, نتوانند, بتوانم, بتوانیم, داره</li>
      <li>VERB: می‌شود, دارد, می‌کند, کنند, نیست, است, کند, می‌کنند, هستند, دارند</li>
    </ul>
  </li>
</ul>



<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>PRON: آن, این, آن‌ها, آنان, این‌ها, همین, آنرا, همان, اینان, دان</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: بعضی, برخی, دیگران, هرکس, یک, دیگری, بعضی‌ها, بسیاری, تک‌تک, دیگر</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: چرا, چه, چی, چگونه, کجا, مگر, چقدر, چطور, کی, چه‌طور</li>
      <li>DET: چه</li>
      <li>PRON: هرکه, کی</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: هیچ, غیر</li>
      <li>PRON: هیچکدام, هیچکس, هیچیک, هیچ‌یک</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: خود, او, ما, ش, من, وی, تو, شان, م, شما</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: هم, یکدیگر, همدیگر</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: آنچه</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>PRON: همه, همهٔ, همگی, همگان, همه‌, تمام, هرکدام</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: یک, دو, یکی, هزار, سه, میلیون, ۲, چهار, ۵, ۳</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: دوم, هفتم, اول, سوم, شانزدهم, هشتم, پنجمین, چهاردهم</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: خود, خودم, خودت, خودمو, خویشتن</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: بودم, باشیم, باشم, می‌خواهیم, می‌خواهم, داریم, بودیم, می‌توانم, بخواهیم, خواهم</li>
      <li>AUX-Fin: داریم, خواهم, دارم, خواهیم, نخواهم, بتوانم, بتوانیم, نخواهیم</li>
      <li>AUX-Part: بوده‌ایم, بوده‌ام, شده‌ایم</li>
      <li>PRON: ما, من, م, مان, ام, منم, خودم, خودمو, منِ</li>
      <li>VERB: می‌کنم, کنیم, کردیم, کنم, کردم, می‌کنیم, دارم, داریم, هستیم, گفتم</li>
      <li>VERB-Part: کرده‌ایم, کرده‌ام, آمده‌ام, آمده‌ایم, دیده‌ایم, شده‌ایم, خوانده‌ام, داده‌ام, دیده‌ام, شده‌ام</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: باشید, می‌توانید, می‌خواهید, باش, باشی, بودید, خواستید, خواهی, نمی‌توانید, شده‌ای</li>
      <li>AUX-Fin: خواهی, خواهید, داری, نخواهی</li>
      <li>AUX-Part: شده‌ای, بوده‌ای, شده‌اید</li>
      <li>PRON: تو, شما, ت, تان, ات, جنابعالی, شماها, خود, خودت</li>
      <li>VERB: کنید, کن, گو, بگو, دارید, کنی, نیستی, هستی, کردید, ببینید</li>
      <li>VERB-Part: شنیده‌اید, کرده‌ای, کرده‌اید, نوشته‌ای, داده‌ای, ساخته‌ای, آمده‌ای, آمده‌اید, افکنده‌ای, بوده‌اید</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ-Part: آمده, ساخته, یادشده, بسته, توقیف‌شده, ناخواسته, انجام‌شده, عقب‌افتاده, کاسته, کشته</li>
      <li>AUX: است, بود, خواهد, باشد, بودند, ست, باشند, بوده, شده, می‌تواند</li>
      <li>AUX-Fin: خواهد, خواهند, نخواهد, بتواند, دارد, بتوانند, دارند, نتوانند, نخواهند, داره</li>
      <li>AUX-Part: بوده, شده, بوده‌اند, نبوده, گردیده, شده‌اند, نشده, می‌شده, نمی‌توانسته, نگردیده</li>
      <li>PRON: خود, او, ش, وی, شان, اش, ایشان, خویش, حضرتعالی, و</li>
      <li>VERB: کرد, گفت, شد, شده, می‌شود, دارد, می‌کند, کرده, کنند, نیست</li>
      <li>VERB-Part: شده, کرده, داشته, داده, گرفته, آمده, کرده‌اند, نوشته, دیده, ساخته</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: است، بود، _.</li>
</ul>

<ul>
<li>This corpus uses 9 lemmas as auxiliaries (<a>aux</a>). Examples: است، خواست، بود، بایست، توانست، توان، داشت، کرد، _.</li>
<li>This corpus uses 4 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: کرد، گشت، بود، گردید.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (3977)</li>
      <li>VERB--NOUN-ADP(ای) (3)</li>
      <li>VERB--NOUN-ADP(را) (10)</li>
      <li>VERB--PRON (904)</li>
      <li>VERB--PRON-ADP(را) (1)</li>
      <li>VERB-Part--NOUN (819)</li>
      <li>VERB-Part--PRON (118)</li>
      <li>VERB-Part--PRON-ADP(را) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1047)</li>
      <li>VERB--NOUN-ADP(را) (1683)</li>
      <li>VERB--NOUN-ADP(را)-ADP(را) (1)</li>
      <li>VERB--NOUN-ADP(رو) (2)</li>
      <li>VERB--PRON (30)</li>
      <li>VERB--PRON-ADP(را) (260)</li>
      <li>VERB-Part--NOUN (220)</li>
      <li>VERB-Part--NOUN-ADP(را) (331)</li>
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
  <li>This corpus contains 13 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: کرد خود، دانست خود، _ خود، داد خود، زد خود، رساند خود، رسانید خود، بست خود، حلیم خود، دید خود، دیدار خود، پوشاند خود، کشید خود</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 10 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:lvc</a>, <a>compound:prt</a>, <a>det:predet</a>, <a>flat:foreign</a>, <a>nmod:poss</a>, <a>nsubj:nc</a>, <a>nsubj:pass</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>iobj</a>, <a>csubj</a>, <a>expl</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
