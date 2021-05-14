---
layout: feature
title: 'Variant'
shortdef: 'alternative form of word'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Long">Long</a></td>
  <td><a href="#Short">Short</a></td>
</tr>
</table>

Sometimes there are multiple word forms for the same lemma and set of features.
The `Variant` feature helps distinguish alternate forms.

In Polish there are two groups of words where double forms are regular and worth capturing:
short forms of [adjectives](u-pos/ADJ) and short (clitic) forms of personal [pronouns](u-pos/PRON).
For adjectives, only the short form is explicitly annotated while the standard long form has the
`Variant` feature unspecified.

### <a name="Long">`Long`</a>: long form of personal pronouns

Some personal pronouns have double forms.

#### Examples

* _<b>mnie</b>_ “me”

### <a name="Short">`Short`</a>: short form of adjectives or personal pronouns

The short form is called _nominal form of adjective,_
as opposed to the long form, which is _pronominal_ because it originated as
a combination of a nominal form and a personal pronoun.

#### Examples

* _<b>ciekaw</b>_ “curious”
* Long equivalent: _ciekawy_

Some personal pronouns have double forms.

* _<b>mi</b> “me”

<!-- Interlanguage links updated Pá kvě 14 11:08:42 CEST 2021 -->
