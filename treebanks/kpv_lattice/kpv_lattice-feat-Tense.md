---
layout: base
title:  'Statistics of Tense in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Features: `Tense`

This feature is universal.
It occurs with 3 different values: `Fut`, `Past`, `Pres`.

280 tokens (14%) have a non-empty value of `Tense`.
209 types (20%) occur at least once with a non-empty value of `Tense`.
160 lemmas (21%) occur at least once with a non-empty value of `Tense`.
The feature is used with 2 part-of-speech tags: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (239; 12% instances), <tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (41; 2% instances).

### `VERB`

239 <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> tokens (65% of all `VERB` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `VERB` and `Tense` co-occurred: <tt><a href="kpv_lattice-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (203; 85%), <tt><a href="kpv_lattice-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (202; 85%), <tt><a href="kpv_lattice-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (202; 85%), <tt><a href="kpv_lattice-feat-Number.html">Number</a></tt><tt>=Sing</tt> (188; 79%), <tt><a href="kpv_lattice-feat-Person.html">Person</a></tt><tt>=3</tt> (168; 70%).

`VERB` tokens may have the following values of `Tense`:

* `Fut` (13; 5% of non-empty `Tense`): <em>ковмас, воспитайтасны, гымалас, зэрас, кутас, кӧтӧдас, лысьтас, лэбыштас, петас, пӧльыштлас</em>
* `Past` (167; 70% of non-empty `Tense`): <em>идралӧм, идралӧмын, кутіс, воис, лои, вешйис, идралӧма, вӧлі, кыліс, лӧнис</em>
* `Pres` (59; 25% of non-empty `Tense`): <em>колӧ, думайта, мунӧ, висьталӧны, новлӧдлӧны, тӧдӧны, Воа, Овлывлӧ, Тыдалӧ, веськалӧны</em>
* `EMPTY` (130): <em>лоны, вермы, восьлавны, кут, мунны, воӧдчыны, вӧчны, дзебсьыны, дугдывтӧг, жалит</em>

<table>
  <tr><th>Paradigm <i>кутны</i></th><th><tt>Pres</tt></th><th><tt>Fut</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="kpv_lattice-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>кута</em></td><td></td><td></td></tr>
  <tr><td><tt><tt><a href="kpv_lattice-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td></td><td><em>кутас</em></td><td><em>кутіс</em></td></tr>
</table>

`Tense` seems to be **lexical feature** of `VERB`. 92% lemmas (145) occur only with one value of `Tense`.

### `AUX`

41 <tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> tokens (66% of all `AUX` tokens) have a non-empty value of `Tense`.

The most frequent other feature values with which `AUX` and `Tense` co-occurred: <tt><a href="kpv_lattice-feat-Mood.html">Mood</a></tt><tt>=Ind</tt> (41; 100%), <tt><a href="kpv_lattice-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (41; 100%), <tt><a href="kpv_lattice-feat-Number.html">Number</a></tt><tt>=EMPTY</tt> (31; 76%), <tt><a href="kpv_lattice-feat-Person.html">Person</a></tt><tt>=3</tt> (31; 76%), <tt><a href="kpv_lattice-feat-Polarity.html">Polarity</a></tt><tt>=Neg</tt> (26; 63%).

`AUX` tokens may have the following values of `Tense`:

* `Fut` (2; 5% of non-empty `Tense`): <em>лоас</em>
* `Past` (17; 41% of non-empty `Tense`): <em>вӧлі, эз, вӧлӧма, лоис, лолі</em>
* `Pres` (22; 54% of non-empty `Tense`): <em>оз, ог, он, оз-ӧ</em>
* `EMPTY` (21): <em>эз, эг, абу, абуӧсь, вӧв, вӧвны, эн</em>

<table>
  <tr><th>Paradigm <i>оз</i></th><th><tt>Pres</tt></th><th><tt>Past</tt></th></tr>
  <tr><td><tt><tt><a href="kpv_lattice-feat-Clitic.html">Clitic</a></tt><tt>=O</tt>|<tt><a href="kpv_lattice-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>оз-ӧ</em></td><td></td></tr>
  <tr><td><tt><tt><a href="kpv_lattice-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>ог</em></td><td></td></tr>
  <tr><td><tt><tt><a href="kpv_lattice-feat-Person.html">Person</a></tt><tt>=2</tt></tt></td><td><em>он</em></td><td></td></tr>
  <tr><td><tt><tt><a href="kpv_lattice-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>оз</em></td><td><em>эз</em></td></tr>
  <tr><td><tt></tt></td><td><em>оз</em></td><td><em>эз</em></td></tr>
</table>

## Relations with Agreement in `Tense`

The 10 most frequent relations where parent and child node agree in `Tense`:
<tt>VERB --[<tt><a href="kpv_lattice-dep-conj.html">conj</a></tt>]--> VERB</tt> (24; 75%),
<tt>VERB --[<tt><a href="kpv_lattice-dep-parataxis.html">parataxis</a></tt>]--> VERB</tt> (3; 75%),
<tt>VERB --[<tt><a href="kpv_lattice-dep-parataxis.html">parataxis</a></tt>]--> AUX</tt> (1; 100%).

