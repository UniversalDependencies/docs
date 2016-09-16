

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This feature is universal.
It occurs with 1 different values: `Imp`.

19008 tokens (9%) have a non-empty value of `Aspect`.
2128 types (8%) occur at least once with a non-empty value of `Aspect`.
1318 lemmas (6%) occur at least once with a non-empty value of `Aspect`.
The feature is used with 3 part-of-speech tags: [nl-pos/VERB]() (11536; 6% instances), [nl-pos/AUX]() (7398; 4% instances), [nl-pos/X]() (74; 0% instances).

### `VERB`

11536 [nl-pos/VERB]() tokens (57% of all `VERB` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `VERB` and `Aspect` co-occurred: <tt><a href="Mood.html">Mood</a>=Ind</tt> (11536; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (11536; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (9183; 80%), <tt><a href="VerbType.html">VerbType</a>=EMPTY</tt> (8350; 72%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (7090; 61%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (5943; 52%).

`VERB` tokens may have the following values of `Aspect`:

* `Imp` (11536; 100% of non-empty `Aspect`): <em>zal, heeft, kan, zou, moet, komt, wil, gaat, zullen, hebben</em>
* `EMPTY` (8576): <em>kunnen, gaan, komen, maken, moeten, zien, doen, laten, nemen, geven</em>

`Aspect` seems to be **lexical feature** of `VERB`. 100% lemmas (1254) occur only with one value of `Aspect`.

### `AUX`

7398 [nl-pos/AUX]() tokens (65% of all `AUX` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `AUX` and `Aspect` co-occurred: <tt><a href="Mood.html">Mood</a>=Ind</tt> (7398; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (7398; 100%), <tt><a href="Subcat.html">Subcat</a>=EMPTY</tt> (7192; 97%), <tt><a href="VerbType.html">VerbType</a>=Aux,Cop</tt> (5958; 81%), <tt><a href="Number.html">Number</a>=Sing</tt> (5903; 80%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (5337; 72%), <tt><a href="Person.html">Person</a>=3</tt> (3857; 52%).

`AUX` tokens may have the following values of `Aspect`:

* `Imp` (7398; 100% of non-empty `Aspect`): <em>is, was, werd, heeft, zijn, wordt, hebben, had, waren, heb</em>
* `EMPTY` (4032): <em>worden, zijn, geweest, hebben, genoemd, gehouden, geworden, gekomen, gemaakt, blijven</em>

`Aspect` seems to be **lexical feature** of `AUX`. 100% lemmas (93) occur only with one value of `Aspect`.

### `X`

74 [nl-pos/X]() tokens (2% of all `X` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `X` and `Aspect` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (74; 100%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (66; 89%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (58; 78%), <tt><a href="Number.html">Number</a>=Sing</tt> (56; 76%).

`X` tokens may have the following values of `Aspect`:

* `Imp` (74; 100% of non-empty `Aspect`): <em>dat, wil, zeggen, je, is, wat, ik, op, van, volgt</em>
* `EMPTY` (4561): <em>van, het, op, flo, voor, met, ten, aan, een, onder</em>

`Aspect` seems to be **lexical feature** of `X`. 100% lemmas (51) occur only with one value of `Aspect`.

## Relations with Agreement in `Aspect`

The 10 most frequent relations where parent and child node agree in `Aspect`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (475; 81%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (312; 54%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (245; 78%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (77; 79%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (69; 73%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> AUX</tt> (60; 58%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> AUX</tt> (52; 53%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (44; 96%),
<tt>X --[<a href="../dep/compound.html">compound</a>]--> X</tt> (41; 100%),
<tt>AUX --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (39; 91%).

