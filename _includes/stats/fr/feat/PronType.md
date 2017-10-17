

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This feature is universal.
It occurs with 7 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`.

73729 tokens (19%) have a non-empty value of `PronType`.
167 types (0%) occur at least once with a non-empty value of `PronType`.
39 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [fr-pos/DET]() (58663; 15% instances), [fr-pos/PRON]() (15064; 4% instances), [fr-pos/NOUN]() (2; 0% instances).

### `DET`

58663 [fr-pos/DET]() tokens (97% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (45386; 77%), <tt><a href="Definite.html">Definite</a>=Def</tt> (42234; 72%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (30834; 53%).

`DET` tokens may have the following values of `PronType`:

* `Art` (52145; 89% of non-empty `PronType`): <em>le, la, les, l', un, une, des, de, d', l</em>
* `Dem` (2160; 4% of non-empty `PronType`): <em>cette, ce, ces, cet</em>
* `Neg` (105; 0% of non-empty `PronType`): <em>aucun, aucune, aucunes</em>
* `Prs` (4253; 7% of non-empty `PronType`): <em>son, sa, ses, leur, leurs, notre, mon, nos, ma, votre</em>
* `EMPTY` (1630): <em>plusieurs, tous, quelques, tout, chaque, toutes, toute, certains, the, du</em>

### `PRON`

15064 [fr-pos/PRON]() tokens (86% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (9776; 65%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (8723; 58%), <tt><a href="Number.html">Number</a>=Sing</tt> (7937; 53%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (1541; 10% of non-empty `PronType`): <em>c', ce, cela, celle, celui, ceux, celui-ci, celles, ça, celle-ci</em>
* `Ind` (3; 0% of non-empty `PronType`): <em>quiconque</em>
* `Int` (1; 0% of non-empty `PronType`): <em>Que</em>
* `Neg` (11; 0% of non-empty `PronType`): <em>personne</em>
* `Prs` (10137; 67% of non-empty `PronType`): <em>il, se, s', elle, ils, lui, nous, je, le, l'</em>
* `Rel` (3371; 22% of non-empty `PronType`): <em>qui, dont, où, qu', que, lequel, laquelle, lesquels, lesquelles, ou</em>
* `EMPTY` (2422): <em>on, en, y, un, une, tout, qui, eux, rien, autres</em>

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>qu', que</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>que, qu'</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>qu'</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>Que</em></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 97% lemmas (29) occur only with one value of `PronType`.

### `NOUN`

2 [fr-pos/NOUN]() tokens (0% of all `NOUN` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `NOUN` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (2; 100%).

`NOUN` tokens may have the following values of `PronType`:

* `Art` (2; 100% of non-empty `PronType`): <em>Fédération, Institut</em>
* `EMPTY` (73203): <em>ans, ville, pays, partie, monde, nom, région, commune, fois, temps</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (24; 86%),
<tt>PRON --[<a href="../dep/reparandum.html">reparandum</a>]--> PRON</tt> (2; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This feature is universal.
It occurs with 8 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.

3980 tokens (22%) have a non-empty value of `PronType`.
143 types (4%) occur at least once with a non-empty value of `PronType`.
68 lemmas (3%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: [fr-pos/DET]() (2984; 17% instances), [fr-pos/PRON]() (983; 5% instances), [fr-pos/ADV]() (12; 0% instances), [fr-pos/ADJ]() (1; 0% instances).

### `DET`

2984 [fr-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Definite.html">Definite</a>=Def</tt> (2094; 70%), <tt><a href="Number.html">Number</a>=Sing</tt> (2087; 70%).

`DET` tokens may have the following values of `PronType`:

* `Art` (2384; 80% of non-empty `PronType`): <em>les, le, la, l', une, un, des, d', de</em>
* `Dem` (266; 9% of non-empty `PronType`): <em>des, cette, ce, ces, cet, de, d', telles, du</em>
* `Ind` (104; 3% of non-empty `PronType`): <em>toute, aucune, quelques, tout, autres, certaines, certains, aucun, chaque, plusieurs</em>
* `Int` (1; 0% of non-empty `PronType`): <em>quel</em>
* `Prs` (182; 6% of non-empty `PronType`): <em>son, sa, votre, leur, notre, ses, mon, leurs, nos, vos</em>
* `Tot` (47; 2% of non-empty `PronType`): <em>tous, toute, toutes, tout</em>

<table>
  <tr><th>Paradigm <i>un</i></th><th><tt>Art</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>un</em></td><td><em>de, du</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>des</em></td><td><em>des, de</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>une</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><em>des</em></td><td><em>des, de</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>des</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>une</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>une</em></td><td></td></tr>
</table>

### `PRON`

983 [fr-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (713; 73%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (132; 13% of non-empty `PronType`): <em>ce, c', cela, ceux, celle, ceci, ça, -ce, celle-ci, celui</em>
* `Ind` (32; 3% of non-empty `PronType`): <em>chacun, tous, Nul, Quiconque, autre, autres, beaucoup, rien, aucune, certains</em>
* `Int` (1; 0% of non-empty `PronType`): <em>Quel</em>
* `Prs` (623; 63% of non-empty `PronType`): <em>nous, je, il, vous, s', se, on, ils, y, elles</em>
* `Rel` (194; 20% of non-empty `PronType`): <em>qui, que, qu', dont, où, laquelle, lequel, auxquelles, quoi, auxquels</em>
* `Tot` (1; 0% of non-empty `PronType`): <em>tous</em>

<table>
  <tr><th>Paradigm <i>tout</i></th><th><tt>Tot</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt></tt></td><td><em>tous</em></td><td><em>tous</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 96% lemmas (46) occur only with one value of `PronType`.

### `ADV`

12 [fr-pos/ADV]() tokens (2% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (12; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Neg` (12; 100% of non-empty `PronType`): <em>non</em>
* `EMPTY` (653): <em>pas, plus, y, également, ainsi, moins, tout, bien, lors, très</em>

