---
layout: base
title:  'Statistics of NumType in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

5402 tokens (3%) have a non-empty value of `NumType`.
1053 types (4%) occur at least once with a non-empty value of `NumType`.
1006 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: <tt><a href="nl-pos-NUM.html">NUM</a></tt> (3859; 2% instances), <tt><a href="nl-pos-DET.html">DET</a></tt> (1007; 0% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (536; 0% instances).

### `NUM`

3859 <tt><a href="nl-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="nl-feat-NumForm.html">NumForm</a></tt><tt>=EMPTY</tt> (3316; 86%), <tt><a href="nl-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (3303; 86%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (3859; 100% of non-empty `NumType`): <em>twee, drie, vier, miljoen, 1, vijf, tien, beide, zes, 1969</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (927) occur only with one value of `NumType`.

### `DET`

1007 <tt><a href="nl-pos-DET.html">DET</a></tt> tokens (4% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="nl-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1007; 100%), <tt><a href="nl-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (1007; 100%), <tt><a href="nl-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (1007; 100%), <tt><a href="nl-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (986; 98%).

`DET` tokens may have the following values of `NumType`:

* `Card` (1007; 100% of non-empty `NumType`): <em>veel, meer, hoeveel, minder, weinig, vele, meeste, zoveel, velen, min</em>
* `EMPTY` (21501): <em>de, een, het, der, tot, 't, 'n, la, el, des</em>

`NumType` seems to be **lexical feature** of `DET`. 100% lemmas (23) occur only with one value of `NumType`.

### `ADJ`

536 <tt><a href="nl-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="nl-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (536; 100%), <tt><a href="nl-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (536; 100%), <tt><a href="nl-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (536; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (536; 100% of non-empty `NumType`): <em>eerste, tweede, derde, vierde, vijfde, zevende, 19e, dertiende, negende, zesde</em>
* `EMPTY` (12342): <em>nieuwe, grote, goed, Nederlandse, laatste, groot, verder, goede, Amerikaanse, lang</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (59) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="nl-dep-compound.html">compound</a></tt>]--> NUM</tt> (410; 100%),
<tt>NUM --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> NUM</tt> (119; 100%),
<tt>DET --[<tt><a href="nl-dep-obl.html">obl</a></tt>]--> NUM</tt> (34; 92%),
<tt>DET --[<tt><a href="nl-dep-compound.html">compound</a></tt>]--> DET</tt> (22; 100%),
<tt>DET --[<tt><a href="nl-dep-obl.html">obl</a></tt>]--> DET</tt> (13; 93%),
<tt>ADJ --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> ADJ</tt> (10; 71%),
<tt>NUM --[<tt><a href="nl-dep-cc.html">cc</a></tt>]--> NUM</tt> (6; 100%),
<tt>DET --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> DET</tt> (4; 67%),
<tt>DET --[<tt><a href="nl-dep-det-nummod.html">det:nummod</a></tt>]--> DET</tt> (3; 100%),
<tt>NUM --[<tt><a href="nl-dep-conj.html">conj</a></tt>]--> DET</tt> (3; 75%).

