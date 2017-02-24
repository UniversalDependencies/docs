

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is language-specific.
It occurs with 2 different values: `Neg`, `Pos`.

9822 tokens (5%) have a non-empty value of `Polarity`.
56 types (0%) occur at least once with a non-empty value of `Polarity`.
25 lemmas (0%) occur at least once with a non-empty value of `Polarity`.
The feature is used with 4 part-of-speech tags: [ro-pos/CCONJ]() (6468; 3% instances), [ro-pos/SCONJ]() (1836; 1% instances), [ro-pos/PART]() (1515; 1% instances), [ro-pos/ADV]() (3; 0% instances).

### `CCONJ`

6468 [ro-pos/CCONJ]() tokens (100% of all `CCONJ` tokens) have a non-empty value of `Polarity`.

`CCONJ` tokens may have the following values of `Polarity`:

* `Pos` (6468; 100% of non-empty `Polarity`): <em>și, sau, dar, însă, și-, ci, ori, fie, deci, căci</em>

`Polarity` seems to be **lexical feature** of `CCONJ`. 100% lemmas (12) occur only with one value of `Polarity`.

### `SCONJ`

1836 [ro-pos/SCONJ]() tokens (100% of all `SCONJ` tokens) have a non-empty value of `Polarity`.

`SCONJ` tokens may have the following values of `Polarity`:

* `Pos` (1836; 100% of non-empty `Polarity`): <em>că, dacă, până, încât, deoarece, deși, fără, fiindcă, întrucât, de</em>

`Polarity` seems to be **lexical feature** of `SCONJ`. 100% lemmas (10) occur only with one value of `Polarity`.

### `PART`

1515 [ro-pos/PART]() tokens (34% of all `PART` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `PART` and `Polarity` co-occurred: <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (1515; 100%), <tt><a href="PartType.html">PartType</a>=EMPTY</tt> (1515; 100%).

`PART` tokens may have the following values of `Polarity`:

* `Neg` (1515; 100% of non-empty `Polarity`): <em>nu, n-</em>

### `ADV`

3 [ro-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `Polarity`.

The most frequent other feature values with which `ADV` and `Polarity` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (3; 100%), <tt><a href="Degree.html">Degree</a>=Pos</tt> (2; 67%).

`ADV` tokens may have the following values of `Polarity`:

* `Neg` (3; 100% of non-empty `Polarity`): <em>non, non-</em>

## Relations with Agreement in `Polarity`

The 10 most frequent relations where parent and child node agree in `Polarity`:
<tt>CCONJ --[<a href="../dep/conj.html">conj</a>]--> CCONJ</tt> (17; 100%),
<tt>SCONJ --[<a href="../dep/fixed.html">fixed</a>]--> CCONJ</tt> (10; 100%),
<tt>CCONJ --[<a href="../dep/fixed.html">fixed</a>]--> CCONJ</tt> (4; 100%),
<tt>CCONJ --[<a href="../dep/fixed.html">fixed</a>]--> SCONJ</tt> (2; 100%),
<tt>PART --[<a href="../dep/conj.html">conj</a>]--> PART</tt> (1; 100%),
<tt>SCONJ --[<a href="../dep/conj.html">conj</a>]--> SCONJ</tt> (1; 100%),
<tt>SCONJ --[<a href="../dep/cc.html">cc</a>]--> CCONJ</tt> (1; 100%).

