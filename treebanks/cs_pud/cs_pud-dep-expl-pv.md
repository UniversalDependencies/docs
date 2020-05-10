---
layout: base
title:  'Statistics of expl:pv in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `expl:pv`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs_pud-dep-expl-pass.html">expl:pass</a></tt>.

240 nodes (1%) are attached to their parents as `expl:pv`.

191 instances of `expl:pv` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.29583333333333.

The following 1 pairs of parts of speech are connected with `expl:pv`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> (240; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 expl:pv	color:blue
1	Ne	ne	PART	TT-------------	_	2	advmod:emph	2:advmod:emph	_
2	každý	každý	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj	6:nsubj|7:nsubj	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pv	7:expl:pv	LGloss=(zvr._zájmeno/částice)
4	nad	nad	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	5:case	LId=nad-1
5	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	7	obl:arg	7:obl:arg:nad:acc	_
6	dokáže	dokázat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	povznést	povznést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	xcomp	6:xcomp	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


