

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: [Number](), [Number[psor]]().

124137 tokens (55%) have a non-empty value of `Number`.
22498 types (86%) occur at least once with a non-empty value of `Number`.
14060 lemmas (78%) occur at least once with a non-empty value of `Number`.
The feature is used with 16 part-of-speech tags: [pt-pos/NOUN]() (39029; 17% instances), [pt-pos/DET]() (33439; 15% instances), [pt-pos/VERB]() (20024; 9% instances), [pt-pos/ADJ]() (10724; 5% instances), [pt-pos/PRON]() (7138; 3% instances), [pt-pos/PROPN]() (6485; 3% instances), [pt-pos/NUM]() (4242; 2% instances), [pt-pos/ADP]() (2039; 1% instances), [pt-pos/SYM]() (416; 0% instances), [pt-pos/AUX]() (375; 0% instances), [pt-pos/CONJ]() (138; 0% instances), [pt-pos/PUNCT]() (57; 0% instances), [pt-pos/ADV]() (19; 0% instances), [pt-pos/SCONJ]() (6; 0% instances), [pt-pos/INTJ]() (4; 0% instances), [pt-pos/PART]() (2; 0% instances).

### `NOUN`

39029 [pt-pos/NOUN]() tokens (93% of all `NOUN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NOUN` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (20950; 54%).

`NOUN` tokens may have the following values of `Number`:

* `Plur` (11561; 30% of non-empty `Number`): <em>anos, milhões, pessoas, contos, dias, pontos, empresas, meses, países, problemas</em>
* `Sing` (27468; 70% of non-empty `Number`): <em>ano, dia, presidente, país, grupo, governo, estado, parte, tempo, semana</em>
* `EMPTY` (3057): <em>cento, vez, partir, entanto, fora, presidente, relação, exemplo, lado, é</em>

<table>
  <tr><th>Paradigm <i>ano</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>ano</em></td><td><em>anos</em></td></tr>
</table>

### `DET`

33439 [pt-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (29308; 88%), <tt><a href="Definite.html">Definite</a>=Def</tt> (26347; 79%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (17923; 54%).

`DET` tokens may have the following values of `Number`:

* `Plur` (7029; 21% of non-empty `Number`): <em>os, as, seus, suas, outros, outras, alguns, algumas, todos, estes</em>
* `Sing` (26410; 79% of non-empty `Number`): <em>o, a, um, uma, sua, seu, este, esta, esse, qualquer</em>
* `EMPTY` (5): <em>mais, a, menos, o(s)</em>

<table>
  <tr><th>Paradigm <i>o</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc</tt></td><td><em>o</em></td><td><em>os</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>o, a, Os</em></td><td><em>os, o</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Art|<a href="Typo.html">Typo</a>=Yes</tt></td><td><em>os</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem</tt></td><td><em>a</em></td><td><em>as</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>a, as</em></td><td><em>as</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Art|<a href="Typo.html">Typo</a>=Yes</tt></td><td><em>a</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>a, o</em></td><td><em>as</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>o</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>o</em></td><td><em>os</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>o</em></td><td><em>os</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>o</em></td><td><em>os</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="NumType.html">NumType</a>=Card|<a href="PronType.html">PronType</a>=Ind,Neg,Tot</tt></td><td><em>a</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>a</em></td><td><em>as</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Dem</tt></td><td><em>a</em></td><td><em>as</em></td></tr>
</table>

### `VERB`

20024 [pt-pos/VERB]() tokens (77% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (15821; 79%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (15436; 77%), <tt><a href="Person.html">Person</a>=3</tt> (14861; 74%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (14158; 71%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (5230; 26% of non-empty `Number`): <em>são, foram, estão, têm, vão, serão, podem, estavam, eram, devem</em>
* `Sing` (14794; 74% of non-empty `Number`): <em>é, foi, tem, está, há, disse, vai, era, diz, pode</em>
* `EMPTY` (5823): <em>ser, ter, fazer, sido, ver, dar, dizer, sendo, estar, falar</em>

<table>
  <tr><th>Paradigm <i>ser</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>sido</em></td><td></td></tr>
  <tr><td><tt><a href="Hyph.html">Hyph</a>=Yes|<a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>seja-</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=1,3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>seria</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>seria</em></td><td><em>seriam</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Imp|<a href="Person.html">Person</a>=2|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>Sê</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1,3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>era</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>serei</em></td><td><em>seremos</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>era</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fui</em></td><td><em>fomos</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pqp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fora</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>sou, sô</em></td><td><em>somos</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>será</em></td><td><em>serão</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td><em>será</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp,Pqp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>foram</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>era</em></td><td><em>eram</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>foi, foram</em></td><td><em>foram</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pqp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fora</em></td><td><em>foram</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="Typo.html">Typo</a>=Yes|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>çe</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>é, eis, é-, Sou</em></td><td><em>são</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=1,3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>for</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=1,3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fosse</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fosse</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>for, fôr</em></td><td><em>forem</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fosse</em></td><td><em>fossem</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>seja</em></td><td><em>sejam</em></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=1|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td></td><td><em>sermos</em></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td><em>ser</em></td><td><em>serem</em></td></tr>
</table>

### `ADJ`

10724 [pt-pos/ADJ]() tokens (99% of all `ADJ` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `ADJ` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (5865; 55%).

`ADJ` tokens may have the following values of `Number`:

* `Plur` (3131; 29% of non-empty `Number`): <em>grandes, últimos, novos, novas, jovens, primeiros, responsáveis, principais, internacionais, melhores</em>
* `Sing` (7593; 71% of non-empty `Number`): <em>maior, grande, primeiro, novo, primeira, nova, melhor, último, nacional, última</em>
* `EMPTY` (152): <em>mesmo, devido, outro, próximo, muitas, junto, grande, primeiro, segundo, fora</em>

<table>
  <tr><th>Paradigm <i>grande</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>grandes</em></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Cmp|<a href="Gender.html">Gender</a>=Masc</tt></td><td><em>maior</em></td><td><em>maiores</em></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Cmp|<a href="Gender.html">Gender</a>=Fem</tt></td><td><em>maior</em></td><td><em>maiores</em></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Sup|<a href="Gender.html">Gender</a>=Masc</tt></td><td><em>máximo</em></td><td><em>máximos</em></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Sup|<a href="Gender.html">Gender</a>=Fem</tt></td><td><em>máxima</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>grande, maior, máximo</em></td><td><em>grandes, máximos</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>grande, maior, máxima</em></td><td><em>grandes, maiores</em></td></tr>
</table>

### `PRON`

7138 [pt-pos/PRON]() tokens (94% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (6386; 89%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (4731; 66%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (4718; 66%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (4535; 64%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (1884; 26% of non-empty `Number`): <em>que, se, os, eles, nos, as, todos, elas, nós, outros</em>
* `Sing` (5254; 74% of non-empty `Number`): <em>que, se, a, o, ele, o_que, isso, lhe, quem, eu</em>
* `EMPTY` (490): <em>se, de, pelo, mais, quem, ou, que, o_que, se-, si</em>

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Ind</tt></td><td><em>que</em></td><td><em>que</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Int</tt></td><td><em>que</em></td><td><em>que</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>que</em></td><td><em>que</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Ind</tt></td><td><em>que</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Int</tt></td><td></td><td><em>que</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Rel</tt></td><td><em>que</em></td><td><em>que</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="PronType.html">PronType</a>=Rel|<a href="Typo.html">Typo</a>=Yes</tt></td><td><em>que</em></td><td></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Rel</tt></td><td><em>que</em></td><td><em>que</em></td></tr>
</table>

### `PROPN`

6485 [pt-pos/PROPN]() tokens (35% of all `PROPN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PROPN` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (3940; 61%).

`PROPN` tokens may have the following values of `Number`:

* `Plur` (226; 3% of non-empty `Number`): <em>EUA, Antas, Açores, Misericórdias, Açoteias, CDBs, Campos, Cieps, Comandos, Finanças</em>
* `Sing` (6259; 97% of non-empty `Number`): <em>Portugal, Brasil, Governo, PÚBLICO, Lisboa, Folha, Rio, FHC, Alemanha, França</em>
* `EMPTY` (11996): <em>Paulo, São, José, Nacional, João, Carlos, Estados, Unidos, Fernando, Silva</em>

<table>
  <tr><th>Paradigm <i>Estado</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>Estado</em></td><td><em>Estados</em></td></tr>
</table>

`Number` seems to be **lexical feature** of `PROPN`. 99% lemmas (2945) occur only with one value of `Number`.

### `NUM`

4242 [pt-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NUM` and `Number` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (4127; 97%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (3459; 82%).

`NUM` tokens may have the following values of `Number`:

* `Plur` (3228; 76% of non-empty `Number`): <em>dois, três, mil, duas, quatro, cinco, seis, 15, 30, dez</em>
* `Sing` (1014; 24% of non-empty `Number`): <em>um, uma, 1, 1994, 1993, 1992, 1995, 1991, 1997, 1990</em>
* `EMPTY` (6): <em>1., 07.00-09.00, 1, 10.00-12.00, 18</em>

<table>
  <tr><th>Paradigm <i>um</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>um</em></td><td><em>um</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="NumType.html">NumType</a>=Card</tt></td><td><em>um</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="NumType.html">NumType</a>=Card</tt></td><td><em>uma</em></td><td></td></tr>
</table>

### `ADP`

2039 [pt-pos/ADP]() tokens (6% of all `ADP` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `ADP` and `Number` co-occurred: <tt><a href="AdpType.html">AdpType</a>=Prep</tt> (2039; 100%).

`ADP` tokens may have the following values of `Number`:

* `Plur` (204; 10% of non-empty `Number`): <em>por, de, da, do, em, pelos, sem, dos, in</em>
* `Sing` (1835; 90% of non-empty `Number`): <em>de, da, do, dos, das, para, em, por, in, à</em>
* `EMPTY` (33453): <em>de, em, a, por, para, com, entre, sobre, sem, até</em>

<table>
  <tr><th>Paradigm <i>de</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>de</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>de</em></td><td><em>de</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>de</em></td><td><em>de</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Typo.html">Typo</a>=Yes</tt></td><td><em>de</em></td><td></td></tr>
</table>

### `SYM`

416 [pt-pos/SYM]() tokens (96% of all `SYM` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `SYM` and `Number` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (416; 100%).

`SYM` tokens may have the following values of `Number`:

* `Plur` (408; 98% of non-empty `Number`): <em>%, US$, R$, CR$, $%, U$</em>
* `Sing` (8; 2% of non-empty `Number`): <em>R$, US$</em>
* `EMPTY` (19): <em>/</em>

<table>
  <tr><th>Paradigm <i>US$</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>US$</em></td><td><em>US$</em></td></tr>
</table>

### `AUX`

375 [pt-pos/AUX]() tokens (82% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (348; 93%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (346; 92%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (293; 78%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (215; 57%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (119; 32% of non-empty `Number`): <em>podem, estão, vão, têm, devem, poderão, possam, chegaram, terão, tinham</em>
* `Sing` (256; 68% of non-empty `Number`): <em>pode, deve, tem, vai, está, poderá, deverá, poderia, tinha, deveria</em>
* `EMPTY` (83): <em>ter, tendo, devendo, ser, tomar, ver, vindo, abandonar, acabar, afectar</em>

<table>
  <tr><th>Paradigm <i>ter</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>teria</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>tinha</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>tenho</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Fut|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>terá</em></td><td><em>terão</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>tinha</em></td><td><em>tinham</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>teve</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>tem</em></td><td><em>têm</em></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Imp|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>tivesse</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Sub|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>tenha</em></td><td></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=3|<a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td><em>ter</em></td><td><em>terem</em></td></tr>
</table>

### `CONJ`

138 [pt-pos/CONJ]() tokens (3% of all `CONJ` tokens) have a non-empty value of `Number`.

`CONJ` tokens may have the following values of `Number`:

* `Plur` (7; 5% of non-empty `Number`): <em>e</em>
* `Sing` (131; 95% of non-empty `Number`): <em>e, I, y, Ni</em>
* `EMPTY` (5143): <em>e, mas, ou, nem, quer, $/, mais, e/ou, &, /</em>

<table>
  <tr><th>Paradigm <i>e</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>e</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>e</em></td><td><em>e</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>e</em></td><td><em>e</em></td></tr>
</table>

### `PUNCT`

57 [pt-pos/PUNCT]() tokens (0% of all `PUNCT` tokens) have a non-empty value of `Number`.

`PUNCT` tokens may have the following values of `Number`:

* `Plur` (1; 2% of non-empty `Number`): <em>,</em>
* `Sing` (56; 98% of non-empty `Number`): <em>,, &, --, -, /, ?, ., !, .., ...</em>
* `EMPTY` (29924): <em>,, ., «, », ), (, --, :, ?, ;</em>

<table>
  <tr><th>Paradigm <i>,</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>,</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td><em>,</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>,</em></td><td><em>,</em></td></tr>
</table>

`Number` seems to be **lexical feature** of `PUNCT`. 92% lemmas (11) occur only with one value of `Number`.

### `ADV`

19 [pt-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `ADV` and `Number` co-occurred: <tt><a href="NumType.html">NumType</a>=EMPTY</tt> (18; 95%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (18; 95%).

`ADV` tokens may have the following values of `Number`:

* `Plur` (3; 16% of non-empty `Number`): <em>mais, juntos</em>
* `Sing` (16; 84% of non-empty `Number`): <em>etc., Ali, mais, aí, fundo, onde</em>
* `EMPTY` (8886): <em>não, mais, como, já, também, ontem, ainda, quando, só, depois</em>

<table>
  <tr><th>Paradigm <i>mais</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>mais</em></td><td><em>mais</em></td></tr>
</table>

### `SCONJ`

6 [pt-pos/SCONJ]() tokens (0% of all `SCONJ` tokens) have a non-empty value of `Number`.

`SCONJ` tokens may have the following values of `Number`:

* `Sing` (6; 100% of non-empty `Number`): <em>que</em>
* `EMPTY` (2409): <em>que, se, porque, como, embora, pois, caso, si, Senão, e</em>

### `INTJ`

4 [pt-pos/INTJ]() tokens (9% of all `INTJ` tokens) have a non-empty value of `Number`.

`INTJ` tokens may have the following values of `Number`:

* `Sing` (4; 100% of non-empty `Number`): <em>Adeus, Obrigada, rua, viu</em>
* `EMPTY` (42): <em>não, Rarará, Deus, é, Ah, Ai, Alô, BINGO, Droga, Hein</em>

### `PART`

2 [pt-pos/PART]() tokens (5% of all `PART` tokens) have a non-empty value of `Number`.

`PART` tokens may have the following values of `Number`:

* `Sing` (2; 100% of non-empty `Number`): <em>NÃO, pós</em>
* `EMPTY` (42): <em>não, anti-, ex, ex-, pré-</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (27290; 98%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (7872; 98%),
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (6475; 60%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (4591; 92%),
<tt>NOUN --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (3288; 77%),
<tt>PROPN --[<a href="../dep/det.html">det</a>]--> DET</tt> (2892; 59%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (2496; 85%),
<tt>NOUN --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (2238; 87%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (1720; 79%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (1476; 54%).

