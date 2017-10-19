---
layout: base
title:  'Statistics of PronType in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Features: `PronType`

This feature is universal.
It occurs with 7 different values: `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 2 combinations have been observed: `Dem|Ind`, `Int|Rel`.

1807 tokens (5%) have a non-empty value of `PronType`.
128 types (3%) occur at least once with a non-empty value of `PronType`.
20 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (1212; 3% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (595; 2% instances).

### `PRON`

1212 <tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="cs_cltt-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (743; 61%), <tt><a href="cs_cltt-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (737; 61%), <tt><a href="cs_cltt-feat-Case.html">Case</a></tt><tt>=Acc</tt> (607; 50%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (85; 7% of non-empty `PronType`): to tím toho tomu tom ty tímto t takové tato
* `Dem,Ind` (1; 0% of non-empty `PronType`): několika
* `Ind` (2; 0% of non-empty `PronType`): kterýkoli některý
* `Int,Rel` (452; 37% of non-empty `PronType`): které která který kterých kterým kterém kterému kterou kterého jakém
* `Neg` (4; 0% of non-empty `PronType`): žádném žádnou žádná
* `Prs` (546; 45% of non-empty `PronType`): se jej je jim jí ji nich ní sobě jimi
* `Rel` (73; 6% of non-empty `PronType`): nichž němž němuž jimiž jehož níž nějž jenž jež jímž
* `Tot` (49; 4% of non-empty `PronType`): všech všechny veškeré všechna sama veškerého veškerých veškerými samo samy

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (15) occur only with one value of `PronType`.

### `DET`

595 <tt><a href="cs_cltt-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="cs_cltt-feat-Gender-psor.html">Gender[psor]</a></tt><tt>=EMPTY</tt> (484; 81%), <tt><a href="cs_cltt-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (379; 64%), <tt><a href="cs_cltt-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (379; 64%), <tt><a href="cs_cltt-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (355; 60%), <tt><a href="cs_cltt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (306; 51%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (341; 57% of non-empty `PronType`): této tohoto těchto tyto tato tento tomto tuto toto tímto
* `Dem,Ind` (1; 0% of non-empty `PronType`): několika
* `Ind` (8; 1% of non-empty `PronType`): NĚKTERÝCH některá některé jakékoli jakýchkoliv
* `Int,Rel` (3; 1% of non-empty `PronType`): jakou jaké kterým
* `Neg` (2; 0% of non-empty `PronType`): žádná žádný
* `Prs` (219; 37% of non-empty `PronType`): jejich jeho její své jejího jejím svého svých svůj svoji
* `Rel` (21; 4% of non-empty `PronType`): jejichž jehož jejímž jejíž

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (13) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (4; 100%),
<tt>PRON --[<a href="../dep/cc.html">cc</a>]--> PRON</tt> (1; 100%).

