

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This feature is universal but the values `Cop` are language-specific.
It occurs with 4 different values: `Cop`, `Ger`, `Inf`, `Part`.

1328 tokens (6%) have a non-empty value of `VerbForm`.
466 types (8%) occur at least once with a non-empty value of `VerbForm`.
380 lemmas (10%) occur at least once with a non-empty value of `VerbForm`.
The feature is used with 6 part-of-speech tags: [ga-pos/NOUN]() (766; 3% instances), [ga-pos/VERB]() (390; 2% instances), [ga-pos/ADJ]() (149; 1% instances), [ga-pos/SCONJ]() (21; 0% instances), [ga-pos/PART]() (1; 0% instances), [ga-pos/X]() (1; 0% instances).

### `NOUN`

766 [ga-pos/NOUN]() tokens (12% of all `NOUN` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `NOUN` and `VerbForm` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (766; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (766; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (766; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (746; 97%), <tt><a href="Form.html">Form</a>=EMPTY</tt> (446; 58%).

`NOUN` tokens may have the following values of `VerbForm`:

* `Ger` (16; 2% of non-empty `VerbForm`): <em>obair, caint, iascaireacht, béicíl, comhrá, magadh, strapadóireacht, chaint</em>
* `Inf` (750; 98% of non-empty `VerbForm`): <em>fáil, bheith, dul, chur, dhéanamh, rá, cur, tabhairt, thabhairt, déanamh</em>
* `EMPTY` (5589): <em>níos, rud, duine, chuid, fear, lá, daoine, leith, chéile, bhliain</em>

<table>
  <tr><th>Paradigm <i>obair</i></th><th><tt>Inf</tt></th><th><tt>Ger</tt></th></tr>
  <tr><td><tt></tt></td><td><em>obair</em></td><td><em>obair</em></td></tr>
</table>

`VerbForm` seems to be **lexical feature** of `NOUN`. 100% lemmas (275) occur only with one value of `VerbForm`.

### `VERB`

390 [ga-pos/VERB]() tokens (17% of all `VERB` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `VERB` and `VerbForm` co-occurred: <tt><a href="Voice.html">Voice</a>=EMPTY</tt> (390; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (374; 96%), <tt><a href="Form.html">Form</a>=EMPTY</tt> (336; 86%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (251; 64%).

`VERB` tokens may have the following values of `VerbForm`:

* `Cop` (390; 100% of non-empty `VerbForm`): <em>is, ba, gur, ní, nach, b', gurb, níor, ar, gurbh</em>
* `EMPTY` (1911): <em>bhí, tá, raibh, atá, bhfuil, bheidh, beidh, thug, tháinig, mbeidh</em>

### `ADJ`

149 [ga-pos/ADJ]() tokens (13% of all `ADJ` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `ADJ` and `VerbForm` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (149; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (149; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (149; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (149; 100%).

`ADJ` tokens may have the following values of `VerbForm`:

* `Part` (149; 100% of non-empty `VerbForm`): <em>déanta, bunaithe, imithe, leagtha, ráite, scríofa, tugtha, Aontaithe, bailithe, briste</em>
* `EMPTY` (1027): <em>mó, maith, amháin, mór, fada, léir, áirithe, mhaith, beag, éigin</em>

`VerbForm` seems to be **lexical feature** of `ADJ`. 100% lemmas (96) occur only with one value of `VerbForm`.

### `SCONJ`

21 [ga-pos/SCONJ]() tokens (6% of all `SCONJ` tokens) have a non-empty value of `VerbForm`.

`SCONJ` tokens may have the following values of `VerbForm`:

* `Cop` (21; 100% of non-empty `VerbForm`): <em>más, dar, ós, Sular, murab</em>
* `EMPTY` (344): <em>ach, nuair, mar, má, dá, go, agus, cé, ná, mura</em>

### `PART`

1 [ga-pos/PART]() tokens (0% of all `PART` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `PART` and `VerbForm` co-occurred: <tt><a href="PartType.html">PartType</a>=EMPTY</tt> (1; 100%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (1; 100%).

`PART` tokens may have the following values of `VerbForm`:

* `Cop` (1; 100% of non-empty `VerbForm`): <em>Ní</em>
* `EMPTY` (1533): <em>a, go, ní, d', nach, gur, is, Ó, do, níor</em>

### `X`

1 [ga-pos/X]() tokens (0% of all `X` tokens) have a non-empty value of `VerbForm`.

The most frequent other feature values with which `X` and `VerbForm` co-occurred: <tt><a href="Dialect.html">Dialect</a>=Ulster</tt> (1; 100%), <tt><a href="PronType.html">PronType</a>=EMPTY</tt> (1; 100%).

`X` tokens may have the following values of `VerbForm`:

* `Cop` (1; 100% of non-empty `VerbForm`): <em>Caidé</em>
* `EMPTY` (264): <em>san, (2), (a), (b), so, (1), (c), (3), (4), Co.</em>

## Relations with Agreement in `VerbForm`

The 10 most frequent relations where parent and child node agree in `VerbForm`:
<tt>NOUN --[<a href="../dep/conj.html">conj</a>]--> NOUN</tt> (26; 70%),
<tt>ADJ --[<a href="../dep/conj.html">conj</a>]--> ADJ</tt> (4; 80%).

