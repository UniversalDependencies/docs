---
layout: base
title:  'Statistics of NumType in UD_Old_French-PROFITEROLE'
udver: '2'
---

## Treebank Statistics: UD_Old_French-PROFITEROLE: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

1437 tokens (1%) have a non-empty value of `NumType`.
206 types (1%) occur at least once with a non-empty value of `NumType`.
43 lemmas (1%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="fro_profiterole-pos-NUM.html">NUM</a></tt> (1044; 0% instances), <tt><a href="fro_profiterole-pos-PRON.html">PRON</a></tt> (344; 0% instances), <tt><a href="fro_profiterole-pos-ADJ.html">ADJ</a></tt> (37; 0% instances), <tt><a href="fro_profiterole-pos-DET.html">DET</a></tt> (12; 0% instances).

### `NUM`

1044 <tt><a href="fro_profiterole-pos-NUM.html">NUM</a></tt> tokens (99% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (1042; 100% of non-empty `NumType`): <em>deus, .ii., trois, quatre, dous, cent, dis, dui, set, .iiii.</em>
* `Ord` (2; 0% of non-empty `NumType`): <em>tierce</em>
* `EMPTY` (8): <em>dis, quarte, .iiij., .xxx.m., m., quint</em>

`NumType` seems to be **lexical feature** of `NUM`. 97% lemmas (28) occur only with one value of `NumType`.

### `PRON`

344 <tt><a href="fro_profiterole-pos-PRON.html">PRON</a></tt> tokens (1% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="fro_profiterole-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (344; 100%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (279; 81% of non-empty `NumType`): <em>milie, trois, dui, andui, .ii., deus, troi, un, uns, quatre</em>
* `Ord` (65; 19% of non-empty `NumType`): <em>tierz, quarte, terce, disme, quarz, sedme, noefme, premere, quart, quinte</em>
* `EMPTY` (29379): <em>il, qui, li, vos, s', le, l', je, se, que</em>

`NumType` seems to be **lexical feature** of `PRON`. 95% lemmas (37) occur only with one value of `NumType`.

### `ADJ`

37 <tt><a href="fro_profiterole-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `NumType`.

`ADJ` tokens may have the following values of `NumType`:

* `Card` (15; 41% of non-empty `NumType`): <em>premereins, dui, .iii., .vii., ambesdous, anbedui, premer, premerein, troi</em>
* `Ord` (22; 59% of non-empty `NumType`): <em>premiers, premiere, premier, quarte, tierche, premeraine, premeraines, primiers, tier, tierz</em>
* `EMPTY` (7536): <em>grant, granz, saint, bele, tel, haut, biax, bel, autre, bone</em>

<table>
  <tr><th>Paradigm <i>premier1</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt></tt></td><td><em>premer</em></td><td><em>premiers, premier, premiere</em></td></tr>
</table>

### `DET`

12 <tt><a href="fro_profiterole-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="fro_profiterole-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (12; 100%), <tt><a href="fro_profiterole-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (12; 100%), <tt><a href="fro_profiterole-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (12; 100%).

`DET` tokens may have the following values of `NumType`:

* `Card` (5; 42% of non-empty `NumType`): <em>.I., .XXIIII., .l., ambdui</em>
* `Ord` (7; 58% of non-empty `NumType`): <em>tierz, premiere</em>
* `EMPTY` (22957): <em>le, li, la, les, l', un, sa, son, une, ses</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="fro_profiterole-dep-flat.html">flat</a></tt>]--> NUM</tt> (91; 100%),
<tt>NUM --[<tt><a href="fro_profiterole-dep-conj.html">conj</a></tt>]--> NUM</tt> (30; 100%),
<tt>PRON --[<tt><a href="fro_profiterole-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (17; 81%),
<tt>PRON --[<tt><a href="fro_profiterole-dep-amod.html">amod</a></tt>]--> NUM</tt> (16; 80%),
<tt>NUM --[<tt><a href="fro_profiterole-dep-conj.html">conj</a></tt>]--> PRON</tt> (8; 100%),
<tt>NUM --[<tt><a href="fro_profiterole-dep-flat.html">flat</a></tt>]--> PRON</tt> (4; 100%),
<tt>NUM --[<tt><a href="fro_profiterole-dep-amod.html">amod</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="fro_profiterole-dep-dislocated.html">dislocated</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="fro_profiterole-dep-flat.html">flat</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="fro_profiterole-dep-orphan.html">orphan</a></tt>]--> PRON</tt> (1; 100%).

