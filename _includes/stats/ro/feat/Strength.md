

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is language-specific.
It occurs with 2 different values: `Strong`, `Weak`.

7194 tokens (3%) have a non-empty value of `Strength`.
117 types (0%) occur at least once with a non-empty value of `Strength`.
9 lemmas (0%) occur at least once with a non-empty value of `Strength`.
The feature is used with 1 part-of-speech tags: [ro-pos/PRON]() (7194; 3% instances).

### `PRON`

7194 [ro-pos/PRON]() tokens (60% of all `PRON` tokens) have a non-empty value of `Strength`.

The most frequent other feature values with which `PRON` and `Strength` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (7194; 100%), <tt><a href="Person.html">Person</a>=3</tt> (6040; 84%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (5559; 77%), <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (5135; 71%), <tt><a href="Case.html">Case</a>=Acc</tt> (4922; 68%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (4035; 56%), <tt><a href="Reflex.html">Reflex</a>=Yes</tt> (3931; 55%).

`PRON` tokens may have the following values of `Strength`:

* `Strong` (995; 14% of non-empty `Strength`): <em>el, ea, dumneavoastră, ei, ele, eu, noi, mine, lui, sine</em>
* `Weak` (6199; 86% of non-empty `Strength`): <em>se, s-, le, o, își, -și, -l, și-, îi, îl</em>

<table>
  <tr><th>Paradigm <i>sine</i></th><th><tt>Strong</tt></th><th><tt>Weak</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td><em>sine</em></td><td><em>se</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>s-, -se, se-</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat</tt></td><td></td><td><em>își, și</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>-și, și-</em></td></tr>
</table>

## Relations with Agreement in `Strength`

The 10 most frequent relations where parent and child node agree in `Strength`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (6; 55%),
<tt>PRON --[<a href="../dep/dobj.html">dobj</a>]--> PRON</tt> (1; 100%).

