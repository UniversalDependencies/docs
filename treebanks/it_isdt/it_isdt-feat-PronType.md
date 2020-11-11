---
layout: base
title:  'Statistics of PronType in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Features: `PronType`

This feature is universal but the values `Exc` are language-specific.
It occurs with 9 different values: `Art`, `Dem`, `Exc`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.

61898 tokens (21%) have a non-empty value of `PronType`.
347 types (1%) occur at least once with a non-empty value of `PronType`.
164 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 5 part-of-speech tags: <tt><a href="it_isdt-pos-DET.html">DET</a></tt> (48628; 16% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (11295; 4% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (1971; 1% instances), <tt><a href="it_isdt-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).

### `DET`

48628 <tt><a href="it_isdt-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="it_isdt-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (38089; 78%), <tt><a href="it_isdt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (35320; 73%), <tt><a href="it_isdt-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (24384; 50%).

`DET` tokens may have the following values of `PronType`:

* `Art` (42712; 88% of non-empty `PronType`): <em>il, la, i, l', le, un, gli, una, lo, un'</em>
* `Dem` (1091; 2% of non-empty `PronType`): <em>questo, questa, questi, tale, queste, quest', quel, tali, quest’, quella</em>
* `Exc` (5; 0% of non-empty `PronType`): <em>che</em>
* `Ind` (1590; 3% of non-empty `PronType`): <em>ogni, alcuni, qualche, molti, più, qualsiasi, molte, diversi, alcune, alcuna</em>
* `Int` (949; 2% of non-empty `PronType`): <em>quale, che, quanti, quante, quali, quanta, quanto, Qual, quel</em>
* `Prs` (1828; 4% of non-empty `PronType`): <em>sua, suo, loro, suoi, sue, proprio, nostra, mio, nostro, nostri</em>
* `Rel` (42; 0% of non-empty `PronType`): <em>cui, quali</em>
* `Tot` (411; 1% of non-empty `PronType`): <em>tutti, tutte, tutto, tutta, entrambi, entrambe, ambedue, tutt', quanti</em>
* `EMPTY` (13): <em>l’, il, la, che, moltissime, tanti, tutt’</em>

<table>
  <tr><th>Paradigm <i>quale</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt><tt><a href="it_isdt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>quale</em></td><td></td></tr>
  <tr><td><tt><tt><a href="it_isdt-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>quali</em></td><td><em>quali</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 93% lemmas (82) occur only with one value of `PronType`.

### `PRON`

11295 <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="it_isdt-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (8258; 73%), <tt><a href="it_isdt-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (6643; 59%), <tt><a href="it_isdt-feat-Clitic.html">Clitic</a></tt><tt>=EMPTY</tt> (6610; 59%), <tt><a href="it_isdt-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (6442; 57%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (2; 0% of non-empty `PronType`): <em>le</em>
* `Dem` (821; 7% of non-empty `PronType`): <em>quello, questo, ciò, quella, quelli, quelle, questa, questi, coloro, queste</em>
* `Ind` (1016; 9% of non-empty `PronType`): <em>uno, tutto, tutti, altri, una, altro, nessuno, più, molti, nulla</em>
* `Int` (895; 8% of non-empty `PronType`): <em>chi, qual, cosa, quanto, cos', che, quale, quanti, Quali, Quante</em>
* `Prs` (5431; 48% of non-empty `PronType`): <em>si, ci, lo, ne, c', mi, la, li, gli, lui</em>
* `Rel` (3130; 28% of non-empty `PronType`): <em>che, cui, chi, quale, quanto, quali, dove, chiunque, quando, quanti</em>
* `EMPTY` (1): <em>mezzo</em>

<table>
  <tr><th>Paradigm <i>quanto</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>quanto</em></td><td></td></tr>
  <tr><td><tt><tt><a href="it_isdt-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="it_isdt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>quanto</em></td><td><em>quanto</em></td><td><em>quanto</em></td></tr>
  <tr><td><tt><tt><a href="it_isdt-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="it_isdt-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>quanti</em></td><td><em>quanti</em></td><td></td></tr>
  <tr><td><tt><tt><a href="it_isdt-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="it_isdt-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>Quante</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="it_isdt-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>quanto</em></td><td><em>quanto</em></td><td></td></tr>
</table>

### `ADV`

1971 <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> tokens (17% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Neg` (1971; 100% of non-empty `PronType`): <em>non, neppure, nemmeno, no, neanche, mica, nè, perniente</em>
* `EMPTY` (9440): <em>più, anche, dove, come, quando, solo, prima, sempre, molto, poi</em>

### `SCONJ`

3 <tt><a href="it_isdt-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Rel` (3; 100% of non-empty `PronType`): <em>che</em>
* `EMPTY` (3039): <em>che, se, quando, perché, come, mentre, qualora, dopo, purché, finché</em>

### `ADJ`

1 <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADJ` and `PronType` co-occurred: <tt><a href="it_isdt-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (1; 100%), <tt><a href="it_isdt-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1; 100%).

`ADJ` tokens may have the following values of `PronType`:

* `Prs` (1; 100% of non-empty `PronType`): <em>propria</em>
* `EMPTY` (19778): <em>primo, prima, nuovo, grande, presente, altri, altro, stesso, comune, italiana</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="it_isdt-dep-conj.html">conj</a></tt>]--> PRON</tt> (33; 85%),
<tt>DET --[<tt><a href="it_isdt-dep-conj.html">conj</a></tt>]--> DET</tt> (2; 100%),
<tt>DET --[<tt><a href="it_isdt-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="it_isdt-dep-expl.html">expl</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="it_isdt-dep-orphan.html">orphan</a></tt>]--> PRON</tt> (1; 100%).

