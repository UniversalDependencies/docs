

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

1686 tokens (8%) have a non-empty value of `Person`.
595 types (10%) occur at least once with a non-empty value of `Person`.
384 lemmas (10%) occur at least once with a non-empty value of `Person`.
The feature is used with 2 part-of-speech tags: [lv-pos/VERB]() (1503; 7% instances), [lv-pos/PRON]() (183; 1% instances).

### `VERB`

1503 [lv-pos/VERB]() tokens (52% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (1503; 100%), <tt><a href="Degree.html">Degree</a>=EMPTY</tt> (1503; 100%), <tt><a href="Case.html">Case</a>=EMPTY</tt> (1503; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (1503; 100%), <tt><a href="Aspect.html">Aspect</a>=EMPTY</tt> (1503; 100%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (1503; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (1503; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (1496; 100%), <tt><a href="Negative.html">Negative</a>=Neg</tt> (1390; 92%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (1316; 88%).

`VERB` tokens may have the following values of `Person`:

* `1` (157; 10% of non-empty `Person`): <em>esam, esmu, varam, runājam, domāju, gribēju, liekam, strādājam, zinām, biju</em>
* `2` (30; 2% of non-empty `Person`): <em>esat, varat, Redzēsiet, aizver, apstājies, atcerieties, attīstīsies, dalīsies, domā, izlēmāt</em>
* `3` (1316; 88% of non-empty `Person`): <em>ir, bija, nav, būs, tika, tiek, tiks, notiek, var, varēs</em>
* `EMPTY` (1367): <em>varētu, būtu, būt, bijis, dibināts, saņēmis, ziņots, darbojoties, darīt, izlietojusi</em>

<table>
  <tr><th>Paradigm <i>būt</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>biju</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>esmu</em></td><td></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>esam</em></td><td><em>esat</em></td><td></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Fut</tt></td><td></td><td></td><td><em>būs</em></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Past</tt></td><td></td><td></td><td><em>bija</em></td></tr>
  <tr><td><tt><a href="Tense.html">Tense</a>=Pres</tt></td><td></td><td></td><td><em>ir</em></td></tr>
</table>

### `PRON`

183 [lv-pos/PRON]() tokens (34% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (183; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (116; 63%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (96; 52%), <tt><a href="Case.html">Case</a>=Nom</tt> (96; 52%).

`PRON` tokens may have the following values of `Person`:

* `1` (79; 43% of non-empty `Person`): <em>es, man, mēs, mums, mūsu, mūs, mani</em>
* `2` (18; 10% of non-empty `Person`): <em>jūs, jums, jūsu, tu</em>
* `3` (86; 47% of non-empty `Person`): <em>viņš, viņa, viņi, viņu, viņam, viņas, viņiem, Viņus, viņai</em>
* `EMPTY` (362): <em>tas, to, tā, kas, ko, tam, viss, tie, tās, tajā</em>

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<a href="../dep/dep.html">dep</a>]--> PRON</tt> (2; 100%).

