---
layout: base
title:  'Statistics of Person in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

11802 tokens (11%) have a non-empty value of `Person`.
286 types (3%) occur at least once with a non-empty value of `Person`.
244 lemmas (3%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (8801; 8% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1985; 2% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1016; 1% instances).

### `PRON`

8801 <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> tokens (79% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_lines-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (8687; 99%), <tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (6832; 78%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6568; 75%), <tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Nom</tt> (4854; 55%).

`PRON` tokens may have the following values of `Person`:

* `1` (2310; 26% of non-empty `Person`): <em>I, my, we, me, us, our, myself, mine, ours, ourselves</em>
* `2` (927; 11% of non-empty `Person`): <em>you, your, yourself, yours, 'ye, Yer</em>
* `3` (5564; 63% of non-empty `Person`): <em>he, it, his, they, him, her, she, their, them, himself</em>
* `EMPTY` (2366): <em>that, what, there, who, this, one, which, all, nothing, something</em>

`Person` seems to be **lexical feature** of `PRON`. 100% lemmas (22) occur only with one value of `Person`.

### `AUX`

1985 <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> tokens (33% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1985; 100%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1985; 100%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1985; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (1075; 54%).

`AUX` tokens may have the following values of `Person`:

* `1` (1115; 56% of non-empty `Person`): <em>was, am, 'm</em>
* `3` (870; 44% of non-empty `Person`): <em>is, 's, has, does, was</em>
* `EMPTY` (3948): <em>had, be, were, would, been, are, can, could, have, did</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am, 'm</em></td><td><em>is, 's</em></td></tr>
</table>

### `VERB`

1016 <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> tokens (8% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1016; 100%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1016; 100%), <tt><a href="en_lines-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (1016; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (732; 72%).

`VERB` tokens may have the following values of `Person`:

* `1` (294; 29% of non-empty `Person`): <em>was, 'm, am, thank</em>
* `3` (722; 71% of non-empty `Person`): <em>is, 's, has, says, goes, makes, knows, means, comes, contains</em>
* `EMPTY` (11539): <em>said, had, know, see, have, made, come, came, do, seemed</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>'m, am</em></td><td><em>is, 's</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 100% lemmas (221) occur only with one value of `Person`.

