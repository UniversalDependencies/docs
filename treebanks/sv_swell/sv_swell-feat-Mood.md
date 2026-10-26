---
layout: base
title:  'Statistics of Mood in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Features: `Mood`

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

1491 tokens (14%) have a non-empty value of `Mood`.
307 types (14%) occur at least once with a non-empty value of `Mood`.
212 lemmas (13%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (881; 8% instances), <tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (610; 6% instances).

### `VERB`

881 <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> tokens (60% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="sv_swell-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (881; 100%), <tt><a href="sv_swell-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (799; 91%), <tt><a href="sv_swell-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (740; 84%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (13; 1% of non-empty `Mood`): <em>Berätta, Ha, Hoppas, Kom, Krama, Sluta, Vakna, använd, bygg, försätt</em>
* `Ind` (868; 99% of non-empty `Mood`): <em>har, tycker, finns, kommer, behöver, blir, bor, ser, vill, gör</em>
* `EMPTY` (579): <em>ha, lära, ta, göra, köpa, få, gå, bli, klä, förstå</em>

<table>
  <tr><th>Paradigm <i>ha</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><tt><a href="sv_swell-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>hade</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_swell-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>har</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>Ha</em></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 96% lemmas (201) occur only with one value of `Mood`.

### `AUX`

610 <tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> tokens (92% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="sv_swell-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (610; 100%), <tt><a href="sv_swell-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (610; 100%), <tt><a href="sv_swell-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (532; 87%).

`AUX` tokens may have the following values of `Mood`:

* `Ind` (610; 100% of non-empty `Mood`): <em>är, kan, ska, var, har, måste, skulle, vill, får, kommer</em>
* `EMPTY` (53): <em>vara, kunna, få, blivit, varit, bli, ha, här, vilja, villja</em>

`Mood` seems to be **lexical feature** of `AUX`. 100% lemmas (10) occur only with one value of `Mood`.

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="sv_swell-dep-conj.html">conj</a></tt>]--> VERB</tt> (83; 57%),
<tt>VERB --[<tt><a href="sv_swell-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (18; 64%),
<tt>VERB --[<tt><a href="sv_swell-dep-advcl-relcl.html">advcl:relcl</a></tt>]--> VERB</tt> (4; 67%),
<tt>VERB --[<tt><a href="sv_swell-dep-conj.html">conj</a></tt>]--> AUX</tt> (2; 100%),
<tt>VERB --[<tt><a href="sv_swell-dep-nsubj.html">nsubj</a></tt>]--> VERB</tt> (1; 100%).

