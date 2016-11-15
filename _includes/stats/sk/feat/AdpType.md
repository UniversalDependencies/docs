

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This feature is language-specific.
It occurs with 3 different values: `Prep`, `Preppron`, `Voc`.

8612 tokens (8%) have a non-empty value of `AdpType`.
135 types (1%) occur at least once with a non-empty value of `AdpType`.
70 lemmas (0%) occur at least once with a non-empty value of `AdpType`.
The feature is used with 2 part-of-speech tags: [sk-pos/ADP]() (8558; 8% instances), [sk-pos/PRON]() (54; 0% instances).

### `ADP`

8558 [sk-pos/ADP]() tokens (100% of all `ADP` tokens) have a non-empty value of `AdpType`.

`ADP` tokens may have the following values of `AdpType`:

* `Prep` (8102; 95% of non-empty `AdpType`): <em>na, v, do, s, z, o, po, za, k, od</em>
* `Voc` (456; 5% of non-empty `AdpType`): <em>vo, so, zo, ku, nado, odo, predo, bezo, podo</em>

<table>
  <tr><th>Paradigm <i>v</i></th><th><tt>Prep</tt></th><th><tt>Voc</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Acc</tt></td><td><em>v</em></td><td><em>vo</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Loc</tt></td><td><em>v</em></td><td><em>vo</em></td></tr>
</table>

### `PRON`

54 [sk-pos/PRON]() tokens (0% of all `PRON` tokens) have a non-empty value of `AdpType`.

The most frequent other feature values with which `PRON` and `AdpType` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (54; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (54; 100%), <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (54; 100%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (52; 96%), <tt><a href="Case.html">Case</a>=Acc</tt> (45; 83%), <tt><a href="Animacy.html">Animacy</a>=Anim</tt> (39; 72%).

`PRON` tokens may have the following values of `AdpType`:

* `Preppron` (54; 100% of non-empty `AdpType`): <em>naňho, naň, doň, preňho, doňho, uňho, oňho, poňho, zaňho</em>

`AdpType` seems to be **lexical feature** of `PRON`. 100% lemmas (10) occur only with one value of `AdpType`.

## Relations with Agreement in `AdpType`

The 10 most frequent relations where parent and child node agree in `AdpType`:
<tt>ADP --[<a href="../dep/mwe.html">mwe</a>]--> ADP</tt> (27; 87%),
<tt>ADP --[<a href="../dep/case.html">case</a>]--> ADP</tt> (1; 100%),
<tt>ADP --[<a href="../dep/conj.html">conj</a>]--> ADP</tt> (1; 100%).

