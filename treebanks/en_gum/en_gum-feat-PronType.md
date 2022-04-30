---
layout: base
title:  'Statistics of PronType in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `PronType`

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Int`, `Prs`, `Rel`.

20866 tokens (15%) have a non-empty value of `PronType`.
90 types (1%) occur at least once with a non-empty value of `PronType`.
43 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_gum-pos-DET.html">DET</a></tt> (10355; 8% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (9518; 7% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (501; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (492; 0% instances).

### `DET`

10355 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (91% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (6730; 65%).

`DET` tokens may have the following values of `PronType`:

* `Art` (9612; 93% of non-empty `PronType`): <em>the, a, an</em>
* `Dem` (694; 7% of non-empty `PronType`): <em>this, these, that, those</em>
* `Int` (49; 0% of non-empty `PronType`): <em>what, which, whatever</em>
* `EMPTY` (974): <em>all, some, no, any, each, every, another, both, such, either</em>

### `PRON`

9518 <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> tokens (97% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (7558; 79%), <tt><a href="en_gum-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (6483; 68%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6249; 66%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (556; 6% of non-empty `PronType`): <em>this, that, those, these</em>
* `Int` (159; 2% of non-empty `PronType`): <em>what, which, who, whatever, whom, Whoever, whose</em>
* `Prs` (7897; 83% of non-empty `PronType`): <em>i, you, it, we, he, his, they, your, she, her</em>
* `Rel` (906; 10% of non-empty `PronType`): <em>that, which, who, what, whose, whom, whatever, whoever</em>
* `EMPTY` (284): <em>there, that, one, s/he, it's, ’s, Th-, me, oneself, self</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>that</em></td></tr>
</table>

### `SCONJ`

501 <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> tokens (19% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Int` (359; 72% of non-empty `PronType`): <em>when, how, where, why, wherever, whither, Whenever</em>
* `Rel` (142; 28% of non-empty `PronType`): <em>where, how, why, when</em>
* `EMPTY` (2105): <em>that, if, as, because, by, while, of, after, for, in</em>

<table>
  <tr><th>Paradigm <i>when</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>when</em></td><td><em>when</em></td></tr>
</table>

### `ADV`

492 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (9% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="en_gum-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (492; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (382; 78% of non-empty `PronType`): <em>then, there, here</em>
* `Int` (98; 20% of non-empty `PronType`): <em>how, why, when, where</em>
* `Rel` (12; 2% of non-empty `PronType`): <em>why, where, how</em>
* `EMPTY` (5069): <em>so, also, just, more, very, as, now, only, well, even</em>

<table>
  <tr><th>Paradigm <i>how</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>how</em></td><td><em>how</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (17; 100%),
<tt>PRON --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (6; 75%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (5; 100%),
<tt>SCONJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> SCONJ</tt> (4; 67%),
<tt>DET --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> DET</tt> (3; 100%),
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> SCONJ</tt> (2; 100%),
<tt>PRON --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (2; 100%),
<tt>ADV --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_gum-dep-expl.html">expl</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_gum-dep-nmod-npmod.html">nmod:npmod</a></tt>]--> PRON</tt> (1; 100%).

