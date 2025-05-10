---
layout: base
title:  'Statistics of Case in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `Case`

This feature is universal.
It occurs with 3 different values: `Acc`, `Gen`, `Nom`.

7565 tokens (7%) have a non-empty value of `Case`.
60 types (1%) occur at least once with a non-empty value of `Case`.
35 lemmas (0%) occur at least once with a non-empty value of `Case`.
The feature is used with 1 part-of-speech tags: <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (7565; 7% instances).

### `PRON`

7565 <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> tokens (68% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="en_lines-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (7223; 95%), <tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (5839; 77%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5230; 69%), <tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=3</tt> (4231; 56%), <tt><a href="en_lines-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (4150; 55%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (1294; 17% of non-empty `Case`): <em>him, me, them, himself, you, us, her, myself, itself, themselves</em>
* `Gen` (1726; 23% of non-empty `Case`): <em>his, my, her, their, your, its, our</em>
* `Nom` (4545; 60% of non-empty `Case`): <em>he, I, you, they, we, she, all, others, some, another</em>
* `EMPTY` (3628): <em>it, that, what, there, who, this, one, which, his, nothing</em>

<table>
  <tr><th>Paradigm <i>she</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>her</em></td></tr>
  <tr><td><tt></tt></td><td><em>she</em></td><td><em>her</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>herself</em></td><td></td></tr>
</table>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<tt><a href="en_lines-dep-obl-unmarked.html">obl:unmarked</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_lines-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%).

