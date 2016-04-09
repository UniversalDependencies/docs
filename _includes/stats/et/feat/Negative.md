

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This feature is universal.
It occurs with 2 different values: `Neg`, `Pos`.

1472 tokens (16%) have a non-empty value of `Negative`.
537 types (14%) occur at least once with a non-empty value of `Negative`.
498 lemmas (14%) occur at least once with a non-empty value of `Negative`.
The feature is used with 2 part-of-speech tags: [et-pos/VERB]() (1378; 15% instances), [et-pos/AUX]() (94; 1% instances).

### `VERB`

1378 [et-pos/VERB]() tokens (87% of all `VERB` tokens) have a non-empty value of `Negative`.

The most frequent other feature values with which `VERB` and `Negative` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (1377; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (1367; 99%), <tt><a href="Person.html">Person</a>=3</tt> (1129; 82%), <tt><a href="Number.html">Number</a>=Sing</tt> (1099; 80%), <tt><a href="Tense.html">Tense</a>=Imp</tt> (1042; 76%).

`VERB` tokens may have the following values of `Negative`:

* `Neg` (26; 2% of non-empty `Negative`): <em>ole, pole, saa, tea, aimagi, jää, kutsutud, lahku, lahkunud, mahu</em>
* `Pos` (1352; 98% of non-empty `Negative`): <em>liigutas, on, tõukas, viskus, liikus, tatsas, oli, prantsatas, sõidutas, tilkus</em>
* `EMPTY` (212): <em>minema, vaatama, liikunud, otsima, sisenenud, puhkama, võtma, avama, jahtuma, kuivama</em>

<table>
  <tr><th>Paradigm <i>ole+0</i></th><th><tt>Pos</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>on</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td><em>on</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>ole, pole</em></td></tr>
</table>

`Negative` seems to be **lexical feature** of `VERB`. 100% lemmas (486) occur only with one value of `Negative`.

### `AUX`

94 [et-pos/AUX]() tokens (98% of all `AUX` tokens) have a non-empty value of `Negative`.

The most frequent other feature values with which `AUX` and `Negative` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (67; 71%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (62; 66%), <tt><a href="Person.html">Person</a>=3</tt> (55; 59%), <tt><a href="Number.html">Number</a>=Sing</tt> (52; 55%).

`AUX` tokens may have the following values of `Negative`:

* `Neg` (33; 35% of non-empty `Negative`): <em>ei, ole, peaks, pole, saa, saaks, tohtinud</em>
* `Pos` (61; 65% of non-empty `Negative`): <em>oli, on, olid, pidi, olin, võib, sai, asub, hakkas, jääb</em>
* `EMPTY` (2): <em>hakata, kirjutatud</em>

<table>
  <tr><th>Paradigm <i>ole+0</i></th><th><tt>Pos</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>on</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td><em>on</em></td><td></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>pole, ole</em></td></tr>
</table>

## Relations with Agreement in `Negative`

The 10 most frequent relations where parent and child node agree in `Negative`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (26; 76%),
<tt>VERB --[<a href="../dep/neg.html">neg</a>]--> AUX</tt> (22; 81%),
<tt>VERB --[<a href="../dep/dep.html">dep</a>]--> VERB</tt> (3; 60%).

