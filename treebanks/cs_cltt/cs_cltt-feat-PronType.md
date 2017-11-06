---
layout: base
title:  'Statistics of PronType in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 8 different values: `Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

1898 tokens (5%) have a non-empty value of `PronType`.
146 types (3%) occur at least once with a non-empty value of `PronType`.
32 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1194; 3% instances), <tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (631; 2% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (73; 0% instances).

### `DET`

1194 <tt><a href="cs_cltt-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="cs_cltt-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (978; 82%), <tt><a href="cs_cltt-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (978; 82%), <tt><a href="cs_cltt-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (954; 80%), <tt><a href="cs_cltt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (639; 54%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (426; 36% of non-empty `PronType`): <em>této, tohoto, to, těchto, tyto, tato, tento, tomto, tímto, tuto</em>
* `Emp` (4; 0% of non-empty `PronType`): <em>sama, samo, samy</em>
* `Ind` (12; 1% of non-empty `PronType`): <em>NĚKTERÝCH, několika, některá, některé, jakékoli, jakýchkoliv, kterýkoli, některý</em>
* `Int,Rel` (455; 38% of non-empty `PronType`): <em>které, která, který, kterým, kterých, kterém, kterému, kterou, kterého, jakém</em>
* `Neg` (6; 1% of non-empty `PronType`): <em>žádná, žádném, žádnou, žádný</em>
* `Prs` (219; 18% of non-empty `PronType`): <em>jejich, jeho, její, své, jejího, jejím, svého, svých, svůj, svoji</em>
* `Rel` (21; 2% of non-empty `PronType`): <em>jejichž, jehož, jejímž, jejíž</em>
* `Tot` (51; 4% of non-empty `PronType`): <em>všech, všechny, každou, každé, všechna, každého, každý, Každá, všemi</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (18) occur only with one value of `PronType`.

### `PRON`

631 <tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="cs_cltt-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (560; 89%), <tt><a href="cs_cltt-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (541; 86%), <tt><a href="cs_cltt-feat-PrepCase.html">PrepCase</a></tt><tt>=EMPTY</tt> (538; 85%), <tt><a href="cs_cltt-feat-Case.html">Case</a></tt><tt>=Acc</tt> (511; 81%), <tt><a href="cs_cltt-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (475; 75%), <tt><a href="cs_cltt-feat-Reflex.html">Reflex</a></tt><tt>=Yes</tt> (475; 75%), <tt><a href="cs_cltt-feat-Variant.html">Variant</a></tt><tt>=Short</tt> (469; 74%).

`PRON` tokens may have the following values of `PronType`:

* `Prs` (546; 87% of non-empty `PronType`): <em>se, jej, je, jim, jí, ji, nich, ní, sobě, jimi</em>
* `Rel` (73; 12% of non-empty `PronType`): <em>nichž, němž, němuž, jimiž, jehož, níž, nějž, jenž, jež, jímž</em>
* `Tot` (12; 2% of non-empty `PronType`): <em>veškeré, veškerého, veškerých, veškerými</em>

### `ADV`

73 <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> tokens (9% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="cs_cltt-feat-Degree.html">Degree</a></tt><tt>=EMPTY</tt> (67; 92%), <tt><a href="cs_cltt-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (67; 92%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (32; 44% of non-empty `PronType`): <em>tak, dosud, tehdy, Tam, zde</em>
* `Ind` (1; 1% of non-empty `PronType`): <em>kdykoli</em>
* `Int,Rel` (34; 47% of non-empty `PronType`): <em>kdy, jak, kde, kam</em>
* `Tot` (6; 8% of non-empty `PronType`): <em>vždy</em>
* `EMPTY` (714): <em>dále, zejména, popřípadě, jinak, pouze, též, například, více, obdobně, celkem</em>

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (11) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<tt><a href="cs_cltt-dep-conj.html">conj</a></tt>]--> DET</tt> (4; 100%),
<tt>ADV --[<tt><a href="cs_cltt-dep-cc.html">cc</a></tt>]--> DET</tt> (2; 67%),
<tt>DET --[<tt><a href="cs_cltt-dep-cc.html">cc</a></tt>]--> DET</tt> (1; 100%).

