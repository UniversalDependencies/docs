---
layout: base
title:  'Statistics of VerbForm in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Features: `VerbForm`

This feature is universal.
It occurs with 3 different values: `Fin`, `Inf`, `Part`.

9291 tokens (9%) have a non-empty value of `VerbForm`.
2352 types (15%) occur at least once with a non-empty value of `VerbForm`.
1411 lemmas (11%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (6727; 7% instances), <tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (2564; 3% instances).

### `VERB`

6727 <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (3686; 55% of non-empty `VerbForm`): <em>werd, zie, heeft, kwam, zijn, is, komt, telt, staat, was</em>
* `Inf` (1011; 15% of non-empty `VerbForm`): <em>worden, maken, gaan, laten, tekenen, geven, houden, zien, nemen, hebben</em>
* `Part` (2030; 30% of non-empty `VerbForm`): <em>genoemd, geboren, volgende, opgericht, gemaakt, gebruikt, geworden, gekozen, gelegen, verkozen</em>

<table>
  <tr><th>Paradigm <i>worden</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>worden</em></td><td><em>geworden</em></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>werd</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>wordt</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>werden</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>worden</em></td><td></td><td></td></tr>
</table>

### `AUX`

2564 <tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1922; 75%), <tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1383; 54%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (2446; 95% of non-empty `VerbForm`): <em>is, werd, was, wordt, zijn, werden, waren, worden, zou, kan</em>
* `Inf` (104; 4% of non-empty `VerbForm`): <em>worden, zijn, kunnen, hebben, moeten, mogen, zullen</em>
* `Part` (14; 1% of non-empty `VerbForm`): <em>geweest, zijnde</em>

<table>
  <tr><th>Paradigm <i>zijn</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>zijn</em></td><td><em>geweest, zijnde</em></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>is</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>waren</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>zijn</em></td><td></td><td></td></tr>
</table>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> VERB</tt> (404; 69%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (82; 62%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-orphan.html">orphan</a></tt>]--> VERB</tt> (3; 100%),
<tt>AUX --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-appos.html">appos</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-nmod.html">nmod</a></tt>]--> VERB</tt> (1; 100%).

