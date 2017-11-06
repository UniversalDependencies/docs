---
layout: base
title:  'Statistics of PronType in UD_Hebrew'
udver: '2'
---

## Treebank Statistics: UD_Hebrew: Features: `PronType`

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`.

24056 tokens (15%) have a non-empty value of `PronType`.
70 types (0%) occur at least once with a non-empty value of `PronType`.
33 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="he-pos-DET.html">DET</a></tt> (16531; 10% instances), <tt><a href="he-pos-PRON.html">PRON</a></tt> (7135; 4% instances), <tt><a href="he-pos-ADV.html">ADV</a></tt> (390; 0% instances).

### `DET`

16531 <tt><a href="he-pos-DET.html">DET</a></tt> tokens (95% of all `DET` tokens) have a non-empty value of `PronType`.

`DET` tokens may have the following values of `PronType`:

* `Art` (16531; 100% of non-empty `PronType`): ה, ה_
* `EMPTY` (893): כל, כמה, הרבה, רוב, שום, מספר, אף, שאר, מרבית, מחצית

### `PRON`

7135 <tt><a href="he-pos-PRON.html">PRON</a></tt> tokens (97% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="he-feat-Person.html">Person</a></tt><tt>=3</tt> (6459; 91%), <tt><a href="he-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4965; 70%), <tt><a href="he-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (4496; 63%), <tt><a href="he-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (4447; 62%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1198; 17% of non-empty `PronType`): זו, זה, כך, אלה, זאת, כן, אלו, הללו, זהו, זוהי
* `Ind` (30; 0% of non-empty `PronType`): כלשהו, כלשהי, איזושהי, כלשהם, כלשהן, מישהו
* `Int` (17; 0% of non-empty `PronType`): איזו, מהו, מיהו, אילו, מהם, מהן, מיהם
* `Prs` (5890; 83% of non-empty `PronType`): _הוא, _הם, _היא, הוא, הם, היא, _הן, _אני, _אנחנו, אני
* `EMPTY` (246): זה, הכול, לה

### `ADV`

390 <tt><a href="he-pos-ADV.html">ADV</a></tt> tokens (6% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="he-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (390; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (390; 100% of non-empty `PronType`): מה, מי, האם, מדוע, כיצד, איך, למה, היכן, איזו, איפה
* `EMPTY` (5718): לא, גם, רק, יותר, עוד, כך, ביותר, אתמול, כבר, שם

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (13) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>ADV --[<tt><a href="he-dep-conj.html">conj</a></tt>]--> ADV</tt> (5; 100%),
<tt>PRON --[<tt><a href="he-dep-dep.html">dep</a></tt>]--> PRON</tt> (5; 63%),
<tt>PRON --[<tt><a href="he-dep-advmod.html">advmod</a></tt>]--> PRON</tt> (4; 100%),
<tt>PRON --[<tt><a href="he-dep-conj.html">conj</a></tt>]--> PRON</tt> (3; 100%),
<tt>PRON --[<tt><a href="he-dep-nmod.html">nmod</a></tt>]--> PRON</tt> (3; 75%),
<tt>ADV --[<tt><a href="he-dep-nsubj-cop.html">nsubj:cop</a></tt>]--> ADV</tt> (1; 100%),
<tt>DET --[<tt><a href="he-dep-conj.html">conj</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="he-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="he-dep-nsubj-cop.html">nsubj:cop</a></tt>]--> PRON</tt> (1; 100%).

