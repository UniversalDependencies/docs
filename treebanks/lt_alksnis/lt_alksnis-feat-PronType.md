---
layout: base
title:  'Statistics of PronType in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 8 different values: `Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

4300 tokens (6%) have a non-empty value of `PronType`.
444 types (2%) occur at least once with a non-empty value of `PronType`.
56 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (2419; 3% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (1780; 3% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt> (101; 0% instances).

### `PRON`

2419 <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="lt_alksnis-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (2413; 100%).

`PRON` tokens may have the following values of `PronType`:

* `Ind` (650; 27% of non-empty `PronType`): <em>kitų, kai, tam, vienas, kiti, kitas, viena, kitus, kitą, vieną</em>
* `Int,Rel` (159; 7% of non-empty `PronType`): <em>kas, ką, ko, kuo, Kam</em>
* `Neg` (43; 2% of non-empty `PronType`): <em>nieko, niekas, niekuo, niekieno</em>
* `Prs` (1567; 65% of non-empty `PronType`): <em>jų, savo, jis, jos, jie, jo, aš, juos, mano, man</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (41) occur only with one value of `PronType`.

### `DET`

1780 <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="lt_alksnis-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (1773; 100%), <tt><a href="lt_alksnis-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (995; 56%), <tt><a href="lt_alksnis-feat-Number.html">Number</a></tt><tt>=Sing</tt> (995; 56%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (973; 55% of non-empty `PronType`): <em>tai, to, šio, šios, toks, šį, ši, šiame, šių, tą</em>
* `Emp` (84; 5% of non-empty `PronType`): <em>pats, pačių, pati, paties, patys, pačios, pačiam, pačius, patiems, patį</em>
* `Int,Rel` (459; 26% of non-empty `PronType`): <em>kurie, kurios, kuris, kurių, kuri, kurio, kurioje, kurį, kurią, kokie</em>
* `Neg` (29; 2% of non-empty `PronType`): <em>jokių, jokio, jokios, joks, jokiais, jokį</em>
* `Tot` (235; 13% of non-empty `PronType`): <em>visą, visų, visus, visi, visoje, visos, visas, visiems, kiekvienas, kiekvieną</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (11) occur only with one value of `PronType`.

### `ADV`

101 <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt> tokens (4% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="lt_alksnis-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (101; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int,Rel` (101; 100% of non-empty `PronType`): <em>kur, kaip, kodėl, kada</em>
* `EMPTY` (2727): <em>labai, taip, daugiau, todėl, iš, jau, dabar, tiek, daug, toliau</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="lt_alksnis-dep-conj.html">conj</a></tt>]--> PRON</tt> (18; 86%),
<tt>PRON --[<tt><a href="lt_alksnis-dep-nmod.html">nmod</a></tt>]--> PRON</tt> (13; 72%),
<tt>DET --[<tt><a href="lt_alksnis-dep-conj.html">conj</a></tt>]--> DET</tt> (3; 100%),
<tt>ADV --[<tt><a href="lt_alksnis-dep-conj.html">conj</a></tt>]--> PRON</tt> (2; 100%),
<tt>PRON --[<tt><a href="lt_alksnis-dep-obl.html">obl</a></tt>]--> PRON</tt> (1; 100%).

