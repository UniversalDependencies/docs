---
layout: feature
title: 'Variant'
shortdef: 'Variant'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Short">Short</a></td>
</tr>
</table>

Sometimes there are multiple word forms for the same lemma and set of features.
The `Variant` feature helps distinguish alternate forms.

In Old East Slavic there are two groups of words where double forms are regular and worth capturing:
short forms of [adjectives](orv-pos/ADJ) (incl. [adjectival pronouns](orv-pos/DET) and [participles](orv-pos/VERB)) 
and short (clitic) forms of personal [pronouns](orv-pos/PRON).
This feature only marks the short forms, hence there is only one value, `Short`.
For the long standard forms the `Variant` feature remains unspecified.

### <a name="Short">`Short`</a>: short form of adjectives or personal pronouns

The short form is called _nominal form of adjective_ (_краткая форма прилагательного_),
as opposed to the long form, which is _pronominal_ because it originated as
a combination of a nominal form and a personal pronoun. 
The short forms of personal pronouns are clitics. They are separate words (unlike in some other languages) 
but in the clause they usually stick to the second position or some other syntactically determined positions.

#### Examples

* _<b>чистъ</b>_ “clear, clean”, long equivalent: _чистый_  
* _<b>угодна</b>_ “suitable”, long equivalent: _угодная_  
* _<b>таковы</b>_ “this”, long equivalent: _таковые_  
* _<b>нареченъ</b>_ “called”, long equivalent: _нареченный_  
* _<b>ми</b>_ “me”, long equivalent: _мнѣ</b>_  
  
<!-- Interlanguage links updated St lis 3 20:58:31 CET 2021 -->
