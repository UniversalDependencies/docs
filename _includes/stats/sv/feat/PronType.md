

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This feature is universal.
It occurs with 9 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.

11624 tokens (12%) have a non-empty value of `PronType`.
169 types (1%) occur at least once with a non-empty value of `PronType`.
61 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [sv-pos/PRON]() (5968; 6% instances), [sv-pos/DET]() (5656; 6% instances).

### `PRON`

5968 [sv-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Definite.html">Definite</a>=Def</tt> (3558; 60%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (3355; 56%), <tt><a href="Number.html">Number</a>=Sing</tt> (3288; 55%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (1; 0% of non-empty `PronType`): <em>Det</em>
* `Dem` (185; 3% of non-empty `PronType`): <em>detta, dessa, denna, denne</em>
* `Ind` (912; 15% of non-empty `PronType`): <em>man, andra, många, något, någon, mycket, detsamma, fler, några, sådana</em>
* `Int` (119; 2% of non-empty `PronType`): <em>vad, vem, vilka, vilken, vilket</em>
* `Neg` (32; 1% of non-empty `PronType`): <em>ingen, ingenting, inget, inga, ingendera</em>
* `Prs` (3409; 57% of non-empty `PronType`): <em>det, de, sig, vi, den, du, dem, han, jag, oss</em>
* `Rcp` (39; 1% of non-empty `PronType`): <em>varandra, varann</em>
* `Rel` (1165; 20% of non-empty `PronType`): <em>som, vilket, vilka, vilken, något, man, Vad, de</em>
* `Tot` (106; 2% of non-empty `PronType`): <em>alla, var, allt, båda, allting, vart, bägge, bådadera, samtliga, vem</em>

<table>
  <tr><th>Paradigm <i>den</i></th><th><tt>Prs</tt></th><th><tt>Art</tt></th><th><tt>Tot</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing</tt></td><td><em>den</em></td><td></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>det</em></td><td><em>Det</em></td><td><em>det</em></td><td><em>det</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>den</em></td><td></td><td></td><td></td></tr>
</table>

### `DET`

5656 [sv-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (4953; 88%), <tt><a href="Number.html">Number</a>=Sing</tt> (4214; 75%).

`DET` tokens may have the following values of `PronType`:

* `Art` (3846; 68% of non-empty `PronType`): <em>en, den, ett, de, det, the, Dom</em>
* `Dem` (319; 6% of non-empty `PronType`): <em>denna, dessa, detta, dennes, dessas</em>
* `Ind` (295; 5% of non-empty `PronType`): <em>samma, någon, några, något, var, varannan, andras, ens, varje, alla</em>
* `Int` (73; 1% of non-empty `PronType`): <em>vilka, vilken, vilket, Vems</em>
* `Neg` (62; 1% of non-empty `PronType`): <em>ingen, inget, inga, någon, samma</em>
* `Prs` (722; 13% of non-empty `PronType`): <em>sin, sina, deras, sitt, våra, vår, vårt, dess, din, ditt</em>
* `Rcp` (4; 0% of non-empty `PronType`): <em>varandras</em>
* `Rel` (14; 0% of non-empty `PronType`): <em>vars, vilkas</em>
* `Tot` (321; 6% of non-empty `PronType`): <em>alla, varje, allt, all, var, bägge, vardera, varenda, vart, vilka</em>

<table>
  <tr><th>Paradigm <i>någon</i></th><th><tt>Prs</tt></th><th><tt>Neg</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Com|<a href="Number.html">Number</a>=Sing</tt></td><td><em>någon</em></td><td><em>någon</em></td><td><em>någon, nån</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td></td><td><em>något</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td></td><td><em>några</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (9; 69%),
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (4; 100%),
<tt>DET --[<a href="../dep/nsubj.html">nsubj</a>]--> DET</tt> (2; 100%),
<tt>PRON --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> PRON</tt> (2; 100%).

