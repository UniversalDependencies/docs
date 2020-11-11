---
layout: base
title:  'Statistics of iobj in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `iobj`

This relation is universal.

42 nodes (0%) are attached to their parents as `iobj`.

42 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.19047619047619.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (32; 76% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (10; 24% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 iobj	color:blue
1	_	_	SCONJ	IN	_	3	mark	_	Discourse=condition:67->68|Lem=*LOWER*|Len=2
2	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	Entity=(person-74)|Lem=_|Len=3
3	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	9	advcl	_	Lem=_|Len=4
4	_	_	ADP	IN	_	6	case	_	Lem=_|Len=3
5	_	_	DET	DT	Definite=Ind|PronType=Art	6	det	_	Entity=(organization-79|Lem=_|Len=1
6	_	_	NOUN	NN	Number=Sing	3	obl	_	Entity=organization-79)|Lem=_|Len=7|SpaceAfter=No
7	_	_	PUNCT	,	_	3	punct	_	Lem=_|Len=1
8	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	9	nsubj	_	Discourse=background:68->65|Entity=(organization-79)|Lem=_|Len=4
9	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	Lem=_|Len=3
10	_	_	PRON	PRP	Case=Acc|Person=2|PronType=Prs	9	iobj	_	Entity=(person-74)|Lem=_|Len=3
11	_	_	DET	DT	Number=Sing|PronType=Dem	12	det	_	Entity=(object-73|Lem=_|Len=4
12	_	_	NOUN	NN	Number=Sing	9	obj	_	Entity=object-73)|Lem=_|Len=5
13	_	_	SCONJ	IN	_	15	mark	_	Discourse=cause:69->68|Lem=_|Len=7
14	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	Entity=(object-73)|Lem=_|Len=2
15	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	advcl	_	Lem=have|Len=3
16	_	_	NOUN	NN	Number=Sing	15	obj	_	Entity=(abstract-80)|Lem=_|Len=5
17	_	_	CCONJ	CC	_	20	cc	_	Discourse=elaboration:70->69|Lem=_|Len=3
18	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	20	nsubj	_	Entity=(person-74)|Lem=_|Len=3
19	_	_	AUX	MD	VerbForm=Fin	20	aux	_	Lem=_|Len=3
20	_	_	VERB	VB	VerbForm=Inf	15	conj	_	Lem=_|Len=3
21	_	_	NOUN	NNS	Number=Plur	20	obj	_	Entity=(object-81)|Lem=thing|Len=6
22	_	_	ADP	IN	_	23	case	_	Lem=_|Len=4
23	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	20	obl	_	Entity=(object-73)|Lem=_|Len=2|SpaceAfter=No
24	_	_	PUNCT	.	_	9	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 iobj	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	3	nsubj:pass	_	Discourse=evaluation:24->16|Entity=(event-22)|Lem=*LOWER*|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	Lem=be|Len=2
3	_	_	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	Lem=relate|Len=7
4	_	_	SCONJ	IN	_	6	mark	_	Discourse=cause:25->24|Lem=_|Len=7
5	_	_	NOUN	NNS	Number=Plur	6	nsubj	_	Entity=(event-28(person-29)|Lem=_|Len=6
6	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	advcl	_	Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	6	obj	_	Entity=(abstract-12)|Lem=_|Len=5
8	_	_	PART	TO	_	9	mark	_	Discourse=purpose:26->25|Lem=_|Len=2
9	_	_	VERB	VB	VerbForm=Inf	6	xcomp	_	Lem=_|Len=3
10	_	_	PROPN	NNP	Number=Sing	11	compound	_	Entity=(abstract-30(place-31)|Lem=_|Len=2
11	_	_	NOUN	NN	Number=Sing	9	obj	_	Entity=abstract-30)|Lem=_|Len=4
12	_	_	PUNCT	:	_	15	punct	_	Discourse=elaboration:27->25|Lem=_|Len=2
13	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	_	Entity=(person-32)|Lem=_|Len=2
14	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	15	aux	_	Lem=be|Len=3
15	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	6	parataxis	_	Lem=loan|Len=7
16	_	_	DET	DT	Definite=Def|PronType=Art	18	det	_	Entity=(organization-23|Lem=_|Len=3
17	_	_	PROPN	NNP	Number=Sing	18	compound	_	Entity=(place-31)|Lem=_|Len=2
18	_	_	NOUN	NN	Number=Sing	15	iobj	_	Entity=organization-23)|Lem=_|Len=4
19	_	_	DET	DT	Definite=Def|PronType=Art	21	det	_	Entity=(abstract-33|Lem=_|Len=3
20	_	_	ADJ	JJ	Degree=Pos	21	amod	_	Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	15	obj	_	Entity=abstract-33)|Lem=_|Len=5
22	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	23	nsubj	_	Discourse=elaboration:28->27|Entity=(organization-23)|Lem=_|Len=2
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl:relcl	_	Entity=event-28)|Lem=print|Len=6|SpaceAfter=No
24	_	_	PUNCT	.	_	3	punct	_	Lem=_|Len=1

~~~


