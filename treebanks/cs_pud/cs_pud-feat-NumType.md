---
layout: base
title:  'Statistics of NumType in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Mult`, `Ord`, `Sets`.

597 tokens (3%) have a non-empty value of `NumType`.
301 types (4%) occur at least once with a non-empty value of `NumType`.
251 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> (459; 2% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (76; 0% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt> (46; 0% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (16; 0% instances).

### `NUM`

459 <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="cs_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (397; 86%), <tt><a href="cs_pud-feat-NumValue.html">NumValue</a></tt><tt>=EMPTY</tt> (357; 78%), <tt><a href="cs_pud-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (319; 69%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (319; 69%), <tt><a href="cs_pud-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (303; 66%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (459; 100% of non-empty `NumType`): <em>dva, čtyři, dvou, dvě, jedné, 1, 3, jeden, 20, dvěma</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (222) occur only with one value of `NumType`.

### `ADJ`

76 <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="cs_pud-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (76; 100%), <tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (76; 100%), <tt><a href="cs_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=EMPTY</tt> (76; 100%), <tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (76; 100%), <tt><a href="cs_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (60; 79%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (60; 79%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (75; 99% of non-empty `NumType`): <em>první, druhé, prvního, třetí, druhou, šedesátých, druhý, dvacátého, padesátých, prvních</em>
* `Sets` (1; 1% of non-empty `NumType`): <em>jedni</em>
* `EMPTY` (2193): <em>další, nové, jižní, severní, hlavní, velká, velké, vlastní, poslední, jiné</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (18) occur only with one value of `NumType`.

### `DET`

46 <tt><a href="cs_pud-pos-DET.html">DET</a></tt> tokens (5% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="cs_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (46; 100%), <tt><a href="cs_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (46; 100%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (46; 100%), <tt><a href="cs_pud-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (46; 100%), <tt><a href="cs_pud-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (46; 100%), <tt><a href="cs_pud-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (46; 100%), <tt><a href="cs_pud-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (46; 100%), <tt><a href="cs_pud-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (43; 93%).

`DET` tokens may have the following values of `NumType`:

* `Card` (46; 100% of non-empty `NumType`): <em>mnoho, několik, mnoha, několika, tolik, kolika, mála, málo</em>
* `EMPTY` (798): <em>to, který, jeho, které, která, jejich, své, toho, její, kteří</em>

### `ADV`

16 <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> tokens (2% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="cs_pud-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (16; 100%), <tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (16; 100%), <tt><a href="cs_pud-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (13; 81%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (8; 50% of non-empty `NumType`): <em>třikrát, dvakrát, jednou, několikrát, mnohokrát</em>
* `Ord` (8; 50% of non-empty `NumType`): <em>poprvé, podruhé</em>
* `EMPTY` (821): <em>tak, také, jak, poté, už, kde, více, pouze, stejně, ještě</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="cs_pud-dep-conj.html">conj</a></tt>]--> NUM</tt> (15; 100%),
<tt>NUM --[<tt><a href="cs_pud-dep-compound.html">compound</a></tt>]--> NUM</tt> (4; 100%),
<tt>DET --[<tt><a href="cs_pud-dep-conj.html">conj</a></tt>]--> DET</tt> (1; 100%).

