---
layout: feature
title: 'AdvType'
shortdef: 'semantic class of adverb'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Loc">Loc</a></td>
  <td><a href="#Tim">Tim</a></td>
</tr>
</table>

This lexical feature is applied to those traditionally [adverbial](la-pos/ADV) elements which are **not derived** from [adjectival](la-pos/ADJ) bases and which express spatiotemporal relations. As such, it distinguishes only between the two semantical subclasses of space (`Loc`) and time (`Tim`). 

For these kinds of [deictic](la-feat/PronType) elements, it is not always easy to identify the reference as a point in space or a moment in time, since lexical strategies for both categories often overlap or are derived one from the other. In Latin, we note the (universally widespread) tendency for spatial expression to extend metaphorically to include temporal ones (Haspelmath, 1997), so that in ambiguous cases a preference is given to the former, especially when terms of [pronominal](la-pos/PRON)/[determinantal](la-pos/DET) nature are involved. In any case, the value for `AdvType` is selected on a **lexical basis**, and is not determined by context (or other semantic nuances, like succession) in the sentence: the same lexeme will always receive the same `AdvType` value.

Expressions of location and time are usually reflected at the syntactic level by the semantic [`lmod`](la-dep/obl-lmod) and [`tmod`](la-dep/advmod-tmod) subrelations respectively, which are applied both to [`obl`](la-dep/obl-tmod) and [`advmod`](la-dep/advmod-lmod) relations, and thus represent the phenomenon independently from its morpholexical realisation. 

The actual morphosyntactic nature of spatiotemporal as traditionally labelled [ADVs](la-pos/ADV) might be challenged, as they show deviant behaviour from other adverbs, and lean towards [pronouns](la-feat/PRON).

### <a name="Loc">`Loc`</a>: spatial expression

Expression of location, without differentiating modes like state, movement to or from, transition..., even if Latin has specialised terms for some of them. Many terms in this category are ultimately derived from [pronouns](la-pos/PRON) or [determiners](la-pos/DET).

#### Examples

* ***hic*** 'here (state)', ***hinc*** 'hence'
    * effectively part of the paradigm of *hic* 'this (one)', using among others the crystallised [locative](la-feat/Case#Loc) case
* ***quo*** 'whither'
    * tied to [relative](la-feat/PronType#Rel) pronoun *qui* 'that, who, which', in the [ablative](la-feat/Case#Abl) case 
* ***ubi*** 'where', ***unde*** 'whence'
* ***procul*** 'far away' (related to *procello* 'to drive away')
    * sometimes considered to act as a [preposition](la-pos/ADP) 

### <a name="Tim">`Tim`</a>: temporal expression

Expression of time. The origin of these terms is usually more varied than for spatial expressions, and they often incorporate [nominal](la-pos/NOUN) or [prepositional](la-pos/ADP) elements.

#### Examples

* ***quando*** 'when'
* ***mox*** 'soon'
* ***interim*** 'meanwhile' (from *inter* 'between' and an accusative form of *is* 'he')
* ***diu*** 'for a long time' (from an [ablative](la-feat/Case) form of archaic [U-stem](la-feat/InflClass) *dius*, for *dies* 'day')


### References

Haspelmath, M. (1997). *From Space to Time: Temporal Adverbials in the World's Languages*, LINCOM Studies in Theoretical Linguistics 03, Munich, Germany: LINCOM
EUROPA.







<!-- Interlanguage links updated Po 6. listopadu 2023, 21:41:34 CET -->
