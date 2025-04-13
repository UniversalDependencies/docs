---
layout: base
title:  'Statistics of Person in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

2022 tokens (11%) have a non-empty value of `Person`.
413 types (11%) occur at least once with a non-empty value of `Person`.
282 lemmas (9%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (946; 5% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (613; 3% instances), <tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (463; 3% instances).

### `PRON`

946 <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> tokens (80% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_gentle-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (945; 100%), <tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Sing</tt> (791; 84%), <tt><a href="en_gentle-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (709; 75%), <tt><a href="en_gentle-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (615; 65%), <tt><a href="en_gentle-feat-Case.html">Case</a></tt><tt>=Nom</tt> (522; 55%).

`PRON` tokens may have the following values of `Person`:

* `1` (336; 36% of non-empty `Person`): <em>I, we, my, me, our, us, myself, mine, Ourselves</em>
* `2` (208; 22% of non-empty `Person`): <em>you, your, yourself, thou, yours</em>
* `3` (402; 42% of non-empty `Person`): <em>he, it, his, they, its, him, her, them, their, she</em>
* `EMPTY` (242): <em>that, what, which, this, there, who, nothing, something, whom, anything</em>

<table>
  <tr><th>Paradigm <i>I</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td><em>me</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>I, me</em></td><td><em>PI</em></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="en_gentle-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>Ii</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 92% lemmas (23) occur only with one value of `Person`.

### `VERB`

613 <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> tokens (37% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_gentle-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (613; 100%), <tt><a href="en_gentle-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (570; 93%), <tt><a href="en_gentle-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (486; 79%), <tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Sing</tt> (373; 61%).

`VERB` tokens may have the following values of `Person`:

* `1` (108; 18% of non-empty `Person`): <em>said, have, heard, need, had, implore, passed, stood, thought, want</em>
* `2` (173; 28% of non-empty `Person`): <em>let, see, Suppose, get, take, have, tell, consider, do, know</em>
* `3` (332; 54% of non-empty `Person`): <em>has, follows, is, Quoth, are, continues, had, held, precedes, took</em>
* `EMPTY` (1040): <em>gon, have, get, do, make, following, see, become, done, going</em>

<table>
  <tr><th>Paradigm <i>have</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gentle-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="en_gentle-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>had</em></td><td><em>had</em></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gentle-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gentle-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>have</em></td><td><em>has</em></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gentle-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="en_gentle-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>had</em></td><td></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gentle-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gentle-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>have</em></td><td></td><td><em>have</em></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-VerbForm.html">VerbForm</a></tt><tt>=Inf</tt></tt></td><td></td><td><em>have</em></td><td></td></tr>
</table>

### `AUX`

463 <tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> tokens (61% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_gentle-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (463; 100%), <tt><a href="en_gentle-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (462; 100%), <tt><a href="en_gentle-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (385; 83%), <tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Sing</tt> (381; 82%).

`AUX` tokens may have the following values of `Person`:

* `1` (50; 11% of non-empty `Person`): <em>'m, do, 've, 're, am, was, did, had, are, have</em>
* `2` (30; 6% of non-empty `Person`): <em>are, do, 're, 've, have, be, ’re</em>
* `3` (383; 83% of non-empty `Person`): <em>is, was, are, 's, has, were, have, does, did, do</em>
* `EMPTY` (290): <em>be, will, can, been, may, would, should, could, shall, must</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Mood.html">Mood</a></tt><tt>=Imp</tt></tt></td><td></td><td><em>be</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gentle-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gentle-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gentle-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>s</em></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gentle-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>'m, am</em></td><td><em>are, 're, ’re</em></td><td><em>is, 's</em></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gentle-feat-Style.html">Style</a></tt><tt>=Arch</tt>|<tt><a href="en_gentle-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>art</em></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gentle-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>were, was</em></td></tr>
  <tr><td><tt><tt><a href="en_gentle-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gentle-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gentle-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>'re, are, ’re</em></td><td><em>'re, are</em></td><td><em>are, 're, Were, is</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="en_gentle-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (227; 51%),
<tt>VERB --[<tt><a href="en_gentle-dep-conj.html">conj</a></tt>]--> VERB</tt> (33; 53%),
<tt>AUX --[<tt><a href="en_gentle-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (7; 70%),
<tt>VERB --[<tt><a href="en_gentle-dep-parataxis.html">parataxis</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="en_gentle-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (1; 100%),
<tt>VERB --[<tt><a href="en_gentle-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (1; 100%).

