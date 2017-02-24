

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

2635 tokens (8%) have a non-empty value of `Tense`.
1624 types (15%) occur at least once with a non-empty value of `Tense`.
918 lemmas (13%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: [hu-pos/VERB]() (2484; 8% instances), [hu-pos/AUX]() (151; 0% instances).

### `VERB`

2484 [hu-pos/VERB]() tokens (91% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (2470; 99%), <tt><a href="Voice.html">Voice</a>=Act</tt> (2438; 98%), <tt><a href="Person.html">Person</a>=3</tt> (2348; 95%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (2078; 84%), <tt><a href="Number.html">Number</a>=Sing</tt> (1801; 73%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (1496; 60%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (1078; 43% of non-empty `Tense`): <em>volt, mondta, elmondta, jelentette, kellett, került, tett, tette, csökkent, sikerült</em>
* `Pres` (1406; 57% of non-empty `Tense`): <em>kell, van, lehet, kellene, nincs, vannak, kerül, teszi, készül, lesz</em>
* `EMPTY` (250): <em>tudni, folytatni, tartani, számítani, lemondani, látni, tárgyalni, venni, adni, beszélni</em>

<table>
  <tr><th>Paradigm <i>kell</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd</tt></td><td><em>kellene</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind</tt></td><td><em>kell</em></td><td><em>kellett</em></td></tr>
</table>

### `AUX`

151 [hu-pos/AUX]() tokens (99% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (151; 100%), <tt><a href="Person.html">Person</a>=3</tt> (145; 96%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (143; 95%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (134; 89%), <tt><a href="Number.html">Number</a>=Sing</tt> (128; 85%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (116; 77%).

`AUX` tokens may have the following values of `Tense`:

* `Past` (74; 49% of non-empty `Tense`): <em>volt, voltak, lett, lehetett, lettem, voltam</em>
* `Pres` (77; 51% of non-empty `Tense`): <em>lesz, lenne, volna, legyen, lehet, fog, fogja, fognak, fogják, vagyok</em>
* `EMPTY` (2): <em>elszenvedni, lenni</em>

<table>
  <tr><th>Paradigm <i>van</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>volna</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1</tt></td><td><em>vagyok</em></td><td><em>voltam</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>van</em></td><td><em>volt</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td><em>vannak</em></td><td><em>voltak</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (313; 77%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (141; 77%),
<tt>VERB --[<a href="../dep/ccomp:obj.html">ccomp:obj</a>]--> VERB</tt> (72; 51%),
<tt>VERB --[<a href="../dep/ccomp:obl.html">ccomp:obl</a>]--> VERB</tt> (46; 52%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (33; 79%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (17; 65%),
<tt>VERB --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (12; 71%),
<tt>AUX --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (3; 100%),
<tt>VERB --[<a href="../dep/obl.html">obl</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/ccomp:obl.html">ccomp:obl</a>]--> AUX</tt> (1; 100%).

