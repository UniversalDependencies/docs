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

This lexical feature is applied to those [adverbial](la-pos/ADV) elements which are **not derived** from [adjectival](la-pos/ADJ) bases and which express spatiotemporal relations. As such, it distinguishes only between the two semantical subclasses of space (`Loc`) and time (`Tim`). 

For these kinds of [deictic](la-feat/PronType) elements, it is not always easy to identify the reference as a point in space or a moment in time, since lexical strategies for both categories often overlap or are derived one from the other. In Latin, however, we note a slight (and probably universally widespread) tendency for spatial expression to extend metaphorically to include temporal ones, so that in ambiguous cases a preference is given to the former, especially when terms of [pronominal](la-pos/PRON)/[determinantal](la-pos/DET) nature are involved. In any case, the value for `AdvType` is selected on a **lexical basis**, and is not determined by context in the sentence: the same lexeme will always receive the same `AdvType` value.

Expressions of location and time are usually reflected at the syntactic level by the semantic [`lmod`](la-dep/obl-lmod) and [`tmod`](la-dep/advmod-tmod) subrelations respectively, which are applied both to [`obl`](la-dep/obl-tmod) and [`advmod`](la-dep/advmod-lmod) relations, and thus represent the phenomenon independently from its morpholexical realisation (see **Note** below). 

### <a name="Loc">`Loc`</a>: spatial expression

Expression of location, without differentiating modes like state, movement to or from, transition..., even if Latin has specialised terms for some of them. Many terms in this category are derived from [pronouns](la-pos/PRON) or [determiners](la-pos/DET).

#### Examples

* ***hic*** 'here (state)', ***hinc*** 'hence'
* ***quo*** 'whither'
* ***ubi*** 'where', ***unde*** 'whence'
* ***procul*** 'far away' (related to *procello* 'to drive away')

### <a name="Tim">`Tim`</a>: temporal expression

Expression of time. The origin of these terms is usually more varied than for spatial expressions, and they often incorporate [nominal](la-pos/NOUN) or [prepositional](la-pos/ADP) elements.

#### Examples

* ***quando*** 'when'
* ***mox*** 'soon'
* ***interim*** 'meanwhile' (from *inter* 'between' and an accusative form of *is* 'he')
* ***diu*** 'for a long time' (from an [ablative](la-feat/Case) form of archaic [U-stem](la-feat/InflClass) *dius*, for *dies* 'day')



#####Note: parts of speech of spatiotemporal expressions

It has to be pointed out the fact that (at least in Latin) the words in the subclass defined by the `Loc` and `Tim` values of `AdvType`, although currently labeled as [ADV](la-pos/ADV)s as suggested by the guidelines, generally show functions and behaviours which are retraceable rather to those of [**pronouns**](la-pos/PRON) (i.e. `PRON`). In fact, spatiotemporal expressions stand for, and are often replaced by, completely equivalent **deictic** noun phrases featuring pronouns or determinants, e.g. *ibi* 'there' = *in eo/ea* 'in him/her/it'. Some spatial expressions are still transparently analysable as inflected forms, like *hic* (< *heic*) 'here' as the [locative](la-feat/Case) form of the [determiner](la-pos/DET) *hic* 'that': this means that *hic* might as well be labeled not differently than e.g. *Romae* 'in Rome (locative case)', which naturally takes an [`obl`](la-dep/obl) relation.

 This fact is best exemplified by [relative](la-feat/PronType) elements like *ubi* 'where' and *unde* 'whence', which function as [oblique](la-dep/obl) placeholders for a [noun](la-pos/NOUN) in a corresponding [relative clause](la-dep/acl-relcl), the same way that the relative pronoun *qui* 'who/which/that' acts as a placeholder in generic arguments or modifiers in the sentence. For example, for *domus* 'house, home':

* *<b>domus</b> [...] <b>ubi</b> nunc vir beatissimus Ambrosio episcopo preesse videtur* 'the **dwelling** **where** the most revered bishop Ambrosio is seen to be in charge now' (LLCT)
    * here, *ubi* is equivalent to *in qua* and actually acts as an oblique argument of location ([`obl:lmod`](la-dep/obl-lmod)). 
* *[...] <b>domum</b>, <b>cuius</b> finis est domesticos ad bene vivere preparare* 'a **household**, **whose** purpose is to prepare its members to live the good life' (*De Monarchia*, UDante)
    * *cuius* acts as the [(possessive) nominal modifier](la-dep/nmod-poss) of *finis* 'purpose', which is itself the [subject](la-dep/nsubj) of the [copular](la-dep/cop) relative clause.

Similar observations can be made also for other words like *cur* 'because'. These words can also act as "double pronouns" (see that section in [`acl:relcl`](la-dep/acl-relcl)), just like other relative pronouns:

* *<b>Ubi</b> maior minor cessat* '**Where** there is the greater, the lesser gives over' (Latin saying)
    * here, a correlated *ibi* in the main clause has been taken over by the relative element: the equivalent is *ibi, ubi maior [est], minor cessat*.

Moreover, a tendency for these expressions to be used in nominal contexts is observed, probably becoming more pronounced in later stages of the language, e.g.: *ab hodie* 'from today', *de ubi* 'from where' (which eventually gave Italian *dove* 'where', which itself can appear in expressions like *da dove* 'from where'...), and so on.

Such characteristics set "adverbs" of location and time notably apart from other adverbial types, like those of manner, e.g. *celeriter* 'rapidly' (from the [adjective](la-pos/ADJ) *celer*). For example, while these latter can always express a [degree](la-feat/Degree) (like their bases), e.g. *celerius* 'more rapidly', spatiotemporal ones usually don't (both on morphological and semantical grounds). In the end, taken all together, "adverbial" expressions of time and place are seen to be more akin to a functional word class like [pronouns](la-pos/PRON) than adverbs, and labelling them as `PRON`s might be taken into consideration for future annotation. 







