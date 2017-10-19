---
layout: base
title:  'Statistics of Person in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Features: `Person`

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

1164 tokens (6%) have a non-empty value of `Person`.
463 types (6%) occur at least once with a non-empty value of `Person`.
300 lemmas (6%) occur at least once with a non-empty value of `Person`.
The feature is used with 4 part-of-speech tags: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (573; 3% instances), <tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (324; 2% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt> (139; 1% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> (128; 1% instances).

### `VERB`

573 <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> tokens (33% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="cs_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (573; 100%), <tt><a href="cs_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (573; 100%), <tt><a href="cs_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (573; 100%), <tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (571; 100%), <tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (571; 100%), <tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (565; 99%), <tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (517; 90%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (387; 68%), <tt><a href="cs_pud-feat-Aspect.html">Aspect</a></tt><tt>=Imp</tt> (313; 55%).

`VERB` tokens may have the following values of `Person`:

* `1` (44; 8% of non-empty `Person`): musíme Myslím Nevím hraju máme nemůžeme Jdeme Musím Míjíme Navštěvuji
* `2` (9; 2% of non-empty `Person`): musíte Hádáte Polož Skončíte máte víte čekáte
* `3` (520; 91% of non-empty `Person`): má je může říká mohou mají lze obsahuje pomáhá ukazuje
* `EMPTY` (1182): řekl mohl měl stal mít stala uvedla vedl bylo mohla

<table>
  <tr><th>Paradigm <i>mít</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt></tt></td><td></td><td></td><td>nemá</td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt></tt></td><td></td><td></td><td>má</td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt></tt></td><td></td><td></td><td>nemají</td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt></tt></td><td>máme</td><td>máte</td><td>mají</td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 94% lemmas (272) occur only with one value of `Person`.

### `AUX`

324 <tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> tokens (50% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="cs_pud-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (324; 100%), <tt><a href="cs_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (324; 100%), <tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (278; 86%), <tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt> (278; 86%), <tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (254; 78%), <tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (235; 73%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (219; 68%).

`AUX` tokens may have the following values of `Person`:

* `1` (36; 11% of non-empty `Person`): jsem jsme budeme budu bych Nejsme bychom nebudu
* `2` (3; 1% of non-empty `Person`): jste byste
* `3` (285; 88% of non-empty `Person`): je by jsou bude není budou nebude nebudou nejsou bývají
* `EMPTY` (324): byl by bylo byla byly být byli nebyly nebyla nebyl

<table>
  <tr><th>Paradigm <i>být</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td>bych</td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td>bychom</td><td>byste</td><td></td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Cnd</tt></tt></td><td></td><td></td><td>by</td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td>nebudu</td><td></td><td>nebude</td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td></td><td></td><td>není</td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td>budu</td><td></td><td>bude</td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td>jsem</td><td></td><td>je</td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td></td><td></td><td>nebudou</td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td>Nejsme</td><td></td><td>nejsou</td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td>budeme</td><td></td><td>budou</td></tr>
  <tr><td><tt><tt><a href="cs_pud-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Plur</tt>|<tt><a href="cs_pud-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt>|<tt><a href="cs_pud-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="cs_pud-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td>jsme</td><td>jste</td><td>jsou</td></tr>
</table>

### `DET`

139 <tt><a href="cs_pud-pos-DET.html">DET</a></tt> tokens (17% of all `DET` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `DET` and `Person` co-occurred: <tt><a href="cs_pud-feat-Poss.html">Poss</a></tt><tt>=Yes</tt> (139; 100%), <tt><a href="cs_pud-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (139; 100%), <tt><a href="cs_pud-feat-Animacy.html">Animacy</a></tt><tt>=EMPTY</tt> (134; 96%), <tt><a href="cs_pud-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (131; 94%), <tt><a href="cs_pud-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (94; 68%), <tt><a href="cs_pud-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (92; 66%), <tt><a href="cs_pud-feat-Number-psor.html">Number[psor]</a></tt><tt>=Sing</tt> (87; 63%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (84; 60%).

`DET` tokens may have the following values of `Person`:

* `1` (26; 19% of non-empty `Person`): n naše mých Moje mé můj naší naším náš
* `2` (1; 1% of non-empty `Person`): vašich
* `3` (112; 81% of non-empty `Person`): jeho jejich její jejichž jejím jehož jejích jejího jejíž
* `EMPTY` (674): to který které která své mnoho toho kteří tím tento

### `PRON`

128 <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> tokens (22% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="cs_pud-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (128; 100%), <tt><a href="cs_pud-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (128; 100%), <tt><a href="cs_pud-feat-Variant.html">Variant</a></tt><tt>=EMPTY</tt> (98; 77%), <tt><a href="cs_pud-feat-Number.html">Number</a></tt><tt>=Sing</tt> (86; 67%), <tt><a href="cs_pud-feat-PrepCase.html">PrepCase</a></tt><tt>=EMPTY</tt> (83; 65%).

`PRON` tokens may have the following values of `Person`:

* `1` (23; 18% of non-empty `Person`): mě nás nám já mi me
* `2` (4; 3% of non-empty `Person`): Tebe You vám vás
* `3` (101; 79% of non-empty `Person`): ho nich ní jí mu ji něj jim ním je
* `EMPTY` (450): se si co což nic něco kdo jenž nichž níž

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<tt><a href="cs_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (42; 60%),
<tt>VERB --[<tt><a href="cs_pud-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (25; 63%),
<tt>VERB --[<tt><a href="cs_pud-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (2; 67%),
<tt>VERB --[<tt><a href="cs_pud-dep-advcl.html">advcl</a></tt>]--> PRON</tt> (1; 100%),
<tt>AUX --[<tt><a href="cs_pud-dep-conj.html">conj</a></tt>]--> VERB</tt> (1; 100%).

