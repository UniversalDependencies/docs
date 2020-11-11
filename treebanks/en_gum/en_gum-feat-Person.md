---
layout: base
title:  'Statistics of Person in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

9121 tokens (8%) have a non-empty value of `Person`.
376 types (3%) occur at least once with a non-empty value of `Person`.
341 lemmas (3%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (6032; 5% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (2028; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1061; 1% instances).

### `PRON`

6032 <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> tokens (79% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (6032; 100%), <tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (4405; 73%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3626; 60%), <tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Nom</tt> (3533; 59%), <tt><a href="en_gum-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (3388; 56%).

`PRON` tokens may have the following values of `Person`:

* `1` (1502; 25% of non-empty `Person`): <em>i, we, my, our, me, us, myself</em>
* `2` (1157; 19% of non-empty `Person`): <em>you, your, yourself, yours</em>
* `3` (3373; 56% of non-empty `Person`): <em>it, he, his, they, she, her, their, them, its, him</em>
* `EMPTY` (1647): <em>that, which, there, this, what, who, all, some, those, both</em>

`Person` seems to be **lexical feature** of `PRON`. 100% lemmas (22) occur only with one value of `Person`.

### `AUX`

2028 <tt><a href="en_gum-pos-AUX.html">AUX</a></tt> tokens (40% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (2028; 100%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2028; 100%), <tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (2028; 100%), <tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1345; 66%).

`AUX` tokens may have the following values of `Person`:

* `1` (32; 2% of non-empty `Person`): <em>am, was</em>
* `3` (1996; 98% of non-empty `Person`): <em>is, was, has, 's, ’s, does, s, S’, isn</em>
* `EMPTY` (3052): <em>be, are, can, were, will, do, have, been, would, had</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>is, s</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am</em></td><td><em>is, 's, ’s, S’, isn</em></td></tr>
</table>

### `VERB`

1061 <tt><a href="en_gum-pos-VERB.html">VERB</a></tt> tokens (9% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1061; 100%), <tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1061; 100%), <tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1027; 97%).

`VERB` tokens may have the following values of `Person`:

* `1` (6; 1% of non-empty `Person`): <em>was, am</em>
* `3` (1055; 99% of non-empty `Person`): <em>is, has, says, was, 's, comes, makes, takes, means, provides</em>
* `EMPTY` (10808): <em>have, make, said, get, see, are, want, do, know, take</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>is</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am</em></td><td><em>is, 's, ’s</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 100% lemmas (318) occur only with one value of `Person`.

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (11; 85%),
<tt>PRON --[<tt><a href="en_gum-dep-goeswith.html">goeswith</a></tt>]--> VERB</tt> (1; 100%).

