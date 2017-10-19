

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CLTT)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

6378 tokens (17%) have a non-empty value of `Degree`.
1498 types (33%) occur at least once with a non-empty value of `Degree`.
664 lemmas (25%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: [-pos/ADJ]() (6093; 16% instances), [-pos/ADV]() (285; 1% instances).

### `ADJ`

6093 [-pos/ADJ]() tokens (93% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (5959; 98%), <tt><a href="Number.html">Number</a>=Sing</tt> (3879; 64%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (3665; 60%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (55; 1% of non-empty `Degree`): delší vyšší kratší nižší pozdějších podrobnější menší nižším bližší bližších
* `Pos` (6032; 99% of non-empty `Degree`): účetní účetních účetního konsolidované finanční účetním výroční právní jiných ostatní
* `Sup` (6; 0% of non-empty `Degree`): nejvyšší nejvyšším nejvyššího
* `EMPTY` (446): konsolidující povinny povinna zanikající následujícího související předcházejícímu týkající prvním přejímající

<table>
  <tr><th>Paradigm <i>vysoký</i></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Anim|<a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td>vyšší</td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Gen|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td>nejvyššího</td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Gen|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur</tt></td><td>vyšších</td><td></td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Ins|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td>nejvyšším</td></tr>
  <tr><td><tt><a href="Animacy.html">Animacy</a>=Inan|<a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td>vyšší</td><td>nejvyšší</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td>vyšší</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Gen|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td>vyšší</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td>vyšší</td><td>nejvyšší</td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td>vyšší</td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td>vyšší</td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 99% lemmas (578) occur only with one value of `Degree`.

### `ADV`

285 [-pos/ADV]() tokens (36% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (276; 97%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (73; 26% of non-empty `Degree`): více později nejméně nejpozději výše nejvýše dále méně dříve nejblíže
* `Pos` (204; 72% of non-empty `Degree`): obdobně případně samostatně bezprostředně přímo odděleně bezúplatně přiměřeně současně výhradně
* `Sup` (8; 3% of non-empty `Degree`): nejpozději nejméně nejdříve
* `EMPTY` (502): dále zejména popřípadě jinak pouze kdy též například tak celkem

<table>
  <tr><th>Paradigm <i>pozdě</i></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td>později, nejpozději</td><td>nejpozději</td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 96% lemmas (80) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (181; 93%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (14; 100%),
<tt>ADJ --[<a href="../dep/appos.html">appos</a>]--> ADJ</tt> (4; 100%),
<tt>ADJ --[<a href="../dep/advcl.html">advcl</a>]--> ADJ</tt> (4; 67%),
<tt>ADJ --[<a href="../dep/dep.html">dep</a>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/appos.html">appos</a>]--> ADV</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/advmod.html">advmod</a>]--> ADJ</tt> (1; 100%).

