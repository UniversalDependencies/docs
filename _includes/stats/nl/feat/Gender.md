

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This feature is universal.
It occurs with 4 different values: `Com`, `Fem`, `Masc`, `Neut`.

4646 tokens (2%) have a non-empty value of `Gender`.
133 types (1%) occur at least once with a non-empty value of `Gender`.
132 lemmas (1%) occur at least once with a non-empty value of `Gender`.
The feature is used with 3 part-of-speech tags: [nl-pos/DET]() (4052; 2% instances), [nl-pos/X]() (544; 0% instances), [nl-pos/ADP]() (50; 0% instances).

### `DET`

4052 [nl-pos/DET]() tokens (19% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="PronType.html">PronType</a>=Art</tt> (3990; 98%), <tt><a href="Definite.html">Definite</a>=Def</tt> (3959; 98%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (3959; 98%).

`DET` tokens may have the following values of `Gender`:

* `Com` (1; 0% of non-empty `Gender`): <em>den</em>
* `Fem` (20; 0% of non-empty `Gender`): <em>la, As, Les, AS, Nostra, nuestra</em>
* `Masc` (73; 2% of non-empty `Gender`): <em>tot, el, los, Els, os</em>
* `Neut` (3958; 98% of non-empty `Gender`): <em>het, 't</em>
* `EMPTY` (17204): <em>de, een, veel, meer, hoeveel, minder, weinig, der, vele, zoveel</em>

`Gender` seems to be **lexical feature** of `DET`. 100% lemmas (19) occur only with one value of `Gender`.

### `X`

544 [nl-pos/X]() tokens (13% of all `X` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `X` and `Gender` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (415; 76%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (336; 62%), <tt><a href="Number.html">Number</a>=Sing</tt> (302; 56%).

`X` tokens may have the following values of `Gender`:

* `Com` (15; 3% of non-empty `Gender`): <em>den, duur, op, aan, dag</em>
* `Neut` (529; 97% of non-empty `Gender`): <em>het, aan, voor, eerst, van, leven, op, om, meest, kader</em>
* `EMPTY` (3682): <em>van, flo, op, ten, met, voor, een, te, onder, 's</em>

<table>
  <tr><th>Paradigm <i>op</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Cmp</tt></td><td><em>op</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>op</em></td><td><em>op</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `X`. 98% lemmas (104) occur only with one value of `Gender`.

### `ADP`

50 [nl-pos/ADP]() tokens (0% of all `ADP` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADP` and `Gender` co-occurred: <tt><a href="AdpType.html">AdpType</a>=Preppron</tt> (50; 100%).

`ADP` tokens may have the following values of `Gender`:

* `Fem` (6; 12% of non-empty `Gender`): <em>da, Das</em>
* `Masc` (44; 88% of non-empty `Gender`): <em>als, al, del, do</em>
* `EMPTY` (22270): <em>van, in, te, op, met, voor, aan, door, bij, naar</em>

`Gender` seems to be **lexical feature** of `ADP`. 100% lemmas (10) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>X --[<a href="../dep/compound.html">compound</a>]--> X</tt> (283; 100%),
<tt>X --[<a href="../dep/mark.html">mark</a>]--> X</tt> (21; 100%),
<tt>X --[<a href="../dep/conj.html">conj</a>]--> X</tt> (1; 100%),
<tt>X --[<a href="../dep/nsubj.html">nsubj</a>]--> X</tt> (1; 100%),
<tt>X --[<a href="../dep/cop.html">cop</a>]--> X</tt> (1; 100%),
<tt>ADP --[<a href="../dep/det.html">det</a>]--> DET</tt> (1; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This feature is universal.
It occurs with 2 different values: `Com`, `Neut`.
Some words have combined values of the feature; 1 combinations have been observed: `Com|Neut`.

17153 tokens (19%) have a non-empty value of `Gender`.
5966 types (41%) occur at least once with a non-empty value of `Gender`.
5577 lemmas (45%) occur at least once with a non-empty value of `Gender`.
The feature is used with 2 part-of-speech tags: [nl-pos/NOUN]() (11551; 13% instances), [nl-pos/PROPN]() (5602; 6% instances).

### `NOUN`

11551 [nl-pos/NOUN]() tokens (74% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (11551; 100%).

`NOUN` tokens may have the following values of `Gender`:

* `Com` (7940; 69% of non-empty `Gender`): <em>partij, stad, eeuw, naam, regering, koning, gemeenschap, politie, provincie, finale</em>
* `Com,Neut` (29; 0% of non-empty `Gender`): <em>keer, soort, mout, Salon, cement, katoen, natuursteen, tin</em>
* `Neut` (3582; 31% of non-empty `Gender`): <em>jaar, gewest, deel, aantal, werk, parlement, museum, begin, centrum, land</em>
* `EMPTY` (4019): <em>jaren, verkiezingen, gemeenten, partijen, inwoners, leden, zetels, links, verhalen, provincies</em>

<table>
  <tr><th>Paradigm <i>stad</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>stadje</em></td><td><em>stad</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 99% lemmas (3760) occur only with one value of `Gender`.

### `PROPN`

5602 [nl-pos/PROPN]() tokens (49% of all `PROPN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PROPN` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (5602; 100%).

`PROPN` tokens may have the following values of `Gender`:

* `Com` (2536; 45% of non-empty `Gender`): <em>Wiske, Suske, Ensor, Vandersteen, oktober, juni, Boudewijn, Kuifje, VLD, CVP</em>
* `Com,Neut` (41; 1% of non-empty `Gender`): <em>Spirit, Giroux, Vivant, Andras, Bouckaert, Brouckère, Dekeyser, Den, Flickr, Marine</em>
* `Neut` (3025; 54% of non-empty `Gender`): <em>België, Brussel, Vlaanderen, Antwerpen, Hasselt, Nederland, Limburg, Luik, Agalev, Gent</em>
* `EMPTY` (5820): <em>van, de, Jan, II, Vlaams, Nederlanden, I, Kim, Clijsters, !</em>

<table>
  <tr><th>Paradigm <i>Vivant</i></th><th><tt>Com,Neut</tt></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>Vivant</em></td><td><em>Vivant</em></td><td><em>Vivant</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `PROPN`. 99% lemmas (1780) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>PROPN --[<a href="../dep/conj.html">conj</a>]--> PROPN</tt> (514; 83%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (445; 51%),
<tt>NOUN --[<a href="../dep/appos.html">appos</a>]--> NOUN</tt> (92; 50%),
<tt>NOUN --[<a href="../dep/advcl.html">advcl</a>]--> NOUN</tt> (9; 56%),
<tt>PROPN --[<a href="../dep/obj.html">obj</a>]--> PROPN</tt> (4; 80%),
<tt>PROPN --[<a href="../dep/nsubj.html">nsubj</a>]--> PROPN</tt> (3; 75%),
<tt>PROPN --[<a href="../dep/amod.html">amod</a>]--> PROPN</tt> (2; 67%),
<tt>PROPN --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> PROPN</tt> (1; 100%).

