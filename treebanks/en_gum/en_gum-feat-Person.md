---
layout: base
title:  'Statistics of Person in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

30762 tokens (15%) have a non-empty value of `Person`.
2210 types (13%) occur at least once with a non-empty value of `Person`.
1245 lemmas (9%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (13824; 7% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (9312; 4% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (7626; 4% instances).

### `PRON`

13824 <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> tokens (78% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (13799; 100%), <tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (10916; 79%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (10471; 76%), <tt><a href="en_gum-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (9144; 66%), <tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Nom</tt> (8589; 62%).

`PRON` tokens may have the following values of `Person`:

* `1` (5104; 37% of non-empty `Person`): <em>i, we, my, our, me, us, 's, myself, ’s, ourselves</em>
* `2` (2566; 19% of non-empty `Person`): <em>you, your, yourself, yours, ya, y', ye</em>
* `3` (6154; 45% of non-empty `Person`): <em>it, he, they, his, she, their, her, them, its, him</em>
* `EMPTY` (3995): <em>that, this, what, which, there, who, something, those, anything, everything</em>

<table>
  <tr><th>Paradigm <i>your</i></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td><em>your</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=Yes</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>your</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>you</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td><em>yours</em></td><td></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 96% lemmas (26) occur only with one value of `Person`.

### `VERB`

9312 <tt><a href="en_gum-pos-VERB.html">VERB</a></tt> tokens (42% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_gum-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (9312; 100%), <tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (9203; 99%), <tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (8196; 88%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5960; 64%), <tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (4681; 50%).

`VERB` tokens may have the following values of `Person`:

* `1` (1969; 21% of non-empty `Person`): <em>have, think, know, mean, thank, had, want, got, thought, feel</em>
* `2` (1798; 19% of non-empty `Person`): <em>know, let, have, get, see, want, look, make, take, use</em>
* `3` (5545; 60% of non-empty `Person`): <em>said, has, are, have, had, is, 's, says, comes, came</em>
* `EMPTY` (12965): <em>have, do, make, get, know, go, united, going, see, gon</em>

<table>
  <tr><th>Paradigm <i>have</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>have</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>had</em></td><td><em>had</em></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt>|<tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td></td><td><em>has</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>have, 've</em></td><td><em>have</em></td><td><em>has</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>had</em></td><td><em>had</em></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>have</em></td><td><em>have</em></td><td><em>have</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Inf</tt></tt></td><td></td><td><em>Have</em></td><td></td></tr>
</table>

### `AUX`

7626 <tt><a href="en_gum-pos-AUX.html">AUX</a></tt> tokens (67% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (7626; 100%), <tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (7592; 100%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5801; 76%), <tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (5614; 74%).

`AUX` tokens may have the following values of `Person`:

* `1` (1194; 16% of non-empty `Person`): <em>'m, do, was, have, 've, am, are, did, 're, ’m</em>
* `2` (507; 7% of non-empty `Person`): <em>do, 're, are, did, have, be, ’re, 've, were, ’ve</em>
* `3` (5925; 78% of non-empty `Person`): <em>is, was, 's, are, were, has, ’s, had, have, does</em>
* `EMPTY` (3729): <em>be, can, will, would, been, should, could, may, 'll, being</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Imp</tt></tt></td><td></td><td><em>be</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>was, where</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td><em>were, was</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>is, s</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>'m, am, ’m</em></td><td><em>'re, are, ’re</em></td><td><em>is, 's, ’s, S’</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>were</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>were, was</em></td><td><em>were</em></td><td><em>were, was</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>are</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>are, 're, ’re</em></td><td><em>'re, are</em></td><td><em>are, 're, ’re, R, am</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>be</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>were</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>be</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (3725; 53%),
<tt>VERB --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> VERB</tt> (798; 63%),
<tt>AUX --[<tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (184; 60%),
<tt>VERB --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (25; 58%),
<tt>PRON --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (24; 89%),
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (18; 72%),
<tt>AUX --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> AUX</tt> (8; 89%),
<tt>PRON --[<tt><a href="en_gum-dep-nmod-unmarked.html">nmod:unmarked</a></tt>]--> PRON</tt> (3; 100%),
<tt>AUX --[<tt><a href="en_gum-dep-expl.html">expl</a></tt>]--> PRON</tt> (1; 100%),
<tt>AUX --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> AUX</tt> (1; 100%).

