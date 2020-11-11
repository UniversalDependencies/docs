---
layout: base
title:  'Statistics of aux:pass in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-aux.html">aux</a></tt>.

96 nodes (1%) are attached to their parents as `aux:pass`.

96 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.375.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (95; 99% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
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


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 aux:pass	color:blue
1	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	4	nsubj	_	Discourse=concession:18->20|Entity=(person-5)|Lem=*LOWER*|Len=3
2	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	Lem=_|Len=2|SpaceAfter=No
3	_	_	PART	RB	Polarity=Neg	4	advmod	_	Lem=not|Len=3
4	_	_	VERB	VB	VerbForm=Inf	0	root	_	Lem=_|Len=2
5	_	_	ADP	IN	_	7	case	_	Lem=_|Len=2
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	_	Entity=(place-16|Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	4	obl	_	Entity=place-16)|Lem=_|Len=3
8	_	_	CCONJ	CC	_	9	cc	_	Discourse=joint:19->18|Lem=_|Len=3
9	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	conj	_	Lem=_|Len=6
10	_	_	PART	RB	Polarity=Neg	13	advmod	_	Lem=_|Len=3
11	_	_	PART	TO	_	13	mark	_	Lem=_|Len=2
12	_	_	AUX	VB	VerbForm=Inf	13	aux:pass	_	Lem=_|Len=2
13	_	_	ADJ	JJ	Degree=Pos	9	xcomp	_	Lem=tire|Len=5
14	_	_	ADV	RB	_	13	advmod	_	Lem=_|Len=10|SpaceAfter=No
15	_	_	PUNCT	,	_	20	punct	_	Lem=_|Len=1
16	_	_	CCONJ	CC	_	20	cc	_	Discourse=joint:20->5|Lem=_|Len=3
17	_	_	PRON	WDT	PronType=Dem	20	nsubj	_	Lem=_|Len=4
18	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	Lem=do|Len=4|SpaceAfter=No
19	_	_	PART	RB	Polarity=Neg	20	advmod	_	Lem=not|Len=3
20	_	_	VERB	VB	VerbForm=Inf	4	conj	_	Lem=_|Len=4
21	_	_	SCONJ	IN	_	25	mark	_	Lem=_|Len=4
22	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	25	nsubj	_	Entity=(person-5)|Lem=_|Len=3
23	_	_	AUX	MD	VerbForm=Fin	25	aux	_	Lem=_|Len=2|SpaceAfter=No
24	_	_	PART	RB	Polarity=Neg	25	advmod	_	Lem=not|Len=3
25	_	_	VERB	VB	VerbForm=Inf	20	ccomp	_	Lem=_|Len=5
26	_	_	VERB	VBG	VerbForm=Ger	25	xcomp	_	Lem=work|Len=7
27	_	_	ADP	RP	_	26	compound:prt	_	Lem=_|Len=3

~~~


