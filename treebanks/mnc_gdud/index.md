---
layout: base
title:  'UD_Manchu-GDUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Manchu GDUD

Language: [Manchu](/mnc/index.html) (code: `mnc`)<br/>
Family: Tungusic

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Wenchao Li, Haitao Liu.

Repository: [UD_Manchu-GDUD](https://github.com/UniversalDependencies/UD_Manchu-GDUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udmnc_gdud219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Manchu-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Manchu-GDUD/issues).
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

UD_Manchu-GDUD is a treebank of Manchu, a Southern Tungusic language historically spoken in Manchuria (northeastern China), based on grammatical example sentences derived from a reference grammar.




The Manchu GDUD (Grammar-Derived Universal Dependencies) treebank contains 81 sentences of Manchu (ISO 639-3: mnc), a Southern Tungusic language historically spoken by the Manchu people in northeastern China. Manchu served as one of the official languages of the Qing dynasty (1644–1912) and has an extensive written literature. The data consist of grammatical example sentences drawn from a reference grammar of Manchu, presented in Latin transliteration and accompanied by English translations.

All sentences are manually annotated with lemmas, universal part-of-speech tags (UPOS), morphological features, and dependency relations, following the Universal Dependencies (UD) guidelines. The annotation prioritizes UD core morphological features and dependency relations. Manchu-specific morphological distinctions that do not correspond to any value in the universal feature inventory are encoded in the MISC column, in accordance with UD conventions.

## Data split

Because the treebank is small (well below the 20K-word threshold), all sentences are provided as test data.

## Morphological annotation

All UD core features used in the treebank take standard universal values.

## Dependency annotation

UD core relations are used throughout the treebank.


## Acknowledgments

The Manchu GDUD treebank was created by Wenchao Li and Haitao Liu, based on grammatical example sentences from a reference grammar of Manchu. The annotation of lemmas, part-of-speech tags, morphological features, and dependency relations was carried out manually following the Universal Dependencies guidelines.

We thank Daniel Zeman for his guidance in setting up the treebank repository and for his help with the Universal Dependencies workflow, and the Universal Dependencies community for their support.



# Statistics of UD Manchu GDUD

## POS Tags

[ADJ](mnc_gdud-pos-ADJ.html) – [ADP](mnc_gdud-pos-ADP.html) – [ADV](mnc_gdud-pos-ADV.html) – [AUX](mnc_gdud-pos-AUX.html) – [DET](mnc_gdud-pos-DET.html) – [INTJ](mnc_gdud-pos-INTJ.html) – [NOUN](mnc_gdud-pos-NOUN.html) – [NUM](mnc_gdud-pos-NUM.html) – [PART](mnc_gdud-pos-PART.html) – [PRON](mnc_gdud-pos-PRON.html) – [PROPN](mnc_gdud-pos-PROPN.html) – [PUNCT](mnc_gdud-pos-PUNCT.html) – [VERB](mnc_gdud-pos-VERB.html)

## Features

[Aspect](mnc_gdud-feat-Aspect.html) – [Case](mnc_gdud-feat-Case.html) – [Degree](mnc_gdud-feat-Degree.html) – [Mood](mnc_gdud-feat-Mood.html) – [Number](mnc_gdud-feat-Number.html) – [NumType](mnc_gdud-feat-NumType.html) – [Person](mnc_gdud-feat-Person.html) – [Polarity](mnc_gdud-feat-Polarity.html) – [Poss](mnc_gdud-feat-Poss.html) – [PronType](mnc_gdud-feat-PronType.html) – [Reflex](mnc_gdud-feat-Reflex.html) – [Tense](mnc_gdud-feat-Tense.html) – [VerbForm](mnc_gdud-feat-VerbForm.html) – [Voice](mnc_gdud-feat-Voice.html)

## Relations

[acl](mnc_gdud-dep-acl.html) – [advcl](mnc_gdud-dep-advcl.html) – [advmod](mnc_gdud-dep-advmod.html) – [amod](mnc_gdud-dep-amod.html) – [appos](mnc_gdud-dep-appos.html) – [case](mnc_gdud-dep-case.html) – [ccomp](mnc_gdud-dep-ccomp.html) – [clf](mnc_gdud-dep-clf.html) – [compound](mnc_gdud-dep-compound.html) – [compound:prt](mnc_gdud-dep-compound-prt.html) – [conj](mnc_gdud-dep-conj.html) – [cop](mnc_gdud-dep-cop.html) – [csubj](mnc_gdud-dep-csubj.html) – [csubj:outer](mnc_gdud-dep-csubj-outer.html) – [dep](mnc_gdud-dep-dep.html) – [det](mnc_gdud-dep-det.html) – [discourse](mnc_gdud-dep-discourse.html) – [flat:name](mnc_gdud-dep-flat-name.html) – [iobj](mnc_gdud-dep-iobj.html) – [nmod](mnc_gdud-dep-nmod.html) – [nmod:poss](mnc_gdud-dep-nmod-poss.html) – [nsubj](mnc_gdud-dep-nsubj.html) – [nsubj:outer](mnc_gdud-dep-nsubj-outer.html) – [nummod](mnc_gdud-dep-nummod.html) – [obj](mnc_gdud-dep-obj.html) – [obl](mnc_gdud-dep-obl.html) – [obl:tmod](mnc_gdud-dep-obl-tmod.html) – [parataxis](mnc_gdud-dep-parataxis.html) – [punct](mnc_gdud-dep-punct.html) – [root](mnc_gdud-dep-root.html) – [vocative](mnc_gdud-dep-vocative.html) – [xcomp](mnc_gdud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 81 sentences and 446 tokens.</li>
</ul>

<ul>
<li>This corpus contains 3 tokens (1%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 94 types of words that contain both letters and punctuation. Examples: Z'oo, hendu-me, gene-he, K'an, K'an_Ze, cooha-i, ing-de, isina-fi, se-me, tuci-ke, -ci, Cenghiyang-de, Gurun-i, Ila-ci, K'an_Ze-de, Weile-be, abka-i, aca-mbi, acanji-me, ala-ra, alana-ra, ara-mbi, ara-me, bedere-re, besergen-ci, beye-be, bi-fi, bi-hebi, bithe-be, boo-de, bu-he, bu-mbi, buta-ra, da-me, dalda-ra, dali-me, dalin-i, dasa-bu-mbi, dekde-hebi, deribu-he, donji-fi, ebu-fi, ebu-mbi, elhese-ci, eyen-i, fata-mbihebi, gai-fi, gai-ka, gaija-r-akū, gene-bu</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 13 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SCONJ, CCONJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 5 word types tagged as particles (PART): be, i, inuo, oci, te</li>
</ul>

<ul>
<li>This corpus contains 12 lemmas tagged as pronouns (PRON): aibi, be, beye, bi, emhun, gūwa, i, meni, si, sini, tere, udu</li>
</ul>

<ul>
<li>This corpus contains 7 lemmas tagged as determiners (DET): ajige, encu, ere, fuldun, tere, udu, ya</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: tere, udu</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as auxiliaries (AUX): akū, bi, o</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as AUX and sometimes as VERB: bi, o</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: hendu-me, se-me, acanji-me, alana-ra, ara-me, bedere-re, buta-ra, dalda-ra, dali-me, donji-fi</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: akū, bi</li>
    <li>VERB: gene-he, oho, cooha-i, taciha, tuci-ke, aca-mbi, alana, ara-mbi, bi-fi, bi-hebi</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: gisure-re, habša-ra, hendu-re-nge, ala-ra, gai-fi, gai-ka, gaija-r-akū, jide-rakū-n, nime-rahū, ojorakû</li>
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
      <li>NOUN: hehe, niyalma</li>
      <li>PRON: be, membe, meni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>PRON: si, bi, i, sinde, beye-be, mimbe, sini</li>
      <li>VERB-Fin: ara-mbi, bu-he, ebu-fi, gene-he, gene-mbi, ji-ki, waji-habi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADP: -ci, ci</li>
      <li>NOUN: besergen-ci, elhese-ci</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADP: be</li>
      <li>NOUN: Bithe, bithe-be, dobori, giyang-be, morin, niyalma</li>
      <li>PART: be</li>
      <li>PRON: beye-be, emhun, membe, mimbe, sinde, tere</li>
      <li>VERB: Weile-be</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADP: de</li>
      <li>NOUN: hoton, boo-de</li>
      <li>PRON: sinde</li>
      <li>PROPN: Cenghiyang-de, K'an_Ze-de</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADP: i</li>
      <li>NOUN: Gurun-i, abka-i, dalin-i, eyen-i, gurun, muke-i, niyalma, niyalma-de, olhon-i, ubu</li>
      <li>PART: i</li>
      <li>PRON: sini</li>
      <li>PROPN: fai</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADP: de, oci</li>
      <li>NOUN: boo, dobori, weihu-de</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>NOUN: sargan, niyalma</li>
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
      <li>ADJ: amba</li>
      <li>ADV: deri</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: mafa, ajige, amba, sain, fulu, oyonggo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: waka</li>
      <li>AUX-Fin: akū</li>
      <li>VERB-Fin: sem-e-o</li>
      <li>VERB-Part: gaija-r-akū, jide-rakū-n, nime-rahū, ojorakû, tuwa-hakū</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>VERB-Fin: aca-mbi</li>
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
      <li>VERB-Conv: da-me</li>
      <li>VERB-Fin: ara-mbi, bu-mbi, dasa-bu-mbi, ebu-mbi, gene-mbi, hairambi, hūla-mbi, ji-mbi-o, jobo-mbi, miyamimbi</li>
      <li>VERB-Part: gaija-r-akū</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Conv: isina-fi, je-fi, o-fi, obo-fi, teye-fi</li>
      <li>VERB-Fin: cooha-i, bi-fi, bi-hebi, dahashûn, dekde-hebi, hvwaxabuha, hūla-habi, isina-fi, jafa-bu-ha, jalu</li>
      <li>VERB-Part: gai-fi, gai-ka, uša-bu-ha</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>VERB-Conv: o-ci</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: aca-mbi, eje, gene-bu, hūla, ume</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: akū, bi</li>
      <li>VERB-Fin: gene-he, oho, cooha-i, taciha, tuci-ke, alana, ara-mbi, bi-fi, bi-hebi, bu-he</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>VERB: bio, ji-mbi-o, jide-rakū-n, sem-e-o</li>
      <li>VERB-Fin: ji-mbi-o, sem-e-o</li>
      <li>VERB-Part: jide-rakū-n</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>VERB-Fin: ji-ki</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB-Part: ala-ra</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>VERB-Conv: tuci-fi</li>
      <li>VERB-Fin: gene-he, taciha, tuci-ke, bu-he, deribu-he, ebu-fi, fata-mbihebi, hūla-habi, ji-he, oho</li>
      <li>VERB-Part: tuwa-hakū</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: o-me, bi</li>
      <li>AUX-Fin: bi</li>
      <li>VERB-Fin: oho, alana, ara-mbi, bu-mbi, gene-mbi, hairambi, hendu, ji-mbi-o, miyamimbi, tuwa-mbi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB-Fin: gene-bu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Conv: wa-bu-fi</li>
      <li>VERB-Fin: dasa-bu-mbi, hvwaxabuha</li>
      <li>VERB-Part: uša-bu-ha</li>
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
      <li>DET: tere, ere, ajige</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: encu</li>
      <li>PRON: gūwa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: ainu</li>
      <li>DET: udu, ya</li>
      <li>NUM: udu</li>
      <li>PRON: aibi, udu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: si, bi, be, i, sinde, beye, beye-be, emhun, membe, meni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: fuldun</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: ilan, sunja, emu, tofohon, juwan, juwe, minggan, nadan, nadanju, ninggun</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: meni</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: beye</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: bi, be, membe, meni, mimbe</li>
      <li>VERB-Fin: ara-mbi, gene-he</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: si, sinde, sini</li>
      <li>VERB-Fin: ebu-mbi, gene-mbi, ji-ki</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: i, beye-be</li>
      <li>VERB-Fin: bu-he, ebu-fi, waji-habi</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: o.</li>
</ul>

<ul>
<li>This corpus does not contain auxiliaries.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (4)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB-Conv--NOUN (1)</li>
      <li>VERB-Conv--NOUN-Nom (1)</li>
      <li>VERB-Conv--PRON (2)</li>
      <li>VERB-Conv--PRON-Acc (1)</li>
      <li>VERB-Fin--NOUN (12)</li>
      <li>VERB-Fin--NOUN-Nom (2)</li>
      <li>VERB-Fin--PRON (7)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--PRON (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--NOUN (2)</li>
      <li>VERB-Conv--NOUN-Acc-ADP(be) (1)</li>
      <li>VERB-Fin--NOUN (4)</li>
      <li>VERB-Fin--NOUN-ADP(be) (5)</li>
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--PRON-Acc (3)</li>
      <li>VERB-Part--NOUN-ADP(be) (1)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Part--NOUN-Acc (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>compound:prt</a>, <a>csubj:outer</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>obl:tmod</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 10 relation types are not used in this corpus at all: <a>expl</a>, <a>dislocated</a>, <a>aux</a>, <a>mark</a>, <a>cc</a>, <a>fixed</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
