---
layout: base
title:  'Statistics of Voice in UD_Pali-PaliCanon'
udver: '2'
---

## Treebank Statistics: UD_Pali-PaliCanon: Features: `Voice`

This feature is universal but the values `CauCau` are language-specific.
It occurs with 4 different values: `Act`, `Cau`, `CauCau`, `Pass`.

210 tokens (10%) have a non-empty value of `Voice`.
80 types (13%) occur at least once with a non-empty value of `Voice`.
58 lemmas (14%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: <tt><a href="pi_palicanon-pos-VERB.html">VERB</a></tt> (183; 9% instances), <tt><a href="pi_palicanon-pos-AUX.html">AUX</a></tt> (27; 1% instances).

### `VERB`

183 <tt><a href="pi_palicanon-pos-VERB.html">VERB</a></tt> tokens (76% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="pi_palicanon-feat-Number.html">Number</a></tt><tt>=Sing</tt> (155; 85%), <tt><a href="pi_palicanon-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (123; 67%), <tt><a href="pi_palicanon-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (123; 67%), <tt><a href="pi_palicanon-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (119; 65%), <tt><a href="pi_palicanon-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (117; 64%), <tt><a href="pi_palicanon-feat-Person.html">Person</a></tt><tt>=3</tt> (116; 63%), <tt><a href="pi_palicanon-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (97; 53%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (155; 85% of non-empty `Voice`): <em>hoti, sati, ahosi, ahu, udapādi, okkanto, pātubhavati, vijāyati, bhavanti, ahesuṃ</em>
* `Cau` (3; 2% of non-empty `Voice`): <em>anudhāriyamāne, paricārayamāno, upaṭṭhāpesi</em>
* `CauCau` (1; 1% of non-empty `Voice`): <em>kārāpesi</em>
* `Pass` (24; 13% of non-empty `Voice`): <em>abhisambuddho, patiṭṭhita, samannāgato, Adhigato, Anatikkamanīyā, Yuttāni, ananussutesu, jāto, khīṇa, nirujjhanti</em>
* `EMPTY` (59): <em>ahosi, atikkamm, ahesuṃ, uppajjati, acchādetvā, cavitvā, khīṇa, ohāretvā, pariharitvā, Ito</em>

<table>
  <tr><th>Paradigm <i>atikkamati</i></th><th><tt>Act</tt></th><th><tt>Pass</tt></th></tr>
  <tr><td><tt><tt><a href="pi_palicanon-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="pi_palicanon-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="pi_palicanon-feat-Number.html">Number</a></tt><tt>=Sing</tt>|<tt><a href="pi_palicanon-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt>|<tt><a href="pi_palicanon-feat-Tense.html">Tense</a></tt><tt>=Fut</tt>|<tt><a href="pi_palicanon-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td></td><td><em>Anatikkamanīyā</em></td></tr>
  <tr><td><tt><tt><a href="pi_palicanon-feat-VerbForm.html">VerbForm</a></tt><tt>=Conv</tt></tt></td><td><em>atikkamm</em></td><td></td></tr>
</table>

`Voice` seems to be **lexical feature** of `VERB`. 93% lemmas (54) occur only with one value of `Voice`.

### `AUX`

27 <tt><a href="pi_palicanon-pos-AUX.html">AUX</a></tt> tokens (69% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="pi_palicanon-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (27; 100%), <tt><a href="pi_palicanon-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (27; 100%), <tt><a href="pi_palicanon-feat-Number.html">Number</a></tt><tt>=Sing</tt> (26; 96%), <tt><a href="pi_palicanon-feat-Person.html">Person</a></tt><tt>=3</tt> (23; 85%), <tt><a href="pi_palicanon-feat-Tense.html">Tense</a></tt><tt>=Past</tt> (18; 67%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (27; 100% of non-empty `Voice`): <em>ahosi, hoti, asmi, ahosiṃ, bhavati, santi</em>
* `EMPTY` (12): <em>hoti, ahosi</em>

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="pi_palicanon-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (32; 52%),
<tt>VERB --[<tt><a href="pi_palicanon-dep-conj.html">conj</a></tt>]--> VERB</tt> (16; 94%),
<tt>VERB --[<tt><a href="pi_palicanon-dep-cop.html">cop</a></tt>]--> AUX</tt> (1; 100%).

