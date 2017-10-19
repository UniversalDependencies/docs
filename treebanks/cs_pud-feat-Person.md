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
The feature is used with 4 part-of-speech tags: [VERB](cs_pud-pos-VERB.html) (573; 3% instances), [AUX](cs_pud-pos-AUX.html) (324; 2% instances), [DET](cs_pud-pos-DET.html) (139; 1% instances), [PRON](cs_pud-pos-PRON.html) (128; 1% instances).

### `VERB`

573 [VERB](cs_pud-pos-VERB.html) tokens (33% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (573; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (573; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (573; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (571; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (571; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (565; 99%), <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (517; 90%), <tt><a href="Number.html">Number</a>=Sing</tt> (387; 68%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (313; 55%).

`VERB` tokens may have the following values of `Person`:

* `1` (44; 8% of non-empty `Person`): musíme Myslím Nevím hraju máme nemůžeme Jdeme Musím Míjíme Navštěvuji
* `2` (9; 2% of non-empty `Person`): musíte Hádáte Polož Skončíte máte víte čekáte
* `3` (520; 91% of non-empty `Person`): má je může říká mohou mají lze obsahuje pomáhá ukazuje
* `EMPTY` (1182): řekl mohl měl stal mít stala uvedla vedl bylo mohla

<table>
  <tr><th>Paradigm <i>mít</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td>nemá</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td></td><td></td><td>má</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg</tt></td><td></td><td></td><td>nemají</td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos</tt></td><td>máme</td><td>máte</td><td>mají</td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 94% lemmas (272) occur only with one value of `Person`.

### `AUX`

324 [AUX](cs_pud-pos-AUX.html) tokens (50% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (324; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (324; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (278; 86%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (278; 86%), <tt><a href="Polarity.html">Polarity</a>=Pos</tt> (254; 78%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (235; 73%), <tt><a href="Number.html">Number</a>=Sing</tt> (219; 68%).

`AUX` tokens may have the following values of `Person`:

* `1` (36; 11% of non-empty `Person`): jsem jsme budeme budu bych Nejsme bychom nebudu
* `2` (3; 1% of non-empty `Person`): jste byste
* `3` (285; 88% of non-empty `Person`): je by jsou bude není budou nebude nebudou nejsou bývají
* `EMPTY` (324): byl by bylo byla byly být byli nebyly nebyla nebyl

<table>
  <tr><th>Paradigm <i>být</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Number.html">Number</a>=Sing</tt></td><td>bych</td><td></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd|<a href="Number.html">Number</a>=Plur</tt></td><td>bychom</td><td>byste</td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Cnd</tt></td><td></td><td></td><td>by</td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Fut|<a href="Voice.html">Voice</a>=Act</tt></td><td>nebudu</td><td></td><td>nebude</td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td></td><td></td><td>není</td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Fut|<a href="Voice.html">Voice</a>=Act</tt></td><td>budu</td><td></td><td>bude</td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td>jsem</td><td></td><td>je</td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Fut|<a href="Voice.html">Voice</a>=Act</tt></td><td></td><td></td><td>nebudou</td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Neg|<a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td>Nejsme</td><td></td><td>nejsou</td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Fut|<a href="Voice.html">Voice</a>=Act</tt></td><td>budeme</td><td></td><td>budou</td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Plur|<a href="Polarity.html">Polarity</a>=Pos|<a href="Tense.html">Tense</a>=Pres|<a href="Voice.html">Voice</a>=Act</tt></td><td>jsme</td><td>jste</td><td>jsou</td></tr>
</table>

### `DET`

139 [DET](cs_pud-pos-DET.html) tokens (17% of all `DET` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `DET` and `Person` co-occurred: <tt><a href="Poss.html">Poss</a>=Yes</tt> (139; 100%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (139; 100%), <tt><a href="Animacy.html">Animacy</a>=EMPTY</tt> (134; 96%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (131; 94%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (94; 68%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (92; 66%), <tt><a href="Number[psor].html">Number[psor]</a>=Sing</tt> (87; 63%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (84; 60%).

`DET` tokens may have the following values of `Person`:

* `1` (26; 19% of non-empty `Person`): n naše mých Moje mé můj naší naším náš
* `2` (1; 1% of non-empty `Person`): vašich
* `3` (112; 81% of non-empty `Person`): jeho jejich její jejichž jejím jehož jejích jejího jejíž
* `EMPTY` (674): to který které která své mnoho toho kteří tím tento

### `PRON`

128 [PRON](cs_pud-pos-PRON.html) tokens (22% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (128; 100%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (128; 100%), <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (98; 77%), <tt><a href="Number.html">Number</a>=Sing</tt> (86; 67%), <tt><a href="PrepCase.html">PrepCase</a>=EMPTY</tt> (83; 65%).

`PRON` tokens may have the following values of `Person`:

* `1` (23; 18% of non-empty `Person`): mě nás nám já mi me
* `2` (4; 3% of non-empty `Person`): Tebe You vám vás
* `3` (101; 79% of non-empty `Person`): ho nich ní jí mu ji něj jim ním je
* `EMPTY` (450): se si co což nic něco kdo jenž nichž níž

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (42; 60%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (25; 63%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (2; 67%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> PRON</tt> (1; 100%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (1; 100%).

