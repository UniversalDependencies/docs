---
layout: base
title:  'Statistics of NumType in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Features: `NumType`

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

499 tokens (1%) have a non-empty value of `NumType`.
112 types (2%) occur at least once with a non-empty value of `NumType`.
93 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 5 part-of-speech tags: <tt>[NUM](cs_cltt-pos-NUM.html)</tt> (440; 1% instances), <tt>[ADJ](cs_cltt-pos-ADJ.html)</tt> (43; 0% instances), <tt>[ADV](cs_cltt-pos-ADV.html)</tt> (14; 0% instances), <tt>[DET](cs_cltt-pos-DET.html)</tt> (1; 0% instances), <tt>[PRON](cs_cltt-pos-PRON.html)</tt> (1; 0% instances).

### `NUM`

440 <tt>[NUM](cs_cltt-pos-NUM.html)</tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt>[Gender](cs_cltt-feat-Gender.html)</tt><tt>=EMPTY</tt> (394; 90%), <tt>[NumValue](cs_cltt-feat-NumValue.html)</tt><tt>=EMPTY</tt> (382; 87%), <tt>[NumForm](cs_cltt-feat-NumForm.html)</tt><tt>=Roman</tt> (371; 84%), <tt>[Case](cs_cltt-feat-Case.html)</tt><tt>=EMPTY</tt> (371; 84%), <tt>[Number](cs_cltt-feat-Number.html)</tt><tt>=EMPTY</tt> (371; 84%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (440; 100% of non-empty `NumType`): 1 3 2 4 jeden 5 41 7 jedné tří

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (83) occur only with one value of `NumType`.

### `ADJ`

43 <tt>[ADJ](cs_cltt-pos-ADJ.html)</tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt>[Degree](cs_cltt-feat-Degree.html)</tt><tt>=EMPTY</tt> (43; 100%), <tt>[Polarity](cs_cltt-feat-Polarity.html)</tt><tt>=EMPTY</tt> (43; 100%), <tt>[Number](cs_cltt-feat-Number.html)</tt><tt>=Sing</tt> (43; 100%), <tt>[Animacy](cs_cltt-feat-Animacy.html)</tt><tt>=EMPTY</tt> (24; 56%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (43; 100% of non-empty `NumType`): prvním prvnímu prvního první třetí PÁTÁ ČTVRTÁ ŠESTÁ SEDMÁ druhé
* `EMPTY` (6496): účetní účetních účetního konsolidované konsolidující finanční účetním povinny výroční právní

### `ADV`

14 <tt>[ADV](cs_cltt-pos-ADV.html)</tt> tokens (2% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt>[Degree](cs_cltt-feat-Degree.html)</tt><tt>=EMPTY</tt> (14; 100%), <tt>[Polarity](cs_cltt-feat-Polarity.html)</tt><tt>=EMPTY</tt> (14; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (3; 21% of non-empty `NumType`): jednou
* `Ord` (11; 79% of non-empty `NumType`): poprvé
* `EMPTY` (773): dále zejména popřípadě jinak pouze kdy též například tak více

### `PRON`

1 <tt>[PRON](cs_cltt-pos-PRON.html)</tt> tokens (0% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt>[Gender](cs_cltt-feat-Gender.html)</tt><tt>=EMPTY</tt> (1; 100%), <tt>[Variant](cs_cltt-feat-Variant.html)</tt><tt>=EMPTY</tt> (1; 100%), <tt>[Case](cs_cltt-feat-Case.html)</tt><tt>=Ins</tt> (1; 100%), <tt>[Reflex](cs_cltt-feat-Reflex.html)</tt><tt>=EMPTY</tt> (1; 100%), <tt>[PronType](cs_cltt-feat-PronType.html)</tt><tt>=Dem,Ind</tt> (1; 100%), <tt>[Number](cs_cltt-feat-Number.html)</tt><tt>=EMPTY</tt> (1; 100%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (1; 100% of non-empty `NumType`): několika
* `EMPTY` (1211): se které která který to kterých kterým kterém kterému nichž

### `DET`

1 <tt>[DET](cs_cltt-pos-DET.html)</tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt>[Gender](cs_cltt-feat-Gender.html)</tt><tt>=EMPTY</tt> (1; 100%), <tt>[Poss](cs_cltt-feat-Poss.html)</tt><tt>=EMPTY</tt> (1; 100%), <tt>[Number[psor]](cs_cltt-feat-Number-psor.html)</tt><tt>=EMPTY</tt> (1; 100%), <tt>[Case](cs_cltt-feat-Case.html)</tt><tt>=Ins</tt> (1; 100%), <tt>[Gender[psor]](cs_cltt-feat-Gender-psor.html)</tt><tt>=EMPTY</tt> (1; 100%), <tt>[Person](cs_cltt-feat-Person.html)</tt><tt>=EMPTY</tt> (1; 100%), <tt>[PronType](cs_cltt-feat-PronType.html)</tt><tt>=Dem,Ind</tt> (1; 100%), <tt>[Number](cs_cltt-feat-Number.html)</tt><tt>=EMPTY</tt> (1; 100%).

`DET` tokens may have the following values of `NumType`:

* `Card` (1; 100% of non-empty `NumType`): několika
* `EMPTY` (594): jejich jeho této tohoto těchto tyto tato tento její tomto

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (39; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (1; 100%).

