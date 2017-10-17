

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This feature is universal.
It occurs with 9 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.

9160 tokens (12%) have a non-empty value of `PronType`.
155 types (1%) occur at least once with a non-empty value of `PronType`.
58 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [sv-pos/PRON]() (4645; 6% instances), [sv-pos/DET]() (4515; 6% instances).

### `PRON`

4645 [sv-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Definite.html">Definite</a>=Def</tt> (2789; 60%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (2597; 56%), <tt><a href="Number.html">Number</a>=Sing</tt> (2585; 56%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (146; 3% of non-empty `PronType`): <em>detta, denna, dessa, denne</em>
* `Ind` (691; 15% of non-empty `PronType`): <em>man, andra, något, många, någon, mycket, fler, några, detsamma, en</em>
* `Int` (99; 2% of non-empty `PronType`): <em>vad, vilka, vem, vilken, vilket</em>
* `Neg` (24; 1% of non-empty `PronType`): <em>ingen, ingenting, inget, inga</em>
* `Prs` (2662; 57% of non-empty `PronType`): <em>det, de, sig, vi, du, den, han, dem, oss, jag</em>
* `Rcp` (31; 1% of non-empty `PronType`): <em>varandra, varann</em>
* `Rel` (922; 20% of non-empty `PronType`): <em>som, vilket, vilka, vilken, något, man, de</em>
* `Tot` (70; 2% of non-empty `PronType`): <em>alla, var, allt, båda, vart, bägge, samtliga, vem, Allting, alltihop</em>

<table>
  <tr><th>Paradigm <i>de</i></th><th><tt>Prs</tt></th><th><tt>Rel</tt></th><th><tt>Tot</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td><em>dem</em></td><td></td><td><em>dem</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td><em>de</em></td><td><em>de</em></td><td></td><td><em>de</em></td></tr>
  <tr><td><tt></tt></td><td><em>dom</em></td><td></td><td></td><td></td></tr>
</table>

### `DET`

4515 [sv-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (3938; 87%), <tt><a href="Number.html">Number</a>=Sing</tt> (3374; 75%).

`DET` tokens may have the following values of `PronType`:

* `Art` (3052; 68% of non-empty `PronType`): <em>en, den, ett, de, det, the, Dom</em>
* `Dem` (248; 5% of non-empty `PronType`): <em>denna, dessa, detta, dennes</em>
* `Ind` (237; 5% of non-empty `PronType`): <em>samma, någon, några, något, var, andras, ens, varannan, alla, annans</em>
* `Int` (69; 2% of non-empty `PronType`): <em>vilka, vilken, vilket, Vems</em>
* `Neg` (50; 1% of non-empty `PronType`): <em>ingen, inget, inga, någon, samma</em>
* `Prs` (585; 13% of non-empty `PronType`): <em>sin, sina, deras, sitt, våra, vår, vårt, din, dess, ditt</em>
* `Rcp` (3; 0% of non-empty `PronType`): <em>varandras</em>
* `Rel` (11; 0% of non-empty `PronType`): <em>vars, vilkas</em>
* `Tot` (260; 6% of non-empty `PronType`): <em>alla, varje, allt, all, var, bägge, vardera, varenda, vilka, vilket</em>

<table>
  <tr><th>Paradigm <i>någon</i></th><th><tt>Prs</tt></th><th><tt>Neg</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing</tt></td><td><em>någon</em></td><td><em>någon</em></td><td><em>någon</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td></td><td><em>något</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td></td><td><em>några</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (7; 78%),
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (4; 100%),
<tt>PRON --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> PRON</tt> (2; 100%),
<tt>DET --[<a href="../dep/nsubj.html">nsubj</a>]--> DET</tt> (2; 100%).

