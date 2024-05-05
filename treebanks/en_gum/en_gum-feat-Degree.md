---
layout: base
title:  'Statistics of Degree in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

19048 tokens (9%) have a non-empty value of `Degree`.
3425 types (20%) occur at least once with a non-empty value of `Degree`.
3051 lemmas (22%) occur at least once with a non-empty value of `Degree`.
The feature is used with 5 part-of-speech tags: <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (13950; 7% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (5091; 2% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).

### `ADJ`

13950 <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (515; 4% of non-empty `Degree`): <em>more, better, greater, larger, further, higher, lower, older, smaller, younger</em>
* `Pos` (13074; 94% of non-empty `Degree`): <em>other, new, many, good, little, different, first, such, same, last</em>
* `Sup` (361; 3% of non-empty `Degree`): <em>most, best, least, largest, greatest, worst, highest, biggest, latest, smallest</em>
* `EMPTY` (1): <em>Alone</em>

<table>
  <tr><th>Paradigm <i>good</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>good</em></td><td><em>better</em></td><td><em>best</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (2446) occur only with one value of `Degree`.

### `ADV`

5091 <tt><a href="en_gum-pos-ADV.html">ADV</a></tt> tokens (50% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (5091; 100%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (409; 8% of non-empty `Degree`): <em>more, later, less, longer, earlier, better, further, sooner, slower, closer</em>
* `Pos` (4540; 89% of non-empty `Degree`): <em>really, well, back, still, again, too, away, much, probably, actually</em>
* `Sup` (142; 3% of non-empty `Degree`): <em>most, best, least, longest, fastest, foremost</em>
* `EMPTY` (5019): <em>so, when, just, then, also, how, now, here, very, where</em>

<table>
  <tr><th>Paradigm <i>well</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>well</em></td><td><em>better</em></td><td><em>best</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>well</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 98% lemmas (619) occur only with one value of `Degree`.

### `DET`

5 <tt><a href="en_gum-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `DET` and `Degree` co-occurred: <tt><a href="en_gum-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (5; 100%), <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (4; 80%).

`DET` tokens may have the following values of `Degree`:

* `Pos` (5; 100% of non-empty `Degree`): <em>all, such</em>
* `EMPTY` (17327): <em>the, a, this, an, all, some, that, these, no, any</em>

### `NOUN`

1 <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `NOUN` and `Degree` co-occurred: <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt> (1; 100%).

`NOUN` tokens may have the following values of `Degree`:

* `Pos` (1; 100% of non-empty `Degree`): <em>etc.</em>
* `EMPTY` (35511): <em>people, time, day, way, years, life, world, year, city, today</em>

### `PUNCT`

1 <tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> tokens (0% of all `PUNCT` tokens) have a non-empty value of `Degree`.

`PUNCT` tokens may have the following values of `Degree`:

* `Pos` (1; 100% of non-empty `Degree`): <em>—</em>
* `EMPTY` (28955): <em>,, ., -, ", ?, (, ), —, [, :</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADJ</tt> (443; 96%),
<tt>ADJ --[<tt><a href="en_gum-dep-amod.html">amod</a></tt>]--> ADJ</tt> (67; 89%),
<tt>ADV --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> ADV</tt> (63; 85%),
<tt>ADJ --[<tt><a href="en_gum-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (29; 88%),
<tt>ADJ --[<tt><a href="en_gum-dep-compound.html">compound</a></tt>]--> ADJ</tt> (28; 100%),
<tt>ADJ --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (26; 96%),
<tt>ADJ --[<tt><a href="en_gum-dep-obl.html">obl</a></tt>]--> ADJ</tt> (13; 72%),
<tt>ADJ --[<tt><a href="en_gum-dep-ccomp.html">ccomp</a></tt>]--> ADJ</tt> (11; 85%),
<tt>ADJ --[<tt><a href="en_gum-dep-obl-npmod.html">obl:npmod</a></tt>]--> ADJ</tt> (11; 79%),
<tt>ADJ --[<tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (8; 73%).

