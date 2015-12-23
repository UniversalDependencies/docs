

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

2699 tokens (10%) have a non-empty value of `Degree`.
1308 types (14%) occur at least once with a non-empty value of `Degree`.
1124 lemmas (18%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: [hu-pos/ADJ]() (2534; 10% instances), [hu-pos/ADV]() (165; 1% instances).

### `ADJ`

2534 [hu-pos/ADJ]() tokens (77% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (2534; 100%), <tt><a href="Number[psed].html">Number[psed]</a>=None</tt> (2534; 100%), <tt><a href="Number[psor].html">Number[psor]</a>=None</tt> (2531; 100%), <tt><a href="Person[psor].html">Person[psor]</a>=None</tt> (2531; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (2498; 99%), <tt><a href="Case.html">Case</a>=Nom</tt> (2294; 91%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (96; 4% of non-empty `Degree`): <em>utóbbi, újabb, korábbi, nagyobb, magasabb, erősebb, hosszabb, jobb, főbb, gyorsabb</em>
* `Pos` (2389; 94% of non-empty `Degree`): <em>magyar, új, című, orosz, nagy, olyan, egész, cseh, jó, egyes</em>
* `Sup` (49; 2% of non-empty `Degree`): <em>legnagyobb, legjobb, legfontosabb, legmagasabb, legszebb, legkritikusabb, legerősebb, legfelkészültebb, legfőbb, leggyorsabb</em>
* `EMPTY` (763): <em>első, elmúlt, jövő, második, következő, követően, való, készült, várható, várhatóan</em>

<table>
  <tr><th>Paradigm <i>új</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Plur</tt></td><td></td><td><em>újabbakkal</em></td><td></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Sing</tt></td><td><em>új</em></td><td><em>újabb</em></td><td><em>legújabb</em></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 97% lemmas (1080) occur only with one value of `Degree`.

### `ADV`

165 [hu-pos/ADV]() tokens (8% of all `ADV` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADV` and `Degree` co-occurred: <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (158; 96%).

`ADV` tokens may have the following values of `Degree`:

* `Pos` (165; 100% of non-empty `Degree`): <em>ki, fel, be, elő, le, vissza, össze, alá, ide, oda</em>
* `EMPTY` (1859): <em>nem, már, még, csak, el, is, úgy, ma, sem, amikor</em>

`Degree` seems to be **lexical feature** of `ADV`. 100% lemmas (13) occur only with one value of `Degree`.

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (64; 75%),
<tt>ADJ --[<a href="../dep/amod:att.html">amod:att</a>]--> ADJ</tt> (44; 58%),
<tt>ADJ --[<a href="../dep/remnant.html">remnant</a>]--> ADJ</tt> (15; 100%),
<tt>ADJ --[<a href="../dep/advmod:mode.html">advmod:mode</a>]--> ADJ</tt> (3; 100%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/parataxis.html">parataxis</a>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/acl.html">acl</a>]--> ADJ</tt> (1; 100%),
<tt>ADJ --[<a href="../dep/appos.html">appos</a>]--> ADJ</tt> (1; 100%).

