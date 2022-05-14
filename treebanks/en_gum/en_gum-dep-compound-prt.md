---
layout: base
title:  'Statistics of compound:prt in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-compound.html">compound</a></tt>.

640 nodes (0%) are attached to their parents as `compound:prt`.

640 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2734375.

The following 3 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (630; 98% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (9; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 compound:prt	color:blue
1	Next	next	ADJ	JJ	Degree=Pos	2	amod	2:amod	Discourse=joint-other_m:115->109:3|Entity=(50-time-new-cf4-2-sgl
2	time	time	NOUN	NN	Number=Sing	12	obl:tmod	12:obl:tmod	Entity=50)
3	if	if	SCONJ	IN	_	5	mark	5:mark	Discourse=contingency-condition:116->117:0
4	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	5:nsubj	Entity=(4-person-giv:inact-cf1-1-ana)
5	leave	leave	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	12	advcl	12:advcl:if	_
6	in	in	ADP	IN	_	8	case	8:case	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	Entity=(51-time-new-cf3-2-sgl
8	morning	morning	NOUN	NN	Number=Sing	5	obl	5:obl:in	Entity=51)|SpaceAfter=No
9	,	,	PUNCT	,	_	5	punct	5:punct	_
10	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	12:nsubj	Discourse=same-unit_m:117->115:0|Entity=(4-person-giv:act-cf1-1-ana)
11	'll	will	AUX	MD	VerbForm=Fin	12	aux	12:aux	_
12	wake	wake	VERB	VB	VerbForm=Inf	0	root	0:root	_
13	you	you	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	12	obj	12:obj	Entity=(10-person-giv:inact-cf2-1-ana)
14	up	up	ADP	RP	_	12	compound:prt	12:compound:prt	SpaceAfter=No
15	.	.	PUNCT	.	_	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 compound:prt	color:blue
1	And	and	CCONJ	CC	_	8	cc	8:cc	Discourse=joint-other_m:171->163:2
2	if	if	SCONJ	IN	_	4	mark	4:mark	Discourse=contingency-condition:172->173:0
3	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Entity=(9-person-giv:inact-cf1-1-ana)
4	have	have	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	advcl	8:advcl:if	_
5	n't	not	PART	RB	Polarity=Neg	4	advmod	4:advmod	_
6	already	already	ADV	RB	_	4	advmod	4:advmod	_
7	be	be	AUX	VB	VerbForm=Inf	8	cop	8:cop	Discourse=same-unit_m:173->171:0
8	sure	sure	ADJ	JJ	Degree=Pos	0	root	0:root	_
9	to	to	PART	TO	_	10	mark	10:mark	_
10	give	give	VERB	VB	VerbForm=Inf	8	xcomp	8:xcomp	_
11	this	this	DET	DT	Number=Sing|PronType=Dem	12	det	12:det	Entity=(110-abstract-acc:com-cf2-2-sgl
12	video	video	NOUN	NN	Number=Sing	10	iobj	10:iobj	Entity=110)
13	a	a	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Entity=(111-abstract-new-cf3-2-sgl
14	thumbs	thumb	NOUN	NN	Number=Sing	10	obj	10:obj	_
15	up	up	ADP	RP	_	14	compound:prt	14:compound:prt	Entity=111)|SpaceAfter=No
16	.	.	PUNCT	.	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 46 compound:prt	color:blue
1	Her	her	PRON	PRP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	Discourse=causal-result:86->85:0|Entity=(93-abstract-new-cf5-2-coref(1-person-giv:inact-cf1-1-ana-Ichiyō_Higuchi)
2	experience	experience	NOUN	NN	Number=Sing	8	nsubj	8:nsubj	_
3	living	live	VERB	VBG	VerbForm=Ger	2	acl	2:acl	Discourse=elaboration-attribute:87->86:0
4	in	in	ADP	IN	_	6	case	6:case	_
5	this	this	DET	DT	Number=Sing|PronType=Dem	6	det	6:det	Entity=(86-place-giv:inact-cf3-2-coref
6	neighborhood	neighborhood	NOUN	NN	Number=Sing	3	obl	3:obl:in	Entity=86)93)
7	would	would	AUX	MD	Number=Sing|Person=3|VerbForm=Fin	8	aux	8:aux	Discourse=same-unit_m:88->86:1
8	provide	provide	VERB	VB	VerbForm=Inf	0	root	0:root	_
9	material	material	NOUN	NN	Number=Sing	8	obj	8:obj	Entity=(94-abstract-new-cf9-3-sgl
10	for	for	ADP	IN	_	11	case	11:case	_
11	several	several	ADJ	JJ	Degree=Pos	8	obl	8:obl:for	Entity=(95-abstract-new-cf10-1-sgl
12	of	of	ADP	IN	_	15	case	15:case	_
13	her	her	PRON	PRP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	15	nmod:poss	15:nmod:poss	Bridge=17<96|Entity=(96-abstract-acc:inf-cf4-3-coref(1-person-giv:act-cf1-1-ana-Ichiyō_Higuchi)
14	later	late	ADJ	JJR	Degree=Cmp	15	amod	15:amod	_
15	stories	story	NOUN	NNS	Number=Plur	11	obl	11:obl:of	Entity=96)95)94)|SpaceAfter=No
16	,	,	PUNCT	,	_	19	punct	19:punct	_
17	especially	especially	ADV	RB	Degree=Pos	19	advmod	19:advmod	_
18	"	''	PUNCT	``	_	19	punct	19:punct	SpaceAfter=No
19	Takekurabe	Takekurabe	PROPN	NNP	Number=Sing	15	appos	15:appos	Bridge=17<97|Entity=(97-abstract-acc:inf-cf2-1-coref-Takekurabe)|SpaceAfter=No
20	"	''	PUNCT	''	_	19	punct	19:punct	SpaceAfter=No
21	,	,	PUNCT	,	_	19	punct	19:punct	_
22	(	(	PUNCT	-LRB-	_	26	punct	26:punct	Discourse=elaboration-additional:89->88:0|SpaceAfter=No
23	literally	literally	ADV	RB	Degree=Pos	26	advmod	26:advmod	SpaceAfter=No
24	,	,	PUNCT	,	_	23	punct	23:punct	SpaceAfter=No
25	"	''	PUNCT	''	_	26	punct	26:punct	_
26	Comparing	Comparing	PROPN	NNP	Number=Sing	15	appos	15:appos	Entity=(97-abstract-giv:act-cf2-1,2-coref-Takekurabe
27	heights	height	PROPN	NNPS	Number=Plur	26	obj	26:obj	Entity=(98-abstract-new-cf6-1-sgl-Takekurabe)97)|SpaceAfter=No
28	"	''	PUNCT	''	_	26	punct	26:punct	SpaceAfter=No
29	;	;	PUNCT	:	_	26	punct	26:punct	_
30	"	''	PUNCT	``	_	33	punct	33:punct	SpaceAfter=No
31	Child	Child	PROPN	NNP	Number=Sing	33	nmod:poss	33:nmod:poss	Entity=(97-abstract-giv:act-cf2-3-coref-Takekurabe
32	's	's	PART	POS	_	31	case	31:case	_
33	Play	Play	PROPN	NNP	Number=Sing	19	parataxis	19:parataxis	Entity=97)|SpaceAfter=No
34	"	''	PUNCT	''	_	33	punct	33:punct	_
35	in	in	ADP	IN	_	40	case	40:case	_
36	the	the	DET	DT	Definite=Def|PronType=Art	40	det	40:det	Entity=(99-abstract-new-cf7-3,4,5-sgl
37	Robert	Robert	PROPN	NNP	Number=Sing	40	compound	40:compound	Entity=(100-person-new-cf11-1,2,3-sgl-Robert_Lyons_Danly
38	Lyons	Lyons	PROPN	NNP	Number=Sing	37	flat	37:flat	_
39	Danly	Danly	PROPN	NNP	Number=Sing	37	flat	37:flat	Entity=100)
40	translation	translation	NOUN	NN	Number=Sing	33	nmod	33:nmod:in	Entity=99)|SpaceAfter=No
41	;	;	PUNCT	:	_	33	punct	33:punct	_
42	also	also	ADV	RB	_	43	advmod	43:advmod	Discourse=joint-list_m:90->89:0
43	called	call	VERB	VBN	Tense=Past|VerbForm=Part	19	acl	19:acl	_
44	"	''	PUNCT	``	_	45	punct	45:punct	SpaceAfter=No
45	Growing	Growing	PROPN	NNP	Number=Sing	43	xcomp	43:xcomp	Entity=(97-abstract-giv:act-cf2-1-coref-Takekurabe
46	Up	up	ADP	RP	_	45	compound:prt	45:compound:prt	Entity=97)|SpaceAfter=No
47	"	''	PUNCT	''	_	45	punct	45:punct	_
48	in	in	ADP	IN	_	52	case	52:case	_
49	the	the	DET	DT	Definite=Def|PronType=Art	52	det	52:det	Entity=(101-abstract-new-cf8-3,4-sgl
50	Edward	Edward	PROPN	NNP	Number=Sing	52	compound	52:compound	Entity=(102-person-new-cf12-1,2-sgl-Edward_Seidensticker
51	Seidensticker	Seidensticker	PROPN	NNP	Number=Sing	50	flat	50:flat	Entity=102)
52	translation	translation	NOUN	NN	Number=Sing	45	obl	45:obl:in	Entity=101)|SpaceAfter=No
53	.	.	PUNCT	.	_	43	punct	43:punct	SpaceAfter=No
54	)	)	PUNCT	-RRB-	_	43	punct	43:punct	_

~~~


