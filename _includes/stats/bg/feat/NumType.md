

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

3449 tokens (2%) have a non-empty value of `NumType`.
715 types (3%) occur at least once with a non-empty value of `NumType`.
548 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: [bg-pos/NUM]() (2038; 1% instances), [bg-pos/ADJ]() (895; 1% instances), [bg-pos/ADV]() (516; 0% instances).

### `NUM`

2038 [bg-pos/NUM]() tokens (97% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Definite.html">Definite</a>=Ind</tt> (1908; 94%), <tt><a href="Number.html">Number</a>=Plur</tt> (1810; 89%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1544; 76%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (2038; 100% of non-empty `NumType`): <em>две, един, два, 2, една, 1, 3, 10, едно, 20</em>
* `EMPTY` (66): <em>три, две, половин, двамата, двете, два, един, тримата, 1, 3</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (407) occur only with one value of `NumType`.

### `ADJ`

895 [bg-pos/ADJ]() tokens (7% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (895; 100%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (895; 100%), <tt><a href="Aspect.html">Aspect</a>=EMPTY</tt> (895; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (836; 93%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (712; 80%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (663; 74%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (895; 100% of non-empty `NumType`): <em>2001, 2000, първата, първите, 1, втори, първи, 1998, II, втора</em>
* `EMPTY` (12694): <em>други, народното, българската, нова, другите, нови, европейската, последните, друг, цялата</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (163) occur only with one value of `NumType`.

### `ADV`

516 [bg-pos/ADV]() tokens (8% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (400; 78%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (396; 77%).

`ADV` tokens may have the following values of `NumType`:

* `Card` (516; 100% of non-empty `NumType`): <em>много, повече, толкова, повечето, малко, колко, колкото, по-малко, най-много, доколкото</em>
* `EMPTY` (6042): <em>още, вчера, само, вече, когато, защото, обаче, сега, как, така</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/mwe.html">mwe</a>]--> NUM</tt> (52; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (35; 100%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (34; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (13; 87%).

