---
layout: base
title:  'Statistics of Person in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

1163 tokens (6%) have a non-empty value of `Person`.
462 types (6%) occur at least once with a non-empty value of `Person`.
299 lemmas (6%) occur at least once with a non-empty value of `Person`.
The feature is used with 4 part-of-speech tags: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (548; 3% instances), <tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (348; 2% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt> (139; 1% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> (128; 1% instances).

### `VERB`

548 <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> tokens (32% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="cs_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (548; 100%), <tt><a href="cs_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (548; 100%), <tt><a href="cs_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (548; 100%), <tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (546; 100%), <tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (546; 100%), <tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (542; 99%), <tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (496; 91%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (367; 67%), <tt><a href="cs_pud-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (313; 57%).

`VERB` tokens may have the following values of `Person`:

* `1` (44; 8% of non-empty `Person`): <em>musíme, Myslím, Nevím, hraju, máme, nemůžeme, Jdeme, Musím, Míjíme, Navštěvuji</em>
* `2` (9; 2% of non-empty `Person`): <em>musíte, Hádáte, Polož, Skončíte, máte, víte, čekáte</em>
* `3` (495; 90% of non-empty `Person`): <em>má, může, říká, mohou, mají, lze, obsahuje, pomáhá, ukazuje, existují</em>
* `EMPTY` (1171): <em>řekl, mohl, měl, stal, mít, stala, uvedla, vedl, mohla, pracoval</em>

<table>
  <tr><th>Paradigm <i>mít</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt></tt></td><td></td><td></td><td><em>nemá</em></td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt></tt></td><td></td><td></td><td><em>má</em></td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt></tt></td><td></td><td></td><td><em>nemají</em></td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt></tt></td><td><em>máme</em></td><td><em>máte</em></td><td><em>mají</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 94% lemmas (270) occur only with one value of `Person`.

### `AUX`

348 <tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> tokens (51% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="cs_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (348; 100%), <tt><a href="cs_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (348; 100%), <tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (302; 87%), <tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (302; 87%), <tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (274; 79%), <tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (256; 74%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (239; 69%).

`AUX` tokens may have the following values of `Person`:

* `1` (36; 10% of non-empty `Person`): <em>jsem, jsme, budeme, budu, bych, Nejsme, bychom, nebudu</em>
* `2` (3; 1% of non-empty `Person`): <em>jste, byste</em>
* `3` (309; 89% of non-empty `Person`): <em>je, by, jsou, bude, není, budou, nebude, nebudou, nejsou, bývají</em>
* `EMPTY` (335): <em>byl, by, bylo, byla, byly, být, byli, nebyly, nebyla, nebyl</em>

<table>
  <tr><th>Paradigm <i>být</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td><em>bych</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td><em>bychom</em></td><td><em>byste</em></td><td></td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt></tt></td><td></td><td></td><td><em>by</em></td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>nebudu</em></td><td></td><td><em>nebude</em></td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td></td><td></td><td><em>není</em></td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>budu</em></td><td></td><td><em>bude</em></td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>jsem</em></td><td></td><td><em>je</em></td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td></td><td></td><td><em>nebudou</em></td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>Nejsme</em></td><td></td><td><em>nejsou</em></td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>budeme</em></td><td></td><td><em>budou</em></td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>jsme</em></td><td><em>jste</em></td><td><em>jsou</em></td></tr>
</table>

### `DET`

139 <tt><a href="cs_pud-pos-DET.html">DET</a></tt> tokens (16% of all `DET` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `DET` and `Person` co-occurred: <tt><a href="cs_pud-feat-Poss.html">Poss</a></tt><tt>=Yes</tt> (139; 100%), <tt><a href="cs_pud-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (139; 100%), <tt><a href="cs_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (134; 96%), <tt><a href="cs_pud-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (131; 94%), <tt><a href="cs_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (94; 68%), <tt><a href="cs_pud-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (92; 66%), <tt><a href="cs_pud-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt> (87; 63%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (84; 60%).

`DET` tokens may have the following values of `Person`:

* `1` (26; 19% of non-empty `Person`): <em>n, naše, mých, Moje, mé, můj, naší, naším, náš</em>
* `2` (1; 1% of non-empty `Person`): <em>vašich</em>
* `3` (112; 81% of non-empty `Person`): <em>jeho, jejich, její, jejichž, jejím, jehož, jejích, jejího, jejíž</em>
* `EMPTY` (705): <em>to, který, které, která, své, mnoho, toho, kteří, tím, tento</em>

### `PRON`

128 <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> tokens (22% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="cs_pud-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (128; 100%), <tt><a href="cs_pud-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (128; 100%), <tt><a href="cs_pud-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (98; 77%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (86; 67%), <tt><a href="cs_pud-feat-PrepCase.html">PrepCase</a></tt><tt>=EMPTY</tt> (83; 65%).

`PRON` tokens may have the following values of `Person`:

* `1` (23; 18% of non-empty `Person`): <em>mě, nás, nám, já, mi, me</em>
* `2` (4; 3% of non-empty `Person`): <em>Tebe, You, vám, vás</em>
* `3` (101; 79% of non-empty `Person`): <em>ho, nich, ní, jí, mu, ji, něj, jim, ním, je</em>
* `EMPTY` (448): <em>se, si, co, což, nic, něco, kdo, jenž, nichž, níž</em>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="cs_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (41; 59%),
<tt>VERB --[<tt><a href="cs_pud-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (24; 62%),
<tt>AUX --[<tt><a href="cs_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (2; 100%),
<tt>VERB --[<tt><a href="cs_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (2; 67%),
<tt>AUX --[<tt><a href="cs_pud-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (1; 100%),
<tt>VERB --[<tt><a href="cs_pud-dep-advcl.html">advcl</a></tt>]--> PRON</tt> (1; 100%).

