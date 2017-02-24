

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This feature is universal but the values `2` are language-specific.
It occurs with 3 different values: `2`, `Def`, `Ind`.

6540 tokens (21%) have a non-empty value of `Definite`.
1654 types (16%) occur at least once with a non-empty value of `Definite`.
943 lemmas (13%) occur at least once with a non-empty value of `Definite`.
The feature is used with 3 part-of-speech tags: [hu-pos/DET]() (3919; 12% instances), [hu-pos/VERB]() (2470; 8% instances), [hu-pos/AUX]() (151; 0% instances).

### `DET`

3919 [hu-pos/DET]() tokens (97% of all `DET` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `DET` and `Definite` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (3733; 95%).

`DET` tokens may have the following values of `Definite`:

* `Def` (3674; 94% of non-empty `Definite`): <em>a, az, egyik, mindkét, saját, milyen, mindhárom, semmiféle</em>
* `Ind` (245; 6% of non-empty `Definite`): <em>egy, több, minden, sok, néhány, más, többek, másik, kevesebb, semmi</em>
* `EMPTY` (101): <em>ez, ezt, azt, ebben, ezen, ilyen, e, olyan, Ennek, arra</em>

<table>
  <tr><th>Paradigm <i>milyen</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th></tr>
  <tr><td><tt></tt></td><td><em>milyen</em></td><td><em>milyen</em></td></tr>
</table>

`Definite` seems to be **lexical feature** of `DET`. 97% lemmas (28) occur only with one value of `Definite`.

### `VERB`

2470 [hu-pos/VERB]() tokens (90% of all `VERB` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `VERB` and `Definite` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (2470; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (2424; 98%), <tt><a href="Person.html">Person</a>=3</tt> (2335; 95%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (2078; 84%), <tt><a href="Number.html">Number</a>=Sing</tt> (1791; 73%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (1392; 56%).

`VERB` tokens may have the following values of `Definite`:

* `2` (1; 0% of non-empty `Definite`): <em>nézlek</em>
* `Def` (973; 39% of non-empty `Definite`): <em>mondta, elmondta, jelentette, teszi, tette, tájékoztatta, írta, jelezte, mondja, szeretem</em>
* `Ind` (1496; 61% of non-empty `Definite`): <em>kell, van, volt, lehet, kellene, nincs, kellett, vannak, kerül, került</em>
* `EMPTY` (264): <em>tudni, folytatni, tartani, számítani, lemondani, látni, tárgyalni, venni, adni, beszélni</em>

<table>
  <tr><th>Paradigm <i>néz</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th><th><tt>2</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1</tt></td><td></td><td><em>nézem</em></td><td><em>nézlek</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1</tt></td><td></td><td><em>nézzük</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Pot|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td><em>nézhetnek</em></td><td></td><td></td></tr>
</table>

### `AUX`

151 [hu-pos/AUX]() tokens (99% of all `AUX` tokens) have a non-empty value of `Definite`.

The most frequent other feature values with which `AUX` and `Definite` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (151; 100%), <tt><a href="Person.html">Person</a>=3</tt> (145; 96%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (134; 89%), <tt><a href="Number.html">Number</a>=Sing</tt> (128; 85%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (116; 77%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (77; 51%).

`AUX` tokens may have the following values of `Definite`:

* `Def` (8; 5% of non-empty `Definite`): <em>fogja, fogják</em>
* `Ind` (143; 95% of non-empty `Definite`): <em>volt, lesz, lenne, volna, legyen, lehet, voltak, lett, fog, lehetett</em>
* `EMPTY` (2): <em>elszenvedni, lenni</em>

<table>
  <tr><th>Paradigm <i>fog</i></th><th><tt>Ind</tt></th><th><tt>Def</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fog</em></td><td><em>fogja</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>fog</em></td><td><em>fogja</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>fogják</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>fognak</em></td><td><em>fogják</em></td></tr>
</table>

## Relations with Agreement in `Definite`

The 10 most frequent relations where parent and child node agree in `Definite`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (232; 57%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (100; 55%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (32; 76%),
<tt>VERB --[<a href="../dep/obl.html">obl</a>]--> DET</tt> (4; 80%),
<tt>VERB --[<a href="../dep/obj.html">obj</a>]--> DET</tt> (3; 75%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> AUX</tt> (3; 100%),
<tt>VERB --[<a href="../dep/obl.html">obl</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> DET</tt> (1; 100%),
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (1; 100%),
<tt>AUX --[<a href="../dep/aux.html">aux</a>]--> AUX</tt> (1; 100%).

