---
layout: base
title:  'Statistics of PronType in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Features: `PronType`

This feature is universal but the values `Exc` are language-specific.
It occurs with 8 different values: `Art`, `Dem`, `Exc`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`.

13224 tokens (19%) have a non-empty value of `PronType`.
192 types (2%) occur at least once with a non-empty value of `PronType`.
52 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="fr_sequoia-pos-DET.html">DET</a></tt> (10400; 15% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (2791; 4% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (33; 0% instances).

### `DET`

10400 <tt><a href="fr_sequoia-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7570; 73%), <tt><a href="fr_sequoia-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (7441; 72%).

`DET` tokens may have the following values of `PronType`:

* `Art` (9274; 89% of non-empty `PronType`): <em>le, les, la, l', une, un, des, de, d', quelques</em>
* `Dem` (444; 4% of non-empty `PronType`): <em>cette, ce, ces, cet</em>
* `Exc` (3; 0% of non-empty `PronType`): <em>quel</em>
* `Ind` (96; 1% of non-empty `PronType`): <em>plusieurs, chaque, certains, certaines, divers, différentes, différents, quel, telles</em>
* `Int` (14; 0% of non-empty `PronType`): <em>quel, quelles, quelle, quels</em>
* `Neg` (38; 0% of non-empty `PronType`): <em>aucune, aucun</em>
* `Prs` (531; 5% of non-empty `PronType`): <em>son, ses, votre, sa, leur, leurs, notre, nos, mon, mes</em>

<table>
  <tr><th>Paradigm <i>quel</i></th><th><tt>Int</tt></th><th><tt>Ind</tt></th><th><tt>Exc</tt></th></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>quel</em></td><td><em>quel</em></td><td><em>quel</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>quels</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>quelle</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>quelles</em></td><td></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 94% lemmas (15) occur only with one value of `PronType`.

### `PRON`

2791 <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="fr_sequoia-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (2442; 87%), <tt><a href="fr_sequoia-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1881; 67%), <tt><a href="fr_sequoia-feat-Person.html">Person</a></tt><tt>=3</tt> (1569; 56%), <tt><a href="fr_sequoia-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1520; 54%), <tt><a href="fr_sequoia-feat-Emph.html">Emph</a></tt><tt>=EMPTY</tt> (1413; 51%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (262; 9% of non-empty `PronType`): <em>ce, c', cela, ceci, ceux, -ce, celle-ci, celles, celle, celui</em>
* `Ind` (138; 5% of non-empty `PronType`): <em>on, un, l'on, une, tout, autre, certains, chacun, tous, chacune</em>
* `Int` (25; 1% of non-empty `PronType`): <em>Qu', Que, où, qui, quoi, QU'</em>
* `Neg` (16; 1% of non-empty `PronType`): <em>rien, aucun, personne, Nul</em>
* `Prs` (1764; 63% of non-empty `PronType`): <em>il, nous, se, je, s', vous, elle, ils, y, j'</em>
* `Rel` (586; 21% of non-empty `PronType`): <em>qui, que, dont, où, qu', laquelle, lequel, lesquelles, lesquels, quoi</em>

<table>
  <tr><th>Paradigm <i>qui</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>qui</em></td><td><em>qui</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-ExtPos.html">ExtPos</a></tt><tt>=PRON</tt></tt></td><td></td><td><em>qui</em></td></tr>
</table>

### `ADV`

33 <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="fr_sequoia-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (33; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (33; 100% of non-empty `PronType`): <em>comment, pourquoi, combien</em>
* `EMPTY` (2603): <em>pas, n', ne, plus, moins, très, également, aussi, bien, non</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="fr_sequoia-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (9; 90%),
<tt>PRON --[<tt><a href="fr_sequoia-dep-conj.html">conj</a></tt>]--> PRON</tt> (2; 100%),
<tt>DET --[<tt><a href="fr_sequoia-dep-fixed.html">fixed</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="fr_sequoia-dep-obl-mod.html">obl:mod</a></tt>]--> PRON</tt> (1; 100%).

