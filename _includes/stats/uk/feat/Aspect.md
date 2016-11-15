

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This feature is universal.
It occurs with 2 different values: `Imp`, `Perf`.

341 tokens (20%) have a non-empty value of `Aspect`.
211 types (30%) occur at least once with a non-empty value of `Aspect`.
157 lemmas (26%) occur at least once with a non-empty value of `Aspect`.
The feature is used with 2 part-of-speech tags: [uk-pos/VERB]() (319; 19% instances), [uk-pos/ADJ]() (22; 1% instances).

### `VERB`

319 [uk-pos/VERB]() tokens (100% of all `VERB` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `VERB` and `Aspect` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (255; 80%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (242; 76%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (207; 65%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (189; 59%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (176; 55%).

`VERB` tokens may have the following values of `Aspect`:

* `Imp` (206; 65% of non-empty `Aspect`): <em>є, був, каже, плаває, було, зберігати, навчають, Кажуть, буде, копати</em>
* `Perf` (113; 35% of non-empty `Aspect`): <em>пішов, сказав, зароблено, Почекайте, Запитаю, виграв, запізнилися, змінять, зустрів, зізнатися</em>

`Aspect` seems to be **lexical feature** of `VERB`. 100% lemmas (139) occur only with one value of `Aspect`.

### `ADJ`

22 [uk-pos/ADJ]() tokens (24% of all `ADJ` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `ADJ` and `Aspect` co-occurred: <tt><a href="NumType.html">NumType</a>=EMPTY</tt> (22; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (22; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (21; 95%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (19; 86%), <tt><a href="Voice.html">Voice</a>=Pass</tt> (17; 77%), <tt><a href="Case.html">Case</a>=Nom</tt> (13; 59%).

`ADJ` tokens may have the following values of `Aspect`:

* `Imp` (1; 5% of non-empty `Aspect`): <em>ризикованим</em>
* `Perf` (21; 95% of non-empty `Aspect`): <em>минулому, розташоване, Минулої, Об’єднаних, Оскарженого, висланий, втомлена, даними, зауважене, збережений</em>
* `EMPTY` (70): <em>Важливим, перший, швидший, далекому, мила, першим, повинен, чесний, Бородаті, Зелена</em>

`Aspect` seems to be **lexical feature** of `ADJ`. 100% lemmas (18) occur only with one value of `Aspect`.

## Relations with Agreement in `Aspect`

The 10 most frequent relations where parent and child node agree in `Aspect`:
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (22; 81%),
<tt>VERB --[<a href="../dep/xcomp.html">xcomp</a>]--> VERB</tt> (16; 73%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (10; 91%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (5; 100%),
<tt>VERB --[<a href="../dep/csubjpass.html">csubjpass</a>]--> VERB</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/csubjpass.html">csubjpass</a>]--> VERB</tt> (1; 100%).

