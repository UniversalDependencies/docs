---
layout: feature
title: 'VerbType'
shortdef: 'verb type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Aux">Aux</a></td>
  <td><a href="#Cop">Cop</a></td>
  <td><a href="#Light">Light</a></td>
</tr>
</table>

We already split auxiliary and non-auxiliary verbs at the level of UPOS tags.
The `VerbType` feature may be used to capture finer distinctions that some
tagsets make.

???
### <a name="Aux">`Aux`</a>: auxiliary verb

Verb used to create periphrastic verb forms (tenses, passives etc.)

#### Examples
???

### <a name="Cop">`Cop`</a>: copula verb

Verb used to make nominal predicates.
We have treated copulas as auxiliaries, this feature is used to distinguish them from other auxiliaries.

#### Examples
- _hoː =b hoːsoː ʃʔag -aː =b <b>=u</b> uː= tak _ "The man was carrying on his shoulder a lamb"

### <a name="Light">`Light`</a>: light (support) verb

Light or support verb is used in verbo-nominal constructions where the main part of the meaning
is contributed by a noun complement but it is not just a nominal predicate with a copula.

#### Examples
- _ j= ʔar han hus i- <b>kati</b> -na /_ "The children also keep quiet"
