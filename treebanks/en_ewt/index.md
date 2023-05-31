---
layout: base
title:  'UD_English-EWT'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD English EWT

Language: [English](/en/index.html) (code: `en`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v1.0 release.

The following people have contributed to making this treebank part of UD: Natalia Silveira, Timothy Dozat, Christopher Manning, Sebastian Schuster, Ethan Chi, John Bauer, Miriam Connor, Marie-Catherine de Marneffe, Nathan Schneider, Sam Bowman, Hanzhi Zhu, Daniel Galbraith, John Bauer.

Repository: [UD_English-EWT](https://github.com/UniversalDependencies/UD_English-EWT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/uden_ewt212)<br />
Download all treebanks: [UD 2.12](/#download)

License: CC BY-SA 4.0

Genre: blog, social, reviews, email, web

Questions, comments?
General annotation questions (either English-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_English-EWT/issues).
If you want to collaborate, please contact [syntacticdependencies&nbsp;(æt)&nbsp;lists&nbsp;•&nbsp;stanford&nbsp;•&nbsp;edu].
Development of the treebank happens in the UD repository but not directly in the final CoNLL-U files.
You may submit bug fixes as pull requests against the dev branch but you have to go to the folder called `not-to-release` and locate the source files there.
Contact the treebank maintainers if in doubt.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, with some manual corrections, but not a full manual verification |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | annotated manually |
| Features | assigned by a program, not checked manually |
| Relations | annotated manually, natively in UD style |

## Description

A Gold Standard Universal Dependencies Corpus for English,
built over the source material of the English Web Treebank
LDC2012T13 (https://catalog.ldc.upenn.edu/LDC2012T13).




The corpus comprises 254,825 words and 16,621 sentences, taken from five genres
of web media: weblogs, newsgroups, emails, reviews, and Yahoo! answers. See the
LDC2012T13 documentation for more details on the sources of the sentences. The
trees were automatically converted into Stanford Dependencies and then
hand-corrected to Universal Dependencies. All the basic dependency annotations have
been single-annotated, a limited portion of them have been double-annotated,
and subsequent correction has been done to improve consistency. Other aspects
of the treebank, such as Universal POS, features and enhanced dependencies, has
mainly been done automatically, with very limited hand-correction.


## Acknowledgments

Annotation of the Universal Dependencies English Web Treebank was carried out by
(in order of size of contribution):

- Natalia Silveira
- Timothy Dozat
- Sebastian Schuster
- Miriam Connor
- Marie-Catherine de Marneffe
- Nathan Schneider
- Ethan Chi
- Samuel Bowman
- Christopher Manning
- Hanzhi Zhu
- Daniel Galbraith
- John Bauer

Creation of the CoNLL-U files, including calculating UPOS, feature, and lemma
information was primarily done by

- Sebastian Schuster
- Natalia Silveira

The construction of the Universal Dependencies English Web Treebank was
partially funded by a gift from Google, Inc., which we gratefully acknowledge.



# Statistics of UD English EWT

## POS Tags

[ADJ](en_ewt-pos-ADJ.html) – [ADP](en_ewt-pos-ADP.html) – [ADV](en_ewt-pos-ADV.html) – [AUX](en_ewt-pos-AUX.html) – [CCONJ](en_ewt-pos-CCONJ.html) – [DET](en_ewt-pos-DET.html) – [INTJ](en_ewt-pos-INTJ.html) – [NOUN](en_ewt-pos-NOUN.html) – [NUM](en_ewt-pos-NUM.html) – [PART](en_ewt-pos-PART.html) – [PRON](en_ewt-pos-PRON.html) – [PROPN](en_ewt-pos-PROPN.html) – [PUNCT](en_ewt-pos-PUNCT.html) – [SCONJ](en_ewt-pos-SCONJ.html) – [SYM](en_ewt-pos-SYM.html) – [VERB](en_ewt-pos-VERB.html) – [X](en_ewt-pos-X.html)

## Features

[Abbr](en_ewt-feat-Abbr.html) – [Case](en_ewt-feat-Case.html) – [Definite](en_ewt-feat-Definite.html) – [Degree](en_ewt-feat-Degree.html) – [ExtPos](en_ewt-feat-ExtPos.html) – [Foreign](en_ewt-feat-Foreign.html) – [Gender](en_ewt-feat-Gender.html) – [Mood](en_ewt-feat-Mood.html) – [Number](en_ewt-feat-Number.html) – [NumForm](en_ewt-feat-NumForm.html) – [NumType](en_ewt-feat-NumType.html) – [Person](en_ewt-feat-Person.html) – [Poss](en_ewt-feat-Poss.html) – [PronType](en_ewt-feat-PronType.html) – [Reflex](en_ewt-feat-Reflex.html) – [Style](en_ewt-feat-Style.html) – [Tense](en_ewt-feat-Tense.html) – [Typo](en_ewt-feat-Typo.html) – [VerbForm](en_ewt-feat-VerbForm.html) – [Voice](en_ewt-feat-Voice.html)

## Relations

[acl](en_ewt-dep-acl.html) – [acl:relcl](en_ewt-dep-acl-relcl.html) – [advcl](en_ewt-dep-advcl.html) – [advcl:relcl](en_ewt-dep-advcl-relcl.html) – [advmod](en_ewt-dep-advmod.html) – [amod](en_ewt-dep-amod.html) – [appos](en_ewt-dep-appos.html) – [aux](en_ewt-dep-aux.html) – [aux:pass](en_ewt-dep-aux-pass.html) – [case](en_ewt-dep-case.html) – [cc](en_ewt-dep-cc.html) – [cc:preconj](en_ewt-dep-cc-preconj.html) – [ccomp](en_ewt-dep-ccomp.html) – [compound](en_ewt-dep-compound.html) – [compound:prt](en_ewt-dep-compound-prt.html) – [conj](en_ewt-dep-conj.html) – [cop](en_ewt-dep-cop.html) – [csubj](en_ewt-dep-csubj.html) – [csubj:outer](en_ewt-dep-csubj-outer.html) – [csubj:pass](en_ewt-dep-csubj-pass.html) – [dep](en_ewt-dep-dep.html) – [det](en_ewt-dep-det.html) – [det:predet](en_ewt-dep-det-predet.html) – [discourse](en_ewt-dep-discourse.html) – [dislocated](en_ewt-dep-dislocated.html) – [expl](en_ewt-dep-expl.html) – [fixed](en_ewt-dep-fixed.html) – [flat](en_ewt-dep-flat.html) – [flat:foreign](en_ewt-dep-flat-foreign.html) – [goeswith](en_ewt-dep-goeswith.html) – [iobj](en_ewt-dep-iobj.html) – [list](en_ewt-dep-list.html) – [mark](en_ewt-dep-mark.html) – [nmod](en_ewt-dep-nmod.html) – [nmod:npmod](en_ewt-dep-nmod-npmod.html) – [nmod:poss](en_ewt-dep-nmod-poss.html) – [nmod:tmod](en_ewt-dep-nmod-tmod.html) – [nsubj](en_ewt-dep-nsubj.html) – [nsubj:outer](en_ewt-dep-nsubj-outer.html) – [nsubj:pass](en_ewt-dep-nsubj-pass.html) – [nummod](en_ewt-dep-nummod.html) – [obj](en_ewt-dep-obj.html) – [obl](en_ewt-dep-obl.html) – [obl:npmod](en_ewt-dep-obl-npmod.html) – [obl:tmod](en_ewt-dep-obl-tmod.html) – [orphan](en_ewt-dep-orphan.html) – [parataxis](en_ewt-dep-parataxis.html) – [punct](en_ewt-dep-punct.html) – [reparandum](en_ewt-dep-reparandum.html) – [root](en_ewt-dep-root.html) – [vocative](en_ewt-dep-vocative.html) – [xcomp](en_ewt-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 16622 sentences, 251487 tokens and 254819 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 31022 tokens (12%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 926 types of words that contain both letters and punctuation. Examples: 's, n't, 'm, 'll, 've, 're, 'd, Dr., e-mail, Mr., ’s, U.S., st., Inc., etc., Sept., vs., W., it's, .doc, carol.st.clair@enron.com, 01-Feb-02, n’t, Dec., Ft., Oct., alt.animals.cat, p&l, :D, Corp., Ms., No., Non-Bondad, PG&E, S., Yahoo!, i.e., A., Analysis_0712, D.C., E., ENRON.XLS, MEH-risk, Sha'lan, b/c, co., ekrapels@esaibos.com, enrongss.xls, p.m., 80's</li>
</ul>

<ul>
<li>This corpus contains 3330 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 611 types of multi-word tokens. Examples: don't, i'm, it's, i've, didn't, can't, its, i'll, you'll, you're, cannot, doesn't, he's, that's, dont, won't, they're, wouldn't, there's, haven't, isn't, bush's, i'd, wasn't, couldn't, we've, China's, we're, im, here's, what's, aren't, you've, we'll, ive, wont, let's, she's, weren't, your, cant, they'll, world's, you'd, Enron's, Iran's, thats, India's, Qaeda's, he'd.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 20 word types tagged as particles (PART): ', 's, -s, 2, `s, a, n, n't, na, not, nt, n’t, ot, s, ta, the, to, too, ’, ’s</li>
</ul>

<ul>
<li>This corpus contains 51 lemmas tagged as pronouns (PRON): I, anybody, anyone, anything, everybody, everyone, everything, he, her, herself, himself, his, it, its, itself, my, myself, no-one, nobody, nothing, one, our, ourselves, she, somebody, someone, something, that, their, themselves, there, they, this, thou, thy, we, what, whatever, which, who, whoever, whom, whomever, whose, wtf, y'all, ye, you, your, yourself, yourselves</li>
</ul>

<ul>
<li>This corpus contains 21 lemmas tagged as determiners (DET): a, all, another, any, both, each, either, every, half, many, neither, no, quite, some, such, that, the, this, what, whatever, which</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as PRON and sometimes as DET: that, this, what, whatever, which</li>
</ul>

<ul>
<li>This corpus contains 14 lemmas tagged as auxiliaries (AUX): be, can, could, do, get, have, may, might, must, ought, shall, should, will, would</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: be, can, do, get, have</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: is, will, can, would, was, are, could, do, should, have</li>
    <li>VERB: have, had, said, has, is, want, need, let, are, think</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: being, getting, having, been</li>
    <li>SCONJ: depending, regarding, concerning</li>
    <li>VERB: going, looking, getting, following, including, taking, using, doing, having, regarding</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: be, have, get, do, of, am, 've, are, b, by</li>
    <li>VERB: have, get, know, do, go, make, take, see, like, find</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: been, getting</li>
    <li>SCONJ: given, Based, PROVIDED, geiven</li>
    <li>VERB: going, had, attached, done, made, used, called, based, doing, looking</li>
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
      <li>PRON: she, her, herself, hers</li>
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
      <li>PRON: it, its, itself, it's, THERE, is, ti</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>AUX-Fin: are, were, have, do, 're, did, had, 've, 'd, re</li>
      <li>DET: these, those</li>
      <li>NOUN: people, years, days, things, questions, times, months, guys, friends, places</li>
      <li>PRON: they, we, their, our, them, us, those, these, themselves, there</li>
      <li>PROPN: states, americans, Beatles, Iraqis, Palestinians, Islands, Tigers, Shiites, Nations, Seas</li>
      <li>VERB-Fin: have, are, had, need, do, want, know, took, got, came</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: Central, Global, Modern, Pakistani, middle, red, 17th</li>
      <li>ADV: mid</li>
      <li>AUX-Fin: is, was, has, 's, do, have, am, 'm, are, did</li>
      <li>DET: this, that</li>
      <li>INTJ: appetit</li>
      <li>NOUN: time, service, place, thanks, food, way, year, day, number, pm</li>
      <li>PRON: i, it, my, he, me, this, his, that, him, she</li>
      <li>PROPN: bush, US, al, Iraq, enron, Iran, China, Qaeda, John, india</li>
      <li>SYM: #, %, 1%P701!.doc</li>
      <li>VERB-Fin: have, said, has, had, is, want, think, need, know, got</li>
      <li>VERB-Part: compared</li>
      <li>X: .doc, Guaranty.doc, 20.doc, -2-F.doc, -FINAL.doc, 02-05-02.doc, 4_28_00.doc, URSULA, 0308.doc, 050901.doc</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: me, it, you, them, him, us, her, yourself, myself, itself</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>PRON: my, your, their, his, our, its, her, you, it's, there</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: i, you, it, they, we, he, she, u, the, There</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: the, to, tttthhhhh</li>
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
      <li>ADJ: more, better, less, larger, bigger, earlier, smaller, higher, older, greater</li>
      <li>ADV: more, later, better, earlier, longer, less, further, sooner, closer, higher</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: good, great, new, other, many, last, same, few, little, sure</li>
      <li>ADV: well, far, soon, long, hard, early, late, close, little, high</li>
      <li>INTJ: Bon</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: best, most, least, worst, cheapest, largest, latest, easiest, highest, oldest</li>
      <li>ADV: most, best, least, worst, highest, longest</li>
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
      <li>AUX-Fin: do, be, get</li>
      <li>AUX-Inf: get</li>
      <li>VERB-Fin: let, go, see, take, try, get, make, give, call, put</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: is, was, are, have, do, has, were, 's, am, 'm</li>
      <li>VERB-Fin: have, had, said, has, is, want, need, are, know, think</li>
      <li>VERB-Part: compared</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: be, do</li>
      <li>VERB-Fin: go, get, have, take, build, buy, call, compare, comply, consume</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: was, were, did, had, got, 'd, where, wase, we</li>
      <li>AUX-Part: been</li>
      <li>SCONJ-Part: given, Based, PROVIDED, geiven</li>
      <li>VERB-Fin: had, said, got, took, came, went, did, told, called, made</li>
      <li>VERB-Part: had, attached, done, made, used, called, based, given, seen, sent</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: is, are, have, do, has, 's, am, 'm, does, 've</li>
      <li>AUX-Part: getting</li>
      <li>VERB-Fin: have, has, is, want, need, are, know, think, thank, get</li>
      <li>VERB-Part: going, doing, looking, working, trying, having, getting, coming, making, planning</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Part: attached, made, used, told, done, sent, called, born, appreciated, given</li>
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
      <li>DET: the, a, an, to, tttthhhhh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: then, there, here</li>
      <li>DET: this, that, these, those</li>
      <li>PRON: this, that, those, these</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>PRON: itself, themselves, myself, himself, herself, yourself, my, ourselves</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: anyone, something, anything, someone, anybody, somebody, any, any1, some, someon</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: when, how, why, where, whenever, Wherever, however, were, who, y</li>
      <li>DET: what, which, whatever</li>
      <li>PRON: what, who, which, whatever, whom, Wtf, waht, whoooooo, wht</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: half</li>
      <li>PRON: nothing, one, nobody, noone</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: i, you, it, they, my, we, he, your, me, their</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>DET: each</li>
      <li>PRON: one</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: where, when, why, how, were, wherein, wherever, where-ever</li>
      <li>DET: whatever, which</li>
      <li>PRON: that, which, who, what, whom, whatever, whose, who's, whoever, whomever</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>PRON: everything, everyone, everybody, everbody</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NOUN: 1960s, 1980s, 1990s, 22s</li>
      <li>NUM: one, two, 2, 3, 5, 1, 10, 4, three, 20</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>ADJ: half</li>
      <li>ADV: half</li>
      <li>DET: half</li>
      <li>NOUN: half, third, fifth, fourth, tenth, thirds</li>
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
      <li>ADJ: first, second, third, 17th, fourth, 21st, 5th, 10th, 14th, 19th</li>
      <li>ADV: first, second, Third, fifth</li>
      <li>NOUN: 23rd, 26th, 30th, 15th, 20th, 22nd, 13th, 1st, 29th, 4th</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: my, your, their, his, our, its, her, mine, you, it's</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: yourself, myself, itself, themselves, himself, ourselves, herself, my, yourselves, your</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: have, am, 'm, do, 've, are, was, did, were, had</li>
      <li>PRON: i, my, we, me, our, us, myself, mine, 's, ourselves</li>
      <li>VERB-Fin: have, had, think, thank, know, need, hope, got, want, love</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: are, do, 're, have, did, were, 've, r, re, be</li>
      <li>PRON: you, your, yourself, u, Yo, ur, yours, thy, ya, ye</li>
      <li>VERB-Fin: have, want, need, get, know, think, go, got, do, take</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: is, was, are, has, 's, were, have, does, do, did</li>
      <li>PRON: it, they, he, their, his, them, him, she, her, its</li>
      <li>VERB-Fin: said, has, is, are, had, have, came, took, told, says</li>
      <li>VERB-Part: compared</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: gud, lil</li>
          <li>ADP: o, thru, w, ta, vs, f, a, b/c, w/, 2</li>
          <li>ADV: 4-ever, Def, aka, deffly, ovr, prolly, y</li>
          <li>AUX-Fin: ar, r, re, shal, v, wud</li>
          <li>AUX-Inf: b</li>
          <li>CCONJ: n, 'n, VS</li>
          <li>DET: da, dat, sm</li>
          <li>INTJ: wel, plllz</li>
          <li>NOUN: etc, etc., mins, No., b, luv, ppl, thanx, yrs, UV</li>
          <li>NUM: m, k, b, bn, t</li>
          <li>PART: na, ta, nt, 2, a</li>
          <li>PRON: u, ur, any1, somethin, wht</li>
          <li>PROPN: Sept., Dec., Oct, Oct., feb, Jan, Nov, Nov., Sat., Fri</li>
          <li>SCONJ: b/c, 4, bc, cos, cus, tho, w/out, coz</li>
          <li>VERB-Fin: wan, c'm, hav</li>
          <li>VERB-Ger: findin, goin, playin</li>
          <li>VERB-Inf: hav, wan</li>
          <li>VERB-Part: gon, b., est, wagin</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADP
        <ul>
          <li>ADJ: such, prior</li>
          <li>VERB-Ger: according</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADJ: more, less</li>
          <li>ADP: of, at, A</li>
          <li>NOUN: kind, sort</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>ADV: as</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>DET: each</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADJ: such, prior</li>
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
          <li>X: la, a, de, del, guerre, hoc, non, Acedraz, Déjà, Hochrenaissance</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Digit
        <ul>
          <li>NOUN: 1960s, 1980s, 1990s, 22s</li>
          <li>NUM: 2, 3, 5, 1, 10, 4, 20, 6, 2005, 2003</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>NUM: ii, i, iii, VI, XIII, VII, iv, v</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADJ: half</li>
          <li>ADV: half</li>
          <li>DET: half</li>
          <li>NOUN: half, third, fifth, fourth, tenth, thirds</li>
          <li>NUM: one, two, three, four, m, million, five, six, k, billion</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Style</a>
    <ul>
      <li>Arch
        <ul>
          <li>AUX-Fin: wilt, art</li>
          <li>PRON: thy, ye, Thou</li>
        </ul>
      </li>
      <li>Coll
        <ul>
          <li>PRON: ya, 'em, em</li>
        </ul>
      </li>
      <li>Expr
        <ul>
          <li>ADJ: Brilll, F%#king, FANFUCKINGTASTIC, Pho-nomenal, bl**dy, comfyy, grrrrrrrreeeaaat</li>
          <li>ADV: sooooo, sooo, soooo, NEEEEEEEEEVERRRR, REAAAALLY, VERYYY, VERYYYY, soo, waaaaaaaaaaaaay</li>
          <li>INTJ: hmmm, Hmmmmmm, Ummmm, AAAAAGGGHHHHHH, GRRRRRRR, ewww, hmmmm, pleasseee, riiight, uhh</li>
          <li>NOUN: *ss, Assh@%$e, F'ers, b****, f*ck, poneh, sh*t</li>
          <li>PRON: Wtf, whoooooo</li>
          <li>PROPN: EARTHHHHHHH, saaaaaam</li>
          <li>VERB-Part: f*ed</li>
        </ul>
      </li>
      <li>Slng
        <ul>
          <li>PRON: Yo</li>
        </ul>
      </li>
      <li>Vrnc
        <ul>
          <li>AUX-Fin: ai</li>
          <li>PRON: Ya'll</li>
          <li>SCONJ: coz</li>
          <li>VERB-Ger: goin</li>
          <li>VERB-Part: cookin', walkin</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: over, rediculous, accomodating, Arial, afore, knowledgable, unic, 0nside, Aweesome, Awsome</li>
          <li>ADP: a, then, and, in, int, of, the, aboout, abou, admidst</li>
          <li>ADV: to, definately, aboard, all, any, completly, every, half, on, realy</li>
          <li>AUX-Fin: s, re, where, have, r, ve, woud, ',, `s, a</li>
          <li>AUX-Ger: been</li>
          <li>AUX-Inf: by</li>
          <li>CCONJ: an, adn, a, ad=nd, afnd, amd, ans, at, of</li>
          <li>DET: and, teh, $ome, Thi$, aa, dthat, he, ssome, te, then</li>
          <li>INTJ: Ye$, Υes</li>
          <li>NOUN: MEH-risk, Compaq.com, catagory, chnages, collages, e, hamburguers, mid, resturant, $ervice</li>
          <li>PART: s, nt, too, ot, the</li>
          <li>PRON: you, there, it's, the, their, s, out, they, who's, any</li>
          <li>PROPN: Sear's, penines, U$, A, Bramen, Deutsched, Dinners, Fudruckers, Guiness, Hirsohima</li>
          <li>PUNCT: 1?!?!?, =</li>
          <li>SCONJ: becuse, then, wether, I'd, Seince, Whie, altough, ask, beacuse, becouse</li>
          <li>SCONJ-Part: geiven</li>
          <li>VERB-Fin: taste, new, know, reccomend, recieved, see, want, where, For, Loose</li>
          <li>VERB-Ger: ASWERING, EATTING, developiong, drive, drving, hireing, loosing, usint</li>
          <li>VERB-Inf: loose, reccommend, recieve, recomend, accomodate, answers, bare, charger, co$t, critisize</li>
          <li>VERB-Part: excepted, name, suppose, Compare, Rcommended, U, amplifiaed, botn, buring, charge</li>
          <li>X: Ken, David, Lorie, Sara, John, Nasim, Robert, Adnan, Alma, Amanda</li>
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
<li>This corpus uses 12 lemmas as auxiliaries (<a>aux</a>). Examples: have, be, will, do, can, would, could, should, may, might, must, shall.</li>
<li>This corpus uses 4 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: be, get, have, would.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (1820)</li>
      <li>VERB-Fin--PRON (760)</li>
      <li>VERB-Fin--PRON-Acc (3)</li>
      <li>VERB-Fin--PRON-Nom (4722)</li>
      <li>VERB-Ger--NOUN (84)</li>
      <li>VERB-Ger--PRON (10)</li>
      <li>VERB-Ger--PRON-Acc (8)</li>
      <li>VERB-Ger--PRON-Gen (10)</li>
      <li>VERB-Ger--PRON-Nom (186)</li>
      <li>VERB-Inf--NOUN (628)</li>
      <li>VERB-Inf--PRON (282)</li>
      <li>VERB-Inf--PRON-Acc (29)</li>
      <li>VERB-Inf--PRON-Nom (2609)</li>
      <li>VERB-Part--NOUN (447)</li>
      <li>VERB-Part--PRON (146)</li>
      <li>VERB-Part--PRON-Acc (3)</li>
      <li>VERB-Part--PRON-Nom (1272)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (3478)</li>
      <li>VERB-Fin--PRON (319)</li>
      <li>VERB-Fin--PRON-Acc (781)</li>
      <li>VERB-Fin--PRON-Nom (66)</li>
      <li>VERB-Ger--NOUN (1036)</li>
      <li>VERB-Ger--PRON (43)</li>
      <li>VERB-Ger--PRON-Acc (111)</li>
      <li>VERB-Ger--PRON-Nom (10)</li>
      <li>VERB-Inf--NOUN (3188)</li>
      <li>VERB-Inf--NOUN-ADP('s) (1)</li>
      <li>VERB-Inf--PRON (333)</li>
      <li>VERB-Inf--PRON-Acc (735)</li>
      <li>VERB-Inf--PRON-Nom (89)</li>
      <li>VERB-Part--NOUN (769)</li>
      <li>VERB-Part--PRON (110)</li>
      <li>VERB-Part--PRON-Acc (82)</li>
      <li>VERB-Part--PRON-Nom (6)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (59)</li>
      <li>VERB-Fin--PRON (3)</li>
      <li>VERB-Fin--PRON-Acc (282)</li>
      <li>VERB-Fin--PRON-Nom (5)</li>
      <li>VERB-Ger--NOUN (15)</li>
      <li>VERB-Ger--PRON (1)</li>
      <li>VERB-Ger--PRON-Acc (35)</li>
      <li>VERB-Inf--NOUN (36)</li>
      <li>VERB-Inf--PRON (6)</li>
      <li>VERB-Inf--PRON-Acc (224)</li>
      <li>VERB-Inf--PRON-Nom (8)</li>
      <li>VERB-Part--NOUN (11)</li>
      <li>VERB-Part--PRON-Acc (26)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 59 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: find yourself, save yourself, ask yourself, blow himself, burn itself, consider themselves, describe themselves, do yourself, feel yourself, give yourself, protect ourselves, work themselves, absent himself, absent yourself, adapt itself, ally itself, avail myself, blow herself, bunker themselves, call himself, cloak himself, commit ourselves, compose himself, contradict themselves, do your, embarrass himself, enjoy myself, enjoy yourself, explode himself, explode yourself, find himself, find themselves, get myself, hurt themselves, imagine yourself, introduce herself, introduce myself, keep himself, keep myself, kill themselves, land herself, leave yourself, make yourself, manifest itself, misrepresent themselves, organize themselves, picture yourself, present yourself, pride themselves, prove himself</li>
    <ul>
      <li>Out of those, 1 lemmas occurred more than once, but never without a reflexive dependent. Examples: absent</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 16 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:outer</a>, <a>csubj:pass</a>, <a>det:predet</a>, <a>flat:foreign</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nmod:tmod</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:npmod</a>, <a>obl:tmod</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
