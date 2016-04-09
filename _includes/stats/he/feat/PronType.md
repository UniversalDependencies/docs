

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`.

24056 tokens (15%) have a non-empty value of `PronType`.
70 types (0%) occur at least once with a non-empty value of `PronType`.
1 lemmas (0) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [he-pos/DET]() (16531; 10% instances), [he-pos/PRON]() (7135; 4% instances), [he-pos/ADV]() (390; 0% instances).

### `DET`

16531 [he-pos/DET]() tokens (95% of all `DET` tokens) have a non-empty value of `PronType`.

`DET` tokens may have the following values of `PronType`:

* `Art` (16531; 100% of non-empty `PronType`): ה, ה_
* `EMPTY` (893): כל, כמה, הרבה, רוב, שום, מספר, אף, שאר, מרבית, מחצית

### `PRON`

7135 [he-pos/PRON]() tokens (97% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (6459; 91%), <tt><a href="Number.html">Number</a>=Sing</tt> (4965; 70%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (4496; 63%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (4447; 62%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1198; 17% of non-empty `PronType`): זו, זה, כך, אלה, זאת, כן, אלו, הללו, זהו, זוהי
* `Ind` (30; 0% of non-empty `PronType`): כלשהו, כלשהי, איזושהי, כלשהם, כלשהן, מישהו
* `Int` (17; 0% of non-empty `PronType`): איזו, מהו, מיהו, אילו, מהם, מהן, מיהם
* `Prs` (5890; 83% of non-empty `PronType`): הוא_, הם_, היא_, הוא, הם, היא, הן_, אני_, אנחנו_, אני
* `EMPTY` (246): זה, הכול, לה

### `ADV`

390 [he-pos/ADV]() tokens (6% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="Negative.html">Negative</a>=EMPTY</tt> (390; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (390; 100% of non-empty `PronType`): מה, מי, האם, מדוע, כיצד, איך, למה, היכן, איזו, איפה
* `EMPTY` (5718): לא, גם, רק, יותר, עוד, כך, ביותר, אתמול, כבר, שם

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (5; 100%),
<tt>PRON --[<a href="../dep/dep.html">dep</a>]--> PRON</tt> (5; 63%),
<tt>PRON --[<a href="../dep/advmod.html">advmod</a>]--> PRON</tt> (4; 100%),
<tt>PRON --[<a href="../dep/nmod.html">nmod</a>]--> PRON</tt> (3; 75%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (3; 100%),
<tt>PRON --[<a href="../dep/nsubj:cop.html">nsubj:cop</a>]--> PRON</tt> (1; 100%),
<tt>PRON --[<a href="../dep/mwe.html">mwe</a>]--> PRON</tt> (1; 100%),
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (1; 100%),
<tt>ADV --[<a href="../dep/nsubj:cop.html">nsubj:cop</a>]--> ADV</tt> (1; 100%).

