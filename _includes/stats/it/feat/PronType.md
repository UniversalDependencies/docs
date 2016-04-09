

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This feature is universal but the values `Clit`, `Exc` are language-specific.
It occurs with 9 different values: `Art`, `Clit`, `Dem`, `Exc`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`.

56012 tokens (21%) have a non-empty value of `PronType`.
334 types (1%) occur at least once with a non-empty value of `PronType`.
151 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [it-pos/DET]() (43374; 16% instances), [it-pos/PRON]() (10750; 4% instances), [it-pos/ADV]() (1888; 1% instances).

### `DET`

43374 [it-pos/DET]() tokens (99% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Definite.html">Definite</a>=Def</tt> (34073; 79%), <tt><a href="Number.html">Number</a>=Sing</tt> (32138; 74%).

`DET` tokens may have the following values of `PronType`:

* `Art` (38426; 89% of non-empty `PronType`): <em>il, la, l', i, le, un, una, gli, lo, un'</em>
* `Dem` (956; 2% of non-empty `PronType`): <em>questo, questa, tale, questi, queste, quest', quel, tali, quella, tal</em>
* `Exc` (7; 0% of non-empty `PronType`): <em>che, Quale</em>
* `Ind` (1271; 3% of non-empty `PronType`): <em>ogni, qualche, alcuni, più, qualsiasi, molti, diversi, alcuna, alcune, tutto</em>
* `Int` (937; 2% of non-empty `PronType`): <em>quale, che, quanti, quante, quali, quanta, quanto, Qual, quel</em>
* `Prs` (1735; 4% of non-empty `PronType`): <em>sua, suo, loro, suoi, sue, proprio, nostra, mio, nostro, propria</em>
* `Rel` (42; 0% of non-empty `PronType`): <em>cui, quali</em>
* `EMPTY` (327): <em>tutti, tutte, tutta, tutto, entrambi, entrambe, ambedue, tutt'</em>

<table>
  <tr><th>Paradigm <i>quale</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Exc</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>quale</em></td><td></td><td><em>Quale</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>quali</em></td><td><em>quali</em></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 94% lemmas (72) occur only with one value of `PronType`.

### `PRON`

10750 [it-pos/PRON]() tokens (99% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (7825; 73%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (6336; 59%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (6052; 56%).

`PRON` tokens may have the following values of `PronType`:

* `Clit` (4444; 41% of non-empty `PronType`): <em>si, ci, ne, c', lo, vi, mi, la, gli, li</em>
* `Dem` (806; 7% of non-empty `PronType`): <em>quello, questo, ciò, quella, quelli, quelle, questa, questi, coloro, queste</em>
* `Ind` (991; 9% of non-empty `PronType`): <em>uno, tutto, tutti, altri, una, altro, più, nessuno, molti, nulla</em>
* `Int` (891; 8% of non-empty `PronType`): <em>chi, qual, cosa, quanto, cos', che, quale, quanti, Quali, Quante</em>
* `Prs` (719; 7% of non-empty `PronType`): <em>lui, noi, loro, io, lei, egli, essa, essi, esso, esse</em>
* `Rel` (2899; 27% of non-empty `PronType`): <em>che, cui, chi, quale, quanto, quali, chiunque, come, dove, quanti</em>
* `EMPTY` (84): <em>terzo, terzi, quarto, primo, ultimo, primi, ultima, prima, quinto, decimo</em>

<table>
  <tr><th>Paradigm <i>quanto</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>quanto</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>quanto</em></td><td><em>quanto</em></td><td><em>quanto</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>quanti</em></td><td><em>quanti</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><em>Quante</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>quanto</em></td><td><em>quanto</em></td><td></td></tr>
</table>

### `ADV`

1888 [it-pos/ADV]() tokens (18% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Neg` (1888; 100% of non-empty `PronType`): <em>non, neppure, nemmeno, no, neanche, mica, nè, perniente</em>
* `EMPTY` (8596): <em>più, anche, dove, come, quando, solo, sempre, ancora, prima, già</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (27; 75%),
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> PRON</tt> (1; 100%),
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (1; 100%).

