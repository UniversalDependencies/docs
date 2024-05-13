---
layout: base
title:  'Statistics of Number in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Features: `Number`

This feature is universal.
It occurs with 2 different values: `Plur`, `Sing`.

This is a <a href="../../u/overview/feat-layers.html">layered feature</a> with the following layers: <tt><a href="de_lit-feat-Number.html">Number</a></tt>, <tt><a href="de_lit-feat-Number-psor.html">Number[psor]</a></tt>.

1942 tokens (5%) have a non-empty value of `Number`.
215 types (3%) occur at least once with a non-empty value of `Number`.
153 lemmas (3%) occur at least once with a non-empty value of `Number`.
The feature is used with 7 part-of-speech tags: <tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (1636; 4% instances), <tt><a href="de_lit-pos-DET.html">DET</a></tt> (169; 0% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (79; 0% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (41; 0% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (5; 0% instances).

### `PRON`

1636 <tt><a href="de_lit-pos-PRON.html">PRON</a></tt> tokens (60% of all `PRON` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `PRON` and `Number` co-occurred: <tt><a href="de_lit-feat-Reflex.html">Reflex</a></tt><tt>=EMPTY</tt> (1626; 99%), <tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Nom</tt> (968; 59%), <tt><a href="de_lit-feat-PronType.html">PronType</a></tt><tt>=Prs</tt> (940; 57%).

`PRON` tokens may have the following values of `Number`:

* `Plur` (160; 10% of non-empty `Number`): <em>wir, uns, ihnen, denen, sie, die, den, nous</em>
* `Sing` (1476; 90% of non-empty `Number`): <em>es, man, er, was, nichts, etwas, ich, ihm, ihn, wer</em>
* `EMPTY` (1098): <em>sich, sie, die, der, das, dem, deren, den, einander, cela</em>

<table>
  <tr><th>Paradigm <i>der</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td></td><td><em>die</em></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td></td><td><em>denen, den</em></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td><em>dessen</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>die</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td><em>das</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td></td><td><em>die</em></td></tr>
</table>

### `DET`

169 <tt><a href="de_lit-pos-DET.html">DET</a></tt> tokens (3% of all `DET` tokens) have a non-empty value of `Number`.

The most frequent other feature values with which `DET` and `Number` co-occurred: <tt><a href="de_lit-feat-NumType.html">NumType</a></tt><tt>=EMPTY</tt> (163; 96%), <tt><a href="de_lit-feat-Definite.html">Definite</a></tt><tt>=EMPTY</tt> (110; 65%), <tt><a href="de_lit-feat-PronType.html">PronType</a></tt><tt>=Tot</tt> (91; 54%).

`DET` tokens may have the following values of `Number`:

* `Plur` (22; 13% of non-empty `Number`): <em>den, die, der, alle, allen, diese, i, mancher, meisten</em>
* `Sing` (147; 87% of non-empty `Number`): <em>jeder, jedem, jedes, jede, die, der, jeden, la, des, das</em>
* `EMPTY` (5712): <em>der, die, ein, das, den, eine, des, dem, einer, alles</em>

<table>
  <tr><th>Paradigm <i>der</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>den</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>die</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Acc</tt>|<tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td><em>das</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td></td><td><em>die</em></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>dem</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Dat</tt>|<tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Dat</tt></tt></td><td></td><td><em>den</em></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>des</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Gen</tt>|<tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td><em>des</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Gen</tt></tt></td><td></td><td><em>der</em></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=Masc</tt></tt></td><td><em>der</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=Fem</tt></tt></td><td><em>die</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Nom</tt>|<tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td><em>das</em></td><td></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td></td><td><em>die</em></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Gender.html">Gender</a></tt><tt>=Neut</tt></tt></td><td><em>Das</em></td><td></td></tr>
</table>

### `NOUN`

79 <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> tokens (1% of all `NOUN` tokens) have a non-empty value of `Number`.

`NOUN` tokens may have the following values of `Number`:

* `Plur` (19; 24% of non-empty `Number`): <em>Momente, Alten, Anfangsgründe, Eigenschaften, Freimaurer, Kinder, Leuten, Mengs, Pantomimen, Philosophen</em>
* `Sing` (60; 76% of non-empty `Number`): <em>poesie, Glück, Größe, Kunst, Leben, Abgottes, Altertümlichkeit, Arroganz, Ausdrucks, Autor</em>
* `EMPTY` (7296): <em>Philosophie, Poesie, Geist, Kunst, Sinn, Menschen, Mensch, Witz, Natur, Welt</em>

<table>
  <tr><th>Paradigm <i>Roman</i></th><th><tt>Sing</tt></th><th><tt>Plur</tt></th></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Acc</tt></tt></td><td></td><td><em>Romane</em></td></tr>
  <tr><td><tt><tt><a href="de_lit-feat-Case.html">Case</a></tt><tt>=Nom</tt></tt></td><td><em>Roman</em></td><td></td></tr>
</table>

`Number` seems to be **lexical feature** of `NOUN`. 99% lemmas (71) occur only with one value of `Number`.

### `ADJ`

41 <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> tokens (1% of all `ADJ` tokens) have a non-empty value of `Number`.

`ADJ` tokens may have the following values of `Number`:

* `Plur` (9; 22% of non-empty `Number`): <em>erhaltenden, größten, literarischen, menacés, mißlichsten, politischen, primi, wesentlichen, wiederkehrenden</em>
* `Sing` (32; 78% of non-empty `Number`): <em>ganze, gebildeten, römische, Letztere, Rembrandtschen, angemessenste, brillant, edle, elektrische, feiner</em>
* `EMPTY` (3426): <em>große, alten, erste, ersten, ganze, großen, höchsten, möglich, neue, eignen</em>

`Number` seems to be **lexical feature** of `ADJ`. 100% lemmas (35) occur only with one value of `Number`.

### `PROPN`

6 <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> tokens (2% of all `PROPN` tokens) have a non-empty value of `Number`.

`PROPN` tokens may have the following values of `Number`:

* `Plur` (1; 17% of non-empty `Number`): <em>Römern</em>
* `Sing` (5; 83% of non-empty `Number`): <em>Dantes, Diderots, Leibniz, Lessing, Plato</em>
* `EMPTY` (329): <em>Leibniz, Kant, Deutschland, Shakespeare, Spinosa, Caesar, Christus, England, Hemsterhuys, Homer</em>

### `VERB`

6 <tt><a href="de_lit-pos-VERB.html">VERB</a></tt> tokens (0% of all `VERB` tokens) have a non-empty value of `Number`.

`VERB` tokens may have the following values of `Number`:

* `Plur` (1; 17% of non-empty `Number`): <em>leben</em>
* `Sing` (5; 83% of non-empty `Number`): <em>Ehre, erfolge, fait, strömt, wohlgehe</em>
* `EMPTY` (3097): <em>gibt, machen, läßt, scheint, werden, sagen, scheinen, haben, weiß, ist</em>

### `AUX`

5 <tt><a href="de_lit-pos-AUX.html">AUX</a></tt> tokens (0% of all `AUX` tokens) have a non-empty value of `Number`.

`AUX` tokens may have the following values of `Number`:

* `Plur` (1; 20% of non-empty `Number`): <em>sommes</em>
* `Sing` (4; 80% of non-empty `Number`): <em>ist, is, sei</em>
* `EMPTY` (2487): <em>ist, sind, sein, kann, hat, werden, haben, wird, muß, können</em>

## Relations with Agreement in `Number`

The 10 most frequent relations where parent and child node agree in `Number`:
<tt>NOUN --[<tt><a href="de_lit-dep-amod.html">amod</a></tt>]--> ADJ</tt> (25; 86%),
<tt>ADJ --[<tt><a href="de_lit-dep-det.html">det</a></tt>]--> DET</tt> (10; 56%),
<tt>NOUN --[<tt><a href="de_lit-dep-conj.html">conj</a></tt>]--> NOUN</tt> (7; 58%),
<tt>ADJ --[<tt><a href="de_lit-dep-conj.html">conj</a></tt>]--> ADJ</tt> (6; 100%),
<tt>PRON --[<tt><a href="de_lit-dep-conj.html">conj</a></tt>]--> PRON</tt> (6; 100%),
<tt>NOUN --[<tt><a href="de_lit-dep-nmod-poss.html">nmod:poss</a></tt>]--> PROPN</tt> (2; 100%),
<tt>NOUN --[<tt><a href="de_lit-dep-csubj.html">csubj</a></tt>]--> NOUN</tt> (1; 100%),
<tt>PRON --[<tt><a href="de_lit-dep-parataxis.html">parataxis</a></tt>]--> PRON</tt> (1; 100%),
<tt>PROPN --[<tt><a href="de_lit-dep-conj.html">conj</a></tt>]--> NOUN</tt> (1; 100%),
<tt>PROPN --[<tt><a href="de_lit-dep-det.html">det</a></tt>]--> DET</tt> (1; 100%).

