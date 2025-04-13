---
layout: base
title:  'Statistics of NumForm in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Features: `NumForm`

This feature is language-specific.
It occurs with 4 different values: `Combi`, `Digit`, `Roman`, `Word`.

5609 tokens (2%) have a non-empty value of `NumForm`.
1347 types (7%) occur at least once with a non-empty value of `NumForm`.
1299 lemmas (8%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 5 part-of-speech tags: <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (5037; 2% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (257; 0% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (155; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (151; 0% instances), <tt><a href="en_ewt-pos-DET.html">DET</a></tt> (9; 0% instances).

### `NUM`

5037 <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="en_ewt-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (4886; 97%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (3926; 78% of non-empty `NumForm`): <em>2, 1, 3, 5, 4, 10, 20, 6, 2005, 2003</em>
* `Roman` (52; 1% of non-empty `NumForm`): <em>ii, VI, iii, i, v, XIII, iv, VII, VIII</em>
* `Word` (1059; 21% of non-empty `NumForm`): <em>one, two, three, four, m, million, five, six, k, billion</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (1231) occur only with one value of `NumForm`.

### `ADJ`

257 <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="en_ewt-feat-Degree.html">Degree</a></tt><tt>=Pos</tt> (257; 100%).

`ADJ` tokens may have the following values of `NumForm`:

* `Combi` (41; 16% of non-empty `NumForm`): <em>17th, 5th, 19th, 21st, 2nd, 7th, 10th, 14th, 1st, 20th</em>
* `Word` (216; 84% of non-empty `NumForm`): <em>first, second, third, fourth, half, sixth, fifth</em>

`NumForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (31) occur only with one value of `NumForm`.

### `ADV`

155 <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADV` and `NumForm` co-occurred: <tt><a href="en_ewt-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (155; 100%).

`ADV` tokens may have the following values of `NumForm`:

* `Word` (155; 100% of non-empty `NumForm`): <em>first, once, twice, second, Third, fifth, half</em>

### `NOUN`

151 <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> tokens (0% of all `NOUN` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NOUN` and `NumForm` co-occurred: <tt><a href="en_ewt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (103; 68%).

`NOUN` tokens may have the following values of `NumForm`:

* `Combi` (117; 77% of non-empty `NumForm`): <em>1970s, 23rd, 26th, 30th, 80's, 15th, 1980s, 20th, 22nd, 13th</em>
* `Digit` (1; 1% of non-empty `NumForm`): <em>22s</em>
* `Word` (33; 22% of non-empty `NumForm`): <em>half, first, third, Sixties, eighties, fifteenth, fifth, fourth, mid-nineties, sixth</em>

`NumForm` seems to be **lexical feature** of `NOUN`. 100% lemmas (58) occur only with one value of `NumForm`.

### `DET`

9 <tt><a href="en_ewt-pos-DET.html">DET</a></tt> tokens (0% of all `DET` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `DET` and `NumForm` co-occurred: <tt><a href="en_ewt-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (9; 100%), <tt><a href="en_ewt-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (9; 100%).

`DET` tokens may have the following values of `NumForm`:

* `Word` (9; 100% of non-empty `NumForm`): <em>half</em>

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<tt><a href="en_ewt-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (126; 99%),
<tt>NUM --[<tt><a href="en_ewt-dep-flat.html">flat</a></tt>]--> NUM</tt> (69; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> NUM</tt> (59; 97%),
<tt>NUM --[<tt><a href="en_ewt-dep-nmod-unmarked.html">nmod:unmarked</a></tt>]--> NUM</tt> (10; 100%),
<tt>NOUN --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> NOUN</tt> (6; 55%),
<tt>NUM --[<tt><a href="en_ewt-dep-appos.html">appos</a></tt>]--> NUM</tt> (4; 67%),
<tt>ADV --[<tt><a href="en_ewt-dep-conj.html">conj</a></tt>]--> ADV</tt> (2; 67%),
<tt>ADV --[<tt><a href="en_ewt-dep-advcl.html">advcl</a></tt>]--> ADV</tt> (1; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-obl.html">obl</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="en_ewt-dep-parataxis.html">parataxis</a></tt>]--> NUM</tt> (1; 100%).

