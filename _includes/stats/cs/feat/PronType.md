

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This feature is universal.
It occurs with 7 different values: `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 2 combinations have been observed: `Dem|Ind`, `Int|Rel`.

100361 tokens (7%) have a non-empty value of `PronType`.
842 types (1%) occur at least once with a non-empty value of `PronType`.
136 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [cs-pos/PRON]() (72548; 5% instances), [cs-pos/DET]() (27813; 2% instances).

### `PRON`

72548 [cs-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (61277; 84%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (46647; 64%), <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (45367; 63%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (38938; 54%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (12412; 17% of non-empty `PronType`): _to, tím, tom, tomu, toho, ten, ty, ti, ta, těch_
* `Dem,Ind` (318; 0% of non-empty `PronType`): _několikrát, mnoho, tolik, málo, moc, mnohokrát, několik, několika, mnoha, vícekrát_
* `Ind` (1398; 2% of non-empty `PronType`): _něco, někdo, některé, někteří, někoho, cosi, něčeho, cokoli, něčím, někomu_
* `Int,Rel` (13692; 19% of non-empty `PronType`): _které, který, která, co, kteří, kdo, kterou, kterým, čím, kterých_
* `Neg` (1102; 2% of non-empty `PronType`): _nic, nikdo, nikoho, nikomu, ničím, žádný, žádná, ničem, ničemu, žádné_
* `Prs` (37162; 51% of non-empty `PronType`): _se, si, nás, je, nám, nich, mu, ji, ho, jim_
* `Rel` (2960; 4% of non-empty `PronType`): _což, nichž, jež, níž, němž, jehož, jenž, něhož, něž, jemuž_
* `Tot` (3504; 5% of non-empty `PronType`): _všechny, všech, vše, sám, všichni, všechno, sama, sami, všem, veškeré_

<table>
  <tr><th>Paradigm <i>kolikrát</i></th><th><tt>Dem,Ind</tt></th><th><tt>Int,Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><i>kolikrát</i></td><td><i>kolikrát</i></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 99% lemmas (118) occur only with one value of `PronType`.

### `DET`

27813 [cs-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Gender[psor].html">Gender[psor]</a>=EMPTY</tt> (23482; 84%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (23045; 83%), <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (18537; 67%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (18537; 67%), <tt><a href="Number.html">Number</a>=Sing</tt> (14993; 54%), <tt><a href="Poss.html">Poss</a>=Yes</tt> (14044; 50%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (8862; 32% of non-empty `PronType`): _této, tento, tohoto, tato, těchto, tyto, tomto, tuto, toto, té_
* `Dem,Ind` (1454; 5% of non-empty `PronType`): _několik, několika, mnoho, mnoha, málo, tolik, mála, moc, tolika, nemálo_
* `Ind` (2075; 7% of non-empty `PronType`): _některých, některé, někteří, nějaké, nějaký, nějakou, některá, jakékoli, nějaká, některým_
* `Int,Rel` (634; 2% of non-empty `PronType`): _jaké, kolik, jaký, jakou, které, jakým, který, jaká, jakých, jakém_
* `Neg` (744; 3% of non-empty `PronType`): _žádné, žádný, žádná, žádnou, žádném, žádným, žádného, žádnému, žádných, žádnými_
* `Prs` (13396; 48% of non-empty `PronType`): _jeho, jejich, své, její, svou, svého, svých, svůj, naše, svým_
* `Rel` (648; 2% of non-empty `PronType`): _jejichž, jehož, jejíž, jejímž, jejíchž, jejíhož, jejímiž, jejímuž_

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (55) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (103; 79%),
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (53; 100%),
<tt>PRON --[<a href="../dep/cc.html">cc</a>]--> PRON</tt> (10; 91%),
<tt>PRON --[<a href="../dep/appos.html">appos</a>]--> PRON</tt> (9; 69%),
<tt>PRON --[<a href="../dep/foreign.html">foreign</a>]--> PRON</tt> (4; 80%),
<tt>DET --[<a href="../dep/det:nummod.html">det:nummod</a>]--> DET</tt> (2; 100%),
<tt>PRON --[<a href="../dep/ccomp.html">ccomp</a>]--> DET</tt> (1; 100%).

