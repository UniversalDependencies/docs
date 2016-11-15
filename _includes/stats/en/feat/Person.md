

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

25893 tokens (10%) have a non-empty value of `Person`.
542 types (3%) occur at least once with a non-empty value of `Person`.
448 lemmas (3%) occur at least once with a non-empty value of `Person`.
The feature is used with 3 part-of-speech tags: [en-pos/PRON]() (18446; 7% instances), [en-pos/VERB]() (5616; 2% instances), [en-pos/AUX]() (1831; 1% instances).

### `PRON`

18446 [en-pos/PRON]() tokens (82% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (18446; 100%), <tt><a href="Poss.html">Poss</a>=EMPTY</tt> (14872; 81%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (13706; 74%), <tt><a href="Case.html">Case</a>=Nom</tt> (11682; 63%), <tt><a href="Number.html">Number</a>=Sing</tt> (10927; 59%).

`PRON` tokens may have the following values of `Person`:

* `1` (7890; 43% of non-empty `Person`): <em>i, we, my, me, our, us, myself, ourselves</em>
* `2` (3587; 19% of non-empty `Person`): <em>you, your, yourself, yourselves</em>
* `3` (6969; 38% of non-empty `Person`): <em>it, they, he, their, them, his, him, she, her, its</em>
* `EMPTY` (4181): <em>that, this, what, there, which, who, anyone, something, anything, nothing</em>

`Person` seems to be **lexical feature** of `PRON`. 100% lemmas (19) occur only with one value of `Person`.

### `VERB`

5616 [en-pos/VERB]() tokens (17% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (5616; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (5616; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (5616; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (4668; 83%).

`VERB` tokens may have the following values of `Person`:

* `1` (162; 3% of non-empty `Person`): <em>am, was</em>
* `3` (5454; 97% of non-empty `Person`): <em>is, was, 's, has, s, says, seems, makes, needs, looks</em>
* `EMPTY` (27854): <em>have, are, be, get, know, had, go, do, want, said</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past</tt></td><td><em>was</em></td><td><em>was</em></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres</tt></td><td><em>am</em></td><td><em>is, 's, s, ai</em></td></tr>
</table>

`Person` seems to be **lexical feature** of `VERB`. 100% lemmas (429) occur only with one value of `Person`.

### `AUX`

1831 [en-pos/AUX]() tokens (19% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (1831; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (1831; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (1831; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (1337; 73%).

`AUX` tokens may have the following values of `Person`:

* `1` (209; 11% of non-empty `Person`): <em>am, was</em>
* `3` (1622; 89% of non-empty `Person`): <em>is, has, was, does, 's, s, gets, `s</em>
* `EMPTY` (7748): <em>will, can, would, have, do, be, are, could, should, did</em>

<table>
  <tr><th>Paradigm <i>be</i></th><th><tt>1</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past</tt></td><td><em>was</em></td><td><em>was</em></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres</tt></td><td><em>am</em></td><td><em>is, 's, s</em></td></tr>
</table>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>PRON --[<a href="../dep/nmod:npmod.html">nmod:npmod</a>]--> PRON</tt> (3; 100%),
<tt>PRON --[<a href="../dep/case.html">case</a>]--> VERB</tt> (1; 100%).

