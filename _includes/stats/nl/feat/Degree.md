

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

22085 tokens (11%) have a non-empty value of `Degree`.
4161 types (15%) occur at least once with a non-empty value of `Degree`.
3187 lemmas (15%) occur at least once with a non-empty value of `Degree`.
The feature is used with 7 part-of-speech tags: [nl-pos/ADJ]() (12307; 6% instances), [nl-pos/ADV]() (7570; 4% instances), [nl-pos/X]() (1188; 1% instances), [nl-pos/PRON]() (597; 0% instances), [nl-pos/DET]() (410; 0% instances), [nl-pos/NUM]() (9; 0% instances), [nl-pos/VERB]() (4; 0% instances).

### `ADJ`

12307 [nl-pos/ADJ]() tokens (96% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (9574; 78%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (6240; 51%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (817; 7% of non-empty `Degree`): <em>beter, verder, later, groter, eerder, hoger, jongeren, ouder, vroeger, langer</em>
* `Pos` (11099; 90% of non-empty `Degree`): <em>goed, nieuwe, grote, groot, Nederlandse, bekend, vorig, mogelijk, nodig, lang</em>
* `Sup` (391; 3% of non-empty `Degree`): <em>laatste, grootste, beste, belangrijkste, hoogste, jongste, voornaamste, best, grootst, oudste</em>
* `EMPTY` (571): <em>eerste, tweede, derde, vierde, vijfde, zevende, 19e, Concilie, Vaticaanse, dertiende</em>

<table>
  <tr><th>Paradigm <i>groot</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>groot</em></td><td><em>groter</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td><em>grote</em></td><td><em>grotere</em></td><td><em>grootste, allergrootste</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>grootste</em></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 96% lemmas (2328) occur only with one value of `Degree`.

### `ADV`

7570 [nl-pos/ADV]() tokens (54% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="PartType.html">PartType</a>=EMPTY</tt> (7570; 100%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (7570; 100%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (130; 2% of non-empty `Degree`): <em>meer, vaker, dichter, dichterbij</em>
* `Pos` (7406; 98% of non-empty `Degree`): <em>niet, ook, nog, wel, al, toch, weer, gisteren, maar, alleen</em>
* `Sup` (34; 0% of non-empty `Degree`): <em>meest</em>
* `EMPTY` (6464): <em>er, hoe, zo, waar, nu, dan, op, uit, daar, aan</em>

<table>
  <tr><th>Paradigm <i>vaak</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th></tr>
  <tr><td><tt></tt></td><td><em>vaak</em></td><td><em>vaker</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 99% lemmas (376) occur only with one value of `Degree`.

### `X`

1188 [nl-pos/X]() tokens (26% of all `X` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `X` and `Degree` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (1044; 88%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (967; 81%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (684; 58%).

`X` tokens may have the following values of `Degree`:

* `Cmp` (223; 19% of non-empty `Degree`): <em>het, eerst, voor, meer, onder, liefst, maar, beste, op, ten</em>
* `Pos` (877; 74% of non-empty `Degree`): <em>niet, ook, te, van, dan, op, eenmaal, maar, nu, alleen</em>
* `Sup` (88; 7% of non-empty `Degree`): <em>het, meest, ten, minste, beste, grootst, minst, aanvechtbaarste, allersterkst, bangst</em>
* `EMPTY` (3447): <em>van, flo, het, op, met, ten, aan, voor, een, 's</em>

<table>
  <tr><th>Paradigm <i>het</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Neut</tt></td><td></td><td><em>het</em></td><td><em>het</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Neut</tt></td><td></td><td><em>het</em></td><td><em>het</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td></td><td><em>het</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td><em>het</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Neut|<a href="PronType.html">PronType</a>=Ind</tt></td><td></td><td></td><td><em>het</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut</tt></td><td></td><td><em>het</em></td><td><em>het</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>het</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>het</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Ind</tt></td><td></td><td><em>het</em></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `X`. 97% lemmas (456) occur only with one value of `Degree`.

### `PRON`

597 [nl-pos/PRON]() tokens (3% of all `PRON` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `PRON` and `Degree` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (597; 100%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (597; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (583; 98%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (578; 97%).

`PRON` tokens may have the following values of `Degree`:

* `Cmp` (207; 35% of non-empty `Degree`): <em>meer, minder, of, min, meerdere, DEEL, mindere</em>
* `Pos` (376; 63% of non-empty `Degree`): <em>hoeveel, veel, weinig, velen, zoveel, vele, teveel, evenveel, weinigen, Welek</em>
* `Sup` (14; 2% of non-empty `Degree`): <em>allerminst, meeste, meest, minst, meesten</em>
* `EMPTY` (16527): <em>die, hij, ik, het, dat, zijn, wat, welke, zich, dit</em>

<table>
  <tr><th>Paradigm <i>min</i></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>minder, min</em></td><td><em>allerminst</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `PRON`. 95% lemmas (19) occur only with one value of `Degree`.

### `DET`

410 [nl-pos/DET]() tokens (2% of all `DET` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `DET` and `Degree` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (410; 100%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (410; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (410; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (408; 100%).

`DET` tokens may have the following values of `Degree`:

* `Cmp` (132; 32% of non-empty `Degree`): <em>meer, minder, meerdere, mindere, meerder, meerderen, min</em>
* `Pos` (242; 59% of non-empty `Degree`): <em>veel, vele, weinig, zoveel, hoeveel, weinige, evenveel, teveel, zovele, min</em>
* `Sup` (36; 9% of non-empty `Degree`): <em>meeste, minste</em>
* `EMPTY` (21440): <em>de, een, het, der, 't, 'n, la, el, des, los</em>

<table>
  <tr><th>Paradigm <i>min</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td></td><td><em>mindere</em></td></tr>
  <tr><td><tt></tt></td><td><em>min</em></td><td><em>min, minder</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `DET`. 94% lemmas (16) occur only with one value of `Degree`.

### `NUM`

9 [nl-pos/NUM]() tokens (0% of all `NUM` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `NUM` and `Degree` co-occurred: <tt><a href="NumForm.html">NumForm</a>=EMPTY</tt> (9; 100%), <tt><a href="NumType.html">NumType</a>=Card</tt> (9; 100%), <tt><a href="Definite.html">Definite</a>=Def</tt> (9; 100%).

`NUM` tokens may have the following values of `Degree`:

* `Pos` (9; 100% of non-empty `Degree`): <em>achtenzeventig, dertien, drie, een, half, halve, jarigen, procents, tweehonderd</em>
* `EMPTY` (3850): <em>twee, drie, vier, miljoen, 1, vijf, tien, beide, zes, 1969</em>

### `VERB`

4 [nl-pos/VERB]() tokens (0% of all `VERB` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `VERB` and `Degree` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (4; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (4; 100%), <tt><a href="Aspect.html">Aspect</a>=EMPTY</tt> (4; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (4; 100%), <tt><a href="VerbType.html">VerbType</a>=EMPTY</tt> (4; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (4; 100%).

`VERB` tokens may have the following values of `Degree`:

* `Cmp` (4; 100% of non-empty `Degree`): <em>overrompelender, tegemoetkomender, verfijnder, vermoeider</em>
* `EMPTY` (20108): <em>zal, heeft, kan, zou, kunnen, moet, komt, hebben, wil, gaan</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/advmod.html">advmod</a>]--> ADV</tt> (655; 59%),
<tt>X --[<a href="../dep/compound.html">compound</a>]--> X</tt> (615; 100%),
<tt>ADJ --[<a href="../dep/advmod.html">advmod</a>]--> ADJ</tt> (332; 83%),
<tt>ADV --[<a href="../dep/advmod.html">advmod</a>]--> ADV</tt> (269; 58%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (233; 94%),
<tt>ADJ --[<a href="../dep/neg.html">neg</a>]--> ADV</tt> (198; 92%),
<tt>ADV --[<a href="../dep/neg.html">neg</a>]--> ADV</tt> (34; 64%),
<tt>DET --[<a href="../dep/advmod.html">advmod</a>]--> ADV</tt> (25; 52%),
<tt>PRON --[<a href="../dep/advmod.html">advmod</a>]--> ADJ</tt> (22; 61%),
<tt>PRON --[<a href="../dep/compound.html">compound</a>]--> PRON</tt> (20; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

6954 tokens (7%) have a non-empty value of `Degree`.
1955 types (13%) occur at least once with a non-empty value of `Degree`.
1344 lemmas (10%) occur at least once with a non-empty value of `Degree`.
The feature is used with 1 part-of-speech tags: [nl-pos/ADJ]() (6954; 7% instances).

### `ADJ`

6954 [nl-pos/ADJ]() tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (270; 4% of non-empty `Degree`): <em>later, verder, beter, hogere, vroegere, jongeren, latere, oudere, verdere, vroeger</em>
* `Pos` (6431; 92% of non-empty `Degree`): <em>Vlaamse, belgische, andere, grote, nieuwe, externe, Vlaams, Franse, eigen, federale</em>
* `Sup` (253; 4% of non-empty `Degree`): <em>grootste, laatste, belangrijkste, hoogste, oudste, beste, bekendste, best, kleinste, mooiste</em>

<table>
  <tr><th>Paradigm <i>groot</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>grote, groot, groten</em></td><td><em>groter, grotere</em></td><td><em>grootste</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 96% lemmas (1288) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (184; 99%),
<tt>ADJ --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (152; 94%),
<tt>ADJ --[<a href="../dep/mwe.html">mwe</a>]--> ADJ</tt> (94; 98%),
<tt>ADJ --[<a href="../dep/nmod.html">nmod</a>]--> ADJ</tt> (13; 81%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> ADJ</tt> (7; 88%),
<tt>ADJ --[<a href="../dep/advcl.html">advcl</a>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<a href="../dep/parataxis.html">parataxis</a>]--> ADJ</tt> (2; 67%),
<tt>ADJ --[<a href="../dep/dobj.html">dobj</a>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/compound.html">compound</a>]--> ADJ</tt> (1; 100%).

