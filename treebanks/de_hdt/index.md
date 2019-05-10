---
layout: base
title:  'UD_German-HDT'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD German HDT

Language: [German](/de/index.html) (code: `de`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.4 release.

The following people have contributed to making this treebank part of UD: Emanuel Borges Völker, Felix Hennig, Arne Köhn, Maximilan Wendt.

Repository: [UD_German-HDT](https://github.com/UniversalDependencies/UD_German-HDT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udde_hdt22)<br />
Download all treebanks: [UD 2.2](/#download)

License: HZSK-ACA (Text) / CC BY-SA-4.0 (Annotation)

Genre: news, nonfiction, web

Questions, comments?
General annotation questions (either German-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_German-HDT/issues).
If you want to collaborate, please contact [Arne Köhn <arne&nbsp;(æt)&nbsp;chark&nbsp;•&nbsp;eu>].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | assigned by a program, with some manual corrections, but not a full manual verification |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |

## Description

UD German-HDT is a conversion of the Hamburg Dependency Treebank,
created at the University of Hamburg through manual annotation in
conjunction with a standard for morphologically and syntactically
annotating sentences as well as a constraint-based parser.




The [Hamburg Dependency Treebank](http://hdl.handle.net/11022/0000-0000-7FC7-2)
consists of 261,821 sentences (4.8M tokens). The sentences were all
sourced from the German news site heise.de, from articles published
between 1996 and 2001. The content of the articles ranges from
formulaic periodic updates on new BIOS revisions and processor models
or quarterly earnings of tech companies over features about general
trends in the hardware and software market to general coverage of
social, legal and political issues in cyberspace, sometimes in the
form of extensive weekly editorial comments. The creation of the
treebank through manual annotation was largely interleaved with the
creation of a standard for morphologically and syntactically
annotating sentences as well as a constraint-based parser.

For [UD_German-HDT](https://github.com/UniversalDependencies/UD_German-HDT),
206,794 sentences (3.8M tokens) from the original HDT were converted
with [TrUDucer](https://gitlab.com/nats/TrUDucer), a treebank
conversion tool created by Felix Hennig and extended by Maximilian
Wendt and Emanuel Borges Völker. The conversion has a very high
accuracy of 97% (checked on a manually converted subset of the
treebank). Annotation information not captured in the original annotation
was resolved by using external data sources (Wiktionary) and manual input
from annotators.

## Acknowledgments

The following people worked on the conversion:
- Emanuel Borges Völker (conversion: grammar development, annotation refinements, …)
- Maximilian Wendt (conversion: grammar development, annotation refinements, …)
- Felix Hennig (initial grammar development, main TrUDucer development)
- Arne Köhn (supervision)


## References

If you use this treebank, please cite the upcoming paper describing
the conversion of the HDT to UD.

The TrUDucer paper describing the formalism behind the conversion:

Hennig, Felix, & Köhn, Arne (2017). Dependency tree transformation
with tree transducers. In Proceedings of the NoDaLiDa 2017 Workshop on
Universal Dependencies (UDW 2017) (pp. 58–66). Gothenburg, Sweden:
Association for Computational Linguistics. url:
http://www.aclweb.org/anthology/W17-0407


The paper describing the HDT:

Foth, K. A., Köhn, A., Beuck, N., & Menzel, W. (2014). Because Size
Does Matter: The Hamburg Dependency Treebank. In Proceedings of the
Language Resources and Evaluation Conference 2014
(pp. 2326–2333). Reykjavik, Iceland: European Language Resources
Association (ELRA). url:
http://nbn-resolving.de/urn:nbn:de:gbv:18-228-7-2013


The annotation guidelines of the original HDT:

Foth, K. A. (2006). Eine umfassende Constraint-Dependenz-Grammatik des
Deutschen. url: http://nbn-resolving.de/urn:nbn:de:gbv:18-228-7-2048


## Software

[TrUDucer](https://gitlab.com/nats/truducer) the software used to
convert the HDT. Comes with a pipeline to replicate the conversion of
the HDT.

[jwcdg](https://gitlab.com/nats/jwcdg), the successor of the parser
used for initial automatic annotation of the HDT. It contains the
lexicon with the relevant morpho-syntactic features annotated.

[DECCA](http://sifnos.sfs.uni-tuebingen.de/decca/), a tool to detect
and correct errors in annotated corpora



# Statistics of UD German HDT

## POS Tags

[ADJ](de_hdt-pos-ADJ.html) – [ADP](de_hdt-pos-ADP.html) – [ADV](de_hdt-pos-ADV.html) – [AUX](de_hdt-pos-AUX.html) – [CCONJ](de_hdt-pos-CCONJ.html) – [DET](de_hdt-pos-DET.html) – [INTJ](de_hdt-pos-INTJ.html) – [NOUN](de_hdt-pos-NOUN.html) – [NUM](de_hdt-pos-NUM.html) – [PART](de_hdt-pos-PART.html) – [PRON](de_hdt-pos-PRON.html) – [PROPN](de_hdt-pos-PROPN.html) – [PUNCT](de_hdt-pos-PUNCT.html) – [SCONJ](de_hdt-pos-SCONJ.html) – [VERB](de_hdt-pos-VERB.html) – [X](de_hdt-pos-X.html)

## Features

[Case](de_hdt-feat-Case.html) – [Degree](de_hdt-feat-Degree.html) – [Gender](de_hdt-feat-Gender.html) – [Mood](de_hdt-feat-Mood.html) – [Number](de_hdt-feat-Number.html) – [Person](de_hdt-feat-Person.html) – [Tense](de_hdt-feat-Tense.html)

## Relations

[acl](de_hdt-dep-acl.html) – [advcl](de_hdt-dep-advcl.html) – [advmod](de_hdt-dep-advmod.html) – [amod](de_hdt-dep-amod.html) – [appos](de_hdt-dep-appos.html) – [aux](de_hdt-dep-aux.html) – [aux:pass](de_hdt-dep-aux-pass.html) – [case](de_hdt-dep-case.html) – [cc](de_hdt-dep-cc.html) – [ccomp](de_hdt-dep-ccomp.html) – [compound:prt](de_hdt-dep-compound-prt.html) – [conj](de_hdt-dep-conj.html) – [cop](de_hdt-dep-cop.html) – [csubj](de_hdt-dep-csubj.html) – [csubj:pass](de_hdt-dep-csubj-pass.html) – [det](de_hdt-dep-det.html) – [det:poss](de_hdt-dep-det-poss.html) – [expl](de_hdt-dep-expl.html) – [expl:pv](de_hdt-dep-expl-pv.html) – [flat](de_hdt-dep-flat.html) – [flat:name](de_hdt-dep-flat-name.html) – [iobj](de_hdt-dep-iobj.html) – [mark](de_hdt-dep-mark.html) – [nmod](de_hdt-dep-nmod.html) – [nmod:poss](de_hdt-dep-nmod-poss.html) – [nsubj](de_hdt-dep-nsubj.html) – [nsubj:pass](de_hdt-dep-nsubj-pass.html) – [nummod](de_hdt-dep-nummod.html) – [obj](de_hdt-dep-obj.html) – [obl](de_hdt-dep-obl.html) – [obl:arg](de_hdt-dep-obl-arg.html) – [orphan](de_hdt-dep-orphan.html) – [parataxis](de_hdt-dep-parataxis.html) – [punct](de_hdt-dep-punct.html) – [root](de_hdt-dep-root.html) – [xcomp](de_hdt-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 34322 sentences and 591669 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 15218 types of words that contain both letters and punctuation. Examples: c't, T-Online, US-Dollar, e-commerce, E-Mail, Internet-Zugang, E-Mails, Schulzki-Haddouti, Dr., L2-Cache, mp3.com, web.de, Online-Dienst, US-amerikanischen, Internet-Provider, Beta-Version, US-Regierung, Web-Site, EU-Kommission, Web-Server, US-amerikanische, Inc., informations-, IT-Branche, kbit/s, Hewlett-Packard, AT&T, Internet-Nutzer, e-business, Windows-Version, v., Telekom-Sprecher, c't-Redaktion, Settop-Boxen, e-plus, MBit/s, Web-Seiten, amazon.com, e., Däubler-Gmelin, Web-Browser, MP3-Player, T-DSL, 's, .net, E-Mail-Adresse, PC-Hersteller, DVD-Videos, Met@box, Web-Seite</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 2 word types tagged as particles (PART): nicht, zu</li>
</ul>

<ul>
<li>This corpus contains 120 lemmas tagged as pronouns (PRON): 's, Ersteres, Letzterer, Letzteres, all, alle, allerhand, ander, beide, d., das, dasselbe, dein, dem, demjenigen, den, denen, denjenigen, der, der/das, derartiges, derer, dergleichen, derjenige, derjenigen, derselbe, desjenigen, dessen, die, die/der, diejenige, diejenigen, dies, diese, dieselbe, diesem, diesen, dieser, dieses, du, ein, einander, einig, er, erster, es, etlich, etwas, euch, eurer, genug, ich, ihm, ihn, ihnen, ihr, ihre, ihrem, ihren, ihrer, ihres, ihresgleichen, jede, jeder, jedermann, jemand, jene, jenen, jener, kein, letztere, man, manch, mehr, mehrer, mein, meine, meinem, meinen, meiner, meist, mich, mir, nichts, niemand, paar, sein, seine, seinem, seinen, seiner, seines, sich, sie, solch, solche, solchen, soviel, sowas, uns, unser, unsere, unserem, unseren, unserer, unseres, viel, was, weiteres, welche, welchen, welcher, welches, wem, wen, wenig, wer, wieviel, wir, zuviel</li>
</ul>

<ul>
<li>This corpus contains 74 lemmas tagged as determiners (DET): 'n, 's, all, allerlei, beide, das, dem, demselben, den, denselben, der, deren, derjenigen, derlei, derselbe, derselben, des, dessen, die, dies, diese, dieselbe, diesem, diesen, dieser, dieses, ein, eine, eine(n), einem, einem/er, einen, einer, eines, einig, etlich, etwas, ganz, genug, irgendein, irgendwelch, jede, jeder, jeglich, jene, jenem, jenen, jenig, kein, keinerlei, lauter, manch, mancherlei, mehr, mehrer, nichts, solch, solche, solchen, solcher, solcherlei, solches, soviel, sämtlich, welche, welchem, welchen, welcher, welches, wenig, wieviel, wieviele, zuviel, zuwenig</li>
</ul>

<ul>
<li>Out of the above, 43 lemmas occurred sometimes as PRON and sometimes as DET: 's, all, beide, das, dem, den, der, derjenigen, derselbe, dessen, die, dies, diese, dieselbe, diesem, diesen, dieser, dieses, ein, einig, etlich, etwas, genug, jede, jeder, jene, jenen, kein, manch, mehr, mehrer, nichts, solch, solche, solchen, soviel, welche, welchen, welcher, welches, wenig, wieviel, zuviel</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as auxiliaries (AUX): dürfen, haben, können, mögen, müssen, sein, sollen, werden, wollen</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: neue, deutsche, erste, weitere, deutschen, neuen, eigene, eigenen, nächste, andere</li>
      <li>ADP: zur</li>
      <li>DET: die, der, eine, einer, diese, keine, dieser, jede, einiger, jeder</li>
      <li>NOUN: Mark, Version, Software, Firma, Angaben, Zeit, Firmen, Verfügung, Informationen, Entwicklung</li>
      <li>PRON: die, sie, seiner, seine, ihre, ihrer, der, diese, eine, ihr</li>
      <li>PROPN: Telekom, c't, T-Online, Strato, Sun, SAP, AMD, Europa, Telecom, Bertelsmann</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: neuen, neue, ersten, neuer, deutschen, anderen, deutsche, großen, eigenen, erste</li>
      <li>DET: der, den, des, dem, einen, ein, einem, eines, diesem, keinen</li>
      <li>NOUN: Markt, US-Dollar, Server, Hersteller, Anbieter, Rechner, Namen, Preis, Anfang, Computer</li>
      <li>PRON: er, der, seinen, ihren, dem, den, ihn, seinem, dieser, anderem</li>
      <li>PROPN: Michael, Warner, Francisco, Bill, John, Mac, Thomas, Clinton, Stefan, Steve</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: neue, neues, erste, neuen, ersten, weiteres, nächsten, andere, deutsche, anderen</li>
      <li>ADP: ins, fürs, ans, übers, aufs, durchs, ums, unters</li>
      <li>ADV: bisschen, bißchen, erstenmal</li>
      <li>DET: das, ein, des, dem, einem, dieses, diesem, eines, kein, jedes</li>
      <li>NOUN: Internet, Prozent, Unternehmen, Jahr, Ende, Daten, Jahres, MHz, MByte, Jahren</li>
      <li>PRON: es, das, dies, allem, mehr, was, anderem, sein, dem, ihr</li>
      <li>PROPN: AppleStore, PowerBooks, PowerBook, RealVideo, BusinessCall, FeRAMs, G3-PowerBook, Kollande, MicroPortal, OpenSource</li>
      <li>X: Inc., Corp.</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: neue, neuen, anderen, andere, weitere, viele, ersten, eigenen, beiden, deutschen</li>
      <li>AUX: sind, werden, sollen, haben, können, seien, wollen, wurden, würden, waren</li>
      <li>DET: die, der, den, alle, keine, diese, einige, allen, einigen, mehrere</li>
      <li>NOUN: Prozent, Mark, Kunden, Daten, Unternehmen, Angaben, MHz, US-Dollar, Firmen, Jahren</li>
      <li>NUM: zwei, 2000, drei, 2001, vier, 1999, 2, 4, 5, 10</li>
      <li>PRON: die, sie, ihre, wir, seine, denen, diese, ihren, seinen, ihrer</li>
      <li>PROPN: USA, PowerBooks, iMacs, Niederlande, Las, DDR-SDRAMs, Philippinen, iBooks, Celerons, Links</li>
      <li>VERB: lassen, stehen, kommen, gehören, finden, liegen, sehen, gehen, machen, arbeiten</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: neue, neuen, deutsche, deutschen, ersten, erste, vergangenen, nächsten, letzten, heutigen</li>
      <li>ADV: bisschen, bißchen, erstenmal</li>
      <li>AUX: ist, hat, soll, wird, will, sei, hatte, kann, wurde, war</li>
      <li>DET: der, die, das, des, den, eine, dem, ein, einen, einer</li>
      <li>NOUN: Internet, Version, Software, Jahr, Unternehmen, Firma, Markt, Ende, Jahres, Zeit</li>
      <li>NUM: 1, ein, eins, 2^3021377-1, 2^1398269-1, 2​^​2​9​7​6​2​2​1​-​1​,​2​^​1​3​9​8​2​6​9​-​1, 2^6972593-1, 500/1, SN-1, SR-1</li>
      <li>PRON: es, man, er, das, der, die, sie, dies, allem, seiner</li>
      <li>PROPN: Microsoft, Intel, Telekom, Deutschland, AOL, Apple, c't, Linux, T-Online, IBM</li>
      <li>VERB: gibt, sagte, bietet, steht, erklärte, geht, kommt, stellt, liegt, gab</li>
      <li>X: Inc., Corp.</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: neuen, viele, ersten, großen, eigenen, wenige, weiteren, deutschen, kostenlosen, genannten</li>
      <li>ADP: für, auf, über, in, durch, gegen, um, an, ohne, ins</li>
      <li>ADV: bisschen, bißchen</li>
      <li>DET: die, den, eine, das, einen, ein, keine, diese, alle, einige</li>
      <li>NOUN: Internet, Mark, Ende, Markt, Version, Kunden, Zugang, Anfang, Prozent, US-Dollar</li>
      <li>PRON: sich, ihre, seine, die, das, seinen, sie, ihren, sein, ihr</li>
      <li>PROPN: Microsoft, Intel, Mac, Napster, Java, AOL, Apple, Netscape, T-Online, Rambus</li>
      <li>X: Internetbanking</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: anderen, eigenen, neuen, vielen, verschiedenen, weiteren, wenigen, beiden, kurzem, deutschen</li>
      <li>ADP: in, von, mit, im, auf, bei, nach, zu, zum, am</li>
      <li>DET: der, dem, den, einem, einer, diesem, dieser, allen, einigen, diesen</li>
      <li>NOUN: Jahren, Internet, Tagen, Monaten, Ländern, Jahr, Angaben, Inhalten, Servern, Mark</li>
      <li>PRON: sich, allem, dem, anderem, denen, seiner, der, seinem, ihrer, ihren</li>
      <li>PROPN: Microsoft, heise, Intel, AOL, Telepolis, Apple, USA, Deutschland, Netscape, T-Online</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: neuer, anderer, nächsten, letzten, vergangenen, beiden, neuen, deutscher, deutschen, genannten</li>
      <li>ADP: wegen, aufgrund, angesichts, während, innerhalb, trotz, außerhalb, anhand, bezüglich, dank</li>
      <li>DET: der, des, eines, einer, dieser, dieses, einiger, diesen, aller, jeglicher</li>
      <li>NOUN: Jahres, Unternehmens, Herstellers, Systems, Prozessors, Browsers, Betriebssystems, Internet, Marktes, Angebots</li>
      <li>NUM: zweier</li>
      <li>PRON: seiner, ihrer, seines, ihres, dessen, unserer, eines, derjenigen, unseres, anderer</li>
      <li>PROPN: Intels, Microsofts, Apples, IBMs, AMDs, Netscapes, Suns, Europas, Deutschlands, Telekom</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: viele, beiden, neue, neuer, deutsche, erster, erste, größte, amerikanische, zuständige</li>
      <li>ADP: namens, voller</li>
      <li>DET: die, der, das, ein, eine, diese, alle, keine, kein, einige</li>
      <li>NOUN: Internet, Unternehmen, Kunden, Provider, Server, Version, Name, Prozent, Kunde, Software</li>
      <li>NUM: eins</li>
      <li>PRON: es, die, man, sie, er, das, der, wir, wer, dies</li>
      <li>PROPN: Intel, Microsoft, AOL, Apple, IBM, Netscape, AMD, Sony, GMX, T-Online</li>
      <li>X: AID, Anti-Spam-Petition, Digital, Push, Telekom-Mitarbeiter, dmmv</li>
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
      <li>ADJ: weitere, später, besser, schneller, weiteren, länger, stärker, früher, billiger, größere</li>
      <li>ADV: weiter, mehr, eher, weniger</li>
      <li>DET: mehr, weniger</li>
      <li>PRON: mehr, weniger</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: neue, neuen, möglich, deutschen, deutsche, bekannt, gut, anderen, offenbar, online</li>
      <li>ADV: so, sehr, oft, gleich</li>
      <li>NOUN: Befragten, Wesentlichen, Angestellten, Beschäftigten, Dritte, Vorsitzender, Deutschen, Jugendliche, D​a​t​e​n​s​c​h​u​t​z​b​e​a​u​f​t​r​a​g​t​e, Interessierte</li>
      <li>PRON: viele, viel, wenig, wenige, vielen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: ersten, erste, nächsten, letzten, meisten, größten, größte, erster, nächste, besten</li>
      <li>ADV: meist, möglichst, meistens</li>
      <li>PRON: meisten, wenigsten</li>
    </ul>
  </li>
</ul>



<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: ist, hat, wird, soll, sind, will, hatte, kann, sollen, wurde</li>
      <li>VERB: gibt, sagte, bietet, steht, geht, kommt, liegt, stellt, erklärte, gab</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: sei, habe, seien, werde, werden, würden, könnte, haben, können, könne</li>
      <li>VERB: sagte, erklärte, gebe, stehe, gehe, lassen, liege, stehen, teilte, komme</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: hatte, wurde, war, wurden, waren, hatten, konnte, konnten, wollte, musste</li>
      <li>VERB: sagte, erklärte, gab, bestätigte, ging, kündigte, kam, stellte, hieß, meinte</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: ist, hat, wird, soll, sind, will, sei, werden, kann, sollen</li>
      <li>VERB: gibt, bietet, steht, geht, kommt, liegt, stellt, lassen, sieht, bleibt</li>
    </ul>
  </li>
</ul>



<h3>Pronouns, Determiners, Quantifiers</h3>






<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: haben, werden, können, sind, wollen, müssen, kann, hatten, wollten, wurde</li>
      <li>PRON: wir, uns, ich, unsere, unser, unseren, unserer, mich, unserem, mein</li>
      <li>VERB: brauchen, sehen, wissen, glauben, befinden, bekommen, erhielt, machen, arbeiten, bitten</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: habt, hättest, musst</li>
      <li>PRON: du, ihr, dein, euch, eurer</li>
      <li>VERB: siehe, Stimm, schaut, sprich, Tötet, macht, Benutzt, Bleibt, Erwischt, Gehe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ: viele, 1., beiden, meisten, 15., vielen, wenig, paar, 2., wenige</li>
      <li>AUX: ist, hat, wird, soll, sind, will, sei, hatte, sollen, kann</li>
      <li>DET: keine, alle, einige, mehr, kein, allen, einigen, mehrere, keinen, beide</li>
      <li>NOUN: Internet, Prozent, Unternehmen, Mark, Version, Software, Kunden, Jahr, Firma, Markt</li>
      <li>NUM: zwei, 2000, drei, 2001, vier, 1999, 2, 4, 5, 10</li>
      <li>PRON: sich, es, die, sie, man, er, das, der, ihre, seine</li>
      <li>PROPN: Microsoft, Intel, telepolis, Telekom, Deutschland, USA, AOL, Apple, c't, Linux</li>
      <li>VERB: gibt, sagte, bietet, steht, erklärte, geht, kommt, stellt, liegt, gab</li>
      <li>X: OS, of, internet, the, world, digital, Explorer, for, network, and</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: sein.</li>
</ul>

<ul>
<li>This corpus uses 9 lemmas as auxiliaries (<a>aux</a>). Examples: haben, sollen, können, wollen, werden, müssen, sein, dürfen, mögen.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: werden, sein.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (14342)</li>
      <li>VERB--NOUN-Acc (1)</li>
      <li>VERB--NOUN-Dat (5)</li>
      <li>VERB--NOUN-Gen (1)</li>
      <li>VERB--NOUN-Nom (3725)</li>
      <li>VERB--PRON (69)</li>
      <li>VERB--PRON-Nom (7769)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (15702)</li>
      <li>VERB--NOUN-Acc (3630)</li>
      <li>VERB--NOUN-Dat (408)</li>
      <li>VERB--NOUN-Gen (18)</li>
      <li>VERB--NOUN-Nom (19)</li>
      <li>VERB--PRON (175)</li>
      <li>VERB--PRON-Acc (2745)</li>
      <li>VERB--PRON-Dat (204)</li>
      <li>VERB--PRON-Nom (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (358)</li>
      <li>VERB--NOUN-Dat (243)</li>
      <li>VERB--PRON (2)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB--PRON-Dat (299)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 276 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: befinden sich, finden sich, konzentrieren sich, beteiligen sich, einigen sich, halten sich, anmelden sich, ändern sich, setzen sich, entwickeln sich, kümmern sich, stellen sich, melden sich, beziehen sich, beschäftigen sich, beschränken sich, erweisen sich, berufen sich, unterscheiden sich, freuen sich, geben sich, einwählen sich, sichern sich, versprechen sich, bewegen sich, eignen sich, orientieren sich, ergeben sich, vorstellen sich, anschließen sich, informieren sich, stützen sich, entschließen sich, treffen sich, trennen sich, begnügen sich, befassen sich, beschweren sich, interessieren sich, lohnen sich, wehren sich, bemühen sich, durchsetzen sich, auswirken sich, etablieren sich, verdoppeln sich, verpflichten sich, verbergen sich, verstehen sich, distanzieren sich</li>
</ul>



<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>aux:pass</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>det:poss</a>, <a>expl:pv</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:arg</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>compound</a></li>
<li>The following 9 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>discourse</a>, <a>clf</a>, <a>fixed</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
