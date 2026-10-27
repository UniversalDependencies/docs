---
layout: feature
title: 'ConjType'
shortdef: 'conjunction type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Cnd">Cnd</a></td>
</tr>
</table>

This feature further subclassifies the parts of speech [cs-pos/CCONJ]() and [cs-pos/SCONJ]();
in Moksha, it is used with `CSONJ` and `VERB`. The main distinction between coordinating and
subordinating conjunctions is done already at the part-of-speech level. The verbs, however,
may carry this mark in their derivation as well and appear with both finite and infinite forms.

### <a name="Cnd">`Cnd`</a>: Protasis marker

Note that the protasis marker can be used with both SCONJ, PART and VERB.
This strategy frees the use of feature`Mood=` for use with `Opt`, `Cnd`. The special marking used is
`ConjType=Cnd`.

#### Examples

* _<b>бди</b>_ “if”, _<b>мол[индяря]й</b>_ “if he/she/it goes”, _<b>ту[ндяря]всь</b>_ “if he/she/it managed to go”, _<b>дяряй</b>_ “were to”
<!-- Interlanguage links updated Út 30. června 2026, 10:58:47 CEST -->
