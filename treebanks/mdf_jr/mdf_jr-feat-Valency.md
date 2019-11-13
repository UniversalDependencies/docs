---
layout: base
title:  'Statistics of Valency in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Features: `Valency`

This feature is language-specific.
It occurs with 2 different values: `1`, `2`.

109 tokens (19%) have a non-empty value of `Valency`.
102 types (31%) occur at least once with a non-empty value of `Valency`.
81 lemmas (31%) occur at least once with a non-empty value of `Valency`.
The feature is used with 2 part-of-speech tags: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (103; 18% instances), <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (6; 1% instances).

### `VERB`

103 <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> tokens (96% of all `VERB` tokens) have a non-empty value of `Valency`.

The most frequent other feature values with which `VERB` and `Valency` co-occurred: <tt><a href="mdf_jr-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (93; 90%), <tt><a href="mdf_jr-feat-Number-obj.html">Number[obj]</a></tt><tt>=EMPTY</tt> (83; 81%), <tt><a href="mdf_jr-feat-Person-obj.html">Person[obj]</a></tt><tt>=EMPTY</tt> (83; 81%), <tt><a href="mdf_jr-feat-Number-subj.html">Number[subj]</a></tt><tt>=Sing</tt> (79; 77%), <tt><a href="mdf_jr-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (77; 75%).

`VERB` tokens may have the following values of `Valency`:

* `1` (57; 55% of non-empty `Valency`): <em>касан, корхтай, рамась, Касондярян, Кончайне, Молелексолеть, Рамаль, абонда, аварьгодонь, ашкордасть</em>
* `2` (46; 45% of non-empty `Valency`): <em>Арьсян, сявонь, ёран, Арьсень, Ладяйне, Панчк-ка, азондыне, архтозе, арьсят, валхтсамазь</em>

<table>
  <tr><th>Paradigm <i>рамамс</i></th><th><tt>1</tt></th><th><tt>2</tt></th></tr>
  <tr><td><tt><tt><a href="mdf_jr-feat-Mood.html">Mood</a></tt><tt>=Cnj</tt></tt></td><td><em>Рамаль</em></td><td></td></tr>
  <tr><td><tt><tt><a href="mdf_jr-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="mdf_jr-feat-Tense.html">Tense</a></tt><tt>=Prt1</tt></tt></td><td><em>рамась</em></td><td><em>рамась</em></td></tr>
</table>

`Valency` seems to be **lexical feature** of `VERB`. 97% lemmas (77) occur only with one value of `Valency`.

### `AUX`

6 <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> tokens (24% of all `AUX` tokens) have a non-empty value of `Valency`.

The most frequent other feature values with which `AUX` and `Valency` co-occurred: <tt><a href="mdf_jr-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (6; 100%), <tt><a href="mdf_jr-feat-VerbType.html">VerbType</a></tt><tt>=EMPTY</tt> (6; 100%), <tt><a href="mdf_jr-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (5; 83%), <tt><a href="mdf_jr-feat-Number-subj.html">Number[subj]</a></tt><tt>=Sing</tt> (5; 83%).

`AUX` tokens may have the following values of `Valency`:

* `1` (6; 100% of non-empty `Valency`): <em>улелеть, ульсь, улян, эряв, эрявсть, эрявсь</em>

## Relations with Agreement in `Valency`

The 10 most frequent relations where parent and child node agree in `Valency`:
<tt>VERB --[<tt><a href="mdf_jr-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (4; 57%),
<tt>VERB --[<tt><a href="mdf_jr-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (3; 60%),
<tt>VERB --[<tt><a href="mdf_jr-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="mdf_jr-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="mdf_jr-dep-orphan.html">orphan</a></tt>]--> VERB</tt> (1; 100%).

