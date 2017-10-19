---
layout: base
title:  'Statistics of NumType in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Features: `NumType`

This feature is universal.
It occurs with 5 different values: `Card`, `Frac`, `Mult`, `Ord`, `Sets`.
Some words have combined values of the feature; 1 combinations have been observed: `Mult|Sets`.

49209 tokens (3%) have a non-empty value of `NumType`.
4025 types (3%) occur at least once with a non-empty value of `NumType`.
3573 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="cs-pos-NUM.html">NUM</a></tt> (41507; 3% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (4990; 0% instances), <tt><a href="cs-pos-DET.html">DET</a></tt> (1848; 0% instances), <tt><a href="cs-pos-ADV.html">ADV</a></tt> (864; 0% instances).

### `NUM`

41507 <tt><a href="cs-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="cs-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (36748; 89%), <tt><a href="cs-feat-NumValue.html">NumValue</a></tt><tt>=EMPTY</tt> (33457; 81%), <tt><a href="cs-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (29884; 72%), <tt><a href="cs-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (29858; 72%), <tt><a href="cs-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (29481; 71%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (41165; 99% of non-empty `NumType`): 1 2 3 dva tři 4 jeden 6 dvě tisíc
* `Frac` (342; 1% of non-empty `NumType`): třetiny třetinu třetina třetině čtvrtinu čtvrtina desetinu čtvrtiny pětinu desetina

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (3437) occur only with one value of `NumType`.

### `ADJ`

4990 <tt><a href="cs-pos-ADJ.html">ADJ</a></tt> tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="cs-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (4990; 100%), <tt><a href="cs-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (4990; 100%), <tt><a href="cs-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4215; 84%), <tt><a href="cs-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (3246; 65%).

`ADJ` tokens may have the following values of `NumType`:

* `Mult,Sets` (71; 1% of non-empty `NumType`): dvojí obojí dvojím dvojího dvoje obojím trojí oboje dvojími obé
* `Ord` (4889; 98% of non-empty `NumType`): první druhé prvním třetí druhý druhou prvních prvního druhá druhém
* `Sets` (30; 1% of non-empty `NumType`): jedny jedni jedněch jedněm jedněmi
* `EMPTY` (185347): další české nové poslední státní dalších možné vlastní jiné každý

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (67) occur only with one value of `NumType`.

### `DET`

1848 <tt><a href="cs-pos-DET.html">DET</a></tt> tokens (3% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="cs-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (1848; 100%), <tt><a href="cs-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (1848; 100%), <tt><a href="cs-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (1848; 100%), <tt><a href="cs-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (1844; 100%), <tt><a href="cs-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (1832; 99%), <tt><a href="cs-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (1832; 99%), <tt><a href="cs-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (1545; 84%).

`DET` tokens may have the following values of `NumType`:

* `Card` (1846; 100% of non-empty `NumType`): několik několika mnoho mnoha kolik tolik málo moc mála nemálo
* `Ord` (2; 0% of non-empty `NumType`): několikáté několikátý
* `EMPTY` (53465): to které který jeho která jejich své tím kteří tom

`NumType` seems to be **lexical feature** of `DET`. 100% lemmas (16) occur only with one value of `NumType`.

### `ADV`

864 <tt><a href="cs-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="cs-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (864; 100%), <tt><a href="cs-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (864; 100%), <tt><a href="cs-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (741; 86%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (536; 62% of non-empty `NumType`): dvakrát jednou třikrát několikrát pětkrát desetkrát čtyřikrát nejednou šestkrát mnohokrát
* `Ord` (328; 38% of non-empty `NumType`): poprvé podruhé potřetí počtvrté pošesté podvanácté popáté Pošestnácté podesáté podvaadvacáté
* `EMPTY` (79133): tak už také jak včera ještě již tedy dnes pak

`NumType` seems to be **lexical feature** of `ADV`. 100% lemmas (56) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="cs-dep-conj.html">conj</a></tt>]--> NUM</tt> (3255; 100%),
<tt>NUM --[<tt><a href="cs-dep-compound.html">compound</a></tt>]--> NUM</tt> (2801; 100%),
<tt>NUM --[<tt><a href="cs-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (81; 100%),
<tt>ADJ --[<tt><a href="cs-dep-conj.html">conj</a></tt>]--> ADJ</tt> (69; 53%),
<tt>NUM --[<tt><a href="cs-dep-dep.html">dep</a></tt>]--> NUM</tt> (52; 100%),
<tt>NUM --[<tt><a href="cs-dep-det-nummod.html">det:nummod</a></tt>]--> DET</tt> (16; 100%),
<tt>ADJ --[<tt><a href="cs-dep-orphan.html">orphan</a></tt>]--> ADJ</tt> (10; 63%),
<tt>DET --[<tt><a href="cs-dep-conj.html">conj</a></tt>]--> DET</tt> (6; 86%),
<tt>DET --[<tt><a href="cs-dep-appos.html">appos</a></tt>]--> NUM</tt> (4; 100%),
<tt>NUM --[<tt><a href="cs-dep-conj.html">conj</a></tt>]--> DET</tt> (3; 60%).

