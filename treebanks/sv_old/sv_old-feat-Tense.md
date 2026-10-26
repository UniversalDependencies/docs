---
layout: base
title:  'Statistics of Tense in UD_Swedish-Old'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Old: Features: `Tense`

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

94 tokens (19%) have a non-empty value of `Tense`.
61 types (25%) occur at least once with a non-empty value of `Tense`.
46 lemmas (24%) occur at least once with a non-empty value of `Tense`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv_old-pos-VERB.html">VERB</a></tt> (67; 13% instances), <tt><a href="sv_old-pos-AUX.html">AUX</a></tt> (15; 3% instances), <tt><a href="sv_old-pos-ADJ.html">ADJ</a></tt> (12; 2% instances).

### `VERB`

67 <tt><a href="sv_old-pos-VERB.html">VERB</a></tt> tokens (99% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="sv_old-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (60; 90%), <tt><a href="sv_old-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (57; 85%), <tt><a href="sv_old-feat-Number.html">Number</a></tt><tt>=Sing</tt> (56; 84%), <tt><a href="sv_old-feat-Person.html">Person</a></tt><tt>=3</tt> (55; 82%), <tt><a href="sv_old-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (51; 76%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (3; 4% of non-empty `Tense`): <em>Loffuat, klædder, lesit</em>
* `Pres` (64; 96% of non-empty `Tense`): <em>æter, drikker, ganger, ætæ, gøræ, haffuer, komber, later, ser, siger</em>
* `EMPTY` (1): <em>Miserere</em>

`Tense` seems to be **lexical feature** of `VERB`. 100% lemmas (38) occur only with one value of `Tense`.

### `AUX`

15 <tt><a href="sv_old-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="sv_old-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (15; 100%), <tt><a href="sv_old-feat-Person.html">Person</a></tt><tt>=3</tt> (15; 100%), <tt><a href="sv_old-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (15; 100%), <tt><a href="sv_old-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (15; 100%), <tt><a href="sv_old-feat-Number.html">Number</a></tt><tt>=Sing</tt> (13; 87%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (1; 7% of non-empty `Tense`): <em>war</em>
* `Pres` (14; 93% of non-empty `Tense`): <em>ær, ma, haffuer, är, æræ</em>

<table>
  <tr><th>Paradigm <i>vara</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="sv_old-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>ær, är</em></td><td><em>war</em></td></tr>
  <tr><td><tt><tt><a href="sv_old-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>æræ</em></td><td></td></tr>
</table>

### `ADJ`

12 <tt><a href="sv_old-pos-ADJ.html">ADJ</a></tt> tokens (29% of all `ADJ` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `ADJ` and `Tense` co-occurred: <tt><a href="sv_old-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (12; 100%), <tt><a href="sv_old-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (12; 100%), <tt><a href="sv_old-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (12; 100%), <tt><a href="sv_old-feat-Case.html">Case</a></tt><tt>=Acc</tt> (9; 75%), <tt><a href="sv_old-feat-Number.html">Number</a></tt><tt>=Plur</tt> (7; 58%).

`ADJ` tokens may have the following values of `Tense`:

* `Past` (12; 100% of non-empty `Tense`): <em>bansatta, drukken, for, giord, giordæ, skoager, stekt, stektæ, sudhin, sudin</em>
* `EMPTY` (29): <em>alskona, goth, stora, Fiærde, Fæmpte, Tridhiæ, feth, flinskallutte, fyreføt, fyræføt</em>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="sv_old-dep-conj.html">conj</a></tt>]--> VERB</tt> (7; 100%),
<tt>VERB --[<tt><a href="sv_old-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (6; 86%),
<tt>VERB --[<tt><a href="sv_old-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (5; 71%),
<tt>VERB --[<tt><a href="sv_old-dep-aux.html">aux</a></tt>]--> AUX</tt> (3; 75%).

