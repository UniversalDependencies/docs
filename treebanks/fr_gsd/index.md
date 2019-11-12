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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfr_gsd25)<br />
Download all treebanks: [UD 2.5](/#download)

License: CC BY-SA 4.0

Genre: blog, news, reviews, wiki

Questions, comments?
General annotation questions (either French-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_French-GSD/issues).
If you want to collaborate, please contact [demarneffe&nbsp;•&nbsp;1&nbsp;(æt)&nbsp;osu&nbsp;•&nbsp;edu, bruno&nbsp;•&nbsp;guillaume&nbsp;(æt)&nbsp;inria&nbsp;•&nbsp;fr].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

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

The version 2.5 of **UD_French-GSD** data consists of 400,390 words (16,342 sentences).
No sentence id were available in the original resource, so new `sent_id` were automatically introduced in the converted corpus with prefixes `fr-ud-train`, `fr-ud-dev` and `fr-ud-test` on the corresponding original files, followed by a 5 digit number following the order of sentences.

:warning: to meet the size requirements of test data of 10K words, a part of the dev original file was moved to the test file!
Since version 2.0, the splitting of data is:

* file `fr-ud-train.conll`: 14,450 sentences; 354,661 words
* `fr-ud-train_00001` to `fr-ud-train_14554`
* file `fr-ud-dev.conll`: 1,476 sentences; 35,716 words
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

[ADJ](fr_gsd-pos-ADJ.html) – [ADP](fr_gsd-pos-ADP.html) – [ADV](fr_gsd-pos-ADV.html) – [AUX](fr_gsd-pos-AUX.html) – [CCONJ](fr_gsd-pos-CCONJ.html) – [DET](fr_gsd-pos-DET.html) – [INTJ](fr_gsd-pos-INTJ.html) – [NOUN](fr_gsd-pos-NOUN.html) – [NUM](fr_gsd-pos-NUM.html) – [PART](fr_gsd-pos-PART.html) – [PRON](fr_gsd-pos-PRON.html) – [PROPN](fr_gsd-pos-PROPN.html) – [PUNCT](fr_gsd-pos-PUNCT.html) – [SCONJ](fr_gsd-pos-SCONJ.html) – [SYM](fr_gsd-pos-SYM.html) – [VERB](fr_gsd-pos-VERB.html) – [X](fr_gsd-pos-X.html)

## Features

[Case](fr_gsd-feat-Case.html) – [Definite](fr_gsd-feat-Definite.html) – [Foreign](fr_gsd-feat-Foreign.html) – [Gender](fr_gsd-feat-Gender.html) – [Mood](fr_gsd-feat-Mood.html) – [Number](fr_gsd-feat-Number.html) – [NumType](fr_gsd-feat-NumType.html) – [Person](fr_gsd-feat-Person.html) – [Polarity](fr_gsd-feat-Polarity.html) – [Poss](fr_gsd-feat-Poss.html) – [PronType](fr_gsd-feat-PronType.html) – [Reflex](fr_gsd-feat-Reflex.html) – [Tense](fr_gsd-feat-Tense.html) – [Typo](fr_gsd-feat-Typo.html) – [VerbForm](fr_gsd-feat-VerbForm.html)

## Relations

[acl](fr_gsd-dep-acl.html) – [acl:relcl](fr_gsd-dep-acl-relcl.html) – [advcl](fr_gsd-dep-advcl.html) – [advcl:cleft](fr_gsd-dep-advcl-cleft.html) – [advmod](fr_gsd-dep-advmod.html) – [amod](fr_gsd-dep-amod.html) – [appos](fr_gsd-dep-appos.html) – [aux:caus](fr_gsd-dep-aux-caus.html) – [aux:pass](fr_gsd-dep-aux-pass.html) – [aux:tense](fr_gsd-dep-aux-tense.html) – [case](fr_gsd-dep-case.html) – [cc](fr_gsd-dep-cc.html) – [ccomp](fr_gsd-dep-ccomp.html) – [conj](fr_gsd-dep-conj.html) – [cop](fr_gsd-dep-cop.html) – [csubj](fr_gsd-dep-csubj.html) – [csubj:pass](fr_gsd-dep-csubj-pass.html) – [dep](fr_gsd-dep-dep.html) – [det](fr_gsd-dep-det.html) – [discourse](fr_gsd-dep-discourse.html) – [dislocated](fr_gsd-dep-dislocated.html) – [expl:comp](fr_gsd-dep-expl-comp.html) – [expl:pass](fr_gsd-dep-expl-pass.html) – [expl:subj](fr_gsd-dep-expl-subj.html) – [fixed](fr_gsd-dep-fixed.html) – [flat:foreign](fr_gsd-dep-flat-foreign.html) – [flat:name](fr_gsd-dep-flat-name.html) – [goeswith](fr_gsd-dep-goeswith.html) – [iobj](fr_gsd-dep-iobj.html) – [iobj:agent](fr_gsd-dep-iobj-agent.html) – [mark](fr_gsd-dep-mark.html) – [nmod](fr_gsd-dep-nmod.html) – [nsubj](fr_gsd-dep-nsubj.html) – [nsubj:caus](fr_gsd-dep-nsubj-caus.html) – [nsubj:pass](fr_gsd-dep-nsubj-pass.html) – [nummod](fr_gsd-dep-nummod.html) – [obj](fr_gsd-dep-obj.html) – [obj:agent](fr_gsd-dep-obj-agent.html) – [obj:lvc](fr_gsd-dep-obj-lvc.html) – [obl](fr_gsd-dep-obl.html) – [obl:agent](fr_gsd-dep-obl-agent.html) – [obl:arg](fr_gsd-dep-obl-arg.html) – [obl:mod](fr_gsd-dep-obl-mod.html) – [orphan](fr_gsd-dep-orphan.html) – [parataxis](fr_gsd-dep-parataxis.html) – [punct](fr_gsd-dep-punct.html) – [reparandum](fr_gsd-dep-reparandum.html) – [root](fr_gsd-dep-root.html) – [vocative](fr_gsd-dep-vocative.html) – [xcomp](fr_gsd-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 16342 sentences, 389371 tokens and 400396 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 58214 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 128 types of words with spaces. Examples: 10 000, 100 000, 20 000, 50 000, 1 000, 2 000, 1 200, 1 500, 200 000, 25 000, 5 000, 80 000, 1 100, 1 400, 150 000, 2 500, 30 000, 300 000, 400 000, 60 000, 68 000, 900 000, 02 31 30 47 70, 1 068, 1 108, 1 209, 1 231, 1 237 500, 1 250, 1 300, 1 345, 1 444 861, 1 496, 1 500 000, 1 728, 1 766 691 409, 1 890, 1,186 569 110, 10 250, 11 437, 11 506, 11 839, 13 500, 13 641, 147 000, 149 900, 16 000, 16 851, 170 055, 18 424</li>
</ul>

<ul>
<li>This corpus contains 2167 types of words that contain both letters and punctuation. Examples: l', d', s', qu', n', c', jusqu', j', aujourd'hui, États-Unis, -il, -t, m', lui-même, celui-ci, c'est-à-dire, M., lorsqu', celle-ci, -elle, au-dessus, etc., -ce, sud-est, Royaume-Uni, ceux-ci, au-delà, elle-même, peut-être, sud-ouest, -ils, J.-C., av., nord-ouest, -on, nord-est, -vous, Etats-Unis, Grande-Bretagne, Pays-Bas, eux-mêmes, porte-parole, Notre-Dame, puisqu', week-end, quelqu'un, -là, C., celles-ci, chef-lieu</li>
</ul>

<ul>
<li>This corpus contains 11025 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 9 types of multi-word tokens. Examples: du, des, au, aux, auquel, duquel, auxquels, desquelles, auxquelles.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 5 word types tagged as particles (PART): -ci, -t, ci, là, t'</li>
</ul>

<ul>
<li>This corpus contains 71 lemmas tagged as pronouns (PRON): 1 728, 2, 345, I, aucun, autre, autrui, beaucoup, ce, ceci, cela, celui, celui-ci, celui-là, certain, ceux-là, chacun, cinq, combien, dernier, deux, dont, elle-même, en, eux-mêmes, il, je, le, lequel, leur, lui, lui-aussi, lui-même, me, moi, moi-même, même, nous, nous-mêmes, nul, on, onze, personne, peu, plupart, plusieurs, premier, quatre, que, quel, quelqu'un, qui, quiconque, quinze, quo, quoi, rien, se, sien, sienne, soi, soi-même, soixante, tel, tout, trois, tu, un, vous, y, ça</li>
</ul>

<ul>
<li>This corpus contains 30 lemmas tagged as determiners (DET): Las, Les, Los, a, aucun, ce, certain, chaque, de, der, différent, divers, du, el, il, l', la, le, ledit, lui, no, nul, plusieurs, quel, quelque, son, tel, the, tout, un</li>
</ul>

<ul>
<li>Out of the above, 12 lemmas occurred sometimes as PRON and sometimes as DET: aucun, ce, certain, il, le, lui, nul, plusieurs, quel, tel, tout, un</li>
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
    <li>X: Bound</li>
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
      <li>DET: la, une, les, l', sa, cette, des, ses, son, leur</li>
      <li>NOUN: ville, partie, région, fois, commune, années, famille, année, fin, place</li>
      <li>NUM: 00H30, 12H30, 14h25, 15H00, 18h, 18h40, 20h40, 22h, 23h, 48H</li>
      <li>PRON: elle, elles, une, la, celle, laquelle, celles, celle-ci, -elle, lesquelles</li>
      <li>PROPN: Italie</li>
      <li>VERB-Part: située, née, créée, appelée, utilisée, connue, construite, mise, publiée, nommée</li>
      <li>X: Archives, Nature, Society</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: premier, français, tous, grand, autres, nouveau, même, dernier, nombreux, seul</li>
      <li>ADJ-Part: informé</li>
      <li>AUX-Part: été, fait</li>
      <li>DET: le, les, un, l', son, des, ce, ses, ces, de</li>
      <li>NOUN: ans, pays, nom, monde, temps, groupe, siècle, état, cours, lieu</li>
      <li>NUM: milliards, millions</li>
      <li>PRON: il, on, ils, le, un, -il, lequel, celui, ceux, tout</li>
      <li>PROPN: IRT, Imperium, Palais, mémorique</li>
      <li>SYM: M, k</li>
      <li>VERB-Fin: accueilli, créé, rejoints, remis, rempli, servi</li>
      <li>VERB-Part: né, situé, eu, fait, mort, connu, nommé, réalisé, utilisé, mis</li>
      <li>X: Arts, Black, Book, Bound, College, Concept, Domine, Glory, Original, Party</li>
      <li>X-Part: Bound</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: autres, tous, nombreux, toutes, nombreuses, grands, premières, premiers, grandes, différents</li>
      <li>AUX-Fin: sont, ont, étaient, avons, furent, avaient, seront, sommes, soient, auraient</li>
      <li>DET: les, des, ses, ces, de, plusieurs, leurs, quelques, d', certains</li>
      <li>NOUN: ans, années, pays, enfants, habitants, personnes, jours, droits, points, hommes</li>
      <li>NUM: 00H30, 12H30, 14h25, 15H00, 18h, 18h40, 20h40, 22h, 23h, 48H</li>
      <li>PRON: ils, nous, vous, autres, les, elles, ceux, eux, leur, tous</li>
      <li>PROPN: IRT</li>
      <li>SYM: k</li>
      <li>VERB-Fin: ont, peuvent, font, doivent, sont, prennent, trouvent, vont, permettent, allez</li>
      <li>VERB-Part: utilisés, appelés, utilisées, connus, situés, produits, réalisés, liées, mis, prises</li>
      <li>X: Archives, Arts, Commons, Legends, Studies, Troubles, Verbum, Windows</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: premier, première, même, français, française, grand, grande, nouveau, autre, politique</li>
      <li>ADJ-Part: informé</li>
      <li>AUX-Fin: est, a, était, fut, avait, ai, sera, soit, aurait, fait</li>
      <li>AUX-Part: été, fait, faite</li>
      <li>DET: le, la, l', un, une, son, sa, cette, ce, leur</li>
      <li>NOUN: ville, partie, nom, monde, région, commune, groupe, temps, famille, année</li>
      <li>PRON: il, elle, on, c', lui, ce, je, le, j', l'</li>
      <li>PROPN: Imperium, Italie, Palais, mémorique</li>
      <li>SYM: M</li>
      <li>VERB-Fin: a, peut, fait, est, trouve, devient, doit, permet, agit, faut</li>
      <li>VERB-Part: né, située, situé, eu, fait, mort, connu, nommé, née, réalisé</li>
      <li>X: Airplane, An, Black, Book, Bound, Center, Chancellor, College, Concept, Devil</li>
      <li>X-Part: Bound</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>NOUN: laude</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>NOUN: Krisen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>NOUN: Verantwortung</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>X: Domine</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: le, la, les, l', l, the, du, là</li>
      <li>NOUN: Facultés</li>
      <li>X: the</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADP: de, d'</li>
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
      <li>ADV: pas, n', ne, plus, jamais, non, qu', point, guère, nullement</li>
      <li>DET: aucun, aucune, No, Nul</li>
      <li>PRON: rien, aucun</li>
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
      <li>X-Part: Bound</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: est, a, sont, ont, ai, soit, avons, aurait, fait, suis</li>
      <li>AUX-Part: étant, ayant, faisant, Etant</li>
      <li>VERB-Fin: a, peut, fait, est, trouve, devient, doit, ont, permet, agit</li>
      <li>VERB-Part: appartenant, concernant, faisant, permettant, ayant, portant, pouvant, prenant, utilisant, visant</li>
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
      <li>ADP: de, d'</li>
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
  <li>Ind
    <ul>
      <li>PRON: quiconque</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: où, quand</li>
      <li>PRON: qui, qu', que, quoi, Laquelle, Lesquelles</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: aucune, aucun, aucunes</li>
      <li>PRON: personne, aucun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: son, sa, ses, leur, leurs, notre, mon, nos, ma, votre</li>
      <li>PRON: il, se, s', elle, ils, lui, nous, je, le, vous</li>
      <li>X: you, Me, i</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: où, ou</li>
      <li>PRON: qui, dont, qu', que, lequel, laquelle, lesquels, lesquelles, quoi</li>
      <li>SCONJ: que</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: XIXe, XXe, XVIIe, XVIe, XVIIIe, XIIe, XIe, XVe, XIIIe, VIe</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: son, sa, ses, leur, leurs, notre, mon, nos, ma, votre</li>
      <li>X: Andrew, Dumbo's, Schott's</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: lui-même, elle-même, eux-mêmes, elles-mêmes, moi-même, moi, nous-mêmes, soi-même</li>
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
      <li>AUX-Fin: est, a, sont, ont, était, fut, avait, sera, étaient, soit</li>
      <li>DET: ce, leur</li>
      <li>PRON: il, se, s', elle, on, c', en, ils, lui, ce</li>
      <li>VERB-Fin: a, peut, fait, est, devient, doit, ont, trouve, permet, agit</li>
      <li>VERB-Part: Agréé</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>CCONJ: and</li>
          <li>NOUN: Records, lugsail</li>
          <li>NUM: 1832, 1833, 1834, 1919, 1920, 2000, 4, 50</li>
          <li>PROPN: Ricky, Riverside</li>
          <li>PUNCT: ,</li>
          <li>SYM: &</li>
          <li>X: of, the, and, in, for, Company, a, to, your, me</li>
          <li>X-Part: Bound</li>
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
          <li>ADJ: bonne, cuite, exemptent, impeccaple, influant, influent, légèr, saoudite</li>
          <li>ADP: des, apres, en, entres</li>
          <li>ADV: ou, voir, la, oà, prés</li>
          <li>AUX-Fin: avait, on, son, était</li>
          <li>DET: le, sont</li>
          <li>INTJ: Et</li>
          <li>NOUN: groupe, Acceuil, Série, attaque, correspondant, coup, enrégistrements, modèle, parti, partisans</li>
          <li>PART: ci, là</li>
          <li>PRON: il, Elles, certain, que</li>
          <li>PROPN: Gaulle, balkans, christ, ferté-imbault, fuorcla, nancy, nunavik, part-dieu, saloum, stavrou</li>
          <li>SCONJ: quand, voir</li>
          <li>VERB: Voila, crée, créé, pourrait, Surnommé, accueilli, accusent, affilé, affilées, affrontent</li>
          <li>VERB-Fin: pourrait, accueilli, accusent, affrontent, comporte, concentre, considèrent, constitue, date, devraient</li>
          <li>VERB-Inf: entammer, intaller</li>
          <li>VERB-Part: crée, créé, Surnommé, affilé, affilées, classifié, devenu, dit, dépendent, dérivaient</li>
          <li>X: durint</li>
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
      <li>VERB-Fin--NOUN (4447)</li>
      <li>VERB-Fin--NOUN-ADP(de) (2)</li>
      <li>VERB-Fin--NOUN-ADP(à) (1)</li>
      <li>VERB-Fin--PRON (5889)</li>
      <li>VERB-Fin--PRON-ADP(à) (1)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--PRON (2)</li>
      <li>VERB-Part--NOUN (1413)</li>
      <li>VERB-Part--NOUN-ADP(de) (1)</li>
      <li>VERB-Part--PRON (1469)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (20)</li>
      <li>VERB--PRON (4)</li>
      <li>VERB-Fin--NOUN (5130)</li>
      <li>VERB-Fin--NOUN-ADP(pour) (1)</li>
      <li>VERB-Fin--NOUN-ADP(à) (1)</li>
      <li>VERB-Fin--PRON (1117)</li>
      <li>VERB-Inf--NOUN (2681)</li>
      <li>VERB-Inf--PRON (624)</li>
      <li>VERB-Part--NOUN (2113)</li>
      <li>VERB-Part--NOUN-ADP(de) (1)</li>
      <li>VERB-Part--NOUN-ADP(en) (1)</li>
      <li>VERB-Part--PRON (365)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (467)</li>
      <li>VERB-Inf--PRON (160)</li>
      <li>VERB-Part--PRON (207)</li>
    </ul>
  </li>
</ul>


<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 222 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: trouver se, situer se, faire se, développer se, tenir se, retrouver se, étendre s', terminer se, poursuivre se, élever s', rencontrer se, ajouter s', classer se, distinguer se, appliquer s', produire se, tenir s', imposer s', jouer se, nommer se, présenter se, inscrire s', qualifier se, expliquer s', traduire se, achever s', concentrer se, manifester se, ouvrir s', aggraver s', améliorer s', appuyer s', effectuer s', produire s', transformer se, vendre se, arrêter s', articuler s', distinguer s', dresser se, endormir s', former se, installer s', placer se, établir s', accompagner s', allonger s', annoncer s', briser se, décomposer se</li>
</ul>

<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 1 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: célébrer nous-mêmes</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 19 relation subtypes: <a>acl:relcl</a>, <a>advcl:cleft</a>, <a>aux:caus</a>, <a>aux:pass</a>, <a>aux:tense</a>, <a>csubj:pass</a>, <a>expl:comp</a>, <a>expl:pass</a>, <a>expl:subj</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>iobj:agent</a>, <a>nsubj:caus</a>, <a>nsubj:pass</a>, <a>obj:agent</a>, <a>obj:lvc</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:mod</a></li>
<li>The following 3 main types are not used alone, they are always subtyped: <a>aux</a>, <a>expl</a>, <a>flat</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a></li>
</ul>
