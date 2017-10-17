

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Int`, `Prs`, `Rel`.

37504 tokens (16%) have a non-empty value of `PronType`.
129 types (1%) occur at least once with a non-empty value of `PronType`.
54 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [en-pos/PRON]() (19624; 9% instances), [en-pos/DET]() (16210; 7% instances), [en-pos/ADV]() (1670; 1% instances).

### `PRON`

19624 [en-pos/PRON]() tokens (94% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (16287; 83%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (15194; 77%), <tt><a href="Number.html">Number</a>=Sing</tt> (10792; 55%), <tt><a href="Case.html">Case</a>=Nom</tt> (10614; 54%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (1; 0% of non-empty `PronType`): <em>The</em>
* `Dem` (908; 5% of non-empty `PronType`): <em>this, that, those, these</em>
* `Int` (626; 3% of non-empty `PronType`): <em>what, which, who, whom, whatever, whose, who's, ever, waht, whoever</em>
* `Prs` (16906; 86% of non-empty `PronType`): <em>i, you, it, they, my, we, he, your, me, their</em>
* `Rel` (1183; 6% of non-empty `PronType`): <em>that, who, which, whom, what, whose</em>
* `EMPTY` (1171): <em>there, anyone, something, anything, nothing, someone, everything, everyone, one, mine</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td><em>that</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>that</em></td></tr>
</table>

### `DET`

16210 [en-pos/DET]() tokens (89% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Definite.html">Definite</a>=Def</tt> (10043; 62%).

`DET` tokens may have the following values of `PronType`:

* `Art` (14824; 91% of non-empty `PronType`): <em>the, a, an</em>
* `Dem` (1278; 8% of non-empty `PronType`): <em>this, that, these, those</em>
* `Int` (107; 1% of non-empty `PronType`): <em>what, which, whatever</em>
* `Rel` (1; 0% of non-empty `PronType`): <em>whhich</em>
* `EMPTY` (1970): <em>all, some, any, no, another, every, each, both, such, quite</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (10) occur only with one value of `PronType`.

### `ADV`

1670 [en-pos/ADV]() tokens (14% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (693; 41% of non-empty `PronType`): <em>then, there, here, that</em>
* `Int` (876; 52% of non-empty `PronType`): <em>when, how, where, why, whenever, ever, wherever, however, were, y</em>
* `Rel` (101; 6% of non-empty `PronType`): <em>where, that, when, why, how, were, wherein</em>
* `EMPTY` (10144): <em>so, just, very, also, now, even, only, as, back, well</em>

<table>
  <tr><th>Paradigm <i>when</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>when</em></td><td><em>when</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (27; 73%),
<tt>DET --[<a href="../dep/det.html">det</a>]--> DET</tt> (11; 85%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (5; 56%),
<tt>PRON --[<a href="../dep/nmod:npmod.html">nmod:npmod</a>]--> PRON</tt> (3; 100%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (2; 100%),
<tt>PRON --[<a href="../dep/nmod:poss.html">nmod:poss</a>]--> PRON</tt> (2; 100%),
<tt>PRON --[<a href="../dep/parataxis.html">parataxis</a>]--> PRON</tt> (1; 100%),
<tt>PRON --[<a href="../dep/obl.html">obl</a>]--> PRON</tt> (1; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This feature is universal.
It occurs with 8 different values: `Art`, `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.

5528 tokens (15%) have a non-empty value of `PronType`.
120 types (2%) occur at least once with a non-empty value of `PronType`.
68 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [en-pos/DET]() (4015; 11% instances), [en-pos/PRON]() (1498; 4% instances), [en-pos/ADV]() (15; 0% instances).

### `DET`

4015 [en-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (3501; 87%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (2837; 71%), <tt><a href="Definite.html">Definite</a>=Def</tt> (2213; 55%).

`DET` tokens may have the following values of `PronType`:

* `Art` (2991; 74% of non-empty `PronType`): <em>the, a, an, another, Le, L, la, les, une, ’s</em>
* `Dem` (298; 7% of non-empty `PronType`): <em>this, these, such, that, those</em>
* `Ind` (169; 4% of non-empty `PronType`): <em>any, no, some, each, both, every, whatever, Many, certain, more</em>
* `Int` (4; 0% of non-empty `PronType`): <em>what, which</em>
* `Prs` (514; 13% of non-empty `PronType`): <em>his, their, its, our, your, my, her, ma</em>
* `Rel` (1; 0% of non-empty `PronType`): <em>which</em>
* `Tot` (38; 1% of non-empty `PronType`): <em>all</em>

<table>
  <tr><th>Paradigm <i>which</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>which</em></td><td><em>which</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 97% lemmas (37) occur only with one value of `PronType`.

### `PRON`

1498 [en-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1303; 87%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (116; 8% of non-empty `PronType`): <em>this, that, those, these</em>
* `Ind` (100; 7% of non-empty `PronType`): <em>all, some, others, each, nothing, Many, other, one, Much, both</em>
* `Int` (13; 1% of non-empty `PronType`): <em>what, who</em>
* `Prs` (935; 62% of non-empty `PronType`): <em>it, he, I, we, they, you, them, him, everyone, one</em>
* `Rel` (334; 22% of non-empty `PronType`): <em>which, that, who, what, where, whom, whose, when, whereby</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td><em>that</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>that</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td></td><td><em>that</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>those</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3</tt></td><td></td><td><em>those</em></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=3</tt></td><td></td><td><em>that</em></td></tr>
</table>

### `ADV`

15 [en-pos/ADV]() tokens (1% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Neg` (15; 100% of non-empty `PronType`): <em>non, no, none</em>
* `EMPTY` (1501): <em>more, also, there, now, only, well, so, how, as, even</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (1; 100%).

