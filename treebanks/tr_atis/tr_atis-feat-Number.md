---
layout: base
title:  'Statistics of Number in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="tr_atis-feat-Number.html">Number</a></tt>, <tt><a href="tr_atis-feat-Number-psor.html">Number[psor]</a></tt>.

32785 tokens (74%) have a non-empty value of `Number`.
1587 types (81%) occur at least once with a non-empty value of `Number`.
721 lemmas (78%) occur at least once with a non-empty value of `Number`.
The feature is used with 8 part-of-speech tags: <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (13923; 31% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (11817; 27% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (4338; 10% instances), <tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (1173; 3% instances), <tt><a href="tr_atis-pos-X.html">X</a></tt> (595; 1% instances), <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (457; 1% instances), <tt><a href="tr_atis-pos-AUX.html">AUX</a></tt> (432; 1% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (50; 0% instances).

### `PROPN`

13923 <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> tokens (99% of all `PROPN` tokens) have a non-empty value of `Number`.

`PROPN` tokens may have the following values of `Number`:

* `Sing` (13923; 100% of non-empty `Number`): <em>San, Boston'dan, Francisco'ya, Denver'den, Denver'e, Atlanta'dan, Pittsburgh'tan, Atlanta'ya, Baltimore'ye, Boston'a</em>
* `EMPTY` (94): <em>Denver'deki, Philadelphia'daki, Atlanta'daki, Ağustos'taki, Baltimore'deki, Boston'daki, International'daki, Pittsburgh'taki, DC'deki, Dallas'taki</em>

`Number` seems to be **lexical feature** of `PROPN`. 100% lemmas (262) occur only with one value of `Number`.

### `NOUN`

11817 <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> tokens (96% of all `NOUN` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NOUN` and `Number` co-occurred: <tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Nom</tt> (8753; 74%), <tt><a href="tr_atis-feat-Number-psor.html">Number[psor]</a></tt><tt>=EMPTY</tt> (6602; 56%), <tt><a href="tr_atis-feat-Person-psor.html">Person[psor]</a></tt><tt>=EMPTY</tt> (6602; 56%).

`NOUN` tokens may have the following values of `Number`:

* `Plur` (3324; 28% of non-empty `Number`): <em>uçuşları, uçuşlar, uçuşlarını, havayolları, uçuşların, fiyatlarını, havayollarının, havayollarını, günleri, ücretleri</em>
* `Sing` (8493; 72% of non-empty `Number`): <em>uçuş, günü, uçuşu, öğleden, akşam, sabah, saat, ihtiyacım, çarşamba, arasında</em>
* `EMPTY` (462): <em>arasındaki, önümüzdeki, günlük, kalkışlı, günkü, saatlerdeki, bağlantılı, maliyetli, Havalimanı'ndaki, kahvaltılı</em>

<table>
  <tr><th>Paradigm <i>uçuş</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Abl</tt></tt></td><td></td><td><em>uçuşlardan</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Abl</tt>|<tt><a href="tr_atis-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>uçuşundan</em></td><td><em>uçuşlarından</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td><em>uçuşu</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="tr_atis-feat-Person-psor.html">Person[psor]</a></tt><tt>=1</tt></tt></td><td><em>Uçuşumu</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="tr_atis-feat-Person-psor.html">Person[psor]</a></tt><tt>=2</tt></tt></td><td><em>uçuşunuzu</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="tr_atis-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>uçuşunu</em></td><td><em>uçuşlarını</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td><em>uçuşa</em></td><td><em>uçuşlara</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="tr_atis-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>uçuşuna</em></td><td><em>uçuşlarına</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td><em>uçuşun</em></td><td><em>uçuşların</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="tr_atis-feat-Person-psor.html">Person[psor]</a></tt><tt>=2</tt></tt></td><td><em>uçuşunuzun</em></td><td><em>uçuşlarınızın</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="tr_atis-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>uçuşunun</em></td><td><em>uçuşlarının</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Ins</tt></tt></td><td><em>uçuşla</em></td><td><em>uçuşlarla</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Ins</tt>|<tt><a href="tr_atis-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>uçuşuyla</em></td><td><em>uçuşlarıyla</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Loc</tt></tt></td><td><em>uçuşta</em></td><td><em>uçuşlarda</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Loc</tt>|<tt><a href="tr_atis-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>uçuşunda</em></td><td><em>uçuşlarında</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>uçuş</em></td><td><em>uçuşlar</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="tr_atis-feat-Person-psor.html">Person[psor]</a></tt><tt>=1</tt></tt></td><td><em>uçuşum</em></td><td><em>uçuşlarım</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="tr_atis-feat-Person-psor.html">Person[psor]</a></tt><tt>=2</tt></tt></td><td><em>uçuşunuz</em></td><td><em>uçuşlarınız</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="tr_atis-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td></td><td><em>uçuşları</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>uçuşlardır, uçuştur</em></td><td></td></tr>
</table>

### `VERB`

4338 <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> tokens (66% of all `VERB` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `VERB` and `Number` co-occurred: <tt><a href="tr_atis-feat-Polarity.html">Polarity</a></tt><tt>=Pos</tt> (4317; 100%), <tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=EMPTY</tt> (3300; 76%), <tt><a href="tr_atis-feat-VerbForm.html">VerbForm</a></tt><tt>=Fin</tt> (3283; 76%), <tt><a href="tr_atis-feat-Aspect.html">Aspect</a></tt><tt>=EMPTY</tt> (3147; 73%), <tt><a href="tr_atis-feat-Evident.html">Evident</a></tt><tt>=EMPTY</tt> (2902; 67%), <tt><a href="tr_atis-feat-Tense.html">Tense</a></tt><tt>=EMPTY</tt> (2872; 66%).

`VERB` tokens may have the following values of `Number`:

* `Plur` (686; 16% of non-empty `Number`): <em>listeleyin, gösterin, verin, bulun, söyleyin, yapın, bakalım, açıklayın, bahsedin, olanlar</em>
* `Sing` (3652; 84% of non-empty `Number`): <em>göster, istiyorum, listele, dönüş, gidiş, uçmak, uçuyor, bul, ver, kalkıyor</em>
* `EMPTY` (2254): <em>olan, kalkan, giden, varan, yapan, uçan, gelen, ayrılıp, varacak, kalkıp</em>

<table>
  <tr><th>Paradigm <i>göster</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Evident.html">Evident</a></tt><tt>=Fh</tt>|<tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=GenPot</tt>|<tt><a href="tr_atis-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="tr_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>gösterebilir</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Evident.html">Evident</a></tt><tt>=Fh</tt>|<tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=Ind</tt>|<tt><a href="tr_atis-feat-Person.html">Person</a></tt><tt>=3</tt>|<tt><a href="tr_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt></tt></td><td><em>gösterir</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Mood.html">Mood</a></tt><tt>=Imp</tt>|<tt><a href="tr_atis-feat-Person.html">Person</a></tt><tt>=2</tt></tt></td><td><em>göster</em></td><td><em>gösterin</em></td></tr>
</table>

### `PRON`

1173 <tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="tr_atis-feat-Person.html">Person</a></tt><tt>=1</tt> (944; 80%), <tt><a href="tr_atis-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (944; 80%), <tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Dat</tt> (935; 80%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (41; 3% of non-empty `Number`): <em>hangileri, bunların, hepsi, hepsini, çoğunu</em>
* `Sing` (1132; 97% of non-empty `Number`): <em>bana, hangi, ne, hangisi, bu, beni, benim, biri, neyin, bunu</em>

<table>
  <tr><th>Paradigm <i>hangi</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="tr_atis-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>hangisinin</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="tr_atis-feat-Person-psor.html">Person[psor]</a></tt><tt>=3</tt></tt></td><td><em>hangisi</em></td><td><em>hangileri</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>hangi</em></td><td></td></tr>
</table>

### `X`

595 <tt><a href="tr_atis-pos-X.html">X</a></tt> tokens (100% of all `X` tokens) have a non-empty value of `Number`.

`X` tokens may have the following values of `Number`:

* `Plur` (155; 26% of non-empty `Number`): <em>nelerdir, neler</em>
* `Sing` (440; 74% of non-empty `Number`): <em>nedir, hangileridir, hangisidir, kadardır</em>

<table>
  <tr><th>Paradigm <i>ne</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt></tt></td><td><em>nedir</em></td><td><em>nelerdir, neler</em></td></tr>
</table>

### `NUM`

457 <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> tokens (35% of all `NUM` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `NUM` and `Number` co-occurred: <tt><a href="tr_atis-feat-NumType.html">NumType</a></tt><tt>=Card</tt> (452; 99%), <tt><a href="tr_atis-feat-Case.html">Case</a></tt><tt>=Abl</tt> (332; 73%).

`NUM` tokens may have the following values of `Number`:

* `Sing` (457; 100% of non-empty `Number`): <em>5'ten, 10'dan, 6'dan, 8'den, 12'den, 4'ten, 9'dan, 7'den, 3'ten, 2'den</em>
* `EMPTY` (849): <em>7, on, 1, 2, 6, bir, yirmi, 27, 8, 4</em>

`Number` seems to be **lexical feature** of `NUM`. 100% lemmas (85) occur only with one value of `Number`.

### `AUX`

432 <tt><a href="tr_atis-pos-AUX.html">AUX</a></tt> tokens (99% of all `AUX` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `AUX` and `Number` co-occurred: <tt><a href="tr_atis-feat-PronType.html">PronType</a></tt><tt>=Int</tt> (432; 100%), <tt><a href="tr_atis-feat-Tense.html">Tense</a></tt><tt>=Pres</tt> (432; 100%), <tt><a href="tr_atis-feat-Person.html">Person</a></tt><tt>=3</tt> (285; 66%).

`AUX` tokens may have the following values of `Number`:

* `Plur` (36; 8% of non-empty `Number`): <em>misiniz, musunuz</em>
* `Sing` (396; 92% of non-empty `Number`): <em>mı, misin, mu, miyim, mü, mi, mısın, mıyım</em>
* `EMPTY` (3): <em>değil</em>

<table>
  <tr><th>Paradigm <i>mi</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Person.html">Person</a></tt><tt>=1</tt></tt></td><td><em>miyim, mıyım</em></td><td></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Person.html">Person</a></tt><tt>=2</tt></tt></td><td><em>misin, mısın</em></td><td><em>misiniz, musunuz</em></td></tr>
  <tr><td><tt><tt><a href="tr_atis-feat-Person.html">Person</a></tt><tt>=3</tt></tt></td><td><em>mı, mu, mü, mi</em></td><td></td></tr>
</table>

### `ADJ`

50 <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> tokens (2% of all `ADJ` tokens) have a non-empty value of `Number`.

`ADJ` tokens may have the following values of `Number`:

* `Plur` (1; 2% of non-empty `Number`): <em>aktarmasızları</em>
* `Sing` (49; 98% of non-empty `Number`): <em>mevcuttur, uzakta, ucuza, uzaklıkta, vardır, seferinin, birde, mümkünse, nasıldır, boşta</em>
* `EMPTY` (2937): <em>var, hangi, ucuz, tek, aktarmasız, ne, erken, aktarmalı, son, birinci</em>

`Number` seems to be **lexical feature** of `ADJ`. 100% lemmas (14) occur only with one value of `Number`.

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>PROPN --[<tt><a href="tr_atis-dep-nmod.html">nmod</a></tt>]--> PROPN</tt> (3831; 100%),
<tt>PROPN --[<tt><a href="tr_atis-dep-flat.html">flat</a></tt>]--> PROPN</tt> (2646; 99%),
<tt>NOUN --[<tt><a href="tr_atis-dep-nmod.html">nmod</a></tt>]--> PROPN</tt> (2046; 56%),
<tt>NOUN --[<tt><a href="tr_atis-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (1621; 69%),
<tt>VERB --[<tt><a href="tr_atis-dep-obj.html">obj</a></tt>]--> NOUN</tt> (1321; 53%),
<tt>VERB --[<tt><a href="tr_atis-dep-obl.html">obl</a></tt>]--> PRON</tt> (633; 68%),
<tt>X --[<tt><a href="tr_atis-dep-nsubj.html">nsubj</a></tt>]--> NOUN</tt> (535; 94%),
<tt>PROPN --[<tt><a href="tr_atis-dep-conj.html">conj</a></tt>]--> PROPN</tt> (458; 100%),
<tt>NUM --[<tt><a href="tr_atis-dep-nmod.html">nmod</a></tt>]--> NOUN</tt> (415; 80%),
<tt>VERB --[<tt><a href="tr_atis-dep-xcomp.html">xcomp</a></tt>]--> VERB</tt> (410; 99%).

