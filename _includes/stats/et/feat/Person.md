

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

1659 tokens (17%) have a non-empty value of `Person`.
539 types (14%) occur at least once with a non-empty value of `Person`.
475 lemmas (13%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: [et-pos/VERB]() (1329; 14% instances), [et-pos/PRON]() (270; 3% instances), [et-pos/AUX]() (60; 1% instances).

### `VERB`

1329 [et-pos/VERB]() tokens (84% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="Negative.html">Negative</a>=Pos</tt> (1329; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (1329; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (1324; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (1099; 83%), <tt><a href="Tense.html">Tense</a>=Imp</tt> (1020; 77%).

`VERB` tokens may have the following values of `Person`:

* `1` (188; 14% of non-empty `Person`): <em>tormasin, sõitsin, valasin, sõitsime, ujusin, Sammusime, Tõukasin, sammusin, Sõudsime, prantsatasin</em>
* `2` (12; 1% of non-empty `Person`): <em>Ronid, Sõiduta, Sõitsid, Vala, liigutasid, liikusid, näete, sõudsid, tead, viskusid</em>
* `3` (1129; 85% of non-empty `Person`): <em>liigutas, on, tõukas, viskus, liikus, tatsas, oli, prantsatas, sõidutas, tilkus</em>
* `EMPTY` (261): <em>minema, vaatama, liikunud, otsima, sisenenud, puhkama, valati, võtma, avama, jahtuma</em>

<table>
  <tr><th>Paradigm <i>liiku+sid</i></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>liikusid</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>liikusid</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 99% lemmas (444) occur only with one value of `Person`.

### `PRON`

270 [et-pos/PRON]() tokens (51% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (270; 100%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (270; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (223; 83%), <tt><a href="Case.html">Case</a>=Nom</tt> (156; 58%).

`PRON` tokens may have the following values of `Person`:

* `1` (76; 28% of non-empty `Person`): <em>ma, mu, mind, minu, me, mina, meil, mulle, meid, Mul</em>
* `2` (12; 4% of non-empty `Person`): <em>sa, sind, sinu, su</em>
* `3` (182; 67% of non-empty `Person`): <em>ta, nad, tema, talle, tal, nende, teda, neid, temast, neil</em>
* `EMPTY` (264): <em>oma, mitu, end, see, mis, seda, keegi, selle, kes, midagi</em>

`Person` seems to be **lexical feature** of `PRON`. 100% lemmas (14) occur only with one value of `Person`.

### `AUX`

60 [et-pos/AUX]() tokens (63% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="Negative.html">Negative</a>=Pos</tt> (60; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (60; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (58; 97%), <tt><a href="Number.html">Number</a>=Sing</tt> (52; 87%), <tt><a href="Tense.html">Tense</a>=Imp</tt> (37; 62%).

`AUX` tokens may have the following values of `Person`:

* `1` (4; 7% of non-empty `Person`): <em>olin, sain</em>
* `2` (1; 2% of non-empty `Person`): <em>oled</em>
* `3` (55; 92% of non-empty `Person`): <em>oli, on, olid, pidi, võib, sai, asub, hakkas, jääb, ongi</em>
* `EMPTY` (36): <em>ei, hakata, kirjutatud, ole, oleks, peaks, pole, saa, saaks, tohtinud</em>

`Person` seems to be **lexical feature** of `AUX`. 100% lemmas (18) occur only with one value of `Person`.

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (137; 74%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (20; 61%).

