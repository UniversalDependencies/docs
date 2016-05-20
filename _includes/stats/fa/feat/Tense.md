

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

14558 tokens (10%) have a non-empty value of `Tense`.
1353 types (9%) occur at least once with a non-empty value of `Tense`.
1 lemmas (8%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: [fa-pos/VERB]() (14242; 9% instances), [fa-pos/AUX]() (316; 0% instances).

### `VERB`

14242 [fa-pos/VERB]() tokens (84% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (14212; 100%), <tt><a href="Person.html">Person</a>=3</tt> (12504; 88%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (11862; 83%), <tt><a href="Number.html">Number</a>=Sing</tt> (10620; 75%).

`VERB` tokens may have the following values of `Tense`:

* `Past` (5275; 37% of non-empty `Tense`): بود، کرد، شد، گفت، داشت، بودند، کردند، داد، افزود، گرفت
* `Pres` (8967; 63% of non-empty `Tense`): است، می‌شود، دارد، می‌کند، کنند، باشد، نیست، کند، می‌کنند، هستند
* `EMPTY` (2690): شده، کرده، داشته، بوده، داده، گرفته، آمده، ند، کرده‌اند، نوشته

### `AUX`

316 [fa-pos/AUX]() tokens (43% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (316; 100%), <tt><a href="Person.html">Person</a>=3</tt> (280; 89%), <tt><a href="Number.html">Number</a>=Sing</tt> (246; 78%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (272; 86% of non-empty `Tense`): خواهد، خواهند، نخواهد، خواهم، خواهیم، نخواهم، نخواهند، خواهی، خواهید، نخواهی
* `Past` (1; 0% of non-empty `Tense`): داشت
* `Pres` (43; 14% of non-empty `Tense`): دارد، داریم، دارند، دارم، نتوانند، داره، دارن، داری، می‌توان
* `EMPTY` (426): باید، می‌توان، نباید، نمی‌توان، بایستی، می‌باید، می‌بایست، بتوان، نتوان، بباید

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (1160; 76%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (171; 56%),
<tt>VERB --[<a href="../dep/nmod.html">nmod</a>]--> VERB</tt> (10; 67%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (5; 83%),
<tt>VERB --[<a href="../dep/punct.html">punct</a>]--> VERB</tt> (2; 67%),
<tt>VERB --[<a href="../dep/cc.html">cc</a>]--> VERB</tt> (1; 100%).

