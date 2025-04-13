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
Family: IE

This treebank has been part of Universal Dependencies since the UD v1.0 release.

The following people have contributed to making this treebank part of UD: Marie-Catherine de Marneffe, Bruno Guillaume, Ryan McDonald, Alane Suhr, Joakim Nivre, Matias Grioni, Carly Dickerson, Guy Perrier.

Repository: [UD_French-GSD](https://github.com/UniversalDependencies/UD_French-GSD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfr_gsd215)<br />
Download all treebanks: [UD 2.15](/#download)

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

[Definite](fr_gsd-feat-Definite.html) – [Emph](fr_gsd-feat-Emph.html) – [ExtPos](fr_gsd-feat-ExtPos.html) – [Foreign](fr_gsd-feat-Foreign.html) – [Gender](fr_gsd-feat-Gender.html) – [Mood](fr_gsd-feat-Mood.html) – [Number](fr_gsd-feat-Number.html) – [Number[psor]](fr_gsd-feat-Number-psor.html) – [NumType](fr_gsd-feat-NumType.html) – [Person](fr_gsd-feat-Person.html) – [Person[psor]](fr_gsd-feat-Person-psor.html) – [Polarity](fr_gsd-feat-Polarity.html) – [Poss](fr_gsd-feat-Poss.html) – [PronType](fr_gsd-feat-PronType.html) – [Reflex](fr_gsd-feat-Reflex.html) – [Tense](fr_gsd-feat-Tense.html) – [Typo](fr_gsd-feat-Typo.html) – [VerbForm](fr_gsd-feat-VerbForm.html) – [Voice](fr_gsd-feat-Voice.html)

## Relations

[acl](fr_gsd-dep-acl.html) – [acl:relcl](fr_gsd-dep-acl-relcl.html) – [advcl](fr_gsd-dep-advcl.html) – [advcl:cleft](fr_gsd-dep-advcl-cleft.html) – [advmod](fr_gsd-dep-advmod.html) – [amod](fr_gsd-dep-amod.html) – [appos](fr_gsd-dep-appos.html) – [aux](fr_gsd-dep-aux.html) – [aux:caus](fr_gsd-dep-aux-caus.html) – [aux:pass](fr_gsd-dep-aux-pass.html) – [aux:tense](fr_gsd-dep-aux-tense.html) – [case](fr_gsd-dep-case.html) – [cc](fr_gsd-dep-cc.html) – [ccomp](fr_gsd-dep-ccomp.html) – [compound](fr_gsd-dep-compound.html) – [conj](fr_gsd-dep-conj.html) – [cop](fr_gsd-dep-cop.html) – [csubj](fr_gsd-dep-csubj.html) – [csubj:pass](fr_gsd-dep-csubj-pass.html) – [dep](fr_gsd-dep-dep.html) – [dep:comp](fr_gsd-dep-dep-comp.html) – [det](fr_gsd-dep-det.html) – [discourse](fr_gsd-dep-discourse.html) – [dislocated](fr_gsd-dep-dislocated.html) – [expl:comp](fr_gsd-dep-expl-comp.html) – [expl:pass](fr_gsd-dep-expl-pass.html) – [expl:pv](fr_gsd-dep-expl-pv.html) – [expl:subj](fr_gsd-dep-expl-subj.html) – [fixed](fr_gsd-dep-fixed.html) – [flat](fr_gsd-dep-flat.html) – [flat:foreign](fr_gsd-dep-flat-foreign.html) – [flat:name](fr_gsd-dep-flat-name.html) – [goeswith](fr_gsd-dep-goeswith.html) – [iobj](fr_gsd-dep-iobj.html) – [iobj:agent](fr_gsd-dep-iobj-agent.html) – [mark](fr_gsd-dep-mark.html) – [nmod](fr_gsd-dep-nmod.html) – [nsubj](fr_gsd-dep-nsubj.html) – [nsubj:caus](fr_gsd-dep-nsubj-caus.html) – [nsubj:outer](fr_gsd-dep-nsubj-outer.html) – [nsubj:pass](fr_gsd-dep-nsubj-pass.html) – [nummod](fr_gsd-dep-nummod.html) – [obj](fr_gsd-dep-obj.html) – [obj:agent](fr_gsd-dep-obj-agent.html) – [obj:lvc](fr_gsd-dep-obj-lvc.html) – [obl](fr_gsd-dep-obl.html) – [obl:agent](fr_gsd-dep-obl-agent.html) – [obl:arg](fr_gsd-dep-obl-arg.html) – [obl:mod](fr_gsd-dep-obl-mod.html) – [orphan](fr_gsd-dep-orphan.html) – [parataxis](fr_gsd-dep-parataxis.html) – [parataxis:insert](fr_gsd-dep-parataxis-insert.html) – [punct](fr_gsd-dep-punct.html) – [root](fr_gsd-dep-root.html) – [vocative](fr_gsd-dep-vocative.html) – [xcomp](fr_gsd-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 16342 sentences, 389367 tokens and 400391 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 58138 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 131 types of words with spaces. Examples: 10 000, 100 000, 20 000, 50 000, 1 000, 2 000, 5 000, 80 000, 1 200, 1 500, 200 000, 25 000, 60 000, 1 100, 1 400, 150 000, 2 500, 30 000, 300 000, 400 000, 68 000, 900 000, 02 31 30 47 70, 1 068, 1 108, 1 209, 1 231, 1 237 500, 1 250, 1 300, 1 345, 1 444 861, 1 461, 1 496, 1 500 000, 1 728, 1 766 691 409, 1 890, 1 900, 1,186 569 110, 10 250, 11 437, 11 506, 11 839, 13 500, 13 641, 147 000, 149 900, 16 000, 16 851</li>
</ul>

<ul>
<li>This corpus contains 2189 types of words that contain both letters and punctuation. Examples: l', d', s', qu', n', c', jusqu', j', aujourd'hui, États-Unis, l'on, m', -t-il, lui-même, celui-ci, -il, c'est-à-dire, M., lorsqu', celle-ci, au-dessus, etc., -ce, sud-est, Royaume-Uni, ceux-ci, au-delà, elle-même, peut-être, sud-ouest, -ils, J.-C., av., nord-ouest, nord-est, -vous, -elle, -là, -t-elle, Etats-Unis, Grande-Bretagne, Pays-Bas, eux-mêmes, porte-parole, Notre-Dame, puisqu', week-end, -on, quelqu'un, C.</li>
</ul>

<ul>
<li>This corpus contains 11024 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
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
<li>This corpus contains 43 lemmas tagged as pronouns (PRON): aucun, autre, autrui, ce, ceci, cela, celui, celui-ci, certain, chacun, dont, en, eux, eux-mêmes, lequel, lui, lui-même, moi, moi-même, nous, nous-mêmes, nul, nôtre, on, où, personne, plusieurs, qqchose, que, quelqu'un, qui, quiconque, quoi, rien, soi, soi-même, tel, toi, tout, un, vous, y, ça</li>
</ul>

<ul>
<li>This corpus contains 19 lemmas tagged as determiners (DET): aucun, ce, certain, chaque, différent, divers, du, la, le, ledit, lequel, nul, plusieurs, quel, quelque, son, tel, tout, un</li>
</ul>

<ul>
<li>Out of the above, 9 lemmas occurred sometimes as PRON and sometimes as DET: aucun, ce, certain, lequel, nul, plusieurs, tel, tout, un</li>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as auxiliaries (AUX): avoir, faire, voir, être</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as AUX and sometimes as VERB: avoir, faire, voir, être</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: est, a, sont, ont, était, fut, avait, ai, sera, étaient</li>
    <li>VERB: a, peut, fait, trouve, devient, doit, ont, permet, agit, faut</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: être, avoir, faire, voir, -être, etre</li>
    <li>VERB: faire, partir, voir, prendre, avoir, mettre, passer, trouver, aller, dire</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: été, étant, ayant, fait, faisant, Etant, vu, faite</li>
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
      <li>AUX-Part: faite</li>
      <li>DET: la, une, sa, cette, ma, aucune, certaines, toute, toutes, différentes</li>
      <li>NOUN: ville, partie, fois, région, commune, années, famille, année, fin, place</li>
      <li>NUM: une</li>
      <li>PRON: elle, elles, une, la, celle, laquelle, celles, celle-ci, lesquelles, elle-même</li>
      <li>PROPN: France, Russie, Chine, Loire, Grèce, Amérique, Belgique, Europe, Mauritanie, Renaissance</li>
      <li>SYM: n°</li>
      <li>VERB-Part: située, née, créée, appelée, utilisée, connue, construite, mise, publiée, nommée</li>
      <li>X: 3D, BoJ, CEDH, CSL, FW17, Lincoln's, RN113, SFIO, Scouting, TV</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: premier, français, tous, dernier, grand, autres, nouveau, même, nombreux, petit</li>
      <li>AUX-Part: été, fait, vu</li>
      <li>DET: le, un, ce, cet, du, certains, aucun, tout, différents, divers</li>
      <li>NOUN: ans, pays, nom, monde, temps, groupe, siècle, état, cours, lieu</li>
      <li>PRON: il, c', on, ils, lui, ce, le, un, cela, tout</li>
      <li>PROPN: Maroc, Sahara, Canada, Québec, Japon, Royaume-Uni, Brésil, Mali, Mans, Mexique</li>
      <li>SYM: n°, %, CsBi4Te6, M, X, k</li>
      <li>VERB-Part: né, situé, eu, fait, mort, connu, nommé, réalisé, utilisé, mis</li>
      <li>X: DKK, statu, B, CWA, D.III, DA, FDLP, FPLP, G.I., G8</li>
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
      <li>AUX-Fin: sont, ont, étaient, avons, furent, avaient, seront, sommes, soient, auraient</li>
      <li>DET: les, des, ses, ces, de, plusieurs, leurs, quelques, d', certains</li>
      <li>NOUN: ans, années, enfants, pays, habitants, personnes, jours, droits, points, hommes</li>
      <li>NUM: deux, trois, 2, quatre, 2010, 2009, 2008, 2011, 3, 5</li>
      <li>PRON: ils, nous, vous, les, elles, autres, ceux, eux, leur, tous</li>
      <li>PROPN: États-Unis, Etats-Unis, Pays-Bas, Pyrénées, îles, Vosges, Hautes-Pyrénées, Rangers, Alpes, Caraïbes</li>
      <li>SYM: %, €, °, $, ", ', º, ′, *, eV</li>
      <li>VERB-Fin: ont, peuvent, font, doivent, prennent, trouvent, vont, permettent, sont, allez</li>
      <li>VERB-Part: utilisés, appelés, utilisées, connus, situés, produits, réalisés, liées, prises, concernés</li>
      <li>X: agnolotti, cevapcici</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: premier, première, même, français, française, dernier, grande, grand, nouveau, autre</li>
      <li>AUX-Fin: est, a, était, fut, avait, ai, sera, soit, aurait, fait</li>
      <li>AUX-Part: été, fait, vu, faite</li>
      <li>DET: le, la, l', un, une, son, sa, cette, ce, leur</li>
      <li>NOUN: ville, partie, nom, monde, région, commune, groupe, temps, famille, année</li>
      <li>NUM: 1, un, 6, 7, 18, 1er, 11, 25, 5, 15</li>
      <li>PRON: il, elle, c', on, lui, je, le, j', l', un</li>
      <li>PROPN: Europe, Maroc, France, ONU, Espagne, Algérie, Sahara, Canada, UE, Afrique</li>
      <li>SYM: n°, %, CsBi4Te6, M, X</li>
      <li>VERB-Fin: a, peut, fait, trouve, devient, doit, permet, agit, faut, reste</li>
      <li>VERB-Part: né, située, situé, eu, fait, mort, connu, nommé, née, réalisé</li>
      <li>X: DKK, a, anchicho, incienso, statu, 3D, ARNm, B, BoJ, CEDH</li>
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
      <li>ADV: pas, n', ne, que, non, qu', jamais, plus, guère, point</li>
      <li>INTJ: non</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADV: jamais</li>
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
      <li>VERB-Fin: a, peut, fait, trouve, devient, doit, ont, permet, agit, faut</li>
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
      <li>AUX-Fin: sera, seront, aura, auront, fera, serez, feront, aurons</li>
      <li>VERB-Fin: aura, fera, pourra, permettra, restera, feront, deviendra, permettront, devra, faudra</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: était, avait, étaient, avaient, avais, avions, étais, étions, faisait, fût</li>
      <li>VERB-Fin: avait, devait, comptait, pouvait, faisait, allait, avaient, portait, disait, était</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: fut, furent, fit, eut, firent, vit, était</li>
      <li>AUX-Part: été, fait, vu, faite</li>
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
      <li>VERB-Fin: a, peut, fait, trouve, devient, doit, ont, permet, agit, faut</li>
      <li>VERB-Part: appartenant, faisant, permettant, ayant, portant, pouvant, prenant, utilisant, visant, allant</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB-Part: né, eu, mort, fait, née, pu, devenu, pris, permis, reçu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Part: située, situé, nommé, connu, utilisé, réalisé, appelé, créé, mis, sorti</li>
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
      <li>ADJ: quelle</li>
      <li>ADV: combien</li>
      <li>DET: quelle, quel</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: tout, tous, autres, tels, toute, toutes</li>
      <li>DET: plusieurs, quelques, chaque, certains, certaines, toute, tout, quelque, différents, toutes</li>
      <li>PRON: on, un, une, tout, autres, l'on, autre, tous, certains, chacun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADJ: quel, quelle, quelles, Quels</li>
      <li>ADV: comment, pourquoi, quand, combien</li>
      <li>DET: quel, quelle, quels, Quelles</li>
      <li>PRON: qui, où, qu', que, quoi, Laquelle, Lesquelles</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: aucune, aucun, Nul, aucunes, nulle</li>
      <li>PRON: rien, personne, aucun, nul, aucune</li>
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
      <li>ADJ: quelle, quel, quelles</li>
      <li>ADV: pourquoi</li>
      <li>PRON: qui, dont, où, qu', que, lequel, laquelle, lesquels, lesquelles, ou</li>
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
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: sien, leurs, leur, sienne, siennes, siens, tien</li>
      <li>DET: son, sa, ses, leur, leurs, notre, mon, nos, ma, votre</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: se, s', lui-même, elle-même, me, eux-mêmes, nous, vous, m', elles-mêmes</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: ai, avons, suis, sommes, avais, avions, étais, étions, serais, aurais</li>
      <li>PRON: nous, je, j', m', me, moi, -je, -nous, -moi, moi-même</li>
      <li>VERB-Fin: recommande, conseille, ai, trouve, vais, pense, pouvons, aime, devons, peux</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>ADJ: tien</li>
      <li>AUX-Fin: êtes, avez, es, serez, soyez, as, seriez, ayez, fais, sois</li>
      <li>PRON: vous, -vous, tu, -tu, t', te, toi, -toi</li>
      <li>VERB-Fin: allez, hésitez, avez, voulez, pouvez, passez, pourrez, pensez, cherchez, trouverez</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ: sien, leur, sienne, siennes, siens</li>
      <li>AUX-Fin: est, a, sont, ont, était, fut, avait, sera, étaient, soit</li>
      <li>PRON: il, se, s', elle, c', on, y, ils, lui, ce</li>
      <li>VERB-Fin: a, peut, fait, devient, doit, ont, trouve, permet, agit, faut</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: leurs, leur</li>
      <li>DET: leur, leurs, notre, nos, votre, vos</li>
      <li>PRON: nôtre</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: sien, sienne, siennes, siens, tien</li>
      <li>DET: son, sa, ses, mon, ma, mes, ton, sont, tes</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Emph</a>
    <ul>
      <li>No
        <ul>
          <li>PRON: il, elle, on, y, ils, se, nous, je, le, en</li>
        </ul>
      </li>
      <li>Yes
        <ul>
          <li>PRON: lui, eux, lui-même, elle, moi, elle-même, vous, eux-mêmes, elles, soi</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADJ
        <ul>
          <li>ADJ: bon, bas, telles</li>
          <li>ADP: en, à, d', de, hors</li>
          <li>NOUN: haut, crème, gris, rubis</li>
          <li>PROPN: Motown</li>
          <li>SYM: +</li>
          <li>VERB-Part: faite</li>
        </ul>
      </li>
      <li>ADP
        <ul>
          <li>ADJ: quitte</li>
          <li>ADP: d', en, à, de, par</li>
          <li>ADV: quant, ainsi, quand</li>
          <li>NOUN: grâce, suite, face, Grace, histoire</li>
          <li>PRON: il, y</li>
          <li>SCONJ: si</li>
          <li>SYM: /, x, ±, ×, +, ></li>
          <li>VERB-Part: mis, mise</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADJ: bel, petit</li>
          <li>ADP: à, en, de, par, d', sans, pour, dès, a, sur</li>
          <li>ADV: bien, tout, plus, aussi, peu, non, quand, pas, ainsi, après</li>
          <li>DET: le, un, les, une, la, quelque, nulle</li>
          <li>NOUN: compte, tour, Chemin, découvert, face</li>
          <li>PRON: C', rien, tout, on</li>
          <li>SCONJ: quand, comme</li>
          <li>SYM: +, :), /, ;), k, *, :-), ;-), e, M</li>
          <li>X: in, de, a, ex, grosso</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>ADV: ainsi</li>
          <li>CCONJ: c'est-à-dire, ou, et</li>
          <li>SYM: /, &, +</li>
        </ul>
      </li>
      <li>DET
        <ul>
          <li>ADP: de</li>
          <li>ADV: n'</li>
        </ul>
      </li>
      <li>INTJ
        <ul>
          <li>INTJ: Ah, Eh, Et</li>
        </ul>
      </li>
      <li>NOUN
        <ul>
          <li>ADJ: RAS, sérieux</li>
          <li>ADP: à, après, contre</li>
          <li>ADV: NON</li>
          <li>DET: le</li>
          <li>SYM: %, €, °, n°, $, ", £, #, ', G</li>
          <li>VERB-Fin: sauve</li>
          <li>VERB-Inf: conduire, reclure, savoir</li>
          <li>VERB-Part: chargé, ayants, chargée</li>
          <li>X: arancini, arłaman, hanagawara, i, kendayan, onigawara, salafs, statu, SI, WE</li>
        </ul>
      </li>
      <li>NUM
        <ul>
          <li>SYM: k, k-1</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>ADJ: grand</li>
          <li>ADV: plus, beaucoup, près, moins, peu, autant, bien, davantage, trop, n'</li>
          <li>DET: le, quelque, un, quelques</li>
        </ul>
      </li>
      <li>PROPN
        <ul>
          <li>ADJ: Tel, Belle, Clair, Disponible, Drôle, Quelle, Seul, extra, indépendante, inférieur</li>
          <li>ADV: Après-demain, Bêtement, avant, ici, longtemps</li>
          <li>DET: l'</li>
          <li>NOUN: Chanson, Chant, Donjon, Fille, Oiseau, Place, Procès, or, Abime, Affaire</li>
          <li>NUM: 7, sept</li>
          <li>PRON: Ceux</li>
          <li>PROPN: Ali, Allah, DIOS, Lilly, NGC, Sherlock, Sinbad, The, Toutankhamon, WR</li>
          <li>SYM: K, A, C, M, H, AA, criticusleblog@gmail.com, x, Ω, †</li>
          <li>VERB-Fin: vit, est, suis, Aide, Arrête, Chantons, Cherchez, Devine, Ouvre, Peut</li>
          <li>VERB-Inf: Aimer, Faire, Philosopher, Voler, débarrasser, laisser, monter, réussir, Économiser</li>
          <li>VERB-Part: Déconseillé, dit, prévu, écrit</li>
          <li>X: B, A, GMT, s, A1, AR-18, E, K, L., Windows</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: d', de, en</li>
          <li>ADV: alors, bien, tandis, parce, tant, si, ainsi, encore</li>
        </ul>
      </li>
      <li>VERB
        <ul>
          <li>SYM: =</li>
          <li>X: cf., publicly-traded, cf</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>PROPN: Church</li>
          <li>X: the, of, and, de, in, for, Company, a, me, live</li>
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
          <li>ADJ: tien</li>
          <li>DET: votre, vos, ton, tes</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADJ: sien, leurs, leur, sienne, siennes, siens</li>
          <li>DET: son, sa, ses, leur, leurs, sont</li>
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
          <li>ADJ: présent, tel, cher, meilleurs, tous, 8e, bon, correct, grand, historique</li>
          <li>ADP: a, d, des, entres, dr, en, pour</li>
          <li>ADV: trés, peut, -aussi, allégrement, brievement, complétement, ensuitle, gentillement, harmonisement, ironiquemmnt</li>
          <li>AUX-Fin: a, serais, est, était, esr, furent, on, son, sont, unt</li>
          <li>AUX-Inf: -être, etre</li>
          <li>AUX-Part: été</li>
          <li>CCONJ: and, voir</li>
          <li>DET: le, la, un, leur, une, L, certains, leurs, quelque, Ce</li>
          <li>INTJ: Et</li>
          <li>NOUN: coeur, acceuil, euro, grand, groupe, kommune, oeuvre, allume, boeuf, chaine</li>
          <li>NUM: cent-dix-sept-, cents</li>
          <li>PRON: ou, ca, il, c, que, t-il, -eux, -il, -le, Aucun</li>
          <li>PROPN: Gaulle, nancy, Pléïades, balkans, christ, ferté-imbault, fuorcla, nunavik, part-dieu, sahel</li>
          <li>SCONJ: qu</li>
          <li>VERB: situé, créé, appelé, devenu, située, suivi, Voila, crée, dit, eu</li>
          <li>VERB-Fin: pourrait, réagit, accueilli, accusent, accèda, affrontent, apperçoit, apprecie, avait, comporte</li>
          <li>VERB-Inf: atterir, avoir, combatttre, conccurencer, emprisonner, entammer, eviter, intaller, manoeuvrer, presenter</li>
          <li>VERB-Part: situé, créé, appelé, devenu, située, suivi, crée, dit, eu, fait</li>
          <li>X: cf</li>
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
<li>This corpus uses 2 lemmas as auxiliaries (<a>aux</a>). Examples: voir, être.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: être, faire.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB-Fin--NOUN (4053)</li>
      <li>VERB-Fin--NOUN-ADP(de) (1)</li>
      <li>VERB-Fin--NOUN-ADP(jusque)-ADP(à) (1)</li>
      <li>VERB-Fin--PRON (5695)</li>
      <li>VERB-Inf--NOUN (53)</li>
      <li>VERB-Inf--PRON (14)</li>
      <li>VERB-Part--NOUN (1147)</li>
      <li>VERB-Part--NOUN-ADP(de) (1)</li>
      <li>VERB-Part--PRON (1271)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (18)</li>
      <li>VERB--PRON (4)</li>
      <li>VERB-Fin--NOUN (4872)</li>
      <li>VERB-Fin--NOUN-ADP(entre) (1)</li>
      <li>VERB-Fin--NOUN-ADP(jusque)-ADP(à) (4)</li>
      <li>VERB-Fin--PRON (1081)</li>
      <li>VERB-Inf--NOUN (2617)</li>
      <li>VERB-Inf--NOUN-ADP(de) (1)</li>
      <li>VERB-Inf--NOUN-ADP(jusque)-ADP(à) (2)</li>
      <li>VERB-Inf--PRON (633)</li>
      <li>VERB-Part--NOUN (1940)</li>
      <li>VERB-Part--NOUN-ADP(jusque)-ADP(à) (1)</li>
      <li>VERB-Part--PRON (351)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (494)</li>
      <li>VERB-Inf--PRON (164)</li>
      <li>VERB-Part--PRON (211)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 278 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: agir s', trouver se, dérouler se, rendre se, emparer s', opposer s', avérer s', intéresser s', composer se, occuper s', passer se, produire se, échapper s', élever s', approcher s', battre se, appeler s', contenter se, diriger se, inquiéter s', révéler se, attacher s', dérouler s', enfuir s', marier se, montrer se, référer se, attendre s', inspirer s', baser se, déplacer se, exprimer s', faire se, jeter se, mettre se, plaindre se, prendre s', qualifier se, écrouler s', adresser s', attaquer s', convertir se, effondrer s', entendre s', envoler s', passer s', rendre s', tenir se, allier s', conformer se</li>
