---
layout: base
title:  'UD_French-GSD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD French GSD

Language: [French](/fr/index.html) (code: `fr`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v1.0 release.

The following people have contributed to making this treebank part of UD: Marie-Catherine de Marneffe, Bruno Guillaume, Ryan McDonald, Alane Suhr, Joakim Nivre, Matias Grioni, Carly Dickerson, Guy Perrier.

Repository: [UD_French-GSD](https://github.com/UniversalDependencies/UD_French-GSD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfr_gsd29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 4.0

Genre: blog, news, reviews, wiki

Questions, comments?
General annotation questions (either French-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_French-GSD/issues).
If you want to collaborate, please contact [demarneffe&nbsp;•&nbsp;1&nbsp;(æt)&nbsp;osu&nbsp;•&nbsp;edu, bruno&nbsp;•&nbsp;guillaume&nbsp;(æt)&nbsp;inria&nbsp;•&nbsp;fr].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, with some manual corrections, but not a full manual verification |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | not available |
| Features | assigned by a program, with some manual corrections, but not a full manual verification |
| Relations | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |

## Description
The **UD_French-GSD** was converted in 2015 from the content head version of the universal
dependency treebank v2.0 (https://github.com/ryanmcd/uni-dep-tb).
It is updated since 2015 independently from the previous source.


The **UD_French-GSD** is converted from the content head version of the universal
dependency treebank v2.0 (https://github.com/ryanmcd/uni-dep-tb).
The README for the original project is available below.

The version 2.7 of **UD_French-GSD** data consists of 400,399 words (16,341 sentences).
No sentence id were available in the original resource, so new `sent_id` were automatically introduced in the converted corpus with prefixes `fr-ud-train`, `fr-ud-dev` and `fr-ud-test` on the corresponding original files, followed by a 5 digit number following the order of sentences in the original files.

:warning: to meet the size requirements of test data of 10K words, a part of the dev original file was moved to the test file!
Since version 2.0, the splitting of data is:

* file `fr-ud-train.conll`: 14,449 sentences; 354,662 words
* `fr-ud-train_00001` to `fr-ud-train_14554`
* file `fr-ud-dev.conll`: 1,476 sentences; 35,718 words
* `fr-ud-dev_00001` to `fr-ud-dev_01478`
* file `fr-ud-test.conll`: 416 sentences; 10,019 words
* `fr_ud-test_00001` to `fr_ud-test_00298`
* `fr-ud-dev_01479` to `fr-ud-dev_01596`

Sentences are shuffled and there is no way to know what is the source or the genre of a given sentence.

Probably due to some bug in a conversion program, version 1.2 contains many truncated sentences (date missing for instance).
Almost every truncated sentence are from Wikipedia, so it was possible to recover the original text.
Most of the truncated sentences were completed in version 1.3. Some sentences were completed later.
There are probably still some truncated sentences.

## Acknowledgments

The latest version of the corpus was produced by Marie-Catherine de Marneffe, Bruno Guillaume, Matias Grioni, Carly Dickerson and Guy Perrier.
Automatic modifications and consistency checking were partly done using the [Grew software](http://grew.fr).

See below for references and acknowledgments concerning the original corpus.


# Statistics of UD French GSD

## POS Tags

[ADJ](fr_gsd-pos-ADJ.html) – [ADP](fr_gsd-pos-ADP.html) – [ADV](fr_gsd-pos-ADV.html) – [AUX](fr_gsd-pos-AUX.html) – [CCONJ](fr_gsd-pos-CCONJ.html) – [DET](fr_gsd-pos-DET.html) – [INTJ](fr_gsd-pos-INTJ.html) – [NOUN](fr_gsd-pos-NOUN.html) – [NUM](fr_gsd-pos-NUM.html) – [PRON](fr_gsd-pos-PRON.html) – [PROPN](fr_gsd-pos-PROPN.html) – [PUNCT](fr_gsd-pos-PUNCT.html) – [SCONJ](fr_gsd-pos-SCONJ.html) – [SYM](fr_gsd-pos-SYM.html) – [VERB](fr_gsd-pos-VERB.html) – [X](fr_gsd-pos-X.html)

## Features

[Definite](fr_gsd-feat-Definite.html) – [Foreign](fr_gsd-feat-Foreign.html) – [Gender](fr_gsd-feat-Gender.html) – [Mood](fr_gsd-feat-Mood.html) – [Number](fr_gsd-feat-Number.html) – [Number[psor]](fr_gsd-feat-Number-psor.html) – [NumType](fr_gsd-feat-NumType.html) – [Person](fr_gsd-feat-Person.html) – [Person[psor]](fr_gsd-feat-Person-psor.html) – [Polarity](fr_gsd-feat-Polarity.html) – [PronType](fr_gsd-feat-PronType.html) – [Reflex](fr_gsd-feat-Reflex.html) – [Tense](fr_gsd-feat-Tense.html) – [Typo](fr_gsd-feat-Typo.html) – [VerbForm](fr_gsd-feat-VerbForm.html)

## Relations

[acl](fr_gsd-dep-acl.html) – [acl:relcl](fr_gsd-dep-acl-relcl.html) – [advcl](fr_gsd-dep-advcl.html) – [advcl:cleft](fr_gsd-dep-advcl-cleft.html) – [advmod](fr_gsd-dep-advmod.html) – [amod](fr_gsd-dep-amod.html) – [appos](fr_gsd-dep-appos.html) – [aux:caus](fr_gsd-dep-aux-caus.html) – [aux:pass](fr_gsd-dep-aux-pass.html) – [aux:tense](fr_gsd-dep-aux-tense.html) – [case](fr_gsd-dep-case.html) – [cc](fr_gsd-dep-cc.html) – [ccomp](fr_gsd-dep-ccomp.html) – [compound](fr_gsd-dep-compound.html) – [conj](fr_gsd-dep-conj.html) – [cop](fr_gsd-dep-cop.html) – [csubj](fr_gsd-dep-csubj.html) – [csubj:pass](fr_gsd-dep-csubj-pass.html) – [dep](fr_gsd-dep-dep.html) – [dep:comp](fr_gsd-dep-dep-comp.html) – [det](fr_gsd-dep-det.html) – [discourse](fr_gsd-dep-discourse.html) – [dislocated](fr_gsd-dep-dislocated.html) – [expl](fr_gsd-dep-expl.html) – [expl:pass](fr_gsd-dep-expl-pass.html) – [expl:pv](fr_gsd-dep-expl-pv.html) – [expl:subj](fr_gsd-dep-expl-subj.html) – [fixed](fr_gsd-dep-fixed.html) – [flat](fr_gsd-dep-flat.html) – [flat:foreign](fr_gsd-dep-flat-foreign.html) – [flat:name](fr_gsd-dep-flat-name.html) – [goeswith](fr_gsd-dep-goeswith.html) – [iobj](fr_gsd-dep-iobj.html) – [iobj:agent](fr_gsd-dep-iobj-agent.html) – [mark](fr_gsd-dep-mark.html) – [nmod](fr_gsd-dep-nmod.html) – [nsubj](fr_gsd-dep-nsubj.html) – [nsubj:caus](fr_gsd-dep-nsubj-caus.html) – [nsubj:pass](fr_gsd-dep-nsubj-pass.html) – [nummod](fr_gsd-dep-nummod.html) – [obj](fr_gsd-dep-obj.html) – [obj:agent](fr_gsd-dep-obj-agent.html) – [obj:lvc](fr_gsd-dep-obj-lvc.html) – [obl](fr_gsd-dep-obl.html) – [obl:agent](fr_gsd-dep-obl-agent.html) – [obl:arg](fr_gsd-dep-obl-arg.html) – [obl:mod](fr_gsd-dep-obl-mod.html) – [orphan](fr_gsd-dep-orphan.html) – [parataxis](fr_gsd-dep-parataxis.html) – [punct](fr_gsd-dep-punct.html) – [reparandum](fr_gsd-dep-reparandum.html) – [root](fr_gsd-dep-root.html) – [vocative](fr_gsd-dep-vocative.html) – [xcomp](fr_gsd-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 16341 sentences, 389196 tokens and 400221 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 58037 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 129 types of words with spaces. Examples: 10 000, 100 000, 20 000, 50 000, 1 000, 2 000, 1 200, 1 500, 200 000, 25 000, 5 000, 60 000, 80 000, 1 100, 1 400, 150 000, 2 500, 30 000, 300 000, 400 000, 68 000, 900 000, 02 31 30 47 70, 1 068, 1 108, 1 209, 1 231, 1 237 500, 1 250, 1 300, 1 345, 1 444 861, 1 496, 1 500 000, 1 728, 1 766 691 409, 1 890, 1,186 569 110, 10 250, 11 437, 11 506, 11 839, 13 500, 13 641, 147 000, 149 900, 16 000, 16 851, 170 055, 18 424</li>
</ul>

<ul>
<li>This corpus contains 2186 types of words that contain both letters and punctuation. Examples: l', d', s', qu', n', c', jusqu', j', aujourd'hui, États-Unis, l'on, m', -t-il, lui-même, celui-ci, -il, c'est-à-dire, M., lorsqu', celle-ci, au-dessus, etc., -ce, sud-est, Royaume-Uni, ceux-ci, au-delà, elle-même, peut-être, sud-ouest, -ils, J.-C., av., nord-ouest, nord-est, -vous, -elle, -là, -t-elle, Etats-Unis, Grande-Bretagne, Pays-Bas, eux-mêmes, porte-parole, Notre-Dame, puisqu', week-end, -on, quelqu'un, C.</li>
</ul>

<ul>
<li>This corpus contains 11025 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 9 types of multi-word tokens. Examples: du, des, au, aux, auquel, duquel, auxquels, desquelles, auxquelles.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PART</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 39 lemmas tagged as pronouns (PRON): aucun, autre, autrui, ce, ceci, cela, celui, celui-ci, certain, chacun, dont, en, il, le, lequel, lui, lui-aussi, lui-même, nul, nôtre, on, personne, plusieurs, que, quelqu'un, qui, quiconque, quoi, rien, se, sien, soi, soi-même, tel, tout, un, vous, y, ça</li>
</ul>

<ul>
<li>This corpus contains 22 lemmas tagged as determiners (DET): aucun, ce, certain, chaque, de, différent, divers, du, le, ledit, lequel, leur, lui, nul, plusieurs, quel, quelque, sien, son, tel, tout, un</li>
</ul>

<ul>
<li>Out of the above, 12 lemmas occurred sometimes as PRON and sometimes as DET: aucun, ce, certain, le, lequel, lui, nul, plusieurs, sien, tel, tout, un</li>
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
    <li>AUX: est, a, sont, ont, était, fut, avait, ai, sera, étaient</li>
    <li>VERB: a, peut, fait, est, trouve, devient, doit, ont, permet, agit</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: être, avoir, faire, -être, etre</li>
    <li>VERB: faire, partir, voir, prendre, avoir, mettre, passer, trouver, aller, dire</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: informé</li>
    <li>AUX: été, étant, ayant, fait, faisant, Etant, faite</li>
    <li>VERB: né, située, situé, eu, fait, mort, connu, nommé, née, réalisé</li>
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
      <li>ADJ: première, française, grande, même, nouvelle, toutes, nombreuses, nationale, autres, seule</li>
      <li>ADP: contre</li>
      <li>AUX-Part: faite</li>
      <li>DET: la, une, sa, cette, ma, aucune, certaines, toute, toutes, différentes</li>
      <li>NOUN: ville, partie, fois, région, commune, années, famille, année, fin, place</li>
      <li>NUM: une, vingtaine, trentaine, quarantaine</li>
      <li>PRON: elle, elles, une, la, celle, laquelle, celles, celle-ci, lesquelles, elle-même</li>
      <li>PROPN: France, Russie, Chine, Loire, Grèce, Amérique, Belgique, Europe, Mauritanie, Renaissance</li>
      <li>SYM: n°</li>
      <li>VERB-Part: située, née, créée, appelée, utilisée, connue, construite, mise, publiée, nommée</li>
      <li>X: 3D, BoJ, CEDH, CSL, DGSE, FW17, Lincoln's, RN113, SFIO, Scouting</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: français, premier, tous, dernier, grand, autres, nouveau, même, nombreux, seul</li>
      <li>ADJ-Part: informé</li>
      <li>ADP: début, sous</li>
      <li>ADV: delà, juste, NON, début, pas, point, pré-, tout</li>
      <li>AUX-Fin: est</li>
      <li>AUX-Part: été, fait</li>
      <li>DET: le, un, ce, cet, du, certains, tout, aucun, différents, tous</li>
      <li>NOUN: ans, pays, temps, mars, nom, monde, groupe, siècle, cours, état</li>
      <li>NUM: second</li>
      <li>PRON: il, c', on, ils, lui, ce, le, un, cela, celui</li>
      <li>PROPN: Maroc, Sahara, Canada, Québec, Japon, Royaume-Uni, Brésil, Mali, Mans, Mexique</li>
      <li>SYM: n°, %, CsBi4Te6, M, X, k</li>
      <li>VERB: né, situé, eu, fait, mort, connu, nommé, réalisé, utilisé, mis</li>
      <li>VERB-Fin: accueilli, dit, porte, pris, rejoints, remis, rempli, sauve, servi, suis</li>
      <li>VERB-Inf: revoir, laisser, savoir</li>
      <li>VERB-Part: né, situé, eu, fait, mort, connu, nommé, réalisé, utilisé, mis</li>
      <li>X: DKK, statu, B, D.III, DA, FDLP, FPLP, G.I., G8, International</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: autres, tous, nombreux, toutes, nombreuses, premiers, grands, premières, grandes, derniers</li>
      <li>ADP: d'</li>
      <li>ADV: moins, Combien, plus</li>
      <li>AUX-Fin: sont, ont, étaient, avons, furent, avaient, seront, sommes, soient, auraient</li>
      <li>DET: les, des, ses, ces, de, plusieurs, leurs, quelques, d', certains</li>
      <li>NOUN: ans, années, enfants, pays, habitants, personnes, jours, droits, points, hommes</li>
      <li>NUM: deux, trois, 2, quatre, 2010, 2009, 2008, 2011, 3, 5</li>
      <li>PRON: ils, nous, les, elles, autres, ceux, eux, leur, tous, celles</li>
      <li>PROPN: États-Unis, Etats-Unis, Pays-Bas, Pyrénées, îles, Vosges, Romains, Grecs, Hautes-Pyrénées, Rangers</li>
      <li>SYM: %, €, °, $, ", ', º, ′, *, eV</li>
      <li>VERB-Fin: ont, peuvent, font, doivent, sont, prennent, trouvent, vont, permettent, allez</li>
      <li>VERB-Part: utilisés, appelés, utilisées, connus, situés, produits, réalisés, liées, prises, concernés</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: premier, première, même, française, dernier, grand, grande, nouveau, autre, politique</li>
      <li>ADJ-Part: informé</li>
      <li>ADP: après, à, contre, début, sous</li>
      <li>ADV: delà, juste, NON, début, pas, point, pré-, tout</li>
      <li>AUX-Fin: est, a, était, fut, avait, ai, sera, soit, aurait, fait</li>
      <li>AUX-Part: été, fait, faite</li>
      <li>DET: le, la, l', un, une, son, sa, cette, ce, leur</li>
      <li>NOUN: ville, partie, nom, monde, région, commune, groupe, famille, année, siècle</li>
      <li>NUM: un, 6, 7, 18, 1er, 11, 25, 15, 20, 5</li>
      <li>PRON: il, elle, c', on, lui, je, le, j', l', un</li>
      <li>PROPN: Europe, Maroc, France, ONU, Espagne, Algérie, Sahara, Canada, UE, Afrique</li>
      <li>SYM: n°, %, CsBi4Te6, M, X</li>
      <li>VERB: a, fait, peut, né, située, est, situé, trouve, devient, doit</li>
      <li>VERB-Fin: a, peut, fait, est, trouve, devient, doit, permet, agit, faut</li>
      <li>VERB-Inf: revoir, laisser, savoir</li>
      <li>VERB-Part: né, située, situé, eu, fait, mort, connu, nommé, née, réalisé</li>
      <li>X: A, ARNm, DKK, ECCU, EFEO, Espírito, GPU, IRT, OCL, OLP</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: le, la, les, l', l, ladite, là</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, une, des, de, d', du, telle, in</li>
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
      <li>ADV: pas, n', ne, non, jamais, plus, qu', guère, point, nullement</li>
      <li>INTJ: non</li>
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
      <li>AUX-Fin: aurait, serait, auraient, seraient, serais, aurais, aurions, seriez, ferait, serions</li>
      <li>VERB-Fin: pourrait, devrait, pourraient, aurait, devraient, serait, auraient, faudrait, souhaiterait, viendrait</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: soyez, sois</li>
      <li>VERB-Fin: allez, hésitez, Rappelons, Notons, arrêtez, pensez, Cliquez, Demandez, attendez, citons</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: est, a, sont, ont, était, fut, avait, ai, sera, étaient</li>
      <li>VERB-Fin: a, peut, fait, est, trouve, devient, doit, ont, permet, agit</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: soit, ait, soient, aient, fût, eût, fasse, aie, ayez, fassent</li>
      <li>VERB-Fin: puisse, puissent, agisse, fasse, aient, ait, arrive, prenne, soit, change</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: sera, seront, aura, auront, fera, feront, serez, aurons</li>
      <li>VERB-Fin: aura, fera, pourra, permettra, restera, feront, deviendra, permettront, devra, faudra</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: était, avait, étaient, avaient, avais, avions, étais, faisait, étions, fût</li>
      <li>VERB-Fin: avait, devait, comptait, était, pouvait, faisait, allait, avaient, portait, disait</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: informé</li>
      <li>AUX-Fin: fut, furent, fit, eut, firent, était</li>
      <li>AUX-Part: été, fait, faite</li>
      <li>NOUN: séquestrés</li>
      <li>VERB-Fin: prit, devint, fit, eut, donna, reçut, décida, participa, écrivit, demanda</li>
      <li>VERB-Part: né, située, situé, eu, fait, mort, connu, nommé, née, réalisé</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: est, a, sont, ont, ai, soit, avons, aurait, fait, suis</li>
      <li>AUX-Part: étant, ayant, faisant, Etant</li>
      <li>VERB-Fin: a, peut, fait, est, trouve, devient, doit, ont, permet, agit</li>
      <li>VERB-Part: appartenant, faisant, permettant, ayant, portant, pouvant, prenant, utilisant, visant, allant</li>
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
      <li>DET: le, la, les, l', un, une, des, de, d', du</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: cette, ce, ces, cet</li>
      <li>PRON: c', ce, cela, celle, celui, ceux, celui-ci, celles, ça, celle-ci</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>DET: quelle, quel</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: autre, autres, tels</li>
      <li>DET: plusieurs, quelques, chaque, certains, tout, certaines, toute, quelque, toutes, différents</li>
      <li>PRON: on, un, une, autres, tout, l'on, autre, tous, certains, chacun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADJ: Quels</li>
      <li>ADV: où, quand</li>
      <li>DET: quel, quelle, quels, Quelles</li>
      <li>PRON: qui, qu', que, quoi, Laquelle, Lesquelles</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: aucune, aucun, Nul, aucunes</li>
      <li>PRON: rien, personne, nul, aucun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: son, sa, ses, leur, leurs, notre, mon, nos, ma, votre</li>
      <li>PRON: il, se, s', elle, y, ils, lui, nous, je, le</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: où, ou, pourquoi, oà</li>
      <li>PRON: qui, dont, qu', que, lequel, laquelle, lesquels, lesquelles, quoi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: XIXe, XXe, XVIIe, XVIe, XVIIIe, XIIe, XVe, XIIIe, XIe, VIe</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: se, s', lui-même, elle-même, me, eux-mêmes, elles-mêmes, m', moi-même, moi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: ai, avons, suis, sommes, avais, avions, étais, serais, étions, aurais</li>
      <li>PRON: nous, je, j', m', me, moi, -je, -nous, -moi, moi-même</li>
      <li>VERB-Fin: recommande, conseille, ai, trouve, vais, pense, pouvons, aime, devons, peux</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: êtes, avez, es, soyez, as, serez, seriez, ayez, fais, sois</li>
      <li>PRON: vous, -vous, tu, -tu, t', te, toi, -toi, tien</li>
      <li>VERB-Fin: allez, hésitez, avez, voulez, pouvez, passez, pourrez, pensez, cherchez, trouverez</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ: autre, autres</li>
      <li>AUX-Fin: est, a, sont, ont, était, fut, avait, sera, étaient, soit</li>
      <li>DET: ce, la</li>
      <li>PRON: il, se, s', elle, c', on, y, ils, lui, ce</li>
      <li>VERB-Fin: a, peut, fait, est, devient, doit, ont, trouve, permet, agit</li>
      <li>VERB-Part: Agréé, réglée</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: leur, leurs, notre, nos, votre, vos</li>
      <li>PRON: nôtre</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: son, sa, ses, mon, ma, mes, ton, sont, tes</li>
      <li>PRON: sien, sienne, siennes, siens, tien</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: the, of, and, in, de, for, Company, a, live, National</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[psor]</a>
    <ul>
      <li>1
        <ul>
          <li>DET: notre, mon, nos, ma, mes</li>
          <li>PRON: nôtre</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>DET: votre, vos, ton, tes</li>
          <li>PRON: tien</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>DET: son, sa, ses, leur, leurs, sont</li>
          <li>PRON: sien, sienne, siennes, siens</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: présent, tel, cher, meilleurs, tous, 8e, bon, correct, historique, important</li>
          <li>ADP: des, entres, a, apres, en, pour</li>
          <li>ADV: trés, ou, voir, gentillement, la, là, prés, quand, quelques, de</li>
          <li>AUX-Fin: a, serais, est, était, esr, furent, on, son, sont, unt</li>
          <li>CCONJ: and</li>
          <li>DET: le, la, un, leur, une, L, certains, leurs, quelque, Ce</li>
          <li>INTJ: Et</li>
          <li>NOUN: euro, groupe, acceuil, marque, Amérindien, Chateau, Lexique, Musée, Série, Terminal</li>
          <li>NUM: cent-dix-sept-</li>
          <li>PRON: il, -il, Aucun, Elles, J, ca, certain, certains, dont, elle</li>
          <li>PROPN: Gaulle, nancy, balkans, christ, ferté-imbault, fuorcla, nunavik, part-dieu, saloum, stavrou</li>
          <li>VERB: situé, créé, appelé, devenu, située, suivi, Voila, crée, dit, eu</li>
          <li>VERB-Fin: pourrait, accueilli, accusent, affrontent, avait, comporte, concentre, considèrent, considére, constitue</li>
          <li>VERB-Inf: avoir, entammer, intaller, presenter</li>
          <li>VERB-Part: situé, créé, appelé, devenu, située, suivi, crée, dit, eu, fait</li>
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
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: être.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB-Fin--NOUN (4116)</li>
      <li>VERB-Fin--NOUN-ADP(de) (2)</li>
      <li>VERB-Fin--NOUN-ADP(jusque)-ADP(à) (1)</li>
      <li>VERB-Fin--PRON (5774)</li>
      <li>VERB-Fin--PRON-ADP(à) (1)</li>
      <li>VERB-Inf--NOUN (2)</li>
      <li>VERB-Inf--PRON (2)</li>
      <li>VERB-Part--NOUN (1427)</li>
      <li>VERB-Part--NOUN-ADP(de) (1)</li>
      <li>VERB-Part--PRON (1447)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (19)</li>
      <li>VERB--PRON (4)</li>
      <li>VERB-Fin--NOUN (4858)</li>
      <li>VERB-Fin--NOUN-ADP(entre) (1)</li>
      <li>VERB-Fin--NOUN-ADP(jusque)-ADP(à) (1)</li>
      <li>VERB-Fin--NOUN-ADP(pour) (1)</li>
      <li>VERB-Fin--PRON (1105)</li>
      <li>VERB-Inf--NOUN (2623)</li>
      <li>VERB-Inf--NOUN-ADP(de) (1)</li>
      <li>VERB-Inf--NOUN-ADP(jusque)-ADP(à) (1)</li>
      <li>VERB-Inf--PRON (635)</li>
      <li>VERB-Part--NOUN (1955)</li>
      <li>VERB-Part--PRON (359)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (5)</li>
      <li>VERB-Fin--PRON (473)</li>
      <li>VERB-Inf--PRON (161)</li>
      <li>VERB-Part--NOUN (3)</li>
      <li>VERB-Part--PRON (211)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 252 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: agir s', dérouler se, rendre se, emparer s', voir se, opposer s', avérer s', composer se, occuper s', passer se, produire se, échapper s', élever s', approcher s', battre se, appeler s', contenter se, diriger se, faire se, inquiéter s', révéler se, attacher s', dérouler s', enfuir s', marier se, montrer se, référer se, attendre s', inspirer s', baser se, exprimer s', jeter se, mettre se, plaindre se, prendre s', qualifier se, écrouler s', adresser s', attaquer s', convertir se, effondrer s', entendre s', envoler s', passer s', rendre s', tenir se, allier s', conformer se, consacrer se, démarquer se</li>
</ul>

<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 221 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: trouver se, situer se, faire se, étendre s', développer se, tenir se, retrouver se, terminer se, poursuivre se, élever s', rencontrer se, ajouter s', classer se, distinguer se, produire se, tenir s', appliquer s', imposer s', jouer se, nommer se, présenter se, inscrire s', qualifier se, expliquer s', traduire se, achever s', concentrer se, manifester se, ouvrir s', aggraver s', améliorer s', appuyer s', effectuer s', produire s', transformer se, vendre se, arrêter s', articuler s', distinguer s', dresser se, endormir s', former se, installer s', placer se, établir s', accompagner s', allonger s', annoncer s', briser se, décomposer se</li>
</ul>

<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 297 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: installer s', engager s', retirer se, mettre se, sentir se, lancer se, retrouver se, imposer s', intéresser s', assurer s', réunir se, connaître se, donner se, affronter s', nourrir se, présenter se, établir s', arrêter s', charger se, associer s', débarrasser se, déplacer se, faire se, inscrire s', passer se, rapprocher se, tourner se, venger se, cacher se, dire se, donner s', rencontrer se, retourner se, sacrifier se, succéder se, trouver se, éloigner s', concentrer se, entraîner s', jeter se, laisser se, lier se, orienter s', préparer se, affranchir s', appuyer s', asseoir s', construire s', croire se, demander se</li>
    <ul>
      <li>Out of those, 6 lemmas occurred more than once, but never without a reflexive dependent. Examples: débarrasser, réconcilier, affranchir, hisser, laver, prémunir</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 20 relation subtypes: <a>acl:relcl</a>, <a>advcl:cleft</a>, <a>aux:caus</a>, <a>aux:pass</a>, <a>aux:tense</a>, <a>csubj:pass</a>, <a>dep:comp</a>, <a>expl:pass</a>, <a>expl:pv</a>, <a>expl:subj</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>iobj:agent</a>, <a>nsubj:caus</a>, <a>nsubj:pass</a>, <a>obj:agent</a>, <a>obj:lvc</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:mod</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>aux</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a></li>
</ul>
