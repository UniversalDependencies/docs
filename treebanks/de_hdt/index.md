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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udde_hdt28)<br />
Download all treebanks: [UD 2.8](/#download)

License: CC BY-SA 4.0

Genre: news, nonfiction, web

Questions, comments?
General annotation questions (either German-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_German-HDT/issues).
If you want to collaborate, please contact [arne&nbsp;(æt)&nbsp;chark&nbsp;•&nbsp;eu].
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

If you use this treebank, please cite the following paper, describing
the conversion of the HDT to UD:

Borges Völker, Emanuel and Wendt, Maximilian and Hennig, Felix and
Köhn, Arne (2019). HDT-UD: A very large Universal Dependencies
Treebank for German. In Proceedings of the Third Workshop on Universal
Dependencies (UDW, SyntaxFest 2019) (pp. 46–57). Paris, France:
Association for Computational Linguistics. url:
https://www.aclweb.org/anthology/W19-8006



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

[AdpType](de_hdt-feat-AdpType.html) – [Aspect](de_hdt-feat-Aspect.html) – [Case](de_hdt-feat-Case.html) – [ConjType](de_hdt-feat-ConjType.html) – [Degree](de_hdt-feat-Degree.html) – [Foreign](de_hdt-feat-Foreign.html) – [Gender](de_hdt-feat-Gender.html) – [Hyph](de_hdt-feat-Hyph.html) – [Mood](de_hdt-feat-Mood.html) – [Number](de_hdt-feat-Number.html) – [NumType](de_hdt-feat-NumType.html) – [PartType](de_hdt-feat-PartType.html) – [Person](de_hdt-feat-Person.html) – [Polarity](de_hdt-feat-Polarity.html) – [Poss](de_hdt-feat-Poss.html) – [PronType](de_hdt-feat-PronType.html) – [PunctType](de_hdt-feat-PunctType.html) – [Reflex](de_hdt-feat-Reflex.html) – [Tense](de_hdt-feat-Tense.html) – [Variant](de_hdt-feat-Variant.html) – [VerbForm](de_hdt-feat-VerbForm.html) – [VerbType](de_hdt-feat-VerbType.html)

## Relations

[acl](de_hdt-dep-acl.html) – [advcl](de_hdt-dep-advcl.html) – [advmod](de_hdt-dep-advmod.html) – [amod](de_hdt-dep-amod.html) – [appos](de_hdt-dep-appos.html) – [aux](de_hdt-dep-aux.html) – [aux:pass](de_hdt-dep-aux-pass.html) – [case](de_hdt-dep-case.html) – [cc](de_hdt-dep-cc.html) – [ccomp](de_hdt-dep-ccomp.html) – [compound](de_hdt-dep-compound.html) – [compound:prt](de_hdt-dep-compound-prt.html) – [conj](de_hdt-dep-conj.html) – [cop](de_hdt-dep-cop.html) – [csubj](de_hdt-dep-csubj.html) – [csubj:pass](de_hdt-dep-csubj-pass.html) – [det](de_hdt-dep-det.html) – [det:poss](de_hdt-dep-det-poss.html) – [discourse](de_hdt-dep-discourse.html) – [expl](de_hdt-dep-expl.html) – [expl:pv](de_hdt-dep-expl-pv.html) – [flat](de_hdt-dep-flat.html) – [flat:name](de_hdt-dep-flat-name.html) – [iobj](de_hdt-dep-iobj.html) – [mark](de_hdt-dep-mark.html) – [nmod](de_hdt-dep-nmod.html) – [nmod:poss](de_hdt-dep-nmod-poss.html) – [nsubj](de_hdt-dep-nsubj.html) – [nsubj:pass](de_hdt-dep-nsubj-pass.html) – [nummod](de_hdt-dep-nummod.html) – [obj](de_hdt-dep-obj.html) – [obl](de_hdt-dep-obl.html) – [obl:arg](de_hdt-dep-obl-arg.html) – [orphan](de_hdt-dep-orphan.html) – [parataxis](de_hdt-dep-parataxis.html) – [punct](de_hdt-dep-punct.html) – [reparandum](de_hdt-dep-reparandum.html) – [root](de_hdt-dep-root.html) – [vocative](de_hdt-dep-vocative.html) – [xcomp](de_hdt-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 189928 sentences and 3399390 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 57753 types of words that contain both letters and punctuation. Examples: US-Dollar, c't, T-Online, e-commerce, Internet-Zugang, e-mail, AT&T, e-plus, mp3.com, Online-Dienst, E-Mails, Internet-Provider, Hewlett-Packard, EU-Kommission, UMTS-Lizenzen, kbit/s, MBit/s, T-Mobil, US-Regierung, US-amerikanischen, Dr., PC-Hersteller, UMTS-Lizenz, OS/2, L2-Cache, Internet-Nutzer, Telekom-Chef, informations-, BIOS-Versionen, US-amerikanische, Web-Server, Nordrhein-Westfalen, Telekom-Sprecher, 's, inc., IT-Branche, Domain-Namen, Telekom-Tochter, amazon.com, T-Aktie, Web-Site, PC-Markt, Web-Seiten, MP3-Player, Settop-Boxen, e-business, s., Baden-Württemberg, Müller-Maguhn, Beta-Version</li>
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
<li>This corpus contains 153 lemmas tagged as pronouns (PRON): 's, Deiner, Deren, Ersterer, Letzteren, Letzterer, all, alle, alledem, allerhand, ander, beide, bisschen, bißchen, d., da, das, dasjenige, dasselbe, dein, dem, demjenigen, den, denen, denjenigen, denselben, der, der/das, derartiges, derer, dergleichen, derjenige, derjenigen, derlei, derselbe, derselben, desjenigen, dessen, dich, die, die/der, diejenige, diejenigen, dies, diese, dieselbe, dieselben, diesem, diesen, dieser, dieses, dir, du, ebensoviele, ein, einander, einerlei, einig, er, er/sie, erster, ersteres, es, etlich, etwas, euch, euer, eurer, genug, ich, ihm, ihn, ihnen, ihr, ihre, ihrem, ihren, ihrer, ihres, ihresgleichen, irgendein, irgendwem, jede, jedefrau, jeder, jedermann, jedermanns, jemand, jene, jenen, jener, jenes, kein, letztere, letzterem, letzteres, man, man(n), manch, mehr, mehrer, mein, meine, meinem, meinen, meiner, meist, mich, mir, nichts, niemand, paar, sein, seine, seinem, seinen, seiner, seines, sich, sie, so, solch, solche, solchen, soviel, soviele, sowas, sämtlich, uns, unser, unsere, unsereins, unserem, unseren, unserer, unseres, viel, was, weiteres, welche, welchem, welchen, welcher, welches, wem, wen, wenig, wer, wieviel, wieviele, wir, zuviel, zweierlei</li>
</ul>

<ul>
<li>This corpus contains 93 lemmas tagged as determiners (DET): 'n, 's, all, allerhand, allerlei, beide, beiderlei, das, dem, demselben, den, den/die, denjenigen, denselben, der, derartig, deren, derjenigen, derlei, derselbe, derselben, des, des/der, desselben, dessen, die, diejenigen, dies, diese, dieselbe, dieselben, diesem, diesen, dieser, dieses, ein, eine, eine(n), einem, einem/er, einen, einer, eines, einig, etlich, etwas, ganz, genug, irgendein, irgendwelch, jede, jeder, jeglich, jene, jenem, jenen, jenig, kein, keinerlei, lauter, manch, mancherlei, mehr, mehrer, mehrerer, meist, nichts, paar, solch, solche, solchen, solcher, solcherlei, solches, soviel, sämtlich, tausenderlei, vielerlei, was, welch, welche, welchem, welchen, welcher, welches, wenig, wessen, wieviel, wieviele, wievielen, zuviel, zuwenig, zweierlei</li>
</ul>

<ul>
<li>Out of the above, 58 lemmas occurred sometimes as PRON and sometimes as DET: 's, all, allerhand, beide, das, dem, den, denjenigen, denselben, der, derjenigen, derlei, derselbe, derselben, dessen, die, diejenigen, dies, diese, dieselbe, dieselben, diesem, diesen, dieser, dieses, ein, einig, etlich, etwas, genug, irgendein, jede, jeder, jene, jenen, kein, manch, mehr, mehrer, meist, nichts, paar, solch, solche, solchen, soviel, sämtlich, was, welche, welchem, welchen, welcher, welches, wenig, wieviel, wieviele, zuviel, zweierlei</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as auxiliaries (AUX): dürfen, haben, können, mögen, müssen, sein, sollen, werden, wollen</li>
</ul>

<ul>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: ist, hat, wird, soll, sind, sei, will, hatte, werden, kann</li>
    <li>VERB: sagte, gibt, geht, steht, bietet, erklärte, kommt, sieht, gab, stellt</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: werden, sein, haben, können, müssen, wollen, dürfen, sollen, mögen</li>
    <li>VERB: machen, geben, lassen, kommen, bringen, anbieten, erreichen, nutzen, gehen, entwickeln</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: worden, gewesen, geworden, gehabt, gewollt</li>
    <li>VERB: angekündigt, gegeben, gemacht, geplant, erwartet, entwickelt, betroffen, gestellt, vorgestellt, verkauft</li>
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
      <li>ADJ: neue, deutsche, erste, weitere, eigene, große, nächste, deutschen, andere, digitale</li>
      <li>ADP: zur</li>
      <li>DET: die, der, eine, einer, diese, dieser, keine, jede, aller, einiger</li>
      <li>NOUN: Millionen, Mark, Milliarden, Firma, Angaben, Software, Zeit, Firmen, Version, Informationen</li>
      <li>PRON: die, sie, seiner, seine, ihre, der, ihrer, diese, eine, unsere</li>
      <li>PROPN: Telekom, c't, Europa, AMD, Sun, Telecom, T-Online, Bertelsmann, dpa, Viag</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: neuen, neue, ersten, neuer, deutsche, deutschen, großen, größte, erste, eigenen</li>
      <li>ADP: im</li>
      <li>DET: der, den, des, dem, einen, ein, einem, eines, diesem, keinen</li>
      <li>NOUN: US-Dollar, Euro, Markt, Dollar, Hersteller, Umsatz, Computer, Preis, Anfang, Mitarbeiter</li>
      <li>PRON: er, der, seinen, dem, ihren, den, seinem, ihn, einer, anderem</li>
      <li>PROPN: Bill, Warner, Michael, Thomas, Steve, Ron, John, Jackson, Gerhard, Peter</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: neue, neues, erste, weiteres, ersten, laufende, neuen, eigenes, erstes, zweite</li>
      <li>ADP: ins, fürs, ans, übers, aufs, ums, durchs, unters, hinters, vors</li>
      <li>ADV: bisschen, bißchen, erstenmal</li>
      <li>DET: das, ein, des, dem, einem, dieses, diesem, eines, kein, jedes</li>
      <li>NOUN: Prozent, Internet, Unternehmen, Jahr, Ende, Quartal, Jahres, Jahren, Netz, Daten</li>
      <li>PRON: es, das, allem, dies, was, mehr, anderem, dem, sein, ihr</li>
      <li>PROPN: AppleStore, PowerBooks, KurzFilmFestival, PowerBook, RealVideo, BusinessCall, Deutschland, FeRAMs, G3-PowerBook, InternetTeam</li>
      <li>SCONJ: dass</li>
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
      <li>ADJ: neue, neuen, viele, anderen, weitere, andere, eigenen, beiden, ersten, deutschen</li>
      <li>AUX: sind, werden, haben, sollen, können, seien, wurden, wollen, würden, waren</li>
      <li>AUX-Fin: sind, werden, haben, sollen, können, seien, wurden, wollen, würden, waren</li>
      <li>DET: die, der, den, alle, keine, diese, einige, allen, aller, mehrere</li>
      <li>NOUN: Prozent, Millionen, Mark, US-Dollar, Milliarden, Euro, Kunden, Unternehmen, Angaben, Firmen</li>
      <li>NUM: zwei, 2000, drei, 2001, 1999, vier, fünf, 20, 100, 30</li>
      <li>PRON: die, sie, wir, ihre, seine, denen, uns, ihren, seinen, diese</li>
      <li>PROPN: USA, Las, Handys, Celerons, Vegas, Niederlande, E-Books, Reuters, iMacs, RDRAMs</li>
      <li>VERB: stehen, lassen, kommen, gehören, gehen, sehen, arbeiten, finden, liegen, machen</li>
      <li>VERB-Fin: stehen, lassen, kommen, gehören, gehen, sehen, arbeiten, finden, liegen, machen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: neuen, neue, deutschen, deutsche, ersten, erste, vergangenen, letzten, zweiten, heutigen</li>
      <li>ADV: bisschen, bißchen, erstenmal</li>
      <li>AUX-Fin: ist, hat, wird, soll, sei, will, hatte, kann, habe, war</li>
      <li>DET: der, die, das, des, den, eine, dem, ein, einen, einem</li>
      <li>NOUN: Internet, Jahr, Unternehmen, Firma, Markt, Ende, Quartal, Software, Jahres, Zeit</li>
      <li>NUM: 1, eins, ein, SR-1, 2^3021377-1, 3166-1, EFS-1, Slot-1, viertel, 2/1</li>
      <li>PRON: es, man, das, er, der, die, sie, allem, dies, was</li>
      <li>PROPN: Microsoft, Telekom, Deutschland, Intel, AOL, IBM, c't, Europa, AMD, Apple</li>
      <li>SCONJ: dass</li>
      <li>VERB: sagte, gibt, geht, steht, bietet, erklärte, kommt, sieht, gab, stellt</li>
      <li>VERB-Fin: sagte, gibt, geht, steht, bietet, erklärte, kommt, sieht, gab, stellt</li>
      <li>X: Inc., Corp., Call</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: neuen, viele, ersten, großen, eigenen, weiteren, deutschen, wenige, beiden, größten</li>
      <li>ADP: für, auf, über, in, um, durch, an, gegen, ohne, ins</li>
      <li>ADV: bisschen, bißchen</li>
      <li>DET: die, den, eine, das, einen, ein, keine, diese, alle, keinen</li>
      <li>NOUN: Internet, Mark, Server, Ende, US-Dollar, Markt, Kunden, Version, Zugang, Anfang</li>
      <li>PRON: sich, ihre, seine, die, das, seinen, sie, sein, es, ihren</li>
      <li>PROPN: Microsoft, AOL, Intel, Napster, Java, Palm, IBM, Apple, OS/2, Netscape</li>
      <li>X: Internetbanking</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: anderen, eigenen, neuen, vielen, wenigen, verschiedenen, kurzem, weiteren, deutschen, beiden</li>
      <li>ADP: von, in, mit, im, bei, nach, auf, zu, am, zum</li>
      <li>DET: der, dem, den, einem, einer, diesem, dieser, allen, einigen, diesen</li>
      <li>NOUN: Jahren, Monaten, Tagen, Ländern, Mitarbeitern, Geräten, Computern, Bereichen, Worten, Zuge</li>
      <li>NUM: dreien, zweien</li>
      <li>PRON: sich, allem, dem, anderem, seiner, denen, der, seinem, ihren, ihrer</li>
      <li>PROPN: Microsoft, heise, AOL, Intel, IBM, Napster, Apple, Frankreich, Netscape, Sony</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: neuer, anderer, beiden, letzten, nächsten, vergangenen, vieler, deutscher, weiterer, verschiedener</li>
      <li>ADP: angesichts, aufgrund, wegen, außerhalb, anhand, innerhalb, trotz, hinsichtlich, während, zugunsten</li>
      <li>DET: der, des, eines, einer, dieser, dieses, aller, einiger, beider, solcher</li>
      <li>NOUN: Jahres, Unternehmens, Konzerns, Geschäftsjahres, Systems, Herstellers, Vorjahres, Marktes, Netzes, Quartals</li>
      <li>NUM: zweier, Tausender</li>
      <li>PRON: seiner, ihrer, seines, ihres, unserer, dessen, unseres, derer, eines, einer</li>
      <li>PROPN: Microsofts, Intels, Apples, Deutschlands, Europas, Suns, AMDs, IBMs, Sonys, ICANNs</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: viele, beiden, neue, neuer, deutsche, größte, erste, erster, amerikanische, japanische</li>
      <li>ADP: namens, voller</li>
      <li>DET: die, der, das, ein, eine, diese, alle, keine, kein, einige</li>
      <li>NOUN: Internet, Name, Vorsitzende, Vorsitzender, Riese, Vorstandsvorsitzender, Unternehmen, Vorstandsvorsitzende, Server, E-Mail</li>
      <li>NUM: eins</li>
      <li>PRON: es, die, man, sie, er, das, der, wir, was, dies</li>
      <li>PROPN: Microsoft, Intel, AOL, IBM, Apple, Napster, Compaq, Siemens, Sony, Gates</li>
      <li>SCONJ: dass</li>
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
      <li>ADJ: weitere, weiteren, später, besser, schneller, stärker, früher, größere, länger, höhere</li>
      <li>ADV: mehr, weiter, eher, weniger</li>
      <li>DET: mehr, weniger</li>
      <li>PRON: mehr, weniger</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: neue, neuen, deutschen, deutsche, anderen, eigenen, andere, vergangenen, möglich, gut</li>
      <li>ADV: so, sehr, oft, gleich</li>
      <li>NOUN: Beschäftigten, Angestellten, Befragten, Deutschen, Vorsitzende, Jugendlichen, Vorstandsvorsitzende, Grünen, Vorsitzender, Interessierte</li>
      <li>PRON: viele, viel, wenig, vielen, wenige, wenigen, weniger, soviele, vieler</li>
      <li>VERB-Inf: überlegen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: ersten, nächsten, erste, letzten, größten, meisten, größte, nächste, erster, letzte</li>
      <li>ADV: möglichst, meist, meistens, meisten</li>
      <li>DET: meisten</li>
      <li>PRON: meisten, wenigsten</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PART: nicht</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>ADJ: möglich, gut, weltweit, deutlich, knapp, künftig, bekannt, schnell, offensichtlich, gleichzeitig</li>
    </ul>
  </li>
</ul>

<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Part: worden, gewesen, geworden, gehabt, gewollt</li>
      <li>VERB-Part: angekündigt, gegeben, gemacht, geplant, erwartet, entwickelt, betroffen, gestellt, vorgestellt, verkauft</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: Habt, Werde, seid</li>
      <li>VERB-Fin: siehe, sprich, update, Stimm, Bleibt, lies, Mach, Mehr, schaut, vgl.</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: ist, hat, wird, soll, sind, sei, will, hatte, werden, kann</li>
      <li>AUX-Fin: ist, hat, wird, soll, sind, sei, will, hatte, werden, kann</li>
      <li>VERB: sagte, gibt, geht, steht, bietet, erklärte, kommt, sieht, gab, stellt</li>
      <li>VERB-Fin: sagte, gibt, geht, steht, bietet, erklärte, kommt, sieht, gab, stellt</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: hatte, war, wurde, wurden, waren, hatten, konnte, musste, konnten, sollte</li>
      <li>VERB: sagte, gab, erklärte, hieß, kündigte, meinte, teilte, stieg, betonte, ging</li>
      <li>VERB-Fin: sagte, gab, erklärte, hieß, kündigte, meinte, teilte, stieg, betonte, ging</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: ist, hat, wird, soll, sind, sei, will, werden, kann, haben</li>
      <li>AUX-Fin: ist, hat, wird, soll, sind, sei, will, werden, kann, haben</li>
      <li>VERB: gibt, geht, steht, bietet, kommt, sieht, stellt, liegt, heißt, stehen</li>
      <li>VERB-Fin: gibt, geht, steht, bietet, kommt, sieht, stellt, liegt, heißt, stehen</li>
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
      <li>ADP: im, am, zum, zur, vom, beim, ins, fürs, ans, übers</li>
      <li>DET: die, der, den, das, des, eine, dem, ein, einen, einem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: diese, dieser, diesem, dieses, diesen, deren, dessen, derselben, denselben, dieselbe</li>
      <li>PRON: das, dies, diese, die, dieser, dem, der, denen, diesen, dieses</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind,Neg,Tot
    <ul>
      <li>DET: keine, kein, einige, mehr, keinen, mehrere, einigen, jedem, weniger, einiger</li>
      <li>PRON: man, allem, anderem, mehr, nichts, einer, alles, etwas, eines, eine</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: wie, wo, wann, warum, wobei, wonach, wodurch, womit, inwieweit, weshalb</li>
      <li>DET: welche, welchen, welcher, welchem, wieviel, welches, welch, wieviele, wessen, wievielen</li>
      <li>PRON: wer, was, wem, wen, wieviel, welche, welcher, welchen, welches, wieviele</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: sich, es, sie, er, wir, ihre, seine, seiner, seinen, ihrer</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: deren, dessen</li>
      <li>PRON: die, der, das, dem, was, denen, den, welches, welche, derer</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: zwei, 2000, drei, 2001, 1999, vier, fünf, 20, 100, 30</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: ihre, seine, seiner, seinen, ihrer, ihren, sein, seinem, ihr, ihrem</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: sich, uns, mich, mir, euch, einander, dir, dich</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: haben, sind, werden, können, wollen, müssen, bin, habe, kann, hatten</li>
      <li>PRON: wir, ich, uns, unsere, unserer, unser, mir, unseren, mich, unserem</li>
      <li>VERB-Fin: brauchen, sehen, wissen, glauben, glaube, stehen, gehen, arbeiten, denke, erwarten</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: werdet, habt, hast, bist, könnt, seid, solltet, dürft, kannst, müsst</li>
      <li>PRON: ihr, du, euch, dir, deine, deiner, eure, dein, dich, euer</li>
      <li>VERB: siehe, sprich, update, Stimm, bleibt, steht, lies, Mach, Mehr, geht</li>
      <li>VERB-Fin: siehe, sprich, update, Stimm, bleibt, steht, lies, Mach, Mehr, geht</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ: viele, 1., beiden, meisten, vielen, paar, wenigen, viel, wenig, 15.</li>
      <li>AUX: ist, hat, wird, soll, sind, sei, will, hatte, werden, kann</li>
      <li>AUX-Fin: ist, hat, wird, soll, sind, sei, will, hatte, werden, kann</li>
      <li>DET: keine, alle, kein, einige, mehr, aller, allen, keinen, mehrere, einigen</li>
      <li>NOUN: Prozent, Millionen, Internet, Unternehmen, Mark, US-Dollar, Milliarden, Jahr, Kunden, Firma</li>
      <li>NUM: zwei, 2000, drei, 2001, 1999, vier, fünf, 20, 100, 30</li>
      <li>PRON: sich, es, die, sie, man, das, er, der, ihre, seine</li>
      <li>PROPN: Microsoft, Telekom, Deutschland, Intel, USA, telepolis, AOL, ibm, ICANN, CeBIT</li>
      <li>SCONJ: dass</li>
      <li>VERB: sagte, gibt, geht, steht, bietet, erklärte, kommt, sieht, gab, stellt</li>
      <li>VERB-Fin: sagte, gibt, geht, steht, bietet, erklärte, kommt, sieht, gab, stellt</li>
      <li>X: of, internet, the, and, digital, mobile, media, for, OS, network</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Circ
        <ul>
          <li>ADP: hinaus, aus, an, hin, her, hinweg, heraus, vorbei, zu, auf</li>
        </ul>
      </li>
      <li>Post
        <ul>
          <li>ADP: zufolge, nach, lang, gegenüber, wegen, über, gemäß, entgegen, entlang, halber</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: in, von, für, mit, auf, im, bei, nach, an, zu</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ConjType</a>
    <ul>
      <li>Comp
        <ul>
          <li>CCONJ: als, wie, denn</li>
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
          <li>X: of, internet, the, and, digital, mobile, media, for, OS, network</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Hyph</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: informations-, internet-, Rück-, Audio-, computer-, Industrie-, Telekommunikations-, Telefon-, Hard-, Umsatz-</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PartType</a>
    <ul>
      <li>Inf
        <ul>
          <li>PART: zu</li>
        </ul>
      </li>
      <li>Res
        <ul>
          <li>INTJ: ja, nein</li>
        </ul>
      </li>
      <li>Vbp
        <ul>
          <li>ADP: an, aus, vor, ein, auf, ab, mit, bekannt, zurück, zu</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PunctType</a>
    <ul>
      <li>Brck
        <ul>
          <li>PUNCT: ", (, ), -</li>
        </ul>
      </li>
      <li>Comm
        <ul>
          <li>PUNCT: ,</li>
        </ul>
      </li>
      <li>Peri
        <ul>
          <li>PUNCT: ., :, ;, ?, !, ..., !!!, !!, !!!!, ..</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>VerbType</a>
    <ul>
      <li>Mod
        <ul>
          <li>AUX-Fin: soll, will, kann, sollen, können, wollen, muss, könnte, konnte, müssen</li>
          <li>AUX-Inf: können, müssen, wollen, dürfen, sollen, mögen</li>
          <li>AUX-Part: gewollt</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: sein.</li>
</ul>

<ul>
<li>This corpus uses 9 lemmas as auxiliaries (<a>aux</a>). Examples: haben, können, sollen, wollen, werden, müssen, sein, dürfen, mögen.</li>
<li>This corpus uses 3 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: werden, sein, haben.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Nom (3)</li>
      <li>VERB-Fin--NOUN (63224)</li>
      <li>VERB-Fin--NOUN-Acc (3)</li>
      <li>VERB-Fin--NOUN-Dat (18)</li>
      <li>VERB-Fin--NOUN-Gen (7)</li>
      <li>VERB-Fin--NOUN-Nom (3344)</li>
      <li>VERB-Fin--PRON (256)</li>
      <li>VERB-Fin--PRON-Acc (2)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Fin--PRON-Nom (29818)</li>
      <li>VERB-Inf--NOUN (21330)</li>
      <li>VERB-Inf--NOUN-Dat (12)</li>
      <li>VERB-Inf--NOUN-Gen (3)</li>
      <li>VERB-Inf--NOUN-Nom (1028)</li>
      <li>VERB-Inf--PRON (112)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Dat (2)</li>
      <li>VERB-Inf--PRON-Nom (11826)</li>
      <li>VERB-Part--NOUN (11353)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN-Dat (3)</li>
      <li>VERB-Part--NOUN-Gen (7)</li>
      <li>VERB-Part--NOUN-Nom (646)</li>
      <li>VERB-Part--PRON (33)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
      <li>VERB-Part--PRON-Nom (3915)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (3)</li>
      <li>VERB-Fin--NOUN (51684)</li>
      <li>VERB-Fin--NOUN-ADP(Am) (4)</li>
      <li>VERB-Fin--NOUN-ADP(An) (18)</li>
      <li>VERB-Fin--NOUN-ADP(Auf) (37)</li>
      <li>VERB-Fin--NOUN-ADP(Aus) (2)</li>
      <li>VERB-Fin--NOUN-ADP(Bei) (4)</li>
      <li>VERB-Fin--NOUN-ADP(Für) (39)</li>
      <li>VERB-Fin--NOUN-ADP(Gegen) (1)</li>
      <li>VERB-Fin--NOUN-ADP(Im) (3)</li>
      <li>VERB-Fin--NOUN-ADP(In) (11)</li>
      <li>VERB-Fin--NOUN-ADP(Ins) (2)</li>
      <li>VERB-Fin--NOUN-ADP(Mit) (20)</li>
      <li>VERB-Fin--NOUN-ADP(Nach) (8)</li>
      <li>VERB-Fin--NOUN-ADP(Vom) (5)</li>
      <li>VERB-Fin--NOUN-ADP(Von) (14)</li>
      <li>VERB-Fin--NOUN-ADP(Zu) (95)</li>
      <li>VERB-Fin--NOUN-ADP(Zum) (48)</li>
      <li>VERB-Fin--NOUN-ADP(Zur) (34)</li>
      <li>VERB-Fin--NOUN-ADP(als) (1)</li>
      <li>VERB-Fin--NOUN-ADP(am) (28)</li>
      <li>VERB-Fin--NOUN-ADP(an) (363)</li>
      <li>VERB-Fin--NOUN-ADP(auf) (1345)</li>
      <li>VERB-Fin--NOUN-ADP(auf)-ADP(hin) (8)</li>
      <li>VERB-Fin--NOUN-ADP(auf)-ADP(zu) (3)</li>
      <li>VERB-Fin--NOUN-ADP(aufs) (5)</li>
      <li>VERB-Fin--NOUN-ADP(aus) (153)</li>
      <li>VERB-Fin--NOUN-ADP(bei) (18)</li>
      <li>VERB-Fin--NOUN-ADP(beim) (4)</li>
      <li>VERB-Fin--NOUN-ADP(durch) (4)</li>
      <li>VERB-Fin--NOUN-ADP(für) (362)</li>
      <li>VERB-Fin--NOUN-ADP(gegen) (110)</li>
      <li>VERB-Fin--NOUN-ADP(im) (7)</li>
      <li>VERB-Fin--NOUN-ADP(in) (233)</li>
      <li>VERB-Fin--NOUN-ADP(ins) (27)</li>
      <li>VERB-Fin--NOUN-ADP(mit) (559)</li>
      <li>VERB-Fin--NOUN-ADP(nach) (108)</li>
      <li>VERB-Fin--NOUN-ADP(um) (53)</li>
      <li>VERB-Fin--NOUN-ADP(ums) (2)</li>
      <li>VERB-Fin--NOUN-ADP(unter) (35)</li>
      <li>VERB-Fin--NOUN-ADP(vom) (53)</li>
      <li>VERB-Fin--NOUN-ADP(von) (252)</li>
      <li>VERB-Fin--NOUN-ADP(von)-ADP(aus) (5)</li>
      <li>VERB-Fin--NOUN-ADP(vor) (4)</li>
      <li>VERB-Fin--NOUN-ADP(wie) (1)</li>
      <li>VERB-Fin--NOUN-ADP(zu) (406)</li>
      <li>VERB-Fin--NOUN-ADP(zum) (214)</li>
      <li>VERB-Fin--NOUN-ADP(zur) (133)</li>
      <li>VERB-Fin--NOUN-ADP(zwischen) (1)</li>
      <li>VERB-Fin--NOUN-ADP(Über) (14)</li>
      <li>VERB-Fin--NOUN-ADP(über) (532)</li>
      <li>VERB-Fin--NOUN-Acc (2018)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(An) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(Auf) (3)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(an) (8)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(auf) (67)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(aufs) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(durchs) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(für) (12)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(gegen) (11)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(in) (8)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(ins) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(unter) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(Über) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(über) (11)</li>
      <li>VERB-Fin--NOUN-Dat (677)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(An) (4)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(Auf) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(Bei) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(In) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(Mit) (5)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(Nach) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(Von) (4)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(Zu) (84)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(Zum) (2)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(Zur) (2)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(an) (21)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(auf) (11)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(aus) (47)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(bei) (2)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(beim) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(in) (5)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(mit) (113)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(nach) (49)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(vom) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(von) (64)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(von)-ADP(aus) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(vor) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(zu) (211)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(zum) (21)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(zur) (4)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(zwischen) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(über) (3)</li>
      <li>VERB-Fin--NOUN-Gen (33)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(an) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(auf) (1)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(um) (1)</li>
      <li>VERB-Fin--NOUN-Nom (29)</li>
      <li>VERB-Fin--PRON (421)</li>
      <li>VERB-Fin--PRON-Acc (9079)</li>
      <li>VERB-Fin--PRON-Dat (791)</li>
      <li>VERB-Fin--PRON-Gen (1)</li>
      <li>VERB-Fin--PRON-Nom (7)</li>
      <li>VERB-Inf--NOUN (37081)</li>
      <li>VERB-Inf--NOUN-ADP(Am) (2)</li>
      <li>VERB-Inf--NOUN-ADP(An) (15)</li>
      <li>VERB-Inf--NOUN-ADP(Auf) (22)</li>
      <li>VERB-Inf--NOUN-ADP(Bei) (1)</li>
      <li>VERB-Inf--NOUN-ADP(Für) (11)</li>
      <li>VERB-Inf--NOUN-ADP(In) (4)</li>
      <li>VERB-Inf--NOUN-ADP(Mit) (32)</li>
      <li>VERB-Inf--NOUN-ADP(Vom) (1)</li>
      <li>VERB-Inf--NOUN-ADP(Von) (7)</li>
      <li>VERB-Inf--NOUN-ADP(Zu) (5)</li>
      <li>VERB-Inf--NOUN-ADP(Zum) (1)</li>
      <li>VERB-Inf--NOUN-ADP(Zur) (2)</li>
      <li>VERB-Inf--NOUN-ADP(am) (26)</li>
      <li>VERB-Inf--NOUN-ADP(an) (196)</li>
      <li>VERB-Inf--NOUN-ADP(ans) (1)</li>
      <li>VERB-Inf--NOUN-ADP(auf) (575)</li>
      <li>VERB-Inf--NOUN-ADP(aufs) (3)</li>
      <li>VERB-Inf--NOUN-ADP(aus) (27)</li>
      <li>VERB-Inf--NOUN-ADP(bei) (29)</li>
      <li>VERB-Inf--NOUN-ADP(beim) (5)</li>
      <li>VERB-Inf--NOUN-ADP(durch) (2)</li>
      <li>VERB-Inf--NOUN-ADP(für) (166)</li>
      <li>VERB-Inf--NOUN-ADP(gegen) (16)</li>
      <li>VERB-Inf--NOUN-ADP(im) (3)</li>
      <li>VERB-Inf--NOUN-ADP(in) (218)</li>
      <li>VERB-Inf--NOUN-ADP(ins) (10)</li>
      <li>VERB-Inf--NOUN-ADP(mit) (232)</li>
      <li>VERB-Inf--NOUN-ADP(nach) (34)</li>
      <li>VERB-Inf--NOUN-ADP(um) (10)</li>
      <li>VERB-Inf--NOUN-ADP(unter) (8)</li>
      <li>VERB-Inf--NOUN-ADP(vom) (42)</li>
      <li>VERB-Inf--NOUN-ADP(von) (125)</li>
      <li>VERB-Inf--NOUN-ADP(zu) (221)</li>
      <li>VERB-Inf--NOUN-ADP(zum) (87)</li>
      <li>VERB-Inf--NOUN-ADP(zur) (75)</li>
      <li>VERB-Inf--NOUN-ADP(zwischen) (9)</li>
      <li>VERB-Inf--NOUN-ADP(Über) (3)</li>
      <li>VERB-Inf--NOUN-ADP(über) (148)</li>
      <li>VERB-Inf--NOUN-Acc (1396)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(Auf) (2)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(Für) (1)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(an) (3)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(auf) (20)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(für) (4)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(gegen) (3)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(in) (8)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(ins) (1)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(über) (3)</li>
      <li>VERB-Inf--NOUN-Dat (294)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(Mit) (8)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(Nach) (1)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(Von) (1)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(Zu) (4)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(am) (2)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(an) (25)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(auf) (1)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(aus) (5)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(bei) (2)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(in) (4)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(mit) (56)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(nach) (19)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(von) (27)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(zu) (73)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(zum) (3)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(zur) (3)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(zwischen) (2)</li>
      <li>VERB-Inf--NOUN-Gen (15)</li>
      <li>VERB-Inf--NOUN-Nom (16)</li>
      <li>VERB-Inf--PRON (486)</li>
      <li>VERB-Inf--PRON-Acc (4032)</li>
      <li>VERB-Inf--PRON-Dat (302)</li>
      <li>VERB-Inf--PRON-Gen (2)</li>
      <li>VERB-Inf--PRON-Nom (3)</li>
      <li>VERB-Part--NOUN (14658)</li>
      <li>VERB-Part--NOUN-ADP(An) (3)</li>
      <li>VERB-Part--NOUN-ADP(Auf) (18)</li>
      <li>VERB-Part--NOUN-ADP(Für) (5)</li>
      <li>VERB-Part--NOUN-ADP(In) (2)</li>
      <li>VERB-Part--NOUN-ADP(Ins) (1)</li>
      <li>VERB-Part--NOUN-ADP(Mit) (11)</li>
      <li>VERB-Part--NOUN-ADP(Um) (2)</li>
      <li>VERB-Part--NOUN-ADP(Vom) (1)</li>
      <li>VERB-Part--NOUN-ADP(Von) (2)</li>
      <li>VERB-Part--NOUN-ADP(Zu) (2)</li>
      <li>VERB-Part--NOUN-ADP(Zum) (4)</li>
      <li>VERB-Part--NOUN-ADP(Zur) (4)</li>
      <li>VERB-Part--NOUN-ADP(am) (2)</li>
      <li>VERB-Part--NOUN-ADP(an) (153)</li>
      <li>VERB-Part--NOUN-ADP(auf) (283)</li>
      <li>VERB-Part--NOUN-ADP(aufs) (4)</li>
      <li>VERB-Part--NOUN-ADP(aus) (2)</li>
      <li>VERB-Part--NOUN-ADP(bei) (2)</li>
      <li>VERB-Part--NOUN-ADP(für) (87)</li>
      <li>VERB-Part--NOUN-ADP(gegen) (58)</li>
      <li>VERB-Part--NOUN-ADP(im) (1)</li>
      <li>VERB-Part--NOUN-ADP(in) (148)</li>
      <li>VERB-Part--NOUN-ADP(ins) (24)</li>
      <li>VERB-Part--NOUN-ADP(mit) (198)</li>
      <li>VERB-Part--NOUN-ADP(nach) (23)</li>
      <li>VERB-Part--NOUN-ADP(um) (25)</li>
      <li>VERB-Part--NOUN-ADP(unter) (16)</li>
      <li>VERB-Part--NOUN-ADP(vom) (18)</li>
      <li>VERB-Part--NOUN-ADP(von) (106)</li>
      <li>VERB-Part--NOUN-ADP(zu) (185)</li>
      <li>VERB-Part--NOUN-ADP(zum) (64)</li>
      <li>VERB-Part--NOUN-ADP(zur) (82)</li>
      <li>VERB-Part--NOUN-ADP(Über) (7)</li>
      <li>VERB-Part--NOUN-ADP(über) (62)</li>
      <li>VERB-Part--NOUN-Acc (551)</li>
      <li>VERB-Part--NOUN-Acc-ADP(An) (1)</li>
      <li>VERB-Part--NOUN-Acc-ADP(an) (6)</li>
      <li>VERB-Part--NOUN-Acc-ADP(auf) (18)</li>
      <li>VERB-Part--NOUN-Acc-ADP(für) (8)</li>
      <li>VERB-Part--NOUN-Acc-ADP(in) (9)</li>
      <li>VERB-Part--NOUN-Acc-ADP(unter) (1)</li>
      <li>VERB-Part--NOUN-Acc-ADP(über) (4)</li>
      <li>VERB-Part--NOUN-Dat (333)</li>
      <li>VERB-Part--NOUN-Dat-ADP(An) (1)</li>
      <li>VERB-Part--NOUN-Dat-ADP(Mit) (3)</li>
      <li>VERB-Part--NOUN-Dat-ADP(Nach) (1)</li>
      <li>VERB-Part--NOUN-Dat-ADP(Zu) (2)</li>
      <li>VERB-Part--NOUN-Dat-ADP(an) (3)</li>
      <li>VERB-Part--NOUN-Dat-ADP(aus) (1)</li>
      <li>VERB-Part--NOUN-Dat-ADP(in) (2)</li>
      <li>VERB-Part--NOUN-Dat-ADP(mit) (30)</li>
      <li>VERB-Part--NOUN-Dat-ADP(nach) (7)</li>
      <li>VERB-Part--NOUN-Dat-ADP(vom) (1)</li>
      <li>VERB-Part--NOUN-Dat-ADP(von) (18)</li>
      <li>VERB-Part--NOUN-Dat-ADP(zu) (54)</li>
      <li>VERB-Part--NOUN-Dat-ADP(zum) (3)</li>
      <li>VERB-Part--NOUN-Dat-ADP(zur) (8)</li>
      <li>VERB-Part--NOUN-Dat-ADP(zwischen) (1)</li>
      <li>VERB-Part--NOUN-Dat-ADP(über) (2)</li>
      <li>VERB-Part--NOUN-Gen (12)</li>
      <li>VERB-Part--NOUN-Gen-ADP(vom) (1)</li>
      <li>VERB-Part--NOUN-Gen-ADP(zu) (1)</li>
      <li>VERB-Part--NOUN-Nom (11)</li>
      <li>VERB-Part--PRON (92)</li>
      <li>VERB-Part--PRON-Acc (2047)</li>
      <li>VERB-Part--PRON-Dat (312)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (1074)</li>
      <li>VERB-Fin--NOUN-Dat (446)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Dat (868)</li>
      <li>VERB-Inf--NOUN (1058)</li>
      <li>VERB-Inf--NOUN-Dat (468)</li>
      <li>VERB-Inf--PRON (5)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Dat (775)</li>
      <li>VERB-Part--NOUN (343)</li>
      <li>VERB-Part--NOUN-Dat (103)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Dat (285)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 503 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: befinden sich, beteiligen sich, finden sich, konzentrieren sich, einigen sich, entwickeln sich, halten sich, stellen sich, ändern sich, freuen sich, setzen sich, geben sich, eignen sich, kümmern sich, erweisen sich, trennen sich, melden sich, beschäftigen sich, ergeben sich, bewegen sich, beziehen sich, erhöhen sich, anmelden sich, sichern sich, durchsetzen sich, versprechen sich, unterscheiden sich, berufen sich, verdoppeln sich, vorstellen sich, bemühen sich, auswirken sich, beschränken sich, bewerben sich, informieren sich, stützen sich, treffen sich, wehren sich, lohnen sich, orientieren sich, verpflichten sich, zurückziehen sich, anschließen sich, entschließen sich, interessieren sich, befassen sich, herausstellen sich, etablieren sich, einwählen sich, verbreiten sich</li>
</ul>


<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 931 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: lassen sich, handeln sich, zeigen sich, machen sich, äußern sich, sehen sich, wenden sich, richten sich, belaufen sich, entscheiden sich, erhoffen sich, aussprechen sich, fühlen sich, verschaffen sich, erklären sich, einig sich, zeichnen sich, präsentieren sich, schließen sich, sicher sich, teilen sich, sprechen sich, holen sich, leisten sich, verändern sich, verhalten sich, wünschen sich, schützen sich, verabschieden sich, fragen sich, verständigen sich, - sich, nennen sich, registrieren sich, tun sich, verbessern sich, kaufen sich, nehmen sich, verkaufen sich, entpuppen sich, bezeichnen sich, schweigen sich, häufen sich, wirken sich, bestätigen sich, zusammentun sich, gestalten sich, suchen sich, verringern sich, besorgen sich</li>
    <ul>
      <li>Out of those, 49 lemmas occurred more than once, but never without a reflexive dependent. Examples: zusammentun, einhandeln, bahnen, breiten, durchringen, zuwenden, zusammenfinden, auskennen, einpendeln, einschleichen, reiben, umschauen, herumschlagen, entledigen, hervortun, aufschwingen, zuziehen, herumsprechen, verleiben, zurechtfinden, überschneiden, gegenübersehen, verbitten, vorarbeiten, angeln, auftun, einfinden, herausreden, hinsetzen, hochschaukeln, klinken, nisten, zusammenraufen, Klaren, abzeichnende, ausschweigen, einreihen, einschießen, erdreisten, heften, hingeben, hocharbeiten, loggen, lossagen, materialisierten, schaukeln, umtun, verfestigen, überheben</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>aux:pass</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>det:poss</a>, <a>expl:pv</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:arg</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>fixed</a>, <a>list</a>, <a>goeswith</a>, <a>dep</a></li>
</ul>
