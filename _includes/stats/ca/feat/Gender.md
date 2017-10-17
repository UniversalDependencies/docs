

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This feature is universal.
It occurs with 2 different values: `Fem`, `Masc`.

172694 tokens (36%) have a non-empty value of `Gender`.
13656 types (45%) occur at least once with a non-empty value of `Gender`.
9446 lemmas (43%) occur at least once with a non-empty value of `Gender`.
The feature is used with 11 part-of-speech tags: [ca-pos/NOUN]() (76254; 16% instances), [ca-pos/DET]() (54496; 11% instances), [ca-pos/ADJ]() (17981; 4% instances), [ca-pos/ADP]() (13069; 3% instances), [ca-pos/VERB]() (6000; 1% instances), [ca-pos/PRON]() (2910; 1% instances), [ca-pos/NUM]() (1219; 0% instances), [ca-pos/AUX]() (707; 0% instances), [ca-pos/ADV]() (56; 0% instances), [ca-pos/PROPN]() (1; 0% instances), [ca-pos/SYM]() (1; 0% instances).

### `NOUN`

76254 [ca-pos/NOUN]() tokens (87% of all `NOUN` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NOUN` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (52983; 69%).

`NOUN` tokens may have the following values of `Gender`:

* `Fem` (36865; 48% of non-empty `Gender`): <em>persones, empresa, obres, ciutat, zona, obra, cosa, llei, situació, banda</em>
* `Masc` (39389; 52% of non-empty `Gender`): <em>anys, milions, any, president, temps, grup, projecte, cas, partit, mesos</em>
* `EMPTY` (11826): <em>pessetes, any, través, cap, euros, part, juny, partir, dia, fa</em>

<table>
  <tr><th>Paradigm <i>final</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>final</em></td><td><em>final</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>finals</em></td><td><em>finals</em></td></tr>
</table>

`Gender` seems to be **lexical feature** of `NOUN`. 99% lemmas (6260) occur only with one value of `Gender`.

### `DET`

54496 [ca-pos/DET]() tokens (84% of all `DET` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `DET` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (41987; 77%), <tt><a href="PronType.html">PronType</a>=Art</tt> (38813; 71%), <tt><a href="Definite.html">Definite</a>=Def</tt> (34911; 64%).

`DET` tokens may have the following values of `Gender`:

* `Fem` (29862; 55% of non-empty `Gender`): <em>la, les, una, seva, aquesta, seves, aquestes, totes, altra, tota</em>
* `Masc` (24634; 45% of non-empty `Gender`): <em>el, els, un, aquest, seu, seus, aquests, tots, tot, mateix</em>
* `EMPTY` (10133): <em>l', altres, cap, cada, diferents, qualsevol, qual, nostres, meva, gaire</em>

<table>
  <tr><th>Paradigm <i>el</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>el</em></td><td><em>la, L'</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>els</em></td><td><em>les</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>el</em></td><td><em>la</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Poss.html">Poss</a>=Yes|<a href="PronType.html">PronType</a>=Prs</tt></td><td></td><td><em>les</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Art</tt></td><td><em>els</em></td><td><em>les</em></td></tr>
</table>

### `ADJ`

17981 [ca-pos/ADJ]() tokens (67% of all `ADJ` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADJ` and `Gender` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (13023; 72%), <tt><a href="Number.html">Number</a>=Sing</tt> (12501; 70%).

`ADJ` tokens may have the following values of `Gender`:

* `Fem` (8079; 45% of non-empty `Gender`): <em>primera, nova, catalana, noves, política, segona, única, pública, catalanes, bona</em>
* `Masc` (9902; 55% of non-empty `Gender`): <em>passat, primer, nou, espanyol, nous, català, públic, polític, últims, primers</em>
* `EMPTY` (8809): <em>gran, general, grans, actual, important, social, possible, baix, municipal, anterior</em>

<table>
  <tr><th>Paradigm <i>nou</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>nou</em></td><td><em>nova</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>nous</em></td><td><em>noves</em></td></tr>
</table>

### `ADP`

13069 [ca-pos/ADP]() tokens (17% of all `ADP` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADP` and `Gender` co-occurred: <tt><a href="AdpType.html">AdpType</a>=Preppron</tt> (13069; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (9658; 74%).

`ADP` tokens may have the following values of `Gender`:

* `Fem` (2; 0% of non-empty `Gender`): <em>da</em>
* `Masc` (13067; 100% of non-empty `Gender`): <em>del, al, dels, als, pel, pels, DO</em>
* `EMPTY` (65299): <em>de, a, d', en, per, amb, entre, sobre, segons, des</em>

`Gender` seems to be **lexical feature** of `ADP`. 100% lemmas (12) occur only with one value of `Gender`.

### `VERB`

6000 [ca-pos/VERB]() tokens (17% of all `VERB` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `VERB` and `Gender` co-occurred: <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (6000; 100%), <tt><a href="Tense.html">Tense</a>=Past</tt> (6000; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (6000; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (6000; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (5783; 96%).

`VERB` tokens may have the following values of `Gender`:

* `Fem` (291; 5% of non-empty `Gender`): <em>dictada, aprovada, considerada, presentada, donada, inclosa, inaugurada, atesa, coneguda, convidada</em>
* `Masc` (5709; 95% of non-empty `Gender`): <em>fet, explicat, dit, presentat, tingut, assegurat, passat, demanat, destacat, assenyalat</em>
* `EMPTY` (29753): <em>fer, té, ha, tenir, dir, donar, tenen, arribar, fa, considera</em>

<table>
  <tr><th>Paradigm <i>fer</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>fet</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>fetes</em></td></tr>
</table>

### `PRON`

2910 [ca-pos/PRON]() tokens (14% of all `PRON` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `PRON` and `Gender` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (2210; 76%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (1971; 68%).

`PRON` tokens may have the following values of `Gender`:

* `Fem` (811; 28% of non-empty `Gender`): <em>la, una, les, aquesta, altra, unes, ella, algunes, totes, elles</em>
* `Masc` (2099; 72% of non-empty `Gender`): <em>un, tot, el, ell, lo, uns, ells, alguns, aquest, tots</em>
* `EMPTY` (17985): <em>que, es, s', hi, se, li, on, què, això, ho</em>

<table>
  <tr><th>Paradigm <i>ell</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>el, lo, 'l, li</em></td><td><em>la, -la</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Plur</tt></td><td><em>els, 'ls</em></td><td><em>les</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>ell</em></td><td><em>ella</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>ells, els</em></td><td><em>elles</em></td></tr>
</table>

### `NUM`

1219 [ca-pos/NUM]() tokens (15% of all `NUM` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `NUM` and `Gender` co-occurred: <tt><a href="NumForm.html">NumForm</a>=EMPTY</tt> (1219; 100%), <tt><a href="NumType.html">NumType</a>=Card</tt> (1219; 100%), <tt><a href="Number.html">Number</a>=Plur</tt> (790; 65%).

`NUM` tokens may have the following values of `Gender`:

* `Fem` (451; 37% of non-empty `Gender`): <em>dues, una, mitja, ambdues, desena, Desenes, Vuit-centes, cinquena, dues-centes, primera</em>
* `Masc` (768; 63% of non-empty `Gender`): <em>dos, un, mig, ambdós, tercer, quart, 2, centenars, cinc-cents, desè</em>
* `EMPTY` (7032): <em>tres, quatre, cent, 10, cinc, sis, 15, vuit, nou, 30</em>

<table>
  <tr><th>Paradigm <i>dos</i></th><th><tt>Masc</tt></th><th><tt>Fem</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>dos</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>dos</em></td><td><em>dues</em></td></tr>
  <tr><td><tt></tt></td><td><em>dos</em></td><td></td></tr>
</table>

### `AUX`

707 [ca-pos/AUX]() tokens (3% of all `AUX` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `AUX` and `Gender` co-occurred: <tt><a href="Tense.html">Tense</a>=Past</tt> (707; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (707; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (707; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (707; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (694; 98%).

`AUX` tokens may have the following values of `Gender`:

* `Fem` (9; 1% of non-empty `Gender`): <em>aprovada, controlades, declarades, endeutada, investigada, investigades, presentades, remodelada, sostreta</em>
* `Masc` (698; 99% of non-empty `Gender`): <em>estat, pogut, hagut, fet, començat, tornat, volgut, anat, deixat, arribat</em>
* `EMPTY` (20807): <em>va, ha, és, van, han, ser, són, està, havia, pot</em>

`Gender` seems to be **lexical feature** of `AUX`. 100% lemmas (56) occur only with one value of `Gender`.

### `ADV`

56 [ca-pos/ADV]() tokens (0% of all `ADV` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `ADV` and `Gender` co-occurred: <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (56; 100%).

`ADV` tokens may have the following values of `Gender`:

* `Masc` (56; 100% of non-empty `Gender`): <em>més, fins, enfront, entorn, enllà, quant, prop, enmig</em>
* `EMPTY` (13805): <em>no, més, també, ja, després, ahir, avui, molt, només, ara</em>

### `SYM`

1 [ca-pos/SYM]() tokens (0% of all `SYM` tokens) have a non-empty value of `Gender`.

The most frequent other feature values with which `SYM` and `Gender` co-occurred: <tt><a href="NumForm.html">NumForm</a>=EMPTY</tt> (1; 100%), <tt><a href="NumType.html">NumType</a>=EMPTY</tt> (1; 100%).

`SYM` tokens may have the following values of `Gender`:

* `Masc` (1; 100% of non-empty `Gender`): <em>1%</em>
* `EMPTY` (4044): <em>', %, 50%, 10%, 30%, 40%, 1%, 2%, 20%, 25%</em>

### `PROPN`

1 [ca-pos/PROPN]() tokens (0% of all `PROPN` tokens) have a non-empty value of `Gender`.

`PROPN` tokens may have the following values of `Gender`:

* `Masc` (1; 100% of non-empty `Gender`): <em>Justícia</em>
* `EMPTY` (41152): <em>Catalunya, Barcelona, Generalitat, Govern, sant, Ajuntament, Girona, CiU, PP, Josep</em>

## Relations with Agreement in `Gender`

The 10 most frequent relations where parent and child node agree in `Gender`:
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> DET</tt> (41904; 81%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (13212; 64%),
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (2349; 53%),
<tt>DET --[<a href="../dep/det.html">det</a>]--> DET</tt> (1037; 81%),
<tt>NOUN --[<a href="../dep/appos.html">appos</a>]--> NOUN</tt> (915; 51%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> NOUN</tt> (504; 60%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (380; 51%),
<tt>PRON --[<a href="../dep/nmod.html">nmod</a>]--> NOUN</tt> (371; 74%),
<tt>ADJ --[<a href="../dep/det.html">det</a>]--> DET</tt> (338; 63%),
<tt>NOUN --[<a href="../dep/acl.html">acl</a>]--> ADJ</tt> (134; 60%).

