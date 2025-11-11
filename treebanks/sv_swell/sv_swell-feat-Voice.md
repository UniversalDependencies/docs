---
layout: base
title:  'Statistics of Voice in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

1632 tokens (19%) have a non-empty value of `Voice`.
480 types (24%) occur at least once with a non-empty value of `Voice`.
312 lemmas (20%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1124; 13% instances), <tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (508; 6% instances).

### `VERB`

1124 <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> tokens (97% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="sv_swell-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (672; 60%), <tt><a href="sv_swell-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (660; 59%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (1068; 95% of non-empty `Voice`): <em>har, tycker, kommer, ha, lära, blir, bor, göra, köpa, handlar</em>
* `Pass` (56; 5% of non-empty `Voice`): <em>utvecklats, används, behövs, dödas, göras, krävs, umgås, anmälts, anpassade, behandlas</em>
* `EMPTY` (36): <em>finns, fanns, frodades, frodas, hoppas, känns, syns, trivs, träffas, ändras</em>

<table>
  <tr><th>Paradigm <i>göra</i></th><th><tt>Act</tt></th><th><tt>Pass</tt></th></tr>
  <tr><td><tt><tt><a href="sv_swell-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_swell-feat-Tense.html">Tense</a></tt><tt>=Past</tt>|<tt><a href="sv_swell-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>gjorde, görde</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_swell-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="sv_swell-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="sv_swell-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>gör</em></td><td></td></tr>
  <tr><td><tt><tt><a href="sv_swell-feat-VerbForm.html">VerbForm</a></tt><tt>=Inf</tt></tt></td><td><em>göra</em></td><td><em>göras</em></td></tr>
  <tr><td><tt><tt><a href="sv_swell-feat-VerbForm.html">VerbForm</a></tt><tt>=Sup</tt></tt></td><td><em>gjort</em></td><td></td></tr>
</table>

`Voice` seems to be **lexical feature** of `VERB`. 91% lemmas (282) occur only with one value of `Voice`.

### `AUX`

508 <tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="sv_swell-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (472; 93%), <tt><a href="sv_swell-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (472; 93%), <tt><a href="sv_swell-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (410; 81%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (508; 100% of non-empty `Voice`): <em>är, kan, ska, har, var, skulle, vara, måste, vill, får</em>

`Voice` seems to be **lexical feature** of `AUX`. 100% lemmas (10) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="sv_swell-dep-aux.html">aux</a></tt>]--> AUX</tt> (219; 93%),
<tt>VERB --[<tt><a href="sv_swell-dep-conj.html">conj</a></tt>]--> VERB</tt> (149; 90%),
<tt>VERB --[<tt><a href="sv_swell-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (114; 85%),
<tt>VERB --[<tt><a href="sv_swell-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (78; 94%),
<tt>VERB --[<tt><a href="sv_swell-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (66; 92%),
<tt>VERB --[<tt><a href="sv_swell-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (18; 86%),
<tt>VERB --[<tt><a href="sv_swell-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (9; 100%),
<tt>VERB --[<tt><a href="sv_swell-dep-cop.html">cop</a></tt>]--> AUX</tt> (7; 100%),
<tt>VERB --[<tt><a href="sv_swell-dep-advcl-relcl.html">advcl:relcl</a></tt>]--> VERB</tt> (5; 83%),
<tt>VERB --[<tt><a href="sv_swell-dep-nsubj.html">nsubj</a></tt>]--> VERB</tt> (2; 100%).

