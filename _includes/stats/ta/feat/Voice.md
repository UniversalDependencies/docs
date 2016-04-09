

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Tamil)

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

1771 tokens (18%) have a non-empty value of `Voice`.
774 types (22%) occur at least once with a non-empty value of `Voice`.
313 lemmas (15%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: [ta-pos/VERB]() (1155; 12% instances), [ta-pos/AUX]() (616; 6% instances).

### `VERB`

1155 [ta-pos/VERB]() tokens (99% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="Negative.html">Negative</a>=Pos</tt> (1155; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (1019; 88%), <tt><a href="Polite.html">Polite</a>=EMPTY</tt> (1013; 88%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (840; 73%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (750; 65%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (731; 63%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (719; 62%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (719; 62%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (1154; 100% of non-empty `Voice`): தெரிவித்தார், தெரிவித்த், என்றார், செய்து, தெரிவிக்கப், செய்யப், உள்ளது, கூறினார், கொண்டு, கலந்து
* `Pass` (1; 0% of non-empty `Voice`): படுவதற்க்
* `EMPTY` (16): இல்லாமல், செயல்படாமல், தரா, நிறைவேற்றா, ஏற்றுக்கொள்ளாமல், கண்டுகொள்ளாமல், கவலைப்படாதீர்கள், குறிப்பிடாமல், செய்யப்படாமல், பெறாமல்

`Voice` seems to be **lexical feature** of `VERB`. 100% lemmas (309) occur only with one value of `Voice`.

### `AUX`

616 [ta-pos/AUX]() tokens (98% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="Negative.html">Negative</a>=Pos</tt> (616; 100%), <tt><a href="Polite.html">Polite</a>=EMPTY</tt> (531; 86%), <tt><a href="Person.html">Person</a>=3</tt> (448; 73%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (419; 68%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (407; 66%), <tt><a href="Tense.html">Tense</a>=EMPTY</tt> (356; 58%), <tt><a href="Number.html">Number</a>=Sing</tt> (344; 56%), <tt><a href="Gender.html">Gender</a>=Neut</tt> (339; 55%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (462; 75% of non-empty `Voice`): உள்ளது, வேண்டும், உள்ளார், இல்லை, உள்ளனர், உள்ளன, வருகின்றனர், இருந்தது, வருகிறது, கொண்டு
* `Pass` (154; 25% of non-empty `Voice`): பட்ட், பட்டது, பட்டு, ப்படும், படுகிறது, ப்பட, படவ், படுகின்றனர், பட்டதற்கு, பட்டனர்
* `EMPTY` (11): முடியாது, கூடாது, மாட்டாது, படாது, வேண்டாம்

`Voice` seems to be **lexical feature** of `AUX`. 100% lemmas (28) occur only with one value of `Voice`.

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<a href="../dep/aux.html">aux</a>]--> AUX</tt> (379; 71%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (202; 95%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (151; 99%),
<tt>VERB --[<a href="../dep/xcomp.html">xcomp</a>]--> VERB</tt> (26; 100%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (18; 100%),
<tt>VERB --[<a href="../dep/compound.html">compound</a>]--> VERB</tt> (11; 100%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (5; 100%),
<tt>AUX --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (4; 100%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> AUX</tt> (2; 67%),
<tt>AUX --[<a href="../dep/aux.html">aux</a>]--> AUX</tt> (2; 100%).

