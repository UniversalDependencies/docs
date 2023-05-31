---
layout: base
title:  'Statistics of Distance in UD_Marathi'
udver: '2'
---

## Treebank Statistics: UD_Marathi: Features: `Distance`

This feature is language-specific.
It occurs with 2 different values: `Dist`, `Prox`.

273 tokens (7%) have a non-empty value of `Distance`.
18 types (2%) occur at least once with a non-empty value of `Distance`.
4 lemmas (1%) occur at least once with a non-empty value of `Distance`.
The feature is used with 2 part-of-speech tags: <tt><a href="mr-pos-PRON.html">PRON</a></tt> (194; 5% instances), <tt><a href="mr-pos-DET.html">DET</a></tt> (79; 2% instances).

### `PRON`

194 <tt><a href="mr-pos-PRON.html">PRON</a></tt> tokens (51% of all `PRON` tokens) have a non-empty value of `Distance`.

The most frequent other feature values with which `PRON` and `Distance` co-occurred: <tt><a href="mr-feat-Person.html">Person</a></tt><tt>=3</tt> (193; 99%), <tt><a href="mr-feat-PronType.html">PronType</a></tt><tt>=EMPTY</tt> (193; 99%), <tt><a href="mr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (174; 90%), <tt><a href="mr-feat-Gender.html">Gender</a></tt><tt>=Masc</tt> (109; 56%).

`PRON` tokens may have the following values of `Distance`:

* `Dist` (184; 95% of non-empty `Distance`): तो _ ती त्याला त्याने तिला ते त्यांना त्यांनी तिने
* `Prox` (10; 5% of non-empty `Distance`): हे ही याला

### `DET`

79 <tt><a href="mr-pos-DET.html">DET</a></tt> tokens (71% of all `DET` tokens) have a non-empty value of `Distance`.

The most frequent other feature values with which `DET` and `Distance` co-occurred: <tt><a href="mr-feat-PronType.html">PronType</a></tt><tt>=Dem</tt> (79; 100%), <tt><a href="mr-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (46; 58%), <tt><a href="mr-feat-Number.html">Number</a></tt><tt>=Sing</tt> (45; 57%).

`DET` tokens may have the following values of `Distance`:

* `Dist` (42; 53% of non-empty `Distance`): त्या तो ती _ ते
* `Prox` (37; 47% of non-empty `Distance`): या ही तो ती त्या हा हे आम्ही ह्या

<table>
  <tr><th>Paradigm <i>तो</i></th><th><tt>Dist</tt></th><th><tt>Prox</tt></th></tr>
  <tr><td><tt><tt><a href="mr-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="mr-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="mr-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td></td><td>तो</td></tr>
  <tr><td><tt><tt><a href="mr-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="mr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="mr-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td>ती</td><td>ती</td></tr>
  <tr><td><tt><tt><a href="mr-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="mr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="mr-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td>त्या</td></tr>
  <tr><td><tt><tt><a href="mr-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="mr-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="mr-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td></td><td>ती</td></tr>
  <tr><td><tt><tt><a href="mr-feat-Case.html">Case</a></tt><tt>=Obl</tt></tt></td><td>त्या, _</td><td>त्या</td></tr>
  <tr><td><tt><tt><a href="mr-feat-Gender.html">Gender</a></tt><tt>=Masc</tt>|<tt><a href="mr-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td>तो, _</td><td></td></tr>
  <tr><td><tt><tt><a href="mr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="mr-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td>ती</td><td></td></tr>
  <tr><td><tt><tt><a href="mr-feat-Gender.html">Gender</a></tt><tt>=Fem</tt>|<tt><a href="mr-feat-Number.html">Number</a></tt><tt>=Plur</tt></tt></td><td>त्या, _</td><td></td></tr>
  <tr><td><tt><tt><a href="mr-feat-Gender.html">Gender</a></tt><tt>=Neut</tt>|<tt><a href="mr-feat-Number.html">Number</a></tt><tt>=Sing</tt></tt></td><td>ते</td><td></td></tr>
  <tr><td><tt></tt></td><td>त्या</td><td></td></tr>
</table>

