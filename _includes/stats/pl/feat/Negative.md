

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This feature is universal.
It occurs with 2 different values: `Neg`, `Pos`.

2077 tokens (2%) have a non-empty value of `Negative`.
1785 types (8%) occur at least once with a non-empty value of `Negative`.
1303 lemmas (10%) occur at least once with a non-empty value of `Negative`.
The feature is used with 3 part-of-speech tags: [pl-pos/VERB]() (1405; 2% instances), [pl-pos/NOUN]() (671; 1% instances), [pl-pos/ADJ]() (1; 0% instances).

### `VERB`

1405 [pl-pos/VERB]() tokens (11% of all `VERB` tokens) have a non-empty value of `Negative`.

The most frequent other feature values with which `VERB` and `Negative` co-occurred: <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (1405; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (1405; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (1405; 100%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (1116; 79%), <tt><a href="Voice.html">Voice</a>=Pass</tt> (1116; 79%), <tt><a href="Number.html">Number</a>=Sing</tt> (913; 65%), <tt><a href="Aspect.html">Aspect</a>=Perf</tt> (876; 62%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (807; 57%), <tt><a href="Case.html">Case</a>=Nom</tt> (801; 57%).

`VERB` tokens may have the following values of `Negative`:

* `Neg` (13; 1% of non-empty `Negative`): <em>Nieleczona, niedoceniana, niehodowaną, nieocieplony, nieprzewidzianych, niespełnionym, niestrzeżonym, nietajoną, nieuprzątnięte, niewyczyszczone</em>
* `Pos` (1392; 99% of non-empty `Negative`): <em>przyjęta, znaleziono, prowadzone, dotyczące, wyczerpana, zatrzymano, zatrzymany, przeprowadzono, przygotowany, rozegrano</em>
* `EMPTY` (11877): <em>jest, to, ma, był, było, są, była, może, można, miał</em>

<table>
  <tr><th>Paradigm <i>przewidzieć</i></th><th><tt>Pos</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Gen|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>nieprzewidzianych</em></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td><em>Przewidziany</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>Przewidziana</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>przewidziano</em></td><td></td></tr>
</table>

`Negative` seems to be **lexical feature** of `VERB`. 99% lemmas (840) occur only with one value of `Negative`.

### `NOUN`

671 [pl-pos/NOUN]() tokens (3% of all `NOUN` tokens) have a non-empty value of `Negative`.

The most frequent other feature values with which `NOUN` and `Negative` co-occurred: <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (671; 100%), <tt><a href="Gender.html">Gender</a>=Neut</tt> (671; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (670; 100%).

`NOUN` tokens may have the following values of `Negative`:

* `Neg` (11; 2% of non-empty `Negative`): <em>nieuzyskania, niedopełnienie, niedopuszczenie, nieodpowiadanie, nieprowadzenie, nieprzeprowadzenie, nieprzyjmowanie, niewchodzenie</em>
* `Pos` (660; 98% of non-empty `Negative`): <em>głosowania, odrzucenie, przyjęcie, przyjęciem, bycia, działania, naciśnięcie, otwarcie, stosowania, tworzenia</em>
* `EMPTY` (20093): <em>pan, roku, lat, pracy, pani, domu, czasie, ludzi, osób, dzieci</em>

<table>
  <tr><th>Paradigm <i>uzyskanie</i></th><th><tt>Pos</tt></th><th><tt>Neg</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td><em>uzyskanie</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen</tt></td><td><em>uzyskania</em></td><td><em>nieuzyskania</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins</tt></td><td><em>uzyskaniem</em></td><td></td></tr>
</table>

`Negative` seems to be **lexical feature** of `NOUN`. 99% lemmas (451) occur only with one value of `Negative`.

### `ADJ`

1 [pl-pos/ADJ]() tokens (0% of all `ADJ` tokens) have a non-empty value of `Negative`.

The most frequent other feature values with which `ADJ` and `Negative` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (1; 100%), <tt><a href="Gender.html">Gender</a>=Neut</tt> (1; 100%), <tt><a href="Case.html">Case</a>=Nom</tt> (1; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (1; 100%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (1; 100%).

`ADJ` tokens may have the following values of `Negative`:

* `Pos` (1; 100% of non-empty `Negative`): <em>dane</em>
* `EMPTY` (7003): <em>swoje, swoich, cały, pierwszy, różnych, innych, nowego, nowe, sam, swoim</em>

## Relations with Agreement in `Negative`

The 10 most frequent relations where parent and child node agree in `Negative`:
<tt>VERB --[<a href="../dep/cop.html">cop</a>]--> NOUN</tt> (1; 100%).

