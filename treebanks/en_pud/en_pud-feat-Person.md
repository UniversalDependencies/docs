---
layout: base
title:  'Statistics of Person in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

1372 tokens (6%) have a non-empty value of `Person`.
150 types (3%) occur at least once with a non-empty value of `Person`.
126 lemmas (3%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (743; 4% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt> (436; 2% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (193; 1% instances).

### `PRON`

743 <tt><a href="en_pud-pos-PRON.html">PRON</a></tt> tokens (73% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="en_pud-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (743; 100%), <tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (544; 73%), <tt><a href="en_pud-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (488; 66%), <tt><a href="en_pud-feat-Case.html">Case</a></tt><tt>=Nom</tt> (389; 52%).

`PRON` tokens may have the following values of `Person`:

* `1` (109; 15% of non-empty `Person`): <em>I, we, our, my, us, me</em>
* `2` (21; 3% of non-empty `Person`): <em>you, your, 'Ya</em>
* `3` (613; 83% of non-empty `Person`): <em>it, he, his, their, they, her, its, she, him, them</em>
* `EMPTY` (281): <em>that, which, who, there, this, what, those, these, whose, One</em>

`Person` seems to be **lexical feature** of `PRON`. 100% lemmas (18) occur only with one value of `Person`.

### `AUX`

436 <tt><a href="en_pud-pos-AUX.html">AUX</a></tt> tokens (43% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="en_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (436; 100%), <tt><a href="en_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (436; 100%), <tt><a href="en_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (436; 100%), <tt><a href="en_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (254; 58%).

`AUX` tokens may have the following values of `Person`:

* `1` (2; 0% of non-empty `Person`): <em>am</em>
* `3` (434; 100% of non-empty `Person`): <em>was, is, has, 's, ’s, does</em>
* `EMPTY` (579): <em>are, be, were, had, been, have, would, will, can, could</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td></td><td><em>was</em></td></tr>
  <tr><td><tt><tt><a href="en_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>am</em></td><td><em>is, 's, ’s</em></td></tr>
</table>

### `VERB`

193 <tt><a href="en_pud-pos-VERB.html">VERB</a></tt> tokens (9% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="en_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (193; 100%), <tt><a href="en_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (193; 100%), <tt><a href="en_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (186; 96%).

`VERB` tokens may have the following values of `Person`:

* `3` (193; 100% of non-empty `Person`): <em>has, is, says, was, makes, helps, seems, 's, appears, contains</em>
* `EMPTY` (1956): <em>have, said, used, took, began, are, had, became, made, according</em>

`Person` seems to be **lexical feature** of `VERB`. 100% lemmas (107) occur only with one value of `Person`.

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>AUX --[<tt><a href="en_pud-dep-advcl.html">advcl</a></tt>]--> AUX</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_pud-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="en_pud-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (1; 100%).

