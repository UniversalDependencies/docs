---
layout: base
title:  'Statistics of PronType in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Features: `PronType`

This feature is universal but the values `Exc` are language-specific.
It occurs with 9 different values: `Art`, `Dem`, `Exc`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

1644 tokens (20%) have a non-empty value of `PronType`.
150 types (10%) occur at least once with a non-empty value of `PronType`.
46 lemmas (4%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (904; 11% instances), <tt><a href="es_coser-pos-DET.html">DET</a></tt> (739; 9% instances), <tt><a href="es_coser-pos-ADV.html">ADV</a></tt> (1; 0% instances).

### `PRON`

904 <tt><a href="es_coser-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="es_coser-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (740; 82%), <tt><a href="es_coser-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (612; 68%), <tt><a href="es_coser-feat-PrepCase.html">PrepCase</a></tt><tt>=EMPTY</tt> (516; 57%), <tt><a href="es_coser-feat-Number.html">Number</a></tt><tt>=Sing</tt> (507; 56%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (88; 10% of non-empty `PronType`): <em>eso, esto, ese, esos, esa, esas, esta, estos, aquel, estas</em>
* `Exc` (2; 0% of non-empty `PronType`): <em>Qué</em>
* `Ind` (61; 7% of non-empty `PronType`): <em>otro, algo, uno, otros, una, otra, mucho, muchos, donde, dónde</em>
* `Int` (75; 8% of non-empty `PronType`): <em>cómo, qué, dónde, cuándo, quién, Cuántos</em>
* `Int,Rel` (9; 1% of non-empty `PronType`): <em>que, cuál, cuáles</em>
* `Neg` (13; 1% of non-empty `PronType`): <em>nada, na, nadie, ningún</em>
* `Prs` (567; 63% of non-empty `PronType`): <em>se, lo, yo, le, te, me, los, la, nos, las</em>
* `Rel` (54; 6% of non-empty `PronType`): <em>que, donde, quien</em>
* `Tot` (35; 4% of non-empty `PronType`): <em>todo, todos, tos, to, toas, todas</em>

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Int,Rel</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>que</em></td><td><em>que</em></td></tr>
</table>

### `DET`

739 <tt><a href="es_coser-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="es_coser-feat-Number.html">Number</a></tt><tt>=Sing</tt> (569; 77%), <tt><a href="es_coser-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (425; 58%).

`DET` tokens may have the following values of `PronType`:

* `Art` (563; 76% of non-empty `PronType`): <em>la, el, un, una, las, los, unos, unas, l, lo</em>
* `Dem` (39; 5% of non-empty `PronType`): <em>esta, esas, estas, esa, esos, este, tanta, aquel, aquella, ese</em>
* `Ind` (51; 7% of non-empty `PronType`): <em>mucha, otra, otro, mucho, muchos, alguna, otros, Otras, algunas, algún</em>
* `Int` (2; 0% of non-empty `PronType`): <em>Cuántos, cuantos</em>
* `Int,Rel` (1; 0% of non-empty `PronType`): <em>qué</em>
* `Neg` (1; 0% of non-empty `PronType`): <em>ninguno</em>
* `Prs` (44; 6% of non-empty `PronType`): <em>mi, su, sus, mía, mis, mío, nuestro, tus</em>
* `Rel` (1; 0% of non-empty `PronType`): <em>cuantas</em>
* `Tot` (37; 5% of non-empty `PronType`): <em>todo, to, cada, todos, todas, toda, Tos, toa</em>

<table>
  <tr><th>Paradigm <i>cuanto</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt><tt><a href="es_coser-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>cuantos</em></td><td></td></tr>
  <tr><td><tt><tt><a href="es_coser-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td></td><td><em>cuantas</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 96% lemmas (24) occur only with one value of `PronType`.

### `ADV`

1 <tt><a href="es_coser-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="es_coser-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (1; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (1; 100% of non-empty `PronType`): <em>cuándo</em>
* `EMPTY` (700): <em>no, ya, aquí, más, ahora, ahí, así, entonces, luego, muy</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="es_coser-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (17; 100%),
<tt>DET --[<tt><a href="es_coser-dep-reparandum.html">reparandum</a></tt>]--> DET</tt> (12; 100%),
<tt>PRON --[<tt><a href="es_coser-dep-discourse.html">discourse</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="es_coser-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (1; 100%).

