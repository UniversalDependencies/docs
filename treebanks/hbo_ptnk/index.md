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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhbo_ptnk214)<br />
Download all treebanks: [UD 2.14](/#download)

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

[acl](hbo_ptnk-dep-acl.html) – [advcl](hbo_ptnk-dep-advcl.html) – [advmod](hbo_ptnk-dep-advmod.html) – [amod](hbo_ptnk-dep-amod.html) – [appos](hbo_ptnk-dep-appos.html) – [case](hbo_ptnk-dep-case.html) – [cc](hbo_ptnk-dep-cc.html) – [ccomp](hbo_ptnk-dep-ccomp.html) – [compound:smixut](hbo_ptnk-dep-compound-smixut.html) – [conj](hbo_ptnk-dep-conj.html) – [cop](hbo_ptnk-dep-cop.html) – [csubj](hbo_ptnk-dep-csubj.html) – [det](hbo_ptnk-dep-det.html) – [discourse](hbo_ptnk-dep-discourse.html) – [dislocated](hbo_ptnk-dep-dislocated.html) – [fixed](hbo_ptnk-dep-fixed.html) – [flat](hbo_ptnk-dep-flat.html) – [flat:name](hbo_ptnk-dep-flat-name.html) – [mark](hbo_ptnk-dep-mark.html) – [nmod](hbo_ptnk-dep-nmod.html) – [nmod:poss](hbo_ptnk-dep-nmod-poss.html) – [nsubj](hbo_ptnk-dep-nsubj.html) – [nsubj:outer](hbo_ptnk-dep-nsubj-outer.html) – [nummod](hbo_ptnk-dep-nummod.html) – [obj](hbo_ptnk-dep-obj.html) – [obl](hbo_ptnk-dep-obl.html) – [obl:npmod](hbo_ptnk-dep-obl-npmod.html) – [orphan](hbo_ptnk-dep-orphan.html) – [parataxis](hbo_ptnk-dep-parataxis.html) – [punct](hbo_ptnk-dep-punct.html) – [root](hbo_ptnk-dep-root.html) – [vocative](hbo_ptnk-dep-vocative.html) – [xcomp](hbo_ptnk-dep-xcomp.html)

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
<li>This corpus contains 21 word types tagged as particles (PART): אֵ֖י, אֵֽי, אַ֣יִן, אַיֵּ֖ה, אַיֵּ֥ה, אַיֵּ֧ה, אַיֶּֽ, הֲ, הֶֽ, הַ, הַֽ, לָ֖מָּה, לָ֚מָּה, לָ֛מָּה, לָ֣מָּה, לָ֤מָּה, לָ֥מָּה, לָ֧מָּה, לָמָ֤ה, לָמָ֥ה, לָמָּה</li>
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
    <li>AUX: יְהִי, יְהִ֗י, יְהִ֥י, יְהִ֣י, יְהִי֙, הָיָ֥ה, יְהִ֤י, יְהִ֕י, יְהִ֖י, הָיָ֤ה</li>
    <li>VERB: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֥אמֶר, יֹּ֨אמֶר֙, יֹּ֨אמֶר, יֹּ֕אמֶר, יֹּ֖אמֶר, יֹּ֗אמֶר, יֹּ֥ולֶד, יֹּ֖ולֶד</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: הְיֹ֣ות, הְיֹ֥ות, הְיֹותָ֣, הְיֹ֖ות, הְיֹ֤ות, הֱיֹ֣ות, הֱיֹ֥ות, הָיֹ֧ו</li>
    <li>VERB: הֹולִידֹ֣, בֹּאֲ, דַבֵּ֣ר, בֹ֣וא, שְׁבָּר, תֵ֥ת, עֲשֹׂ֣ות, עֲשֹׂ֥ות, קְרָאתֹ, שֶׁ֣בֶת</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>NOUN: רֹעֵ֣י, בָּאֵ֥י, גֹּאֵ֖ל, גֹאֵ֖ל, יֹצְאֵ֖י, מְרַגְּלִֽים, מֵּת֙, מֵתִ֖, מֵתֶֽ, מַּשְׁקִ֔ים</li>
    <li>VERB: יֹשֵׁ֖ב, יֹשֵׁ֥ב, עֹשֶֽׂה, עֹשֶׂ֖ה, רֹמֵ֥שׂ, אָר֣וּר, אָר֤וּר, בָּאָ֖ה, בָּר֤וּךְ, בָּר֥וּךְ</li>
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
      <li>ADJ: חַיָּ֖ה, חַיָּ֔ה, רָעָ֖ה, אֲחֵרֹֽות, אַחֶ֔רֶת, גְּדֹלָֽה, דַּקֹּ֖ות, הָרָ֖ה, טְּהֹורָ֗ה, טֹּבֹ֔ת</li>
      <li>AUX-Fin: תְּהִי, הָיְתָ֥ה, תְּהִ֨י, תְּהִ֥י, תְהִ֤י, תִּהְיֶ֖יןָ, הֲיִ֖י, הָֽיְתָ֔ה, הָֽיְתָ֖ה, הָֽיְתָ֣ה</li>
      <li>NOUN: שָׁנָ֑ה, אֶ֣רֶץ, אָֽרֶץ, אֶ֥רֶץ, אָ֑רֶץ, אָ֔רֶץ, אָ֖רֶץ, בַּת, שָׁנָ֔ה, בָנֹֽות</li>
      <li>NOUN-Part: אֹמֶֽנֶת, בְּעֻ֥לַת, בָּאֹ֖ת, זֹונָ֑ה, זֹונָ֕ה, טְּלֻאֹ֔ת, מְיַלֶּ֗דֶת, מְיַלֶּ֨דֶת֙, מְקֻשָּׁרֹות֒, מְשֻׁלֶּ֔שֶׁת</li>
      <li>NUM: מֵאֹ֖ות, מְאַ֣ת, שְׁתֵּ֣י, שְׁתֵּ֥י, אַחַת֙, מְאַ֖ת, מֵאָ֥ה, מֵאֹות֙, מָאתַ֣יִם, שְׁלֹשָׁ֣ה</li>
      <li>PRON: הּ, הָ, ךְ, ה, הִ֖וא, הּ֙, הִ֔וא, הָ֙, זֹּ֔את, ךְ֙</li>
      <li>PROPN: לֵאָ֔ה, רָחֵ֖ל, שָׂרָ֖ה, שָׂרָ֣ה, רָחֵ֑ל, רָחֵ֔ל, רָחֵל֙, שָׂרַ֣י, לֵאָ֖ה, ר֣וּת</li>
      <li>VERB-Fin: תֹּ֣אמֶר, תִּקְרָ֥א, תֵּ֣לֶד, תֹּ֗אמֶר, תֹּ֤אמֶר, תֵּ֥לֶד, תֹּ֕אמֶר, תֹּ֨אמֶר֙, תֹּ֖אמֶר, תֹּ֥אמֶר</li>
      <li>VERB-Part: בָּאָ֖ה, עֹלֹת֙, צֹמְחֹ֖ות, שְׂנוּאָ֣ה, אֲרוּרָ֤ה, אֹהֶ֥בֶת, אֹחֶ֨זֶת֙, בְּרוּכָ֨ה, בָּאָ֣ה, בָּאָ֨ה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: טֹ֣וב, קָּטֹ֖ן, גָּדֹ֖ול, גָּדֹֽול, כָבֵ֥ד, רָֽע, אַחֵ֔ר, זָכָ֥ר, חַ֔י, חָ֑י</li>
      <li>AUX-Fin: יְהִי, יְהִ֗י, יְהִ֥י, יְהִ֣י, יְהִי֙, הָיָ֥ה, יְהִ֤י, יְהִ֕י, יְהִ֖י, הָיָ֤ה</li>
      <li>NOUN: כָּל, כָל, בֶּן, אֱלֹהִ֖ים, אֲבִי, שְׁמֹ֖, אֱלֹהִים֙, אֱלֹהִ֔ים, אָבִ֑י, זַרְעֲ</li>
      <li>NOUN-Part: רֹעֵ֣י, בָּאֵ֥י, גֹּאֵ֖ל, גֹאֵ֖ל, יֹצְאֵ֖י, מְרַגְּלִֽים, מֵּת֙, מֵתִ֖, מֵתֶֽ, מַּשְׁקִ֔ים</li>
      <li>NUM: אַרְבָּעִ֣ים, שְׁלֹשִׁ֣ים, חֲמִשִּׁ֥ים, שְּׁבִיעִ֔י, שְׁלֹשִׁ֖ים, שְׁלֹשִׁ֥ים, אַרְבָּעִ֖ים, עֶ֣שֶׂר, שִׁבְעִ֣ים, שִׁבְעִ֥ים</li>
      <li>PRON: ו, ךָ, ם, ו֙, ךָ֖, הוּ, ךָ֙, ךְ, נּוּ, כֶ֔ם</li>
      <li>PROPN: יַעֲקֹ֖ב, יַעֲקֹ֔ב, יֹוסֵ֔ף, יֹוסֵ֖ף, אַבְרָהָ֖ם, יְהוָה֙, יְהוָ֖ה, יְהוָ֔ה, יֹוסֵף֙, אַבְרָהָ֔ם</li>
      <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֥אמֶר, יֹּ֨אמֶר֙, יֹּ֨אמֶר, יֹּ֕אמֶר, יֹּ֖אמֶר, יֹּ֗אמֶר, יֹּ֥ולֶד, יֹּ֖ולֶד</li>
      <li>VERB-Part: יֹשֵׁ֖ב, יֹשֵׁ֥ב, עֹשֶֽׂה, עֹשֶׂ֖ה, רֹמֵ֥שׂ, אָר֣וּר, אָר֤וּר, בָּר֤וּךְ, בָּר֥וּךְ, הֹלֵ֖ךְ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>NOUN: עֵינֵ֣י, עֵינֵ֥י, עֵינֵ֖י, עֵינֶ֔י, עֵינָ֗י, אָזְנֵ֣י, עֵֽינֵי, עֵינֵי, עֵינֶ֨י, עֵינֶֽי</li>
      <li>NUM: שְׁנֵי, שְׁתֵּ֣י, שְׁנֵ֤י, שְׁנֵ֥י, שְׁנֵֽי, שְׁתֵּ֥י, מָאתַ֣יִם, שְׁנֵ֣י, שְׁנֵים, שְׁתֵּ֤י</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: כֵּנִ֣ים, נְקֻדִּ֖ים, עֲקֻדִּ֥ים, אֲחֵרִ֑ים, אֲחֵרֹֽות, גְּדֹלִ֑ים, דַּקֹּ֖ות, טֹּבֹ֔ת, טֹבֹֽות, כֵנִ֖ים</li>
      <li>AUX-Fin: יִּֽהְיוּ֙, הָי֥וּ, הָי֣וּ, הָי֤וּ, הָיוּ֙, יִּהְי֥וּ, יִּהְיוּ֙, הָי֖וּ, הָיִ֖ינוּ, יִּֽהְי֣וּ</li>
      <li>NOUN: אֱלֹהִ֖ים, אֱלֹהִים֙, אֱלֹהִ֔ים, בְּנֵ֣י, בְנֵי, בָּנִ֖ים, אֱלֹהִ֛ים, בָנֹֽות, פְּנֵ֣י, בְּנֵ֥י</li>
      <li>NOUN-Part: רֹעֵ֣י, בָּאֵ֥י, יֹצְאֵ֖י, מְרַגְּלִֽים, מַּשְׁקִ֔ים, מַּשְׁקִ֛ים, קֹּוצְרִ֖ים, אֹיְבֶ֑י, אֹיְבָֽי, אֹרְרֶ֣י</li>
      <li>NUM: מֵאֹ֖ות, אַרְבָּעִ֣ים, שְׁלֹשִׁ֣ים, חֲמִשִּׁ֥ים, מֵאֹות֙, שְׁלֹשִׁ֖ים, שְׁלֹשִׁ֥ים, אַרְבָּעִ֖ים, שִׁבְעִ֣ים, שִׁבְעִ֥ים</li>
      <li>PRON: ם, נוּ, כֶ֔ם, הֶ֖ם, ם֙, הֶם֙, כֶ֖ם, הֶ֔ם, כֶ֑ם, הֶ֑ם</li>
      <li>PROPN: אַשּׁוּרִ֥ם, חֻשִֽׁים, כַּסְלֻחִ֗ים, לְאֻמִּֽים, לְהָבִ֖ים, לְטוּשִׁ֖ים, לוּדִ֧ים, נַפְתֻּחִֽים, עֲנָמִ֛ים, פַּתְרֻסִ֞ים</li>
      <li>VERB-Fin: יֹּאמְר֣וּ, יֹּ֣אמְר֔וּ, יֹּאמְר֖וּ, בָּ֖אוּ, יִּרְא֤וּ, יִמָּצְא֥וּן, יֵּלְכ֥וּ, יָּבֹ֖אוּ, יָּבֹ֥אוּ, יָּבֹ֨אוּ֙</li>
      <li>VERB-Part: יֹצְאֵ֣י, מְרַגְּלִ֖ים, עֹלִ֣ים, עֹלִ֥ים, עֹלֹת֙, צֹמְחֹ֖ות, אֲסוּרִ֑ים, אֲסוּרִ֖ים, אֹֽמְרִ֔ים, אֹכְלִ֤ים</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: טֹ֣וב, קָּטֹ֖ן, גָּדֹ֖ול, גָּדֹֽול, חַיָּ֖ה, כָבֵ֥ד, רָֽע, אַחֵ֔ר, זָכָ֥ר, חַ֔י</li>
      <li>AUX-Fin: יְהִי, יְהִ֗י, יְהִ֥י, יְהִ֣י, יְהִי֙, הָיָ֥ה, יְהִ֤י, יְהִ֕י, יְהִ֖י, הָיָ֤ה</li>
      <li>NOUN: כָּל, כָל, בֶּן, שָׁנָ֑ה, אֶ֣רֶץ, אָֽרֶץ, אֶ֥רֶץ, אֲבִי, אָ֑רֶץ, שְׁמֹ֖</li>
      <li>NOUN-Part: גֹּאֵ֖ל, גֹאֵ֖ל, מֵּת֙, מֵתִ֖, מֵתֶֽ, פֹתֵ֖ר, קֹנֵ֖ה, אֹמֶֽנֶת, בְּעֻ֥לַת, בְּר֣וּךְ</li>
      <li>NUM: שֶׁ֣בַע, אֶחָ֖ד, חָמֵ֥שׁ, מְאַ֣ת, שְׁמֹנֶ֥ה, אַרְבַּ֥ע, שֶׁ֤בַע, תְשַׁ֥ע, אֶחָ֔ד, אֶחָ֣ד</li>
      <li>PRON: ו, י, ךָ, הּ, ךְ, ו֙, הָ, ךָ֖, הוּ, נִי</li>
      <li>PROPN: יַעֲקֹ֖ב, מִצְרַ֔יִם, מִצְרָֽיִם, יַעֲקֹ֔ב, יֹוסֵ֔ף, יֹוסֵ֖ף, אַבְרָהָ֖ם, כְּנָ֑עַן, יְהוָה֙, יְהוָ֖ה</li>
      <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֥אמֶר, יֹּ֨אמֶר֙, יֹּ֨אמֶר, יֹּ֕אמֶר, יֹּ֖אמֶר, יֹּ֗אמֶר, יֹּ֥ולֶד, יֹּ֖ולֶד</li>
      <li>VERB-Part: יֹשֵׁ֖ב, יֹשֵׁ֥ב, עֹשֶֽׂה, עֹשֶׂ֖ה, רֹמֵ֥שׂ, אָר֣וּר, אָר֤וּר, בָּאָ֖ה, בָּר֤וּךְ, בָּר֥וּךְ</li>
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
      <li>ADV: לֹ֥א, לֹֽא, לֹ֣א, אַל, לֹא, לֹ֤א, לֹ֨א, לֹ֖א, לֹ֤וא, אַֽל</li>
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
      <li>AUX-Fin: יִהְיֶ֣ה, יְהִ֥י, יִהְיֶ֖ה, יִהְיֶה, יִהְיֶ֥ה, יהִ֣י, יהִ֥י, תְהִ֤י, תִּהְיֶ֣ה, אֶֽהְיֶ֔ה</li>
      <li>VERB-Fin: אֶמְצָא, אוּכַל֙, יִמָּצְא֥וּן, אֶקְבְּרָ֥ה, אַשְׁחִ֔ית, יִקָּרֵ֥א, תִּ֣ירְאִ֔י, תִּתֶּן, אֲבָרֶכְ, אֵדַ֔ע</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: הָיָ֥ה, הָיָ֤ה, הָיָ֖ה, הָי֥וּ, הָיְתָ֥ה, הָיָ֔ה, הָיָה֙, הָי֣וּ, הָי֤וּ, הָיָ֗ה</li>
      <li>VERB-Fin: נָתַ֥ן, אָמַ֣ר, הֹולִ֥יד, בָּ֣א, יָצָ֣א, עָשִׂ֣יתָ, דִּבֶּ֥ר, הֹולִ֣יד, טֹֽוב, נְתַתִּ֖י</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: הְיֵ֖ה, הְיֵ֥ה, הֱוֵ֤ה, הֲיִ֖י</li>
      <li>VERB-Fin: עֲשֵׂה, קַֽח, לֶךְ, קַח, הָֽבָה, לְכ֣וּ, ק֥וּם, רְאֵה֙, שְׁמַ֣ע, שְׁתֵ֔ה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: יְהִי, יְהִ֗י, יְהִ֥י, יְהִ֣י, יְהִי֙, הָיָ֥ה, יְהִ֤י, יְהִ֕י, יְהִ֖י, הָיָ֤ה</li>
      <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֥אמֶר, יֹּ֨אמֶר֙, יֹּ֨אמֶר, יֹּ֕אמֶר, יֹּ֖אמֶר, יֹּ֗אמֶר, יֹּ֥ולֶד, יֹּ֖ולֶד</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: יְהִי, יְהִ֗י, יְהִי֙, יְהִ֣י, יְהִ֕י, יְהִ֤י, יְהִ֥י, יְהִ֖י, יְהִ֞י, יִּֽהְיוּ֙</li>
      <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֥אמֶר, יֹּ֨אמֶר֙, יֹּ֨אמֶר, יֹּ֕אמֶר, יֹּ֖אמֶר, יֹּ֗אמֶר, יֹּ֥ולֶד, יֹּ֖ולֶד</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>NOUN-Part: בְּעֻ֥לַת, בְּר֣וּךְ, בְּר֥וּךְ, טְּלֻאִ֗ים, טְּלֻאֹ֔ת, טְלֻאִֽים, טָל֗וּא, טָל֥וּא, מְקֻשָּׁרֹות֒, מְשֻׁלֶּ֔שֶׁת</li>
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
      <li>DET: הַ, הָ, ה, הָֽ, הַֽ, הָ֣, הַ֨, הֶֽ, הָ֠, הֶ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>PRON: אֵ֣לֶּה, זֶּ֔ה, אֵ֖לֶּה, אֵ֨לֶּה֙, זֶ֖ה, זֶּ֑ה, זֶּֽה, זֹּ֔את, אֵ֔לֶּה, אֵ֗לֶּה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: מַה, מִי, מִ֥י, מָ֣ה, מִֽי, מִ֖י, מִ֣י, מֶ֣ה, מֶֽה, מָ֥ה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: ו, י, ךָ, הּ, ם, נוּ, ךְ, ו֙, הָ, ךָ֖</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: מֵאֹ֖ות, שֶׁ֣בַע, שְׁנֵי, אֶחָ֖ד, אַרְבָּעִ֣ים, חָמֵ֥שׁ, מְאַ֣ת, שְׁמֹנֶ֥ה, שְׁתֵּ֣י, אַרְבַּ֥ע</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: שְּׁבִיעִ֔י, חֲמִישִֽׁי, רְבִיעִ֖י, רִאשֹׁ֔ון, רִאשֹׁון֙, רִאשֹׁנָֽה, שְּׁלִישִׁ֔י, שְּׁלִישִׁ֗י, שֵּׁנִ֔י, שֵּׁנִ֖י</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: הָיִ֖ינוּ, הָיִ֥יתִי, אֶֽהְיֶ֔ה, אֶֽהְיֶ֖ה, אֶֽהְיֶ֥ה, הָיִ֖יתִי, הָיִ֜יתִי, הָיִ֤יתִי, הָיִ֥ינוּ, הָיִ֧יתִי</li>
      <li>PRON: י, נוּ, נִי, י֙, אָנֹכִ֖י, נוּ֙, אֲנִ֣י, אָנֹכִי֙, נִּי, נִי֙</li>
      <li>VERB-Fin: נְתַתִּ֖י, אֶמְצָא, אוּכַל֙, יָדַ֔עְתִּי, יָלַ֥דְתִּי, מָצָ֤אתִי, אֶקְבְּרָ֥ה, אַשְׁחִ֔ית, אֹמַ֥ר, דִּבַּ֖רְתִּי</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: הָיִ֖יתָ, הְיִיתֶם֙, הְיֵ֖ה, הְיֵ֥ה, הֱוֵ֤ה, הֲיִ֖י, הָיִ֕יתָ, הָיִ֖ית, הָיִ֤יתָ, הָיִ֥יתָ</li>
      <li>PRON: ךָ, ךְ, ךָ֖, ךָ֙, כֶ֔ם, כֶ֖ם, ךָ֔, ךָ֥, ךָ֣, כֶ֑ם</li>
      <li>VERB-Fin: עָשִׂ֣יתָ, עֲשֵׂה, קַֽח, לֶךְ, לָקַחְתָּ֥, קַח, הִגַּ֣דְתָּ, הָֽבָה, לְכ֣וּ, עָשִׂ֖יתָ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: יְהִי, יְהִ֗י, יְהִ֥י, יְהִ֣י, יְהִי֙, הָיָ֥ה, יְהִ֤י, יְהִ֕י, יְהִ֖י, הָיָ֤ה</li>
      <li>PRON: ו, הּ, ם, ו֙, הָ, הוּ, נּוּ, הֶ֖ם, ם֙, הֶם֙</li>
      <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֥אמֶר, יֹּ֨אמֶר֙, יֹּ֨אמֶר, יֹּ֕אמֶר, יֹּ֖אמֶר, יֹּ֗אמֶר, יֹּ֥ולֶד, יֹּ֖ולֶד</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>HebBinyan</a>
    <ul>
      <li>HIFIL
        <ul>
          <li>NOUN-Part: מַּשְׁקִ֔ים, מַּשְׁקִ֛ים, מֵּלִ֖יץ, מֵינִיקֹ֛ות, מֵשִׁ֣יב, מַּשְׁקִ֖ים, מַּשְׁקִ֗ים, מַּשְׁקֶ֣ה, מַכִּירֵ֖, מַצְלִ֑יחַ</li>
          <li>VERB-Fin: יֹּ֥ולֶד, יֹּ֖ולֶד, הֹולִ֥יד, יָּבֵ֥א, הֹולִ֣יד, יַּשְׁכֵּ֨ם, אַשְׁחִ֔ית, הִגַּ֣דְתָּ, אַגִּ֣ידָה, אַשְׁקֶ֑ה</li>
          <li>VERB-Inf: הֹולִידֹ֣, הַגִּ֣יד, הָאִ֖יר, הָשֵׁ֤ב, הֲמִיתֹֽ, הֲרִימִ֥, הֲשִׁיבֹ֖, הֵיטֵ֥ב, הַֽחֲיֹֽות, הַבְאִישֵׁ֨</li>
          <li>VERB-Part: מְרִיקִ֣ים, מֵבִ֨יא, מֵקִ֛ים, מֵשִׁ֗יב, מֵשִׁ֣יב, מַּכֶּ֤ה, מַּשְׁבִּ֖יר, מַבְדִּ֔יל, מַגִּ֖יד, מַגִּ֣יעַ</li>
        </ul>
      </li>
      <li>HITPAEL
        <ul>
          <li>VERB-Fin: הִתְבָּרֲכ֣וּ, אֶתְנָהֲלָ֣ה, הִֽטַּהֲר֔וּ, הִֽתְהַלֶּךְ, הִֽתְחַתְּנ֖וּ, הִֽתְעַשְּׂק֖וּ, הִתְהַלְּכ֨וּ, הִתְהַלֵּ֣ךְ, הִתְהַלֵּ֥ךְ, הִתְהַלַּ֣כְתִּי</li>
          <li>VERB-Inf: הִתְאַפֵּ֗ק, הִתְגֹּלֵ֤ל, הִתְוַדַּ֥ע, הִתְחַֽנְנֹ֥, הִתְנַחֵ֔ם, הִתְנַפֵּ֣ל</li>
          <li>VERB-Part: מִּתְהַפֶּ֔כֶת, מִשְׁתָּאֵ֖ה, מִתְאַמֶּ֥צֶת, מִתְהַלֵּ֥ךְ, מִתְנַחֵ֥ם</li>
        </ul>
      </li>
      <li>NIFAL
        <ul>
          <li>NOUN-Part: נִּשְׁאָ֖ר, נִּשְׁאָרִ֖ים, נָבֹ֣ון, נָבֹ֥ון</li>
          <li>VERB-Fin: יִמָּצְא֥וּן, יִקָּרֵ֥א, יֵּרָ֤א, יֵּרָ֨א, הִמָּלֵ֣ט, הִשָּׁ֧מֶר, יִּנָּ֣חֶם, יִּשָּׁבַ֖ע, יִכָּרֵ֧ת, יִסָּפֵ֖ר</li>
          <li>VERB-Inf: הִמֹּ֥ול, הִ֨מֹּלֹ֔, הִבָּֽרְאָ֑, הִבָּֽרְאָֽ, הִגָּמֵ֥ל, הִוָּ֣לֶד, הִמָּלֵ֣ט, הִמֹּ֑ול, הִמֹּ֥ל, הִמֹּ֧ול</li>
          <li>VERB-Part: נִצָּ֖ב, נִּמְצָ֤א, נִּמְצָאֹ֔ת, נִּצָּ֖ב, נִּצָּ֥ב, נִּצָּבִים֙, נִּרְאֶ֣ה, נִּרְאֶ֥ה, נִדְרָֽשׁ, נִכְבָּ֔ד</li>
        </ul>
      </li>
      <li>PAAL
        <ul>
          <li>AUX-Fin: יְהִי, יְהִ֗י, יְהִ֥י, יְהִ֣י, יְהִי֙, הָיָ֥ה, יְהִ֤י, יְהִ֕י, יְהִ֖י, הָיָ֤ה</li>
          <li>AUX-Inf: הְיֹ֣ות, הְיֹ֥ות, הְיֹותָ֣, הְיֹ֖ות, הְיֹ֤ות, הֱיֹ֣ות, הֱיֹ֥ות, הָיֹ֧ו</li>
          <li>NOUN-Part: רֹעֵ֣י, בָּאֵ֥י, גֹּאֵ֖ל, גֹאֵ֖ל, יֹצְאֵ֖י, מֵּת֙, מֵתִ֖, מֵתֶֽ, פֹתֵ֖ר, קֹּוצְרִ֖ים</li>
          <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֥אמֶר, יֹּ֨אמֶר֙, יֹּ֨אמֶר, יֹּ֕אמֶר, יֹּ֖אמֶר, יֹּ֗אמֶר, תֹּ֣אמֶר, יְחִ֣י</li>
          <li>VERB-Inf: בֹּאֲ, בֹ֣וא, שְׁבָּר, תֵ֥ת, עֲשֹׂ֣ות, עֲשֹׂ֥ות, קְרָאתֹ, שֶׁ֣בֶת, אֱכָל, אֱכֹ֥ל</li>
          <li>VERB-Part: יֹשֵׁ֖ב, יֹשֵׁ֥ב, עֹשֶֽׂה, עֹשֶׂ֖ה, רֹמֵ֥שׂ, אָר֣וּר, אָר֤וּר, בָּאָ֖ה, בָּר֤וּךְ, בָּר֥וּךְ</li>
        </ul>
      </li>
      <li>PIEL
        <ul>
          <li>NOUN-Part: מְרַגְּלִֽים, מְבָ֣רְכֶ֔י, מְבָרֲכֶ֖י, מְחֹקֵ֖ק, מְיַלֶּ֗דֶת, מְיַלֶּ֨דֶת֙, מְצַחֵ֖ק, מְקַלֶּלְ, מְתַעְתֵּ֑עַ</li>
          <li>VERB-Fin: יְבָ֣רֶךְ, יְדַבֵּ֥ר, דִּבֶּ֥ר, יְבָ֥רֶךְ, יְדַבֵּ֣ר, צִוָּ֥ה, דִּבַּ֖רְתִּי, יְבָ֧רֶךְ, יְצַ֣ו, תְּמַהֵ֗ר</li>
          <li>VERB-Inf: דַבֵּ֣ר, בָרֵ֣ךְ, דַּבֵּ֥ר, דַבְּרָ֥, דַבֵּ֖ר, שַׁחֵ֣ת, בָרֲכֹ֣, דַּבְּרֹ֥, דַבֵּ֤ר, דַבֵּ֥ר</li>
          <li>VERB-Part: מְרַגְּלִ֖ים, מְאַלְּמִ֤ים, מְבַקֵּ֑שׁ, מְדַבֵּ֛ר, מְדַבֵּ֣ר, מְדַבֵּ֥ר, מְטַחֲוֵ֣י, מְכַסֶּ֤ה, מְמַהֵ֥ר, מְצַוָּ֥ה</li>
        </ul>
      </li>
      <li>PUAL
        <ul>
          <li>NOUN-Part: מְקֻשָּׁרֹות֒, מְשֻׁלֶּ֔שֶׁת, מְשֻׁלֶּ֖שֶׁת, מְשֻׁלָּ֑שׁ</li>
          <li>VERB-Fin: יֻלַּד, יֻלַּ֖ד, גֻּנַּ֔בְתִּי, טֹרַ֖ף, טֹרָ֑ף, יְכֻלּ֛וּ, יְכֻסּ֖וּ, יְכֻסּ֗וּ, יֻלְּד֖וּ, יֻלְּד֥וּ</li>
          <li>VERB-Inf: גֻנֹּ֣ב</li>
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
<li>This corpus uses 5 relation subtypes: <a>compound:smixut</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>obl:npmod</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>compound</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>aux</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
