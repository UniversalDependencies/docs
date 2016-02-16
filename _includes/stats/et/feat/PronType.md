

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This feature is universal.
It occurs with 8 different values: `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rcp`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Ind|Neg`.

523 tokens (6%) have a non-empty value of `PronType`.
141 types (4%) occur at least once with a non-empty value of `PronType`.
88 lemmas (2%) occur at least once with a non-empty value of `PronType`.
The feature is used with 1 part-of-speech tags: [et-pos/PRON]() (523; 6% instances).

### `PRON`

523 [et-pos/PRON]() tokens (98% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (446; 85%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (422; 81%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (80; 15% of non-empty `PronType`): <em>see, seda, selle, üks, samal, sellega, too, nende, sellesama, teise</em>
* `Ind,Neg` (60; 11% of non-empty `PronType`): <em>mitu, keegi, midagi, mõned, mõne, mingisse, Muist, Teised, igasuguseid, kedagi</em>
* `Int` (8; 2% of non-empty `PronType`): <em>mis, mitu, Kumb, kelle, kes, milline</em>
* `Prs` (330; 63% of non-empty `PronType`): <em>ta, oma, nad, ma, tema, end, mu, mind, minu, talle</em>
* `Rcp` (1; 0% of non-empty `PronType`): <em>üksteisele</em>
* `Rel` (29; 6% of non-empty `PronType`): <em>mis, kes, mida, mille, kelle, kel, kellelt, millega</em>
* `Tot` (15; 3% of non-empty `PronType`): <em>kõik, iga, igal, Mõlema, Mõlemad, igale, kõigi, kõikidest</em>
* `EMPTY` (11): <em>Ta, end, Meile, Nende, meist, oma, teise, tema, ühest</em>

<table>
  <tr><th>Paradigm <i>mitu+0</i></th><th><tt>Ind,Neg</tt></th><th><tt>Int</tt></th></tr>
  <tr><td><tt></tt></td><td></td><td><em>mitu</em></td></tr>
  <tr><td><tt><a href="Poss.html">Poss</a>=Yes</tt></td><td><em>mitu</em></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 94% lemmas (83) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (1; 100%),
<tt>PRON --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (1; 100%).

