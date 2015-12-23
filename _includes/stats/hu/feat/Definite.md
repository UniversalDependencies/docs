

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This feature is universal but the values `2` are language-specific.
It occurs with 3 different values: `2`, `Def`, `Ind`.

5724 tokens (22%) have a non-empty value of `Definite`.
1563 types (16%) occur at least once with a non-empty value of `Definite`.
842 lemmas (13%) occur at least once with a non-empty value of `Definite`.
The feature is used with 3 part-of-speech tags: [hu-pos/DET]() (3321; 13% instances), [hu-pos/VERB]() (2374; 9% instances), [hu-pos/AUX]() (29; 0% instances).

### `DET`

3321 [hu-pos/DET]() tokens (97% of all `DET` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `DET` and `Definite` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (3097; 93%).

`DET` tokens may have the following values of `Definite`:

* `Def` (3057; 92% of non-empty `Definite`): <em>a, az, egyik, saját, mindkét, milyen, mindhárom, semmiféle, valamennyi</em>
* `Ind` (264; 8% of non-empty `Definite`): <em>egy, több, minden, néhány, sok, más, másik, többek, semmi, kevesebb</em>
* `EMPTY` (115): <em>ez, ezt, azt, ezen, ebben, ilyen, e, arra, az, azokat</em>

<table>
  <tr><th>Paradigm <i>milyen</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th></tr>
  <tr><td><tt></tt></td><td><em>milyen</em></td><td><em>milyen</em></td></tr>
</table>

`Definite` seems to be **lexical feature** of `DET`. 93% lemmas (27) occur only with one value of `Definite`.

### `VERB`

2374 [hu-pos/VERB]() tokens (92% of all `VERB` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `VERB` and `Definite` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (2374; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (2334; 98%), <tt><a href="Person.html">Person</a>=3</tt> (2184; 92%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (2027; 85%), <tt><a href="Number.html">Number</a>=Sing</tt> (1731; 73%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (1239; 52%).

`VERB` tokens may have the following values of `Definite`:

* `2` (1; 0% of non-empty `Definite`): <em>nézlek</em>
* `Def` (878; 37% of non-empty `Definite`): <em>mondta, elmondta, jelentette, mondja, teszi, tette, tájékoztatta, szeretem, véli, szeretné</em>
* `Ind` (1495; 63% of non-empty `Definite`): <em>volt, kell, van, lehet, lesz, lenne, kellene, lehetett, került, nincs</em>
* `EMPTY` (219): <em>tartani, tudni, látni, számítani, rendezni, tenni, beszélni, elfogadni, elindulni, elkerülni</em>

<table>
  <tr><th>Paradigm <i>néz</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th><th><tt>2</tt></th></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Freq|<a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past</tt></td><td></td><td><em>nézegette</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td></td><td><em>nézem</em></td><td><em>nézlek</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td></td><td><em>nézzük</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Pot|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>nézhetnek</em></td><td></td><td></td></tr>
</table>

### `AUX`

29 [hu-pos/AUX]() tokens (100% of all `AUX` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `AUX` and `Definite` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (29; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (29; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (29; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (23; 79%), <tt><a href="Mood.html">Mood</a>=Cnd</tt> (16; 55%).

`AUX` tokens may have the following values of `Definite`:

* `Def` (4; 14% of non-empty `Definite`): <em>fogja, fogják</em>
* `Ind` (25; 86% of non-empty `Definite`): <em>volna, fog, fognak</em>

<table>
  <tr><th>Paradigm <i>fog</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>fog</em></td><td><em>fogja</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>fognak</em></td><td><em>fogják</em></td></tr>
</table>

## Relations with Agreement in `Definite`

The 10 most frequent relations where parent and child node agree in `Definite`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (209; 55%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (82; 54%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (26; 67%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (25; 57%),
<tt>DET --[<a href="../dep/remnant.html">remnant</a>]--> DET</tt> (12; 100%),
<tt>VERB --[<a href="../dep/dobj.html">dobj</a>]--> DET</tt> (4; 80%),
<tt>VERB --[<a href="../dep/nmod.html">nmod</a>]--> DET</tt> (4; 67%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> DET</tt> (1; 100%),
<tt>VERB --[<a href="../dep/nmod.html">nmod</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/advmod:mode.html">advmod:mode</a>]--> DET</tt> (1; 100%).

