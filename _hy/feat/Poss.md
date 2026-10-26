---
layout: feature
title: 'Poss'
shortdef: 'possessive'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Yes">Yes</a></td>
</tr>
</table>

Boolean feature of pronouns, determiners, and adjectives. It indicates whether the word is possessive.

While many tagsets would have “possessive” as one of the various pronoun types, this feature is intentionally separate from [PronType](), as it is orthogonal to pronominal types. Several pronominal types can be possessive, and so can nouns and adjectives.

In Armenian, nouns with a pronominal genitive suffix are common, e.g. _հայրիկինը_/_hayrikinë_ “that of (the) father”, _մայրիկինը_/_mayrikinë_ “that of (the) mother”, _սեղանինը_/_seġaninë_ “that of the table”. For annotation purposes, such forms are split into two tokens: the noun and the pronominal genitive suffix (_-նը_/_në_). The suffix, rather than the noun, is annotated with `Poss=Yes`.

Note that archaic genitive forms of nouns, such as _հայոց_/_hayocʼ_ “of the Armenians”, _վրաց_/_vracʼ_ “of the Georgians”, _Պարսից_/_Parsicʼ_ “of Persis” _Վանա_ “of Van”, are not annotated with Poss=Yes.

### <a name="Yes">`Yes`</a>: it is possessive

Note that there is no `No` value. If the word is not possessive, the `Poss` feature will just not be mentioned in the `FEAT` column (which means that empty value has the `No` meaning).

#### Examples

* possessive personal pronouns / determiners: _իմ_/_im_ “my”, _քո_/_kʼo_ “your”, _նրա_/_nra_ “ his/her/its”, _մեր_/_mer_ “our”, _ձեր_/_jer_ “your”, _նրանց_/_nrancʼ_ “their”
* possessive emphatic pronouns / determiners: _իր_/_ir_ “one’s own”, _իրենց_/_irencʼ_ “their own”
* possessive adjectives: _հայաստանյայց_/_hayastanyaycʼ_ “of Armenia, pertaining to Armenia”
<!-- Interlanguage links updated Út 30. června 2026, 10:59:13 CEST -->
