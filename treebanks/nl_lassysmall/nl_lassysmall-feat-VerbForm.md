---
layout: base
title:  'Statistics of VerbForm in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Features: `VerbForm`

This feature is universal.
It occurs with 3 different values: `Fin`, `Inf`, `Part`.

35958 tokens (12%) have a non-empty value of `VerbForm`.
5726 types (18%) occur at least once with a non-empty value of `VerbForm`.
2901 lemmas (11%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (25721; 9% instances), <tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> (10237; 3% instances).

### `VERB`

25721 <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (12934; 50%), <tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (12934; 50%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (12787; 50% of non-empty `VerbForm`): <em>kwam, werd, had, heeft, was, zie, ging, is, komt, kreeg</em>
* `Inf` (4978; 19% of non-empty `VerbForm`): <em>maken, gaan, zien, laten, komen, nemen, worden, geven, houden, brengen</em>
* `Part` (7956; 31% of non-empty `VerbForm`): <em>genoemd, volgende, gemaakt, gebruikt, gezien, gehouden, opgericht, geworden, geboren, genomen</em>

<table>
  <tr><th>Paradigm <i>hebben</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>hebben</em></td><td><em>gehad, hebbende</em></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>had</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>heeft, heb, hebt</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>hadden</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>hebben</em></td><td></td><td></td></tr>
</table>

### `AUX`

10237 <tt><a href="nl_lassysmall-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7084; 69%), <tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (5378; 53%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (9418; 92% of non-empty `VerbForm`): <em>is, was, werd, wordt, zijn, werden, waren, zou, had, heeft</em>
* `Inf` (741; 7% of non-empty `VerbForm`): <em>worden, zijn, kunnen, moeten, hebben, mogen, zullen, krijgen, werden</em>
* `Part` (78; 1% of non-empty `VerbForm`): <em>geweest, zijnde, gehad, gekregen</em>

<table>
  <tr><th>Paradigm <i>zijn</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>zijn</em></td><td><em>geweest, zijnde</em></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>is, ben, bent, zij</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>waren</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_lassysmall-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_lassysmall-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>zijn</em></td><td></td><td></td></tr>
</table>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> VERB</tt> (1890; 71%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (353; 57%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-acl.html">acl</a></tt>]--> VERB</tt> (9; 56%),
<tt>AUX --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> AUX</tt> (3; 100%),
<tt>AUX --[<tt><a href="nl_lassysmall-dep-conj.html">conj</a></tt>]--> VERB</tt> (3; 100%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-csubj-outer.html">csubj:outer</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-nmod.html">nmod</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-appos.html">appos</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="nl_lassysmall-dep-cc.html">cc</a></tt>]--> VERB</tt> (1; 100%).

