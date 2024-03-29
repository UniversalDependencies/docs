---
layout: base
title:  'Statistics of PronType in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 6 different values: `Art`, `Dem`, `Emp`, `Ind`, `Int`, `Prs`.

23859 tokens (15%) have a non-empty value of `PronType`.
70 types (0%) occur at least once with a non-empty value of `PronType`.
34 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="he_htb-pos-DET.html">DET</a></tt> (16396; 10% instances), <tt><a href="he_htb-pos-PRON.html">PRON</a></tt> (7077; 4% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (386; 0% instances).

### `DET`

16396 <tt><a href="he_htb-pos-DET.html">DET</a></tt> tokens (95% of all `DET` tokens) have a non-empty value of `PronType`.

`DET` tokens may have the following values of `PronType`:

* `Art` (16396; 100% of non-empty `PronType`): ה, ה_
* `EMPTY` (885): כל, כמה, רוב, הרבה, שום, מספר, אף, שאר, מרבית, מחצית

### `PRON`

7077 <tt><a href="he_htb-pos-PRON.html">PRON</a></tt> tokens (92% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="he_htb-feat-Person.html">Person</a></tt><tt>=3</tt> (6409; 91%), <tt><a href="he_htb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4936; 70%), <tt><a href="he_htb-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (4492; 63%), <tt><a href="he_htb-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (4462; 63%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1192; 17% of non-empty `PronType`): זו, זה, כך, אלה, זאת, כן, אלו, הללו, זהו, זוהי
* `Emp` (42; 1% of non-empty `PronType`): עצמו, עצמה, עצמם, עצמי, עצמן
* `Ind` (30; 0% of non-empty `PronType`): כלשהו, כלשהי, איזושהי, כלשהם, כלשהן, מישהו
* `Int` (17; 0% of non-empty `PronType`): איזו, מהו, מיהו, אילו, מהם, מהן, מיהם
* `Prs` (5796; 82% of non-empty `PronType`): _הוא, _הם, _היא, הוא, הם, היא, _הן, _אני, _אנחנו, אני
* `EMPTY` (629): זה, הוא, היא, הם, הן, הכול, לה

### `ADV`

386 <tt><a href="he_htb-pos-ADV.html">ADV</a></tt> tokens (6% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="he_htb-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (386; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (386; 100% of non-empty `PronType`): מה, מי, האם, כיצד, מדוע, איך, למה, היכן, איזו, איפה
* `EMPTY` (6165): לא, גם, רק, יותר, עוד, כך, ביותר, אתמול, כבר, אפשר

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (13) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>ADV --[<tt><a href="he_htb-dep-conj.html">conj</a></tt>]--> ADV</tt> (5; 100%),
<tt>PRON --[<tt><a href="he_htb-dep-dep.html">dep</a></tt>]--> PRON</tt> (4; 57%),
<tt>PRON --[<tt><a href="he_htb-dep-conj.html">conj</a></tt>]--> PRON</tt> (3; 100%),
<tt>ADV --[<tt><a href="he_htb-dep-nsubj-cop.html">nsubj:cop</a></tt>]--> ADV</tt> (1; 100%),
<tt>DET --[<tt><a href="he_htb-dep-conj.html">conj</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="he_htb-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="he_htb-dep-nsubj-cop.html">nsubj:cop</a></tt>]--> PRON</tt> (1; 100%).

