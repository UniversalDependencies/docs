---
layout: base
title:  'Statistics of PronType in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 8 different values: `Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 2 combinations have been observed: `Ind|Rel`, `Int|Rel`.

4086 tokens (7%) have a non-empty value of `PronType`.
515 types (3%) occur at least once with a non-empty value of `PronType`.
73 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (1982; 4% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (1726; 3% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt> (378; 1% instances).

### `PRON`

1982 <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> tokens (99% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="lt_alksnis-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (1743; 88%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (210; 11% of non-empty `PronType`): <em>tai, tam, tatai, tie, tokiu, tos, tuo, tų, Šio</em>
* `Emp` (2; 0% of non-empty `PronType`): <em>patiems, pats</em>
* `Ind` (67; 3% of non-empty `PronType`): <em>keletą, kas nors, keletas, kažkas, kažką, ką nors, kitų, daug, kažkieno, kažko</em>
* `Int,Rel` (150; 8% of non-empty `PronType`): <em>kas, ką, ko, kuo, kam, kuris, kurie</em>
* `Neg` (41; 2% of non-empty `PronType`): <em>nieko, niekas, niekuo, niekieno</em>
* `Prs` (1463; 74% of non-empty `PronType`): <em>savo, jų, jis, jos, jie, jo, aš, mano, man, juos</em>
* `Tot` (49; 2% of non-empty `PronType`): <em>viskas, viską, visa, visko, abu, viskuo, abiem</em>
* `EMPTY` (11): <em>kt., kitką, š.</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (30) occur only with one value of `PronType`.

### `DET`

1726 <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="lt_alksnis-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (1107; 64%), <tt><a href="lt_alksnis-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1006; 58%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (603; 35% of non-empty `PronType`): <em>to, toks, šios, ši, šio, šis, šį, tas, tą, šiuo</em>
* `Emp` (79; 5% of non-empty `PronType`): <em>pats, pati, pačių, paties, patys, pačios, pačiam, pačius, patį, pačiai</em>
* `Ind` (444; 26% of non-empty `PronType`): <em>kitų, vienas, kitas, viena, kitus, kitą, kiti, kai kurie, kita, vieną</em>
* `Int,Rel` (355; 21% of non-empty `PronType`): <em>kurie, kuris, kurios, kurių, kuri, kurio, kurį, kokie, kurią, kurioje</em>
* `Neg` (28; 2% of non-empty `PronType`): <em>jokių, jokio, jokios, joks, jokiais, jokį</em>
* `Prs` (4; 0% of non-empty `PronType`): <em>savais, sava, savas</em>
* `Tot` (213; 12% of non-empty `PronType`): <em>visą, visus, visi, visų, visas, visos, visoje, visiems, visa, kiekvieną</em>
* `EMPTY` (1): <em>šį tą</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (36) occur only with one value of `PronType`.

### `ADV`

378 <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt> tokens (15% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="lt_alksnis-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (378; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (205; 54% of non-empty `PronType`): <em>taip, dabar, čia, tada, ten, šitaip, šiaip</em>
* `Ind` (12; 3% of non-empty `PronType`): <em>kažkur, kažkodėl, kažkaip, bet kada</em>
* `Ind,Rel` (24; 6% of non-empty `PronType`): <em>kaip</em>
* `Int,Rel` (100; 26% of non-empty `PronType`): <em>kur, kiek, kodėl, kada</em>
* `Neg` (19; 5% of non-empty `PronType`): <em>niekada, niekur, niekaip</em>
* `Tot` (18; 5% of non-empty `PronType`): <em>visada, visur, visaip</em>
* `EMPTY` (2076): <em>labai, todėl, daugiau, daug, tikrai, ypač, geriau, kartu, toliau, mažiau</em>

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (22) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<tt><a href="lt_alksnis-dep-fixed.html">fixed</a></tt>]--> DET</tt> (14; 100%),
<tt>DET --[<tt><a href="lt_alksnis-dep-conj.html">conj</a></tt>]--> DET</tt> (12; 100%),
<tt>PRON --[<tt><a href="lt_alksnis-dep-conj.html">conj</a></tt>]--> PRON</tt> (6; 86%),
<tt>ADV --[<tt><a href="lt_alksnis-dep-conj.html">conj</a></tt>]--> ADV</tt> (2; 100%),
<tt>PRON --[<tt><a href="lt_alksnis-dep-fixed.html">fixed</a></tt>]--> DET</tt> (2; 100%),
<tt>PRON --[<tt><a href="lt_alksnis-dep-nmod.html">nmod</a></tt>]--> PRON</tt> (2; 100%),
<tt>DET --[<tt><a href="lt_alksnis-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="lt_alksnis-dep-conj.html">conj</a></tt>]--> ADV</tt> (1; 100%).

