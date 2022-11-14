---
layout: base
title:  'Statistics of VerbForm in UD_Malayalam-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Malayalam-UFAL: Features: `VerbForm`

This feature is universal but the values `Vnoun` are language-specific.
It occurs with 4 different values: `Fin`, `Inf`, `Part`, `Vnoun`.

48 tokens (24%) have a non-empty value of `VerbForm`.
36 types (29%) occur at least once with a non-empty value of `VerbForm`.
28 lemmas (26%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="ml_ufal-pos-VERB.html">VERB</a></tt> (31; 15% instances), <tt><a href="ml_ufal-pos-AUX.html">AUX</a></tt> (17; 8% instances).

### `VERB`

31 <tt><a href="ml_ufal-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="ml_ufal-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (30; 97%), <tt><a href="ml_ufal-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (29; 94%), <tt><a href="ml_ufal-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (18; 58%), <tt><a href="ml_ufal-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (17; 55%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (21; 68% of non-empty `VerbForm`): <em>കരുതുന്നു, വാങ്ങി, അടിച്ചു, അറിയാമോ, അറിയില്ല, എഴുതി, ഓടുന്നു, കളിക്കുകയാൺ, കഴികിച്ചു, കൈമാറി</em>
* `Inf` (4; 13% of non-empty `VerbForm`): <em>തിരഞ്ഞെടുക്കാൻ, നിർത്താൻ, പിടിച്ചുനിൽക്കാൻ, വരാൻ</em>
* `Part` (1; 3% of non-empty `VerbForm`): <em>ചെയ്ത</em>
* `Vnoun` (5; 16% of non-empty `VerbForm`): <em>എഴുതിയത്, ഓടിയതിനാൽ, ചെയ്യുന്നത്, നോക്കുന്നത്, വളർന്നത്</em>

<table>
  <tr><th>Paradigm <i>ചെയ്യുക</i></th><th><tt>Fin</tt></th><th><tt>Part</tt></th><th><tt>Vnoun</tt></th></tr>
  <tr><td><tt><tt><a href="ml_ufal-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt>|<tt><a href="ml_ufal-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="ml_ufal-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt>|<tt><a href="ml_ufal-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>ചെയ്തില്ല</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="ml_ufal-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt>|<tt><a href="ml_ufal-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td></td><td></td><td><em>ചെയ്യുന്നത്</em></td></tr>
  <tr><td><tt><tt><a href="ml_ufal-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt></tt></td><td></td><td><em>ചെയ്ത</em></td><td></td></tr>
</table>

### `AUX`

17 <tt><a href="ml_ufal-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="ml_ufal-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (17; 100%), <tt><a href="ml_ufal-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (14; 82%), <tt><a href="ml_ufal-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (13; 76%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (17; 100% of non-empty `VerbForm`): <em>ആണ്, ആണോ, അല്ല, ആയിരുന്നു, ആയില്ല, കഴിഞ്ഞില്ല, കഴിയും</em>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="ml_ufal-dep-conj.html">conj</a></tt>]--> VERB</tt> (1; 100%).

