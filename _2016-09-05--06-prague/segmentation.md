---
layout: base
title:  'Segmentation in UD v2'
---

<!-- Chris’ thoughts: Lots of difficult issues. For what counts as a word, I think we should be cautious in splitting up words into morpheme-level tokens. Much recent generative linguistics work assumes this as a default and we should be cautious about buying into weak arguments for doing so. That is, we should mainly follow the lexicalist orientation of UD. However, I think that sometimes things do need to be split off. The clearest cases are syntactic clitics, such as auxiliaries or the possessive clitic in English or things like conjunction clitics in Arabic. I can believe that some splitting is needed in Turkish but we should be cautious and not do too much. I’ll have to go read the paper…. The other big issue is whether to keep or to abandon the claim of not allowing spaces in tokens or not. It is very convenient for processing. I think it is wrong for some languages like Vietnamese. We could abandon it entirely - and then we should get rid of goeswith - or we could say that it is true of most languages and keep their tokenization simple, and keep goeswith for occasional exceptions or typing errors, but accept that just as some languages like Chinese need a complex word segmentation process, other languages like Vietnamese would need a complex “word grouping” process. -->

<!-- ⎵ -->

<!-- Word segmentation: We need to be able to handle the whole range of languages and writing systems, from Turkish to Vietnamese. -->

# Segmentation in UD v2

<!-- Principles: be able to reproduce the segmentation -->

## Spaces as syllable delimiters 

There is pretty much unanimous agreement that spaces should be allowed in the Vietnamese treebank, and tokens should be (syntactic) words and not syllables. As far as we know Vietnamese is the only language where this is necessary, but still all tools will need to be able to support having spaces in CoNLL-U columns. Consider the following example, "Minh is (a) teacher.", where <i>giáo viên</i> is a bisyllabic word meaning "teacher".

~~~ conllu
1	Minh	Minh	PROPN	_	_	3	nsubj	_	_
2	là 	là	VERB	_	_	3	cop	_	_
3	giáo viên	giáo viên	NOUN	_	_	0	root	_	_
4	.	.	PUNCT	_	_	3	punct	_	_
~~~

There was a general consensus that for the remainder of the languages, we should maintain the ban on spaces in tokens. However, we propose that for a highly restricted closed class of orthographic phenomena (with prior approval), there may be some exceptions, for example:

<!--Allow words with spaces for an approved (and restricted) list of exceptions like numbers (“100 000”) and abbreviations (“i. e.”).-->

## Spaces as numeral separators

In the existing French treebank, space delimited numerals, e.g. "100 000" are collapsed into a single numeral, "... de 8 500 à 20 000 euros."

~~~ conllu
1	de	de	ADP	_	_	2	case	_	_
2	8500	8500	NUM	_	_	0	nmod	_	_
3	à	à	ADP	_	_	5	case	_	_
4	20000	20000	NUM	_	_	5	nummod	_	_
5	euros	euro	NOUN	_	Gender=Masc|Number=Plur	0	nmod	_	_
~~~

We do not see that this is an improvement over simply allowing the space, and the alternative (to have each 000 as a separate token and use `goeswith` or `mwe`) is unwieldy and does not exactly fit, e.g. writing 100 000 is not an orthographic error, but rather orthographically normative, and neither is it a fixed expression.

## Spaces in normalising abbreviations

<!--  Sådana ämnen är t_ex alkohol , koffein , opium och kokain . -->


## Spaces between a syntactic word and a bound morpheme


## Approval and validation process


