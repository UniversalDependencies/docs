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

Boolean feature of noun, pronouns, determiners or adjectives. It tells
whether the word is possessive.

While many tagsets would have “possessive” as one of the various
pronoun types, this feature is intentionally separate from
[PronType](), as it is orthogonal to pronominal types. Several of the
pronominal types can be optionally possessive, nouns and adjectives can too.

### <a name="Yes">`Yes`</a>: it is possessive

Note that there is no `No` value. If the word is not possessive, the
`Poss` feature will just not be mentioned in the `FEAT` column (which
means that empty value has the `No` meaning).

#### Examples

* possessive personal pronouns / determiners: _իմ, քո, նրա, մեր, ձեր, նրանց, իրենց&nbsp;_ “my, your, his/her/its, our, your, their”
* possessive reflexive pronouns / determiners: _իր, իրենց&nbsp;_ “one’s own, their own”
* possessive relative pronouns / determiners: _ում, որի&nbsp;_ “whose”
* possessive nouns: _հայրիկինը&nbsp;_ “father's”, _մայրիկինը&nbsp;_ “mother's”, _սեղանինը&nbsp;_ “of table”
* possessive adjectives: _հայոց&nbsp;_ “armenian, armenians', refer to armenians”, _վրաց&nbsp;_ “georgian, georgians', refer to georgians”, _Պարսից&nbsp;_ “of Persis” _Վանա&nbsp;_ “of Van”
<!-- Interlanguage links updated Pá kvě 14 11:08:39 CEST 2021 -->
