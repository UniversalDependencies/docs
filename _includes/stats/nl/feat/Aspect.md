

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This feature is universal.
It occurs with 1 different values: `Imp`.

18090 tokens (9%) have a non-empty value of `Aspect`.
2062 types (8%) occur at least once with a non-empty value of `Aspect`.
1248 lemmas (6%) occur at least once with a non-empty value of `Aspect`.
The feature is used with 3 part-of-speech tags: [nl-pos/VERB]() (9441; 5% instances), [nl-pos/AUX]() (8581; 4% instances), [nl-pos/X]() (68; 0% instances).

### `VERB`

9441 [nl-pos/VERB]() tokens (48% of all `VERB` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `VERB` and `Aspect` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (9441; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (9441; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (7579; 80%), <tt><a href="VerbType.html">VerbType</a>=EMPTY</tt> (7527; 80%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (5694; 60%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (4913; 52%).

`VERB` tokens may have the following values of `Aspect`:

* `Imp` (9441; 100% of non-empty `Aspect`): <em>heeft, kan, moet, komt, gaat, zei, heet, had, hebben, kwam</em>
* `EMPTY` (10222): <em>kunnen, komen, gaan, moeten, doen, zien, maken, gehouden, laten, nemen</em>

`Aspect` seems to be **lexical feature** of `VERB`. 100% lemmas (1166) occur only with one value of `Aspect`.

### `AUX`

8581 [nl-pos/AUX]() tokens (84% of all `AUX` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `AUX` and `Aspect` co-occurred: <tt><a href="Mood.html">Mood</a>=Ind</tt> (8581; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (8581; 100%), <tt><a href="Subcat.html">Subcat</a>=EMPTY</tt> (7984; 93%), <tt><a href="VerbType.html">VerbType</a>=EMPTY</tt> (7478; 87%), <tt><a href="Number.html">Number</a>=Sing</tt> (6814; 79%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (6006; 70%).

`AUX` tokens may have the following values of `Aspect`:

* `Imp` (8581; 100% of non-empty `Aspect`): <em>is, was, heeft, werd, zijn, wordt, zal, zou, hebben, heb</em>
* `EMPTY` (1607): <em>worden, zijn, hebben, geweest, geworden, willen, blijven, genoemd, gaan, maken</em>

`Aspect` seems to be **lexical feature** of `AUX`. 100% lemmas (137) occur only with one value of `Aspect`.

### `X`

68 [nl-pos/X]() tokens (2% of all `X` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `X` and `Aspect` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (68; 100%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (60; 88%), <tt><a href="Number.html">Number</a>=Sing</tt> (56; 82%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (52; 76%).

`X` tokens may have the following values of `Aspect`:

* `Imp` (68; 100% of non-empty `Aspect`): <em>je, dat, is, wat, wil, zeggen, ik, op, van, volgt</em>
* `EMPTY` (4158): <em>van, het, flo, op, voor, ten, met, aan, een, te</em>

`Aspect` seems to be **lexical feature** of `X`. 100% lemmas (51) occur only with one value of `Aspect`.

## Relations with Agreement in `Aspect`

The 10 most frequent relations where parent and child node agree in `Aspect`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (402; 68%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (195; 64%),
<tt>X --[<a href="../dep/compound.html">compound</a>]--> X</tt> (38; 100%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (23; 64%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> AUX</tt> (23; 56%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (21; 75%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> AUX</tt> (13; 76%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> AUX</tt> (8; 100%),
<tt>AUX --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (7; 58%),
<tt>VERB --[<a href="../dep/cc.html">cc</a>]--> VERB</tt> (5; 83%).

