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
The feature is used with 3 part-of-speech tags: <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (4436; 5% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1448; 2% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (880; 1% instances).

### `PRON`

4436 <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> tokens (55% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_lines-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (4436; 100%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3526; 79%), <tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (3495; 79%), <tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Nom</tt> (2556; 58%).

`PRON` tokens may have the following values of `Person`:

* `1` (1427; 32% of non-empty `Person`): <em>I, we, my, me, us, our, myself, ourselves, 's</em>
* `2` (99; 2% of non-empty `Person`): <em>your, yourself</em>
* `3` (2910; 66% of non-empty `Person`): <em>he, his, they, him, her, she, them, himself, its, themselves</em>
* `EMPTY` (3582): <em>it, you, that, what, there, their, this, who, one, which</em>

### `AUX`

1448 <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> tokens (33% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1448; 100%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1448; 100%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1448; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (762; 53%).

`AUX` tokens may have the following values of `Person`:

* `1` (717; 50% of non-empty `Person`): <em>was, am</em>
* `3` (731; 50% of non-empty `Person`): <em>is, 's, has, does</em>
* `EMPTY` (2919): <em>had, be, are, can, been, were, would, have, could, will</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am</em></td><td><em>is, 's</em></td></tr>
</table>

### `VERB`

880 <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> tokens (9% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (880; 100%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (880; 100%), <tt><a href="en_lines-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (880; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (658; 75%).

`VERB` tokens may have the following values of `Person`:

* `1` (224; 25% of non-empty `Person`): <em>was, am</em>
* `3` (656; 75% of non-empty `Person`): <em>is, 's, has, says, does, goes, makes, knows, means, contains</em>
* `EMPTY` (8983): <em>said, do, know, had, have, see, made, going, make, get</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am</em></td><td><em>is, 's</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 99% lemmas (185) occur only with one value of `Person`.

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>PRON --[<tt><a href="en_lines-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%).

