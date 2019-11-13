---
layout: base
title:  'Statistics of Person in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

11357 tokens (5%) have a non-empty value of `Person`.
106 types (0%) occur at least once with a non-empty value of `Person`.
53 lemmas (0%) occur at least once with a non-empty value of `Person`.
The feature is used with 1 part-of-speech tags: <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (11357; 5% instances).

### `PRON`

11357 <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> tokens (87% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="nl_alpino-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (9814; 86%), <tt><a href="nl_alpino-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (8721; 77%), <tt><a href="nl_alpino-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (5833; 51%).

`PRON` tokens may have the following values of `Person`:

* `1` (2428; 21% of non-empty `Person`): <em>ik, we, ons, wij, me, mijn, mij, onze, mezelf, m'n</em>
* `2` (621; 5% of non-empty `Person`): <em>je, u, jullie, jij, jou, uw, gij, jouw, ge, jezelf</em>
* `3` (8308; 73% of non-empty `Person`): <em>hij, het, dat, zijn, wat, zich, ze, wie, men, hun</em>
* `EMPTY` (1754): <em>die, meer, elkaar, veel, deze, enige, minder, weinig, velen, hetgeen</em>

<table>
  <tr><th>Paradigm <i>haarzelf</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt></tt></td><td><em>haarzelf</em></td><td><em>haarzelve</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 98% lemmas (52) occur only with one value of `Person`.

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>PRON --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> PRON</tt> (10; 83%),
<tt>PRON --[<tt><a href="nl_alpino-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (5; 71%),
<tt>PRON --[<tt><a href="nl_alpino-dep-expl.html">expl</a></tt>]--> PRON</tt> (3; 75%),
<tt>PRON --[<tt><a href="nl_alpino-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (2; 67%).

