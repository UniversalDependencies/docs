

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This feature is universal.
It occurs with 2 different values: `Fut`, `Past`.

7910 tokens (5%) have a non-empty value of `Tense`.
2825 types (15%) occur at least once with a non-empty value of `Tense`.
1 lemmas (0) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: [he-pos/VERB]() (7804; 5% instances), [he-pos/AUX]() (106; 0% instances).

### `VERB`

7804 [he-pos/VERB]() tokens (49% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (7804; 100%), <tt><a href="Person.html">Person</a>=3</tt> (7429; 95%), <tt><a href="Negative.html">Negative</a>=EMPTY</tt> (6802; 87%), <tt><a href="VerbType.html">VerbType</a>=EMPTY</tt> (6802; 87%), <tt><a href="Number.html">Number</a>=Sing</tt> (5517; 71%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (1421; 18% of non-empty `Tense`): יהיה, תהיה, יהיו, תקבל, יכלו, יגיעו, יישאר, יישארו, יגיע, יקבלו
* `Past` (6383; 82% of non-empty `Tense`): היה, היו, היתה, אמר, עבר, הגיעו, עלה, הגיע, טען, אמרו
* `EMPTY` (8116): יש, הוא, היא, אין, אינו, להיות, אינה, אינם, אומר, מדובר

### `AUX`

106 [he-pos/AUX]() tokens (13% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (106; 100%), <tt><a href="VerbType.html">VerbType</a>=Mod</tt> (106; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (89; 84%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (89; 84%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (61; 58%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (39; 37% of non-empty `Tense`): יוכל, יוכלו, נוכל, תוכל
* `Past` (67; 63% of non-empty `Tense`): קשה, סביר, קל, יכול, צפוי, מעוניין, אל, מומלץ, עדיף, עתיד
* `EMPTY` (737): אפשר, יכול, יש, צריך, יכולה, ייתכן, ניתן, אמור, עלול, חייב

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (870; 80%),
<tt>VERB --[<a href="../dep/nmod.html">nmod</a>]--> VERB</tt> (135; 57%).

