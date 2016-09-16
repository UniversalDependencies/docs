

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This feature is universal.
It occurs with 2 different values: `Card`, `Ord`.

7274 tokens (2%) have a non-empty value of `NumType`.
961 types (5%) occur at least once with a non-empty value of `NumType`.
911 lemmas (6%) occur at least once with a non-empty value of `NumType`.
The feature is used with 2 part-of-speech tags: [hi-pos/NUM]() (6718; 2% instances), [hi-pos/ADJ]() (556; 0% instances).

### `NUM`

6718 [hi-pos/NUM]() tokens (100% of all `NUM` tokens) have a non-empty value of `NumType`.

`NUM` tokens may have the following values of `NumType`:

* `Card` (6718; 100% of non-empty `NumType`): एक, दो, तीन, दोनों, करोड़, चार, लाख, हजार, पांच, छह
* `EMPTY` (22): एक, दो, दस, ५०, 10, छह, पंद्रह, पांच, बीस, ३६

`NumType` seems to be **lexical feature** of `NUM`. 100% lemmas (859) occur only with one value of `NumType`.

### `ADJ`

556 [hi-pos/ADJ]() tokens (3% of all `ADJ` tokens) have a non-empty value of `NumType`.

The most frequent other feature values with which `ADJ` and `NumType` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (512; 92%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (315; 57%).

`ADJ` tokens may have the following values of `NumType`:

* `Ord` (556; 100% of non-empty `NumType`): पहली, दूसरे, दूसरी, पहले, तीसरे, पहला, प्रथम, दूसरा, चौथे, तीसरी
* `EMPTY` (20090): शामिल, अन्य, जारी, पिछले, पूर्व, भारतीय, तैयार, स्थित, पूरी, वरिष्ठ

`NumType` seems to be **lexical feature** of `ADJ`. 100% lemmas (54) occur only with one value of `NumType`.

## Relations with Agreement in `NumType`

The 10 most frequent relations where parent and child node agree in `NumType`:
<tt>NUM --[<a href="../dep/case.html">case</a>]--> NUM</tt> (347; 100%),
<tt>NUM --[<a href="../dep/dep.html">dep</a>]--> NUM</tt> (99; 100%),
<tt>NUM --[<a href="../dep/nummod.html">nummod</a>]--> NUM</tt> (67; 100%),
<tt>NUM --[<a href="../dep/nmod.html">nmod</a>]--> NUM</tt> (63; 100%),
<tt>NUM --[<a href="../dep/nsubj.html">nsubj</a>]--> NUM</tt> (60; 100%),
<tt>NUM --[<a href="../dep/mark.html">mark</a>]--> NUM</tt> (37; 100%),
<tt>NUM --[<a href="../dep/punct.html">punct</a>]--> NUM</tt> (36; 100%),
<tt>NUM --[<a href="../dep/cc.html">cc</a>]--> NUM</tt> (22; 100%),
<tt>NUM --[<a href="../dep/det.html">det</a>]--> NUM</tt> (20; 100%),
<tt>NUM --[<a href="../dep/advcl.html">advcl</a>]--> NUM</tt> (18; 100%).

