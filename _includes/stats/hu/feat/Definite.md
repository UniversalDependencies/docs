

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This feature is universal but the values `2` are language-specific.
It occurs with 3 different values: `2`, `Def`, `Ind`.

8683 tokens (21%) have a non-empty value of `Definite`.
2078 types (15%) occur at least once with a non-empty value of `Definite`.
1148 lemmas (13%) occur at least once with a non-empty value of `Definite`.
The feature is used with 3 part-of-speech tags: [hu-pos/DET]() (5160; 12% instances), [hu-pos/VERB]() (3485; 8% instances), [hu-pos/AUX]() (38; 0% instances).

### `DET`

5160 [hu-pos/DET]() tokens (98% of all `DET` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `DET` and `Definite` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (4936; 96%).

`DET` tokens may have the following values of `Definite`:

* `Def` (4870; 94% of non-empty `Definite`): <em>a, az, egyik, saját, mindkét, milyen, mindhárom, semmiféle, valamennyi</em>
* `Ind` (290; 6% of non-empty `Definite`): <em>egy, több, minden, néhány, sok, más, másik, többek, semmi, kevesebb</em>
* `EMPTY` (115): <em>ez, ezt, azt, ezen, ebben, ilyen, e, arra, az, azokat</em>

<table>
  <tr><th>Paradigm <i>milyen</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th></tr>
  <tr><td><tt></tt></td><td><em>milyen</em></td><td><em>milyen</em></td></tr>
</table>

`Definite` seems to be **lexical feature** of `DET`. 93% lemmas (28) occur only with one value of `Definite`.

### `VERB`

3485 [hu-pos/VERB]() tokens (91% of all `VERB` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `VERB` and `Definite` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (3485; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (3427; 98%), <tt><a href="Person.html">Person</a>=3</tt> (3283; 94%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (2970; 85%), <tt><a href="Number.html">Number</a>=Sing</tt> (2560; 73%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (1800; 52%).

`VERB` tokens may have the following values of `Definite`:

* `2` (1; 0% of non-empty `Definite`): <em>nézlek</em>
* `Def` (1301; 37% of non-empty `Definite`): <em>mondta, elmondta, jelentette, teszi, tette, tájékoztatta, közölte, szeretné, tudta, jelezte</em>
* `Ind` (2183; 63% of non-empty `Definite`): <em>volt, kell, van, lehet, lesz, kellene, lenne, vannak, került, nincs</em>
* `EMPTY` (342): <em>tudni, tartani, folytatni, látni, számítani, ellátni, hívni, kérni, lemondani, menni</em>

<table>
  <tr><th>Paradigm <i>néz</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th><th><tt>2</tt></th></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Freq|<a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past</tt></td><td></td><td><em>nézegette</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td></td><td><em>nézem</em></td><td><em>nézlek</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td></td><td><em>nézzük</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past</tt></td><td></td><td><em>nézték</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Pot|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>nézhetnek</em></td><td></td><td></td></tr>
</table>

### `AUX`

38 [hu-pos/AUX]() tokens (100% of all `AUX` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `AUX` and `Definite` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (38; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (38; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (38; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (31; 82%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (29; 76%).

`AUX` tokens may have the following values of `Definite`:

* `Def` (8; 21% of non-empty `Definite`): <em>fogja, fogják</em>
* `Ind` (30; 79% of non-empty `Definite`): <em>volna, fog, fognak</em>

<table>
  <tr><th>Paradigm <i>fog</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fog</em></td><td><em>fogja</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>fog</em></td><td><em>fogja</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>fogják</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>fognak</em></td><td><em>fogják</em></td></tr>
</table>

## Relations with Agreement in `Definite`

The 10 most frequent relations where parent and child node agree in `Definite`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (334; 56%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (134; 54%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (39; 71%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (25; 54%),
<tt>DET --[<a href="../dep/remnant.html">remnant</a>]--> DET</tt> (23; 100%),
<tt>VERB --[<a href="../dep/dobj.html">dobj</a>]--> DET</tt> (4; 80%),
<tt>VERB --[<a href="../dep/nmod.html">nmod</a>]--> DET</tt> (4; 67%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> AUX</tt> (3; 100%),
<tt>VERB --[<a href="../dep/ccomp:obl.html">ccomp:obl</a>]--> AUX</tt> (1; 100%),
<tt>VERB --[<a href="../dep/nmod.html">nmod</a>]--> VERB</tt> (1; 100%).

