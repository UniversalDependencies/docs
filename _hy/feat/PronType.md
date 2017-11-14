---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Art">Art</a></td>
  <td><a href="#Dem">Dem</a></td>
  <td><a href="#Emp">Emp</a></td>
  <td><a href="#Exc">Exc</a></td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Int">Int</a></td>
  <td><a href="#Neg">Neg</a></td>
  <td><a href="#Prs">Prs</a></td>
  <td><a href="#Rcp">Rcp</a></td>
  <td><a href="#Rel">Rel</a></td>
  <td><a href="#Tot">Tot</a></td>
</tr>
</table>

This feature typically applies to [pronouns](cs-pos/PRON),
[determiners](cs-pos/DET), pronominal [numerals](cs-pos/NUM)
(quantifiers) and pronominal [adverbs](cs-pos/ADV).

### <a name="Prs">`Prs`</a>: personal or possessive personal pronoun or determiner

See also the [Poss]() feature that distinguishes normal personal
pronouns from possessives. Note that `Prs` also includes reflexive
personal/possessive pronouns (e.g. _իրեն / իր&nbsp;_ see the
[Reflex]() feature).

#### Examples

* _ես, դու, նա, մենք, դուք, նրանք&nbsp;_ “I, you, he/she/it, we, you, they”
* _իմ, քո, նրա, մեր, ձեր, նրանց&nbsp;_ “my, your, his/her/its, our, your, their”
* _ինձ, քեզ, իրեն, մեզ, ձեզ, իրենց&nbsp;_ “myself, yourself, oneself, ourselves, yourselves, themselves”
* _իր, իրենց&nbsp;_ “one's own, themselves”

### <a name="Rcp">`Rcp`</a>: reciprocal pronoun

#### Examples

* _մեկմեկու (մեկմեկի), իրար (իրարու), միմյանց&nbsp;_ “one another, each other, each other”

### <a name="Art">`Art`</a>: article

Article is a special case of determiner that bears the feature of
[definiteness](Definite). Note, that in Armenian `Def` feature is marked directly on nouns.

#### Examples

* _մի&nbsp;_ “a/an”
