

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Gothic)

This feature is universal.
It occurs with 4 different values: `Int`, `Prs`, `Rcp`, `Rel`.

5104 tokens (11%) have a non-empty value of `PronType`.
112 types (1%) occur at least once with a non-empty value of `PronType`.
40 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [got-pos/PRON]() (4652; 10% instances), [got-pos/ADV]() (452; 1% instances).

### `PRON`

4652 [got-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Gender.html">Gender</a>=Masc</tt> (3733; 80%), <tt><a href="Number.html">Number</a>=Sing</tt> (3051; 66%).

`PRON` tokens may have the following values of `PronType`:

* `Int` (215; 5% of non-empty `PronType`): <em>ƕa, ƕas, ƕo, ƕamma, ƕis, ƕaþar, ƕarjis, ƕana, ƕarja, ƕarjai</em>
* `Prs` (3703; 80% of non-empty `PronType`): <em>izwis, imma, is, ina, im, mis, ik, mik, jus, þus</em>
* `Rcp` (10; 0% of non-empty `PronType`): <em>anþar, anþaris, anþarana</em>
* `Rel` (724; 16% of non-empty `PronType`): <em>saei, þatei, þammei, þoei, þaiei, þanei, sei, þizei, þaimei, þanzei</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (19) occur only with one value of `PronType`.

### `ADV`

452 [got-pos/ADV]() tokens (11% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (452; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int` (254; 56% of non-empty `PronType`): <em>niu, ƕaiwa, ibai, u, duƕe, ƕan, ƕar, ƕaþro, ƕe, ƕaþ</em>
* `Rel` (198; 44% of non-empty `PronType`): <em>swaswe, swe, þarei, þei, þadei, ei, þan, þanei, ƕaiwa, þaþroei</em>
* `EMPTY` (3726): <em>ni, þan, jah, auk, nu, unte, swe, swa, þanuh, aftra</em>

<table>
  <tr><th>Paradigm <i>ƕaiwa</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>ƕaiwa</em></td><td><em>ƕaiwa</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `ADV`. 95% lemmas (20) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/det.html">det</a>]--> PRON</tt> (48; 98%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (14; 100%),
<tt>PRON --[<a href="../dep/orphan.html">orphan</a>]--> PRON</tt> (8; 100%),
<tt>PRON --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (7; 100%),
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> ADV</tt> (1; 100%).

