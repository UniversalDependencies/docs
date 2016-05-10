

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This feature is universal.
It occurs with 6 different values: `Dem`, `Ind`, `Int`, `Prs`, `Rcp`, `Rel`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

11544 tokens (11%) have a non-empty value of `PronType`.
144 types (1%) occur at least once with a non-empty value of `PronType`.
40 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [da-pos/PRON]() (6024; 6% instances), [da-pos/DET]() (5520; 5% instances).

### `PRON`

6024 [da-pos/PRON]() tokens (89% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="PartType.html">PartType</a>=EMPTY</tt> (6024; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (3988; 66%), <tt><a href="Person.html">Person</a>=3</tt> (3321; 55%), <tt><a href="Gender.html">Gender</a>=Com</tt> (3302; 55%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (200; 3% of non-empty `PronType`): <em>selv, de, dette, den, begge, det, denne, disse</em>
* `Ind` (801; 13% of non-empty `PronType`): <em>man, noget, en, andre, hver, andet, ingen, et, nogle, anden</em>
* `Int,Rel` (186; 3% of non-empty `PronType`): <em>hvad, hvilket, hvem, hvilke, hvilken, hvis, HVA', Hva</em>
* `Prs` (4799; 80% of non-empty `PronType`): <em>det, han, jeg, vi, de, sig, hun, den, du, ham</em>
* `Rcp` (38; 1% of non-empty `PronType`): <em>hinanden, hinandens</em>
* `EMPTY` (759): <em>der, som</em>

<table>
  <tr><th>Paradigm <i>den</i></th><th><tt>Prs</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>den</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>den</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>det</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>de</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 97% lemmas (34) occur only with one value of `PronType`.

### `DET`

5520 [da-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (4725; 86%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (4721; 86%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (4721; 86%), <tt><a href="Number.html">Number</a>=Sing</tt> (4216; 76%), <tt><a href="Gender.html">Gender</a>=Com</tt> (2848; 52%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (2128; 39% of non-empty `PronType`): <em>den, de, det, denne, disse, dette, begge, dén, dennes, selv</em>
* `Ind` (2593; 47% of non-empty `PronType`): <em>en, et, andre, nogle, ingen, anden, noget, nogen, én, hvert</em>
* `Prs` (799; 14% of non-empty `PronType`): <em>sin, deres, hans, min, sit, hendes, sine, vores, mit, din</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (24) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (30; 54%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (3; 60%),
<tt>PRON --[<a href="../dep/reparandum.html">reparandum</a>]--> PRON</tt> (1; 100%),
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> PRON</tt> (1; 100%).

