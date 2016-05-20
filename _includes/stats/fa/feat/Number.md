

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

80101 tokens (52%) have a non-empty value of `Number`.
11544 types (76%) occur at least once with a non-empty value of `Number`.
8 lemmas (62%) occur at least once with a non-empty value of `Number`.
The feature is used with 5 part-of-speech tags: [fa-pos/NOUN]() (57551; 38% instances), [fa-pos/VERB]() (16759; 11% instances), [fa-pos/PRON]() (5237; 3% instances), [fa-pos/AUX]() (316; 0% instances), [fa-pos/ADJ]() (238; 0% instances).

### `NOUN`

57551 [fa-pos/NOUN]() tokens (100% of all `NOUN` tokens) have a non-empty value of `Number`.

`NOUN` tokens may have the following values of `Number`:

* `Plur` (8662; 15% of non-empty `Number`): انتخابات، افراد، مواد، کسانی، کشورهای، برنامه‌های، اصلاحات، حدود، مطبوعات، آثار
* `Sing` (48889; 85% of non-empty `Number`): ایران، سال، مردم، کشور، روز، کار، قرار، دست، انقلاب، تهران
* `EMPTY` (4): پروردگارا، الهی، حافظا

### `VERB`

16759 [fa-pos/VERB]() tokens (99% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (14758; 88%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (14375; 86%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (14216; 85%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (8967; 54%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (3984; 24% of non-empty `Number`): کنند، می‌کنند، هستند، بودند، دارند، کردند، باشند، کرده‌اند، می‌شوند، کنیم
* `Sing` (12775; 76% of non-empty `Number`): است، بود، کرد، شد، گفت، شده، می‌شود، دارد، می‌کند، کرده
* `EMPTY` (173): ند، اند، م، یم، ی، ه، باشه، نکن، ای، ید

### `PRON`

5237 [fa-pos/PRON]() tokens (90% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (4442; 85%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (3604; 69%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (1300; 25% of non-empty `Number`): ما، آن‌ها، شان، شما، آنان، این‌ها، مان، ایشان، تان، اینان
* `Sing` (3937; 75% of non-empty `Number`): خود، آن، او، این، ش، من، وی، تو، م، اش
* `EMPTY` (555): همه، بعضی، هم، آنچه، برخی، یکدیگر، دیگران، همهٔ، هرکس، یک

### `AUX`

316 [fa-pos/AUX]() tokens (43% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (316; 100%), <tt><a href="Person.html">Person</a>=3</tt> (280; 89%), <tt><a href="Tense.html">Tense</a>=Fut</tt> (272; 86%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (70; 22% of non-empty `Number`): خواهند، داریم، دارند، خواهیم، نتوانند، نخواهند، خواهید، دارن، نخواهیم
* `Sing` (246; 78% of non-empty `Number`): خواهد، نخواهد، دارد، خواهم، دارم، نخواهم، خواهی، داره، داری، داشت
* `EMPTY` (426): باید، می‌توان، نباید، نمی‌توان، بایستی، می‌باید، می‌بایست، بتوان، نتوان، بباید

### `ADJ`

238 [fa-pos/ADJ]() tokens (2% of all `ADJ` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `ADJ` and `Number` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (238; 100%).

`ADJ` tokens may have the following values of `Number`:

* `Sing` (238; 100% of non-empty `Number`): آمده، ساخته، یادشده، بسته، توقیف‌شده، ناخواسته، انجام‌شده، عقب‌افتاده، کاسته، اعلام‌شده
* `EMPTY` (13418): اسلامی، دیگر، سیاسی، دوم، گذشته، فرهنگی، جدید، چند، بیشتر، ملی

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<a href="../dep/nmod:poss.html">nmod:poss</a>]--> NOUN</tt> (9862; 70%),
<tt>VERB --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (5122; 69%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (3764; 82%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (3640; 86%),
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (3523; 73%),
<tt>NOUN --[<a href="../dep/name.html">name</a>]--> NOUN</tt> (3108; 96%),
<tt>VERB --[<a href="../dep/compound:lvc.html">compound:lvc</a>]--> NOUN</tt> (3104; 69%),
<tt>VERB --[<a href="../dep/dobj.html">dobj</a>]--> NOUN</tt> (2078; 63%),
<tt>NOUN --[<a href="../dep/cop.html">cop</a>]--> VERB</tt> (1949; 87%),
<tt>NOUN --[<a href="../dep/nmod:poss.html">nmod:poss</a>]--> PRON</tt> (1512; 65%).

