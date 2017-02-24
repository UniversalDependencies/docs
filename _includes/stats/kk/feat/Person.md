

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: [Person](), [Person[psor]]().

58 tokens (11%) have a non-empty value of `Person`.
43 types (13%) occur at least once with a non-empty value of `Person`.
33 lemmas (13%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: [kk-pos/VERB]() (34; 6% instances), [kk-pos/AUX]() (20; 4% instances), [kk-pos/PRON]() (4; 1% instances).

### `VERB`

34 [kk-pos/VERB]() tokens (44% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (34; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (34; 100%), <tt><a href="Aspect.html">Aspect</a>=EMPTY</tt> (34; 100%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (32; 94%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (29; 85%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (28; 82%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (28; 82%), <tt><a href="Tense.html">Tense</a>=Past</tt> (22; 65%).

`VERB` tokens may have the following values of `Person`:

* `3` (34; 100% of non-empty `Person`): <em>айтты, жатса, алған, безді, бермеді, болмады, біледі, бүлінер, бұз, бұзған</em>
* `EMPTY` (43): <em>деп, шешуі, бере, шыққан, Туған, айтарлықтай, айтушы, аспай, атанып, атауға</em>

`Person` seems to be **lexical feature** of `VERB`. 100% lemmas (29) occur only with one value of `Person`.

### `AUX`

20 [kk-pos/AUX]() tokens (80% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (20; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (17; 85%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (17; 85%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (15; 75%), <tt><a href="Tense.html">Tense</a>=Past</tt> (14; 70%).

`AUX` tokens may have the following values of `Person`:

* `1` (1; 5% of non-empty `Person`): <em>болсам</em>
* `2` (2; 10% of non-empty `Person`): <em>гөр, көрме</em>
* `3` (17; 85% of non-empty `Person`): <em>еді, болды, болмаса, болса, емес</em>
* `EMPTY` (5): <em>болатын, болушы, болуға, болып, болғандықтан</em>

<table>
  <tr><th>Paradigm <i>бол</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Polarity.html">Polarity</a>=Neg|<a href="VerbForm.html">VerbForm</a>=Conv</tt></td><td></td><td><em>болмаса</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="VerbForm.html">VerbForm</a>=Conv</tt></td><td><em>болсам</em></td><td><em>болса</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>болды</em></td></tr>
</table>

### `PRON`

4 [kk-pos/PRON]() tokens (22% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (4; 100%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (4; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (4; 100%), <tt><a href="Person[psor].html">Person[psor]</a>=EMPTY</tt> (4; 100%).

`PRON` tokens may have the following values of `Person`:

* `3` (4; 100% of non-empty `Person`): <em>оның, ол, оған</em>
* `EMPTY` (14): <em>не, қанша, өзінше, өзінің, Кім, ешкімге, осы, өзі, өзіндей</em>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (6; 100%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (3; 100%),
<tt>VERB --[<a href="../dep/obl.html">obl</a>]--> PRON</tt> (1; 100%).

