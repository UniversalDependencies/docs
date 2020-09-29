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

Boolean feature of pronouns, determiners or adjectives.  It tells
whether the word is possessive.

While many tagsets would have “possessive” as one of the various
pronoun types, this feature is intentionally separate from
[PronType](), as it is orthogonal to pronominal types. Several of the
pronominal types can be optionally possessive, and adjectives can too.

### <a name="Yes">`Yes`</a>: it is possessive

Note that there is no `No` value. If the word is not possessive, the
`Poss` feature will just not be mentioned in the `FEAT` column. (Which
means that empty value has the `No` meaning.)

#### Examples

* possessive personal determiners: _můj, tvůj, jeho, její, náš, váš, jejich&nbsp;_ “my, your, his, her, our, your, their”
* possessive reflexive determiner: _svůj&nbsp;_ “one's own”
* possessive relative determiner: _jehož&nbsp;_ “whose”
* possessive adjectives: _otcův&nbsp;_ “father's”, _matčin&nbsp;_ “mother's”
<!-- Interlanguage links updated Út zář 29 20:31:37 CEST 2020 -->
