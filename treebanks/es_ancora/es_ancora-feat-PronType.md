---
layout: base
title:  'Statistics of PronType in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Features: `PronType`

This feature is universal.
It occurs with 8 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

99570 tokens (18%) have a non-empty value of `PronType`.
323 types (1%) occur at least once with a non-empty value of `PronType`.
96 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="es_ancora-pos-DET.html">DET</a></tt> (73638; 13% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (25922; 5% instances), <tt><a href="es_ancora-pos-SCONJ.html">SCONJ</a></tt> (10; 0% instances).

### `DET`

73638 <tt><a href="es_ancora-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=Sing</tt> (55521; 75%), <tt><a href="es_ancora-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (51873; 70%).

`DET` tokens may have the following values of `PronType`:

* `Art` (61461; 83% of non-empty `PronType`): <em>la, el, los, un, las, una, unos, unas, els, Al</em>
* `Dem` (3256; 4% of non-empty `PronType`): <em>este, esta, esa, ese, estos, mismo, estas, misma, esos, esas</em>
* `Ind` (2135; 3% of non-empty `PronType`): <em>otros, otro, otras, otra, algunos, cualquier, muchos, varios, varias, muchas</em>
* `Int,Rel` (78; 0% of non-empty `PronType`): <em>qué, cuantos, cuántos, cuánto, cual, cuantas, cuánta</em>
* `Neg` (175; 0% of non-empty `PronType`): <em>ningún, ninguna</em>
* `Prs` (5398; 7% of non-empty `PronType`): <em>su, sus, mi, nuestra, nuestro, nuestros, mis, nuestras, tu, suyo</em>
* `Tot` (1135; 2% of non-empty `PronType`): <em>todo, todos, cada, todas, toda</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (57) occur only with one value of `PronType`.

### `PRON`

25922 <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="es_ancora-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (19959; 77%), <tt><a href="es_ancora-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (19232; 74%), <tt><a href="es_ancora-feat-PrepCase.html">PrepCase</a></tt><tt>=EMPTY</tt> (15839; 61%), <tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (15585; 60%), <tt><a href="es_ancora-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (13846; 53%), <tt><a href="es_ancora-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (13301; 51%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (780; 3% of non-empty `PronType`): <em>eso, esto, éste, ésta, mismo, este, misma, mismos, éstos, tal</em>
* `Ind` (2335; 9% of non-empty `PronType`): <em>donde, uno, cómo, cuando, una, algo, unos, otros, otro, algunos</em>
* `Int,Rel` (9415; 36% of non-empty `PronType`): <em>que, quien, qué, quienes, cual, cuyo, cuya, cuales, quién, cuál</em>
* `Neg` (364; 1% of non-empty `PronType`): <em>nada, nadie, ninguno, ninguna</em>
* `Prs` (12612; 49% of non-empty `PronType`): <em>se, lo, le, me, nos, la, les, él, ellos, yo</em>
* `Tot` (416; 2% of non-empty `PronType`): <em>todo, todos, todas, cada, toda</em>

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Int,Rel</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>que</em></td><td><em>ver</em></td></tr>
  <tr><td><tt><tt><a href="es_ancora-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>que</em></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 97% lemmas (65) occur only with one value of `PronType`.

### `SCONJ`

10 <tt><a href="es_ancora-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Int,Rel` (10; 100% of non-empty `PronType`): <em>que</em>
* `EMPTY` (12475): <em>que, como, si, porque, cuando, aunque, según, mientras, pues, donde</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="es_ancora-dep-conj.html">conj</a></tt>]--> PRON</tt> (27; 73%),
<tt>DET --[<tt><a href="es_ancora-dep-conj.html">conj</a></tt>]--> DET</tt> (7; 100%),
<tt>PRON --[<tt><a href="es_ancora-dep-compound.html">compound</a></tt>]--> DET</tt> (4; 100%),
<tt>PRON --[<tt><a href="es_ancora-dep-advcl.html">advcl</a></tt>]--> PRON</tt> (2; 100%),
<tt>DET --[<tt><a href="es_ancora-dep-fixed.html">fixed</a></tt>]--> DET</tt> (1; 100%),
<tt>DET --[<tt><a href="es_ancora-dep-nsubj.html">nsubj</a></tt>]--> DET</tt> (1; 100%),
<tt>DET --[<tt><a href="es_ancora-dep-parataxis.html">parataxis</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="es_ancora-dep-expl-impers.html">expl:impers</a></tt>]--> PRON</tt> (1; 100%).

