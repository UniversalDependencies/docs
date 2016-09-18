---
layout: base
title:  'Segmentation in UD v2'
---

<!-- Word segmentation: We need to be able to handle the whole range of languages and writing systems, from Turkish to Vietnamese. -->

# Segmentation in UD v2

<!-- Principles: be able to reproduce the segmentation -->

## Spaces as syllable delimiters 

There is pretty much unanimous agreement that spaces should be allowed in the Vietnamese treebank, and tokens should be (syntactic) words and not syllables. As far as we know Vietnamese is the only language where this is necessary, but still all tools will need to be able to support having spaces in CoNLL-U columns. Consider the following example, "Minh is (a) teacher.", where <i>giáo viên</i> is a bisyllabic word meaning "teacher". (Currently using underscore, "giáo⎵viên", because even the tree visualization tool cannot work with word-internal spaces.)

~~~ conllu
1	Minh	Minh	PROPN	_	_	3	nsubj	_	_
2	là	là	VERB	_	_	3	cop	_	_
3	giáo⎵viên	giáo⎵viên	NOUN	_	_	0	root	_	_
4	.	.	PUNCT	_	_	3	punct	_	_
~~~

## Other cases

There was a general consensus that for the remainder of the languages, we should maintain the ban on spaces in tokens. However, we propose that for a highly restricted closed class of orthographic phenomena (with prior approval), there may be some exceptions, for example:

### Spaces as numeral separators

In the existing French treebank, space delimited numerals, e.g. "100 000" are collapsed into a single numeral, "... de 8 500 à 20 000 euros."

~~~ conllu
1	de	de	ADP	_	_	2	case	_	_
2	8500	8500	NUM	_	_	0	nmod	_	_
3	à	à	ADP	_	_	5	case	_	_
4	20000	20000	NUM	_	_	5	nummod	_	_
5	euros	euro	NOUN	_	Gender=Masc|Number=Plur	0	nmod	_	_
~~~

We do not see that this is an improvement over simply allowing the space, and the alternative (to have each 000 as a separate token and use `goeswith` or `mwe`) is unwieldy and does not exactly fit, e.g. writing 100 000 is not an orthographic error, but rather orthographically normative, and neither is it a fixed expression.

### Spaces in normalising abbreviations

Spaces should be allowed in order to normalise abbreviations, in Swedish "e.g." can be written either "t.ex." or "t ex"

With space "t ex":

~~~ conllu
1       Idrottsmateriel idrottsmateriel NOUN    NN|UTR|PLU|IND|NOM      Case=Nom|Definite=Ind|Gender=Com|Number=Plur    0       root    _       _
2       ,       ,       PUNCT   MID     _       1       punct   _       _
3       t_ex    t_ex    ADV     AB|AN   _       4       advmod  _       _
4       spikskor        spiksko NOUN    NN|UTR|PLU|IND|NOM      Case=Nom|Definite=Ind|Gender=Com|Number=Plur    1       appos   _       _
5       ,       ,       PUNCT   MID     _       4       punct   _       _
6       kompass kompass NOUN    NN|UTR|SIN|IND|NOM      Case=Nom|Definite=Ind|Gender=Com|Number=Sing    4       conj    _       _
7       ,       ,       PUNCT   MID     _       4       punct   _       _
8       kartfodral      kartfodral      NOUN    NN|NEU|SIN|IND|NOM      Case=Nom|Definite=Ind|Gender=Neut|Number=Sing   4       conj    _       _
~~~

Without space "t.ex.":

~~~ conllu
1       Det     den     PRON    PN|NEU|SIN|DEF|SUB/OBJ  Definite=Def|Gender=Neut|Number=Sing|PronType=Prs       2       nsubj   _       _
2       gäller  gälla   VERB    VB|PRS|AKT      Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act      0       root    _       _
3       t.ex.   t.ex.   ADV     AB|AN   _       2       advmod  _       _
4       säsongarbetslösa        säsongarbetslös ADJ     JJ|POS|UTR/NEU|PLU|IND/DEF|NOM  Case=Nom|Degree=Pos|Number=Plur 5       amod    _       _
5       byggnadsarbetare        byggnadsarbetare        NOUN    NN|UTR|PLU|IND|NOM      Case=Nom|Definite=Ind|Gender=Com|Number=Plur    2       dobj    _       _
6       .       .       PUNCT   MAD     _       2       punct   _       _
~~~

### Spaces between a syntactic word and a bound morpheme

In Tuvan, in some tenses, the person/number agreement is written separate from the verbal morpheme. We propose allowing these to be tokenised as one unit

~~~sdparse
Мен Кызылга чурттап турган⎵мен .  \n I Kyzyl.to living standing.am
nsubj(чурттап, Мен)
aux(чурттап, турган⎵мен)
nmod(чурттап, Кызылга)
~~~

## Approval and validation process


