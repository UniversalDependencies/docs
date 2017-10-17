

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This feature is universal.
It occurs with 3 different values: `Card`, `Mult`, `Ord`.

5228 tokens (3%) have a non-empty value of `NumType`.
961 types (3%) occur at least once with a non-empty value of `NumType`.
816 lemmas (5%) occur at least once with a non-empty value of `NumType`.
The feature is used with 5 part-of-speech tags: [hr-pos/NUM]() (2916; 2% instances), [hr-pos/ADJ]() (1450; 1% instances), [hr-pos/ADV]() (691; 0% instances), [hr-pos/DET]() (150; 0% instances), [hr-pos/SYM]() (21; 0% instances).

### `NUM`

2916 [hr-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `NUM` and `NumType` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (2341; 80%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (2326; 80%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (2153; 74%).

`NUM` tokens may have the following values of `NumType`:

* `Card` (2799; 96% of non-empty `NumType`): <em>tri, dva, jedan, 20, pet, 10, četiri, dvije, 50, jedna</em>
* `Mult` (117; 4% of non-empty `NumType`): <em>desetak, oba, obje, stotinjak, obiju, dvadesetak, dvoje, 17:00, 3:00, 50-ak</em>

<table>
  <tr><th>Paradigm <i>1,5</i></th><th><tt>Card</tt></th><th><tt>Mult</tt></th></tr>
  <tr><td><tt></tt></td><td><em>1,5</em></td><td><em>1,5</em></td></tr>
</table>

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (611) occur only with one value of `NumType`.

### `ADJ`

1450 [hr-pos/ADJ]() tokens (7% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (1450; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (1450; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (1030; 71%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1030; 71%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (1026; 71%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (1450; 100% of non-empty `NumType`): <em>1., 2004., 2008., 2., 2007., 2005., 2009., 2006., prvi, 2010.</em>
* `EMPTY` (20316): <em>novi, vanjskih, novih, prošle, glavni, nove, hrvatski, moguće, hrvatske, novog</em>

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (187) occur only with one value of `NumType`.

### `ADV`

691 [hr-pos/ADV]() tokens (9% of all `ADV` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADV` and `NumType` co-occurred: <tt><a href="PronType.html">PronType</a>=Ind</tt> (604; 87%).

`ADV` tokens may have the following values of `NumType`:

* `Card` (691; 100% of non-empty `NumType`): <em>više, vrlo, koliko, manje, malo, mnogo, najviše, toliko, najmanje, dosta</em>
* `EMPTY` (7349): <em>samo, još, također, već, kada, sada, međutim, tako, uvijek, oko</em>

### `DET`

150 [hr-pos/DET]() tokens (2% of all `DET` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `DET` and `NumType` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (150; 100%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (150; 100%), <tt><a href="Number[psor].html">Number[psor]</a>=EMPTY</tt> (150; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (149; 99%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (149; 99%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (149; 99%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (149; 99%).

`DET` tokens may have the following values of `NumType`:

* `Card` (150; 100% of non-empty `NumType`): <em>nekoliko, tolikoj</em>
* `EMPTY` (6605): <em>koji, to, koje, koja, svoje, sve, ove, toga, kojima, koju</em>

### `SYM`

21 [hr-pos/SYM]() tokens (21% of all `SYM` tokens) have a non-empty value of `NumType`.

`SYM` tokens may have the following values of `NumType`:

* `Mult` (21; 100% of non-empty `NumType`): <em>50%, 20%, 30%, 9%, 13%, 14%, 16%, 40%, 45%, 60%</em>
* `EMPTY` (81): <em>%, $</em>

`NumType` seems to be **lexical feature** of `SYM`. 100% lemmas (16) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> NUM</tt> (81; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (38; 86%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (10; 71%),
<tt>NUM --[<a href="../dep/compound.html">compound</a>]--> NUM</tt> (4; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (3; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (3; 60%),
<tt>NUM --[<a href="../dep/list.html">list</a>]--> NUM</tt> (2; 100%),
<tt>NUM --[<a href="../dep/orphan.html">orphan</a>]--> NUM</tt> (2; 100%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (1; 100%),
<tt>NUM --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (1; 100%).

