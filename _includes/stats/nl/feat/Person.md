

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

16203 tokens (8%) have a non-empty value of `Person`.
906 types (3%) occur at least once with a non-empty value of `Person`.
761 lemmas (4%) occur at least once with a non-empty value of `Person`.
The feature is used with 5 part-of-speech tags: [nl-pos/PRON]() (6833; 3% instances), [nl-pos/AUX]() (4718; 2% instances), [nl-pos/VERB]() (4528; 2% instances), [nl-pos/X]() (122; 0% instances), [nl-pos/DET]() (2; 0% instances).

### `PRON`

6833 [nl-pos/PRON]() tokens (43% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (6833; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (4411; 65%), <tt><a href="Case.html">Case</a>=Nom</tt> (3996; 58%).

`PRON` tokens may have the following values of `Person`:

* `1` (2403; 35% of non-empty `Person`): <em>ik, we, ons, wij, me, mijn, mij, onze, mezelf, m'n</em>
* `2` (348; 5% of non-empty `Person`): <em>je, u, jullie, jij, uw, jou, gij, jouw, jezelf, ge</em>
* `3` (4082; 60% of non-empty `Person`): <em>hij, zijn, zich, ze, hun, zij, haar, hem, het, hen</em>
* `EMPTY` (9006): <em>die, het, dat, wat, welke, dit, deze, wie, men, geen</em>

`Person` seems to be **lexical feature** of `PRON`. 100% lemmas (45) occur only with one value of `Person`.

### `AUX`

4718 [nl-pos/AUX]() tokens (46% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (4718; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (4718; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (4718; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (4718; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (4718; 100%), <tt><a href="Subcat.html">Subcat</a>=EMPTY</tt> (4426; 94%), <tt><a href="VerbType.html">VerbType</a>=EMPTY</tt> (4037; 86%).

`AUX` tokens may have the following values of `Person`:

* `1` (399; 8% of non-empty `Person`): <em>heb, ben, wil, vind, zal, word, hou, beschouw, verslijt, acht</em>
* `2` (80; 2% of non-empty `Person`): <em>bent, ben, hebt, heb, zult, ga, moet, wil, wilt, word</em>
* `3` (4239; 90% of non-empty `Person`): <em>is, heeft, wordt, zal, wil, heet, blijft, lijkt, vindt, maakt</em>
* `EMPTY` (5470): <em>zijn, was, worden, werd, hebben, zou, had, waren, zullen, werden</em>

<table>
  <tr><th>Paradigm <i>ben</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Subcat.html">Subcat</a>=Intr</tt></td><td><em>ben</em></td><td></td><td><em>is</em></td></tr>
  <tr><td><tt><a href="Subcat.html">Subcat</a>=Tran</tt></td><td></td><td><em>Weest</em></td><td></td></tr>
  <tr><td><tt></tt></td><td><em>ben</em></td><td><em>bent, ben</em></td><td><em>is, Da's</em></td></tr>
  <tr><td><tt><a href="VerbType.html">VerbType</a>=Aux,Cop</tt></td><td><em>ben</em></td><td><em>bent, ben</em></td><td><em>is</em></td></tr>
</table>

### `VERB`

4528 [nl-pos/VERB]() tokens (23% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="Tense.html">Tense</a>=Pres</tt> (4528; 100%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (4528; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (4528; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (4528; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (4528; 100%), <tt><a href="VerbType.html">VerbType</a>=EMPTY</tt> (3444; 76%).

`VERB` tokens may have the following values of `Person`:

* `1` (476; 11% of non-empty `Person`): <em>heb, kan, weet, denk, wil, ga, geloof, moet, kom, zie</em>
* `2` (199; 4% of non-empty `Person`): <em>kun, kunt, hebt, moet, denk, doe, heb, mag, vindt, weet</em>
* `3` (3853; 85% of non-empty `Person`): <em>heeft, kan, komt, moet, gaat, heet, noemt, ligt, staat, zegt</em>
* `EMPTY` (15135): <em>kunnen, gaan, hebben, moeten, komen, zei, had, kwam, doen, zien</em>

<table>
  <tr><th>Paradigm <i>heb</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Subcat.html">Subcat</a>=Tran</tt></td><td><em>heb</em></td><td><em>hebt, heb</em></td><td><em>heeft, heb'</em></td></tr>
  <tr><td><tt><a href="VerbType.html">VerbType</a>=Mod</tt></td><td><em>heb</em></td><td><em>hebt, heb</em></td><td><em>heeft</em></td></tr>
</table>

### `X`

122 [nl-pos/X]() tokens (3% of all `X` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `X` and `Person` co-occurred: <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (118; 97%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (104; 85%), <tt><a href="Number.html">Number</a>=Sing</tt> (92; 75%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (70; 57%).

`X` tokens may have the following values of `Person`:

* `1` (21; 17% of non-empty `Person`): <em>van, Lieve, Mam, Maria, Vrouw, gunstige, hart, heilige, inziens, is</em>
* `2` (41; 34% of non-empty `Person`): <em>je, ik, u, van, wat, Begrijp, Dick, Dijk, Glaasje, Neem</em>
* `3` (60; 49% of non-empty `Person`): <em>zijn, het, op, dat, even, om, wil, zeggen, inziens, is</em>
* `EMPTY` (4104): <em>van, het, flo, op, voor, ten, met, aan, een, te</em>

<table>
  <tr><th>Paradigm <i>van</i></th><th><tt>1</tt></th><th><tt>2</tt></th></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Imp|<a href="Degree.html">Degree</a>=Pos|<a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td><em>van</em></td></tr>
  <tr><td><tt><a href="Aspect.html">Aspect</a>=Imp|<a href="Mood.html">Mood</a>=Ind|<a href="PronType.html">PronType</a>=Dem|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td></td><td><em>van</em></td></tr>
  <tr><td><tt><a href="Definite.html">Definite</a>=Def</tt></td><td><em>van</em></td><td></td></tr>
  <tr><td><tt><a href="Degree.html">Degree</a>=Pos|<a href="Poss.html">Poss</a>=Yes|<a href="PronType.html">PronType</a>=Prs</tt></td><td><em>van</em></td><td></td></tr>
</table>

`Person` seems to be **lexical feature** of `X`. 93% lemmas (75) occur only with one value of `Person`.

### `DET`

2 [nl-pos/DET]() tokens (0% of all `DET` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `DET` and `Person` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (2; 100%), <tt><a href="Gender.html">Gender</a>=Fem</tt> (2; 100%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (2; 100%), <tt><a href="PronType.html">PronType</a>=Prs</tt> (2; 100%).

`DET` tokens may have the following values of `Person`:

* `1` (2; 100% of non-empty `Person`): <em>Nostra, nuestra</em>
* `EMPTY` (21254): <em>de, een, het, veel, meer, hoeveel, minder, weinig, der, tot</em>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>X --[<a href="../dep/compound.html">compound</a>]--> X</tt> (64; 100%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> AUX</tt> (4; 57%),
<tt>X --[<a href="../dep/mark.html">mark</a>]--> X</tt> (3; 100%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (2; 100%),
<tt>VERB --[<a href="../dep/cc.html">cc</a>]--> VERB</tt> (2; 100%),
<tt>PRON --[<a href="../dep/case.html">case</a>]--> AUX</tt> (2; 67%),
<tt>AUX --[<a href="../dep/advcl.html">advcl</a>]--> AUX</tt> (1; 100%),
<tt>VERB --[<a href="../dep/mark.html">mark</a>]--> AUX</tt> (1; 100%),
<tt>PRON --[<a href="../dep/expl:pv.html">expl:pv</a>]--> PRON</tt> (1; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

1694 tokens (2%) have a non-empty value of `Person`.
55 types (0%) occur at least once with a non-empty value of `Person`.
34 lemmas (0%) occur at least once with a non-empty value of `Person`.
The feature is used with 1 part-of-speech tags: [nl-pos/PRON]() (1694; 2% instances).

### `PRON`

1694 [nl-pos/PRON]() tokens (69% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (1373; 81%).

`PRON` tokens may have the following values of `Person`:

* `1` (55; 3% of non-empty `Person`): <em>ik, we, ons, mij, mijn, wij, me</em>
* `2` (24; 1% of non-empty `Person`): <em>je, u, jij</em>
* `3` (1615; 95% of non-empty `Person`): <em>hij, ze, het, zich, dat, dit, zij, men, wat, hem</em>
* `EMPTY` (772): <em>die, meer, deze, vele, veel, meeste, elkaar, minder, meest, enige</em>

`Person` seems to be **lexical feature** of `PRON`. 100% lemmas (34) occur only with one value of `Person`.

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (1; 100%).

