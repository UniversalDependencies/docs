---
layout: base
title:  'Statistics of Person in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

8231 tokens (9%) have a non-empty value of `Person`.
239 types (2%) occur at least once with a non-empty value of `Person`.
201 lemmas (3%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (5599; 6% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (1725; 2% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (907; 1% instances).

### `PRON`

5599 <tt><a href="en_lines-pos-PRON.html">PRON</a></tt> tokens (58% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_lines-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (5598; 100%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4569; 82%), <tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (4328; 77%), <tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Nom</tt> (3083; 55%).

`PRON` tokens may have the following values of `Person`:

* `1` (1993; 36% of non-empty `Person`): <em>I, my, we, me, us, our, myself, ourselves, 's</em>
* `2` (103; 2% of non-empty `Person`): <em>your, yourself, itself</em>
* `3` (3503; 63% of non-empty `Person`): <em>he, his, they, him, her, she, them, himself, its, themselves</em>
* `EMPTY` (4029): <em>it, you, that, what, there, their, this, who, one, which</em>

<table>
  <tr><th>Paradigm <i>it</i></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="en_lines-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="en_lines-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>itself</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="en_lines-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="en_lines-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>itself</em></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="en_lines-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt></tt></td><td><em>itself</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="en_lines-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>its</em></td></tr>
</table>

### `AUX`

1725 <tt><a href="en_lines-pos-AUX.html">AUX</a></tt> tokens (33% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (1725; 100%), <tt><a href="en_lines-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1725; 100%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1725; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (878; 51%).

`AUX` tokens may have the following values of `Person`:

* `1` (915; 53% of non-empty `Person`): <em>was, am</em>
* `3` (810; 47% of non-empty `Person`): <em>is, 's, has, does</em>
* `EMPTY` (3441): <em>had, be, were, are, can, would, been, could, have, will</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am</em></td><td><em>is, 's</em></td></tr>
</table>

### `VERB`

907 <tt><a href="en_lines-pos-VERB.html">VERB</a></tt> tokens (8% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_lines-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (907; 100%), <tt><a href="en_lines-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (907; 100%), <tt><a href="en_lines-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (907; 100%), <tt><a href="en_lines-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (662; 73%).

`VERB` tokens may have the following values of `Person`:

* `1` (247; 27% of non-empty `Person`): <em>was, am</em>
* `3` (660; 73% of non-empty `Person`): <em>is, 's, has, says, goes, makes, knows, means, contains, appears</em>
* `EMPTY` (10201): <em>said, know, had, have, see, made, do, come, make, came</em>

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

