---
layout: base
title:  'Statistics of PronType in UD_Gothic-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Gothic-PROIEL: Features: `PronType`

This feature is universal.
It occurs with 4 different values: `Int`, `Prs`, `Rcp`, `Rel`.

6409 tokens (12%) have a non-empty value of `PronType`.
120 types (1%) occur at least once with a non-empty value of `PronType`.
41 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="got_proiel-pos-PRON.html">PRON</a></tt> (5860; 11% instances), <tt><a href="got_proiel-pos-ADV.html">ADV</a></tt> (549; 1% instances).

### `PRON`

5860 <tt><a href="got_proiel-pos-PRON.html">PRON</a></tt> tokens (81% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="got_proiel-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (4721; 81%), <tt><a href="got_proiel-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3866; 66%).

`PRON` tokens may have the following values of `PronType`:

* `Int` (275; 5% of non-empty `PronType`): <em>ƕa, ƕas, ƕo, ƕamma, ƕana, ƕis, ƕaþar, ƕarjis, ƕarja, ƕarjai</em>
* `Prs` (4684; 80% of non-empty `PronType`): <em>izwis, imma, ina, is, im, mis, ik, mik, jus, sik</em>
* `Rcp` (10; 0% of non-empty `PronType`): <em>anþar, anþaris, anþarana</em>
* `Rel` (891; 15% of non-empty `PronType`): <em>saei, þatei, þammei, þoei, þanei, þaiei, sei, þizei, þaimei, þizaiei</em>
* `EMPTY` (1366): <em>þata, sa, þo, ƕas, all, sumai, þamma, allai, allaim, þai</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (19) occur only with one value of `PronType`.

### `ADV`

549 <tt><a href="got_proiel-pos-ADV.html">ADV</a></tt> tokens (11% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="got_proiel-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (549; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (314; 57% of non-empty `PronType`): <em>niu, ƕaiwa, ibai, u, duƕe, ƕan, ƕar, ƕaþro, ƕe, ƕaþ</em>
* `Rel` (235; 43% of non-empty `PronType`): <em>swaswe, swe, þarei, þei, þadei, ei, þan, þanei, ƕaiwa, þaþroei</em>
* `EMPTY` (4592): <em>ni, þan, jah, auk, nu, unte, swe, swa, aftra, þanuh</em>

<table>
  <tr><th>Paradigm <i>ƕaiwa</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>ƕaiwa</em></td><td><em>ƕaiwa</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `ADV`. 91% lemmas (20) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="got_proiel-dep-det.html">det</a></tt>]--> PRON</tt> (57; 90%),
<tt>PRON --[<tt><a href="got_proiel-dep-conj.html">conj</a></tt>]--> PRON</tt> (21; 70%),
<tt>PRON --[<tt><a href="got_proiel-dep-orphan.html">orphan</a></tt>]--> PRON</tt> (8; 57%),
<tt>PRON --[<tt><a href="got_proiel-dep-nsubj.html">nsubj</a></tt>]--> PRON</tt> (7; 54%),
<tt>PRON --[<tt><a href="got_proiel-dep-appos.html">appos</a></tt>]--> ADV</tt> (1; 100%),
<tt>PRON --[<tt><a href="got_proiel-dep-expl-pv.html">expl:pv</a></tt>]--> PRON</tt> (1; 100%).

