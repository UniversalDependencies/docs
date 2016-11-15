

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This feature is universal.
It occurs with 3 different values: `Acc`, `Dat`, `Nom`.
Some words have combined values of the feature; 2 combinations have been observed: `Acc|Dat`, `Acc|Nom`.

2742 tokens (1%) have a non-empty value of `Case`.
60 types (0%) occur at least once with a non-empty value of `Case`.
13 lemmas (0%) occur at least once with a non-empty value of `Case`.
The feature is used with 1 part-of-speech tags: [pt-pos/PRON]() (2742; 1% instances).

### `PRON`

2742 [pt-pos/PRON]() tokens (41% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (2737; 100%), <tt><a href="Person.html">Person</a>=3</tt> (2416; 88%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (1948; 71%), <tt><a href="Number.html">Number</a>=Sing</tt> (1730; 63%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (1456; 53%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (1910; 70% of non-empty `Case`): <em>se, -se, o, me, -lo, a, si, nos, -la, -me</em>
* `Acc,Dat` (4; 0% of non-empty `Case`): <em>-se, nos</em>
* `Acc,Nom` (71; 3% of non-empty `Case`): <em>ele, ela, eles, nós, elas, você</em>
* `Dat` (227; 8% of non-empty `Case`): <em>lhe, -lhe, me, -me, lhes, nos, se, -nos, -lhes, -se</em>
* `Nom` (530; 19% of non-empty `Case`): <em>ele, eu, eles, ela, você, nós, elas, vocês, voce, vós</em>
* `EMPTY` (3976): <em>que, isso, quem, o, tudo, nada, isto, qual, a, os</em>

<table>
  <tr><th>Paradigm <i>nós</i></th><th><tt>Acc,Dat</tt></th><th><tt>Acc,Nom</tt></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=1</tt></td><td></td><td><em>nós</em></td><td><em>nós</em></td><td><em>nos</em></td><td><em>nos, -nos</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=1|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td></td><td></td><td></td><td><em>-nos, nos</em></td><td><em>nos</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Person.html">Person</a>=3</tt></td><td></td><td></td><td></td><td><em>-nos</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Person.html">Person</a>=1</tt></td><td></td><td><em>nós</em></td><td></td><td><em>nós</em></td><td></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=1</tt></td><td></td><td><em>nós</em></td><td><em>nós</em></td><td><em>nos, -nos, nós</em></td><td><em>-nos, nos*, nos</em></td></tr>
  <tr><td><tt><a href="Person.html">Person</a>=1|<a href="Reflex.html">Reflex</a>=Yes</tt></td><td><em>nos</em></td><td></td><td></td><td><em>nos, -nos</em></td><td><em>-nos, nos, -no</em></td></tr>
</table>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (5; 100%).



--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This feature is universal.
It occurs with 3 different values: `Acc`, `Dat`, `Nom`.

2542 tokens (1%) have a non-empty value of `Case`.
46 types (0%) occur at least once with a non-empty value of `Case`.
13 lemmas (0%) occur at least once with a non-empty value of `Case`.
The feature is used with 1 part-of-speech tags: [pt-pos/PRON]() (2542; 1% instances).

### `PRON`

2542 [pt-pos/PRON]() tokens (36% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (2541; 100%), <tt><a href="Person.html">Person</a>=3</tt> (1938; 76%), <tt><a href="Number.html">Number</a>=Sing</tt> (1622; 64%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (1364; 54%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (1781; 70% of non-empty `Case`): <em>se, o, me, a, nos, lo, os, la, as, se-</em>
* `Dat` (228; 9% of non-empty `Case`): <em>lhe, me, nos, lhes, se, lhe-, Ihe, me-, no, vos</em>
* `Nom` (533; 21% of non-empty `Case`): <em>ele, eu, eles, ela, você, nós, elas, vocês, voce, vós</em>
* `EMPTY` (4516): <em>que, o, isso, quem, tudo, nada, isto, os, qual, todos</em>

<table>
  <tr><th>Paradigm <i>ele</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td><em>o</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Prs</tt></td><td><em>ele</em></td><td><em>o, lo, no</em></td><td><em>lhe, lhe-, Ihe</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Prs</tt></td><td><em>eles</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Prs</tt></td><td><em>ela</em></td><td></td><td><em>lhe</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Prs</tt></td><td><em>elas</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Unsp|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Prs</tt></td><td></td><td></td><td><em>lhe</em></td></tr>
</table>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (3; 100%),
<tt>PRON --[<a href="../dep/parataxis.html">parataxis</a>]--> PRON</tt> (1; 100%).

