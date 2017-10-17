

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

8158 tokens (3%) have a non-empty value of `NumType`.
1582 types (3%) occur at least once with a non-empty value of `NumType`.
1535 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: [de-pos/NUM]() (7367; 3% instances), [de-pos/ADJ]() (623; 0% instances), [de-pos/PRON]() (168; 0% instances).

### `NUM`

7367 [de-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (7367; 100% of non-empty `NumType`): <em>zwei, drei, vier, 2007, 2006, 2009, fünf, 2008, 2010, sechs</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (1525) occur only with one value of `NumType`.

### `ADJ`

623 [de-pos/ADJ]() tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Degree.html">Degree</a>=Pos</tt> (587; 94%), <tt><a href="Number.html">Number</a>=Sing</tt> (381; 61%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (623; 100% of non-empty `NumType`): <em>ersten, erste, zweiten, zweite, dritten, erster, dritte, erstes, fünften, siebten</em>
* `EMPTY` (19674): <em>später, weitere, anderen, neue, bekannt, neuen, großen, große, deutschen, gut</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (15) occur only with one value of `NumType`.

### `PRON`

168 [de-pos/PRON]() tokens (1% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="PronType.html">PronType</a>=Tot</tt> (168; 100%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (168; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (168; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (136; 81%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (168; 100% of non-empty `NumType`): <em>beiden, beide, beider, beides</em>
* `EMPTY` (13770): <em>er, sich, sie, es, die, ich, der, diese, man, dieser</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (322; 100%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (75; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (52; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (18; 100%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (11; 100%),
<tt>NUM --[<a href="../dep/amod.html">amod</a>]--> NUM</tt> (3; 100%),
<tt>NUM --[<a href="../dep/obj.html">obj</a>]--> NUM</tt> (2; 100%),
<tt>NUM --[<a href="../dep/dep.html">dep</a>]--> NUM</tt> (1; 100%).