</ul>

<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 220 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: situer se, faire se, étendre s', développer se, tenir se, retrouver se, terminer se, poursuivre se, élever s', rencontrer se, ajouter s', classer se, distinguer se, produire se, tenir s', appliquer s', imposer s', jouer se, présenter se, inscrire s', nommer se, qualifier se, expliquer s', traduire se, achever s', concentrer se, manifester se, ouvrir s', aggraver s', améliorer s', appuyer s', arrêter s', effectuer s', produire s', transformer se, vendre se, articuler s', distinguer s', dresser se, endormir s', former se, installer s', placer se, réveiller se, établir s', accompagner s', allonger s', annoncer s', briser se, décomposer se</li>
</ul>

<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 291 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: installer s', engager s', retirer se, mettre se, sentir se, lancer se, retrouver se, imposer s', assurer s', réunir se, connaître se, donner se, affronter s', faire se, nourrir se, présenter se, établir s', charger se, voir se, arrêter s', associer s', débarrasser se, inscrire s', passer se, rapprocher se, tourner se, venger se, cacher se, dire se, donner s', rencontrer se, retourner se, sacrifier se, succéder se, éloigner s', concentrer se, entraîner s', jeter se, laisser se, lier se, orienter s', affranchir s', appuyer s', asseoir s', construire s', croire se, demander se, dire s', diviser se, doter se</li>
    <ul>
      <li>Out of those, 6 lemmas occurred more than once, but never without a reflexive dependent. Examples: débarrasser, réconcilier, affranchir, hisser, laver, prémunir</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 23 relation subtypes: <a>acl:relcl</a>, <a>advcl:cleft</a>, <a>aux:caus</a>, <a>aux:pass</a>, <a>aux:tense</a>, <a>csubj:pass</a>, <a>dep:comp</a>, <a>expl:comp</a>, <a>expl:pass</a>, <a>expl:pv</a>, <a>expl:subj</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>iobj:agent</a>, <a>nsubj:caus</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obj:agent</a>, <a>obj:lvc</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:mod</a>, <a>parataxis:insert</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>expl</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>reparandum</a></li>
</ul>
