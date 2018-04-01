---
layout: base
title:  'Statistics of Voice in UD_Belarusian'
udver: '2'
---

## Treebank Statistics: UD_Belarusian: Features: `Voice`

This feature is universal but the values `Mid` are language-specific.
It occurs with 3 different values: `Act`, `Mid`, `Pass`.

901 tokens (11%) have a non-empty value of `Voice`.
621 types (20%) occur at least once with a non-empty value of `Voice`.
426 lemmas (19%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: <tt><a href="be-pos-VERB.html">VERB</a></tt> (833; 10% instances), <tt><a href="be-pos-AUX.html">AUX</a></tt> (68; 1% instances).

### `VERB`

833 <tt><a href="be-pos-VERB.html">VERB</a></tt> tokens (99% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="be-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (591; 71%), <tt><a href="be-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (584; 70%), <tt><a href="be-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (582; 70%), <tt><a href="be-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (542; 65%), <tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt> (446; 54%), <tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Perf</tt> (419; 50%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (621; 75% of non-empty `Voice`): <em>можа, перадаваў, паведамілі, мае, маюць, адзначыў, заявіў, паведамляў, размаўляць, Гавары</em>
* `Mid` (140; 17% of non-empty `Voice`): <em>з'яўляецца, вярнуцца, з'яўляюцца, гаворыцца, знаходзіцца, атрымалася, займацца, застаецца, здаецца, знаходзіліся</em>
* `Pass` (72; 9% of non-empty `Voice`): <em>прыведзены, налічаная, намаляваны, Арыштаваныя, Здзейснена, Пашкоджаны, абноўлены, абсталяваных, абумоўленую, адведзеных</em>
* `EMPTY` (6): <em>трэба, варта, мага, няма, што</em>

<table>
  <tr><th>Paradigm <i>стаць</i></th><th><tt>Act</tt></th><th><tt>Mid</tt></th></tr>
  <tr><td><tt><tt><a href="be-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="be-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="be-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="be-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>стаў</em></td><td></td></tr>
  <tr><td><tt><tt><a href="be-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="be-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="be-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="be-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>стала</em></td><td><em>стала</em></td></tr>
  <tr><td><tt><tt><a href="be-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="be-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="be-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="be-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>стане</em></td><td></td></tr>
  <tr><td><tt><tt><a href="be-feat-VerbForm.html">VerbForm</a></tt><tt>=Inf</tt></tt></td><td><em>стаць</em></td><td><em>стаць</em></td></tr>
</table>

`Voice` seems to be **lexical feature** of `VERB`. 95% lemmas (405) occur only with one value of `Voice`.

### `AUX`

68 <tt><a href="be-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="be-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (65; 96%), <tt><a href="be-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (65; 96%), <tt><a href="be-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (46; 68%), <tt><a href="be-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (44; 65%), <tt><a href="be-feat-Number.html">Number</a></tt><tt>=Sing</tt> (43; 63%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (68; 100% of non-empty `Voice`): <em>будзе, было, будуць, былі, была, буду, быць, быў, будзем, ёсць</em>

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="be-dep-conj.html">conj</a></tt>]--> VERB</tt> (58; 70%),
<tt>VERB --[<tt><a href="be-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (51; 66%),
<tt>VERB --[<tt><a href="be-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (44; 63%),
<tt>VERB --[<tt><a href="be-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (31; 78%),
<tt>VERB --[<tt><a href="be-dep-aux.html">aux</a></tt>]--> AUX</tt> (16; 64%),
<tt>VERB --[<tt><a href="be-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (13; 52%),
<tt>VERB --[<tt><a href="be-dep-amod.html">amod</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="be-dep-case.html">case</a></tt>]--> VERB</tt> (1; 100%).

