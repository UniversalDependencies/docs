---
layout: base
title:  'Statistics of PronType in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Features: `PronType`

This feature is universal.
It occurs with 7 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`.

6623 tokens (22%) have a non-empty value of `PronType`.
98 types (4%) occur at least once with a non-empty value of `PronType`.
60 lemmas (3%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (4139; 14% instances), <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (2474; 8% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (10; 0% instances).

### `PRON`

4139 <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> tokens (96% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3180; 77%), <tt><a href="fr_parisstories-feat-Person.html">Person</a></tt><tt>=3</tt> (2674; 65%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (765; 18% of non-empty `PronType`): <em>c', ça, ce, -ce, celui, ceux, cela, celui-là</em>
* `Ind` (652; 16% of non-empty `PronType`): <em>on, tout, un, tous, quoi, une, chacun, quelqu'un, autre, autrui</em>
* `Int` (14; 0% of non-empty `PronType`): <em>qu', quoi</em>
* `Neg` (16; 0% of non-empty `PronType`): <em>rien, personne</em>
* `Prs` (2434; 59% of non-empty `PronType`): <em>je, il, j', y, elle, me, tu, s', se, ils</em>
* `Rel` (258; 6% of non-empty `PronType`): <em>qui, où, que, qu', quoi, dont, auxquelles, lesquelles</em>
* `EMPTY` (152): <em>qui, nous, me, que, m', ce, t', où, qu', tous</em>

<table>
  <tr><th>Paradigm <i>quoi</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>quoi</em></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_parisstories-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>quoi</em></td><td></td><td><em>quoi</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 92% lemmas (36) occur only with one value of `PronType`.

### `DET`

2474 <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> tokens (98% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="fr_parisstories-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (2177; 88%), <tt><a href="fr_parisstories-feat-Person-psor.html">Person[psor]</a></tt><tt>=EMPTY</tt> (2177; 88%), <tt><a href="fr_parisstories-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1950; 79%), <tt><a href="fr_parisstories-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (1347; 54%).

`DET` tokens may have the following values of `PronType`:

* `Art` (2036; 82% of non-empty `PronType`): <em>le, la, un, les, une, l', des, du, de, d'</em>
* `Dem` (74; 3% of non-empty `PronType`): <em>cette, ce, ces, cet</em>
* `Ind` (57; 2% of non-empty `PronType`): <em>quelque, tout, chaque, quelques, plusieurs, quelqu', toute, certaines, différents</em>
* `Int` (3; 0% of non-empty `PronType`): <em>quelle</em>
* `Neg` (3; 0% of non-empty `PronType`): <em>aucune, aucun</em>
* `Prs` (301; 12% of non-empty `PronType`): <em>mon, ma, mes, notre, son, nos, sa, ses, leur, leurs</em>
* `EMPTY` (47): <em>des, son, de, du, quelqu', ta, quelques, aucune, leurs, quelque</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (26) occur only with one value of `PronType`.

### `ADV`

10 <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Rel` (10; 100% of non-empty `PronType`): <em>où</em>
* `EMPTY` (2342): <em>donc, pas, vraiment, enfin, là, plus, très, bien, même, tout</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<tt><a href="fr_parisstories-dep-reparandum.html">reparandum</a></tt>]--> DET</tt> (71; 99%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (68; 91%),
<tt>DET --[<tt><a href="fr_parisstories-dep-advmod.html">advmod</a></tt>]--> DET</tt> (2; 100%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-dep.html">dep</a></tt>]--> PRON</tt> (2; 67%),
<tt>DET --[<tt><a href="fr_parisstories-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="fr_parisstories-dep-discourse.html">discourse</a></tt>]--> PRON</tt> (1; 100%).

