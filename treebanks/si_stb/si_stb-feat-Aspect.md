---
layout: base
title:  'Statistics of Aspect in UD_Sinhala-STB'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-STB: Features: `Aspect`

This feature is universal but the values `Prosp` are language-specific.
It occurs with 3 different values: `Perf`, `Prog`, `Prosp`.

30 tokens (3%) have a non-empty value of `Aspect`.
19 types (4%) occur at least once with a non-empty value of `Aspect`.
17 lemmas (4%) occur at least once with a non-empty value of `Aspect`.
The feature is used with 2 part-of-speech tags: <tt><a href="si_stb-pos-VERB.html">VERB</a></tt> (20; 2% instances), <tt><a href="si_stb-pos-AUX.html">AUX</a></tt> (10; 1% instances).

### `VERB`

20 <tt><a href="si_stb-pos-VERB.html">VERB</a></tt> tokens (19% of all `VERB` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `VERB` and `Aspect` co-occurred: <tt><a href="si_stb-feat-Voice.html">Voice</a></tt><tt>=EMPTY</tt> (14; 70%), <tt><a href="si_stb-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (13; 65%).

`VERB` tokens may have the following values of `Aspect`:

* `Perf` (15; 75% of non-empty `Aspect`): <em>දී, කර, පිහිටා, අත්හිටුවා, කඩකර, කියා, ගළපා, ගෙන, පෙරැළී, වී</em>
* `Prog` (3; 15% of non-empty `Aspect`): <em>දරමින්, යමින්, වෙමින්</em>
* `Prosp` (2; 10% of non-empty `Aspect`): <em>වනු</em>
* `EMPTY` (87): <em>තිබේ, ඇත්තේ, කළ, කළේ, පාවා, වන්නේ, විය, කර, කිරීමට, පවතින</em>

<table>
  <tr><th>Paradigm <i>වෙ</i></th><th><tt>Perf</tt></th><th><tt>Prog</tt></th><th><tt>Prosp</tt></th></tr>
  <tr><td><tt><tt><a href="si_stb-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="si_stb-feat-VerbForm.html">VerbForm</a></tt><tt>=Ger</tt></tt></td><td></td><td></td><td><em>වනු</em></td></tr>
  <tr><td><tt><tt><a href="si_stb-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="si_stb-feat-VerbForm.html">VerbForm</a></tt><tt>=Ger</tt>|<tt><a href="si_stb-feat-Voice.html">Voice</a></tt><tt>=Pass</tt></tt></td><td></td><td></td><td><em>වනු</em></td></tr>
  <tr><td><tt><tt><a href="si_stb-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="si_stb-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt>|<tt><a href="si_stb-feat-Voice.html">Voice</a></tt><tt>=Act</tt></tt></td><td><em>වී</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="si_stb-feat-Tense.html">Tense</a></tt><tt>=Pres</tt>|<tt><a href="si_stb-feat-VerbForm.html">VerbForm</a></tt><tt>=Conv</tt></tt></td><td></td><td><em>වෙමින්</em></td><td></td></tr>
</table>

`Aspect` seems to be **lexical feature** of `VERB`. 92% lemmas (11) occur only with one value of `Aspect`.

### `AUX`

10 <tt><a href="si_stb-pos-AUX.html">AUX</a></tt> tokens (21% of all `AUX` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `AUX` and `Aspect` co-occurred: <tt><a href="si_stb-feat-Mood.html">Mood</a></tt><tt>=EMPTY</tt> (9; 90%), <tt><a href="si_stb-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (8; 80%), <tt><a href="si_stb-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (8; 80%), <tt><a href="si_stb-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (7; 70%).

`AUX` tokens may have the following values of `Aspect`:

* `Perf` (6; 60% of non-empty `Aspect`): <em>ඇත, තිබේ, ඇති, ලැබ</em>
* `Prosp` (4; 40% of non-empty `Aspect`): <em>නැත, ඇත</em>
* `EMPTY` (37): <em>තිබේ, හැකි, නැත, යුතු, ඇත, වේ, ඇත්තේ, තිබිණි, පවතී, යුතුය</em>

<table>
  <tr><th>Paradigm <i>ඇත</i></th><th><tt>Perf</tt></th><th><tt>Prosp</tt></th></tr>
  <tr><td><tt><tt><a href="si_stb-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt></tt></td><td><em>ඇත</em></td><td><em>ඇත</em></td></tr>
  <tr><td><tt><tt><a href="si_stb-feat-VerbForm.html">VerbForm</a></tt><tt>=Part</tt></tt></td><td><em>ඇති</em></td><td></td></tr>
</table>

