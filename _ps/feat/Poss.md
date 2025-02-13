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

The personal determiner خپل <i>xpël</i> marks reflexive possession in Pashto.

The weak personal pronouns (مې me, دې de, يې ye, مو mu) may denote unstressed possession.

The possession can be also marked by genitive forms of personal pronouns, however, they are <b>NOT</b> tagged as possessive.

#### Examples

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:09:32 CET -->
