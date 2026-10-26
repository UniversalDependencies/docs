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

Boolean feature of pronouns and determiners. It indicates whether the word is possessive.

While many tagsets would have “possessive” as one of the various pronoun types, this feature is intentionally separate from [PronType](), as it is orthogonal to pronominal types. Several pronominal types can be possessive, and so can nouns and adjectives.

### <a name="Yes">`Yes`</a>: it is possessive

Note that there is no `No` value. If the word is not possessive, the `Poss` feature will just not be mentioned in the `FEAT` column (which
means that empty value has the `No` meaning).

#### Examples

* possessive personal pronouns / determiners: _իմ_/_im_ “my”, _քո_/_ko_ “your”, _իւր(իր)_/_iwr (ir)_ “his/her/its”, _մեր_/_mer_ “our”, _ձեր_/_jer_ “your” (pl.),
  _իրենց (իրանց, իւրեանց, իւրենց)_/_irenc’ (iranc’, iwreanc’,  iwrenc’)_ “their”
<!-- Interlanguage links updated Út 30. června 2026, 10:59:13 CEST -->
