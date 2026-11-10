---
layout: base
title:  'Statistics of Person in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

2321 tokens (11%) have a non-empty value of `Person`.
541 types (10%) occur at least once with a non-empty value of `Person`.
393 lemmas (9%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (878; 4% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (745; 4% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (698; 3% instances).

### `VERB`

878 <tt><a href="en_pud-pos-VERB.html">VERB</a></tt> tokens (41% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (878; 100%), <tt><a href="en_pud-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (878; 100%), <tt><a href="en_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (874; 100%), <tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (657; 75%), <tt><a href="en_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (554; 63%).

`VERB` tokens may have the following values of `Person`:

* `1` (40; 5% of non-empty `Person`): <em>think, have, looked, need, Thought, asked, assumed, chose, continue, declare</em>
* `2` (8; 1% of non-empty `Person`): <em>have, Buck, Knew, end, know, like</em>
* `3` (830; 95% of non-empty `Person`): <em>said, took, has, began, are, is, became, says, had, told</em>
* `EMPTY` (1274): <em>have, used, according, take, known, do, following, given, go, including</em>

<table>
  <tr><th>Paradigm <i>have</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>have</em></td><td><em>have</em></td><td><em>has</em></td></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>had</em></td></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>have</em></td><td></td><td><em>have</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 94% lemmas (351) occur only with one value of `Person`.

### `PRON`

745 <tt><a href="en_pud-pos-PRON.html">PRON</a></tt> tokens (71% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_pud-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (742; 100%), <tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (546; 73%), <tt><a href="en_pud-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (490; 66%), <tt><a href="en_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt> (382; 51%).

`PRON` tokens may have the following values of `Person`:

* `1` (110; 15% of non-empty `Person`): <em>I, we, our, my, us, me, ’s</em>
* `2` (21; 3% of non-empty `Person`): <em>you, your, 'Ya</em>
* `3` (614; 82% of non-empty `Person`): <em>it, he, his, their, they, her, its, she, him, them</em>
* `EMPTY` (299): <em>that, which, who, there, this, what, those, someone, these, whose</em>

`Person` seems to be **lexical feature** of `PRON`. 100% lemmas (19) occur only with one value of `Person`.

### `AUX`

698 <tt><a href="en_pud-pos-AUX.html">AUX</a></tt> tokens (69% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (698; 100%), <tt><a href="en_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (698; 100%), <tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (498; 71%), <tt><a href="en_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (378; 54%).

`AUX` tokens may have the following values of `Person`:

* `1` (29; 4% of non-empty `Person`): <em>are, do, have, was, am, ’m, ’ve, 'm, 've, did</em>
* `2` (4; 1% of non-empty `Person`): <em>Do, are, did, have</em>
* `3` (665; 95% of non-empty `Person`): <em>was, is, were, are, has, had, have, 's, did, ’s</em>
* `EMPTY` (315): <em>be, been, would, will, can, could, being, have, may, having</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="en_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am, ’m, 'm</em></td><td><em>are</em></td><td><em>is, 's, ’s</em></td></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td></td><td><em>were</em></td></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="en_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>are</em></td><td></td><td><em>are, ’re</em></td></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>are</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="en_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (58; 52%),
<tt>VERB --[<tt><a href="en_pud-dep-ccomp.html">ccomp</a></tt>]--> AUX</tt> (2; 100%),
<tt>AUX --[<tt><a href="en_pud-dep-advcl.html">advcl</a></tt>]--> AUX</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_pud-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_pud-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (1; 100%).

