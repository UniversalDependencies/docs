---
layout: base
title:  'Statistics of Person in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="tt_nmctt-feat-Person.html">Person</a></tt>, <tt><a href="tt_nmctt-feat-Person-psor.html">Person[psor]</a></tt>.

103 tokens (7%) have a non-empty value of `Person`.
78 types (9%) occur at least once with a non-empty value of `Person`.
54 lemmas (9%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (73; 5% instances), <tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt> (17; 1% instances), <tt><a href="tt_nmctt-pos-AUX.html">AUX</a></tt> (13; 1% instances).

### `VERB`

73 <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> tokens (33% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="tt_nmctt-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (73; 100%), <tt><a href="tt_nmctt-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (49; 67%), <tt><a href="tt_nmctt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (48; 66%), <tt><a href="tt_nmctt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (48; 66%).

`VERB` tokens may have the following values of `Person`:

* `1` (3; 4% of non-empty `Person`): <em>бәйлим, өметләнәбез, өметләнәм</em>
* `2` (1; 1% of non-empty `Person`): <em>карасаң</em>
* `3` (69; 95% of non-empty `Person`): <em>диде, итә, белдерде, булмаса, искәртте, ителгән, итте, саклана, фаразлана, әйтте</em>
* `EMPTY` (147): <em>булган, булырга, Тикшерү, булачак, бара, булуын, булып, дип, иткәнчә, итү</em>

`Person` seems to be **lexical feature** of `VERB`. 100% lemmas (47) occur only with one value of `Person`.

### `PRON`

17 <tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt> tokens (50% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="tt_nmctt-feat-Person-psor.html">Person[psor]</a></tt><tt>=EMPTY</tt> (17; 100%), <tt><a href="tt_nmctt-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (17; 100%), <tt><a href="tt_nmctt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (10; 59%).

`PRON` tokens may have the following values of `Person`:

* `1` (5; 29% of non-empty `Person`): <em>безгә, Безнең</em>
* `3` (12; 71% of non-empty `Person`): <em>аның, ул, алар, аны</em>
* `EMPTY` (17): <em>Бу, аларның, ул, Моннан, Моңа, Россия, аларга, барысы, шуның, Үзебезнең</em>

### `AUX`

13 <tt><a href="tt_nmctt-pos-AUX.html">AUX</a></tt> tokens (43% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="tt_nmctt-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (13; 100%), <tt><a href="tt_nmctt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (9; 69%), <tt><a href="tt_nmctt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (8; 62%).

`AUX` tokens may have the following values of `Person`:

* `1` (1; 8% of non-empty `Person`): <em>идем</em>
* `3` (12; 92% of non-empty `Person`): <em>иде, тора, ала, алганнар, алмады, калыр, килә, чыгарган, үтә</em>
* `EMPTY` (17): <em>алачак, кирәк, калу, мөмкин, тиеш, алуы, бару, икәнен, чыгарган, чыгу</em>

<table>
  <tr><th>Paradigm <i>иде</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="tt_nmctt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>идем</em></td><td><em>иде</em></td></tr>
  <tr><td><tt><tt><a href="tt_nmctt-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="tt_nmctt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>иде</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="tt_nmctt-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (4; 67%),
<tt>VERB --[<tt><a href="tt_nmctt-dep-obj.html">obj</a></tt>]--> PRON</tt> (1; 100%).

