---
layout: base
title:  'UD_Middle_French-ALTM'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Middle French ALTM

Language: [Middle French](/frm/index.html) (code: `frm`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.17 release.

The following people have contributed to making this treebank part of UD: Natalia Romanova, Rayan Ziane, Khensa Daoudi, Théo Brillet.

Repository: [UD_Middle_French-ALTM](https://github.com/UniversalDependencies/UD_Middle_French-ALTM)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfrm_altm218)<br />
Download all treebanks: [UD 2.18](/#download)

License: CC BY-SA 4.0

Genre: legal

Questions, comments?
General annotation questions (either Middle French-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Middle_French-ALTM/issues).
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

Middle-French ALTM (AUTOMATED Legal Texts Medieval) is a treebank of medieval legal French from Normandy.
Currently in contains one text, an extract from _Coutume, style et usage au temps des Échiquiers de Normandie_, dated 1425.


The text of the first ten chapters of _Coutume, style et usage au temps des Échiquiers de Normandie_ was digitised from the following edition:
A.-J. Marnier (ed). 1847. _Coutume, style et usage au temps des Échiquiers de Normandie_. Mémoires de la Société des antiquaires de Normandie. 2nd series, vol 8. Caen: A. Hardel, pp. 1-7.

The text was first annotated in PoS, lemmatised and automatically parsed as part of the Franco-German [MICLE project](https://www.unicaen.fr/projet_de_recherche/micle/) (2021-2024) led by Professor Pierre Larrivée (University of Caen) and Professor Cecilia Poletto (University of Frankfurt). An earlier version, annotated with [HT-CRISCO workflow](https://github.com/Corpus-Diachroniques-CRISCO/HT-CRISCO) incorporating the use of [HOPS parser](https://github.com/hopsparser/hopsparser), can be consulted on [CRISCO Lab's TXM server](https://txm-crisco.huma-num.fr/txm/) and via the [website](https://criscoht.unicaen.fr/).

The treebank currently contains **217 sentences** and **7,301 tokens**.

As part of [AUTOMATED project](https://www.unicaen.fr/projet_de_recherche/automated/) led by Professor Larrivée at the University of Caen (2023-2025), the text was reannotated with [BertForDeprel](https://github.com/kirianguiller/BertForDeprel) parser and manually corrected using bootstrapping methodology ([Peng et al 2022](https://hal.science/hal-03846834v1)) on [ArboratorGrew](https://arborator.grew.fr/#/) software.

Annotation in syntactic functions was conducted following the guidelines for Old French developed by the ([Profiterole project](https://github.com/UniversalDependencies/UD_Middle_French-PROFITEROLE)).

Wherever possible, lemmata used in the corpus are modern French or lemmata of the ([Dictionnaire du Moyen Français](http://zeus.atilf.fr/dmf/)).

Sentences written completely in Latin were excluded. If Latin words occur in French sentences, the token contains the tag Lang=la and is lemmatised with a Latin lemma.

Where morpological features are concerned, verbs and auxiliaries are annotated in verb forms (VerbForm): Inf (infinitive), Fin (conjugated) and Part (participle). Congujated forms are annotated in Person and Number. Pronouns are annotated in type (PronType: Dem for demonstrative, Ind for indefinite, Prs for personal and Rel for relative). Reflexive and possessive pronouns are also tagged (Reflexive=Yes and Poss=Yes). Determiners are annotated using PronType feature (Art for articles, Dem for demonstratives, Ind for indefinite). Possessive determiners have are annotated Poss=Yes.

Please note that Middle_French-ALTM treebank is still under development and new material will be added to the collection in future UD releases. Please do not hesitate to contact us is you have any questions, suggestions or comments.

## Acknowledgments
This work was funded by ANR-DFG and Normandy Region grants and took place under the direction of Professor Pierre Larrivée (University of Caen). Mathieu Goux conducted initial PoS annotation and lemmatisation. Natasha Romanova is responsible for the revision of the annotation and for syntactic parsing. Théo Brillet assisted with syntactic annotation and annotated Latin tokens. Rayan Ziane and Khensa Daoudi provided technical support.

## References

* (citation)



# Statistics of UD Middle French ALTM

## POS Tags

[ADJ](frm_altm-pos-ADJ.html) – [ADP](frm_altm-pos-ADP.html) – [ADV](frm_altm-pos-ADV.html) – [AUX](frm_altm-pos-AUX.html) – [CCONJ](frm_altm-pos-CCONJ.html) – [DET](frm_altm-pos-DET.html) – [NOUN](frm_altm-pos-NOUN.html) – [NUM](frm_altm-pos-NUM.html) – [PRON](frm_altm-pos-PRON.html) – [PROPN](frm_altm-pos-PROPN.html) – [PUNCT](frm_altm-pos-PUNCT.html) – [SCONJ](frm_altm-pos-SCONJ.html) – [VERB](frm_altm-pos-VERB.html)

## Features

[Definite](frm_altm-feat-Definite.html) – [ExtPos](frm_altm-feat-ExtPos.html) – [Number](frm_altm-feat-Number.html) – [NumType](frm_altm-feat-NumType.html) – [Person](frm_altm-feat-Person.html) – [Poss](frm_altm-feat-Poss.html) – [PronType](frm_altm-feat-PronType.html) – [Tense](frm_altm-feat-Tense.html) – [VerbForm](frm_altm-feat-VerbForm.html)

## Relations

[acl](frm_altm-dep-acl.html) – [acl:relcl](frm_altm-dep-acl-relcl.html) – [advcl](frm_altm-dep-advcl.html) – [advmod](frm_altm-dep-advmod.html) – [amod](frm_altm-dep-amod.html) – [appos](frm_altm-dep-appos.html) – [aux](frm_altm-dep-aux.html) – [aux:pass](frm_altm-dep-aux-pass.html) – [case](frm_altm-dep-case.html) – [cc](frm_altm-dep-cc.html) – [ccomp](frm_altm-dep-ccomp.html) – [conj](frm_altm-dep-conj.html) – [cop](frm_altm-dep-cop.html) – [csubj](frm_altm-dep-csubj.html) – [det](frm_altm-dep-det.html) – [discourse](frm_altm-dep-discourse.html) – [dislocated](frm_altm-dep-dislocated.html) – [expl](frm_altm-dep-expl.html) – [fixed](frm_altm-dep-fixed.html) – [flat](frm_altm-dep-flat.html) – [iobj](frm_altm-dep-iobj.html) – [mark](frm_altm-dep-mark.html) – [nmod](frm_altm-dep-nmod.html) – [nsubj](frm_altm-dep-nsubj.html) – [nummod](frm_altm-dep-nummod.html) – [obj](frm_altm-dep-obj.html) – [obl](frm_altm-dep-obl.html) – [orphan](frm_altm-dep-orphan.html) – [punct](frm_altm-dep-punct.html) – [root](frm_altm-dep-root.html) – [vocative](frm_altm-dep-vocative.html) – [xcomp](frm_altm-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 217 sentences, 6953 tokens and 7084 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 643 tokens (9%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 26 types of words that contain both letters and punctuation. Examples: l', d', qu', n', s', etc., c', R., -il, G., XL., puisqu', -a, -ce, -dessus, -dire, -je, -l', A., B., J., N., P., X., j', po.</li>
</ul>

<ul>
<li>This corpus contains 131 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 14 types of multi-word tokens. Examples: au, du, des, aux, dez, desquieulx, auquel, ou, ès, aus, ausquelles, duquel, es, où.</li>
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
<li>This corpus contains 32 lemmas tagged as pronouns (PRON): aucun, autel, autre, ce, celui, chacun, cil, dont, en, icelui, il, je, lequel, nous, nul, on, où, plusieurs, premier, que, quel, qui, quiconque, rien, se, sien, similis, tel, tout, un, vous, y</li>
</ul>

<ul>
<li>This corpus contains 22 lemmas tagged as determiners (DET): aucun, autre, ce, certain, chacun, cist, divers, icelui, l, le, lequel, les, leur, mon, notre, nul, plusieurs, quel, quelque, son, tout, un</li>
</ul>

<ul>
<li>Out of the above, 11 lemmas occurred sometimes as PRON and sometimes as DET: aucun, autre, ce, chacun, icelui, lequel, nul, plusieurs, quel, tout, un</li>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as auxiliaries (AUX): avoir, devoir, pouvoir, être</li>
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
    <li>AUX: est, doit, a, sera, peult, soit, sont, estoit, aura, doivent</li>
    <li>VERB: est, convient, fait, a, face, requiert, fera, soit, veult, dit</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: estre, être</li>
    <li>VERB: faire, adjourner, assavoir, noter, avoir, venir, dire, amender, respondre, veoir</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: esté, este, été</li>
    <li>VERB: fait, dit, prins, faicte, suivant, adjourné, appellé, tenu, apporté, fais</li>
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
      <li>AUX-Fin: sont, doivent, pevent, devront, fustes, ont, pourront, soient</li>
      <li>NOUN: adjournemens, assises, jours, personnes, deffaulx, lettres, chevaliers, lieux, foys, appeaulx</li>
      <li>VERB-Fin: sont, parlerons, dient, oés, adjournons, assemblent, font, ont, tiennent, adjourniez</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>AUX-Fin: est, doit, a, sera, peult, soit, estoit, aura, suis, fu</li>
      <li>NOUN: cas, adjournement, respit, partie, sergent, jour, cause, lieu, juge, assise</li>
      <li>PROPN: France, Normendie, R., G., Avignon, Dame, Nostre, A., Arsseville, B.</li>
      <li>VERB-Fin: est, convient, fait, a, face, requiert, fera, soit, veult, dit</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: le, la, les, l', l, lez, -l', uns</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: ung, une, un, unes, ungs</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>




<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Part: esté, este, été</li>
      <li>VERB-Part: fait, dit, prins, faicte, adjourné, appellé, tenu, apporté, fais, respitée</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>VERB-Part: suivant, demourant, contenant, disant, séant, Requérant, adressans, complaingnant, estant, reffusans</li>
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
      <li>DET: le, la, les, l', ung, une, un, l, lez, -l'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: icellui, ce, ceste, iceulx, icelle, celle, ces, cestuy, icelles</li>
      <li>PRON: ce, c', cellui, ceulx, icellui, cil, s', -ce, celui, icelle</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: aultre, aucun, quelque, tous, toutes, aucune, tout, aucunes, diverses, nul</li>
      <li>PRON: tel, aultres, aucun, aucuns, aultre, autre, chacun, nul, plusieurs, ung</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: quel, quelle</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: ne, n', pas, point, non, mie</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: il, en, lui, le, y, je, s', se, ilz, nous</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: lequel, laquelle, quel</li>
      <li>PRON: qui, que, qu', dont, lequel, ou, quoy, lesquels, quieulx, laquelle</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADJ: deu, tieulx</li>
      <li>NUM: IIII, XL., deux, XL, quatre, troys, IX, Neuf, X., XV</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: premier, deuxième, première, XVe, deuxiesme, cinquième, deuxieme, prémier, second</li>
      <li>PRON: première</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: son, sa, leurs, ma, ses, nostre, leur, mon, mes</li>
      <li>PRON: siens</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: suis, doys, puis, avoye, ay, doy, doye</li>
      <li>VERB-Fin: parlerons, adjourne, adjournons, certiffions, commencerons, contraing, coutraing, croy, dirons, doy</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: fustes</li>
      <li>VERB-Fin: oés, adjourniez, fachiez</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: est, doit, a, sera, peult, soit, sont, estoit, aura, doivent</li>
      <li>VERB-Fin: est, convient, fait, a, face, requiert, fera, soit, veult, dit</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADJ
        <ul>
          <li>ADP: en</li>
        </ul>
      </li>
      <li>ADP
        <ul>
          <li>ADP: jusques, de</li>
          <li>ADV: quant, affin, hors</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: de, à</li>
          <li>ADV: non, cy, néant</li>
          <li>DET: toutes</li>
          <li>PRON: c', c</li>
          <li>VERB-Fin: est</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: pour, selon, Après</li>
          <li>ADV: jasoit, afin, si, tost, affin, incontinent, supposé</li>
          <li>VERB-Part: considéré, supposé</li>
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
<li>This corpus uses 4 lemmas as auxiliaries (<a>aux</a>). Examples: devoir, avoir, pouvoir, être.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: être.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (86)</li>
      <li>VERB-Fin--PRON (162)</li>
      <li>VERB-Inf--NOUN (22)</li>
      <li>VERB-Inf--NOUN-ADP(de) (1)</li>
      <li>VERB-Inf--PRON (34)</li>
      <li>VERB-Part--NOUN (71)</li>
      <li>VERB-Part--NOUN-ADP(après) (1)</li>
      <li>VERB-Part--NOUN-ADP(depuis) (1)</li>
      <li>VERB-Part--NOUN-ADP(à) (1)</li>
      <li>VERB-Part--PRON (68)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (93)</li>
      <li>VERB-Fin--NOUN-ADP(de) (2)</li>
      <li>VERB-Fin--PRON (48)</li>
      <li>VERB-Inf--NOUN (91)</li>
      <li>VERB-Inf--NOUN-ADP(de) (2)</li>
      <li>VERB-Inf--NOUN-ADP(à) (1)</li>
      <li>VERB-Inf--PRON (28)</li>
      <li>VERB-Inf--PRON-ADP(par)-ADP(devant) (1)</li>
      <li>VERB-Part--NOUN (22)</li>
      <li>VERB-Part--PRON (12)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (17)</li>
      <li>VERB-Inf--PRON (9)</li>
      <li>VERB-Part--PRON (5)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 2 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a>, <a>parataxis</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
