---
layout: base
title:  'Statistics of iobj in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `iobj`

This relation is universal.

32 nodes (0%) are attached to their parents as `iobj`.

32 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (23; 72% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (6; 19% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Bakayoko	Bakayoko	PROPN	NNP	Number=Sing	2	nsubj	2:nsubj	Discourse=joint-list_m:25->23:0|Entity=(35-person-new-cf1-1-coref-Tiémoué_Bakayoko)
2	getting	get	VERB	VBG	VerbForm=Ger	0	root	0:root	_
3	himself	himself	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	2	iobj	2:iobj	Entity=(35-person-giv:act-cf1-1-ana-Tiémoué_Bakayoko)
4	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	Entity=(36-object-new-cf2-3-sgl
5	red	red	ADJ	JJ	Degree=Pos	6	amod	6:amod	_
6	card	card	NOUN	NN	Number=Sing	2	obj	2:obj	Entity=36)|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 iobj	color:blue
1	Pay	pay	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=elaboration-additional:37->26:2
2	his	his	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	Entity=(56-person-new-cf5-2-sgl(12-person-giv:inact-cf2-1-ana-Bugha_%28gamer%29)
3	butler	butler	NOUN	NN	Number=Sing	1	iobj	1:iobj|5:nsubj:xsubj	Entity=56)
4	to	to	PART	TO	_	5	mark	5:mark	_
5	do	do	VERB	VB	VerbForm=Inf	1	xcomp	1:xcomp	_
6	that	that	PRON	DT	Number=Sing|PronType=Dem	5	obj	5:obj	Entity=(54-event-giv:inact-cf1-1-coref)|SpaceAfter=No
7	,	.	PUNCT	.	_	9	punct	9:punct	_
8	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	9:nsubj	Discourse=attribution-positive:38->37:0|Entity=(57-person-acc:com-cf4-1-ana)
9	guess	guess	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis	1:parataxis	_
10	at	at	ADP	IN	_	12	case	12:case	Discourse=same-unit_m:39->37:1
11	that	that	DET	DT	Number=Sing|PronType=Dem	12	det	12:det	Entity=(52-event-giv:inact-cf3-2-coref
12	point	point	NOUN	NN	Number=Sing	1	obl	1:obl:at	Entity=52)|SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 iobj	color:blue
1	If	if	SCONJ	IN	_	5	mark	5:mark	Discourse=contingency-condition:66->67:0
2	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	5:nsubj	Entity=(79-person-giv:act-cf1*-1-ana)
3	do	do	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
4	not	not	PART	RB	Polarity=Neg	5	advmod	5:advmod	_
5	have	have	VERB	VB	VerbForm=Inf	9	advcl	9:advcl:if	_
6	access	access	NOUN	NN	Number=Sing	5	obj	5:obj	Entity=(93-abstract-new-cf2-1-sgl)|SpaceAfter=No
7	,	,	PUNCT	,	_	5	punct	5:punct	_
8	please	please	INTJ	UH	_	9	discourse	9:discourse	Discourse=adversative-contrast_m:67->65:1
9	email	email	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	_
10	the	the	DET	DT	Definite=Def|PronType=Art	11	det	11:det	Entity=(94-person-new-cf3-2-sgl
11	TA	TA	PROPN	NNP	Number=Sing	9	iobj	9:iobj	Entity=94)
12	or	or	CCONJ	CC	_	14	cc	14:cc	_
13	the	the	DET	DT	Definite=Def|PronType=Art	14	det	14:det	Entity=(95-person-new-cf4-2-sgl
14	Professor	Professor	PROPN	NNP	Number=Sing	11	conj	9:iobj|11:conj:or	Entity=95)|SpaceAfter=No
15	.	.	PUNCT	.	_	9	punct	9:punct	_

~~~


