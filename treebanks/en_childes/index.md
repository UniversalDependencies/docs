---
layout: base
title:  'UD_English-CHILDES'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD English CHILDES

Language: [English](/en/index.html) (code: `en`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.16 release.

The following people have contributed to making this treebank part of UD: Xiulin Yang, Zhuoxuan Ju, Lanni Bu, Zoey Liu, Nathan Schneider.

Repository: [UD_English-CHILDES](https://github.com/UniversalDependencies/UD_English-CHILDES)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/uden_childes218)<br />
Download all treebanks: [UD 2.18](/#download)

License: CC BY-SA 4.0

Genre: spoken

Questions, comments?
General annotation questions (either English-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_English-CHILDES/issues).
If you want to collaborate, please contact [xy236&nbsp;(æt)&nbsp;georgetown&nbsp;•&nbsp;edu].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, with some manual corrections, but not a full manual verification |
| UPOS | assigned by a program, with some manual corrections, but not a full manual verification |
| XPOS | assigned by a program, not checked manually |
| Features | not available |
| Relations | annotated manually, natively in UD style |

## Description

This repository contains Universal Dependencies (UD) trees for utterances from child–adult spoken interactions in English, drawn from [CHILDES](https://childes.talkbank.org/) transcripts.


This treebank is built based on three existing treebanks (details under [References](#references)).
We compile, harmonize, and manually correct major UD-style annotations of CHILDES data into a consistent, unified UD format,
resulting in a gold-standard treebank of 48K sentences and 236K tokens.
## Overall Statistics

| Child | Corpus | Child Age Range | Gold Sents | Gold Toks |
|--------|------------|---------------------|------------|-----------|
| Laura | Braunwald | 1;3–7;0 (1;3–7;0) | 4,622 | 21,079 |
| Adam | Brown | 1;6–5;2 (1;6–5;2) | 16,770 | 84,643 |
| Eve | Brown | 1;6–5;1 (1;6–5;2) | 2,207 | 8,497 |
| Abe | Kuczaj | 2;4–5;0 (2;4–5;0) | 4,167 | 22,437 |
| Sarah | Brown | 1;6–5;2 (1;6–5;2) | 5,347 | 23,233 |
| Lily | Providence | 0;11–4;0 (0;11–4;0) | 1,499 | 6,337 |
| Naima | Providence | 1;3–3;11 (0;11–4;0) | 2,534 | 14,360 |
| Violet | Providence | 0;11–4;0 (0;11–4;0) | 721 | 1,857 |
| Thomas | Thomas | 2;0–4;11 (2;0–4;11) | 4,240 | 20,333 |
| Emma | Weist | 2;2–4;10 (2;1–5;0) | 2,423 | 13,730 |
| Roman | Weist | 2;2–4;9 (2;1–5;0) | 3,653 | 20,557 |
|Overall| NA | NA |48,183 |236,941|

## Train, dev, test split statistics

| split | Children | Corpus | Gold Sents |
|-------|-----------|---------|------------|
| Train | Adam, Lily, Naima, Sarah, Roman, Laura, Abe | Brown, Providence, Weist, Kuczaj, Braunwald| 34,732 |
| Dev | Adam, Lily, Naima, Sarah, Roman, Laura, Abe | Brown, Providence, Weist, Kuczaj, Braunwald | 3,860 |
| Test | Eve, Violet, Emma, Thomas| Brown, Providence, Weist, Thomas| 9,591 |


## Example
```
## Acknowledgments

We acknowledge Ida Szubert, Omri Abend, Samuel Gibbon, Louis Mahon, Sharon Goldwater, Mark Steedman, and Emily Prud’hommeaux for their contributions to the original UD treebanking efforts. We also thank Brian MacWhinney for helpful discussions.



# Statistics of UD English CHILDES

## POS Tags

[ADJ](en_childes-pos-ADJ.html) – [ADP](en_childes-pos-ADP.html) – [ADV](en_childes-pos-ADV.html) – [AUX](en_childes-pos-AUX.html) – [CCONJ](en_childes-pos-CCONJ.html) – [DET](en_childes-pos-DET.html) – [INTJ](en_childes-pos-INTJ.html) – [NOUN](en_childes-pos-NOUN.html) – [NUM](en_childes-pos-NUM.html) – [PART](en_childes-pos-PART.html) – [PRON](en_childes-pos-PRON.html) – [PROPN](en_childes-pos-PROPN.html) – [PUNCT](en_childes-pos-PUNCT.html) – [SCONJ](en_childes-pos-SCONJ.html) – [SYM](en_childes-pos-SYM.html) – [VERB](en_childes-pos-VERB.html) – [X](en_childes-pos-X.html)

## Features

[ExtPos](en_childes-feat-ExtPos.html) – [Typo](en_childes-feat-Typo.html)

## Relations

[acl](en_childes-dep-acl.html) – [acl:relcl](en_childes-dep-acl-relcl.html) – [advcl](en_childes-dep-advcl.html) – [advmod](en_childes-dep-advmod.html) – [amod](en_childes-dep-amod.html) – [appos](en_childes-dep-appos.html) – [aux](en_childes-dep-aux.html) – [aux:pass](en_childes-dep-aux-pass.html) – [case](en_childes-dep-case.html) – [cc](en_childes-dep-cc.html) – [cc:preconj](en_childes-dep-cc-preconj.html) – [ccomp](en_childes-dep-ccomp.html) – [compound](en_childes-dep-compound.html) – [compound:prt](en_childes-dep-compound-prt.html) – [conj](en_childes-dep-conj.html) – [cop](en_childes-dep-cop.html) – [csubj](en_childes-dep-csubj.html) – [csubj:pass](en_childes-dep-csubj-pass.html) – [dep](en_childes-dep-dep.html) – [det](en_childes-dep-det.html) – [det:predet](en_childes-dep-det-predet.html) – [discourse](en_childes-dep-discourse.html) – [dislocated](en_childes-dep-dislocated.html) – [expl](en_childes-dep-expl.html) – [fixed](en_childes-dep-fixed.html) – [flat](en_childes-dep-flat.html) – [goeswith](en_childes-dep-goeswith.html) – [iobj](en_childes-dep-iobj.html) – [list](en_childes-dep-list.html) – [mark](en_childes-dep-mark.html) – [nmod](en_childes-dep-nmod.html) – [nmod:npmod](en_childes-dep-nmod-npmod.html) – [nmod:poss](en_childes-dep-nmod-poss.html) – [nmod:unmarked](en_childes-dep-nmod-unmarked.html) – [nsubj](en_childes-dep-nsubj.html) – [nsubj:outer](en_childes-dep-nsubj-outer.html) – [nsubj:pass](en_childes-dep-nsubj-pass.html) – [nummod](en_childes-dep-nummod.html) – [obj](en_childes-dep-obj.html) – [obl](en_childes-dep-obl.html) – [obl:npmod](en_childes-dep-obl-npmod.html) – [obl:unmarked](en_childes-dep-obl-unmarked.html) – [orphan](en_childes-dep-orphan.html) – [parataxis](en_childes-dep-parataxis.html) – [punct](en_childes-dep-punct.html) – [reparandum](en_childes-dep-reparandum.html) – [root](en_childes-dep-root.html) – [vocative](en_childes-dep-vocative.html) – [xcomp](en_childes-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 48183 sentences, 289817 tokens and 302740 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 48188 tokens (17%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 21 types of words that contain both letters and punctuation. Examples: 's, n't, 're, 't, 'm, 'll, 've, 'd, o'clock, all_gone, dum-dum, my_goodness, night-night, cock-a-doodle-doo, ones', Peters', Sophies', Ups-a-daisy, cats', dark_time, it's</li>
</ul>

<ul>
<li>This corpus contains 12905 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 425 types of multi-word tokens. Examples: don't, it's, that's, I'm, wanna, gonna, you're, what's, hafta, he's, didn't, can't, let's, I'll, there's, where's, they're, doesn't, we're, here's, she's, won't, isn't, we'll, who's, you've, aren't, haven't, needta, wasn't, you'll, I've, daddy's, what're, mommy's, dat's, one's, we've, gotta, sposta, baby's, hasta, Mummy's, I'd, useta, wouldn't, couldn't, it'll, you'd, where'd.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 22 word types tagged as particles (PART): 's, 't, Jwww, a, cha, da, dat, dey, dis, dra, haf, n, n't, na, no, not, s, sa, t, ta, to, wa</li>
</ul>

<ul>
<li>This corpus contains 101 lemmas tagged as pronouns (PRON): a, all, any, anybody, anyone, anything, anywhere, be, bumpa, cha, dart, de, dem, dere, dese, dey, dis, dwww, everybody, everyone, everything, ge, ha, haf, he, hee, her, here, hers, herself, him, himself, his, hiss, i, it, its, itself, jwww, le, me, mine, more, my, myself, nobody, noone, nothing, nowhere, one, other, others, our, ours, ourselves, rwww, self, sh, she, some, somebody, someone, something, swww, th, that, the, their, theirs, them, themselves, there, these, they, thing, this, those, to, twww, u, uhhuh, uhoh, uhuh, uma, us, w, we, whaddya, what, whatever, which, who, whoever, whom, whose, y, ya, you, your, yours, yourself</li>
</ul>

<ul>
<li>This corpus contains 53 lemmas tagged as determiners (DET): a, all, anoder, another, any, awoh, both, da, de, dere, dese, det, dey, dis, dose, each, enough, every, few, h, half, le, many, more, most, much, ne, no, not, of, one, only, other, pe, quite, s, some, stoy, such, that, the, there, these, this, those, uhhuh, uhoh, um, what, which, whichever, whose, yer</li>
</ul>

<ul>
<li>Out of the above, 24 lemmas occurred sometimes as PRON and sometimes as DET: a, all, any, de, dere, dese, dey, dis, le, more, one, other, some, that, the, there, these, this, those, uhhuh, uhoh, what, which, whose</li>
</ul>

<ul>
<li>This corpus contains 15 lemmas tagged as auxiliaries (AUX): be, can, could, do, get, have, may, might, must, need, ought, shall, should, will, would</li>
</ul>

<ul>
<li>Out of the above, 7 lemmas occurred sometimes as AUX and sometimes as VERB: be, can, do, get, have, need, will</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>








<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>










<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADP
        <ul>
          <li>ADP: out, because, of, up</li>
          <li>ADV: instead, what</li>
          <li>SCONJ: Because</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADJ: more</li>
          <li>ADP: of, at, As, because, in, out</li>
          <li>ADV: how, as, each, kind, at, instead, of, upside, 'd, Less</li>
          <li>NOUN: upside, kind, sort</li>
          <li>PRON: what</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>PRON: what</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: in</li>
          <li>ADV: So</li>
          <li>SCONJ: so, as</li>
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
          <li>ADP: up</li>
          <li>ADV: inside, may</li>
          <li>INTJ: Uh, Mm, Ah, Wee, Whoo</li>
          <li>NOUN: Beep, Bok, Night, P, Woof, u</li>
          <li>PRON: Who, it</li>
          <li>PROPN: pa, Arf, R, hm</li>
          <li>VERB: let</li>
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
<li>This corpus uses 14 lemmas as auxiliaries (<a>aux</a>). Examples: do, be, can, will, have, would, could, should, might, may, must, shall, get, need.</li>
<li>This corpus uses 6 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: be, get, have, do, might, will.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (2084)</li>
      <li>VERB--NOUN-ADP('s) (3)</li>
      <li>VERB--NOUN-ADP(on) (1)</li>
      <li>VERB--PRON (22904)</li>
      <li>VERB--PRON-ADP(for) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (8738)</li>
      <li>VERB--NOUN-ADP(at) (3)</li>
      <li>VERB--NOUN-ADP(follow) (1)</li>
      <li>VERB--NOUN-ADP(in) (3)</li>
      <li>VERB--NOUN-ADP(like) (4)</li>
      <li>VERB--NOUN-ADP(of) (5)</li>
      <li>VERB--NOUN-ADP(on) (5)</li>
      <li>VERB--NOUN-ADP(through) (1)</li>
      <li>VERB--NOUN-ADP(to) (4)</li>
      <li>VERB--NOUN-ADP(up) (1)</li>
      <li>VERB--NOUN-ADP(with) (4)</li>
      <li>VERB--PRON (9380)</li>
      <li>VERB--PRON-ADP(about) (2)</li>
      <li>VERB--PRON-ADP(at) (3)</li>
      <li>VERB--PRON-ADP(for) (4)</li>
      <li>VERB--PRON-ADP(from) (1)</li>
      <li>VERB--PRON-ADP(in) (1)</li>
      <li>VERB--PRON-ADP(like) (6)</li>
      <li>VERB--PRON-ADP(of) (1)</li>
      <li>VERB--PRON-ADP(on) (3)</li>
      <li>VERB--PRON-ADP(with) (7)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (33)</li>
      <li>VERB--PRON (776)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 13 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>det:predet</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nmod:unmarked</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:npmod</a>, <a>obl:unmarked</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
