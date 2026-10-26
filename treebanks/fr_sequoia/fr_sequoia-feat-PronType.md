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
The feature is used with 3 part-of-speech tags: <tt><a href="fr_sequoia-pos-DET.html">DET</a></tt> (10400; 15% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (2741; 4% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (83; 0% instances).

### `DET`

10400 <tt><a href="fr_sequoia-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="fr_sequoia-feat-Number.html">Number</a></tt><tt>=Sing</tt> (7570; 73%), <tt><a href="fr_sequoia-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (7441; 72%).

`DET` tokens may have the following values of `PronType`:

* `Art` (9198; 88% of non-empty `PronType`): <em>le, les, la, l', une, un, des, de, d', du</em>
* `Dem` (444; 4% of non-empty `PronType`): <em>cette, ce, ces, cet</em>
* `Exc` (3; 0% of non-empty `PronType`): <em>quel</em>
* `Ind` (172; 2% of non-empty `PronType`): <em>plusieurs, quelques, chaque, tout, certains, certaines, toute, quelque, divers, tous</em>
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

`PronType` seems to be **lexical feature** of `DET`. 94% lemmas (16) occur only with one value of `PronType`.

### `PRON`

2741 <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="fr_sequoia-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (2392; 87%), <tt><a href="fr_sequoia-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1831; 67%), <tt><a href="fr_sequoia-feat-Person.html">Person</a></tt><tt>=3</tt> (1569; 57%), <tt><a href="fr_sequoia-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1470; 54%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (262; 10% of non-empty `PronType`): <em>ce, c', cela, ceci, ceux, -ce, celle-ci, celles, celle, celui</em>
* `Ind` (138; 5% of non-empty `PronType`): <em>on, un, l'on, une, tout, autre, certains, chacun, tous, chacune</em>
* `Int` (20; 1% of non-empty `PronType`): <em>Qu', Que, qui, quoi, QU'</em>
* `Neg` (16; 1% of non-empty `PronType`): <em>rien, aucun, personne, Nul</em>
* `Prs` (1764; 64% of non-empty `PronType`): <em>il, nous, se, je, s', vous, elle, ils, y, j'</em>
* `Rel` (541; 20% of non-empty `PronType`): <em>qui, que, dont, qu', laquelle, lequel, lesquelles, lesquels, quoi, Quiconque</em>

<table>
  <tr><th>Paradigm <i>qui</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>qui</em></td><td><em>qui</em></td></tr>
  <tr><td><tt><tt><a href="fr_sequoia-feat-ExtPos.html">ExtPos</a></tt><tt>=PRON</tt></tt></td><td></td><td><em>qui</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 92% lemmas (34) occur only with one value of `PronType`.

### `ADV`

83 <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> tokens (3% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="fr_sequoia-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (83; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (38; 46% of non-empty `PronType`): <em>comment, pourquoi, où, combien</em>
* `Rel` (45; 54% of non-empty `PronType`): <em>où</em>
* `EMPTY` (2605): <em>pas, n', ne, plus, moins, très, également, aussi, bien, non</em>

<table>
  <tr><th>Paradigm <i>où</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>où</em></td><td><em>où</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="fr_sequoia-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (9; 90%),
<tt>PRON --[<tt><a href="fr_sequoia-dep-conj.html">conj</a></tt>]--> PRON</tt> (2; 100%),
<tt>DET --[<tt><a href="fr_sequoia-dep-fixed.html">fixed</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="fr_sequoia-dep-obl-mod.html">obl:mod</a></tt>]--> PRON</tt> (1; 100%).

