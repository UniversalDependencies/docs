---
layout: base
title:  'Statistics of PronType in UD_Afrikaans-AfriBooms'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans-AfriBooms: Features: `PronType`

This feature is universal.
It occurs with 7 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`, `Rcp`, `Rel`.

8947 tokens (18%) have a non-empty value of `PronType`.
167 types (3%) occur at least once with a non-empty value of `PronType`.
122 lemmas (2%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="af_afribooms-pos-DET.html">DET</a></tt> (5341; 11% instances), <tt><a href="af_afribooms-pos-PRON.html">PRON</a></tt> (3606; 7% instances).

### `DET`

5341 <tt><a href="af_afribooms-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="af_afribooms-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (3570; 67%).

`DET` tokens may have the following values of `PronType`:

* `Art` (4541; 85% of non-empty `PronType`): <em>die, 'n, de, dien</em>
* `Dem` (451; 8% of non-empty `PronType`): <em>hierdie, daardie, dié, sodanige, sulke, daar, sodanig</em>
* `Ind` (349; 7% of non-empty `PronType`): <em>alle, meer, al, baie, paar, sommige, laaste, soveel, talle, min</em>
* `EMPTY` (1): <em>Die</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (30) occur only with one value of `PronType`.

### `PRON`

3606 <tt><a href="af_afribooms-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="af_afribooms-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (2969; 82%), <tt><a href="af_afribooms-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (2136; 59%).

`PRON` tokens may have the following values of `PronType`:

* `Ind` (323; 9% of non-empty `PronType`): <em>enige, daar, almal, elke, diegene, alles, ander, iemand, elk, enigiemand</em>
* `Int` (19; 1% of non-empty `PronType`): <em>hoe, wat, Wie, Watter, Hoekom, Waar, Waarom, waaroor</em>
* `Prs` (2144; 59% of non-empty `PronType`): <em>ons, dit, jy, hulle, jou, ek, sy, hul, hy, my</em>
* `Rcp` (6; 0% of non-empty `PronType`): <em>mekaar</em>
* `Rel` (1114; 31% of non-empty `PronType`): <em>wat, daarvan, waar, wanneer, watter, daartoe, wie, daarop, hoe, waarin</em>
* `EMPTY` (1): <em>hoeveel</em>

<table>
  <tr><th>Paradigm <i>wat</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>wat</em></td><td><em>wat</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 93% lemmas (88) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="af_afribooms-dep-conj.html">conj</a></tt>]--> PRON</tt> (20; 87%),
<tt>DET --[<tt><a href="af_afribooms-dep-amod.html">amod</a></tt>]--> DET</tt> (3; 100%),
<tt>DET --[<tt><a href="af_afribooms-dep-amod.html">amod</a></tt>]--> PRON</tt> (2; 67%).

