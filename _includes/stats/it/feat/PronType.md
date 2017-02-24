

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This feature is universal but the values `Exc` are language-specific.
It occurs with 9 different values: `Art`, `Dem`, `Exc`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.

58587 tokens (21%) have a non-empty value of `PronType`.
343 types (1%) occur at least once with a non-empty value of `PronType`.
162 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: [it-pos/DET]() (45942; 16% instances), [it-pos/PRON]() (10772; 4% instances), [it-pos/ADV]() (1872; 1% instances), [it-pos/ADJ]() (1; 0% instances).

### `DET`

45942 [it-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Definite.html">Definite</a>=Def</tt> (35925; 78%), <tt><a href="Number.html">Number</a>=Sing</tt> (33428; 73%).

`DET` tokens may have the following values of `PronType`:

* `Art` (40339; 88% of non-empty `PronType`): <em>il, la, i, l', le, un, gli, una, lo, un'</em>
* `Dem` (1031; 2% of non-empty `PronType`): <em>questo, questa, questi, tale, queste, quest', quel, tali, quella, tal</em>
* `Exc` (4; 0% of non-empty `PronType`): <em>che</em>
* `Ind` (1496; 3% of non-empty `PronType`): <em>ogni, alcuni, qualche, molti, più, qualsiasi, molte, diversi, alcune, pochi</em>
* `Int` (901; 2% of non-empty `PronType`): <em>quale, che, quanti, quante, quali, quanta, quanto, Qual, quel</em>
* `Prs` (1751; 4% of non-empty `PronType`): <em>sua, suo, loro, suoi, sue, proprio, nostra, mio, nostro, nostri</em>
* `Rel` (41; 0% of non-empty `PronType`): <em>cui, quali</em>
* `Tot` (379; 1% of non-empty `PronType`): <em>tutti, tutte, tutto, tutta, entrambi, entrambe, ambedue, tutt'</em>
* `EMPTY` (16): <em>l’, il, de, la, che, da, moltissime, tanti, tutt’</em>

<table>
  <tr><th>Paradigm <i>quale</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>quale</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>quali</em></td><td><em>quali</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 95% lemmas (83) occur only with one value of `PronType`.

### `PRON`

10772 [it-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (7852; 73%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (6341; 59%), <tt><a href="Clitic.html">Clitic</a>=EMPTY</tt> (6305; 59%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (6106; 57%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (2; 0% of non-empty `PronType`): <em>le</em>
* `Dem` (800; 7% of non-empty `PronType`): <em>quello, questo, ciò, quella, quelli, quelle, questa, questi, coloro, queste</em>
* `Ind` (987; 9% of non-empty `PronType`): <em>uno, tutto, tutti, altri, una, altro, nessuno, più, molti, nulla</em>
* `Int` (852; 8% of non-empty `PronType`): <em>chi, qual, cosa, quanto, cos', che, quale, Quanti, Quali, Quante</em>
* `Prs` (5176; 48% of non-empty `PronType`): <em>si, ci, lo, ne, mi, c', la, li, gli, lui</em>
* `Rel` (2955; 27% of non-empty `PronType`): <em>che, cui, chi, quale, quanto, quali, dove, chiunque, quando, come</em>
* `EMPTY` (1): <em>mezzo</em>

<table>
  <tr><th>Paradigm <i>quanto</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>quanto</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>quanto</em></td><td><em>quanto</em></td><td><em>quanto</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>Quanti</em></td><td><em>quanti</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><em>Quante</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>quanto</em></td><td><em>quanto</em></td><td></td></tr>
</table>

### `ADV`

1872 [it-pos/ADV]() tokens (17% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Neg` (1872; 100% of non-empty `PronType`): <em>non, neppure, nemmeno, no, neanche, mica, nè, perniente</em>
* `EMPTY` (8944): <em>più, anche, dove, come, quando, solo, prima, sempre, poi, ancora</em>

### `ADJ`

1 [it-pos/ADJ]() tokens (0% of all `ADJ` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADJ` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (1; 100%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (1; 100%).

`ADJ` tokens may have the following values of `PronType`:

* `Prs` (1; 100% of non-empty `PronType`): <em>propria</em>
* `EMPTY` (18256): <em>primo, prima, grande, nuovo, presente, altri, altro, stesso, comune, italiana</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (32; 82%),
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (2; 100%),
<tt>PRON --[<a href="../dep/expl.html">expl</a>]--> PRON</tt> (1; 100%),
<tt>PRON --[<a href="../dep/orphan.html">orphan</a>]--> PRON</tt> (1; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This feature is universal.
It occurs with 8 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.

8934 tokens (21%) have a non-empty value of `PronType`.
218 types (3%) occur at least once with a non-empty value of `PronType`.
91 lemmas (2%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [it-pos/DET]() (7315; 17% instances), [it-pos/PRON]() (1368; 3% instances), [it-pos/ADV]() (251; 1% instances).

### `DET`

7315 [it-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Definite.html">Definite</a>=Def</tt> (5512; 75%), <tt><a href="Number.html">Number</a>=Sing</tt> (5218; 71%).

`DET` tokens may have the following values of `PronType`:

* `Art` (6276; 86% of non-empty `PronType`): <em>il, la, l', i, le, un, gli, una, un', lo</em>
* `Dem` (243; 3% of non-empty `PronType`): <em>questo, tale, questa, tali, questi, queste, quest', tal, quei, quel</em>
* `Ind` (264; 4% of non-empty `PronType`): <em>ogni, alcuni, più, molti, qualsiasi, alcuna, diversi, alcun, alcune, molte</em>
* `Int` (9; 0% of non-empty `PronType`): <em>quali, Che, quante, quanti</em>
* `Prs` (448; 6% of non-empty `PronType`): <em>sua, suo, loro, sue, suoi, mio, nostra, nostro, proprio, nostri</em>
* `Rel` (7; 0% of non-empty `PronType`): <em>cui</em>
* `Tot` (68; 1% of non-empty `PronType`): <em>tutti, tutto, tutte, tutta, entrambe, entrambi</em>

<table>
  <tr><th>Paradigm <i>tutto</i></th><th><tt>Tot</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>tutto</em></td><td><em>tutto</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>tutti</em></td><td><em>tutti</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>tutta</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><em>tutte</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>tutto</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 98% lemmas (49) occur only with one value of `PronType`.

### `PRON`

1368 [it-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Clitic.html">Clitic</a>=EMPTY</tt> (892; 65%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (849; 62%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (833; 61%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (142; 10% of non-empty `PronType`): <em>ciò, quello, questo, quella, questa, coloro, quelli, quelle, questi, queste</em>
* `Ind` (185; 14% of non-empty `PronType`): <em>uno, altri, alcuni, tutto, molti, una, altro, molte, tutti, nulla</em>
* `Int` (8; 1% of non-empty `PronType`): <em>cosa, qual, Quanti, quale, quanto</em>
* `Prs` (597; 44% of non-empty `PronType`): <em>si, lo, ci, ne, mi, vi, noi, c', la, le</em>
* `Rel` (436; 32% of non-empty `PronType`): <em>che, cui, quanto, quale, quali, chi, chiunque</em>

<table>
  <tr><th>Paradigm <i>uno</i></th><th><tt>Prs</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>uno, un</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td><em>uni</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>una</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 95% lemmas (59) occur only with one value of `PronType`.

### `ADV`

251 [it-pos/ADV]() tokens (17% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Neg` (251; 100% of non-empty `PronType`): <em>non, neanche, neppure, no</em>
* `EMPTY` (1212): <em>più, anche, solo, oggi, molto, ora, così, già, tuttavia, meno</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (2; 100%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (1; 100%).

