---
layout: base
title:  'UD_Tu-GDUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Tu GDUD

Language: [Tu](/mjg/index.html) (code: `mjg`)<br/>
Family: Mongolic

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Wenchao Li, Haitao Liu.

Repository: [UD_Tu-GDUD](https://github.com/UniversalDependencies/UD_Tu-GDUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udmjg_gdud219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Tu-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Tu-GDUD/issues).
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

UD_Tu-GDUD is a treebank of Tu (also called Monguor), a Mongolic language spoken in Qinghai and Gansu provinces of China, based on grammatical example sentences derived from a reference grammar.




The Tu GDUD (Grammar-Derived Universal Dependencies) treebank contains 77 sentences of Tu (ISO 639-3: mjg), a Mongolic language spoken by the Tu (Monguor) people primarily in Qinghai and Gansu provinces of China. Tu is one of the Mongolic languages of the Gansu-Qinghai Sprachbund and has been in extensive contact with Chinese, Tibetan, and other neighboring languages. The data consist of grammatical example sentences drawn from a reference grammar of Tu, presented in Latin transliteration and accompanied by English translations.

All sentences are manually annotated with lemmas, universal part-of-speech tags (UPOS), morphological features, and dependency relations, following the Universal Dependencies (UD) guidelines. The annotation prioritizes UD core morphological features and dependency relations. The language-specific feature `ExtPos` is used in a small number of cases, following the analysis of the reference grammar. Additional Tu-specific morphological distinctions that do not correspond to any value in the universal feature inventory are encoded in the MISC column, in accordance with UD conventions.

## Data split

Because the treebank is small (well below the 20K-word threshold), all sentences are provided as test data.

## Morphological annotation

All UD core features used in the treebank take standard universal values. The feature `ExtPos` is used to mark the external part-of-speech function of certain multiword expressions.

## Dependency annotation

UD core relations are used throughout the treebank. The language-specific subtype `acl:tmod` is used for temporal relative clauses.


## Acknowledgments

The Tu GDUD treebank was created by Wenchao Li and Haitao Liu, based on grammatical example sentences from a reference grammar of Tu. The annotation of lemmas, part-of-speech tags, morphological features, and dependency relations was carried out manually following the Universal Dependencies guidelines.

We thank Daniel Zeman for his guidance in setting up the treebank repository and for his help with the Universal Dependencies workflow, and the Universal Dependencies community for their support.



# Statistics of UD Tu GDUD

## POS Tags

[ADJ](mjg_gdud-pos-ADJ.html) – [ADV](mjg_gdud-pos-ADV.html) – [AUX](mjg_gdud-pos-AUX.html) – [CCONJ](mjg_gdud-pos-CCONJ.html) – [DET](mjg_gdud-pos-DET.html) – [INTJ](mjg_gdud-pos-INTJ.html) – [NOUN](mjg_gdud-pos-NOUN.html) – [NUM](mjg_gdud-pos-NUM.html) – [PART](mjg_gdud-pos-PART.html) – [PRON](mjg_gdud-pos-PRON.html) – [PROPN](mjg_gdud-pos-PROPN.html) – [PUNCT](mjg_gdud-pos-PUNCT.html) – [VERB](mjg_gdud-pos-VERB.html) – [X](mjg_gdud-pos-X.html)

## Features

[Aspect](mjg_gdud-feat-Aspect.html) – [Case](mjg_gdud-feat-Case.html) – [Degree](mjg_gdud-feat-Degree.html) – [ExtPos](mjg_gdud-feat-ExtPos.html) – [Gender](mjg_gdud-feat-Gender.html) – [Mood](mjg_gdud-feat-Mood.html) – [Number](mjg_gdud-feat-Number.html) – [NumType](mjg_gdud-feat-NumType.html) – [Person](mjg_gdud-feat-Person.html) – [Polarity](mjg_gdud-feat-Polarity.html) – [Poss](mjg_gdud-feat-Poss.html) – [PronType](mjg_gdud-feat-PronType.html) – [Tense](mjg_gdud-feat-Tense.html) – [VerbForm](mjg_gdud-feat-VerbForm.html) – [Voice](mjg_gdud-feat-Voice.html)

## Relations

[acl](mjg_gdud-dep-acl.html) – [advcl](mjg_gdud-dep-advcl.html) – [advmod](mjg_gdud-dep-advmod.html) – [amod](mjg_gdud-dep-amod.html) – [appos](mjg_gdud-dep-appos.html) – [aux](mjg_gdud-dep-aux.html) – [cc](mjg_gdud-dep-cc.html) – [ccomp](mjg_gdud-dep-ccomp.html) – [compound](mjg_gdud-dep-compound.html) – [conj](mjg_gdud-dep-conj.html) – [cop](mjg_gdud-dep-cop.html) – [dep](mjg_gdud-dep-dep.html) – [det](mjg_gdud-dep-det.html) – [discourse](mjg_gdud-dep-discourse.html) – [fixed](mjg_gdud-dep-fixed.html) – [iobj](mjg_gdud-dep-iobj.html) – [nmod](mjg_gdud-dep-nmod.html) – [nmod:poss](mjg_gdud-dep-nmod-poss.html) – [nmod:tmod](mjg_gdud-dep-nmod-tmod.html) – [nsubj](mjg_gdud-dep-nsubj.html) – [nsubj:outer](mjg_gdud-dep-nsubj-outer.html) – [nummod](mjg_gdud-dep-nummod.html) – [obj](mjg_gdud-dep-obj.html) – [obl](mjg_gdud-dep-obl.html) – [obl:tmod](mjg_gdud-dep-obl-tmod.html) – [parataxis](mjg_gdud-dep-parataxis.html) – [punct](mjg_gdud-dep-punct.html) – [root](mjg_gdud-dep-root.html) – [xcomp](mjg_gdud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 77 sentences and 597 tokens.</li>
</ul>

<ul>
<li>This corpus contains 77 tokens (13%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 152 types of words that contain both letters and punctuation. Examples: puɕ-a, ndaː-nɵ, ulɵ-dʑ-a, -nuː, ndɵreː-sa, toro-san-na, xanan-sa, buːdzɵn-dɵ, doloːn-nɵ, fan-dɵ-nɵ, ire-dʑ-a, jau-sa, kun-na, mude-nɵ, mudeː-nɵ, mulaː-na, nɵmbaː-nuː, sau-dʑ-iː, te-ŋgɜ, ten-sa, ʂgɜ-na, ʋai-gu-nɵ, ʋai-na, ajil-dɵ, ajil-nɵ, amagɵ-sa, an&iː, aʋu-dʑ-a, aʋu-dʑin, aʋu-dʑɵ, aʋu-gui, aʋu-nɵ, aːtɕɵ-sgɜ-nɵ, beːr-naː, beːre-naː, biau-naː-ŋgɜ, buda-ŋɢʊla, buliː-ŋgɜ, buːdzen-gɜ-re, dabsɵ-nɵ, daʋaː-gu, daʋaː-san, debtɵr-gɜ, deːl-lɵ, deːren-dɵ, diu-dɵ, durn-iː-nɵ, dzan-sa, dɔŋɕɵman-ŋgɜ, dʑeːxun-la-dʑ-a</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: ADP, SCONJ, SYM</li>
</ul>

<ul>
<li>This corpus contains 13 word types tagged as particles (PART): -nuː, ba, da, gua, gui, juː, liː, nembzn, nuː, nɵmbaː, nɵmbaː-nuː, sa, uː</li>
</ul>

<ul>
<li>This corpus contains 16 lemmas tagged as pronouns (PRON): _, bu, jaːn, kedʑeː, ken, kɵdɵ, kɵdʑiː, munɵ, ndaː, ne, tanɵ, te, tɕime, tɕimɵ, tɕinɵ, tɕɵ</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as determiners (DET): _, ne, te</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as PRON and sometimes as DET: _, ne, te</li>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as auxiliaries (AUX): _, nɵmbaː, sain, ɕdʑa, ʋa</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: _</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: jau-sa, amagɵ-sa, au, dzan-sa, gulegu-naː, mosaːdiː-sa, re-sa, sgɵ-dʑɵ, udʑe-sa, ulɵ-dɵlaː-ŋgɜ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: ʋa, daʋaː-gu, ulɵ-dʑ-a, ʂda-ɢʊ-a, ʋai, ʋai-na, ʋain-na</li>
    <li>VERB: ire-dʑ-a, kɵle, mude-nɵ, mudeː-nɵ, sau-dʑ-iː, ulɵ-dʑ-a, _, aʋu-dʑ-a, aʋu-dʑɵ, dʑeːxun-la-dʑ-a</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: aʋu-gui, dʑeːxunla-gu-naː</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>NOUN: furaː-san-nɵ</li>
    <li>VERB: daʋaː-san, loː-lugu-nɵ, aʋu-dʑin, sau-dʑi-ŋɢula</li>
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
      <li>NOUN: nene</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>NOUN: aːtɕɵ-sgɜ-nɵ, bandaŋ, dɔŋɕɵ, fun, kun-sgɜ</li>
      <li>PRON: te, buda-ŋɢʊla, ndaː-nɵ, te-ŋɢʊla, te-ŋɢʊla-nɵ</li>
      <li>VERB-Part: sau-dʑi-ŋɢula</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: baɢaɕi, biau, ɢaːra, kun, tɕaɢ, ugo, beːre, debter, debtɵr-gɜ, lom</li>
      <li>PRON: bu, tɕɵ, munɵ, ndaː, ndaː-nɵ, tɕinɵ, tɕimɵ, tanɵ, te, minɵ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADV: ndɵreː-sa</li>
      <li>NOUN: ndɵreː-sa</li>
      <li>PRON: xanan-sa, ten-sa, ndaː-sa, tɕimɵ-sa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>NOUN: biau-naː-ŋgɜ, dabsɵ-nɵ, deːl-lɵ, durn-iː-nɵ, dʑolotɕi-ŋgɜ-la, kun-na, sara-na, ugo-nɵ-ŋgɜ</li>
      <li>PRON: iːlɵ-nɵ, ken-la</li>
      <li>VERB: ʋai-gu-nɵ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>All
    <ul>
      <li>NOUN: ʂaŋdian-re</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>PRON: tɕimɵ-la</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: buːdzɵn-dɵ, fan-dɵ-nɵ, ajil-dɵ, deːren-dɵ, diu-dɵ, dʑyl-dɵ, ger-dɵ, sara-dɵ-nɵ, taː-da-nɵ, ɢadʑær-dɵ</li>
      <li>NUM: ɢoilo-dɵ, ɢuraːn-dɵ, ɢʊːr-dɵ</li>
      <li>PRON: ndaː</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>NOUN: doloːn-nɵ, ajil-nɵ, aʋu-nɵ, fon-nɵ, korgo-nɵ, sara-nɵ, tsɢʊːlre-nɵ</li>
      <li>PRON: ndaː-nɵ, kedʑeː-nɵ, ken-nɵ, kɵdʑiː-nɵ, te-ŋɢʊla-nɵ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>PRON: iɢʋa-la</li>
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
      <li>ADJ: mulaː, ʂgɜ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: ʂgɜ, xara, dʑi-ŋgɜ, mulaː, nigiː-dʑigɜ, nɵmbaː, sain-a, sdzaliu, tɕiɢaːn, uloxxʊɢʊi</li>
      <li>ADV: sar, xʊɢʊr</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: mulaː-na, ʂgɜ-na</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>INTJ: gua, gui</li>
      <li>PART: gui, gua, liː</li>
      <li>VERB: puɕ-a, puɕa, aʋu-gui, gui-dʑi-da</li>
      <li>VERB-Inf: aʋu-gui</li>
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
      <li>VERB: sur-dʑin, aʋu-dʑin, sau-dʑi-ŋɢula</li>
      <li>VERB-Part: aʋu-dʑin, sau-dʑi-ŋɢula</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: daʋaː-gu, ʂda-ɢʊ-a</li>
      <li>VERB: ʋai-gu-nɵ, ire-dʑ-a, jau-gu, kur-gu, rgolo-gu-na, sau-dʑ-iː, ulɵ-dʑ-a, ɕdʑ-gu-na, ɕdʑi-gu, aʋu-dʑ-a</li>
      <li>VERB-Conv: dʑoː-dʑɵ</li>
      <li>VERB-Fin: ire-dʑ-a, sau-dʑ-iː, ulɵ-dʑ-a, aʋu-dʑ-a, aʋu-dʑɵ, dʑeːxun-la-dʑ-a, dʑeːxunla-dʑ-a, jer-dʑɵ, nasala-gun-a, nasɵla-dʑɵ</li>
      <li>VERB-Inf: dʑeːxunla-gu-naː</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB: mart-aː</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: duikɵ, taː</li>
      <li>VERB-Fin: taː</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: ʋa, ɕdʑa, daʋaː-gu, ulɵ-dʑ-a, ʂda-ɢʊ-a, ʋai, ʋai-na, ʋain-na</li>
      <li>AUX-Fin: ʋa, daʋaː-gu, ulɵ-dʑ-a, ʂda-ɢʊ-a, ʋai, ʋai-na, ʋain-na</li>
      <li>VERB: ʋai, ulɵ-dʑ-a, ire-dʑ-a, kɵle, mude-nɵ, mudeː-nɵ, sau-dʑ-iː, _, aʋu-dʑ-a, aʋu-dʑɵ</li>
      <li>VERB-Fin: ire-dʑ-a, kɵle, mude-nɵ, mudeː-nɵ, sau-dʑ-iː, ulɵ-dʑ-a, _, aʋu-dʑ-a, aʋu-dʑɵ, dʑeːxun-la-dʑ-a</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>AUX: sain-a-nuː, ʋa-nuː</li>
      <li>PART: nɵmbaː-nuː</li>
      <li>VERB: mude-n-a-nuː, mude-n-uː, ʋai-n-a-uː</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: u-la, ulɵ-gun-a</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>VERB: toro-san-na, xadʑeraː-dʑ-a, mart-aː, pusɢʊ-san-na, toro-ʋa, ulɵ-san-na, ulɵ-san-nɵ</li>
      <li>VERB-Fin: pusɢʊ-san-na, toro-san-na, toro-ʋa, ulɵ-san-na, ulɵ-san-nɵ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: ʋa, sain-a-nuː, ɕdʑa, ʋa-nuː</li>
      <li>VERB: ʋai, a, saidaːrd-aː-ɕdʑ-a, ulɵ-dʑ-a, jɑːn-n-a, ken-n-iː, kun-na, lɵ-gu, mude-m, mude-n-a</li>
      <li>VERB-Fin: mude-m</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: toro-san-na</li>
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
      <li>DET: te, ne, ne-ŋgɜ</li>
      <li>PRON: te, ne, te-ŋgɜ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: andʑiː, amatɵɢaːn, an&iː, kɵdʑeː-nɵ, kɵdʑɵː, kɵdʑɵː-nɵ</li>
      <li>PART: -nuː, ba, nɵmbaː-nuː</li>
      <li>PRON: kɵdɵ, alɵ, jaːn, kɵdɵxaː-ŋgɜ, kedʑeː-nɵ, ken-la, ken-nɵ, kɵdʑiː-nɵ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: bu, tɕɵ, munɵ, ndaː, ndaː-nɵ, te, tɕinɵ, tɕimɵ, tanɵ, xanan-sa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: ʋai-dʑin</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: nɵgɜ, ɢʊːr, doloːn, xarʋan, tɵdʑin, ɢoilo, ɢʊraːn, ʂdzɵn, deːren, doloː</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: munɵ, tɕinɵ, tanɵ, minɵ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: bu, munɵ, ndaː, ndaː-nɵ, buda-ŋɢʊla, minɵ, ndaː-sa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: tɕɵ, tɕinɵ, tɕimɵ, tanɵ, tɕime, tɕimɵ-la, tɕimɵ-sa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: te, te-ŋɢʊla, te-ŋɢʊla-nɵ</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADV
        <ul>
          <li>NUM: ɢʊːr</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>PRON: munɵ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: _, ʋa.</li>
</ul>

<ul>
<li>This corpus uses 5 lemmas as auxiliaries (<a>aux</a>). Examples: _, nɵmbaː, sain, ɕdʑa, ʋa.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (8)</li>
      <li>VERB--PRON (18)</li>
      <li>VERB-Conv--PRON (3)</li>
      <li>VERB-Fin--NOUN (9)</li>
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--PRON (25)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (6)</li>
      <li>VERB--NOUN-Acc (3)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB-Conv--NOUN (1)</li>
      <li>VERB-Conv--NOUN-Acc (2)</li>
      <li>VERB-Fin--NOUN (5)</li>
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--PRON (2)</li>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Inf--NOUN (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Conv--PRON-Dat (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 4 relation subtypes: <a>nmod:poss</a>, <a>nmod:tmod</a>, <a>nsubj:outer</a>, <a>obl:tmod</a></li>
<li>The following 12 relation types are not used in this corpus at all: <a>csubj</a>, <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>mark</a>, <a>clf</a>, <a>case</a>, <a>flat</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
