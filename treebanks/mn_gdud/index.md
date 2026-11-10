---
layout: base
title:  'UD_Mongolian-GDUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Mongolian GDUD

Language: [Mongolian](/mn/index.html) (code: `mn`)<br/>
Family: Mongolic

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Wenchao Li, Haitao Liu.

Repository: [UD_Mongolian-GDUD](https://github.com/UniversalDependencies/UD_Mongolian-GDUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udmn_gdud219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Mongolian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Mongolian-GDUD/issues).
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

UD_Mongolian-GDUD is a treebank of Khalkha Mongolian, the standard variety of Mongolian, based on grammatical example sentences derived from a reference grammar.



The Mongolian GDUD (Grammar-Derived Universal Dependencies) treebank contains 88 sentences of Khalkha Mongolian (ISO 639-3: khk), the standard variety of Mongolian spoken primarily in Mongolia. The data consist of grammatical example sentences drawn from a reference grammar of Mongolian, presented in Latin transliteration and accompanied by English translations.

All sentences are manually annotated with lemmas, universal part-of-speech tags (UPOS), morphological features, and dependency relations, following the Universal Dependencies (UD) guidelines. The annotation prioritizes UD core morphological features and dependency relations. A small number of language-specific dependency subtypes are used to capture distinctions that are syntactically overt in Khalkha Mongolian. In addition, some Mongolian-specific morphological information that does not correspond to any feature in the universal inventory (namely certain aspectual distinctions such as the successive aspect, the quotative particle type, and modality marking) is encoded in the MISC column, in accordance with UD conventions for annotations that are not part of the universal feature inventory.

## Data split

Because the treebank is small (well below the 20K-word threshold), all sentences are provided as test data. Users who wish to train models on it should perform cross-validation.

## Morphological annotation

All UD core features used in the treebank take standard universal values. The features attested in the treebank include: Aspect, Case, Degree, Evident, Mood, NumType, Number, PartType, Person, Polarity, Poss, PronType, Reflex, Tense, VerbForm, and Voice.

The following Mongolian-specific morphological information is encoded in the MISC column rather than FEATS, as it does not correspond to any value in the universal feature inventory:

* `Aspect=Succ` — the successive aspect (marking sequential events)
* `PartType=Quot` — the quotative particle type
* `Modality=Yes` — modal marking on certain finite verb forms

Auxiliary verbs `baj` (progressive/existential) and `bol` (change of state) are analyzed as auxiliaries and tagged AUX.

## Dependency annotation

UD core relations are used throughout the treebank. The following language-specific dependency subtypes are used:

* `acl:relcl` — relative clause modifier
* `nmod:poss` — possessive nominal modifier
* `nsubj:pass` — passive nominal subject
* `obl:agent` — agent of a passive construction

The relation `nsubj:outer` is used in one case where a clause acts as the predicate of another clause.

## Acknowledgments

The Mongolian GDUD treebank was created by Wenchao Li and Haitao Liu, based on grammatical example sentences from a reference grammar of Khalkha Mongolian. The annotation of lemmas, part-of-speech tags, morphological features, and dependency relations was carried out manually following the Universal Dependencies guidelines.

We are especially grateful to Daniel Zeman for his guidance in setting up the treebank repository and for his help with the Universal Dependencies workflow. We also thank the Universal Dependencies community for their support during the preparation and release of this treebank.


# Statistics of UD Mongolian GDUD

## POS Tags

[ADJ](mn_gdud-pos-ADJ.html) – [ADP](mn_gdud-pos-ADP.html) – [ADV](mn_gdud-pos-ADV.html) – [AUX](mn_gdud-pos-AUX.html) – [DET](mn_gdud-pos-DET.html) – [NOUN](mn_gdud-pos-NOUN.html) – [NUM](mn_gdud-pos-NUM.html) – [PART](mn_gdud-pos-PART.html) – [PRON](mn_gdud-pos-PRON.html) – [PROPN](mn_gdud-pos-PROPN.html) – [PUNCT](mn_gdud-pos-PUNCT.html) – [SCONJ](mn_gdud-pos-SCONJ.html) – [VERB](mn_gdud-pos-VERB.html)

## Features

[Aspect](mn_gdud-feat-Aspect.html) – [Case](mn_gdud-feat-Case.html) – [Degree](mn_gdud-feat-Degree.html) – [Evident](mn_gdud-feat-Evident.html) – [Mood](mn_gdud-feat-Mood.html) – [Number](mn_gdud-feat-Number.html) – [NumType](mn_gdud-feat-NumType.html) – [PartType](mn_gdud-feat-PartType.html) – [Person](mn_gdud-feat-Person.html) – [Polarity](mn_gdud-feat-Polarity.html) – [Poss](mn_gdud-feat-Poss.html) – [PronType](mn_gdud-feat-PronType.html) – [Reflex](mn_gdud-feat-Reflex.html) – [Tense](mn_gdud-feat-Tense.html) – [VerbForm](mn_gdud-feat-VerbForm.html) – [Voice](mn_gdud-feat-Voice.html)

## Relations

[acl](mn_gdud-dep-acl.html) – [acl:relcl](mn_gdud-dep-acl-relcl.html) – [advcl](mn_gdud-dep-advcl.html) – [advmod](mn_gdud-dep-advmod.html) – [amod](mn_gdud-dep-amod.html) – [aux](mn_gdud-dep-aux.html) – [case](mn_gdud-dep-case.html) – [ccomp](mn_gdud-dep-ccomp.html) – [compound](mn_gdud-dep-compound.html) – [csubj](mn_gdud-dep-csubj.html) – [csubj:outer](mn_gdud-dep-csubj-outer.html) – [det](mn_gdud-dep-det.html) – [discourse](mn_gdud-dep-discourse.html) – [iobj](mn_gdud-dep-iobj.html) – [mark](mn_gdud-dep-mark.html) – [nmod](mn_gdud-dep-nmod.html) – [nmod:poss](mn_gdud-dep-nmod-poss.html) – [nsubj](mn_gdud-dep-nsubj.html) – [nsubj:pass](mn_gdud-dep-nsubj-pass.html) – [nummod](mn_gdud-dep-nummod.html) – [obj](mn_gdud-dep-obj.html) – [obl](mn_gdud-dep-obl.html) – [obl:agent](mn_gdud-dep-obl-agent.html) – [punct](mn_gdud-dep-punct.html) – [root](mn_gdud-dep-root.html) – [xcomp](mn_gdud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 88 sentences and 472 tokens.</li>
</ul>

<ul>
<li>This corpus contains 67 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 170 types of words that contain both letters and punctuation. Examples: nɔm-ig, ge-j, med-ne, mit-an, n', nom-oo, nom-ïg, oxin-d, patʰ-ar, Bat-aar, aw-an, aw-san, aw-səŋ, ax-thai, bai-na, baj-na, baj-san, it-uɮ-sən, jaw-uɮ-sən, mart-san, marth-səŋ, nee-sən, og-san, og-səŋ, sawx-ar, uʊ-san, xaалзg-ig, xiŋ-t, ög-sön, čix-eer-ee, Dorji-d, Dulmaa-g, Ger-t-ee, Itgelt-ijn-d, Mongol-d, Zaan-d, aaw-ij=čin, asuu-laa, asəg-čʰəx-səŋ, aw-aad, aw-at, aw-bal, aw-pəɮ, aw-x-u, aw-x=gui, aw-čhəx-ən, ačəlza-č, aɮ-əgt-čhəx=če, bai-gaa-g, bai-x-d-aa</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 13 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: CCONJ, INTJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 6 word types tagged as particles (PART): =pe, biš, jumsan, l, uu, üü</li>
</ul>

<ul>
<li>This corpus contains 16 lemmas tagged as pronouns (PRON): bi, bügd, ci, juʊ, mini, n', namaig, nögöö, pii, ter, tüün, tʰir, xiŋ, čhamaig, čhii, čhini</li>
</ul>

<ul>
<li>This corpus contains 6 lemmas tagged as determiners (DET): bur, ene, in, nögöö, ter, önöö</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: nögöö, ter</li>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as auxiliaries (AUX): baj, bol</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: bol</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>AUX: pai-gat</li>
    <li>VERB: ge-j, aw-aad, aw-at, aw-bal, ačəlza-č, gatal-snaa, ir-tel, irg-ač, jaw-č, suu-j</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: pɔɮ</li>
    <li>VERB: med-ne, aw-an, aw-san, bai-na, mart-san, ög-sön, asuu-laa, aw-pəɮ, aw-čhəx-ən, aɮ-əgt-čhəx=če</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: bai-x-d-aa, bai-xa-d, id-ex, ire-x-iig, unta-x, yadra-x-aas-aa</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: pai-g-ig, pai-x-at, pai-x-t-a</li>
    <li>VERB: aw-səŋ, it-uɮ-sən, jaw-uɮ-sən, marth-səŋ, nee-sən, og-san, og-səŋ, uʊ-san, asəg-čʰəx-səŋ, aw-x-u</li>
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
      <li>NOUN: soyoo, paišəŋ-as-a, soyoo-toi, üg-s-ijg</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: aaw-ij=čin, šut-ig=čin</li>
      <li>PRON: pii, bi, Ter, ci, čhii, čhini, tʰir, čhamaig, cam-aig, mini</li>
      <li>PROPN: Itgelt-ijn-d</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>NOUN: mʊʊr-as, paišəŋ-as-a</li>
      <li>NUM: neg-ees, xojor-oos-oo</li>
      <li>PRON: tüün-ees</li>
      <li>PROPN: xjatht-as</li>
      <li>VERB-Inf: yadra-x-aas-aa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>AUX-Part: pai-g-ig</li>
      <li>NOUN: nɔm-ig, zaxia, nom, nom-ïg, nɔm, gol, xaалзg-ig, nom-oo, alim, beleg</li>
      <li>PRON: čhamaig, cam-aig, juʊ, namaig</li>
      <li>PROPN: Dulmaa-g, naraa-g, patʰ-ig</li>
      <li>VERB-Inf: ire-x-iig</li>
      <li>VERB-Part: bai-gaa-g, bic-sn-iig, ir-x-ig, pičh-sn-e</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>NOUN: ax-thai, owčh-the, üjlčlüülegčj-tei-gee</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>AUX-Part: pai-x-at, pai-x-t-a</li>
      <li>NOUN: oxin-d, Zaan-d, delgüür-t, oxjan-t, shuudan-d, tikgur-th, čʰolɢon-t, šuudan-t, ɔxjən-t, Ger-t-ee</li>
      <li>PRON: xiŋ-t, nögöö-d</li>
      <li>PROPN: Dorji-d, Mongol-d, mɔŋɢol-t, mɔŋɢəɮ-t, path-ət, patʰ-at, torč-at, Itgelt-ijn-d</li>
      <li>VERB-Conv: nee-xe-d</li>
      <li>VERB-Inf: bai-x-d-aa, bai-xa-d</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>DET: bur-in</li>
      <li>NOUN: oxjn-i, aaw-ij=čin</li>
      <li>PRON: čhini, mini</li>
      <li>PROPN: naraa-gin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>NOUN: sawx-ar, pompg-or, sawx-aar, uulz-ar, čix-eer-ee</li>
      <li>PROPN: patʰ-ar, Bat-aar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>NOUN: xuu, oxjən, alʒom, us, xüü, mɔrj, tuu, Shöl, Zaan, aaw</li>
      <li>PRON: pii, bi, Ter, ci, čhii, tʰir, Bügd, xiŋ</li>
      <li>PROPN: Bat, path, Erdene, patʰ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ter
    <ul>
      <li>VERB-Part: ir-thəɮ</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: thɔm, tom, xüiten, gojo, tʰom, xeregtei, xetsüü, xichuu, xuitʰən</li>
      <li>ADV: ix</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: xamgj-iŋ</li>
      <li>ADV: xamgijn</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADJ: zav-güj</li>
      <li>PART: biš</li>
      <li>VERB-Fin: uulz-a=gui, uulz-sən=gui</li>
      <li>VERB-Part: aw-x=gui, cɔgs-əx=gui, duusa-x-güj</li>
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
      <li>VERB: gar-ga-dag, it-təg, oms-tag</li>
      <li>VERB-Fin: it-təg</li>
      <li>VERB-Part: oms-tag</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Conv: zara-gda-ž</li>
      <li>VERB-Fin: med-ne, bai-na, unsh-na, xülee-ne</li>
      <li>VERB-Part: bai-gaa-g</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX: baj-san</li>
      <li>VERB: aw-san, mart-san, ög-sön, aw-čhəx-ən, aɮ-əgt-čhəx=če, bic-sen, bic-sn-ee, bic-sn-iig, bic.üül-sen, bol-son</li>
      <li>VERB-Conv: sons-ood, xar-iad</li>
      <li>VERB-Fin: aw-san, mart-san, ög-sön, aw-čhəx-ən, aɮ-əgt-čhəx=če, bic.üül-sen, it-čhəx-səŋ, xar-san, xel-sen, yaw-san</li>
      <li>VERB-Part: bic-sen, bic-sn-ee, bic-sn-iig</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>VERB-Conv: bici-j, unshi-j</li>
      <li>VERB-Fin: bai-na, baina</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>VERB-Fin: aw-pəɮ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: baj-na, pai-ga, pɔɮ</li>
      <li>AUX-Fin: pɔɮ</li>
      <li>VERB: med-ne, aw-an, aw-san, bai-na, mart-san, ög-sön, asuu-laa, aw-čhəx-ən, aɮ-əgt-čhəx=če, baina</li>
      <li>VERB-Fin: med-ne, aw-an, aw-san, bai-na, mart-san, ög-sön, asuu-laa, aw-čhəx-ən, aɮ-əgt-čhəx=če, baina</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>VERB-Fin: bol-čix-son, ø</li>
      <li>VERB-Part: aw-x-u</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB-Conv: nee-xe-d</li>
      <li>VERB-Fin: aw-an</li>
      <li>VERB-Inf: bai-x-d-aa, bai-xa-d, id-ex, ire-x-iig, unta-x, yadra-x-aas-aa</li>
      <li>VERB-Part: biči-x, duusa-x-güj, uulza-x</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: baj-san</li>
      <li>VERB: aw-san, aw-səŋ, it-uɮ-sən, jaw-uɮ-sən, mart-san, marth-səŋ, nee-sən, og-san, og-səŋ, uʊ-san</li>
      <li>VERB-Fin: aw-san, mart-san, ög-sön, asuu-laa, aɮ-əgt-čhəx=če, bic.üül-sen, bol-čix-son, it-čhəx-səŋ, or-ɮo, uulz-sən=gui</li>
      <li>VERB-Part: aw-səŋ, it-uɮ-sən, jaw-uɮ-sən, marth-səŋ, nee-sən, og-san, og-səŋ, uʊ-san, asəg-čʰəx-səŋ, bič-sen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: baj-na, pai-ga, pai-x-at, pai-x-t-a</li>
      <li>AUX-Part: pai-x-at, pai-x-t-a</li>
      <li>VERB: mit-an, med-ne, bai-na, aw-x-u, aw-x=gui, aw-čhəx-ən, baina, cɔgs-əx=gui, gar-ga-dag, ir-x-ig</li>
      <li>VERB-Fin: med-ne, bai-na, aw-čhəx-ən, baina, mit-an, unsh-na, uulz-a=gui, xuɮe-n, xülee-ne, ø</li>
      <li>VERB-Part: aw-x-u, aw-x=gui, cɔgs-əx=gui, ir-x-ig, it-əx, og-ox, thɔgɮ-əx-ɔ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB: it-uɮ-sən, jaw-uɮ-sən, bic.üül-sen, gar-ga-dag, og-uɮ-sən, un-ga-gat, xojšl-uul-žee, ög.üül-sen</li>
      <li>VERB-Conv: un-ga-gat</li>
      <li>VERB-Fin: bic.üül-sen, ög.üül-sen</li>
      <li>VERB-Part: it-uɮ-sən, jaw-uɮ-sən, og-uɮ-sən</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Conv: zara-gda-ž</li>
      <li>VERB-Fin: aɮ-əgt-čhəx=če</li>
      <li>VERB-Part: nee-gt-sən, nee-səŋ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Evident</a></li>
</ul>

<ul>
  <li>Fh
    <ul>
      <li>VERB: or-ɮo, xojšl-uul-žee</li>
      <li>VERB-Fin: or-ɮo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nfh
    <ul>
      <li>VERB-Fin: aɮ-əgt-čhəx=če</li>
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
      <li>DET: nögöö, ene, in, Ter, teri, önöö, bur-in</li>
      <li>PRON: nögöö-d</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: xiŋ-t, juʊ, xiŋ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: pii, bi, Ter, ci, n', čhii, čhini, tʰir, čhamaig, cam-aig</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>PRON: Bügd</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: xoyor, neg, torw-əŋ, neg-ees, xojor-oos-oo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: nigtuger</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>NOUN: aaw-ij=čin, soyoo-toi, šut-ig=čin</li>
      <li>PRON: n'</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>AUX-Part: pai-x-t-a</li>
      <li>NOUN: nom-oo, čix-eer-ee, Ger-t-ee, paišəŋ-as-a, uulzalt-aa, üjlčlüülegčj-tei-gee, ʒiir-e</li>
      <li>NUM: xojor-oos-oo</li>
      <li>VERB-Inf: bai-x-d-aa, yadra-x-aas-aa</li>
      <li>VERB-Part: bic-sn-ee, pičh-sn-e, thɔgɮ-əx-ɔ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: pii, bi, mini, namaig</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>NOUN: aaw-ij=čin, šut-ig=čin</li>
      <li>PRON: ci, čhii, čhini, čhamaig, cam-aig</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: Ter, n', tʰir, tüün-ees</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>PartType</a>
    <ul>
      <li>Int
        <ul>
          <li>PART: uu, üü</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus does not contain copulas.</li>
</ul>

<ul>
<li>This corpus uses 2 lemmas as auxiliaries (<a>aux</a>). Examples: baj, bol.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--PRON-Nom (4)</li>
      <li>VERB-Conv--NOUN-Gen (1)</li>
      <li>VERB-Conv--NOUN-Nom (1)</li>
      <li>VERB-Conv--PRON-Acc (1)</li>
      <li>VERB-Conv--PRON-Nom (1)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Nom (7)</li>
      <li>VERB-Fin--PRON-Nom (21)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN-Gen (1)</li>
      <li>VERB-Part--NOUN-Nom (9)</li>
      <li>VERB-Part--PRON-Nom (14)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (3)</li>
      <li>VERB-Conv--NOUN-Acc (8)</li>
      <li>VERB-Fin--NOUN-Acc (10)</li>
      <li>VERB-Fin--NOUN-Nom (1)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Part--NOUN (2)</li>
      <li>VERB-Part--NOUN-Acc (22)</li>
      <li>VERB-Part--NOUN-Nom (4)</li>
      <li>VERB-Part--PRON-Acc (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Part--NOUN-Dat (2)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Dat (2)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 4 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: asəg ʒiir-e, duus nom-oo, unši nom-oo, ög nom-oo</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>csubj:outer</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 16 relation types are not used in this corpus at all: <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>cop</a>, <a>appos</a>, <a>clf</a>, <a>conj</a>, <a>cc</a>, <a>fixed</a>, <a>flat</a>, <a>list</a>, <a>parataxis</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
