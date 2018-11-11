---
layout: base
title:  'Statistics of NumType in UD_French-FTB'
udver: '2'
---

## Treebank Statistics: UD_French-FTB: Features: `NumType`

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

21566 tokens (4%) have a non-empty value of `NumType`.
86 types (5%) occur at least once with a non-empty value of `NumType`.
90 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> (17779; 3% instances), <tt><a href="fr_ftb-pos-ADJ.html">ADJ</a></tt> (1850; 0% instances), <tt><a href="fr_ftb-pos-NOUN.html">NOUN</a></tt> (1500; 0% instances), <tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> (437; 0% instances).

### `NUM`

17779 <tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (17779; 100% of non-empty `NumType`): <em>_, Deux, Trois, Dix, Quatre, 1992, Vingt, Cinq, Sept, Cent</em>
* `EMPTY` (18): <em>_</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (78) occur only with one value of `NumType`.

### `ADJ`

1850 <tt><a href="fr_ftb-pos-ADJ.html">ADJ</a></tt> tokens (5% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="fr_ftb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1276; 69%), <tt><a href="fr_ftb-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (1114; 60%).

`ADJ` tokens may have the following values of `NumType`:

* `Card` (411; 22% of non-empty `NumType`): <em>_</em>
* `Ord` (1439; 78% of non-empty `NumType`): <em>_, Premier, Deuxième, Première, 1er, Second, Seconde, Troisième, 40ème, Dixième</em>
* `EMPTY` (34712): <em>_, Autre, Tout, tous, Seul, Difficile, Seule, Seuls, Toutes, Dernier</em>

### `NOUN`

1500 <tt><a href="fr_ftb-pos-NOUN.html">NOUN</a></tt> tokens (1% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="fr_ftb-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (1487; 99%), <tt><a href="fr_ftb-feat-Number.html">Number</a></tt><tt>=Plur</tt> (1297; 86%).

`NOUN` tokens may have the following values of `NumType`:

* `Card` (1499; 100% of non-empty `NumType`): <em>_, MM., C, V</em>
* `Ord` (1; 0% of non-empty `NumType`): <em>_</em>
* `EMPTY` (115587): <em>_, M., Mr, DOC, face, Fin, Résultat, Article, Grâce, Côté</em>

### `PRON`

437 <tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> tokens (2% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="fr_ftb-feat-PronType.html">PronType</a></tt><tt>=Rel</tt> (437; 100%), <tt><a href="fr_ftb-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (437; 100%), <tt><a href="fr_ftb-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (430; 98%), <tt><a href="fr_ftb-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (224; 51%), <tt><a href="fr_ftb-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (224; 51%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (437; 100% of non-empty `NumType`): <em>_, 30 000, Cinq, Deux, Quarante, Quatre, Six, Trois, Une</em>
* `EMPTY` (22512): <em>_, il, c', On, Elle, ils, ce, nous, Cela, elles</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="fr_ftb-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (2779; 100%),
<tt>NUM --[<tt><a href="fr_ftb-dep-conj.html">conj</a></tt>]--> NUM</tt> (172; 100%),
<tt>NUM --[<tt><a href="fr_ftb-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (71; 99%),
<tt>PRON --[<tt><a href="fr_ftb-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (54; 93%),
<tt>NUM --[<tt><a href="fr_ftb-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (41; 100%),
<tt>PRON --[<tt><a href="fr_ftb-dep-conj.html">conj</a></tt>]--> PRON</tt> (19; 90%),
<tt>ADJ --[<tt><a href="fr_ftb-dep-fixed.html">fixed</a></tt>]--> NUM</tt> (14; 100%),
<tt>NUM --[<tt><a href="fr_ftb-dep-fixed.html">fixed</a></tt>]--> ADJ</tt> (14; 78%),
<tt>PRON --[<tt><a href="fr_ftb-dep-orphan.html">orphan</a></tt>]--> NUM</tt> (9; 90%),
<tt>ADJ --[<tt><a href="fr_ftb-dep-advcl.html">advcl</a></tt>]--> ADJ</tt> (6; 100%).

