---
layout: base
title:  'Statistics of Mood in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Features: `Mood`

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

1705 tokens (13%) have a non-empty value of `Mood`.
194 types (12%) occur at least once with a non-empty value of `Mood`.
163 lemmas (13%) occur at least once with a non-empty value of `Mood`.
The feature is used with 3 part-of-speech tags: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1175; 9% instances), <tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (529; 4% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).

### `VERB`

1175 <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> tokens (80% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="no_nynorsklia-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (1175; 100%), <tt><a href="no_nynorsklia-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (961; 82%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (3; 0% of non-empty `Mood`): <em>hjelp, prat, reis</em>
* `Ind` (1172; 100% of non-empty `Mood`): <em>var, hadde, kom, køyrde, gjekk, veit, er, dreiv, blei, fekk</em>
* `EMPTY` (298): <em>seie, køyre, gå, komme, vere, begynne, gjere, vore, få, drive</em>

<table>
  <tr><th>Paradigm <i>reise</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><tt><a href="no_nynorsklia-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>reiste</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>reis</em></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 99% lemmas (160) occur only with one value of `Mood`.

### `AUX`

529 <tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> tokens (95% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="no_nynorsklia-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (529; 100%), <tt><a href="no_nynorsklia-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (385; 73%).

`AUX` tokens may have the following values of `Mood`:

* `Ind` (529; 100% of non-empty `Mood`): <em>var, er, har, måtte, kunne, kan, skulle, skal, blei, hadde</em>
* `EMPTY` (29): <em>vere, vore, få, blitt, fått, ha</em>

### `NOUN`

1 <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `NOUN` and `Mood` co-occurred: <tt><a href="no_nynorsklia-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="no_nynorsklia-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1; 100%), <tt><a href="no_nynorsklia-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1; 100%).

`NOUN` tokens may have the following values of `Mood`:

* `Ind` (1; 100% of non-empty `Mood`): <em>husa</em>
* `EMPTY` (1258): <em>byen, mjølka, år, båten, krigen, tid, folk, måten, båt, båtar</em>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="no_nynorsklia-dep-conj.html">conj</a></tt>]--> VERB</tt> (174; 80%),
<tt>VERB --[<tt><a href="no_nynorsklia-dep-parataxis-deletion.html">parataxis:deletion</a></tt>]--> VERB</tt> (45; 85%),
<tt>VERB --[<tt><a href="no_nynorsklia-dep-reparandum.html">reparandum</a></tt>]--> VERB</tt> (44; 94%),
<tt>VERB --[<tt><a href="no_nynorsklia-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (38; 73%),
<tt>VERB --[<tt><a href="no_nynorsklia-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (21; 57%),
<tt>VERB --[<tt><a href="no_nynorsklia-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (4; 57%),
<tt>NOUN --[<tt><a href="no_nynorsklia-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (1; 100%).

