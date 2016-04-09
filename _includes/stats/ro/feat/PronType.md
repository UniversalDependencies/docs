

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is universal but the values `Emp` are language-specific.
It occurs with 9 different values: `Art`, `Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.
Some words have combined values of the feature; 1 combinations have been observed: `Int|Rel`.

1365 tokens (11%) have a non-empty value of `PronType`.
229 types (5%) occur at least once with a non-empty value of `PronType`.
129 lemmas (3%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [ro-pos/PRON]() (682; 6% instances), [ro-pos/DET]() (608; 5% instances), [ro-pos/ADV]() (75; 1% instances).

### `PRON`

682 [ro-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (593; 87%), <tt><a href="Person.html">Person</a>=3</tt> (574; 84%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (496; 73%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (481; 71%), <tt><a href="Strength.html">Strength</a>=Weak</tt> (379; 56%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (342; 50%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (40; 6% of non-empty `PronType`): <em>aceasta, cea, cei, acesta, acesteia, cele, ăsta, acestora, cel, celor</em>
* `Ind` (54; 8% of non-empty `PronType`): <em>fiecare, multe, una, unii, altul, ceva, mulți, tot, unul, alții</em>
* `Int,Rel` (140; 21% of non-empty `PronType`): <em>care, ce, cine, cui, căreia, cărora, căruia, ce-, ceea_ce, celor_ce</em>
* `Neg` (6; 1% of non-empty `PronType`): <em>nimeni, nimic</em>
* `Prs` (442; 65% of non-empty `PronType`): <em>se, s-, își, îl, -l, el, mă, -i, -și, îi</em>

<table>
  <tr><th>Paradigm <i>cele</i></th><th><tt>Dem</tt></th><th><tt>Ind</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><em>cele</em></td><td><em>cele</em></td></tr>
  <tr><td><tt></tt></td><td></td><td><em>cele</em></td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 98% lemmas (64) occur only with one value of `PronType`.

### `DET`

608 [ro-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Position.html">Position</a>=EMPTY</tt> (532; 88%), <tt><a href="Number.html">Number</a>=Sing</tt> (457; 75%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (437; 72%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (415; 68%), <tt><a href="Case.html">Case</a>=Nom</tt> (339; 56%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (319; 52%).

`DET` tokens may have the following values of `PronType`:

* `Art` (33; 5% of non-empty `PronType`): <em>lui, -lea, -ul, -a, -ului</em>
* `Dem` (80; 13% of non-empty `PronType`): <em>cele, acest, cel, această, aceste, cea, aceea, cei, acel, acele</em>
* `Emp` (3; 0% of non-empty `PronType`): <em>însuși, însăși</em>
* `Ind` (291; 48% of non-empty `PronType`): <em>o, un, unui, toate, alte, unei, multe, toată, unele, orice</em>
* `Int,Rel` (3; 0% of non-empty `PronType`): <em>care, ce, ce_fel_de</em>
* `Neg` (2; 0% of non-empty `PronType`): <em>nici_un, nicio</em>
* `Prs` (193; 32% of non-empty `PronType`): <em>a, al, ale, sale, său, ei, ai, lor, mele, lui</em>
* `Tot` (3; 0% of non-empty `PronType`): <em>ambele, Amândoi</em>

<table>
  <tr><th>Paradigm <i>lui</i></th><th><tt>Prs</tt></th><th><tt>Art</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>lui</em></td></tr>
  <tr><td><tt><a href="Number[psor].html">Number[psor]</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Poss.html">Poss</a>=Yes</tt></td><td><em>lor</em></td><td></td></tr>
  <tr><td><tt><a href="Number[psor].html">Number[psor]</a>=Sing|<a href="Person.html">Person</a>=3|<a href="Poss.html">Poss</a>=Yes</tt></td><td><em>ei, lui</em></td><td></td></tr>
</table>

`PronType` seems to be **lexical feature** of `DET`. 97% lemmas (77) occur only with one value of `PronType`.

### `ADV`

75 [ro-pos/ADV]() tokens (15% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (75; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Int,Rel` (64; 85% of non-empty `PronType`): <em>când, cum, cât, unde, oare, După_ce, Pe_cât, câte</em>
* `Neg` (11; 15% of non-empty `PronType`): <em>nici, parcă, rău</em>
* `EMPTY` (414): <em>mai, ca, astfel, iar, și, atât, doar, încă, acum, aici</em>

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (11) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/remnant.html">remnant</a>]--> PRON</tt> (3; 100%),
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (1; 100%),
<tt>DET --[<a href="../dep/det.html">det</a>]--> DET</tt> (1; 100%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (1; 100%).

