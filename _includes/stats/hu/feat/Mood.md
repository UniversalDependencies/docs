

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This feature is universal.
It occurs with 4 different values: `Cnd`, `Imp`, `Ind`, `Pot`.
Some words have combined values of the feature; 2 combinations have been observed: `Cnd|Pot`, `Imp|Pot`.

3524 tokens (8%) have a non-empty value of `Mood`.
2034 types (15%) occur at least once with a non-empty value of `Mood`.
1118 lemmas (13%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: [hu-pos/VERB]() (3486; 8% instances), [hu-pos/AUX]() (38; 0% instances).

### `VERB`

3486 [hu-pos/VERB]() tokens (91% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (3485; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (3428; 98%), <tt><a href="Person.html">Person</a>=3</tt> (3283; 94%), <tt><a href="Number.html">Number</a>=Sing</tt> (2560; 73%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (2183; 63%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (1800; 52%).

`VERB` tokens may have the following values of `Mood`:

* `Cnd` (130; 4% of non-empty `Mood`): <em>kellene, lenne, szeretné, szeretne, szeretnék, volna, emelnék, lennének, adná, alakítanák</em>
* `Cnd,Pot` (10; 0% of non-empty `Mood`): <em>lehetne, adhatnák, elfoglalhatná, fordulhatna, kérdezhetné, megtehetne, számíthatna, Érthetné, ítélhetnék</em>
* `Imp` (150; 4% of non-empty `Mood`): <em>legyen, kerüljön, menjen, gyűjtsenek, hagyják, kerüljenek, legyenek, osszák, segítsenek, tervezze</em>
* `Imp,Pot` (10; 0% of non-empty `Mood`): <em>dönthessenek, elindulhasson, emelhesse, lehessen, megkaphassák, megmenthesse, okozhasson, parkolhassanak, állíthassa, énekelhessenek</em>
* `Ind` (2970; 85% of non-empty `Mood`): <em>volt, kell, van, mondta, lesz, elmondta, vannak, jelentette, került, nincs</em>
* `Pot` (216; 6% of non-empty `Mood`): <em>lehet, kerülhet, növelheti, dolgozik, férhet, helyettesítheti, kerülhetnek, láthattunk, reménykedhet, reménykedhetnek</em>
* `EMPTY` (341): <em>tudni, tartani, folytatni, látni, számítani, ellátni, hívni, kérni, lemondani, menni</em>

<table>
  <tr><th>Paradigm <i>lesz</i></th><th><tt>Cnd,Pot</tt></th><th><tt>Imp,Pot</tt></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th><th><tt>Cnd</tt></th><th><tt>Pot</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Past</tt></td><td></td><td></td><td><em>lettem</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td></td><td></td><td><em>leszek</em></td><td><em>legyek</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past</tt></td><td></td><td></td><td><em>lett</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>lehetne</em></td><td><em>lehessen</em></td><td><em>lesz</em></td><td><em>legyen</em></td><td><em>lenne</em></td><td><em>lehet</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td></td><td></td><td><em>leszünk</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td></td><td></td><td><em>lesznek</em></td><td><em>legyenek</em></td><td><em>lennének</em></td><td></td></tr>
</table>

### `AUX`

38 [hu-pos/AUX]() tokens (100% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="Tense.html">Tense</a>=Pres</tt> (38; 100%), <tt><a href="Person.html">Person</a>=3</tt> (38; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (38; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (31; 82%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (30; 79%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (29; 76%).

`AUX` tokens may have the following values of `Mood`:

* `Cnd` (19; 50% of non-empty `Mood`): <em>volna</em>
* `Ind` (19; 50% of non-empty `Mood`): <em>fog, fogja, fognak, fogják</em>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (510; 86%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (184; 74%),
<tt>VERB --[<a href="../dep/ccomp:obj.html">ccomp:obj</a>]--> VERB</tt> (117; 70%),
<tt>VERB --[<a href="../dep/ccomp:obl.html">ccomp:obl</a>]--> VERB</tt> (57; 52%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (38; 69%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (38; 83%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (36; 64%),
<tt>VERB --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (21; 81%),
<tt>AUX --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (3; 75%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> AUX</tt> (3; 100%).

