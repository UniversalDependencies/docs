

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This feature is universal.
It occurs with 2 different values: `Com`, `Neut`.

26378 tokens (29%) have a non-empty value of `Gender`.
9448 types (57%) occur at least once with a non-empty value of `Gender`.
6626 lemmas (54%) occur at least once with a non-empty value of `Gender`.
The feature is used with 5 part-of-speech tags: [da-pos/NOUN]() (16798; 19% instances), [da-pos/PRON]() (4302; 5% instances), [da-pos/DET]() (3816; 4% instances), [da-pos/ADJ]() (1460; 2% instances), [da-pos/VERB]() (2; 0% instances).

### `NOUN`

16798 [da-pos/NOUN]() tokens (99% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="Definite.html">Definite</a>=Ind</tt> (12183; 73%), <tt><a href="Number.html">Number</a>=Sing</tt> (12076; 72%).

`NOUN` tokens may have the following values of `Gender`:

* `Com` (11650; 69% of non-empty `Gender`): <em>kr., gang, dag, tid, del, mand, måde, verden, række, gange</em>
* `Neut` (5148; 31% of non-empty `Gender`): <em>år, folk, går, børn, par, mennesker, stedet, fald, arbejde, problemer</em>
* `EMPTY` (104): <em>lov, forvejen, Jordens, vest, øst, Jorden, fjor, mahogni, slut, Nord</em>

<table>
  <tr><th>Paradigm <i>dag</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>dagens</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Sing</tt></td><td><em>dags</em></td><td><em>dags</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>dages</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>dagen</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>dag</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>dage</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 100% lemmas (6129) occur only with one value of `Gender`.

### `PRON`

4302 [da-pos/PRON]() tokens (70% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="PartType.html">PartType</a>=EMPTY</tt> (4302; 100%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (3536; 82%), <tt><a href="Number.html">Number</a>=Sing</tt> (3480; 81%), <tt><a href="Person.html">Person</a>=3</tt> (2239; 52%), <tt><a href="Case.html">Case</a>=Nom</tt> (2207; 51%).

`PRON` tokens may have the following values of `Gender`:

* `Com` (2960; 69% of non-empty `Gender`): <em>han, jeg, vi, man, hun, den, du, mig, ham, os</em>
* `Neut` (1342; 31% of non-empty `Gender`): <em>det, noget, andet, et, dette, hvilket, hvert, intet, a., dét</em>
* `EMPTY` (1808): <em>der, de, sig, som, hvad, dem, selv, andre, hinanden, nogle</em>

<table>
  <tr><th>Paradigm <i>den</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Person.html">Person</a>=3|<a href="PronType.html">PronType</a>=Prs</tt></td><td></td><td><em>den</em></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Dem</tt></td><td><em>det</em></td><td><em>den</em></td></tr>
</table>

### `DET`

3816 [da-pos/DET]() tokens (76% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (3816; 100%), <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (3482; 91%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (3482; 91%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (3482; 91%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (2209; 58%).

`DET` tokens may have the following values of `Gender`:

* `Com` (2581; 68% of non-empty `Gender`): <em>en, den, sin, denne, min, ingen, anden, nogen, én, din</em>
* `Neut` (1235; 32% of non-empty `Gender`): <em>et, det, sit, noget, mit, dette, andet, ethvert, intet, vort</em>
* `EMPTY` (1189): <em>de, deres, hans, andre, hendes, nogle, sine, vores, disse, vore</em>

<table>
  <tr><th>Paradigm <i>en</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen</tt></td><td></td><td><em>ens</em></td></tr>
  <tr><td><tt></tt></td><td><em>et, ét</em></td><td><em>en, én, een</em></td></tr>
</table>

### `ADJ`

1460 [da-pos/ADJ]() tokens (25% of all `ADJ` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADJ` and `Gender` co-occurred: <tt><a href="Degree.html">Degree</a>=Pos</tt> (1460; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (1460; 100%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (1355; 93%).

`ADJ` tokens may have the following values of `Gender`:

* `Com` (927; 63% of non-empty `Gender`): <em>stor, ny, klar, lang, god, egen, sådan, al, almindelig, halv</em>
* `Neut` (533; 37% of non-empty `Gender`): <em>alt, stort, godt, nyt, svært, klart, muligt, eget, halvt, vigtigt</em>
* `EMPTY` (4473): <em>alle, mange, danske, store, hele, flere, nye, første, sidste, samme</em>

<table>
  <tr><th>Paradigm <i>stor</i></th><th><tt>Neut</tt></th><th><tt>Com</tt></th></tr>
  <tr><td><tt></tt></td><td><em>stort</em></td><td><em>stor</em></td></tr>
</table>

### `VERB`

2 [da-pos/VERB]() tokens (0% of all `VERB` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `VERB` and `Gender` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (2; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (2; 100%), <tt><a href="Definite.html">Definite</a>=Def</tt> (2; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (2; 100%), <tt><a href="Tense.html">Tense</a>=Past</tt> (2; 100%), <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (2; 100%).

`VERB` tokens may have the following values of `Gender`:

* `Com` (2; 100% of non-empty `Gender`): <em>foretrukne, udskårne</em>
* `EMPTY` (9605): <em>er, har, siger, få, var, får, sagde, fik, kommer, se</em>

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (3398; 75%),
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (1694; 57%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (574; 64%),
<tt>NOUN --[<a href="../dep/nmod:poss.html">nmod:poss</a>]--> NOUN</tt> (319; 57%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (168; 57%),
<tt>NOUN --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (97; 59%),
<tt>PRON --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (68; 56%),
<tt>NOUN --[<a href="../dep/mark.html">mark</a>]--> PRON</tt> (46; 74%),
<tt>NOUN --[<a href="../dep/appos.html">appos</a>]--> NOUN</tt> (32; 58%),
<tt>PRON --[<a href="../dep/nsubj.html">nsubj</a>]--> PRON</tt> (26; 53%).

