

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This feature is universal.
It occurs with 3 different values: `Cmp`, `Pos`, `Sup`.

24745 tokens (8%) have a non-empty value of `Degree`.
4449 types (14%) occur at least once with a non-empty value of `Degree`.
2770 lemmas (12%) occur at least once with a non-empty value of `Degree`.
The feature is used with 2 part-of-speech tags: [no-pos/ADJ]() (24744; 8% instances), [no-pos/DET]() (1; 0% instances).

### `ADJ`

24744 [no-pos/ADJ]() tokens (92% of all `ADJ` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `ADJ` and `Degree` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (17353; 70%), <tt><a href="Number.html">Number</a>=Sing</tt> (15931; 64%), <tt><a href="Definite.html">Definite</a>=Ind</tt> (13379; 54%).

`ADJ` tokens may have the following values of `Degree`:

* `Cmp` (2238; 9% of non-empty `Degree`): <em>mer, flere, tidligere, bedre, større, mindre, videre, lenger, senere, høyere</em>
* `Pos` (21364; 86% of non-empty `Degree`): <em>mange, norske, mye, første, store, nye, hele, helt, litt, godt</em>
* `Sup` (1142; 5% of non-empty `Degree`): <em>mest, beste, fleste, minst, største, best, viktigste, fremst, verste, nærmest</em>
* `EMPTY` (2065): <em>økt, 22., sittende, tilsvarende, stående, bekymret, forurensende, knyttet, økende, 2.</em>

<table>
  <tr><th>Paradigm <i>mye</i></th><th><tt>Pos</tt></th><th><tt>Cmp</tt></th><th><tt>Sup</tt></th></tr>
  <tr><td><tt>_</tt></td><td></td><td><em>mer, mere</em></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def</tt></td><td></td><td></td><td><em>meste</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def|<a href="Number.html">Number</a>=Sing</tt></td><td><em>mye</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind</tt></td><td></td><td></td><td><em>mest</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Gender.html">Gender</a>=Neut|<a href="Number.html">Number</a>=Sing</tt></td><td><em>mye</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Ind|<a href="Number.html">Number</a>=Sing</tt></td><td><em>mye</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur</tt></td><td><em>mye</em></td><td></td><td></td></tr>
</table>

`Degree` seems to be **lexical feature** of `ADJ`. 96% lemmas (2646) occur only with one value of `Degree`.

### `DET`

1 [no-pos/DET]() tokens (0% of all `DET` tokens) have a non-empty value of `Degree`.

The most frequent other feature values with which `DET` and `Degree` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (1; 100%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (1; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1; 100%), <tt><a href="Number.html">Number</a>=Plur</tt> (1; 100%).

`DET` tokens may have the following values of `Degree`:

* `Pos` (1; 100% of non-empty `Degree`): <em>mine</em>
* `EMPTY` (16472): <em>en, et, den, de, det, andre, sin, alle, denne, noen</em>

## Relations with Agreement in `Degree`

The 10 most frequent relations where parent and child node agree in `Degree`:
<tt>ADJ --[<a href="../dep/advmod.html">advmod</a>]--> ADJ</tt> (1084; 54%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (729; 82%),
<tt>ADJ --[<a href="../dep/amod.html">amod</a>]--> ADJ</tt> (50; 54%),
<tt>ADJ --[<a href="../dep/advcl.html">advcl</a>]--> ADJ</tt> (30; 67%),
<tt>ADJ --[<a href="../dep/nsubj.html">nsubj</a>]--> ADJ</tt> (21; 60%),
<tt>ADJ --[<a href="../dep/csubj.html">csubj</a>]--> ADJ</tt> (15; 71%),
<tt>ADJ --[<a href="../dep/remnant.html">remnant</a>]--> ADJ</tt> (4; 57%),
<tt>ADJ --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> ADJ</tt> (2; 100%),
<tt>ADJ --[<a href="../dep/dobj.html">dobj</a>]--> ADJ</tt> (2; 67%),
<tt>ADJ --[<a href="../dep/det.html">det</a>]--> ADJ</tt> (1; 100%).

