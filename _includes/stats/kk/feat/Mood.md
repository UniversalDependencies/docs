

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This feature is universal but the values `Cond`, `Imper`, `Vol` are language-specific.
It occurs with 5 different values: `Cond`, `Imper`, `Opt`, `Pot`, `Vol`.

32 tokens (1%) have a non-empty value of `Mood`.
26 types (1%) occur at least once with a non-empty value of `Mood`.
22 lemmas (1%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: [kk-pos/VERB]() (31; 0% instances), [kk-pos/AUX]() (1; 0% instances).

### `VERB`

31 [kk-pos/VERB]() tokens (3% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (31; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (30; 97%), <tt><a href="Person.html">Person</a>=3</tt> (16; 52%).

`VERB` tokens may have the following values of `Mood`:

* `Cond` (13; 42% of non-empty `Mood`): <em>болмаса, берсе, болса, десең, жатсам, тұрсам, қонса, өлсе</em>
* `Imper` (8; 26% of non-empty `Mood`): <em>_, Аттан, Тап, бер, жолама, тұр, Қаш, қорықпа</em>
* `Opt` (7; 23% of non-empty `Mood`): <em>аяйын, барайын, білсін, жалынсын, сенсін, сескенейін, құрысын</em>
* `Pot` (1; 3% of non-empty `Mood`): <em>атқарушы</em>
* `Vol` (2; 6% of non-empty `Mood`): <em>Тарағысы, Қарағысы</em>
* `EMPTY` (1024): <em>_, деп, болып, алып, болған, біледі, болды, береді, басып, болады</em>

<table>
  <tr><th>Paradigm <i>бер</i></th><th><tt>Cond</tt></th><th><tt>Imper</tt></th></tr>
  <tr><td><tt><a href="Person.html">Person</a>=2</tt></td><td></td><td><em>бер</em></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Trans</tt></td><td><em>берсе</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 91% lemmas (20) occur only with one value of `Mood`.

### `AUX`

1 [kk-pos/AUX]() tokens (0% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (1; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (1; 100%), <tt><a href="Person.html">Person</a>=2</tt> (1; 100%).

`AUX` tokens may have the following values of `Mood`:

* `Imper` (1; 100% of non-empty `Mood`): <em>бер</em>
* `EMPTY` (323): <em>_, бастады, жатыр, екен, кетті, еді, емес, қалды, алды, екенін</em>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (3; 75%),
<tt>VERB --[<a href="../dep/remnant.html">remnant</a>]--> VERB</tt> (1; 100%).

