

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This feature is universal but the values `Itg`, `Qnt`, `Ref` are language-specific.
It occurs with 6 different values: `Dem`, `Ind`, `Itg`, `Prs`, `Qnt`, `Ref`.

124 tokens (2%) have a non-empty value of `PronType`.
77 types (3%) occur at least once with a non-empty value of `PronType`.
29 lemmas (2%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [kk-pos/PRON]() (91; 1% instances), [kk-pos/DET]() (26; 0% instances), [kk-pos/ADV]() (7; 0% instances).

### `PRON`

91 [kk-pos/PRON]() tokens (38% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (57; 63%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (55; 60%), <tt><a href="Case.html">Case</a>=Nom</tt> (46; 51%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (24; 26% of non-empty `PronType`): <em>Бұл, Мұның, Осылай, манағыдай, оны, оған, солай, Бұ, Бұларды, Онан</em>
* `Ind` (2; 2% of non-empty `PronType`): <em>біреу</em>
* `Itg` (24; 26% of non-empty `PronType`): <em>_, кім, не, Кімді, кімге, қандай, кімнің, неге, несіне</em>
* `Prs` (34; 37% of non-empty `PronType`): <em>сені, біз, Ол, Олар, Оның, Сен, маған, мен, оған, саған</em>
* `Qnt` (1; 1% of non-empty `PronType`): <em>бәрі</em>
* `Ref` (6; 7% of non-empty `PronType`): <em>өзі, Өзім, өзіміздің, өзінше, өзің</em>
* `EMPTY` (146): <em>ол, _, мен, олар, не, оның, бұл, одан, оны, Маған</em>

<table>
  <tr><th>Paradigm <i>ол</i></th><th><tt>Prs</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Abl</tt></td><td></td><td><em>Онан</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Abl|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>одан</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td></td><td><em>оны</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>Оны</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat</tt></td><td></td><td><em>оған</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>оған</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen</tt></td><td></td><td><em>оның</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>Оның</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom</tt></td><td></td><td><em>ол</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=3</tt></td><td><em>Ол, О</em></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 94% lemmas (16) occur only with one value of `PronType`.

### `DET`

26 [kk-pos/DET]() tokens (22% of all `DET` tokens) have a non-empty value of `PronType`.

`DET` tokens may have the following values of `PronType`:

* `Dem` (15; 58% of non-empty `PronType`): <em>бұл, Мына, Сол, манағы, Анау, бұ, ол, осы, Әлгі</em>
* `Ind` (5; 19% of non-empty `PronType`): <em>бір, сондай</em>
* `Itg` (4; 15% of non-empty `PronType`): <em>қай, не</em>
* `Qnt` (2; 8% of non-empty `PronType`): <em>көп</em>
* `EMPTY` (93): <em>осы, бір, өз, барлық, бұл, ол, Әр, мына, сол, қай</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (13) occur only with one value of `PronType`.

### `ADV`

7 [kk-pos/ADV]() tokens (6% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Itg` (7; 100% of non-empty `PronType`): <em>_, неліктен, қайдан, қалай, қашанғы</em>
* `EMPTY` (116): <em>енді, Ендеше, қайда, _, тағы, тек, жақсы, қайта, әбден, өте</em>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/parataxis.html">parataxis</a>]--> PRON</tt> (1; 100%).

