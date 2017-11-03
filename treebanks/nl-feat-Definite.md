---
layout: base
title:  'Statistics of Definite in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Features: `Definite`

This feature is universal.
It occurs with 2 different values: `Def`, `Ind`.

25764 tokens (12%) have a non-empty value of `Definite`.
1025 types (4%) occur at least once with a non-empty value of `Definite`.
990 lemmas (5%) occur at least once with a non-empty value of `Definite`.
The feature is used with 4 part-of-speech tags: <tt><a href="nl-pos-DET.html">DET</a></tt> (21403; 10% instances), <tt><a href="nl-pos-NUM.html">NUM</a></tt> (3303; 2% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (536; 0% instances), <tt><a href="nl-pos-X.html">X</a></tt> (522; 0% instances).

### `DET`

21403 <tt><a href="nl-pos-DET.html">DET</a></tt> tokens (95% of all `DET` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `DET` and `Definite` co-occurred: <tt><a href="nl-feat-PronType.html">PronType</a></tt><tt>=Art</tt> (21403; 100%), <tt><a href="nl-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (17117; 80%), <tt><a href="nl-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (16906; 79%).

`DET` tokens may have the following values of `Definite`:

* `Def` (16910; 79% of non-empty `Definite`): <em>de, het, der, 't, des, den</em>
* `Ind` (4493; 21% of non-empty `Definite`): <em>een, 'n, BEPALEN, CERN, BEÏNVLOEDEN, ONTVANGEN</em>
* `EMPTY` (1105): <em>veel, meer, hoeveel, minder, weinig, tot, vele, meeste, zoveel, velen</em>

`Definite` seems to be **lexical feature** of `DET`. 100% lemmas (19) occur only with one value of `Definite`.

### `NUM`

3303 <tt><a href="nl-pos-NUM.html">NUM</a></tt> tokens (86% of all `NUM` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `NUM` and `Definite` co-occurred: <tt><a href="nl-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (3303; 100%), <tt><a href="nl-feat-NumForm.html">NumForm</a></tt><tt>=EMPTY</tt> (3303; 100%).

`NUM` tokens may have the following values of `Definite`:

* `Def` (3303; 100% of non-empty `Definite`): <em>twee, drie, vier, miljoen, vijf, tien, beide, zes, acht, uur</em>
* `EMPTY` (556): <em>1, 2, 12, 8, 15, 3, 5, 10, 11, 13</em>

`Definite` seems to be **lexical feature** of `NUM`. 100% lemmas (789) occur only with one value of `Definite`.

### `ADJ`

536 <tt><a href="nl-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `ADJ` and `Definite` co-occurred: <tt><a href="nl-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (536; 100%), <tt><a href="nl-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (536; 100%), <tt><a href="nl-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (536; 100%).

`ADJ` tokens may have the following values of `Definite`:

* `Def` (536; 100% of non-empty `Definite`): <em>eerste, tweede, derde, vierde, vijfde, zevende, 19e, dertiende, negende, zesde</em>
* `EMPTY` (12342): <em>nieuwe, grote, goed, Nederlandse, laatste, groot, verder, goede, Amerikaanse, lang</em>

`Definite` seems to be **lexical feature** of `ADJ`. 100% lemmas (59) occur only with one value of `Definite`.

### `X`

522 <tt><a href="nl-pos-X.html">X</a></tt> tokens (11% of all `X` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `X` and `Definite` co-occurred: <tt><a href="nl-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (386; 74%), <tt><a href="nl-feat-Number.html">Number</a></tt><tt>=Sing</tt> (380; 73%), <tt><a href="nl-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (378; 72%).

`X` tokens may have the following values of `Definite`:

* `Def` (522; 100% of non-empty `Definite`): <em>flo, het, 's, half, avonds, meest, kwart, middags, morgens, nachts</em>
* `EMPTY` (4113): <em>van, het, op, voor, met, ten, aan, een, onder, te</em>

`Definite` seems to be **lexical feature** of `X`. 100% lemmas (150) occur only with one value of `Definite`.

## Relations with Agreement in `Definite`

The 10 most frequent relations where parent and child node agree in `Definite`:
<tt>X --[<tt><a href="nl-dep-compound.html">compound</a></tt>]--> X</tt> (161; 100%),
<tt>NUM --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> NUM</tt> (112; 97%),
<tt>NUM --[<tt><a href="nl-dep-det.html">det</a></tt>]--> DET</tt> (39; 65%),
<tt>NUM --[<tt><a href="nl-dep-nmod.html">nmod</a></tt>]--> X</tt> (31; 100%),
<tt>X --[<tt><a href="nl-dep-obl.html">obl</a></tt>]--> NUM</tt> (13; 57%),
<tt>ADJ --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> ADJ</tt> (10; 71%),
<tt>NUM --[<tt><a href="nl-dep-cc.html">cc</a></tt>]--> NUM</tt> (6; 100%),
<tt>X --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> X</tt> (5; 100%),
<tt>DET --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> DET</tt> (3; 60%),
<tt>X --[<tt><a href="nl-dep-nsubj.html">nsubj</a></tt>]--> X</tt> (2; 100%).

