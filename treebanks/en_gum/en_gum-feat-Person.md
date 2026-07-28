---
layout: base
title:  'Statistics of Person in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

37326 tokens (15%) have a non-empty value of `Person`.
2400 types (13%) occur at least once with a non-empty value of `Person`.
1328 lemmas (9%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (16889; 7% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (11035; 4% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (9402; 4% instances).

### `PRON`

16889 <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> tokens (77% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (16852; 100%), <tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (13424; 79%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (12620; 75%), <tt><a href="en_gum-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (11295; 67%), <tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Nom</tt> (10574; 63%).

`PRON` tokens may have the following values of `Person`:

* `1` (6263; 37% of non-empty `Person`): <em>i, we, my, our, me, us, 's, myself, ’s, mine</em>
* `2` (3158; 19% of non-empty `Person`): <em>you, your, yourself, yours, ye, ya, y', yourselves</em>
* `3` (7468; 44% of non-empty `Person`): <em>it, they, he, his, their, she, her, them, its, him</em>
* `EMPTY` (5084): <em>that, what, this, which, there, who, something, those, everything, anything</em>

<table>
  <tr><th>Paradigm <i>your</i></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td><em>your</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=Yes</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>your</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>you</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td><em>yours</em></td><td></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 96% lemmas (25) occur only with one value of `Person`.

### `VERB`

11035 <tt><a href="en_gum-pos-VERB.html">VERB</a></tt> tokens (41% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (11035; 100%), <tt><a href="en_gum-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (11035; 100%), <tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (9960; 90%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (8152; 74%), <tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (5853; 53%).

`VERB` tokens may have the following values of `Person`:

* `1` (2416; 22% of non-empty `Person`): <em>think, have, mean, know, had, thank, want, got, thought, said</em>
* `2` (1924; 17% of non-empty `Person`): <em>know, let, have, get, want, see, look, make, think, put</em>
* `3` (6695; 61% of non-empty `Person`): <em>said, has, are, had, have, is, 's, says, made, makes</em>
* `EMPTY` (16137): <em>have, do, make, get, going, go, know, see, united, take</em>

<table>
  <tr><th>Paradigm <i>have</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>have</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>Have</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>had</em></td><td><em>had</em></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>has</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>have, 've</em></td><td><em>have</em></td><td><em>has</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>had</em></td><td><em>had</em></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>have</em></td><td><em>have</em></td><td><em>have</em></td></tr>
</table>

### `AUX`

9402 <tt><a href="en_gum-pos-AUX.html">AUX</a></tt> tokens (67% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (9402; 100%), <tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (9359; 100%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7171; 76%), <tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (7016; 75%).

`AUX` tokens may have the following values of `Person`:

* `1` (1461; 16% of non-empty `Person`): <em>'m, do, was, have, am, 've, are, 're, did, were</em>
* `2` (626; 7% of non-empty `Person`): <em>'re, do, are, have, did, ’re, 've, be, were, ’ve</em>
* `3` (7315; 78% of non-empty `Person`): <em>is, was, 's, are, has, were, have, ’s, had, does</em>
* `EMPTY` (4690): <em>be, can, will, would, been, could, should, may, 'll, have</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>be</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>was, where</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was, were</em></td><td><em>were, was</em></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>is</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>'m, am, ’m</em></td><td><em>'re, are, ’re</em></td><td><em>is, 's, ’s, S’, s</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>were</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>were, was</em></td><td><em>were</em></td><td><em>were, was</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>are</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>are, 're, ’re</em></td><td><em>'re, are</em></td><td><em>are, 're, ’re, R, am</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>were</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>be</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>were</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Sub</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>be</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (4578; 53%),
<tt>VERB --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> VERB</tt> (913; 61%),
<tt>AUX --[<tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (227; 59%),
<tt>PRON --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (42; 86%),
<tt>VERB --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (35; 58%),
<tt>AUX --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> AUX</tt> (18; 95%),
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (18; 72%),
<tt>PRON --[<tt><a href="en_gum-dep-nmod-unmarked.html">nmod:unmarked</a></tt>]--> PRON</tt> (3; 100%),
<tt>AUX --[<tt><a href="en_gum-dep-expl.html">expl</a></tt>]--> PRON</tt> (2; 100%),
<tt>AUX --[<tt><a href="en_gum-dep-cop.html">cop</a></tt>]--> AUX</tt> (1; 100%).

