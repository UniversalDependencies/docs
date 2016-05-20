

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Gothic)

This feature is universal.
It occurs with 4 different values: `Int`, `Prs`, `Rcp`, `Rel`.

7681 tokens (14%) have a non-empty value of `PronType`.
178 types (2%) occur at least once with a non-empty value of `PronType`.
47 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [got-pos/PRON]() (7131; 13% instances), [got-pos/ADV]() (550; 1% instances).

### `PRON`

7131 [got-pos/PRON]() tokens (87% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (5974; 84%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (5197; 73%), <tt><a href="Number.html">Number</a>=Sing</tt> (4801; 67%).

`PRON` tokens may have the following values of `PronType`:

* `Int` (279; 4% of non-empty `PronType`): <em>ƕa, ƕas, ƕo, ƕamma, ƕana, ƕis, ƕaþar, ƕarjis, ƕarja, ƕarjai</em>
* `Prs` (5936; 83% of non-empty `PronType`): <em>izwis, imma, ina, is, im, mis, ik, mik, jus, þus</em>
* `Rcp` (10; 0% of non-empty `PronType`): <em>anþar, anþaris, anþarana</em>
* `Rel` (906; 13% of non-empty `PronType`): <em>saei, þatei, þammei, þoei, þaiei, þanei, sei, þaimei, þizei, þizaiei</em>
* `EMPTY` (1026): <em>allai, allaim, alla, all, ƕas, sumai, allans, allamma, allata, sums</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (25) occur only with one value of `PronType`.

### `ADV`

550 [got-pos/ADV]() tokens (11% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Int` (316; 57% of non-empty `PronType`): <em>niu, ƕaiwa, ibai, u, duƕe, ƕan, ƕar, ƕaþro, ƕe, ƕaþ</em>
* `Rel` (234; 43% of non-empty `PronType`): <em>swaswe, swe, þarei, þei, þadei, ei, þan, þanei, ƕaiwa, þaþroei</em>
* `EMPTY` (4657): <em>ni, þan, jah, auk, nu, unte, swe, swa, aftra, þanuh</em>

<table>
  <tr><th>Paradigm <i>ƕaiwa</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>ƕaiwa</em></td><td><em>ƕaiwa</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `ADV`. 91% lemmas (20) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/remnant.html">remnant</a>]--> PRON</tt> (27; 93%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (19; 76%),
<tt>PRON --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (8; 80%),
<tt>PRON --[<a href="../dep/mark.html">mark</a>]--> PRON</tt> (1; 100%),
<tt>ADV --[<a href="../dep/remnant.html">remnant</a>]--> ADV</tt> (1; 100%),
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> ADV</tt> (1; 100%).

