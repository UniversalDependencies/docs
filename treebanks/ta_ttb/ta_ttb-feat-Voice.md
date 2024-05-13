---
layout: base
title:  'Statistics of Voice in UD_Tamil-TTB'
udver: '2'
---

## Treebank Statistics: UD_Tamil-TTB: Features: `Voice`

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

1771 tokens (18%) have a non-empty value of `Voice`.
776 types (22%) occur at least once with a non-empty value of `Voice`.
313 lemmas (15%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: <tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt> (1154; 12% instances), <tt><a href="ta_ttb-pos-AUX.html">AUX</a></tt> (617; 6% instances).

### `VERB`

1154 <tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt> tokens (92% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="ta_ttb-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (1154; 100%), <tt><a href="ta_ttb-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (1018; 88%), <tt><a href="ta_ttb-feat-Polite.html">Polite</a></tt><tt>=EMPTY</tt> (1012; 88%), <tt><a href="ta_ttb-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (840; 73%), <tt><a href="ta_ttb-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (750; 65%), <tt><a href="ta_ttb-feat-Gender.html">Gender</a></tt><tt>=EMPTY</tt> (731; 63%), <tt><a href="ta_ttb-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (719; 62%), <tt><a href="ta_ttb-feat-Person.html">Person</a></tt><tt>=EMPTY</tt> (719; 62%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (1153; 100% of non-empty `Voice`): தெரிவித்தார், தெரிவித்த், என்றார், செய்து, தெரிவிக்கப், செய்யப், உள்ளது, கூறினார், கொண்டு, கலந்து
* `Pass` (1; 0% of non-empty `Voice`): படுவதற்க்
* `EMPTY` (100): கடந்த, உள்ளிட்ட, நடைபெற்ற, வந்த, வரும், அடங்கிய, ஆகிய, ஆளும், இருந்த, இல்லாமல்

`Voice` seems to be **lexical feature** of `VERB`. 100% lemmas (309) occur only with one value of `Voice`.

### `AUX`

617 <tt><a href="ta_ttb-pos-AUX.html">AUX</a></tt> tokens (97% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="ta_ttb-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (617; 100%), <tt><a href="ta_ttb-feat-Polite.html">Polite</a></tt><tt>=EMPTY</tt> (532; 86%), <tt><a href="ta_ttb-feat-Person.html">Person</a></tt><tt>=3</tt> (449; 73%), <tt><a href="ta_ttb-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (420; 68%), <tt><a href="ta_ttb-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (408; 66%), <tt><a href="ta_ttb-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (356; 58%), <tt><a href="ta_ttb-feat-Number.html">Number</a></tt><tt>=Sing</tt> (344; 56%), <tt><a href="ta_ttb-feat-Gender.html">Gender</a></tt><tt>=Neut</tt> (340; 55%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (463; 75% of non-empty `Voice`): உள்ளது, வேண்டும், உள்ளார், இல்லை, உள்ளனர், உள்ளன, வருகின்றனர், இருந்தது, வருகிறது, கொண்டு
* `Pass` (154; 25% of non-empty `Voice`): பட்ட், பட்டது, பட்டு, ப்படும், படுகிறது, ப்பட, படவ், படுகின்றனர், பட்டதற்கு, பட்டனர்
* `EMPTY` (17): உள்ள, முடியாது, கூடாது, மாட்டாது, கொண்ட, படாது, வேண்டாம், வேண்டிய

`Voice` seems to be **lexical feature** of `AUX`. 100% lemmas (29) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<tt><a href="ta_ttb-dep-aux.html">aux</a></tt>]--> AUX</tt> (381; 70%),
<tt>VERB --[<tt><a href="ta_ttb-dep-advcl.html">advcl</a></tt>]--> VERB</tt> (204; 90%),
<tt>VERB --[<tt><a href="ta_ttb-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (151; 98%),
<tt>VERB --[<tt><a href="ta_ttb-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (26; 96%),
<tt>VERB --[<tt><a href="ta_ttb-dep-conj.html">conj</a></tt>]--> VERB</tt> (18; 100%),
<tt>VERB --[<tt><a href="ta_ttb-dep-compound.html">compound</a></tt>]--> VERB</tt> (11; 100%),
<tt>VERB --[<tt><a href="ta_ttb-dep-csubj.html">csubj</a></tt>]--> VERB</tt> (5; 100%),
<tt>AUX --[<tt><a href="ta_ttb-dep-ccomp.html">ccomp</a></tt>]--> VERB</tt> (4; 100%),
<tt>VERB --[<tt><a href="ta_ttb-dep-parataxis.html">parataxis</a></tt>]--> AUX</tt> (2; 100%),
<tt>AUX --[<tt><a href="ta_ttb-dep-aux.html">aux</a></tt>]--> AUX</tt> (1; 100%).

