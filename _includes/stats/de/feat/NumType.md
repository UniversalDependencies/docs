

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

8453 tokens (3%) have a non-empty value of `NumType`.
1614 types (3%) occur at least once with a non-empty value of `NumType`.
1566 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: [de-pos/NUM]() (7632; 3% instances), [de-pos/ADJ]() (644; 0% instances), [de-pos/PRON]() (177; 0% instances).

### `NUM`

7632 [de-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (7632; 100% of non-empty `NumType`): <em>zwei, drei, vier, 2007, 2006, fünf, 2009, 2008, 2010, sechs</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1556) occur only with one value of `NumType`.

### `ADJ`

644 [de-pos/ADJ]() tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Degree.html">Degree</a>=Pos</tt> (608; 94%), <tt><a href="Number.html">Number</a>=Sing</tt> (394; 61%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (644; 100% of non-empty `NumType`): <em>ersten, erste, zweiten, zweite, dritten, erster, dritte, erstes, fünften, siebten</em>
* `EMPTY` (20672): <em>später, anderen, weitere, neue, bekannt, neuen, großen, große, deutschen, gut</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (15) occur only with one value of `NumType`.

### `PRON`

177 [de-pos/PRON]() tokens (1% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (177; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (177; 100%), <tt><a href="PronType.html">PronType</a>=Tot</tt> (177; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (144; 81%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (177; 100% of non-empty `NumType`): <em>beiden, beide, beider, beides</em>
* `EMPTY` (14801): <em>er, sich, sie, es, die, ich, der, man, diese, das</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (324; 100%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (75; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (59; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (28; 100%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (12; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (4; 57%),
<tt>NUM --[<a href="../dep/amod.html">amod</a>]--> NUM</tt> (4; 100%),
<tt>NUM --[<a href="../dep/dobj.html">dobj</a>]--> NUM</tt> (2; 100%),
<tt>NUM --[<a href="../dep/dep.html">dep</a>]--> NUM</tt> (1; 100%).

