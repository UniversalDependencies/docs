---
layout: base
title:  'Statistics of PronType in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Features: `PronType`

This feature is universal.
It occurs with 9 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.

11549 tokens (12%) have a non-empty value of `PronType`.
166 types (1%) occur at least once with a non-empty value of `PronType`.
57 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: <tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (6672; 7% instances), <tt><a href="sv_talbanken-pos-DET.html">DET</a></tt> (4877; 5% instances).

### `PRON`

6672 <tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="sv_talbanken-feat-Poss.html">Poss</a></tt><tt>=EMPTY</tt> (5969; 89%), <tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Def</tt> (4263; 64%), <tt><a href="sv_talbanken-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (4059; 61%), <tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3656; 55%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (188; 3% of non-empty `PronType`): <em>detta, dessa, denna, denne, dennes, dessas</em>
* `Ind` (915; 14% of non-empty `PronType`): <em>man, andra, många, något, någon, mycket, detsamma, fler, några, annat</em>
* `Int` (121; 2% of non-empty `PronType`): <em>vad, vem, vilka, vilken, vilket, Vems</em>
* `Neg` (32; 0% of non-empty `PronType`): <em>ingen, ingenting, inget, inga, ingendera</em>
* `Prs` (4089; 61% of non-empty `PronType`): <em>det, de, sig, vi, den, du, sin, dem, han, sina</em>
* `Rcp` (43; 1% of non-empty `PronType`): <em>varandra, varann, varandras</em>
* `Rel` (1178; 18% of non-empty `PronType`): <em>som, vilket, vilka, vars, vilken, något, vilkas, man, Vad</em>
* `Tot` (106; 2% of non-empty `PronType`): <em>alla, var, allt, båda, allting, vart, bägge, bådadera, samtliga, vem</em>

<table>
  <tr><th>Paradigm <i>vad</i></th><th><tt>Prs</tt></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Tot</tt></th></tr>
  <tr><td><tt></tt></td><td><em>vad</em></td><td><em>vad</em></td><td><em>Vad</em></td><td><em>vad</em></td></tr>
</table>

### `DET`

4877 <tt><a href="sv_talbanken-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Sing</tt> (3844; 79%), <tt><a href="sv_talbanken-feat-Gender.html">Gender</a></tt><tt>=Com</tt> (2576; 53%), <tt><a href="sv_talbanken-feat-Definite.html">Definite</a></tt><tt>=Ind</tt> (2558; 52%).

`DET` tokens may have the following values of `PronType`:

* `Art` (3879; 80% of non-empty `PronType`): <em>en, den, ett, de, det, the, dom</em>
* `Dem` (316; 6% of non-empty `PronType`): <em>denna, dessa, detta</em>
* `Ind` (190; 4% of non-empty `PronType`): <em>någon, några, något, var, varje, alla, inget, nån, vartannat</em>
* `Int` (71; 1% of non-empty `PronType`): <em>vilka, vilken, vilket</em>
* `Neg` (61; 1% of non-empty `PronType`): <em>ingen, inget, inga, någon</em>
* `Prs` (14; 0% of non-empty `PronType`): <em>varje, alla, detta, någon, all</em>
* `Tot` (346; 7% of non-empty `PronType`): <em>alla, varje, båda, allt, all, var, bägge, vardera, vart, vilka</em>
* `EMPTY` (1): <em>en</em>

<table>
  <tr><th>Paradigm <i>någon</i></th><th><tt>Prs</tt></th><th><tt>Neg</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Gender.html">Gender</a></tt><tt>=Com</tt>|<tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>någon</em></td><td><em>någon</em></td><td><em>någon, nån</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td></td><td><em>något</em></td></tr>
  <tr><td><tt><tt><a href="sv_talbanken-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td></td><td><em>några</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> PRON</tt> (10; 77%),
<tt>DET --[<tt><a href="sv_talbanken-dep-conj.html">conj</a></tt>]--> DET</tt> (4; 100%),
<tt>PRON --[<tt><a href="sv_talbanken-dep-acl-relcl.html">acl:relcl</a></tt>]--> PRON</tt> (2; 100%).

