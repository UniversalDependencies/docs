

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This feature is universal.
It occurs with 2 different values: `Com`, `Neut`.

29249 tokens (29%) have a non-empty value of `Gender`.
10173 types (57%) occur at least once with a non-empty value of `Gender`.
7080 lemmas (54%) occur at least once with a non-empty value of `Gender`.
The feature is used with 5 part-of-speech tags: [da-pos/NOUN]() (18611; 18% instances), [da-pos/PRON]() (4791; 5% instances), [da-pos/DET]() (4216; 4% instances), [da-pos/ADJ]() (1611; 2% instances), [da-pos/VERB]() (20; 0% instances).

### `NOUN`

18611 [da-pos/NOUN]() tokens (99% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="Definite.html">Definite</a>=Ind</tt> (13455; 72%), <tt><a href="Number.html">Number</a>=Sing</tt> (13404; 72%).

`NOUN` tokens may have the following values of `Gender`:

* `Com` (12925; 69% of non-empty `Gender`): <em>kr., gang, dag, tid, del, mand, måde, verden, dage, gange</em>
* `Neut` (5686; 31% of non-empty `Gender`): <em>år, folk, går, par, børn, mennesker, stedet, fald, arbejde, sted</em>
* `EMPTY` (114): <em>lov, Jordens, forvejen, vest, øst, Jorden, fjor, mahogni, slut, Nord</em>

<table>
  <tr><th>Paradigm <i>dag</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>dagens</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Sing</tt></td><td><em>dags</em></td><td><em>dags</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>dages</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>dagen</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>dag</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>dage</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 100% lemmas (6540) occur only with one value of `Gender`.

### `PRON`

4791 [da-pos/PRON]() tokens (71% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="PartType.html">PartType</a>=EMPTY</tt> (4791; 100%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (3964; 83%), <tt><a href="Number.html">Number</a>=Sing</tt> (3857; 81%), <tt><a href="Person.html">Person</a>=3</tt> (2488; 52%), <tt><a href="Case.html">Case</a>=Nom</tt> (2455; 51%).

`PRON` tokens may have the following values of `Gender`:

* `Com` (3302; 69% of non-empty `Gender`): <em>han, jeg, vi, man, hun, den, du, ham, mig, os</em>
* `Neut` (1489; 31% of non-empty `Gender`): <em>det, noget, andet, dette, et, hvilket, hvert, intet, a., dét</em>
* `EMPTY` (1992): <em>der, de, sig, som, hvad, selv, dem, andre, hinanden, nogle</em>

<table>
  <tr><th>Paradigm <i>den</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Person.html">Person</a>=3|<a href="PronType.html">PronType</a>=Prs</tt></td><td></td><td><em>den</em></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Dem</tt></td><td><em>det</em></td><td><em>den</em></td></tr>
</table>

### `DET`

4216 [da-pos/DET]() tokens (76% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (4216; 100%), <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (3834; 91%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (3834; 91%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (3834; 91%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (2441; 58%).

`DET` tokens may have the following values of `Gender`:

* `Com` (2848; 68% of non-empty `Gender`): <em>en, den, sin, denne, min, ingen, anden, nogen, én, din</em>
* `Neut` (1368; 32% of non-empty `Gender`): <em>et, det, sit, noget, mit, dette, andet, intet, vort, ethvert</em>
* `EMPTY` (1304): <em>de, deres, hans, andre, nogle, hendes, sine, vores, disse, vore</em>

<table>
  <tr><th>Paradigm <i>en</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen</tt></td><td></td><td><em>ens</em></td></tr>
  <tr><td><tt></tt></td><td><em>et, ét</em></td><td><em>en, én, een</em></td></tr>
</table>

### `ADJ`

1611 [da-pos/ADJ]() tokens (25% of all `ADJ` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADJ` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (1611; 100%), <tt><a href="Degree.html">Degree</a>=Pos</tt> (1611; 100%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (1495; 93%).

`ADJ` tokens may have the following values of `Gender`:

* `Com` (1024; 64% of non-empty `Gender`): <em>stor, ny, klar, lang, god, egen, sådan, al, halv, almindelig</em>
* `Neut` (587; 36% of non-empty `Gender`): <em>alt, stort, godt, nyt, svært, muligt, eget, klart, halvt, vigtigt</em>
* `EMPTY` (4960): <em>alle, mange, danske, store, flere, samme, hele, første, nye, sidste</em>

<table>
  <tr><th>Paradigm <i>stor</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>stort</em></td><td><em>stor</em></td></tr>
</table>

### `VERB`

20 [da-pos/VERB]() tokens (0% of all `VERB` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `VERB` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (20; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (20; 100%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (20; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Ger</tt> (18; 90%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (18; 90%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (18; 90%).

`VERB` tokens may have the following values of `Gender`:

* `Com` (20; 100% of non-empty `Gender`): <em>medvirken, afventen, banken, foretrukne, formåen, fremtræden, gåen, hvislen, indgriben, mumlen</em>
* `EMPTY` (10691): <em>er, har, siger, var, få, får, fik, sagde, kommer, se</em>

`Gender` seems to be **lexical feature** of `VERB`. 100% lemmas (19) occur only with one value of `Gender`.

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (3721; 75%),
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (1940; 57%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (548; 65%),
<tt>NOUN --[<a href="../dep/nmod:poss.html">nmod:poss</a>]--> NOUN</tt> (344; 55%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (183; 56%),
<tt>NOUN --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (93; 57%),
<tt>PRON --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (74; 56%),
<tt>NOUN --[<a href="../dep/mark.html">mark</a>]--> PRON</tt> (49; 74%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (47; 51%),
<tt>NOUN --[<a href="../dep/appos.html">appos</a>]--> NOUN</tt> (33; 58%).

