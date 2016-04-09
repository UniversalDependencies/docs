

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This feature is universal.
It occurs with 3 different values: `1`, `2`, `3`.

16884 tokens (8%) have a non-empty value of `Person`.
913 types (3%) occur at least once with a non-empty value of `Person`.
779 lemmas (4%) occur at least once with a non-empty value of `Person`.
The feature is used with 4 part-of-speech tags: [nl-pos/PRON]() (7047; 4% instances), [nl-pos/VERB]() (5846; 3% instances), [nl-pos/AUX]() (3950; 2% instances), [nl-pos/X]() (41; 0% instances).

### `PRON`

7047 [nl-pos/PRON]() tokens (38% of all `PRON` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `PRON` and `Person` co-occurred: <tt><a href="PronType.html">PronType</a>=Prs</tt> (7047; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (4509; 64%), <tt><a href="Case.html">Case</a>=Nom</tt> (4104; 58%).

`PRON` tokens may have the following values of `Person`:

* `1` (2440; 35% of non-empty `Person`): <em>ik, we, ons, wij, me, mijn, mij, onze, mezelf, m'n</em>
* `2` (355; 5% of non-empty `Person`): <em>je, u, jullie, jij, uw, jou, gij, jouw, jezelf, ge</em>
* `3` (4252; 60% of non-empty `Person`): <em>hij, zijn, zich, ze, hun, zij, haar, hem, het, hen</em>
* `EMPTY` (11376): <em>het, die, dat, de, wat, welke, dit, deze, wie, geen</em>

`Person` seems to be **lexical feature** of `PRON`. 100% lemmas (46) occur only with one value of `Person`.

### `VERB`

5846 [nl-pos/VERB]() tokens (37% of all `VERB` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `VERB` and `Person` co-occurred: <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (5846; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (5846; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (5846; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (5846; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (5846; 100%), <tt><a href="VerbType.html">VerbType</a>=EMPTY</tt> (3689; 63%).

`VERB` tokens may have the following values of `Person`:

* `1` (731; 13% of non-empty `Person`): <em>heb, wil, vind, kan, weet, denk, geloof, ga, moet, zal</em>
* `2` (230; 4% of non-empty `Person`): <em>hebt, kun, heb, kunt, moet, weet, wil, denk, doe, ga</em>
* `3` (4885; 84% of non-empty `Person`): <em>heeft, zal, kan, moet, komt, gaat, heet, noemt, ligt, staat</em>
* `EMPTY` (9805): <em>hebben, had, zou, zei, kunnen, kwam, zullen, hadden, kon, moeten</em>

<table>
  <tr><th>Paradigm <i>heb</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Subcat.html">Subcat</a>=Intr</tt></td><td></td><td></td><td><em>heeeft</em></td></tr>
  <tr><td><tt><a href="Subcat.html">Subcat</a>=Tran</tt></td><td><em>heb</em></td><td><em>heb, hebt</em></td><td><em>heeft, heb'</em></td></tr>
  <tr><td><tt><a href="VerbType.html">VerbType</a>=Mod</tt></td><td><em>heb</em></td><td><em>hebt, heb</em></td><td><em>heeft</em></td></tr>
</table>

### `AUX`

3950 [nl-pos/AUX]() tokens (25% of all `AUX` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `AUX` and `Person` co-occurred: <tt><a href="Aspect.html">Aspect</a>=Imp</tt> (3950; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (3950; 100%), <tt><a href="VerbForm.html">VerbForm</a>=Fin</tt> (3950; 100%), <tt><a href="Tense.html">Tense</a>=Pres</tt> (3950; 100%), <tt><a href="Mood.html">Mood</a>=Ind</tt> (3950; 100%), <tt><a href="Subcat.html">Subcat</a>=EMPTY</tt> (3670; 93%), <tt><a href="VerbType.html">VerbType</a>=Aux,Cop</tt> (3213; 81%).

`AUX` tokens may have the following values of `Person`:

* `1` (160; 4% of non-empty `Person`): <em>ben, word, heb, kom, vind, ga, moet, doe, inneem, kan</em>
* `2` (58; 1% of non-empty `Person`): <em>bent, ben, hebt, kunt, moet, word, blijft, gaat, getypt, leef</em>
* `3` (3732; 94% of non-empty `Person`): <em>is, wordt, heet, komt, heeft, zal, blijft, lijkt, moet, kan</em>
* `EMPTY` (11941): <em>zijn, was, worden, werd, hebben, kunnen, waren, komen, gaan, werden</em>

<table>
  <tr><th>Paradigm <i>ben</i></th><th><tt>1</tt></th><th><tt>2</tt></th><th><tt>3</tt></th></tr>
  <tr><td><tt><a href="Subcat.html">Subcat</a>=Intr</tt></td><td></td><td><em>bent</em></td><td><em>is</em></td></tr>
  <tr><td><tt></tt></td><td><em>ben</em></td><td><em>bent</em></td><td><em>is</em></td></tr>
  <tr><td><tt><a href="VerbType.html">VerbType</a>=Aux,Cop</tt></td><td><em>ben</em></td><td><em>bent, ben</em></td><td><em>is, Da's</em></td></tr>
</table>

### `X`

41 [nl-pos/X]() tokens (1% of all `X` tokens) have a non-empty value of `Person`.

The most frequent other feature values with which `X` and `Person` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (28; 68%).

`X` tokens may have the following values of `Person`:

* `1` (6; 15% of non-empty `Person`): <em>De_man_van_mijn_hart, De_vrouwenarbeid_in_onze_tijd, Mam_,_waar_is_m'n_zwembroek, Onze_Lieve_Vrouw_,_de_heilige_Maria_van_de_gunstige_wind, in_de_maak, ons_inziens</em>
* `2` (9; 22% of non-empty `Person`): <em>"_O_,_Dick_van_Dijk_,_wat_ben_je_diep_gezonken_", Begrijp_je_nu_waarom_ik_huil, Glaasje_op_,_laat_je_rijden, Neem_eens_een_getal_in_je_gedachten, Sesam_,_open_u_!, dank_u_wel, je_reinste, van_heb_ik_jou_daar, wat_je_noemt</em>
* `3` (26; 63% of non-empty `Person`): <em>dat_wil_zeggen, om_het_even, als_volgt, zich_zelf, zijns_inziens, A.F.Th_van_der_Heijden, Alle_vlees_is_als_gras, Elke_dag_is_er_een_., Het_volk_en_zijn_geweren, X-unsere_welt_heute</em>
* `EMPTY` (5622): <em>Den_Haag, voor_het_eerst, Verenigde_Staten, Tweede_Kamer, met_name, aan_het, Integraal_Dossier_JGZ, onder_meer, in_plaats_van, in_verband_met</em>

`Person` seems to be **lexical feature** of `X`. 100% lemmas (32) occur only with one value of `Person`.

## Relations with Agreement in `Person`

The 10 most frequent relations where parent and child node agree in `Person`:
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> VERB</tt> (142; 55%),
<tt>AUX --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (32; 71%),
<tt>VERB --[<a href="../dep/conj.html">conj</a>]--> AUX</tt> (22; 52%),
<tt>VERB --[<a href="../dep/csubj.html">csubj</a>]--> AUX</tt> (8; 67%),
<tt>VERB --[<a href="../dep/ccomp.html">ccomp</a>]--> AUX</tt> (2; 67%),
<tt>VERB --[<a href="../dep/cc.html">cc</a>]--> VERB</tt> (1; 100%),
<tt>AUX --[<a href="../dep/cc.html">cc</a>]--> VERB</tt> (1; 100%),
<tt>VERB --[<a href="../dep/dep.html">dep</a>]--> AUX</tt> (1; 100%).

