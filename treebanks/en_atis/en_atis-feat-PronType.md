---
layout: base
title:  'Statistics of PronType in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Features: `PronType`

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Int`, `Prs`, `Rel`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

8896 tokens (14%) have a non-empty value of `PronType`.
36 types (4%) occur at least once with a non-empty value of `PronType`.
30 lemmas (4%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="en_atis-pos-DET.html">DET</a></tt> (4885; 8% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (3828; 6% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (183; 0% instances).

### `DET`

4885 <tt><a href="en_atis-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

`DET` tokens may have the following values of `PronType`:

* `Art` (4174; 85% of non-empty `PronType`): <em>the, a, all, any, an, that, this, no, some, both</em>
* `Int,Rel` (676; 14% of non-empty `PronType`): <em>what, which, like, that</em>
* `Prs` (35; 1% of non-empty `PronType`): <em>your, my, their</em>

<table>
  <tr><th>Paradigm <i>what</i></th><th><tt>Int,Rel</tt></th><th><tt>Art</tt></th></tr>
  <tr><td><tt></tt></td><td><em>what</em></td><td><em>what</em></td></tr>
</table>

### `PRON`

3828 <tt><a href="en_atis-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

`PRON` tokens may have the following values of `PronType`:

* `Dem` (240; 6% of non-empty `PronType`): <em>there</em>
* `Int,Rel` (934; 24% of non-empty `PronType`): <em>what, which, that, who, this, those</em>
* `Prs` (2654; 69% of non-empty `PronType`): <em>me, i, you, it, 's, one, we, they, this, each</em>

<table>
  <tr><th>Paradigm <i>there</i></th><th><tt>Prs</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt></tt></td><td><em>there</em></td><td><em>there</em></td></tr>
</table>

### `ADV`

183 <tt><a href="en_atis-pos-ADV.html">ADV</a></tt> tokens (32% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="en_atis-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (183; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int,Rel` (183; 100% of non-empty `PronType`): <em>how, where, when</em>
* `EMPTY` (383): <em>o'clock, now, first, much, back, also, early, then, only, again</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<tt><a href="en_atis-dep-reparandum.html">reparandum</a></tt>]--> DET</tt> (2; 67%),
<tt>PRON --[<tt><a href="en_atis-dep-conj.html">conj</a></tt>]--> PRON</tt> (2; 100%).

