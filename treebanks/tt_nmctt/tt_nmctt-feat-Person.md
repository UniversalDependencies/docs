---
layout: base
title:  'Statistics of Person in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="tt_nmctt-feat-Person.html">Person</a></tt>, <tt><a href="tt_nmctt-feat-Person-psor.html">Person[psor]</a></tt>.

90 tokens (8%) have a non-empty value of `Person`.
72 types (11%) occur at least once with a non-empty value of `Person`.
49 lemmas (10%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (63; 6% instances), <tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt> (16; 1% instances), <tt><a href="tt_nmctt-pos-AUX.html">AUX</a></tt> (11; 1% instances).

### `VERB`

63 <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> tokens (37% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="tt_nmctt-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (63; 100%), <tt><a href="tt_nmctt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (48; 76%), <tt><a href="tt_nmctt-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (46; 73%), <tt><a href="tt_nmctt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (38; 60%), <tt><a href="tt_nmctt-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (32; 51%).

`VERB` tokens may have the following values of `Person`:

* `1` (3; 5% of non-empty `Person`): <em>бәйлим, өметләнәбез, өметләнәм</em>
* `2` (1; 2% of non-empty `Person`): <em>карасаң</em>
* `3` (59; 94% of non-empty `Person`): <em>диде, белдерде, булмаса, искәртте, ителгән, итте, әйтте, ала, алдылар, алына</em>
* `EMPTY` (106): <em>булган, Тикшерү, булып, булырга, иткәнчә, итү, саклануның, тотып, укытучыларны, чыгарылган</em>

`Person` seems to be **lexical feature** of `VERB`. 100% lemmas (42) occur only with one value of `Person`.

### `PRON`

16 <tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt> tokens (62% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="tt_nmctt-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (16; 100%), <tt><a href="tt_nmctt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (9; 56%).

`PRON` tokens may have the following values of `Person`:

* `1` (5; 31% of non-empty `Person`): <em>безгә, Безнең</em>
* `3` (11; 69% of non-empty `Person`): <em>аның, ул, алар, аны</em>
* `EMPTY` (10): <em>ул, Бу, Моннан, Россия, аларга, аларның, шуның, үз, үзебезне</em>

### `AUX`

11 <tt><a href="tt_nmctt-pos-AUX.html">AUX</a></tt> tokens (61% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="tt_nmctt-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (11; 100%), <tt><a href="tt_nmctt-feat-Person-psor.html">Person[psor]</a></tt><tt>=EMPTY</tt> (11; 100%), <tt><a href="tt_nmctt-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (10; 91%), <tt><a href="tt_nmctt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (9; 82%), <tt><a href="tt_nmctt-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (6; 55%).

`AUX` tokens may have the following values of `Person`:

* `1` (1; 9% of non-empty `Person`): <em>идем</em>
* `3` (10; 91% of non-empty `Person`): <em>тора, ала, алганнар, алмады, иде, калыр, килә, чыгарган, үтә</em>
* `EMPTY` (7): <em>калу, алуы, бару, икәнен, чыгарган, чыгу</em>

<table>
  <tr><th>Paradigm <i>иде</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt></tt></td><td><em>идем</em></td><td><em>иде</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="tt_nmctt-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (4; 67%),
<tt>VERB --[<tt><a href="tt_nmctt-dep-obj.html">obj</a></tt>]--> PRON</tt> (1; 100%).

