---
layout: base
title:  'UD_Ancient_Hebrew-PTNK'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Ancient Hebrew PTNK

Language: [Ancient Hebrew](/hbo/index.html) (code: `hbo`)<br/>
Family: Afro-Asiatic, Semitic

This treebank has been part of Universal Dependencies since the UD v2.10 release.

The following people have contributed to making this treebank part of UD: Daniel Swanson.

Repository: [UD_Ancient_Hebrew-PTNK](https://github.com/UniversalDependencies/UD_Ancient_Hebrew-PTNK)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhbo_ptnk212)<br />
Download all treebanks: [UD 2.12](/#download)

License: CC BY-NC 4.0

Genre: bible

Questions, comments?
General annotation questions (either Ancient Hebrew-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Ancient_Hebrew-PTNK/issues).
If you want to collaborate, please contact [awesomeevildudes&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually, natively in UD style |

## Description

UD Ancient Hebrew PTNK contains portions of the Biblia Hebraic Stuttgartensia with morphological annotations from [ETCBC](https://github.com/etcbc/bhsa).



This treebank contains portions of the Hebrew Bible as digitized and annotated in the [Biblia Hebraica Stuttgartensia (Amstelodamensis)](http://dx.doi.org/10.17026%2Fdans-z6y-skyh) by the [Eep Talstra Centre for Bible and Computer](http://etcbc.nl) at Vrije Universiteit Amsterdam. Those annotations are licensed under [Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/).

The corpus can be found at [github.com/etcbc/bhsa](https://github.com/etcbc/bhsa). The dependency annotations were generated using VISL CG-3 and manually verified by Daniel Swanson. The code for generating them can be found at [https://github.com/mr-martian/hbo-UD](https://github.com/mr-martian/hbo-UD). Errors in the data should be reported to that repository.

## Acknowledgments

...

## References

```
@inproceedings{swanson-tyers-2022-universal,
title = "A {U}niversal {D}ependencies Treebank of {A}ncient {H}ebrew",
author = "Swanson, Daniel and
Tyers, Francis",
booktitle = "Proceedings of the Thirteenth Language Resources and Evaluation Conference",
month = jun,
year = "2022",
address = "Marseille, France",
publisher = "European Language Resources Association",
url = "https://aclanthology.org/2022.lrec-1.252",
pages = "2353--2361",
abstract = "In this paper we present the initial construction of a Universal Dependencies treebank with morphological annotations of Ancient Hebrew containing portions of the Hebrew Scriptures (1579 sentences, 27K tokens) for use in comparative study with ancient translations and for analysis of the development of Hebrew syntax. We construct this treebank by applying a rule-based parser (300 rules) to an existing morphologically-annotated corpus with minimal constituency structure and manually verifying the output and present the results of this semi-automated annotation process and some of the annotation decisions made in the process of applying the UD guidelines to a new language.",
}
```


# Statistics of UD Ancient Hebrew PTNK

## POS Tags

[ADJ](hbo_ptnk-pos-ADJ.html) – [ADP](hbo_ptnk-pos-ADP.html) – [ADV](hbo_ptnk-pos-ADV.html) – [AUX](hbo_ptnk-pos-AUX.html) – [CCONJ](hbo_ptnk-pos-CCONJ.html) – [DET](hbo_ptnk-pos-DET.html) – [INTJ](hbo_ptnk-pos-INTJ.html) – [NOUN](hbo_ptnk-pos-NOUN.html) – [NUM](hbo_ptnk-pos-NUM.html) – [PART](hbo_ptnk-pos-PART.html) – [PRON](hbo_ptnk-pos-PRON.html) – [PROPN](hbo_ptnk-pos-PROPN.html) – [PUNCT](hbo_ptnk-pos-PUNCT.html) – [SCONJ](hbo_ptnk-pos-SCONJ.html) – [VERB](hbo_ptnk-pos-VERB.html)

## Features

[Aspect](hbo_ptnk-feat-Aspect.html) – [Gender](hbo_ptnk-feat-Gender.html) – [HebBinyan](hbo_ptnk-feat-HebBinyan.html) – [Mood](hbo_ptnk-feat-Mood.html) – [Number](hbo_ptnk-feat-Number.html) – [NumType](hbo_ptnk-feat-NumType.html) – [Person](hbo_ptnk-feat-Person.html) – [Polarity](hbo_ptnk-feat-Polarity.html) – [PronType](hbo_ptnk-feat-PronType.html) – [Tense](hbo_ptnk-feat-Tense.html) – [VerbForm](hbo_ptnk-feat-VerbForm.html) – [Voice](hbo_ptnk-feat-Voice.html)

## Relations

[acl](hbo_ptnk-dep-acl.html) – [advcl](hbo_ptnk-dep-advcl.html) – [advmod](hbo_ptnk-dep-advmod.html) – [amod](hbo_ptnk-dep-amod.html) – [appos](hbo_ptnk-dep-appos.html) – [case](hbo_ptnk-dep-case.html) – [cc](hbo_ptnk-dep-cc.html) – [ccomp](hbo_ptnk-dep-ccomp.html) – [compound:smixut](hbo_ptnk-dep-compound-smixut.html) – [conj](hbo_ptnk-dep-conj.html) – [cop](hbo_ptnk-dep-cop.html) – [csubj](hbo_ptnk-dep-csubj.html) – [det](hbo_ptnk-dep-det.html) – [discourse](hbo_ptnk-dep-discourse.html) – [dislocated](hbo_ptnk-dep-dislocated.html) – [fixed](hbo_ptnk-dep-fixed.html) – [flat](hbo_ptnk-dep-flat.html) – [flat:name](hbo_ptnk-dep-flat-name.html) – [mark](hbo_ptnk-dep-mark.html) – [nmod](hbo_ptnk-dep-nmod.html) – [nmod:poss](hbo_ptnk-dep-nmod-poss.html) – [nsubj](hbo_ptnk-dep-nsubj.html) – [nsubj:outer](hbo_ptnk-dep-nsubj-outer.html) – [nummod](hbo_ptnk-dep-nummod.html) – [obj](hbo_ptnk-dep-obj.html) – [obl](hbo_ptnk-dep-obl.html) – [orphan](hbo_ptnk-dep-orphan.html) – [parataxis](hbo_ptnk-dep-parataxis.html) – [punct](hbo_ptnk-dep-punct.html) – [root](hbo_ptnk-dep-root.html) – [vocative](hbo_ptnk-dep-vocative.html) – [xcomp](hbo_ptnk-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1579 sentences, 26846 tokens and 39036 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 7974 tokens (30%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 1 types of words that contain both letters and punctuation. Examples: כְּדָר־לָעֹ֔מֶר</li>
</ul>

<ul>
<li>This corpus contains 10871 multi-word tokens. On average, one multi-word token consists of 2.12 syntactic words.</li>
<li>There are 6643 types of multi-word tokens. Examples: וְאֶת, וַיֹּ֣אמֶר, וַיֹּ֤אמֶר, וַיֹּ֥אמֶר, הָאָֽרֶץ, וְכָל, וַיֹּ֨אמֶר֙, וַיֹּ֨אמֶר, וַיֹּ֕אמֶר, וַיֹּ֖אמֶר, וַֽיְהִי, שְׁמֹ֖ו, הָאָ֑רֶץ, בְּאֶ֣רֶץ, וַיֹּ֗אמֶר, לֹ֔ו, הָאָ֖רֶץ, לֹ֖ו, הָאָ֔רֶץ, בְּכָל, וַיְהִ֗י, וַיֹּ֥ולֶד, אֹתֹ֖ו, וְאִם, וְלֹֽא, וְאֶל, וּבָנֹֽות, אָבִ֑יו, בְּאֶ֥רֶץ, הֹולִידֹ֣ו, וְלֹ֥א, וַיֹּ֖ולֶד, וַתֹּ֣אמֶר, וַיִּקְרָ֥א, כַּאֲשֶׁ֥ר, לֹ֥ו, וְאֵ֖ת, וַֽיְחִי, וַתִּקְרָ֥א, לְךָ֖, אֵלָיו֙, הַזֶּ֔ה, וְהִנֵּ֥ה, וַתֵּ֣לֶד, לִ֖י, אֵלָ֔יו, הַשָּׁמַ֔יִם, וַיְהִ֣י, וַיִּתֶּן, לֹו֙.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SYM, X</li>
</ul>

<ul>
<li>This corpus contains 18 word types tagged as particles (PART): אֵ֖י, אֵֽי, אַיֵּ֖ה, אַיֵּ֧ה, אי, איה, אין, ה, לָ֖מָּה, לָ֚מָּה, לָ֛מָּה, לָ֣מָּה, לָ֤מָּה, לָ֥מָּה, לָ֧מָּה, לָמָ֤ה, לָמָ֥ה, למה</li>
</ul>

<ul>
<li>This corpus contains 22 lemmas tagged as pronouns (PRON): אל, אלה, אנחנו, אני, אנכי, את, אתה, אתם, אתן, אתנה, הוא, היא, הם, המה, הן, הנה, זאת, זה, לזה, מה, מי, נחנו</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as determiners (DET): ה</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): היה</li>
</ul>

<ul>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: היה, יִהְיֶ֣ה, הָיָ֥ה, הָיָ֖ה, הָיָ֔ה, יְהִ֥י, הָי֥וּ, הָיְתָ֥ה, הָיוּ֙, יִהְיֶ֖ה</li>
    <li>VERB: אמר, בוא, לקח, קרא, נתן, ראה, ילד, הלך, ברך, חיה</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: היה, הֱיֹ֣ות, הֱיֹ֥ות, הָיֹ֧ו</li>
    <li>VERB: ילד, בוא, ראה, דבר, עשׂה, קרא, אכל, נתן, לקח, שׁבר</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>NOUN: מות, שׁקה, קצר, גאל, טלא, רֹעֵ֣י, איב, בָּאֵ֥י, ברך, גֹּאֵ֖ל</li>
    <li>VERB: בוא, רמשׂ, הלך, עלה, יֹשֵׁ֖ב, יֹשֵׁ֥ב, מצא, נצב, עֹשֶֽׂה, עֹשֶׂ֖ה</li>
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
      <li>ADJ: טוב, מואבי, צעיר, חַיָּ֖ה, בריא, חַיָּ֔ה, טהר, מצרי, רָעָ֖ה, אֲחֵרֹֽות</li>
      <li>AUX-Fin: היה, הָיְתָ֥ה, הֲיִ֖י, הָֽיְתָ֔ה, הָֽיְתָ֖ה, הָֽיְתָה, הָיְתָ֖ה, הָיְתָ֣ה, הָיְתָה, הָיִ֖ית</li>
      <li>NOUN: ארץ, אשׁה, יד, בת, עין, שָׁנָ֑ה, עיר, צאן, אדמה, אם</li>
      <li>NOUN-Part: זנה, ילד, אמן, בְּעֻ֥לַת, בוא, טלא, מְשֻׁלֶּ֔שֶׁת, מְשֻׁלֶּ֖שֶׁת, מֵינִיקֹ֛ות, מֵתָ֥ה</li>
      <li>NUM: מֵאֹ֖ות, מאה, שׁנים, שׁבע, אחד, שְׁתֵּ֣י, מֵאָ֥ה, מֵאֹות֙, שְׁלֹשָׁ֣ה, חמשׁ</li>
      <li>PRON: היא, את, הן, זאת, הִ֖וא, הִ֑וא, זֹ֑את, זֹ֣את, הִ֔וא, הִ֣וא</li>
      <li>PROPN: רחל, לֵאָ֔ה, שׂרה, רבקה, שָׂרָ֖ה, לאה, רָחֵ֔ל, רָחֵ֖ל, שָׂרַ֣י, לֵאָ֖ה</li>
      <li>VERB-Fin: אמר, ילד, קרא, הרה, הלך, בוא, ראה, לקח, ישׁב, אכל</li>
      <li>VERB-Part: בָּאָ֖ה, בוא, עֹלֹת֙, צֹמְחֹ֖ות, רמשׂ, שְׂנוּאָ֣ה, אֲרוּרָ֤ה, אֹהֶ֥בֶת, אֹחֶ֨זֶת֙, בְּרוּכָ֨ה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: קטן, גדול, חתי, טוב, רע, ארמי, גָּדֹ֖ול, טֹ֣וב, כָבֵ֥ד, אַחֵ֔ר</li>
      <li>AUX-Fin: היה, יִהְיֶ֣ה, הָיָ֥ה, הָיָ֖ה, הָיָ֔ה, יְהִ֥י, יִהְיֶ֖ה, יִהְיֶה, הָיָ֑ה, הָיָ֣ה</li>
      <li>NOUN: אב, כָּל, בן, אח, כל, פנה, אישׁ, שׁם, יום, בית</li>
      <li>NOUN-Part: מות, שׁקה, קצר, גאל, טלא, רֹעֵ֣י, איב, בָּאֵ֥י, ברך, גֹּאֵ֖ל</li>
      <li>NUM: שׁלישׁי, אַרְבָּעִ֣ים, עשׂרים, ראשׁון, שְׁלֹשִׁ֣ים, שׁלשׁ, שׁשׁ, חֲמִשִּׁ֥ים, שׁני, ארבע</li>
      <li>PRON: הוא, אתה, הם, אתם, זה, ה֖וּא, ה֣וּא, ה֥וּא, הֽוּא, ה֑וּא</li>
      <li>PROPN: יעקב, יַעֲקֹ֖ב, יֹוסֵ֔ף, יֹוסֵ֖ף, יְהוָה֙, אברהם, יַעֲקֹ֔ב, יהוה, אַבְרָהָ֖ם, יְהוָ֔ה</li>
      <li>VERB-Fin: אמר, בוא, לקח, קרא, ראה, נתן, הלך, ילד, חיה, שׁלח</li>
      <li>VERB-Part: בוא, הלך, רמשׂ, יֹשֵׁ֖ב, יֹשֵׁ֥ב, נצב, עֹשֶֽׂה, עֹשֶׂ֖ה, עלה, ראה</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>NOUN: עין, יד, רגל, אזן, אף, אַפַּ֖יִם, ברך, כף, צהרים, בִּרְכֵּ֥י</li>
      <li>NUM: שׁנים, שְׁתֵּ֣י, שְׁנֵ֤י, מאה, שְׁנֵ֣י, שְׁנֵֽי, שְׁנֵים, שְׁתֵּ֥י, שְׁנֵ֣ים, שְׁנַ֖יִם</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: טוב, בריא, כֵּנִ֣ים, נְקֻדִּ֖ים, עֲקֻדִּ֥ים, רע, אֲחֵרִ֑ים, אֲחֵרֹֽות, ברד, גדול</li>
      <li>AUX-Fin: היה, הָי֥וּ, הָיוּ֙, הָי֣וּ, הָ֑יוּ, הָי֔וּ, הָי֖וּ, הָי֗וּ, הָי֛וּ, הָי֤וּ</li>
      <li>NOUN: פנה, בן, אח, בת, אלהים, אֱלֹהִ֖ים, מים, שׁמים, אישׁ, עבד</li>
      <li>NOUN-Part: קצר, שׁקה, טלא, רֹעֵ֣י, איב, בָּאֵ֥י, ברך, יֹצְאֵ֖י, מְרַגְּלִֽים, מות</li>
      <li>NUM: מֵאֹ֖ות, אַרְבָּעִ֣ים, עשׂרים, שְׁלֹשִׁ֣ים, שׁלשׁ, שׁשׁ, חֲמִשִּׁ֥ים, ארבע, מֵאֹות֙, שׁמנה</li>
      <li>PRON: הם, אתם, אנחנו, אלה, הן, אֵ֣לֶּה, אֵ֖לֶּה, אֵ֚לֶּה, אל, אֲנַ֖חְנוּ</li>
      <li>PROPN: אַשּׁוּרִ֥ם, חֻשִֽׁים, כַּסְלֻחִ֗ים, לְהָבִ֖ים, לאמים, לוּדִ֧ים, לטושׁים, נַפְתֻּחִֽים, עֲנָמִ֛ים, פַּתְרֻסִ֞ים</li>
      <li>VERB-Fin: אמר, בוא, הלך, לקח, ירד, אכל, חוה, רבה, ישׁב, נשׂא</li>
      <li>VERB-Part: עלה, בוא, יֹצְאֵ֣י, עֹלֹת֙, צֹמְחֹ֖ות, אֲסוּרִ֑ים, אֲסוּרִ֖ים, אֹֽמְרִ֔ים, אכל, בָּאִ֖ים</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: קטן, גדול, חתי, טוב, צעיר, ארמי, מואבי, רע, גָּדֹ֖ול, חַיָּ֖ה</li>
      <li>AUX-Fin: היה, יִהְיֶ֣ה, הָיָ֥ה, הָיָ֖ה, הָיָ֔ה, יְהִ֥י, הָיְתָ֥ה, יִהְיֶ֖ה, יִהְיֶה, הָיָ֑ה</li>
      <li>NOUN: ארץ, אב, כָּל, כל, אשׁה, בן, שׁם, אח, בית, יד</li>
      <li>NOUN-Part: מות, גאל, גֹּאֵ֖ל, גֹאֵ֖ל, זנה, טלא, ילד, פתר, קֹנֵ֖ה, אמן</li>
      <li>NUM: אחד, שֶׁ֣בַע, שׁבע, מאה, ראשׁון, שׁני, ארבע, שׁלישׁי, תשׁע, חָמֵ֥שׁ</li>
      <li>PRON: הוא, אני, אתה, היא, את, זה, זאת, ה֖וּא, ה֣וּא, ה֥וּא</li>
      <li>PROPN: יעקב, מצרים, יַעֲקֹ֖ב, יֹוסֵ֔ף, יֹוסֵ֖ף, כְּנָ֑עַן, יְהוָה֙, מִצְרַ֔יִם, מִצְרָֽיִם, אברהם</li>
      <li>VERB-Fin: אמר, קרא, נתן, לקח, ראה, בוא, ילד, הלך, ברך, חיה</li>
      <li>VERB-Part: רמשׂ, הלך, בוא, יֹשֵׁ֖ב, יֹשֵׁ֥ב, עֹשֶֽׂה, עֹשֶׂ֖ה, ראה, שׁוב, אָר֣וּר</li>
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
      <li>ADV: לא, אַל, לֹ֣א, לֹ֥א, לֹֽא, לֹא, לֹ֤א, לֹ֨א, אל, לֹ֕א</li>
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
      <li>AUX-Fin: היה, יִהְיֶ֣ה, יְהִ֥י, יִהְיֶ֖ה, יִהְיֶה, יִהְיֶ֥ה, תִּהְיֶ֣ה, אֶֽהְיֶ֔ה, יְהִ֣י, יְהִ֤י</li>
      <li>VERB-Fin: נתן, ברך, הלך, חיה, אכל, ירשׁ, עשׂה, קבר, ראה, שׂים</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: היה, הָיָ֥ה, הָיָ֖ה, הָיָ֔ה, הָי֥וּ, הָיְתָ֥ה, הָיוּ֙, הָי֣וּ, הָיָ֑ה, הָיָ֣ה</li>
      <li>VERB-Fin: נתן, אמר, ברך, לקח, אכל, בוא, שׁוב, נָתַ֥ן, אָמַ֣ר, הֹולִ֥יד</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: היה, הֱוֵ֤ה, הֲיִ֖י</li>
      <li>VERB-Fin: הלך, עשׂה, שׁמע, רבה, לקח, בוא, שׁלח, הָֽבָה, יצא, לְכ֣וּ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: היה, יִהְיֶ֣ה, הָיָ֥ה, הָיָ֖ה, הָיָ֔ה, יְהִ֥י, הָי֥וּ, הָיְתָ֥ה, הָיוּ֙, יִהְיֶ֖ה</li>
      <li>VERB-Fin: אמר, בוא, קרא, לקח, נתן, ראה, ילד, הלך, ברך, חיה</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: היה</li>
      <li>VERB-Fin: אמר, בוא, קרא, ילד, לקח, ראה, הלך, נתן, חיה, ישׁב</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>NOUN-Part: טלא, קשׁר, בְּעֻ֥לַת, בְּר֣וּךְ, בְּר֥וּךְ, מְשֻׁלֶּ֔שֶׁת, מְשֻׁלֶּ֖שֶׁת, מְשֻׁלָּ֑שׁ, שְׁדֻפֹ֖ות, שְׁדֻפֹ֣ות</li>
      <li>VERB-Part: אָר֣וּר, אָר֤וּר, בָּר֤וּךְ, בָּר֥וּךְ, שְׂנוּאָ֣ה, אֲסוּרִ֑ים, אֲסוּרִ֖ים, אֲרוּרָ֤ה, אָס֥וּר, אָר֔וּר</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Art
    <ul>
      <li>DET: ה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>PRON: זה, אלה, זאת, אֵ֣לֶּה, אֵ֖לֶּה, אֵ֚לֶּה, זֹ֑את, זֹ֣את, זֶ֖ה, אל</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: מַה, מִי, מִ֥י, מָ֣ה, מה, מי, מִֽי, מִ֣י, מֶ֣ה, מָ֥ה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: הוא, אני, אתה, הם, היא, אתם, אנחנו, את, הן, ה֖וּא</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: שׁנים, מֵאֹ֖ות, אחד, שׁבע, שֶׁ֣בַע, מאה, שׁלשׁ, ארבע, שׁשׁ, שׁמנה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: ראשׁון, שׁלישׁי, שׁני, שׁביעי, חֲמִישִֽׁי, עשׂירי, שֵׁנִ֖י, רְבִיעִ֖י, רְבִיעִֽי, רִֽאשֹׁנָ֑ה</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: היה, אֶֽהְיֶ֔ה, הָיִ֖ינוּ, הָיִ֖יתִי, הָיִ֤יתִי, הָיִ֧יתִי, נִֽהְיֶ֥ה, נִהְיֶ֣ה</li>
      <li>PRON: אני, אנחנו, אָנֹכִ֖י, אנכי, אֲנִ֣י, אֲנִי֙, אָנֹכִי֙, אָנֹ֑כִי, אָנֹכִ֥י, אָנֹכִ֛י</li>
      <li>VERB-Fin: נתן, אמר, ברך, ראה, שׂים, הלך, קום, אכל, בוא, שׁוב</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: היה, הֱוֵ֤ה, הֲיִ֖י, הָיִ֖ית, הָיִ֖יתָ, תִּֽהְיֶ֥ה, תִּהְי֣וּ, תִּהְי֥וּ, תִּהְיֶ֣ה</li>
      <li>PRON: אתה, אתם, את, אַתָּ֥ה, אַתָּה֙, אַתָּ֖ה, אַ֔תָּה, אַתָּ֣ה, אָ֑תָּה, אַתֶּ֑ם</li>
      <li>VERB-Fin: הלך, לקח, עשׂה, בוא, אמר, שׁמע, אכל, ירד, עָשִׂ֣יתָ, רבה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: היה, יִהְיֶ֣ה, הָיָ֥ה, הָיָ֖ה, הָיָ֔ה, יְהִ֥י, הָי֥וּ, הָיְתָ֥ה, הָיוּ֙, יִהְיֶ֖ה</li>
      <li>PRON: הוא, הם, היא, הן, ה֖וּא, ה֣וּא, ה֥וּא, הִ֖וא, הֽוּא, ה֑וּא</li>
      <li>VERB-Fin: אמר, בוא, קרא, ילד, לקח, ראה, נתן, הלך, ברך, חיה</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>HebBinyan</a>
    <ul>
      <li>HIFIL
        <ul>
          <li>NOUN-Part: שׁקה, ליץ, מֵינִיקֹ֛ות, מַצְלִ֑יחַ, נכר, שׁוב</li>
          <li>VERB-Fin: ילד, בוא, נגד, יצא, שׁוב, שׁקה, ירד, שׁכם, הֹולִ֥יד, יסף</li>
          <li>VERB-Inf: ילד, חיה, אור, בדל, מות, נגד, נכה, קום, שׁוב, שׁקה</li>
          <li>VERB-Part: מְרִיקִ֣ים, מֵבִ֨יא, מֵקִ֛ים, מֵשִׁ֗יב, מַבְדִּ֔יל, מַגִּ֖יד, מַגִּ֣יעַ, מַזְכִּ֥יר, מַזְרִ֣יעַ, מַזְרִ֤יעַ</li>
        </ul>
      </li>
      <li>HITPAEL
        <ul>
          <li>VERB-Fin: ברך, הלך, עצב, פלל, אֶתְנָהֲלָ֣ה, אבל, אפק, גלה, הִֽתְהַלֶּךְ, הִֽתְעַשְּׂק֖וּ</li>
          <li>VERB-Inf: אפק, גלל, חנן, ידע, נחם, נפל</li>
          <li>VERB-Part: הפך, מִשְׁתָּאֵ֖ה, מִתְאַמֶּ֥צֶת, מִתְהַלֵּ֥ךְ, מִתְנַחֵ֥ם</li>
        </ul>
      </li>
      <li>NIFAL
        <ul>
          <li>NOUN-Part: שׁאר, נָבֹ֣ון, נָבֹ֥ון</li>
          <li>VERB-Fin: ראה, אסף, שׁבע, יִמָּצְא֥וּן, ילד, ברך, נחם, שׁאר, אחז, הִמָּלֵ֣ט</li>
          <li>VERB-Inf: מול, ברא, אבק, הִגָּמֵ֥ל, הִמֹּ֥ול, הִפָּֽרֶד, הִשָּׁנֹ֧ות, הֵאָסֵ֣ף, ילד, מלט</li>
          <li>VERB-Part: נצב, מצא, נִצָּ֖ב, ראה, חמד, יכח, ילד, יתר, נִדְרָֽשׁ, נִכְבָּ֔ד</li>
        </ul>
      </li>
      <li>PAAL
        <ul>
          <li>AUX-Fin: היה, יִהְיֶ֣ה, הָיָ֥ה, הָיָ֖ה, הָיָ֔ה, יְהִ֥י, הָי֥וּ, הָיְתָ֥ה, הָיוּ֙, יִהְיֶ֖ה</li>
          <li>AUX-Inf: היה, הֱיֹ֣ות, הֱיֹ֥ות, הָיֹ֧ו</li>
          <li>NOUN-Part: מות, קצר, גאל, טלא, רֹעֵ֣י, איב, בָּאֵ֥י, גֹּאֵ֖ל, גֹאֵ֖ל, זנה</li>
          <li>VERB-Fin: אמר, לקח, קרא, נתן, ראה, בוא, הלך, חיה, עשׂה, ישׁב</li>
          <li>VERB-Inf: בוא, ראה, עשׂה, ילד, קרא, אכל, נתן, לקח, שׁבר, ישׁב</li>
          <li>VERB-Part: בוא, רמשׂ, הלך, עלה, יֹשֵׁ֖ב, יֹשֵׁ֥ב, עֹשֶֽׂה, עֹשֶׂ֖ה, אָר֣וּר, אָר֤וּר</li>
        </ul>
      </li>
      <li>PIEL
        <ul>
          <li>NOUN-Part: ברך, ילד, מְרַגְּלִֽים, חקק, צחק, קלל, תעע</li>
          <li>VERB-Fin: ברך, שׁלח, דבר, צוה, מהר, ספר, כלה, דִּבֶּ֥ר, לקט, מלא</li>
          <li>VERB-Inf: דבר, שׁחת, ברך, לקט, צחק, דַּבֵּ֥ר, חיה, יַחֵ֣ם, יַחֵם֮, יחם</li>
          <li>VERB-Part: דבר, טחה, כסה, מְאַלְּמִ֤ים, מְבַקֵּ֑שׁ, מְדַבֵּ֛ר, מְדַבֵּ֣ר, מְצַוָּ֥ה, מְצַחֵ֔ק, מְצַחֵֽק</li>
        </ul>
      </li>
      <li>PUAL
        <ul>
          <li>NOUN-Part: מְשֻׁלֶּ֔שֶׁת, מְשֻׁלֶּ֖שֶׁת, מְשֻׁלָּ֑שׁ, קשׁר</li>
          <li>VERB-Fin: יֻלַּד, יֻלַּ֖ד, כסה, גֻּנַּ֔בְתִּי, טֹרַ֖ף, טֹרָ֑ף, יֻלְּד֖וּ, יֻלְּד֥וּ, יֻלְּדָה֙, יֻלְּדוּ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: היה.</li>
</ul>

<ul>
<li>This corpus does not contain auxiliaries.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (661)</li>
      <li>VERB-Fin--NOUN-ADP(את) (3)</li>
      <li>VERB-Fin--PRON (132)</li>
      <li>VERB-Inf--NOUN (25)</li>
      <li>VERB-Inf--NOUN-ADP(את) (1)</li>
      <li>VERB-Inf--PRON (87)</li>
      <li>VERB-Part--NOUN (58)</li>
      <li>VERB-Part--PRON (76)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (560)</li>
      <li>VERB-Fin--NOUN-ADP(את) (393)</li>
      <li>VERB-Fin--NOUN-ADP(מן) (1)</li>
      <li>VERB-Fin--PRON (308)</li>
      <li>VERB-Fin--PRON-ADP(את) (144)</li>
      <li>VERB-Inf--NOUN (53)</li>
      <li>VERB-Inf--NOUN-ADP(את) (42)</li>
      <li>VERB-Inf--PRON (29)</li>
      <li>VERB-Inf--PRON-ADP(את) (22)</li>
      <li>VERB-Part--NOUN (24)</li>
      <li>VERB-Part--NOUN-ADP(את) (15)</li>
      <li>VERB-Part--PRON (5)</li>
      <li>VERB-Part--PRON-ADP(את) (9)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 4 relation subtypes: <a>compound:smixut</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:outer</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>compound</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>aux</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
