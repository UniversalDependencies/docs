---
layout: base
title:  'Statistics of PronType in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 8 different values: `Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

1547 tokens (8%) have a non-empty value of `PronType`.
244 types (3%) occur at least once with a non-empty value of `PronType`.
68 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [DET](cs_pud-pos-DET.html) (813; 4% instances), [PRON](cs_pud-pos-PRON.html) (578; 3% instances), [ADV](cs_pud-pos-ADV.html) (156; 1% instances).

### `DET`

813 [DET](cs_pud-pos-DET.html) tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Gender[psor].html">Gender[psor]</a>=EMPTY</tt> (731; 90%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (727; 89%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (726; 89%), <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (674; 83%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (674; 83%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (587; 72%), <tt><a href="Number.html">Number</a>=Sing</tt> (503; 62%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (299; 37% of non-empty `PronType`): to toho tím tento tohoto toto této tomu tyto tato
* `Emp` (7; 1% of non-empty `PronType`): sama sám sami samo
* `Ind` (66; 8% of non-empty `PronType`): mnoho několik mnoha někteří některé některých několika některá jakoukoli jakoukoliv
* `Int,Rel` (185; 23% of non-empty `PronType`): který které která kteří kterou kterého kterém kterých jaké jakým
* `Neg` (12; 1% of non-empty `PronType`): žádná žádné žádný žádném žádným
* `Prs` (218; 27% of non-empty `PronType`): jeho jejich své její n svou svého svůj svých svým
* `Rel` (8; 1% of non-empty `PronType`): jejichž jehož jejíž
* `Tot` (18; 2% of non-empty `PronType`): všech všechny každý všechno všichni všeho všemu

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (26) occur only with one value of `PronType`.

### `PRON`

578 [PRON](cs_pud-pos-PRON.html) tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="PrepCase.html">PrepCase</a>=EMPTY</tt> (514; 89%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (472; 82%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (450; 78%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (425; 74%), <tt><a href="Variant.html">Variant</a>=Short</tt> (378; 65%), <tt><a href="Case.html">Case</a>=Acc</tt> (371; 64%), <tt><a href="Reflex.html">Reflex</a>=Yes</tt> (353; 61%).

`PRON` tokens may have the following values of `PronType`:

* `Ind` (16; 3% of non-empty `PronType`): něco někdo kdokoli kdokoliv někoho něčem něčemu něčím
* `Int,Rel` (24; 4% of non-empty `PronType`): co kdo koho čím
* `Neg` (11; 2% of non-empty `PronType`): nic nikdo nikoho nikým ničím
* `Prs` (481; 83% of non-empty `PronType`): se si ho nich ní jí mu mě ji něj
* `Rel` (40; 7% of non-empty `PronType`): což jenž nichž níž jež něhož čemuž čímž jehož nimž
* `Tot` (6; 1% of non-empty `PronType`): veškeré samé samého samý veškerou

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (18) occur only with one value of `PronType`.

### `ADV`

156 [ADV](cs_pud-pos-ADV.html) tokens (18% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (156; 100%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (151; 97%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (74; 47% of non-empty `PronType`): tak tam teď nyní tentokrát to tu zde dosud tady
* `Ind` (8; 5% of non-empty `PronType`): někdy kdykoli málokdy několikrát mnohokrát
* `Int,Rel` (66; 42% of non-empty `PronType`): jak kde kdy proč odkud kam
* `Neg` (3; 2% of non-empty `PronType`): nikdy
* `Tot` (5; 3% of non-empty `PronType`): vždy
* `EMPTY` (693): také více poté už pouze stejně ještě velmi zcela nakonec

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (27) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>ADV --[<a href="../dep/iobj.html">iobj</a>]--> DET</tt> (2; 100%),
<tt>DET --[<a href="../dep/nsubj.html">nsubj</a>]--> DET</tt> (2; 67%),
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (1; 100%).

