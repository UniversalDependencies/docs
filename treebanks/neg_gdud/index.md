---
layout: base
title:  'UD_Negidal-GDUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Negidal GDUD

Language: [Negidal](/neg/index.html) (code: `neg`)<br/>
Family: Tungusic

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Wenchao Li, Haitao Liu.

Repository: [UD_Negidal-GDUD](https://github.com/UniversalDependencies/UD_Negidal-GDUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udneg_gdud219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Negidal-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Negidal-GDUD/issues).
If you want to collaborate, please contact [widelia&nbsp;(æt)&nbsp;zju&nbsp;•&nbsp;edu&nbsp;•&nbsp;cn].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

UD_Negidal-GDUD is a treebank of Negidal, a Northern Tungusic language spoken along the Amgun and lower Amur rivers in the Khabarovsk Krai of the Russian Far East, based on grammatical example sentences derived from a reference grammar.




The Negidal GDUD (Grammar-Derived Universal Dependencies) treebank contains 62 sentences of Negidal (ISO 639-3: neg), a Northern Tungusic language spoken by the Negidal people along the Amgun River and adjacent areas of the lower Amur in the Khabarovsk Krai of the Russian Far East. Negidal is closely related to Evenki. The data consist of grammatical example sentences drawn from a reference grammar of Negidal, presented in a phonemic Latin-based transcription and accompanied by English translations and interlinear glosses.

All sentences are manually annotated with lemmas, universal part-of-speech tags (UPOS), morphological features, and dependency relations, following the Universal Dependencies (UD) guidelines. The annotation prioritizes UD core morphological features and dependency relations. The language-specific feature `Deixis` (with value `Remt`) is used on demonstrative determiners and one deictic particle, following the analysis of the reference grammar. Additional Negidal-specific morphological distinctions that do not correspond to any value in the universal feature inventory are encoded in the MISC column, in accordance with UD conventions.

## Data split

Because the treebank is small (well below the 20K-word threshold), all sentences are provided as test data.

## Morphological annotation

All UD core features used in the treebank take standard universal values, including `Clusivity=Ex` on exclusive first-person plural pronominal forms. The language-specific feature `Deixis=Remt` is used on demonstrative determiners and one deictic particle.

## Dependency annotation

UD core relations are used throughout the treebank.


## Acknowledgments

The Negidal GDUD treebank was created by Wenchao Li and Haitao Liu, based on grammatical example sentences from a reference grammar of Negidal. The annotation of lemmas, part-of-speech tags, morphological features, and dependency relations was carried out manually following the Universal Dependencies guidelines.

We thank Daniel Zeman for his guidance in setting up the treebank repository and for his help with the Universal Dependencies workflow, and the Universal Dependencies community for their support.



# Statistics of UD Negidal GDUD

## POS Tags

[ADJ](neg_gdud-pos-ADJ.html) – [ADP](neg_gdud-pos-ADP.html) – [ADV](neg_gdud-pos-ADV.html) – [AUX](neg_gdud-pos-AUX.html) – [CCONJ](neg_gdud-pos-CCONJ.html) – [DET](neg_gdud-pos-DET.html) – [INTJ](neg_gdud-pos-INTJ.html) – [NOUN](neg_gdud-pos-NOUN.html) – [NUM](neg_gdud-pos-NUM.html) – [PART](neg_gdud-pos-PART.html) – [PRON](neg_gdud-pos-PRON.html) – [PROPN](neg_gdud-pos-PROPN.html) – [PUNCT](neg_gdud-pos-PUNCT.html) – [VERB](neg_gdud-pos-VERB.html)

## Features

[Aspect](neg_gdud-feat-Aspect.html) – [Case](neg_gdud-feat-Case.html) – [Clusivity](neg_gdud-feat-Clusivity.html) – [Definite](neg_gdud-feat-Definite.html) – [Deixis](neg_gdud-feat-Deixis.html) – [Mood](neg_gdud-feat-Mood.html) – [Number](neg_gdud-feat-Number.html) – [Number[psor]](neg_gdud-feat-Number-psor.html) – [NumType](neg_gdud-feat-NumType.html) – [Person](neg_gdud-feat-Person.html) – [Person[psor]](neg_gdud-feat-Person-psor.html) – [Polarity](neg_gdud-feat-Polarity.html) – [Poss](neg_gdud-feat-Poss.html) – [PronType](neg_gdud-feat-PronType.html) – [Reflex](neg_gdud-feat-Reflex.html) – [Tense](neg_gdud-feat-Tense.html) – [VerbForm](neg_gdud-feat-VerbForm.html) – [Voice](neg_gdud-feat-Voice.html)

## Relations

[acl](neg_gdud-dep-acl.html) – [advcl](neg_gdud-dep-advcl.html) – [advmod](neg_gdud-dep-advmod.html) – [amod](neg_gdud-dep-amod.html) – [appos](neg_gdud-dep-appos.html) – [aux](neg_gdud-dep-aux.html) – [case](neg_gdud-dep-case.html) – [cc](neg_gdud-dep-cc.html) – [ccomp](neg_gdud-dep-ccomp.html) – [conj](neg_gdud-dep-conj.html) – [det](neg_gdud-dep-det.html) – [discourse](neg_gdud-dep-discourse.html) – [nmod](neg_gdud-dep-nmod.html) – [nmod:poss](neg_gdud-dep-nmod-poss.html) – [nsubj](neg_gdud-dep-nsubj.html) – [nummod](neg_gdud-dep-nummod.html) – [obj](neg_gdud-dep-obj.html) – [obl](neg_gdud-dep-obl.html) – [parataxis](neg_gdud-dep-parataxis.html) – [punct](neg_gdud-dep-punct.html) – [reparandum](neg_gdud-dep-reparandum.html) – [root](neg_gdud-dep-root.html) – [xcomp](neg_gdud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 62 sentences and 281 tokens.</li>
</ul>

<ul>
<li>This corpus contains 14 tokens (5%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 167 types of words that contain both letters and punctuation. Examples: gun-ə-n, bi-čā-n, bi-ʨa-n, gəla-l-čā, hul-mi, itʧe-je-n, kolkhoz-to, o-si-n, taji-ŋ-ŋi, ŋənə-ja-βun, Gun-ən, Rayispolkom-dukin, adi-l-ʨa, aja-t, ajav-va-n, akina-ʨil, ali-l-laːn, amban-ŋi-βa, amban-ʧi, anŋani-ŋi-ʨi, anŋani-ŋi-β, atikaː-ŋi-nin, atikaːŋ-laː-, aʐ-ja, bad-gida-li-n, baka-ŋaːti-s, beja-ŋi-n, bi-vač-če-n, bi-ŋase-n, bi-ʧiŋa-n, bogdi-j, bosaːkta-βə-s, boγa-dū-n, bəjŋaː-nin, bəjə-l-βa, bəjə-ŋi-t, daβa-ŋi-βa, del-duli-n, dili-ni, dili-ŋgo-ni, dolin-du, dəl-βa-n, dəl-βə-s, dəlbəni-ʧiʁa-βa, eŋgur-ŋgu-i, geː-ŋ-ŋəj, gun-mi, gun-ŋati-s, gun-ə, haːkin-mə-s</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SCONJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 11 word types tagged as particles (PART): =i, aːʨin, bitʁa, da, gə, kə, li, tar, uŋun, uŋun-mi, ə</li>
</ul>

<ul>
<li>This corpus contains 18 lemmas tagged as pronouns (PRON): bi, biː, bu, eeva, eːkun, i, ja, man, mani, min, miː, noŋan, oji, omoŋ, si, taja, taji, əj</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as determiners (DET): oj, taj, ves</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as auxiliaries (AUX): o, ʨa</li>
</ul>

<ul>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: hul-mi, ali-l-laːn, təβli-nakan, ulguma-mi, uli-l-laːn, uŋum-mi, əmə-jaːn, βaː-jaːn, aʐ-ja, bi-ŋase-n</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>VERB: gun-ə-n, adi-l-ʨa, baka-ŋaːti-s, bi-ʧiŋa-n, gun-ŋati-s, honŋa-sin-ʧiŋa-β, iltən-ə-n, inma-β, ju-ʨe-ja-n, juː-β-ʧiŋa-β</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: atikaːŋ-laː-, otikaːŋ-laː-, taγjačča</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: ʧepu-βkan-na-ji-du-j, iː-ʨa-ŋ-ŋi, tulə-ji-du-tin, təgə-t-ʨa, ō-ča-la-n, əmə-je-va-n</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>




<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Coll
    <ul>
      <li>NUM: ʧuː-ji</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: geː-ŋ-ŋəj</li>
      <li>NOUN: kazarov-ja-ŋi, vedro-βaj, xlepu-ŋ-ŋaj, bəjə-l-βa, bəjə-ŋi-t, hola-sun, kaltaka-ŋ-ŋaj, nəkun-tin, onʧokto-ŋ-ŋaj, siβu-ŋi-βun</li>
      <li>NUM: ton-ŋi-tin</li>
      <li>PRON: bu, omoŋ-ŋi-βun, taji-ŋi-βun</li>
      <li>VERB: ŋənə-ja-βun, gun-ə, kusi-ʧa-βun, sola-ja-βun, tulə-ji-du-tin, təsə-ja, təʨka-ja, ŋənə-gaj, ŋənə-ʨa-βun, ʧaβa-gaj</li>
      <li>VERB-Fin: kusi-ʧa-βun</li>
      <li>VERB-Part: tulə-ji-du-tin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>AUX: o-si-n</li>
      <li>NOUN: anŋani-ŋi-β, atikaː-ŋi-nin, bad-gida-li-n, beja-ŋi-n, bogdi-j, moː-ŋ-ŋi, muː-ŋ-ŋi, otikaː-ŋi-nin, bosaːkta-βə-s, bəjŋaː-nin</li>
      <li>PRON: bi, miː, biː, min-dula, si, taji-ŋ-ŋi</li>
      <li>PROPN: vova-ŋi-β</li>
      <li>VERB: gun-ə-n, bi-čā-n, bi-ʨa-n, itʧe-je-n, Gun-ən, ajav-va-n, bi-vač-če-n, gun-ŋati-s, hena-dgi-je-n, honŋa-sin-ʧiŋa-β</li>
      <li>VERB-Fin: gun-ə-n, gun-ŋati-s, honŋa-sin-ʧiŋa-β, iltən-ə-n, inma-β, ju-ʨe-ja-n, juː-β-ʧiŋa-β, talaka-ʧiŋa-β, əmə-jə-n</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>NOUN: nemec-duk, ɟukə-dukkəj</li>
      <li>PRON: i-dukin</li>
      <li>PROPN: Rayispolkom-dukin</li>
      <li>VERB: nonan-duki-n</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>NOUN: amban-ŋi-βa, daβa-ŋi-βa, dəl-βa-n, dəlbəni-ʧiʁa-βa, kaltaka-n, nuptin-ma-n, oǯa-va, ʧaʁa-βa, ʧoːka-ŋ-ŋa-s, bosaːkta-βə-s</li>
      <li>PRON: noŋan-mā-n, taja-βa, taji-ŋ-ŋa-n</li>
      <li>VERB-Part: əmə-je-va-n</li>
    </ul>
  </li>
</ul>

<ul>
  <li>All
    <ul>
      <li>NOUN: ʧo-tki-j</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>NOUN: akina-ʨil</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: kolkhoz-to, okin-du-j, boγa-dū-n, onʧokto-du-n</li>
      <li>PRON: min-du, min-dū</li>
      <li>VERB-Part: tulə-ji-du-tin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>NOUN: amban-ʧi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>PRON: min-dula</li>
      <li>VERB-Part: ō-ča-la-n</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>NOUN: samaːn=mal</li>
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
      <li>AUX: o-si-n</li>
      <li>PART: aːʨin, ə</li>
      <li>VERB-Conv: aʐ-ja, itʧe-je, uli-jə</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Hab
    <ul>
      <li>VERB: bi-vač-če-n, əmə-vač-ča-n</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>VERB-Conv: gun-mi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: Ətikāŋla-kal, təti-βka-kəl</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>VERB-Fin: gun-ə-n, adi-l-ʨa, bi-ʧiŋa-n, honŋa-sin-ʧiŋa-β, iltən-ə-n, inma-β, ju-ʨe-ja-n, juː-β-ʧiŋa-β, kusi-ʧa-βun, naː-ʨa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>VERB-Fin: baka-ŋaːti-s, gun-ŋati-s</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: bi-ʧiŋa-n, honŋa-sin-ʧiŋa-β, iche-ǯa-m, iche-ǯee-v, ii-ǰə-m, juː-β-ʧiŋa-β, kusi-ʧa-βun, talaka-ʧiŋa-β</li>
      <li>VERB-Fin: bi-ʧiŋa-n, honŋa-sin-ʧiŋa-β, juː-β-ʧiŋa-β, kusi-ʧa-βun, talaka-ʧiŋa-β</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: ʨa</li>
      <li>VERB: gəla-l-čā, bi-čā-n, bi-ʨa-n, priexal, soʨa-ʨa, ŋənə-ʨa, adi-l-ʨa, bi-ŋase-n, iltən-ə-n, inma-β</li>
      <li>VERB-Conv: bi-ŋase-n</li>
      <li>VERB-Fin: adi-l-ʨa, iltən-ə-n, inma-β, naː-ʨa, tik-ʨa, tulə-ʨa, əmə-jə-n, βaː-ʨa</li>
      <li>VERB-Part: iː-ʨa-ŋ-ŋi, təgə-t-ʨa, ō-ča-la-n, əmə-je-va-n</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: o-si-n</li>
      <li>VERB: gun-ə-n, itʧe-je-n, ŋənə-ja-βun, ajav-va-n, bi-vač-če-n, gun-ə, hena-dgi-je-n, ičə-jə-n, kaβsa-ja-n, naː-jə-n</li>
      <li>VERB-Part: tulə-ji-du-tin</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB: təti-βka-kəl</li>
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
      <li>DET: taj, oj</li>
      <li>PRON: oji-ŋ-duli-n, oji-ŋi-nen, taji=gda, əj-gaʨin, taja-βa, taji-ŋ-ŋa-n, taji-ŋ-ŋi, taji-ŋi-βun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: omoŋ-ŋi-βun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: eeva, eːkun, ja=ka, i-dukin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: bi, miː, biː, bu, man, mani-n, min-du, min-dula, min-dū, noŋan-mā-n</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: ves</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: tonŋa, əmən, ɲuŋun, ʧuː-ji</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: naj-ŋgi, soli-ŋgi</li>
      <li>NOUN: ətikāŋi-či, hola-sun, suːn-mə-β</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: man, mani-n</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>NOUN: bəjə-ŋi-t, kilgədgə-jə-n, okin-mi, samoxodka-β, siβu-ŋi-βun, suːn-mə-β, Əńə-m</li>
      <li>PRON: bi, miː, biː, bu, min-dula, min-dū</li>
      <li>VERB: gun-ə-n, ŋənə-ja-βun, honŋa-sin-ʧiŋa-β, iche-ǯa-m, iche-ǯee-v, ii-ǰə-m, juː-β-ʧiŋa-β, kusi-ʧa-βun, sola-ja-βun, talaka-ʧiŋa-β</li>
      <li>VERB-Fin: gun-ə-n, honŋa-sin-ʧiŋa-β, juː-β-ʧiŋa-β, kusi-ʧa-βun, talaka-ʧiŋa-β</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>NOUN: bosaːkta-βə-s, dəl-βə-s, haːkin-mə-s, hola-sun, solaki-ŋi-s</li>
      <li>PRON: si</li>
      <li>VERB: gun-ŋati-s, uː-li-dgi-s, əmə-β-ŋati-s</li>
      <li>VERB-Fin: gun-ŋati-s</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: o-si-n</li>
      <li>NOUN: həd-gidaː-li-n, nəkun-in, Ətikāŋi-nin, boγa-dū-n, bəjŋaː-nin, kaltaka-ŋ-ŋaj, lodka-j, niŋtə-nin, nəkun-tin, onʧokto-du-n</li>
      <li>PRON: mani-n, noŋan-mā-n</li>
      <li>VERB: gun-ə-n, bi-čā-n, bi-ʨa-n, itʧe-je-n, Gun-ən, ajav-va-n, bi-vač-če-n, bi-ŋase-n, bi-ʧiŋa-n, gun-ə</li>
      <li>VERB-Conv: bi-ŋase-n</li>
      <li>VERB-Fin: bi-ʧiŋa-n, iltən-ə-n, inma-β, ju-ʨe-ja-n, əmə-jə-n</li>
      <li>VERB-Part: tulə-ji-du-tin, ō-ča-la-n, əmə-je-va-n</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: dili-ni, dili-ŋgo-ni</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Clusivity</a>
    <ul>
      <li>Ex
        <ul>
          <li>PRON: bu</li>
          <li>VERB: sola-ja-βun</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Deixis</a>
    <ul>
      <li>Remt
        <ul>
          <li>DET: taj</li>
          <li>PART: tar</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[psor]</a>
    <ul>
      <li>3
        <ul>
          <li>NOUN: dili-ni, dili-ŋgo-ni</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus does not contain copulas.</li>
</ul>

<ul>
<li>This corpus uses 2 lemmas as auxiliaries (<a>aux</a>). Examples: o, ʨa.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (9)</li>
      <li>VERB--PRON (4)</li>
      <li>VERB-Conv--PRON (1)</li>
      <li>VERB-Fin--NOUN (7)</li>
      <li>VERB-Fin--PRON (2)</li>
      <li>VERB-Part--NOUN (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (5)</li>
      <li>VERB--NOUN-Acc (5)</li>
      <li>VERB--PRON (3)</li>
      <li>VERB--PRON-Acc (2)</li>
      <li>VERB-Conv--NOUN (3)</li>
      <li>VERB-Conv--NOUN-Acc (1)</li>
      <li>VERB-Fin--NOUN (2)</li>
      <li>VERB-Fin--NOUN-Acc (5)</li>
      <li>VERB-Part--NOUN (1)</li>
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
<li>This corpus uses 1 relation subtypes: <a>nmod:poss</a></li>
<li>The following 15 relation types are not used in this corpus at all: <a>iobj</a>, <a>csubj</a>, <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>cop</a>, <a>mark</a>, <a>clf</a>, <a>fixed</a>, <a>flat</a>, <a>compound</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>dep</a></li>
</ul>
