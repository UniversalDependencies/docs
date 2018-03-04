---
layout: base
title:  'UD_English'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD English

Language: [English](../en/overview/en-hub.html) (code: `en`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v1.0 release.

The following people have contributed to making this treebank part of UD: Natalia Silveira, Timothy Dozat, Christopher Manning, Sebastian Schuster, John Bauer, Miriam Connor, Marie-Catherine de Marneffe, Sam Bowman, Hanzhi Zhu, Daniel Galbraith.

Repository: [UD_English](https://github.com/UniversalDependencies/UD_English)

License: CC BY-SA 4.0

Genre: blog, social, reviews, email

Questions, comments?
General annotation questions (either English-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_English/issues).
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




The corpus comprises 254,830 words and 16,622 sentences, taken from five genres
of web media: weblogs, newsgroups, emails, reviews, and Yahoo! answers. See the
LDC2012T13 documentation for more details on the sources of the sentences. The
trees were automatically converted into Stanford Dependencies and then
hand-corrected to Universal Dependencies. All the dependency annotations have been single-annotated, a limited portion of them have been double-annotated,
and subsequent correction has been done to improve consistency. Other aspects
of the treebank, such as Universal POS and features, has mainly been done
automatically, with very limited hand-correction.

## Acknowledgments

Annotation of the Universal Dependencies English Web Treebank was carried out by
(in order of size of contribution):

- Natalia Silveira
- Timothy Dozat
- Sebastian Schuster
- Miriam Connor
- Marie-Catherine de Marneffe
- Samuel Bowman
- Hanzhi Zhu
- Daniel Galbraith
- Christopher Manning
- John Bauer

Creation of the CoNLL-U files, including calculating UPOS, feature, and lemma
information was primarily done by

- Sebastian Schuster
- Natalia Silveira

The construction of the Universal Dependencies English Web Treebank was
partially funded by a gift from Google, Inc., which we gratefully acknowledge.



# Statistics of UD English

## POS Tags

[ADJ](en-pos-ADJ.html) – [ADP](en-pos-ADP.html) – [ADV](en-pos-ADV.html) – [AUX](en-pos-AUX.html) – [CCONJ](en-pos-CCONJ.html) – [DET](en-pos-DET.html) – [INTJ](en-pos-INTJ.html) – [NOUN](en-pos-NOUN.html) – [NUM](en-pos-NUM.html) – [PART](en-pos-PART.html) – [PRON](en-pos-PRON.html) – [PROPN](en-pos-PROPN.html) – [PUNCT](en-pos-PUNCT.html) – [SCONJ](en-pos-SCONJ.html) – [SYM](en-pos-SYM.html) – [VERB](en-pos-VERB.html) – [X](en-pos-X.html)

## Features

[Case](en-feat-Case.html) – [Definite](en-feat-Definite.html) – [Degree](en-feat-Degree.html) – [Foreign](en-feat-Foreign.html) – [Gender](en-feat-Gender.html) – [Mood](en-feat-Mood.html) – [Number](en-feat-Number.html) – [NumType](en-feat-NumType.html) – [Person](en-feat-Person.html) – [Poss](en-feat-Poss.html) – [PronType](en-feat-PronType.html) – [Reflex](en-feat-Reflex.html) – [Tense](en-feat-Tense.html) – [VerbForm](en-feat-VerbForm.html) – [Voice](en-feat-Voice.html)

## Relations

[_](en-dep-_.html) – [acl](en-dep-acl.html) – [acl:relcl](en-dep-acl-relcl.html) – [advcl](en-dep-advcl.html) – [advmod](en-dep-advmod.html) – [amod](en-dep-amod.html) – [appos](en-dep-appos.html) – [aux](en-dep-aux.html) – [aux:pass](en-dep-aux-pass.html) – [case](en-dep-case.html) – [cc](en-dep-cc.html) – [cc:preconj](en-dep-cc-preconj.html) – [ccomp](en-dep-ccomp.html) – [compound](en-dep-compound.html) – [compound:prt](en-dep-compound-prt.html) – [conj](en-dep-conj.html) – [cop](en-dep-cop.html) – [csubj](en-dep-csubj.html) – [csubj:pass](en-dep-csubj-pass.html) – [dep](en-dep-dep.html) – [det](en-dep-det.html) – [det:predet](en-dep-det-predet.html) – [discourse](en-dep-discourse.html) – [dislocated](en-dep-dislocated.html) – [expl](en-dep-expl.html) – [fixed](en-dep-fixed.html) – [flat](en-dep-flat.html) – [flat:foreign](en-dep-flat-foreign.html) – [goeswith](en-dep-goeswith.html) – [iobj](en-dep-iobj.html) – [list](en-dep-list.html) – [mark](en-dep-mark.html) – [nmod](en-dep-nmod.html) – [nmod:npmod](en-dep-nmod-npmod.html) – [nmod:poss](en-dep-nmod-poss.html) – [nmod:tmod](en-dep-nmod-tmod.html) – [nsubj](en-dep-nsubj.html) – [nsubj:pass](en-dep-nsubj-pass.html) – [nummod](en-dep-nummod.html) – [obj](en-dep-obj.html) – [obl](en-dep-obl.html) – [obl:npmod](en-dep-obl-npmod.html) – [obl:tmod](en-dep-obl-tmod.html) – [orphan](en-dep-orphan.html) – [parataxis](en-dep-parataxis.html) – [punct](en-dep-punct.html) – [reparandum](en-dep-reparandum.html) – [root](en-dep-root.html) – [vocative](en-dep-vocative.html) – [xcomp](en-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>

<ul>
<li>This corpus contains 16622 sentences and 254854 tokens.</li>
<li>This corpus contains 34370 tokens (13%) that are not followed by a space.</li>
<li>This corpus does not contain words with spaces.</li>
<li>This corpus contains 924 types of words that contain both letters and punctuation. Examples: 's, n't, 'm, 'll, 've, 're, 'd, Dr., e-mail, Mr., ’s, U.S., st., Inc., etc., Sept., vs., W., .doc, carol.st.clair@enron.com, it's, 01-Feb-02, n’t, Dec., Ft., Oct., alt.animals.cat, p&l, :D, Corp., Ms., No., Non-Bondad, PG&E, S., Yahoo!, i.e., A., Analysis_0712, D.C., E., ENRON.XLS, MEH-risk, Sha'lan, b/c, co., ekrapels@esaibos.com, enrongss.xls, p.m., 80's</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus contains 21 word types tagged as particles (PART): ', 's, -s, 2, `s, a, n, n't, na, not, nt, n’t, ot, s, t, ta, the, to, too, ’, ’s</li>
</ul>

<ul>
<li>This corpus contains 82 lemmas tagged as pronouns (PRON): 'em, 's, anybody, anyone, anything, em, ever, everybody, everyone, everything, he, hers, herself, himself, i, is, it, it's, its, itself, mine, mines, my, myself, nobody, nothing, one, ours, ourselves, out, s, self, she, somebody, someone, something, that, the, thei, their, theirs, themselves, then, there, these, they, they're, theyy, thier, this, those, thou, thy, ti, u, ur, us, use, waht, we, what, whatever, which, who, who's, whoever, whom, whomever, whoooooo, whose, wht, wtf, ya, ya'll, ye, yo, you, you're, your, yours, yourself, yourselves</li>
</ul>

<ul>
<li>This corpus contains 37 lemmas tagged as determiners (DET): a, aa, all, and, another, any, both, da, dat, dthat, each, either, every, half, he, many, neither, no, quite, sm, some, ssome, such, te, teh, that, the, then, ther, these, thi$, this, those, what, whatever, whhich, which</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as PRON and sometimes as DET: he, that, the, then, these, this, those, what, whatever, which</li>
</ul>

<ul>
<li>This corpus contains 37 lemmas tagged as auxiliaries (AUX): ', 'd, -ll, `s, a, ar, art, as, b, be, can, cold, could, do, get, hav, have, hvae, made, may, might, most, must, my, of, ought, shal, shall, should, wase, wil, will, willl, with, woud, would, wud</li>
</ul>

<ul>
<li>Out of the above, 7 lemmas occurred sometimes as AUX and sometimes as VERB: ar, be, can, do, get, hav, have</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a>
<ul>
  <li>Fin
  <ul>
    <li>AUX: is, will, can, would, was, are, could, do, should, have</li>
    <li>VERB: have, is, had, said, has, are, want, need, let, think</li>
  </ul>
  </li>
  <li>Ger
  <ul>
    <li>AUX: being, having, getting</li>
    <li>VERB: going, getting, looking, following, including, taking, having, using, doing, regarding</li>
  </ul>
  </li>
  <li>Inf
  <ul>
    <li>AUX: be, have, do, get, of, am, 've, are, b</li>
    <li>VERB: have, get, know, do, go, make, take, see, like, find</li>
  </ul>
  </li>
  <li>Part
  <ul>
    <li>AUX: been</li>
    <li>VERB: going, had, attached, done, made, used, called, based, doing, looking</li>
  </ul>
  </li>
</ul>
</li>
</ul>

<h3>Nominal Features</h3>

<li><a>Gender</a>
  <ul>
    <li>Fem
      <ul>
        <li>PRON: she, her, herself</li>
      </ul>
    </li>
    <li>Masc
      <ul>
        <li>PRON: he, his, him, himself</li>
      </ul>
    </li>
    <li>Neut
      <ul>
        <li>PRON: it, its, itself</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Number</a>
  <ul>
    <li>Plur
      <ul>
        <li>DET: these, those</li>
        <li>NOUN: people, years, days, things, questions, times, months, guys, friends, places</li>
        <li>PRON: they, we, their, our, them, us, those, these, themselves, 's</li>
        <li>PROPN: americans, Beatles, Iraqis, Palestinians, Islands, Tigers, Shiites, Seas, Muslims, Christians</li>
        <li>VERB: associates, rays</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>ADJ: Global, Pakistani, criminal, female, middle</li>
        <li>ADP: auto</li>
        <li>ADV: best</li>
        <li>AUX-Fin: is, was, has, 's, am, does, s, ’s, `s, ai</li>
        <li>DET: this, that, A</li>
        <li>INTJ: appetit</li>
        <li>NOUN: time, service, place, thanks, food, way, year, day, number, pm</li>
        <li>NUM: 9/11</li>
        <li>PRON: i, it, my, he, me, this, his, that, him, she</li>
        <li>PROPN: Bush, US, al, Iraq, enron, united, Iran, New, China, states</li>
        <li>SYM: %, 1%P701!.doc</li>
        <li>VERB: is, has, was, says, 's, makes, seems, needs, looks, comes</li>
        <li>VERB-Fin: is, has, was, says, 's, makes, seems, needs, looks, comes</li>
        <li>X: URSULA</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Case</a>
  <ul>
    <li>Acc
      <ul>
        <li>PRON: me, it, you, them, him, us, her, yourself, myself, themselves</li>
      </ul>
    </li>
    <li>Nom
      <ul>
        <li>PRON: i, you, it, they, we, he, she</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Definite</a>
  <ul>
    <li>Def
      <ul>
        <li>DET: the</li>
        <li>PRON: The</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>DET: a, an</li>
      </ul>
    </li>
  </ul>
</li>

<h3>Degree and Polarity</h3>

<li><a>Degree</a>
  <ul>
    <li>Cmp
      <ul>
        <li>ADJ: more, better, less, larger, bigger, earlier, older, smaller, higher, worse</li>
        <li>ADV: later, better, longer, less, earlier, sooner, further, closer, higher, faster</li>
      </ul>
    </li>
    <li>Pos
      <ul>
        <li>ADJ: good, great, other, new, many, last, same, few, sure, little</li>
        <li>ADV: well, far, soon, long, hard, early, late, close, little, high</li>
        <li>INTJ: Bon</li>
        <li>NOUN: equivalant</li>
        <li>PROPN: Central, Modern, english</li>
      </ul>
    </li>
    <li>Sup
      <ul>
        <li>ADJ: best, most, worst, cheapest, largest, latest, easiest, highest, oldest, biggest</li>
        <li>ADV: least, best, worst, highest, longest</li>
      </ul>
    </li>
  </ul>
</li>



<h3>Verbal Features</h3>


<li><a>Mood</a>
  <ul>
    <li>Imp
      <ul>
        <li>AUX-Fin: do, be, get</li>
        <li>VERB-Fin: let, go, see, take, try, get, make, give, call, keep</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>AUX-Fin: is, was, are, have, do, has, were, 's, am, 'm</li>
        <li>VERB-Fin: have, is, had, said, has, are, want, need, know, think</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Tense</a>
  <ul>
    <li>Past
      <ul>
        <li>AUX-Fin: was, were, did, had, got, 'd, wase</li>
        <li>AUX-Part: been</li>
        <li>VERB-Fin: had, said, was, got, took, did, came, went, told, called</li>
        <li>VERB-Part: had, attached, done, made, used, called, based, given, seen, sent</li>
      </ul>
    </li>
    <li>Pres
      <ul>
        <li>AUX-Fin: is, are, have, do, has, 's, am, 'm, does, 've</li>
        <li>VERB-Fin: have, is, has, are, want, need, know, think, thank, get</li>
        <li>VERB-Part: going, doing, looking, working, trying, getting, having, coming, making, planning</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Voice</a>
  <ul>
    <li>Pass
      <ul>
        <li>VERB-Part: attached, made, used, told, done, sent, called, born, appreciated, given</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Pronouns, Determiners, Quantifiers</h3>

<li><a>PronType</a>
  <ul>
    <li>Art
      <ul>
        <li>DET: the, a, an</li>
        <li>PRON: The</li>
      </ul>
    </li>
    <li>Dem
      <ul>
        <li>ADV: there, then, here, that</li>
        <li>DET: this, that, these, those</li>
        <li>PRON: this, that, those, these</li>
      </ul>
    </li>
    <li>Int
      <ul>
        <li>ADV: when, how, why, where, whenever, ever, wherever, however, were, y</li>
        <li>DET: what, which, whatever</li>
        <li>PRON: what, which, who, whom, whatever, whose, who's, Wtf, ever, waht</li>
      </ul>
    </li>
    <li>Prs
      <ul>
        <li>PRON: i, you, it, they, my, we, he, your, me, their</li>
      </ul>
    </li>
    <li>Rel
      <ul>
        <li>ADV: where, that, when, why, how, were, wherein</li>
        <li>DET: what, whhich</li>
        <li>PRON: that, who, which, whom, what, whose</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>NumType</a>
  <ul>
    <li>Card
      <ul>
        <li>NUM: one, two, 2, 3, 5, 1, 10, 4, three, 20</li>
      </ul>
    </li>
    <li>Mult
      <ul>
        <li>ADV: once, twice</li>
      </ul>
    </li>
    <li>Ord
      <ul>
        <li>ADJ: first, second, third, 5th, fourth, 19th, 2nd, 1st, 20th, 21st</li>
        <li>ADV: first</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Poss</a>
  <ul>
    <li>Yes
      <ul>
        <li>PRON: my, your, their, his, our, its, her, whose, Theirs, you</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Reflex</a>
  <ul>
    <li>Yes
      <ul>
        <li>PRON: yourself, myself, themselves, itself, himself, ourselves, herself, yourselves</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Person</a>
  <ul>
    <li>1
      <ul>
        <li>AUX-Fin: am, was</li>
        <li>PRON: i, my, we, me, our, us, myself, 's, ourselves, s</li>
        <li>VERB-Fin: was, am</li>
      </ul>
    </li>
    <li>2
      <ul>
        <li>PRON: you, your, yourself, yourselves</li>
      </ul>
    </li>
    <li>3
      <ul>
        <li>AUX-Fin: is, was, has, 's, does, s, ’s, `s, ai, gets</li>
        <li>PRON: it, they, he, their, his, them, him, she, her, its</li>
        <li>VERB-Fin: is, has, was, says, 's, makes, seems, needs, looks, comes</li>
      </ul>
    </li>
  </ul>
</li>




<h3>Other Features</h3>

<li><a>Foreign</a>
  <ul>
    <li>Yes
      <ul>
        <li>X: la, a, de, del, guerre, hoc, non, Acedraz, Déjà, Hochrenaissance</li>
      </ul>
    </li>
  </ul>
</li>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 4 lemmas as copulas (<a>cop</a>). Examples: be, `s, ', b.</li>
<li>This corpus uses 37 lemmas as auxiliaries (<a>aux</a>). Examples: have, be, will, do, can, would, could, should, may, might, must, shall, get, better, of, woud, 'd, -ll, `s, a, ar, art, as, cold, hav, hvae, made, most, my, se, shal, to, wase, wil, willl, with, wud.</li>
<li>This corpus uses 5 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: be, get, become, have, would.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (1999)</li>
      <li>VERB-Fin--PRON (791)</li>
      <li>VERB-Fin--PRON-Acc (3)</li>
      <li>VERB-Fin--PRON-Nom (4760)</li>
      <li>VERB-Ger--NOUN (85)</li>
      <li>VERB-Ger--PRON (23)</li>
      <li>VERB-Ger--PRON-Acc (7)</li>
      <li>VERB-Ger--PRON-Nom (189)</li>
      <li>VERB-Inf--NOUN (657)</li>
      <li>VERB-Inf--PRON (293)</li>
      <li>VERB-Inf--PRON-Acc (37)</li>
      <li>VERB-Inf--PRON-Nom (2612)</li>
      <li>VERB-Part--NOUN (458)</li>
      <li>VERB-Part--PRON (145)</li>
      <li>VERB-Part--PRON-Acc (4)</li>
      <li>VERB-Part--PRON-Nom (1263)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (3499)</li>
      <li>VERB-Fin--NOUN-ADP(s) (1)</li>
      <li>VERB-Fin--PRON (347)</li>
      <li>VERB-Fin--PRON-Acc (865)</li>
      <li>VERB-Fin--PRON-Nom (63)</li>
      <li>VERB-Ger--NOUN (1041)</li>
      <li>VERB-Ger--PRON (47)</li>
      <li>VERB-Ger--PRON-Acc (118)</li>
      <li>VERB-Ger--PRON-Nom (10)</li>
      <li>VERB-Inf--NOUN (3195)</li>
      <li>VERB-Inf--NOUN-ADP('s) (1)</li>
      <li>VERB-Inf--NOUN-ADP(of) (1)</li>
      <li>VERB-Inf--PRON (328)</li>
      <li>VERB-Inf--PRON-Acc (787)</li>
      <li>VERB-Inf--PRON-Nom (88)</li>
      <li>VERB-Part--NOUN (770)</li>
      <li>VERB-Part--PRON (123)</li>
      <li>VERB-Part--PRON-Acc (92)</li>
      <li>VERB-Part--PRON-Nom (4)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (17)</li>
      <li>VERB-Fin--PRON (4)</li>
      <li>VERB-Fin--PRON-Acc (171)</li>
      <li>VERB-Fin--PRON-Nom (5)</li>
      <li>VERB-Ger--NOUN (9)</li>
      <li>VERB-Ger--PRON-Acc (24)</li>
      <li>VERB-Inf--NOUN (16)</li>
      <li>VERB-Inf--PRON (2)</li>
      <li>VERB-Inf--PRON-Acc (161)</li>
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
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 13 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>det:predet</a>, <a>flat:foreign</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nmod:tmod</a>, <a>nsubj:pass</a>, <a>obl:npmod</a>, <a>obl:tmod</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
