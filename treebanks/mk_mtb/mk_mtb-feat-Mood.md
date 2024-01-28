---
layout: base
title:  'Statistics of Mood in UD_Macedonian-MTB'
udver: '2'
---

## Treebank Statistics: UD_Macedonian-MTB: Features: `Mood`

This feature is universal but the values `Int` are language-specific.
It occurs with 4 different values: `Cnd`, `Imp`, `Ind`, `Int`.

304 tokens (22%) have a non-empty value of `Mood`.
217 types (39%) occur at least once with a non-empty value of `Mood`.
152 lemmas (32%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt> (263; 19% instances), <tt><a href="mk_mtb-pos-AUX.html">AUX</a></tt> (41; 3% instances).

### `VERB`

263 <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt> tokens (95% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="mk_mtb-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (261; 99%), <tt><a href="mk_mtb-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (254; 97%), <tt><a href="mk_mtb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (200; 76%), <tt><a href="mk_mtb-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (134; 51%), <tt><a href="mk_mtb-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (133; 51%), <tt><a href="mk_mtb-feat-Person.html">Person</a></tt><tt>=3</tt> (132; 50%).

`VERB` tokens may have the following values of `Mood`:

* `Cnd` (1; 0% of non-empty `Mood`): <em>студеше</em>
* `Imp` (19; 7% of non-empty `Mood`): <em>дојди, направи, јави, купи, Оди, Подготви, Сврти, отвори, поништив, посматрав</em>
* `Ind` (242; 92% of non-empty `Mood`): <em>дојде, облеков, сакам, Мислам, дојдеш, студеше, воодушеви, гледав, може, Влегов</em>
* `Int` (1; 0% of non-empty `Mood`): <em>Знаеш</em>
* `EMPTY` (13): <em>одземен, јакна, возбуден, гледал, испорачано, казнет, можел, оставил, прочитана, случено</em>

<table>
  <tr><th>Paradigm <i>студи</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Cnd</tt></th></tr>
  <tr><td><tt><tt><a href="mk_mtb-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="mk_mtb-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="mk_mtb-feat-Tense.html">Tense</a></tt><tt>=Imp</tt></tt></td><td><em>Студеше</em></td><td></td><td><em>студеше</em></td></tr>
  <tr><td><tt><tt><a href="mk_mtb-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>студеше</em></td><td><em>студеше</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 94% lemmas (139) occur only with one value of `Mood`.

### `AUX`

41 <tt><a href="mk_mtb-pos-AUX.html">AUX</a></tt> tokens (66% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="mk_mtb-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (40; 98%), <tt><a href="mk_mtb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (35; 85%), <tt><a href="mk_mtb-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (34; 83%), <tt><a href="mk_mtb-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (30; 73%), <tt><a href="mk_mtb-feat-Person.html">Person</a></tt><tt>=3</tt> (28; 68%), <tt><a href="mk_mtb-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (28; 68%).

`AUX` tokens may have the following values of `Mood`:

* `Cnd` (1; 2% of non-empty `Mood`): <em>би</em>
* `Ind` (40; 98% of non-empty `Mood`): <em>е, беше, ќе, бев, биде, сте, Бевме, Сум, бидат, бил</em>
* `EMPTY` (21): <em>ќе</em>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="mk_mtb-dep-conj.html">conj</a></tt>]--> VERB</tt> (52; 90%),
<tt>VERB --[<tt><a href="mk_mtb-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (19; 86%),
<tt>VERB --[<tt><a href="mk_mtb-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (17; 100%),
<tt>VERB --[<tt><a href="mk_mtb-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (10; 63%),
<tt>VERB --[<tt><a href="mk_mtb-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="mk_mtb-dep-acl-relcl.html">acl:relcl</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="mk_mtb-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (1; 100%).

