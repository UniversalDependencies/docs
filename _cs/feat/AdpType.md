---
layout: feature
title: 'AdpType'
shortdef: 'adposition type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Comprep">Comprep</a></td>
  <td><a href="#Prep">Prep</a></td>
  <td><a href="#Voc">Voc</a></td>
</tr>
</table>

Czech has neither postpositions nor circumpositions but there are several forms of [prepositions](cs-pos/ADP)
that this feature distinguishes.

### <a name="Prep">`Prep`</a>: (normal) preposition

#### Examples

* _<b>v</b>_ “in”, _<b>na</b>_ “on”, _<b>o</b>_ “about”, _<b>z</b>_ “of”, _<b>s</b>_ “with”, _<b>do</b>_ “into”, _<b>k</b>_ “to”, _<b>pro</b>_ “for”, _<b>za</b>_ “behind”, _<b>po</b>_ “after”

### <a name="Voc">`Voc`</a>: vocalized preposition

Some Czech prepositions are non-syllabic and their form
has to be changed in some contexts to facilitate pronunciation.
Moreover, some syllabic prepositions are altered too, if the following word starts with certain consonant clusters.

#### Examples

The first line shows examples of vocalized preposition forms,
the second line shows corresponding base forms.

* _<b>ve</b>, <b>se</b>, <b>ze</b>, <b>ke</b>, <b>ode</b>, <b>beze</b>, <b>ku</b>, <b>skrze</b>, <b>přede</b>, <b>nade</b>_
* _v, s, z, k, od, bez, k, skrz, před, nad_

### <a name="Comprep">`Comprep`</a>: dependent part of compound preposition

This value marks dependent first part of a compound preposition. This word cannot occur alone.
Not all compound prepositions contain words marked `Comprep`.
Many compound prepositions consist of two normal prepositions and a noun
(an example is _na rozdíl od_ “in contrast to”).
Sometimes there are just two words, the second one is normal preposition and the first one
is a secondary preposition (etymologically some other part of speech, but it has been frozen as
a preposition).

#### Examples

* _<b>vzhledem</b> k(e)_ “due to”, _<b>nehledě</b> na_ “regardless of”, _<b>narozdíl</b> od_ “in contrast to”
<!-- Interlanguage links updated Út zář 29 18:40:50 CEST 2020 -->
