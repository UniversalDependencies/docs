

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This feature is language-specific.
It occurs with 3 different values: `Digit`, `Letter`, `Roman`.

5199 tokens (2%) have a non-empty value of `NumForm`.
1290 types (3%) occur at least once with a non-empty value of `NumForm`.
962 lemmas (4%) occur at least once with a non-empty value of `NumForm`.
The feature is used with 6 part-of-speech tags: [et-pos/NUM]() (4077; 2% instances), [et-pos/ADJ]() (1106; 0% instances), [et-pos/X]() (8; 0% instances), [et-pos/NOUN]() (3; 0% instances), [et-pos/SYM]() (3; 0% instances), [et-pos/PRON]() (2; 0% instances).

### `NUM`

4077 [et-pos/NUM]() tokens (99% of all `NUM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NUM` and `NumForm` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (4073; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (3158; 77%).

`NUM` tokens may have the following values of `NumForm`:

* `Digit` (2132; 52% of non-empty `NumForm`): <em>000, 2000, 20.11.2002, 15, 20, 10, 50, 30, 1997, 1999</em>
* `Letter` (1945; 48% of non-empty `NumForm`): <em>kaks, kolm, üks, kahe, miljonit, paar, ühe, viis, neli, miljoni</em>

`NumForm` seems to be **lexical feature** of `NUM`. 100% lemmas (744) occur only with one value of `NumForm`.

### `ADJ`

1106 [et-pos/ADJ]() tokens (6% of all `ADJ` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `ADJ` and `NumForm` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (1106; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (1106; 100%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (1106; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (1106; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (945; 85%).

`ADJ` tokens may have the following values of `NumForm`:

* `Digit` (583; 53% of non-empty `NumForm`): <em>1., 1992., 1997., 1996., 16., 17., 19., 1999., 6., 1990.</em>
* `Letter` (486; 44% of non-empty `NumForm`): <em>esimene, esimest, esimese, teine, teise, teist, esimesel, esimesed, teisel, kolmandat</em>
* `Roman` (37; 3% of non-empty `NumForm`): <em>XI, II, ADV, XX, III, XII, MDCXXXII, XIX, IX</em>

`NumForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (226) occur only with one value of `NumForm`.

### `X`

8 [et-pos/X]() tokens (9% of all `X` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `X` and `NumForm` co-occurred: <tt><a href="Abbr.html">Abbr</a>=EMPTY</tt> (8; 100%), <tt><a href="Foreign.html">Foreign</a>=EMPTY</tt> (8; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (6; 75%), <tt><a href="Case.html">Case</a>=Nom</tt> (5; 63%).

`X` tokens may have the following values of `NumForm`:

* `Roman` (8; 100% of non-empty `NumForm`): <em>I</em>

### `NOUN`

3 [et-pos/NOUN]() tokens (0% of all `NOUN` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `NOUN` and `NumForm` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (2; 67%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (2; 67%).

`NOUN` tokens may have the following values of `NumForm`:

* `Letter` (1; 33% of non-empty `NumForm`): <em>paarid</em>
* `Roman` (2; 67% of non-empty `NumForm`): <em>CX, XM</em>

### `SYM`

3 [et-pos/SYM]() tokens (3% of all `SYM` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `SYM` and `NumForm` co-occurred: <tt><a href="Case.html">Case</a>=Nom</tt> (3; 100%), <tt><a href="Abbr.html">Abbr</a>=EMPTY</tt> (3; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (3; 100%).

`SYM` tokens may have the following values of `NumForm`:

* `Digit` (3; 100% of non-empty `NumForm`): <em>%</em>

### `PRON`

2 [et-pos/PRON]() tokens (0% of all `PRON` tokens) have a non-empty value of `NumForm`.

The most frequent other feature values with which `PRON` and `NumForm` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (2; 100%), <tt><a href="PronType.html">PronType</a>=Dem</tt> (2; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (2; 100%).

`PRON` tokens may have the following values of `NumForm`:

* `Letter` (2; 100% of non-empty `NumForm`): <em>kolmandal, üks</em>

## Relations with Agreement in `NumForm`

The 10 most frequent relations where parent and child node agree in `NumForm`:
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (233; 69%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (147; 94%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (69; 96%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (19; 76%),
<tt>SYM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (3; 100%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> ADJ</tt> (2; 100%).

