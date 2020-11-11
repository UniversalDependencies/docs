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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udde_pud27)<br />
Download all treebanks: [UD 2.7](/#download)

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

[Case](de_pud-feat-Case.html) – [Definite](de_pud-feat-Definite.html) – [Degree](de_pud-feat-Degree.html) – [Foreign](de_pud-feat-Foreign.html) – [Gender](de_pud-feat-Gender.html) – [Gender[psor]](de_pud-feat-Gender-psor.html) – [Mood](de_pud-feat-Mood.html) – [Number](de_pud-feat-Number.html) – [Number[psor]](de_pud-feat-Number-psor.html) – [NumType](de_pud-feat-NumType.html) – [Person](de_pud-feat-Person.html) – [Person[psor]](de_pud-feat-Person-psor.html) – [Polarity](de_pud-feat-Polarity.html) – [PronType](de_pud-feat-PronType.html) – [Tense](de_pud-feat-Tense.html) – [VerbForm](de_pud-feat-VerbForm.html)

## Relations

[acl](de_pud-dep-acl.html) – [acl:relcl](de_pud-dep-acl-relcl.html) – [advcl](de_pud-dep-advcl.html) – [advmod](de_pud-dep-advmod.html) – [amod](de_pud-dep-amod.html) – [appos](de_pud-dep-appos.html) – [aux](de_pud-dep-aux.html) – [aux:pass](de_pud-dep-aux-pass.html) – [case](de_pud-dep-case.html) – [cc](de_pud-dep-cc.html) – [cc:preconj](de_pud-dep-cc-preconj.html) – [ccomp](de_pud-dep-ccomp.html) – [compound](de_pud-dep-compound.html) – [compound:prt](de_pud-dep-compound-prt.html) – [conj](de_pud-dep-conj.html) – [cop](de_pud-dep-cop.html) – [csubj](de_pud-dep-csubj.html) – [csubj:pass](de_pud-dep-csubj-pass.html) – [dep](de_pud-dep-dep.html) – [det](de_pud-dep-det.html) – [det:predet](de_pud-dep-det-predet.html) – [discourse](de_pud-dep-discourse.html) – [expl](de_pud-dep-expl.html) – [expl:pv](de_pud-dep-expl-pv.html) – [fixed](de_pud-dep-fixed.html) – [flat](de_pud-dep-flat.html) – [flat:name](de_pud-dep-flat-name.html) – [iobj](de_pud-dep-iobj.html) – [mark](de_pud-dep-mark.html) – [nmod](de_pud-dep-nmod.html) – [nmod:gmod](de_pud-dep-nmod-gmod.html) – [nmod:poss](de_pud-dep-nmod-poss.html) – [nsubj](de_pud-dep-nsubj.html) – [nsubj:pass](de_pud-dep-nsubj-pass.html) – [nummod](de_pud-dep-nummod.html) – [obj](de_pud-dep-obj.html) – [obl](de_pud-dep-obl.html) – [obl:tmod](de_pud-dep-obl-tmod.html) – [orphan](de_pud-dep-orphan.html) – [parataxis](de_pud-dep-parataxis.html) – [punct](de_pud-dep-punct.html) – [root](de_pud-dep-root.html) – [vocative](de_pud-dep-vocative.html) – [xcomp](de_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences, 21001 tokens and 21329 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 2889 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 35 types of words that contain both letters and punctuation. Examples: Chr., v., I., bzw., B., St., ca., n., z., IV., Mrd., Nr., Addenbrooke's, Darius', Don', Dr., Hl., III., M.A., Mio., Männer., Pompeius', Smith', Thutmosis', VI., X., Zettel's, bleiben., didn', du., führen., tritt., u.a., werden., will.</li>
</ul>

<ul>
<li>This corpus contains 328 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 8 types of multi-word tokens. Examples: im, am, zum, zur, vom, beim, ins, ans.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: INTJ</li>
</ul>

<ul>
<li>This corpus contains 3 word types tagged as particles (PART): nicht, wohl, zu</li>
</ul>

<ul>
<li>This corpus contains 28 lemmas tagged as pronouns (PRON): Ihrer, Ihr|ihr, My, Nostrum, Sie|sie, Ya, dasselbe, der, du, er, er|es, er|es|sie, es, euer, her, ich, ihr, ihrem, man, me, mein, sein, sie, unser, was, wer, wir, you</li>
</ul>

<ul>
<li>This corpus contains 37 lemmas tagged as determiners (DET): El, Le, Los, That, a, al, all, allder, alle, ander, beide, denselb, der, derselbe, dies, ein, einig, einige, irgendein, jed, jeglich, jen, kein, keinerlei, las, mehr, mehrere, meist, solch, the, una, viel, weit, welch, wenig, zwei, zweier</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: der</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as auxiliaries (AUX): dürfen, haben, können, mögen, müssen, sein, sollen, werden, wollen</li>
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
    <li>VERB: abgesehen, basierend, gefolgt, gesagt, Geformt, abgehärtet, angeklagt, begründet, bekannt, geeignet</li>
    <li>X: Breaking</li>
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
      <li>DET: die, der, eine, einer, diese, den, dieser, keine, viele, alle</li>
      <li>NOUN: Zeit, Regierung, Stadt, Geschichte, Welt, Armee, Frau, Millionen, Region, Reihe</li>
      <li>PRON: die, sie, sich, seine, ihre, seiner, ihrer, der, ihr, denen</li>
      <li>PROPN: Qing, US, BBC, Clinton, Kesha, Mongolei, Alpen, Blunt, Erde, Jasmine</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: ersten, Vereinigten, letzten, neue, 1., besten, gesamten, große, großer, neuen</li>
      <li>DET: dem, der, den, die, des, ein, einen, einem, dieser, diesem</li>
      <li>NOUN: Menschen, Oktober, Teil, Film, Kaiser, April, Fall, Krieg, Präsident, Tag</li>
      <li>NUM: hunderte</li>
      <li>PRON: er, sich, der, die, sie, ihm, ihn, seinen, ihren, sein</li>
      <li>PROPN: Chr., Trump, Joseph, USA, Donald, Martin, Richard, Bogd, Christopher, Columbus</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: letzten, ersten, Olympischen, eigenen, 8., drittes, karibische, neuen, 13., 1960er</li>
      <li>ADP: z., z</li>
      <li>DET: das, dem, ein, des, die, den, der, einem, dies, dieses</li>
      <li>NOUN: Jahr, Jahre, Jahren, Jahrhundert, Mal, Land, Leben, Meer, Ende, Reich</li>
      <li>PRON: es, sich, das, die, ihr, was, sein, seines, sie, ihres</li>
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
      <li>ADJ: letzten, neue, ersten, verschiedene, Vereinigten, neuen, Olympischen, kleine, verschiedenen, alten</li>
      <li>AUX: wurden, sind, waren, werden, haben, hatten, können, müssen, würden, konnten</li>
      <li>DET: die, den, der, viele, diese, einige, beiden, alle, vielen, dieser</li>
      <li>NOUN: Jahre, Jahren, Menschen, Millionen, Auswirkungen, Teile, Inseln, Leute, Länder, Männer</li>
      <li>NUM: hunderte</li>
      <li>PRON: die, sie, sich, wir, seine, ihre, denen, uns, ihren, ihnen</li>
      <li>PROPN: USA, Alpen, Anden, Maya, Niederlanden, Osmanen, Andes, Armana, Avro, Bantu</li>
      <li>VERB: haben, hatten, sind, nahmen, waren, zählen, enthalten, entschieden, eroberten, finden</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: ersten, neue, eigene, große, britischen, erste, gemeinsamen, letzten, neuen, zweiten</li>
      <li>ADP: z., z</li>
      <li>AUX: ist, war, wurde, wird, hat, hatte, kann, würde, muss, könnte</li>
      <li>DET: der, dem, die, das, des, eine, ein, den, einer, einem</li>
      <li>NOUN: Jahr, Zeit, Regierung, Stadt, Geschichte, Jahrhundert, Oktober, Teil, Film, Mal</li>
      <li>PRON: es, er, sich, der, sie, die, ich, ihr, seine, seiner</li>
      <li>PROPN: Chr., China, Trump, Frankreich, Joseph, Hong, Paris, Qing, Russland, US</li>
      <li>VERB: sagte, ist, hat, gibt, wurde, sagt, begann, war, hatte, führte</li>
      <li>X: Don', didn', t</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: neue, letzten, eigene, große, kleine, neuen, öffentliche, Olympischen, achämenidische, beträchtliche</li>
      <li>DET: die, den, eine, das, einen, ein, keine, diese, viele, dieses</li>
      <li>NOUN: Jahre, Dollar, Auswirkungen, Rolle, Armee, GBP, Land, Mal, Milliarden, Monate</li>
      <li>NUM: hunderte</li>
      <li>PRON: sich, seine, es, ihre, die, ihn, sie, mich, uns, seinen</li>
      <li>PROPN: Italien, Trump, Antarktis, Deutschland, Kuba, Martin, Richard, Twitter, Abakumow, Adria</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: ersten, letzten, neuen, selben, zweiten, 1., Vereinigten, besten, deutschen, gemeinsamen</li>
      <li>ADP: z., z</li>
      <li>DET: dem, der, den, einem, einer, dieser, diesem, anderen, vielen, beiden</li>
      <li>NOUN: Jahr, Jahren, Zeit, Jahrhundert, Bezug, Fall, Krieg, Leben, Region, Tag</li>
      <li>PRON: ihrer, ihm, denen, sich, seiner, der, ihren, ihr, dem, ihnen</li>
      <li>PROPN: Chr., Paris, Asien, London, Ontario, USA, England, Frankreich, Großbritannien, Hong</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: ersten, Römischen, britischen, eigenen, gemeinsamen, alten, amerikanischen, ehemaligen, europäischer, gesamten</li>
      <li>DET: der, des, eines, einer, dieser, anderer, dessen, deren, dieses, zweier</li>
      <li>NOUN: Jahre, Stadt, Zeit, Jahres, Jahrhunderts, Krieges, Lebens, Dynastie, Frau, Landes</li>
      <li>PRON: seiner, ihrer, seines, ihres, deren, dessen, Meines</li>
      <li>PROPN: Qing, Albaniens, Chinas, Clintons, Dänemarks, Europas, USA, AKP, Afrikas, Alpen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: britische, erste, neue, verschiedene, große, letzte, australischen, großer, kleine, mazedonische</li>
      <li>DET: die, der, das, ein, eine, diese, viele, dies, einige, kein</li>
      <li>NOUN: Film, Menschen, Präsident, Regierung, einer, König, Leute, Polizei, System, alles</li>
      <li>PRON: er, es, die, sie, der, ich, wir, seine, das, ihr</li>
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
      <li>ADP: z., z</li>
      <li>DET: der, die, dem, den, das, des, diese, dieser, dies, dieses</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: eine, ein, einer, einem, einen, viele, eines, keine, einige, beiden</li>
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
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: ersten, neue, letzten, bekannt, möglich, neuen, groß, große, politischen, Vereinigten</li>
      <li>ADV: auch, nicht, so, noch, nur, sehr, jedoch, mehr, davon, immer</li>
      <li>NUM: hunderte</li>
      <li>PART: nicht</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: besten, größten, schlimmsten, höchsten, Oberste, Obersten, bekannteste, beknackteste, erfoglreichste, erfolgreichste</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: nicht</li>
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
      <li>VERB: Knuck, Lass, Metti, Schauen</li>
      <li>X: Don'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: ist, war, wurde, wird, wurden, sind, hat, hatte, waren, kann</li>
      <li>VERB: sagte, ist, hat, gibt, wurde, sagt, begann, war, hatte, führte</li>
      <li>X: didn', t</li>
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
      <li>VERB: sagte, verwendet, wurde, begann, genutzt, war, veröffentlicht, errichtet, gegeben, gewählt</li>
      <li>VERB-Part: abgesehen, gefolgt, gesagt, Geformt, abgehärtet, angeklagt, begründet, bekannt, geeignet, gefasst</li>
      <li>X: didn', t</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: ist, wird, sind, hat, kann, werden, haben, können, muss, sei</li>
      <li>VERB: ist, hat, gibt, sagt, haben, liegt, sind, steht, hilft, beträgt</li>
      <li>VERB-Inf: interviewt</li>
      <li>VERB-Part: basierend</li>
      <li>X: Breaking, Don'</li>
      <li>X-Part: Breaking</li>
    </ul>
  </li>
</ul>



<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: seine, ihre, ihrer, seiner, ihr, sein, ihren, seinen, seines, ihrem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: sich, mich, uns, dich, mir</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: zwei, drei, vier, 3, sechs, zehn, 1, 10, 50, 100</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: 1., 30., 10., 11., 12., 16, 19., 21., 27., 4.</li>
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
      <li>PRON: ich, wir, mich, uns, mir, me</li>
      <li>VERB: kenne, weiß, Nehmen, Thought, beiseitelegen, besuche, bewegen, bin, brauchen, denke</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: habt, musst</li>
      <li>PRON: you, Du, Ya, dich, du., euch, ihr</li>
      <li>VERB: Knew, Knuck, Lass, Metti</li>
      <li>X: Don'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ: ersten, neue, letzten, neuen, große, politischen, Vereinigten, britische, britischen, eigene</li>
      <li>ADP: z., z</li>
      <li>AUX: ist, war, wurde, wird, wurden, sind, hat, waren, hatte, kann</li>
      <li>DET: der, die, dem, den, das, des, eine, ein, einer, einem</li>
      <li>NOUN: Jahr, Jahre, Zeit, Jahren, Menschen, Regierung, Stadt, Geschichte, Jahrhundert, Oktober</li>
      <li>NUM: hunderte</li>
      <li>PRON: es, sich, die, er, sie, der, seine, ihre, ihr, seiner</li>
      <li>PROPN: Chr., China, Trump, USA, Frankreich, Joseph, US, Hong, Paris, Qing</li>
      <li>VERB: sagte, ist, hat, gibt, wurde, sagt, begann, war, hatte, führte</li>
      <li>X: didn', t</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>PRON: ihre, ihrer, ihr, ihren, ihres, Her, ihrem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>PRON: seine, seiner, sein, ihre, seinen, ihrer, seines, ihren, seinem, ihr</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>PRON: seine, ihren, sein, seiner, seines</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>PRON: ihre, ihrer, ihren, ihrem, unsere, ihr, ihres, unserem, unserer, Nostrum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>PRON: seine, seiner, sein, seinen, ihre, ihrer, seines, ihr, ihren, seinem</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADP: de</li>
          <li>NOUN: tipo</li>
          <li>X: mojorum</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[psor]</a>
    <ul>
      <li>1
        <ul>
          <li>PRON: unsere, My, mein, meinem, unserem, unserer, Meines, Nostrum, Unser, meine</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>PRON: euren</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>PRON: seine, ihre, ihrer, seiner, ihr, sein, ihren, seinen, seines, ihrem</li>
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
<li>This corpus uses 9 lemmas as auxiliaries (<a>aux</a>). Examples: haben, können, werden, sein, müssen, sollen, wollen, mögen, dürfen.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: werden.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Nom (551)</li>
      <li>VERB--PRON (14)</li>
      <li>VERB--PRON-Nom (430)</li>
      <li>VERB-Fin--PRON (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--NOUN-Acc (606)</li>
      <li>VERB--NOUN-Gen (3)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-Acc (186)</li>
      <li>VERB-Inf--NOUN-Acc (24)</li>
      <li>VERB-Inf--PRON-Acc (4)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (1)</li>
      <li>VERB--NOUN-Dat (42)</li>
      <li>VERB--NOUN-Gen (1)</li>
      <li>VERB--PRON-Acc (2)</li>
      <li>VERB--PRON-Dat (29)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 1 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: erfreuen sich</li>
</ul>



<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 12 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>det:predet</a>, <a>expl:pv</a>, <a>flat:name</a>, <a>nmod:gmod</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:tmod</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
