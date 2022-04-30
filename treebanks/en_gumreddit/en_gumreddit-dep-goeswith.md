---
layout: base
title:  'Statistics of goeswith in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `goeswith`

This relation is universal.

3 nodes (0%) are attached to their parents as `goeswith`.

3 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `goeswith`: <tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (1; 33% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (1; 33% instances), <tt><a href="en_gumreddit-pos-X.html">X</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 goeswith	color:blue
1	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	Discourse=circumstance:2->4:1|Entity=(person-2-new-2,4-coref(person-3-new-2-sgl(person-4-acc:com-1-ana)|Lem=*LOWER*|Len=2
2	_	_	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=3)|Lem=_|Len=4
3	_	_	CCONJ	CC	_	4	cc	4:cc	Lem=_|Len=3
4	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	conj	2:conj:and|7:nsubj	Entity=(person-4-giv:act-1-ana)2)|Lem=_|Len=1
5	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	7:cop	Lem=be|Len=4
6	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
7	_	_	PROPN	NNP	Number=Sing	0	root	0:root	Entity=(place-5-new-1-coref-Panera_Bread)|Lem=_|Len=6
8	_	_	VERB	VBG	VerbForm=Ger	7	advcl	7:advcl	Discourse=elaboration:3->2:0|Lem=eat|Len=6
9	_	_	NOUN	NN	Number=Sing	8	obj	8:obj	Entity=(object-6-new-1-sgl)|Lem=_|Len=9
10	_	_	CCONJ	CC	_	12	cc	12:cc	Discourse=background:4->6:0|Lem=_|Len=3
11	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	12:nsubj	Entity=(person-2-giv:act-1-ana)|Lem=_|Len=2
12	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	7	conj	7:conj:and	Lem=notice|Len=7
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Entity=(person-7-new-2-coref|Lem=_|Len=1
14	_	_	NOUN	NN	Number=Sing	12	obj	12:obj	Lem=_|Len=4
15	_	_	ADP	IN	Typo=Yes	17	case	17:case	Lem=_|Len=2|XML=<sic>
16	_	_	X	IN	Typo=Yes	15	goeswith	15:goeswith	Lem=_|Len=4|XML=</sic>
17	_	_	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	14	nmod	14:nmod:behind	Entity=(person-2-giv:act-1-ana)7)|Lem=we|Len=2
18	_	_	VERB	VBG	VerbForm=Ger	14	acl	14:acl	Discourse=elaboration:5->4:0|Lem=talk|Len=7
19	_	_	ADP	IN	_	21	case	21:case	Lem=_|Len=2
20	_	_	DET	DT	Definite=Def|PronType=Art	21	det	21:det	Lem=_|Len=3
21	_	_	NOUN	NN	Number=Sing	18	obl	18:obl:on	Lem=_|Len=5
22	_	_	ADV	RB	_	23	advmod	23:advmod	Lem=_|Len=4
23	_	_	ADV	RB	Degree=Pos	18	advmod	18:advmod	Lem=_|Len=6|SpaceAfter=No
24	_	_	PUNCT	.	_	7	punct	7:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 goeswith	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	4:nsubj	Discourse=background:6->13:4|Entity=(person-2-giv:act-1-ana)|Lem=*LOWER*|Len=2
2	_	_	AUX	MD	VerbForm=Fin	4	aux	4:aux	Lem=_|Len=5
3	_	_	PART	RB	Polarity=Neg	4	advmod	4:advmod	Lem=not|Len=3
4	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=4
5	_	_	VERB	IN	Typo=Yes	4	ccomp	4:ccomp	Lem=_|Len=4|XML=<sic>
6	_	_	X	VBG	Typo=Yes|VerbForm=Ger	5	goeswith	5:goeswith	Lem=hear|Len=7|XML=</sic>
7	_	_	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nsubj	8:nsubj	Entity=(person-7-giv:act-1-ana)|Lem=she|Len=3
8	_	_	NOUN	NN	Number=Sing	5	ccomp	5:ccomp	Entity=(event-8-new-1-sgl|Lem=_|Len=4
9	_	_	SCONJ	IN	_	14	mark	14:mark	Lem=_|Len=5
10	_	_	DET	DT	Definite=Ind|PronType=Art	11	det	11:det	Entity=(object-9-new-2-sgl|Lem=_|Len=1
11	_	_	NOUN	NN	Number=Sing	14	nsubj:pass	14:nsubj:pass	Entity=9)|Lem=_|Len=4
12	_	_	PART	RB	Polarity=Neg	14	advmod	14:advmod	Discourse=elaboration:7->6:1|Lem=_|Len=3
13	_	_	AUX	VBG	VerbForm=Ger	14	aux:pass	14:aux:pass	Lem=be|Len=5
14	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	8	acl	8:acl:about	Entity=8)|Lem=pay|Len=4|SpaceAfter=No
15	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	_	_	X	FW	_	8	discourse	8:discourse	Discourse=joint_m:96->66:3|Lem=_|Len=2
2	_	_	X	FW	_	1	goeswith	1:goeswith	Lem=_|Len=2
3	_	_	ADJ	JJ	Degree=Pos	4	amod	4:amod	Entity=(abstract-109-new-2-sgl|Lem=*LOWER*|Len=12
4	_	_	NOUN	NN	Number=Sing	8	nsubj	8:nsubj	Entity=109)|Lem=_|Len=10
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	Lem=be|Len=2
6	_	_	ADV	RB	_	8	advmod	8:advmod	Lem=_|Len=2
7	_	_	PART	RB	Polarity=Neg	8	advmod	8:advmod	Lem=_|Len=3
8	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=4|SpaceAfter=No
9	_	_	PUNCT	.	_	8	punct	8:punct	Lem=_|Len=1

~~~


