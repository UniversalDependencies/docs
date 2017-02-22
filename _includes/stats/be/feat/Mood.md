

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Belarusian)

This feature is universal.
It occurs with 2 different values: `Imp`, `Ind`.

552 tokens (8%) have a non-empty value of `Mood`.
354 types (14%) occur at least once with a non-empty value of `Mood`.
255 lemmas (14%) occur at least once with a non-empty value of `Mood`.
The feature is used with 2 part-of-speech tags: [be-pos/VERB]() (519; 8% instances), [be-pos/AUX]() (33; 0% instances).

### `VERB`

519 [be-pos/VERB]() tokens (71% of all `VERB` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `VERB` and `Mood` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (519; 100%), <tt><a href="Voice.html">Voice</a>=Act</tt> (427; 82%), <tt><a href="Number.html">Number</a>=Sing</tt> (352; 68%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (332; 64%), <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (286; 55%), <tt><a href="Tense.html">Tense</a>=Past</tt> (266; 51%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (266; 51%).

`VERB` tokens may have the following values of `Mood`:

* `Imp` (7; 1% of non-empty `Mood`): <em>Гавары, Вучыся, Прымі, пачні</em>
* `Ind` (512; 99% of non-empty `Mood`): <em>было, можа, перадаваў, паведамілі, з'яўляецца, мае, маюць, заявіў, паведамляў, адзначыў</em>
* `EMPTY` (207): <em>вярнуцца, прыведзены, размаўляць, налічаная, працаваць, разумець, вызваліць, выйсці, выратаваць, зрабіць</em>

<table>
  <tr><th>Paradigm <i>гаварыць</i></th><th><tt>Ind</tt></th><th><tt>Imp</tt></th></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=1|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>гавару</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Sing|<a href="Person.html">Person</a>=2</tt></td><td></td><td><em>Гавары</em></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Person.html">Person</a>=3|<a href="Tense.html">Tense</a>=Pres</tt></td><td><em>гавораць</em></td><td></td></tr>
  <tr><td><tt><a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Past</tt></td><td><em>Гаварылі</em></td><td></td></tr>
</table>

`Mood` seems to be **lexical feature** of `VERB`. 98% lemmas (251) occur only with one value of `Mood`.

### `AUX`

33 [be-pos/AUX]() tokens (97% of all `AUX` tokens) have a non-empty value of `Mood`.

The most frequent other feature values with which `AUX` and `Mood` co-occurred: <tt><a href="Voice.html">Voice</a>=Act</tt> (33; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (33; 100%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (28; 85%), <tt><a href="Aspect.html">Aspect</a>=Perf</tt> (23; 70%), <tt><a href="Tense.html">Tense</a>=Fut</tt> (23; 70%), <tt><a href="Person.html">Person</a>=3</tt> (19; 58%), <tt><a href="Number.html">Number</a>=Plur</tt> (17; 52%).

`AUX` tokens may have the following values of `Mood`:

* `Ind` (33; 100% of non-empty `Mood`): <em>будуць, будзе, былі, было, будзем, была, будзеш, буду</em>
* `EMPTY` (1): <em>быць</em>

## Relations with Agreement in `Mood`

The 10 most frequent relations where parent and child node agree in `Mood`:
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (51; 75%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (46; 90%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (23; 59%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (12; 86%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> VERB</tt> (1; 100%).

