

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Belarusian)

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

397 tokens (6%) have a non-empty value of `Person`.
199 types (8%) occur at least once with a non-empty value of `Person`.
143 lemmas (8%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: [be-pos/VERB]() (253; 4% instances), [be-pos/PRON]() (121; 2% instances), [be-pos/AUX]() (23; 0% instances).

### `VERB`

253 [be-pos/VERB]() tokens (35% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (253; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (253; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (246; 97%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (204; 81%), <tt><a href="Voice.html">Voice</a>=Act</tt> (200; 79%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (199; 79%), <tt><a href="Number.html">Number</a>=Sing</tt> (165; 65%).

`VERB` tokens may have the following values of `Person`:

* `1` (30; 12% of non-empty `Person`): <em>ведаю, веру, Думаю, магу, хочам, асуджаем, бываю, вучуся, выказваем, гавару</em>
* `2` (13; 5% of non-empty `Person`): <em>Гавары, Вучыся, Прымі, ацэньваеце, бачыце, ведаеш, выканаеце, зробіце, можаце, пачні</em>
* `3` (210; 83% of non-empty `Person`): <em>можа, з'яўляецца, мае, маюць, з'яўляюцца, паведамляе, перадае, выступіць, гаворыцца, лічыць</em>
* `EMPTY` (473): <em>было, перадаваў, паведамілі, заявіў, паведамляў, адзначыў, вярнуцца, заклікаў, маглі, прыведзены</em>

<table>
  <tr><th>Paradigm <i>магчы</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>магу</em></td><td></td><td><em>можа</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>можаце</em></td><td></td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 90% lemmas (123) occur only with one value of `Person`.

### `PRON`

121 [be-pos/PRON]() tokens (47% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (121; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (96; 79%), <tt><a href="Case.html">Case</a>=Nom</tt> (81; 67%), <tt><a href="Number.html">Number</a>=Sing</tt> (65; 54%).

`PRON` tokens may have the following values of `Person`:

* `1` (61; 50% of non-empty `Person`): <em>я, мы, мне, мяне, нас, нам</em>
* `2` (14; 12% of non-empty `Person`): <em>вы, вас, вамі, ты</em>
* `3` (46; 38% of non-empty `Person`): <em>яны, яго, ён, яна, іх, яе, ім, яму, ёй, імі</em>
* `EMPTY` (134): <em>гэта, якія, таго, які, тое, гэтым, тым, што, якіх, чым</em>

### `AUX`

23 [be-pos/AUX]() tokens (68% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="Aspect.html">Aspect</a>=Perf</tt> (23; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (23; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (23; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (23; 100%), <tt><a href="Tense.html">Tense</a>=Fut</tt> (23; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (23; 100%), <tt><a href="Number.html">Number</a>=Plur</tt> (12; 52%).

`AUX` tokens may have the following values of `Person`:

* `1` (3; 13% of non-empty `Person`): <em>будзем, буду</em>
* `2` (1; 4% of non-empty `Person`): <em>будзеш</em>
* `3` (19; 83% of non-empty `Person`): <em>будуць, будзе</em>
* `EMPTY` (11): <em>былі, было, была, быць</em>

<table>
  <tr><th>Paradigm <i>быць</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>буду</em></td><td><em>будзеш</em></td><td><em>будзе</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>будзем</em></td><td></td><td><em>будуць</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (23; 77%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (7; 58%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (1; 100%).

