---
layout: base
title:  'Statistics of PronType in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Features: `PronType`

This feature is universal but the values `Exc` are language-specific.
It occurs with 9 different values: `Art`, `Dem`, `Exc`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.

10256 tokens (25%) have a non-empty value of `PronType`.
263 types (4%) occur at least once with a non-empty value of `PronType`.
89 lemmas (2%) occur at least once with a non-empty value of `PronType`.
The feature is used with 5 part-of-speech tags: <tt><a href="it_old-pos-PRON.html">PRON</a></tt> (4890; 12% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt> (4855; 12% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt> (506; 1% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="it_old-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).

### `PRON`

4890 <tt><a href="it_old-pos-PRON.html">PRON</a></tt> tokens (99% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="it_old-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (4226; 86%), <tt><a href="it_old-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (3710; 76%), <tt><a href="it_old-feat-Clitic.html">Clitic</a></tt><tt>=EMPTY</tt> (3313; 68%), <tt><a href="it_old-feat-Number.html">Number</a></tt><tt>=Sing</tt> (2620; 54%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (357; 7% of non-empty `PronType`): <em>ciò, quel, colui, quei, questi, quella, quelli, questa, questo, costui</em>
* `Ind` (317; 6% of non-empty `PronType`): <em>altro, un, altri, altrui, ciascun, alcun, altra, una, qual, uno</em>
* `Int` (33; 1% of non-empty `PronType`): <em>che, cui, qual, quai, quali</em>
* `Prs` (3096; 63% of non-empty `PronType`): <em>io, mi, si, tu, me, i', ti, li, s', lui</em>
* `Rel` (1059; 22% of non-empty `PronType`): <em>che, ch', chi, cui, c', qual, cu', quali, quale, quai</em>
* `Tot` (28; 1% of non-empty `PronType`): <em>tutti, tutto, tutte, 'mbedue, ambedue, amendue, intrambi</em>
* `EMPTY` (35): <em>ove, ov', tal, ci, ne, om, Tutti, tale, un, vi</em>

<table>
  <tr><th>Paradigm <i>che</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt></tt></td><td><em>che</em></td><td><em>che, ch', c'</em></td><td><em>che</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 96% lemmas (73) occur only with one value of `PronType`.

### `DET`

4855 <tt><a href="it_old-pos-DET.html">DET</a></tt> tokens (98% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="it_old-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (4293; 88%), <tt><a href="it_old-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3688; 76%), <tt><a href="it_old-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (3297; 68%), <tt><a href="it_old-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (2791; 57%).

`DET` tokens may have the following values of `PronType`:

* `Art` (3465; 71% of non-empty `PronType`): <em>il, la, l', 'l, le, li, lo, i, un, una</em>
* `Dem` (314; 6% of non-empty `PronType`): <em>quel, quella, questa, questo, quell', quelle, stesso, questi, quest', le</em>
* `Exc` (9; 0% of non-empty `PronType`): <em>quanto, che, quanta, Qual, quali, quanti</em>
* `Ind` (249; 5% of non-empty `PronType`): <em>altra, altro, altri, alcun, una, alcuna, un, molte, tanta, altre</em>
* `Int` (20; 0% of non-empty `PronType`): <em>che, qual, quant', quanto</em>
* `Prs` (562; 12% of non-empty `PronType`): <em>mio, suo, sua, lor, tua, mia, tuo, suoi, sue, miei</em>
* `Rel` (38; 1% of non-empty `PronType`): <em>qual, quali, quante, Quale, quanti, quanto, quantunque, quanta</em>
* `Tot` (198; 4% of non-empty `PronType`): <em>tutto, ogne, tutti, tutte, tutta, amendue, tutt', ambedue, ogn', ogni</em>
* `EMPTY` (103): <em>un, più, tal, una, uno, poco, tale, men, tutta, altra</em>

<table>
  <tr><th>Paradigm <i>quanto</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th><th><tt>Exc</tt></th></tr>
  <tr><td><tt><tt><a href="it_old-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="it_old-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>quant', quanto</em></td><td></td><td><em>quanto</em></td><td><em>quanto</em></td></tr>
  <tr><td><tt><tt><a href="it_old-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="it_old-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td></td><td><em>quanti</em></td></tr>
  <tr><td><tt><tt><a href="it_old-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="it_old-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td></td><td><em>quanta</em></td></tr>
  <tr><td><tt><tt><a href="it_old-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td><em>quanto, quanta</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="it_old-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td><em>quante, quanti</em></td><td></td><td></td></tr>
</table>

### `ADV`

506 <tt><a href="it_old-pos-ADV.html">ADV</a></tt> tokens (15% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Neg` (506; 100% of non-empty `PronType`): <em>non</em>
* `EMPTY` (2981): <em>sì, come, più, poi, là, così, già, giù, ancor, qui</em>

### `ADJ`

4 <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> tokens (0% of all `ADJ` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADJ` and `PronType` co-occurred: <tt><a href="it_old-feat-Number.html">Number</a></tt><tt>=Sing</tt> (4; 100%).

`ADJ` tokens may have the following values of `PronType`:

* `Dem` (3; 75% of non-empty `PronType`): <em>quella, tal</em>
* `Ind` (1; 25% of non-empty `PronType`): <em>altro</em>
* `EMPTY` (1611): <em>gran, tal, primo, alto, buon, dolce, grande, lunga, trista, mal</em>

### `SCONJ`

1 <tt><a href="it_old-pos-SCONJ.html">SCONJ</a></tt> tokens (0% of all `SCONJ` tokens) have a non-empty value of `PronType`.

`SCONJ` tokens may have the following values of `PronType`:

* `Rel` (1; 100% of non-empty `PronType`): <em>che</em>
* `EMPTY` (1214): <em>che, ch', se, quando, ché, s', perché, quand', come, perch'</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="it_old-dep-orphan.html">orphan</a></tt>]--> PRON</tt> (40; 80%),
<tt>PRON --[<tt><a href="it_old-dep-conj.html">conj</a></tt>]--> PRON</tt> (14; 82%),
<tt>PRON --[<tt><a href="it_old-dep-obl-lmod.html">obl:lmod</a></tt>]--> DET</tt> (1; 100%).

