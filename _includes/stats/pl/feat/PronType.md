

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This feature is universal.
It occurs with 7 different values: `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

5616 tokens (8%) have a non-empty value of `PronType`.
316 types (1%) occur at least once with a non-empty value of `PronType`.
43 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [pl-pos/PRON]() (3919; 5% instances), [pl-pos/DET]() (1697; 2% instances).

### `PRON`

3919 [pl-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="PrepCase.html">PrepCase</a>=EMPTY</tt> (2861; 73%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (2802; 71%), <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (2634; 67%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (2455; 63%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (2279; 58%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (372; 9% of non-empty `PronType`): <em>to, tym, tego, temu</em>
* `Ind` (102; 3% of non-empty `PronType`): <em>coś, ktoś, czegoś, czymś, cokolwiek, kogoś, komukolwiek, komuś</em>
* `Int,Rel` (164; 4% of non-empty `PronType`): <em>co, kto, czym, kim, czego, komu, czemu, kogo</em>
* `Neg` (84; 2% of non-empty `PronType`): <em>nic, nikt, niczego, nikogo, nikomu, niczym</em>
* `Prs` (3104; 79% of non-empty `PronType`): <em>się, go, jego, ich, jej, mnie, mu, sobie, mi, ją</em>
* `Tot` (93; 2% of non-empty `PronType`): <em>wszystko, wszystkim, wszyscy, wszystkiego, wszystkich</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (18) occur only with one value of `PronType`.

### `DET`

1697 [pl-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (1519; 90%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (1499; 88%), <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (1499; 88%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (1321; 78%), <tt><a href="Number.html">Number</a>=Sing</tt> (1076; 63%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (851; 50%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (613; 36% of non-empty `PronType`): <em>ten, tej, tym, tego, te, tych, ta, to, takie, tę</em>
* `Ind` (182; 11% of non-empty `PronType`): <em>kilka, jakieś, kilku, jakiś, kilkanaście, kilkadziesiąt, kilkunastu, niektóre, jakąś, kilkuset</em>
* `Int,Rel` (358; 21% of non-empty `PronType`): <em>które, który, która, którzy, których, którym, której, którego, którą, jakie</em>
* `Neg` (32; 2% of non-empty `PronType`): <em>żaden, żadnych, żadnego, żadne, żadnej, żadna, żadnym, żadną</em>
* `Prs` (376; 22% of non-empty `PronType`): <em>swoje, swoich, swoim, naszej, swój, swojej, naszym, swoją, naszych, swych</em>
* `Tot` (136; 8% of non-empty `PronType`): <em>wszystkie, wszystkich, każdy, każdym, wszyscy, każde, każdego, wszelki, wszelkich, wszelkie</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (25) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (4; 100%),
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (2; 100%),
<tt>DET --[<a href="../dep/nsubj.html">nsubj</a>]--> DET</tt> (1; 100%),
<tt>PRON --[<a href="../dep/nmod.html">nmod</a>]--> PRON</tt> (1; 100%),
<tt>DET --[<a href="../dep/obl.html">obl</a>]--> DET</tt> (1; 100%).

