

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

3808 tokens (12%) have a non-empty value of `Degree`.
1742 types (16%) occur at least once with a non-empty value of `Degree`.
1533 lemmas (22%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: [hu-pos/ADJ]() (3608; 11% instances), [hu-pos/ADV]() (200; 1% instances).

### `ADJ`

3608 [hu-pos/ADJ]() tokens (85% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (3561; 99%), <tt><a href="Case.html">Case</a>=Nom</tt> (3313; 92%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (3249; 90%), <tt><a href="Number[psed].html">Number[psed]</a>=None</tt> (2062; 57%), <tt><a href="Number[psor].html">Number[psor]</a>=None</tt> (2060; 57%), <tt><a href="Person[psor].html">Person[psor]</a>=None</tt> (2060; 57%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (116; 3% of non-empty `Degree`): <em>utóbbi, újabb, korábbi, nagyobb, hosszabb, magasabb, erősebb, jobb, kisebb, főbb</em>
* `Pos` (3434; 95% of non-empty `Degree`): <em>magyar, új, parlamenti, nagy, orosz, című, szerb, százalékos, nemzetközi, múlt</em>
* `Sup` (58; 2% of non-empty `Degree`): <em>legnagyobb, legfontosabb, legfőbb, legkritikusabb, legmagasabb, legszebb, legfelkészültebb, leggyorsabban, legjobb, legkeményebb</em>
* `EMPTY` (624): <em>első, elmúlt, jövő, 2000., követően, várhatóan, lehetővé, látható, 1999., I.</em>

<table>
  <tr><th>Paradigm <i>nagy</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td><em>nagy</em></td><td><em>nagyobb, nagyobbik</em></td><td><em>legnagyobb</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Number[psed].html">Number[psed]</a>=None|<a href="Number[psor].html">Number[psor]</a>=None|<a href="Person[psor].html">Person[psor]</a>=None</tt></td><td><em>nagy</em></td><td><em>nagyobb</em></td><td><em>legnagyobb</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Number[psed].html">Number[psed]</a>=None|<a href="Number[psor].html">Number[psor]</a>=None|<a href="Person[psor].html">Person[psor]</a>=None</tt></td><td><em>nagyok</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 98% lemmas (1471) occur only with one value of `Degree`.

### `ADV`

200 [hu-pos/ADV]() tokens (9% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (196; 98%).

`ADV` tokens may have the following values of `Degree`:

* `Cmp` (16; 8% of non-empty `Degree`): <em>korábban, továbbra, előbb, inkább, jobban, kevésbé, közelebb, utóbb</em>
* `Pos` (183; 92% of non-empty `Degree`): <em>ki, fel, be, le, elő, vissza, össze, végül, alá, először</em>
* `Sup` (1; 1% of non-empty `Degree`): <em>legjobban</em>
* `EMPTY` (2074): <em>nem, már, még, csak, el, sem, is, úgy, ma, például</em>

<table>
  <tr><th>Paradigm <i>jól</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt></tt></td><td><em>jól</em></td><td><em>jobban</em></td><td><em>legjobban</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADV`. 96% lemmas (26) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/amod:att.html">amod:att</a>]--> ADJ</tt> (86; 69%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (80; 76%),
<tt>ADJ --[<a href="../dep/obl.html">obl</a>]--> ADJ</tt> (19; 100%),
<tt>ADJ --[<a href="../dep/nmod:obl.html">nmod:obl</a>]--> ADJ</tt> (5; 63%),
<tt>ADJ --[<a href="../dep/parataxis.html">parataxis</a>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/advmod:mode.html">advmod:mode</a>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/acl.html">acl</a>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<a href="../dep/appos.html">appos</a>]--> ADJ</tt> (1; 100%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (1; 100%).

