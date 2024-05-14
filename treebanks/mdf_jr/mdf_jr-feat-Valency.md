---
layout: base
title:  'Statistics of Valency in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Features: `Valency`

This feature is language-specific.
It occurs with 2 different values: `1`, `2`.

288 tokens (8%) have a non-empty value of `Valency`.
257 types (15%) occur at least once with a non-empty value of `Valency`.
179 lemmas (15%) occur at least once with a non-empty value of `Valency`.
The feature is used with 2 part-of-speech tags: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (269; 8% instances), <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (19; 1% instances).

### `VERB`

269 <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> tokens (43% of all `VERB` tokens) have a non-empty value of `Valency`.

The most frequent other feature values with which `VERB` and `Valency` co-occurred: <tt><a href="mdf_jr-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (245; 91%), <tt><a href="mdf_jr-feat-Number-obj.html">Number[obj]</a></tt><tt>=EMPTY</tt> (229; 85%), <tt><a href="mdf_jr-feat-Person-obj.html">Person[obj]</a></tt><tt>=EMPTY</tt> (229; 85%), <tt><a href="mdf_jr-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (216; 80%), <tt><a href="mdf_jr-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (188; 70%), <tt><a href="mdf_jr-feat-Number-subj.html">Number[subj]</a></tt><tt>=Sing</tt> (169; 63%), <tt><a href="mdf_jr-feat-Person-subj.html">Person[subj]</a></tt><tt>=3</tt> (135; 50%).

`VERB` tokens may have the following values of `Valency`:

* `1` (156; 58% of non-empty `Valency`): <em>касан, лиссь, моли, мольсь, ащи, кенярдсь, корхтай, лездсь, лиссть, марявсь</em>
* `2` (113; 42% of non-empty `Valency`): <em>Арьсян, варжакстсь, сявонь, ёран, Арьсень, Варжакстонь, Ладяйне, Лихтезь, Нумань, Няить</em>

<table>
  <tr><th>Paradigm <i>ётамс</i></th><th><tt>1</tt></th><th><tt>2</tt></th></tr>
  <tr><td><tt><tt><a href="mdf_jr-feat-Derivation.html">Derivation</a></tt><tt>=Ozj</tt>|<tt><a href="mdf_jr-feat-VerbForm.html">VerbForm</a></tt><tt>=Conv</tt></tt></td><td></td><td><em>ётазь</em></td></tr>
  <tr><td><tt><tt><a href="mdf_jr-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="mdf_jr-feat-Number-subj.html">Number[subj]</a></tt><tt>=Sing</tt>|<tt><a href="mdf_jr-feat-Person-subj.html">Person[subj]</a></tt><tt>=3</tt>|<tt><a href="mdf_jr-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>ётай</em></td><td></td></tr>
  <tr><td><tt><tt><a href="mdf_jr-feat-VerbForm.html">VerbForm</a></tt><tt>=Inf</tt></tt></td><td></td><td><em>ётамс</em></td></tr>
</table>

`Valency` seems to be **lexical feature** of `VERB`. 97% lemmas (172) occur only with one value of `Valency`.

### `AUX`

19 <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> tokens (16% of all `AUX` tokens) have a non-empty value of `Valency`.

The most frequent other feature values with which `AUX` and `Valency` co-occurred: <tt><a href="mdf_jr-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (19; 100%), <tt><a href="mdf_jr-feat-VerbType.html">VerbType</a></tt><tt>=EMPTY</tt> (19; 100%), <tt><a href="mdf_jr-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (17; 89%), <tt><a href="mdf_jr-feat-Person-subj.html">Person[subj]</a></tt><tt>=3</tt> (17; 89%), <tt><a href="mdf_jr-feat-Number-subj.html">Number[subj]</a></tt><tt>=Sing</tt> (16; 84%), <tt><a href="mdf_jr-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (13; 68%).

`AUX` tokens may have the following values of `Valency`:

* `1` (19; 100% of non-empty `Valency`): <em>ульсь, эрявсь, Эрявихть, савоза, сашендови, улелеть, ульсть, улян, эряви, эрявсть</em>

## Relations with Agreement in `Valency`

The 10 most frequent relations where parent and child node agree in `Valency`:
<tt>VERB --[<tt><a href="mdf_jr-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (11; 65%),
<tt>VERB --[<tt><a href="mdf_jr-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (8; 53%),
<tt>VERB --[<tt><a href="mdf_jr-dep-appos.html">appos</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="mdf_jr-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="mdf_jr-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="mdf_jr-dep-nsubj.html">nsubj</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="mdf_jr-dep-orphan.html">orphan</a></tt>]--> VERB</tt> (1; 100%).

