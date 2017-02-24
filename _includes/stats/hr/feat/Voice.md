

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

7174 tokens (4%) have a non-empty value of `Voice`.
2777 types (8%) occur at least once with a non-empty value of `Voice`.
1228 lemmas (7%) occur at least once with a non-empty value of `Voice`.
The feature is used with 3 part-of-speech tags: [hr-pos/VERB]() (5668; 3% instances), [hr-pos/ADJ]() (899; 0% instances), [hr-pos/AUX]() (607; 0% instances).

### `VERB`

5668 [hr-pos/VERB]() tokens (35% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (5668; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (5668; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (5668; 100%), <tt><a href="Tense.html">Tense</a>=Past</tt> (5668; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (4123; 73%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (3585; 63%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (5668; 100% of non-empty `Voice`): <em>izjavio, rekao, kazao, mogli, dodao, mogla, mogao, moglo, trebala, dobili</em>
* `EMPTY` (10391): <em>može, ima, kaže, treba, mogu, nema, mora, postoji, možete, imaju</em>

`Voice` seems to be **lexical feature** of `VERB`. 100% lemmas (1121) occur only with one value of `Voice`.

### `ADJ`

899 [hr-pos/ADJ]() tokens (4% of all `ADJ` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `ADJ` and `Voice` co-occurred: <tt><a href="Degree.html">Degree</a>=Pos</tt> (899; 100%), <tt><a href="Case.html">Case</a>=Nom</tt> (892; 99%), <tt><a href="Number.html">Number</a>=Sing</tt> (687; 76%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (565; 63%).

`ADJ` tokens may have the following values of `Voice`:

* `Pass` (899; 100% of non-empty `Voice`): <em>održana, otvorena, održano, otvoren, postignut, povećana, ubijen, provedena, imenovan, izloženi</em>
* `EMPTY` (20867): <em>novi, drugi, prvi, vanjskih, novih, prošle, glavni, nove, hrvatski, moguće</em>

`Voice` seems to be **lexical feature** of `ADJ`. 100% lemmas (354) occur only with one value of `Voice`.

### `AUX`

607 [hr-pos/AUX]() tokens (5% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="Tense.html">Tense</a>=Past</tt> (607; 100%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (607; 100%), <tt><a href="Mood.html">Mood</a>=EMPTY</tt> (607; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Part</tt> (607; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (490; 81%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (607; 100% of non-empty `Voice`): <em>bilo, bio, bila, bili, bile</em>
* `EMPTY` (11048): <em>je, su, će, bi, biti, nije, smo, sam, neće, nisu</em>

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (469; 66%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (11; 55%),
<tt>VERB --[<a href="../dep/advmod.html">advmod</a>]--> VERB</tt> (6; 67%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (5; 71%),
<tt>AUX --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (4; 67%),
<tt>ADJ --[<a href="../dep/csubj:pass.html">csubj:pass</a>]--> ADJ</tt> (2; 67%),
<tt>AUX --[<a href="../dep/iobj.html">iobj</a>]--> VERB</tt> (1; 100%).

