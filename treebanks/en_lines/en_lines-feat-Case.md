---
layout: base
title:  'Statistics of Case in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `Case`

This feature is universal.
It occurs with 3 different values: `Acc`, `Gen`, `Nom`.

5860 tokens (6%) have a non-empty value of `Case`.
51 types (0%) occur at least once with a non-empty value of `Case`.
29 lemmas (0%) occur at least once with a non-empty value of `Case`.
The feature is used with 1 part-of-speech tags: <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (5860; 6% instances).

### `PRON`

5860 <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> tokens (61% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="en_lines-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (5628; 96%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4451; 76%), <tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (4264; 73%), <tt><a href="en_lines-feat-Person.html">Person</a></tt><tt>=3</tt> (3622; 62%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (949; 16% of non-empty `Case`): <em>him, me, them, himself, us, myself, themselves, itself, herself, yourself</em>
* `Gen` (1596; 27% of non-empty `Case`): <em>his, her, my, their, its, your, our</em>
* `Nom` (3315; 57% of non-empty `Case`): <em>he, I, they, we, she, all, others, some, no, another</em>
* `EMPTY` (3717): <em>it, you, that, what, there, this, who, one, which, My</em>

<table>
  <tr><th>Paradigm <i>she</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Gen</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>her</em></td></tr>
  <tr><td><tt></tt></td><td><em>she</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>herself</em></td><td></td></tr>
</table>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<tt><a href="en_lines-dep-obl-unmarked.html">obl:unmarked</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_lines-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%).

