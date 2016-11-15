

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This feature is universal.
It occurs with 2 different values: `Past`, `Pres`.

3540 tokens (8%) have a non-empty value of `Tense`.
2050 types (15%) occur at least once with a non-empty value of `Tense`.
1124 lemmas (13%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: [hu-pos/VERB]() (3502; 8% instances), [hu-pos/AUX]() (38; 0% instances).

### `VERB`

3502 [hu-pos/VERB]() tokens (92% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (3485; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (3444; 98%), <tt><a href="Person.html">Person</a>=3</tt> (3299; 94%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (2970; 85%), <tt><a href="Number.html">Number</a>=Sing</tt> (2572; 73%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (2183; 62%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (1685; 48% of non-empty `Tense`): <em>volt, mondta, elmondta, jelentette, került, voltak, kellett, lehetett, lett, tett</em>
* `Pres` (1817; 52% of non-empty `Tense`): <em>kell, van, lehet, lesz, kellene, lenne, vannak, nincs, kerül, legyen</em>
* `EMPTY` (325): <em>tudni, tartani, folytatni, látni, számítani, ellátni, hívni, kérni, lemondani, menni</em>

<table>
  <tr><th>Paradigm <i>van</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>volna</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1</tt></td><td><em>vagyok</em></td><td><em>voltam</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>van</em></td><td><em>volt</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1</tt></td><td></td><td><em>voltunk</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td><em>vannak</em></td><td><em>voltak</em></td></tr>
</table>

### `AUX`

38 [hu-pos/AUX]() tokens (100% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (38; 100%), <tt><a href="Person.html">Person</a>=3</tt> (38; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (31; 82%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (30; 79%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (29; 76%).

`AUX` tokens may have the following values of `Tense`:

* `Pres` (38; 100% of non-empty `Tense`): <em>volna, fog, fogja, fognak, fogják</em>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (465; 78%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (185; 74%),
<tt>VERB --[<a href="../dep/ccomp:obl.html">ccomp:obl</a>]--> VERB</tt> (60; 55%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (43; 78%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (31; 67%),
<tt>VERB --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (19; 73%),
<tt>AUX --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (4; 100%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> AUX</tt> (1; 100%),
<tt>VERB --[<a href="../dep/remnant.html">remnant</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/advmod.html">advmod</a>]--> VERB</tt> (1; 100%).

