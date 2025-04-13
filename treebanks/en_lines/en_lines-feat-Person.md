---
layout: base
title:  'Statistics of Person in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

8402 tokens (9%) have a non-empty value of `Person`.
244 types (2%) occur at least once with a non-empty value of `Person`.
208 lemmas (3%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (5770; 6% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1740; 2% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (892; 1% instances).

### `PRON`

5770 <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> tokens (60% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_lines-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (5769; 100%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4574; 79%), <tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (4033; 70%), <tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Nom</tt> (3083; 53%).

`PRON` tokens may have the following values of `Person`:

* `1` (1999; 35% of non-empty `Person`): <em>I, my, we, me, us, our, myself, ourselves, mine, ours</em>
* `2` (105; 2% of non-empty `Person`): <em>your, yourself, yours, itself</em>
* `3` (3666; 64% of non-empty `Person`): <em>he, his, they, him, her, she, their, them, himself, its</em>
* `EMPTY` (3807): <em>it, you, that, what, there, this, who, one, which, all</em>

<table>
  <tr><th>Paradigm <i>it</i></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="en_lines-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="en_lines-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>itself</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="en_lines-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="en_lines-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>itself</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="en_lines-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td><em>itself</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>Its</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 94% lemmas (15) occur only with one value of `Person`.

### `AUX`

1740 <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> tokens (34% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1740; 100%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1740; 100%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1740; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (882; 51%).

`AUX` tokens may have the following values of `Person`:

* `1` (918; 53% of non-empty `Person`): <em>was, am</em>
* `3` (822; 47% of non-empty `Person`): <em>is, 's, has, does, was</em>
* `EMPTY` (3441): <em>had, be, were, are, can, would, been, could, have, will</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am</em></td><td><em>is, 's</em></td></tr>
</table>

### `VERB`

892 <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> tokens (8% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (892; 100%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (892; 100%), <tt><a href="en_lines-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (892; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (651; 73%).

`VERB` tokens may have the following values of `Person`:

* `1` (243; 27% of non-empty `Person`): <em>was, am</em>
* `3` (649; 73% of non-empty `Person`): <em>is, 's, has, says, goes, makes, knows, means, contains, appears</em>
* `EMPTY` (10199): <em>said, know, had, have, see, made, do, come, make, came</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am</em></td><td><em>is, 's</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 99% lemmas (191) occur only with one value of `Person`.

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>AUX --[<tt><a href="en_lines-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%),
<tt>AUX --[<tt><a href="en_lines-dep-parataxis.html">parataxis</a></tt>]--> AUX</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_lines-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%).

