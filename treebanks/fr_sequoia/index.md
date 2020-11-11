---
layout: base
title:  'UD_French-Sequoia'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD French Sequoia

Language: [French](/fr/index.html) (code: `fr`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.0 release.

The following people have contributed to making this treebank part of UD: Marie Candito, Djamé Seddah, Guy Perrier, Bruno Guillaume.

Repository: [UD_French-Sequoia](https://github.com/UniversalDependencies/UD_French-Sequoia)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfr_sequoia27)<br />
Download all treebanks: [UD 2.7](/#download)

License: LGPL-LR

Genre: wiki, medical, news, nonfiction

Questions, comments?
General annotation questions (either French-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_French-Sequoia/issues).
If you want to collaborate, please contact [bruno&nbsp;•&nbsp;guillaume&nbsp;(æt)&nbsp;inria&nbsp;•&nbsp;fr].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | not available |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description
**UD_French-Sequoia** is an automatic conversion of the Sequoia Treebank corpus [French Sequoia corpus](http://deep-sequoia.inria.fr).


**UD_French-Sequoia** is an automatic conversion of the Sequoia Treebank corpus [French Sequoia corpus](http://deep-sequoia.inria.fr).
The conversion was done with the [Grew software](http://grew.fr) and the Graph Rewriting System [described here](https://gitlab.inria.fr/grew/SSQ_UD).
See [here](http://deep-sequoia.inria.fr/process) for more info about the conversion process.

## Origin
The first version of the Sequoia Corpus was presented in [(Candito & Seddah, 2012)](https://hal-univ-diderot.archives-ouvertes.fr/hal-00698938/).

## Splitting
The whole corpus contains 70,567 tokens in 3,099 sentences.

In **UD_French-Sequoia**, data were randomly split into:

* `fr_sequoia-ud-test.conllu`: 10,048 tokens in 456 sentences
* `fr_sequoia-ud-dev.conllu`: 10,002 tokens in 412 sentences
* `fr_sequoia-ud-train.conllu`: 50,517 tokens in 2,231 sentences

## Genres
The original sentences of the corpus are taken from:

* French Europarl (`sent_id` prefix: `Europar.550`)
* Wikipédia Fr (`sent_id` prefix: `frwiki_50.1000`)
* Newspaper *Est Républicain* (`sent_id` prefix: `annodis.er`)
* European Medicines Agency (`sent_id` prefix: `emea-fr-dev` and `emea-fr-test`)

## Acknowledgments

The conversion has been performed by Bruno Guillaume with the Graph Rewriting System [described here](https://gitlab.inria.fr/grew/SSQ_UD) developed by Bruno Guillaume and Guy Perrier.

The Sequoia Corpus was presented in [(Candito & Seddah, 2012)](https://hal-univ-diderot.archives-ouvertes.fr/hal-00698938/) and revised later, notably during the project of deep annotation described in [(Candito & al. 2014)](http://hal.inria.fr/docs/00/97/15/74/PDF/deep_sequoia.final_with_keywords.pdf) and [(Perrier & al. 2014)](http://talc2.loria.fr/deep-sequoia/papers/syntaxe_profonde.pdf).

The conversion process to UD is described in [(Bonfante & al. 2018)](https://hal.inria.fr/hal-01814386), chapter 3.


# Statistics of UD French Sequoia

## POS Tags

[ADJ](fr_sequoia-pos-ADJ.html) – [ADP](fr_sequoia-pos-ADP.html) – [ADV](fr_sequoia-pos-ADV.html) – [AUX](fr_sequoia-pos-AUX.html) – [CCONJ](fr_sequoia-pos-CCONJ.html) – [DET](fr_sequoia-pos-DET.html) – [INTJ](fr_sequoia-pos-INTJ.html) – [NOUN](fr_sequoia-pos-NOUN.html) – [NUM](fr_sequoia-pos-NUM.html) – [PART](fr_sequoia-pos-PART.html) – [PRON](fr_sequoia-pos-PRON.html) – [PROPN](fr_sequoia-pos-PROPN.html) – [PUNCT](fr_sequoia-pos-PUNCT.html) – [SCONJ](fr_sequoia-pos-SCONJ.html) – [SYM](fr_sequoia-pos-SYM.html) – [VERB](fr_sequoia-pos-VERB.html) – [X](fr_sequoia-pos-X.html)

## Features

[Definite](fr_sequoia-feat-Definite.html) – [Gender](fr_sequoia-feat-Gender.html) – [Mood](fr_sequoia-feat-Mood.html) – [Number](fr_sequoia-feat-Number.html) – [NumType](fr_sequoia-feat-NumType.html) – [Person](fr_sequoia-feat-Person.html) – [Polarity](fr_sequoia-feat-Polarity.html) – [Poss](fr_sequoia-feat-Poss.html) – [PronType](fr_sequoia-feat-PronType.html) – [Reflex](fr_sequoia-feat-Reflex.html) – [Tense](fr_sequoia-feat-Tense.html) – [VerbForm](fr_sequoia-feat-VerbForm.html) – [Voice](fr_sequoia-feat-Voice.html)

## Relations

[acl](fr_sequoia-dep-acl.html) – [acl:relcl](fr_sequoia-dep-acl-relcl.html) – [advcl](fr_sequoia-dep-advcl.html) – [advcl:cleft](fr_sequoia-dep-advcl-cleft.html) – [advmod](fr_sequoia-dep-advmod.html) – [amod](fr_sequoia-dep-amod.html) – [appos](fr_sequoia-dep-appos.html) – [aux:caus](fr_sequoia-dep-aux-caus.html) – [aux:pass](fr_sequoia-dep-aux-pass.html) – [aux:tense](fr_sequoia-dep-aux-tense.html) – [case](fr_sequoia-dep-case.html) – [cc](fr_sequoia-dep-cc.html) – [ccomp](fr_sequoia-dep-ccomp.html) – [conj](fr_sequoia-dep-conj.html) – [cop](fr_sequoia-dep-cop.html) – [csubj](fr_sequoia-dep-csubj.html) – [csubj:pass](fr_sequoia-dep-csubj-pass.html) – [dep](fr_sequoia-dep-dep.html) – [det](fr_sequoia-dep-det.html) – [discourse](fr_sequoia-dep-discourse.html) – [dislocated](fr_sequoia-dep-dislocated.html) – [expl:comp](fr_sequoia-dep-expl-comp.html) – [expl:pass](fr_sequoia-dep-expl-pass.html) – [expl:subj](fr_sequoia-dep-expl-subj.html) – [fixed](fr_sequoia-dep-fixed.html) – [flat:foreign](fr_sequoia-dep-flat-foreign.html) – [flat:name](fr_sequoia-dep-flat-name.html) – [goeswith](fr_sequoia-dep-goeswith.html) – [iobj](fr_sequoia-dep-iobj.html) – [iobj:agent](fr_sequoia-dep-iobj-agent.html) – [mark](fr_sequoia-dep-mark.html) – [nmod](fr_sequoia-dep-nmod.html) – [nsubj](fr_sequoia-dep-nsubj.html) – [nsubj:caus](fr_sequoia-dep-nsubj-caus.html) – [nsubj:pass](fr_sequoia-dep-nsubj-pass.html) – [nummod](fr_sequoia-dep-nummod.html) – [obj](fr_sequoia-dep-obj.html) – [obj:agent](fr_sequoia-dep-obj-agent.html) – [obl:agent](fr_sequoia-dep-obl-agent.html) – [obl:arg](fr_sequoia-dep-obl-arg.html) – [obl:mod](fr_sequoia-dep-obl-mod.html) – [orphan](fr_sequoia-dep-orphan.html) – [parataxis](fr_sequoia-dep-parataxis.html) – [punct](fr_sequoia-dep-punct.html) – [root](fr_sequoia-dep-root.html) – [vocative](fr_sequoia-dep-vocative.html) – [xcomp](fr_sequoia-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3099 sentences, 68615 tokens and 70567 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 10779 tokens (16%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 40 types of words with spaces. Examples: 50 000, 125 000, 1 000, 1 500, 10 000, 1 200, 13 819, 15 000, 2 000, 2 127, 3 852, 3 862, 6 000, 7 736, 80 000, 1 062, 1 065, 1 246, 100 000, 108 000, 111 547, 14 000, 17 600, 19 000, 190 500, 2 914571 14 3, 20 000, 25 000, 260 000, 3 092, 4 000, 46 000, 5 000, 500 000, 67 025, 7 000, 70 000, 8 000, 800 000, 850 000</li>
</ul>

<ul>
<li>This corpus contains 306 types of words that contain both letters and punctuation. Examples: l', d', n', qu', s', c', M., j', jusqu', Jean-Claude, -il, aujourd'hui, Hauts-de-Seine, peut-être, IIb/IIIa, après-midi, Deviers-Joncour, post-ménopausique, lorsqu', Jean-François, Jean-Pierre, m', politico-financière, -ce, -t, Jean-Paul, Thomson-CSF, celle-ci, en-dessous, non-lieu, rétro-commissions, États-Unis, Île-de-France, contre-indiqué, p​o​s​t​-​c​o​m​m​e​r​c​i​a​l​i​s​a​t​i​o​n, rendez-vous, -en, -nous, -vous, Chin-Feun, GPIIb/IIIa, Jean-Louis, REPLACE-2, T-score, calcium-élément, celui-ci, etc., -ils, -je, -moi</li>
</ul>

<ul>
<li>This corpus contains 1952 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 8 types of multi-word tokens. Examples: des, du, au, aux, auxquels, auxquelles, duquel, desdites.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 1 word types tagged as particles (PART): -t</li>
</ul>

<ul>
<li>This corpus contains 88 lemmas tagged as pronouns (PRON): 0,24, 000, 1, 1 000, 1 062, 1 065, 1.000, 1/10, 1/100, 1/1000, 10, 10 000, 100, 11, 139, 14, 15, 150, 17, 19, 19 000, 2, 200, 22, 23, 29, 3, 3 852, 3 862, 34, 40, 41, 4603, 4604, 4612, 5, 50, 51, 6, 60, 69, 75, 8, 80, 92, 96, aucun, autre, beaucoup, ce, ceci, cela, celui, celui-ci, cent, certain, chacun, cinq, deux, dont, en, il, le, lequel, lui, lui-même, moi, nul, nôtre, onze, où, personne, peu, plusieurs, que, quelques-uns, qui, quiconque, quoi, rien, se, six, soi, tout, trois, un, y, ça</li>
</ul>

<ul>
<li>This corpus contains 44 lemmas tagged as determiners (DET): 1 000, 1 200, 1 246, 1 500, 10 000, 100 000, 108 000, 111 547, 125 000, 13 819, 14 000, 15 000, 17 600, 2 000, 2 127, 20 000, 25 000, 4 000, 46 000, 5 000, 50 000, 500 000, 6 000, 67 025, 7 000, 7 736, 8 000, 80 000, aucun, ce, certain, chaque, différent, divers, du, le, ledit, plusieurs, quel, quelque, son, tel, tout, un</li>
</ul>

<ul>
<li>Out of the above, 9 lemmas occurred sometimes as PRON and sometimes as DET: 1 000, 10 000, aucun, ce, certain, le, plusieurs, tout, un</li>
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
    <li>AUX: est, a, ont, sont, était, avait, sera, fut, étaient, ai</li>
    <li>VERB: doit, a, peut, est, doivent, faut, peuvent, voudrais, pense, agit</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: être, avoir, faire, ETRE</li>
    <li>VERB: voir, faire, prendre, avoir, utiliser, dire, partir, savoir, obtenir, recevoir</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: été, ayant, étant, fait, faisant</li>
    <li>VERB: mis, eu, traités, utilisé, atteints, administré, reçu, concernant, pris, pu</li>
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
      <li>ADJ: européenne, première, rénale, française, toutes, nouvelle, intraveineuse, nationale, seule, osseuse</li>
      <li>ADV: faute</li>
      <li>DET: la, une, cette, sa, aucune, certaines, toute, ma, quelles, toutes</li>
      <li>NOUN: affaire, bivalirudine, commission, perfusion, administration, solution, dose, étude, fois, guerre</li>
      <li>PRON: elle, laquelle, elles, la, lesquelles, une, celle-ci, chacune, celles, celle</li>
      <li>PROPN: France, Paget, Europe, Christine, Denise, Afrique, Chine, Jean, Blanche, Société</li>
      <li>VERB-Part: observée, recommandée, administrée, destinée, maintenue, menée, rapportées, traitées, versées, liée</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: français, tous, ancien, osseux, zolédronique, premier, nombreux, dernier, compris, faux</li>
      <li>AUX-Part: fait</li>
      <li>DET: le, un, ce, cet, les, aucun, tout, du, certains, quel</li>
      <li>NOUN: %, patients, mg, ans, cas, traitement, président, effets, M., cours</li>
      <li>NUM: neuf</li>
      <li>PRON: il, ils, un, le, -il, lui, eux, ceux, chacun, lequel</li>
      <li>PROPN: paris, Jacques, Chirac, Taïwan, Michel, Hauts-de-Seine, Didier, Alain, Maupas, François</li>
      <li>VERB-Part: mis, eu, traités, utilisé, atteints, administré, reçu, pris, fait, présenté</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: autres, indésirables, tous, politiques, cliniques, toutes, occultes, âgés, fréquents, graves</li>
      <li>AUX-Fin: ont, sont, étaient, avaient, avez, avons, seront, soient, auraient, êtes</li>
      <li>DET: les, des, ces, plusieurs, ses, de, d', leurs, quelques, nos</li>
      <li>NOUN: patients, ans, enfants, effets, jours, millions, mois, hommes, fractures, francs</li>
      <li>PRON: nous, vous, ils, les, eux, ceux, elles, lesquelles, leur, lesquels</li>
      <li>PROPN: Hauts-de-Seine, États-Unis, Dominati, verts, Balkans, Nations, Sources, Bahamas, Frégates, Pays-Bas</li>
      <li>VERB-Fin: doivent, peuvent, devons, ont, avez, veuillez, devez, présentent, avaient, avons</li>
      <li>VERB-Part: traités, atteints, présentés, rapportées, traitées, versées, rapportés, liés, menées, observés</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: autre, politique, même, clinique, ancien, zolédronique, européenne, jeune, première, rénale</li>
      <li>ADV: faute</li>
      <li>AUX-Fin: est, a, était, avait, sera, fut, ai, soit, aurait, suis</li>
      <li>AUX-Part: fait</li>
      <li>DET: le, la, l', une, un, cette, ce, son, votre, sa</li>
      <li>NOUN: affaire, bivalirudine, commission, perfusion, traitement, président, M., conseil, administration, solution</li>
      <li>PRON: il, je, elle, c', j', cela, on, un, le, l'</li>
      <li>PROPN: Paris, Union, Jacques, France, Chirac, Taïwan, Francis, Michel, Paget, Didier</li>
      <li>VERB-Fin: doit, a, peut, est, faut, voudrais, pense, agit, concerne, contient</li>
      <li>VERB-Part: eu, utilisé, administré, reçu, fait, observée, présenté, recommandé, recommandée, administrée</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: le, les, la, l', lesdites</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: une, un, des, de, d', quelques, tout, toute, quelque, tous</li>
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
      <li>ADV: pas, n', ne, plus, jamais, guère</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: aurait, auraient, serait, seraient, serais</li>
      <li>VERB-Fin: voudrais, pourrait, devrait, devrions, pourraient, devraient, devrais, souhaiterais, deviendrait, retrouverait</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: veuillez, demandez, permettez, prévenez, suivez, Assurez, Contactez, Faites, Gardez, Revenons</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: est, a, ont, sont, était, avait, sera, fut, étaient, ai</li>
      <li>VERB-Fin: doit, a, peut, est, doivent, faut, peuvent, agit, pense, devons</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: soit, soient, ait, aient, ayez, fasse, sois, soyons</li>
      <li>VERB-Fin: puisse, puissent, prenne, comportent, fasse, produise, revienne, réserve, soit, aboutisse</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: sera, seront, aura, auront, aurons, fera</li>
      <li>VERB-Fin: devra, pourra, aura, pourront, aurons, auront, durera, déterminera, informera, aurai</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: était, avait, étaient, avaient, étais, Etaient, avais, avions</li>
      <li>VERB-Fin: devait, avait, pouvait, avaient, agissait, faisaient, faisait, travaillait, fallait, souhaitait</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: fut, furent, eut</li>
      <li>AUX-Part: été, fait</li>
      <li>VERB-Fin: agit, eut, avéra, mit, revint, aboutisse, aboutit, accrochèrent, adonnèrent, adoucit</li>
      <li>VERB-Part: mis, eu, traités, utilisé, atteints, administré, reçu, pris, pu, fait</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: est, a, ont, sont, ai, soit, avez, avons, aurait, soient</li>
      <li>AUX-Part: ayant, étant, faisant</li>
      <li>VERB-Fin: doit, a, peut, est, doivent, faut, peuvent, voudrais, pense, devons</li>
      <li>VERB-Part: concernant, suivant, présentant, ayant, souffrant, subissant, correspondant, recevant, résultant, portant</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Part: utilisé, administré, mis, observée, recommandé, traités, condamné, arrêté, observé, présentés</li>
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
      <li>DET: le, les, la, l', une, un, des, de, d', quelques</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: cette, ce, ces, cet</li>
      <li>PRON: cela, ceci, ceux, celle-ci, celles, celle, celui, celui-ci, ça, celles-ci</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: comment, pourquoi, où, combien</li>
      <li>DET: quel, quelles, quelle, quels</li>
      <li>PRON: Qu', Que, qui, quoi, QU'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: lui, eux, moi, elle, vous, elles, nous, Toi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: qui, que, dont, où, qu', laquelle, lequel, lesquelles, lesquels, quoi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NOUN: millions, milliards, 1/10, 2006-08-07, 1/100, milliard, 1/1000, million, -1,5, -2,5</li>
      <li>NUM: deux, 5, 2006, trois, 2, 10, 30, 4, 3, 1</li>
      <li>PRON: 1, deux, 100, 1/10, 1/100, 10, 6, 96, six, trois</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: première, premier, dernier, 3e, deuxième, 1er, premiers, troisième, quatrième, 21e</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: son, ses, votre, sa, leur, leurs, notre, nos, mon, mes</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: se, s', me, nous, vous, m', -vous</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: ai, avons, suis, sommes, aurons, avions, serais, sois, soyons, étais</li>
      <li>PRON: nous, je, j', me, m', moi, -nous, -je, -moi</li>
      <li>VERB-Fin: voudrais, devons, pense, crois, dois, avons, devrions, remercie, voulons, espère</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: avez, êtes, avais, ayez, étais</li>
      <li>PRON: vous, -vous, Toi</li>
      <li>VERB-Fin: avez, veuillez, devez, demandez, pouvez, remarquez, allaitez, prenez, présentez, suivez</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: est, a, ont, sont, était, avait, sera, fut, étaient, soit</li>
      <li>PRON: il, se, y, s', en, elle, ils, c', on, le</li>
      <li>VERB-Fin: doit, a, peut, est, doivent, faut, peuvent, agit, concerne, contient</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: être.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: être.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (794)</li>
      <li>VERB-Fin--PRON (869)</li>
      <li>VERB-Part--NOUN (306)</li>
      <li>VERB-Part--PRON (213)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (648)</li>
      <li>VERB-Fin--NOUN-ADP(jusque)-ADP(à) (2)</li>
      <li>VERB-Fin--PRON (146)</li>
      <li>VERB-Inf--NOUN (689)</li>
      <li>VERB-Inf--NOUN-ADP(de) (1)</li>
      <li>VERB-Inf--NOUN-ADP(jusque)-ADP(à) (1)</li>
      <li>VERB-Inf--NOUN-ADP(à) (1)</li>
      <li>VERB-Inf--PRON (76)</li>
      <li>VERB-Part--NOUN (494)</li>
      <li>VERB-Part--PRON (61)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (106)</li>
      <li>VERB-Inf--PRON (33)</li>
      <li>VERB-Part--PRON (72)</li>
    </ul>
  </li>
</ul>


<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 44 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: inscrire s', casser se, justifier se, maintenir s', appliquer s', expliquer s', retrouver se, étendre s', affaiblir s', agrandir s', cantonner s', changer se, concrétiser se, cristalliser se, desserrer se, développer s', effacer s', effectuer s', enliser s', faire se, glisser se, imposer s', jouer se, limiter s', limiter se, manifester se, mettre se, observer s', opérer s', ouvrir s', payer se, placer se, poser se, poursuivre se, rapporter se, rattacher se, retourner se, stabiliser se, tenir se, terminer s', terminer se, éclaircir s', établir s', étaler s'</li>
</ul>

<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 30 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: fracturer s', lier se, défendre se, déclarer se, frotter se, réserver se, sentir se, apprécier se, attendre se, comprendre me, compromettre se, confier se, croire se, dessaisir se, dire se, entraîner s', faire se, fracturer se, inscrire s', inscrire se, persuader se, rassurer se, remarquer s', rembourser se, rendre se, restructurer se, retrouver s', retrouver se, réchauffer se, voiler se</li>
    <ul>
      <li>Out of those, 2 lemmas occurred more than once, but never without a reflexive dependent. Examples: fracturer, frotter</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 18 relation subtypes: <a>acl:relcl</a>, <a>advcl:cleft</a>, <a>aux:caus</a>, <a>aux:pass</a>, <a>aux:tense</a>, <a>csubj:pass</a>, <a>expl:comp</a>, <a>expl:pass</a>, <a>expl:subj</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>iobj:agent</a>, <a>nsubj:caus</a>, <a>nsubj:pass</a>, <a>obj:agent</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:mod</a></li>
<li>The following 4 main types are not used alone, they are always subtyped: <a>aux</a>, <a>expl</a>, <a>flat</a>, <a>obl</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a>, <a>reparandum</a></li>
</ul>
