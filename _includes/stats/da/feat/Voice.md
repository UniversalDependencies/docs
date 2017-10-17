

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

11677 tokens (13%) have a non-empty value of `Voice`.
2081 types (13%) occur at least once with a non-empty value of `Voice`.
1137 lemmas (9%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: [da-pos/VERB]() (7429; 8% instances), [da-pos/AUX]() (4248; 5% instances).

### `VERB`

7429 [da-pos/VERB]() tokens (77% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="Number.html">Number</a>=EMPTY</tt> (7429; 100%), <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (7429; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (5028; 68%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (5028; 68%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (6993; 94% of non-empty `Voice`): <em>er, har, siger, få, var, får, sagde, fik, kommer, se</em>
* `Pass` (436; 6% of non-empty `Voice`): <em>bruges, ventes, tages, gøres, nævnes, sælges, kaldes, ses, sættes, udsendes</em>
* `EMPTY` (2178): <em>fået, været, gjort, set, haft, gået, kommet, sagt, lad, taget</em>

<table>
  <tr><th>Paradigm <i>få</i></th><th><tt>Act</tt></th><th><tt>Pass</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>fik</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>får</em></td><td><em>fås</em></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td><em>få</em></td><td><em>fås</em></td></tr>
</table>

### `AUX`

4248 [da-pos/AUX]() tokens (96% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="Mood.html">Mood</a>=Ind</tt> (3952; 93%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (3952; 93%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (3011; 71%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (4248; 100% of non-empty `Voice`): <em>er, har, kan, var, skal, vil, blev, være, kunne, havde</em>
* `EMPTY` (167): <em>været, blevet, kunnet, måttet, turdet, Bliv, villet, værende</em>

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (701; 77%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (331; 71%),
<tt>VERB --[<a href="../dep/obj.html">obj</a>]--> VERB</tt> (319; 81%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (307; 65%),
<tt>VERB --[<a href="../dep/advmod.html">advmod</a>]--> VERB</tt> (265; 71%),
<tt>VERB --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> VERB</tt> (39; 78%),
<tt>VERB --[<a href="../dep/dep.html">dep</a>]--> VERB</tt> (16; 76%),
<tt>VERB --[<a href="../dep/mark.html">mark</a>]--> VERB</tt> (13; 59%),
<tt>AUX --[<a href="../dep/xcomp.html">xcomp</a>]--> VERB</tt> (7; 88%),
<tt>VERB --[<a href="../dep/obl:loc.html">obl:loc</a>]--> VERB</tt> (1; 100%).

