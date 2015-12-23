

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This feature is universal.
It occurs with 4 different values: `Cnd`, `Imp`, `Ind`, `Pot`.
Some words have combined values of the feature; 2 combinations have been observed: `Cnd|Pot`, `Imp|Pot`.

2403 tokens (9%) have a non-empty value of `Mood`.
1518 types (16%) occur at least once with a non-empty value of `Mood`.
813 lemmas (13%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: [hu-pos/VERB]() (2374; 9% instances), [hu-pos/AUX]() (29; 0% instances).

### `VERB`

2374 [hu-pos/VERB]() tokens (92% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (2374; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (2334; 98%), <tt><a href="Person.html">Person</a>=3</tt> (2184; 92%), <tt><a href="Number.html">Number</a>=Sing</tt> (1731; 73%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (1495; 63%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (1239; 52%).

`VERB` tokens may have the following values of `Mood`:

* `Cnd` (79; 3% of non-empty `Mood`): <em>lenne, kellene, szeretné, szeretnék, adná, alakítanák, beavatkoznának, csatolnák, csinálnám, csökkentené</em>
* `Cnd,Pot` (6; 0% of non-empty `Mood`): <em>adhatnák, fordulhatna, kérdezhetné, lehetne, megtehetne, Érthetné</em>
* `Imp` (100; 4% of non-empty `Mood`): <em>legyen, kerüljön, hagyják, menjen, tervezze, Repülj, Tégy, Vegyük, adják, alapuljon</em>
* `Imp,Pot` (6; 0% of non-empty `Mood`): <em>elindulhasson, lehessen, megmenthesse, okozhasson, parkolhassanak, énekelhessenek</em>
* `Ind` (2027; 85% of non-empty `Mood`): <em>volt, kell, van, mondta, elmondta, lesz, jelentette, lehetett, került, nincs</em>
* `Pot` (156; 7% of non-empty `Mood`): <em>lehet, kerülhet, helyettesítheti, láthattunk, növelheti, reménykedhet, tarthat, választhatják, adhatott, bebizonyosodhat</em>
* `EMPTY` (219): <em>tartani, tudni, látni, számítani, rendezni, tenni, beszélni, elfogadni, elindulni, elkerülni</em>

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

29 [hu-pos/AUX]() tokens (100% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (29; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (29; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (29; 100%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (25; 86%), <tt><a href="Number.html">Number</a>=Sing</tt> (23; 79%).

`AUX` tokens may have the following values of `Mood`:

* `Cnd` (16; 55% of non-empty `Mood`): <em>volna</em>
* `Ind` (13; 45% of non-empty `Mood`): <em>fog, fognak, fogja, fogják</em>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (322; 85%),
<tt>VERB --[<a href="../dep/ccomp:obj.html">ccomp:obj</a>]--> VERB</tt> (117; 70%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (117; 76%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (37; 84%),
<tt>VERB --[<a href="../dep/ccomp:obl.html">ccomp:obl</a>]--> VERB</tt> (35; 51%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (26; 67%),
<tt>VERB --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (4; 100%),
<tt>VERB --[<a href="../dep/nmod.html">nmod</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/remnant.html">remnant</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/ccomp:pred.html">ccomp:pred</a>]--> VERB</tt> (1; 100%).

