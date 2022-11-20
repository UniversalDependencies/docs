---
layout: base
title:  'Statistics of Polarity in UD_Malayalam-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Malayalam-UFAL: Features: `Polarity`

This feature is universal.
It occurs with 2 different values: `Neg`, `Pos`.

48 tokens (24%) have a non-empty value of `Polarity`.
36 types (29%) occur at least once with a non-empty value of `Polarity`.
28 lemmas (26%) occur at least once with a non-empty value of `Polarity`.
The feature is used with 2 part-of-speech tags: <tt><a href="ml_ufal-pos-VERB.html">VERB</a></tt> (31; 15% instances), <tt><a href="ml_ufal-pos-AUX.html">AUX</a></tt> (17; 8% instances).

### `VERB`

31 <tt><a href="ml_ufal-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `VERB` and `Polarity` co-occurred: <tt><a href="ml_ufal-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (30; 97%), <tt><a href="ml_ufal-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (21; 68%), <tt><a href="ml_ufal-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (18; 58%), <tt><a href="ml_ufal-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (17; 55%).

`VERB` tokens may have the following values of `Polarity`:

* `Neg` (2; 6% of non-empty `Polarity`): <em>അറിയില്ല, ചെയ്തില്ല</em>
* `Pos` (29; 94% of non-empty `Polarity`): <em>കരുതുന്നു, വാങ്ങി, അടിച്ചു, അറിയാമോ, എഴുതി, എഴുതിയത്, ഓടിയതിനാൽ, ഓടുന്നു, കളിക്കുകയാൺ, കഴികിച്ചു</em>

<table>
  <tr><th>Paradigm <i>ചെയ്യുക</i></th><th><tt>Pos</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt><tt><a href="ml_ufal-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="ml_ufal-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ml_ufal-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="ml_ufal-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>ചെയ്തില്ല</em></td></tr>
  <tr><td><tt><tt><a href="ml_ufal-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="ml_ufal-feat-VerbForm.html">VerbForm</a></tt><tt>=Vnoun</tt></tt></td><td><em>ചെയ്യുന്നത്</em></td><td></td></tr>
  <tr><td><tt><tt><a href="ml_ufal-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>ചെയ്ത</em></td><td></td></tr>
</table>

`Polarity` seems to be **lexical feature** of `VERB`. 96% lemmas (25) occur only with one value of `Polarity`.

### `AUX`

17 <tt><a href="ml_ufal-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `AUX` and `Polarity` co-occurred: <tt><a href="ml_ufal-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (17; 100%), <tt><a href="ml_ufal-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (17; 100%), <tt><a href="ml_ufal-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (13; 76%).

`AUX` tokens may have the following values of `Polarity`:

* `Neg` (3; 18% of non-empty `Polarity`): <em>ആണോ, ആയില്ല, കഴിഞ്ഞില്ല</em>
* `Pos` (14; 82% of non-empty `Polarity`): <em>ആണ്, ആണോ, അല്ല, ആയിരുന്നു, കഴിയും</em>

<table>
  <tr><th>Paradigm <i>ആക്</i></th><th><tt>Pos</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt><tt><a href="ml_ufal-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>ആയിരുന്നു</em></td><td><em>ആയില്ല</em></td></tr>
  <tr><td><tt><tt><a href="ml_ufal-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>ആണ്, ആണോ, അല്ല</em></td><td><em>ആണോ</em></td></tr>
  <tr><td><tt><tt><a href="ml_ufal-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="ml_ufal-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>ആണ്</em></td><td></td></tr>
</table>

## Relations with Agreement in `Polarity`

The 10 most frequent relations where parent and child node agree in `Polarity`:
<tt>VERB --[<tt><a href="ml_ufal-dep-aux.html">aux</a></tt>]--> AUX</tt> (6; 75%),
<tt>VERB --[<tt><a href="ml_ufal-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="ml_ufal-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="ml_ufal-dep-conj.html">conj</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="ml_ufal-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (1; 100%).

