---
layout: base
title:  'Statistics of case in UD_French_Sign_Language-STKAutogramm'
udver: '2'
---

## Treebank Statistics: UD_French_Sign_Language-STKAutogramm: Relations: `case`

This relation is universal.

5 nodes (1%) are attached to their parents as `case`.

5 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 2 pairs of parts of speech are connected with `case`: <tt><a href="fsl_stkautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADP.html">ADP</a></tt> (3; 60% instances), <tt><a href="fsl_stkautogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="fsl_stkautogramm-pos-ADP.html">ADP</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	[PI_TEMPORALITE]	[PI_TEMPORALITE]	ADP	_	_	3	reparandum	_	AlignBegin=50802|AlignEnd=51395|Gloss=[PI_TEMPORALITY]
2	[PI_TEMPORALITE]	[PI_TEMPORALITE]	ADP	_	_	3	case	_	AlignBegin=51407|AlignEnd=52000|Gloss=[PI_TEMPORALITY]|NMM=eyebrow-raise+eye-contact
3	[JOUR]	[JOUR]	NOUN	_	_	0	root	_	AlignBegin=52000|AlignEnd=52744|Gloss=[DAY]
4	SignedName[Macron]	SignedName	PROPN	_	_	5	nmod	_	AlignBegin=52750|AlignEnd=53052|Gloss=SignedName[Macron]
5	[ÉLÉCTION]	[ÉLÉCTION]	NOUN	_	_	3	nmod	_	AlignBegin=53070|AlignEnd=54035|Gloss=[ELECTION]|NMM=backward-tilt
6	[PRÉSIDENT]	[PRÉSIDENT]	NOUN	_	_	5	nmod	_	AlignBegin=54047|AlignEnd=55221|Gloss=[PRESIDENT]|NMM=eye-blink

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	PNT[TOI]	PNT	PRON	_	Number=Sing|PronType=Prs	2	nmod	_	AlignBegin=3863|AlignEnd=4401|Gloss=PNT[YOU]|Tgt=Prs2
2	[MAISON]	[MAISON]	NOUN	_	_	7	dislocated	_	AlignBegin=4410|AlignEnd=5014|Gloss=[HOUSE]
3	PNT[TOI]	PNT	PRON	_	PronType=Prs	2	nmod	_	AlignBegin=5014|AlignEnd=5297|Gloss=PNT[YOU]|Tgt=Prs2
4	POSS[TOI]	POSS	ADJ	_	_	3	conj:reform	_	AlignBegin=5307|AlignEnd=5726|Gloss=POSS[YOU]|Tgt=Prs2
5	[JUSQUE]	[JUSQUE]	ADP	_	_	6	case	_	AlignBegin=5745|AlignEnd=6245|Gloss=[UNTIL]
6	PNT[là]	PNT	ADV	_	_	7	obl:arg	_	AlignBegin=6255|AlignEnd=6481|Gloss=PNT[here]|Tgt=PSSN
7	[ARRIVER]	[ARRIVER]	VERB	_	_	0	root	_	AlignBegin=6491|AlignEnd=7217|Gloss=[ARRIVE]
8	PNT[là]	PNT	ADV	_	_	6	conj:dbl	_	AlignBegin=7226|AlignEnd=7698|Gloss=PNT[here]|Tgt=PSSN
9	[[LIEU]]	[[LIEU]]	PROPN	_	_	8	appos	_	AlignBegin=7717|AlignEnd=8090|Gloss=[[PLACE]]|toBlur=Yes
10	[COMMENT]	[COMMENT]	PRON	_	PronType=Int	11	obl:mod	_	AlignBegin=8241|AlignEnd=8750|Gloss=[HOW]
11	[FAIRE]	[FAIRE]	VERB	_	_	7	appos	_	AlignBegin=8764|AlignEnd=9075|Gloss=[DO]

~~~


