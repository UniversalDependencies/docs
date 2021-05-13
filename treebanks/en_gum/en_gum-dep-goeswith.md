---
layout: base
title:  'Statistics of goeswith in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `goeswith`

This relation is universal.

15 nodes (0%) are attached to their parents as `goeswith`.

15 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 10 pairs of parts of speech are connected with `goeswith`: <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-PART.html">PART</a></tt> (2; 13% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 7% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 goeswith	color:blue
1	Professor	Professor	PROPN	NNP	Number=Sing	3	nsubj	3:nsubj	Discourse=attribution:56->57|Entity=(person-50-Creswell_Eastman
2	Eastman	Eastman	PROPN	NNP	Number=Sing	1	flat	1:flat	Entity=person-50-Creswell_Eastman)
3	says	say	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	iodine	iodine	NOUN	NN	Number=Sing	6	nsubj:pass	6:nsubj:pass	Discourse=background:57->60|Entity=(substance-3)
5	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	6:aux:pass	_
6	added	add	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	3	ccomp	3:ccomp	_
7	to	to	ADP	IN	_	10	case	10:case	_
8	only	only	ADV	RB	_	9	advmod	9:advmod	_
9	10	10	NUM	CD	NumForm=Digit|NumType=Card	10	nummod	10:nummod	Bridge=substance-21<substance-79|Entity=(substance-79
10	per	per	ADP	IN	_	6	obl	6:obl:to	_
11	cent	cent	NOUN	NN	Number=Sing	10	goeswith	10:goeswith	_
12	of	of	ADP	IN	_	14	case	14:case	_
13	Australian	Australian	ADJ	JJ	Degree=Pos	14	amod	14:amod	Entity=(substance-21
14	salt	salt	NOUN	NN	Number=Sing	10	nmod	10:nmod:of	Entity=substance-79)substance-21)
15	in	in	ADP	IN	_	16	case	16:case	_
16	contravention	contravention	NOUN	NN	Number=Sing	6	obl	6:obl:in	_
17	of	of	ADP	IN	_	22	case	22:case	_
18	a	a	DET	DT	Definite=Ind|PronType=Art	22	det	22:det	Entity=(abstract-80
19	World	World	PROPN	NNP	Number=Sing	21	compound	21:compound	Entity=(organization-81-World_Health_Organization
20	Health	Health	PROPN	NNP	Number=Sing	21	compound	21:compound	_
21	Organisation	Organisation	PROPN	NNP	Number=Sing	22	compound	22:compound	Entity=organization-81-World_Health_Organization)
22	recommendation	recommendation	NOUN	NN	Number=Sing	16	nmod	16:nmod:of	_
23	that	that	SCONJ	IN	_	27	mark	27:mark	Discourse=elaboration:58->57
24	all	all	DET	DT	_	25	det	25:det	Entity=(substance-21
25	salt	salt	NOUN	NN	Number=Sing	27	nsubj:pass	27:nsubj:pass	Entity=substance-21)
26	be	be	AUX	VB	VerbForm=Inf	27	aux:pass	27:aux:pass	_
27	iodised	iodise	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	22	acl	22:acl:that	Entity=abstract-80)|SpaceAfter=No
28	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	So	so	ADV	RB	_	6	advmod	6:advmod	_
2	before	before	ADV	IN	Typo=Yes	6	advmod	6:advmod	_
3	hand	hand	NOUN	NN	Number=Sing|Typo=Yes	2	goeswith	2:goeswith	_
4	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	6:nsubj	Entity=(person-4)
5	kinda	kinda	ADV	RB	Degree=Pos	6	advmod	6:advmod	_
6	knew	know	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
7	about	about	ADP	IN	_	8	case	8:case	_
8	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obl	6:obl:about	Entity=(person-3)|SpaceAfter=No
9	,	,	PUNCT	,	_	13	punct	13:punct	_
10	but	but	CCONJ	CC	_	13	cc	13:cc	Discourse=contrast:33->32
11	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	13:nsubj	Entity=(person-4)
12	never	never	ADV	RB	Polarity=Neg	13	advmod	13:advmod	_
13	met	meet	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	6	conj	6:conj:but	_
14	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	13:obj	Entity=(person-3)|SpaceAfter=No
15	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 goeswith	color:blue
1	You	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj|13:nsubj	Discourse=elaboration:60->56|Entity=(person-7)
2	could	could	AUX	MD	VerbForm=Fin	3	aux	3:aux|13:aux	_
3	look	look	VERB	VB	VerbForm=Inf	0	root	0:root	_
4	at	at	ADP	IN	_	5	case	5:case	_
5	yourself	yourself	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs|Reflex=Yes	3	obl	3:obl:at	Entity=(person-7)|SpaceAfter=No
6	,	,	PUNCT	,	_	7	punct	7:punct	_
7	turning	turn	VERB	VBG	VerbForm=Ger	3	advcl	3:advcl	Discourse=manner:61->60
8	to	to	PART	TO	_	9	mark	9:mark	_
9	catch	catch	VERB	VB	VerbForm=Inf	7	advcl	7:advcl:to	_
10	different	different	ADJ	JJ	Degree=Pos	11	amod	11:amod	Entity=(abstract-52
11	angles	angle	NOUN	NNS	Number=Plur	9	obj	9:obj	Entity=abstract-52)
12	and	and	CCONJ	CC	_	13	cc	13:cc	Discourse=attribution:62->63
13	say	say	VERB	VB	Person=2|VerbForm=Inf	3	conj	3:conj:and	_
14	“	''	PUNCT	``	_	15	punct	15:punct	Discourse=joint:63->60|SpaceAfter=No
15	All	all	PRON	DT	_	13	ccomp	13:ccomp	_
16	right	right	NOUN	NN	Number=Sing	15	goeswith	15:goeswith	SpaceAfter=No
17	,	,	PUNCT	,	_	18	punct	18:punct	_
18	all	all	PRON	DT	_	15	parataxis	15:parataxis	_
19	right	right	NOUN	NN	Number=Sing	18	goeswith	18:goeswith	SpaceAfter=No
20	,	,	PUNCT	,	_	24	punct	24:punct	_
21	now	now	ADV	RB	_	24	advmod	24:advmod	_
22	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	24	nsubj	24:nsubj	Entity=(person-53)|SpaceAfter=No
23	’re	be	AUX	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	24	aux	24:aux	_
24	talking	talk	VERB	VBG	Tense=Pres|VerbForm=Part	18	parataxis	18:parataxis	SpaceAfter=No
25	,	,	PUNCT	,	_	15	punct	15:punct	SpaceAfter=No
26	”	''	PUNCT	''	_	15	punct	15:punct	_
27	very	very	ADV	RB	_	28	advmod	28:advmod	_
28	loudly	loudly	ADV	RB	Degree=Pos	13	advmod	13:advmod	SpaceAfter=No
29	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


