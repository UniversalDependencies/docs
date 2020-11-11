---
layout: base
title:  'Statistics of PronType in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Features: `PronType`

This feature is universal.
It occurs with 7 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`.

8471 tokens (24%) have a non-empty value of `PronType`.
77 types (2%) occur at least once with a non-empty value of `PronType`.
28 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="fr_spoken-pos-DET.html">DET</a></tt> (4249; 12% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (4222; 12% instances).

### `DET`

4249 <tt><a href="fr_spoken-pos-DET.html">DET</a></tt> tokens (95% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="fr_spoken-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3327; 78%), <tt><a href="fr_spoken-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (2759; 65%).

`DET` tokens may have the following values of `PronType`:

* `Art` (3705; 87% of non-empty `PronType`): <em>le, la, les, l', un, une, des</em>
* `Dem` (91; 2% of non-empty `PronType`): <em>cette, ces</em>
* `Ind` (65; 2% of non-empty `PronType`): <em>quelque, chaque, plusieurs, certains, toutes, tel, tous, certaines, toute</em>
* `Int` (11; 0% of non-empty `PronType`): <em>quel, quelle</em>
* `Neg` (14; 0% of non-empty `PronType`): <em>aucun, aucune</em>
* `Prs` (363; 9% of non-empty `PronType`): <em>mon, votre, sa, son, notre, ma, ses, vos, nos, mes</em>
* `EMPTY` (223): <em>ce, cet, du, de, des, l~, Le, d', A, les</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (13) occur only with one value of `PronType`.

### `PRON`

4222 <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> tokens (77% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="fr_spoken-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3053; 72%), <tt><a href="fr_spoken-feat-Person.html">Person</a></tt><tt>=3</tt> (2781; 66%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (1; 0% of non-empty `PronType`): <em>un</em>
* `Dem` (1004; 24% of non-empty `PronType`): <em>c', ça, -ce, ceux, cela, celui, celle, ceci, celles</em>
* `Ind` (377; 9% of non-empty `PronType`): <em>on, tout, un, tous, une, chacun, -on, chacune, quelqu'un, aucune</em>
* `Prs` (2803; 66% of non-empty `PronType`): <em>je, il, vous, y, j', ils, se, tu, elle, s'</em>
* `Rel` (37; 1% of non-empty `PronType`): <em>dont, lequel, laquelle, lesquelles</em>
* `EMPTY` (1273): <em>qui, ce, nous, que, me, où, qu', m', autre, autres</em>

<table>
  <tr><th>Paradigm <i>un</i></th><th><tt>Art</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><tt><a href="fr_spoken-feat-Definite.html">Definite</a></tt><tt>=Ind</tt>|<tt><a href="fr_spoken-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>un</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_spoken-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_spoken-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>un</em></td></tr>
  <tr><td><tt><tt><a href="fr_spoken-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_spoken-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>une</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 96% lemmas (22) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<tt><a href="fr_spoken-dep-reparandum.html">reparandum</a></tt>]--> DET</tt> (140; 89%),
<tt>PRON --[<tt><a href="fr_spoken-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (81; 81%),
<tt>DET --[<tt><a href="fr_spoken-dep-conj.html">conj</a></tt>]--> DET</tt> (3; 100%),
<tt>PRON --[<tt><a href="fr_spoken-dep-conj.html">conj</a></tt>]--> PRON</tt> (3; 100%),
<tt>PRON --[<tt><a href="fr_spoken-dep-dep.html">dep</a></tt>]--> PRON</tt> (2; 100%),
<tt>DET --[<tt><a href="fr_spoken-dep-dep.html">dep</a></tt>]--> DET</tt> (1; 100%).

