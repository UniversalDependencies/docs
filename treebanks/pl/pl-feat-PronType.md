---
layout: base
title:  'Statistics of PronType in UD_Polish'
udver: '2'
---

## Treebank Statistics: UD_Polish: Features: `PronType`

This feature is universal.
It occurs with 7 different values: `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

6513 tokens (8%) have a non-empty value of `PronType`.
323 types (1%) occur at least once with a non-empty value of `PronType`.
43 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="pl-pos-PRON.html">PRON</a></tt> (4538; 5% instances), <tt><a href="pl-pos-DET.html">DET</a></tt> (1975; 2% instances).

### `PRON`

4538 <tt><a href="pl-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="pl-feat-PrepCase.html">PrepCase</a></tt><tt>=EMPTY</tt> (3324; 73%), <tt><a href="pl-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (3221; 71%), <tt><a href="pl-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (3042; 67%), <tt><a href="pl-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (2834; 62%), <tt><a href="pl-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (2658; 59%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (424; 9% of non-empty `PronType`): <em>to, tym, tego, temu</em>
* `Ind` (120; 3% of non-empty `PronType`): <em>coś, ktoś, czegoś, czymś, kogoś, cokolwiek, komuś, kimś, komukolwiek</em>
* `Int,Rel` (212; 5% of non-empty `PronType`): <em>co, kto, czym, kim, czego, kogo, komu, czemu</em>
* `Neg` (94; 2% of non-empty `PronType`): <em>nic, nikt, niczego, nikogo, nikomu, niczym</em>
* `Prs` (3584; 79% of non-empty `PronType`): <em>się, jego, go, ich, jej, mnie, mu, sobie, mi, ją</em>
* `Tot` (104; 2% of non-empty `PronType`): <em>wszystko, wszystkim, wszyscy, wszystkiego, wszystkich</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (18) occur only with one value of `PronType`.

### `DET`

1975 <tt><a href="pl-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="pl-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (1765; 89%), <tt><a href="pl-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (1748; 89%), <tt><a href="pl-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (1748; 89%), <tt><a href="pl-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (1538; 78%), <tt><a href="pl-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1255; 64%), <tt><a href="pl-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (993; 50%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (721; 37% of non-empty `PronType`): <em>ten, tej, tym, tego, te, tych, to, ta, takie, tę</em>
* `Ind` (200; 10% of non-empty `PronType`): <em>kilka, jakieś, jakiś, kilku, kilkanaście, kilkadziesiąt, jakąś, kilkunastu, niektóre, kilkuset</em>
* `Int,Rel` (423; 21% of non-empty `PronType`): <em>które, który, która, którzy, których, którym, której, jakie, którego, którą</em>
* `Neg` (42; 2% of non-empty `PronType`): <em>żadnego, żadnych, żaden, żadnej, żadne, żadna, żadnym, żadną</em>
* `Prs` (437; 22% of non-empty `PronType`): <em>swoje, swoich, swoim, naszej, naszym, swój, swojej, swoją, naszych, swojego</em>
* `Tot` (152; 8% of non-empty `PronType`): <em>wszystkie, wszystkich, każdy, każdym, wszelki, wszyscy, każde, każdego, wszelkie, każdą</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (25) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="pl-dep-conj.html">conj</a></tt>]--> PRON</tt> (4; 100%),
<tt>DET --[<tt><a href="pl-dep-conj.html">conj</a></tt>]--> DET</tt> (2; 100%),
<tt>DET --[<tt><a href="pl-dep-nsubj.html">nsubj</a></tt>]--> DET</tt> (1; 100%),
<tt>DET --[<tt><a href="pl-dep-obl.html">obl</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="pl-dep-nmod.html">nmod</a></tt>]--> PRON</tt> (1; 100%).

