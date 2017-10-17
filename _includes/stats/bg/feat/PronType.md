

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This feature is universal.
It occurs with 7 different values: `Dem`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`.

12373 tokens (9%) have a non-empty value of `PronType`.
357 types (1%) occur at least once with a non-empty value of `PronType`.
54 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [bg-pos/PRON]() (9113; 6% instances), [bg-pos/DET]() (2160; 2% instances), [bg-pos/ADV]() (1100; 1% instances).

### `PRON`

9113 [bg-pos/PRON]() tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (7751; 85%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (6179; 68%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (5603; 61%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (5309; 58%).

`PRON` tokens may have the following values of `PronType`:

* `Dem` (479; 5% of non-empty `PronType`): <em>това, Тази</em>
* `Ind` (98; 1% of non-empty `PronType`): <em>нещо, някой, нещата, някои, някого, няколко, един, едно, неколцина, Единият</em>
* `Int` (99; 1% of non-empty `PronType`): <em>кой, защо, кого, кои, коя, кое</em>
* `Neg` (88; 1% of non-empty `PronType`): <em>нищо, никой, никого, никому, нищото</em>
* `Prs` (7314; 80% of non-empty `PronType`): <em>се, си, той, му, го, ни, те, тя, й, им</em>
* `Rel` (931; 10% of non-empty `PronType`): <em>които, който, която, което, каквото, когото, дето</em>
* `Tot` (104; 1% of non-empty `PronType`): <em>всичко, всички, всеки, всичкото, всекиго</em>

`PronType` seems to be **lexical feature** of `PRON`. 100% lemmas (24) occur only with one value of `PronType`.

### `DET`

2160 [bg-pos/DET]() tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Person.html">Person</a>=EMPTY</tt> (1808; 84%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (1695; 78%), <tt><a href="Number.html">Number</a>=Sing</tt> (1526; 71%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (1446; 67%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (1363; 63%).

`DET` tokens may have the following values of `PronType`:

* `Dem` (798; 37% of non-empty `PronType`): <em>тази, този, тези, това, такива, такъв, такава, тая, тия, тоя</em>
* `Ind` (346; 16% of non-empty `PronType`): <em>един, една, едно, някои, някакъв, някой, някаква, някакво, нещо, неща</em>
* `Int` (188; 9% of non-empty `PronType`): <em>какво, какви, каква, какъв, кой, кои, коя, чия, К'ва</em>
* `Neg` (56; 3% of non-empty `PronType`): <em>никакъв, никакви, нищо, никой, никаква, никакво, Никоя, никого, ничия</em>
* `Prs` (465; 22% of non-empty `PronType`): <em>нашите, своите, своя, нашата, наши, техните, неговата, своята, своето, неговия</em>
* `Rel` (49; 2% of non-empty `PronType`): <em>каквото, чиито, чийто, каквато, който, чието, чиято, каквито, какъвто, Която</em>
* `Tot` (258; 12% of non-empty `PronType`): <em>всички, всеки, всяка, всяко, всичко, всякакви, Вси, всякаква, всякакво, всякакъв</em>

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (23) occur only with one value of `PronType`.

### `ADV`

1100 [bg-pos/ADV]() tokens (19% of all `ADV` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `ADV` and `PronType` co-occurred: <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (1099; 100%).

`ADV` tokens may have the following values of `PronType`:

* `Dem` (435; 40% of non-empty `PronType`): <em>така, тук, тъй, там, тогава, толкова, иначе, оттам, нататък, оттук</em>
* `Ind` (47; 4% of non-empty `PronType`): <em>понякога, някъде, някога, някак, донякъде, нанякъде, отнякъде</em>
* `Int` (225; 20% of non-empty `PronType`): <em>как, къде, кога, колко, откъде, докъде, где, доколко, накъде, доде</em>
* `Neg` (27; 2% of non-empty `PronType`): <em>никога, никак, отникъде, никъде</em>
* `Rel` (361; 33% of non-empty `PronType`): <em>когато, както, където, колкото, откакто, откак, дето, доколкото, откъдето, гдето</em>
* `Tot` (5; 0% of non-empty `PronType`): <em>отвсякъде, навсякъде</em>
* `EMPTY` (4787): <em>още, много, вчера, само, вече, защото, обаче, сега, повече, все</em>

`PronType` seems to be **lexical feature** of `ADV`. 100% lemmas (20) occur only with one value of `PronType`.

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (7; 78%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (4; 100%),
<tt>DET --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (1; 100%),
<tt>PRON --[<a href="../dep/nmod.html">nmod</a>]--> PRON</tt> (1; 100%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> ADV</tt> (1; 100%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> DET</tt> (1; 100%).

