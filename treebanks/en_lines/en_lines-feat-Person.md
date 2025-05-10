---
layout: base
title:  'Statistics of Person in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

10607 tokens (10%) have a non-empty value of `Person`.
281 types (3%) occur at least once with a non-empty value of `Person`.
245 lemmas (3%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (7607; 7% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1984; 2% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1016; 1% instances).

### `PRON`

7607 <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> tokens (68% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_lines-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (7492; 98%), <tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (5612; 74%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5438; 71%), <tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Nom</tt> (4317; 57%), <tt><a href="en_lines-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (4033; 53%).

`PRON` tokens may have the following values of `Person`:

* `1` (2308; 30% of non-empty `Person`): <em>I, my, we, me, us, our, myself, ourselves, mine, ours</em>
* `2` (868; 11% of non-empty `Person`): <em>you, your, yourself, yours, itself</em>
* `3` (4431; 58% of non-empty `Person`): <em>he, his, they, him, her, she, their, them, himself, its</em>
* `EMPTY` (3586): <em>it, that, what, there, who, this, one, which, all, nothing</em>

<table>
  <tr><th>Paradigm <i>it</i></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="en_lines-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="en_lines-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>itself</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="en_lines-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="en_lines-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>itself</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="en_lines-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td><em>itself</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>its</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>its</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 96% lemmas (23) occur only with one value of `Person`.

### `AUX`

1984 <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> tokens (33% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1984; 100%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1984; 100%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1984; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (1074; 54%).

`AUX` tokens may have the following values of `Person`:

* `1` (1114; 56% of non-empty `Person`): <em>was, am, 'm</em>
* `3` (870; 44% of non-empty `Person`): <em>is, 's, has, does, was</em>
* `EMPTY` (3948): <em>had, be, were, would, been, are, can, could, have, did</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am, 'm</em></td><td><em>is, 's</em></td></tr>
</table>

### `VERB`

1016 <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> tokens (8% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1016; 100%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1016; 100%), <tt><a href="en_lines-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (1016; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (731; 72%).

`VERB` tokens may have the following values of `Person`:

* `1` (294; 29% of non-empty `Person`): <em>was, 'm, am</em>
* `3` (722; 71% of non-empty `Person`): <em>is, 's, has, says, goes, makes, knows, means, comes, contains</em>
* `EMPTY` (11541): <em>said, had, know, see, have, made, come, came, do, seemed</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>'m, am</em></td><td><em>is, 's</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 100% lemmas (220) occur only with one value of `Person`.

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>AUX --[<tt><a href="en_lines-dep-parataxis.html">parataxis</a></tt>]--> AUX</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_lines-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%).

