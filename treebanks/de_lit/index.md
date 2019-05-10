---
layout: base
title:  'UD_German-LIT'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD German LIT

Language: [German](/de/index.html) (code: `de`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.4 release.

The following people have contributed to making this treebank part of UD: Alessio Salomoni.

Repository: [UD_German-LIT](https://github.com/UniversalDependencies/UD_German-LIT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udde_lit22)<br />
Download all treebanks: [UD 2.2](/#download)

License: CC BY-NC-SA 4.0

Genre: nonfiction

Questions, comments?
General annotation questions (either German-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_German-LIT/issues).
If you want to collaborate, please contact [alessio&nbsp;•&nbsp;salomoni&nbsp;(æt)&nbsp;unibg&nbsp;•&nbsp;it].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, with some manual corrections, but not a full manual verification |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | assigned by a program, with some manual corrections, but not a full manual verification |
| Features | not available |
| Relations | annotated manually, natively in UD style |

## Description

It aims at gathering texts of the German literary history. Currently, it hosts Fragments of the early Romanticism, i.e. aphorism-like texts mainly dealing with philosophical issues concerning art, beauty and related topics.



In a long-term perspective, this treebank aims at gathering texts from different genres and different authors of the German literary history. Currently, it exclusively hosts Fragments of the early Romanticism (end of the 18th century, modern German), i.e. really short texts, often in aphorism-like form, dealing with philosophical issues in a witty and cryptic way. They mainly deal with aesthetics, i.e. with philosophy concerning art and beauty.
This treebank is mainly intended for stylistic analysis that can benefit from the dependency formalism as well as from the opportunity to automatically and quickly retrieve information concerning syntax.

Version 2.4 hosts the following texts (each text is followed by the reference to the original edition from which it was digitized, as well as by the permalink to the online source of the raw text):

- Friedrich Schlegel, Kritische Fragmente [Lyceum-Fragmente].
Source: Kritische Friedrich-Schlegel-Ausgabe. Erste Abteilung: Kritische Neuausgabe, Band 2, München, Paderborn, Wien, Zürich 1967, S. 147-164.
Erstdruck in: Lyceum der schönen Künste (Berlin), 1. Bd., 2. Teil, 1797.
Permalink: http://www.zeno.org/nid/20005618886

- Friedrich Schelgel, Athenäums-Fragmente [fragments from 1 to 421].
Source: Kritische Friedrich-Schlegel-Ausgabe. Erste Abteilung: Kritische Neuausgabe, Band 2, München, Paderborn, Wien, Zürich 1967, S. 165-256.
Erstdruck in: Athenäum (Berlin), 1. Bd., 2. Stück, 1798.
Permalink: http://www.zeno.org/nid/20005618908

- Novalis, Blüthenstaub.
Source: Novalis: Schriften. Die Werke Friedrich von Hardenbergs. Band 2, Stuttgart 1960–1977, S. 413-464.
Entstanden 1797/98. Erstdruck in: Athenäum (Berlin), 1. Bd., 1. Stück, 1798. Vier Fragmente stammen von Friedrich Schlegel.
Permalink: http://www.zeno.org/nid/20005446929

Each sentence in the treebank file is preceded by some comments introduced by '#', through which the following information is preserved:
- Genre
- Author
- Work
- Number of the fragment. It is based upon the classification adopted in the source raw text. Each time a new fragemnt begins, it is preceded by the comment 'newpar id = [name]', and the number of the fragment is incorporated into the 'sent_id' field as well, followed by the numer of the sentence in that fragment. Moreover, each time a new work begins, it is preceded by the comment '# newdoc id = [name]'. For instance:

'# newdoc id = bluethenstaub'
'# newpar id = bluethenstaub-f1'
'# author = Novalis'
'# work = Blüthenstaub'
'# sent_id = bluethenstaub-f1-s1'

We made this choice since the treebank is exactly intended as a structured version in dependency formalism of the original texts, therefore we want to preserve the parallelism between the treebanked data and the source texts as much as possible.

## Acknowledgments

Many thanks to Daniel Zeman, who promptly solved some fundamental problems concerning data format, and showed great interest for this project right from the beginning.
...

## References

* (citation)

# Statistics of UD German LIT

## POS Tags

[ADJ](de_lit-pos-ADJ.html) – [ADP](de_lit-pos-ADP.html) – [ADV](de_lit-pos-ADV.html) – [AUX](de_lit-pos-AUX.html) – [CCONJ](de_lit-pos-CCONJ.html) – [DET](de_lit-pos-DET.html) – [NOUN](de_lit-pos-NOUN.html) – [NUM](de_lit-pos-NUM.html) – [PART](de_lit-pos-PART.html) – [PRON](de_lit-pos-PRON.html) – [PROPN](de_lit-pos-PROPN.html) – [PUNCT](de_lit-pos-PUNCT.html) – [SCONJ](de_lit-pos-SCONJ.html) – [VERB](de_lit-pos-VERB.html) – [X](de_lit-pos-X.html)

## Features



## Relations

[acl](de_lit-dep-acl.html) – [advcl](de_lit-dep-advcl.html) – [advmod](de_lit-dep-advmod.html) – [amod](de_lit-dep-amod.html) – [appos](de_lit-dep-appos.html) – [aux](de_lit-dep-aux.html) – [aux:pass](de_lit-dep-aux-pass.html) – [case](de_lit-dep-case.html) – [cc](de_lit-dep-cc.html) – [ccomp](de_lit-dep-ccomp.html) – [compound](de_lit-dep-compound.html) – [compound:prt](de_lit-dep-compound-prt.html) – [conj](de_lit-dep-conj.html) – [cop](de_lit-dep-cop.html) – [csubj](de_lit-dep-csubj.html) – [dep](de_lit-dep-dep.html) – [det](de_lit-dep-det.html) – [det:poss](de_lit-dep-det-poss.html) – [expl](de_lit-dep-expl.html) – [fixed](de_lit-dep-fixed.html) – [flat](de_lit-dep-flat.html) – [iobj](de_lit-dep-iobj.html) – [mark](de_lit-dep-mark.html) – [nmod](de_lit-dep-nmod.html) – [nmod:poss](de_lit-dep-nmod-poss.html) – [nsubj](de_lit-dep-nsubj.html) – [nsubj:pass](de_lit-dep-nsubj-pass.html) – [nummod](de_lit-dep-nummod.html) – [obj](de_lit-dep-obj.html) – [obl](de_lit-dep-obl.html) – [obl:agent](de_lit-dep-obl-agent.html) – [orphan](de_lit-dep-orphan.html) – [parataxis](de_lit-dep-parataxis.html) – [punct](de_lit-dep-punct.html) – [root](de_lit-dep-root.html) – [xcomp](de_lit-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1922 sentences, 40351 tokens and 40456 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 5428 tokens (13%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 2 types of words with spaces. Examples: Altertums wie, Ich =</li>
</ul>

<ul>
<li>This corpus contains 44 types of words that contain both letters and punctuation. Examples: 's, z.B., Hemsterhuys', d.h., u.s.w., 'n, (eigentlich, (gleich, Fr., Friedrichsd'or, Früh-, Gattung), Heydenreich,Jacob, Jahrs-, Mengs), Nicht-Ich, Normal-Seelen, Rechts-, Rubens', S., Scheidungs-, Theorien-Eierstock, W., Z.B., annehme;, befand.Ein, bleibt's, d'epigramme, erhebe:so, geheimni?, ist's, jusqu', jusqu'au, können.In, l'essence, man's, niet-, tief-, weg;, »Es, »Louise, »Meister, »Nathan, »Wem</li>
</ul>

<ul>
<li>This corpus contains 105 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 6 types of multi-word tokens. Examples: im, zur, zum, am, vom, ins.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: INTJ, SYM</li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): am, dazu, nicht, zu</li>
</ul>

<ul>
<li>This corpus contains 92 lemmas tagged as pronouns (PRON): 's, --, This, alle, aller, allerlei, allgemein, ander, anderer, andr, andre, andren, andrer, beide, bißchen, cela, chen, der, derjenige, derselbe, dich, dieser, dir, dreyen, du, ebensoviel, eignen, ein, einander, einer, einig, einige, einiger, eins, einzeln, einzig, einziger, er, erfolge, ers, erster, es, etwas, fein, himself, ich, ihm, ihn, ihnen, ihr, irgendetwas, jeder, jemand, jene, jener, kein, keiner, letzt, letzter, man, mancher, mans, mehr, meist, meiste, meister, mich, mirs, nichts, niemand, ohnedem, selbst, sich, sicher, sie, solch, solcher, uns, unsre, viel, viele, vieler, was, welcher, wem, wenig, weniger, wer, wir, worauf, «, »es</li>
</ul>

<ul>
<li>This corpus contains 63 lemmas tagged as determiners (DET): 5), I, Roman, all, alle, aller, beide, beiderlei, beym, dant, das, dein, der, derselbe, descriptiv, die, diesem, dieser, ein, einig, einige, einiger, einzeln, etwas, gemein, ihr, il, in, irgendein, jeder, jedermann, jener, kein, la, lauter, le, mancher, mancherlei, mehr, mehre, mehren, mein, meister, nichts, sein, seinemleben, solch, solcher, still, taub, the, unser, unsern, unsers, viel, viele, vieler, was, welcher, wenig, weniger, wenigster, wieviel</li>
</ul>

<ul>
<li>Out of the above, 29 lemmas occurred sometimes as PRON and sometimes as DET: alle, aller, beide, der, derselbe, dieser, ein, einig, einige, einiger, einzeln, etwas, ihr, jeder, jener, kein, mancher, mehr, meister, nichts, solch, solcher, viel, viele, vieler, was, welcher, wenig, weniger</li>
</ul>

<ul>
<li>This corpus contains 12 lemmas tagged as auxiliaries (AUX): --, Mengs), bleibt', era, haben, hören, ist, sein, seyn, sollen, werden, wollen</li>
</ul>

