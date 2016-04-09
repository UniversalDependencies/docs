

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This feature is universal.
It occurs with 2 different values: `Inf`, `Part`.

7748 tokens (5%) have a non-empty value of `VerbForm`.
2744 types (15%) occur at least once with a non-empty value of `VerbForm`.
1 lemmas (0) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 2 part-of-speech tags: [he-pos/VERB]() (7634; 5% instances), [he-pos/AUX]() (114; 0% instances).

### `VERB`

7634 [he-pos/VERB]() tokens (48% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (7634; 100%), <tt><a href="Negative.html">Negative</a>=EMPTY</tt> (6829; 89%), <tt><a href="VerbType.html">VerbType</a>=EMPTY</tt> (6829; 89%), <tt><a href="Person.html">Person</a>=1,2,3</tt> (4232; 55%).

`VERB` tokens may have the following values of `VerbForm`:

* `Inf` (2599; 34% of non-empty `VerbForm`): להיות, לעשות, לתת, לשלם, לפנות, למנוע, לבצע, לחיות, לקבל, למצוא
* `Part` (5035; 66% of non-empty `VerbForm`): הוא, היא, אינו, אינה, אינם, מדובר, אומר, הם, חולים, כולל
* `EMPTY` (8286): היה, יש, היו, אין, היתה, אמר, יהיה, עבר, תהיה, יהיו

### `AUX`

114 [he-pos/AUX]() tokens (14% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="VerbType.html">VerbType</a>=Mod</tt> (114; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (114; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (96; 84%), <tt><a href="Person.html">Person</a>=1,2,3</tt> (94; 82%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (65; 57%).

`AUX` tokens may have the following values of `VerbForm`:

* `Part` (114; 100% of non-empty `VerbForm`): יכול, יכולה, יכולים, מאפשרת, מאפשר, יכולות, מאפשרים, מאפשרות, מתאפשרת
* `EMPTY` (729): אפשר, יש, צריך, קשה, ייתכן, ניתן, אמור, עלול, חייב, יוכל

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (492; 72%),
<tt>VERB --[<a href="../dep/neg.html">neg</a>]--> VERB</tt> (148; 98%),
<tt>VERB --[<a href="../dep/dep.html">dep</a>]--> VERB</tt> (102; 73%),
<tt>VERB --[<a href="../dep/advmod.html">advmod</a>]--> VERB</tt> (23; 72%),
<tt>AUX --[<a href="../dep/iobj.html">iobj</a>]--> VERB</tt> (1; 100%),
<tt>AUX --[<a href="../dep/dep.html">dep</a>]--> AUX</tt> (1; 100%).

