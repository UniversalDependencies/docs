---
layout: base
title:  'Statistics of VerbForm in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Features: `VerbForm`

This feature is universal.
It occurs with 3 different values: `Fin`, `Inf`, `Part`.

9291 tokens (9%) have a non-empty value of `VerbForm`.
2350 types (15%) occur at least once with a non-empty value of `VerbForm`.
1292 lemmas (10%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (6496; 7% instances), <tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (2795; 3% instances).

### `VERB`

6496 <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (3503; 54% of non-empty `VerbForm`): <em>zie, heeft, kwam, is, zijn, komt, telt, staat, was, wint</em>
* `Inf` (987; 15% of non-empty `VerbForm`): <em>maken, gaan, laten, tekenen, geven, houden, zien, nemen, hebben, komen</em>
* `Part` (2006; 31% of non-empty `VerbForm`): <em>genoemd, volgende, opgericht, gemaakt, gebruikt, gekozen, gelegen, verkozen, bestaande, geboren</em>

<table>
  <tr><th>Paradigm <i>zijn</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>zijn</em></td><td><em>gewezen, geweest, zijnde</em></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>is, ben, zij</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>waren</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>zijn</em></td><td></td><td></td></tr>
</table>

### `AUX`

2795 <tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2077; 74%), <tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (1428; 51%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (2629; 94% of non-empty `VerbForm`): <em>is, werd, was, wordt, zijn, werden, worden, waren, zou, kan</em>
* `Inf` (132; 5% of non-empty `VerbForm`): <em>worden, zijn, kunnen, hebben, moeten, blijven, heten, mogen, zullen</em>
* `Part` (34; 1% of non-empty `VerbForm`): <em>geworden, geweest, gebleven, zijnde, geheten</em>

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
<tt>VERB --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> VERB</tt> (363; 68%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (79; 63%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-orphan.html">orphan</a></tt>]--> VERB</tt> (3; 100%),
<tt>AUX --[<tt><a href="nl_lassysmall-dep-cop.html">cop</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-appos.html">appos</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-nmod.html">nmod</a></tt>]--> VERB</tt> (1; 100%).

