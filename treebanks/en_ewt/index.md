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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/uden_ewt29)<br />
Download all treebanks: [UD 2.9](/#download)

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

[Abbr](en_ewt-feat-Abbr.html) – [Case](en_ewt-feat-Case.html) – [Definite](en_ewt-feat-Definite.html) – [Degree](en_ewt-feat-Degree.html) – [ExtPos](en_ewt-feat-ExtPos.html) – [Foreign](en_ewt-feat-Foreign.html) – [Gender](en_ewt-feat-Gender.html) – [Mood](en_ewt-feat-Mood.html) – [Number](en_ewt-feat-Number.html) – [NumType](en_ewt-feat-NumType.html) – [Person](en_ewt-feat-Person.html) – [Poss](en_ewt-feat-Poss.html) – [PronType](en_ewt-feat-PronType.html) – [Reflex](en_ewt-feat-Reflex.html) – [Style](en_ewt-feat-Style.html) – [Tense](en_ewt-feat-Tense.html) – [Typo](en_ewt-feat-Typo.html) – [VerbForm](en_ewt-feat-VerbForm.html) – [Voice](en_ewt-feat-Voice.html)

## Relations

[acl](en_ewt-dep-acl.html) – [acl:relcl](en_ewt-dep-acl-relcl.html) – [advcl](en_ewt-dep-advcl.html) – [advmod](en_ewt-dep-advmod.html) – [amod](en_ewt-dep-amod.html) – [appos](en_ewt-dep-appos.html) – [aux](en_ewt-dep-aux.html) – [aux:pass](en_ewt-dep-aux-pass.html) – [case](en_ewt-dep-case.html) – [cc](en_ewt-dep-cc.html) – [cc:preconj](en_ewt-dep-cc-preconj.html) – [ccomp](en_ewt-dep-ccomp.html) – [compound](en_ewt-dep-compound.html) – [compound:prt](en_ewt-dep-compound-prt.html) – [conj](en_ewt-dep-conj.html) – [cop](en_ewt-dep-cop.html) – [csubj](en_ewt-dep-csubj.html) – [csubj:pass](en_ewt-dep-csubj-pass.html) – [dep](en_ewt-dep-dep.html) – [det](en_ewt-dep-det.html) – [det:predet](en_ewt-dep-det-predet.html) – [discourse](en_ewt-dep-discourse.html) – [dislocated](en_ewt-dep-dislocated.html) – [expl](en_ewt-dep-expl.html) – [fixed](en_ewt-dep-fixed.html) – [flat](en_ewt-dep-flat.html) – [flat:foreign](en_ewt-dep-flat-foreign.html) – [goeswith](en_ewt-dep-goeswith.html) – [iobj](en_ewt-dep-iobj.html) – [list](en_ewt-dep-list.html) – [mark](en_ewt-dep-mark.html) – [nmod](en_ewt-dep-nmod.html) – [nmod:npmod](en_ewt-dep-nmod-npmod.html) – [nmod:poss](en_ewt-dep-nmod-poss.html) – [nmod:tmod](en_ewt-dep-nmod-tmod.html) – [nsubj](en_ewt-dep-nsubj.html) – [nsubj:pass](en_ewt-dep-nsubj-pass.html) – [nummod](en_ewt-dep-nummod.html) – [obj](en_ewt-dep-obj.html) – [obl](en_ewt-dep-obl.html) – [obl:npmod](en_ewt-dep-obl-npmod.html) – [obl:tmod](en_ewt-dep-obl-tmod.html) – [orphan](en_ewt-dep-orphan.html) – [parataxis](en_ewt-dep-parataxis.html) – [punct](en_ewt-dep-punct.html) – [reparandum](en_ewt-dep-reparandum.html) – [root](en_ewt-dep-root.html) – [vocative](en_ewt-dep-vocative.html) – [xcomp](en_ewt-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 16621 sentences, 251489 tokens and 254825 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 31024 tokens (12%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 925 types of words that contain both letters and punctuation. Examples: 's, n't, 'm, 'll, 've, 're, 'd, Dr., e-mail, Mr., ’s, U.S., st., Inc., etc., Sept., vs., W., .doc, carol.st.clair@enron.com, it's, 01-Feb-02, n’t, Dec., Ft., Oct., alt.animals.cat, p&l, :D, Corp., Ms., No., Non-Bondad, PG&E, S., Yahoo!, i.e., A., Analysis_0712, D.C., E., ENRON.XLS, MEH-risk, Sha'lan, b/c, co., ekrapels@esaibos.com, enrongss.xls, p.m., 80's</li>
</ul>

<ul>
<li>This corpus contains 3333 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 613 types of multi-word tokens. Examples: don't, i'm, it's, i've, didn't, can't, its, i'll, you'll, you're, cannot, doesn't, he's, that's, dont, won't, they're, wouldn't, there's, haven't, isn't, bush's, i'd, wasn't, couldn't, we've, China's, we're, im, here's, what's, aren't, you've, we'll, ive, wont, let's, she's, weren't, your, cant, they'll, world's, you'd, Enron's, Iran's, thats, India's, Qaeda's, he'd.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 21 word types tagged as particles (PART): ', 's, -s, 2, `s, a, n, n't, na, not, nt, n’t, ot, s, t, ta, the, to, too, ’, ’s</li>
</ul>

<ul>
<li>This corpus contains 67 lemmas tagged as pronouns (PRON): 's, I, any, anybody, anyone, anything, everybody, everyone, everything, he, hers, herself, himself, it, it's, its, itself, mine, mines, my, myself, nobody, nothing, one, our, ours, ourselves, s, she, somebody, someone, something, that, theirs, them, themselves, there, they, they're, this, thou, thy, u, ur, us, waht, we, what, whatever, which, who, who's, whoever, whom, whomever, whose, wtf, ya, ya'll, ye, yo, you, you're, your, yours, yourself, yourselves</li>
</ul>

<ul>
<li>This corpus contains 21 lemmas tagged as determiners (DET): a, all, another, any, both, each, either, every, half, many, neither, no, quite, some, such, that, the, this, what, whatever, which</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as PRON and sometimes as DET: any, that, this, what, whatever, which</li>
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
    <li>VERB: have, is, had, said, has, are, want, need, let, think</li>
    <li>X: d, expose, get</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: being, getting, having</li>
    <li>SCONJ: depending, regarding, concerning</li>
    <li>VERB: going, looking, getting, following, including, taking, having, using, doing, regarding</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: be, have, get, do, of, am, 've, are, b, by</li>
    <li>VERB: have, get, know, do, go, make, take, see, like, find</li>
    <li>X: ive, mail, power</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: been</li>
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
      <li>PRON: she, her, herself</li>
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
      <li>PRON: it, its, itself, THERE, is, it's, ti</li>
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
      <li>PRON: they, we, their, our, them, us, those, these, themselves, 's</li>
      <li>PROPN: states, americans, Beatles, Iraqis, Palestinians, Islands, Tigers, Shiites, Nations, Seas</li>
      <li>VERB: have, are, had, need, do, want, know, took, got, came</li>
      <li>VERB-Fin: have, are, had, need, do, want, know, took, got, came</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: Central, Global, Modern, Pakistani, middle, red, 17th</li>
      <li>AUX-Fin: is, was, has, 's, do, have, am, 'm, are, did</li>
      <li>DET: this, that</li>
      <li>INTJ: appetit</li>
      <li>NOUN: time, service, place, thanks, food, way, year, day, number, pm</li>
      <li>NUM: 9/11</li>
      <li>PRON: i, it, my, he, me, this, his, that, him, she</li>
      <li>PROPN: bush, US, al, Iraq, enron, Iran, China, Qaeda, John, india</li>
      <li>SYM: #, %, 1%P701!.doc</li>
      <li>VERB-Fin: is, have, said, has, had, want, was, think, need, know</li>
      <li>X: .doc, Guaranty.doc, 20, 20.doc, one, -2-F.doc, -FINAL.doc, 02-05-02.doc, 4_28_00.doc, URSULA</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: me, it, you, them, him, us, her, yourself, myself, themselves</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: i, you, it, they, we, he, she, the, u, There</li>
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
      <li>X: priced, cooked, day, dramatic, educated, going, ible, informed, standing, full</li>
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
      <li>X-Fin: expose, get</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: is, was, are, have, do, has, were, 's, am, 'm</li>
      <li>VERB-Fin: have, is, had, said, has, are, want, need, know, think</li>
      <li>VERB-Part: ordered</li>
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
      <li>AUX-Fin: was, were, did, had, got, 'd, wase</li>
      <li>AUX-Part: been</li>
      <li>SCONJ-Part: given, Based, PROVIDED, geiven</li>
      <li>VERB-Fin: had, said, was, got, took, came, went, did, told, called</li>
      <li>VERB-Part: had, attached, done, made, used, called, based, given, seen, sent</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: is, are, have, do, has, 's, am, 'm, does, 've</li>
      <li>VERB-Fin: have, is, has, are, want, need, know, think, thank, get</li>
      <li>VERB-Part: going, doing, looking, working, trying, getting, having, coming, making, planning</li>
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
  <li>Ind
    <ul>
      <li>DET: half</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: how, why, where, when, whenever, Wherever, however, were, y</li>
      <li>DET: what, which, whatever</li>
      <li>PRON: what, which, who, whom, whatever, whose, who's, Wtf, waht, whoever</li>
      <li>SCONJ: when, how, where, why, whenever, wherever</li>
      <li>X: ever</li>
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
  <li>Rel
    <ul>
      <li>ADV: when, where, how, were, wherein</li>
      <li>DET: what, whhich</li>
      <li>PRON: that, who, which, whom, what, whose</li>
      <li>SCONJ: where, when, why, were</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: one, two, 2, 3, 5, 1, 10, 4, three, 20</li>
      <li>X: 3-5290</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>ADJ: half</li>
      <li>ADV: half</li>
      <li>DET: half</li>
      <li>NOUN: half, third, fifth, fourth, sixth, tenth, thirds</li>
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
      <li>PRON: my, your, their, his, our, its, her, whose, there, you</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: yourself, myself, themselves, itself, himself, ourselves, herself, yourselves</li>
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
      <li>PRON: i, my, we, me, our, us, myself, 's, ourselves, s</li>
      <li>VERB-Fin: have, had, think, thank, know, need, hope, got, want, love</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: are, do, 're, have, did, were, 've, r, re, be</li>
      <li>PRON: you, your, yourself, u, ur, Thou, yourselves, yuor</li>
      <li>VERB-Fin: have, want, need, get, know, think, go, got, do, take</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: is, was, are, has, 's, were, have, does, do, did</li>
      <li>PRON: it, they, he, their, his, them, him, she, her, its</li>
      <li>VERB-Fin: is, said, has, are, have, had, was, came, took, told</li>
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
          <li>ADV: 4-ever, Def, aka, deffly, ovr, prolly</li>
          <li>AUX-Fin: ar, shal, wud</li>
          <li>AUX-Inf: b</li>
          <li>CCONJ: n, 'n, VS</li>
          <li>DET: da, dat, sm</li>
          <li>INTJ: wel, plllz</li>
          <li>NOUN: mins, No., luv, yrs, UV, b, c, min, yr, DJ's</li>
          <li>NUM: b, bn</li>
          <li>PART: na, ta, 2, a</li>
          <li>PRON: u, ur, 'em, any1, em, wht</li>
          <li>PROPN: Sept., Dec., Oct, Oct., feb, Jan, Nov, Nov., Sat., Fri</li>
          <li>SCONJ: b/c, 4, bc, cos, coz, cus, ig, tho, w/out</li>
          <li>VERB-Fin: wan, c'm, hav</li>
          <li>VERB-Ger: findin, goin, playin</li>
          <li>VERB-Inf: hav, wan</li>
          <li>VERB-Part: gon, est</li>
          <li>X: ect.</li>
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
          <li>NUM: one</li>
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
  <li><a>Style</a>
    <ul>
      <li>Expr
        <ul>
          <li>ADJ: Brilll, F%#king, FANFUCKINGTASTIC, Pho-nomenal, bl**dy, comfyy, grrrrrrrreeeaaat</li>
          <li>ADV: sooooo, sooo, soooo, NEEEEEEEEEVERRRR, REAAAALLY, VERYYY, VERYYYY, soo, waaaaaaaaaaaaay</li>
          <li>INTJ: hmmm, Hmmmmmm, Ummmm, AAAAAGGGHHHHHH, GRRRRRRR, ewww, hmmmm, pleasseee, riiight, uhh</li>
          <li>NOUN: *ss, Assh@%$e, F'ers, b****, f*ck, poneh, sh*t</li>
          <li>PRON: whoooooo</li>
          <li>PROPN: EARTHHHHHHH, saaaaaam</li>
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
          <li>ADJ: accomodating, rediculous, Arial, knowledgable, mellow, miss, unic, 0nside, Aweesome, Awsome</li>
          <li>ADP: then, a, and, int, of, the, aboout, abou, admidst, aground</li>
          <li>ADV: to, definately, aboard, completly, every, realy, their, truely, $ometime$, Consistantly</li>
          <li>AUX-Fin: r, ar, have, woud, ',, `s, a, are, as, cold</li>
          <li>AUX-Inf: by</li>
          <li>CCONJ: an, adn, a, ad=nd, amd, ans, at, of</li>
          <li>DET: and, teh, $ome, Thi$, aa, dthat, he, ssome, te, then</li>
          <li>INTJ: Ye$, Υes</li>
          <li>NOUN: catagory, collages, hamburguers, realtion, resturant, $ervice, 1002`s, 22th, AREA'S, Bredders</li>
          <li>PART: s, too, nt, ot</li>
          <li>PRON: there, their, the, you, out, they, it's, thei, u, is</li>
          <li>PROPN: Sear's, penines, U$, Bramen, Deutsched, Guiness, Hirsohima, Levi`s, Nagaski, Panamal</li>
          <li>PUNCT: =</li>
          <li>SCONJ: becuse, wether, I'd, Seince, Whie, altough, ask, beacuse, becouse, it</li>
          <li>SCONJ-Part: geiven</li>
          <li>VERB-Fin: taste, where, know, new, reccomend, recieved, see, want, adhear, advice</li>
          <li>VERB-Ger: ASWERING, EATTING, developiong, drive, drving, hireing, usint</li>
          <li>VERB-Inf: reccommend, recieve, recomend, accomodate, bare, charger, co$t, critisize, endevour, had</li>
          <li>VERB-Part: Rcommended, amplifiaed, botn, effected, excepted, invovled, ordered, recomended, squirelled, use</li>
          <li>X: were, ect., full</li>
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
<li>This corpus uses 13 lemmas as auxiliaries (<a>aux</a>). Examples: have, be, will, do, can, would, could, should, may, might, must, shall, get.</li>
<li>This corpus uses 4 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: be, get, have, would.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--PRON-Nom (2)</li>
      <li>VERB-Fin--NOUN (2007)</li>
      <li>VERB-Fin--PRON (784)</li>
      <li>VERB-Fin--PRON-Acc (3)</li>
      <li>VERB-Fin--PRON-Nom (4759)</li>
      <li>VERB-Ger--NOUN (86)</li>
      <li>VERB-Ger--PRON (21)</li>
      <li>VERB-Ger--PRON-Acc (7)</li>
      <li>VERB-Ger--PRON-Nom (186)</li>
      <li>VERB-Inf--NOUN (640)</li>
      <li>VERB-Inf--PRON (287)</li>
      <li>VERB-Inf--PRON-Acc (28)</li>
      <li>VERB-Inf--PRON-Nom (2601)</li>
      <li>VERB-Part--NOUN (459)</li>
      <li>VERB-Part--PRON (143)</li>
      <li>VERB-Part--PRON-Acc (4)</li>
      <li>VERB-Part--PRON-Nom (1269)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB-Fin--NOUN (3522)</li>
      <li>VERB-Fin--NOUN-ADP('s) (1)</li>
      <li>VERB-Fin--NOUN-ADP(over) (1)</li>
      <li>VERB-Fin--PRON (343)</li>
      <li>VERB-Fin--PRON-Acc (877)</li>
      <li>VERB-Fin--PRON-Nom (63)</li>
      <li>VERB-Ger--NOUN (1042)</li>
      <li>VERB-Ger--PRON (48)</li>
      <li>VERB-Ger--PRON-Acc (118)</li>
      <li>VERB-Ger--PRON-Nom (10)</li>
      <li>VERB-Inf--NOUN (3205)</li>
      <li>VERB-Inf--NOUN-ADP('s) (1)</li>
      <li>VERB-Inf--NOUN-ADP(of) (1)</li>
      <li>VERB-Inf--PRON (328)</li>
      <li>VERB-Inf--PRON-Acc (793)</li>
      <li>VERB-Inf--PRON-Nom (88)</li>
      <li>VERB-Part--NOUN (773)</li>
      <li>VERB-Part--PRON (123)</li>
      <li>VERB-Part--PRON-Acc (93)</li>
      <li>VERB-Part--PRON-Nom (4)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (17)</li>
      <li>VERB-Fin--PRON (4)</li>
      <li>VERB-Fin--PRON-Acc (173)</li>
      <li>VERB-Fin--PRON-Nom (5)</li>
      <li>VERB-Ger--NOUN (9)</li>
      <li>VERB-Ger--PRON-Acc (24)</li>
      <li>VERB-Inf--NOUN (17)</li>
      <li>VERB-Inf--PRON (2)</li>
      <li>VERB-Inf--PRON-Acc (162)</li>
      <li>VERB-Inf--PRON-Nom (6)</li>
      <li>VERB-Part--NOUN (5)</li>
      <li>VERB-Part--PRON-Acc (14)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 58 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: find yourself, save yourself, ask yourself, blow himself, burn itself, consider themselves, describe themselves, do yourself, feel yourself, give yourself, protect ourselves, work themselves, absent himself, absent yourself, adapt itself, ally itself, avail myself, blow herself, bunker themselves, call himself, cloak himself, commit ourselves, compose himself, contradict themselves, embarrass himself, enjoy myself, enjoy yourself, explode himself, explode yourself, find himself, find themselves, get myself, hurt themselves, imagine yourself, introduce herself, introduce myself, keep himself, keep myself, kill themselves, land herself, leave yourself, make yourself, manifest itself, misrepresent themselves, organize themselves, picture yourself, present yourself, pride themselves, prove himself, put yourself</li>
    <ul>
      <li>Out of those, 1 lemmas occurred more than once, but never without a reflexive dependent. Examples: absent</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 13 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>det:predet</a>, <a>flat:foreign</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nmod:tmod</a>, <a>nsubj:pass</a>, <a>obl:npmod</a>, <a>obl:tmod</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
