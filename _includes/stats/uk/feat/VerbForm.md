

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This feature is universal but the values `Imps` are language-specific.
It occurs with 4 different values: `Fin`, `Imps`, `Inf`, `Part`.

341 tokens (20%) have a non-empty value of `VerbForm`.
211 types (30%) occur at least once with a non-empty value of `VerbForm`.
157 lemmas (26%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: [uk-pos/VERB]() (319; 19% instances), [uk-pos/ADJ]() (22; 1% instances).

### `VERB`

319 [uk-pos/VERB]() tokens (100% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="Mood.html">Mood</a>=Ind</tt> (242; 76%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (207; 65%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (206; 65%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (189; 59%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (176; 55%).

`VERB` tokens may have the following values of `VerbForm`:

* `Fin` (255; 80% of non-empty `VerbForm`): <em>є, був, каже, пішов, сказав, плаває, було, навчають, Кажуть, буде</em>
* `Imps` (14; 4% of non-empty `VerbForm`): <em>зароблено, Втрачено, Сказано, визначено, вирішено, зауважено, зроблено, з’ясовано, наказано, передбачено</em>
* `Inf` (49; 15% of non-empty `VerbForm`): <em>зберігати, копати, плавати, розмовляти, чекати, бути, зізнатися, почати, працювати, примусити</em>
* `Part` (1; 0% of non-empty `VerbForm`): <em>враховуючи</em>

<table>
  <tr><th>Paradigm <i>бути</i></th><th><tt>Fin</tt></th><th><tt>Inf</tt></th></tr>
  <tr><td><tt></tt></td><td></td><td><em>бути</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>був</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>була</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>було</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut</tt></td><td><em>буде</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>є</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>були</em></td><td></td></tr>
</table>

### `ADJ`

22 [uk-pos/ADJ]() tokens (24% of all `ADJ` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `ADJ` and `VerbForm` co-occurred: <tt><a href="NumType.html">NumType</a>=EMPTY</tt> (22; 100%), <tt><a href="Aspect.html">Aspect</a>=Perf</tt> (21; 95%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (21; 95%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (19; 86%), <tt><a href="Voice.html">Voice</a>=Pass</tt> (17; 77%), <tt><a href="Case.html">Case</a>=Nom</tt> (13; 59%).

`ADJ` tokens may have the following values of `VerbForm`:

* `Part` (22; 100% of non-empty `VerbForm`): <em>минулому, розташоване, Минулої, Об’єднаних, Оскарженого, висланий, втомлена, даними, зауважене, збережений</em>
* `EMPTY` (70): <em>Важливим, перший, швидший, далекому, мила, першим, повинен, чесний, Бородаті, Зелена</em>

`VerbForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (18) occur only with one value of `VerbForm`.

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (23; 85%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (11; 100%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (6; 86%),
<tt>VERB --[<a href="../dep/aux.html">aux</a>]--> VERB</tt> (5; 56%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (5; 100%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (1; 100%).

