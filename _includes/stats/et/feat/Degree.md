

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

16316 tokens (7%) have a non-empty value of `Degree`.
8173 types (16%) occur at least once with a non-empty value of `Degree`.
4248 lemmas (16%) occur at least once with a non-empty value of `Degree`.
The feature is used with 3 part-of-speech tags: [et-pos/ADJ]() (16252; 7% instances), [et-pos/PRON]() (61; 0% instances), [et-pos/ADV]() (3; 0% instances).

### `ADJ`

16252 [et-pos/ADJ]() tokens (84% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (12862; 79%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (12752; 78%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (12749; 78%), <tt><a href="Number.html">Number</a>=Sing</tt> (10739; 66%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (1396; 9% of non-empty `Degree`): <em>suurem, suurema, parem, väiksem, suuremad, suuremat, kõrgem, lihtsam, paremaks, kõrgema</em>
* `Pos` (14626; 90% of non-empty `Degree`): <em>kogu, suur, hea, võimalik, uue, eri, raske, suure, uus, valmis</em>
* `Sup` (230; 1% of non-empty `Degree`): <em>suurim, parim, parimaks, suurima, Tuntuimad, parima, parimad, suurimad, suurimaid, suurimaks</em>
* `EMPTY` (3169): <em>sama, iga, eesti, selline, esimene, igal, mingi, samal, mingit, muud</em>

`Degree` seems to be **lexical feature** of `ADJ`. 100% lemmas (4244) occur only with one value of `Degree`.

### `PRON`

61 [et-pos/PRON]() tokens (0% of all `PRON` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `PRON` and `Degree` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (61; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (61; 100%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (33; 54%).

`PRON` tokens may have the following values of `Degree`:

* `Pos` (61; 100% of non-empty `Degree`): <em>iseenda, üksteist, iseendale, teineteist, iseendaks, iseennast, teineteisele, teineteisest, üksteisel, iseendast</em>
* `EMPTY` (15616): <em>ta, see, oma, mis, ma, kes, seda, selle, tema, nad</em>

### `ADV`

3 [et-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `Degree`.

`ADV` tokens may have the following values of `Degree`:

* `Pos` (3; 100% of non-empty `Degree`): <em>va</em>
* `EMPTY` (23680): <em>ka, siis, nii, kas, juba, välja, veel, mitte, ära, kus</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (673; 93%),
<tt>ADJ --[<a href="../dep/dep.html">dep</a>]--> ADJ</tt> (25; 76%),
<tt>ADJ --[<a href="../dep/xcomp.html">xcomp</a>]--> ADJ</tt> (14; 82%),
<tt>ADJ --[<a href="../dep/parataxis.html">parataxis</a>]--> ADJ</tt> (12; 71%),
<tt>ADJ --[<a href="../dep/csubj.html">csubj</a>]--> ADJ</tt> (3; 60%),
<tt>ADJ --[<a href="../dep/amod.html">amod</a>]--> ADV</tt> (1; 100%).

