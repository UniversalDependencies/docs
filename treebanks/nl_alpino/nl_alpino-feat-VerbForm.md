---
layout: base
title:  'Statistics of VerbForm in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `VerbForm`

This feature is universal.
It occurs with 3 different values: `Fin`, `Inf`, `Part`.

31526 tokens (15%) have a non-empty value of `VerbForm`.
5080 types (19%) occur at least once with a non-empty value of `VerbForm`.
2436 lemmas (11%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (20941; 10% instances), <tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (10585; 5% instances).

### `VERB`

20941 <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (10884; 52%), <tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (10884; 52%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (10057; 48% of non-empty `VerbForm`): <em>heeft, komt, wil, is, gaat, zei, kwam, noemt, ligt, hebben</em>
* `Inf` (4694; 22% of non-empty `VerbForm`): <em>komen, gaan, maken, zien, doen, nemen, laten, zeggen, geven, brengen</em>
* `Part` (6190; 30% of non-empty `VerbForm`): <em>gemaakt, gehouden, genoemd, genomen, gedaan, afgelopen, gegeven, gekomen, gezien, gesteld</em>

<table>
  <tr><th>Paradigm <i>komen</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>komen</em></td><td><em>gekomen, komende, komend</em></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>kwam</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>komt, kom, kome</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>kwamen</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>komen</em></td><td></td><td></td></tr>
</table>

### `AUX`

10585 <tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7424; 70%), <tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (6680; 63%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (9288; 88% of non-empty `VerbForm`): <em>is, was, heeft, werd, wordt, zijn, zal, zou, kan, hebben</em>
* `Inf` (1167; 11% of non-empty `VerbForm`): <em>worden, zijn, kunnen, moeten, hebben, blijven, zullen, mogen, hoeven, krijgen</em>
* `Part` (130; 1% of non-empty `VerbForm`): <em>geweest, geworden, gebleven, gebleken, gekregen, zijnde, gehad</em>

<table>
  <tr><th>Paradigm <i>zijn</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>zijn</em></td><td><em>geweest, zijnde</em></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>is, ben, bent, ware, zij, Wees, zijn</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>waren</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>zijn</em></td><td></td><td></td></tr>
</table>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> VERB</tt> (818; 73%),
<tt>VERB --[<tt><a href="nl_alpino-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (265; 58%),
<tt>AUX --[<tt><a href="nl_alpino-dep-aux.html">aux</a></tt>]--> AUX</tt> (6; 100%),
<tt>VERB --[<tt><a href="nl_alpino-dep-nmod.html">nmod</a></tt>]--> VERB</tt> (4; 57%),
<tt>VERB --[<tt><a href="nl_alpino-dep-orphan.html">orphan</a></tt>]--> VERB</tt> (4; 100%),
<tt>AUX --[<tt><a href="nl_alpino-dep-aux-pass.html">aux:pass</a></tt>]--> AUX</tt> (1; 100%),
<tt>AUX --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> AUX</tt> (1; 100%),
<tt>AUX --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> VERB</tt> (1; 100%),
<tt>AUX --[<tt><a href="nl_alpino-dep-cop.html">cop</a></tt>]--> AUX</tt> (1; 100%),
<tt>VERB --[<tt><a href="nl_alpino-dep-cc.html">cc</a></tt>]--> VERB</tt> (1; 100%).

