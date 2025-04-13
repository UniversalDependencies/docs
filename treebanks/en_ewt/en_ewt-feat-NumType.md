---
layout: base
title:  'Statistics of NumType in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Mult`, `Ord`.

5609 tokens (2%) have a non-empty value of `NumType`.
1347 types (7%) occur at least once with a non-empty value of `NumType`.
1299 lemmas (8%) occur at least once with a non-empty value of `NumType`.
The feature is used with 5 part-of-speech tags: <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (5037; 2% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (257; 0% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (155; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (151; 0% instances), <tt><a href="en_ewt-pos-DET.html">DET</a></tt> (9; 0% instances).

### `NUM`

5037 <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="en_ewt-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (3926; 78%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (4886; 97% of non-empty `NumType`): <em>one, two, 2, 1, 3, 5, 4, 10, three, 20</em>
* `Frac` (151; 3% of non-empty `NumType`): <em>1.5, 20.000, 3.5, 1.00, 4.6, 6.00, 6.1, 1.1, 10.0, 10.2</em>
* `EMPTY` (15): <em>a, b, c</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1231) occur only with one value of `NumType`.

### `ADJ`

257 <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_ewt-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (257; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Frac` (5; 2% of non-empty `NumType`): <em>half</em>
* `Ord` (252; 98% of non-empty `NumType`): <em>first, second, third, 17th, fourth, 5th, 19th, 21st, 2nd, 7th</em>
* `EMPTY` (16596): <em>good, great, new, other, best, many, more, last, same, few</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (31) occur only with one value of `NumType`.

### `ADV`

155 <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="en_ewt-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (155; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Frac` (2; 1% of non-empty `NumType`): <em>half</em>
* `Mult` (77; 50% of non-empty `NumType`): <em>once, twice</em>
* `Ord` (76; 49% of non-empty `NumType`): <em>first, second, Third, fifth</em>
* `EMPTY` (12369): <em>so, just, when, very, also, how, now, even, then, there</em>

### `NOUN`

151 <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="en_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (103; 68%).

`NOUN` tokens may have the following values of `NumType`:

* `Card` (47; 31% of non-empty `NumType`): <em>1970s, 80's, 1980s, 1990s, 1590's, 1920s, 1960s, 20s, 60's, 70's</em>
* `Frac` (25; 17% of non-empty `NumType`): <em>half, third, fifth, fourth, tenth, thirds</em>
* `Ord` (79; 52% of non-empty `NumType`): <em>23rd, 26th, 30th, 15th, 20th, 22nd, 13th, 1st, 29th, 4th</em>
* `EMPTY` (42939): <em>time, people, service, place, thanks, food, way, year, day, number</em>

`NumType` seems to be **lexical feature** of `NOUN`. 100% lemmas (58) occur only with one value of `NumType`.

### `DET`

9 <tt><a href="en_ewt-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="en_ewt-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (9; 100%), <tt><a href="en_ewt-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (9; 100%).

`DET` tokens may have the following values of `NumType`:

* `Frac` (9; 100% of non-empty `NumType`): <em>half</em>
* `EMPTY` (20086): <em>the, a, this, an, all, some, any, no, that, these</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_ewt-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (126; 99%),
<tt>NUM --[<tt><a href="en_ewt-dep-compound.html">compound</a></tt>]--> NUM</tt> (120; 78%),
<tt>NUM --[<tt><a href="en_ewt-dep-flat.html">flat</a></tt>]--> NUM</tt> (69; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> NUM</tt> (61; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (15; 79%),
<tt>NUM --[<tt><a href="en_ewt-dep-nmod-unmarked.html">nmod:unmarked</a></tt>]--> NUM</tt> (10; 100%),
<tt>NOUN --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> NOUN</tt> (6; 55%),
<tt>NUM --[<tt><a href="en_ewt-dep-appos.html">appos</a></tt>]--> NUM</tt> (6; 100%),
<tt>ADV --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> ADV</tt> (2; 67%),
<tt>ADV --[<tt><a href="en_ewt-dep-advcl.html">advcl</a></tt>]--> ADV</tt> (1; 100%).

