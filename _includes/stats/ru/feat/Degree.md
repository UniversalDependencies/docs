

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

512 tokens (1%) have a non-empty value of `Degree`.
149 types (0%) occur at least once with a non-empty value of `Degree`.
100 lemmas (1%) occur at least once with a non-empty value of `Degree`.
The feature is used with 4 part-of-speech tags: [ru-pos/ADV]() (289; 0% instances), [ru-pos/ADJ]() (133; 0% instances), [ru-pos/VERB]() (88; 0% instances), [ru-pos/NUM]() (2; 0% instances).

### `ADV`

289 [ru-pos/ADV]() tokens (9% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (261; 90% of non-empty `Degree`): <em>более, менее, позже, больше, позднее, ранее, далее, чаще, раньше, выше</em>
* `Sup` (28; 10% of non-empty `Degree`): <em>наиболее</em>
* `EMPTY` (3066): <em>где, как, так, уже, ещё, когда, вместе, затем, впервые, здесь</em>

`Degree` seems to be **lexical feature** of `ADV`. 100% lemmas (37) occur only with one value of `Degree`.

### `ADJ`

133 [ru-pos/ADJ]() tokens (1% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (133; 100%), <tt><a href="Animacy.html">Animacy</a>=Inan</tt> (79; 59%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (71; 53%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (31; 23% of non-empty `Degree`): <em>старше, выше, мельче, меньше, ниже, глупее, длиннее, короче, лучше, мертвее</em>
* `Sup` (102; 77% of non-empty `Degree`): <em>лучших, лучшие, лучший, крупнейший, крупнейших, лучшим, высшей, высших, лучшую, Ближайшие</em>
* `EMPTY` (12212): <em>второй, й, 2008, 2010, х, других, 2004, первый, 2012, 1</em>

<table>
  <tr><th>Paradigm <i>СТАРШИЙ</i></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>старше</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>Старший</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 98% lemmas (41) occur only with one value of `Degree`.

### `VERB`

88 [ru-pos/VERB]() tokens (1% of all `VERB` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `VERB` and `Degree` co-occurred: <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (88; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (88; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (88; 100%), <tt><a href="Aspect.html">Aspect</a>=EMPTY</tt> (88; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (88; 100%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (88; 100%), <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (88; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (88; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (88; 100%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (88; 100%).

`VERB` tokens may have the following values of `Degree`:

* `Cmp` (1; 1% of non-empty `Degree`): <em>Труднее</em>
* `Pos` (87; 99% of non-empty `Degree`): <em>можно, надо, нужно, необходимо, известно, трудно, возможно, достаточно, интересно, принято</em>
* `EMPTY` (8692): <em>был, является, было, стал, составляет, были, может, находится, входит, получил</em>

<table>
  <tr><th>Paradigm <i>ТРУДНО</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th></tr>
  <tr><td><tt></tt></td><td><em>трудно</em></td><td><em>Труднее</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `VERB`. 96% lemmas (23) occur only with one value of `Degree`.

### `NUM`

2 [ru-pos/NUM]() tokens (0% of all `NUM` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `NUM` and `Degree` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (2; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (2; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (2; 100%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (2; 100%).

`NUM` tokens may have the following values of `Degree`:

* `Cmp` (2; 100% of non-empty `Degree`): <em>более, больше</em>
* `EMPTY` (2026): <em>2, два, один, несколько, 1, двух, 10, 4, три, 3</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (7; 100%),
<tt>ADJ --[<a href="../dep/remnant.html">remnant</a>]--> ADJ</tt> (1; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

172038 tokens (16%) have a non-empty value of `Degree`.
32744 types (29%) occur at least once with a non-empty value of `Degree`.
10722 lemmas (26%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: [ru-pos/ADJ]() (115829; 11% instances), [ru-pos/ADV]() (56209; 5% instances).

### `ADJ`

115829 [ru-pos/ADJ]() tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (76038; 66%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (1159; 1% of non-empty `Degree`): <em>лучше, выше, ниже, больше, хуже, легче, меньше, проще, труднее, ближе</em>
* `Pos` (114177; 99% of non-empty `Degree`): <em>которые, который, которых, которая, других, нужно, которой, другой, многие, должны</em>
* `Sup` (493; 0% of non-empty `Degree`): <em>крупнейших, важнейших, важнейшим, крупнейшие, новейшие, ближайших, важнейший, крупнейшей, важнейшая, важнейшие</em>

<table>
  <tr><th>Paradigm <i>новый</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>новее</em></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>нового</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>новых</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новый</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>новые</em></td><td></td><td><em>новейшие</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новую</em></td><td></td><td><em>новейшую</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новое</em></td><td></td><td><em>новейшее</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новому</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новой</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новому</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Plur</tt></td><td><em>новым</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>нового</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новой</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>нового</em></td><td></td><td><em>новейшего</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Plur</tt></td><td><em>новых</em></td><td></td><td><em>новейших</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новым</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новой</em></td><td></td><td><em>новейшей</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новым</em></td><td></td><td><em>новейшим</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Plur</tt></td><td><em>новыми</em></td><td></td><td><em>новейшими</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новом</em></td><td></td><td><em>новейшем</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новой</em></td><td></td><td><em>новейшей</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новом</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>новых</em></td><td></td><td><em>новейших</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новый</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новая</em></td><td></td><td><em>новейшая</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>новое</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur</tt></td><td><em>новые</em></td><td></td><td><em>новейшие</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Variant.html">Variant</a>=Brev</tt></td><td><em>нов</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Variant.html">Variant</a>=Brev</tt></td><td><em>нова</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing|<a href="Variant.html">Variant</a>=Brev</tt></td><td><em>ново</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 98% lemmas (8519) occur only with one value of `Degree`.

### `ADV`

56209 [ru-pos/ADV]() tokens (100% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (1762; 3% of non-empty `Degree`): <em>больше, меньше, раньше, лучше, дальше, чаще, позже, быстрее, выше, точнее</em>
* `Pos` (54447; 97% of non-empty `Degree`): <em>так, уже, еще, можно, более, как, очень, однако, где, сейчас</em>

<table>
  <tr><th>Paradigm <i>много</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th></tr>
  <tr><td><tt></tt></td><td><em>много, больше</em></td><td><em>больше, побольше</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 95% lemmas (1904) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/advmod.html">advmod</a>]--> ADV</tt> (6842; 95%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (4354; 99%),
<tt>ADV --[<a href="../dep/advmod.html">advmod</a>]--> ADV</tt> (2915; 89%),
<tt>ADJ --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (1585; 100%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (747; 98%),
<tt>ADJ --[<a href="../dep/parataxis.html">parataxis</a>]--> ADV</tt> (595; 91%),
<tt>ADJ --[<a href="../dep/compound.html">compound</a>]--> ADJ</tt> (546; 100%),
<tt>ADJ --[<a href="../dep/nmod.html">nmod</a>]--> ADJ</tt> (356; 83%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> ADJ</tt> (291; 92%),
<tt>ADV --[<a href="../dep/parataxis.html">parataxis</a>]--> ADV</tt> (267; 94%).

