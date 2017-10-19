

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This feature is universal.
It occurs with 2 different values: `Cnd`, `Ind`.

1890 tokens (5%) have a non-empty value of `Mood`.
343 types (8%) occur at least once with a non-empty value of `Mood`.
224 lemmas (9%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: [-pos/VERB]() (1426; 4% instances), [-pos/AUX]() (464; 1% instances).

### `VERB`

1426 [-pos/VERB]() tokens (67% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1426; 100%), <tt><a href="Person.html">Person</a>=3</tt> (1426; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (1426; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (1426; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (1425; 100%), <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (1222; 86%), <tt><a href="Number.html">Number</a>=Sing</tt> (982; 69%).

`VERB` tokens may have the following values of `Mood`:

* `Ind` (1426; 100% of non-empty `Mood`): obsahuje rozumí může uvede mohou použijí stanoví musí účtuje lze
* `EMPTY` (691): vést použít stanoveno mít účtovat došlo odpisovat uvést sestavena sestavit

`Mood` seems to be **lexical feature** of `VERB`. 100% lemmas (224) occur only with one value of `Mood`.

### `AUX`

464 [-pos/AUX]() tokens (77% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (464; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (464; 100%), <tt><a href="Person.html">Person</a>=3</tt> (454; 98%), <tt><a href="Voice.html">Voice</a>=Act</tt> (438; 94%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (417; 90%), <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (389; 84%), <tt><a href="Number.html">Number</a>=Sing</tt> (241; 52%).

`AUX` tokens may have the following values of `Mood`:

* `Cnd` (26; 6% of non-empty `Mood`): by
* `Ind` (438; 94% of non-empty `Mood`): je jsou nejsou není bude budou
* `EMPTY` (140): být byly byl není-li je-li bylo jsou-li nebyly byla nebyla

<table>
  <tr><th>Paradigm <i>být</i></th><th><tt>Ind</tt></th><th><tt>Cnd</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Fut|<a href="Voice.html">Voice</a>=Act</tt></td><td>bude</td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td>je, není</td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td>nejsou</td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Fut|<a href="Voice.html">Voice</a>=Act</tt></td><td>budou</td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td>jsou</td><td></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=3</tt></td><td></td><td>by</td></tr>
  <tr><td><tt></tt></td><td></td><td>by</td></tr>
</table>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (170; 84%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (57; 59%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (27; 87%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/appos.html">appos</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/csubj:pass.html">csubj:pass</a>]--> VERB</tt> (1; 100%).

