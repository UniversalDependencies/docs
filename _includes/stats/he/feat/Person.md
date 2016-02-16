

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.
Some words have combined values of the feature; 1 combinations have been observed: `1|2|3`.

20693 tokens (13%) have a non-empty value of `Person`.
4776 types (26%) occur at least once with a non-empty value of `Person`.
1 lemmas (0) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: [he-pos/VERB]() (12814; 8% instances), [he-pos/PRON]() (7362; 5% instances), [he-pos/AUX]() (517; 0% instances).

### `VERB`

12814 [he-pos/VERB]() tokens (80% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="Negative.html">Negative</a>=EMPTY</tt> (11092; 87%), <tt><a href="VerbType.html">VerbType</a>=EMPTY</tt> (11092; 87%), <tt><a href="Number.html">Number</a>=Sing</tt> (8804; 69%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (7856; 61%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (7379; 58%).

`VERB` tokens may have the following values of `Person`:

* `1` (347; 3% of non-empty `Person`): הייתי, היינו, אינני, חשבתי, קיבלנו, שמעתי, איננו, הגעתי, הרגשתי, קראתי
* `1,2,3` (4232; 33% of non-empty `Person`): אומר, מדובר, חולים, כולל, נראה, יודע, רבים, רוצה, עולה, רוצים
* `2` (104; 1% of non-empty `Person`): לך, ישנו, תוכיח, ברור, הייה, אמור, היית, חיו, חסר, חשוד
* `3` (8131; 63% of non-empty `Person`): היה, היו, הוא, היא, היתה, אמר, אינו, יהיה, אינה, אינם
* `EMPTY` (3106): יש, אין, להיות, לעשות, לתת, לשלם, למנוע, לבצע, לקבל, למצוא

### `PRON`

7362 [he-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (5890; 80%), <tt><a href="Number.html">Number</a>=Sing</tt> (5196; 71%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (4731; 64%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (4674; 63%).

`PRON` tokens may have the following values of `Person`:

* `1` (538; 7% of non-empty `Person`): אני_, אנחנו_, אני, אנו, אנחנו, עצמי, עצמנו, הננו
* `2` (120; 2% of non-empty `Person`): אתה_, אתה, אתם_, אתם, את_, עצמך, את, לה
* `3` (6704; 91% of non-empty `Person`): הוא_, הם_, היא_, הוא, זה, זו, הם, כך, אלה, היא
* `EMPTY` (19): איזו, מהו, מיהו, מישהו, אילו, מהם, מהן, מיהם

### `AUX`

517 [he-pos/AUX]() tokens (61% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="VerbType.html">VerbType</a>=Mod</tt> (517; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (472; 91%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (423; 82%), <tt><a href="Number.html">Number</a>=Sing</tt> (400; 77%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (378; 73%).

`AUX` tokens may have the following values of `Person`:

* `1` (5; 1% of non-empty `Person`): נוכל
* `1,2,3` (472; 91% of non-empty `Person`): יכול, צריך, יכולה, ניתן, אמור, עלול, חייב, מוכן, חשוב, עשוי
* `2` (22; 4% of non-empty `Person`): יוכל, תוכל
* `3` (18; 3% of non-empty `Person`): יוכלו, יכול
* `EMPTY` (326): אפשר, יש, קשה, ייתכן, אין, מאפשרת, אסור, כדאי, סביר, קל

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (1168; 81%),
<tt>VERB --[<a href="../dep/nmod.html">nmod</a>]--> VERB</tt> (181; 61%),
<tt>PRON --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> VERB</tt> (55; 63%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> PRON</tt> (12; 57%),
<tt>PRON --[<a href="../dep/dep.html">dep</a>]--> PRON</tt> (9; 100%),
<tt>PRON --[<a href="../dep/cop.html">cop</a>]--> VERB</tt> (8; 100%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (8; 62%),
<tt>PRON --[<a href="../dep/nmod.html">nmod</a>]--> PRON</tt> (7; 88%),
<tt>PRON --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (6; 60%),
<tt>PRON --[<a href="../dep/aux.html">aux</a>]--> VERB</tt> (5; 83%).

