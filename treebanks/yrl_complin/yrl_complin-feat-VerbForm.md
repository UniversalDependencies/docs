---
layout: base
title:  'Statistics of VerbForm in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Features: `VerbForm`

This feature is universal.
It occurs with 2 different values: `Fin`, `Inf`.

1509 tokens (18%) have a non-empty value of `VerbForm`.
534 types (40%) occur at least once with a non-empty value of `VerbForm`.
271 lemmas (27%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (1302; 15% instances), <tt><a href="yrl_complin-pos-AUX.html">AUX</a></tt> (207; 2% instances).

### `VERB`

1302 <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> tokens (96% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="yrl_complin-feat-Person.html">Person</a></tt><tt>=3</tt> (849; 65%), <tt><a href="yrl_complin-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (806; 62%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (1299; 100% of non-empty `VerbForm`): <em>usika, umaã, unheẽ, usú, umunhã, umbeú, upisika, urikú, uri, upitá</em>
* `Inf` (3; 0% of non-empty `VerbForm`): <em>mukaẽ, suruka, umpinima</em>
* `EMPTY` (54): <em>rurí, pusé, akanhemu, kweré, piaíwa, arasí, kiá, akangaíma, apuã, apú</em>

<table>
  <tr><th>Paradigm <i>mpinima</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>umpinima</em></td></tr>
  <tr><td><tt><tt><a href="yrl_complin-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="yrl_complin-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>ampinima</em></td><td></td></tr>
  <tr><td><tt><tt><a href="yrl_complin-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="yrl_complin-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>yampinima</em></td><td></td></tr>
  <tr><td><tt><tt><a href="yrl_complin-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>umpinima</em></td><td></td></tr>
</table>

`VerbForm` seems to be **lexical feature** of `VERB`. 99% lemmas (268) occur only with one value of `VerbForm`.

### `AUX`

207 <tt><a href="yrl_complin-pos-AUX.html">AUX</a></tt> tokens (100% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="yrl_complin-feat-Compound.html">Compound</a></tt><tt>=EMPTY</tt> (173; 84%), <tt><a href="yrl_complin-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (135; 65%).

`AUX` tokens may have the following values of `VerbForm`:

* `Fin` (170; 82% of non-empty `VerbForm`): <em>uikú, usú, asú, aikú, yasú, upuderi, yaikú, pesú, reikú, resú</em>
* `Inf` (37; 18% of non-empty `VerbForm`): <em>kwáu, putari</em>

<table>
  <tr><th>Paradigm <i>putari</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>putari</em></td></tr>
  <tr><td><tt><tt><a href="yrl_complin-feat-Compound.html">Compound</a></tt><tt>=Yes</tt></tt></td><td></td><td><em>putari</em></td></tr>
  <tr><td><tt><tt><a href="yrl_complin-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="yrl_complin-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>aputari</em></td><td></td></tr>
  <tr><td><tt><tt><a href="yrl_complin-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="yrl_complin-feat-Person.html">Person</a></tt><tt>=2</tt></tt></td><td><em>reputari</em></td><td></td></tr>
  <tr><td><tt><tt><a href="yrl_complin-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>uputari</em></td><td></td></tr>
</table>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<tt><a href="yrl_complin-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (202; 96%),
<tt>VERB --[<tt><a href="yrl_complin-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (148; 95%),
<tt>VERB --[<tt><a href="yrl_complin-dep-aux.html">aux</a></tt>]--> AUX</tt> (105; 70%),
<tt>VERB --[<tt><a href="yrl_complin-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (94; 97%),
<tt>VERB --[<tt><a href="yrl_complin-dep-conj.html">conj</a></tt>]--> VERB</tt> (44; 98%),
<tt>VERB --[<tt><a href="yrl_complin-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (38; 93%),
<tt>VERB --[<tt><a href="yrl_complin-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="yrl_complin-dep-obl.html">obl</a></tt>]--> VERB</tt> (1; 100%).

