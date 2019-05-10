---
layout: base
title:  'Statistics of Person in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

6764 tokens (8%) have a non-empty value of `Person`.
230 types (2%) occur at least once with a non-empty value of `Person`.
194 lemmas (3%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (4436; 5% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1497; 2% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (831; 1% instances).

### `PRON`

4436 <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> tokens (55% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_lines-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (4436; 100%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3526; 79%), <tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (3495; 79%), <tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Nom</tt> (2556; 58%).

`PRON` tokens may have the following values of `Person`:

* `1` (1427; 32% of non-empty `Person`): <em>I, we, my, me, us, our, myself, ourselves, 's</em>
* `2` (99; 2% of non-empty `Person`): <em>your, yourself</em>
* `3` (2910; 66% of non-empty `Person`): <em>he, his, they, him, her, she, them, himself, its, themselves</em>
* `EMPTY` (3576): <em>it, you, that, what, there, their, this, one, who, which</em>

### `AUX`

1497 <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> tokens (33% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1497; 100%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1497; 100%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1497; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (800; 53%).

`AUX` tokens may have the following values of `Person`:

* `1` (728; 49% of non-empty `Person`): <em>was, am</em>
* `3` (769; 51% of non-empty `Person`): <em>is, 's, has, does</em>
* `EMPTY` (3003): <em>had, be, are, can, been, were, would, have, could, will</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am</em></td><td><em>is, 's</em></td></tr>
</table>

### `VERB`

831 <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> tokens (9% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (831; 100%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (831; 100%), <tt><a href="en_lines-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (831; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (620; 75%).

`VERB` tokens may have the following values of `Person`:

* `1` (213; 26% of non-empty `Person`): <em>was, am</em>
* `3` (618; 74% of non-empty `Person`): <em>is, 's, has, says, goes, makes, knows, means, contains, uses</em>
* `EMPTY` (8897): <em>said, know, had, have, see, do, made, going, make, come</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am</em></td><td><em>is, 's</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 99% lemmas (185) occur only with one value of `Person`.

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>PRON --[<tt><a href="en_lines-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_lines-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (1; 100%).

