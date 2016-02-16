

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This feature is universal.
It occurs with 4 different values: `Cnd`, `Imp`, `Ind`, `Qot`.

1444 tokens (15%) have a non-empty value of `Mood`.
534 types (14%) occur at least once with a non-empty value of `Mood`.
496 lemmas (14%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: [et-pos/VERB]() (1377; 15% instances), [et-pos/AUX]() (67; 1% instances).

### `VERB`

1377 [et-pos/VERB]() tokens (87% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (1377; 100%), <tt><a href="Negative.html">Negative</a>=Pos</tt> (1351; 98%), <tt><a href="Person.html">Person</a>=3</tt> (1129; 82%), <tt><a href="Number.html">Number</a>=Sing</tt> (1099; 80%), <tt><a href="Tense.html">Tense</a>=Imp</tt> (1042; 76%).

`VERB` tokens may have the following values of `Mood`:

* `Cnd` (6; 0% of non-empty `Mood`): <em>asetuks, moodustaksid, oleks, saaks, sõidutataks, tõusnuks</em>
* `Imp` (2; 0% of non-empty `Mood`): <em>Sõiduta, Vala</em>
* `Ind` (1367; 99% of non-empty `Mood`): <em>liigutas, on, tõukas, viskus, liikus, tatsas, oli, prantsatas, sõidutas, tilkus</em>
* `Qot` (2; 0% of non-empty `Mood`): <em>olevat, tilkuvat</em>
* `EMPTY` (213): <em>minema, vaatama, liikunud, otsima, sisenenud, puhkama, võtma, avama, jahtuma, kuivama</em>

`Mood` seems to be **lexical feature** of `VERB`. 100% lemmas (486) occur only with one value of `Mood`.

### `AUX`

67 [et-pos/AUX]() tokens (70% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (67; 100%), <tt><a href="Negative.html">Negative</a>=Pos</tt> (61; 91%), <tt><a href="Person.html">Person</a>=3</tt> (55; 82%), <tt><a href="Number.html">Number</a>=Sing</tt> (52; 78%), <tt><a href="Tense.html">Tense</a>=Imp</tt> (38; 57%).

`AUX` tokens may have the following values of `Mood`:

* `Cnd` (5; 7% of non-empty `Mood`): <em>peaks, saaks, oleks</em>
* `Ind` (62; 93% of non-empty `Mood`): <em>oli, on, olid, pidi, olin, võib, sai, asub, hakkas, jääb</em>
* `EMPTY` (29): <em>ei, hakata, kirjutatud</em>

`Mood` seems to be **lexical feature** of `AUX`. 100% lemmas (21) occur only with one value of `Mood`.

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (28; 82%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (18; 64%),
<tt>VERB --[<a href="../dep/dep.html">dep</a>]--> VERB</tt> (5; 100%).

