

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

16693 tokens (7%) have a non-empty value of `Degree`.
2907 types (15%) occur at least once with a non-empty value of `Degree`.
2442 lemmas (15%) occur at least once with a non-empty value of `Degree`.
The feature is used with 5 part-of-speech tags: [en-pos/ADJ]() (15944; 6% instances), [en-pos/ADV]() (744; 0% instances), [en-pos/PROPN]() (3; 0% instances), [en-pos/INTJ]() (1; 0% instances), [en-pos/NOUN]() (1; 0% instances).

### `ADJ`

15944 [en-pos/ADJ]() tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (596; 4% of non-empty `Degree`): <em>more, better, less, larger, bigger, earlier, older, smaller, higher, worse</em>
* `Pos` (14799; 93% of non-empty `Degree`): <em>good, great, other, new, many, last, same, few, sure, little</em>
* `Sup` (549; 3% of non-empty `Degree`): <em>best, most, worst, cheapest, largest, latest, easiest, highest, oldest, biggest</em>
* `EMPTY` (13): <em>fake, such, Every, Global, Pakistani, criminal, enough, female, middle, real</em>

<table>
  <tr><th>Paradigm <i>less</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>less</em></td><td><em>less</em></td><td><em>less</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 100% lemmas (2425) occur only with one value of `Degree`.

### `ADV`

744 [en-pos/ADV]() tokens (6% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (744; 100%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (156; 21% of non-empty `Degree`): <em>later, better, longer, less, earlier, sooner, further, closer, higher, faster</em>
* `Pos` (490; 66% of non-empty `Degree`): <em>well, far, soon, long, hard, early, late, close, little, high</em>
* `Sup` (98; 13% of non-empty `Degree`): <em>least, best, worst, highest, longest</em>
* `EMPTY` (12298): <em>so, just, when, very, also, how, now, even, there, then</em>

`Degree` seems to be **lexical feature** of `ADV`. 100% lemmas (37) occur only with one value of `Degree`.

### `PROPN`

3 [en-pos/PROPN]() tokens (0% of all `PROPN` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `PROPN` and `Degree` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (3; 100%).

`PROPN` tokens may have the following values of `Degree`:

* `Pos` (3; 100% of non-empty `Degree`): <em>Central, Modern, english</em>
* `EMPTY` (16896): <em>bush, US, al, Iraq, enron, united, Iran, New, China, states</em>

### `NOUN`

1 [en-pos/NOUN]() tokens (0% of all `NOUN` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `NOUN` and `Degree` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (1; 100%).

`NOUN` tokens may have the following values of `Degree`:

* `Pos` (1; 100% of non-empty `Degree`): <em>equivalant</em>
* `EMPTY` (43789): <em>time, people, service, place, thanks, food, way, year, day, number</em>

### `INTJ`

1 [en-pos/INTJ]() tokens (0% of all `INTJ` tokens) have a non-empty value of `Degree`.

`INTJ` tokens may have the following values of `Degree`:

* `Pos` (1; 100% of non-empty `Degree`): <em>Bon</em>
* `EMPTY` (922): <em>please, yes, well, no, hi, like, ok, lol, hey, oh</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (609; 97%),
<tt>ADJ --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (105; 95%),
<tt>ADJ --[<a href="../dep/advcl.html">advcl</a>]--> ADJ</tt> (41; 87%),
<tt>ADJ --[<a href="../dep/parataxis.html">parataxis</a>]--> ADJ</tt> (36; 88%),
<tt>ADJ --[<a href="../dep/ccomp.html">ccomp</a>]--> ADJ</tt> (24; 96%),
<tt>ADJ --[<a href="../dep/nmod.html">nmod</a>]--> ADJ</tt> (22; 56%),
<tt>ADJ --[<a href="../dep/nmod:npmod.html">nmod:npmod</a>]--> ADJ</tt> (15; 65%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> ADJ</tt> (13; 93%),
<tt>ADJ --[<a href="../dep/list.html">list</a>]--> ADJ</tt> (13; 93%),
<tt>ADJ --[<a href="../dep/appos.html">appos</a>]--> ADJ</tt> (10; 100%).

