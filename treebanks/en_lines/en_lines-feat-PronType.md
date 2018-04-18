---
layout: base
title:  'Statistics of PronType in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `PronType`

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Int`, `Prs`, `Rel`.

13265 tokens (16%) have a non-empty value of `PronType`.
75 types (1%) occur at least once with a non-empty value of `PronType`.
25 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_lines-pos-DET.html">DET</a></tt> (7376; 9% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (5436; 7% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (453; 1% instances).

### `DET`

7376 <tt><a href="en_lines-pos-DET.html">DET</a></tt> tokens (94% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="en_lines-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (4680; 63%).

`DET` tokens may have the following values of `PronType`:

* `Art` (6959; 94% of non-empty `PronType`): <em>the, a, an</em>
* `Dem` (386; 5% of non-empty `PronType`): <em>this, that, these, those</em>
* `Int` (31; 0% of non-empty `PronType`): <em>what, which, whatever</em>
* `EMPTY` (489): <em>no, all, some, any, each, every, one, Le, both, whose</em>

### `PRON`

5436 <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> tokens (68% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (4482; 82%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3823; 70%), <tt><a href="en_lines-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (2992; 55%), <tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=3</tt> (2910; 54%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (316; 6% of non-empty `PronType`): <em>that, this, these, those</em>
* `Int` (473; 9% of non-empty `PronType`): <em>what, who, which, whom, whatever, whose</em>
* `Prs` (4436; 82% of non-empty `PronType`): <em>he, I, his, they, him, we, her, my, she, them</em>
* `Rel` (211; 4% of non-empty `PronType`): <em>that</em>
* `EMPTY` (2582): <em>it, you, there, their, one, all, nothing, something, someone, anything</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>that</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>those</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 93% lemmas (13) occur only with one value of `PronType`.

### `ADV`

453 <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> tokens (10% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (268; 59% of non-empty `PronType`): <em>then, there, here</em>
* `Int` (183; 40% of non-empty `PronType`): <em>how, where, why, when, wherever</em>
* `Rel` (2; 0% of non-empty `PronType`): <em>where</em>
* `EMPTY` (4115): <em>out, up, so, back, now, very, just, too, again, also</em>

<table>
  <tr><th>Paradigm <i>where</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>where</em></td><td><em>where</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>ADV --[<tt><a href="en_lines-dep-fixed.html">fixed</a></tt>]--> ADV</tt> (2; 67%),
<tt>PRON --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> ADV</tt> (2; 100%),
<tt>DET --[<tt><a href="en_lines-dep-appos.html">appos</a></tt>]--> DET</tt> (1; 100%).

