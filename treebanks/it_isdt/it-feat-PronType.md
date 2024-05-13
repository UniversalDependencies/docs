---
layout: base
title:  'Statistics of PronType in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Features: `PronType`

This feature is universal but the values `Exc` are language-specific.
It occurs with 9 different values: `Art`, `Dem`, `Exc`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.

60788 tokens (21%) have a non-empty value of `PronType`.
345 types (1%) occur at least once with a non-empty value of `PronType`.
162 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: <tt><a href="it-pos-DET.html">DET</a></tt> (47654; 16% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt> (11183; 4% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt> (1950; 1% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).

### `DET`

47654 <tt><a href="it-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="it-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (37284; 78%), <tt><a href="it-feat-Number.html">Number</a></tt><tt>=Sing</tt> (34732; 73%).

`DET` tokens may have the following values of `PronType`:

* `Art` (41852; 88% of non-empty `PronType`): <em>il, la, i, l', le, un, gli, una, lo, un'</em>
* `Dem` (1063; 2% of non-empty `PronType`): <em>questo, questa, questi, tale, queste, quest', quel, tali, quella, tal</em>
* `Exc` (5; 0% of non-empty `PronType`): <em>che</em>
* `Ind` (1542; 3% of non-empty `PronType`): <em>ogni, alcuni, qualche, molti, più, qualsiasi, molte, diversi, alcune, alcuna</em>
* `Int` (944; 2% of non-empty `PronType`): <em>quale, che, quanti, quante, quali, quanta, quanto, Qual, quel</em>
* `Prs` (1812; 4% of non-empty `PronType`): <em>sua, suo, loro, suoi, sue, proprio, nostra, mio, nostro, propria</em>
* `Rel` (42; 0% of non-empty `PronType`): <em>cui, quali</em>
* `Tot` (394; 1% of non-empty `PronType`): <em>tutti, tutte, tutto, tutta, entrambi, entrambe, ambedue, tutt'</em>
* `EMPTY` (16): <em>l’, il, de, la, che, da, moltissime, tanti, tutt’</em>

<table>
  <tr><th>Paradigm <i>quale</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt><tt><a href="it-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>quale</em></td><td></td></tr>
  <tr><td><tt><tt><a href="it-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>quali</em></td><td><em>quali</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 95% lemmas (83) occur only with one value of `PronType`.

### `PRON`

11183 <tt><a href="it-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="it-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (8157; 73%), <tt><a href="it-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (6575; 59%), <tt><a href="it-feat-Clitic.html">Clitic</a></tt><tt>=EMPTY</tt> (6552; 59%), <tt><a href="it-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (6344; 57%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (2; 0% of non-empty `PronType`): <em>le</em>
* `Dem` (820; 7% of non-empty `PronType`): <em>quello, questo, ciò, quella, quelli, quelle, questa, questi, coloro, queste</em>
* `Ind` (1014; 9% of non-empty `PronType`): <em>uno, tutto, tutti, altri, una, altro, nessuno, più, molti, nulla</em>
* `Int` (894; 8% of non-empty `PronType`): <em>chi, qual, cosa, quanto, cos', che, quale, quanti, Quali, Quante</em>
* `Prs` (5376; 48% of non-empty `PronType`): <em>si, ci, lo, ne, mi, c', la, li, gli, lui</em>
* `Rel` (3077; 28% of non-empty `PronType`): <em>che, cui, chi, quale, quanto, quali, dove, chiunque, quando, come</em>
* `EMPTY` (1): <em>mezzo</em>

<table>
  <tr><th>Paradigm <i>quanto</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>quanto</em></td><td></td></tr>
  <tr><td><tt><tt><a href="it-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="it-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>quanto</em></td><td><em>quanto</em></td><td><em>quanto</em></td></tr>
  <tr><td><tt><tt><a href="it-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="it-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>quanti</em></td><td><em>quanti</em></td><td></td></tr>
  <tr><td><tt><tt><a href="it-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="it-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>Quante</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="it-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>quanto</em></td><td><em>quanto</em></td><td></td></tr>
</table>

### `ADV`

1950 <tt><a href="it-pos-ADV.html">ADV</a></tt> tokens (17% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Neg` (1950; 100% of non-empty `PronType`): <em>non, neppure, nemmeno, no, neanche, mica, nè, perniente</em>
* `EMPTY` (9267): <em>più, anche, dove, come, quando, solo, prima, sempre, poi, ancora</em>

### `ADJ`

1 <tt><a href="it-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADJ` and `PronType` co-occurred: <tt><a href="it-feat-Gender.html">Gender</a></tt><tt>=Fem</tt> (1; 100%), <tt><a href="it-feat-Number.html">Number</a></tt><tt>=Sing</tt> (1; 100%).

`ADJ` tokens may have the following values of `PronType`:

* `Prs` (1; 100% of non-empty `PronType`): <em>propria</em>
* `EMPTY` (19117): <em>primo, prima, grande, nuovo, presente, altri, altro, stesso, comune, italiana</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="it-dep-conj.html">conj</a></tt>]--> PRON</tt> (33; 83%),
<tt>DET --[<tt><a href="it-dep-conj.html">conj</a></tt>]--> DET</tt> (2; 100%),
<tt>PRON --[<tt><a href="it-dep-expl.html">expl</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="it-dep-orphan.html">orphan</a></tt>]--> PRON</tt> (1; 100%).

