

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This feature is universal.
It occurs with 9 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.
Some words have combined values of the feature; 5 combinations have been observed: `Art|Prs`, `Dem|Ind`, `Ind|Prs`, `Neg|Prs`, `Prs|Tot`.

40333 tokens (13%) have a non-empty value of `PronType`.
180 types (1%) occur at least once with a non-empty value of `PronType`.
74 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [no-pos/PRON]() (23860; 8% instances), [no-pos/DET]() (16473; 5% instances).

### `PRON`

23860 [no-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (14449; 61%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (14115; 59%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (13610; 57%), <tt><a href="Person.html">Person</a>=3</tt> (12257; 51%).

`PRON` tokens may have the following values of `PronType`:

* `Art,Prs` (77; 0% of non-empty `PronType`): <em>en, ens</em>
* `Ind,Prs` (429; 2% of non-empty `PronType`): <em>noe, noen</em>
* `Int` (487; 2% of non-empty `PronType`): <em>hva, hvem, hvis, hvilket</em>
* `Neg` (47; 0% of non-empty `PronType`): <em>ingenting</em>
* `Neg,Prs` (104; 0% of non-empty `PronType`): <em>ingen</em>
* `Prs` (19126; 80% of non-empty `PronType`): <em>det, jeg, han, vi, de, seg, hun, du, dette, man</em>
* `Prs,Tot` (203; 1% of non-empty `PronType`): <em>alle, begge, enhver, samtlige, alles</em>
* `Rcp` (70; 0% of non-empty `PronType`): <em>hverandre</em>
* `Rel` (3317; 14% of non-empty `PronType`): <em>som</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (41) occur only with one value of `PronType`.

### `DET`

16473 [no-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (14378; 87%), <tt><a href="Number.html">Number</a>=Sing</tt> (12385; 75%).

`DET` tokens may have the following values of `PronType`:

* `Art` (6185; 38% of non-empty `PronType`): <em>en, et, ei, ens, at, er, ett</em>
* `Dem` (6053; 37% of non-empty `PronType`): <em>den, de, det, andre, denne, annet, disse, samme, dette, annen</em>
* `Dem,Ind` (1; 0% of non-empty `PronType`): <em>noe</em>
* `Ind` (555; 3% of non-empty `PronType`): <em>noen, noe, Endel</em>
* `Int` (104; 1% of non-empty `PronType`): <em>hvilke, hvilken, hvilket</em>
* `Neg` (197; 1% of non-empty `PronType`): <em>ingen, intet</em>
* `Prs` (2578; 16% of non-empty `PronType`): <em>sin, selv, sine, hans, sitt, min, vår, deres, egen, mitt</em>
* `Rcp` (3; 0% of non-empty `PronType`): <em>hverandres</em>
* `Tot` (797; 5% of non-empty `PronType`): <em>alle, hver, hvert, all, begge, alt, enhver, samtlige, ethvert, alles</em>

<table>
  <tr><th>Paradigm <i>den</i></th><th><tt>Prs</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Gender.html">Gender</a>=Masc</tt></td><td></td><td><em>dens</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Gender.html">Gender</a>=Fem</tt></td><td></td><td><em>dens</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td></td><td><em>den</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>den</em></td><td><em>den</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 96% lemmas (46) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/det.html">det</a>]--> DET</tt> (155; 64%),
<tt>DET --[<a href="../dep/det.html">det</a>]--> DET</tt> (81; 53%),
<tt>PRON --[<a href="../dep/expl.html">expl</a>]--> PRON</tt> (70; 75%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (30; 86%),
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> PRON</tt> (19; 95%),
<tt>DET --[<a href="../dep/nmod.html">nmod</a>]--> DET</tt> (7; 64%),
<tt>DET --[<a href="../dep/det.html">det</a>]--> PRON</tt> (5; 100%),
<tt>DET --[<a href="../dep/dobj.html">dobj</a>]--> DET</tt> (1; 100%),
<tt>PRON --[<a href="../dep/remnant.html">remnant</a>]--> PRON</tt> (1; 100%),
<tt>DET --[<a href="../dep/nsubj.html">nsubj</a>]--> DET</tt> (1; 100%).

