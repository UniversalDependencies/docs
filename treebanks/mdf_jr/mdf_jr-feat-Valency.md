---
layout: base
title:  'Statistics of Valency in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Features: `Valency`

This feature is language-specific.
It occurs with 2 different values: `1`, `2`.

245 tokens (16%) have a non-empty value of `Valency`.
221 types (25%) occur at least once with a non-empty value of `Valency`.
154 lemmas (24%) occur at least once with a non-empty value of `Valency`.
The feature is used with 2 part-of-speech tags: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (228; 15% instances), <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (17; 1% instances).

### `VERB`

228 <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> tokens (84% of all `VERB` tokens) have a non-empty value of `Valency`.

The most frequent other feature values with which `VERB` and `Valency` co-occurred: <tt><a href="mdf_jr-feat-Number-obj.html">Number[obj]</a></tt><tt>=EMPTY</tt> (194; 85%), <tt><a href="mdf_jr-feat-Person-obj.html">Person[obj]</a></tt><tt>=EMPTY</tt> (194; 85%), <tt><a href="mdf_jr-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (183; 80%), <tt><a href="mdf_jr-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (158; 69%), <tt><a href="mdf_jr-feat-Number-subj.html">Number[subj]</a></tt><tt>=Sing</tt> (149; 65%).

`VERB` tokens may have the following values of `Valency`:

* `1` (129; 57% of non-empty `Valency`): <em>касан, ащи, кенярдсь, корхтай, лездсь, лиссть, лиссь, марявсь, мольсь, няевсь</em>
* `2` (99; 43% of non-empty `Valency`): <em>Арьсян, варжакстсь, сявонь, ёран, Арьсень, Варжакстонь, Ладяйне, Лихтезь, Няить, Панчк-ка</em>

<table>
  <tr><th>Paradigm <i>рамамс</i></th><th><tt>1</tt></th><th><tt>2</tt></th></tr>
  <tr><td><tt><tt><a href="mdf_jr-feat-Mood.html">Mood</a></tt><tt>=Cnj</tt></tt></td><td><em>Рамаль</em></td><td></td></tr>
  <tr><td><tt><tt><a href="mdf_jr-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="mdf_jr-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>рамась</em></td><td><em>рамась</em></td></tr>
</table>

`Valency` seems to be **lexical feature** of `VERB`. 97% lemmas (148) occur only with one value of `Valency`.

### `AUX`

17 <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> tokens (32% of all `AUX` tokens) have a non-empty value of `Valency`.

The most frequent other feature values with which `AUX` and `Valency` co-occurred: <tt><a href="mdf_jr-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (17; 100%), <tt><a href="mdf_jr-feat-VerbType.html">VerbType</a></tt><tt>=EMPTY</tt> (17; 100%), <tt><a href="mdf_jr-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (15; 88%), <tt><a href="mdf_jr-feat-Person-subj.html">Person[subj]</a></tt><tt>=3</tt> (15; 88%), <tt><a href="mdf_jr-feat-Number-subj.html">Number[subj]</a></tt><tt>=Sing</tt> (14; 82%), <tt><a href="mdf_jr-feat-Tense.html">Tense</a></tt><tt>=Prt1</tt> (9; 53%).

`AUX` tokens may have the following values of `Valency`:

* `1` (17; 100% of non-empty `Valency`): <em>ульсь, эрявсь, Эрявихть, савоза, сашендови, улелеть, ульсть, улян, эрявсть</em>

## Relations with Agreement in `Valency`

The 10 most frequent relations where parent and child node agree in `Valency`:
<tt>VERB --[<tt><a href="mdf_jr-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (10; 63%),
<tt>VERB --[<tt><a href="mdf_jr-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (8; 57%),
<tt>VERB --[<tt><a href="mdf_jr-dep-advcl-tmod.html">advcl:tmod</a></tt>]--> VERB</tt> (3; 60%),
<tt>VERB --[<tt><a href="mdf_jr-dep-appos.html">appos</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="mdf_jr-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="mdf_jr-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="mdf_jr-dep-nsubj.html">nsubj</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="mdf_jr-dep-orphan.html">orphan</a></tt>]--> VERB</tt> (1; 100%).

