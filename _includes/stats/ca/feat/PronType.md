

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This feature is universal.
It occurs with 7 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`, `Rel`, `Tot`.

104076 tokens (19%) have a non-empty value of `PronType`.
252 types (1%) occur at least once with a non-empty value of `PronType`.
106 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [ca-pos/DET]() (87305; 16% instances), [ca-pos/PRON]() (16771; 3% instances).

### `DET`

87305 [ca-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (68822; 79%), <tt><a href="Definite.html">Definite</a>=Def</tt> (68257; 78%).

`DET` tokens may have the following values of `PronType`:

* `Art` (68509; 78% of non-empty `PronType`): <em>el, la, l', els, les, un, meva, una, los, las</em>
* `Dem` (3352; 4% of non-empty `PronType`): <em>aquest, aquesta, aquests, aquestes, aquell, aquells, aquella, aquelles, tal, tals</em>
* `Ind` (12136; 14% of non-empty `PronType`): <em>un, una, altres, tots, mateix, tot, cap, cada, uns, diferents</em>
* `Int` (62; 0% of non-empty `PronType`): <em>quina, quin, quines, quins, quants</em>
* `Prs` (3140; 4% of non-empty `PronType`): <em>seva, seu, seus, seves, nostra, nostre, nostres, meu, meus, su</em>
* `Rel` (56; 0% of non-empty `PronType`): <em>qual, Que</em>
* `Tot` (50; 0% of non-empty `PronType`): <em>tot</em>

<table>
  <tr><th>Paradigm <i>el</i></th><th><tt>Prs</tt></th><th><tt>Art</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>l</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>el</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>els</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>la, L'</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>les</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>l'</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Poss.html">Poss</a>=Yes</tt></td><td><em>les</em></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 91% lemmas (72) occur only with one value of `PronType`.

### `PRON`

16771 [ca-pos/PRON]() tokens (72% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (13524; 81%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (12009; 72%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (10437; 62%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (643; 4% of non-empty `PronType`): <em>això, aquest, aquesta, tal, allò, aquests, aquestes, aquells, aquell, aquelles</em>
* `Ind` (1941; 12% of non-empty `PronType`): <em>un, una, altres, uns, alguns, res, tots, altra, altre, ningú</em>
* `Int` (285; 2% of non-empty `PronType`): <em>com, què, qui, on, quan, quina, quin, quines, quins, quant</em>
* `Prs` (4762; 28% of non-empty `PronType`): <em>hi, li, ho, els, el, l', ens, ell, la, n'</em>
* `Rel` (8760; 52% of non-empty `PronType`): <em>que, on, què, qui, qual, quals, quan, com</em>
* `Tot` (380; 2% of non-empty `PronType`): <em>tot</em>
* `EMPTY` (6598): <em>es, s', -se, se, ens, 's, em, m', -s, -me</em>

<table>
  <tr><th>Paradigm <i>que</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>que</em></td><td><em>que</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>que</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (15; 100%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (12; 86%),
<tt>DET --[<a href="../dep/mwe.html">mwe</a>]--> DET</tt> (3; 100%),
<tt>PRON --[<a href="../dep/advcl.html">advcl</a>]--> PRON</tt> (1; 100%).

