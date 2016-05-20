

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

5010 tokens (12%) have a non-empty value of `Degree`.
2180 types (16%) occur at least once with a non-empty value of `Degree`.
1885 lemmas (21%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: [hu-pos/ADJ]() (4708; 11% instances), [hu-pos/ADV]() (302; 1% instances).

### `ADJ`

4708 [hu-pos/ADJ]() tokens (85% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (4648; 99%), <tt><a href="Case.html">Case</a>=Nom</tt> (4301; 91%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (4210; 89%), <tt><a href="Number[psed].html">Number[psed]</a>=None</tt> (2534; 54%), <tt><a href="Number[psor].html">Number[psor]</a>=None</tt> (2531; 54%), <tt><a href="Person[psor].html">Person[psor]</a>=None</tt> (2531; 54%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (160; 3% of non-empty `Degree`): <em>utóbbi, újabb, korábbi, nagyobb, hosszabb, magasabb, erősebb, jobb, kisebb, főbb</em>
* `Pos` (4453; 95% of non-empty `Degree`): <em>magyar, új, orosz, nagy, gazdasági, százalékos, parlamenti, nemzetközi, politikai, évi</em>
* `Sup` (95; 2% of non-empty `Degree`): <em>legnagyobb, legfontosabb, legfőbb, legjobb, legfelsőbb, legmagasabb, legszebb, legkritikusabb, legsúlyosabb, legbékésebbnek</em>
* `EMPTY` (835): <em>első, második, elmúlt, jövő, 2000., 1999., következő, követően, való, készült</em>

<table>
  <tr><th>Paradigm <i>nagy</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>nagy</em></td><td><em>nagyobb, nagyobbik</em></td><td><em>legnagyobb</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Number[psed].html">Number[psed]</a>=None|<a href="Number[psor].html">Number[psor]</a>=None|<a href="Person[psor].html">Person[psor]</a>=None</tt></td><td><em>nagy</em></td><td><em>nagyobb</em></td><td><em>legnagyobb</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Number[psed].html">Number[psed]</a>=None|<a href="Number[psor].html">Number[psor]</a>=None|<a href="Person[psor].html">Person[psor]</a>=None</tt></td><td><em>nagyok</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (1805) occur only with one value of `Degree`.

### `ADV`

302 [hu-pos/ADV]() tokens (10% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (295; 98%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (31; 10% of non-empty `Degree`): <em>korábban, inkább, továbbra, előbb, jobban, kevésbé, közelebb, utóbb</em>
* `Pos` (269; 89% of non-empty `Degree`): <em>ki, fel, be, le, elő, vissza, végül, össze, jól, először</em>
* `Sup` (2; 1% of non-empty `Degree`): <em>leginkább, legjobban</em>
* `EMPTY` (2813): <em>nem, már, még, csak, el, sem, is, úgy, például, akkor</em>

<table>
  <tr><th>Paradigm <i>jól</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>jól</em></td><td><em>jobban</em></td><td><em>legjobban</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 91% lemmas (29) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/amod:att.html">amod:att</a>]--> ADJ</tt> (108; 68%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (101; 78%),
<tt>ADJ --[<a href="../dep/remnant.html">remnant</a>]--> ADJ</tt> (29; 100%),
<tt>ADJ --[<a href="../dep/nmod.html">nmod</a>]--> ADJ</tt> (29; 100%),
<tt>ADJ --[<a href="../dep/advmod:mode.html">advmod:mode</a>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<a href="../dep/parataxis.html">parataxis</a>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/csubj.html">csubj</a>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/acl.html">acl</a>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<a href="../dep/appos.html">appos</a>]--> ADJ</tt> (1; 100%).

