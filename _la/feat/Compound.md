---
layout: feature
title: 'Compound'
shortdef: 'univerbation'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Yes">Yes</a></td>
</tr>
</table>

This is a binary (yes/no) morphological feature that is only annotated when its value is `Yes`.

### <a name="Yes">`Yes`</a>: univerbation of two or more words

When two or more otherwise independent words (i.e. not considering [clitics](la-feat/Clitic) or bound morphemes) have become fused and crystallised into a single word that is no more the "sum of its parts", and this word is set down as such in writing, the corresponding token is marked with `Compound=Yes`.

The single components have to be still discernible and to have an independent counterpart: words which are compounds from an etymological point of view but are synchronically no longer recognizable as such, or processes of derivational morphology, are not taken into account for this feature. Often, the components appear in some reduced form.

Depending on the source, two (or more) words which act as a single unit may appear separate in writing: in this case, the actual univerbation is represented by the dependency relation [`fixed`](la-dep/fixed). Conversely, it would be moot to split a token with `Compound=Yes` only to link the resulting components by means of `fixed`.

#### Examples

* ***scilicet*** 'it is obvious; that is', from *scio* 'to know' and *licet* 'it is allowed'; acting in Late Latin as an [explicative conjunction](la-dep/conj-expl)
* ***idest*** 'that is', from *id* 'it' and *est* 'is', form of *sum* 'to be'; a phrase which, like *scilicet*, ultimately became an explicative conjunction
    * one often finds this expression written separately as *id est*, or abbreviated as *i.e.*: in such cases, `fixed` is used
* ***animaduerto*** 'to give attention to', from *anima* 'soul' and *aduerto* 'to turn to'