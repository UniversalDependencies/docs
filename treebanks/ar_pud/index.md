---
layout: base
title:  'UD_Arabic-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Arabic PUD

Language: [Arabic](/ar/index.html) (code: `ar`)<br/>
Family: Afro-Asiatic, Semitic

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Luma Ateyah, Martin Popel, Daniel Zeman, Nizar Habash, Dima Taji.

Repository: [UD_Arabic-PUD](https://github.com/UniversalDependencies/UD_Arabic-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udar_pud212)<br />
Download all treebanks: [UD 2.12](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Arabic-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Arabic-PUD/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | not available |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | not available |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

This is a part of the Parallel Universal Dependencies (PUD) treebanks created
for the [CoNLL 2017 shared task on Multilingual Parsing from Raw Text to
Universal Dependencies](http://universaldependencies.org/conll17/).




There are
1000 sentences in each language, always in the same order. (The sentence
alignment is 1-1 but occasionally a sentence-level segment actually consists
of two real sentences.) The sentences are taken from the news domain (sentence
id starts in ‘n’) and from Wikipedia (sentence id starts with ‘w’). There are
usually only a few sentences from each document, selected randomly, not
necessarily adjacent. The digits on the second and third position in the
sentence ids encode the original language of the sentence. The first 750
sentences are originally English (01). The remaining 250 sentences are
originally German (02), French (03), Italian (04) or Spanish (05) and they
were translated to other languages via English. Translation into German,
French, Italian, Spanish, Arabic, Hindi, Chinese, Indonesian, Japanese,
Korean, Portuguese, Russian, Thai and Turkish has been provided by DFKI and
performed (except for German) by professional translators. Then the data has
been annotated morphologically and syntactically by Google according to Google
universal annotation guidelines; finally, it has been converted by members of
the UD community to UD v2 guidelines.

Additional languages have been provided (both translation and native UD v2
annotation) by other teams: Czech by Charles University, Finnish by University
of Turku and Swedish by Uppsala University.

The entire treebank is labeled as test set (and was used for testing in the
shared task). If it is used for training in future research, the users should
employ ten-fold cross-validation.


## Acknowledgments

# Statistics of UD Arabic PUD

## POS Tags

[ADJ](ar_pud-pos-ADJ.html) – [ADP](ar_pud-pos-ADP.html) – [ADV](ar_pud-pos-ADV.html) – [AUX](ar_pud-pos-AUX.html) – [CCONJ](ar_pud-pos-CCONJ.html) – [DET](ar_pud-pos-DET.html) – [NOUN](ar_pud-pos-NOUN.html) – [NUM](ar_pud-pos-NUM.html) – [PART](ar_pud-pos-PART.html) – [PRON](ar_pud-pos-PRON.html) – [PROPN](ar_pud-pos-PROPN.html) – [PUNCT](ar_pud-pos-PUNCT.html) – [SCONJ](ar_pud-pos-SCONJ.html) – [SYM](ar_pud-pos-SYM.html) – [VERB](ar_pud-pos-VERB.html) – [X](ar_pud-pos-X.html)

## Features

[Aspect](ar_pud-feat-Aspect.html) – [Case](ar_pud-feat-Case.html) – [Definite](ar_pud-feat-Definite.html) – [Gender](ar_pud-feat-Gender.html) – [Mood](ar_pud-feat-Mood.html) – [Number](ar_pud-feat-Number.html) – [NumType](ar_pud-feat-NumType.html) – [Person](ar_pud-feat-Person.html) – [Polarity](ar_pud-feat-Polarity.html) – [Tense](ar_pud-feat-Tense.html) – [VerbForm](ar_pud-feat-VerbForm.html) – [Voice](ar_pud-feat-Voice.html)

## Relations

[acl](ar_pud-dep-acl.html) – [acl:relcl](ar_pud-dep-acl-relcl.html) – [advcl](ar_pud-dep-advcl.html) – [advmod](ar_pud-dep-advmod.html) – [amod](ar_pud-dep-amod.html) – [appos](ar_pud-dep-appos.html) – [aux](ar_pud-dep-aux.html) – [case](ar_pud-dep-case.html) – [cc](ar_pud-dep-cc.html) – [cc:preconj](ar_pud-dep-cc-preconj.html) – [ccomp](ar_pud-dep-ccomp.html) – [compound](ar_pud-dep-compound.html) – [compound:prt](ar_pud-dep-compound-prt.html) – [conj](ar_pud-dep-conj.html) – [cop](ar_pud-dep-cop.html) – [csubj](ar_pud-dep-csubj.html) – [csubj:pass](ar_pud-dep-csubj-pass.html) – [dep](ar_pud-dep-dep.html) – [det](ar_pud-dep-det.html) – [discourse](ar_pud-dep-discourse.html) – [dislocated](ar_pud-dep-dislocated.html) – [expl](ar_pud-dep-expl.html) – [fixed](ar_pud-dep-fixed.html) – [flat](ar_pud-dep-flat.html) – [iobj](ar_pud-dep-iobj.html) – [mark](ar_pud-dep-mark.html) – [nmod](ar_pud-dep-nmod.html) – [nsubj](ar_pud-dep-nsubj.html) – [nsubj:pass](ar_pud-dep-nsubj-pass.html) – [nummod](ar_pud-dep-nummod.html) – [obj](ar_pud-dep-obj.html) – [obl](ar_pud-dep-obl.html) – [obl:tmod](ar_pud-dep-obl-tmod.html) – [orphan](ar_pud-dep-orphan.html) – [parataxis](ar_pud-dep-parataxis.html) – [punct](ar_pud-dep-punct.html) – [root](ar_pud-dep-root.html) – [vocative](ar_pud-dep-vocative.html) – [xcomp](ar_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences and 20747 tokens.</li>
</ul>

<ul>
<li>This corpus contains 4833 tokens (23%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 5 types of words that contain both letters and punctuation. Examples: "ريديت, إيه-ياسو, الامتياز", الواي-فاي, باس-</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: INTJ</li>
</ul>

<ul>
<li>This corpus contains 32 word types tagged as particles (PART): أم, أما, أن, أي, إلا, إما, إن, الفوق, بما, بيد, ثم, حتى, س, سواء, سوف, سوى, عندما, غير, ف, قد, كما, ل, لا, لقد, لكن, لم, لن, ليس, ما, هل, و, يا</li>
</ul>

<ul>
<li>This corpus contains 16 lemmas tagged as pronouns (PRON): آخَر, أَحَد, أُولائِكَ, الَّذِي, ذ`لِكَ, شِبه, غالِبِيَّة, م, ما, ماذا, من, مَن, مِن, ه`ذا, هُوَ, ينتور</li>
</ul>

<ul>
<li>This corpus contains 25 lemmas tagged as determiners (DET): آخَر, آخِر, أَحَد, أَغلَب, أَكثَر, أَكمَل, أَيّ, بَعض, بَقِيَّة, جَمِيع, ذا, سائِر, شِبه, عِدَّة, غالِبِيَّة, كامِل, كُلِّيّ, كُلّ, كِلَا, كِلَّة, لَو, مُعظَم, مُنتَصَف, نِسبَة, نِصف</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as PRON and sometimes as DET: آخَر, أَحَد, شِبه, غالِبِيَّة</li>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as auxiliaries (AUX): كَان, لَيس</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: كَان</li>
</ul>

<ul>
<li>There are 1 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: الخاصة, الخاص, قائلاً, التابعة, المرتبط, الموجودة, الواردة, الواقعة, خاصة, قائلةً</li>
    <li>NOUN: الضاربة, الظاهر, المؤرخة, المتبقيين, المتجهة, المجموع, المدربين, المرغوب, المسببة, المستخلصة</li>
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
      <li>ADJ: الخاصة, المتحدة, كبيرة, الأولى, أخرى, الجديدة, البريطانية, جديدة, الأمريكية, الشمالية</li>
      <li>ADJ-Part: الخاصة, التابعة, الموجودة, الواردة, الواقعة, خاصة, قائلةً, الكامنة, الخالية, الداعية</li>
      <li>AUX: كانت, تكن, تكون, ليست</li>
      <li>NOUN: النسبة, شركة, منطقة, المنطقة, نهاية, ذات, الحرب, المدينة, فترة, الدول</li>
      <li>NOUN-Part: الضاربة, المؤرخة, المتجهة, المسببة, المستخلصة, مرتدية, مزيلةً, منخرطة</li>
      <li>NUM: عشرة, أربعة, ثلاثة, ثمانية, خمسة, سبعة, المئة, ستة, الثلاثة, الثلاثين</li>
      <li>PRON: ها, التي, هذه, هي, تلك, هن, غالبيت, هذا, هم, ينتور</li>
      <li>PROPN: الصين, الولايات, فرنسا, أفريقيا, بريطانيا, روسيا, أستراليا, ألبانيا, أمريكا, أوروبا</li>
      <li>VERB: كانت, بدأت, قالت, تكون, تظهر, تضم, تقول, ظهرت, تبدأ, تعد</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: الأول, الثاني, أكثر, إسترليني, كبير, الثالث, كبيراً, آخر, أكبر, المتوسط</li>
      <li>ADJ-Part: الخاص, قائلاً, المرتبط, الحائز, الخانق, القادر, المذكور, المستغرق, المسموح, المطبق</li>
      <li>AUX: كان, يكون, كانوا, كنت, كون, ليس, يكن</li>
      <li>NOUN: عام, شكلٍ, الوقت, اسم, القرن, الأمر, أجل, العالم, شأن, سبب</li>
      <li>NOUN-Part: الظاهر, المتبقيين, المجموع, المدربين, المرغوب, المسجل, المنخرطين, الواقع, مشيداً, مكوناً</li>
      <li>NUM: عشر, ثلاث, مليون, أربع, مليار, ست, آلاف, أربعة, أربعين, ألفي</li>
      <li>PRON: ه, هم, ذلك, هذا, الذي, هو, الذين, ك, أولئك, آخر</li>
      <li>PROPN: تشرين, البحر, كانون, ترامب, نيسان, الاتحاد, جوزيف, دي, مجلس, نهر</li>
      <li>VERB: يمكن, كان, قال, يكون, تم, يكن, بدأ, يقول, بات, أصبح</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>ADJ: أستراليان, ألحقا, إضافيتين, إضافيين, الثاني, الشمسيين, الماضيين, المتخاصمين, المعروضتان, طبيعيتان</li>
      <li>NOUN: سنتين, عامي, أسبوعين, الاثنين, عينا, قسمين, ألبومين, إدارتي, الأدبيتين, الاعتدالين</li>
      <li>NOUN-Part: المتبقيين</li>
      <li>NUM: ألفي, ملياري</li>
      <li>PRON: هما, اللذان, اللذين, هذان, هذين</li>
      <li>PROPN: الأمريكيتين, البحرين, القديسين, لأمريكيتين</li>
      <li>VERB: أنجبا, انتهيا, تجوبان, تحدثان, تغنيان, تقيسان, زرعا, شاركا, صنفتا, غمرا</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: الأصليين, الحمر, الست, السياسيين, اللاتينيين, آخرين, أستراليون, أصليون, ألمانيين, أوائل</li>
      <li>ADJ-Part: مكتوفي, موجودين</li>
      <li>AUX: كانوا, كنا</li>
      <li>NOUN: الدول, الناس, الأراضي, سنوات, الشركات, المناطق, أراضي, الجزر, الذكور, السنوات</li>
      <li>NOUN-Part: المنخرطين, موالون</li>
      <li>NUM: ثلاث, عشر, مليون, أربعة, عشرة, مليار, أربع, ثلاثة, ثمانية, خمسة</li>
      <li>PRON: هم, نا, الذين, أولئك, هن, كم, نحن, هؤلاء</li>
      <li>PROPN: الولايات, الألعاب, الشيوخ, لولايات, الألب, الأمم, المايا, جزر, أخبار, أشياء</li>
      <li>VERB: يحملون, حصلوا, قرروا, كانوا, نحتاج, نرى, يتمتعون, يعانون, أثاروا, أجبروا</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: الأول, الخاصة, المتحدة, كبيرة, الثاني, الأولى, أخرى, الجديدة, أكثر, إسترليني</li>
      <li>ADJ-Part: الخاصة, الخاص, قائلاً, التابعة, المرتبط, الموجودة, الواردة, الواقعة, خاصة, قائلةً</li>
      <li>AUX: كان, كانت, يكون, تكن, تكون, كنت, ليس, ليست, يكن, أكن</li>
      <li>NOUN: عام, شكلٍ, الوقت, اسم, القرن, الأمر, أجل, العالم, النسبة, شأن</li>
      <li>NOUN-Part: الضاربة, الظاهر, المؤرخة, المتجهة, المجموع, المدربين, المرغوب, المسببة, المستخلصة, المسجل</li>
      <li>NUM: عشر, مليون</li>
      <li>PRON: ه, ها, التي, ذلك, هذا, الذي, هذه, هو, هي, تلك</li>
      <li>PROPN: تشرين, البحر, الصين, ترامب, هونغ, كانون, دي, كونغ, نيسان, الاتحاد</li>
      <li>VERB: يمكن, كان, قال, كانت, يكون, تم, بدأت, قالت, يكن, بدأ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: أكثر, كبيراً, أكبر, الخاصة, جديداً, قائلاً, خاصة, كبيرة, أول, الأولى</li>
      <li>ADJ-Part: قائلاً, الخاصة, قائلةً, الخاص, الداعية, المتنامية, المستغرق, المقدم, تابعة, حاملاً</li>
      <li>DET: كل, عدة, آخر, أي, بعض, أحد, شبه, غالبية, إحدى, بقية</li>
      <li>NOUN: عاماً, وفقاً, العديد, بدءاً, بدلاً, اسم, الأمر, المزيد, نجاحاً, نفس</li>
      <li>NOUN-Part: المسببة, مرتدية, مزيلةً, مشيداً, مكوناً, منحوتاً, منخرطة, يافعاً</li>
      <li>NUM: عشر, مليون, أربع, أربعة, ثلاث, ثمانية, ست, ألف, الثلاثة, المليارات</li>
      <li>PRON: ه, ها, ما, هذا, الذي, هم, نا, التي, هذه, ذلك</li>
      <li>PROPN: الإمبراطورية, أبو, أندريه, الألعاب, الثلاثاء, الحرب, الله, الولايات, اليونان, بحر</li>
      <li>VERB: أملاً, انتقادات</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: الأول, الخاصة, المتحدة, أكثر, أخرى, الثاني, الأولى, أول, إسترليني, كبير</li>
      <li>ADJ-Part: الخاصة, التابعة, الخاص, الكامنة, الواردة, الواقعة, أشبه, الخالية, الخانق, الرامية</li>
      <li>ADV: يوم</li>
      <li>AUX: كون</li>
      <li>DET: كل, أحد, أي, إحدى, عدة, بعض, آخر, جميع, معظم, أغلب</li>
      <li>NOUN: عام, شكلٍ, الوقت, القرن, أجل, النسبة, شأن, العالم, منطقة, نهاية</li>
      <li>NOUN-Part: الضاربة, الظاهر, المؤرخة, المتبقيين, المتجهة, المجموع, المدربين, المرغوب, المسجل, المنخرطين</li>
      <li>NUM: 2014, 1492, 2012, 2013, عشر, عشرة, مليون, 1879, 1911, 1916</li>
      <li>PRON: ه, ها, هم, التي, ما, ذلك, الذي, هذه, نا, هذا</li>
      <li>PROPN: البحر, الصين, الاتحاد, تشرين, الولايات, كانون, نهر, جنوب, العصر, المحيط</li>
      <li>VERB: إلباس, اعتبار, جعل, ذكرا</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: أكثر, الأول, كبيرة, الثاني, الخاص, الخاصة, آخر, الأكثر, الأمريكية, الأهم</li>
      <li>ADJ-Part: الخاص, الخاصة, المرتبط, الموجودة, الحائز, المتمركزة, المحاذية, المسموح, المكتشفة, المنفصلة</li>
      <li>DET: كل, بعض, أحد, إحدى, أي, معظم, آخر, أغلب, أكثر, جميع</li>
      <li>NOUN: الأمر, العديد, اسم, الملك, رئيس, الجزء, الشركة, المستثمرون, زيادة, سبب</li>
      <li>NOUN-Part: المستخلصة, الواقع, موالون</li>
      <li>NUM: أربعة, ثلاث, أربع, ثلاثة, ثمانية, خمسة, خمسون, عشرون</li>
      <li>PRON: هذا, التي, الذي, ما, هو, هذه, هي, من, أنا, ذلك</li>
      <li>PROPN: الإمبراطورية, البحر, الثورة, الولايات, اليونان, حديقة, دير, رمسيس, سارة, مجلس</li>
      <li>VERB: الغاية, مهتمٌ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: الأول, الخاصة, المتحدة, الثاني, الأولى, الجديدة, البريطانية, الثالث, الأمريكية, الشمالية</li>
      <li>ADJ-Part: الخاصة, الخاص, التابعة, المرتبط, الموجودة, الواردة, الواقعة, الكامنة, الحائز, الخالية</li>
      <li>AUX: كون</li>
      <li>NOUN: عام, الوقت, اسم, العديد, القرن, الأمر, العالم, النسبة, الكثير, المنطقة</li>
      <li>NOUN-Part: الضاربة, الظاهر, المؤرخة, المتبقيين, المتجهة, المجموع, المدربين, المرغوب, المسببة, المستخلصة</li>
      <li>PROPN: البحر, الولايات, الاتحاد, مجلس, نهر, الإمبراطورية, الحرب, المحيط, المملكة, بحر</li>
      <li>VERB: إلباس, اعتبار, الغاية, جعل, ذكرا</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: أكثر, كبيرة, أخرى, أول, أكبر, إسترليني, جديدة, كبير, كبيراً, آخر</li>
      <li>ADJ-Part: قائلاً, خاصة, قائلةً, أشبه, تابعة, حاملاً, خاصٌ, شاملة, طالباً, قادراً</li>
      <li>NOUN: شكلٍ, جنيه, مرة, شكل, دولار, وقتٍ, سنوات, عاماً, فترة, وفقاً</li>
      <li>NOUN-Part: مرتدية, مشيداً, مكوناً, منافٍ, منحوتاً, منخرطة, موالون, يافعاً</li>
      <li>PROPN: أرض, أشياء, إمبراطورة, ابن, بيانو, تأسيس, جائزة, جزيرة, رأس, عاماً</li>
      <li>VERB: أملاً, انتقادات, مهتمٌ</li>
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
      <li>PART: لم, لا, غير, لن, ليس, ما</li>
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
      <li>ADJ: أفضل</li>
      <li>AUX: يكون, تكن, تكون, يكن, أكن, ليست</li>
      <li>NOUN: أسمي, ألعب, تبني</li>
      <li>VERB: يمكن, يكون, يكن, تكون, يقول, تظهر, تقول, يعمل, تضم, يعود</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>ADJ: أحدث, آمن, ألحقا, سافر, عادل</li>
      <li>AUX: كان, كانت, كانوا, كنت, ليس, كنا, ليست</li>
      <li>NOUN: وضع, عمل, تبعت, حكم, دار, درس, زحف, أعما, ألف, أملت</li>
      <li>VERB: كان, قال, كانت, تم, بدأت, قالت, بدأ, بات, أصبح, أدى</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: ضع</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: أفضل</li>
      <li>AUX: يكون, تكون</li>
      <li>NOUN: أسمي</li>
      <li>VERB: يمكن, يقول, يكون, تقول, يعمل, تضم, تكون, يبدو, تبدأ, تبلغ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Jus
    <ul>
      <li>AUX: تكن, يكن, أكن</li>
      <li>VERB: يكن, تعد, تظهر, تلق, يتخذ, أعجب, أعرف, تتجاوز, تتعرض, تحقق</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: يكون, تكون</li>
      <li>NOUN: ألعب, تبني</li>
      <li>VERB: يكون, تصبح, تكون, تبقى, توفر, يبدأ, يصبح, يعود, يعيش, أهنئ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: يكون</li>
      <li>VERB: يكون, تكون, يؤدي, يخفف, يسمح, يموت, أدخل, أصاب, تتحدث, تتغير</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ: أحدث, آمن, ألحقا, سافر, عادل</li>
      <li>AUX: كان, كانت, كانوا, تكن, كنت, ليس, يكن, أكن, كنا, ليست</li>
      <li>NOUN: وضع, عمل, تبعت, حكم, دار, درس, زحف, أعما, ألف, أملت</li>
      <li>VERB: كان, قال, كانت, تم, بدأت, قالت, بدأ, يكن, بات, أصبح</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ: أفضل</li>
      <li>AUX: يكون, تكون, ليست</li>
      <li>NOUN: أسمي, ألعب, تبني</li>
      <li>VERB: يمكن, يقول, تقول, يعمل, يكون, تضم, يعود, تبدأ, تظهر, يبدو</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>ADJ: الخاصة, الخاص, قائلاً, التابعة, المرتبط, الواردة, الواقعة, خاصة, قائلةً, أحدث</li>
      <li>ADJ-Part: الخاصة, الخاص, قائلاً, التابعة, المرتبط, الواردة, الواقعة, خاصة, قائلةً, الكامنة</li>
      <li>AUX: كان, كانت, يكون, كانوا, تكن, تكون, كنت, ليس, ليست, يكن</li>
      <li>NOUN: عمل, وضع, تبعت, حكم, دار, زحف, أسمي, أعما, ألعب, ألف</li>
      <li>NOUN-Part: الضاربة, الظاهر, المتبقيين, المتجهة, المنخرطين, الواقع, مرتدية, مزيلةً, مشيداً, منافٍ</li>
      <li>VERB: يمكن, كان, قال, كانت, يكون, تم, بدأت, قالت, يكن, بدأ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ: الموجودة, موجودة, المتاحة, المذكور, المستخدمة, المستغرق, المسموح, المشتبه, المطبق, المطلوب</li>
      <li>ADJ-Part: الموجودة, المتاحة, المذكور, المستخدمة, المستغرق, المسموح, المشتبه, المطبق, المطلوب, المقدم</li>
      <li>NOUN: المؤرخة, المجموع, المدربين, المراعي, المرغوب, المسؤول, المسببة, المستخلصة, المسجل, المطبوعة</li>
      <li>NOUN-Part: المؤرخة, المجموع, المدربين, المرغوب, المسببة, المستخلصة, المسجل, مكوناً, منحوتاً, منخرطة</li>
      <li>VERB: تستخدم, يعتقد, أجريت, أطلق, أعيد, أنشئ, تعد, طرحت, يعرف, أعلن</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>



<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: عشر, الثالث, الثاني, الرابع, السادس</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADJ: أفضل</li>
      <li>AUX: كنت, كنا</li>
      <li>NOUN: أسمي, ألعب, عاملت</li>
      <li>PRON: نا, ي, أنا, ني, نحن</li>
      <li>VERB: أعرف, أحب, أعتقد, بحثت, نحتاج, نرى, آمل, أبحث, أتحدث, أتساءل</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: كنت</li>
      <li>PRON: ك, كم, هما</li>
      <li>VERB: تريد, تستمد, تشاء, تشرع, تعرف, تفعل, تقف, تقول, تنام, زرعا</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ: أحدث, آمن, ألحقا, سافر, عادل</li>
      <li>AUX: كان, كانت, يكون, كانوا, تكن, تكون, ليس, ليست, يكن, أكن</li>
      <li>NOUN: وضع, عمل, تبعت, حكم, دار, درس, زحف, أعما, ألف, أملت</li>
      <li>PRON: ه, ها, هم, هو, هي, هما, هن, التي, ينتور</li>
      <li>VERB: يمكن, كان, قال, كانت, يكون, تم, بدأت, قالت, يكن, بدأ</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: كَان، لَيس.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: كَان.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (9)</li>
      <li>VERB--NOUN-Acc (64)</li>
      <li>VERB--NOUN-Gen (47)</li>
      <li>VERB--NOUN-Nom (512)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-Acc (56)</li>
      <li>VERB--PRON-Gen (79)</li>
      <li>VERB--PRON-Nom (56)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (9)</li>
      <li>VERB--NOUN-Acc (383)</li>
      <li>VERB--NOUN-Gen (34)</li>
      <li>VERB--NOUN-Nom (2)</li>
      <li>VERB--PRON-Acc (78)</li>
      <li>VERB--PRON-Gen (21)</li>
      <li>VERB--PRON-Nom (7)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (5)</li>
      <li>VERB--NOUN-Gen (2)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>acl:relcl</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>nsubj:pass</a>, <a>obl:tmod</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
