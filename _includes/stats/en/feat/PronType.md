

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This feature is universal.
It occurs with 5 different values: `Art`, `Dem`, `Int`, `Prs`, `Rel`.

41363 tokens (16%) have a non-empty value of `PronType`.
129 types (1%) occur at least once with a non-empty value of `PronType`.
53 lemmas (0%) occur at least once with a non-empty value of `PronType`.
The feature is used with 3 part-of-speech tags: [en-pos/PRON]() (21618; 8% instances), [en-pos/DET]() (17903; 7% instances), [en-pos/ADV]() (1842; 1% instances).

### `PRON`

21618 [en-pos/PRON]() tokens (97% of all `PRON` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PRON` and `PronType` co-occurred: <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (17964; 83%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (16803; 78%), <tt><a href="Number.html">Number</a>=Sing</tt> (11915; 55%), <tt><a href="Case.html">Case</a>=Nom</tt> (11774; 54%).

`PRON` tokens may have the following values of `PronType`:

* `Art` (1; 0% of non-empty `PronType`): <em>The</em>
* `Dem` (1002; 5% of non-empty `PronType`): <em>this, that, those, these</em>
* `Int` (710; 3% of non-empty `PronType`): <em>what, which, who, whom, whatever, whose, who's, Wtf, ever, waht</em>
* `Prs` (18621; 86% of non-empty `PronType`): <em>i, you, it, they, my, we, he, your, me, their</em>
* `Rel` (1284; 6% of non-empty `PronType`): <em>that, who, which, whom, what, whose</em>
* `EMPTY` (659): <em>there, one, mine, you, 's, it's, u, Yo, the, s</em>

<table>
  <tr><th>Paradigm <i>that</i></th><th><tt>Rel</tt></th><th><tt>Dem</tt></th></tr>
  <tr><td><tt>_</tt></td><td><em>that</em></td><td><em>that</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing</tt></td><td></td><td><em>that</em></td></tr>
</table>

### `DET`

17903 [en-pos/DET]() tokens (89% of all `DET` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `DET` and `PronType` co-occurred: <tt><a href="Definite.html">Definite</a>=Def</tt> (11016; 62%).

`DET` tokens may have the following values of `PronType`:

* `Art` (16362; 91% of non-empty `PronType`): <em>the, a, an</em>
* `Dem` (1415; 8% of non-empty `PronType`): <em>this, that, these, those</em>
* `Int` (124; 1% of non-empty `PronType`): <em>what, which, whatever</em>
* `Rel` (2; 0% of non-empty `PronType`): <em>what, whhich</em>
* `EMPTY` (2173): <em>all, some, any, no, another, every, each, both, such, quite</em>

<table>
  <tr><th>Paradigm <i>what</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>what</em></td><td><em>what</em></td></tr>
</table>

### `ADV`

1842 [en-pos/ADV]() tokens (14% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Dem` (775; 42% of non-empty `PronType`): <em>there, then, here, that</em>
* `Int` (957; 52% of non-empty `PronType`): <em>when, how, why, where, whenever, ever, wherever, however, were, y</em>
* `Rel` (110; 6% of non-empty `PronType`): <em>where, that, when, why, how, were, wherein</em>
* `EMPTY` (11197): <em>so, just, very, also, now, even, only, as, back, well</em>

<table>
  <tr><th>Paradigm <i>when</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td><em>when</em></td><td><em>when</em></td></tr>
</table>

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (27; 93%),
<tt>ADV --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (3; 100%),
<tt>PRON --[<a href="../dep/nmod:npmod.html">nmod:npmod</a>]--> PRON</tt> (3; 100%),
<tt>PRON --[<a href="../dep/parataxis.html">parataxis</a>]--> PRON</tt> (1; 100%),
<tt>PRON --[<a href="../dep/remnant.html">remnant</a>]--> PRON</tt> (1; 100%).

