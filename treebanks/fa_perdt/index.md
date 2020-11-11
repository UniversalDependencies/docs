---
layout: base
title:  'UD_Persian-PerDT'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Persian PerDT

Language: [Persian](/fa/index.html) (code: `fa`)<br/>
Family: Indo-European, Iranian

This treebank has been part of Universal Dependencies since the UD v2.7 release.

The following people have contributed to making this treebank part of UD: Mohammad Sadegh Rasooli, Pegah Safari, Amirsaeid Moloodi, Alireza Nourian.

Repository: [UD_Persian-PerDT](https://github.com/UniversalDependencies/UD_Persian-PerDT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfa_perdt27)<br />
Download all treebanks: [UD 2.7](/#download)

License: CC BY-SA 4.0

Genre: news, fiction, nonfiction, academic, web, blog

Questions, comments?
General annotation questions (either Persian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Persian-PerDT/issues).
If you want to collaborate, please contact [rasooli&nbsp;(æt)&nbsp;seas&nbsp;•&nbsp;upenn&nbsp;•&nbsp;edu, pegh&nbsp;•&nbsp;safari&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens in the UD repository but not directly in the final CoNLL-U files.
You may submit bug fixes as pull requests against the dev branch but you have to go to the folder called `not-to-release` and locate the source files there.
Contact the treebank maintainers if in doubt.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| Relations | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |

## Description
The Persian Universal Dependency Treebank (PerUDT) is the result of automatic coversion of Persian Dependency Treebank (PerDT) with extensive manual corrections. Please refer to the follwoing work, if you use this data:
* Mohammad Sadegh Rasooli, Pegah Safari, Amirsaeid Moloodi, and Alireza Nourian. "The Persian Dependency Treebank Made Universal". 2020 (to appear).



[The Persian Universal Dependency Treebank (PerUDT)](https://universaldependencies.org/treebanks/fa_perdt/index.html) is based on <a href="https://www.aclweb.org/anthology/N13-1031v1.pdf"> Persian Dependency Treebank (PerDT) </a>(Rasooli et al.,2013). The original Treebank consists of 29K sentences sampled from contemporary Persian text in different genres including: news, academic papers, magazine articles and fictions.

This treebank was annotated based on a language-specific schema and its automatic conversion involved three main steps: revising tokenization, POS mapping and dependency mapping.

In tokenization step, in order to separate multiword inflections of simple verbs grouped as one token in PerDT, we followed the guidelines in (Rasooli et al., 2013, Table 3) to automatically find the main verbs. Also we automatically separated pronominal clitics.

In POS conversion step, we used the state of the art <a href="https://arxiv.org/abs/2003.08875"> BERT-based Persian NER tagger</a> (Taher et al.,2020) with manual corrections to extend recall. Through seven different entities detected by tagger, we used Person and Location to mark PROPN tags.

PerDT contains 43 syntactic relations with no straightforward mapping for most of them, conjunctions arranged from the beginning of the sentence to the end and more importantly, prepositions regarded as the head of prepositional phrases and auxiliary verbs as the head of sentences. So we rearranged the order of conjunctions from end to the beginning through a script and tailored rules to convert each kind of relation to its UD version properly. Through the whole process and at the end of each step, we investigated the results and applied manual corrections if it was needed.


## Acknowledgments
Thanks to Morteza Rezaei-Sharifabadi for helping with the copyright of this data.



# Statistics of UD Persian PerDT

## POS Tags

[ADJ](fa_perdt-pos-ADJ.html) – [ADP](fa_perdt-pos-ADP.html) – [ADV](fa_perdt-pos-ADV.html) – [AUX](fa_perdt-pos-AUX.html) – [CCONJ](fa_perdt-pos-CCONJ.html) – [DET](fa_perdt-pos-DET.html) – [INTJ](fa_perdt-pos-INTJ.html) – [NOUN](fa_perdt-pos-NOUN.html) – [NUM](fa_perdt-pos-NUM.html) – [PART](fa_perdt-pos-PART.html) – [PRON](fa_perdt-pos-PRON.html) – [PROPN](fa_perdt-pos-PROPN.html) – [PUNCT](fa_perdt-pos-PUNCT.html) – [SCONJ](fa_perdt-pos-SCONJ.html) – [VERB](fa_perdt-pos-VERB.html) – [X](fa_perdt-pos-X.html)

## Features

[Mood](fa_perdt-feat-Mood.html) – [Number](fa_perdt-feat-Number.html) – [Person](fa_perdt-feat-Person.html) – [Polarity](fa_perdt-feat-Polarity.html) – [PronType](fa_perdt-feat-PronType.html) – [Tense](fa_perdt-feat-Tense.html) – [VerbForm](fa_perdt-feat-VerbForm.html) – [Voice](fa_perdt-feat-Voice.html)

## Relations

[acl](fa_perdt-dep-acl.html) – [advcl](fa_perdt-dep-advcl.html) – [advmod](fa_perdt-dep-advmod.html) – [amod](fa_perdt-dep-amod.html) – [appos](fa_perdt-dep-appos.html) – [aux](fa_perdt-dep-aux.html) – [aux:pass](fa_perdt-dep-aux-pass.html) – [case](fa_perdt-dep-case.html) – [cc](fa_perdt-dep-cc.html) – [ccomp](fa_perdt-dep-ccomp.html) – [compound](fa_perdt-dep-compound.html) – [compound:lv](fa_perdt-dep-compound-lv.html) – [compound:lvc](fa_perdt-dep-compound-lvc.html) – [conj](fa_perdt-dep-conj.html) – [cop](fa_perdt-dep-cop.html) – [csubj](fa_perdt-dep-csubj.html) – [dep](fa_perdt-dep-dep.html) – [det](fa_perdt-dep-det.html) – [fixed](fa_perdt-dep-fixed.html) – [flat:name](fa_perdt-dep-flat-name.html) – [flat:num](fa_perdt-dep-flat-num.html) – [goeswith](fa_perdt-dep-goeswith.html) – [iobj](fa_perdt-dep-iobj.html) – [mark](fa_perdt-dep-mark.html) – [nmod](fa_perdt-dep-nmod.html) – [nsubj](fa_perdt-dep-nsubj.html) – [nsubj:pass](fa_perdt-dep-nsubj-pass.html) – [nummod](fa_perdt-dep-nummod.html) – [obj](fa_perdt-dep-obj.html) – [obl](fa_perdt-dep-obl.html) – [obl:arg](fa_perdt-dep-obl-arg.html) – [parataxis](fa_perdt-dep-parataxis.html) – [punct](fa_perdt-dep-punct.html) – [root](fa_perdt-dep-root.html) – [vocative](fa_perdt-dep-vocative.html) – [xcomp](fa_perdt-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 29107 sentences, 494163 tokens and 501776 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 43893 tokens (9%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 46 types of words that contain both letters and punctuation. Examples: CoRoT-7b, e-mail, م., ه.ق., یو.اس.بی, "اثر", "زن", "مرد", ''ایمیل'', -شاعر, 2-پنتانول, 30-P-409, 4-متیل, :مهناز, A/B, AQ-170, B.C, Blu-ray, DirectX.11.1, Fax.com, S&P, S-300, SIM-LEI, XMM-Newton, [واحد, full-text, iPhone-Dev-Team, real-time, rock-solid, www.biochemiran.com, استارت-2, اسرائیل], اسکاد-بی, اف-5, ان‌شاا…, اچ.آی.وی, ایکس-ری, بتا-گاما, بی-29, بی.ام.دبلیو, رو-ست, سی-130هایی, سیم-لی, غیرشاعر-, هلمن-, پ.م</li>
</ul>

<ul>
<li>This corpus contains 7173 multi-word tokens. On average, one multi-word token consists of 2.06 syntactic words.</li>
<li>There are 3308 types of multi-word tokens. Examples: مرا، خودش، خودم، خودتان، خودمان، خودشان، برایش، دلم، پدرم، خودت، بدین، برایم، مادرم، بدان، پدرش، یادم، دستش، کشورمان، امیدوارم، دلش، سرش، قلبم، خدایا، همسرتان، برایشان، دستم، صورتش، ذهنم، سرم، مادرش، برایت، پایش، برایتان، همسرم، کارتان، یادش، نگاهش، سال‌هاست، چشمانش، کارش، خانواده‌اش، دخترش، زندگی‌ام، نظرم، پسرش، بدنش، برادرم، خانه‌اش، دهانش، زندگی‌اش.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): آیا, دیگر, مگر, که</li>
</ul>

<ul>
<li>This corpus contains 55 lemmas tagged as pronouns (PRON): _, آن, آنان, آنجا, آنها, آنچنان, آنچه, آن‌ها, آها, او, ایشان, این, اینان, اینجانب, اینها, این‌ها, بعضی, بنده, تو, خود, خودت, خودتان, خودش, خودشان, خودم, خودمان, خویش, خویشتن, دیگران, دیگری, شما, ما, ماها, من, هم, همان, همانها, همدیگر, همه, همین, همینان, هیچ, وی, چقدر, چنان, چنین, چه, چی, کجا, کدام, کس, که, کو, کی, یکدیگر</li>
</ul>

<ul>
<li>This corpus contains 60 lemmas tagged as determiners (DET): آن, ابن, ان, اندکی, اکثر, این, بدین, برخی, بسی, بسیار, بسیاری, بعضی, تعداد, تعدادی, تنها, تک, خیلی, دو, دین, دیگر, ساعت‌ها, سالیان, سراسر, عجب, عده, عده‌ای, فلان, مدت‌ها, مقدار, مقداری, هر, هرچه, هزار, هزاران, همان, همه, همین, هوار, هیچ, پاره, چقدر, چنان, چند, چندان, چندصد, چندمین, چندی, چندین, چنین, چه, چگونه, کدام, کدامین, کلیه, کمتر, کمی, گاهی, گروه, گروهی, یک</li>
</ul>

<ul>
<li>Out of the above, 12 lemmas occurred sometimes as PRON and sometimes as DET: آن, این, بعضی, همان, همه, همین, هیچ, چقدر, چنان, چنین, چه, کدام</li>
</ul>

<ul>
<li>This corpus contains 21 lemmas tagged as auxiliaries (AUX): #است, #توان, #هست, باز#خواست#خواه, بایست#باید, بر#خواست#خواه, بود#باش, توانست#توان, خواست#خواه, داد#ده, داشت#دار, در#خواست#خواه, شایست#شاید, شد#شد, شد#شو, فرا#خواست#خواه, فرو#خواست#خواه, وا#خواست#خواه, ور#خواست#خواه, کرد#کن, گشت#گرد</li>
</ul>

<ul>
<li>Out of the above, 11 lemmas occurred sometimes as AUX and sometimes as VERB: #توان, بایست#باید, بود#باش, توانست#توان, خواست#خواه, داد#ده, داشت#دار, شایست#شاید, شد#شو, کرد#کن, گشت#گرد</li>
</ul>

<ul>
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: خواهد, خواهند, خواهم, خواهیم, خواهید, نخواهد, خواهی, نخواهم, نخواهند, نخواهیم</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: شده, شده‌اند, نشده, می‌شده, نشده‌اند</li>
    <li>VERB: کرده, کرده‌اند, شده, داده, کرده‌ام, کرده‌ایم, داشته, کرده‌اید, آمده, زده</li>
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
      <li>AUX: خواهند, بودند, باشند, خواهیم, هستند, باشید, بودیم, خواهید, ند, باشیم</li>
      <li>AUX-Fin: خواهند, خواهیم, خواهید, نخواهند, نخواهیم, نخواهید, درخواهند, برخواهند, بازخواهند, برخواهیم</li>
      <li>AUX-Part: شده‌اند, نشده‌اند</li>
      <li>NOUN: مردم, همهٔ, تمام, همه, کسانی, دیگران, افراد, حقوق, بسیاری, کشورهای</li>
      <li>NUM: هزار, میلیون</li>
      <li>PRON: ما, آنها, شما, شان, تان, مان, آنان, خود, ایشان, آن‌ها</li>
      <li>PROPN: ملل, طالبان, امور, ایالات, علوم, منافقین, پاسداران, اطلاعات, دختران, تیم‌های</li>
      <li>VERB: کنید, می‌کنند, کرده‌اند, کردند, کنند, می‌کنیم, می‌کردند, کنیم, می‌کنید, نکنید</li>
      <li>VERB-Part: کرده‌اند, کرده‌ایم, کرده‌اید, داده‌اند, شده‌اند, داشته‌اند, گرفته‌اند, زده‌اند, داده‌ایم, کرده</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: نوزادی‌</li>
      <li>ADP: جلوی, حدود, پیش</li>
      <li>AUX: است, بود, خواهد, باشد, خواهم, نیست, ست, بودم, شد, می‌شود</li>
      <li>AUX-Fin: خواهد, خواهم, نخواهد, خواهی, نخواهم, درخواهد, فروخواهد, برخواهد, بازخواهد, بازخواهم</li>
      <li>AUX-Part: شده, نشده, می‌شده</li>
      <li>NOUN: سال, کار, کسی, دست, روز, خدا, سر, صورت, کشور, بار</li>
      <li>NUM: هزار, میلیون, میلیارد, صد, 251, 950, بیلیون</li>
      <li>PRON: آن, او, ش, این, من, م, تو, ت, خود, وی</li>
      <li>PROPN: ایران, امام, آمریکا, قرآن, علی, جهان, تهران, پیامبر, حسین, افغانستان</li>
      <li>PUNCT: سطح, چیزی</li>
      <li>SCONJ: اگر</li>
      <li>VERB: کرد, کرده, می‌کند, شد, کند, می‌کرد, شده, می‌شود, داد, داشت</li>
      <li>VERB-Part: کرده, شده, داده, کرده‌ام, داشته, آمده, زده, گرفته, بوده, آورده</li>
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
      <li>AUX: نباید, نیست, نمی‌توان, نبود, نخواهد, نخواهم, نخواهند, نباشد, نیستند, نخواهیم</li>
      <li>AUX-Fin: نخواهد, نخواهم, نخواهند, نخواهیم, نخواهید, برنخواهند, نخواهی, برنخواهد, خواهد, نمی‌خواهد</li>
      <li>AUX-Part: نشده, نشده‌اند</li>
      <li>VERB: نکنید, ندارد, نمی‌تواند, نکرده, نکند, نمی‌شود, نداشته, نداشت, نمی‌کند, ندارند</li>
      <li>VERB-Part: نکرده, نشده, نداشته, نکرده‌اند, نداده, نبوده, نداشته‌اند, نتوانسته, نکرده‌ام, نکرده‌ایم</li>
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
      <li>VERB: کنید, کن, نکنید, بکنید, بزنید, بدهید, دهید, بگیرید, نکن, بگذارید</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: باشد, باشند, باشم, باشید, باشیم, شود, باشی, شوند, نشود, بشود</li>
      <li>VERB: بماند</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: خواهد, خواهند, خواهم, خواهیم, خواهید, نخواهد, خواهی, نخواهم, نخواهند, نخواهیم</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: بود, بودند, شد, بودم, بودیم, شده, بودی, بودید, شدند, می‌شد</li>
      <li>VERB: کرد, کرده, شد, داد, کردند, داشت, شده, داده, داشته, زد</li>
      <li>VERB-Part: کرده, شده, داده, داشته, بوده, زده, گرفته, آمده, آورده, رفته</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: است, باشد, باشند, می‌شود, باشم, باشید, باشیم, شود, می‌شوند, باشی</li>
      <li>VERB: می‌کند, می‌کنند, می‌شود, کنید, دارد, می‌کنیم, می‌کنید, می‌کنم, کن, نکنید</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX: دارد, داشت, دارید, دارم, داریم, داشتم, داری, دارند, داشتند, داشتیم</li>
      <li>VERB: کرد, کرده, می‌کند, شد, کنید, می‌کنند, کند, می‌کرد, شده, کرده‌اند</li>
      <li>VERB-Part: کرده, کرده‌اند, شده, کرده‌ام, کرده‌ایم, داده, داشته, کرده‌اید, آمده, زده</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX-Part: شده, شده‌اند, نشده, می‌شده, نشده‌اند</li>
      <li>VERB: داده, زده, گرفته, دیده, گفته, گذاشته, ساخته, کشیده, برده, گردید</li>
      <li>VERB-Part: داده, ساخته, شده, گرفته, برده, خورده‌اند, نهاده, شکسته, کشته, گردیده</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: ش, م, شان, تان, مان, ت, اش, ام, یش, ات</li>
    </ul>
  </li>
</ul>




<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: خواهم, خواهیم, بودم, بودیم, باشم, باشیم, م, هستیم, هستم, یم</li>
      <li>AUX-Fin: خواهم, خواهیم, نخواهم, نخواهیم, بازخواهم, برخواهم, برخواهیم, درخواهیم, درخواهم, فراخواهیم</li>
      <li>PRON: ما, من, م, مان, خود, ام, یم, یمان, او, بنده</li>
      <li>VERB: می‌کنیم, کردم, کنیم, می‌کنم, کردیم, کرده‌ام, کنم, کرده‌ایم, می‌کردم, دارم</li>
      <li>VERB-Part: کرده‌ام, کرده‌ایم, داده‌ایم, داده‌ام, داشته‌ام, داشته‌ایم, شده‌ام, آورده‌ام, زده‌ام, گرفته‌ایم</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: باشید, خواهید, خواهی, هستید, بودی, بودید, باش, باشی, هستی, ی</li>
      <li>AUX-Fin: خواهید, خواهی, نخواهید, برخواهی, بازخواهی, برخواهید, نخواهی, درخواهی, درخواهید</li>
      <li>PRON: شما, تو, تان, ت, خود, ات, یت, یتان, شماها, شماهایی</li>
      <li>VERB: کنید, می‌کنید, نکنید, بکنید, کن, بزنید, کرده‌اید, بدهید, می‌توانید, کردی</li>
      <li>VERB-Part: کرده‌اید, داده‌اید, زده‌اید, کرده‌ای, گرفته‌اید, آورده‌اید, داشته‌اید, دیده‌اید, شده‌اید, شنیده‌اید</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: است, بود, خواهد, خواهند, باشد, بودند, باشند, نیست, ست, هستند</li>
      <li>AUX-Fin: خواهد, خواهند, نخواهد, نخواهند, درخواهد, فروخواهد, برخواهد, درخواهند, بازخواهد, برخواهند</li>
      <li>AUX-Part: شده, شده‌اند, نشده, می‌شده, نشده‌اند</li>
      <li>PRON: او, ش, آنها, شان, وی, آنان, خود, اش, ایشان, یش</li>
      <li>VERB: کرد, کرده, می‌کند, شد, می‌کنند, کند, می‌کرد, شده, کرده‌اند, می‌شود</li>
      <li>VERB-Part: کرده, کرده‌اند, شده, داده, داشته, آمده, زده, داده‌اند, گرفته, شده‌اند</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: #است، بود#باش، #هست.</li>
</ul>

<ul>
<li>This corpus uses 20 lemmas as auxiliaries (<a>aux</a>). Examples: خواست#خواه، بود#باش، #است، بایست#باید، #توان، داشت#دار، بر#خواست#خواه، در#خواست#خواه، کرد#کن، توانست#توان، باز#خواست#خواه، شد#شو، فرو#خواست#خواه، فرا#خواست#خواه، وا#خواست#خواه، داد#ده، شایست#شاید، شد#شد، ور#خواست#خواه، گشت#گرد.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: شد#شو.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (13305)</li>
      <li>VERB--NOUN-ADP(در) (1)</li>
      <li>VERB--NOUN-ADP(مثل) (1)</li>
      <li>VERB--NOUN-ADP(میان) (1)</li>
      <li>VERB--NOUN-ADP(همراه) (1)</li>
      <li>VERB--NOUN-ADP(پیش)-ADP(از) (1)</li>
      <li>VERB--PRON (3304)</li>
      <li>VERB-Part--NOUN (2019)</li>
      <li>VERB-Part--PRON (468)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (4770)</li>
      <li>VERB--NOUN-ADP(از)-ADP(را) (3)</li>
      <li>VERB--NOUN-ADP(بین)-ADP(را) (1)</li>
      <li>VERB--NOUN-ADP(تا)-ADP(را) (5)</li>
      <li>VERB--NOUN-ADP(توی)-ADP(را) (2)</li>
      <li>VERB--NOUN-ADP(جز)-ADP(را) (1)</li>
      <li>VERB--NOUN-ADP(جلو)-ADP(را) (7)</li>
      <li>VERB--NOUN-ADP(جلوی)-ADP(را) (2)</li>
      <li>VERB--NOUN-ADP(را) (10442)</li>
      <li>VERB--NOUN-ADP(را)-ADP(و) (4)</li>
      <li>VERB--NOUN-ADP(را)-ADP(که) (1)</li>
      <li>VERB--NOUN-ADP(رو) (4)</li>
      <li>VERB--NOUN-ADP(روی)-ADP(را) (1)</li>
      <li>VERB--NOUN-ADP(سوء)-ADP(را) (1)</li>
      <li>VERB--PRON (181)</li>
      <li>VERB--PRON-ADP(بین)-ADP(را) (2)</li>
      <li>VERB--PRON-ADP(جز)-ADP(را) (2)</li>
      <li>VERB--PRON-ADP(جلو)-ADP(را) (2)</li>
      <li>VERB--PRON-ADP(را) (1786)</li>
      <li>VERB--PRON-ADP(را)-ADP(و) (3)</li>
      <li>VERB--PRON-ADP(روی)-ADP(را) (1)</li>
      <li>VERB--PRON-ADP(میان)-ADP(را) (1)</li>
      <li>VERB-Part--NOUN (532)</li>
      <li>VERB-Part--NOUN-ADP(را) (1287)</li>
      <li>VERB-Part--NOUN-ADP(مورد)-ADP(را) (1)</li>
      <li>VERB-Part--PRON (18)</li>
      <li>VERB-Part--PRON-ADP(را) (211)</li>
      <li>VERB-Part--PRON-ADP(را)-ADP(و) (1)</li>
      <li>VERB-Part--PRON-ADP(پیرامون)-ADP(را) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (6)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>aux:pass</a>, <a>compound:lv</a>, <a>compound:lvc</a>, <a>flat:name</a>, <a>flat:num</a>, <a>nsubj:pass</a>, <a>obl:arg</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>expl</a>, <a>dislocated</a>, <a>discourse</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>reparandum</a></li>
</ul>
