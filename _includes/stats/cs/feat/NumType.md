

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This feature is universal.
It occurs with 5 different values: `Card`, `Frac`, `Mult`, `Ord`, `Sets`.
Some words have combined values of the feature; 1 combinations have been observed: `Mult|Sets`.

43673 tokens (3%) have a non-empty value of `NumType`.
3812 types (3%) occur at least once with a non-empty value of `NumType`.
3381 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: [cs-pos/NUM]() (36842; 3% instances), [cs-pos/ADJ]() (4420; 0% instances), [cs-pos/DET]() (1626; 0% instances), [cs-pos/ADV]() (785; 0% instances).

### `NUM`

36842 [cs-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (32665; 89%), <tt><a href="NumValue.html">NumValue</a>=EMPTY</tt> (29763; 81%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (26598; 72%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (26574; 72%), <tt><a href="NumForm.html">NumForm</a>=Digit</tt> (26226; 71%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (36547; 99% of non-empty `NumType`): <em>1, 2, 3, dva, tři, 4, jeden, 6, dvě, 5</em>
* `Frac` (295; 1% of non-empty `NumType`): <em>třetiny, třetinu, třetina, čtvrtinu, třetině, čtvrtina, desetinu, čtvrtiny, pětinu, pětina</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (3253) occur only with one value of `NumType`.

### `ADJ`

4420 [cs-pos/ADJ]() tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (4420; 100%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (4420; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (3733; 84%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (2856; 65%).

`ADJ` tokens may have the following values of `NumType`:

* `Mult,Sets` (63; 1% of non-empty `NumType`): <em>dvojí, obojí, dvojím, dvojího, dvoje, obojím, trojí, oboje, dvojími, obé</em>
* `Ord` (4330; 98% of non-empty `NumType`): <em>první, druhé, prvním, třetí, druhý, prvních, druhou, prvního, druhá, druhém</em>
* `Sets` (27; 1% of non-empty `NumType`): <em>jedny, jedni, jedněch, jedněm, jedněmi</em>
* `EMPTY` (164378): <em>další, české, nové, státní, poslední, dalších, vlastní, možné, jiné, každý</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (62) occur only with one value of `NumType`.

### `DET`

1626 [cs-pos/DET]() tokens (3% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (1626; 100%), <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (1626; 100%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (1626; 100%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (1622; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (1610; 99%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1610; 99%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (1365; 84%).

`DET` tokens may have the following values of `NumType`:

* `Card` (1624; 100% of non-empty `NumType`): <em>několik, několika, mnoho, mnoha, kolik, tolik, málo, moc, mála, tolika</em>
* `Ord` (2; 0% of non-empty `NumType`): <em>několikáté, několikátý</em>
* `EMPTY` (47144): <em>to, které, který, jeho, která, jejich, své, tím, kteří, tom</em>

`NumType` seems to be **lexical feature** of `DET`. 100% lemmas (16) occur only with one value of `NumType`.

### `ADV`

785 [cs-pos/ADV]() tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (785; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (785; 100%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (673; 86%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (496; 63% of non-empty `NumType`): <em>dvakrát, jednou, třikrát, několikrát, desetkrát, pětkrát, čtyřikrát, nejednou, šestkrát, mnohokrát</em>
* `Ord` (289; 37% of non-empty `NumType`): <em>poprvé, podruhé, potřetí, počtvrté, podvanácté, pošesté, POPÁTÉ, Popáté, Pošestnácté, podesáté</em>
* `EMPTY` (69717): <em>tak, už, také, jak, včera, ještě, již, dnes, více, tedy</em>

`NumType` seems to be **lexical feature** of `ADV`. 100% lemmas (52) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (2906; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (2589; 100%),
<tt>NUM --[<a href="../dep/orphan.html">orphan</a>]--> NUM</tt> (75; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (60; 53%),
<tt>NUM --[<a href="../dep/dep.html">dep</a>]--> NUM</tt> (39; 100%),
<tt>NUM --[<a href="../dep/det:nummod.html">det:nummod</a>]--> DET</tt> (14; 100%),
<tt>ADJ --[<a href="../dep/orphan.html">orphan</a>]--> ADJ</tt> (10; 71%),
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (5; 83%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (3; 60%),
<tt>DET --[<a href="../dep/appos.html">appos</a>]--> NUM</tt> (3; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This feature is universal.
It occurs with 5 different values: `Card`, `Frac`, `Mult`, `Ord`, `Sets`.
Some words have combined values of the feature; 1 combinations have been observed: `Mult|Sets`.

8863 tokens (2%) have a non-empty value of `NumType`.
342 types (1%) occur at least once with a non-empty value of `NumType`.
138 lemmas (0%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: [cs-pos/NUM]() (7204; 1% instances), [cs-pos/ADJ]() (852; 0% instances), [cs-pos/DET]() (642; 0% instances), [cs-pos/ADV]() (165; 0% instances).

### `NUM`

7204 [cs-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (6031; 84%), <tt><a href="NumValue.html">NumValue</a>=EMPTY</tt> (5274; 73%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (4784; 66%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (4784; 66%), <tt><a href="NumForm.html">NumForm</a>=Digit</tt> (4784; 66%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (7149; 99% of non-empty `NumType`): <em>#, dvou, jeden, dvě, tři, dva, obou, jednoho, jedné, jedním</em>
* `Frac` (55; 1% of non-empty `NumType`): <em>třetina, třetinu, třetiny, čtvrtiny, dvanáctinu, třetinou, třetině, desetin, desetinu, dvanáctina</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (59) occur only with one value of `NumType`.

### `ADJ`

852 [cs-pos/ADJ]() tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (852; 100%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (852; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (600; 70%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (558; 65%).

`ADJ` tokens may have the following values of `NumType`:

* `Mult,Sets` (33; 4% of non-empty `NumType`): <em>dvojí, dvojím, obojí, trojí, dvojího, trojím, dvojímu, oboje, obojího, obojím</em>
* `Ord` (809; 95% of non-empty `NumType`): <em>první, prvním, třetí, prvních, prvního, šedesátých, třetího, třicátých, dvacátých, páté</em>
* `Sets` (10; 1% of non-empty `NumType`): <em>jedněch, jedni, jedny</em>
* `EMPTY` (72326): <em>další, pracovní, jednotlivých, základní, nové, možno, socialistické, různých, dalších, každý</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (39) occur only with one value of `NumType`.

### `DET`

642 [cs-pos/DET]() tokens (3% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (642; 100%), <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (642; 100%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (642; 100%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (640; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (628; 98%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (628; 98%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (552; 86%).

`DET` tokens may have the following values of `NumType`:

* `Card` (639; 100% of non-empty `NumType`): <em>několik, mnoho, několika, mnoha, kolik, tolik, málo, mála, nejeden, nejednom</em>
* `Ord` (3; 0% of non-empty `NumType`): <em>Kolikátý, kolikátá, kolikátém</em>
* `EMPTY` (18399): <em>to, které, jejich, jeho, který, která, tím, této, své, těchto</em>

### `ADV`

165 [cs-pos/ADV]() tokens (1% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (165; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (165; 100%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (122; 74%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (116; 70% of non-empty `NumType`): <em>dvakrát, nejednou, několikrát, třikrát, mnohokrát, kolikrát, desetkrát, stokrát, čtyřikrát, dvanáctkrát</em>
* `Ord` (49; 30% of non-empty `NumType`): <em>poprvé, podruhé, potřetí, potřinácté</em>
* `EMPTY` (26788): <em>tak, také, jak, již, už, ještě, kde, tedy, pak, velmi</em>

`NumType` seems to be **lexical feature** of `ADV`. 100% lemmas (33) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (310; 100%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (42; 100%),
<tt>NUM --[<a href="../dep/orphan.html">orphan</a>]--> NUM</tt> (16; 100%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (6; 55%),
<tt>NUM --[<a href="../dep/det:nummod.html">det:nummod</a>]--> DET</tt> (5; 100%),
<tt>NUM --[<a href="../dep/appos.html">appos</a>]--> DET</tt> (1; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

355 tokens (1%) have a non-empty value of `NumType`.
99 types (3%) occur at least once with a non-empty value of `NumType`.
85 lemmas (4%) occur at least once with a non-empty value of `NumType`.
The feature is used with 4 part-of-speech tags: [cs-pos/NUM]() (310; 1% instances), [cs-pos/ADJ]() (31; 0% instances), [cs-pos/ADV]() (13; 0% instances), [cs-pos/PRON]() (1; 0% instances).

### `NUM`

310 [cs-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (278; 90%), <tt><a href="NumValue.html">NumValue</a>=EMPTY</tt> (272; 88%), <tt><a href="NumForm.html">NumForm</a>=Roman</tt> (264; 85%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (264; 85%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (264; 85%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (310; 100% of non-empty `NumType`): <em>1, 3, 2, jeden, 4, 5, 41, 2004, 2008, 31</em>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (76) occur only with one value of `NumType`.

### `ADJ`

31 [cs-pos/ADJ]() tokens (1% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (31; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (31; 100%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (31; 100%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (16; 52%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (31; 100% of non-empty `NumType`): <em>prvním, prvnímu, prvního, první, TŘETÍ, PÁTÁ, druhé, páté, ČTVRTÁ, ŠESTÁ</em>
* `EMPTY` (4624): <em>účetní, účetních, účetního, konsolidované, finanční, účetním, konsolidující, povinny, obchodního, ostatní</em>

### `ADV`

13 [cs-pos/ADV]() tokens (2% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (13; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (13; 100%).

`ADV` tokens may have the following values of `NumType`:

* `Mult` (2; 15% of non-empty `NumType`): <em>jednou</em>
* `Ord` (11; 85% of non-empty `NumType`): <em>poprvé</em>
* `EMPTY` (554): <em>zejména, dále, popřípadě, například, pouze, jinak, též, kdy, tak, později</em>

### `PRON`

1 [cs-pos/PRON]() tokens (0% of all `PRON` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `PRON` and `NumType` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (1; 100%), <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (1; 100%), <tt><a href="Case.html">Case</a>=Ins</tt> (1; 100%), <tt><a href="PronType.html">PronType</a>=Dem,Ind</tt> (1; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (1; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1; 100%).

`PRON` tokens may have the following values of `NumType`:

* `Card` (1; 100% of non-empty `NumType`): <em>několika</em>
* `EMPTY` (811): <em>se, které, která, který, to, kterých, kterým, kterém, nichž, všech</em>

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (29; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (1; 100%).

