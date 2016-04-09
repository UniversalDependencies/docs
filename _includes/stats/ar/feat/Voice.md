

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

21530 tokens (8%) have a non-empty value of `Voice`.
4855 types (14%) occur at least once with a non-empty value of `Voice`.
1 lemmas (0) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: [ar-pos/VERB]() (21490; 8% instances), [ar-pos/AUX]() (40; 0% instances).

### `VERB`

21490 [ar-pos/VERB]() tokens (100% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (21259; 99%), <tt><a href="Number.html">Number</a>=Sing</tt> (20125; 94%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (13515; 63%), <tt><a href="VerbForm.html">VerbForm</a>=EMPTY</tt> (11441; 53%), <tt><a href="Aspect.html">Aspect</a>=Perf</tt> (11441; 53%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (11441; 53%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (20271; 94% of non-empty `Voice`): قَالَ، كَانَ، كَانَت، أَكَّدَ، أَضَافَ، تَمَّ، أَعلَنَ، أَشَارَ، يَتِمُّ، يُمكِنُ
* `Pass` (1219; 6% of non-empty `Voice`): يُذكَرُ، يُوجَدُ، يُتَوَقَّعُ، قُتِلَ، أُصِيبَ، تُعَدُّ، تُعتَبَرُ، يُعَدُّ، يُعتَبَرُ، تُوجَدُ
* `EMPTY` (52): حَاوِل، دِ، دَعُوا، أَرخِص، اُخدُمُوا، اُكسُونَ، اِبحَث، اِحرَص، اِفتَحُوا، اِنتَبِه

### `AUX`

40 [ar-pos/AUX]() tokens (100% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (40; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (40; 100%), <tt><a href="Aspect.html">Aspect</a>=Perf</tt> (39; 98%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (36; 90%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (40; 100% of non-empty `Voice`): لَيسَ، لَيسَت، أَلَا، تَعُد

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (2345; 92%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (2311; 93%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (1013; 91%),
<tt>VERB --[<a href="../dep/xcomp.html">xcomp</a>]--> VERB</tt> (611; 96%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (230; 95%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (213; 71%),
<tt>VERB --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (28; 97%),
<tt>VERB --[<a href="../dep/appos.html">appos</a>]--> VERB</tt> (9; 100%),
<tt>VERB --[<a href="../dep/aux.html">aux</a>]--> AUX</tt> (8; 100%),
<tt>VERB --[<a href="../dep/cc.html">cc</a>]--> VERB</tt> (5; 71%).

