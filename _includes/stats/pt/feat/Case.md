

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This feature is universal.
It occurs with 3 different values: `Acc`, `Dat`, `Nom`.

2420 tokens (1%) have a non-empty value of `Case`.
41 types (0%) occur at least once with a non-empty value of `Case`.
12 lemmas (0%) occur at least once with a non-empty value of `Case`.
The feature is used with 1 part-of-speech tags: [pt-pos/PRON]() (2420; 1% instances).

### `PRON`

2420 [pt-pos/PRON]() tokens (35% of all `PRON` tokens) have a non-empty value of `Case`.

The most frequent other feature values with which `PRON` and `Case` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (2419; 100%), <tt><a href="Person.html">Person</a>=3</tt> (1853; 77%), <tt><a href="Number.html">Number</a>=Sing</tt> (1534; 63%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (1296; 54%).

`PRON` tokens may have the following values of `Case`:

* `Acc` (1717; 71% of non-empty `Case`): <em>se, o, me, a, nos, lo, os, la, as, los</em>
* `Dat` (222; 9% of non-empty `Case`): <em>lhe, me, lhes, nos, se, Ihe, vos</em>
* `Nom` (481; 20% of non-empty `Case`): <em>ele, eu, eles, ela, você, nós, elas, vocês, voce, vós</em>
* `EMPTY` (4505): <em>que, o, isso, quem, tudo, isto, nada, os, qual, a</em>

<table>
  <tr><th>Paradigm <i>ele</i></th><th><tt>Nom</tt></th><th><tt>Acc</tt></th><th><tt>Dat</tt></th></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Dem</tt></td><td></td><td><em>o</em></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Prs</tt></td><td><em>ele</em></td><td><em>o, lo, no</em></td><td><em>lhe, Ihe</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Prs</tt></td><td><em>eles</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Prs</tt></td><td><em>ela</em></td><td></td><td><em>lhe</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Fem|<a href="Number.html">Number</a>=Plur|<a href="PronType.html">PronType</a>=Prs</tt></td><td><em>elas</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Unsp|<a href="Number.html">Number</a>=Sing|<a href="PronType.html">PronType</a>=Prs</tt></td><td></td><td></td><td><em>lhe</em></td></tr>
</table>

## Relations with Agreement in `Case`

The 10 most frequent relations where parent and child node agree in `Case`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (4; 100%),
<tt>PRON --[<a href="../dep/parataxis.html">parataxis</a>]--> PRON</tt> (1; 100%).

