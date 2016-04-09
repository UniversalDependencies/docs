

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This feature is language-specific.
It occurs with 3 different values: `Comprep`, `Prep`, `Voc`.

145943 tokens (10%) have a non-empty value of `AdpType`.
227 types (0%) occur at least once with a non-empty value of `AdpType`.
117 lemmas (0%) occur at least once with a non-empty value of `AdpType`.
The feature is used with 1 part-of-speech tags: [cs-pos/ADP]() (145943; 10% instances).

### `ADP`

145943 [cs-pos/ADP]() tokens (100% of all `ADP` tokens) have a non-empty value of `AdpType`.

`ADP` tokens may have the following values of `AdpType`:

* `Comprep` (286; 0% of non-empty `AdpType`): _vzhledem, nehledě, narozdíl_
* `Prep` (134515; 92% of non-empty `AdpType`): _v, na, o, z, s, do, k, pro, za, po_
* `Voc` (11142; 8% of non-empty `AdpType`): _ve, se, ze, ke, ode, beze, ku, skrze, přede, nade_

<table>
  <tr><th>Paradigm <i>v</i></th><th><tt>Prep</tt></th><th><tt>Voc</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td><i>v</i></td><td><i>ve</i></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc</tt></td><td><i>v</i></td><td><i>ve</i></td></tr>
</table>

`AdpType` seems to be **lexical feature** of `ADP`. 91% lemmas (106) occur only with one value of `AdpType`.

## Relations with Agreement in `AdpType`

The 10 most frequent relations where parent and child node agree in `AdpType`:
<tt>ADP --[<a href="../dep/mwe.html">mwe</a>]--> ADP</tt> (569; 53%),
<tt>ADP --[<a href="../dep/case.html">case</a>]--> ADP</tt> (17; 63%),
<tt>ADP --[<a href="../dep/conj.html">conj</a>]--> ADP</tt> (13; 93%),
<tt>ADP --[<a href="../dep/foreign.html">foreign</a>]--> ADP</tt> (1; 100%).

