

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This feature is universal.
It occurs with 2 different values: `Imp`, `Perf`.

1846 tokens (14%) have a non-empty value of `Aspect`.
1366 types (26%) occur at least once with a non-empty value of `Aspect`.
998 lemmas (26%) occur at least once with a non-empty value of `Aspect`.
The feature is used with 4 part-of-speech tags: [uk-pos/VERB]() (1552; 12% instances), [uk-pos/AUX]() (159; 1% instances), [uk-pos/ADJ]() (128; 1% instances), [uk-pos/NOUN]() (7; 0% instances).

### `VERB`

1552 [uk-pos/VERB]() tokens (100% of all `VERB` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `VERB` and `Aspect` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (1257; 81%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (1221; 79%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (1201; 77%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (971; 63%), <tt><a href="Tense.html">Tense</a>=Past</tt> (956; 62%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (921; 59%).

`VERB` tokens may have the following values of `Aspect`:

* `Imp` (982; 63% of non-empty `Aspect`): <em>було, мав, мали, ходили, жив, міг, любив, стояв, стояла, тримаючи</em>
* `Perf` (570; 37% of non-empty `Aspect`): <em>виявилося, сказав, зробити, почали, зробив, взяти, почав, пішли, сказати, випити</em>

<table>
  <tr><th>Paradigm <i>вирізати</i></th><th><tt>Imp</tt></th><th><tt>Perf</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>вирізав</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>вирізали</em></td><td></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td><em>вирізати</em></td><td></td></tr>
</table>

`Aspect` seems to be **lexical feature** of `VERB`. 100% lemmas (876) occur only with one value of `Aspect`.

### `AUX`

159 [uk-pos/AUX]() tokens (92% of all `AUX` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `AUX` and `Aspect` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (150; 94%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (149; 94%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (137; 86%), <tt><a href="Tense.html">Tense</a>=Past</tt> (129; 81%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (112; 70%).

`AUX` tokens may have the following values of `Aspect`:

* `Imp` (159; 100% of non-empty `Aspect`): <em>було, був, була, були, є, буде, бути, будемо, Буду, Будьте</em>
* `EMPTY` (14): <em>б, би, ці</em>

### `ADJ`

128 [uk-pos/ADJ]() tokens (11% of all `ADJ` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `ADJ` and `Aspect` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (128; 100%), <tt><a href="Voice.html">Voice</a>=Pass</tt> (124; 97%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (122; 95%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (113; 88%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (73; 57%).

`ADJ` tokens may have the following values of `Aspect`:

* `Imp` (15; 12% of non-empty `Aspect`): <em>бачених, бриту, вареними, вареною, варену, западаючу, крадений, мордовану, неасфальтованих, пастеризованого</em>
* `Perf` (113; 88% of non-empty `Aspect`): <em>відкритим, зранений, населених, перелякані, поваленій, призначених, Завішані, Змучений, Нагріта, Повернені</em>
* `EMPTY` (987): <em>різних, цілу, домашніх, різні, ціле, цілий, великих, великої, дитячої, експериментальних</em>

`Aspect` seems to be **lexical feature** of `ADJ`. 100% lemmas (113) occur only with one value of `Aspect`.

### `NOUN`

7 [uk-pos/NOUN]() tokens (0% of all `NOUN` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `NOUN` and `Aspect` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (6; 86%), <tt><a href="Animacy.html">Animacy</a>=Anim</tt> (5; 71%), <tt><a href="Number.html">Number</a>=Ptan</tt> (4; 57%).

`NOUN` tokens may have the following values of `Aspect`:

* `Imp` (4; 57% of non-empty `Aspect`): <em>оточуючих, завідуючий</em>
* `Perf` (3; 43% of non-empty `Aspect`): <em>дані, нареченим, померлі</em>
* `EMPTY` (2960): <em>час, тварин, тато, життя, дзядзьо, рік, років, школи, вулиці, діти</em>

## Relations with Agreement in `Aspect`

The 10 most frequent relations where parent and child node agree in `Aspect`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (202; 84%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (96; 72%),
<tt>VERB --[<a href="../dep/xcomp.html">xcomp</a>]--> VERB</tt> (69; 53%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (49; 65%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (27; 57%),
<tt>VERB --[<a href="../dep/compound:svc.html">compound:svc</a>]--> VERB</tt> (2; 100%).

