---
layout: base
title:  'Statistics of Person in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

11289 tokens (5%) have a non-empty value of `Person`.
103 types (0%) occur at least once with a non-empty value of `Person`.
51 lemmas (0%) occur at least once with a non-empty value of `Person`.
The feature is used with 1 part-of-speech tags: <tt><a href="nl-pos-PRON.html">PRON</a></tt> (11289; 5% instances).

### `PRON`

11289 <tt><a href="nl-pos-PRON.html">PRON</a></tt> tokens (83% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="nl-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (8744; 77%), <tt><a href="nl-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (5764; 51%).

`PRON` tokens may have the following values of `Person`:

* `1` (2432; 22% of non-empty `Person`): <em>ik, we, ons, wij, me, mijn, mij, onze, mezelf, m'n</em>
* `2` (623; 6% of non-empty `Person`): <em>je, u, jullie, jij, jou, uw, gij, jouw, ge, jezelf</em>
* `3` (8234; 73% of non-empty `Person`): <em>hij, het, dat, zijn, wat, zich, ze, wie, men, hun</em>
* `EMPTY` (2349): <em>die, meer, veel, minder, elkaar, weinig, vele, meest, deze, meeste</em>

<table>
  <tr><th>Paradigm <i>haarzelf</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt></tt></td><td><em>haarzelf</em></td><td><em>haarzelve</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 98% lemmas (50) occur only with one value of `Person`.

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>PRON --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> PRON</tt> (10; 83%),
<tt>PRON --[<tt><a href="nl-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (5; 71%),
<tt>PRON --[<tt><a href="nl-dep-expl.html">expl</a></tt>]--> PRON</tt> (3; 75%),
<tt>PRON --[<tt><a href="nl-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (2; 67%).

