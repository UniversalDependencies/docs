---
layout: base
title:  'UD_German-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD German PUD

Language: [German](/de/index.html) (code: `de`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Georg Rehm, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Michael Mandl, Sebastian Bank, Martin Popel, Daniel Zeman.

Repository: [UD_German-PUD](https://github.com/UniversalDependencies/UD_German-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udde_pud212)<br />
Download all treebanks: [UD 2.12](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either German-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_German-PUD/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | not available |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

This is a part of the Parallel Universal Dependencies (PUD) treebanks created
for the [CoNLL 2017 shared task on Multilingual Parsing from Raw Text to
Universal Dependencies](http://universaldependencies.org/conll17/).




There are
1000 sentences in each language, always in the same order. (The sentence
alignment is 1-1 but occasionally a sentence-level segment actually consists
of two real sentences.) The sentences are taken from the news domain (sentence
id starts in ‘n’) and from Wikipedia (sentence id starts with ‘w’). There are
usually only a few sentences from each document, selected randomly, not
necessarily adjacent. The digits on the second and third position in the
sentence ids encode the original language of the sentence. The first 750
sentences are originally English (01). The remaining 250 sentences are
originally German (02), French (03), Italian (04) or Spanish (05) and they
were translated to other languages via English. Translation into German,
French, Italian, Spanish, Arabic, Hindi, Chinese, Indonesian, Japanese,
Korean, Portuguese, Russian, Thai and Turkish has been provided by DFKI and
performed (except for German) by professional translators. Then the data has
been annotated morphologically and syntactically by Google according to Google
universal annotation guidelines; finally, it has been converted by members of
the UD community to UD v2 guidelines.

Additional languages have been provided (both translation and native UD v2
annotation) by other teams: Czech by Charles University, Finnish by University
of Turku and Swedish by Uppsala University.

The entire treebank is labeled as test set (and was used for testing in the
shared task). If it is used for training in future research, the users should
employ ten-fold cross-validation.


## Acknowledgments

# Statistics of UD German PUD

## POS Tags

[ADJ](de_pud-pos-ADJ.html) – [ADP](de_pud-pos-ADP.html) – [ADV](de_pud-pos-ADV.html) – [AUX](de_pud-pos-AUX.html) – [CCONJ](de_pud-pos-CCONJ.html) – [DET](de_pud-pos-DET.html) – [NOUN](de_pud-pos-NOUN.html) – [NUM](de_pud-pos-NUM.html) – [PART](de_pud-pos-PART.html) – [PRON](de_pud-pos-PRON.html) – [PROPN](de_pud-pos-PROPN.html) – [PUNCT](de_pud-pos-PUNCT.html) – [SCONJ](de_pud-pos-SCONJ.html) – [SYM](de_pud-pos-SYM.html) – [VERB](de_pud-pos-VERB.html) – [X](de_pud-pos-X.html)

## Features

[Abbr](de_pud-feat-Abbr.html) – [AdpType](de_pud-feat-AdpType.html) – [Case](de_pud-feat-Case.html) – [Definite](de_pud-feat-Definite.html) – [Degree](de_pud-feat-Degree.html) – [Foreign](de_pud-feat-Foreign.html) – [Gender](de_pud-feat-Gender.html) – [Gender[psor]](de_pud-feat-Gender-psor.html) – [Mood](de_pud-feat-Mood.html) – [Number](de_pud-feat-Number.html) – [Number[psor]](de_pud-feat-Number-psor.html) – [NumType](de_pud-feat-NumType.html) – [Person](de_pud-feat-Person.html) – [Polarity](de_pud-feat-Polarity.html) – [Polite](de_pud-feat-Polite.html) – [Poss](de_pud-feat-Poss.html) – [PronType](de_pud-feat-PronType.html) – [Reflex](de_pud-feat-Reflex.html) – [Tense](de_pud-feat-Tense.html) – [VerbForm](de_pud-feat-VerbForm.html)

## Relations

[acl](de_pud-dep-acl.html) – [acl:relcl](de_pud-dep-acl-relcl.html) – [advcl](de_pud-dep-advcl.html) – [advmod](de_pud-dep-advmod.html) – [amod](de_pud-dep-amod.html) – [appos](de_pud-dep-appos.html) – [aux](de_pud-dep-aux.html) – [aux:pass](de_pud-dep-aux-pass.html) – [case](de_pud-dep-case.html) – [cc](de_pud-dep-cc.html) – [cc:preconj](de_pud-dep-cc-preconj.html) – [ccomp](de_pud-dep-ccomp.html) – [compound](de_pud-dep-compound.html) – [compound:prt](de_pud-dep-compound-prt.html) – [conj](de_pud-dep-conj.html) – [cop](de_pud-dep-cop.html) – [csubj](de_pud-dep-csubj.html) – [csubj:pass](de_pud-dep-csubj-pass.html) – [dep](de_pud-dep-dep.html) – [det](de_pud-dep-det.html) – [det:poss](de_pud-dep-det-poss.html) – [discourse](de_pud-dep-discourse.html) – [expl](de_pud-dep-expl.html) – [expl:pv](de_pud-dep-expl-pv.html) – [fixed](de_pud-dep-fixed.html) – [flat](de_pud-dep-flat.html) – [flat:name](de_pud-dep-flat-name.html) – [iobj](de_pud-dep-iobj.html) – [mark](de_pud-dep-mark.html) – [nmod](de_pud-dep-nmod.html) – [nmod:poss](de_pud-dep-nmod-poss.html) – [nsubj](de_pud-dep-nsubj.html) – [nsubj:pass](de_pud-dep-nsubj-pass.html) – [nummod](de_pud-dep-nummod.html) – [obj](de_pud-dep-obj.html) – [obl](de_pud-dep-obl.html) – [obl:agent](de_pud-dep-obl-agent.html) – [obl:arg](de_pud-dep-obl-arg.html) – [obl:tmod](de_pud-dep-obl-tmod.html) – [orphan](de_pud-dep-orphan.html) – [parataxis](de_pud-dep-parataxis.html) – [punct](de_pud-dep-punct.html) – [root](de_pud-dep-root.html) – [vocative](de_pud-dep-vocative.html) – [xcomp](de_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences, 21001 tokens and 21332 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 2889 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 33 types of words that contain both letters and punctuation. Examples: Chr., v., I., bzw., B., St., ca., n., IV., Mrd., Nr., n't, Addenbrooke's, Darius', Dr., Hl., III., M.A., Mio., Männer., Pompeius', Smith', Thutmosis', VI., X., Z., Zettel's, bleiben., führen., tritt., u.a., werden., will.</li>
</ul>

<ul>
<li>This corpus contains 331 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 9 types of multi-word tokens. Examples: im, am, zum, zur, vom, beim, ins, z., ans.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: INTJ</li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): n't, nicht, wohl, zu</li>
</ul>

<ul>
<li>This corpus contains 19 lemmas tagged as pronouns (PRON): I, alledem, der, du, er, es, etwas, her, ich, ihr, man, my, nichts, sich, sie, was, wer, wir, you</li>
</ul>

<ul>
<li>This corpus contains 34 lemmas tagged as determiners (DET): a, al, alle, anderer, beide, der, derjenige, derselbe, dieser, ein, einige, el, euer, ihr, irgendein, jeder, jeglicher, jener, kein, keinerlei, le, mehr, mein, meist, nostrum, sein, solcher, that, the, una, unser, viel, welcher, wenig</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: der, ihr</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as auxiliaries (AUX): do, dürfen, haben, können, mögen, müssen, sein, sollen, werden, wollen</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: haben, können, sein, werden, wollen</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: war</li>
    <li>VERB: bleiben</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: finden, abzuschreiben, arbeiten, aufrechtzuerhalten, aufzutreten, begrenzen, behandeln, bekommen, beschäftigen, besuchen</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: abgesehen, basierend, gefolgt, gesagt, Breaking, Geformt, abgehärtet, angeklagt, begründet, bekannt</li>
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
      <li>ADJ: neue, eigene, ersten, große, öffentliche, amerikanischen, guten, kleine, neuen, verschiedenen</li>
      <li>DET: der, die, eine, einer, seine, diese, ihre, seiner, ihrer, dieser</li>
      <li>NOUN: Zeit, Regierung, Stadt, Geschichte, Welt, Armee, Frau, Millionen, Region, Reihe</li>
      <li>NUM: zweier</li>
      <li>PRON: sie, die, der, ihr, Her</li>
      <li>PROPN: Qing, US, BBC, Clinton, Kesha, Mongolei, Alpen, Blunt, Erde, Jasmine</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: ersten, Vereinigten, letzten, neue, 1., besten, gesamten, große, großer, neuen</li>
      <li>DET: dem, der, den, des, ein, einen, einem, dieser, seinen, diesem</li>
      <li>NOUN: Menschen, Oktober, Teil, Film, Kaiser, April, Fall, Krieg, Präsident, Tag</li>
      <li>NUM: 24, hunderte, zweier</li>
      <li>PRON: er, der, sie, ihm, ihn, dem, dessen, ihnen, den</li>
      <li>PROPN: Chr., Trump, Joseph, USA, Donald, Martin, Richard, Bogd, Christopher, Columbus</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: letzten, ersten, Olympischen, eigenen, 8., drittes, karibische, neuen, 13., 1960er</li>
      <li>DET: das, dem, ein, des, einem, eines, ihr, dies, dieses, sein</li>
      <li>NOUN: Jahr, Jahre, Jahren, Jahrhundert, Mal, Land, Leben, Meer, Ende, Reich</li>
      <li>PRON: es, was, das, etwas, nichts, sie, dem, alldem</li>
      <li>PROPN: China, Frankreich, Hong, Paris, Russland, Asien, Danewerk, Deutschland, England, Griechenland</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: letzten, neue, ersten, verschiedene, weitere, Vereinigten, neuen, Olympischen, kleine, verschiedenen</li>
      <li>AUX: sind, wurden, waren, werden, haben, hatten, können, müssen, würden, konnten</li>
      <li>DET: die, den, der, viele, seine, diese, einige, alle, ihre, beiden</li>
      <li>NOUN: Jahre, Jahren, Menschen, Millionen, Auswirkungen, Teile, Inseln, Leute, Länder, Männer</li>
      <li>NUM: zweier, hunderte</li>
      <li>PRON: die, sie, wir, denen, uns, ihnen, deren, euch, ihr</li>
      <li>PROPN: USA, Alpen, Anden, Maya, Niederlanden, Osmanen, Andes, Armana, Avro, Bantu</li>
      <li>VERB: haben, hatten, sind, nahmen, waren, zählen, enthalten, entschieden, eroberten, finden</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: ersten, neue, eigene, große, britischen, erste, gemeinsamen, letzten, neuen, zweiten</li>
      <li>AUX: ist, war, wurde, wird, hat, hatte, kann, würde, muss, könnte</li>
      <li>AUX-Fin: war</li>
      <li>DET: der, dem, die, das, eine, des, ein, den, einer, einem</li>
      <li>NOUN: Jahr, Zeit, Regierung, Stadt, Geschichte, Jahrhundert, Oktober, Teil, Film, Mal</li>
      <li>NUM: 24</li>
      <li>PRON: es, er, der, sie, die, ich, was, das, man, ihm</li>
      <li>PROPN: Chr., China, Trump, Frankreich, Joseph, Hong, Paris, Qing, Russland, US</li>
      <li>VERB: sagte, ist, hat, gibt, wurde, sagt, begann, war, hatte, führte</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: neue, letzten, eigene, weitere, große, kleine, neuen, öffentliche, Olympischen, achämenidische</li>
      <li>DET: die, den, eine, das, einen, ein, seine, ihre, keine, diese</li>
      <li>NOUN: Jahre, Dollar, Auswirkungen, Rolle, Armee, GBP, Land, Mal, Milliarden, Monate</li>
      <li>NUM: hunderte</li>
      <li>PRON: sich, es, die, ihn, sie, mich, uns, was, das, nichts</li>
      <li>PROPN: Italien, Trump, Antarktis, Deutschland, Kuba, Martin, Richard, Twitter, Abakumow, Adria</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: ersten, letzten, neuen, selben, zweiten, 1., Vereinigten, besten, deutschen, gemeinsamen</li>
      <li>ADP: zu</li>
      <li>DET: dem, der, den, einem, einer, ihrer, dieser, seiner, diesem, ihren</li>
      <li>NOUN: Jahr, Jahren, Zeit, Jahrhundert, Bezug, Fall, Krieg, Leben, Region, Tag</li>
      <li>NUM: 24</li>
      <li>PRON: ihm, denen, sich, der, ihr, dem, ihnen, mir, alldem, uns</li>
      <li>PROPN: Chr., Paris, Asien, London, Ontario, USA, England, Frankreich, Großbritannien, Hong</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: ersten, Römischen, britischen, eigenen, gemeinsamen, alten, amerikanischen, ehemaligen, europäischer, gesamten</li>
      <li>DET: der, des, eines, einer, seiner, dieser, ihrer, seines, ihres, anderer</li>
      <li>NOUN: Jahre, Stadt, Zeit, Jahres, Jahrhunderts, Krieges, Lebens, Dynastie, Frau, Landes</li>
      <li>NUM: zweier</li>
      <li>PRON: dessen, deren, My, Her</li>
      <li>PROPN: Qing, Albaniens, Chinas, Clintons, Dänemarks, Europas, USA, AKP, Afrikas, Alpen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: britische, erste, neue, verschiedene, große, letzte, australischen, großer, kleine, mazedonische</li>
      <li>DET: die, der, das, ein, eine, diese, seine, viele, ihr, dies</li>
      <li>NOUN: Film, Menschen, Präsident, Regierung, König, Leute, Polizei, System, Geschichte, Inseln</li>
      <li>PRON: er, es, die, sie, der, ich, wir, man, das, was</li>
      <li>PROPN: China, Trump, Donald, Joseph, Kesha, Blunt, Clinton, Frankreich, John, Mishima</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: der, die, dem, den, das, des, the, El, Le, Los</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: eine, ein, einer, einem, einen, eines, a, una</li>
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
      <li>ADJ: afrikanischer, besser, beunruhigender, größer, größere, höher, höherer, kürzer, lieber, nützlicher</li>
      <li>ADV: mehr, später, besser, genauer, weniger, attraktiver, eher, früher, häufiger, lieber</li>
      <li>DET: mehr, mehrere, mehreren</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: ersten, neue, letzten, bekannt, möglich, neuen, groß, große, politischen, Vereinigten</li>
      <li>ADV: auch, so, noch, nur, sehr, jedoch, mehr, immer, wieder, dann</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: besten, größten, schlimmsten, höchsten, Oberste, Obersten, bekannteste, beknackteste, erfoglreichste, erfolgreichste</li>
      <li>DET: meisten</li>
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


<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: Do</li>
      <li>VERB: Knuck, Lass, Metti, Schauen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: ist, war, wurde, wird, sind, wurden, hat, hatte, waren, kann</li>
      <li>AUX-Fin: war</li>
      <li>VERB: sagte, ist, hat, gibt, wurde, sagt, begann, war, hatte, führte</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: würde, könnte, sei, sollte, würden, könnten, seien, wäre, hätten, müssten</li>
      <li>VERB: Knew, ausschlösse, beeinflusse, habe, handelten, kämen, laste, leisteten, liege, täten</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: war, wurde, worden, wurden, hatte, waren, würde, hatten, könnte, sollte</li>
      <li>AUX-Fin: war</li>
      <li>VERB: sagte, verwendet, wurde, begann, genutzt, war, veröffentlicht, errichtet, gegeben, gewählt</li>
      <li>VERB-Part: abgesehen, gefolgt, gesagt, Geformt, abgehärtet, angeklagt, begründet, bekannt, geeignet, gefasst</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: ist, wird, sind, hat, kann, werden, haben, können, muss, sei</li>
      <li>VERB: ist, hat, gibt, sagt, haben, liegt, steht, hilft, sind, beträgt</li>
      <li>VERB-Inf: interviewt</li>
      <li>VERB-Part: basierend, Breaking</li>
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
      <li>DET: der, die, dem, den, das, eine, des, ein, einer, einem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: davon, dazu, damit, dafür, darauf, darin, daran, darüber, dadurch, darum</li>
      <li>DET: diese, dieser, dies, dieses, diesem, diesen, That, dasselbe, denjenigen, denselben</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem,Rel
    <ul>
      <li>PRON: die, der, das, denen, dem, dessen, deren, den</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: genug</li>
      <li>DET: viele, einige, mehr, andere, anderen, vielen, mehrere, meisten, anderer, einigen</li>
      <li>PRON: man, etwas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>DET: welche, welchen, welcher</li>
      <li>PRON: was, wer</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: keine, kein, keinen, keinerlei</li>
      <li>PRON: nichts</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: seine, ihre, ihrer, seiner, ihr, sein, ihren, seinen, seines, ihrem</li>
      <li>PRON: es, sich, er, sie, wir, ihm, ihn, uns, ihr, ihnen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: mich, mir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: alle, beiden, allem, jedes, alles, jede, jeder, jeden, all, allen</li>
      <li>PRON: alldem</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>DET: eine, ein, einer, einem, einen, eines, beiden, Beide, beider</li>
      <li>NUM: zwei, drei, vier, 3, sechs, zehn, 1, 10, 50, 100</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: ersten, erste, 1., erster, 30., 10., 11., 12., 16, 19.</li>
      <li>NUM: 24</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: seine, ihre, ihrer, seiner, ihr, sein, ihren, seinen, seines, ihres</li>
      <li>PRON: My, Her</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: sich, dich</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: habe, müssen, bin, sind, haben, hatte, können, werde, hätten, kann</li>
      <li>DET: unsere, mein, meinem, unserem, unserer, Meines, Nostrum, Unser, meine, unseren</li>
      <li>PRON: ich, wir, mich, uns, My, mir, me</li>
      <li>VERB: kenne, weiß, Nehmen, Thought, beiseitelegen, besuche, bewegen, bin, brauchen, denke</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: Do, habt, musst</li>
      <li>DET: Ihrem, euren</li>
      <li>PRON: Sie, du, you, Ya, dich, euch, ihr</li>
      <li>VERB: Knew, Knuck, Lass, Metti, Schimpfen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: ist, war, wurde, wird, wurden, sind, hat, waren, hatte, kann</li>
      <li>AUX-Fin: war</li>
      <li>DET: seine, ihre, ihrer, seiner, ihr, sein, ihren, seinen, seines, ihres</li>
      <li>PRON: es, sich, er, sie, ihm, ihn, ihr, ihnen, Her</li>
      <li>VERB: sagte, ist, hat, gibt, wurde, sagt, begann, war, hatte, führte</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Form
    <ul>
      <li>DET: Ihrem</li>
      <li>PRON: Sie</li>
      <li>VERB: Schimpfen</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>DET: ihre, ihrer, ihr, ihren, ihres, ihrem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>DET: seine, seiner, sein, ihre, seinen, ihrer, seines, ihren, seinem, ihr</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>DET: seine, ihren, sein, seiner, seines</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: ihre, ihrer, ihren, unsere, ihr, ihrem, ihres, unserem, unserer, Nostrum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: seine, seiner, sein, seinen, ihre, ihr, ihrer, seines, ihren, seinem</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: B.</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Prep
        <ul>
          <li>ADP: zu</li>
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
          <li>ADJ: Talking, new</li>
          <li>ADP: of, de, On, Over, a</li>
          <li>ADV: Now, anyway</li>
          <li>AUX: Do, did</li>
          <li>CCONJ: and</li>
          <li>DET: the, a, El, Le, Los, Nostrum, That, al, las, una</li>
          <li>NOUN: Company, Council, Dead, Dream, Earth, Greco, Head, Heart, Mare, Mundo</li>
          <li>PART: n't</li>
          <li>PRON: My, you, Her, Ya, me</li>
          <li>PROPN: Angeles, Figaro</li>
          <li>PUNCT: '</li>
          <li>SCONJ: If</li>
          <li>VERB: like, Breaking, Buck, Go, Knew, Knuck, Metti, Thought</li>
          <li>VERB-Inf: Go</li>
          <li>VERB-Part: Breaking</li>
          <li>X: mojorum</li>
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
<li>This corpus uses 10 lemmas as auxiliaries (<a>aux</a>). Examples: haben, können, werden, sein, müssen, sollen, wollen, mögen, dürfen, do.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: werden.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--NOUN-Nom (538)</li>
      <li>VERB--PRON-Nom (445)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--NOUN-Acc (592)</li>
      <li>VERB--NOUN-Gen (3)</li>
      <li>VERB--PRON (4)</li>
      <li>VERB--PRON-Acc (191)</li>
      <li>VERB-Inf--NOUN-Acc (24)</li>
      <li>VERB-Inf--PRON-Acc (4)</li>
      <li>VERB-Part--NOUN (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (1)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 2 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: erfreuen sich, wehren dich</li>
</ul>


<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 71 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: befinden sich, finden sich, entscheiden sich, entwickeln sich, treffen sich, beziehen sich, erklären sich, konzentrieren sich, setzen sich, verändern sich, ansiedeln sich, aussprechen sich, beschäftigen sich, beteiligen sich, bilden sich, drehen sich, ergeben sich, etablieren sich, handeln sich, machen sich, schließen sich, schreiben sich, schummeln sich, abwenden sich, abzeichnen sich, anschließen sich, auflösen sich, ausbreiten sich, auseinandersetzen sich, austauschte sich, ausweisen sich, befragen sich, belaufen sich, beschweren sich, bewegen sich, bewerben sich, einquartieren sich, entziehen sich, enwickeln sich, erholen sich, erstrecken sich, formieren sich, freuen sich, fühlen sich, halten sich, irren sich, kommen sich, kümmern sich, leiten sich, melden sich</li>
    <ul>
      <li>Out of those, 6 lemmas occurred more than once, but never without a reflexive dependent. Examples: befinden, konzentrieren, ansiedeln, beteiligen, etablieren, schummeln</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 13 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>det:poss</a>, <a>expl:pv</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:tmod</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
