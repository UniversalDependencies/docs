---
layout: base
title:  'Statistics of Person in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

23166 tokens (14%) have a non-empty value of `Person`.
1937 types (12%) occur at least once with a non-empty value of `Person`.
1128 lemmas (9%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (10062; 6% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (7404; 5% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (5700; 3% instances).

### `PRON`

10062 <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> tokens (79% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (10046; 100%), <tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (7761; 77%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7683; 76%), <tt><a href="en_gum-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (6457; 64%), <tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Nom</tt> (6116; 61%).

`PRON` tokens may have the following values of `Person`:

* `1` (3454; 34% of non-empty `Person`): <em>i, we, my, our, me, us, 's, myself, ’s, ourselves</em>
* `2` (1878; 19% of non-empty `Person`): <em>you, your, yourself, y-, ya, ye, yours</em>
* `3` (4730; 47% of non-empty `Person`): <em>it, he, they, his, she, their, her, its, them, him</em>
* `EMPTY` (2696): <em>that, this, which, what, there, who, those, everything, anything, someone</em>

<table>
  <tr><th>Paradigm <i>your</i></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td><em>your</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=Yes</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>your</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>you</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td><em>yours</em></td><td></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 96% lemmas (26) occur only with one value of `Person`.

### `VERB`

7404 <tt><a href="en_gum-pos-VERB.html">VERB</a></tt> tokens (42% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (7314; 99%), <tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (6480; 88%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4716; 64%).

`VERB` tokens may have the following values of `Person`:

* `1` (1381; 19% of non-empty `Person`): <em>have, think, mean, know, had, want, got, said, thought, wanted</em>
* `2` (1416; 19% of non-empty `Person`): <em>know, let, get, see, have, want, make, look, use, take</em>
* `3` (4607; 62% of non-empty `Person`): <em>said, are, has, is, have, had, 's, was, says, came</em>
* `EMPTY` (10086): <em>have, make, do, get, united, know, go, see, going, take</em>

<table>
  <tr><th>Paradigm <i>have</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Imp</tt></tt></td><td></td><td><em>have</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>had</em></td><td><em>had</em></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>has</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>have, 've</em></td><td><em>have</em></td><td><em>has</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>had</em></td><td><em>had</em></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>have</em></td><td></td><td><em>have</em></td></tr>
</table>

### `AUX`

5700 <tt><a href="en_gum-pos-AUX.html">AUX</a></tt> tokens (71% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (5700; 100%), <tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (5358; 94%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4241; 74%), <tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (3794; 67%).

`AUX` tokens may have the following values of `Person`:

* `1` (799; 14% of non-empty `Person`): <em>'m, do, was, have, did, 've, am, are, 're, were</em>
* `2` (343; 6% of non-empty `Person`): <em>'re, do, are, did, have, be, ’re, were, ’ve, 've</em>
* `3` (4558; 80% of non-empty `Person`): <em>is, was, are, 's, were, has, had, have, ’s, will</em>
* `EMPTY` (2377): <em>be, can, will, been, would, should, could, may, have, 'll</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Imp</tt></tt></td><td></td><td><em>be</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>was, where</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td><em>were</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>is, s</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>'m, am, ’m, m</em></td><td><em>'re, are, ’re</em></td><td><em>is, 's, ’s, S’</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>were</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>were, was</em></td><td><em>were</em></td><td><em>were, was</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>are</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>are, 're, ’re</em></td><td><em>'re, are</em></td><td><em>are, 're, ’re</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>be</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (2793; 53%),
<tt>VERB --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> VERB</tt> (644; 62%),
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (14; 74%),
<tt>PRON --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (8; 73%),
<tt>PRON --[<tt><a href="en_gum-dep-nmod-npmod.html">nmod:npmod</a></tt>]--> PRON</tt> (2; 100%),
<tt>VERB --[<tt><a href="en_gum-dep-advcl.html">advcl</a></tt>]--> PRON</tt> (2; 67%),
<tt>AUX --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_gum-dep-orphan.html">orphan</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="en_gum-dep-appos.html">appos</a></tt>]--> VERB</tt> (1; 100%).

