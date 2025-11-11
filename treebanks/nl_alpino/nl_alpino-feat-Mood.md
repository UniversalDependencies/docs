---
layout: base
title:  'Statistics of Mood in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Features: `Mood`

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

19337 tokens (9%) have a non-empty value of `Mood`.
2213 types (8%) occur at least once with a non-empty value of `Mood`.
1394 lemmas (6%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (10666; 5% instances), <tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> (8671; 4% instances).

### `VERB`

10666 <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> tokens (49% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="nl_alpino-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (10666; 100%), <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (8469; 79%), <tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (6562; 62%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (122; 1% of non-empty `Mood`): <em>Noem, Geef, kom, zie, Kijk, Doe, Laat, Neem, Wacht, bewaar</em>
* `Ind` (10544; 99% of non-empty `Mood`): <em>heeft, komt, heet, wil, is, gaat, zei, kwam, noemt, hebben</em>
* `EMPTY` (11303): <em>komen, gaan, maken, zien, doen, gemaakt, gehouden, genoemd, nemen, laten</em>

<table>
  <tr><th>Paradigm <i>hebben</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>had</em></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>heeft, heb, hebt, hebbe</em></td><td><em>heb</em></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>hadden</em></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>hebben</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 97% lemmas (1355) occur only with one value of `Mood`.

### `AUX`

8671 <tt><a href="nl_alpino-pos-AUX.html">AUX</a></tt> tokens (88% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="nl_alpino-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (8671; 100%), <tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6828; 79%), <tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (6252; 72%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (1; 0% of non-empty `Mood`): <em>Wees</em>
* `Ind` (8670; 100% of non-empty `Mood`): <em>is, was, heeft, zijn, werd, wordt, zal, zou, kan, hebben</em>
* `EMPTY` (1147): <em>worden, zijn, kunnen, moeten, hebben, geweest, zullen, mogen, krijgen, wezen</em>

<table>
  <tr><th>Paradigm <i>zijn</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>was</em></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>is, ben, bent, ware, zij, Weest, zijn</em></td><td><em>Wees</em></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Past</tt></tt></td><td><em>waren</em></td><td></td></tr>
  <tr><td><tt><tt><a href="nl_alpino-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="nl_alpino-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>zijn</em></td><td></td></tr>
</table>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> VERB</tt> (508; 65%),
<tt>VERB --[<tt><a href="nl_alpino-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (240; 56%),
<tt>AUX --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> AUX</tt> (8; 100%),
<tt>VERB --[<tt><a href="nl_alpino-dep-csubj-outer.html">csubj:outer</a></tt>]--> VERB</tt> (7; 58%),
<tt>AUX --[<tt><a href="nl_alpino-dep-conj.html">conj</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="nl_alpino-dep-cc.html">cc</a></tt>]--> VERB</tt> (1; 100%).

