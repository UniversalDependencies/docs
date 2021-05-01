---
layout: feature
title: 'TokenType'
shortdef: 'TokenType'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Aff">Aff</a></td>
  <td><a href="#Clit">Clit</a></td>
  <td><a href="#Stem">Stem</a></td>
  <td><a href="#Unfinished">Unfinished</a></td>
</tr>
</table>

The morphological tokenization of the treebank involves "non-standard" units. We use this feature to identify the type of units.

### <a name="Aff">`Aff`</a>: affix

Token that starts or ends with a dash occupying the positions of [pronoun](pos/PRON), [particle](pos/PART), [subordinating conjunction](pos/SCONJ) or [other](pos/X), depending on the syntactic function.

#### Examples

- _-ja_ (`PRON`; TAM; Person Number Gender)

### <a name="Clit">`Clit`</a>: clitic

Token that starts or ends with a equal sign occupying the positions of [pronoun](pos/PRON), [determiner](pos/DET), [subordinating conjunction](pos/SCONJ), [coordinating conjunction](pos/CCONJ) or [adposition](pos/ADP), depending on the syntactic function

#### Examples
- _=i_ (`PRON`; Case Nominative; Possessive)

### <a name="Stem">`Stem`</a>: stem

Stem item within the word.

#### Examples

- _kʷiɖ_ "disappear"


### <a name="Unfinished">`Unfinished`</a>: unfinished

Token which is unfinished like false starts, marked by the hash sign.

#### Examples

- _aː#_ (False start `DET`)
