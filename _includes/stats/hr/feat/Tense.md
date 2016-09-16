

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

8111 tokens (9%) have a non-empty value of `Tense`.
1007 types (6%) occur at least once with a non-empty value of `Tense`.
629 lemmas (7%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: [hr-pos/AUX]() (5299; 6% instances), [hr-pos/VERB]() (2812; 3% instances).

### `AUX`

5299 [hr-pos/AUX]() tokens (90% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (5299; 100%), <tt><a href="Person.html">Person</a>=3</tt> (5119; 97%), <tt><a href="Number.html">Number</a>=Sing</tt> (3982; 75%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (379; 7% of non-empty `Tense`): <em>bi, bih, bismo</em>
* `Pres` (4920; 93% of non-empty `Tense`): <em>je, su, će, nije, smo, neće, nisu, sam, bude, jest</em>
* `EMPTY` (597): <em>biti, bilo, bio, bila, bit, bili, bile</em>

<table>
  <tr><th>Paradigm <i>biti</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><a href="Negative.html">Negative</a>=Neg|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1</tt></td><td><em>nisam</em></td><td></td></tr>
  <tr><td><tt><a href="Negative.html">Negative</a>=Neg|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>nije</em></td><td></td></tr>
  <tr><td><tt><a href="Negative.html">Negative</a>=Neg|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1</tt></td><td><em>nismo</em></td><td></td></tr>
  <tr><td><tt><a href="Negative.html">Negative</a>=Neg|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=2</tt></td><td><em>niste</em></td><td></td></tr>
  <tr><td><tt><a href="Negative.html">Negative</a>=Neg|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td><em>nisu</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1</tt></td><td><em>sam, jesam</em></td><td><em>bih</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=2</tt></td><td></td><td><em>bi</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>je, bude, jest, jeste</em></td><td><em>bi</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1</tt></td><td><em>smo</em></td><td><em>bismo</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=2</tt></td><td><em>Jeste, ste</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td><em>su, budu, jesu, biti</em></td><td><em>bi</em></td></tr>
</table>

### `VERB`

2812 [hr-pos/VERB]() tokens (38% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (2812; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (2812; 100%), <tt><a href="Person.html">Person</a>=3</tt> (2595; 92%), <tt><a href="Number.html">Number</a>=Sing</tt> (1766; 63%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (5; 0% of non-empty `Tense`): <em>može, dogodi, iznosi, osigura</em>
* `Pres` (2807; 100% of non-empty `Tense`): <em>kaže, ima, mora, može, treba, navodi, očekuje, mogu, predstavlja, kažu</em>
* `EMPTY` (4500): <em>izjavio, kazao, rekao, dodao, mogla, imati, izjavila, trebala, priopćila, istaknuo</em>

<table>
  <tr><th>Paradigm <i>moći</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1</tt></td><td><em>mogu</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>može</em></td><td><em>može</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1</tt></td><td><em>možemo</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=2</tt></td><td><em>možete</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td><em>mogu</em></td><td></td></tr>
</table>

`Tense` seems to be **lexical feature** of `VERB`. 99% lemmas (624) occur only with one value of `Tense`.

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (176; 65%),
<tt>AUX --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (10; 91%),
<tt>VERB --[<a href="../dep/dobj.html">dobj</a>]--> AUX</tt> (4; 80%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (4; 67%),
<tt>VERB --[<a href="../dep/cop.html">cop</a>]--> VERB</tt> (3; 100%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (2; 67%),
<tt>AUX --[<a href="../dep/remnant.html">remnant</a>]--> AUX</tt> (1; 100%),
<tt>AUX --[<a href="../dep/advcl.html">advcl</a>]--> AUX</tt> (1; 100%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (1; 100%).

