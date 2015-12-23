

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

20924 tokens (14%) have a non-empty value of `Person`.
1763 types (12%) occur at least once with a non-empty value of `Person`.
1 lemmas (0) occur at least once with a non-empty value of `Person`.
The feature is used with 4 part-of-speech tags: [fa-pos/VERB]() (16729; 11% instances), [fa-pos/PRON]() (3611; 2% instances), [fa-pos/AUX]() (346; 0% instances), [fa-pos/ADJ]() (238; 0% instances).

### `VERB`

16729 [fa-pos/VERB]() tokens (99% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (14375; 86%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (14216; 85%), <tt><a href="Number.html">Number</a>=Sing</tt> (12757; 76%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (8937; 53%).

`VERB` tokens may have the following values of `Person`:

* `1` (1367; 8% of non-empty `Person`): می‌کنم، کنیم، کردیم، کنم، کردم، بودم، می‌کنیم، دارم، باشیم، داریم
* `2` (628; 4% of non-empty `Person`): کنید، کن، گو، بگو، دارید، کنی، باشید، نیستی، هستی، کردید
* `3` (14734; 88% of non-empty `Person`): است، بود، کرد، شد، گفت، شده، می‌شود، دارد، می‌کند، کرده
* `EMPTY` (173): ند، اند، م، یم، ی، ه، باشه، نکن، ای، ید

### `PRON`

3611 [fa-pos/PRON]() tokens (63% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (3604; 100%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (2816; 78%), <tt><a href="Number.html">Number</a>=Sing</tt> (2811; 78%).

`PRON` tokens may have the following values of `Person`:

* `1` (949; 26% of non-empty `Person`): ما، من، م، مان، یم، ام، منم، خودم، خودمو، منِ
* `2` (387; 11% of non-empty `Person`): تو، شما، ت، تان، ات، جنابعالی، شماها، خودت، خودتو
* `3` (2275; 63% of non-empty `Person`): خود، او، ش، وی، شان، اش، ایشان، خویش، حضرتعالی، یش
* `EMPTY` (2161): آن، این، آن‌ها، همه، آنان، این‌ها، بعضی، هم، آنچه، برخی

### `AUX`

346 [fa-pos/AUX]() tokens (45% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (346; 100%), <tt><a href="Tense.html">Tense</a>=Fut</tt> (272; 79%), <tt><a href="Number.html">Number</a>=Sing</tt> (264; 76%).

`AUX` tokens may have the following values of `Person`:

* `1` (36; 10% of non-empty `Person`): داریم، خواهم، دارم، خواهیم، نخواهم، بتوانم، بتوانیم، نخواهیم
* `2` (6; 2% of non-empty `Person`): خواهی، خواهید، داری، نخواهی
* `3` (304; 88% of non-empty `Person`): خواهد، خواهند، نخواهد، بتواند، دارد، بتوانند، دارند، نتوانند، نخواهند، داره
* `EMPTY` (426): باید، می‌توان، نباید، نمی‌توان، بایستی، می‌باید، می‌بایست، بتوان، نتوان، بباید

### `ADJ`

238 [fa-pos/ADJ]() tokens (2% of all `ADJ` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `ADJ` and `Person` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (238; 100%).

`ADJ` tokens may have the following values of `Person`:

* `3` (238; 100% of non-empty `Person`): آمده، ساخته، یادشده، بسته، توقیف‌شده، ناخواسته، انجام‌شده، عقب‌افتاده، کاسته، اعلام‌شده
* `EMPTY` (13351): اسلامی، دیگر، سیاسی، دوم، گذشته، فرهنگی، جدید، چند، بیشتر، ملی

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (1534; 93%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (1453; 75%),
<tt>VERB --[<a href="../dep/aux.html">aux</a>]--> VERB</tt> (1407; 95%),
<tt>VERB --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (665; 73%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (243; 78%),
<tt>VERB --[<a href="../dep/auxpass.html">auxpass</a>]--> VERB</tt> (198; 100%),
<tt>PRON --[<a href="../dep/nmod:poss.html">nmod:poss</a>]--> PRON</tt> (88; 55%),
<tt>VERB --[<a href="../dep/cop.html">cop</a>]--> VERB</tt> (28; 85%),
<tt>ADJ --[<a href="../dep/auxpass.html">auxpass</a>]--> VERB</tt> (18; 95%),
<tt>VERB --[<a href="../dep/nmod.html">nmod</a>]--> VERB</tt> (14; 93%).

