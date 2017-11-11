---
layout: base
title:  'UD_French'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD French

Language: [French](../fr/overview/fr-hub.html) (code: `fr`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v1.0 release.

The following people have contributed to making this treebank part of UD: Marie-Catherine de Marneffe, Bruno Guillaume, Ryan McDonald, Alane Suhr, Joakim Nivre, Matias Grioni.

Repository: [UD_French](https://github.com/UniversalDependencies/UD_French)

License: CC BY-NC-SA 3.0 US

Genre: blog, news, reviews, wiki

Questions, comments?
General annotation questions (either French-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_French/issues).
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
The French UD was converted in 2015 from the content head version of the universal
dependency treebank v2.0 (https://github.com/ryanmcd/uni-dep-tb).
It is updated since 2015 independently from the previous source.


The French UD is converted from the content head version of the universal
dependency treebank v2.0 (https://github.com/ryanmcd/uni-dep-tb).
The README for the original project is available in the file `README_Google_dataset.txt`.

The French data consists of 402,404 words (16,448 sentences).
No sentence id were available in the original resource, so new `sent_id` were automatically introduced in the converted corpus with prefixes `fr-ud-train`, `fr-ud-dev` and `fr-ud-test` on the correponding original files, followed by a 5 digit number following the order of sentences.

:warning: to meet the size requirements of test data of 10K words, a part of the dev original file was moved to the test file!
Since version 2.0, the splitting of data is:

* file `fr-ud-train.conll`: 14,554 sentences; 356,613 words
* `fr-ud-train_00001` to `fr-ud-train_14554`
* file `fr-ud-dev.conll`: 1,478 sentences; 35,771 words
* `fr-ud-dev_00001` to `fr-ud-dev_01478`
* file `fr-ud-test.conll`: 416 sentences; 10,020 words
* `fr_ud-test_00001` to `fr_ud-test_00298`
* `fr-ud-dev_01479` to `fr-ud-dev_01596`

Sentences are shuffled and there is no way to know what is the genre of a given sentence.

Probably due to some bug in a conversion program, version 1.2 contains many truncated sentences (date missing for instance). Almost every truncated sentence is from Wikipedia, so it was possible to recover the original text. Most of the truncated sentences were completed in version 1.3. Some sentences were completed later. There are probably still some truncated sentences.

## Acknowledgments

The latest version of the corpus was produced by Marie-Catherine de Marneffe, Bruno Guillaume and Matias Grioni.
Automatic modifications and consistency checking were partly done using the Grew software (see http://grew.loria.fr).

See file `README_Google_dataset.txt` for references and acknowledgments concerning the original corpus.


# Statistics of UD French

## POS Tags

[ADJ](fr-pos-ADJ.html) – [ADP](fr-pos-ADP.html) – [ADV](fr-pos-ADV.html) – [AUX](fr-pos-AUX.html) – [CCONJ](fr-pos-CCONJ.html) – [DET](fr-pos-DET.html) – [INTJ](fr-pos-INTJ.html) – [NOUN](fr-pos-NOUN.html) – [NUM](fr-pos-NUM.html) – [PART](fr-pos-PART.html) – [PRON](fr-pos-PRON.html) – [PROPN](fr-pos-PROPN.html) – [PUNCT](fr-pos-PUNCT.html) – [SCONJ](fr-pos-SCONJ.html) – [SYM](fr-pos-SYM.html) – [VERB](fr-pos-VERB.html) – [X](fr-pos-X.html)

## Features

[Case](fr-feat-Case.html) – [Definite](fr-feat-Definite.html) – [Degree](fr-feat-Degree.html) – [Gender](fr-feat-Gender.html) – [Mood](fr-feat-Mood.html) – [Number](fr-feat-Number.html) – [NumType](fr-feat-NumType.html) – [Person](fr-feat-Person.html) – [Polarity](fr-feat-Polarity.html) – [Poss](fr-feat-Poss.html) – [PronType](fr-feat-PronType.html) – [Reflex](fr-feat-Reflex.html) – [Tense](fr-feat-Tense.html) – [VerbForm](fr-feat-VerbForm.html)

## Relations

[acl](fr-dep-acl.html) – [acl:relcl](fr-dep-acl-relcl.html) – [advcl](fr-dep-advcl.html) – [advmod](fr-dep-advmod.html) – [amod](fr-dep-amod.html) – [appos](fr-dep-appos.html) – [aux](fr-dep-aux.html) – [aux:caus](fr-dep-aux-caus.html) – [aux:pass](fr-dep-aux-pass.html) – [case](fr-dep-case.html) – [cc](fr-dep-cc.html) – [ccomp](fr-dep-ccomp.html) – [compound](fr-dep-compound.html) – [conj](fr-dep-conj.html) – [cop](fr-dep-cop.html) – [csubj](fr-dep-csubj.html) – [csubj:pass](fr-dep-csubj-pass.html) – [dep](fr-dep-dep.html) – [det](fr-dep-det.html) – [discourse](fr-dep-discourse.html) – [dislocated](fr-dep-dislocated.html) – [expl](fr-dep-expl.html) – [fixed](fr-dep-fixed.html) – [flat:foreign](fr-dep-flat-foreign.html) – [flat:name](fr-dep-flat-name.html) – [goeswith](fr-dep-goeswith.html) – [iobj](fr-dep-iobj.html) – [iobj:agent](fr-dep-iobj-agent.html) – [mark](fr-dep-mark.html) – [nmod](fr-dep-nmod.html) – [nsubj](fr-dep-nsubj.html) – [nsubj:caus](fr-dep-nsubj-caus.html) – [nsubj:pass](fr-dep-nsubj-pass.html) – [nummod](fr-dep-nummod.html) – [obj](fr-dep-obj.html) – [obj:agent](fr-dep-obj-agent.html) – [obl](fr-dep-obl.html) – [obl:agent](fr-dep-obl-agent.html) – [orphan](fr-dep-orphan.html) – [parataxis](fr-dep-parataxis.html) – [punct](fr-dep-punct.html) – [reparandum](fr-dep-reparandum.html) – [root](fr-dep-root.html) – [vocative](fr-dep-vocative.html) – [xcomp](fr-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>

<ul>
<li>This corpus contains 16448 sentences, 391309 tokens and 402404 syntactic words.</li>
<li>This corpus contains 58560 tokens (15%) that are not followed by a space.</li>
<li>This corpus contains 110 types of words with spaces. Examples: 10 000, 100 000, 20 000, 50 000, 1 000, 2 000, 1 200, 1 500, 200 000, 25 000, 5 000, 80 000, 1 100, 1 400, 150 000, 2 500, 30 000, 300 000, 400 000, 46 000, 60 000, 68 000, 02 31 30 47 70, 1 068, 1 209, 1 231, 1 237 500, 1 250, 1 300, 1 345, 1 444 861, 1 496, 1 500 000, 1 728, 1 766 691 409, 1 890, 1,186 569 110, 10 250, 11 437, 11 506, 11 839, 13 500, 13 641, 147 000, 149 900, 16 000, 170 055, 19 000, 2 001, 2 036</li>
<li>This corpus contains 2117 types of words that contain both letters and punctuation. Examples: l', d', s', qu', n', c', jusqu', j', aujourd'hui, États-Unis, -il, -t, m', lui-même, celui-ci, M., c'est-à-dire, lorsqu', 's, -elle, celle-ci, etc., au-dessus, -ce, sud-est, Royaume-Uni, ceux-ci, au-delà, elle-même, peut-être, sud-ouest, -ils, -on, J.-C., av., nord-ouest, nord-est, -vous, Etats-Unis, Grande-Bretagne, Pays-Bas, eux-mêmes, porte-parole, Notre-Dame, puisqu', week-end, C., quelqu'un, rendez-vous, -là</li>
<li>This corpus contains 11095 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 9 types of multi-word tokens. Examples: du, des, au, aux, auquel, duquel, auxquels, desquelles, auxquelles.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus contains 20 word types tagged as particles (PART): 's, -ci, -t, ci, di, déca, ex, hyper, l', là, n', ne, not, penta, post, pré, t', to, tri, up</li>
</ul>

<ul>
<li>This corpus contains 81 lemmas tagged as pronouns (PRON): 1 728, 2, 345, I, aucun, autre, autrui, beaucoup, ce, ceci, cela, celui, celui-ci, celui-là, certain, chacun, cinq, combien, dernier, deux, dont, eis, elle, elle-même, en, eos, esta, eux-mêmes, il, it, je, le, lequel, leur, lui, lui-même, me, moi, moi-même, même, nous, nous-mêmes, nul, on, onze, où, personne, peu, plupart, plusieurs, premier, quatre, que, quel, quelqu'un, qui, quiconque, quinze, quoi, rien, se, she, sien, soi, soi-même, soixante, te, tel, they, tout, trois, tu, un, vous, what, which, who, y, you, your, ça</li>
</ul>

<ul>
<li>This corpus contains 34 lemmas tagged as determiners (DET): a, all, aucun, ce, certain, chaque, der, différent, divers, du, el, his, il, l', la, le, ledit, mi, my, no, noster, nul, plusieurs, quel, quelque, some, son, suis, tel, that, the, tout, un, your</li>
</ul>

<ul>
<li>Out of the above, 12 lemmas occurred sometimes as PRON and sometimes as DET: aucun, ce, certain, il, le, nul, plusieurs, quel, tel, tout, un, your</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as auxiliaries (AUX): avoir, be, can, can't, do, faire, fue, must, will, être</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as AUX and sometimes as VERB: avoir, be, faire, être</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a>
<ul>
  <li>Fin
  <ul>
    <li>AUX: est, a, sont, ont, était, fut, avait, ai, sera, étaient</li>
    <li>VERB: a, peut, fait, est, trouve, devient, doit, ont, permet, faut</li>
  </ul>
  </li>
  <li>Inf
  <ul>
    <li>AUX: être, avoir, faire, be, -être, etre</li>
    <li>VERB: faire, partir, voir, prendre, avoir, mettre, passer, trouver, aller, dire</li>
  </ul>
  </li>
  <li>Part
  <ul>
    <li>AUX: été, étant, ayant, fait, faisant, Etant, faite</li>
    <li>VERB: né, située, situé, eu, fait, mort, connu, nommé, née, réalisé</li>
  </ul>
  </li>
</ul>
</li>
</ul>

<h3>Nominal Features</h3>

<li><a>Gender</a>
  <ul>
    <li>Fem
      <ul>
        <li>ADJ: première, française, grande, même, nouvelle, nombreuses, nationale, autres, seule, internationale</li>
        <li>AUX-Part: faite</li>
        <li>DET: la, une, les, l', sa, cette, des, ses, son, leur</li>
        <li>NOUN: ville, partie, région, fois, commune, années, famille, année, fin, place</li>
        <li>NUM: 00H30, 12H30, 14h25, 15H00, 18h, 18h40, 20h40, 22h, 23h, 48H</li>
        <li>PRON: elle, elles, une, la, celle, laquelle, celles, -elle, celle-ci, lesquelles</li>
        <li>PROPN: Italie</li>
        <li>VERB-Part: située, née, créée, appelée, utilisée, connue, construite, mise, publiée, nommée</li>
      </ul>
    </li>
    <li>Masc
      <ul>
        <li>ADJ: premier, français, autres, grand, nouveau, même, dernier, nombreux, seul, ancien</li>
        <li>AUX-Part: été, fait</li>
        <li>DET: le, les, un, l', son, des, ce, ses, ces, de</li>
        <li>NOUN: ans, pays, nom, monde, temps, groupe, siècle, état, cours, lieu</li>
        <li>PRON: il, on, ils, le, un, -il, lequel, celui, tout, ceux</li>
        <li>PROPN: Palais, mémorique</li>
        <li>VERB-Part: né, situé, eu, fait, mort, connu, nommé, réalisé, utilisé, créé</li>
      </ul>
    </li>
    <li>Neut
      <ul>
        <li>ADJ: Koninklijk</li>
        <li>NOUN: Museum</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Number</a>
  <ul>
    <li>Plur
      <ul>
        <li>ADJ: autres, nombreux, nombreuses, grands, premières, premiers, différents, grandes, français, nouveaux</li>
        <li>AUX-Fin: sont, ont, étaient, avons, furent, avaient, seront, sommes, soient, auraient</li>
        <li>DET: les, des, ses, ces, de, plusieurs, leurs, tous, quelques, toutes</li>
        <li>NOUN: ans, années, pays, enfants, habitants, personnes, jours, droits, points, hommes</li>
        <li>NUM: 00H30, 12H30, 14h25, 15H00, 18h, 18h40, 20h40, 22h, 23h, 48H</li>
        <li>PRON: ils, nous, vous, autres, les, elles, ceux, eux, leur, tous</li>
        <li>VERB-Fin: ont, peuvent, font, sont, prennent, trouvent, vont, permettent, constituent, allez</li>
        <li>VERB-Part: utilisés, appelés, utilisées, connus, situés, produits, réalisés, liées, mis, prises</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>ADJ: première, premier, même, français, française, grande, grand, nouveau, autre, politique</li>
        <li>AUX-Fin: est, a, était, fut, avait, ai, sera, soit, aurait, suis</li>
        <li>AUX-Part: été, fait, faite</li>
        <li>DET: le, la, l', un, une, son, sa, cette, ce, leur</li>
        <li>NOUN: ville, partie, nom, monde, région, commune, groupe, temps, famille, année</li>
        <li>PRON: il, elle, on, c', lui, ce, je, le, l', j'</li>
        <li>PROPN: Italie, Palais, mémorique</li>
        <li>VERB-Fin: a, peut, fait, est, trouve, devient, doit, permet, faut, agit</li>
        <li>VERB-Part: né, située, situé, eu, fait, mort, connu, nommé, née, réalisé</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Case</a>
  <ul>
    <li>Abl
      <ul>
        <li>NOUN: laude</li>
      </ul>
    </li>
    <li>Acc
      <ul>
        <li>NOUN: Krisen</li>
      </ul>
    </li>
    <li>Nom
      <ul>
        <li>NOUN: Verantwortung</li>
      </ul>
    </li>
    <li>Voc
      <ul>
        <li>NOUN: Domine</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Definite</a>
  <ul>
    <li>Def
      <ul>
        <li>DET: le, la, les, l', the, l, là</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>DET: un, une, des, de, d', telle, in</li>
      </ul>
    </li>
  </ul>
</li>

<h3>Degree and Polarity</h3>

<li><a>Degree</a>
  <ul>
    <li>Cmp
      <ul>
        <li>ADJ: Higher</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Polarity</a>
  <ul>
    <li>Neg
      <ul>
        <li>ADV: pas, n', ne, plus, jamais, non, qu', point, guère, not</li>
        <li>DET: aucun, aucune, no, Nul</li>
        <li>PART: n', not</li>
        <li>PRON: rien</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Verbal Features</h3>


<li><a>Mood</a>
  <ul>
    <li>Cnd
      <ul>
        <li>AUX-Fin: aurait, serait, auraient, seraient, serais, aurais, aurions, seriez, ferait, serions</li>
        <li>VERB-Fin: pourrait, devrait, pourraient, serait, aurait, devraient, auraient, faudrait, souhaiterait, viendrait</li>
      </ul>
    </li>
    <li>Imp
      <ul>
        <li>AUX-Fin: soyez, sois</li>
        <li>VERB-Fin: allez, hésitez, Rappelons, Notons, arrêtez, pensez, Cliquez, Demandez, Suivez, attendez</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>AUX-Fin: est, a, sont, ont, était, fut, avait, ai, sera, étaient</li>
        <li>VERB-Fin: a, peut, fait, est, trouve, devient, doit, ont, permet, faut</li>
      </ul>
    </li>
    <li>Sub
      <ul>
        <li>AUX-Fin: soit, ait, soient, aient, fût, eût, fasse, aie, ayez, fassent</li>
        <li>VERB-Fin: puisse, soit, puissent, agisse, fasse, aient, ait, arrive, prenne, change</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Tense</a>
  <ul>
    <li>Fut
      <ul>
        <li>AUX-Fin: sera, seront, aura, auront, fera, feront, serez, aurons</li>
        <li>VERB-Fin: aura, fera, pourra, permettra, restera, feront, sera, deviendra, permettront, devra</li>
      </ul>
    </li>
    <li>Imp
      <ul>
        <li>AUX-Fin: était, avait, étaient, avaient, avais, avions, faisait, étais, étions, fût</li>
        <li>VERB-Fin: avait, était, devait, comptait, pouvait, faisait, allait, avaient, portait, disait</li>
      </ul>
    </li>
    <li>Past
      <ul>
        <li>AUX-Fin: fut, furent, fit, eut, firent</li>
        <li>AUX-Part: été, fait, faite</li>
        <li>NOUN: Fermée, aéroportée, séquestrés</li>
        <li>VERB-Fin: prit, devint, fit, eut, donna, reçut, décida, participa, écrivit, demanda</li>
        <li>VERB-Part: né, située, situé, eu, fait, mort, connu, nommé, née, réalisé</li>
      </ul>
    </li>
    <li>Pres
      <ul>
        <li>AUX-Fin: est, a, sont, ont, ai, soit, avons, aurait, suis, fait</li>
        <li>AUX-Part: étant, ayant, faisant, Etant</li>
        <li>VERB-Fin: a, peut, fait, est, trouve, devient, doit, ont, permet, faut</li>
        <li>VERB-Part: appartenant, concernant, faisant, permettant, ayant, portant, pouvant, prenant, utilisant, visant</li>
      </ul>
    </li>
  </ul>
</li>



<h3>Pronouns, Determiners, Quantifiers</h3>

<li><a>PronType</a>
  <ul>
    <li>Art
      <ul>
        <li>DET: le, la, les, l', un, une, des, de, d', l</li>
        <li>NOUN: Fédération, Institut</li>
      </ul>
    </li>
    <li>Dem
      <ul>
        <li>DET: cette, ce, ces, cet</li>
        <li>PRON: c', ce, cela, celle, celui, ceux, celui-ci, celles, ça, celle-ci</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>PRON: quiconque</li>
      </ul>
    </li>
    <li>Int
      <ul>
        <li>PRON: Que</li>
      </ul>
    </li>
    <li>Neg
      <ul>
        <li>DET: aucun, aucune, aucunes</li>
        <li>PRON: personne</li>
      </ul>
    </li>
    <li>Prs
      <ul>
        <li>DET: son, sa, ses, leur, leurs, notre, mon, nos, ma, votre</li>
        <li>PRON: il, se, s', elle, ils, lui, nous, je, le, vous</li>
      </ul>
    </li>
    <li>Rel
      <ul>
        <li>PRON: qui, dont, où, qu', que, lequel, laquelle, lesquels, lesquelles, ou</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>NumType</a>
  <ul>
    <li>Ord
      <ul>
        <li>ADJ: XIXe, XXe, XVIIe, XVIe, XVIIIe, XIIe, XVe, XIe, XIIIe, VIe</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Poss</a>
  <ul>
    <li>Yes
      <ul>
        <li>DET: son, sa, ses, leur, leurs, notre, mon, nos, ma, votre</li>
        <li>NOUN: Citizen</li>
        <li>PRON: Your</li>
        <li>PROPN: Dumbo, Lincoln, Andrew, Barney, Benson, Devil, Schott</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Reflex</a>
  <ul>
    <li>Yes
      <ul>
        <li>PRON: lui-même, elle-même, eux-mêmes, elles-mêmes, moi-même, moi, nous-mêmes, soi-même</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Person</a>
  <ul>
    <li>1
      <ul>
        <li>AUX-Fin: ai, avons, suis, sommes, avais, avions, étais, serais, étions, aurais</li>
        <li>PRON: nous, je, j', m', me, moi, -je, -nous, -moi, I</li>
        <li>VERB-Fin: recommande, conseille, ai, trouve, vais, pense, pouvons, aime, devons, peux</li>
      </ul>
    </li>
    <li>2
      <ul>
        <li>AUX-Fin: êtes, avez, es, soyez, as, serez, seriez, ayez, fais, sois</li>
        <li>PRON: vous, -vous, tu, -tu, t', te, toi, -toi, you, tien</li>
        <li>VERB-Fin: allez, hésitez, avez, voulez, pouvez, passez, pourrez, êtes, pensez, protégés</li>
      </ul>
    </li>
    <li>3
      <ul>
        <li>AUX-Fin: est, a, sont, ont, était, fut, avait, sera, étaient, soit</li>
        <li>PRON: il, se, s', elle, on, c', en, ils, lui, ce</li>
        <li>VERB-Fin: a, peut, fait, est, devient, doit, ont, trouve, permet, faut</li>
      </ul>
    </li>
  </ul>
</li>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: être, be, fue.</li>
<li>This corpus uses 8 lemmas as auxiliaries (<a>aux</a>). Examples: avoir, être, do, will, can, be, can't, must.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: être, be.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (5)</li>
      <li>VERB--PRON (7)</li>
      <li>VERB-Fin--NOUN (4463)</li>
      <li>VERB-Fin--NOUN-ADP(de) (2)</li>
      <li>VERB-Fin--NOUN-ADP(jusque)-ADP(à) (1)</li>
      <li>VERB-Fin--PRON (6490)</li>
      <li>VERB-Fin--PRON-ADP(sur) (1)</li>
      <li>VERB-Fin--PRON-ADP(à) (1)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--PRON (3)</li>
      <li>VERB-Part--NOUN (1473)</li>
      <li>VERB-Part--NOUN-ADP(de) (1)</li>
      <li>VERB-Part--PRON (1525)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (25)</li>
      <li>VERB--PRON (13)</li>
      <li>VERB-Fin--NOUN (5302)</li>
      <li>VERB-Fin--NOUN-ADP(de) (3)</li>
      <li>VERB-Fin--NOUN-ADP(en) (4)</li>
      <li>VERB-Fin--PRON (1896)</li>
      <li>VERB-Inf--NOUN (2726)</li>
      <li>VERB-Inf--NOUN-ADP(en) (3)</li>
      <li>VERB-Inf--PRON (765)</li>
      <li>VERB-Part--NOUN (2170)</li>
      <li>VERB-Part--PRON (515)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (425)</li>
      <li>VERB-Fin--PRON-ADP(à) (2)</li>
      <li>VERB-Inf--PRON (144)</li>
      <li>VERB-Part--PRON (195)</li>
      <li>VERB-Part--PRON-ADP(à) (2)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 2 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: connaître soi-même, célébrer nous-mêmes</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 11 relation subtypes: <a>acl:relcl</a>, <a>aux:caus</a>, <a>aux:pass</a>, <a>csubj:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>iobj:agent</a>, <a>nsubj:caus</a>, <a>nsubj:pass</a>, <a>obj:agent</a>, <a>obl:agent</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a></li>
</ul>
