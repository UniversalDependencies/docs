---
layout: feature
title: 'Emph'
shortdef: 'emphatic -ž'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Yes">Yes</a></td>
</tr>
</table>

The feature `Emph=Yes` marks Old Czech forms with the emphatic enclitic _-ž_.
It is used only with unlexicalized forms of open word classes such as verbs and adjectives.
Lexicalized forms ending in _-ž_ do not use the feature and retain _-ž_ in their lemma.
Pronouns _(kdož, což, jenž)_, pronominal adverbs _(jakž, takž)_, conjunctions _(aniž, až, než)_ and particles _(až)_ are treated as lexicalized.

Note: Currently some of the closed class words that did not survive to Modern Czech
are actually treated with `Emph=Yes` in the data, too: _inhedž_ “immediately” ([ADV]()),
_dokudž_ “whilst” ([SCONJ]()), _všakž_ “however” ([CCONJ]()).

### <a name="Yes">`Yes`</a>: strong pronouns

The value `Yes` marks unlexicalized combinations of a word form and the emphatic _-ž_.

#### Examples

* _<b>dřevniehož</b>_ “earlier” (genitive + emphatic)

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:09:40 CET -->
