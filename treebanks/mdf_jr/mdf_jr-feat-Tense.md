---
layout: base
title:  'Statistics of Tense in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Features: `Tense`

This feature is universal but the values `Prt1`, `Prt2` are language-specific.
It occurs with 3 different values: `Pres`, `Prt1`, `Prt2`.

97 tokens (17%) have a non-empty value of `Tense`.
88 types (27%) occur at least once with a non-empty value of `Tense`.
70 lemmas (26%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (83; 15% instances), <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (14; 2% instances).

### `VERB`

83 <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> tokens (78% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="mdf_jr-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (82; 99%), <tt><a href="mdf_jr-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (80; 96%), <tt><a href="mdf_jr-feat-Number-subj.html">Number[subj]</a></tt><tt>=Sing</tt> (73; 88%), <tt><a href="mdf_jr-feat-Number-obj.html">Number[obj]</a></tt><tt>=EMPTY</tt> (63; 76%), <tt><a href="mdf_jr-feat-Person-obj.html">Person[obj]</a></tt><tt>=EMPTY</tt> (63; 76%), <tt><a href="mdf_jr-feat-Valency.html">Valency</a></tt><tt>=1</tt> (46; 55%).

`VERB` tokens may have the following values of `Tense`:

* `Pres` (35; 42% of non-empty `Tense`): <em>касан, Арьсян, корхтай, ёран, арьсят, ащи, валхтсамазь, ванан, ванат, ванондан</em>
* `Prt1` (44; 53% of non-empty `Tense`): <em>рамась, сявонь, Арьсень, Кончайне, Ладяйне, аварьгодонь, азондыне, архтозе, ашкордасть, валгсь</em>
* `Prt2` (4; 5% of non-empty `Tense`): <em>Молелексолеть, озалень, сизелень, шачелеть</em>
* `EMPTY` (24): <em>Касондярян, Панчк-ка, Рамаль, абонда, кадомс, келептелине, кеподев, кирде, кочкав, кунда</em>

<table>
  <tr><th>Paradigm <i>касомс</i></th><th><tt>Pres</tt></th><th><tt>Prt1</tt></th></tr>
  <tr><td><tt><tt><a href="mdf_jr-feat-Person-subj.html">Person[subj]</a></tt><tt>=1</tt></tt></td><td><em>касан</em></td><td></td></tr>
  <tr><td><tt><tt><a href="mdf_jr-feat-Person-subj.html">Person[subj]</a></tt><tt>=2</tt></tt></td><td><em>касат</em></td><td></td></tr>
  <tr><td><tt><tt><a href="mdf_jr-feat-Person-subj.html">Person[subj]</a></tt><tt>=3</tt></tt></td><td></td><td><em>кассь</em></td></tr>
</table>

`Tense` seems to be **lexical feature** of `VERB`. 94% lemmas (61) occur only with one value of `Tense`.

### `AUX`

14 <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> tokens (56% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="mdf_jr-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (12; 86%), <tt><a href="mdf_jr-feat-Number-subj.html">Number[subj]</a></tt><tt>=Sing</tt> (12; 86%), <tt><a href="mdf_jr-feat-VerbType.html">VerbType</a></tt><tt>=EMPTY</tt> (10; 71%), <tt><a href="mdf_jr-feat-Valency.html">Valency</a></tt><tt>=EMPTY</tt> (9; 64%), <tt><a href="mdf_jr-feat-Person-subj.html">Person[subj]</a></tt><tt>=3</tt> (8; 57%), <tt><a href="mdf_jr-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt> (8; 57%).

`AUX` tokens may have the following values of `Tense`:

* `Pres` (2; 14% of non-empty `Tense`): <em>ан, улян</em>
* `Prt1` (10; 71% of non-empty `Tense`): <em>ашень, ашезь, ашезе, ашесть, ульсь, эрявсть, эрявсь</em>
* `Prt2` (2; 14% of non-empty `Tense`): <em>ашель, улелеть</em>
* `EMPTY` (11): <em>аф, Афи, апак, афоль, эряв</em>

<table>
  <tr><th>Paradigm <i>улемс</i></th><th><tt>Pres</tt></th><th><tt>Prt1</tt></th><th><tt>Prt2</tt></th></tr>
  <tr><td><tt><tt><a href="mdf_jr-feat-Person-subj.html">Person[subj]</a></tt><tt>=1</tt></tt></td><td><em>улян</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="mdf_jr-feat-Person-subj.html">Person[subj]</a></tt><tt>=2</tt></tt></td><td></td><td></td><td><em>улелеть</em></td></tr>
  <tr><td><tt><tt><a href="mdf_jr-feat-Person-subj.html">Person[subj]</a></tt><tt>=3</tt></tt></td><td></td><td><em>ульсь</em></td><td></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="mdf_jr-dep-conj.html">conj</a></tt>]--> VERB</tt> (17; 74%),
<tt>VERB --[<tt><a href="mdf_jr-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (6; 86%),
<tt>VERB --[<tt><a href="mdf_jr-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="mdf_jr-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (1; 100%).

