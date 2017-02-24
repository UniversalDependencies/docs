

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This feature is universal but the values `Mid` are language-specific.
It occurs with 3 different values: `Act`, `Mid`, `Pass`.

10576 tokens (7%) have a non-empty value of `Voice`.
4173 types (25%) occur at least once with a non-empty value of `Voice`.
1455 lemmas (16%) occur at least once with a non-empty value of `Voice`.
The feature is used with 1 part-of-speech tags: [he-pos/VERB]() (10576; 7% instances).

### `VERB`

10576 [he-pos/VERB]() tokens (72% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (10576; 100%), <tt><a href="VerbType.html">VerbType</a>=EMPTY</tt> (10576; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (5788; 55%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (5547; 52%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (8283; 78% of non-empty `Voice`): אמר, אומר, חולים, לעשות, יודע, רבים, הגיעו, רוצים, הגיע, עולה
* `Mid` (1366; 13% of non-empty `Voice`): נראה, נמצא, נעשה, נאמר, נמסר, נפצעו, נבחר, ניתן, נודע, נקבע
* `Pass` (927; 9% of non-empty `Voice`): מדובר, הוחלט, מדורגת, הוטל, הועברו, נוצח, סוכם, פורסם, שוחררו, אושרו
* `EMPTY` (4109): היה, יש, היו, היא, הוא, אין, היתה, אינו, יהיה, להיות

`Voice` seems to be **lexical feature** of `VERB`. 100% lemmas (1452) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (725; 51%),
<tt>VERB --[<a href="../dep/xcomp.html">xcomp</a>]--> VERB</tt> (534; 60%),
<tt>VERB --[<a href="../dep/dep.html">dep</a>]--> VERB</tt> (91; 61%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> VERB</tt> (26; 52%),
<tt>VERB --[<a href="../dep/obj.html">obj</a>]--> VERB</tt> (21; 68%).

