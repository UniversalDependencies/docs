

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Greek)

This feature is universal.
It occurs with 6 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`, `Rel`.
Some words have combined values of the feature; 1 combinations have been observed: `Ind|Rel`.

10615 tokens (21%) have a non-empty value of `PronType`.
160 types (2%) occur at least once with a non-empty value of `PronType`.
31 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 2 part-of-speech tags: [el-pos/DET]() (8191; 16% instances), [el-pos/PRON]() (2424; 5% instances).

### `DET`

8191 [el-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Definite.html">Definite</a>=Def</tt> (7826; 96%), <tt><a href="Number.html">Number</a>=Sing</tt> (6168; 75%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (4448; 54%).

`DET` tokens may have the following values of `PronType`:

* `Art` (8191; 100% of non-empty `PronType`): <em>την, της, το, η, του, των, οι, ο, τη, τα</em>

### `PRON`

2424 [el-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Person.html">Person</a>=3</tt> (2111; 87%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (1887; 78%), <tt><a href="Number.html">Number</a>=Sing</tt> (1424; 59%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (515; 21% of non-empty `PronType`): <em>αυτό, αυτή, αυτά, αυτές, αυτής, αυτού, αυτών, αυτόν, αυτήν, τούτο</em>
* `Ind` (250; 10% of non-empty `PronType`): <em>κάθε, κάτι, άλλα, άλλες, άλλων, κανείς, άλλη, κάποια, άλλο, καμία</em>
* `Ind,Rel` (40; 2% of non-empty `PronType`): <em>όσα, οποιαδήποτε, ό,τι, όσοι, οτιδήποτε, όσων, όσους, οιονδήποτε, οποιοδήποτε, οποιονδήποτε</em>
* `Int` (20; 1% of non-empty `PronType`): <em>τι, ποιο, Τίνος, ποιες, ποιον, ποιος</em>
* `Prs` (787; 32% of non-empty `PronType`): <em>τους, μας, του, της, σας, μου, το, την, εμείς, εσείς</em>
* `Rel` (812; 33% of non-empty `PronType`): <em>που, οποία, οποίο, οποίες, οποίος, οποίων, οποίοι, οποίας, οποίους, οποίου</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (30) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (1; 100%).

