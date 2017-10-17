

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

19258 tokens (10%) have a non-empty value of `Degree`.
6180 types (20%) occur at least once with a non-empty value of `Degree`.
3640 lemmas (22%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: [ro-pos/ADJ]() (14078; 7% instances), [ro-pos/ADV]() (5180; 3% instances).

### `ADJ`

14078 [ro-pos/ADJ]() tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Definite.html">Definite</a>=Ind</tt> (13014; 92%), <tt><a href="Number.html">Number</a>=Sing</tt> (8953; 64%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (8795; 62%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (8657; 61%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (24; 0% of non-empty `Degree`): <em>superior, superioare, superioară, superiorilor</em>
* `Pos` (14048; 100% of non-empty `Degree`): <em>asemenea, mare, europene, prezentul, necesare, nou, standard, mari, europeană, prezenta</em>
* `Sup` (6; 0% of non-empty `Degree`): <em>extremă, perfectă, extreme</em>
* `EMPTY` (4): <em>am, a.m.</em>

`Degree` seems to be **lexical feature** of `ADJ`. 100% lemmas (3338) occur only with one value of `Degree`.

### `ADV`

5180 [ro-pos/ADV]() tokens (58% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (5180; 100%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (1; 0% of non-empty `Degree`): <em>superior</em>
* `Pos` (5157; 100% of non-empty `Degree`): <em>astfel, numai, mult, înainte, așa, chiar, puțin, aproape, încă, atunci</em>
* `Sup` (22; 0% of non-empty `Degree`): <em>extrem, perfect, nespus, excesiv, extraordinar, excelent</em>
* `EMPTY` (3677): <em>mai, ca, când, cum, iar, nici, decât, unde, foarte, cât</em>

`Degree` seems to be **lexical feature** of `ADV`. 100% lemmas (632) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (654; 100%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (46; 96%),
<tt>ADJ --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (41; 98%),
<tt>ADJ --[<a href="../dep/advmod.html">advmod</a>]--> ADJ</tt> (27; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (17; 89%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (12; 100%),
<tt>ADJ --[<a href="../dep/xcomp.html">xcomp</a>]--> ADJ</tt> (10; 100%),
<tt>ADJ --[<a href="../dep/obl.html">obl</a>]--> ADV</tt> (9; 60%),
<tt>ADJ --[<a href="../dep/advcl.html">advcl</a>]--> ADJ</tt> (9; 100%),
<tt>ADJ --[<a href="../dep/appos.html">appos</a>]--> ADJ</tt> (6; 100%).

