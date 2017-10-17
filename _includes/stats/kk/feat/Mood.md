

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This feature is universal.
It occurs with 5 different values: `Cnd`, `Imp`, `Ind`, `Opt`, `Pot`.

58 tokens (11%) have a non-empty value of `Mood`.
44 types (14%) occur at least once with a non-empty value of `Mood`.
33 lemmas (13%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: [kk-pos/VERB]() (37; 7% instances), [kk-pos/AUX]() (21; 4% instances).

### `VERB`

37 [kk-pos/VERB]() tokens (48% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="Aspect.html">Aspect</a>=EMPTY</tt> (37; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (37; 100%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (35; 95%), <tt><a href="Person.html">Person</a>=3</tt> (34; 92%), <tt><a href="Number.html">Number</a>=Sing</tt> (34; 92%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (31; 84%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (29; 78%), <tt><a href="Tense.html">Tense</a>=Past</tt> (23; 62%).

`VERB` tokens may have the following values of `Mood`:

* `Cnd` (5; 14% of non-empty `Mood`): <em>жатса, жалынса, жыласа, туса</em>
* `Ind` (28; 76% of non-empty `Mood`): <em>айтты, алған, безді, бермеді, болмады, біледі, бүлінер, бұз, бұзған, бәсеңдер</em>
* `Opt` (1; 3% of non-empty `Mood`): <em>қылсын</em>
* `Pot` (3; 8% of non-empty `Mood`): <em>айтарлықтай, айтушы, қорқушы</em>
* `EMPTY` (40): <em>деп, шешуі, бере, шыққан, Туған, аспай, атанып, атауға, барып, бастап</em>

<table>
  <tr><th>Paradigm <i>айт</i></th><th><tt>Ind</tt></th><th><tt>Pot</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>айтты</em></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td><em>айтарлықтай</em></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td><em>айтушы</em></td></tr>
</table>

### `AUX`

21 [kk-pos/AUX]() tokens (84% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (20; 95%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (18; 86%), <tt><a href="Person.html">Person</a>=3</tt> (17; 81%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (17; 81%), <tt><a href="Tense.html">Tense</a>=Past</tt> (14; 67%).

`AUX` tokens may have the following values of `Mood`:

* `Cnd` (3; 14% of non-empty `Mood`): <em>болмаса, болса, болсам</em>
* `Imp` (2; 10% of non-empty `Mood`): <em>гөр, көрме</em>
* `Ind` (15; 71% of non-empty `Mood`): <em>еді, болды, емес</em>
* `Pot` (1; 5% of non-empty `Mood`): <em>болушы</em>
* `EMPTY` (4): <em>болатын, болуға, болып, болғандықтан</em>

<table>
  <tr><th>Paradigm <i>бол</i></th><th><tt>Ind</tt></th><th><tt>Cnd</tt></th><th><tt>Pot</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="VerbForm.html">VerbForm</a>=Conv</tt></td><td></td><td><em>болсам</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Polarity.html">Polarity</a>=Neg|<a href="VerbForm.html">VerbForm</a>=Conv</tt></td><td></td><td><em>болмаса</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>болды</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Conv</tt></td><td></td><td><em>болса</em></td><td></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td></td><td><em>болушы</em></td></tr>
</table>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (6; 100%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (3; 100%).

