

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

6840 tokens (8%) have a non-empty value of `Voice`.
4190 types (18%) occur at least once with a non-empty value of `Voice`.
2083 lemmas (16%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: [pl-pos/VERB]() (6643; 8% instances), [pl-pos/AUX]() (197; 0% instances).

### `VERB`

6643 [pl-pos/VERB]() tokens (50% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (6643; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (6643; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (6643; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (5238; 79%), <tt><a href="Tense.html">Tense</a>=Past</tt> (5238; 79%), <tt><a href="Negative.html">Negative</a>=EMPTY</tt> (5238; 79%), <tt><a href="Number.html">Number</a>=Sing</tt> (4985; 75%), <tt><a href="Aspect.html">Aspect</a>=Perf</tt> (4001; 60%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (3943; 59%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (5527; 83% of non-empty `Voice`): <em>był, było, była, miał, chciał, miała, były, udało, mógł, mieli</em>
* `Pass` (1116; 17% of non-empty `Voice`): <em>przyjęta, znaleziono, prowadzone, wyczerpana, zatrzymano, zatrzymany, przeprowadzono, przygotowany, rozegrano, stwierdzono</em>
* `EMPTY` (6639): <em>jest, to, ma, są, może, można, być, dziękuję, mają, mam</em>

<table>
  <tr><th>Paradigm <i>mówić</i></th><th><tt>Act</tt></th><th><tt>Pass</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>mówił</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>mówili</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>mówił</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Gender.html">Gender</a>=Fem|<a href="Negative.html">Negative</a>=Pos|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>mówiącą</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Neut|<a href="Negative.html">Negative</a>=Pos|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>mówiono</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>mówiła</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>mówiło</em></td><td></td></tr>
</table>

### `AUX`

197 [pl-pos/AUX]() tokens (14% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="Tense.html">Tense</a>=Past</tt> (197; 100%), <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (197; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (197; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (197; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (197; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (160; 81%), <tt><a href="Aspect.html">Aspect</a>=Perf</tt> (104; 53%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (101; 51%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (197; 100% of non-empty `Voice`): <em>został, została, był, było, była, były, zostało, zostali, zostały, byli</em>
* `EMPTY` (1249): <em>em, by, m, będzie, śmy, jest, będą, są, eś, być</em>

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (703; 82%).

