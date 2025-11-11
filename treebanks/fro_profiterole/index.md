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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfro_profiterole217)<br />
Download all treebanks: [UD 2.17](/#download)

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
| Lemmas | not available |
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



## Relations

[acl](fro_profiterole-dep-acl.html) – [acl:relcl](fro_profiterole-dep-acl-relcl.html) – [advcl](fro_profiterole-dep-advcl.html) – [advmod](fro_profiterole-dep-advmod.html) – [advmod:obl](fro_profiterole-dep-advmod-obl.html) – [amod](fro_profiterole-dep-amod.html) – [appos](fro_profiterole-dep-appos.html) – [aux](fro_profiterole-dep-aux.html) – [aux:pass](fro_profiterole-dep-aux-pass.html) – [case](fro_profiterole-dep-case.html) – [case:det](fro_profiterole-dep-case-det.html) – [cc](fro_profiterole-dep-cc.html) – [cc:nc](fro_profiterole-dep-cc-nc.html) – [ccomp](fro_profiterole-dep-ccomp.html) – [compound](fro_profiterole-dep-compound.html) – [conj](fro_profiterole-dep-conj.html) – [cop](fro_profiterole-dep-cop.html) – [csubj](fro_profiterole-dep-csubj.html) – [dep](fro_profiterole-dep-dep.html) – [det](fro_profiterole-dep-det.html) – [discourse](fro_profiterole-dep-discourse.html) – [dislocated](fro_profiterole-dep-dislocated.html) – [expl](fro_profiterole-dep-expl.html) – [fixed](fro_profiterole-dep-fixed.html) – [flat](fro_profiterole-dep-flat.html) – [iobj](fro_profiterole-dep-iobj.html) – [mark](fro_profiterole-dep-mark.html) – [mark:advmod](fro_profiterole-dep-mark-advmod.html) – [nmod](fro_profiterole-dep-nmod.html) – [nsubj](fro_profiterole-dep-nsubj.html) – [nsubj:advmod](fro_profiterole-dep-nsubj-advmod.html) – [nsubj:obj](fro_profiterole-dep-nsubj-obj.html) – [nsubj:outer](fro_profiterole-dep-nsubj-outer.html) – [nummod](fro_profiterole-dep-nummod.html) – [obj](fro_profiterole-dep-obj.html) – [obj:advmod](fro_profiterole-dep-obj-advmod.html) – [obj:advneg](fro_profiterole-dep-obj-advneg.html) – [obj:obl](fro_profiterole-dep-obj-obl.html) – [obl](fro_profiterole-dep-obl.html) – [obl:mod](fro_profiterole-dep-obl-mod.html) – [orphan](fro_profiterole-dep-orphan.html) – [parataxis](fro_profiterole-dep-parataxis.html) – [punct](fro_profiterole-dep-punct.html) – [root](fro_profiterole-dep-root.html) – [vocative](fro_profiterole-dep-vocative.html) – [xcomp](fro_profiterole-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 20359 sentences and 237822 tokens.</li>
</ul>

<ul>
<li>This corpus contains 33512 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 157 types of words that contain both letters and punctuation. Examples: l', qu', s', n', d', m', .i., t', c', j', jusqu', .ii., l'en, entr', .iiii., .iii., g', q', .xx., .xii., .c., .vii., ch', ensembl', un', ·l, quanqu', .v., .xxx., c., tresqu', .x., k', .c.m., entresqu', .xv., .l., .vi., .xxiiii., .ix., josqu', .viii., an.ii., cest', ·s, .XL., .iiij.m., .lx., .xxxvi.m., jesqu'</li>
</ul>

<ul>
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
<li>This corpus contains 1 lemmas tagged as pronouns (PRON): _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as determiners (DET): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: _</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>








<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>










<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: _.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: _.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (4683)</li>
      <li>VERB--NOUN-ADP(_) (4)</li>
      <li>VERB--PRON (11348)</li>
      <li>VERB--PRON-ADP(_) (5)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (7299)</li>
      <li>VERB--NOUN-ADP(_) (130)</li>
      <li>VERB--PRON (7090)</li>
      <li>VERB--PRON-ADP(_) (14)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB--NOUN-ADP(_) (4)</li>
      <li>VERB--PRON (3223)</li>
      <li>VERB--PRON-ADP(_) (285)</li>
      <li>VERB--PRON-ADP(_)-ADP(_) (8)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 13 relation subtypes: <a>acl:relcl</a>, <a>advmod:obl</a>, <a>aux:pass</a>, <a>case:det</a>, <a>cc:nc</a>, <a>mark:advmod</a>, <a>nsubj:advmod</a>, <a>nsubj:obj</a>, <a>nsubj:outer</a>, <a>obj:advmod</a>, <a>obj:advneg</a>, <a>obj:obl</a>, <a>obl:mod</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
