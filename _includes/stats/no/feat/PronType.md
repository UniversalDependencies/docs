

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Bokmaal)

This feature is universal.
It occurs with 9 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.
Some words have combined values of the feature; 5 combinations have been observed: `Art|Prs`, `Dem|Ind`, `Ind|Prs`, `Neg|Prs`, `Prs|Tot`.

36525 tokens (13%) have a non-empty value of `PronType`.
178 types (1%) occur at least once with a non-empty value of `PronType`.
71 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [no-pos/PRON]() (21512; 8% instances), [no-pos/DET]() (15013; 5% instances).

### `PRON`

21512 [no-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (12980; 60%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (12790; 59%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (12348; 57%), <tt><a href="Person.html">Person</a>=3</tt> (10990; 51%).

`PRON` tokens may have the following values of `PronType`:

* `Art,Prs` (71; 0% of non-empty `PronType`): <em>en, ens</em>
* `Ind,Prs` (388; 2% of non-empty `PronType`): <em>noe, noen</em>
* `Int` (451; 2% of non-empty `PronType`): <em>hva, hvem, hvis, hvilket</em>
* `Neg` (41; 0% of non-empty `PronType`): <em>ingenting</em>
* `Neg,Prs` (95; 0% of non-empty `PronType`): <em>ingen</em>
* `Prs` (17195; 80% of non-empty `PronType`): <em>det, jeg, han, vi, de, seg, hun, du, dette, man</em>
* `Prs,Tot` (185; 1% of non-empty `PronType`): <em>alle, begge, enhver, samtlige</em>
* `Rcp` (67; 0% of non-empty `PronType`): <em>hverandre</em>
* `Rel` (3019; 14% of non-empty `PronType`): <em>som</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (39) occur only with one value of `PronType`.

### `DET`

15013 [no-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (13075; 87%), <tt><a href="Number.html">Number</a>=Sing</tt> (11294; 75%).

`DET` tokens may have the following values of `PronType`:

* `Art` (5621; 37% of non-empty `PronType`): <em>en, et, ei, at, ens, er, ett</em>
* `Dem` (5508; 37% of non-empty `PronType`): <em>den, de, det, andre, denne, annet, samme, disse, dette, annen</em>
* `Dem,Ind` (1; 0% of non-empty `PronType`): <em>noe</em>
* `Ind` (504; 3% of non-empty `PronType`): <em>noen, noe, Endel</em>
* `Int` (94; 1% of non-empty `PronType`): <em>hvilke, hvilken, hvilket</em>
* `Neg` (178; 1% of non-empty `PronType`): <em>ingen, intet</em>
* `Prs` (2391; 16% of non-empty `PronType`): <em>sin, selv, sine, hans, sitt, min, vår, deres, egen, mitt</em>
* `Rcp` (3; 0% of non-empty `PronType`): <em>hverandres</em>
* `Tot` (713; 5% of non-empty `PronType`): <em>alle, hvert, hver, all, begge, alt, enhver, samtlige, ethvert, alles</em>

<table>
  <tr><th>Paradigm <i>den</i></th><th><tt>Prs</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Gender.html">Gender</a>=Masc</tt></td><td></td><td><em>dens</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Gender.html">Gender</a>=Fem</tt></td><td></td><td><em>dens</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc</tt></td><td></td><td><em>den</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem</tt></td><td><em>den</em></td><td><em>den</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 96% lemmas (45) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/det.html">det</a>]--> DET</tt> (147; 65%),
<tt>DET --[<a href="../dep/det.html">det</a>]--> DET</tt> (76; 54%),
<tt>PRON --[<a href="../dep/expl.html">expl</a>]--> PRON</tt> (62; 75%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (28; 88%),
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> PRON</tt> (15; 94%),
<tt>DET --[<a href="../dep/nmod.html">nmod</a>]--> DET</tt> (7; 78%),
<tt>DET --[<a href="../dep/det.html">det</a>]--> PRON</tt> (5; 100%),
<tt>DET --[<a href="../dep/nsubj.html">nsubj</a>]--> DET</tt> (1; 100%),
<tt>DET --[<a href="../dep/orphan.html">orphan</a>]--> DET</tt> (1; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Nynorsk)

This feature is universal.
It occurs with 9 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.
Some words have combined values of the feature; 4 combinations have been observed: `Art|Prs`, `Ind|Prs`, `Neg|Prs`, `Prs|Tot`.

34772 tokens (13%) have a non-empty value of `PronType`.
171 types (1%) occur at least once with a non-empty value of `PronType`.
72 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [no-pos/PRON]() (19624; 7% instances), [no-pos/DET]() (15147; 5% instances), [no-pos/NUM]() (1; 0% instances).

### `PRON`

19624 [no-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (13352; 68%), <tt><a href="Number.html">Number</a>=Sing</tt> (12283; 63%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (11103; 57%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (10987; 56%), <tt><a href="Person.html">Person</a>=3</tt> (10332; 53%).

`PRON` tokens may have the following values of `PronType`:

* `Art,Prs` (767; 4% of non-empty `PronType`): <em>ein, ei</em>
* `Ind,Prs` (337; 2% of non-empty `PronType`): <em>noko, nokon</em>
* `Int` (323; 2% of non-empty `PronType`): <em>kva, kven</em>
* `Neg` (25; 0% of non-empty `PronType`): <em>ingenting</em>
* `Neg,Prs` (53; 0% of non-empty `PronType`): <em>ingen</em>
* `Prs` (14782; 75% of non-empty `PronType`): <em>det, dei, han, eg, vi, seg, dette, ho, me, du</em>
* `Prs,Tot` (137; 1% of non-empty `PronType`): <em>alle, begge</em>
* `Rcp` (44; 0% of non-empty `PronType`): <em>kvarandre</em>
* `Rel` (3156; 16% of non-empty `PronType`): <em>som</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (33) occur only with one value of `PronType`.

### `DET`

15147 [no-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (11447; 76%).

`DET` tokens may have the following values of `PronType`:

* `Art` (5401; 36% of non-empty `PronType`): <em>ein, eit, ei, eitt, eir, en</em>
* `Dem` (6422; 42% of non-empty `PronType`): <em>den, dei, det, andre, denne, anna, same, dette, desse, slike</em>
* `Ind` (420; 3% of non-empty `PronType`): <em>noko, nokre, nokon, noka, nokor</em>
* `Int` (96; 1% of non-empty `PronType`): <em>kva</em>
* `Neg` (128; 1% of non-empty `PronType`): <em>ingen, inga</em>
* `Prs` (1910; 13% of non-empty `PronType`): <em>sjølv, sin, sine, sitt, si, hans, vår, eigen, sjølve, våre</em>
* `Tot` (770; 5% of non-empty `PronType`): <em>alle, kvar, kvart, all, alt, begge, einkvar</em>

<table>
  <tr><th>Paradigm <i>det</i></th><th><tt>Prs</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen</tt></td><td></td><td><em>dets</em></td></tr>
  <tr><td><tt></tt></td><td><em>det</em></td><td><em>det, dét</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 98% lemmas (51) occur only with one value of `PronType`.

### `NUM`

1 [no-pos/NUM]() tokens (0% of all `NUM` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `NUM` and `PronType` co-occurred: <tt><a href="NumType.html">NumType</a>=Card</tt> (1; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (1; 100%).

`NUM` tokens may have the following values of `PronType`:

* `Dem` (1; 100% of non-empty `PronType`): <em>fem-seks</em>
* `EMPTY` (3648): <em>to, tre, fire, ti, fem, 20, 2006, einaste, 2005, seks</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/det.html">det</a>]--> DET</tt> (113; 67%),
<tt>DET --[<a href="../dep/det.html">det</a>]--> DET</tt> (82; 60%),
<tt>PRON --[<a href="../dep/expl.html">expl</a>]--> PRON</tt> (49; 71%),
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> PRON</tt> (23; 96%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (22; 100%),
<tt>PRON --[<a href="../dep/nmod.html">nmod</a>]--> PRON</tt> (12; 67%),
<tt>DET --[<a href="../dep/nmod.html">nmod</a>]--> DET</tt> (8; 100%),
<tt>DET --[<a href="../dep/flat:name.html">flat:name</a>]--> DET</tt> (1; 100%).

