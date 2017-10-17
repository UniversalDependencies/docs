

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

5307 tokens (6%) have a non-empty value of `Mood`.
2284 types (8%) occur at least once with a non-empty value of `Mood`.
1293 lemmas (8%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: [ru-pos/VERB]() (4416; 5% instances), [ru-pos/AUX]() (891; 1% instances).

### `VERB`

4416 [ru-pos/VERB]() tokens (60% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (4416; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (4416; 100%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (4416; 100%), <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (4416; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (3309; 75%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (3172; 72%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (2776; 63%), <tt><a href="Tense.html">Tense</a>=Past</tt> (2655; 60%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (2655; 60%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (2376; 54%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (27; 1% of non-empty `Mood`): <em>см., Come, Join, Create, Raise, Ram, Shoot, pass, peek, Будь</em>
* `Ind` (4389; 99% of non-empty `Mood`): <em>составляет, может, получил, находится, входит, родился, имеет, есть, было, начал</em>
* `EMPTY` (2887): <em>можно, нет, расположен, быть, назначен, основана, награждён, основан, включая, начиная</em>

<table>
  <tr><th>Paradigm <i>БЫТЬ</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>был</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>была</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>было</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=2</tt></td><td></td><td><em>Будь</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut</tt></td><td><em>будет</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>есть, е.</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>есть</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>были</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 99% lemmas (1277) occur only with one value of `Mood`.

### `AUX`

891 [ru-pos/AUX]() tokens (89% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (891; 100%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (785; 88%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (751; 84%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (735; 82%), <tt><a href="Tense.html">Tense</a>=Past</tt> (735; 82%), <tt><a href="Number.html">Number</a>=Sing</tt> (725; 81%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (1; 0% of non-empty `Mood`): <em>Stay</em>
* `Ind` (890; 100% of non-empty `Mood`): <em>был, было, были, была, является, стал, будет, являются, стала, стало</em>
* `EMPTY` (112): <em>это, быть, будучи, стать, став, назначен, ставшие, считать, оставаясь, --</em>

`Mood` seems to be **lexical feature** of `AUX`. 100% lemmas (32) occur only with one value of `Mood`.

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (480; 81%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (183; 75%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (107; 63%),
<tt>VERB --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> VERB</tt> (10; 59%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (4; 80%),
<tt>VERB --[<a href="../dep/appos.html">appos</a>]--> VERB</tt> (2; 67%),
<tt>VERB --[<a href="../dep/orphan.html">orphan</a>]--> VERB</tt> (1; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This feature is universal.
It occurs with 3 different values: `Cnd`, `Imp`, `Ind`.

79428 tokens (8%) have a non-empty value of `Mood`.
16763 types (16%) occur at least once with a non-empty value of `Mood`.
4598 lemmas (11%) occur at least once with a non-empty value of `Mood`.
The feature is used with 4 part-of-speech tags: [ru-pos/VERB]() (70244; 7% instances), [ru-pos/AUX]() (6570; 1% instances), [ru-pos/PART]() (1384; 0% instances), [ru-pos/SCONJ]() (1230; 0% instances).

### `VERB`

70244 [ru-pos/VERB]() tokens (63% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (70244; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (70244; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (51420; 73%), <tt><a href="Number.html">Number</a>=Sing</tt> (46943; 67%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (46569; 66%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (44753; 64%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (865; 1% of non-empty `Mood`): <em>см., давайте, давай, представьте, дай, извините, иди, Помогите, живи, смотри</em>
* `Ind` (69379; 99% of non-empty `Mood`): <em>может, есть, нет, могут, было, является, стал, говорит, сказал, стало</em>
* `EMPTY` (40497): <em>быть, сделать, сказать, делать, говорить, работать, получить, стать, говоря, иметь</em>

<table>
  <tr><th>Paradigm <i>быть</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>был</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>была</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>было</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=2</tt></td><td></td><td><em>будь</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>есть, будет, е.</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>будем, есть</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>есть, будут</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>были</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 94% lemmas (4302) occur only with one value of `Mood`.

### `AUX`

6570 [ru-pos/AUX]() tokens (90% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (6570; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (6570; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (6570; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (4882; 74%), <tt><a href="Tense.html">Tense</a>=Past</tt> (4686; 71%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (4686; 71%).

`AUX` tokens may have the following values of `Mood`:

* `Imp` (23; 0% of non-empty `Mood`): <em>будь, будьте</em>
* `Ind` (6547; 100% of non-empty `Mood`): <em>было, был, были, будет, была, будут, есть, будем, буду, будете</em>
* `EMPTY` (696): <em>быть, будучи, бывшие, бывший, бывшем</em>

<table>
  <tr><th>Paradigm <i>быть</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>был</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>была</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>было</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>буду, есть</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>будешь</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=2</tt></td><td></td><td><em>будь</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>будет, есть</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>будем</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=2|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>будете, есть</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=2</tt></td><td></td><td><em>будьте</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>будут, есть, суть</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>были</em></td><td></td></tr>
</table>

### `PART`

1384 [ru-pos/PART]() tokens (4% of all `PART` tokens) have a non-empty value of `Mood`.

`PART` tokens may have the following values of `Mood`:

* `Cnd` (1384; 100% of non-empty `Mood`): <em>бы, б</em>
* `EMPTY` (30624): <em>не, и, же, только, даже, вот, ли, лишь, именно, это</em>

### `SCONJ`

1230 [ru-pos/SCONJ]() tokens (7% of all `SCONJ` tokens) have a non-empty value of `Mood`.

`SCONJ` tokens may have the following values of `Mood`:

* `Cnd` (1230; 100% of non-empty `Mood`): <em>чтобы, чтоб</em>
* `EMPTY` (17224): <em>что, как, если, когда, то, чем, хотя, поскольку, пока, ведь</em>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (9440; 90%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (2753; 79%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (466; 61%),
<tt>VERB --[<a href="../dep/advmod.html">advmod</a>]--> VERB</tt> (100; 67%),
<tt>VERB --[<a href="../dep/appos.html">appos</a>]--> VERB</tt> (18; 100%),
<tt>VERB --[<a href="../dep/cc.html">cc</a>]--> VERB</tt> (13; 93%),
<tt>AUX --[<a href="../dep/cop.html">cop</a>]--> AUX</tt> (7; 100%),
<tt>VERB --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> VERB</tt> (3; 60%),
<tt>AUX --[<a href="../dep/aux:pass.html">aux:pass</a>]--> AUX</tt> (2; 100%),
<tt>VERB --[<a href="../dep/flat:name.html">flat:name</a>]--> VERB</tt> (2; 100%).

