

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This feature is universal.
It occurs with 1 different values: `Imp`.

18960 tokens (9%) have a non-empty value of `Aspect`.
2110 types (8%) occur at least once with a non-empty value of `Aspect`.
1299 lemmas (6%) occur at least once with a non-empty value of `Aspect`.
The feature is used with 3 part-of-speech tags: [nl-pos/VERB]() (11857; 6% instances), [nl-pos/AUX]() (7077; 4% instances), [nl-pos/X]() (26; 0% instances).

### `VERB`

11857 [nl-pos/VERB]() tokens (76% of all `VERB` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `VERB` and `Aspect` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (11857; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (11857; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (9415; 79%), <tt><a href="VerbType.html">VerbType</a>=EMPTY</tt> (8050; 68%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (7442; 63%), <tt><a href="Person.html">Person</a>=EMPTY</tt> (6011; 51%).

`VERB` tokens may have the following values of `Aspect`:

* `Imp` (11857; 100% of non-empty `Aspect`): <em>heeft, hebben, zal, kan, had, zou, heb, moet, komt, wil</em>
* `EMPTY` (3794): <em>afgelopen, maken, volgende, Noem, komende, kunnen, gaan, bestaande, hebben, geef</em>

`Aspect` seems to be **lexical feature** of `VERB`. 100% lemmas (1229) occur only with one value of `Aspect`.

### `AUX`

7077 [nl-pos/AUX]() tokens (45% of all `AUX` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `AUX` and `Aspect` co-occurred: <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (7077; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (7077; 100%), <tt><a href="Subcat.html">Subcat</a>=EMPTY</tt> (6581; 93%), <tt><a href="Number.html">Number</a>=Sing</tt> (5671; 80%), <tt><a href="VerbType.html">VerbType</a>=Aux,Cop</tt> (5604; 79%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (4985; 70%), <tt><a href="Person.html">Person</a>=3</tt> (3732; 53%).

`AUX` tokens may have the following values of `Aspect`:

* `Imp` (7077; 100% of non-empty `Aspect`): <em>is, was, werd, zijn, wordt, waren, worden, werden, ben, heet</em>
* `EMPTY` (8814): <em>worden, zijn, kunnen, gaan, komen, hebben, zien, moeten, geweest, gemaakt</em>

`Aspect` seems to be **lexical feature** of `AUX`. 100% lemmas (218) occur only with one value of `Aspect`.

### `X`

26 [nl-pos/X]() tokens (0% of all `X` tokens) have a non-empty value of `Aspect`.

The most frequent other feature values with which `X` and `Aspect` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (20; 77%).

`X` tokens may have the following values of `Aspect`:

* `Imp` (26; 100% of non-empty `Aspect`): <em>dat_wil_zeggen, als_volgt, "_O_,_Dick_van_Dijk_,_wat_ben_je_diep_gezonken_", Alle_vlees_is_als_gras, Begrijp_je_nu_waarom_ik_huil, Comme_d'habitude, Denken_en_Doen, Elke_dag_is_er_een_., Glaasje_op_,_laat_je_rijden, Mam_,_waar_is_m'n_zwembroek</em>
* `EMPTY` (5637): <em>Den_Haag, voor_het_eerst, Verenigde_Staten, Tweede_Kamer, met_name, aan_het, Integraal_Dossier_JGZ, onder_meer, in_plaats_van, in_verband_met</em>

`Aspect` seems to be **lexical feature** of `X`. 100% lemmas (21) occur only with one value of `Aspect`.

## Relations with Agreement in `Aspect`

The 10 most frequent relations where parent and child node agree in `Aspect`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (511; 89%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (292; 86%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (85; 93%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (77; 84%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (74; 87%),
<tt>VERB --[<a href="../dep/advcl.html">advcl</a>]--> AUX</tt> (52; 83%),
<tt>AUX --[<a href="../dep/parataxis.html">parataxis</a>]--> VERB</tt> (43; 91%),
<tt>VERB --[<a href="../dep/parataxis.html">parataxis</a>]--> AUX</tt> (35; 92%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> VERB</tt> (18; 55%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> AUX</tt> (12; 86%).

