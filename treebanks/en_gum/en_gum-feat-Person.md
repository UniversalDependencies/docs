---
layout: base
title:  'Statistics of Person in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

34223 tokens (15%) have a non-empty value of `Person`.
2313 types (13%) occur at least once with a non-empty value of `Person`.
1288 lemmas (9%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (15402; 7% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (10223; 4% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (8598; 4% instances).

### `PRON`

15402 <tt><a href="en_gum-pos-PRON.html">PRON</a></tt> tokens (77% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_gum-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (15367; 100%), <tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (12277; 80%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (11591; 75%), <tt><a href="en_gum-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (10219; 66%), <tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Nom</tt> (9670; 63%).

`PRON` tokens may have the following values of `Person`:

* `1` (5709; 37% of non-empty `Person`): <em>i, we, my, our, me, us, 's, myself, ’s, mine</em>
* `2` (2828; 18% of non-empty `Person`): <em>you, your, yourself, yours, ye, ya, y'</em>
* `3` (6865; 45% of non-empty `Person`): <em>it, they, he, his, she, their, her, them, its, him</em>
* `EMPTY` (4578): <em>that, what, this, there, which, who, something, those, everything, anything</em>

<table>
  <tr><th>Paradigm <i>your</i></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td><em>your</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=Yes</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td><em>your</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>you</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Poss.html">Poss</a></tt><tt>=Yes</tt></tt></td><td><em>yours</em></td><td></td></tr>
</table>

`Person` seems to be **lexical feature** of `PRON`. 96% lemmas (26) occur only with one value of `Person`.

### `VERB`

10223 <tt><a href="en_gum-pos-VERB.html">VERB</a></tt> tokens (41% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_gum-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (10223; 100%), <tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (10105; 99%), <tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (9068; 89%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6536; 64%), <tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (5256; 51%).

`VERB` tokens may have the following values of `Person`:

* `1` (2203; 22% of non-empty `Person`): <em>think, have, mean, know, had, thank, want, got, thought, said</em>
* `2` (1924; 19% of non-empty `Person`): <em>know, let, have, get, see, want, look, make, take, use</em>
* `3` (6096; 60% of non-empty `Person`): <em>said, has, are, had, is, have, 's, says, came, comes</em>
* `EMPTY` (14517): <em>have, do, make, get, go, going, know, united, see, take</em>

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

8598 <tt><a href="en_gum-pos-AUX.html">AUX</a></tt> tokens (67% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_gum-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (8598; 100%), <tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (8563; 100%), <tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6545; 76%), <tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (6391; 74%).

`AUX` tokens may have the following values of `Person`:

* `1` (1348; 16% of non-empty `Person`): <em>'m, do, was, 've, have, am, are, 're, did, were</em>
* `2` (567; 7% of non-empty `Person`): <em>do, 're, are, did, have, ’re, 've, be, were, ’ve</em>
* `3` (6683; 78% of non-empty `Person`): <em>is, was, 's, are, were, has, ’s, have, had, does</em>
* `EMPTY` (4236): <em>be, can, will, would, been, could, should, may, have, 'll</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Imp</tt></tt></td><td></td><td><em>be</em></td><td></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="en_gum-feat-Typo.html">Typo</a></tt><tt>=Yes</tt></tt></td><td></td><td></td><td><em>was, where</em></td></tr>
  <tr><td><tt><tt><a href="en_gum-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="en_gum-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_gum-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was, were</em></td><td><em>were, was</em></td><td><em>was</em></td></tr>
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
<tt>VERB --[<tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (4166; 53%),
<tt>VERB --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> VERB</tt> (849; 62%),
<tt>AUX --[<tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (207; 60%),
<tt>PRON --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (37; 84%),
<tt>VERB --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (30; 55%),
<tt>PRON --[<tt><a href="en_gum-dep-conj.html">conj</a></tt>]--> PRON</tt> (18; 72%),
<tt>AUX --[<tt><a href="en_gum-dep-reparandum.html">reparandum</a></tt>]--> AUX</tt> (16; 94%),
<tt>PRON --[<tt><a href="en_gum-dep-nmod-unmarked.html">nmod:unmarked</a></tt>]--> PRON</tt> (3; 100%),
<tt>AUX --[<tt><a href="en_gum-dep-expl.html">expl</a></tt>]--> PRON</tt> (1; 100%),
<tt>AUX --[<tt><a href="en_gum-dep-parataxis.html">parataxis</a></tt>]--> AUX</tt> (1; 100%).

