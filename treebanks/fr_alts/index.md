---
layout: base
title:  'UD_French-ALTS'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD French ALTS

Language: [French](/fr/index.html) (code: `fr`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.16 release.

The following people have contributed to making this treebank part of UD: Natalia Romanova, Rayan Ziane, Khensa Daoudi.

Repository: [UD_French-ALTS](https://github.com/UniversalDependencies/UD_French-ALTS)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfr_alts216)<br />
Download all treebanks: [UD 2.16](/#download)

License: CC BY-SA 4.0

Genre: legal

Questions, comments?
General annotation questions (either French-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_French-ALTS/issues).
If you want to collaborate, please contact [natalia&nbsp;•&nbsp;romanova&nbsp;(æt)&nbsp;unicaen&nbsp;•&nbsp;fr].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

ALTS (AUTOMATED Sixteenth-century corpus) is a treebank of sixteenth-century legal French. Currently in contains one text, trial accounts from Guernsey Greffe (register Crime I), transcribed directly from the manuscript and manually annotated in PoS, lemmata and syntactic functions. The text presents dialectal Norman features and forms.




This text of Guernsey Crime I (1,269 sentences; 45,101 tokens) which contains accounts of fifteen court cases on the island on Guernsey from 1563 to 1569 (witchcraft, piratry, infanticide etc) was first annotated in PoS, lemmatised and automatically parsed as part of the Franco-German [MICLE project](https://www.unicaen.fr/projet_de_recherche/micle/) (2021-2024) led by Professor Pierre Larrivée (University of Caen) and Professor Cecilia Poletto (University of Frankfurt). Earlier versions of the text, annotated with [HT-CRISCO workflow](https://github.com/Corpus-Diachroniques-CRISCO/HT-CRISCO) incorporating the use of [HOPS parser](https://github.com/hopsparser/hopsparser), can be consulted on [CRISCO Lab's TXM server](https://txm-crisco.huma-num.fr/txm/) and via the [website](https://criscoht.unicaen.fr/).

As part of [AUTOMATED project](https://www.unicaen.fr/projet_de_recherche/automated/) the text was reannotated with [BertForDeprel](https://github.com/kirianguiller/BertForDeprel) parser and manually corrected using bootstrapping methodology ([Peng et al 2022](https://hal.science/hal-03846834v1)) on [ArboratorGrew](https://arborator.grew.fr/#/) software.

| Set | Sentences| Tokens |
| :---------------- | :------: | ----: |
| Train | 811 | 30,140 |
| Dev | 111 | 4,575 |
| Test | 347 | 10,386 |
| **Total** | **1,269**| **45,101**|



## Acknowledgments

This work was made possible thanks to the generous support of the ANR-DFG Franco-German scheme ([MICLE project](https://www.unicaen.fr/projet_de_recherche/micle/) (2021-2024)) and of the Normandy region [AUTOMATED project](https://www.unicaen.fr/projet_de_recherche/automated/) (2023-2025).

We would like to thank the staff at the Guernsey Greffe archives and the Guernsey Museum & Art Gallery for giving us acces to the manuscript and digital images in 2021 and 2023. We are also grateful to former island archivist Daryl Ogier for his assistance and advice when working with the original source. We are grateful to the team of student transcribers (Agathe Aubert, Lucie Marie-Leblanc, Marie Picart and Valentin Simenel) who helped with the transcription in 2022. We thank Patrice Lajoye and Stéphane Laîné for their assistance with lemmatisation and dialectal features of the text and to Mattis Le Scaer who helped elucidate the historical context of the document.

Annotation was performed by Natasha Romanova and Rayan Ziane, technical assistance by Khensa Daoudi.

## References

* **(Ziane & Romanova 2024)** [Pistes pour l’optimisation de modèles de parsing syntaxique.](https://lift2-2024.sciencesconf.org/590561/document) LIFT 2 - 2024 : Journées de lancement, Nov 2024, Orléans, France.



# Statistics of UD French ALTS

## POS Tags

[ADJ](fr_alts-pos-ADJ.html) – [ADP](fr_alts-pos-ADP.html) – [ADV](fr_alts-pos-ADV.html) – [AUX](fr_alts-pos-AUX.html) – [CCONJ](fr_alts-pos-CCONJ.html) – [DET](fr_alts-pos-DET.html) – [INTJ](fr_alts-pos-INTJ.html) – [NOUN](fr_alts-pos-NOUN.html) – [NUM](fr_alts-pos-NUM.html) – [PRON](fr_alts-pos-PRON.html) – [PROPN](fr_alts-pos-PROPN.html) – [PUNCT](fr_alts-pos-PUNCT.html) – [SCONJ](fr_alts-pos-SCONJ.html) – [VERB](fr_alts-pos-VERB.html)

## Features

[Definite](fr_alts-feat-Definite.html) – [ExtPos](fr_alts-feat-ExtPos.html) – [Number](fr_alts-feat-Number.html) – [NumType](fr_alts-feat-NumType.html) – [Polarity](fr_alts-feat-Polarity.html) – [PronType](fr_alts-feat-PronType.html) – [VerbForm](fr_alts-feat-VerbForm.html)

## Relations

[acl](fr_alts-dep-acl.html) – [acl:relcl](fr_alts-dep-acl-relcl.html) – [advcl](fr_alts-dep-advcl.html) – [advmod](fr_alts-dep-advmod.html) – [amod](fr_alts-dep-amod.html) – [appos](fr_alts-dep-appos.html) – [aux](fr_alts-dep-aux.html) – [aux:pass](fr_alts-dep-aux-pass.html) – [case](fr_alts-dep-case.html) – [cc](fr_alts-dep-cc.html) – [ccomp](fr_alts-dep-ccomp.html) – [conj](fr_alts-dep-conj.html) – [cop](fr_alts-dep-cop.html) – [csubj](fr_alts-dep-csubj.html) – [det](fr_alts-dep-det.html) – [discourse](fr_alts-dep-discourse.html) – [dislocated](fr_alts-dep-dislocated.html) – [expl](fr_alts-dep-expl.html) – [fixed](fr_alts-dep-fixed.html) – [flat](fr_alts-dep-flat.html) – [iobj](fr_alts-dep-iobj.html) – [mark](fr_alts-dep-mark.html) – [nmod](fr_alts-dep-nmod.html) – [nsubj](fr_alts-dep-nsubj.html) – [nummod](fr_alts-dep-nummod.html) – [obj](fr_alts-dep-obj.html) – [obl](fr_alts-dep-obl.html) – [orphan](fr_alts-dep-orphan.html) – [parataxis](fr_alts-dep-parataxis.html) – [punct](fr_alts-dep-punct.html) – [root](fr_alts-dep-root.html) – [vocative](fr_alts-dep-vocative.html) – [xcomp](fr_alts-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1269 sentences, 43088 tokens and 43832 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 4624 tokens (11%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 99 types of words that contain both letters and punctuation. Examples: l', d', s', n', qu', .iii., .vi., c', .iiii., .viii., .ii., .v., .vcclxvi., .xx., .i., .vii., .xv., .xxx., .iiiixx., .ix., .vcclxiii., .vcclxv., .xxv., .vcclxvii., .xxxv., .vcclxix., .xvi., .xxiiii., m', .ixe., .x., .xvii., .xxviiie., .l., .vcclxviii., .viie., .xiiii., .xve., .xxi., .xxixe., .xxvi., .xxvie., .xxxe., .lx., .ve., .vie., .xiie., .xiiie., .xixe., .xl.</li>
</ul>

<ul>
<li>This corpus contains 744 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 22 types of multi-word tokens. Examples: dudit, du, au, audit, des, desditz, es, auquell, aulx, desditez, desquelz, aulxditz, dez, aulxquelz, aux, duquell, esditez, aulxditez, auquelz, desquelles, dezditz, duquel.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: PART, SYM, X</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 35 lemmas tagged as pronouns (PRON): aucun, aultre, autre, autrui, ce, ceci, cela, celui, cil, dont, en, icelui, il, je, le, lequel, nous, on, où, personne, plusieurs, que, qui, quiconque, quoi, rien, se, sien, te, tout, tu, un, ung, vous, y</li>
</ul>

<ul>
<li>This corpus contains 33 lemmas tagged as determiners (DET): aucun, ce, cedit, certain, cil, cist, de, du, icelui, il, ladit, le, ledit, lequel, les, leur, leurdit, maint, mon, notre, notredit, nul, plusieurs, quel, quelque, son, sondit, tel, ton, tout, un, votre, votredit</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as PRON and sometimes as DET: aucun, ce, cil, icelui, il, le, lequel, plusieurs, tout, un</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as auxiliaries (AUX): avoir, faire, être</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as AUX and sometimes as VERB: avoir, faire, être</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: a, avoet, fut, estoet, est, estoient, ont, avoient, furent, sont</li>
    <li>VERB: dit, raporte, dyst, avoet, a, estoet, vynt, vyndrent, use, confesse</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: avoir, estre, faire, avoer</li>
    <li>VERB: dire, croire, cuyder, aller, faire, avoir, queryr, mettre, venir, emporter</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: estey, faict, esté</li>
    <li>VERB: ouy, passey, pryntz, veu, desrobey, eu, faict, prestey, confessé, estey</li>
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
      <li>NOUN: ans, jurés, jour, jours, officiers, sepmainnes, foys, homes, navires, bestes</li>
      <li>PROPN: Collas, Johan, le, Thomas, de, Martin, Nicollas, du, Port, Bequet</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: le, la, l', les, ledit, lez, ung, dé</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: ledit, ung, ladite, une, du, des, lesditz, de, lesditez, plusieurs</li>
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
      <li>ADV: ne, n', Non</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>PRON: ce, cela, c', ceulx, yceulx, ceux, ycelle, celluy, ycelluy, Se</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: tout, ung, aultre, une, rien, aultres, aultruy, aulcuns, personne, tous</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: que, qu', qui, quy</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: il, luy, elle, ilz, en, y, s', le, se, nous</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: que, ou, qui, lequell, laquelle, don, lesquelz, lequel, qu', lesquelles</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: deulx, mille, troys, .iii., .vi., chinq, .iiii., .viii., .ii., .v.</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: premier, .ixe., .xxviiie., .viie., .xve., .xxixe., .xxxe., .ve., .vie., .xiie.</li>
    </ul>
  </li>
</ul>







<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADP
        <ul>
          <li>ADP: juscque, a, quant, par, d'</li>
          <li>ADV: hors, auprés, pres, affin, ainsy, aprés, dehors, fors</li>
          <li>PRON: il, yl</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: En</li>
          <li>ADV: ainsy, fors</li>
          <li>DET: ung</li>
          <li>PRON: c'</li>
          <li>VERB-Inf: scaver, sçavoir, sçaver</li>
        </ul>
      </li>
      <li>DET
        <ul>
          <li>DET: de, l', la</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>PRON: ce</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: en, juscque, a, pour, aprés, par, de, reservey, reservé, sans</li>
          <li>ADV: aprés, dempuys, ainsy, alhors, devant, aussytost, fors, nonobstant, tellement, auttant</li>
          <li>SCONJ: que</li>
          <li>VERB: considerant, consideré, entendu, veu</li>
          <li>VERB-Part: consideré, entendu, veu</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: être.</li>
</ul>

<ul>
<li>This corpus uses 3 lemmas as auxiliaries (<a>aux</a>). Examples: avoir, être, faire.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: être, avoir.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (8)</li>
      <li>VERB--PRON (7)</li>
      <li>VERB-Fin--NOUN (294)</li>
      <li>VERB-Fin--NOUN-ADP(après) (1)</li>
      <li>VERB-Fin--PRON (1174)</li>
      <li>VERB-Fin--PRON-ADP(à) (1)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--PRON (19)</li>
      <li>VERB-Part--NOUN (191)</li>
      <li>VERB-Part--NOUN-ADP(après) (1)</li>
      <li>VERB-Part--PRON (470)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (49)</li>
      <li>VERB--NOUN-ADP(de) (1)</li>
      <li>VERB--PRON (21)</li>
      <li>VERB-Fin--NOUN (565)</li>
      <li>VERB-Fin--NOUN-ADP(avec) (1)</li>
      <li>VERB-Fin--NOUN-ADP(de) (13)</li>
      <li>VERB-Fin--NOUN-ADP(environ) (1)</li>
      <li>VERB-Fin--NOUN-ADP(par) (1)</li>
      <li>VERB-Fin--NOUN-ADP(touchant) (4)</li>
      <li>VERB-Fin--PRON (293)</li>
      <li>VERB-Fin--PRON-ADP(de) (1)</li>
      <li>VERB-Inf--NOUN (171)</li>
      <li>VERB-Inf--NOUN-ADP(de) (2)</li>
      <li>VERB-Inf--PRON (95)</li>
      <li>VERB-Part--NOUN (161)</li>
      <li>VERB-Part--NOUN-ADP(de) (4)</li>
      <li>VERB-Part--NOUN-ADP(jusque) (1)</li>
      <li>VERB-Part--NOUN-ADP(par) (2)</li>
      <li>VERB-Part--PRON (126)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (33)</li>
      <li>VERB-Fin--PRON (247)</li>
      <li>VERB-Inf--PRON (36)</li>
      <li>VERB-Part--PRON (118)</li>
      <li>VERB-Part--PRON-ADP(par) (1)</li>
      <li>VERB-Part--PRON-ADP(à) (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 2 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
