---
layout: base
title:  'Statistics of Degree in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Features: `Degree`

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

17776 tokens (7%) have a non-empty value of `Degree`.
2996 types (15%) occur at least once with a non-empty value of `Degree`.
2444 lemmas (16%) occur at least once with a non-empty value of `Degree`.
The feature is used with 4 part-of-speech tags: <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (16762; 7% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (1000; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt> (13; 0% instances), <tt><a href="en_ewt-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).

### `ADJ`

16762 <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (613; 4% of non-empty `Degree`): <em>more, better, less, larger, bigger, earlier, smaller, higher, older, greater</em>
* `Pos` (15532; 93% of non-empty `Degree`): <em>good, great, new, other, many, last, same, few, little, sure</em>
* `Sup` (617; 4% of non-empty `Degree`): <em>best, most, least, worst, cheapest, largest, latest, easiest, highest, oldest</em>
* `EMPTY` (53): <em>s, First, over, second, i.e., 10th, 14th, 17th, 21st, 55th</em>

<table>
  <tr><th>Paradigm <i>good</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>good</em></td><td><em>better</em></td><td><em>best</em></td></tr>
  <tr><td><tt><tt><a href="en_ewt-feat-Abbr.html">Abbr</a></tt><tt>=Yes</tt></tt></td><td><em>gud</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_ewt-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>bast</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (2361) occur only with one value of `Degree`.

### `ADV`

1000 <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> tokens (8% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (379; 38% of non-empty `Degree`): <em>more, later, better, earlier, longer, less, further, sooner, closer, higher</em>
* `Pos` (484; 48% of non-empty `Degree`): <em>well, far, soon, long, hard, early, late, close, little, high</em>
* `Sup` (137; 14% of non-empty `Degree`): <em>most, best, least, worst, highest, longest</em>
* `EMPTY` (10973): <em>so, just, very, also, now, even, then, there, only, here</em>

<table>
  <tr><th>Paradigm <i>well</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>well</em></td><td><em>better</em></td><td><em>best</em></td></tr>
  <tr><td><tt><tt><a href="en_ewt-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>etter</em></td><td></td></tr>
</table>

### `X`

13 <tt><a href="en_ewt-pos-X.html">X</a></tt> tokens (1% of all `X` tokens) have a non-empty value of `Degree`.

`X` tokens may have the following values of `Degree`:

* `Pos` (13; 100% of non-empty `Degree`): <em>priced, cooked, day, dramatic, educated, going, ible, informed, standing, full</em>
* `EMPTY` (974): <em>etc, etc., .doc, carol.st.clair@enron.com, -, (, ), Access, Analysis_0712, COMMUNICATIONS</em>

`Degree` seems to be **lexical feature** of `X`. 100% lemmas (10) occur only with one value of `Degree`.

### `INTJ`

1 <tt><a href="en_ewt-pos-INTJ.html">INTJ</a></tt> tokens (0% of all `INTJ` tokens) have a non-empty value of `Degree`.

`INTJ` tokens may have the following values of `Degree`:

* `Pos` (1; 100% of non-empty `Degree`): <em>Bon</em>
* `EMPTY` (930): <em>please, yes, well, no, hi, like, ok, lol, hey, oh</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> ADJ</tt> (620; 97%),
<tt>ADJ --[<tt><a href="en_ewt-dep-amod.html">amod</a></tt>]--> ADJ</tt> (110; 96%),
<tt>ADJ --[<tt><a href="en_ewt-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (43; 88%),
<tt>ADJ --[<tt><a href="en_ewt-dep-parataxis.html">parataxis</a></tt>]--> ADJ</tt> (37; 86%),
<tt>ADJ --[<tt><a href="en_ewt-dep-ccomp.html">ccomp</a></tt>]--> ADJ</tt> (24; 96%),
<tt>ADJ --[<tt><a href="en_ewt-dep-obl-npmod.html">obl:npmod</a></tt>]--> ADJ</tt> (18; 64%),
<tt>ADJ --[<tt><a href="en_ewt-dep-nsubj.html">nsubj</a></tt>]--> ADJ</tt> (13; 93%),
<tt>ADJ --[<tt><a href="en_ewt-dep-advmod.html">advmod</a></tt>]--> ADJ</tt> (9; 60%),
<tt>ADJ --[<tt><a href="en_ewt-dep-appos.html">appos</a></tt>]--> ADJ</tt> (9; 100%),
<tt>ADJ --[<tt><a href="en_ewt-dep-list.html">list</a></tt>]--> ADJ</tt> (9; 90%).

