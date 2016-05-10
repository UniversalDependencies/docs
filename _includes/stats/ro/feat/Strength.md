

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is language-specific.
It occurs with 2 different values: `Strong`, `Weak`.

5131 tokens (4%) have a non-empty value of `Strength`.
115 types (0%) occur at least once with a non-empty value of `Strength`.
22 lemmas (0%) occur at least once with a non-empty value of `Strength`.
The feature is used with 1 part-of-speech tags: [ro-pos/PRON]() (5131; 4% instances).

### `PRON`

5131 [ro-pos/PRON]() tokens (63% of all `PRON` tokens) have a non-empty value of `Strength`.

The most frequent other feature values with which `PRON` and `Strength` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (5131; 100%), <tt><a href="Person.html">Person</a>=3</tt> (4272; 83%), <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (3891; 76%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (3848; 75%), <tt><a href="Case.html">Case</a>=Acc</tt> (3359; 65%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (2664; 52%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (2569; 50%).

`PRON` tokens may have the following values of `Strength`:

* `Strong` (829; 16% of non-empty `Strength`): <em>el, dumneavoastră, lui, ea, ei, ele, eu, noi, mine, sine</em>
* `Weak` (4302; 84% of non-empty `Strength`): <em>se, s-, își, o, îi, -l, le, îl, -i, -și</em>

<table>
  <tr><th>Paradigm <i>sine</i></th><th><tt>Strong</tt></th><th><tt>Weak</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td><em>sine</em></td><td><em>se, s-, -se</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>s-, -se, se-, se</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat</tt></td><td></td><td><em>își, și, -și</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>-și, și-, și</em></td></tr>
</table>

## Relations with Agreement in `Strength`

The 10 most frequent relations where parent and child node agree in `Strength`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (6; 67%),
<tt>PRON --[<a href="../dep/dobj.html">dobj</a>]--> PRON</tt> (1; 100%).

