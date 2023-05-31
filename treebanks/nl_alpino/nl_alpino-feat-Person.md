---
layout: base
title:  'Statistics of Person in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

11386 tokens (5%) have a non-empty value of `Person`.
107 types (0%) occur at least once with a non-empty value of `Person`.
48 lemmas (0%) occur at least once with a non-empty value of `Person`.
The feature is used with 1 part-of-speech tags: <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (11386; 5% instances).

### `PRON`

11386 <tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> tokens (87% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="nl_alpino-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (9823; 86%), <tt><a href="nl_alpino-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (8734; 77%), <tt><a href="nl_alpino-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (5874; 52%).

`PRON` tokens may have the following values of `Person`:

* `1` (2431; 21% of non-empty `Person`): <em>ik, we, ons, wij, me, mijn, mij, onze, mezelf, m'n</em>
* `2` (622; 5% of non-empty `Person`): <em>je, u, jullie, jij, jou, uw, gij, jouw, jezelf, ge</em>
* `3` (8333; 73% of non-empty `Person`): <em>hij, het, dat, zijn, wat, zich, ze, wie, men, hun</em>
* `EMPTY` (1757): <em>die, meer, elkaar, veel, deze, enige, minder, weinig, velen, hetgeen</em>

<table>
  <tr><th>Paradigm <i>gij</i></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="nl_alpino-feat-PronType.html">PronType</a></tt><tt>=Prs</tt></tt></td><td><em>gij</em></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-PronType.html">PronType</a></tt><tt>=Ind</tt></tt></td><td></td><td><em>gij</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 98% lemmas (47) occur only with one value of `Person`.

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>PRON --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> PRON</tt> (10; 83%),
<tt>PRON --[<tt><a href="nl_alpino-dep-expl.html">expl</a></tt>]--> PRON</tt> (5; 83%),
<tt>PRON --[<tt><a href="nl_alpino-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (2; 67%).

