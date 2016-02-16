

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

2403 tokens (9%) have a non-empty value of `Tense`.
1518 types (16%) occur at least once with a non-empty value of `Tense`.
813 lemmas (13%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: [hu-pos/VERB]() (2374; 9% instances), [hu-pos/AUX]() (29; 0% instances).

### `VERB`

2374 [hu-pos/VERB]() tokens (92% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (2374; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (2334; 98%), <tt><a href="Person.html">Person</a>=3</tt> (2184; 92%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (2027; 85%), <tt><a href="Number.html">Number</a>=Sing</tt> (1731; 73%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (1495; 63%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (1135; 48% of non-empty `Tense`): <em>volt, mondta, elmondta, jelentette, lehetett, került, adott, voltak, kellett, lett</em>
* `Pres` (1239; 52% of non-empty `Tense`): <em>kell, van, lehet, lesz, lenne, kellene, nincs, legyen, vannak, kerül</em>
* `EMPTY` (219): <em>tartani, tudni, látni, számítani, rendezni, tenni, beszélni, elfogadni, elindulni, elkerülni</em>

<table>
  <tr><th>Paradigm <i>van</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>volna</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1</tt></td><td><em>vagyok</em></td><td><em>voltam</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>van</em></td><td><em>volt</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1</tt></td><td></td><td><em>voltunk</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td><em>vannak</em></td><td><em>voltak</em></td></tr>
</table>

### `AUX`

29 [hu-pos/AUX]() tokens (100% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (29; 100%), <tt><a href="Person.html">Person</a>=3</tt> (29; 100%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (25; 86%), <tt><a href="Number.html">Number</a>=Sing</tt> (23; 79%), <tt><a href="Mood.html">Mood</a>=Cnd</tt> (16; 55%).

`AUX` tokens may have the following values of `Tense`:

* `Pres` (29; 100% of non-empty `Tense`): <em>volna, fog, fognak, fogja, fogják</em>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (302; 80%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (119; 78%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (32; 82%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (29; 66%),
<tt>VERB --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (4; 100%),
<tt>VERB --[<a href="../dep/nmod.html">nmod</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/remnant.html">remnant</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/ccomp:pred.html">ccomp:pred</a>]--> VERB</tt> (1; 100%).

