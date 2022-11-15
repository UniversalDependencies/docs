---
layout: base
title:  'Statistics of Tense in UD_Malayalam-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Malayalam-UFAL: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

42 tokens (21%) have a non-empty value of `Tense`.
30 types (24%) occur at least once with a non-empty value of `Tense`.
23 lemmas (21%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="ml_ufal-pos-VERB.html">VERB</a></tt> (25; 12% instances), <tt><a href="ml_ufal-pos-AUX.html">AUX</a></tt> (17; 8% instances).

### `VERB`

25 <tt><a href="ml_ufal-pos-VERB.html">VERB</a></tt> tokens (81% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="ml_ufal-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (24; 96%), <tt><a href="ml_ufal-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (23; 92%), <tt><a href="ml_ufal-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (20; 80%), <tt><a href="ml_ufal-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (18; 72%), <tt><a href="ml_ufal-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (17; 68%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (14; 56% of non-empty `Tense`): <em>വാങ്ങി, അടിച്ചു, അറിയില്ല, എഴുതി, എഴുതിയത്, ഓടിയതിനാൽ, കഴികിച്ചു, കൈമാറി, ചെയ്തില്ല, നേടി</em>
* `Pres` (11; 44% of non-empty `Tense`): <em>കരുതുന്നു, അറിയാമോ, ഓടുന്നു, കളിക്കുകയാൺ, ചീകിക്കൊണ്ടിരിക്കണം, ചെയ്യുന്നത്, നോക്കുന്നത്, പെയ്യുകയാണ്, പോകണമോ, വായിക്കുന്നു</em>
* `EMPTY` (6): <em>ചെയ്ത, തിരഞ്ഞെടുക്കാൻ, തുറക്കൂ, നിർത്താൻ, പിടിച്ചുനിൽക്കാൻ, വരാൻ</em>

<table>
  <tr><th>Paradigm <i>ചെയ്യുക</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="ml_ufal-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="ml_ufal-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ml_ufal-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt>|<tt><a href="ml_ufal-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td></td><td><em>ചെയ്തില്ല</em></td></tr>
  <tr><td><tt><tt><a href="ml_ufal-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt>|<tt><a href="ml_ufal-feat-VerbForm.html">VerbForm</a></tt><tt>=Vnoun</tt></tt></td><td><em>ചെയ്യുന്നത്</em></td><td></td></tr>
</table>

`Tense` seems to be **lexical feature** of `VERB`. 90% lemmas (19) occur only with one value of `Tense`.

### `AUX`

17 <tt><a href="ml_ufal-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="ml_ufal-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (17; 100%), <tt><a href="ml_ufal-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (17; 100%), <tt><a href="ml_ufal-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (14; 82%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (1; 6% of non-empty `Tense`): <em>കഴിയും</em>
* `Past` (3; 18% of non-empty `Tense`): <em>ആയിരുന്നു, ആയില്ല, കഴിഞ്ഞില്ല</em>
* `Pres` (13; 76% of non-empty `Tense`): <em>ആണ്, ആണോ, അല്ല</em>

<table>
  <tr><th>Paradigm <i>ആക്</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="ml_ufal-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt></tt></td><td><em>ആണോ</em></td><td><em>ആയില്ല</em></td></tr>
  <tr><td><tt><tt><a href="ml_ufal-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt></tt></td><td><em>ആണ്, ആണോ, അല്ല</em></td><td><em>ആയിരുന്നു</em></td></tr>
  <tr><td><tt><tt><a href="ml_ufal-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt>|<tt><a href="ml_ufal-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>ആണ്</em></td><td></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="ml_ufal-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="ml_ufal-dep-conj.html">conj</a></tt>]--> VERB</tt> (1; 100%).

