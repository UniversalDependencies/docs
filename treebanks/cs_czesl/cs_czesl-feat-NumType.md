---
layout: base
title:  'Statistics of NumType in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Features: `NumType`

This feature is universal.
It occurs with 4 different values: `Card`, `Frac`, `Mult`, `Ord`.

369 tokens (4%) have a non-empty value of `NumType`.
165 types (5%) occur at least once with a non-empty value of `NumType`.
118 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: <tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt> (291; 3% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt> (38; 0% instances), <tt><a href="cs_czesl-pos-DET.html">DET</a></tt> (24; 0% instances), <tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt> (16; 0% instances).

### `NUM`

291 <tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt> tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="cs_czesl-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (250; 86%), <tt><a href="cs_czesl-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (191; 66%), <tt><a href="cs_czesl-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (191; 66%), <tt><a href="cs_czesl-feat-NumForm.html">NumForm</a></tt><tt>=Digit</tt> (171; 59%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (290; 100% of non-empty `NumType`): <em>2, jeden, 1, 3, tři, 20, 6, XXX, sedm, 18</em>
* `Frac` (1; 0% of non-empty `NumType`): <em>Mongolštinová</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (102) occur only with one value of `NumType`.

### `ADJ`

38 <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt> tokens (4% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="cs_czesl-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (38; 100%), <tt><a href="cs_czesl-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (38; 100%), <tt><a href="cs_czesl-feat-Number.html">Number</a></tt><tt>=Sing</tt> (34; 89%), <tt><a href="cs_czesl-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (20; 53%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (38; 100% of non-empty `NumType`): <em>první, druhou, druhy, privním, prvních, prvním, třetí, devátá, deváté, druhe</em>
* `EMPTY` (900): <em>ráda, českou, české, rád, hlavní, nejhorší, nejdůležitější, český, pracovní, skvělé</em>

### `DET`

24 <tt><a href="cs_czesl-pos-DET.html">DET</a></tt> tokens (5% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="cs_czesl-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (24; 100%), <tt><a href="cs_czesl-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (24; 100%), <tt><a href="cs_czesl-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (24; 100%), <tt><a href="cs_czesl-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (24; 100%), <tt><a href="cs_czesl-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (24; 100%), <tt><a href="cs_czesl-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (24; 100%), <tt><a href="cs_czesl-feat-PronType.html">PronType</a></tt><tt>=Ind</tt> (23; 96%).

`DET` tokens may have the following values of `NumType`:

* `Card` (24; 100% of non-empty `NumType`): <em>mnoho, několik, hodně, moc, Nekolík, mnoha, několika, tolik, více</em>
* `EMPTY` (462): <em>to, moje, můj, ten, každý, svou, mé, naše, jeho, tento</em>

### `ADV`

16 <tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt> tokens (2% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="cs_czesl-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (16; 100%), <tt><a href="cs_czesl-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (16; 100%), <tt><a href="cs_czesl-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (11; 69%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (10; 63% of non-empty `NumType`): <em>mockrát, Jednou, dvakrát, krát, Jeden, mnohokrát, několik</em>
* `Ord` (6; 38% of non-empty `NumType`): <em>poprvé</em>
* `EMPTY` (692): <em>moc, už, proč, tak, taky, hodně, jak, pak, ještě, tady</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>ADV --[<tt><a href="cs_czesl-dep-obl.html">obl</a></tt>]--> ADV</tt> (2; 100%),
<tt>NUM --[<tt><a href="cs_czesl-dep-flat.html">flat</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="cs_czesl-dep-nmod.html">nmod</a></tt>]--> NUM</tt> (2; 100%),
<tt>NUM --[<tt><a href="cs_czesl-dep-dep.html">dep</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="cs_czesl-dep-nummod.html">nummod</a></tt>]--> NUM</tt> (1; 100%),
<tt>NUM --[<tt><a href="cs_czesl-dep-obl.html">obl</a></tt>]--> NUM</tt> (1; 100%).

