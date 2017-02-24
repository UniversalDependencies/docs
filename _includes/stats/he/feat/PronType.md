

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`.

22270 tokens (15%) have a non-empty value of `PronType`.
70 types (0%) occur at least once with a non-empty value of `PronType`.
32 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [he-pos/DET]() (15192; 10% instances), [he-pos/PRON]() (6706; 4% instances), [he-pos/ADV]() (372; 0% instances).

### `DET`

15192 [he-pos/DET]() tokens (95% of all `DET` tokens) have a non-empty value of `PronType`.

`DET` tokens may have the following values of `PronType`:

* `Art` (15192; 100% of non-empty `PronType`): ה, ה_
* `EMPTY` (839): כל, כמה, רוב, מספר, הרבה, שום, אף, שאר, מרבית, מחצית

### `PRON`

6706 [he-pos/PRON]() tokens (97% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (6045; 90%), <tt><a href="Number.html">Number</a>=Sing</tt> (4675; 70%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (4246; 63%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (4185; 62%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1107; 17% of non-empty `PronType`): זו, זה, אלה, כך, זאת, כן, אלו, הללו, זהו, זוהי
* `Ind` (27; 0% of non-empty `PronType`): כלשהו, כלשהי, איזושהי, כלשהם, מישהו, כלשהן
* `Int` (17; 0% of non-empty `PronType`): איזו, מהו, מיהו, אילו, מהם, מהן, מיהם
* `Prs` (5555; 83% of non-empty `PronType`): _הוא, _הם, _היא, הוא, הם, היא, _הן, _אני, _אנחנו, אני
* `EMPTY` (230): זה, הכול, לה

### `ADV`

372 [he-pos/ADV]() tokens (7% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (372; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (372; 100% of non-empty `PronType`): מה, מי, האם, מדוע, כיצד, איך, למה, היכן, איזו, איפה
* `EMPTY` (5342): לא, גם, יותר, רק, עוד, כך, אתמול, כבר, ביותר, שם

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (13) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (5; 100%),
<tt>PRON --[<a href="../dep/dep.html">dep</a>]--> PRON</tt> (5; 63%),
<tt>PRON --[<a href="../dep/advmod.html">advmod</a>]--> PRON</tt> (4; 100%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (3; 100%),
<tt>PRON --[<a href="../dep/nmod.html">nmod</a>]--> PRON</tt> (3; 75%),
<tt>PRON --[<a href="../dep/fixed.html">fixed</a>]--> PRON</tt> (1; 100%),
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (1; 100%),
<tt>ADV --[<a href="../dep/nsubj:cop.html">nsubj:cop</a>]--> ADV</tt> (1; 100%),
<tt>PRON --[<a href="../dep/nsubj:cop.html">nsubj:cop</a>]--> PRON</tt> (1; 100%).

