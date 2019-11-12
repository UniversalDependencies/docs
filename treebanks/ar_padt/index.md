---
layout: base
title:  'UD_Arabic-PADT'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Arabic PADT

Language: [Arabic](/ar/index.html) (code: `ar`)<br/>
Family: Afro-Asiatic, Semitic

This treebank has been part of Universal Dependencies since the UD v1.2 release.

The following people have contributed to making this treebank part of UD: Daniel Zeman, Zdeněk Žabokrtský, Shadi Saleh.

Repository: [UD_Arabic-PADT](https://github.com/UniversalDependencies/UD_Arabic-PADT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udar_padt25)<br />
Download all treebanks: [UD 2.5](/#download)

License: CC BY-NC-SA 3.0

Genre: news

Questions, comments?
General annotation questions (either Arabic-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Arabic-PADT/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

The Arabic-PADT UD treebank is based on the
[Prague Arabic Dependency Treebank](http://ufal.mff.cuni.cz/padt/) (PADT),
created at the Charles University in Prague.




http://universaldependencies.github.io/docs/ar/overview/introduction.html

The treebank consists of 7,664 sentences (282,384 tokens) and its domain is mainly newswire.
The annotation is licensed under the terms of
[CC BY-NC-SA 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/)
and its original (non-UD) version can be downloaded from
[http://hdl.handle.net/11858/00-097C-0000-0001-4872-3](http://hdl.handle.net/11858/00-097C-0000-0001-4872-3).

The morphological and syntactic annotation of the Arabic UD treebank is created through
conversion of PADT data. The conversion procedure has been designed by Dan Zeman.
The main coordinator of the original PADT project was Otakar Smrž.

### Source of annotations

This table summarizes the origins and checking of the various columns of the CoNLL-U data.

| Column | Status |
| ------ | ------ |
| ID | Sentence-level units in PADT often correspond to entire paragraphs and they were obtained automatically. Low-level tokenization (whitespace and punctuation) was done automatically and then hand-corrected. Splitting of fused tokens into syntactic words in Arabic is part of morphological analysis. [ElixirFM](http://elixir-fm.sf.net/) was used to provide context-independent options, then these results were disambiguated manually. |
| FORM | The unvocalized surface form is used. Fully vocalized counterpart can be found in the MISC column as Vform attribute. |
| LEMMA | Plausible analyses provided by ElixirFM, manual disambiguation. Lemmas are vocalized. Part of the selection of lemmas was also word sense disambiguation of the lexemes, providing English equivalents (see the Gloss attribute of the MISC column). |
| UPOSTAG | Converted automatically from XPOSTAG (via [Interset](http://ufal.mff.cuni.cz/interset)); human checking of patterns revealed by automatic consistency tests. |
| XPOSTAG | Manual selection from possibilities provided by ElixirFM. |
| FEATS | Converted automatically from XPOSTAG (via Interset); human checking of patterns revealed by automatic consistency tests. |
| HEAD | Original PADT annotation is manual. Automatic conversion to UD; human checking of patterns revealed by automatic consistency tests. |
| DEPREL | Original PDT annotation is manual. Automatic conversion to UD; human checking of patterns revealed by automatic consistency tests. |
| DEPS | &mdash; (currently unused) |
| MISC | Information about token spacing taken from PADT annotation. Additional word attributes provided by morphological analysis (i.e. ElixirFM rules + manual disambiguation): Vform (fully vocalized Arabic form), Translit (Latin transliteration of word form), LTranslit (Latin transliteration of lemma), Root (word root), Gloss (English translation of lemma). |


## Acknowledgments

We wish to thank all of the contributors to the original PADT annotation effort, including
Otakar Smrž, Jan Hajič, Petr Zemánek, Petr Pajas, Jan Šnaidauf, Emanuel Beška, Jakub Kráčmar,
and Kamila Hassanová.

Further corrections of additional data (not part of PADT release 1.0) were done by
Shadi Saleh and Zdeněk Žabokrtský.


## References

* Jan Hajič, Otakar Smrž, Petr Zemánek, Petr Pajas, Jan Šnaidauf, Emanuel Beška, Jakub Kráčmar,
Kamila Hassanová. 2009.
Prague Arabic Dependency Treebank 1.0, LINDAT/CLARIN digital library at
Institute of Formal and Applied Linguistics, Charles University in Prague,
[http://hdl.handle.net/11858/00-097C-0000-0001-4872-3](http://hdl.handle.net/11858/00-097C-0000-0001-4872-3).
* Otakar Smrž, Viktor Bielický, Iveta Kouřilová, Jakub Kráčmar, Jan Hajič, Petr Zemánek. 2008.
Prague Arabic Dependency Treebank: A Word on the Million Words.
In: Proceedings of the Workshop on Arabic and Local Languages (LREC 2008), pp. 16–23.
Marrakech, Morocco.



# Statistics of UD Arabic PADT

## POS Tags

[ADJ](ar_padt-pos-ADJ.html) – [ADP](ar_padt-pos-ADP.html) – [ADV](ar_padt-pos-ADV.html) – [AUX](ar_padt-pos-AUX.html) – [CCONJ](ar_padt-pos-CCONJ.html) – [DET](ar_padt-pos-DET.html) – [INTJ](ar_padt-pos-INTJ.html) – [NOUN](ar_padt-pos-NOUN.html) – [NUM](ar_padt-pos-NUM.html) – [PART](ar_padt-pos-PART.html) – [PRON](ar_padt-pos-PRON.html) – [PROPN](ar_padt-pos-PROPN.html) – [PUNCT](ar_padt-pos-PUNCT.html) – [SYM](ar_padt-pos-SYM.html) – [VERB](ar_padt-pos-VERB.html) – [X](ar_padt-pos-X.html)

## Features

[Abbr](ar_padt-feat-Abbr.html) – [AdpType](ar_padt-feat-AdpType.html) – [Aspect](ar_padt-feat-Aspect.html) – [Case](ar_padt-feat-Case.html) – [ConjType](ar_padt-feat-ConjType.html) – [Definite](ar_padt-feat-Definite.html) – [Foreign](ar_padt-feat-Foreign.html) – [Gender](ar_padt-feat-Gender.html) – [Mood](ar_padt-feat-Mood.html) – [Number](ar_padt-feat-Number.html) – [NumForm](ar_padt-feat-NumForm.html) – [NumValue](ar_padt-feat-NumValue.html) – [Person](ar_padt-feat-Person.html) – [Polarity](ar_padt-feat-Polarity.html) – [PronType](ar_padt-feat-PronType.html) – [VerbForm](ar_padt-feat-VerbForm.html) – [Voice](ar_padt-feat-Voice.html)

## Relations

[acl](ar_padt-dep-acl.html) – [advcl](ar_padt-dep-advcl.html) – [advmod](ar_padt-dep-advmod.html) – [advmod:emph](ar_padt-dep-advmod-emph.html) – [amod](ar_padt-dep-amod.html) – [appos](ar_padt-dep-appos.html) – [aux](ar_padt-dep-aux.html) – [aux:pass](ar_padt-dep-aux-pass.html) – [case](ar_padt-dep-case.html) – [cc](ar_padt-dep-cc.html) – [ccomp](ar_padt-dep-ccomp.html) – [conj](ar_padt-dep-conj.html) – [cop](ar_padt-dep-cop.html) – [csubj](ar_padt-dep-csubj.html) – [csubj:pass](ar_padt-dep-csubj-pass.html) – [dep](ar_padt-dep-dep.html) – [det](ar_padt-dep-det.html) – [discourse](ar_padt-dep-discourse.html) – [dislocated](ar_padt-dep-dislocated.html) – [fixed](ar_padt-dep-fixed.html) – [flat:foreign](ar_padt-dep-flat-foreign.html) – [iobj](ar_padt-dep-iobj.html) – [mark](ar_padt-dep-mark.html) – [nmod](ar_padt-dep-nmod.html) – [nsubj](ar_padt-dep-nsubj.html) – [nsubj:pass](ar_padt-dep-nsubj-pass.html) – [nummod](ar_padt-dep-nummod.html) – [obj](ar_padt-dep-obj.html) – [obl](ar_padt-dep-obl.html) – [obl:arg](ar_padt-dep-obl-arg.html) – [orphan](ar_padt-dep-orphan.html) – [parataxis](ar_padt-dep-parataxis.html) – [punct](ar_padt-dep-punct.html) – [root](ar_padt-dep-root.html) – [xcomp](ar_padt-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 7664 sentences, 242056 tokens and 282384 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 22277 tokens (9%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus does not contain words that contain both letters and punctuation.</li>
</ul>

<ul>
<li>This corpus contains 38333 multi-word tokens. On average, one multi-word token consists of 2.05 syntactic words.</li>
<li>There are 13846 types of multi-word tokens. Examples: وقال، انه، أنه، ومن، فيها، وقد، وفي، وكان، وهو، بها، فيه، واضاف، لها، ولا، بما، له، منها، بسبب، وأضاف، عليها، وهي، عليه، وأشار، وكانت، وأن، به، وذلك، بأن، والتي، وعلى، ولم، نفسه، وأكد، وكذلك، انها، بنسبة، وان، وقالت، إنه، فإن، باسم، سيتم، وأوضح، بشكل، ولكن، بلاده، واوضح، بشأن، فقد، بالنسبة.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SCONJ</li>
</ul>

<ul>
<li>This corpus contains 27 word types tagged as particles (PART): أ, أما, إلا, إن, إيا, ال, الا, الـ, الـــ, اما, ان, ربما, ربمــا, س, عل, قد, كلا, ل, لا, لم, لن, ما, ناهيك, نعم, ها, هل, يا</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as pronouns (PRON): هُوَ</li>
</ul>

<ul>
<li>This corpus contains 24 lemmas tagged as determiners (DET): أَينَ, اَلَّذِي, ذَا, ذَاكَ, ذُو, ذٰلِكَ, كَم, كَيفَ, كِلَا, لِمَاذَا, ما, ماهُوَ, مَا, مَاذَا, مَتَى, مَن, نا, ها, هُ, هُوَ, هِ, هٰذَا, هٰكَذَا, ِي</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: هُوَ</li>
</ul>

<ul>
<li>This corpus contains 13 lemmas tagged as auxiliaries (AUX): أَ, أَلَا, إِلَّا, رُبَّمَا, سَ, سَوفَ, عَاد, عَلَّ, قَد, كَان, لَيس, مَا, هَل</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as AUX and sometimes as VERB: عَاد, كَان, لَيس</li>
</ul>

<ul>
<li>There are 1 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: يكون, تكون, يكن, تكن, تكونون, كن, أكون, اكون, تعد, نكون</li>
    <li>VERB: يتم, يمكن, يكون, تصل, تكون, يجب, يصل, يقول, يذكر, تقوم</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: المصرية, المتحدة, العربية, جديدة, الدولية, الفلسطينية, خاصة, أخرى, الأمريكية, العامة</li>
      <li>AUX: تكون, كانت, ليست, تكن, تعد</li>
      <li>AUX-Fin: تكون, تكن, تعد</li>
      <li>DET: التي, هذه, التى, تلك, هٰذه, اللتين, اللواتي, ها, اللتان, اللاتى</li>
      <li>NOUN: الحاصلات, البويات, بدايات, عداءة, الآفات, التليفونات, الخضروات, الكابلات, المداهمات, بضعة</li>
      <li>NUM: ثلاث, عشر, الثلاث, خمس, ست, عشرة, اربع, الخمس, الثماني, العشر</li>
      <li>PRON: ها, هي, هما, هن, هى, ك, أعضائها, أهدافها, إليها, بضمانها</li>
      <li>PROPN: العمارة, اللطيفية, الوكرة</li>
      <li>VERB: كانت, قالت, ذكرت, بلغت, تصل, تكون, بدأت, تقوم, أكدت, نقلت</li>
      <li>VERB-Fin: تصل, تكون, تقوم, تبلغ, تعتبر, تشهد, تضم, تعمل, تتم, تعد</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: المصري, الماضي, أي, الحالي, العام, المقبل, المركزي, أكثر, الدولي, الاول</li>
      <li>AUX: كان, يكون, ليس, يكن, كانوا, كنت, تكونون, كن, لسنا, أكون</li>
      <li>AUX-Fin: يكون, يكن, تكونون, كن, أكون, اكون, تكون, نكون, يكونا</li>
      <li>DET: الذي, هذا, ذلك, الذين, ذٰلك, هٰذا, الذى, هؤلاء, اللذين, ه</li>
      <li>NOUN: المعتمرين</li>
      <li>NUM: ثلاثة, خمسة, ستة, عشرة, الثلاثة, اربعة, اثنين, أربعة, سبعة, واحد</li>
      <li>PRON: ه, هم, هو, نا, هما, ك, ي, ني, نحن, كم</li>
      <li>VERB: قال, كان, أضاف, تم, أكد, يتم, يمكن, أشار, أوضح, أعلن</li>
      <li>VERB-Fin: يتم, يمكن, يكون, يجب, يصل, يقول, يذكر, يعني, يرى, يقوم</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>ADJ: الماضيين, الكوريتين, القادمين, المقبلين, جافتين, قديمتين, الفنلنديين, قادمين, آخران, آخرين</li>
      <li>AUX-Fin: يكونا</li>
      <li>DET: اللذين, اللتين, هذين, كلا, اللتان, اللذان, هاتين, ذاتا, هاتان, هٰذان</li>
      <li>NOUN: البلدين, الجانبين, الطرفين, اسبوعين, الدولتين, يومين, وزيري, سنتين, الجانبان, عامين</li>
      <li>NUM: مليوني, مئتي, ملياري, الفي, بليوني, ألفي, الفى, مليارى, ألفين, الفين</li>
      <li>PRON: هما, كما</li>
      <li>VERB: قتلا, اتفقا, أكدا, بحثا, كانا, عقدا, قدما, كانتا, يشيران, يلتقيان</li>
      <li>VERB-Fin: يشيران, يلتقيان, تدرسان, تستعدان, يبحثان, يتجهان, يتوقفان, يدعوان, يعتبران, يعرفان</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: المصريين, اليهود, كبار, العرب, الفلسطينيين, المسلمين, العراقيين, آخرين, الأجانب, المصابين</li>
      <li>AUX: كانوا, تكونون, لسنا, ليسوا, نكون</li>
      <li>AUX-Fin: تكونون, نكون</li>
      <li>DET: الذين, هؤلاء, اللواتي, هٰؤلاء, اولئك, أولٰئك, اللاتى, أولئك, اللاتي, نا</li>
      <li>NOUN: الولايات, الدول, الشركات, الوزراء, دول, شركات, أسعار, العلاقات, البنوك, مصادر</li>
      <li>NUM: ملايين, آلاف, الاف, مليارات, عشرات, بلايين, مئات, العشرات, الملايين, الآلاف</li>
      <li>PRON: هم, نا, نحن, هن, كم, انتم, أنتم, استبعادهم, بأنفسهم, بلادهم</li>
      <li>VERB: كانوا, قتلوا, يريدون, يعملون, يعيشون, دعوا, يطالبون, طالبوا, فروا, قالوا</li>
      <li>VERB-Fin: يريدون, يعملون, يعيشون, يطالبون, نرى, يعانون, يعتبرون, يواجهون, نريد, يتمكنوا</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: المصرية, المتحدة, المصري, الماضي, العربية, أي, الحالي, جديدة, الدولية, الفلسطينية</li>
      <li>AUX: كان, يكون, ليس, تكون, كانت, ليست, يكن, تكن, كنت, كن</li>
      <li>AUX-Fin: يكون, تكون, يكن, تكن, كن, أكون, اكون, تعد</li>
      <li>DET: التي, الذي, هذه, هذا, ذلك, ذٰلك, التى, هٰذا, تلك, هٰذه</li>
      <li>NOUN: مصر, اليوم, رئيس, دولار, الحكومة, العراق, وزير, كل, الرئيس, غير</li>
      <li>NUM: مليون, مليار, ألف, المئة, بليون, الف, المائة, مليوناً, ملياراً, مليونا</li>
      <li>PRON: ه, ها, هو, هي, ك, ي, ني, هى, أنا, أنت</li>
      <li>PROPN: العمارة, اللطيفية, الوكرة</li>
      <li>VERB: قال, كان, أضاف, كانت, تم, أكد, يتم, يمكن, أشار, أوضح</li>
      <li>VERB-Fin: يتم, يمكن, يكون, تصل, تكون, يجب, يصل, يقول, يذكر, تقوم</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: خاصة, الماضي, حالياً, حاليا, مشيراً, أكثر, المقبل, مشيرا, أي, المتحدة</li>
      <li>ADP: مع, بين, خلال, بعد, حول, قبل, ضد, أمام, نحو, مقابل</li>
      <li>DET: التي, هذا, هذه, الذي, ذلك, التى, الذين, تلك, الذى, هؤلاء</li>
      <li>NOUN: اليوم, يوم, عام, الثلاثاء, السبت, غير, كل, الحكومة, مصر, مساء</li>
      <li>NUM: مليون, ألف, مليار, بليون, الف, ثلاثة, مليوناً, ملياراً, خمسة, مليونا</li>
      <li>PRON: ه, ها, هم, نا, ني, ك, هما, هن, كم</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: المصرية, المتحدة, المصري, العربية, الماضي, الحالي, الفلسطينية, الدولية, أي, جديدة</li>
      <li>ADP: خلال, دون, نحو, بين, حين, حسب, مثل, مقابل, قبل, خارج</li>
      <li>DET: التي, هذه, الذي, هذا, ذلك, الذين, التى, هٰذه, هٰذا, ذٰلك</li>
      <li>NOUN: مصر, دولار, العراق, جنيه, مجلس, كل, الحكومة, الدول, الرئيس, مايو</li>
      <li>NUM: مليون, مليار, ملايين, المئة, ثلاثة, المائة, ألف, بليون, آلاف, الف</li>
      <li>PRON: ها, ه, هم, نا, هما, ك, ي, كم, هن, كما</li>
      <li>PROPN: العمارة, اللطيفية, بدر</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: المتحدة, المصرية, المصري, العام, كبير, السابق, السوري, أسعد, أكثر, الاسرائيلي</li>
      <li>ADP: بعد, مثل, أمام, قبل, مع, مقابل</li>
      <li>DET: الذي, التي, هذا, هذه, ذٰلك, هٰذا, ذلك, الذين, تلك, التى</li>
      <li>NOUN: رئيس, وزير, الدكتور, الحكومة, مصر, الرئيس, عدد, مصادر, التقرير, الولايات</li>
      <li>NUM: ثلاثة, خمسة, ثلاث, عشرة, اثنان, الثلاثة, ستة, عشرات, واحد, أربعة</li>
      <li>PRON: هو, هي, هم, نحن, هى, هما, أنا, أنت, انتم, هن</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>ADJ: الثالث, الأولى, الذاتية, السابع, القصيرة, الحادية, الخامسة, الطويلة, المستندي, البعيدة</li>
      <li>NUM: الاربع, الثلاثة, الخمس, الخمسة</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cons
    <ul>
      <li>ADJ: أي, اي, أول, اول, أكبر, مختلف, أبرز, أهم, كبار, أسعد</li>
      <li>NOUN: رئيس, وزير, كل, غير, مجلس, بعض, عام, يوم, نفس, عدم</li>
      <li>NUM: مليون, مليار, ألف, ثلاثة, ملايين, بليون, الف, آلاف, ثلاث, خمسة</li>
      <li>PROPN: بدر</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: المصرية, المتحدة, المصري, الماضي, العربية, الحالي, الدولية, الفلسطينية, العام, المقبل</li>
      <li>NOUN: اليوم, الحكومة, العراق, الرئيس, الولايات, الدول, السوق, العام, المنطقة, الدكتور</li>
      <li>NUM: المئة, المائة, الثلاثة, الثلاث, العشرين, الأربعة, المليون, الثماني, الخمس, الستة</li>
      <li>PROPN: النروج, الفليبين, الإكوادور, البدري, البنتاجون, التاميل, التشاد, الزرقاوي, الفاتيكان, الكوت</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: جديدة, خاصة, أخرى, أكثر, اخرى, سورية, اكثر, جديد, كبيرة, حالياً</li>
      <li>NOUN: مصر, دولار, جنيه, مايو, إسرائيل, عدد, لبنان, بغداد, مصادر, سنوات</li>
      <li>NUM: عشرين, اثنين, ثلاثة, مليوناً, واحد, مليون, ملياراً, مليونا, ألفاً, ملايين</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADJ: أفريقي, أوسطي, افريقي, عام, كبيرة</li>
      <li>NOUN: بد, أمل, اهمية, ايادي, بديل, تعازى, جدوى, حلاوة, خلاف, خيارات</li>
      <li>NUM: مليون</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: يكون, تكون, يكن, تكن, تكونون, أكون, اكون, تعد, نكون, يكونا</li>
      <li>VERB-Fin: يتم, يمكن, يكون, تصل, تكون, يجب, يصل, يقول, يذكر, تقوم</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX: كان, ليس, كانت, ليست, كانوا, كنت, لسنا, ألا, ليسوا</li>
      <li>VERB: قال, كان, أضاف, كانت, تم, أكد, أشار, أوضح, أعلن, قالت</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: كن</li>
      <li>VERB-Fin: حاول, د, دعوا, حث, ابحث, احرص, اخدموا, افتحوا, اكسون, انتبه</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: يكون, تكون, تكونون, أكون</li>
      <li>VERB-Fin: يتم, يمكن, يجب, يقول, يذكر, يعني, تعتبر, يرى, تبلغ, تضم</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Jus
    <ul>
      <li>AUX-Fin: يكن, تكن, تعد</li>
      <li>VERB-Fin: يكن, يتم, تكن, يمكن, يصدر, يحدد, يعد, تتجاوز, تعد, يستبعد</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: يكون, تكون, اكون, نكون, يكونا</li>
      <li>VERB-Fin: يكون, تكون, تصل, يصل, يتم, تصبح, تقوم, يمكن, تدخل, تستطيع</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX: كان, يكون, ليس, تكون, كانت, ليست, يكن, تكن, كانوا, كنت</li>
      <li>AUX-Fin: يكون, تكون, يكن, تكن, تكونون, أكون, اكون, تعد, نكون, يكونا</li>
      <li>VERB: قال, كان, أضاف, كانت, تم, أكد, يتم, يمكن, أشار, أوضح</li>
      <li>VERB-Fin: يتم, يمكن, يكون, تصل, تكون, يجب, يصل, يقول, تقوم, يعني</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: يذكر, يوجد, قتل, يتوقع, تعد, تعتبر, يعد, أصيب, توجد, يعتبر</li>
      <li>VERB-Fin: يذكر, يوجد, يتوقع, تعد, تعتبر, يعد, توجد, يعتبر, يشار, تقام</li>
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
      <li>DET: هذه, هذا, ذلك, ذٰلك, هٰذا, تلك, هٰذه, هؤلاء, هذين, كلا</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: ه, ها, هم, هو, نا, هي, هما, ك, ي, ني</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: التي, الذي, الذين, التى, الذى, اللذين, ما, اللتين, اللواتي, اللتان</li>
    </ul>
  </li>
</ul>




<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: كنت, لسنا, أكون, اكون, نكون</li>
      <li>AUX-Fin: أكون, اكون, نكون</li>
      <li>DET: نا, ي</li>
      <li>PRON: نا, ي, ني, نحن, أنا, انا, لمساعدتنا</li>
      <li>VERB: نرى, نريد, نجد, نستورد, نعرف, نقول, أعتقد, أعلن, أقول, أكون</li>
      <li>VERB-Fin: نرى, نريد, نجد, نستورد, نعرف, نقول, أعتقد, أعلن, أقول, أكون</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: تكونون, تكون</li>
      <li>PRON: ك, كم, أنت, انتم, كما, أنتم</li>
      <li>VERB: تحب, تواجه, تتجنب, تتعرض, تجد, تحصل, تخليتم, تبلي, تتوقع, تدع</li>
      <li>VERB-Fin: تحب, تواجه, تتجنب, تتعرض, تجد, تحصل, تبلي, تتوقع, تدع, ترغب</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: كان, يكون, ليس, تكون, كانت, ليست, يكن, تكن, كانوا, ألا</li>
      <li>AUX-Fin: يكون, تكون, يكن, تكن, تعد, يكونا</li>
      <li>DET: ه, ها</li>
      <li>PRON: ه, ها, هم, هو, هي, هما, هن, هى, أعضائها, أهدافها</li>
      <li>VERB: قال, كان, أضاف, كانت, تم, أكد, يتم, يمكن, أشار, أوضح</li>
      <li>VERB-Fin: يتم, يمكن, يكون, تصل, تكون, يجب, يصل, يقول, يذكر, تقوم</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: ب, د, ف, أ, م, ر, كلم, ت, غ, كجم</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Prep
        <ul>
          <li>ADP: في, ل, ب, من, على, الى, إلى, عن, فى, مع</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ConjType</a>
    <ul>
      <li>Oper
        <ul>
          <li>SYM: <</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: واشنطن, سوريا, شارون, السارس, أفريقيا, روسيا, فرنسا, باول, تركيا, بوش</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Digit
        <ul>
          <li>NUM: 15, 3, 6, 2, 8, 7, 4, 11, 10, 12</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>NUM: مليون, مليار, ألف, ثلاثة, ملايين, المئة, بليون, الف, المائة, عشرة</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumValue</a>
    <ul>
      <li>1
        <ul>
          <li>NUM: واحد, واحدة, الواحد, واحداً, أحد, الواحدة, واحدا</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>NUM: عشر, عشرة</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>NUM: ثلاثة, خمسة, ثلاث, ستة, الثلاثة, اربعة, الثلاث, خمس, أربعة, سبعة</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 4 lemmas as copulas (<a>cop</a>). Examples: كَان، لَيس، هُوَ، ".</li>
</ul>

<ul>
<li>This corpus uses 12 lemmas as auxiliaries (<a>aux</a>). Examples: سَ، قَد، سَوفَ، مَا، لَيس، هَل، إِلَّا، رُبَّمَا، أَ، أَلَا، عَاد، عَلَّ.</li>
<li>This corpus uses 3 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: سَ، قَد، سَوفَ.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Acc (851)</li>
      <li>VERB--NOUN-Acc-ADP(إِلَى) (3)</li>
      <li>VERB--NOUN-Acc-ADP(إِلَى)-ADP(عَلَى) (1)</li>
      <li>VERB--NOUN-Acc-ADP(بِ) (2)</li>
      <li>VERB--NOUN-Acc-ADP(بِ)-ADP(فِي) (1)</li>
      <li>VERB--NOUN-Acc-ADP(تَحتَ) (1)</li>
      <li>VERB--NOUN-Acc-ADP(ضِدَّ) (1)</li>
      <li>VERB--NOUN-Acc-ADP(ضِمنَ) (1)</li>
      <li>VERB--NOUN-Acc-ADP(عَلَى) (2)</li>
      <li>VERB--NOUN-Acc-ADP(عَن) (1)</li>
      <li>VERB--NOUN-Acc-ADP(فِي) (4)</li>
      <li>VERB--NOUN-Acc-ADP(قَيدَ) (1)</li>
      <li>VERB--NOUN-Acc-ADP(لِ) (1)</li>
      <li>VERB--NOUN-Acc-ADP(مِن) (1)</li>
      <li>VERB--NOUN-Acc-ADP(مِن)-ADP(فِي) (1)</li>
      <li>VERB--NOUN-Acc-ADP(وَ) (1)</li>
      <li>VERB--NOUN-Gen (15)</li>
      <li>VERB--NOUN-Gen-ADP(إِلَى) (1)</li>
      <li>VERB--NOUN-Gen-ADP(بَينَ) (1)</li>
      <li>VERB--NOUN-Gen-ADP(بِ) (5)</li>
      <li>VERB--NOUN-Gen-ADP(سِوَى) (1)</li>
      <li>VERB--NOUN-Gen-ADP(عَلَى) (1)</li>
      <li>VERB--NOUN-Gen-ADP(عَن) (3)</li>
      <li>VERB--NOUN-Gen-ADP(فِي) (2)</li>
      <li>VERB--NOUN-Gen-ADP(كَ) (1)</li>
      <li>VERB--NOUN-Gen-ADP(مِن) (1)</li>
      <li>VERB--NOUN-Gen-ADP(مِن)-ADP(دُونَ) (1)</li>
      <li>VERB--NOUN-Nom (4342)</li>
      <li>VERB--NOUN-Nom-ADP(بِ) (1)</li>
      <li>VERB--NOUN-Nom-ADP(مِن) (3)</li>
      <li>VERB--NOUN-Nom-ADP(وَ) (1)</li>
      <li>VERB--PRON-Acc (195)</li>
      <li>VERB--PRON-Acc-ADP(إِلَى) (1)</li>
      <li>VERB--PRON-Acc-ADP(بِ) (2)</li>
      <li>VERB--PRON-Acc-ADP(بِ)-ADP(أَمَامَ) (1)</li>
      <li>VERB--PRON-Acc-ADP(بِ)-ADP(لِ) (1)</li>
      <li>VERB--PRON-Acc-ADP(عَلَى) (1)</li>
      <li>VERB--PRON-Acc-ADP(فِي) (1)</li>
      <li>VERB--PRON-Acc-ADP(فِي)-ADP(مِن) (1)</li>
      <li>VERB--PRON-Gen (3)</li>
      <li>VERB--PRON-Gen-ADP(حَوَالَى)-ADP(مِن) (1)</li>
      <li>VERB--PRON-Gen-ADP(مِن) (3)</li>
      <li>VERB--PRON-Gen-ADP(وَ) (1)</li>
      <li>VERB--PRON-Nom (24)</li>
      <li>VERB--PRON-Nom-ADP(عَلَى) (1)</li>
      <li>VERB-Fin--NOUN-Acc (1178)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(بِ) (2)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(بِ)-ADP(فِي) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(عَلَى)-ADP(بِ) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(فِي) (4)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(مَعَ)-ADP(مِن) (1)</li>
      <li>VERB-Fin--NOUN-Gen (12)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(إِلَى) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(سِوَى) (8)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(كَ) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(مِثلَ) (4)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(مِن) (3)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(وِفقَ) (1)</li>
      <li>VERB-Fin--NOUN-Nom (2857)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(بِ) (4)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(حَولَ) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(فِي) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(كَ) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(لِ) (2)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(مِن) (2)</li>
      <li>VERB-Fin--PRON-Acc (323)</li>
      <li>VERB-Fin--PRON-Acc-ADP(مِن) (1)</li>
      <li>VERB-Fin--PRON-Gen (2)</li>
      <li>VERB-Fin--PRON-Gen-ADP(وَ)-ADP(فِي) (1)</li>
      <li>VERB-Fin--PRON-Nom (83)</li>
      <li>VERB-Fin--PRON-Nom-ADP(إِمَّا) (1)</li>
      <li>VERB-Fin--PRON-Nom-ADP(فِي) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (2044)</li>
      <li>VERB--NOUN-Acc-ADP(إِزَاءَ) (1)</li>
      <li>VERB--NOUN-Acc-ADP(بِ) (1)</li>
      <li>VERB--NOUN-Acc-ADP(عَلَى) (1)</li>
      <li>VERB--NOUN-Acc-ADP(فِي) (3)</li>
      <li>VERB--NOUN-Acc-ADP(مِن) (2)</li>
      <li>VERB--NOUN-Gen (7)</li>
      <li>VERB--NOUN-Nom (121)</li>
      <li>VERB--PRON-Acc (660)</li>
      <li>VERB--PRON-Nom (2)</li>
      <li>VERB-Fin--NOUN-Acc (2706)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(إِلَى) (3)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(بِ) (3)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(عَن) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(لَا) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(لِ) (2)</li>
      <li>VERB-Fin--NOUN-Gen (10)</li>
      <li>VERB-Fin--NOUN-Nom (85)</li>
      <li>VERB-Fin--PRON-Acc (662)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (123)</li>
      <li>VERB--NOUN-Acc-ADP(لَا) (1)</li>
      <li>VERB--NOUN-Gen (2)</li>
      <li>VERB--NOUN-Nom (21)</li>
      <li>VERB--PRON-Acc (31)</li>
      <li>VERB-Fin--NOUN-Acc (57)</li>
      <li>VERB-Fin--NOUN-Nom (2)</li>
      <li>VERB-Fin--PRON-Acc (25)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>advmod:emph</a>, <a>aux:pass</a>, <a>csubj:pass</a>, <a>flat:foreign</a>, <a>nsubj:pass</a>, <a>obl:arg</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>vocative</a>, <a>expl</a>, <a>clf</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
