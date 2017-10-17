

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Belarusian)

This feature is universal but the values `Mid` are language-specific.
It occurs with 3 different values: `Act`, `Mid`, `Pass`.

752 tokens (11%) have a non-empty value of `Voice`.
521 types (20%) occur at least once with a non-empty value of `Voice`.
361 lemmas (20%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: [be-pos/VERB]() (718; 10% instances), [be-pos/AUX]() (34; 0% instances).

### `VERB`

718 [be-pos/VERB]() tokens (99% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (519; 72%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (512; 71%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (494; 69%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (465; 65%), <tt><a href="Number.html">Number</a>=Sing</tt> (389; 54%), <tt><a href="Aspect.html">Aspect</a>=Perf</tt> (361; 50%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (540; 75% of non-empty `Voice`): <em>было, можа, перадаваў, паведамілі, мае, маюць, заявіў, паведамляў, Гавары, адзначыў</em>
* `Mid` (114; 16% of non-empty `Voice`): <em>з'яўляецца, вярнуцца, з'яўляюцца, гаворыцца, здаецца, знаходзіцца, мяркуецца, тычыцца, Вучылася, Вучыся</em>
* `Pass` (64; 9% of non-empty `Voice`): <em>прыведзены, налічаная, намаляваны, Арыштаваныя, Здзейснена, Пашкоджаны, абноўлены, абсталяваных, абумоўленую, адведзеных</em>
* `EMPTY` (8): <em>трэба, важна, варта, мага, недастаткова, сорамна, цяплей</em>

<table>
  <tr><th>Paradigm <i>увесці</i></th><th><tt>Act</tt></th><th><tt>Pass</tt></th></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Ins|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td><em>ўведзенымі</em></td></tr>
  <tr><td><tt><a href="Case.html">Case</a>=Nom|<a href="Number.html">Number</a>=Plur|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Part</tt></td><td></td><td><em>уведзеныя</em></td></tr>
  <tr><td><tt><a href="Gender.html">Gender</a>=Masc|<a href="Mood.html">Mood</a>=Ind|<a href="Number.html">Number</a>=Sing|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>ўвёў</em></td><td></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td><em>увесці</em></td><td></td></tr>
</table>

`Voice` seems to be **lexical feature** of `VERB`. 96% lemmas (345) occur only with one value of `Voice`.

### `AUX`

34 [be-pos/AUX]() tokens (100% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="Mood.html">Mood</a>=Ind</tt> (33; 97%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (33; 97%), <tt><a href="Gender.html">Gender</a>=EMPTY</tt> (29; 85%), <tt><a href="Tense.html">Tense</a>=Fut</tt> (23; 68%), <tt><a href="Aspect.html">Aspect</a>=Perf</tt> (23; 68%), <tt><a href="Person.html">Person</a>=3</tt> (19; 56%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (34; 100% of non-empty `Voice`): <em>будуць, будзе, былі, было, будзем, была, будзеш, буду, быць</em>

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (45; 71%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (42; 62%),
<tt>VERB --[<a href="../dep/xcomp.html">xcomp</a>]--> VERB</tt> (41; 65%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (31; 74%),
<tt>VERB --[<a href="../dep/aux.html">aux</a>]--> AUX</tt> (13; 62%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (9; 64%),
<tt>VERB --[<a href="../dep/acl.html">acl</a>]--> VERB</tt> (2; 100%),
<tt>VERB --[<a href="../dep/amod.html">amod</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/case.html">case</a>]--> VERB</tt> (1; 100%).

