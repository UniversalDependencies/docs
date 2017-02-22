

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This feature is language-specific.
It occurs with 2 different values: `Strong`, `Weak`.

6677 tokens (3%) have a non-empty value of `Strength`.
115 types (0%) occur at least once with a non-empty value of `Strength`.
9 lemmas (0%) occur at least once with a non-empty value of `Strength`.
The feature is used with 1 part-of-speech tags: [ro-pos/PRON]() (6677; 3% instances).

### `PRON`

6677 [ro-pos/PRON]() tokens (61% of all `PRON` tokens) have a non-empty value of `Strength`.

The most frequent other feature values with which `PRON` and `Strength` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (6677; 100%), <tt><a href="Person.html">Person</a>=3</tt> (5602; 84%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (5162; 77%), <tt><a href="Variant.html">Variant</a>=EMPTY</tt> (4769; 71%), <tt><a href="Case.html">Case</a>=Acc</tt> (4570; 68%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (3750; 56%), <tt><a href="Reflex.html">Reflex</a>=Yes</tt> (3658; 55%).

`PRON` tokens may have the following values of `Strength`:

* `Strong` (924; 14% of non-empty `Strength`): <em>el, ea, dumneavoastră, ei, ele, eu, noi, mine, lui, sine</em>
* `Weak` (5753; 86% of non-empty `Strength`): <em>se, s-, le, își, o, -și, și-, -l, îl, îi</em>

<table>
  <tr><th>Paradigm <i>sine</i></th><th><tt>Strong</tt></th><th><tt>Weak</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td><em>sine</em></td><td><em>se</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>s-, -se, se-</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat</tt></td><td></td><td><em>își, și</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Dat|<a href="Variant.html">Variant</a>=Short</tt></td><td></td><td><em>-și, și-</em></td></tr>
</table>

## Relations with Agreement in `Strength`

The 10 most frequent relations where parent and child node agree in `Strength`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (6; 67%).

