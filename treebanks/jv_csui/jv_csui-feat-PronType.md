---
layout: base
title:  'Statistics of PronType in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Features: `PronType`

This feature is universal but the values `Emp` are language-specific.
It occurs with 8 different values: `Art`, `Dem`, `Emp`, `Ind`, `Int`, `Prs`, `Rel`, `Tot`.

1791 tokens (12%) have a non-empty value of `PronType`.
144 types (4%) occur at least once with a non-empty value of `PronType`.
88 lemmas (3%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: <tt><a href="jv_csui-pos-PRON.html">PRON</a></tt> (960; 7% instances), <tt><a href="jv_csui-pos-DET.html">DET</a></tt> (700; 5% instances), <tt><a href="jv_csui-pos-ADV.html">ADV</a></tt> (131; 1% instances).

### `PRON`

960 <tt><a href="jv_csui-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="jv_csui-feat-Polite.html">Polite</a></tt><tt>=Infm</tt> (847; 88%), <tt><a href="jv_csui-feat-Number.html">Number</a></tt><tt>=Sing</tt> (483; 50%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (79; 8% of non-empty `PronType`): <em>iki, kuwi, iku, ngene, ngendi, mangkene, mangkono, ngendi-endi, punika, Rene</em>
* `Emp` (3; 0% of non-empty `PronType`): <em>dewe, dhewe</em>
* `Ind` (1; 0% of non-empty `PronType`): <em>Saperangan</em>
* `Int` (13; 1% of non-empty `PronType`): <em>apa, Sapa, ngapa</em>
* `Prs` (493; 51% of non-empty `PronType`): <em>e, aku, ku, dak, dheweke, mu, ipun, piyambakipun, mbok, kowe</em>
* `Rel` (354; 37% of non-empty `PronType`): <em>sing, kang, ingkang, sapa, apa, apa-apa, napa, sinten, upa, napa-napa</em>
* `Tot` (17; 2% of non-empty `PronType`): <em>kabeh</em>

<table>
  <tr><th>Paradigm <i>apa</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>apa, ngapa</em></td><td><em>apa, apa-apa</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 96% lemmas (50) occur only with one value of `PronType`.

### `DET`

700 <tt><a href="jv_csui-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="jv_csui-feat-Polite.html">Polite</a></tt><tt>=Infm</tt> (596; 85%), <tt><a href="jv_csui-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (355; 51%).

`DET` tokens may have the following values of `PronType`:

* `Art` (364; 52% of non-empty `PronType`): <em>e, para, ipun, sawijining, sing, satunggaling, Kang, ingkang, saindenge</em>
* `Dem` (240; 34% of non-empty `PronType`): <em>iku, kuwi, iki, punika, semana, niku, kae, ki, menika, niki</em>
* `Emp` (18; 3% of non-empty `PronType`): <em>dhewe, dhewe-dhewe, meh, piyambak</em>
* `Ind` (45; 6% of non-empty `PronType`): <em>saperangan, akeh, sawetara, maneka, pirang-pirang, Akeh-akehe, Pira-pira, Rancake, pinten-pinten</em>
* `Tot` (33; 5% of non-empty `PronType`): <em>saben, kabeh, sakabehing, sedaya, saindhenge</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (37) occur only with one value of `PronType`.

### `ADV`

131 <tt><a href="jv_csui-pos-ADV.html">ADV</a></tt> tokens (16% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="jv_csui-feat-Polite.html">Polite</a></tt><tt>=Infm</tt> (108; 82%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (90; 69% of non-empty `PronType`): <em>mau, saiki, kono, sesuk, suk, wingi, biyen, kana, mengko, surup</em>
* `Int` (30; 23% of non-empty `PronType`): <em>kok, Kena, apa, ngapa, pa, sepira</em>
* `Rel` (3; 2% of non-empty `PronType`): <em>Kepriye, napa, ngapa</em>
* `Tot` (8; 6% of non-empty `PronType`): <em>tansah, emben</em>
* `EMPTY` (667): <em>uga, banjur, maneh, isih, mung, wae, luwih, pancen, dene, paling</em>

<table>
  <tr><th>Paradigm <i>apa</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>apa, ngapa</em></td><td><em>ngapa</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `ADV`. 96% lemmas (22) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>ADV --[<tt><a href="jv_csui-dep-fixed.html">fixed</a></tt>]--> PRON</tt> (4; 100%),
<tt>PRON --[<tt><a href="jv_csui-dep-conj.html">conj</a></tt>]--> PRON</tt> (4; 100%),
<tt>PRON --[<tt><a href="jv_csui-dep-nmod-poss.html">nmod:poss</a></tt>]--> PRON</tt> (1; 100%).

