---
layout: base
title:  'Statistics of Voice in UD_Albanian-STAF'
udver: '2'
---

## Treebank Statistics: UD_Albanian-STAF: Features: `Voice`

This feature is universal but the values `Mid` are language-specific.
It occurs with 3 different values: `Act`, `Mid`, `Pass`.

431 tokens (12%) have a non-empty value of `Voice`.
278 types (23%) occur at least once with a non-empty value of `Voice`.
186 lemmas (19%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> (327; 9% instances), <tt><a href="sq_staf-pos-AUX.html">AUX</a></tt> (104; 3% instances).

### `VERB`

327 <tt><a href="sq_staf-pos-VERB.html">VERB</a></tt> tokens (76% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="sq_staf-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (327; 100%), <tt><a href="sq_staf-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (307; 94%), <tt><a href="sq_staf-feat-Number.html">Number</a></tt><tt>=Sing</tt> (270; 83%), <tt><a href="sq_staf-feat-Person.html">Person</a></tt><tt>=3</tt> (235; 72%), <tt><a href="sq_staf-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (178; 54%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (268; 82% of non-empty `Voice`): <em>di, tha, ka, bëri, shfaq, dinte, dua, gjejmë, pinte, them</em>
* `Mid` (54; 17% of non-empty `Voice`): <em>ndodhesha, bëhet, dukej, kujtua, çuditet, Duket, afrohet, bahet, bë, bëhej</em>
* `Pass` (5; 2% of non-empty `Voice`): <em>damkosen, konsiderohen, mbahen, përfshihen, përjashtohen</em>
* `EMPTY` (103): <em>bërë, filluar, thënë, mbyllur, ngjarë, vënë, hequr, largova, marrë, mësuar</em>

<table>
  <tr><th>Paradigm <i>bëj</i></th><th><tt>Act</tt></th><th><tt>Mid</tt></th></tr>
  <tr><td><tt><tt><a href="sq_staf-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="sq_staf-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="sq_staf-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>bëri, bënte</em></td><td><em>bë, bëhej</em></td></tr>
  <tr><td><tt><tt><a href="sq_staf-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="sq_staf-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="sq_staf-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>bën, bëhet</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sq_staf-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="sq_staf-feat-Person.html">Person</a></tt><tt>=1</tt>|<tt><a href="sq_staf-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>bëni</em></td><td></td></tr>
</table>

`Voice` seems to be **lexical feature** of `VERB`. 94% lemmas (174) occur only with one value of `Voice`.

### `AUX`

104 <tt><a href="sq_staf-pos-AUX.html">AUX</a></tt> tokens (75% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="sq_staf-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (97; 93%), <tt><a href="sq_staf-feat-Number.html">Number</a></tt><tt>=Sing</tt> (89; 86%), <tt><a href="sq_staf-feat-Person.html">Person</a></tt><tt>=3</tt> (88; 85%), <tt><a href="sq_staf-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (53; 51%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (104; 100% of non-empty `Voice`): <em>ishte, është, kishte, ka, jam, kishin, kanë, isha, ishin, janë</em>
* `EMPTY` (34): <em>u, duhet, ishte, ishim, paskej, është</em>

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="sq_staf-dep-conj.html">conj</a></tt>]--> VERB</tt> (40; 67%),
<tt>VERB --[<tt><a href="sq_staf-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (10; 63%),
<tt>VERB --[<tt><a href="sq_staf-dep-cop.html">cop</a></tt>]--> AUX</tt> (2; 100%),
<tt>AUX --[<tt><a href="sq_staf-dep-conj.html">conj</a></tt>]--> VERB</tt> (1; 100%).

