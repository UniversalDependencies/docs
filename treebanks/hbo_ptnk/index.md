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
Family: Afro-Asiatic

This treebank has been part of Universal Dependencies since the UD v2.10 release.

The following people have contributed to making this treebank part of UD: Daniel Swanson.

Repository: [UD_Ancient_Hebrew-PTNK](https://github.com/UniversalDependencies/UD_Ancient_Hebrew-PTNK)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhbo_ptnk216)<br />
Download all treebanks: [UD 2.16](/#download)

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

[Aspect](hbo_ptnk-feat-Aspect.html) – [ExtPos](hbo_ptnk-feat-ExtPos.html) – [Gender](hbo_ptnk-feat-Gender.html) – [HebBinyan](hbo_ptnk-feat-HebBinyan.html) – [Mood](hbo_ptnk-feat-Mood.html) – [Number](hbo_ptnk-feat-Number.html) – [NumType](hbo_ptnk-feat-NumType.html) – [Person](hbo_ptnk-feat-Person.html) – [Polarity](hbo_ptnk-feat-Polarity.html) – [PronType](hbo_ptnk-feat-PronType.html) – [Tense](hbo_ptnk-feat-Tense.html) – [VerbForm](hbo_ptnk-feat-VerbForm.html) – [Voice](hbo_ptnk-feat-Voice.html)

## Relations

[acl](hbo_ptnk-dep-acl.html) – [acl:relcl](hbo_ptnk-dep-acl-relcl.html) – [advcl](hbo_ptnk-dep-advcl.html) – [advmod](hbo_ptnk-dep-advmod.html) – [amod](hbo_ptnk-dep-amod.html) – [appos](hbo_ptnk-dep-appos.html) – [case](hbo_ptnk-dep-case.html) – [cc](hbo_ptnk-dep-cc.html) – [ccomp](hbo_ptnk-dep-ccomp.html) – [compound:smixut](hbo_ptnk-dep-compound-smixut.html) – [conj](hbo_ptnk-dep-conj.html) – [cop](hbo_ptnk-dep-cop.html) – [csubj](hbo_ptnk-dep-csubj.html) – [det](hbo_ptnk-dep-det.html) – [discourse](hbo_ptnk-dep-discourse.html) – [dislocated](hbo_ptnk-dep-dislocated.html) – [expl](hbo_ptnk-dep-expl.html) – [fixed](hbo_ptnk-dep-fixed.html) – [flat](hbo_ptnk-dep-flat.html) – [flat:name](hbo_ptnk-dep-flat-name.html) – [mark](hbo_ptnk-dep-mark.html) – [nmod](hbo_ptnk-dep-nmod.html) – [nmod:poss](hbo_ptnk-dep-nmod-poss.html) – [nsubj](hbo_ptnk-dep-nsubj.html) – [nsubj:outer](hbo_ptnk-dep-nsubj-outer.html) – [nummod](hbo_ptnk-dep-nummod.html) – [obj](hbo_ptnk-dep-obj.html) – [obl](hbo_ptnk-dep-obl.html) – [obl:npmod](hbo_ptnk-dep-obl-npmod.html) – [orphan](hbo_ptnk-dep-orphan.html) – [parataxis](hbo_ptnk-dep-parataxis.html) – [punct](hbo_ptnk-dep-punct.html) – [root](hbo_ptnk-dep-root.html) – [vocative](hbo_ptnk-dep-vocative.html) – [xcomp](hbo_ptnk-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3550 sentences, 62302 tokens and 90770 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 18820 tokens (30%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 2 types of words that contain both letters and punctuation. Examples: כְּדָר־לָעֹ֔מֶר, מַה־</li>
</ul>

<ul>
<li>This corpus contains 24991 multi-word tokens. On average, one multi-word token consists of 2.14 syntactic words.</li>
<li>There are 13209 types of multi-word tokens. Examples: וְאֶת, וַיֹּ֣אמֶר, וְכָל, וַיֹּ֤אמֶר, וְאִם, בְּכָל, וַיֹּ֨אמֶר, לִפְנֵ֣י, לֵאמֹ֑ר, הָאָֽרֶץ, לִפְנֵ֥י, וְעַל, וְלֹ֥א, וַיֹּ֥אמֶר, וַיְדַבֵּ֥ר, אֹתֹ֖ו, וְאֶל, וַיֹּ֨אמֶר֙, וְאֵ֖ת, וְלֹֽא, וְאֵת֙, הָאָ֑רֶץ, לַיהוָֽה, וְלֹ֣א, וַיֹּ֗אמֶר, לֵּאמֹֽר, בְּאֶ֣רֶץ, וְלֹא, וַיֹּ֖אמֶר, לֵאמֹ֔ר, הָאָ֔רֶץ, לֹ֔ו, לֹ֖ו, בַּיֹּ֣ום, וַיֹּ֕אמֶר, כַּאֲשֶׁ֛ר, שְׁמֹ֖ו, אֹתָ֖ם, וַֽיְהִי, הָאָ֖רֶץ, לְכָל, הַכֹּהֵ֔ן, וַיְהִ֗י, לָכֶ֖ם, מִכָּל, הַכֹּהֵ֛ן, הַזֶּ֔ה, לְךָ֖, לָהֶ֖ם, בְּאֶ֥רֶץ.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SYM, X</li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): הֲ, הֶֽ, הַ, הַֽ</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as pronouns (PRON): אל, אלה, אנחנו, אני, אנכי, את, אתה, אתם, אתן, אתנה, הוא, היא, הם, המה, הן, הנה, זאת, זה, לזה, מה, מי, מן, נחנו</li>
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
    <li>AUX: יְהִי, יְהִ֗י, הָיָ֥ה, יִהְיֶ֣ה, יִהְיֶ֥ה, יְהִ֥י, יְהִ֣י, יְהִי֙, הָיָ֤ה, יִֽהְיֶה</li>
    <li>VERB: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֨אמֶר, יְדַבֵּ֥ר, יֹּ֥אמֶר, יֹּ֨אמֶר֙, צִוָּ֥ה, יֹּ֗אמֶר, יֹּ֖אמֶר, יֹּ֕אמֶר</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: הְיֹ֥ות, הְיֹ֥ת, הְיֹ֖ות, הְיֹ֣ות, הְיֹ֣ת, הְיֹותָ֣, הְיֹ֖ת, הְיֹ֛ת, הְיֹ֤ות, הְיֹ֨ת</li>
    <li>VERB: אמֹֽר, אמֹ֑ר, אמֹ֔ר, הֹולִידֹ֣, מֹ֥ות, אמֹ֗ר, אמֹ֖ר, דַבֵּ֣ר, כַפֵּ֥ר, מֹ֣ות</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: הֹויָ֗ה</li>
    <li>NOUN: אֹיְבֵי, זָבַ֥ת, מַכֵּ֥ה, זָּ֖ב, חֹתֵ֥ן, מֵּ֖ת, אֹֽיְבֵי, אֹרֵ֑ג, זָּ֑ב, חֹשֵׁ֖ב</li>
    <li>VERB: נֹּגֵ֥עַ, מָשְׁזָ֑ר, מְכַסֶּ֣ה, מָשְׁזָֽר, אֹכֵ֣ל, בָּ֣א, גָּ֣ר, גָּ֥ר, הֹלֵ֖ךְ, יֹּצְאִ֖ים</li>
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
      <li>ADJ: יְמָנִ֔ית, יְמָנִ֑ית, חַיָּ֖ה, גְדֹלָ֖ה, חַיָּ֔ה, יְמָנִֽית, נָכְרִיָּֽה, רָעָ֖ה, אֲחֵרֹֽות, אַחֶ֔רֶת</li>
      <li>AUX-Fin: הָיְתָ֥ה, תִּהְיֶ֥ה, תְּהִי, תִּהְיֶ֣ה, הָֽיְתָה֙, הָיְתָה, תְּהִ֨י, תְהִ֤י, תִּהְיֶ֖ה, תִּהְיֶ֖יןָ</li>
      <li>AUX-Part: הֹויָ֗ה</li>
      <li>NOUN: אֶ֣רֶץ, אֶ֥רֶץ, אָֽרֶץ, שָׁנָ֑ה, אָ֔רֶץ, אָ֑רֶץ, בַּת, אָ֖רֶץ, שָׁנָ֔ה, אִשָּׁ֖ה</li>
      <li>NOUN-Part: זָבַ֥ת, מְיַלְּדֹ֖ת, מְיַלְּדֹת֙, מְקֻצְעֹ֖ת, נֹּותֶ֨רֶת֙, אֹמֶֽנֶת, בְּעֻ֥לַת, גְּנֻֽבְתִ֣י, גְנֻֽבְתִ֖י, גְרוּשָׁ֗ה</li>
      <li>NUM: שְׁתֵּ֣י, מֵאֹ֖ות, שִׁבְעַ֥ת, שִׁבְעַ֣ת, אַחַ֖ת, אֶחָ֑ת, שְׁתֵּ֥י, שְׁלֹשָׁ֣ה, שְׁתֵּי֙, אַחַת֙</li>
      <li>PRON: הּ, הָ, ךְ, ה, הּ֙, הִ֖וא, הִֽוא, הִ֔וא, הָ֙, הֶ֔ן</li>
      <li>PROPN: לֵאָ֔ה, רָחֵ֖ל, שָׂרָ֖ה, שָׂרָ֣ה, רָחֵ֑ל, רָחֵ֔ל, רָחֵל֙, שָׂרַ֣י, לֵאָ֖ה, ר֣וּת</li>
      <li>VERB-Fin: תֵּ֣לֶד, תֹּ֣אמֶר, תִּקְרָ֥א, תֹּ֕אמֶר, תֹּ֗אמֶר, תֹּ֤אמֶר, תֵּ֥לֶד, נִכְרְתָ֛ה, תֹּ֨אמֶר֙, תֹּ֖אמֶר</li>
      <li>VERB-Part: בְּלוּלֹ֣ת, אֹכֶ֖לֶת, בְּלוּלָ֣ה, בְּלוּלָ֥ה, בָּאָ֖ה, הֹלֶ֣כֶת, חֹֽבְרֹ֔ת, מְשֻׁלָּבֹ֔ת, מַקְבִּילֹת֙, עֹלֹת֙</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: טָהֹ֑ור, טָמֵ֥א, זָכָ֥ר, טָהֹֽור, קָּטֹ֖ן, טָהֹ֥ור, טֹ֣וב, גָּדֹ֖ול, גָּדֹֽול, טָהֹ֖ור</li>
      <li>AUX-Fin: יְהִי, יְהִ֗י, הָיָ֥ה, יִהְיֶ֣ה, יִהְיֶ֥ה, יְהִ֥י, יְהִ֣י, יְהִי֙, הָיָ֤ה, יִֽהְיֶה</li>
      <li>NOUN: כָּל, כָל, בְּנֵ֣י, בֶּן, אֱלֹהִ֖ים, פְנֵ֣י, אִ֣ישׁ, יֹּ֣ום, פְנֵ֥י, בְּנֵ֥י</li>
      <li>NOUN-Part: אֹיְבֵי, מַכֵּ֥ה, זָּ֖ב, חֹתֵ֥ן, מֵּ֖ת, אֹֽיְבֵי, אֹרֵ֑ג, זָּ֑ב, חֹשֵׁ֖ב, חֹתְנֹ֑</li>
      <li>NUM: חֲמִשִּׁ֣ים, אַרְבָּעִ֣ים, עֶשְׂרִ֣ים, חֲמִשִּׁ֥ים, שְׁלֹשִׁ֣ים, שְּׁבִיעִ֔י, חֲמִשִּׁ֖ים, שֵּׁנִ֔י, עֶ֣שֶׂר, עֶשְׂרִ֖ים</li>
      <li>PRON: ו, ךָ, ם, ו֙, הוּ, ךָ֖, נּוּ, הֶ֖ם, כֶֽם, כֶ֔ם</li>
      <li>PROPN: יְהוָ֖ה, יְהוָ֔ה, יְהוָֽה, יְהוָה֙, מֹשֶׁ֔ה, יִשְׂרָאֵ֔ל, יהוָֽה, מִצְרַ֔יִם, מִצְרָֽיִם, יְהוָ֑ה</li>
      <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֨אמֶר, יְדַבֵּ֥ר, יֹּ֥אמֶר, יֹּ֨אמֶר֙, צִוָּ֥ה, יֹּ֗אמֶר, יֹּ֖אמֶר, יֹּ֕אמֶר</li>
      <li>VERB-Part: נֹּגֵ֥עַ, מָשְׁזָ֑ר, מְכַסֶּ֣ה, מָשְׁזָֽר, אֹכֵ֣ל, בָּ֣א, גָּ֣ר, גָּ֥ר, הֹלֵ֖ךְ, יֹּצְאִ֖ים</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>NOUN: עֵינֵ֥י, עֵינֵ֣י, יְדֵי, עֵינֵ֖י, אָזְנֵ֣י, רַגְלֵי, עֵינֶ֔י, עֵינֵי, עֵינֶ֨י, עֵינָ֗י</li>
      <li>NUM: שְׁתֵּ֣י, שְׁנֵ֣י, שְׁנֵי, שְׁנֵ֥י, שְׁתֵּ֥י, שְׁנֵ֖י, שְׁנֵ֤י, שְׁנֵֽי, שְׁתֵּי֙, שְׁנֵ֨י</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: חַיִּ֑ים, חַיִּֽים, טְמֵאִ֥ים, אֲחֵרִ֑ים, כֵּנִ֣ים, נְקֻדִּ֖ים, עֲקֻדִּ֥ים, קְדֹשִׁ֔ים, אֲחֵרֹֽות, גְּדֹלִ֑ים</li>
      <li>AUX-Fin: הָי֣וּ, הָי֥וּ, הָיוּ֙, הָי֖וּ, הָי֤וּ, יִּֽהְיוּ֙, יִהְיֽוּ, יִהְי֤וּ, יִהְי֥וּ, הֱיִיתֶ֖ם</li>
      <li>NOUN: בְּנֵ֣י, אֱלֹהִ֖ים, פְנֵ֣י, פְנֵ֥י, בְּנֵ֥י, אֱלֹהִ֔ים, בְנֵֽי, אֱלֹהִים֙, אֱלֹהֵי, פְּנֵ֣י</li>
      <li>NOUN-Part: אֹיְבֵי, אֹֽיְבֵי, רֹעֵ֣י, בָּאֵ֥י, יֹצְאֵ֖י, יֹצְאֵ֣י, יֹשְׁבֵ֖י, יֹשְׁבֵ֣י, מְיַלְּדֹ֖ת, מְיַלְּדֹת֙</li>
      <li>NUM: מֵאֹ֖ות, חֲמִשִּׁ֣ים, אַרְבָּעִ֣ים, עֶשְׂרִ֣ים, חֲמִשִּׁ֥ים, שְׁלֹשִׁ֣ים, חֲמִשִּׁ֖ים, עֶשְׂרִ֖ים, שְׁלֹשִׁ֥ים, שִׁבְעִ֣ים</li>
      <li>PRON: ם, נוּ, הֶ֖ם, כֶֽם, כֶ֔ם, כֶ֖ם, כֶ֑ם, הֶ֔ם, ם֙, כֶם֙</li>
      <li>PROPN: אַשּׁוּרִ֥ם, חֻשִֽׁים, כַּסְלֻחִ֗ים, לְאֻמִּֽים, לְהָבִ֖ים, לְטוּשִׁ֖ים, לוּדִ֧ים, נַפְתֻּחִֽים, עֲנָמִ֛ים, פַּתְרֻסִ֞ים</li>
      <li>VERB-Fin: יֹּ֣אמְר֔וּ, יֹּאמְר֣וּ, יֹּאמְר֖וּ, יַּֽעֲשׂוּ, יָּבֹ֨אוּ֙, עָשׂ֣וּ, יָּבֹ֥אוּ, בָּ֖אוּ, יֵּלְכ֥וּ, יַֽעַבְדֻֽ</li>
      <li>VERB-Part: יֹּצְאִ֖ים, בְּלוּלֹ֣ת, יֹצְאִ֖ים, מְאָדָּמִ֛ים, אֹֽמְרִ֔ים, בָּאִ֖ים, בָּאִ֥ים, חֹֽבְרֹ֔ת, מְאָדָּמִ֑ים, מְחֻשָּׁקִ֣ים</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: יְמָנִ֔ית, טָהֹ֑ור, טָמֵ֥א, זָכָ֥ר, טָהֹֽור, יְמָנִ֑ית, קָּטֹ֖ן, טָהֹ֥ור, טֹ֣וב, גָּדֹ֖ול</li>
      <li>AUX-Fin: יְהִי, יְהִ֗י, הָיָ֥ה, יִהְיֶ֣ה, יִהְיֶ֥ה, יְהִ֥י, יְהִ֣י, יְהִי֙, הָיָ֤ה, יִֽהְיֶה</li>
      <li>AUX-Part: הֹויָ֗ה</li>
      <li>NOUN: כָּל, כָל, אֶ֣רֶץ, בֶּן, אֶ֥רֶץ, אָֽרֶץ, אִ֣ישׁ, יֹּ֣ום, שָׁנָ֑ה, אָ֔רֶץ</li>
      <li>NOUN-Part: זָבַ֥ת, מַכֵּ֥ה, זָּ֖ב, חֹתֵ֥ן, מֵּ֖ת, אֹרֵ֑ג, זָּ֑ב, חֹשֵׁ֖ב, חֹתְנֹ֑, חֹתֵ֣ן</li>
      <li>NUM: שֶׁ֣בַע, אֶחָ֖ד, אֶחָֽד, שִׁבְעַ֥ת, שִׁבְעַ֣ת, אַחַ֖ת, אֶחָ֔ד, אֶחָד֙, אֶחָ֑ת, אַרְבַּ֣ע</li>
      <li>PRON: ו, י, ךָ, הּ, ו֙, הָ, הוּ, ךָ֖, ךְ, נּוּ</li>
      <li>PROPN: יְהוָ֖ה, יְהוָ֔ה, יְהוָֽה, יְהוָה֙, מֹשֶׁ֔ה, יִשְׂרָאֵ֔ל, יהוָֽה, מִצְרַ֔יִם, מִצְרָֽיִם, יְהוָ֑ה</li>
      <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֨אמֶר, יְדַבֵּ֥ר, יֹּ֥אמֶר, יֹּ֨אמֶר֙, צִוָּ֥ה, יֹּ֗אמֶר, יֹּ֖אמֶר, יֹּ֕אמֶר</li>
      <li>VERB-Part: נֹּגֵ֥עַ, מָשְׁזָ֑ר, מְכַסֶּ֣ה, מָשְׁזָֽר, אֹכֵ֣ל, בָּ֣א, גָּ֣ר, גָּ֥ר, הֹלֵ֖ךְ, מְקַדִּשְׁ</li>
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
      <li>ADV: לֹ֥א, לֹ֣א, לֹא, לֹֽא, אַל, לֹ֤א, לֹ֨א, לֹ֧א, לֹ֖א, אַֽל</li>
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
      <li>AUX-Fin: יִהְיֶ֣ה, יִהְיֶ֥ה, יִֽהְיֶה, יִהְיֶ֖ה, יִהְיֶ֨ה, יִהְיֶֽה, תִּהְיֶ֥ה, תִּהְיֶ֣ה, יְהִ֥י, יִהְיֽוּ</li>
      <li>VERB-Fin: יוּמָֽת, תַּעֲשֶׂ֥ה, תַּעֲשֶׂ֣ה, תְגַלֵּ֑ה, יִטְמָֽא, יֹ֥אכַל, תַּעֲשֶׂ֖ה, יִטְמָ֖א, יְכַבֵּ֧ס, יִתֵּ֖ן</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: הָיָ֥ה, הָיָ֤ה, הָיָה֙, הָיָ֖ה, הָיָ֣ה, הָיְתָ֥ה, הָי֣וּ, הָי֥וּ, הָיָ֞ה, הָ֥יָה</li>
      <li>VERB-Fin: צִוָּ֥ה, עָשִׂ֥יתָ, דִּבֶּ֥ר, טָמֵ֥א, רָחַ֥ץ, אָמַ֣ר, עָשִׂ֣יתָ, אָמַרְתָּ֣, עָשָׂ֥ה, נָתַ֥ן</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: הְיֵ֥ה, הְיֵ֖ה, הְיֵה, הֱוֵ֤ה, הֱי֥וּ, הֱיֵ֧ה, הֲיִ֖י</li>
      <li>VERB-Fin: דַּבֵּ֞ר, עֲשֵׂה, קַח, לֵ֣ךְ, לֶךְ, דַּבֵּ֨ר, קַֽח, שַׁלַּ֥ח, דַּבֵּ֛ר, לְכ֣וּ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: יְהִי, יְהִ֗י, הָיָ֥ה, יִהְיֶ֣ה, יִהְיֶ֥ה, יְהִ֥י, יְהִ֣י, יְהִי֙, הָיָ֤ה, יִֽהְיֶה</li>
      <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֨אמֶר, יְדַבֵּ֥ר, יֹּ֥אמֶר, יֹּ֨אמֶר֙, צִוָּ֥ה, יֹּ֗אמֶר, יֹּ֖אמֶר, יֹּ֕אמֶר</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: יְהִי, יְהִ֗י, יְהִ֣י, יְהִי֙, יְהִ֥י, יְהִ֕י, יְהִ֤י, יְהִ֖י, יְהִי֩, יְהִ֞י</li>
      <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֨אמֶר, יֹּ֥אמֶר, יְדַבֵּ֥ר, יֹּ֨אמֶר֙, יֹּ֗אמֶר, יֹּ֖אמֶר, יֹּ֕אמֶר, יַּ֥עַשׂ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>NOUN-Part: מְקֻצְעֹ֖ת, פְּקֻדִ֔ים, בְּעֻ֥לַת, בְּר֣וּךְ, בְּר֥וּךְ, גְּנֻֽבְתִ֣י, גְנֻֽבְתִ֖י, גְרוּשָׁ֗ה, גְרוּשָׁה֙, חָרֻ֖ם</li>
      <li>VERB-Part: מָשְׁזָ֑ר, מָשְׁזָֽר, מָשְׁזָ֗ר, בְּלוּלֹ֣ת, מְאָדָּמִ֛ים, מָשְׁזָ֖ר, אָר֣וּר, אָר֤וּר, בְּלוּלָ֣ה, בְּלוּלָ֥ה</li>
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
      <li>DET: הַ, הָ, ה, הָֽ, הַֽ, הָ֣, הֶ, הֶֽ, הַ֨, הַ֠</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>PRON: זֶּ֔ה, זֶּ֑ה, אֵ֖לֶּה, אֵ֣לֶּה, זֶּ֖ה, זֶּֽה, אֵ֨לֶּה֙, זֶּה֙, זֹ֣את, אֵ֑לֶּה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: מַה, מִי, מִ֥י, מִ֣י, מִֽי, מָ֥ה, מָ֣ה, מִ֖י, מֶֽה, מָֽה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: ו, י, ךָ, ם, הּ, ו֙, נוּ, הָ, הוּ, ךָ֖</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: שְׁתֵּ֣י, מֵאֹ֖ות, שֶׁ֣בַע, אֶחָ֖ד, אֶחָֽד, שִׁבְעַ֥ת, שְׁנֵ֣י, שְׁנֵי, שְׁנֵ֥י, שִׁבְעַ֣ת</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: שְּׁבִיעִ֔י, שֵּׁנִ֔י, שֵּׁנִ֖ית, שְּׁבִיעִ֗י, שֵּׁנִֽית, שְּׁלִישִׁ֑י, שְּׁלִישִׁ֔י, רִאשֹׁ֔ון, רִאשֹׁון֙, שְּׁבִיעִ֖י</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: הָיִ֥יתִי, אֶֽהְיֶ֖ה, אֶֽהְיֶ֣ה, הָיִ֔יתִי, הָיִ֖ינוּ, אֶֽהְיֶ֑ה, אֶֽהְיֶ֔ה, אֶֽהְיֶ֤ה, אֶֽהְיֶ֥ה, הָיִ֖יתִי</li>
      <li>PRON: י, נוּ, נִי, י֙, אֲנִ֖י, אֲנִ֥י, אָנֹכִ֖י, אֲנִ֣י, נוּ֙, אֲנִי֙</li>
      <li>VERB-Fin: יָדַ֔עְתִּי, אֶמְצָא, הֹוצֵ֥אתִי, נְתַתִּ֖י, נָתַתִּ֤י, אֶֽעֱשֶׂ֥ה, אֶֽעֱשֶׂה, אֶתֵּ֖ן, אֶתֵּ֣ן, אוּכַל֙</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: הֱיִיתֶ֖ם, הְיִיתֶ֣ם, הְיֵ֥ה, הָיִ֖יתָ, תִּהְיוּ, תִהְיֶ֥ה, הְיִ֤יתֶם, הְיִ֨יתֶם, הְיִיתֶ֖ם, הְיִיתֶם֙</li>
      <li>PRON: ךָ, ךָ֖, ךְ, כֶֽם, כֶ֔ם, ךָ֙, כֶ֖ם, כֶ֑ם, ךָ֔, כֶם֙</li>
      <li>VERB-Fin: עָשִׂ֥יתָ, עָשִׂ֣יתָ, אָמַרְתָּ֣, תַּעֲשֶׂ֥ה, תַּעֲשֶׂ֣ה, עָשִׂ֤יתָ, תְגַלֵּ֑ה, דַּבֵּ֞ר, עֲשֵׂה, תַּעֲשֶׂ֖ה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: יְהִי, יְהִ֗י, הָיָ֥ה, יִהְיֶ֣ה, יִהְיֶ֥ה, יְהִ֥י, יְהִ֣י, יְהִי֙, הָיָ֤ה, יִֽהְיֶה</li>
      <li>PRON: ו, ם, הּ, ו֙, הָ, הוּ, נּוּ, הֶ֖ם, ה, הֶ֔ם</li>
      <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֨אמֶר, יְדַבֵּ֥ר, יֹּ֥אמֶר, יֹּ֨אמֶר֙, צִוָּ֥ה, יֹּ֗אמֶר, יֹּ֖אמֶר, יֹּ֕אמֶר</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADV
        <ul>
          <li>PRON: מַה, מַֽה</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: לֵ, לֵּ, לְ, עַ֥ד, לֵֽ, עַ֚ד, עַ֛ד, עַ֣ד</li>
          <li>SCONJ: כִּ֖י, כִּ֚י, כִּ֛י, כִּ֥י, כִּ֧י, כִּ֣י, כִּ֤י, כִּֽי, כִּי</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>HebBinyan</a>
    <ul>
      <li>HIFIL
        <ul>
          <li>NOUN-Part: מַכֵּ֥ה, מַּשְׁקִ֔ים, מַּשְׁקִ֛ים, מֵּלִ֖יץ, מַּעֲלֵי֙, מַּפְרִיסֵ֖י, מַּקְדִּ֔ישׁ, מַּשְׁקִ֖ים, מַּשְׁקִ֗ים, מַּשְׁקֶ֣ה</li>
          <li>VERB-Fin: יֹּ֥ולֶד, יֹּ֖ולֶד, הֹולִ֥יד, יָּבֵ֥א, הִקְטִ֨יר, הֹולִ֣יד, הֹוצֵ֥אתִי, יְסִירֶֽנָּ, יַּקְטֵ֥ר, יַּשְׁכֵּ֨ם</li>
          <li>VERB-Inf: הֹולִידֹ֣, הֲבִ֣יאֲ, הֹוצִ֥יא, הֲמִיתֹֽ, הַבְדִּ֔יל, הַבְדִּ֕יל, הַגִּ֣יד, הַכֹּות, הַעֲלֹ֥ת, הַקְרִ֖יב</li>
          <li>VERB-Part: מֵבִ֥יא, מֵבִ֨יא, מֵשִׁ֣יב, מַּקְרִ֞יב, מַקְבִּילֹת֙, מְדִיבֹ֣ת, מְרִיקִ֣ים, מֵינִיקֹ֛ות, מֵקִ֛ים, מֵרִ֗ים</li>
        </ul>
      </li>
      <li>HITPAEL
        <ul>
          <li>NOUN-Part: מִּטַּהֵ֖ר, מִּטַּהֵ֑ר, מִּטַּהֵר֙, מִּטַּהֵ֛ר, מִּטַּהֵ֨ר</li>
          <li>VERB-Fin: הִתְבָּרֲכ֣וּ, הִתְהַלֵּ֥ךְ, יִטַּמָּ֖א, יִטַּמָּֽא, אֶתְנָהֲלָ֣ה, הִ֨תְגַּלָּ֔ח, הִ֨תְוַדָּ֔ה, הִ֨תְקַדִּשְׁתֶּ֔ם, הִֽטַּהֲר֔וּ, הִֽתְהַלֶּךְ</li>
          <li>VERB-Inf: הִתְאַפֵּ֗ק, הִתְגֹּלֵ֤ל, הִתְוַדַּ֥ע, הִתְחַֽנְנֹ֥, הִתְמַהְמֵ֔הַּ, הִתְנַחֵ֔ם, הִתְנַפֵּ֣ל</li>
          <li>VERB-Part: מִּטַּהֵ֖ר, מִּטַּהֵ֛ר, מִּתְהַפֶּ֔כֶת, מִסְתֹּולֵ֣ל, מִשְׁתָּאֵ֖ה, מִתְאַמֶּ֥צֶת, מִתְהַלֵּ֥ךְ, מִתְלַקַּ֖חַת, מִתְנַחֵ֥ם</li>
        </ul>
      </li>
      <li>HUFAL
        <ul>
          <li>NOUN-Part: מֻכִּ֖ים, מֻסַבֹּ֛ת, מֻרְבֶּ֣כֶת</li>
          <li>VERB-Fin: יוּמָֽת, יֻּגַּ֥ד, יוּמָ֑ת, הוּבָ֖א, יֻסַּ֖ךְ, יוּמְת֖וּ, יוּמָ֔ת, יוּמָ֖תוּ, הָפְקַ֖ד, הָרְאֵ֖יתָ</li>
          <li>VERB-Inf: הְשַׁמָּה֙, הֳשַּׁמָּ֔ה, הָפְדֵּה֙, הָשַּׁמָּ֖ה, הֻגֵּ֨ד, הֻלֶּ֣דֶת</li>
          <li>VERB-Part: מָשְׁזָ֑ר, מָשְׁזָֽר, מָשְׁזָ֗ר, מָשְׁזָ֖ר, מָרְאֶ֖ה, מָשְׁזָ֔ר, מֻֽסַבֹּ֖ת, מֻצָּ֣ב, מֻרְבֶּ֔כֶת, מּוּשָׁ֨ב</li>
        </ul>
      </li>
      <li>NIFAL
        <ul>
          <li>AUX-Fin: נִהְיָ֔תָה</li>
          <li>NOUN-Part: נֹּותֶ֨רֶת֙, נִּשְׁאָרִ֖ים, נִפְלְאֹתַ֔, נִפְלָאֹ֔ת, נִצִּ֑ים, נָבֹ֥ון, נֹּֽותָרִים֒, נֹּותָר֙, נֹּותָרִ֖ם, נֹּותָרִ֛ים</li>
          <li>VERB-Fin: נִכְרְתָ֛ה, נִסְלַ֥ח, נִרְאָ֥ה, יִמָּצְא֥וּן, יֵאָכֵ֖ל, יֵעָשֶׂ֥ה, נֶעְלַ֣ם, הִשָּׁ֣מֶר, הִשָּׁ֧מֶר, יִגָּאֵ֖ל</li>
          <li>VERB-Inf: הִמֹּ֥ול, הִמֹּ֧ול, הִ֨מֹּלֹ֔, הִבָּֽרְאָ֑, הִבָּֽרְאָֽ, הִגָּמֵ֥ל, הִוָּ֣לֶד, הִוָּסְדָ֖ה, הִטֹּ֣חַ, הִטֹּֽוחַ</li>
          <li>VERB-Part: נְכֹנִ֖ים, נִּשְׁאָרִ֣ים, נִצָּ֖ב, נִצָּבִ֖ים, נֹּותָ֗ר, נֹּותָ֥ר, נְבֻכִ֥ים, נִּגָּשִׁ֥ים, נִּמְצָ֤א, נִּמְצָאֹ֔ת</li>
        </ul>
      </li>
      <li>PAAL
        <ul>
          <li>AUX-Fin: יְהִי, יְהִ֗י, הָיָ֥ה, יִהְיֶ֣ה, יִהְיֶ֥ה, יְהִ֥י, יְהִ֣י, יְהִי֙, הָיָ֤ה, יִֽהְיֶה</li>
          <li>AUX-Inf: הְיֹ֥ות, הְיֹ֥ת, הְיֹ֖ות, הְיֹ֣ות, הְיֹ֣ת, הְיֹותָ֣, הְיֹ֖ת, הְיֹ֛ת, הְיֹ֤ות, הְיֹ֨ת</li>
          <li>AUX-Part: הֹויָ֗ה</li>
          <li>NOUN-Part: אֹיְבֵי, זָבַ֥ת, זָּ֖ב, חֹתֵ֥ן, מֵּ֖ת, אֹֽיְבֵי, אֹרֵ֑ג, זָּ֑ב, חֹשֵׁ֖ב, חֹתְנֹ֑</li>
          <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֨אמֶר, יֹּ֥אמֶר, יֹּ֨אמֶר֙, יֹּ֗אמֶר, יֹּ֖אמֶר, יֹּ֕אמֶר, יַּ֥עַשׂ, יִּקְרָ֥א</li>
          <li>VERB-Inf: אמֹֽר, אמֹ֑ר, אמֹ֔ר, מֹ֥ות, אמֹ֗ר, אמֹ֖ר, מֹ֣ות, בֹּאֲ, תֵ֥ת, עֲשֹׂ֖ות</li>
          <li>VERB-Part: נֹּגֵ֥עַ, אֹכֵ֣ל, בָּ֣א, גָּ֣ר, גָּ֥ר, הֹלֵ֖ךְ, יֹּצְאִ֖ים, נֹתֵ֥ן, עֹשֶֽׂה, עֹשֶׂ֖ה</li>
        </ul>
      </li>
      <li>PIEL
        <ul>
          <li>NOUN-Part: מְיַלְּדֹ֖ת, מְיַלְּדֹת֙, מְקַלֵּ֗ל, מְרַגְּלִֽים, מְבָ֣רְכֶ֔י, מְבָרֲכֶ֖י, מְחֹקֵ֖ק, מְטַחֲוֵ֣י, מְיַלְּדֹ֑ת, מְיַלְּדֹ֔ת</li>
          <li>VERB-Fin: יְדַבֵּ֥ר, צִוָּ֥ה, דִּבֶּ֥ר, יְדַבֵּ֣ר, כִפֶּ֥ר, צִוָּ֧ה, תְגַלֵּ֑ה, דַּבֵּ֞ר, יְצַ֥ף, כִפֶּ֨ר</li>
          <li>VERB-Inf: דַבֵּ֣ר, כַפֵּ֥ר, דַבֵּ֥ר, כַפֵּ֣ר, שָׁרֵ֣ת, דַבֵּ֤ר, כַהֲנֹ, כַהֵֽן, כַפֵּ֖ר, שַׁלְּחָֽ</li>
          <li>VERB-Part: מְכַסֶּ֣ה, מְקַדִּשְׁ, מְקַדְּשָֽׁ, מְשַׁלֵּ֖חַ, מָאֵ֥ן, מְרַגְּלִ֖ים, מְאַלְּמִ֤ים, מְבַקְשִׁ֑ים, מְבַקְשִׁ֖ים, מְבַקֵּ֑שׁ</li>
        </ul>
      </li>
      <li>PUAL
        <ul>
          <li>NOUN-Part: מְקֻצְעֹ֖ת, מְּצֹרָ֔ע, מְאָדָּמִ֔ים, מְחֻסְפָּ֔ס</li>
          <li>VERB-Fin: יֻלַּד, יֻלַּ֖ד, חֻבָּֽר, כֻבַּ֥ס, צֻוֵּֽיתִי, אֹרָ֖שָׂה, בֻּשָּׁ֔לָה, גֹרְשׁ֣וּ, גֻּנַּ֔בְתִּי, גֻנַּ֖ב</li>
          <li>VERB-Inf: גֻנֹּ֣ב</li>
          <li>VERB-Part: מְאָדָּמִ֛ים, מְאָדָּמִ֑ים, מְחֻשָּׁקִ֣ים, מְשֻׁלָּבֹ֔ת, מְבֻשָּׁ֖ל, מְמֻלָּ֖ח, מְפֻתָּחֹת֙, מְצֹרַ֥עַת, מְצֻפִּ֣ים, מְקֻשָּׁרֹות֒</li>
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
      <li>VERB-Fin--NOUN (1519)</li>
      <li>VERB-Fin--NOUN-ADP(את) (7)</li>
      <li>VERB-Fin--NOUN-ADP(כ) (2)</li>
      <li>VERB-Fin--NOUN-ADP(מן) (12)</li>
      <li>VERB-Fin--PRON (244)</li>
      <li>VERB-Fin--PRON-ADP(כ) (1)</li>
      <li>VERB-Fin--PRON-ADP(מן) (3)</li>
      <li>VERB-Inf--NOUN (49)</li>
      <li>VERB-Inf--NOUN-ADP(את) (3)</li>
      <li>VERB-Inf--PRON (176)</li>
      <li>VERB-Inf--PRON-ADP(את) (2)</li>
      <li>VERB-Part--NOUN (90)</li>
      <li>VERB-Part--PRON (151)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (1280)</li>
      <li>VERB-Fin--NOUN-ADP(את) (1214)</li>
      <li>VERB-Fin--NOUN-ADP(מן) (1)</li>
      <li>VERB-Fin--PRON (605)</li>
      <li>VERB-Fin--PRON-ADP(את) (421)</li>
      <li>VERB-Inf--NOUN (102)</li>
      <li>VERB-Inf--NOUN-ADP(את) (105)</li>
      <li>VERB-Inf--PRON (73)</li>
      <li>VERB-Inf--PRON-ADP(את) (52)</li>
      <li>VERB-Part--NOUN (68)</li>
      <li>VERB-Part--NOUN-ADP(את) (48)</li>
      <li>VERB-Part--PRON (19)</li>
      <li>VERB-Part--PRON-ADP(את) (29)</li>
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
<li>This corpus uses 6 relation subtypes: <a>acl:relcl</a>, <a>compound:smixut</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>obl:npmod</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>compound</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>iobj</a>, <a>aux</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
