---
layout: base
title:  'Statistics of PronType in UD_French-FTB'
udver: '2'
---

## Treebank Statistics: UD_French-FTB: Features: `PronType`

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Int`, `Prs`, `Rel`.

88978 tokens (16%) have a non-empty value of `PronType`.
85 types (5%) occur at least once with a non-empty value of `PronType`.
48 lemmas (3%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="fr_ftb-pos-DET.html">DET</a></tt> (79405; 14% instances), <tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> (9402; 2% instances), <tt><a href="fr_ftb-pos-ADV.html">ADV</a></tt> (171; 0% instances).

### `DET`

79405 <tt><a href="fr_ftb-pos-DET.html">DET</a></tt> tokens (93% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="fr_ftb-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (62616; 79%), <tt><a href="fr_ftb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (58062; 73%).

`DET` tokens may have the following values of `PronType`:

* `Art` (76208; 96% of non-empty `PronType`): <em>_, le, la, les, l', un, une, des, D', De</em>
* `Dem` (3157; 4% of non-empty `PronType`): <em>_, Cette, Ce, ces, Cet, CETTE</em>
* `Int` (40; 0% of non-empty `PronType`): <em>_, Quelle, D', Quelles, Quels</em>
* `EMPTY` (6089): <em>_, Son, Leur, Ses, la, Sa, Ce, Notre, Aucune, Nos</em>

### `PRON`

9402 <tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> tokens (41% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="fr_ftb-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (9391; 100%), <tt><a href="fr_ftb-feat-Person.html">Person</a></tt><tt>=3</tt> (8514; 91%), <tt><a href="fr_ftb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (6156; 65%), <tt><a href="fr_ftb-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (6066; 65%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (1; 0% of non-empty `PronType`): <em>_</em>
* `Dem` (1530; 16% of non-empty `PronType`): <em>_, Cela, Ce, Ceux, Celui, Celle, Celles, Ceci, Ça</em>
* `Int` (138; 1% of non-empty `PronType`): <em>_, qui, Que, Qu', Quoi, Lequel, Quelle, Quelles</em>
* `Prs` (517; 5% of non-empty `PronType`): <em>_, Lui, Elle, Moi, Personne</em>
* `Rel` (7216; 77% of non-empty `PronType`): <em>_, Certains, Tout, rien, Personne, Chacun, Ce, Tous, qui, un</em>
* `EMPTY` (13547): <em>_, il, c', On, Elle, ils, nous, ce, elles, Je</em>

### `ADV`

171 <tt><a href="fr_ftb-pos-ADV.html">ADV</a></tt> tokens (1% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="fr_ftb-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (171; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (171; 100% of non-empty `PronType`): <em>_, Comment, Pourquoi, Où, Quand, Combien, Involontairement, POURQUOI</em>
* `EMPTY` (23427): <em>_, ainsi, Quant, Enfin, Alors, plus, Cependant, Certes, Toutefois, Pourtant</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="fr_ftb-dep-conj.html">conj</a></tt>]--> PRON</tt> (66; 81%),
<tt>PRON --[<tt><a href="fr_ftb-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (66; 94%),
<tt>DET --[<tt><a href="fr_ftb-dep-det.html">det</a></tt>]--> DET</tt> (7; 70%),
<tt>DET --[<tt><a href="fr_ftb-dep-conj.html">conj</a></tt>]--> DET</tt> (6; 86%),
<tt>PRON --[<tt><a href="fr_ftb-dep-orphan.html">orphan</a></tt>]--> PRON</tt> (2; 67%),
<tt>PRON --[<tt><a href="fr_ftb-dep-advcl.html">advcl</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="fr_ftb-dep-cc.html">cc</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="fr_ftb-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%).

