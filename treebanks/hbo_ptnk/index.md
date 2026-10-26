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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udhbo_ptnk218)<br />
Download all treebanks: [UD 2.18](/#download)

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

UD Ancient Hebrew PTNK contains portions of the Biblia Hebraic Stuttgartensia with morphological annotations from [ETCBC](https://github.com/etcbc/bhsa) and syntactic annotations partially based on [MACULA](https://github.com/Clear-Bible/macula-hebrew/).



This treebank contains portions of the Hebrew Bible as digitized and annotated in the [Biblia Hebraica Stuttgartensia (Amstelodamensis)](http://dx.doi.org/10.17026%2Fdans-z6y-skyh) by the [Eep Talstra Centre for Bible and Computer](http://etcbc.nl) at Vrije Universiteit Amsterdam. Those annotations are licensed under [Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/).

The corpus can be found at [github.com/etcbc/bhsa](https://github.com/etcbc/bhsa). The dependency annotations were generated using VISL CG-3 and manually verified by Daniel Swanson. The code for generating them can be found at [https://github.com/mr-martian/hbo-UD](https://github.com/mr-martian/hbo-UD). Errors in the data should be reported to that repository.

The parsing process draws heavily on the constituency treebank developed by the Groves Center and released by Biblia, Inc as part of the [MACULA Hebrew](https://github.com/Clear-Bible/macula-hebrew/) dataset, which is licensed under a [Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

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

[Aspect](hbo_ptnk-feat-Aspect.html) – [Case](hbo_ptnk-feat-Case.html) – [ExtPos](hbo_ptnk-feat-ExtPos.html) – [Gender](hbo_ptnk-feat-Gender.html) – [HebBinyan](hbo_ptnk-feat-HebBinyan.html) – [Mood](hbo_ptnk-feat-Mood.html) – [Number](hbo_ptnk-feat-Number.html) – [NumType](hbo_ptnk-feat-NumType.html) – [Person](hbo_ptnk-feat-Person.html) – [Polarity](hbo_ptnk-feat-Polarity.html) – [PronType](hbo_ptnk-feat-PronType.html) – [Tense](hbo_ptnk-feat-Tense.html) – [VerbForm](hbo_ptnk-feat-VerbForm.html) – [Voice](hbo_ptnk-feat-Voice.html)

## Relations

[acl](hbo_ptnk-dep-acl.html) – [acl:relcl](hbo_ptnk-dep-acl-relcl.html) – [advcl](hbo_ptnk-dep-advcl.html) – [advmod](hbo_ptnk-dep-advmod.html) – [amod](hbo_ptnk-dep-amod.html) – [appos](hbo_ptnk-dep-appos.html) – [case](hbo_ptnk-dep-case.html) – [cc](hbo_ptnk-dep-cc.html) – [ccomp](hbo_ptnk-dep-ccomp.html) – [compound:smixut](hbo_ptnk-dep-compound-smixut.html) – [conj](hbo_ptnk-dep-conj.html) – [cop](hbo_ptnk-dep-cop.html) – [csubj](hbo_ptnk-dep-csubj.html) – [det](hbo_ptnk-dep-det.html) – [discourse](hbo_ptnk-dep-discourse.html) – [dislocated](hbo_ptnk-dep-dislocated.html) – [expl](hbo_ptnk-dep-expl.html) – [fixed](hbo_ptnk-dep-fixed.html) – [flat](hbo_ptnk-dep-flat.html) – [flat:name](hbo_ptnk-dep-flat-name.html) – [iobj](hbo_ptnk-dep-iobj.html) – [mark](hbo_ptnk-dep-mark.html) – [nmod](hbo_ptnk-dep-nmod.html) – [nmod:poss](hbo_ptnk-dep-nmod-poss.html) – [nsubj](hbo_ptnk-dep-nsubj.html) – [nsubj:outer](hbo_ptnk-dep-nsubj-outer.html) – [nummod](hbo_ptnk-dep-nummod.html) – [obj](hbo_ptnk-dep-obj.html) – [obl](hbo_ptnk-dep-obl.html) – [obl:npmod](hbo_ptnk-dep-obl-npmod.html) – [orphan](hbo_ptnk-dep-orphan.html) – [parataxis](hbo_ptnk-dep-parataxis.html) – [punct](hbo_ptnk-dep-punct.html) – [root](hbo_ptnk-dep-root.html) – [vocative](hbo_ptnk-dep-vocative.html) – [xcomp](hbo_ptnk-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 5608 sentences, 99944 tokens and 145866 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 29628 tokens (30%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 4 types of words that contain both letters and punctuation. Examples: פְּדָה־צֽוּר, כְּדָר־לָעֹ֔מֶר, מַה־, צוּרִֽי־שַׁדָּֽי</li>
</ul>

<ul>
<li>This corpus contains 39811 multi-word tokens. On average, one multi-word token consists of 2.15 syntactic words.</li>
<li>There are 19439 types of multi-word tokens. Examples: וְאֶת, וְכָל, וַיֹּ֣אמֶר, וַיֹּ֤אמֶר, וְאִם, בְּכָל, וְלֹ֥א, וַיֹּ֨אמֶר, לִפְנֵ֣י, לֵאמֹ֑ר, וַיְדַבֵּ֥ר, וְלֹֽא, וְעַל, לִפְנֵ֥י, לֵּאמֹֽר, וְלֹ֣א, הָאָ֔רֶץ, וְאֶל, וְלֹא, הָאָֽרֶץ, וַיֹּ֥אמֶר, אֱלֹהֶ֔יךָ, וְאֵת֙, לְךָ֖, אֹתֹ֖ו, הָאָ֑רֶץ, לְכָל, אֱלֹהֶ֖יךָ, לֵאמֹֽר, וְאֵ֖ת, בְּאֶ֣רֶץ, לִבְנֵ֣י, הָעָ֖ם, לֹ֖ו, כַּאֲשֶׁ֛ר, הָאָ֖רֶץ, לַיהוָֽה, וַיֹּ֨אמֶר֙, לָכֶ֖ם, כַּאֲשֶׁ֥ר, לֵאמֹ֔ר, לָהֶ֖ם, לֹ֔ו, אֹתָ֖ם, הַזֶּֽה, וַיִּסְע֖וּ, בַּיֹּ֣ום, הַזֶּ֑ה, וַיֹּ֖אמֶר, וַיֹּ֗אמֶר.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SYM, X</li>
</ul>

<ul>
<li>This corpus contains 9 word types tagged as particles (PART): אֵיכָ֞ה, אֵיכָ֥ה, אֵיכָ֨ה, אֵיכָה֙, הֲ, הֶ, הֶֽ, הַ, הַֽ</li>
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
    <li>AUX: יִהְיֶ֥ה, יִהְיֶ֣ה, יְהִ֗י, יְהִי, הָיָ֥ה, יְהִ֣י, יְהִ֥י, יִֽהְיֶה, יְהִי֙, הָיָ֗ה</li>
    <li>VERB: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֨אמֶר, יְדַבֵּ֥ר, יֹּ֥אמֶר, צִוָּ֥ה, יֹּ֨אמֶר֙, יִּסְע֖וּ, יֹּ֖אמֶר, יֹּ֗אמֶר</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: הְיֹ֥ות, הְיֹ֥ת, הְיֹ֖ות, הְיֹ֣ות, הְיֹ֣ת, הְיֹותָ֣, הְיֹ֖ת, הְיֹ֛ת, הְיֹ֤ות, הְיֹ֧ות</li>
    <li>VERB: אמֹֽר, אמֹ֑ר, אמֹ֔ר, אמֹ֗ר, מֹ֥ות, הֹולִידֹ֣, רִשְׁתָּֽ, תֵ֥ת, דַבֵּ֣ר, עֲשֹׂ֔ות</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: הֹויָ֗ה</li>
    <li>NOUN: פְקֻדֵי, אֹיְבֵי, פְּקֻדֵי, יֹצֵ֥א, זָבַ֥ת, רֹצֵ֔חַ, גֹּאֵ֣ל, מֵּ֖ת, מַכֵּ֥ה, זָּ֖ב</li>
    <li>VERB: נֹתֵ֥ן, מְצַוְּ, בְּלוּלָ֥ה, מְלֵאִ֗ים, מְלֵאָ֥ה, בְּלוּלָ֣ה, נֹתֵ֣ן, בָא, נֹּגֵ֥עַ, מְצַוֶּ֥ה</li>
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
      <li>ADJ: יְמָנִ֔ית, יְמָנִ֑ית, חֲזָקָֽה, חַיָּ֖ה, חֲזָקָ֔ה, חֲזָקָה֙, גְּדֹלֹ֥ת, גְדֹלָ֖ה, חַיָּ֔ה, טֹּובָ֔ה</li>
      <li>AUX-Fin: הָיְתָ֥ה, תִּהְיֶ֣ה, תִּהְיֶ֥ה, הָֽיְתָה֙, הָיְתָה, תְּהִי, תִּֽהְיֶה, הָיְתָ֣ה, תְּהִ֥י, תְּהִי֙</li>
      <li>AUX-Part: הֹויָ֗ה</li>
      <li>NOUN: אֶ֣רֶץ, אֶ֥רֶץ, אָ֔רֶץ, אָֽרֶץ, אָ֑רֶץ, שָׁנָ֑ה, אָ֖רֶץ, מִשְׁפַּ֖חַת, בַּת, שָׁנָ֖ה</li>
      <li>NOUN-Part: זָבַ֥ת, זָבַ֤ת, זָבַ֨ת, מְיַלְּדֹ֖ת, מְיַלְּדֹת֙, מְקֻצְעֹ֖ת, מַעֲלַ֥ת, נְּטוּיָֽה, נֹּותֶ֨רֶת֙, אֲהוּבָ֔ה</li>
      <li>NUM: שְׁתֵּ֣י, מֵאֹ֖ות, מֵאֹֽות, שִׁבְעַ֥ת, שִׁבְעַ֣ת, אַחַ֖ת, אַחַ֗ת, אַחַ֛ת, אַרְבָּעָ֥ה, חֲמִשָּׁה֙</li>
      <li>PRON: הּ, הָ, ה, ךְ, הּ֙, הִ֖וא, הִ֔וא, הִֽוא, הִ֑וא, הָ֙</li>
      <li>PROPN: לֵאָ֔ה, רָחֵ֖ל, שָׂרָ֖ה, שָׂרָ֣ה, רָחֵ֑ל, רָחֵ֔ל, רָחֵל֙, שָׂרַ֣י, לֵאָ֖ה, ר֣וּת</li>
      <li>VERB-Fin: תֵּ֣לֶד, תֹּ֣אמֶר, תִּקְרָ֥א, נִכְרְתָ֛ה, תֹּ֤אמֶר, תֹּ֕אמֶר, תֹּ֗אמֶר, תֵּ֥לֶד, אָסְרָ֥ה, תֹּ֨אמֶר֙</li>
      <li>VERB-Part: בְּלוּלָ֥ה, מְלֵאָ֥ה, בְּלוּלָ֣ה, בְּלוּלֹ֣ת, נְטוּיָ֔ה, אֹכֶ֖לֶת, בָּאָ֖ה, הֹלֶ֣כֶת, חֹֽבְרֹ֔ת, כְּתוּבָ֕ה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: טָמֵ֥א, רָ֖ע, טָהֹ֑ור, גָּדֹ֖ול, תְּמִימִֽם, זָכָ֥ר, טָהֹ֥ור, טָהֹֽור, זָכָ֔ר, טָהֹ֖ור</li>
      <li>AUX-Fin: יִהְיֶ֥ה, יִהְיֶ֣ה, יְהִ֗י, יְהִי, הָיָ֥ה, יְהִ֣י, יְהִ֥י, יִֽהְיֶה, יְהִי֙, הָיָ֗ה</li>
      <li>NOUN: כָּל, כָל, בֶּן, בְּנֵ֣י, בְּנֵ֥י, פְנֵ֣י, אִ֣ישׁ, בְנֵ֣י, פְנֵ֥י, אֱלֹהִ֖ים</li>
      <li>NOUN-Part: פְקֻדֵי, אֹיְבֵי, פְּקֻדֵי, יֹצֵ֥א, רֹצֵ֔חַ, גֹּאֵ֣ל, מֵּ֖ת, מַכֵּ֥ה, זָּ֖ב, חֹתֵ֣ן</li>
      <li>NUM: שְׁלֹשִׁ֣ים, חֲמִשִּׁ֣ים, אַרְבָּעִ֥ים, עֶשְׂרִ֤ים, שִׁבְעִ֥ים, אַרְבָּעִ֣ים, חֲמִשִּׁ֥ים, חֲמִשִּׁ֛ים, עֶשְׂרִ֣ים, עֶשְׂרִ֥ים</li>
      <li>PRON: ו, ךָ, ם, ו֙, ךָ֖, ךָ֙, הוּ, כֶ֔ם, כֶ֖ם, נּוּ</li>
      <li>PROPN: יְהוָ֖ה, יְהוָה֙, יְהוָ֔ה, יְהוָ֣ה, יְהוָֽה, יִשְׂרָאֵ֔ל, יְהוָ֥ה, מֹשֶׁ֔ה, יְהוָ֑ה, יִשְׂרָאֵֽל</li>
      <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֨אמֶר, יְדַבֵּ֥ר, יֹּ֥אמֶר, צִוָּ֥ה, יֹּ֨אמֶר֙, יִּסְע֖וּ, יֹּ֖אמֶר, יֹּ֗אמֶר</li>
      <li>VERB-Part: נֹתֵ֥ן, מְצַוְּ, מְלֵאִ֗ים, נֹתֵ֣ן, בָא, נֹּגֵ֥עַ, מְצַוֶּ֥ה, בָּא֙, בָּר֥וּךְ, גָּ֣ר</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>NOUN: עֵינֵ֣י, עֵינֵ֥י, עֵינֵ֖י, יְדֵי, עֵינֵי, אָזְנֵ֣י, עֵֽינֵי, עֵינֶ֑י, עֵינֶ֔י, עֵינֶֽי</li>
      <li>NUM: שְׁתֵּ֣י, שְׁנֵי, שְׁנֵ֣י, שְׁנֵ֥י, שְׁנֵ֖י, שְׁנֵֽי, שְׁתֵּ֥י, שְׁנַיִם֒, שְׁנֵ֤י, שְׁנֵי֙</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: תְּמִימִֽם, אֲחֵרִ֑ים, חַיִּ֖ים, אֲחֵרִ֔ים, אֲחֵרִ֖ים, חַיִּֽים, טְמֵאִ֥ים, חַיִּ֑ים, קְדֹשִׁ֔ים, רַבִּ֑ים</li>
      <li>AUX-Fin: הָי֥וּ, הָי֣וּ, יִהְי֥וּ, הֱיִיתֶ֖ם, הָי֤וּ, הָיוּ֙, יִּֽהְיוּ֙, יִּהְי֥וּ, יִּהְי֖וּ, יִּהְי֣וּ</li>
      <li>NOUN: בְּנֵ֣י, בְּנֵ֥י, פְנֵ֣י, בְנֵ֣י, פְנֵ֥י, אֱלֹהִ֖ים, בְנֵֽי, בְּנֵֽי, בְּנֵי, אֱלֹהֵי</li>
      <li>NOUN-Part: פְקֻדֵי, אֹיְבֵי, פְּקֻדֵי, פְקֻ֣דֵי, אֹֽיְבֵי, אֹיְבֶ֑י, אֹיְבֶ֨י, יֹשְׁבֵ֣י, יֹשְׁבֵ֥י, פְּקֻדִ֔ים</li>
      <li>NUM: מֵאֹ֖ות, מֵאֹֽות, שְׁלֹשִׁ֣ים, חֲמִשִּׁ֣ים, אַרְבָּעִ֥ים, עֶשְׂרִ֤ים, שִׁבְעִ֥ים, אַרְבָּעִ֣ים, חֲמִשִּׁ֥ים, חֲמִשִּׁ֛ים</li>
      <li>PRON: ם, נוּ, כֶ֔ם, כֶ֖ם, כֶֽם, הֶ֖ם, כֶ֑ם, הֶ֑ם, הֶ֔ם, כֶם֙</li>
      <li>PROPN: רְפָאִֽים, אַשּׁוּרִ֥ם, זַמְזֻמִּֽים, חֻשִֽׁים, כַּסְלֻחִ֗ים, לְאֻמִּֽים, לְהָבִ֖ים, לְטוּשִׁ֖ים, לוּדִ֧ים, נַפְתֻּחִֽים</li>
      <li>VERB-Fin: יִּסְע֖וּ, יַּחֲנ֖וּ, יֹּ֣אמְר֔וּ, יֹּאמְר֣וּ, יָּבֹ֖אוּ, יֹּאמְר֖וּ, תַעֲשֽׂוּ, עֲשִׂיתֶ֖ם, עָשׂ֖וּ, עָשׂ֣וּ</li>
      <li>VERB-Part: מְלֵאִ֗ים, יֹּצְאִ֖ים, עֹבְרִ֥ים, בָּאִ֖ים, בְּלוּלֹ֣ת, יֹּשְׁבִ֖ים, בָּאִ֥ים, יֹצְאִ֖ים, מְאָדָּמִ֛ים, מְשֻׁחִ֣ים</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: טָמֵ֥א, יְמָנִ֔ית, רָ֖ע, טָהֹ֑ור, גָּדֹ֖ול, זָכָ֥ר, טָהֹ֥ור, טָהֹֽור, זָכָ֔ר, טָהֹ֖ור</li>
      <li>AUX-Fin: יִהְיֶ֥ה, יִהְיֶ֣ה, יְהִ֗י, יְהִי, הָיָ֥ה, יְהִ֣י, יְהִ֥י, יִֽהְיֶה, יְהִי֙, הָיָ֗ה</li>
      <li>AUX-Part: הֹויָ֗ה</li>
      <li>NOUN: כָּל, כָל, בֶּן, אֶ֣רֶץ, אֶ֥רֶץ, אִ֣ישׁ, אָ֔רֶץ, אָֽרֶץ, יֹּ֣ום, אָ֑רֶץ</li>
      <li>NOUN-Part: יֹצֵ֥א, זָבַ֥ת, רֹצֵ֔חַ, גֹּאֵ֣ל, מֵּ֖ת, מַכֵּ֥ה, זָּ֖ב, חֹתֵ֣ן, חֹתֵ֥ן, רֹצֵ֑חַ</li>
      <li>NUM: אֶחָ֖ד, אֶ֖לֶף, אֶחָד֙, אֶחָ֑ד, שִׁבְעַ֥ת, אֶחָֽד, אֶחָ֥ד, עָשָׂ֖ר, שִׁבְעַ֣ת, שֶׁ֣בַע</li>
      <li>PRON: ו, ךָ, י, הּ, ו֙, ךָ֖, הָ, ךָ֙, ךְ, הוּ</li>
      <li>PROPN: יְהוָ֖ה, יְהוָה֙, יְהוָ֔ה, יְהוָ֣ה, יְהוָֽה, יִשְׂרָאֵ֔ל, יְהוָ֥ה, מֹשֶׁ֔ה, יְהוָ֑ה, יִשְׂרָאֵֽל</li>
      <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֨אמֶר, יְדַבֵּ֥ר, יֹּ֥אמֶר, צִוָּ֥ה, יֹּ֨אמֶר֙, יֹּ֖אמֶר, יֹּ֗אמֶר, יֹּ֕אמֶר</li>
      <li>VERB-Part: נֹתֵ֥ן, מְצַוְּ, בְּלוּלָ֥ה, מְלֵאָ֥ה, בְּלוּלָ֣ה, נֹתֵ֣ן, בָא, נֹּגֵ֥עַ, מְצַוֶּ֥ה, בָּא֙</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>NOUN: מַ֔עְלָה, מָ֑עְלָה, מִּזְבֵּ֔חָה, אָֽרְצָה, מִּזְבֵּ֑חָה, אַ֥רְצָה, אַ֣רְצָה, מִּזְבֵּֽחָה, חֽוּצָה, בֵּ֥יתָה</li>
      <li>PROPN: מִצְרַ֔יְמָה, מִצְרָ֑יְמָה, מִצְרָֽיְמָה, מִצְרַ֖יְמָה, מִצְרַ֨יְמָה֙, גֹּ֑שְׁנָה, חָרָֽנָה, שֵׂעִֽירָה, אֵילִ֑מָה, אֵילִ֔מָה</li>
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
      <li>ADV: לֹ֥א, לֹא, לֹ֣א, לֹֽא, אַל, לֹ֤א, לֹ֨א, לֹ֖א, לֹ֧א, אַֽל</li>
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
      <li>AUX-Fin: יִהְיֶ֥ה, יִהְיֶ֣ה, יִֽהְיֶה, יִהְיֶֽה, יִהְיֶ֖ה, יִהְיֶ֨ה, תִּהְיֶ֣ה, יִהְי֥וּ, יִהְיֶ֑ה, יִהְיֶ֤ה</li>
      <li>VERB-Fin: יוּמָֽת, תַּעֲשֶׂ֥ה, תַּעֲשֶׂ֣ה, יְבָרֶכְ, יִטְמָ֖א, תַּעֲשֶׂ֖ה, תַעֲשֽׂוּ, תְגַלֵּ֑ה, יִטְמָֽא, יֹ֥אכַל</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: הָיָ֥ה, הָיָ֗ה, הָיָ֣ה, הָיָה֙, הָיָ֤ה, הָי֥וּ, הָי֣וּ, הָיָ֞ה, הָיְתָ֥ה, הָיָ֖ה</li>
      <li>VERB-Fin: צִוָּ֥ה, דִּבֶּ֥ר, עָשִׂ֥יתָ, אָמַרְתָּ֣, אָמַ֣ר, נָתַ֥ן, עָשִׂ֣יתָ, עָשָׂ֥ה, רָחַ֥ץ, טָמֵ֥א</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: הְיֵ֥ה, הְיֵ֖ה, הְיֵה, הֱוֵ֤ה, הֱי֖וּ, הֱי֥וּ, הֱיֵ֧ה, הֲיִ֖י</li>
      <li>VERB-Fin: הִשָּׁ֣מֶר, דַּבֵּ֞ר, דַּבֵּר֙, עֲשֵׂה, קַח, לֵ֣ךְ, קַ֣ח, לֶךְ, אֱמֹ֣ר, דַּבֵּ֛ר</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: יִהְיֶ֥ה, יִהְיֶ֣ה, יְהִ֗י, יְהִי, הָיָ֥ה, יְהִ֣י, יְהִ֥י, יִֽהְיֶה, יְהִי֙, הָיָ֗ה</li>
      <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֨אמֶר, יְדַבֵּ֥ר, יֹּ֥אמֶר, צִוָּ֥ה, יֹּ֨אמֶר֙, יִּסְע֖וּ, יֹּ֖אמֶר, יֹּ֗אמֶר</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: יְהִ֗י, יְהִי, יְהִ֣י, יְהִי֙, יְהִ֥י, יְהִ֤י, יְהִ֕י, יְהִ֖י, יְהִי֩, יְהִ֞י</li>
      <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֨אמֶר, יְדַבֵּ֥ר, יֹּ֥אמֶר, יֹּ֨אמֶר֙, יִּסְע֖וּ, יֹּ֖אמֶר, יֹּ֗אמֶר, יַּחֲנ֖וּ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>NOUN-Part: פְקֻדֵי, פְּקֻדֵי, פְקֻ֣דֵי, פְּקֻדִ֔ים, פְּקֻדִ֞ים, פְּקוּדֵ֣י, פְּקוּדֵ֥י, פְקֻדָ֑י, גְל֥וּי, חֲל֥וּץ</li>
      <li>VERB-Part: בְּלוּלָ֥ה, בְּלוּלָ֣ה, בָּר֥וּךְ, מָשְׁזָ֑ר, אָר֕וּר, אָר֥וּר, מָשְׁזָֽר, אָר֗וּר, בְּלוּלֹ֣ת, מָשְׁזָ֗ר</li>
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
      <li>PRON: זֶּֽה, זֶּ֔ה, זֶּ֑ה, אֵ֖לֶּה, זֶּ֖ה, אֵ֣לֶּה, אֵ֔לֶּה, אֵ֛לֶּה, זֹ֣את, אֵ֨לֶּה֙</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: מַה, מִ֣י, מִֽי, מִי, מָ֣ה, מִ֥י, מָ֥ה, מִ֤י, מִ֖י, מֶֽה</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: ו, ךָ, י, ם, הּ, נוּ, ו֙, ךָ֖, הָ, ךָ֙</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: אֶחָ֖ד, אֶ֖לֶף, שְׁתֵּ֣י, מֵאֹ֖ות, שְׁנֵי, אֶחָד֙, מֵאֹֽות, אֶחָ֑ד, שִׁבְעַ֥ת, אֶחָֽד</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: שְּׁבִיעִ֔י, שֵּׁנִ֔י, שְּׁבִיעִ֖י, שְּׁבִיעִ֗י, רִאשֹׁ֔ון, רִאשֹׁ֖ון, שֵּׁנִ֖ית, שְּׁלִישִׁ֔י, שֵּׁנִֽית, שְּׁלִישִׁ֑י</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: הָיִ֥יתִי, אֶֽהְיֶ֖ה, הָיִ֖ינוּ, אֶֽהְיֶ֣ה, אֶֽהְיֶ֥ה, הָיִ֔יתִי, הָיִ֥ינוּ, אֶֽהְיֶ֑ה, אֶֽהְיֶ֔ה, אֶֽהְיֶ֤ה</li>
      <li>PRON: י, נוּ, נִי, י֙, אֲנִ֖י, אֲנִ֥י, נוּ֙, אָנֹכִ֖י, אֲנִ֣י, אָנֹכִ֥י</li>
      <li>VERB-Fin: נָתַ֥תִּי, נָתַ֖תִּי, יָדַ֔עְתִּי, אֶֽעֱשֶׂ֥ה, אֶתֵּ֣ן, נָתַ֣תִּי, נָתַתִּ֤י, אֶמְצָא, אֹמַ֖ר, אוּכַל֙</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: הֱיִיתֶ֖ם, הָיִ֖יתָ, הָיִ֥יתָ, הָיִ֨יתָ֙, הְיִיתֶ֣ם, הְיֵ֥ה, הָיִ֜יתָ, הָיִ֣יתָ, תִּֽהְיֶ֥ה, תִּהְיוּ</li>
      <li>PRON: ךָ, ךָ֖, ךָ֙, ךְ, כֶ֔ם, כֶ֖ם, כֶֽם, כֶ֑ם, ךָ֔, כֶם֙</li>
      <li>VERB-Fin: עָשִׂ֥יתָ, אָמַרְתָּ֣, עָשִׂ֣יתָ, תַּעֲשֶׂ֥ה, אָמַרְתָּ֖, תַּעֲשֶׂ֣ה, עָשִׂ֤יתָ, הִשָּׁ֣מֶר, תַּעֲשֶׂ֖ה, תַעֲשֽׂוּ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: יִהְיֶ֥ה, יִהְיֶ֣ה, יְהִ֗י, יְהִי, הָיָ֥ה, יְהִ֣י, יְהִ֥י, יִֽהְיֶה, יְהִי֙, הָיָ֗ה</li>
      <li>PRON: ו, ם, הּ, ו֙, הָ, הוּ, נּוּ, הֶ֖ם, הֶ֑ם, הֶ֔ם</li>
      <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֨אמֶר, יְדַבֵּ֥ר, יֹּ֥אמֶר, צִוָּ֥ה, יֹּ֨אמֶר֙, יִּסְע֖וּ, יֹּ֖אמֶר, יֹּ֗אמֶר</li>
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
          <li>NOUN: אֶ֕פֶס, אֶ֚פֶס</li>
          <li>SCONJ: כִּ֚י, כִּ֣י, כִּ֥י, כִּ֧י, כִּ֖י, כִּ֛י, כִּ֠י, כִּֽי, כִּי, כִּ֡י</li>
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
          <li>NOUN-Part: מַכֵּ֥ה, מַּשְׁקִ֔ים, מַּשְׁקִ֛ים, מַעֲלַ֥ת, מַפְרִ֨יס, מֹושִֽׁיעַ, מֵּלִ֖יץ, מַ֨כֵּה, מַּֽעֲלֵ֣י, מַּכֶּ֔ה</li>
          <li>VERB-Fin: יֹּ֥ולֶד, יֹּ֖ולֶד, הֹולִ֥יד, יָּבֵ֥א, הִקְטִ֨יר, הִקְרַבְתֶּ֨ם, הֹולִ֣יד, הִקְטִ֖יר, הִקְרִ֣יב, הִקְרִ֥יב</li>
          <li>VERB-Inf: הֹולִידֹ֣, הֹוצִ֥יא, הֲבִ֣יאֲ, הָקִ֣ים, הֲמִיתֹֽ, הֲרִֽימְ, הֵיטֵ֑ב, הֵיטֵ֔ב, הַבְדִּ֔יל, הַבְדִּ֕יל</li>
          <li>VERB-Part: מֵבִ֥יא, מֵבִ֨יא, מֵשִׁ֣יב, מַּקְרִ֞יב, מַּקְרִ֥יב, מַכֵּה, מַלִּינִ֖ם, מַמְרִ֥ים, מַקְבִּילֹת֙, מֹּוצִ֤יא</li>
        </ul>
      </li>
      <li>HITPAEL
        <ul>
          <li>NOUN-Part: מִּטַּהֵ֖ר, מִּטַּהֵ֑ר, מִּטַּהֵר֙, מִּטַּהֵ֛ר, מִּטַּהֵ֨ר, מִתְאֹ֣נְנִ֔ים</li>
          <li>VERB-Fin: הִתְבָּרֲכ֣וּ, הִתְהַלֵּ֥ךְ, הִתְעַלַּמְתָּ֖, יִּֽתְיַצְּב֖וּ, יִּֽתְנַבְּא֖וּ, יִּתְפַּלֵּ֥ל, יִטַּמָּ֖א, יִטַּמָּֽא, יִתְיַצֵּ֥ב, יִתְנֶחָ֑ם</li>
          <li>VERB-Inf: הִֽתְגַּלְּחֹ֥, הִשְׂתָּרֵֽר, הִתְאַסֵּף֙, הִתְאַפֵּ֗ק, הִתְגֹּלֵ֤ל, הִתְוַדַּ֥ע, הִתְחַֽנְנֹ֥, הִתְמַהְמֵ֔הַּ, הִתְנַחֵ֔ם, הִתְנַחֵל֙</li>
          <li>VERB-Part: מִּטַּהֵ֖ר, מִּטַּהֵ֛ר, מִּתְאַוִּֽים, מִּתְהַפֶּ֔כֶת, מִֽתְנַבְּאִ֖ים, מִדַּבֵּ֣ר, מִסְתֹּולֵ֣ל, מִשְׁתָּאֵ֖ה, מִתְאַמֶּ֥צֶת, מִתְהַלֵּ֣ךְ</li>
        </ul>
      </li>
      <li>HUFAL
        <ul>
          <li>NOUN-Part: מֻכִּ֖ים, מֻסַבֹּ֛ת, מֻרְבֶּ֣כֶת</li>
          <li>VERB-Fin: יוּמָֽת, יוּמַ֖ת, יֻּגַּ֥ד, יוּמָ֑ת, הוּבָ֖א, יֻסַּ֖ךְ, יוּמְת֖וּ, יוּמַ֥ת, יוּמָ֔ת, יוּמָ֖תוּ</li>
          <li>VERB-Inf: הְשַׁמָּה֙, הֳשַּׁמָּ֔ה, הָפְדֵּה֙, הָשַּׁמָּ֖ה, הֻגֵּ֨ד, הֻלֶּ֣דֶת</li>
          <li>VERB-Part: מָשְׁזָ֑ר, מָשְׁזָֽר, מָשְׁזָ֗ר, מָשְׁזָ֖ר, מָרְאֶ֖ה, מָשְׁזָ֔ר, מֻּכֶּ֗ה, מֻּכָּ֛ה, מֻּכָּ֥ה, מֻֽסַבֹּ֖ת</li>
        </ul>
      </li>
      <li>NIFAL
        <ul>
          <li>AUX-Fin: נִֽהְיָ֗ה, נִהְיֵ֣יתָֽ, נִהְיָ֔תָה</li>
          <li>NOUN-Part: נִּשְׁאָרִ֖ים, נֹּותֶ֨רֶת֙, נְבֹנִ֛ים, נִּגְלֹ֞ת, נִּסְתָּרִ֖ים, נִּסְתָּרֹ֔ת, נִּשְׁאָרִ֛ים, נִֽדַּחֲ, נִכְבָּדִ֖ים, נִפְלְאֹתַ֔</li>
          <li>VERB-Fin: נִכְרְתָ֛ה, הִשָּׁ֣מֶר, נִסְלַ֥ח, נִשְׁבַּ֥ע, נִרְאָ֥ה, נִשְׁבַּ֖ע, נִשְׁבַּ֧ע, הִשָּׁ֧מֶר, יִמָּצְא֥וּן, יִמָּצֵ֣א</li>
          <li>VERB-Inf: הִמָּשַׁ֣ח, הִשָּׁמְדָֽ, הִלָּחֵ֖ם, הִמֹּ֥ול, הִמֹּ֧ול, רָאֹות֙, הִ֨מֹּלֹ֔, הִבָּֽרְאָ֑, הִבָּֽרְאָֽ, הִגָּמֵ֥ל</li>
          <li>VERB-Part: נִצָּ֖ב, נִצָּ֣ב, נְכֹנִ֖ים, נִּשְׁאָרִ֣ים, נִצָּ֥ב, נִצָּב֙, נִצָּבִ֖ים, נָכֹ֣ון, נֹּותָ֗ר, נֹּותָ֥ר</li>
        </ul>
      </li>
      <li>PAAL
        <ul>
          <li>AUX-Fin: יִהְיֶ֥ה, יִהְיֶ֣ה, יְהִ֗י, יְהִי, הָיָ֥ה, יְהִ֣י, יְהִ֥י, יִֽהְיֶה, יְהִי֙, הָיָ֗ה</li>
          <li>AUX-Inf: הְיֹ֥ות, הְיֹ֥ת, הְיֹ֖ות, הְיֹ֣ות, הְיֹ֣ת, הְיֹותָ֣, הְיֹ֖ת, הְיֹ֛ת, הְיֹ֤ות, הְיֹ֧ות</li>
          <li>AUX-Part: הֹויָ֗ה</li>
          <li>NOUN-Part: פְקֻדֵי, אֹיְבֵי, פְּקֻדֵי, יֹצֵ֥א, זָבַ֥ת, רֹצֵ֔חַ, גֹּאֵ֣ל, מֵּ֖ת, זָּ֖ב, חֹתֵ֣ן</li>
          <li>VERB-Fin: יֹּ֣אמֶר, יֹּ֤אמֶר, יֹּ֨אמֶר, יֹּ֥אמֶר, יֹּ֨אמֶר֙, יִּסְע֖וּ, יֹּ֖אמֶר, יֹּ֗אמֶר, יַּחֲנ֖וּ, יֹּ֕אמֶר</li>
          <li>VERB-Inf: אמֹֽר, אמֹ֑ר, אמֹ֔ר, אמֹ֗ר, מֹ֥ות, רִשְׁתָּֽ, תֵ֥ת, עֲשֹׂ֔ות, עֲשֹׂ֣ות, עֲשֹׂ֥ות</li>
          <li>VERB-Part: נֹתֵ֥ן, בְּלוּלָ֥ה, מְלֵאִ֗ים, מְלֵאָ֥ה, בְּלוּלָ֣ה, נֹתֵ֣ן, בָא, נֹּגֵ֥עַ, בָּא֙, בָּר֥וּךְ</li>
        </ul>
      </li>
      <li>PIEL
        <ul>
          <li>NOUN-Part: מְחֹקֵ֖ק, מְיַלְּדֹ֖ת, מְיַלְּדֹת֙, מְקַלֵּ֗ל, מְרַגְּלִֽים, מְאָֽרֲרִ֑ים, מְאָֽרֲרִֽים, מְאָרֲרִ֖ים, מְבָ֣רְכֶ֔י, מְבָרֲכֶ֖י</li>
          <li>VERB-Fin: יְדַבֵּ֥ר, צִוָּ֥ה, יְדַבֵּ֣ר, דִּבֶּ֥ר, צִוָּ֧ה, יְדַבֵּ֨ר, צִוָּ֣ה, יְבָרֶכְ, כִפֶּ֥ר, בִֽעַרְתָּ֥</li>
          <li>VERB-Inf: דַבֵּ֣ר, כַפֵּ֥ר, כַפֵּ֖ר, בָרֵ֣ךְ, דַּבֵּ֥ר, דַבֵּ֥ר, כַהֵֽן, כַפֵּ֣ר, מַהֵ֔ר, שַׁכֵּ֥ן</li>
          <li>VERB-Part: מְצַוְּ, מְצַוֶּ֥ה, מְכַסֶּ֣ה, מְקַדִּשְׁ, מְצַוֶּ֣ה, מְקַדְּשָֽׁ, מְשַׁלֵּ֖חַ, מָאֵ֥ן, מְדַבֵּ֧ר, מְרַגְּלִ֖ים</li>
        </ul>
      </li>
      <li>PUAL
        <ul>
          <li>NOUN-Part: מְקֻצְעֹ֖ת, מְּצֹרָ֔ע, מְאָדָּמִ֔ים, מְבֹרֶ֥כֶת, מְחֻסְפָּ֔ס</li>
          <li>VERB-Fin: יֻלַּד, יֻלַּ֖ד, חֻבָּֽר, כֻבַּ֥ס, צֻוֵּֽיתִי, אֹרָ֔שָׂה, אֹרָ֖שָׂה, בֻּשָּׁ֔לָה, גֹרְשׁ֣וּ, גֻּנַּ֔בְתִּי</li>
          <li>VERB-Inf: גֻנֹּ֣ב</li>
          <li>VERB-Part: מְאָדָּמִ֛ים, מְאָדָּמִ֑ים, מְאֹ֣רָשָׂ֔ה, מְחֻשָּׁקִ֣ים, מְשֻׁלָּבֹ֔ת, מְאֹרָשָׂ֖ה, מְבֹרָ֔ךְ, מְבֻשָּׁ֖ל, מְמֻלָּ֖ח, מְפֻתָּחֹת֙</li>
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
      <li>VERB-Fin--NOUN (2207)</li>
      <li>VERB-Fin--NOUN-ADP(את) (11)</li>
      <li>VERB-Fin--NOUN-ADP(כ) (3)</li>
      <li>VERB-Fin--NOUN-ADP(מן) (13)</li>
      <li>VERB-Fin--PRON (390)</li>
      <li>VERB-Fin--PRON-ADP(כ) (1)</li>
      <li>VERB-Fin--PRON-ADP(מן) (3)</li>
      <li>VERB-Inf--NOUN (92)</li>
      <li>VERB-Inf--NOUN-ADP(את) (3)</li>
      <li>VERB-Inf--PRON (281)</li>
      <li>VERB-Inf--PRON-ADP(את) (5)</li>
      <li>VERB-Part--NOUN (127)</li>
      <li>VERB-Part--PRON (305)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (1916)</li>
      <li>VERB-Fin--NOUN-ADP(את) (1783)</li>
      <li>VERB-Fin--NOUN-ADP(מן) (1)</li>
      <li>VERB-Fin--PRON (1040)</li>
      <li>VERB-Fin--PRON-ADP(את) (616)</li>
      <li>VERB-Inf--NOUN (189)</li>
      <li>VERB-Inf--NOUN-ADP(את) (209)</li>
      <li>VERB-Inf--PRON (174)</li>
      <li>VERB-Inf--PRON-ADP(את) (94)</li>
      <li>VERB-Part--NOUN (144)</li>
      <li>VERB-Part--NOUN-ADP(את) (63)</li>
      <li>VERB-Part--PRON (62)</li>
      <li>VERB-Part--PRON-ADP(את) (53)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-ADP(את) (9)</li>
      <li>VERB-Fin--PRON (27)</li>
      <li>VERB-Fin--PRON-ADP(את) (14)</li>
      <li>VERB-Inf--NOUN-ADP(את) (3)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-ADP(את) (2)</li>
      <li>VERB-Part--PRON (2)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>acl:relcl</a>, <a>compound:smixut</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>obl:npmod</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>compound</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>aux</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
