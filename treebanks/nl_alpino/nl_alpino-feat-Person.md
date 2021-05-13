---
layout: base
title:  'Statistics of Person in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

8006 tokens (5%) have a non-empty value of `Person`.
100 types (0%) occur at least once with a non-empty value of `Person`.
49 lemmas (0%) occur at least once with a non-empty value of `Person`.
The feature is used with 1 part-of-speech tags: <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (8006; 5% instances).

### `PRON`

8006 <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> tokens (84% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="nl_alpino-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (6654; 83%), <tt><a href="nl_alpino-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (6338; 79%), <tt><a href="nl_alpino-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (4320; 54%).

`PRON` tokens may have the following values of `Person`:

* `1` (1464; 18% of non-empty `Person`): <em>ik, we, ons, wij, mijn, onze, me, mij, mezelf, m'n</em>
* `2` (410; 5% of non-empty `Person`): <em>je, u, jullie, jij, uw, gij, jou, jouw, jezelf, ge</em>
* `3` (6132; 77% of non-empty `Person`): <em>het, hij, zijn, dat, zich, ze, wat, hun, zij, haar</em>
* `EMPTY` (1509): <em>die, meer, elkaar, veel, deze, minder, enige, weinig, velen, hetgeen</em>

<table>
  <tr><th>Paradigm <i>haarzelf</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt></tt></td><td><em>haarzelf</em></td><td><em>haarzelve</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 98% lemmas (48) occur only with one value of `Person`.

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>PRON --[<tt><a href="nl_alpino-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (14; 61%),
<tt>PRON --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> PRON</tt> (5; 71%),
<tt>PRON --[<tt><a href="nl_alpino-dep-expl.html">expl</a></tt>]--> PRON</tt> (2; 67%),
<tt>PRON --[<tt><a href="nl_alpino-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (2; 67%).

