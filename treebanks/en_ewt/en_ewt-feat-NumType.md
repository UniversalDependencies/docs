---
layout: base
title:  'Statistics of NumType in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Mult`, `Ord`.

5446 tokens (2%) have a non-empty value of `NumType`.
1327 types (7%) occur at least once with a non-empty value of `NumType`.
1283 lemmas (8%) occur at least once with a non-empty value of `NumType`.
The feature is used with 5 part-of-speech tags: <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (4917; 2% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (257; 0% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (155; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (108; 0% instances), <tt><a href="en_ewt-pos-DET.html">DET</a></tt> (9; 0% instances).

### `NUM`

4917 <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> tokens (98% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="en_ewt-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (3819; 78%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (4917; 100% of non-empty `NumType`): <em>one, two, 2, 3, 5, 1, 10, 4, three, 20</em>
* `EMPTY` (116): <em>1, 2, 3, 4, a, b, 5, 10, 6, 7</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1235) occur only with one value of `NumType`.

### `ADJ`

257 <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="en_ewt-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (241; 94%).

`ADJ` tokens may have the following values of `NumType`:

* `Frac` (5; 2% of non-empty `NumType`): <em>half</em>
* `Ord` (252; 98% of non-empty `NumType`): <em>first, second, third, 17th, fourth, 21st, 5th, 10th, 14th, 19th</em>
* `EMPTY` (16551): <em>good, great, new, other, best, many, more, last, same, few</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (31) occur only with one value of `NumType`.

### `ADV`

155 <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="en_ewt-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (155; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Frac` (2; 1% of non-empty `NumType`): <em>half</em>
* `Mult` (77; 50% of non-empty `NumType`): <em>once, twice</em>
* `Ord` (76; 49% of non-empty `NumType`): <em>first, second, Third, fifth</em>
* `EMPTY` (12380): <em>so, just, when, very, also, how, now, even, then, there</em>

### `NOUN`

108 <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NOUN` and `NumType` co-occurred: <tt><a href="en_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (103; 95%).

`NOUN` tokens may have the following values of `NumType`:

* `Card` (4; 4% of non-empty `NumType`): <em>1960s, 1980s, 1990s, 22s</em>
* `Frac` (25; 23% of non-empty `NumType`): <em>half, third, fifth, fourth, tenth, thirds</em>
* `Ord` (79; 73% of non-empty `NumType`): <em>23rd, 26th, 30th, 15th, 20th, 22nd, 13th, 1st, 29th, 4th</em>
* `EMPTY` (43055): <em>time, people, service, place, thanks, food, way, year, day, number</em>

`NumType` seems to be **lexical feature** of `NOUN`. 100% lemmas (40) occur only with one value of `NumType`.

### `DET`

9 <tt><a href="en_ewt-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="en_ewt-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (9; 100%), <tt><a href="en_ewt-feat-PronType.html">PronType</a></tt><tt>=Neg</tt> (9; 100%).

`DET` tokens may have the following values of `NumType`:

* `Frac` (9; 100% of non-empty `NumType`): <em>half</em>
* `EMPTY` (20111): <em>the, a, this, an, all, some, any, no, that, these</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<tt><a href="en_ewt-dep-compound.html">compound</a></tt>]--> NUM</tt> (153; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (126; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (90; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> NUM</tt> (61; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-nmod-tmod.html">nmod:tmod</a></tt>]--> NUM</tt> (10; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-appos.html">appos</a></tt>]--> NUM</tt> (6; 100%),
<tt>ADV --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> ADV</tt> (2; 67%),
<tt>ADV --[<tt><a href="en_ewt-dep-advcl.html">advcl</a></tt>]--> ADV</tt> (1; 100%),
<tt>NOUN --[<tt><a href="en_ewt-dep-appos.html">appos</a></tt>]--> NOUN</tt> (1; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-list.html">list</a></tt>]--> NUM</tt> (1; 100%).

