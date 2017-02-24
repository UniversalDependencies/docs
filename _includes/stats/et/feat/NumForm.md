

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This feature is language-specific.
It occurs with 2 different values: `Digit`, `Letter`.

512 tokens (1%) have a non-empty value of `NumForm`.
260 types (2%) occur at least once with a non-empty value of `NumForm`.
177 lemmas (3%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 2 part-of-speech tags: [et-pos/NUM]() (392; 1% instances), [et-pos/ADJ]() (120; 0% instances).

### `NUM`

392 [et-pos/NUM]() tokens (97% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (388; 99%), <tt><a href="Number.html">Number</a>=Sing</tt> (303; 77%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (162; 41% of non-empty `NumForm`): <em>2, 15, 0, 10, 000, 1, 12, 14, 21, 500</em>
* `Letter` (230; 59% of non-empty `NumForm`): <em>kaks, paar, kahe, üks, viis, ühe, kolm, seitse, kahest, kahte</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (130) occur only with one value of `NumForm`.

### `ADJ`

120 [et-pos/ADJ]() tokens (5% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (120; 100%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (120; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (120; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (120; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (105; 88%).

`ADJ` tokens may have the following values of `NumForm`:

* `Digit` (52; 43% of non-empty `NumForm`): <em>1992., 1., 16., 2., 13., 1971., 2009., 3., 551., 10.</em>
* `Letter` (68; 57% of non-empty `NumForm`): <em>esimest, kolmandat, teise, esimene, esimeses, teisel, esimesel, teises, esimesed, kaheksandal</em>

`NumForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (50) occur only with one value of `NumForm`.

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<a href="../dep/flat.html">flat</a>]--> NUM</tt> (23; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (12; 67%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (9; 82%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (4; 80%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (4; 80%),
<tt>ADJ --[<a href="../dep/flat.html">flat</a>]--> NUM</tt> (1; 100%),
<tt>ADJ --[<a href="../dep/flat.html">flat</a>]--> ADJ</tt> (1; 100%).

