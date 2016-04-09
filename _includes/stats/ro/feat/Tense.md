

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is universal.
It occurs with 4 different values: `Imp`, `Past`, `Pqp`, `Pres`.

1103 tokens (9%) have a non-empty value of `Tense`.
605 types (14%) occur at least once with a non-empty value of `Tense`.
416 lemmas (11%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: [ro-pos/VERB]() (955; 8% instances), [ro-pos/AUX]() (148; 1% instances).

### `VERB`

955 [ro-pos/VERB]() tokens (65% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (955; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (816; 85%), <tt><a href="Person.html">Person</a>=3</tt> (691; 72%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (687; 72%).

`VERB` tokens may have the following values of `Tense`:

* `Imp` (155; 16% of non-empty `Tense`): <em>putea, era, erau, avea, puteau, ,, făcea, puteai, apropia, aveau</em>
* `Past` (99; 10% of non-empty `Tense`): <em>află, anunță, există, numără, putu, adoptă, aflară, derivă, execută, insistă</em>
* `Pqp` (17; 2% of non-empty `Tense`): <em>făcuseră, văzuse, ajutase, alesese, băgase, dosise, pierduse, revărsaseră, scăzuse, sfârșise</em>
* `Pres` (684; 72% of non-empty `Tense`): <em>poate, este, sunt, pot, putea, trebuie, are, fi, face, e</em>
* `EMPTY` (516): <em>fost, aflat, fiind, putut, făcut, privind, început, devenit, începând, apărut</em>

<table>
  <tr><th>Paradigm <i>face</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th><th><tt>Imp</tt></th><th><tt>Pqp</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>face</em></td><td><em>făcu</em></td><td><em>făcea</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td></td><td><em>făceau</em></td><td><em>făcuseră</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fac</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>facă</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td><em>face</em></td><td></td><td></td><td></td></tr>
</table>

### `AUX`

148 [ro-pos/AUX]() tokens (33% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (118; 80%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (113; 76%), <tt><a href="Person.html">Person</a>=3</tt> (89; 60%).

`AUX` tokens may have the following values of `Tense`:

* `Imp` (3; 2% of non-empty `Tense`): <em>era</em>
* `Pqp` (1; 1% of non-empty `Tense`): <em>fuseseră</em>
* `Pres` (144; 97% of non-empty `Tense`): <em>fi, este, sunt, a, ar, -a, -am, am, au, fie</em>
* `EMPTY` (297): <em>a, au, fost, ar, va, am, este, vor, ai, era</em>

<table>
  <tr><th>Paradigm <i>fi</i></th><th><tt>Pres</tt></th><th><tt>Imp</tt></th><th><tt>Pqp</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>este, e</em></td><td><em>era</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sunt</em></td><td></td><td><em>fuseseră</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fie</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td><em>fi</em></td><td></td><td></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (55; 51%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (42; 58%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (18; 60%),
<tt>VERB --[<a href="../dep/csubjpass.html">csubjpass</a>]--> VERB</tt> (5; 71%),
<tt>VERB --[<a href="../dep/remnant.html">remnant</a>]--> VERB</tt> (3; 100%),
<tt>VERB --[<a href="../dep/advmod.html">advmod</a>]--> VERB</tt> (1; 100%).

