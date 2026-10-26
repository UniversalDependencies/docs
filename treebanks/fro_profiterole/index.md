---
layout: base
title:  'UD_Old_French-PROFITEROLE'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Old French PROFITEROLE

Language: [Old French](/fro/index.html) (code: `fro`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.2 release.

The following people have contributed to making this treebank part of UD: Sophie Prévost, Aurélie Collomb, Kim Gerdes, Isabelle Tellier, Marine Courtin, Alexei Lavrentiev, Céline Guillot-Barbance, Loïc Grobol, Mathilde Regnault, Mathieu Dehouck.

Repository: [UD_Old_French-PROFITEROLE](https://github.com/UniversalDependencies/UD_Old_French-PROFITEROLE)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfro_profiterole218)<br />
Download all treebanks: [UD 2.18](/#download)

License: CC BY-NC-SA 3.0

Genre: nonfiction, legal, poetry

Questions, comments?
General annotation questions (either Old French-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Old_French-PROFITEROLE/issues).
If you want to collaborate, please contact [sophie&nbsp;•&nbsp;prevost&nbsp;(æt)&nbsp;ens&nbsp;•&nbsp;psl&nbsp;•&nbsp;eu].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, with some manual corrections, but not a full manual verification |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | annotated manually |
| Features | assigned by a program, not checked manually |
| Relations | assigned by a program, with some manual corrections, but not a full manual verification |

## Description

UD_Old_French-PROFITEROLE is an expansion of the previous UD_Old_French-SRCMF (which was a
conversion of (part of) the SRCMF corpus (Syntactic Reference Corpus of Medieval French
[srcmf.org](http://srcmf.org/)).



UD_Old_French-PROFITEROLE includes the texts of the previous UD_Old_French-SRCMF, plus Old French
texts that were annotated in the frame of the PROFITEROLE funded project (Projet
[ANR-16-CE38-0010](https://www.lattice.cnrs.fr/projets/projets-passes/projets-anr/projet-anr-profiterole),
2017-2022, supervised by Sophie Prévost) Texts were automatically annotated with part-of-speech and
dependencies, which are currently running a process of correction. Texs will be released in UD as
they are corrected. Middle French texts that were annotated in the PROFITEROLE project are to be
found in
[UD_Middle_French-PROFITEROLE](https://github.com/UniversalDependencies/UD_Old_French-PROFITEROLE).

UD_Old_French-PROFITEROLE consists in 12 texts spanning from 9th to 13th century. It includes 19765
sentences and 227137 tokens.

Sentences are annotated with the following metadata:

- `sent_id` : a unique id for each sentence in the treebank
- `text` : the sentence
- `newdoc id` : a unique id for each of the texts. This id can be split on underscores to get back :
- name of the text
- date
- form : verse and/or prose

The following table lists the texts used in this treebank:

| ID | Name of the text | Author | Tokens | Trees |
| :---------------------------- | :--------------------- | :-----------------: | -----: | ----: |
| Strasbourg_842_prose | Serments de Strasbourg | anonymous | 131 | 3 |
| StEulalie_900_verse | Séquence de Sainte Eulalie | anonymous | 212 | 21 |
| StLegier_1000_verse | Vie de saint Léger | anonymous | 1665 | 189 |
| StAlexis_1050_verse | Vie de saint Alexis | anonymous | 5662 | 572 |
| Roland_1100_verse | Chanson de Roland | anonymous | 34803 | 3890 |
| Lapidaire_mid12_prose | Lapidaire en prose | anonymous | 5494 | 524 |
| QuatreLivresReis_late12_prose | Quatre livres des reis | anonymous | 15030 | 1509 |
| BeroulTristan_late12_verse | Tristan de Beroul | Beroul | 32596 | 3310 |
| TroyesYvain_1180_verse | Yvain de Chrestien | Chrestien de Troyes | 47964 | 3880 |
| Aucassin_early13_verse_prose | Aucassin et Nicolet | anonymous | 11639 | 1038 |
| Graal_1225_prose | Queste del Saint Graal | anonymous | 44715 | 3114 |
| ClariConstantinople_1300_prose | Conqueste de COnstantinople | Robert de Clari | 27226 | 1715 |

Total | | | 227137 | 19765 |

## Acknowledgments

UD_Old_French-PROFITEROLE results from the UD_Old_French-SRCMF as well as from the automatic
annotation (PROFITEROLE project, 2017-2022) of other Old French texts (with the SRCMF corpus being
used as a training corpus), which were/are then manually corrected along with the UD guidelines. The
contributors to the syntactic part of the PROFITEROLE project were: Prévost, Sophie; Villemonte de
la Clergerie, Eric; Regnault, Mathilde; Grobol, Loïc; Crabbé, Benoît; Dehouck, Mathieu; Lavrentiev,
Alexei.

UD_Old_French-SRCMF resulted from the conversion of (part of) the SRCMF corpus (Syntactic Reference
Corpus of Medieval French [srcmf.org](srcmf.org)). The SRCMF corpus resulted from the SRCMF project
which took place in 2008-2012, funded by the ANR (France) and the DFG (Germany), and supervised by
Sophie Prévost and Achim Stein.

The SRCMF project consisted in the manual syntactic annotation of 15 texts (251,000 tokens) from the
9th to 13th C. Part-of-speech tags were for most of them retrieved from the already existing tagging
of the texts (stemming from: Base de Français Medieval, Lyon, ENS de Lyon, IHRIM Laboratory
[http://txm.bfm-corpus.org]([http://txm.bfm-corpus.org]), and the Nouveau Corpus d'Amsterdam
[http://www.uni-stuttgart.de/lingrom/stein/corpus#nca]([http://www.uni-stuttgart.de/lingrom/stein/corpus#nca]))

The contributors to the SRCMF project were: Stein, Achim; Prévost, Sophie; Rainsford, Tom;
Mazziotta, Nicolas; Bischoff Béatrice; Glikman, Julie; Lavrentiev, Alexei; Heiden, Serge;
Guillot-Barbance, Céline; Marchello-Nizia, Christiane.

The whole SRCMF corpus (251,000 tokens) was converted into UD dependencies, but only 172,000 tokens
had undergone a significant checking.

The conversion from the original SRCMF annotation to the SRCMF-UD annotation was done automatically
both for the POS and the syntactic relations, thanks to a set of elaborated rules. Some 1,200
syntactic relations left unlabelled were then manually annotated (Sophie Prévost), and significant
spot-checking occurred, focusing on potential difficulties (e.g. conj relation).

This conversion was achieved by Aurélie Collomb, during an internship funded by lab Lattice (Paris,
CNRS, ENS & Université Sorbonne Nouvelle Paris 3, PSL & USPC), and supervised by Sophie Prévost,
Isabelle Tellier and Kim Gerdes. Marine Courtin achieved the deposit of the files, and especially
took in charge the validation of the corpus through the successive steps of the process.

A significant review of this initial release has been done on the occasion of the UD 2.6 release by
Loïc Grobol and Sophie Prévost in the frame of the [ANR PROFITEROLE
project](https://www.lattice.cnrs.fr/projets/projet-anr-profiterole) in order to improve the
compliance of the corpus to UD guidelines. This includes both automatic correction and extensive
manual corrections.

A significant import of data from the *Base de français medieval* has been done by Loïc Grobol,
Alexei Lavrentiev and Sophie Prévost on the occasion of the UD 2.9 release. Most notably, this
release adds punctuation tokens for most trees as well as around 350 new trees, consisting mostly of
averbal sentences and fixes a number of conformity bugs with the UD guidelines. See the full changes
in the [upstream repository](https://gitlab.huma-num.fr/profiterole/srcmf-ud/-/releases/v2.9.0)


# Statistics of UD Old French PROFITEROLE

## POS Tags

[ADJ](fro_profiterole-pos-ADJ.html) – [ADP](fro_profiterole-pos-ADP.html) – [ADV](fro_profiterole-pos-ADV.html) – [AUX](fro_profiterole-pos-AUX.html) – [CCONJ](fro_profiterole-pos-CCONJ.html) – [DET](fro_profiterole-pos-DET.html) – [INTJ](fro_profiterole-pos-INTJ.html) – [NOUN](fro_profiterole-pos-NOUN.html) – [NUM](fro_profiterole-pos-NUM.html) – [PRON](fro_profiterole-pos-PRON.html) – [PROPN](fro_profiterole-pos-PROPN.html) – [PUNCT](fro_profiterole-pos-PUNCT.html) – [SCONJ](fro_profiterole-pos-SCONJ.html) – [VERB](fro_profiterole-pos-VERB.html) – [X](fro_profiterole-pos-X.html)

## Features

[Definite](fro_profiterole-feat-Definite.html) – [Foreign](fro_profiterole-feat-Foreign.html) – [Morph](fro_profiterole-feat-Morph.html) – [NumType](fro_profiterole-feat-NumType.html) – [Polarity](fro_profiterole-feat-Polarity.html) – [Poss](fro_profiterole-feat-Poss.html) – [PronType](fro_profiterole-feat-PronType.html) – [Tense](fro_profiterole-feat-Tense.html) – [VerbForm](fro_profiterole-feat-VerbForm.html)

## Relations

[acl](fro_profiterole-dep-acl.html) – [acl:relcl](fro_profiterole-dep-acl-relcl.html) – [advcl](fro_profiterole-dep-advcl.html) – [advmod](fro_profiterole-dep-advmod.html) – [advmod:obl](fro_profiterole-dep-advmod-obl.html) – [amod](fro_profiterole-dep-amod.html) – [appos](fro_profiterole-dep-appos.html) – [aux](fro_profiterole-dep-aux.html) – [aux:pass](fro_profiterole-dep-aux-pass.html) – [case](fro_profiterole-dep-case.html) – [case:det](fro_profiterole-dep-case-det.html) – [cc](fro_profiterole-dep-cc.html) – [cc:nc](fro_profiterole-dep-cc-nc.html) – [ccomp](fro_profiterole-dep-ccomp.html) – [compound](fro_profiterole-dep-compound.html) – [conj](fro_profiterole-dep-conj.html) – [cop](fro_profiterole-dep-cop.html) – [csubj](fro_profiterole-dep-csubj.html) – [csubj:pass](fro_profiterole-dep-csubj-pass.html) – [dep](fro_profiterole-dep-dep.html) – [det](fro_profiterole-dep-det.html) – [discourse](fro_profiterole-dep-discourse.html) – [dislocated](fro_profiterole-dep-dislocated.html) – [expl](fro_profiterole-dep-expl.html) – [expl:pass](fro_profiterole-dep-expl-pass.html) – [fixed](fro_profiterole-dep-fixed.html) – [flat](fro_profiterole-dep-flat.html) – [flat:name](fro_profiterole-dep-flat-name.html) – [iobj](fro_profiterole-dep-iobj.html) – [mark](fro_profiterole-dep-mark.html) – [mark:advmod](fro_profiterole-dep-mark-advmod.html) – [nmod](fro_profiterole-dep-nmod.html) – [nsubj](fro_profiterole-dep-nsubj.html) – [nsubj:advmod](fro_profiterole-dep-nsubj-advmod.html) – [nsubj:obj](fro_profiterole-dep-nsubj-obj.html) – [nsubj:outer](fro_profiterole-dep-nsubj-outer.html) – [nsubj:pass](fro_profiterole-dep-nsubj-pass.html) – [nummod](fro_profiterole-dep-nummod.html) – [obj](fro_profiterole-dep-obj.html) – [obj:advmod](fro_profiterole-dep-obj-advmod.html) – [obj:advneg](fro_profiterole-dep-obj-advneg.html) – [obj:obl](fro_profiterole-dep-obj-obl.html) – [obl](fro_profiterole-dep-obl.html) – [obl:agent](fro_profiterole-dep-obl-agent.html) – [obl:arg](fro_profiterole-dep-obl-arg.html) – [obl:mod](fro_profiterole-dep-obl-mod.html) – [orphan](fro_profiterole-dep-orphan.html) – [parataxis](fro_profiterole-dep-parataxis.html) – [punct](fro_profiterole-dep-punct.html) – [root](fro_profiterole-dep-root.html) – [vocative](fro_profiterole-dep-vocative.html) – [xcomp](fro_profiterole-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 20350 sentences, 237750 tokens and 240335 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 33501 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 157 types of words that contain both letters and punctuation. Examples: l', qu', s', n', d', m', .i., t', c', j', jusqu', .ii., l'en, entr', .iiii., .iii., g', q', .xx., .xii., .c., .vii., ch', ensembl', un', ·l, quanqu', .v., .xxx., c., tresqu', .x., k', .c.m., entresqu', .xv., .l., .vi., .xxiiii., .ix., josqu', .viii., an.ii., cest', ·s, .XL., .iiij.m., .lx., .xxxvi.m., jesqu'</li>
</ul>

<ul>
<li>This corpus contains 2585 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 22 types of multi-word tokens. Examples: au, des, as, del, el, al, du, dou, es, ou, u, aus, dels, als, jel, nel, ás, ell, eu, nes, os, ál.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PART, SYM</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 167 lemmas tagged as pronouns (PRON): @card@, _, _mot_nombre, alquant, ambedeux, ambore, aucun, auquant, autel, autre, autrui, cant, cantque, cart, ce, ce1, ce2, cel, cent, cest, chacun, chascun, cil, cinq, cinquante, cist, coi, cui, deux, disme, dix, donc, dont, douze, dîme, el, el1, elle, elle1, en, en2, eux, huit, huitième, ice, icel, il, je, je+le, je.en2, je.le, le, lequel, leur1, leur2, li, lor, lui, maint, me, mien, mille1, moi, mon1, moult, même, ne+le, ne1.le, ne1.les, ne1.me, ne1.se1, ne1.te, neuf2, neuvième, nos, nostre, notre, nous, nul, néant, nïent, o4, ol1, on, où, où.le, petit, peu, plusieurs, poi, premerain, premier, premier1, quanque, quant, quarante, quart, quatre, que, que+il, que.le, que.me, que.se, que.se1, que_que, quel, queux1, qui, qui1, qui1.en2, qui1.le, qui1.se1, quint, quinze, quoi, riant, rien, se1, sept, septième, sexte, si, si+il, si3.le, si3.me, si4, si4.en2, si4.le, si4.me, si4.te, sien, six, soi, soixante, son4, suen, tant, te, tel, tien, tierce, tiers, toi, tot, tous, tout, tout1, tout2, treizième, trente, trestot, trois, trèstous, trèstout, tu, tu.me, tuen, un, vingt, voloir, vos, vostre, votre, vous, y2, ça, çà</li>
</ul>

<ul>
<li>This corpus contains 65 lemmas tagged as determiners (DET): @card@, ADJ, _, alquant, aucun, autre, ce, ce1, ce2, cel, cest, chacun, chascun, cil, cinquante, cist, divers, es, icest, il, itel, le, lequel, leur2, li, lor, maint, mi1, mien, mon, mon1, moult, nostre, notre, nul, plusieurs, plusor, premier, quel, quelque, sien, son, son4, souvent, suen, tant, tel, tien, tierz, ton, ton2, tot, tous, tout, tout2, trestot, trèstous, trèstout, un, uns, vingt-quatre, vos, vostre, votre, à.le</li>
</ul>

<ul>
<li>Out of the above, 48 lemmas occurred sometimes as PRON and sometimes as DET: @card@, _, alquant, aucun, autre, ce, ce1, ce2, cel, cest, chacun, chascun, cil, cinquante, cist, il, le, lequel, leur2, li, lor, maint, mien, mon1, moult, nostre, notre, nul, plusieurs, premier, quel, sien, son4, suen, tant, tel, tien, tot, tous, tout, tout2, trestot, trèstous, trèstout, un, vos, vostre, votre</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as auxiliaries (AUX): _, avoir, devoir, estre, pouvoir, pöoir, restre, savoir, souloir, voloir</li>
</ul>

<ul>
<li>Out of the above, 9 lemmas occurred sometimes as AUX and sometimes as VERB: _, avoir, devoir, estre, pouvoir, pöoir, restre, savoir, souloir</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: est, fu, a, estoit, avoit, ad, furent, ai, sont, ert</li>
    <li>VERB: dist, fist, fet, est, fait, a, avoit, vint, ad, ot</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: estre, avoir, estra, aveir, estr', iestre</li>
    <li>NOUN: avoir, estre, pooir, saveir, voloir, mangier, plesir, departir, penser, savoir</li>
    <li>VERB: aler, dire, faire, venir, parler, avoir, prendre, veoir, estre, fere</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: dolanz, clére, cuintes, demenies, enceinte, barbee, dolantes, hardiz, quarré</li>
    <li>AUX: esté, estet, fais</li>
    <li>NOUN: amant, mesfait, dormanz, esliz, junie, mort, sacrefises, senblant, morz, Conplainz</li>
    <li>VERB: fait, dit, mis, mort, fet, venuz, pris, morz, prise, oï</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>







<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADP: del, au, al, dou, ou, Des, an, le</li>
      <li>AUX: es</li>
      <li>DET: le, li, la, les, l', lo, lu, lé, lí, lis</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, une, .i., uns, unes, un', úne, u·, ún, U</li>
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
      <li>ADV: ne, n', mie, pas, non, point, nen, nun, nes, nient</li>
      <li>CCONJ: n'</li>
      <li>PRON: nel, nes, nu, nen, nul</li>
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
      <li>ADJ: hardi, hardiz, barbee, quarré</li>
      <li>ADJ-Part: barbee, hardiz, quarré</li>
      <li>AUX: esté, este, éste, estet, fais</li>
      <li>AUX-Part: esté, estet, fais</li>
      <li>NOUN-Part: morz, Seignurs, adubez, asolue, comandet, guariz, loee, maufé, parjurez, pechét</li>
      <li>VERB: fait, dit, mis, mort, venuz, fet, pris, morz, prise, oï</li>
      <li>VERB-Part: fait, dit, mis, mort, fet, venuz, pris, morz, prise, oï</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: dolanz, dolantes</li>
      <li>VERB: querant, curant, plorant, recreant, fuiant, parlant, recreanz, trenchant, veant, curanz</li>
      <li>VERB-Part: querant, curant, plorant, fuiant, parlant, recreant, recreanz, trenchant, veant, curanz</li>
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
      <li>ADP: del, des, au, al, dou, ou, an, le</li>
      <li>AUX: es</li>
      <li>DET: le, li, la, les, l', un, une, .i., uns, unes</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADP: Ches, an, en</li>
      <li>ADV: en, i, an, í, em, u, o, ent, enn, ·n</li>
      <li>DET: ceste, cest, cele, cel, ces, ches, cil, chele, cez, cist</li>
      <li>PRON: ce, cil, ço, chou, çó, chil, celui, che, cele, cels</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: tel, autre, autres, meïsmes, altre, tex, tele, nule, meïsme, meesme</li>
      <li>ADV: tout, tot, tut, tant, tous, po, alques, toute, tuit, Tel</li>
      <li>DET: toz, tel, nule, nul, tote, tout, autre, tuit, tot, toutes</li>
      <li>PRON: on, autre, tuit, nus, rien, uns, autres, un, l'en, en</li>
      <li>SCONJ: quant, que</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: cum, comant, purquei, con, coment, que, Cument, porqoi, ou, conment</li>
      <li>DET: quel, qel, quels, quele, Qanz, itels, quex</li>
      <li>PRON: que, qui, coi, ou, qu', quoi, quei, ki, liquels, q'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADV: nen, s', la, ne, sil, nel</li>
      <li>DET: les, l', le, li, me, la, lor</li>
      <li>PRON: il, li, vos, s', le, l', je, se, ele, lui</li>
      <li>SCONJ: s', se</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs,Rel
    <ul>
      <li>ADP: ou</li>
      <li>ADV: Don</li>
      <li>CCONJ: que, c', Ou, U, qu'</li>
      <li>DET: laquele</li>
      <li>PRON: qui, ki, que, qu', ou, cui, dunt, don, u, dont</li>
      <li>SCONJ: que, qu', q', c', k'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: Dun, dont, que, u</li>
      <li>CCONJ: ou</li>
      <li>DET: quel, quele, quelque, quiex, qel, quels, qual, quex, laquele, ques</li>
      <li>PRON: qui, que, qu', ou, donc, quoi, dont, dom, ki, cui</li>
      <li>SCONJ: que, qu', queque, quanque, Quequ', ke</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADJ: premereins, dui, .iii., .vii., ambesdous, anbedui, premer, premerein, troi</li>
      <li>DET: .I., .XXIIII., .l., ambdui</li>
      <li>NUM: deus, .ii., trois, quatre, dous, cent, dis, dui, set, .iiii.</li>
      <li>PRON: milie, trois, dui, andui, .ii., deus, troi, un, uns, quatre</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: premiers, premiere, premier, quarte, tierche, premeraine, premeraines, primiers, tier, tierz</li>
      <li>DET: tierz, premiere</li>
      <li>NUM: tierce</li>
      <li>PRON: tierz, quarte, terce, disme, quarz, sedme, noefme, premere, quart, quinte</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: mien, vostre, suen, sue, men, nostre, meie, moie, soe, miens</li>
      <li>DET: sa, son, ses, sun, vostre, nostre, lor, ma, mon, mes</li>
      <li>PRON: suen, mien, suens, siens, noz, sien, vostre, leur, lur, soe</li>
    </ul>
  </li>
</ul>






<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADP: in, en</li>
          <li>ADV: illo</li>
          <li>NOUN: corpus, domini, damno, verbe</li>
          <li>X: Explycit</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Morph</a>
    <ul>
      <li>VFin
        <ul>
          <li>ADJ: asuage</li>
          <li>ADP: a, ad</li>
          <li>ADV: oi</li>
          <li>CCONJ: Et</li>
          <li>INTJ: Os</li>
          <li>NOUN: acorde, aiüe, chastie, curt, dreit, duinst, esrages, estencele, façon, freint</li>
          <li>PROPN: cuntredie</li>
        </ul>
      </li>
      <li>VInf
        <ul>
          <li>ADJ: droiturier, ácustumiers</li>
        </ul>
      </li>
      <li>VPar
        <ul>
          <li>ADP: voiant, oiant</li>
          <li>ADV: errant</li>
          <li>PROPN: Flurit, Perdut, Sevree</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: estre, _, restre.</li>
</ul>

<ul>
<li>This corpus uses 8 lemmas as auxiliaries (<a>aux</a>). Examples: _, avoir, estre, pouvoir, devoir, pöoir, souloir, savoir.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: estre, _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (47)</li>
      <li>VERB--PRON (71)</li>
      <li>VERB-Fin--NOUN (3484)</li>
      <li>VERB-Fin--NOUN-ADP(_) (1)</li>
      <li>VERB-Fin--NOUN-ADP(de) (1)</li>
      <li>VERB-Fin--NOUN-ADP(fors) (1)</li>
      <li>VERB-Fin--PRON (8740)</li>
      <li>VERB-Fin--PRON-ADP(_) (2)</li>
      <li>VERB-Fin--PRON-ADP(de) (1)</li>
      <li>VERB-Fin--PRON-ADP(pour) (1)</li>
      <li>VERB-Inf--NOUN (139)</li>
      <li>VERB-Inf--PRON (653)</li>
      <li>VERB-Part--NOUN (681)</li>
      <li>VERB-Part--NOUN-ADP(_) (1)</li>
      <li>VERB-Part--PRON (1515)</li>
      <li>VERB-Part--PRON-ADP(de) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (75)</li>
      <li>VERB--PRON (62)</li>
      <li>VERB-Fin--NOUN (5349)</li>
      <li>VERB-Fin--NOUN-ADP(_) (69)</li>
      <li>VERB-Fin--NOUN-ADP(dalez) (1)</li>
      <li>VERB-Fin--NOUN-ADP(de) (46)</li>
      <li>VERB-Fin--NOUN-ADP(en) (1)</li>
      <li>VERB-Fin--NOUN-ADP(en1) (1)</li>
      <li>VERB-Fin--NOUN-ADP(par) (1)</li>
      <li>VERB-Fin--PRON (5086)</li>
      <li>VERB-Fin--PRON-ADP(_) (9)</li>
      <li>VERB-Fin--PRON-ADP(de) (5)</li>
      <li>VERB-Fin--PRON-ADP(por) (1)</li>
      <li>VERB-Inf--NOUN (1042)</li>
      <li>VERB-Inf--NOUN-ADP(_) (16)</li>
      <li>VERB-Inf--NOUN-ADP(de) (8)</li>
      <li>VERB-Inf--NOUN-ADP(en) (1)</li>
      <li>VERB-Inf--NOUN-ADP(en1) (1)</li>
      <li>VERB-Inf--NOUN-ADP(pour) (1)</li>
      <li>VERB-Inf--NOUN-ADP(à) (1)</li>
      <li>VERB-Inf--PRON (947)</li>
      <li>VERB-Inf--PRON-ADP(_) (5)</li>
      <li>VERB-Inf--PRON-ADP(de) (1)</li>
      <li>VERB-Inf--PRON-ADP(por) (1)</li>
      <li>VERB-Part--NOUN (774)</li>
      <li>VERB-Part--NOUN-ADP(_) (17)</li>
      <li>VERB-Part--NOUN-ADP(de) (9)</li>
      <li>VERB-Part--NOUN-ADP(fors) (1)</li>
      <li>VERB-Part--PRON (965)</li>
      <li>VERB-Part--PRON-ADP(_) (3)</li>
      <li>VERB-Part--PRON-ADP(de) (1)</li>
      <li>VERB-Part--PRON-ADP(por) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (19)</li>
      <li>VERB--PRON-ADP(_) (1)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-ADP(de) (1)</li>
      <li>VERB-Fin--NOUN-ADP(en1) (1)</li>
      <li>VERB-Fin--PRON (2514)</li>
      <li>VERB-Fin--PRON-ADP(_) (11)</li>
      <li>VERB-Fin--PRON-ADP(dalez) (1)</li>
      <li>VERB-Fin--PRON-ADP(de) (3)</li>
      <li>VERB-Fin--PRON-ADP(devant) (2)</li>
      <li>VERB-Fin--PRON-ADP(encontre2) (1)</li>
      <li>VERB-Fin--PRON-ADP(entre) (1)</li>
      <li>VERB-Fin--PRON-ADP(vers) (1)</li>
      <li>VERB-Fin--PRON-ADP(à) (2)</li>
      <li>VERB-Inf--PRON (228)</li>
      <li>VERB-Inf--PRON-ADP(_) (2)</li>
      <li>VERB-Inf--PRON-ADP(à) (1)</li>
      <li>VERB-Part--PRON (443)</li>
      <li>VERB-Part--PRON-ADP(_) (1)</li>
      <li>VERB-Part--PRON-ADP(de) (1)</li>
      <li>VERB-Part--PRON-ADP(par) (1)</li>
    </ul>
  </li>
</ul>


<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 4 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: _ il, démontrer il, parler il, réprouver1 il</li>
</ul>


<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 19 relation subtypes: <a>acl:relcl</a>, <a>advmod:obl</a>, <a>aux:pass</a>, <a>case:det</a>, <a>cc:nc</a>, <a>csubj:pass</a>, <a>expl:pass</a>, <a>flat:name</a>, <a>mark:advmod</a>, <a>nsubj:advmod</a>, <a>nsubj:obj</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obj:advmod</a>, <a>obj:advneg</a>, <a>obj:obl</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:mod</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
