

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This feature is universal.
It occurs with 3 different values: `Imp`, `Past`, `Pres`.

1495 tokens (16%) have a non-empty value of `Tense`.
568 types (15%) occur at least once with a non-empty value of `Tense`.
530 lemmas (15%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: [et-pos/VERB]() (1427; 15% instances), [et-pos/AUX]() (68; 1% instances).

### `VERB`

1427 [et-pos/VERB]() tokens (90% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (1377; 96%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (1367; 96%), <tt><a href="Negative.html">Negative</a>=Pos</tt> (1351; 95%), <tt><a href="Person.html">Person</a>=3</tt> (1129; 79%), <tt><a href="Number.html">Number</a>=Sing</tt> (1099; 77%).

`VERB` tokens may have the following values of `Tense`:

* `Imp` (1042; 73% of non-empty `Tense`): <em>liigutas, tõukas, viskus, liikus, tatsas, oli, prantsatas, sõidutas, tilkus, valas</em>
* `Past` (51; 4% of non-empty `Tense`): <em>liikunud, sisenenud, tormanud, liigutatud, roninud, sõudnud, tilkunud, tõusnud, viskunud, väljunud</em>
* `Pres` (334; 23% of non-empty `Tense`): <em>on, tilgub, liigutab, tõuseb, tatsab, käib, tormab, tõukab, ujub, siseneb</em>
* `EMPTY` (163): <em>minema, vaatama, otsima, puhkama, võtma, avama, jahtuma, kuivama, magama, saada</em>

<table>
  <tr><th>Paradigm <i>ole+nud</i></th><th><tt>Past</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Negative.html">Negative</a>=Neg|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>polnud</em></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>olnud</em></td><td></td></tr>
</table>

`Tense` seems to be **lexical feature** of `VERB`. 100% lemmas (518) occur only with one value of `Tense`.

### `AUX`

68 [et-pos/AUX]() tokens (71% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (67; 99%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (62; 91%), <tt><a href="Negative.html">Negative</a>=Pos</tt> (61; 90%), <tt><a href="Person.html">Person</a>=3</tt> (55; 81%), <tt><a href="Number.html">Number</a>=Sing</tt> (52; 76%).

`AUX` tokens may have the following values of `Tense`:

* `Imp` (38; 56% of non-empty `Tense`): <em>oli, olid, pidi, olin, sai, hakkas, sain, tohtinud</em>
* `Past` (1; 1% of non-empty `Tense`): <em>kirjutatud</em>
* `Pres` (29; 43% of non-empty `Tense`): <em>on, võib, peaks, saaks, asub, jääb, ole, oled, oleks, ongi</em>
* `EMPTY` (28): <em>ei, hakata</em>

`Tense` seems to be **lexical feature** of `AUX`. 100% lemmas (22) occur only with one value of `Tense`.

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (21; 60%),
<tt>VERB --[<a href="../dep/dep.html">dep</a>]--> VERB</tt> (3; 60%).