### `ADJ`

1 [fr-pos/ADJ]() tokens (0% of all `ADJ` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADJ` and `PronType` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (1; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (1; 100%).

`ADJ` tokens may have the following values of `PronType`:

* `Dem` (1; 100% of non-empty `PronType`): <em>tel</em>
* `EMPTY` (1148): <em>européen, présent, présente, dangereuses, grande, structurels, autres, possible, telle, communautaire</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<a href="../dep/det.html">det</a>]--> DET</tt> (3; 75%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (2; 100%),
<tt>PRON --[<a href="../dep/expl.html">expl</a>]--> PRON</tt> (1; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Int`, `Prs`, `Rel`.

9278 tokens (15%) have a non-empty value of `PronType`.
165 types (2%) occur at least once with a non-empty value of `PronType`.
86 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [fr-pos/DET]() (8343; 14% instances), [fr-pos/PRON]() (903; 1% instances), [fr-pos/ADV]() (32; 0% instances).

### `DET`

8343 [fr-pos/DET]() tokens (93% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Definite.html">Definite</a>=Def</tt> (6372; 76%), <tt><a href="Number.html">Number</a>=Sing</tt> (6152; 74%).

`DET` tokens may have the following values of `PronType`:

* `Art` (7947; 95% of non-empty `PronType`): <em>le, les, la, l', une, un, des, de, d', quelques</em>
* `Dem` (383; 5% of non-empty `PronType`): <em>cette, ce, ces, cet</em>
* `Int` (13; 0% of non-empty `PronType`): <em>quel, quelles, quelle, quels</em>
* `EMPTY` (622): <em>son, ses, votre, sa, leur, plusieurs, leurs, notre, nos, aucune</em>

### `PRON`

903 [fr-pos/PRON]() tokens (36% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (903; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (842; 93%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (724; 80%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (637; 71%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (97; 11% of non-empty `PronType`): <em>cela, ceci, ceux, celle-ci, celle, celles, celui, celui-ci, ça, ceux-ci</em>
* `Int` (19; 2% of non-empty `PronType`): <em>Qu', Que, qui, quoi, QU'</em>
* `Prs` (51; 6% of non-empty `PronType`): <em>eux, lui, moi, elle, vous, nous, Toi, elles</em>
* `Rel` (736; 82% of non-empty `PronType`): <em>qui, que, ce, dont, où, qu', un, laquelle, 1, rien</em>
* `EMPTY` (1573): <em>il, nous, se, je, s', vous, elle, ils, c', y</em>

<table>
  <tr><th>Paradigm <i>qui</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>qui</em></td><td><em>qui</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 96% lemmas (75) occur only with one value of `PronType`.

### `ADV`

32 [fr-pos/ADV]() tokens (1% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (32; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (32; 100% of non-empty `PronType`): <em>comment, pourquoi, où, combien</em>
* `EMPTY` (2112): <em>pas, n', ne, plus, aussi, moins, très, bien, également, alors</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/nmod.html">nmod</a>]--> PRON</tt> (14; 78%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (3; 100%),
<tt>PRON --[<a href="../dep/dep.html">dep</a>]--> PRON</tt> (3; 75%),
<tt>PRON --[<a href="../dep/fixed.html">fixed</a>]--> PRON</tt> (2; 67%),
<tt>PRON --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> PRON</tt> (1; 100%).

