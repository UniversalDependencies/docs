

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

3259 tokens (2%) have a non-empty value of `NumType`.
688 types (3%) occur at least once with a non-empty value of `NumType`.
523 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 3 part-of-speech tags: [bg-pos/NUM]() (1883; 1% instances), [bg-pos/ADJ]() (818; 1% instances), [bg-pos/ADV]() (558; 0% instances).

### `NUM`

1883 [bg-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Definite.html">Definite</a>=Ind</tt> (1748; 93%), <tt><a href="Number.html">Number</a>=Plur</tt> (1664; 88%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1419; 75%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (1880; 100% of non-empty `NumType`): <em>две, един, 2, два, една, 1, 3, три, едно, 10</em>
* `Ord` (3; 0% of non-empty `NumType`): <em>02, 08, 2000</em>

<table>
  <tr><th>Paradigm <i>2000</i></th><th><tt>Card</tt></th><th><tt>Ord</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>2000</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Plur</tt></td><td><em>2000</em></td><td></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (384) occur only with one value of `NumType`.

### `ADJ`

818 [bg-pos/ADJ]() tokens (7% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (818; 100%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (818; 100%), <tt><a href="Aspect.html">Aspect</a>=EMPTY</tt> (818; 100%), <tt><a href="Degree.html">Degree</a>=Pos</tt> (818; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (764; 93%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (601; 73%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (818; 100% of non-empty `NumType`): <em>2001, 2000, първата, първите, 1, първи, втори, първия, II, втора</em>
* `EMPTY` (11396): <em>народното, други, българската, другите, нова, нови, последните, друг, европейската, български</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (157) occur only with one value of `NumType`.

### `ADV`

558 [bg-pos/ADV]() tokens (9% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (451; 81%), <tt><a href="Degree.html">Degree</a>=Pos</tt> (418; 75%).

`ADV` tokens may have the following values of `NumType`:

* `Card` (558; 100% of non-empty `NumType`): <em>много, повече, малко, толкова, повечето, колко, колкото, по-малко, най-много, най-малко</em>
* `EMPTY` (5329): <em>още, вчера, само, вече, когато, защото, обаче, как, сега, така</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/flat.html">flat</a>]--> NUM</tt> (45; 100%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (30; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (24; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (12; 86%).

