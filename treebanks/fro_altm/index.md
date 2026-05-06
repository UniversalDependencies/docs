---
layout: base
title:  'UD_Old_French-ALTM'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Old French ALTM

Language: [Old French](/fro/index.html) (code: `fro`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.17 release.

The following people have contributed to making this treebank part of UD: Natalia Romanova, Rayan Ziane, Mathieu Goux, Khensa Daoudi, Pierre Larrivée.

Repository: [UD_Old_French-ALTM](https://github.com/UniversalDependencies/UD_Old_French-ALTM)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfro_altm218)<br />
Download all treebanks: [UD 2.18](/#download)

License: CC BY-SA 4.0

Genre: legal

Questions, comments?
General annotation questions (either Old French-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Old_French-ALTM/issues).
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

Old-French ALTM (AUTOMATED Legal Texts Medieval) is a treebank of medieval legal French from Normandy.
Currently in contains one text, _Atiremens et jugiés d'eschequiers_, dated 1314.



The text of _Atiremens et jugiés d'eschequiers_ was digitised from the following edition:
R. Génestal & E.-J. Tardif (eds.) 1921. _Atiremenz et jugiés d'eschequiers_. Caen: A. Olivier, pp. 1-75.

The text was first annotated in PoS, lemmatised and automatically parsed as part of the Franco-German [MICLE project](https://www.unicaen.fr/projet_de_recherche/micle/) (2021-2024) led by Professor Pierre Larrivée (University of Caen) and Professor Cecilia Poletto (University of Frankfurt). An earlier version, annotated with [HT-CRISCO workflow](https://github.com/Corpus-Diachroniques-CRISCO/HT-CRISCO) incorporating the use of [HOPS parser](https://github.com/hopsparser/hopsparser), can be consulted on [CRISCO Lab's TXM server](https://txm-crisco.huma-num.fr/txm/) and via the [website](https://criscoht.unicaen.fr/).

As part of [AUTOMATED project](https://www.unicaen.fr/projet_de_recherche/automated/) led by Professor Larrivée at the University of Caen (2023-2025), the text was reannotated with [BertForDeprel](https://github.com/kirianguiller/BertForDeprel) parser and manually corrected using bootstrapping methodology ([Peng et al 2022](https://hal.science/hal-03846834v1)) on [ArboratorGrew](https://arborator.grew.fr/#/) software.

Annotation in syntactic functions was conducted following the guidelines for Old French developed by the ([Profiterole project](https://github.com/UniversalDependencies/UD_Old_French-PROFITEROLE)).

Where morpological features are concerned, verbs and auxiliaries are annotated in verb forms (VerbForm): Inf (infinitive), Fin (conjugated) and Part (participle). Congujated forms are annotated in Person and Number. Pronouns are annotated in type (PronType: Dem for demonstrative, Ind for indefinite, Prs for personal and Rel for relative). Reflexive and possessive pronouns are also tagged (Reflexive=Yes and Poss=Yes). Determiners are annotated using PronType feature (Art for articles, Dem for demonstratives, Ind for indefinite). Possessive determiners have are annotated Poss=Yes.

Wherever possible, lemmata used in the corpus are modern French or lemmata of the ([Dictionnaire du Moyen Français](http://zeus.atilf.fr/dmf/)).

Please note that Old_French-ALTM treebank is still under development and new material will be added to the collection in future UD releases. Please do not hesitate to contact us is you have any questions, suggestions or comments.

## Acknowledgments

This work was funded by ANR-DFG and Normandy Region grants and took place under the direction of Professor Pierre Larrivée (University of Caen). Mathieu Goux conducted initial PoS annotation and lemmatisation. Natasha Romanova is responsible for the revision of the annotation and for syntactic parsing. Rayan Ziane and Khensa Daoudi provided technical support.

## References

* Forthcoming



# Statistics of UD Old French ALTM

## POS Tags

[ADJ](fro_altm-pos-ADJ.html) – [ADP](fro_altm-pos-ADP.html) – [ADV](fro_altm-pos-ADV.html) – [AUX](fro_altm-pos-AUX.html) – [CCONJ](fro_altm-pos-CCONJ.html) – [DET](fro_altm-pos-DET.html) – [NOUN](fro_altm-pos-NOUN.html) – [NUM](fro_altm-pos-NUM.html) – [PRON](fro_altm-pos-PRON.html) – [PROPN](fro_altm-pos-PROPN.html) – [PUNCT](fro_altm-pos-PUNCT.html) – [SCONJ](fro_altm-pos-SCONJ.html) – [VERB](fro_altm-pos-VERB.html)

## Features

[Definite](fro_altm-feat-Definite.html) – [ExtPos](fro_altm-feat-ExtPos.html) – [Number](fro_altm-feat-Number.html) – [NumType](fro_altm-feat-NumType.html) – [Person](fro_altm-feat-Person.html) – [Polarity](fro_altm-feat-Polarity.html) – [Poss](fro_altm-feat-Poss.html) – [PronType](fro_altm-feat-PronType.html) – [Tense](fro_altm-feat-Tense.html) – [VerbForm](fro_altm-feat-VerbForm.html)

## Relations

[acl](fro_altm-dep-acl.html) – [acl:relcl](fro_altm-dep-acl-relcl.html) – [advcl](fro_altm-dep-advcl.html) – [advmod](fro_altm-dep-advmod.html) – [amod](fro_altm-dep-amod.html) – [appos](fro_altm-dep-appos.html) – [aux](fro_altm-dep-aux.html) – [aux:pass](fro_altm-dep-aux-pass.html) – [case](fro_altm-dep-case.html) – [cc](fro_altm-dep-cc.html) – [ccomp](fro_altm-dep-ccomp.html) – [conj](fro_altm-dep-conj.html) – [cop](fro_altm-dep-cop.html) – [csubj](fro_altm-dep-csubj.html) – [det](fro_altm-dep-det.html) – [dislocated](fro_altm-dep-dislocated.html) – [expl](fro_altm-dep-expl.html) – [fixed](fro_altm-dep-fixed.html) – [flat](fro_altm-dep-flat.html) – [iobj](fro_altm-dep-iobj.html) – [mark](fro_altm-dep-mark.html) – [nmod](fro_altm-dep-nmod.html) – [nsubj](fro_altm-dep-nsubj.html) – [nummod](fro_altm-dep-nummod.html) – [obj](fro_altm-dep-obj.html) – [obl](fro_altm-dep-obl.html) – [orphan](fro_altm-dep-orphan.html) – [parataxis](fro_altm-dep-parataxis.html) – [punct](fro_altm-dep-punct.html) – [root](fro_altm-dep-root.html) – [xcomp](fro_altm-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 553 sentences, 15076 tokens and 15285 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 1278 tokens (8%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 62 types of words that contain both letters and punctuation. Examples: l', n', d', s', ij., m', iij., vj., c', entr', [que], iiij., x., c., xxj., aag[i]é, xx., [se], espousa[i]lles, gag[i]er, ix., vi., xij., xl., [brebis], [conneü, [des]truis, [et], [in]conneües, [jour], [l'], [n', [on], [que, [savoir], [son, [sont], [terminer], [un], [x]viij., aid[i]er, as[s]eoir, comme], contre[s]tant, el[e], en], est], i[l], j', jug[ement]</li>
</ul>

<ul>
<li>This corpus contains 209 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 9 types of multi-word tokens. Examples: du, des, au, as, u, es, eu, el, auquel.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 13 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: PART, INTJ, SYM, X</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 32 lemmas tagged as pronouns (PRON): aucun, autre, autrui, ce, chacun, cil, cist, dont, en, il, je, lequel, nous, nul, néant, on, où, que, quel, qui, quiconque, quoi, rien, se, sien, soi, tel, tout, un, vous, vôtre, y</li>
</ul>

<ul>
<li>This corpus contains 21 lemmas tagged as determiners (DET): aucun, autre, ce, chacun, cil, cist, de, l', la, le, leur, ma, mon, notre, nul, plusieurs, quel, son, tout, un, votre</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as PRON and sometimes as DET: aucun, autre, ce, chacun, cil, cist, nul, quel, tout, un</li>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as auxiliaries (AUX): avoir, devoir, pouvoir, souloir, être</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as AUX and sometimes as VERB: avoir, devoir, pouvoir, être</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: est, fu, doit, avoit, estoit, puet, devoit, eüst, a, soit</li>
    <li>VERB: dist, disoit, vouloit, a, demandoit, estoit, vout, est, di, fet</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: estre, avoir</li>
    <li>VERB: savoir, avoir, fere, respondre, aler, metre, prendre, connoistre, demander, semondre</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: esté</li>
    <li>VERB: jugié, fete, tenu, ataint, fet, pris, rendu, mis, justicié, tret</li>
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
      <li>AUX-Fin: avoient, estoient, avez, sont, devez, furent, doivent, fussent, avon, devoient</li>
      <li>NOUN: nans, resons, parties, enfans, hommes, deffautes, tesmoins, deniers, livres, ans</li>
      <li>VERB-Fin: sont, mistrent, distrent, disoient, voulon, aroient, avoient, dison, firent, vindrent</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>AUX-Fin: est, fu, doit, avoit, estoit, puet, devoit, eüst, a, soit</li>
      <li>NOUN: homme, droit, fame, veüe, brief, terre, jugement, marchié, court, heritage</li>
      <li>PROPN: Normendie, Diex, Robert, Roen, Bosc, Dieu, France, Sainne</li>
      <li>VERB-Fin: dist, disoit, vouloit, a, demandoit, estoit, vout, est, di, fet</li>
      <li>VERB-Part: fete</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADP: de</li>
      <li>DET: le, l', la, les, li</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, une, tous, tout, de, toute, aucune, autre, nul, toutes</li>
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
      <li>ADV: ne, n', pas, point, mie, [n'</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>




<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Part: esté</li>
      <li>VERB-Fin: departi</li>
      <li>VERB-Part: jugié, fete, tenu, ataint, fet, pris, rendu, mis, justicié, tret</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>VERB-Part: pendant, fesant, metant, vouchant, abatant, contre[s]tant, contrebatant, contrestant, demourant, disant</li>
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
      <li>DET: le, l', la, les, un, une, li, uns, [un], des</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: cest, cele, cel, ce, ces, ceste, ses, celi, cen, cil</li>
      <li>PRON: ce, cil, celi, c', cels, celui, cen, ceus, cele, celes</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: autre, riens, els, aucun, nul, un, tout, aucuns, nus, autrui</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: comment</li>
      <li>DET: quel</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADP: a</li>
      <li>PRON: il, en, li, vous, je, l', le, se, ele, i</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: qui, que, quoi, ou, donc, lequel, quele, dont, quel</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: ij., iij., vj., deus, iiij., x., c., xxj., xx., ix.</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: premier, premiere, premieres, première, segont, tiers</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: soen</li>
      <li>DET: son, sa, lor, ses, vostre, ma, mon, leur, nostre, mes</li>
      <li>PRON: soen, soens, vos, vostre</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: sui, ai, avon, doi, aroie, avion, eüsse, aie, doie, fui</li>
      <li>VERB-Fin: di, veul, voulon, dison, oï, pris, sieus, vi, vueil, ai</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: avez, devez, pouez, fussiez, estiez, eussiez, eüssiez, peüssiez, poez, porriez</li>
      <li>VERB-Fin: feïstes, meïstes, aportastes, connoissiez, criez, devez, dites, estes, eüssiez, faciez</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: est, fu, doit, avoit, estoit, puet, devoit, eüst, a, soit</li>
      <li>VERB-Fin: dist, disoit, vouloit, a, demandoit, estoit, vout, est, fet, prist</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADP
        <ul>
          <li>ADP: juques, jusques</li>
          <li>ADV: hors, Non, ains, quant</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: de</li>
          <li>PRON: c'</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>DET: la</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: por, devant, par, puis, sans, depuis, fors, avant, des</li>
          <li>ADV: si, tant, anciés, puis, Anceis, Ausi, ainceis, ains, ainçois, combien</li>
          <li>PRON: tout</li>
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
<li>This corpus uses 5 lemmas as auxiliaries (<a>aux</a>). Examples: avoir, devoir, pouvoir, être, souloir.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: être.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (366)</li>
      <li>VERB-Fin--NOUN-ADP(à) (1)</li>
      <li>VERB-Fin--PRON (514)</li>
      <li>VERB-Inf--NOUN (42)</li>
      <li>VERB-Inf--PRON (122)</li>
      <li>VERB-Part--NOUN (168)</li>
      <li>VERB-Part--PRON (223)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (329)</li>
      <li>VERB-Fin--NOUN-ADP(de) (2)</li>
      <li>VERB-Fin--NOUN-ADP(depuis) (1)</li>
      <li>VERB-Fin--NOUN-ADP(à) (1)</li>
      <li>VERB-Fin--PRON (151)</li>
      <li>VERB-Inf--NOUN (144)</li>
      <li>VERB-Inf--PRON (49)</li>
      <li>VERB-Part--NOUN (74)</li>
      <li>VERB-Part--NOUN-ADP(à) (1)</li>
      <li>VERB-Part--PRON (49)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (53)</li>
      <li>VERB-Inf--PRON (15)</li>
      <li>VERB-Inf--PRON-ADP(à) (1)</li>
      <li>VERB-Part--PRON (36)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 2 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>vocative</a>, <a>discourse</a>, <a>clf</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
