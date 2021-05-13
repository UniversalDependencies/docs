---
layout: base
title:  'Statistics of compound:prt in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-compound.html">compound</a></tt>.

538 nodes (0%) are attached to their parents as `compound:prt`.

537 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25650557620818.

The following 3 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (536; 100% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 compound:prt	color:blue
1	Next	next	ADJ	JJ	Degree=Pos	2	amod	2:amod	Discourse=joint:115->109|Entity=(time-50
2	time	time	NOUN	NN	Number=Sing	12	obl:tmod	12:obl:tmod	Entity=time-50)
3	if	if	SCONJ	IN	_	5	mark	5:mark	Discourse=condition:116->117
4	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	5:nsubj	Entity=(person-4)
5	leave	leave	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	12	advcl	12:advcl:if	_
6	in	in	ADP	IN	_	8	case	8:case	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	Entity=(time-51
8	morning	morning	NOUN	NN	Number=Sing	5	obl	5:obl:in	Entity=time-51)|SpaceAfter=No
9	,	,	PUNCT	,	_	5	punct	5:punct	_
10	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	12:nsubj	Discourse=same-unit:117->115|Entity=(person-4)
11	'll	will	AUX	MD	VerbForm=Fin	12	aux	12:aux	_
12	wake	wake	VERB	VB	VerbForm=Inf	0	root	0:root	_
13	you	you	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	12	obj	12:obj	Entity=(person-10)
14	up	up	ADP	RP	_	12	compound:prt	12:compound:prt	SpaceAfter=No
15	.	.	PUNCT	.	_	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 compound:prt	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	3:nsubj|5:nsubj:xsubj	Discourse=evaluation:36->35|Entity=(event-43(organization-25-Australia_women's_national_wheelchair_basketball_team)
2	always	always	ADV	RB	_	3	advmod	3:advmod	_
3	seem	seem	VERB	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	to	to	PART	TO	_	5	mark	5:mark	_
5	have	have	VERB	VB	VerbForm=Inf	3	xcomp	3:xcomp	_
6	just	just	ADV	RB	_	9	advmod	9:advmod	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	Entity=(event-44
8	little	little	ADJ	JJ	Degree=Pos	9	amod	9:amod	_
9	bit	bit	NOUN	NN	Number=Sing	5	obj	5:obj	_
10	of	of	ADP	IN	_	12	case	12:case	_
11	a	a	DET	DT	Definite=Ind|PronType=Art	12	det	12:det	_
12	chill	chill	NOUN	NN	Number=Sing	9	nmod	9:nmod:of	_
13	out	out	ADP	RP	_	12	compound:prt	12:compound:prt	Entity=event-44)
14	at	at	ADP	IN	_	17	case	17:case	_
15	the	the	DET	DT	Definite=Def|PronType=Art	17	det	17:det	Entity=(event-42
16	World	World	PROPN	NNP	Number=Sing	17	compound	17:compound	_
17	Cup	Cup	PROPN	NNP	Number=Sing	12	nmod	12:nmod:at	Entity=event-42)|SpaceAfter=No
18	.	.	PUNCT	.	_	3	punct	3:punct	Entity=event-43)

~~~


~~~ conllu
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 46 compound:prt	color:blue
1	Her	her	PRON	PRP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	Discourse=result:86->85|Entity=(abstract-93(person-1-Ichiyō_Higuchi)
2	experience	experience	NOUN	NN	Number=Sing	8	nsubj	8:nsubj	_
3	living	live	VERB	VBG	VerbForm=Ger	2	acl	2:acl	Discourse=elaboration:87->86
4	in	in	ADP	IN	_	6	case	6:case	_
5	this	this	DET	DT	Number=Sing|PronType=Dem	6	det	6:det	Entity=(place-86
6	neighborhood	neighborhood	NOUN	NN	Number=Sing	3	obl	3:obl:in	Entity=abstract-93)place-86)
7	would	would	AUX	MD	VerbForm=Fin	8	aux	8:aux	Discourse=same-unit:88->86
8	provide	provide	VERB	VB	VerbForm=Inf	0	root	0:root	_
9	material	material	NOUN	NN	Number=Sing	8	obj	8:obj	Entity=(abstract-94
10	for	for	ADP	IN	_	11	case	11:case	_
11	several	several	ADJ	JJ	Degree=Pos	8	obl	8:obl:for	Entity=(abstract-95
12	of	of	ADP	IN	_	15	case	15:case	_
13	her	her	PRON	PRP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	15	nmod:poss	15:nmod:poss	Bridge=abstract-17<abstract-96|Entity=(abstract-96(person-1-Ichiyō_Higuchi)
14	later	late	ADJ	JJR	Degree=Cmp	15	amod	15:amod	_
15	stories	story	NOUN	NNS	Number=Plur	11	obl	11:obl:of	Entity=abstract-94)abstract-95)abstract-96)|SpaceAfter=No
16	,	,	PUNCT	,	_	19	punct	19:punct	_
17	especially	especially	ADV	RB	Degree=Pos	19	advmod	19:advmod	_
18	"	''	PUNCT	``	_	19	punct	19:punct	SpaceAfter=No
19	Takekurabe	Takekurabe	PROPN	NNP	Number=Sing	15	appos	15:appos	Bridge=abstract-17<abstract-97-Takekurabe|Entity=(abstract-97-Takekurabe)|SpaceAfter=No
20	"	''	PUNCT	''	_	19	punct	19:punct	SpaceAfter=No
21	,	,	PUNCT	,	_	19	punct	19:punct	_
22	(	(	PUNCT	-LRB-	_	26	punct	26:punct	Discourse=elaboration:89->88|SpaceAfter=No
23	literally	literally	ADV	RB	Degree=Pos	26	advmod	26:advmod	SpaceAfter=No
24	,	,	PUNCT	,	_	23	punct	23:punct	SpaceAfter=No
25	"	''	PUNCT	''	_	26	punct	26:punct	_
26	Comparing	Comparing	PROPN	NNP	Number=Sing	15	appos	15:appos	Entity=(abstract-97-Takekurabe
27	heights	height	PROPN	NNPS	Number=Plur	26	obj	26:obj	Entity=(abstract-98-Takekurabe)abstract-97-Takekurabe)|SpaceAfter=No
28	"	''	PUNCT	''	_	26	punct	26:punct	SpaceAfter=No
29	;	;	PUNCT	:	_	33	punct	33:punct	_
30	"	''	PUNCT	``	_	33	punct	33:punct	Discourse=joint:90->89|SpaceAfter=No
31	Child	Child	PROPN	NNP	Number=Sing	33	nmod:poss	33:nmod:poss	Entity=(abstract-97-Takekurabe
32	's	's	PART	POS	_	31	case	31:case	_
33	Play	Play	PROPN	NNP	Number=Sing	19	parataxis	19:parataxis	Entity=abstract-97-Takekurabe)|SpaceAfter=No
34	"	''	PUNCT	''	_	33	punct	33:punct	_
35	in	in	ADP	IN	_	40	case	40:case	_
36	the	the	DET	DT	Definite=Def|PronType=Art	40	det	40:det	Entity=(abstract-99
37	Robert	Robert	PROPN	NNP	Number=Sing	40	compound	40:compound	Entity=(person-100-Robert_Lyons_Danly
38	Lyons	Lyons	PROPN	NNP	Number=Sing	37	flat	37:flat	_
39	Danly	Danly	PROPN	NNP	Number=Sing	37	flat	37:flat	Entity=person-100-Robert_Lyons_Danly)
40	translation	translation	NOUN	NN	Number=Sing	33	nmod	33:nmod:in	Entity=abstract-99)|SpaceAfter=No
41	;	;	PUNCT	:	_	43	punct	43:punct	_
42	also	also	ADV	RB	_	43	advmod	43:advmod	Discourse=joint:91->89
43	called	call	VERB	VBN	Tense=Past|VerbForm=Part	19	acl	19:acl	_
44	"	''	PUNCT	``	_	45	punct	45:punct	SpaceAfter=No
45	Growing	Growing	PROPN	NNP	Number=Sing	43	xcomp	43:xcomp	Entity=(abstract-97-Takekurabe
46	Up	up	ADP	RP	_	45	compound:prt	45:compound:prt	Entity=abstract-97-Takekurabe)|SpaceAfter=No
47	"	''	PUNCT	''	_	45	punct	45:punct	_
48	in	in	ADP	IN	_	52	case	52:case	_
49	the	the	DET	DT	Definite=Def|PronType=Art	52	det	52:det	Entity=(abstract-101
50	Edward	Edward	PROPN	NNP	Number=Sing	52	compound	52:compound	Entity=(person-102-Edward_Seidensticker
51	Seidensticker	Seidensticker	PROPN	NNP	Number=Sing	50	flat	50:flat	Entity=person-102-Edward_Seidensticker)
52	translation	translation	NOUN	NN	Number=Sing	45	obl	45:obl:in	Entity=abstract-101)|SpaceAfter=No
53	.	.	PUNCT	.	_	43	punct	43:punct	SpaceAfter=No
54	)	)	PUNCT	-RRB-	_	43	punct	43:punct	_

~~~


