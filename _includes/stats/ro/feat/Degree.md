

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

20813 tokens (10%) have a non-empty value of `Degree`.
6522 types (21%) occur at least once with a non-empty value of `Degree`.
3804 lemmas (22%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: [ro-pos/ADJ]() (15363; 7% instances), [ro-pos/ADV]() (5450; 2% instances).

### `ADJ`

15363 [ro-pos/ADJ]() tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Definite.html">Definite</a>=Ind</tt> (14217; 93%), <tt><a href="Number.html">Number</a>=Sing</tt> (9889; 64%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (9616; 63%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (9326; 61%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (30; 0% of non-empty `Degree`): <em>superior, superioară, superioare, superiorilor</em>
* `Pos` (15327; 100% of non-empty `Degree`): <em>asemenea, mare, europene, nou, necesare, prezentul, europeană, mari, prezenta, european</em>
* `Sup` (6; 0% of non-empty `Degree`): <em>extremă, perfectă, extreme</em>
* `EMPTY` (5): <em>am, a.m., non</em>

`Degree` seems to be **lexical feature** of `ADJ`. 100% lemmas (3529) occur only with one value of `Degree`.

### `ADV`

5450 [ro-pos/ADV]() tokens (58% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (5450; 100%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (1; 0% of non-empty `Degree`): <em>superior</em>
* `Pos` (5427; 100% of non-empty `Degree`): <em>astfel, numai, mult, înainte, chiar, puțin, așa, atunci, încă, aproape</em>
* `Sup` (22; 0% of non-empty `Degree`): <em>extrem, perfect, nespus, excesiv, extraordinar, excelent</em>
* `EMPTY` (3989): <em>mai, ca, când, cum, iar, nici, decât, unde, cât, foarte</em>

`Degree` seems to be **lexical feature** of `ADV`. 100% lemmas (566) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (694; 100%),
<tt>ADJ --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (52; 98%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (48; 96%),
<tt>ADJ --[<a href="../dep/advmod.html">advmod</a>]--> ADJ</tt> (30; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (22; 92%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (12; 100%),
<tt>ADJ --[<a href="../dep/nmod.html">nmod</a>]--> ADV</tt> (10; 53%),
<tt>ADJ --[<a href="../dep/advcl.html">advcl</a>]--> ADJ</tt> (10; 100%),
<tt>ADJ --[<a href="../dep/xcomp.html">xcomp</a>]--> ADJ</tt> (9; 100%),
<tt>ADJ --[<a href="../dep/nmod.html">nmod</a>]--> ADJ</tt> (9; 100%).

