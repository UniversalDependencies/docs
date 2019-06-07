---
layout: base
title:  'Statistics of Degree in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

5174 tokens (6%) have a non-empty value of `Degree`.
1721 types (18%) occur at least once with a non-empty value of `Degree`.
1537 lemmas (22%) occur at least once with a non-empty value of `Degree`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (5003; 6% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (170; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1; 0% instances).

### `ADJ`

5003 <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> tokens (94% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (146; 3% of non-empty `Degree`): <em>more, better, most, worse, lower, older, easier, greater, higher, less</em>
* `Pos` (4796; 96% of non-empty `Degree`): <em>other, white, old, good, new, same, great, long, many, little</em>
* `Sup` (61; 1% of non-empty `Degree`): <em>best, greatest, biggest, worst, largest, least, nearest, commonest, oldest, outermost</em>
* `EMPTY` (323): <em>such, another, following, loud, moving, pale, existing, trading, calculated, Arabic</em>

<table>
  <tr><th>Paradigm <i>good</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>good</em></td><td><em>better</em></td><td><em>best</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (1485) occur only with one value of `Degree`.

### `ADV`

170 <tt><a href="en_lines-pos-ADV.html">ADV</a></tt> tokens (4% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (28; 16% of non-empty `Degree`): <em>longer, farther, nearer, sooner, harder, higher</em>
* `Pos` (129; 76% of non-empty `Degree`): <em>well, far, long, soon, hard, close, badly, early, little, fast</em>
* `Sup` (13; 8% of non-empty `Degree`): <em>least, best, closest</em>
* `EMPTY` (4404): <em>out, up, so, then, back, now, very, just, too, again</em>

<table>
  <tr><th>Paradigm <i>well</i></th><th><tt>Pos</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>well</em></td><td><em>best</em></td></tr>
</table>

### `VERB`

1 <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> tokens (0% of all `VERB` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `VERB` and `Degree` co-occurred: <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="en_lines-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (1; 100%).

`VERB` tokens may have the following values of `Degree`:

* `Pos` (1; 100% of non-empty `Degree`): <em>Cursed</em>
* `EMPTY` (9727): <em>was, said, know, had, have, see, is, do, made, going</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> ADJ</tt> (178; 93%),
<tt>ADJ --[<tt><a href="en_lines-dep-amod.html">amod</a></tt>]--> ADJ</tt> (31; 86%),
<tt>ADJ --[<tt><a href="en_lines-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (6; 86%),
<tt>ADJ --[<tt><a href="en_lines-dep-acl.html">acl</a></tt>]--> ADJ</tt> (4; 100%),
<tt>ADJ --[<tt><a href="en_lines-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="en_lines-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<tt><a href="en_lines-dep-appos.html">appos</a></tt>]--> ADJ</tt> (2; 67%),
<tt>ADJ --[<tt><a href="en_lines-dep-nmod.html">nmod</a></tt>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<tt><a href="en_lines-dep-acl-relcl.html">acl:relcl</a></tt>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<tt><a href="en_lines-dep-ccomp.html">ccomp</a></tt>]--> ADJ</tt> (1; 100%).

