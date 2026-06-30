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

Boolean feature of pronouns and determiners. It tells whether the word is possessive.

While many tagsets would have “possessive” as one of the various pronoun types, this feature is intentionally separate from
[PronType](), as it is orthogonal to pronominal types. Several of the pronominal types can be optionally possessive, nouns and adjectives can too.

### <a name="Yes">`Yes`</a>: it is possessive

Note that there is no `No` value. If the word is not possessive, the `Poss` feature will just not be mentioned in the `FEAT` column (which
means that empty value has the `No` meaning).

#### Examples

* possessive personal pronouns / determiners: _իմ/im_ “my”, _քո/ko_ “your”, _իւր(իր)/iwr_ “his/her/its”, _մեր/mer_ “our”, _ձեր/jer_ “your” (pl.),
  _իրենց (իրանց, իւրեանց, իւրենց)/irenc’ (iranc’, iwreanc’,  iwrenc’)_ “thair”
* possessive relative pronouns/determiners: _ում/owm_, _որոյ (որու)/oroy (orow)_ “whose”
<!-- Interlanguage links updated Út 30. června 2026, 10:33:42 CEST -->
