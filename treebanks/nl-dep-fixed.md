---
layout: base
title:  'Statistics of fixed in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Relations: `fixed`

This relation is universal.

90 nodes (0%) are attached to their parents as `fixed`.

90 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.81111111111111.

The following 4 pairs of parts of speech are connected with `fixed`: <tt><a href="nl-pos-ADP.html">ADP</a></tt>-<tt><a href="nl-pos-ADP.html">ADP</a></tt> (53; 59% instances), <tt><a href="nl-pos-ADP.html">ADP</a></tt>-<tt><a href="nl-pos-ADV.html">ADV</a></tt> (35; 39% instances), <tt><a href="nl-pos-ADP.html">ADP</a></tt>-<tt><a href="nl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="nl-pos-ADP.html">ADP</a></tt>-<tt><a href="nl-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 fixed	color:blue
1	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	3	punct	_	SpaceAfter=No
2	Het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	3	nsubj	_	_
3	duurde	duur	VERB	V|intrans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Intr|Tense=Past|VerbForm=Fin	0	root	_	_
4	lang	lang	ADJ	Adj|adv|stell|onverv	Degree=Pos|Variant=Short	3	obl	_	_
5	voordat	voordat	SCONJ	Conj|onder|metfin	_	10	mark	_	_
6	ze	ze	PRON	Pron|per|3|evofmv|nom	Case=Nom|Number=Plur,Sing|Person=3|PronType=Prs	10	nsubj	_	_
7	over	over	ADP	Prep|voor	AdpType=Prep	8	case	_	_
8	me	me	PRON	Pron|per|1|ev|datofacc	Case=Acc,Dat|Number=Sing|Person=1|PronType=Prs	10	obl	_	_
9	heen	heen	ADP	Prep|comb	AdpType=Circ	7	fixed	_	_
10	kwamen	kom	VERB	V|intrans|ovt|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Intr|Tense=Past|VerbForm=Fin	3	csubj	_	SpaceAfter=No
11	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	SpaceAfter=No
12	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 fixed	color:blue
1	Dat	dat	PRON	Pron|aanw|neut|zelfst	PronType=Dem	9	obj	_	_
2	hebben	heb	AUX	V|hulp|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	9	aux	_	_
3	we	we	PRON	Pron|per|1|mv|nom	Case=Nom|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
4	tot	tot	ADP	Prep|voor	AdpType=Prep	5	case	_	_
5	nu	nu	ADV	Adv|gew|aanw	PronType=Dem	9	advmod	_	_
6	toe	toe	ADV	Adv|deeladv	PartType=Vbp	4	fixed	_	_
7	te	te	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	8	advmod	_	_
8	weinig	weinig	DET	Num	Degree=Pos|NumType=Card|PronType=Ind	9	obl	_	_
9	gedaan	doe	VERB	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	0	root	_	_
10	en	en	CCONJ	Conj|neven	_	13	cc	_	_
11	dat	dat	PRON	Pron|aanw|neut|zelfst	PronType=Dem	13	nsubj	_	_
12	moet	moet	AUX	V|intrans|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Subcat=Intr|Tense=Pres|VerbForm=Fin	13	cop	_	_
13	beter	goed	ADJ	Adj|attr|vergr|onverv	Degree=Cmp	9	conj	_	SpaceAfter=No
14	.	.	PUNCT	Punc|punt	PunctType=Peri	9	punct	_	_
15	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	9	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 fixed	color:blue
1	Publiciteit	publiciteit	NOUN	N|soort|ev|neut	Number=Sing	2	nsubj	_	_
2	hoort	hoor	VERB	V|intrans|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Subcat=Intr|Tense=Pres|VerbForm=Fin	0	root	_	_
3	bij	bij	ADP	Prep|voor	AdpType=Prep	9	cc	_	_
4	het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	5	det	_	_
5	bedrijf	bedrijf	NOUN	N|soort|ev|neut	Number=Sing	9	obj	_	_
6	in	in	ADP	Prep|voor	AdpType=Prep	7	case	_	_
7	Cinecitta	Cinecitta	PROPN	N|eigen|ev|neut	Number=Sing	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Punc|komma	PunctType=Comm	9	punct	_	_
9	minder	minder	DET	Num	Degree=Cmp|NumType=Card|PronType=Ind	2	obl	_	_
10	bij	bij	ADP	Prep|voor	AdpType=Prep	9	case	_	_
11	Fellini	Fellini	PROPN	N|eigen|ev|neut	Number=Sing	10	fixed	_	SpaceAfter=No
12	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


