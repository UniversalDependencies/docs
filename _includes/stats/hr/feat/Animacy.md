

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This feature is universal.
It occurs with 2 different values: `Anim`, `Inan`.

2237 tokens (3%) have a non-empty value of `Animacy`.
625 types (4%) occur at least once with a non-empty value of `Animacy`.
590 lemmas (7%) occur at least once with a non-empty value of `Animacy`.
The feature is used with 4 part-of-speech tags: [hr-pos/NOUN]() (1404; 2% instances), [hr-pos/PRON]() (491; 1% instances), [hr-pos/PROPN]() (324; 0% instances), [hr-pos/NUM]() (18; 0% instances).

### `NOUN`

1404 [hr-pos/NOUN]() tokens (6% of all `NOUN` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `NOUN` and `Animacy` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (1404; 100%), <tt><a href="Case.html">Case</a>=Acc</tt> (1404; 100%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (1404; 100%).

`NOUN` tokens may have the following values of `Animacy`:

* `Anim` (101; 7% of non-empty `Animacy`): <em>predsjednika, kandidata, premijera, ministra, povjerenika, savjetnika, svjedoka, tajnika, generala, glumca</em>
* `Inan` (1303; 93% of non-empty `Animacy`): <em>ponedjeljak, utorak, petak, četvrtak, sporazum, način, napredak, proces, put, utjecaj</em>
* `EMPTY` (20685): <em>godine, eura, zemlje, poslova, predsjednik, zemalja, posto, ministar, godina, stranke</em>

`Animacy` seems to be **lexical feature** of `NOUN`. 100% lemmas (399) occur only with one value of `Animacy`.

### `PRON`

491 [hr-pos/PRON]() tokens (11% of all `PRON` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `PRON` and `Animacy` co-occurred: <tt><a href="Reflex.html">Reflex</a>=EMPTY</tt> (444; 90%), <tt><a href="PronType.html">PronType</a>=Ind</tt> (410; 84%), <tt><a href="Person.html">Person</a>=3</tt> (367; 75%), <tt><a href="Number.html">Number</a>=EMPTY</tt> (357; 73%), <tt><a href="Gender.html">Gender</a>=Neut</tt> (320; 65%).

`PRON` tokens may have the following values of `Animacy`:

* `Anim` (72; 15% of non-empty `Animacy`): <em>kojeg, tko, nitko, svojeg, netko, njegova, koga, nikoga, nikome, svakog</em>
* `Inan` (419; 85% of non-empty `Animacy`): <em>što, svoj, koji, čime, ništa, nešto, taj, ovaj, čega, čemu</em>
* `EMPTY` (4133): <em>se, koji, to, koje, koja, svoje, ove, toga, kojima, ovog</em>

<table>
  <tr><th>Paradigm <i>koji</i></th><th><tt>Anim</tt></th><th><tt>Inan</tt></th></tr>
  <tr><td><tt></tt></td><td><em>kojeg</em></td><td><em>koji</em></td></tr>
</table>

### `PROPN`

324 [hr-pos/PROPN]() tokens (4% of all `PROPN` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `PROPN` and `Animacy` co-occurred: <tt><a href="Number.html">Number</a>=Sing</tt> (324; 100%), <tt><a href="Case.html">Case</a>=Acc</tt> (324; 100%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (324; 100%).

`PROPN` tokens may have the following values of `Animacy`:

* `Anim` (109; 34% of non-empty `Animacy`): <em>Đinđića, Erdogana, Burkaya, Gruevskog, Ivanova, Krasniqia, Nikolu, Rehna, Zorana, Abdela</em>
* `Inan` (215; 66% of non-empty `Animacy`): <em>SETimes, NATO, Balkan, Haag, Cipar, PDV, Zagreb, Beograd, Bospor, Brussels</em>
* `EMPTY` (7089): <em>EU, BiH, Kosova, Srbije, Kosovo, Srbija, UN-a, Kosovu, Srbiji, Makedonija</em>

<table>
  <tr><th>Paradigm <i>Ahtisaari</i></th><th><tt>Anim</tt></th><th><tt>Inan</tt></th></tr>
  <tr><td><tt></tt></td><td><em>Ahtisaarija</em></td><td><em>Ahtisaari</em></td></tr>
</table>

`Animacy` seems to be **lexical feature** of `PROPN`. 99% lemmas (167) occur only with one value of `Animacy`.

### `NUM`

18 [hr-pos/NUM]() tokens (1% of all `NUM` tokens) have a non-empty value of `Animacy`.

The most frequent other feature values with which `NUM` and `Animacy` co-occurred: <tt><a href="Case.html">Case</a>=Acc</tt> (18; 100%), <tt><a href="Gender.html">Gender</a>=Masc</tt> (18; 100%), <tt><a href="Number.html">Number</a>=Sing</tt> (18; 100%), <tt><a href="NumType.html">NumType</a>=Card</tt> (18; 100%).

`NUM` tokens may have the following values of `Animacy`:

* `Anim` (4; 22% of non-empty `Animacy`): <em>jednog</em>
* `Inan` (14; 78% of non-empty `Animacy`): <em>jedan</em>
* `EMPTY` (1826): <em>tri, jedan, dva, dvije, 20, jedna, dviju, pet, 2004., 2007.</em>

<table>
  <tr><th>Paradigm <i>jedan</i></th><th><tt>Anim</tt></th><th><tt>Inan</tt></th></tr>
  <tr><td><tt></tt></td><td><em>jednog</em></td><td><em>jedan</em></td></tr>
</table>

## Relations with Agreement in `Animacy`

The 10 most frequent relations where parent and child node agree in `Animacy`:
<tt>NOUN --[<a href="../dep/nmod.html">nmod</a>]--> PRON</tt> (58; 94%),
<tt>PROPN --[<a href="../dep/name.html">name</a>]--> PROPN</tt> (41; 95%),
<tt>NOUN --[<a href="../dep/det.html">det</a>]--> PRON</tt> (35; 97%),
<tt>NOUN --[<a href="../dep/appos.html">appos</a>]--> PROPN</tt> (31; 65%),
<tt>PROPN --[<a href="../dep/compound.html">compound</a>]--> PROPN</tt> (7; 100%),
<tt>PROPN --[<a href="../dep/appos.html">appos</a>]--> NOUN</tt> (4; 67%),
<tt>PROPN --[<a href="../dep/appos.html">appos</a>]--> PROPN</tt> (3; 100%),
<tt>PRON --[<a href="../dep/conj.html">conj</a>]--> PRON</tt> (2; 100%),
<tt>PRON --[<a href="../dep/mark.html">mark</a>]--> PRON</tt> (2; 100%),
<tt>NOUN --[<a href="../dep/amod.html">amod</a>]--> PROPN</tt> (2; 100%).

