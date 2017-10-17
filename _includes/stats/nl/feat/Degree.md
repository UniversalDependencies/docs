

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

20896 tokens (11%) have a non-empty value of `Degree`.
4009 types (15%) occur at least once with a non-empty value of `Degree`.
3088 lemmas (16%) occur at least once with a non-empty value of `Degree`.
The feature is used with 6 part-of-speech tags: [nl-pos/ADJ]() (11631; 6% instances), [nl-pos/ADV]() (7214; 4% instances), [nl-pos/X]() (1086; 1% instances), [nl-pos/DET]() (953; 0% instances), [nl-pos/NUM]() (8; 0% instances), [nl-pos/VERB]() (4; 0% instances).

### `ADJ`

11631 [nl-pos/ADJ]() tokens (96% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (9031; 78%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (5895; 51%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (763; 7% of non-empty `Degree`): <em>beter, verder, later, groter, eerder, hoger, vroeger, ouder, jongeren, langer</em>
* `Pos` (10493; 90% of non-empty `Degree`): <em>goed, grote, nieuwe, groot, Nederlandse, bekend, vorig, mogelijk, lang, duidelijk</em>
* `Sup` (375; 3% of non-empty `Degree`): <em>laatste, grootste, beste, belangrijkste, hoogste, jongste, voornaamste, best, grootst, oudste</em>
* `EMPTY` (536): <em>eerste, tweede, derde, vierde, vijfde, zevende, 19e, Concilie, Vaticaanse, dertiende</em>

<table>
  <tr><th>Paradigm <i>groot</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>groot</em></td><td><em>groter</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td><em>grote</em></td><td><em>grotere</em></td><td><em>grootste, allergrootste</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>grootste</em></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 96% lemmas (2269) occur only with one value of `Degree`.

### `ADV`

7214 [nl-pos/ADV]() tokens (54% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (7214; 100%), <tt><a href="PartType.html">PartType</a>=EMPTY</tt> (7214; 100%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (127; 2% of non-empty `Degree`): <em>meer, vaker, dichter, dichterbij</em>
* `Pos` (7058; 98% of non-empty `Degree`): <em>niet, ook, nog, wel, al, toch, weer, gisteren, maar, alleen</em>
* `Sup` (29; 0% of non-empty `Degree`): <em>meest</em>
* `EMPTY` (6166): <em>er, hoe, zo, waar, nu, dan, op, daar, uit, aan</em>

<table>
  <tr><th>Paradigm <i>vaak</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th></tr>
  <tr><td><tt></tt></td><td><em>vaak</em></td><td><em>vaker</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 99% lemmas (366) occur only with one value of `Degree`.

### `X`

1086 [nl-pos/X]() tokens (26% of all `X` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `X` and `Degree` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (949; 87%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (878; 81%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (663; 61%).

`X` tokens may have the following values of `Degree`:

* `Cmp` (216; 20% of non-empty `Degree`): <em>het, eerst, voor, meer, onder, liefst, maar, beste, op, ten</em>
* `Pos` (787; 72% of non-empty `Degree`): <em>ook, te, niet, van, dan, op, maar, eenmaal, nu, eens</em>
* `Sup` (83; 8% of non-empty `Degree`): <em>het, meest, ten, minste, beste, grootst, minst, aanvechtbaarste, allersterkst, bangst</em>
* `EMPTY` (3140): <em>van, flo, het, op, met, ten, aan, voor, een, 's</em>

<table>
  <tr><th>Paradigm <i>het</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Neut</tt></td><td></td><td><em>het</em></td><td><em>het</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Neut</tt></td><td></td><td><em>het</em></td><td><em>het</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td></td><td><em>het</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Gender.html">Gender</a>=Neut|<a href="PronType.html">PronType</a>=Ind</tt></td><td></td><td></td><td><em>het</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut</tt></td><td></td><td><em>het</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>het</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>het</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="PronType.html">PronType</a>=Ind</tt></td><td></td><td><em>het</em></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `X`. 97% lemmas (429) occur only with one value of `Degree`.

### `DET`

953 [nl-pos/DET]() tokens (4% of all `DET` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `DET` and `Degree` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (953; 100%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (953; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (953; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (934; 98%).

`DET` tokens may have the following values of `Degree`:

* `Cmp` (315; 33% of non-empty `Degree`): <em>meer, minder, min, of, meerdere, mindere, meerder</em>
* `Pos` (594; 62% of non-empty `Degree`): <em>veel, hoeveel, weinig, vele, zoveel, velen, evenveel, weinige, teveel, weinigen</em>
* `Sup` (44; 5% of non-empty `Degree`): <em>meeste, allerminst, minst, minste, meest, meesten</em>
* `EMPTY` (20303): <em>de, een, het, der, tot, 't, 'n, la, el, des</em>

<table>
  <tr><th>Paradigm <i>min</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td></td><td><em>mindere</em></td><td></td></tr>
  <tr><td><tt></tt></td><td><em>min</em></td><td><em>minder, min</em></td><td><em>allerminst</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `DET`. 95% lemmas (21) occur only with one value of `Degree`.

### `NUM`

8 [nl-pos/NUM]() tokens (0% of all `NUM` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `NUM` and `Degree` co-occurred: <tt><a href="NumForm.html">NumForm</a>=EMPTY</tt> (8; 100%), <tt><a href="Definite.html">Definite</a>=Def</tt> (8; 100%), <tt><a href="NumType.html">NumType</a>=Card</tt> (8; 100%).

`NUM` tokens may have the following values of `Degree`:

* `Pos` (8; 100% of non-empty `Degree`): <em>achtenzeventig, dertien, drie, een, half, halve, procents, tweehonderd</em>
* `EMPTY` (3642): <em>twee, drie, vier, miljoen, 1, vijf, tien, beide, zes, 1969</em>

### `VERB`

4 [nl-pos/VERB]() tokens (0% of all `VERB` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `VERB` and `Degree` co-occurred: <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (4; 100%), <tt><a href="Aspect.html">Aspect</a>=EMPTY</tt> (4; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (4; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (4; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (4; 100%), <tt><a href="VerbType.html">VerbType</a>=EMPTY</tt> (4; 100%).

`VERB` tokens may have the following values of `Degree`:

* `Cmp` (4; 100% of non-empty `Degree`): <em>overrompelender, tegemoetkomender, verfijnder, vermoeider</em>
* `EMPTY` (19659): <em>heeft, kan, kunnen, moet, komt, gaan, hebben, moeten, komen, gaat</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/advmod.html">advmod</a>]--> ADV</tt> (820; 64%),
<tt>X --[<a href="../dep/compound.html">compound</a>]--> X</tt> (555; 100%),
<tt>ADJ --[<a href="../dep/obl.html">obl</a>]--> ADJ</tt> (319; 83%),
<tt>ADV --[<a href="../dep/advmod.html">advmod</a>]--> ADV</tt> (286; 58%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (218; 93%),
<tt>DET --[<a href="../dep/advmod.html">advmod</a>]--> ADV</tt> (73; 52%),
<tt>DET --[<a href="../dep/obl.html">obl</a>]--> ADJ</tt> (31; 67%),
<tt>DET --[<a href="../dep/compound.html">compound</a>]--> DET</tt> (18; 100%),
<tt>ADJ --[<a href="../dep/advcl.html">advcl</a>]--> ADJ</tt> (14; 67%),
<tt>ADV --[<a href="../dep/obl.html">obl</a>]--> DET</tt> (13; 72%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

6511 tokens (7%) have a non-empty value of `Degree`.
1880 types (13%) occur at least once with a non-empty value of `Degree`.
1293 lemmas (10%) occur at least once with a non-empty value of `Degree`.
The feature is used with 1 part-of-speech tags: [nl-pos/ADJ]() (6511; 7% instances).

### `ADJ`

6511 [nl-pos/ADJ]() tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (248; 4% of non-empty `Degree`): <em>later, verder, beter, hogere, vroegere, jongeren, verdere, vroeger, groter, langer</em>
* `Pos` (6024; 93% of non-empty `Degree`): <em>Vlaamse, belgische, andere, grote, nieuwe, Vlaams, externe, eigen, Franse, federale</em>
* `Sup` (239; 4% of non-empty `Degree`): <em>laatste, grootste, belangrijkste, hoogste, oudste, beste, bekendste, best, kleinste, mooiste</em>

<table>
  <tr><th>Paradigm <i>groot</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>grote, groot, groten</em></td><td><em>groter, grotere</em></td><td><em>grootste</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 96% lemmas (1239) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (172; 99%),
<tt>ADJ --[<a href="../dep/advmod.html">advmod</a>]--> ADJ</tt> (104; 92%),
<tt>ADJ --[<a href="../dep/fixed.html">fixed</a>]--> ADJ</tt> (80; 98%),
<tt>ADJ --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (38; 100%),
<tt>ADJ --[<a href="../dep/flat:name.html">flat:name</a>]--> ADJ</tt> (13; 100%),
<tt>ADJ --[<a href="../dep/nmod.html">nmod</a>]--> ADJ</tt> (7; 88%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> ADJ</tt> (7; 88%),
<tt>ADJ --[<a href="../dep/obl.html">obl</a>]--> ADJ</tt> (5; 71%),
<tt>ADJ --[<a href="../dep/advcl.html">advcl</a>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<a href="../dep/parataxis.html">parataxis</a>]--> ADJ</tt> (2; 67%).

