

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This feature is universal.
It occurs with 2 different values: `Act`, `Pass`.

13018 tokens (13%) have a non-empty value of `Voice`.
2241 types (13%) occur at least once with a non-empty value of `Voice`.
1219 lemmas (9%) occur at least once with a non-empty value of `Voice`.
The feature is used with 2 part-of-speech tags: [da-pos/VERB]() (8289; 8% instances), [da-pos/AUX]() (4729; 5% instances).

### `VERB`

8289 [da-pos/VERB]() tokens (77% of all `VERB` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `VERB` and `Voice` co-occurred: <tt><a href="Definite.html">Definite</a>=EMPTY</tt> (8289; 100%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (8289; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (5615; 68%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (5615; 68%).

`VERB` tokens may have the following values of `Voice`:

* `Act` (7805; 94% of non-empty `Voice`): <em>er, har, siger, var, få, får, fik, sagde, kommer, gå</em>
* `Pass` (484; 6% of non-empty `Voice`): <em>bruges, tages, ventes, gøres, nævnes, sælges, udsendes, ses, kaldes, sættes</em>
* `EMPTY` (2422): <em>fået, været, set, haft, gjort, gået, kommet, lad, sagt, kommende</em>

<table>
  <tr><th>Paradigm <i>have</i></th><th><tt>Act</tt></th><th><tt>Pass</tt></th></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Past|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>havde</em></td><td></td></tr>
  <tr><td><tt><a href="Mood.html">Mood</a>=Ind|<a href="Tense.html">Tense</a>=Pres|<a href="VerbForm.html">VerbForm</a>=Fin</tt></td><td><em>har</em></td><td><em>haves</em></td></tr>
  <tr><td><tt><a href="VerbForm.html">VerbForm</a>=Inf</tt></td><td><em>have, ha'</em></td><td></td></tr>
</table>

### `AUX`

4729 [da-pos/AUX]() tokens (96% of all `AUX` tokens) have a non-empty value of `Voice`.

The most frequent other feature values with which `AUX` and `Voice` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (4395; 93%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (4395; 93%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (3311; 70%).

`AUX` tokens may have the following values of `Voice`:

* `Act` (4729; 100% of non-empty `Voice`): <em>er, har, kan, var, skal, vil, blev, være, kunne, havde</em>
* `EMPTY` (188): <em>været, blevet, kunnet, måttet, turdet, Bliv, villet, værende</em>

## Relations with Agreement in `Voice`

The 10 most frequent relations where parent and child node agree in `Voice`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (722; 79%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> VERB</tt> (369; 70%),
<tt>VERB --[<a href="../dep/dobj.html">dobj</a>]--> VERB</tt> (362; 82%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (355; 65%),
<tt>VERB --[<a href="../dep/advmod.html">advmod</a>]--> VERB</tt> (297; 71%),
<tt>VERB --[<a href="../dep/acl:relcl.html">acl:relcl</a>]--> VERB</tt> (41; 73%),
<tt>VERB --[<a href="../dep/mark.html">mark</a>]--> VERB</tt> (16; 64%),
<tt>AUX --[<a href="../dep/xcomp.html">xcomp</a>]--> VERB</tt> (7; 88%),
<tt>VERB --[<a href="../dep/nmod:loc.html">nmod:loc</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/reparandum.html">reparandum</a>]--> VERB</tt> (1; 100%).

