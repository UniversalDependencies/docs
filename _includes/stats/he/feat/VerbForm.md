

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This feature is universal.
It occurs with 2 different values: `Inf`, `Part`.

7214 tokens (5%) have a non-empty value of `VerbForm`.
2606 types (15%) occur at least once with a non-empty value of `VerbForm`.
1375 lemmas (15%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: [he-pos/VERB]() (7109; 5% instances), [he-pos/AUX]() (105; 0% instances).

### `VERB`

7109 [he-pos/VERB]() tokens (48% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (7109; 100%), <tt><a href="VerbType.html">VerbType</a>=EMPTY</tt> (6347; 89%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (6347; 89%), <tt><a href="Voice.html">Voice</a>=Act</tt> (4669; 66%), <tt><a href="Person.html">Person</a>=1,2,3</tt> (3938; 55%).

`VERB` tokens may have the following values of `VerbForm`:

* `Inf` (2417; 34% of non-empty `VerbForm`): להיות, לעשות, למנוע, לתת, לפנות, לשלם, לבצע, לחיות, לקבל, למצוא
* `Part` (4692; 66% of non-empty `VerbForm`): היא, הוא, אינו, אינה, אינם, אומר, מדובר, חולים, הם, נראה
* `EMPTY` (7576): היה, יש, היו, אין, אמר, היתה, יהיה, תהיה, עבר, יהיו

<table>
  <tr><th>Paradigm <i>אמר</i></th><th><tt>Inf</tt></th><th><tt>Part</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1,2,3</tt></td><td></td><td>אומר</td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1,2,3</tt></td><td></td><td>אומרים</td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="HebSource.html">HebSource</a>=ConvUncertainHead|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1,2,3</tt></td><td></td><td>אומרת</td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1,2,3</tt></td><td></td><td>אומרת</td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=1,2,3</tt></td><td></td><td>אומרות</td></tr>
  <tr><td><tt></tt></td><td>לומר</td><td></td></tr>
</table>

### `AUX`

105 [he-pos/AUX]() tokens (13% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (105; 100%), <tt><a href="VerbType.html">VerbType</a>=Mod</tt> (105; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (87; 83%), <tt><a href="Person.html">Person</a>=1,2,3</tt> (87; 83%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (62; 59%).

`AUX` tokens may have the following values of `VerbForm`:

* `Part` (105; 100% of non-empty `VerbForm`): יכול, יכולה, יכולים, מאפשרת, מאפשר, יכולות, מאפשרים, מאפשרות, מתאפשרת
* `EMPTY` (679): אפשר, צריך, יש, קשה, ייתכן, ניתן, עלול, אמור, יוכל, חייב

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (471; 73%),
<tt>VERB --[<a href="../dep/advmod.html">advmod</a>]--> VERB</tt> (161; 94%),
<tt>VERB --[<a href="../dep/dep.html">dep</a>]--> VERB</tt> (95; 74%),
<tt>AUX --[<a href="../dep/dep.html">dep</a>]--> AUX</tt> (1; 100%),
<tt>AUX --[<a href="../dep/iobj.html">iobj</a>]--> VERB</tt> (1; 100%).

