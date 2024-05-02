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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udde_lit213)<br />
Download all treebanks: [UD 2.13](/#download)

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

This treebank aims at gathering texts of the German literary history. Currently, it hosts Fragments of the early Romanticism, i.e. aphorism-like texts mainly dealing with philosophical issues concerning art, beauty and related topics.



In a long-term perspective, this treebank aims at gathering texts from different genres and different authors of the German literary history. Currently, it exclusively hosts Fragments of the early Romanticism (end of the 18th century, modern German), i.e. really short texts, often in aphorism-like form, that deal with philosophical issues in a witty and cryptic way. They mainly deal with aesthetics, i.e. philosophy concerning art and beauty.
This treebank is mainly intended for corpus-based stylistic analysis that can benefit from the dependency relations as well as from all the other levels of annotation (currently LEMMA and both UPOs and XPOS).

The version 2.5 hosts the following texts (each text is followed by the reference to the original edition from which it was digitized, as well as by the permalink to the online source of the digital raw text):

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

Each sentence in the treebank is preceded by some comments introduced by '#', through which the following information is respectively encoded:
- Genre
- Author
- Work
- Number of the fragment. It is based upon the classification adopted in the source raw text. Each time a new fragemnt begins, it is preceded by the comment 'newpar id = [name]', and the number of the fragment is incorporated into the 'sent_id' field as well, followed by the numer of the sentence in that fragment. Moreover, each time a new collection of fragment, i.e. work, begins, it is preceded by the comment '# newdoc id = [name]'. For instance:

- '# newdoc id = bluethenstaub'
- '# newpar id = bluethenstaub-f1'
- '# author = Novalis'
- '# work = Blüthenstaub'
- '# sent_id = bluethenstaub-f1-s1'

In this case, the sentence following the set of comments would be the first sentence of the first fragment of the collection "Blüthenstaub" written by Novalis.
We made this choice about such a use of comments because we want to preserve the parallelism between the treebanked data and the source texts as much as possible. In this perpsetive, this treebank aims to be the linguistically annotated counterpart of the orgiginal texts, thus preserving those categories that we are traditionally acquainted to adopt in order to work on literary texts.

## Acknowledgments

Many thanks to Daniel Zeman, who has promptly solved some fundamental problems concerning the data format, and showed great interest for this project right from the beginning.
...


# Statistics of UD German LIT

## POS Tags

[ADJ](de_lit-pos-ADJ.html) – [ADP](de_lit-pos-ADP.html) – [ADV](de_lit-pos-ADV.html) – [AUX](de_lit-pos-AUX.html) – [CCONJ](de_lit-pos-CCONJ.html) – [DET](de_lit-pos-DET.html) – [NOUN](de_lit-pos-NOUN.html) – [NUM](de_lit-pos-NUM.html) – [PART](de_lit-pos-PART.html) – [PRON](de_lit-pos-PRON.html) – [PROPN](de_lit-pos-PROPN.html) – [PUNCT](de_lit-pos-PUNCT.html) – [SCONJ](de_lit-pos-SCONJ.html) – [VERB](de_lit-pos-VERB.html) – [X](de_lit-pos-X.html)

## Features

[Abbr](de_lit-feat-Abbr.html) – [Case](de_lit-feat-Case.html) – [Definite](de_lit-feat-Definite.html) – [Degree](de_lit-feat-Degree.html) – [Foreign](de_lit-feat-Foreign.html) – [Gender](de_lit-feat-Gender.html) – [Gender[psor]](de_lit-feat-Gender-psor.html) – [Mood](de_lit-feat-Mood.html) – [Number](de_lit-feat-Number.html) – [Number[psor]](de_lit-feat-Number-psor.html) – [NumType](de_lit-feat-NumType.html) – [Person](de_lit-feat-Person.html) – [Poss](de_lit-feat-Poss.html) – [PronType](de_lit-feat-PronType.html) – [Reflex](de_lit-feat-Reflex.html) – [Tense](de_lit-feat-Tense.html) – [VerbForm](de_lit-feat-VerbForm.html)

## Relations

[acl](de_lit-dep-acl.html) – [acl:relcl](de_lit-dep-acl-relcl.html) – [advcl](de_lit-dep-advcl.html) – [advmod](de_lit-dep-advmod.html) – [amod](de_lit-dep-amod.html) – [appos](de_lit-dep-appos.html) – [aux](de_lit-dep-aux.html) – [aux:pass](de_lit-dep-aux-pass.html) – [case](de_lit-dep-case.html) – [cc](de_lit-dep-cc.html) – [ccomp](de_lit-dep-ccomp.html) – [compound](de_lit-dep-compound.html) – [compound:prt](de_lit-dep-compound-prt.html) – [conj](de_lit-dep-conj.html) – [cop](de_lit-dep-cop.html) – [csubj](de_lit-dep-csubj.html) – [dep](de_lit-dep-dep.html) – [det](de_lit-dep-det.html) – [det:poss](de_lit-dep-det-poss.html) – [dislocated](de_lit-dep-dislocated.html) – [expl](de_lit-dep-expl.html) – [fixed](de_lit-dep-fixed.html) – [flat](de_lit-dep-flat.html) – [mark](de_lit-dep-mark.html) – [nmod](de_lit-dep-nmod.html) – [nmod:poss](de_lit-dep-nmod-poss.html) – [nsubj](de_lit-dep-nsubj.html) – [nsubj:outer](de_lit-dep-nsubj-outer.html) – [nsubj:pass](de_lit-dep-nsubj-pass.html) – [nummod](de_lit-dep-nummod.html) – [obj](de_lit-dep-obj.html) – [obl](de_lit-dep-obl.html) – [obl:agent](de_lit-dep-obl-agent.html) – [obl:arg](de_lit-dep-obl-arg.html) – [orphan](de_lit-dep-orphan.html) – [parataxis](de_lit-dep-parataxis.html) – [punct](de_lit-dep-punct.html) – [root](de_lit-dep-root.html) – [xcomp](de_lit-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1920 sentences, 40340 tokens and 40450 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 5432 tokens (13%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 39 types of words that contain both letters and punctuation. Examples: 's, z.B., Hemsterhuys', d.h., u.s.w., 'n, (gleich, Fr., Friedrichsd'or, Früh-, Gattung), Heydenreich,Jacob, Jahrs-, Nicht-Ich, Normal-Seelen, Rechts-, Rubens', S., Scheidungs-, Theorien-Eierstock, W., Z.B., annehme;, bleibt's, d'epigramme, erhebe:so, geheimni?, ist's, jusqu', jusqu'au, können.In, l'essence, niet-, tief-, weg;, »Louise, »Meister, »Nathan, »Wem</li>
</ul>

<ul>
<li>This corpus contains 110 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 9 types of multi-word tokens. Examples: im, zur, zum, am, vom, ins, ers, mans, mirs.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: INTJ, SYM</li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): 's, am, nicht, zu</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as pronouns (PRON): cela, che, der, du, einander, er, es, etwas, himself, ich, irgendetwas, jedermann, jemand, man, nichts, niemand, nous, sich, sie, this, was, wer, wir</li>
</ul>

<ul>
<li>This corpus contains 31 lemmas tagged as determiners (DET): alle, allerlei, anderer, beide, dein, der, derjenige, derselbe, dieser, ein, einige, ihr, il, irgendein, jeder, jener, kein, le, mancher, mancherlei, mehr, mein, meist, sein, solcher, the, unser, viel, welcher, wenig, wieviel</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: der</li>
</ul>

<ul>
<li>This corpus contains 12 lemmas tagged as auxiliaries (AUX): be, dürfen, essere, haben, können, mögen, müssen, sein, sollen, werden, wollen, être</li>
</ul>

<ul>
<li>Out of the above, 8 lemmas occurred sometimes as AUX and sometimes as VERB: dürfen, haben, können, mögen, sein, sollen, werden, wollen</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: ist, era, is, sei, sommes</li>
    <li>VERB: peut, Ehre, erfolge, fait, leben, strömt, wohlgehe</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: aller, rester</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: gebildeten</li>
    <li>AUX: gewesen</li>
    <li>VERB: zurechtgewiesen</li>
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
      <li>ADJ: ganze, römische, Letztere, angemessenste, edle, elektrische, erhaltenden, gebildeten, gemeine, gesamte</li>
      <li>ADJ-Part: gebildeten</li>
      <li>DET: die, der, la, eine, jede</li>
      <li>NOUN: poesie, Größe, Kunst, Altertümlichkeit, Arroganz, Charakteristik, Eigenschaften, Eigentümlichkeit, Einfalt, Erden</li>
      <li>PRON: sie, die</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: brillant, feiner, grober, historischen, letzten, menacés, merkwürdigen, primi, secondo</li>
      <li>DET: des, der, le, Einen, dem, den, ein, i, ihren, il</li>
      <li>NOUN: Momente, Abgottes, Alten, Anfangsgründe, Ausdrucks, Autor, Essai, Freimaurer, Gedankens, Kitzel</li>
      <li>PRON: er, ihm, ihn, der, himself</li>
      <li>PROPN: Dantes, Diderots, Leibniz, Lessing, Plato, Römern</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: Rembrandtschen, gebildeten, letzte, prophetisches</li>
      <li>ADJ-Part: gebildeten</li>
      <li>DET: das, Einiges, alles, des, ein, ihr, seinem, welches</li>
      <li>NOUN: Glück, Leben, Gedicht, Helldunkel, Kinder, Mittelglied, Phänomene, Resultat, Stück, Verdienst</li>
      <li>PRON: es, was, nichts, etwas, s, 's, irgendetwas, das</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: erhaltenden, größten, literarischen, menacés, mißlichsten, politischen, primi, wesentlichen, wiederkehrenden</li>
      <li>AUX-Fin: sommes</li>
      <li>DET: den, die, der, alle, allen, diese, i, mancher, meisten</li>
      <li>NOUN: Momente, Alten, Anfangsgründe, Eigenschaften, Freimaurer, Kinder, Leuten, Mengs, Pantomimen, Philosophen</li>
      <li>PRON: wir, uns, ihnen, denen, sie, die, den, nous</li>
      <li>PROPN: Römern</li>
      <li>VERB-Fin: leben</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: ganze, gebildeten, römische, Letztere, Rembrandtschen, angemessenste, brillant, edle, elektrische, feiner</li>
      <li>ADJ-Part: gebildeten</li>
      <li>AUX-Fin: ist, is, sei</li>
      <li>DET: jeder, jedem, jedes, jede, die, der, jeden, la, des, das</li>
      <li>NOUN: poesie, Glück, Größe, Kunst, Leben, Abgottes, Altertümlichkeit, Arroganz, Ausdrucks, Autor</li>
      <li>PRON: es, man, er, was, nichts, etwas, ich, ihm, ihn, wer</li>
      <li>PROPN: Dantes, Diderots, Leibniz, Lessing, Plato</li>
      <li>VERB-Fin: Ehre, erfolge, fait, strömt, wohlgehe</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: alt, befremdlich, bewußt, chimärisch, einseitig, ethischen, ganze, größere, höchsten, klassisch</li>
      <li>DET: alles, die, welche, dies, diese, andre, einen, alle, beides, den</li>
      <li>NOUN: Sinn, Geist, Menschen, Philosophie, Witz, Poesie, Kraft, Welt, Leben, Kunst</li>
      <li>NUM: eins</li>
      <li>PRON: sich, es, was, ihn, sie, nichts, die, mich, den, uns</li>
      <li>PROPN: Fakta, Kant, Denkmal, Friedrichsd'or, Herrmann, Jean, Schellings, Schweiz, Sinn, Wilhelm</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: letzten, neuem, Flüchtigen, Geschichtschreiber, Männer, allgemein, allgemeinen, alt, andichten, besten</li>
      <li>ADJ-Part: gebildeten</li>
      <li>ADP: Uns, »Wem</li>
      <li>DET: dem, der, ihr, den, einem, allem, allen, beiden, dieser, jenem</li>
      <li>NOUN: Sinn, Geist, Philosophie, Art, Mangel, Menschen, Natur, Zeit, Form, Gedanken</li>
      <li>NUM: dreyen</li>
      <li>PRON: ihm, sich, ihnen, uns, dem, denen, mir, der, dir, jemanden</li>
      <li>PROPN: Leibniz, Plato, Aristoteles, Belieben, Bewußtseyn, Candide, Carracci, Chamforts, Denkart, Goethen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: epischen, jambischen, lieblicher, lyrischen, selbstgeträumten, unschuldiger, gebildeten, griechischen, historischen, literarischen</li>
      <li>ADJ-Part: gebildeten</li>
      <li>DET: der, des, ihres, mancher, meisten</li>
      <li>NOUN: Geistes, Dichters, Menschen, Altertums, Ganzen, Genies, Zeitalters, Individuums, Lebens, Witzes</li>
      <li>PRON: deren, dessen, derer</li>
      <li>PROPN: Laokoon, Cicero, Condorcet, Klosterbruders, Lovell, Siebenkäs, Sophokles, Thomasius, Dantes, Diderots</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: letzte, erste, mimische, Gefühle, Gewisse, Groß, Kant, Neu, abgeleiteten, aktiven</li>
      <li>DET: welche, alles, welches, die, diese, dies, jeder, andre, einer, welcher</li>
      <li>NOUN: Philosophie, Mensch, Geist, Poesie, Witz, Natur, Menschen, Kunst, Künstler, Sinn</li>
      <li>NUM: eins</li>
      <li>PRON: man, sie, er, es, die, der, was, das, wir, ich</li>
      <li>PROPN: Leibniz, Kant, Diderot, Jacobi, Caesar, Christus, Cicero, Dante, Hemsterhuys, Hippel</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: der, die, das, den, des, dem, la, le, the</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: ein, eine, einer, einen, einem, eines, eins, 'n</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: Letztere</li>
      <li>ADV: w</li>
      <li>DET: mehr, mehre</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: eignen, einzige, erste, ersten, einzelne, eigne, eigner, einzigen, eignes, einzelnen</li>
      <li>ADJ-Part: gebildeten</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: angemessenste, greatest, größten, merkwürdigste, mißlichsten</li>
      <li>DET: meisten, meiste</li>
    </ul>
  </li>
</ul>



<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: Ehre</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: ist, era, is, sommes</li>
      <li>VERB-Fin: fait, strömt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: sei</li>
      <li>VERB-Fin: erfolge, leben, wohlgehe</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: era</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: ist, is, sei, sommes</li>
      <li>VERB-Fin: erfolge, fait, leben, strömt, wohlgehe</li>
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
      <li>DET: der, die, ein, das, den, eine, des, dem, einer, einen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: daher, darin, darum, dadurch, dazu, davon, darauf, daraus, dagegen, damit</li>
      <li>DET: diese, dieser, dieses, dies, diesem, solche, jener, jene, diesen, derselben</li>
      <li>PRON: cela, This</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem,Rel
    <ul>
      <li>PRON: die, der, das, dem, den, deren, denen, dessen, derer</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: genug, etwas, bißchen</li>
      <li>DET: andre, viele, andern, viel, einige, manche, mancher, meisten, mehr, vielen</li>
      <li>PRON: man, etwas, jemand, irgendetwas, jemanden, mans</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: wodurch, worin, wozu, worauf, wobei, womit, wonach, woraus, wovon</li>
      <li>DET: Wieviel</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>DET: welche, welches, welcher, welchem, welchen</li>
      <li>PRON: was, wer, wem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: nie</li>
      <li>DET: keine, kein, keinen, keiner, keins, keinem, keines</li>
      <li>PRON: nichts, niemand, niemanden</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: ihre, seine, ihr, seiner, ihrer, sein, ihren, seinem, seinen, seines</li>
      <li>PRON: es, sich, sie, er, wir, uns, ich, ihm, ihn, ihnen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: einander</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: che</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: alle, alles, aller, allen, jeder, jedem, jedes, jede, beiden, allem</li>
      <li>PRON: jedermann</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>DET: ein, eine, einer, einen, einem, eines, beiden, beide, beyde, beides</li>
      <li>NUM: eins, dreyen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: erste, ersten, erstes, erster</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: ihre, seine, ihr, seiner, ihrer, sein, ihren, seinem, seinen, seines</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: sich, mir, himself</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: sommes</li>
      <li>DET: unsere, unsern, unsers, unser, meine, mein, unsrer, meinem, meinen, meiner</li>
      <li>PRON: wir, uns, ich, mich, mir, nous</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>DET: deine, deiner</li>
      <li>PRON: du, dich, dir</li>
      <li>VERB-Fin: Ehre</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: ist, is, sei</li>
      <li>DET: ihre, seine, ihr, seiner, ihrer, sein, ihren, seinem, seinen, seines</li>
      <li>PRON: es, sich, sie, er, ihm, ihn, ihnen, s, 's, himself</li>
      <li>VERB-Fin: erfolge, fait, leben, strömt, wohlgehe</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>DET: ihren</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>DET: seinem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc,Neut
    <ul>
      <li>DET: seine, seiner, sein, seinem, seinen, seines</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: unsere, unsern, unsers, unser, unsrer, ihr, unserer, unserm, unsre</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: seine, seiner, sein, seinem, seinen, seines, meine, mein, deine, deiner</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADV: s, w</li>
          <li>CCONJ: u</li>
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
          <li>ADJ: grand, brillant, greatest, menacés, primi, secondo</li>
          <li>ADP: de, à, except, fra, in, jusqu', jusqu'au, sur</li>
          <li>ADV: pourtant, toujours</li>
          <li>AUX-Fin: era, is, sommes</li>
          <li>CCONJ: et</li>
          <li>DET: la, le, the, i, il</li>
          <li>NOUN: sentiment, Essai, elephant, gêne, hauteur, l'essence, merite, peinture, philosophie, poesie</li>
          <li>PRON: cela, This, che, himself, nous</li>
          <li>PROPN: François</li>
          <li>PUNCT: ,</li>
          <li>SCONJ: que</li>
          <li>VERB-Fin: peut, fait</li>
          <li>VERB-Inf: aller, rester</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: sein, be, essere.</li>
</ul>

<ul>
<li>This corpus uses 10 lemmas as auxiliaries (<a>aux</a>). Examples: können, müssen, sollen, haben, sein, werden, wollen, dürfen, mögen, être.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: werden, sein.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Acc-ADP(für) (2)</li>
      <li>VERB--NOUN-Nom (722)</li>
      <li>VERB--NOUN-Nom-ADP(als) (1)</li>
      <li>VERB--NOUN-Nom-ADP(jenseits) (1)</li>
      <li>VERB--NOUN-Nom-ADP(unter) (1)</li>
      <li>VERB--NOUN-Nom-ADP(–) (1)</li>
      <li>VERB--PRON (7)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB--PRON-Dat (1)</li>
      <li>VERB--PRON-Nom (1037)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--PRON (2)</li>
      <li>VERB-Fin--PRON-Nom (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (764)</li>
      <li>VERB--NOUN-Acc-ADP(als) (1)</li>
      <li>VERB--NOUN-Acc-ADP(an) (1)</li>
      <li>VERB--NOUN-Acc-ADP(auf) (2)</li>
      <li>VERB--NOUN-Acc-ADP(bey) (1)</li>
      <li>VERB--NOUN-Acc-ADP(durch) (1)</li>
      <li>VERB--NOUN-Acc-ADP(für) (1)</li>
      <li>VERB--NOUN-Acc-ADP(mit) (1)</li>
      <li>VERB--NOUN-Acc-ADP(nach) (1)</li>
      <li>VERB--NOUN-Acc-ADP(um) (1)</li>
      <li>VERB--NOUN-Acc-ADP(wie) (1)</li>
      <li>VERB--NOUN-Acc-ADP(zu) (4)</li>
      <li>VERB--NOUN-Gen (1)</li>
      <li>VERB--PRON (24)</li>
      <li>VERB--PRON-Acc (512)</li>
      <li>VERB--PRON-Acc-ADP(in) (1)</li>
      <li>VERB--PRON-Acc-ADP(mit) (1)</li>
      <li>VERB--PRON-Dat (3)</li>
      <li>VERB--PRON-Nom (1)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Acc (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 132 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: lassen sich, finden sich, bilden sich, erheben sich, verhalten sich, verstehen sich, setzen sich, äußern sich, annihilieren sich, befinden sich, berühren sich, bewegen sich, bewußt sich, durchdringen sich, nähern sich, regen sich, stellen sich, verlieren sich, affizieren sich, ausdrücken sich, beschränken sich, beziehen sich, denken sich, entwickeln sich, ergötzen sich, erinnern sich, halten sich, machen sich, organisieren sich, scheinen sich, sehen sich, verfeinern sich, verstehn sich, widersprechen sich, wundern sich, zeigen sich, zersetzen sich, abfinden sich, akkomodieren sich, anlächeln sich, anschauen sich, anschaun sich, aufheben sich, ausreden sich, bedienen sich, behelfen sich, beklagen sich, bemächtigen sich, bemühen sich, bereichern sich</li>
    <ul>
      <li>Out of those, 9 lemmas occurred more than once, but never without a reflexive dependent. Examples: verhalten, befinden, regen, affizieren, ergötzen, verfeinern, widersprechen, wundern, zersetzen</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>compound:prt</a>, <a>det:poss</a>, <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>iobj</a>, <a>vocative</a>, <a>discourse</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
