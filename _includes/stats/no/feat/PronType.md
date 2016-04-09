

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This feature is universal.
It occurs with 4 different values: `Dem`, `Int`, `Prs`, `Rcp`.

25422 tokens (8%) have a non-empty value of `PronType`.
109 types (0%) occur at least once with a non-empty value of `PronType`.
45 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [no-pos/PRON]() (19261; 6% instances), [no-pos/DET]() (6161; 2% instances).

### `PRON`

19261 [no-pos/PRON]() tokens (81% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (14402; 75%), <tt><a href="Person.html">Person</a>=3</tt> (12257; 64%), <tt><a href="Animacy.html">Animacy</a>=Anim</tt> (9745; 51%).

`PRON` tokens may have the following values of `PronType`:

* `Int` (487; 3% of non-empty `PronType`): <em>hva, hvem, hvis, hvilket</em>
* `Prs` (18704; 97% of non-empty `PronType`): <em>det, jeg, han, vi, de, hun, du, dette, man, meg</em>
* `Rcp` (70; 0% of non-empty `PronType`): <em>hverandre</em>
* `EMPTY` (4599): <em>som, seg, ingenting, ikkenoe, jag, whatever, you</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (34) occur only with one value of `PronType`.

### `DET`

6161 [no-pos/DET]() tokens (37% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (6158; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (3683; 60%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (6054; 98% of non-empty `PronType`): <em>den, de, det, andre, denne, annet, disse, samme, dette, annen</em>
* `Int` (104; 2% of non-empty `PronType`): <em>hvilke, hvilken, hvilket</em>
* `Rcp` (3; 0% of non-empty `PronType`): <em>hverandres</em>
* `EMPTY` (10329): <em>en, et, sin, alle, noen, sine, hans, noe, sitt, selv</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (19) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>DET --[<a href="../dep/det.html">det</a>]--> DET</tt> (80; 55%),
<tt>PRON --[<a href="../dep/expl.html">expl</a>]--> PRON</tt> (79; 85%),
<tt>PRON --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (54; 73%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (32; 91%),
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> PRON</tt> (24; 100%),
<tt>PRON --[<a href="../dep/nmod.html">nmod</a>]--> PRON</tt> (23; 74%),
<tt>PRON --[<a href="../dep/det.html">det</a>]--> PRON</tt> (2; 100%),
<tt>DET --[<a href="../dep/dobj.html">dobj</a>]--> DET</tt> (1; 100%),
<tt>DET --[<a href="../dep/nsubj.html">nsubj</a>]--> DET</tt> (1; 100%),
<tt>PRON --[<a href="../dep/remnant.html">remnant</a>]--> PRON</tt> (1; 100%).

