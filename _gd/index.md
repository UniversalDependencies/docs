---
layout: base
title:  'Scottish Gaelic UD'
udver: '2'
---

# UD for Scottish Gaelic <span class="flagspan"><img class="flag" src="../../flags/svg/GB-SCT.svg" /></span>

At present UD for Scottish Gaelic contains a single corpus, the Annotated Reference Corpus of Scottish Gaelic.

## Tokenisation and Word Segmentation

Words are delimited by whitespace or punctuation. There are no multiword tokens.

### Reconstructing spacing
Context: ARCOSG does not contain the original texts, so we have to reconstruct them in a consistent way.
We use GOC (Gaelic Orthographic Conventions, https://www.sqa.org.uk/files_ccc/SQA-Gaelic_Orthographic_Conventions-En-e.pdf) for consistency in reconstructing spacing, but don't apply any other corrections.

According to the latest GOC:
* There are spaces after _a'_, _b'_, _d'_ or _m'_.
* There are no spaces after _dh'_.
* Do not close up before _'m_ or _'n_.

Also (not covered explicitly by GOC but shown in examples):
* Close up _h-_, _t-_, and _n-_.
* Don't close up after _th'_ and _bh'_.

If an elided _a'_ or _ag_ before a verbal noun is indicated by _'_, close this up.

Close up around the hyphen in _a-measg_, _a-rèir_, _a-thaobh_ and similar but don't close up around hyphens if they're being used as dashes.
Also don't attempt to bring into line with GOC by adding or taking away hyphens.

Also close up _dhà-na-tri_ (see fp05_012).

### Multiword tokens

The original version of ARCOSG contains multiword tokens.
For UD, however, we need to split these up. For the moment we duplicate the UPOS and the XPOS for each of the words.
PROPNs have a `flat` relation; others have a `fixed` relation but this needs to be improved.

Some difficult cases follow:
#### _na b'_/_na bu_
Ideally this should be exactly parallel with _nas_.
#### _sam bith_
Currently both are marked as `ADJ` but there is clearly internal structure.

## Morphology

### Tags

Standard UPOS tags are used throughout. Generally we follow the choices made in the Irish UD treebanks.
* AUX is used for _is_ (the copula) only. _bi_ is tagged as VERB.
* The following words are tagged PART: the adverbialiser _gu_ (_gu math_ 'well'), the comparative particle _nas_, the superlative particle _as_, the agreement particle _a_ (_a dol_ 'to go'), the vocative particle _a_ (_a Sheumais_ 'James'), the patronymic particles _Mac_ and _Nic_, the numerical particle _a_ (_a h-aon) 'one'), the past tense marker _do_, the negative particles _cha_ and _nach_, the interrogative particles _a_ and _an_ and the relative particle _a_.
* Verbal nouns are tagged as NOUN.
* Deverbal adjectives are tagged as ADJ.
* The aspectual particles _ag_/_a'_, _air_, _gu_ and _ri_ (all prototypically adpositions) are tagged as ADP.
* Demonstrative pronouns, _seo_, _sin_ and _siud_ are tagged as PRON as in Irish.
* If they are acting as determiners (and tagged as Dd in ARCOSG) then they are tagged DET, as in Irish again.

### Features

Gaelic has two genders (masculine and feminine), four cases (nominative/accusative, genitive, dative and vocative), three numbers (singular, dual and plural), the usual three persons and an impersonal form.

The words _fèin_ and _cheile_ take Reflex = Yes.

The indicative mood is default and we mark the conditional (Cnd), imperative (Imp) and interrogative (Int) moods. The tenses we mark are 

We also follow Irish in marking three pronoun types (Emp = emphatic, Int = interrogative and Rel = relative), polarity (Neg on negative particles) and the following particle types: Ad (adverbialiser), Comp (comparative), Cmpl (complement), Inf (agreement particle), Int (interrogative), Num (numerical), Pat (patronymic), Vb (verbal) and Voc (vocative).

We also have Foreign=Yes for words that are in Irish or English according to the original ARCOSG tagging.

## Syntax

### VSO clause structure

Main clauses and subordinate clauses are VSO.
The subject almost invariably follows the verb but 
* _Chuala mi sin gun teagamh._ 'I heard that without a doubt' (V S O ADV)
* _Can gun do chaith thu e_ 'Say that you did it' (V SCONJ past-tense-marker V S O)

However, if there is an externally-controlled complement then the object follows the verbal noun if it is in the progressive aspect with a nominal object, but precedes it if it is in the progressive aspect with a pronominal object.
* _Bha iad a' toirt an teachd-an-tìr_ 'They were making a living' (V S asp V O)
* _Bheil thu ga mo leantainn?_ 'Are you following me?' (V S asp O V)
* _Bha esan air a bhean a chaill_ 'He had lost his wife' (V S asp O V)

The same applies to the usual form of the passive:
* _Chaidh rannsachadh a dhèanamh_ (V O V)

### Core arguments, oblique arguments and adjuncts

The core arguments are marked by `nsubj` and `obj` if they are noun phrases. Oblique arguments and adjuncts are marked by `obl` when they are prepositional phrases. Occasionally they are noun phrases in which case we use `obl:tmod` if they indicate a stretch of time or `obl:smod` if they indicate a distance.

In terms of clausal subjects `csubj:cop` is used for expressions like:
* _B' àbhaist do dhaoine saoilsinn..._ 'People usually think...'
where _àbhaist do dhaoine_ is the root, _bu_ (here in the reduced form _b'_) is the copula and _saoilsinn_ is the clausal subject. In Gaelic clefting constructions are much more common than in Irish:
* _'se caoraich a th' aice_ 'it is sheep that they have'
* _chan e gearrain aon duine a th' ann_ (lit. it is not the complaint of one person that is in it) 'it is not the complaint of one person'
The expletive particle _e_ or _ann_ is linked to the copula with `fixed`.

### Language-specific labels
With one exception, these follow Irish:
* `acl:relcl` for relative clauses
* `case:voc` for vocative particles
* `csubj:cleft` for cleft subjects
* `csubj:cop` for copular clausal subjects
* `mark:prt` for particles not otherwise marked
* `nmod:poss` for possessive pronouns (but we use `obj` where the use of the possessive pronoun indicates an object)
* `obl:smod` (not in Irish) for spatial modifiers
* `obl:tmod` for temporal modifiers
* `xcomp:pred` for predicates of the substantive verb _bi_ 'to be'. _bi_ does not take an object. To identify the predicate: the most likely is a verbal noun, followed by an existential prepositional phrase _ann_ or a prepositional phrase expressing location, a noun phrase expressing temporal extent, spatial extent or cost, and lastly an adverb.

---

## Treebanks

There is one Scottish Gaelic UD treebank:

  * [ARCOSG](../treebanks/UD_Scottish_Gaelic-ARCOSG/index.html)

## References

* Colin Batchelor, 2019. Universal dependencies for Scottish Gaelic: syntax, in Proceedings of CLTW2019 at Machine Translation Summit XVII, Dublin, August
* Lamb, William, Sharon Arbuthnot, Susanna Naismith, and Samuel Danso. 2016. Annotated Reference Corpus of Scottish Gaelic (ARCOSG), 1997–2016 [dataset]. Technical report, University of Edinburgh; School of Literatures, Languages and Cultures; Celtic and Scottish Studies. https://doi.org/10.7488/ds/1411.
* Lynn, Teresa and Jennifer Foster, [Universal Dependencies for Irish] (http://www.nclt.dcu.ie/~tlynn/Lynn_CLTW2016.pdf), CLTW 2016, Paris, France, July 2016

