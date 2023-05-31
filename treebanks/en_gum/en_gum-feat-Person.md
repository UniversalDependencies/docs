---
layout: base
title:  'Statistics of Person in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

27162 tokens (14%) have a non-empty value of `Person`.
2056 types (13%) occur at least once with a non-empty value of `Person`.
1187 lemmas (9%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (11996; 6% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (8477; 5% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (6689; 4% instances).

### `PRON`

11996 <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> tokens (78% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (11974; 100%), <tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (9406; 78%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (9105; 76%), <tt><a href="en_gum-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (7853; 65%), <tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Nom</tt> (7403; 62%).

`PRON` tokens may have the following values of `Person`:

* `1` (4301; 36% of non-empty `Person`): <em>i, we, my, our, me, us, 's, myself, ’s, mine</em>
* `2` (2241; 19% of non-empty `Person`): <em>you, your, yourself, yours, ya, y', ye</em>
* `3` (5454; 45% of non-empty `Person`): <em>it, he, they, his, she, their, her, them, its, him</em>
* `EMPTY` (3343): <em>that, this, what, which, there, who, something, those, everything, these</em>

<table>
  <tr><th>Paradigm <i>your</i></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td><em>your</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=Yes</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>your</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>you</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td><em>yours</em></td><td></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 96% lemmas (27) occur only with one value of `Person`.

### `VERB`

8477 <tt><a href="en_gum-pos-VERB.html">VERB</a></tt> tokens (43% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (8368; 99%), <tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (7443; 88%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5413; 64%).

`VERB` tokens may have the following values of `Person`:

* `1` (1707; 20% of non-empty `Person`): <em>have, think, mean, know, thank, had, got, want, said, wanted</em>
* `2` (1663; 20% of non-empty `Person`): <em>know, let, get, have, see, want, look, make, do, use</em>
* `3` (5107; 60% of non-empty `Person`): <em>said, has, is, are, have, had, 's, was, says, came</em>
* `EMPTY` (11400): <em>have, do, make, get, know, united, go, see, going, gon</em>

<table>
  <tr><th>Paradigm <i>have</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>have</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>had</em></td><td><em>had</em></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt>|<tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>has</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>have, 've</em></td><td><em>have, ’ve</em></td><td><em>has</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>had</em></td><td><em>had</em></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>have</em></td><td><em>have</em></td><td><em>have</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Inf</tt></tt></td><td></td><td><em>Have</em></td><td></td></tr>
</table>

### `AUX`

6689 <tt><a href="en_gum-pos-AUX.html">AUX</a></tt> tokens (71% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (6689; 100%), <tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (6303; 94%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5021; 75%), <tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (4578; 68%).

`AUX` tokens may have the following values of `Person`:

* `1` (994; 15% of non-empty `Person`): <em>'m, do, was, have, 've, did, are, am, 're, were</em>
* `2` (410; 6% of non-empty `Person`): <em>'re, do, are, did, have, be, were, ’re, 've, ’ve</em>
* `3` (5285; 79% of non-empty `Person`): <em>is, was, are, 's, were, has, had, have, ’s, will</em>
* `EMPTY` (2735): <em>be, can, will, been, would, could, should, may, 'll, have</em>

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
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>are, 're, ’re</em></td><td><em>'re, are</em></td><td><em>are, 're, ’re, am</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>be</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (3364; 53%),
<tt>VERB --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> VERB</tt> (722; 62%),
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (14; 74%),
<tt>PRON --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (13; 81%),
<tt>PRON --[<tt><a href="en_gum-dep-nmod-npmod.html">nmod:npmod</a></tt>]--> PRON</tt> (2; 100%),
<tt>PRON --[<tt><a href="en_gum-dep-orphan.html">orphan</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="en_gum-dep-appos.html">appos</a></tt>]--> VERB</tt> (1; 100%).

