---
layout: feature
title: 'NumType'
shortdef: 'numeral type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Card">Card</a></td>
  <td><a href="#Ord">Ord</a></td>
  <td><a href="#Frac">Frac</a></td>
</tr>
</table>

`NumType` is a lexical feature of [numerals](NUM) and some [adjectives](ADJ) in Spanish that denote counting by numbers.


### <a name="Card">`Card`</a>: cardinal number

Cardinal numbers are numbers that denote quantity (one, two, three, etc.).

#### Examples

* _uno_ "one"
* _dos_ "two"
* _tres_ "three"


### <a name="Ord">`Ord`</a>: ordinal number

Ordinal numbers are adjectives that denote the order of objects in a sequence. Some adjectives like "últimos" (last) and "primeros" (first) also receive this feature.

#### Examples

* _primero_ "first"
* _segundo_ "second"
* _tercero_ "third"


### <a name="Frac">`Frac`</a>: fraction

Fractional numbers denote fractions. In the AnCora treebank, these are tagged as SYM (symbols).

#### Examples

* _1/2_ "one-half"
* _2/3_ "two-thirds"

Some determiners in Spanish also receive the NumType=Card feature, including "muchas" (many), "muchos" (many), "tantos" (so many), "demasiados" (too many), and "bastante" (enough). This is due to the fact that these determiners, similar to cardinal numbers, denote quantity. However, the application of the NumType=Card feature to these determiners is currently under review and may be subject to change in future revisions of the annotation guidelines.
