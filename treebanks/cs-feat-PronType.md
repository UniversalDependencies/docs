---
layout: base
title:  'Statistics of PronType in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 8 different values: `Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

112679 tokens (7%) have a non-empty value of `PronType`.
943 types (1%) occur at least once with a non-empty value of `PronType`.
184 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [DET](cs-pos-DET.html) (55313; 4% instances), [PRON](cs-pos-PRON.html) (44925; 3% instances), [ADV](cs-pos-ADV.html) (12441; 1% instances).

### `DET`

55313 [DET](cs-pos-DET.html) tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (49090; 89%), <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (45898; 83%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (45896; 83%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (40996; 74%), <tt><a href="Number.html">Number</a>=Sing</tt> (35074; 63%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (21395; 39% of non-empty `PronType`): to tím tom této tomu tento toho tohoto tato těchto
* `Emp` (700; 1% of non-empty `PronType`): sám sama sami samy samo samu samého
* `Ind` (3895; 7% of non-empty `PronType`): několik některé některých několika mnoho někteří mnoha nějaké nějaký málo
* `Int,Rel` (11671; 21% of non-empty `PronType`): které který která kteří kterou jaké kterým kolik kterých kterého
* `Neg` (831; 2% of non-empty `PronType`): žádné žádný žádná žádnou žádném žádným žádného žádnému žádných žádnými
* `Prs` (13642; 25% of non-empty `PronType`): jeho jejich své její svou svého svých svůj naše svým
* `Rel` (659; 1% of non-empty `PronType`): jejichž jehož jejíž jejímž jejíchž jejíhož jejímiž jejímuž kterážto
* `Tot` (2520; 5% of non-empty `PronType`): všechny všech vše všichni všechno všem všemi všeho všechna vším

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (69) occur only with one value of `PronType`.

### `PRON`

44925 [PRON](cs-pos-PRON.html) tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="PrepCase.html">PrepCase</a>=EMPTY</tt> (40000; 89%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (36994; 82%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (33795; 75%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (31317; 70%), <tt><a href="Case.html">Case</a>=Acc</tt> (27397; 61%), <tt><a href="Variant.html">Variant</a>=Short</tt> (27181; 61%), <tt><a href="Reflex.html">Reflex</a>=Yes</tt> (25786; 57%).

`PRON` tokens may have the following values of `PronType`:

* `Ind` (1109; 2% of non-empty `PronType`): něco někdo někoho cosi něčeho cokoli něčím někomu málokdo něčem
* `Int,Rel` (2652; 6% of non-empty `PronType`): co kdo čím čem koho komu čeho čemu kým kdož
* `Neg` (1015; 2% of non-empty `PronType`): nic nikdo nikoho nikomu ničím ničem ničemu nikým ničeho pranic
* `Prs` (36916; 82% of non-empty `PronType`): se si nás je nám nich mu ji ho jim
* `Rel` (2949; 7% of non-empty `PronType`): což nichž jež níž němž jehož jenž něhož něž jemuž
* `Tot` (284; 1% of non-empty `PronType`): veškeré samého veškerou veškerý samé samém veškerá veškerého veškerých samí

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (58) occur only with one value of `PronType`.

### `ADV`

12441 [ADV](cs-pos-ADV.html) tokens (16% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (12441; 100%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (12441; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (6196; 50% of non-empty `PronType`): tak nyní dosud zde tam tu tehdy teď proto tady
* `Ind` (757; 6% of non-empty `PronType`): někdy někde kdysi nějak několikrát jakkoli jaksi kdykoliv kdykoli někam
* `Int,Rel` (4535; 36% of non-empty `PronType`): jak kdy kde proč kam odkud kudy kolikrát Odkdy
* `Neg` (445; 4% of non-empty `PronType`): nikdy nijak nikde nikam odnikud
* `Tot` (508; 4% of non-empty `PronType`): vždy všude navždy odjakživa všudy odevšad
* `EMPTY` (67556): už také včera ještě již tedy dnes pak více pouze

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (58) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (113; 97%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (49; 54%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (37; 84%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (17; 57%),
<tt>DET --[<a href="../dep/cc.html">cc</a>]--> DET</tt> (11; 92%),
<tt>PRON --[<a href="../dep/orphan.html">orphan</a>]--> PRON</tt> (9; 64%),
<tt>PRON --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (8; 53%),
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> PRON</tt> (5; 100%),
<tt>DET --[<a href="../dep/appos.html">appos</a>]--> DET</tt> (4; 80%),
<tt>DET --[<a href="../dep/orphan.html">orphan</a>]--> DET</tt> (4; 80%).

