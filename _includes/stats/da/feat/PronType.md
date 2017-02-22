

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This feature is universal.
It occurs with 6 different values: `Dem`, `Ind`, `Int`, `Prs`, `Rcp`, `Rel`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

10436 tokens (12%) have a non-empty value of `PronType`.
139 types (1%) occur at least once with a non-empty value of `PronType`.
40 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [da-pos/PRON]() (5431; 6% instances), [da-pos/DET]() (5005; 6% instances).

### `PRON`

5431 [da-pos/PRON]() tokens (89% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="PartType.html">PartType</a>=EMPTY</tt> (5431; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (3599; 66%), <tt><a href="Person.html">Person</a>=3</tt> (3003; 55%), <tt><a href="Gender.html">Gender</a>=Com</tt> (2960; 55%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (186; 3% of non-empty `PronType`): <em>selv, de, dette, den, begge, det, denne, disse</em>
* `Ind` (744; 14% of non-empty `PronType`): <em>man, noget, en, andre, hver, andet, et, ingen, anden, nogle</em>
* `Int,Rel` (169; 3% of non-empty `PronType`): <em>hvad, hvilket, hvem, hvilke, hvis, hvilken, HVA', Hva</em>
* `Prs` (4303; 79% of non-empty `PronType`): <em>det, han, jeg, vi, de, sig, hun, den, du, mig</em>
* `Rcp` (29; 1% of non-empty `PronType`): <em>hinanden, hinandens</em>
* `EMPTY` (679): <em>der, som</em>

<table>
  <tr><th>Paradigm <i>den</i></th><th><tt>Prs</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>den</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>den</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>det</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>de</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 97% lemmas (34) occur only with one value of `PronType`.

### `DET`

5005 [da-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (4290; 86%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (4287; 86%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (4287; 86%), <tt><a href="Number.html">Number</a>=Sing</tt> (3816; 76%), <tt><a href="Gender.html">Gender</a>=Com</tt> (2581; 52%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (1943; 39% of non-empty `PronType`): <em>den, de, det, denne, disse, dette, begge, dén, dennes, selv</em>
* `Ind` (2344; 47% of non-empty `PronType`): <em>en, et, andre, nogle, ingen, anden, noget, nogen, én, hvert</em>
* `Prs` (718; 14% of non-empty `PronType`): <em>sin, deres, hans, min, sit, hendes, sine, vores, mit, din</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (24) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (26; 53%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (2; 67%),
<tt>PRON --[<a href="../dep/reparandum.html">reparandum</a>]--> PRON</tt> (1; 100%),
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> PRON</tt> (1; 100%).

