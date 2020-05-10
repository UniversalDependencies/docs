---
layout: base
title:  'UD_English-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD English PUD

Language: [English](/en/index.html) (code: `en`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Jesse Kirchner, Lorenzo Lambertino, Martin Popel, Daniel Zeman, Christopher Manning, Sebastian Schuster, Siva Reddy.

Repository: [UD_English-PUD](https://github.com/UniversalDependencies/UD_English-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/uden_pud26)<br />
Download all treebanks: [UD 2.6](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either English-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_English-PUD/issues).
If you want to collaborate, please contact [syntacticdependencies&nbsp;(æt)&nbsp;lists&nbsp;•&nbsp;stanford&nbsp;•&nbsp;edu].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, not checked manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | annotated manually |
| Features | assigned by a program, not checked manually |
| Relations | annotated manually, natively in UD style |

## Description

This is the English portion of the Parallel Universal Dependencies (PUD)
treebanks created for the CoNLL 2017 shared task on Multilingual Parsing
from Raw Text to Universal Dependencies
(http://universaldependencies.org/conll17/).



This is a part of the Parallel Universal Dependencies (PUD) treebanks created
for the CoNLL 2017 shared task on Multilingual Parsing from Raw Text to
Universal Dependencies (http://universaldependencies.org/conll17/). There are
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
the UD community to UD v2 guidelines. Martin Popel automatically converted
the data to UD v2 and Sebastian Schuster, Siva Reddy, and Christopher Manning
manually corrected UPOS tags and syntactic annotations. Morphological features
and lemmata were added automatically using Stanford CoreNLP.

Additional languages have been provided (both translation and native UD v2
annotation) by other teams: Czech by Charles University, Finnish by University
of Turku and Swedish by Uppsala University.

The entire treebank is labeled as test set (and was used for testing in the
shared task). If it is used for training in future research, the users should
employ ten-fold cross-validation.


## Acknowledgments

The sentences were provided by DKFI, and the 250 sentences in German,
French, Italian, and Spanish were translated to English by professional
translators.

Syntactic and morphological annotations were originally added by Google
according to Google universal annotation guidelines, then automatically
converted to UD v2 by Martin Popel, and finally manually corrected by
Sebastian Schuster, Siva Reddy, and Christopher Manning. Morphological
features and lemmata were added by Sebastian Schuster.



# Statistics of UD English PUD

## POS Tags

[ADJ](en_pud-pos-ADJ.html) – [ADP](en_pud-pos-ADP.html) – [ADV](en_pud-pos-ADV.html) – [AUX](en_pud-pos-AUX.html) – [CCONJ](en_pud-pos-CCONJ.html) – [DET](en_pud-pos-DET.html) – [INTJ](en_pud-pos-INTJ.html) – [NOUN](en_pud-pos-NOUN.html) – [NUM](en_pud-pos-NUM.html) – [PART](en_pud-pos-PART.html) – [PRON](en_pud-pos-PRON.html) – [PROPN](en_pud-pos-PROPN.html) – [PUNCT](en_pud-pos-PUNCT.html) – [SCONJ](en_pud-pos-SCONJ.html) – [SYM](en_pud-pos-SYM.html) – [VERB](en_pud-pos-VERB.html) – [X](en_pud-pos-X.html)

## Features

[Case](en_pud-feat-Case.html) – [Definite](en_pud-feat-Definite.html) – [Degree](en_pud-feat-Degree.html) – [Foreign](en_pud-feat-Foreign.html) – [Gender](en_pud-feat-Gender.html) – [Mood](en_pud-feat-Mood.html) – [Number](en_pud-feat-Number.html) – [NumType](en_pud-feat-NumType.html) – [Person](en_pud-feat-Person.html) – [Polarity](en_pud-feat-Polarity.html) – [Poss](en_pud-feat-Poss.html) – [PronType](en_pud-feat-PronType.html) – [Reflex](en_pud-feat-Reflex.html) – [Tense](en_pud-feat-Tense.html) – [VerbForm](en_pud-feat-VerbForm.html)

## Relations

[acl](en_pud-dep-acl.html) – [acl:relcl](en_pud-dep-acl-relcl.html) – [advcl](en_pud-dep-advcl.html) – [advmod](en_pud-dep-advmod.html) – [amod](en_pud-dep-amod.html) – [appos](en_pud-dep-appos.html) – [aux](en_pud-dep-aux.html) – [aux:pass](en_pud-dep-aux-pass.html) – [case](en_pud-dep-case.html) – [cc](en_pud-dep-cc.html) – [cc:preconj](en_pud-dep-cc-preconj.html) – [ccomp](en_pud-dep-ccomp.html) – [compound](en_pud-dep-compound.html) – [compound:prt](en_pud-dep-compound-prt.html) – [conj](en_pud-dep-conj.html) – [cop](en_pud-dep-cop.html) – [csubj](en_pud-dep-csubj.html) – [csubj:pass](en_pud-dep-csubj-pass.html) – [dep](en_pud-dep-dep.html) – [det](en_pud-dep-det.html) – [det:predet](en_pud-dep-det-predet.html) – [discourse](en_pud-dep-discourse.html) – [dislocated](en_pud-dep-dislocated.html) – [expl](en_pud-dep-expl.html) – [fixed](en_pud-dep-fixed.html) – [flat](en_pud-dep-flat.html) – [goeswith](en_pud-dep-goeswith.html) – [iobj](en_pud-dep-iobj.html) – [mark](en_pud-dep-mark.html) – [nmod](en_pud-dep-nmod.html) – [nmod:npmod](en_pud-dep-nmod-npmod.html) – [nmod:poss](en_pud-dep-nmod-poss.html) – [nmod:tmod](en_pud-dep-nmod-tmod.html) – [nsubj](en_pud-dep-nsubj.html) – [nsubj:pass](en_pud-dep-nsubj-pass.html) – [nummod](en_pud-dep-nummod.html) – [obj](en_pud-dep-obj.html) – [obl](en_pud-dep-obl.html) – [obl:npmod](en_pud-dep-obl-npmod.html) – [obl:tmod](en_pud-dep-obl-tmod.html) – [orphan](en_pud-dep-orphan.html) – [parataxis](en_pud-dep-parataxis.html) – [punct](en_pud-dep-punct.html) – [reparandum](en_pud-dep-reparandum.html) – [root](en_pud-dep-root.html) – [vocative](en_pud-dep-vocative.html) – [xcomp](en_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences and 21176 tokens.</li>
</ul>

<ul>
<li>This corpus contains 2746 tokens (13%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 46 types of words that contain both letters and punctuation. Examples: 's, ’s, n't, n’t, U.S., No., St., co-starring, ’d, B.C., Ms., ’m, ’ve, 'Ya, 'd, 'm, 've, B-29s, B.C.E., G.D.P., I., Jr., M.A., Mr., Z., anti-fascist, ca., co-starred, co-wrote, e-mail, ex-minister, extra-marital, inter-communal, mid-1962, mid-1970s, mid-1980s, mid-Sixties, multi-ethnic, non-fiction, non-white, pro-Beijing, re-domesticated, re-elected, un-detectable, wi-fi, ’re</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 8 word types tagged as particles (PART): ', 's, n't, not, n’t, to, up, ’s</li>
</ul>

<ul>
<li>This corpus contains 28 lemmas tagged as pronouns (PRON): 'ya, I, he, herself, himself, it, its, itself, my, one, she, that, themselves, there, these, they, this, those, us, we, what, where, which, who, whoever, whom, whose, you</li>
</ul>

<ul>
<li>This corpus contains 21 lemmas tagged as determiners (DET): a, all, another, any, both, each, either, every, half, nary, no, some, such, that, the, there, these, this, those, whatever, which</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as PRON and sometimes as DET: that, there, these, this, those, which</li>
</ul>

<ul>
<li>This corpus contains 12 lemmas tagged as auxiliaries (AUX): be, can, could, do, get, have, may, might, must, should, will, would</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: be, do, get, have, will</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: was, is, would, will, are, were, can, has, had, could</li>
    <li>NOUN: hit</li>
    <li>VERB: said, took, has, began, are, is, became, says, have, had</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: being, having</li>
    <li>VERB: according, following, including, making, playing, using, getting, working, co-starring, growing</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: be, have</li>
    <li>VERB: have, take, do, go, keep, help, make, see, come, get</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: been</li>
    <li>VERB: used, known, given, made, built, left, released, seen, allowed, considered</li>
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
      <li>PRON: her, she, herself</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>PRON: he, his, him, himself</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>PRON: it, its, itself</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: these, those</li>
      <li>NOUN: people, years, police, investors, months, companies, countries, euros, films, children</li>
      <li>NUM: 2000s</li>
      <li>PRON: their, they, we, them, our, us, those, themselves, these</li>
      <li>PROPN: States, Alps, Powers, Ages, Americans, Americas, Andes, Balkans, Chinese, Democrats</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: Canadian, Historian, Spanish, male</li>
      <li>ADV: course</li>
      <li>AUX-Fin: was, is, has, 's, ’s, does, am</li>
      <li>DET: this, that</li>
      <li>NOUN: time, year, government, city, state, war, century, world, day, place</li>
      <li>PRON: it, he, his, I, her, its, she, this, him, that</li>
      <li>PROPN: China, Sea, October, Trump, North, America, April, Europe, France, War</li>
      <li>SYM: %</li>
      <li>VERB: has, is, says, was, makes, helps, seems, working, 's, appears</li>
      <li>VERB-Fin: has, is, says, was, makes, helps, seems, 's, appears, contains</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: it, him, them, her, us, me, himself, themselves, itself, You</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: it, he, they, I, she, we, you</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: the</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: a, an</li>
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
      <li>ADJ: more, greater, higher, better, earlier, fewer, lower, Elder, Stranger, bigger</li>
      <li>ADV: longer, earlier, less, better, closer, further</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: new, many, other, such, last, great, high, first, own, several</li>
      <li>ADV: well, far, late, soon, close, early, hard, long, Fast</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: best, most, biggest, latest, worst, tallest, largest, least, deepest, earliest</li>
      <li>ADV: least, best</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: not, no, n’t, never, n't</li>
      <li>DET: no</li>
      <li>PART: not, n't, n’t</li>
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
      <li>AUX-Fin: was, is, are, were, has, had, have, 's, did, do</li>
      <li>NOUN-Fin: hit</li>
      <li>VERB-Fin: said, took, has, began, are, is, became, says, have, had</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: was, were, had, did, got</li>
      <li>AUX-Part: been</li>
      <li>NOUN-Fin: hit</li>
      <li>VERB-Fin: said, took, began, became, had, told, was, worked, were, allowed</li>
      <li>VERB-Part: used, known, given, made, built, left, released, seen, allowed, considered</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: is, are, has, have, 's, do, ’s, does, am, ’m</li>
      <li>VERB-Fin: has, are, is, says, have, include, makes, helps, say, seems</li>
      <li>VERB-Part: investigating, seeking, thinking, attending, boarding, bracing, calling, carrying, celebrating, coming</li>
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
      <li>DET: the, a, an</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: then, there, here</li>
      <li>DET: this, that, these, those</li>
      <li>PRON: this, that, those, these</li>
      <li>SCONJ: that</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: when, how, why, where, whenever</li>
      <li>DET: whatever, which</li>
      <li>PRON: what, which, who, whose, where, whoever, whom</li>
      <li>SCONJ: when</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: it, he, his, their, they, I, her, its, she, we</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: where, when, why</li>
      <li>DET: that, which</li>
      <li>PRON: which, that, who</li>
      <li>SCONJ: that</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: one, two, three, million, 10, four, 1, six, 3, 2014</li>
      <li>PROPN: I, I., V, VI, X</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>ADV: once, twice</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: first, second, third, 8th, 16th, 20th, 3rd, 5th, 13th, 14th</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: his, their, its, her, our, my, whose, your</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: himself, themselves, itself</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: am</li>
      <li>PRON: I, we, our, my, us, me</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: you, your</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: was, is, has, 's, ’s, does</li>
      <li>PRON: it, he, his, their, they, her, its, she, him, them</li>
      <li>VERB-Fin: has, is, says, was, makes, helps, seems, 's, appears, contains</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: de, Andes, Force, coup, tipo</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: be.</li>
</ul>

<ul>
<li>This corpus uses 11 lemmas as auxiliaries (<a>aux</a>). Examples: have, be, would, will, can, do, could, may, might, should, must.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: be, get.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (324)</li>
      <li>VERB-Fin--NOUN-ADP(on) (1)</li>
      <li>VERB-Fin--PRON (89)</li>
      <li>VERB-Fin--PRON-Nom (179)</li>
      <li>VERB-Ger--NOUN (4)</li>
      <li>VERB-Ger--PRON (1)</li>
      <li>VERB-Ger--PRON-Acc (1)</li>
      <li>VERB-Ger--PRON-Nom (3)</li>
      <li>VERB-Inf--NOUN (62)</li>
      <li>VERB-Inf--PRON (11)</li>
      <li>VERB-Inf--PRON-Acc (3)</li>
      <li>VERB-Inf--PRON-Nom (51)</li>
      <li>VERB-Part--NOUN (71)</li>
      <li>VERB-Part--PRON (17)</li>
      <li>VERB-Part--PRON-Nom (33)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (298)</li>
      <li>VERB-Fin--PRON (3)</li>
      <li>VERB-Fin--PRON-Acc (29)</li>
      <li>VERB-Ger--NOUN (109)</li>
      <li>VERB-Ger--PRON (3)</li>
      <li>VERB-Ger--PRON-Acc (6)</li>
      <li>VERB-Inf--NOUN (210)</li>
      <li>VERB-Inf--PRON (7)</li>
      <li>VERB-Inf--PRON-Acc (14)</li>
      <li>VERB-Part--NOUN (72)</li>
      <li>VERB-Part--PRON (2)</li>
      <li>VERB-Part--PRON-Acc (6)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (2)</li>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Ger--PRON-Acc (1)</li>
      <li>VERB-Inf--NOUN (2)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 8 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: declare himself, establish itself, establish themselves, find himself, find itself, identify themselves, immerse themselves, protect themselves</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 12 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>det:predet</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nmod:tmod</a>, <a>nsubj:pass</a>, <a>obl:npmod</a>, <a>obl:tmod</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a></li>
</ul>