<ul>
<li>Out of the above, 8 lemmas occurred sometimes as AUX and sometimes as VERB: haben, hören, ist, sein, seyn, sollen, werden, wollen</li>
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
<li>This corpus uses 19 lemmas as copulas (<a>cop</a>). Examples: sein, werden, seyn, bleiben, scheinen, ist, haben, --, achtete, bleibt', era, erklären, erscheinen, erstaunen, geschehen, heißen, mystifizieren, verfliegen, wirken.</li>
</ul>

<ul>
<li>This corpus uses 27 lemmas as auxiliaries (<a>aux</a>). Examples: können, müssen, sollen, haben, sein, wollen, werden, dürfen, zu, mögen, möchten, seyn, --, an, frühern, hast, in, ist, kannen, kaum, können.in, müßt, sey, sollt, voll, vollen, wissen.</li>
<li>This corpus uses 4 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: werden, sein, haben, seyn.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (720)</li>
      <li>VERB--NOUN-ADP(als) (1)</li>
      <li>VERB--NOUN-ADP(an) (1)</li>
      <li>VERB--NOUN-ADP(für) (1)</li>
      <li>VERB--NOUN-ADP(in) (1)</li>
      <li>VERB--NOUN-ADP(jenseits) (1)</li>
      <li>VERB--NOUN-ADP(wie) (2)</li>
      <li>VERB--NOUN-ADP(–) (1)</li>
      <li>VERB--PRON (1163)</li>
      <li>VERB--PRON-ADP(zu) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (722)</li>
      <li>VERB--NOUN-ADP(als) (2)</li>
      <li>VERB--NOUN-ADP(an) (1)</li>
      <li>VERB--NOUN-ADP(auf) (2)</li>
      <li>VERB--NOUN-ADP(bey) (1)</li>
      <li>VERB--NOUN-ADP(durch) (1)</li>
      <li>VERB--NOUN-ADP(für) (1)</li>
      <li>VERB--NOUN-ADP(mit) (1)</li>
      <li>VERB--NOUN-ADP(nach) (1)</li>
      <li>VERB--NOUN-ADP(um) (1)</li>
      <li>VERB--NOUN-ADP(wie) (1)</li>
      <li>VERB--NOUN-ADP(zu) (3)</li>
      <li>VERB--PRON (590)</li>
      <li>VERB--PRON-ADP(Bey) (1)</li>
      <li>VERB--PRON-ADP(in) (1)</li>
      <li>VERB--PRON-ADP(mit) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (65)</li>
      <li>VERB--PRON (86)</li>
      <li>VERB--PRON-ADP(bey) (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>aux:pass</a>, <a>compound:prt</a>, <a>det:poss</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>discourse</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
