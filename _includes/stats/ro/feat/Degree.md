

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

14699 tokens (10%) have a non-empty value of `Degree`.
5115 types (22%) occur at least once with a non-empty value of `Degree`.
3179 lemmas (23%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: [ro-pos/ADJ]() (11001; 8% instances), [ro-pos/ADV]() (3698; 3% instances).

### `ADJ`

11001 [ro-pos/ADJ]() tokens (100% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Definite.html">Definite</a>=Ind</tt> (10215; 93%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (7116; 65%), <tt><a href="Number.html">Number</a>=Sing</tt> (6858; 62%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (6682; 61%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (17; 0% of non-empty `Degree`): <em>superior, superioare, superioară</em>
* `Pos` (10979; 100% of non-empty `Degree`): <em>asemenea, mare, membre, prevăzute, necesare, nou, europene, prezenta, europeană, prezentul</em>
* `Sup` (5; 0% of non-empty `Degree`): <em>extremă, perfectă</em>
* `EMPTY` (11): <em>auto-, așa, interesate, meșteșugite, non, personalizate, preumplut, strictul, timișeni, învinse</em>

<table>
  <tr><th>Paradigm <i>superior</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc,Nom|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td><em>superioară</em></td><td><em>superioară</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat,Gen|<a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>superioare</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>superior</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur</tt></td><td><em>superioare</em></td><td><em>superioare</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 100% lemmas (2901) occur only with one value of `Degree`.

### `ADV`

3698 [ro-pos/ADV]() tokens (58% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (3698; 100%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (7; 0% of non-empty `Degree`): <em>și, superior, întîi</em>
* `Pos` (3678; 99% of non-empty `Degree`): <em>numai, astfel, chiar, mult, înainte, puțin, așa, totuși, bine, și</em>
* `Sup` (13; 0% of non-empty `Degree`): <em>extrem, nespus, excesiv, perfect, excelent, extraordinar</em>
* `EMPTY` (2706): <em>mai, ca, când, cum, nici, iar, unde, decât, foarte, cât</em>

<table>
  <tr><th>Paradigm <i>și</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th></tr>
  <tr><td><tt></tt></td><td><em>și, și-</em></td><td><em>și</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 100% lemmas (502) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (541; 100%),
<tt>ADJ --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (39; 98%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (36; 100%),
<tt>ADJ --[<a href="../dep/advmod.html">advmod</a>]--> ADJ</tt> (29; 100%),
<tt>ADJ --[<a href="../dep/nmod.html">nmod</a>]--> ADV</tt> (18; 90%),
<tt>ADJ --[<a href="../dep/nmod.html">nmod</a>]--> ADJ</tt> (17; 100%),
<tt>ADJ --[<a href="../dep/advcl.html">advcl</a>]--> ADJ</tt> (12; 100%),
<tt>ADJ --[<a href="../dep/xcomp.html">xcomp</a>]--> ADJ</tt> (10; 100%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (9; 100%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (9; 100%).

