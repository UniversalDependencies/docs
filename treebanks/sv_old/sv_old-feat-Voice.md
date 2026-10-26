---
layout: base
title:  'Statistics of Voice in UD_Swedish-Old'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Old: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

94 tokens (19%) have a non-empty value of `Voice`.
61 types (25%) occur at least once with a non-empty value of `Voice`.
46 lemmas (24%) occur at least once with a non-empty value of `Voice`.
The feature is used with 3 part-of-speech tags: <tt><a href="sv_old-pos-VERB.html">VERB</a></tt> (67; 13% instances), <tt><a href="sv_old-pos-AUX.html">AUX</a></tt> (15; 3% instances), <tt><a href="sv_old-pos-ADJ.html">ADJ</a></tt> (12; 2% instances).

### `VERB`

67 <tt><a href="sv_old-pos-VERB.html">VERB</a></tt> tokens (99% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="sv_old-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (64; 96%), <tt><a href="sv_old-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (57; 85%), <tt><a href="sv_old-feat-Number.html">Number</a></tt><tt>=Sing</tt> (56; 84%), <tt><a href="sv_old-feat-Person.html">Person</a></tt><tt>=3</tt> (55; 82%), <tt><a href="sv_old-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (51; 76%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (60; 90% of non-empty `Voice`): <em>æter, drikker, ganger, ætæ, gøræ, haffuer, komber, later, ser, siger</em>
* `Pass` (7; 10% of non-empty `Voice`): <em>brytes, bærs, gætz, lyktæs, lætz, rætes, sigx</em>
* `EMPTY` (1): <em>Miserere</em>

<table>
  <tr><th>Paradigm <i>lata</i></th><th><tt>Act</tt></th><th><tt>Pass</tt></th></tr>
  <tr><td><tt></tt></td><td><em>later, læter</em></td><td><em>lætz</em></td></tr>
</table>

`Voice` seems to be **lexical feature** of `VERB`. 95% lemmas (36) occur only with one value of `Voice`.

### `AUX`

15 <tt><a href="sv_old-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="sv_old-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (15; 100%), <tt><a href="sv_old-feat-Person.html">Person</a></tt><tt>=3</tt> (15; 100%), <tt><a href="sv_old-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (15; 100%), <tt><a href="sv_old-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (14; 93%), <tt><a href="sv_old-feat-Number.html">Number</a></tt><tt>=Sing</tt> (13; 87%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (15; 100% of non-empty `Voice`): <em>ær, ma, haffuer, war, är, æræ</em>

### `ADJ`

12 <tt><a href="sv_old-pos-ADJ.html">ADJ</a></tt> tokens (29% of all `ADJ` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `ADJ` and `Voice` co-occurred: <tt><a href="sv_old-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (12; 100%), <tt><a href="sv_old-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (12; 100%), <tt><a href="sv_old-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt> (12; 100%), <tt><a href="sv_old-feat-Case.html">Case</a></tt><tt>=Acc</tt> (9; 75%), <tt><a href="sv_old-feat-Number.html">Number</a></tt><tt>=Plur</tt> (7; 58%).

`ADJ` tokens may have the following values of `Voice`:

* `Act` (12; 100% of non-empty `Voice`): <em>bansatta, drukken, for, giord, giordæ, skoager, stekt, stektæ, sudhin, sudin</em>
* `EMPTY` (29): <em>alskona, goth, stora, Fiærde, Fæmpte, Tridhiæ, feth, flinskallutte, fyreføt, fyræføt</em>

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="sv_old-dep-conj.html">conj</a></tt>]--> VERB</tt> (7; 100%),
<tt>VERB --[<tt><a href="sv_old-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (6; 86%),
<tt>VERB --[<tt><a href="sv_old-dep-aux.html">aux</a></tt>]--> AUX</tt> (4; 100%),
<tt>VERB --[<tt><a href="sv_old-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (4; 57%),
<tt>VERB --[<tt><a href="sv_old-dep-cop.html">cop</a></tt>]--> AUX</tt> (2; 100%),
<tt>ADJ --[<tt><a href="sv_old-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="sv_old-dep-advmod.html">advmod</a></tt>]--> ADJ</tt> (1; 100%).

