---
layout: base
title:  'Statistics of PronType in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 8 different values: `Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

39857 tokens (8%) have a non-empty value of `PronType`.
698 types (1%) occur at least once with a non-empty value of `PronType`.
132 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [DET](cs_cac-pos-DET.html) (19445; 4% instances), [PRON](cs_cac-pos-PRON.html) (16032; 3% instances), [ADV](cs_cac-pos-ADV.html) (4380; 1% instances).

### `DET`

19445 [DET](cs_cac-pos-DET.html) tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (17377; 89%), <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (15514; 80%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (15514; 80%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (14074; 72%), <tt><a href="Number.html">Number</a>=Sing</tt> (11876; 61%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (8168; 42% of non-empty `PronType`): to tím této těchto tyto tom toho tento tohoto tomu
* `Emp` (283; 1% of non-empty `PronType`): sám sama sami samo samy samu
* `Ind` (1468; 8% of non-empty `PronType`): některé některých několik mnoho několika mnoha někteří nějaké některá nějakou
* `Int,Rel` (3953; 20% of non-empty `PronType`): které který která kteří kterou jaké kterých kterým kolik kterém
* `Neg` (133; 1% of non-empty `PronType`): žádné žádný žádná žádnou žádném žádných žádným žádného žádnému pražádnou
* `Prs` (5003; 26% of non-empty `PronType`): jejich jeho své její naší svou naše našeho svých našich
* `Rel` (349; 2% of non-empty `PronType`): jehož jejichž jejíž jejímž jejímuž jejíchž kterážto
* `Tot` (88; 0% of non-empty `PronType`): všechny všechno všichni vše všech všeho všem vší

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (49) occur only with one value of `PronType`.

### `PRON`

16032 [PRON](cs_cac-pos-PRON.html) tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="PrepCase.html">PrepCase</a>=EMPTY</tt> (14224; 89%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (13185; 82%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (12577; 78%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (10276; 64%), <tt><a href="Case.html">Case</a>=Acc</tt> (9778; 61%), <tt><a href="Variant.html">Variant</a>=Short</tt> (9195; 57%), <tt><a href="Reflex.html">Reflex</a>=Yes</tt> (9039; 56%).

`PRON` tokens may have the following values of `PronType`:

* `Ind` (233; 1% of non-empty `PronType`): něco někdo někomu něčeho něčemu kdekdo cosi ledacos málokdo někoho
* `Int,Rel` (641; 4% of non-empty `PronType`): co kdo čím čem čeho copak kdož koho čemu komu
* `Neg` (172; 1% of non-empty `PronType`): nic nikdo nikoho ničím nikomu ničeho ničemu nikým ničem
* `Prs` (12493; 78% of non-empty `PronType`): se si je nás nám nich ji jim mu sebe
* `Rel` (1170; 7% of non-empty `PronType`): jež nichž což níž němž jimiž něhož čímž jenž nimiž
* `Tot` (1323; 8% of non-empty `PronType`): všech všechny všechno všichni všem vše veškeré všechna všemi všeho

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (36) occur only with one value of `PronType`.

### `ADV`

4380 [ADV](cs_cac-pos-ADV.html) tokens (16% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (4380; 100%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (4380; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (2056; 47% of non-empty `PronType`): tak zde tam tu dosud nyní tehdy tady teď odtud
* `Ind` (300; 7% of non-empty `PronType`): někdy někde kdysi nějak několikrát někam jaksi jakkoli jakkoliv kdykoliv
* `Int,Rel` (1641; 37% of non-empty `PronType`): jak kde kdy proč kam odkud kolikrát kudy dokdy kdes
* `Neg` (112; 3% of non-empty `PronType`): nikdy nijak nikde nikam
* `Tot` (271; 6% of non-empty `PronType`): vždy všude odjakživa navždy odevždy
* `EMPTY` (23110): také již už ještě pak tedy velmi třeba především zejména

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (48) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (53; 96%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (10; 100%),
<tt>DET --[<a href="../dep/cc.html">cc</a>]--> DET</tt> (7; 88%),
<tt>DET --[<a href="../dep/nsubj.html">nsubj</a>]--> DET</tt> (6; 86%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (5; 71%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (4; 67%),
<tt>DET --[<a href="../dep/appos.html">appos</a>]--> DET</tt> (2; 100%),
<tt>ADV --[<a href="../dep/dep.html">dep</a>]--> DET</tt> (2; 67%),
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> PRON</tt> (1; 100%).

