

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

4661 tokens (2%) have a non-empty value of `NumType`.
1112 types (6%) occur at least once with a non-empty value of `NumType`.
1087 lemmas (7%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: [en-pos/NUM]() (4376; 2% instances), [en-pos/ADJ]() (213; 0% instances), [en-pos/ADV]() (72; 0% instances).

### `NUM`

4376 [en-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (4376; 100% of non-empty `NumType`): <em>one, two, 2, 3, 5, 1, 4, 10, three, 6</em>
* `EMPTY` (1): <em>9/11</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1063) occur only with one value of `NumType`.

### `ADJ`

213 [en-pos/ADJ]() tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Degree.html">Degree</a>=Pos</tt> (213; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (213; 100% of non-empty `NumType`): <em>first, second, third, 5th, fourth, 19th, 2nd, 1st, 20th, 3rd</em>
* `EMPTY` (14053): <em>good, other, great, best, new, many, more, same, last, few</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (22) occur only with one value of `NumType`.

### `ADV`

72 [en-pos/ADV]() tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (72; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (71; 99% of non-empty `NumType`): <em>once, twice</em>
* `Ord` (1; 1% of non-empty `NumType`): <em>first</em>
* `EMPTY` (11742): <em>so, just, when, very, also, how, now, even, then, there</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (131; 100%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (110; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (66; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (52; 100%),
<tt>NUM --[<a href="../dep/nmod:tmod.html">nmod:tmod</a>]--> NUM</tt> (8; 100%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (5; 100%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (2; 67%),
<tt>NUM --[<a href="../dep/case.html">case</a>]--> NUM</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (2; 100%),
<tt>NUM --[<a href="../dep/reparandum.html">reparandum</a>]--> NUM</tt> (1; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

802 tokens (2%) have a non-empty value of `NumType`.
244 types (4%) occur at least once with a non-empty value of `NumType`.
235 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: [en-pos/NUM]() (691; 2% instances), [en-pos/ADJ]() (106; 0% instances), [en-pos/PRON]() (5; 0% instances).

### `NUM`

691 [en-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (691; 100% of non-empty `NumType`): <em>two, one, 1, three, four, 18, 2, 3, 20, 2002</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (222) occur only with one value of `NumType`.

### `ADJ`

106 [en-pos/ADJ]() tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Degree.html">Degree</a>=Pos</tt> (106; 100%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (106; 100% of non-empty `NumType`): <em>first, last, second, third, II, III, I, IV, VI, VIII</em>
* `EMPTY` (2933): <em>other, new, European, economic, social, financial, many, own, same, human</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (12) occur only with one value of `NumType`.

### `PRON`

5 [en-pos/PRON]() tokens (0% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (5; 100%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (5; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (5; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (5; 100%).

`PRON` tokens may have the following values of `NumType`:

* `Ord` (5; 100% of non-empty `NumType`): <em>third, first, latter, second</em>
* `EMPTY` (1493): <em>it, that, which, he, I, we, they, you, this, who</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (27; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (25; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (12; 100%),
<tt>NUM --[<a href="../dep/goeswith.html">goeswith</a>]--> NUM</tt> (1; 100%).

