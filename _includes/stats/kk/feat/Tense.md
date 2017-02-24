

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This feature is universal but the values `Aor` are language-specific.
It occurs with 3 different values: `Aor`, `Fut`, `Past`.

57 tokens (11%) have a non-empty value of `Tense`.
43 types (13%) occur at least once with a non-empty value of `Tense`.
38 lemmas (15%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: [kk-pos/VERB]() (42; 8% instances), [kk-pos/AUX]() (15; 3% instances).

### `VERB`

42 [kk-pos/VERB]() tokens (55% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="Aspect.html">Aspect</a>=EMPTY</tt> (42; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (39; 93%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (36; 86%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (34; 81%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (28; 67%), <tt><a href="Person.html">Person</a>=3</tt> (28; 67%), <tt><a href="Number.html">Number</a>=Sing</tt> (28; 67%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (28; 67%).

`VERB` tokens may have the following values of `Tense`:

* `Aor` (3; 7% of non-empty `Tense`): <em>біледі, бұз, саналады</em>
* `Fut` (4; 10% of non-empty `Tense`): <em>бүлінер, бәсеңдер, сездірмеске, суынар</em>
* `Past` (35; 83% of non-empty `Tense`): <em>айтты, шыққан, Туған, айтарлықтай, алған, безді, бермеді, болмады, бұзған, деді</em>
* `EMPTY` (35): <em>деп, шешуі, бере, жатса, айтушы, аспай, атанып, атауға, барып, бастап</em>

<table>
  <tr><th>Paradigm <i>бұз</i></th><th><tt>Past</tt></th><th><tt>Aor</tt></th></tr>
  <tr><td><tt></tt></td><td><em>бұзған</em></td><td></td></tr>
  <tr><td><tt><a href="Voice.html">Voice</a>=Pass</tt></td><td></td><td><em>бұз</em></td></tr>
</table>

`Tense` seems to be **lexical feature** of `VERB`. 97% lemmas (36) occur only with one value of `Tense`.

### `AUX`

15 [kk-pos/AUX]() tokens (60% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (15; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (15; 100%), <tt><a href="Person.html">Person</a>=3</tt> (15; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (15; 100%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (14; 93%).

`AUX` tokens may have the following values of `Tense`:

* `Aor` (1; 7% of non-empty `Tense`): <em>емес</em>
* `Past` (14; 93% of non-empty `Tense`): <em>еді, болды</em>
* `EMPTY` (10): <em>болатын, болмаса, болса, болсам, болушы, болуға, болып, болғандықтан, гөр, көрме</em>

<table>
  <tr><th>Paradigm <i>е</i></th><th><tt>Past</tt></th><th><tt>Aor</tt></th></tr>
  <tr><td><tt><a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td><em>емес</em></td></tr>
  <tr><td><tt></tt></td><td><em>еді</em></td><td></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (4; 100%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (3; 100%).

