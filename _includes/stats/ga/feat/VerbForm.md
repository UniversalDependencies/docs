

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This feature is universal but the values `Cop`, `Vnoun` are language-specific.
It occurs with 4 different values: `Cop`, `Inf`, `Part`, `Vnoun`.

760 tokens (5%) have a non-empty value of `VerbForm`.
322 types (8%) occur at least once with a non-empty value of `VerbForm`.
260 lemmas (10%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 5 part-of-speech tags: [ga-pos/NOUN]() (442; 3% instances), [ga-pos/AUX]() (222; 2% instances), [ga-pos/ADJ]() (84; 1% instances), [ga-pos/SCONJ]() (11; 0% instances), [ga-pos/X]() (1; 0% instances).

### `NOUN`

442 [ga-pos/NOUN]() tokens (12% of all `NOUN` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `NOUN` and `VerbForm` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (442; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (442; 100%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (442; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (428; 97%), <tt><a href="Form.html">Form</a>=EMPTY</tt> (247; 56%).

`NOUN` tokens may have the following values of `VerbForm`:

* `Inf` (364; 82% of non-empty `VerbForm`): <em>fáil, bheith, chur, dhéanamh, rá, thabhairt, dul, cur, tabhairt, úsáid</em>
* `Vnoun` (78; 18% of non-empty `VerbForm`): <em>dul, cur, déanamh, faire, gabháil, goil, lorg, obair, plé, súil</em>
* `EMPTY` (3288): <em>rud, duine, daoine, leith, chuid, lá, níos, áit, alt, ceann</em>

<table>
  <tr><th>Paradigm <i>cur</i></th><th><tt>Inf</tt></th><th><tt>Vnoun</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>cur</em></td><td><em>cur</em></td></tr>
  <tr><td><tt><a href="Form.html">Form</a>=Ecl</tt></td><td><em>gcur</em></td><td></td></tr>
  <tr><td><tt><a href="Form.html">Form</a>=Len</tt></td><td><em>chur</em></td><td></td></tr>
</table>

### `AUX`

222 [ga-pos/AUX]() tokens (99% of all `AUX` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `AUX` and `VerbForm` co-occurred: <tt><a href="Form.html">Form</a>=EMPTY</tt> (197; 89%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (192; 86%), <tt><a href="Polarity.html">Polarity</a>=EMPTY</tt> (173; 78%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (143; 64%).

`AUX` tokens may have the following values of `VerbForm`:

* `Cop` (222; 100% of non-empty `VerbForm`): <em>is, ba, ní, gur, nach, b', ar, níor, gurb, an</em>
* `EMPTY` (2): <em>is</em>

### `ADJ`

84 [ga-pos/ADJ]() tokens (12% of all `ADJ` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `ADJ` and `VerbForm` co-occurred: <tt><a href="Case.html">Case</a>=EMPTY</tt> (84; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (84; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (84; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (84; 100%).

`ADJ` tokens may have the following values of `VerbForm`:

* `Part` (84; 100% of non-empty `VerbForm`): <em>déanta, bunaithe, Aontaithe, briste, ráite, bailithe, bainte, caite, fásta, glactha</em>
* `EMPTY` (609): <em>maith, mó, amháin, mór, fada, áirithe, beag, léir, mhór, chéanna</em>

`VerbForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (53) occur only with one value of `VerbForm`.

### `SCONJ`

11 [ga-pos/SCONJ]() tokens (5% of all `SCONJ` tokens) have a non-empty value of `VerbForm`.

`SCONJ` tokens may have the following values of `VerbForm`:

* `Cop` (11; 100% of non-empty `VerbForm`): <em>más, ós, dar, Sular</em>
* `EMPTY` (210): <em>ach, nuair, mar, má, go, dá, agus, cé, amhail, ná</em>

### `X`

1 [ga-pos/X]() tokens (1% of all `X` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `X` and `VerbForm` co-occurred: <tt><a href="Dialect.html">Dialect</a>=Ulster</tt> (1; 100%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (1; 100%), <tt><a href="Abbr.html">Abbr</a>=EMPTY</tt> (1; 100%).

`X` tokens may have the following values of `VerbForm`:

* `Cop` (1; 100% of non-empty `VerbForm`): <em>Caidé</em>
* `EMPTY` (150): <em>san, (1), (2), so, (c), (4), (a), (b), Uimh., FÁS</em>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (19; 79%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (2; 100%).

