

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This feature is universal.
It occurs with 3 different values: `Dem`, `Prs`, `Rel`.

14553 tokens (5%) have a non-empty value of `PronType`.
88 types (0%) occur at least once with a non-empty value of `PronType`.
8 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [ar-pos/PRON]() (12942; 5% instances), [ar-pos/DET]() (1611; 1% instances).

### `PRON`

12942 [ar-pos/PRON]() tokens (93% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (11359; 88%), <tt><a href="Person.html">Person</a>=3</tt> (9693; 75%), <tt><a href="Case.html">Case</a>=Gen</tt> (8770; 68%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (7253; 56%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (450; 3% of non-empty `PronType`): ذلك، ذٰلك، هذا، هٰذا، هذه، هؤلاء، تلك، هٰذه، ذي، كلا
* `Prs` (9991; 77% of non-empty `PronType`): ه، ها، هم، هو، هي، ك، هما، نا، هن، كم
* `Rel` (2501; 19% of non-empty `PronType`): التي، الذي، الذين، التى، الذى، اللذين، اللتين، اللواتي، اللتان، اللذان
* `EMPTY` (916): ما، من، كيف، كم، ماذا، أين، متى، لماذا، هكذا، اين

### `DET`

1611 [ar-pos/DET]() tokens (85% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (1564; 97%), <tt><a href="Case.html">Case</a>=Gen</tt> (1069; 66%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (833; 52%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (1599; 99% of non-empty `PronType`): هذه، هذا، تلك، هٰذه، هٰذا، ذلك، هؤلاء، ذٰلك، هذين، هٰؤلاء
* `Rel` (12; 1% of non-empty `PronType`): التي، الذي، الذين
* `EMPTY` (291): ما، من، كيف، لماذا، ماذا

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (9; 82%),
<tt>PRON --[<a href="../dep/cop.html">cop</a>]--> PRON</tt> (1; 100%).

