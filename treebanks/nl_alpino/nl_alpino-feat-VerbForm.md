---
layout: base
title:  'Statistics of VerbForm in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `VerbForm`

This feature is universal.
It occurs with 3 different values: `Fin`, `Inf`, `Part`.

24496 tokens (14%) have a non-empty value of `VerbForm`.
4598 types (20%) occur at least once with a non-empty value of `VerbForm`.
2500 lemmas (13%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (16819; 10% instances), <tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (7677; 5% instances).

### `VERB`

16819 <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (9242; 55%), <tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (9242; 55%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (7577; 45% of non-empty `VerbForm`): <em>heeft, gaat, wil, komt, is, kwam, hebben, zei, zijn, zegt</em>
* `Inf` (3956; 24% of non-empty `VerbForm`): <em>gaan, komen, maken, zien, doen, nemen, laten, hebben, worden, brengen</em>
* `Part` (5286; 31% of non-empty `VerbForm`): <em>gemaakt, gehouden, genomen, afgelopen, gekomen, gegeven, gesteld, geworden, gedaan, gezien</em>

<table>
  <tr><th>Paradigm <i>hebben</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>hebben</em></td><td><em>gehad</em></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>had</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>heeft, heb, hebt</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>hadden</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>hebben</em></td><td></td><td></td></tr>
</table>

### `AUX`

7677 <tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (5054; 66%), <tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (4754; 62%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (6668; 87% of non-empty `VerbForm`): <em>is, heeft, was, zijn, zal, wordt, werd, zou, kan, hebben</em>
* `Inf` (955; 12% of non-empty `VerbForm`): <em>worden, zijn, kunnen, moeten, hebben, mogen, zullen, krijgen, wezen</em>
* `Part` (54; 1% of non-empty `VerbForm`): <em>geweest, gekregen, geworden, zijnde</em>

<table>
  <tr><th>Paradigm <i>zijn</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>zijn, wezen</em></td><td><em>geweest, zijnde</em></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>is, ben, bent, ware, zij</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>waren</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>zijn</em></td><td></td><td></td></tr>
</table>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> VERB</tt> (765; 71%),
<tt>VERB --[<tt><a href="nl_alpino-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (217; 57%),
<tt>AUX --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> AUX</tt> (6; 100%),
<tt>VERB --[<tt><a href="nl_alpino-dep-orphan.html">orphan</a></tt>]--> VERB</tt> (4; 100%),
<tt>AUX --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="nl_alpino-dep-cc.html">cc</a></tt>]--> VERB</tt> (1; 100%).

