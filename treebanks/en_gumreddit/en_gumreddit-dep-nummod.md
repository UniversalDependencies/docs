---
layout: base
title:  'Statistics of nummod in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `nummod`

This relation is universal.

68 nodes (0%) are attached to their parents as `nummod`.

58 instances of `nummod` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19117647058824.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (55; 81% instances), <tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (10; 15% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	3	nsubj	3:nsubj	Discourse=evidence:54->51|Entity=(time-58)|Lem=*LOWER*|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	Lem=be|Len=2
3	_	_	PRON	WP	PronType=Rel	0	root	0:root	Lem=_|Len=4
4	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	acl:relcl	3:acl:relcl	Lem=happen|Len=8
5	_	_	ADP	IN	_	6	case	6:case	Lem=_|Len=2
6	_	_	PROPN	NNP	Number=Sing	4	obl	4:obl:in	Entity=(place-60-Zimbabwe)|Lem=_|Len=8
7	_	_	SCONJ	WRB	PronType=Rel	13	mark	13:mark	Discourse=elaboration:55->54|Lem=_|Len=5
8	_	_	DET	DT	Definite=Ind|PronType=Art	11	det	11:det	Entity=(event-61|Lem=_|Len=1
9	_	_	NUM	CD	NumForm=Word|NumType=Card	10	nummod	10:nummod	Lem=_|Len=7
10	_	_	NOUN	NN	Number=Sing	11	compound	11:compound	Lem=_|Len=6
11	_	_	NOUN	NN	Number=Sing	13	nsubj	13:nsubj	Entity=event-61)|Lem=_|Len=11
12	_	_	AUX	MD	VerbForm=Fin	13	aux	13:aux	Lem=_|Len=5
13	_	_	VERB	VB	VerbForm=Inf	6	acl:relcl	6:acl:relcl	Lem=_|Len=6
14	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=3
15	_	_	DET	DT	Definite=Ind|PronType=Art	16	det	16:det	Entity=(object-62|Lem=_|Len=1
16	_	_	NOUN	NN	Number=Sing	13	obl	13:obl:for	Lem=_|Len=4
17	_	_	ADP	IN	_	18	case	18:case	Lem=_|Len=2
18	_	_	NOUN	NN	Number=Sing	16	nmod	16:nmod:of	Entity=object-62)|Lem=_|Len=5|SpaceAfter=No
19	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 nummod	color:blue
1	_	_	CCONJ	CC	_	11	cc	11:cc	Discourse=antithesis:48->46|Lem=*LOWER*|Len=3
2	_	_	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Entity=(organization-23|Lem=_|Len=3
3	_	_	NOUN	NN	Number=Sing	4	nsubj	4:nsubj|5:nsubj:xsubj	Entity=organization-23)|Lem=government|Len=5
4	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=keep|Len=5
5	_	_	VERB	VBG	VerbForm=Ger	4	xcomp	4:xcomp	Lem=issue|Len=7
6	_	_	ADJ	JJR	Degree=Cmp	7	amod	7:amod	Entity=(abstract-56|Lem=_|Len=4
7	_	_	NOUN	NN	Number=Sing	5	obj	5:obj	Entity=abstract-56)|Lem=_|Len=4
8	_	_	CCONJ	CC	_	11	cc	11:cc	Discourse=contrast:49->48|Lem=_|Len=3
9	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	11	nsubj	11:nsubj	Entity=(person-32)|Lem=_|Len=2
10	_	_	ADV	RB	Degree=Pos	11	advmod	11:advmod	Lem=_|Len=5
11	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	conj	4:conj:but	Lem=_|Len=4
12	_	_	ADP	IN	_	13	case	13:case	Lem=_|Len=2
13	_	_	SYM	SYM	_	11	obl	11:obl:at	Entity=(object-57|Lem=_|Len=1
14	_	_	NUM	CD	NumForm=Digit|NumType=Card	13	nummod	13:nummod	Entity=object-57)|Lem=_|Len=2
15	_	_	SCONJ	IN	_	18	mark	18:mark	Lem=_|Len=4
16	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	nsubj	18:nsubj	Entity=(object-57)|Lem=_|Len=2
17	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	18:cop	Lem=be|Len=2
18	_	_	SYM	SYM	_	11	advcl	11:advcl:like	Entity=(object-57|Lem=_|Len=1
19	_	_	NUM	CD	NumForm=Digit|NumType=Card	18	nummod	18:nummod	Entity=object-57)|Lem=_|Len=2|SpaceAfter=No
20	_	_	PUNCT	,	_	21	punct	21:punct	Lem=_|Len=1
21	_	_	ADV	RB	Degree=Pos	4	discourse	4:discourse	Discourse=restatement:50->49|Lem=_|Len=5|SpaceAfter=No
22	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nummod	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	2	nsubj	2:nsubj	Discourse=elaboration:18->16|Entity=(event-17)|Lem=*LOWER*|Len=4
2	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=mean|Len=5
3	_	_	SCONJ	IN	_	31	mark	31:mark	Lem=_|Len=4
4	_	_	SCONJ	IN	_	7	mark	7:mark	Discourse=condition:19->22|Entity=(event-22|Lem=_|Len=2
5	_	_	DET	DT	Definite=Def|PronType=Art	6	det	6:det	Bridge=place-3<organization-23|Entity=(organization-23|Lem=_|Len=3
6	_	_	NOUN	NN	Number=Sing	7	nsubj	7:nsubj|9:nsubj:xsubj	Entity=organization-23)|Lem=government|Len=4
7	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	31	advcl	31:advcl:if	Lem=decide|Len=7
8	_	_	PART	TO	_	9	mark	9:mark	Lem=_|Len=2
9	_	_	VERB	VB	VerbForm=Inf	7	xcomp	7:xcomp	Lem=_|Len=5
10	_	_	SYM	SYM	_	9	obj	9:obj	Entity=(abstract-24|Lem=_|Len=1
11	_	_	NUM	CD	NumForm=Digit|NumType=Card	10	nummod	10:nummod	Entity=abstract-24)|Lem=100000000000000000|Len=23
12	_	_	PUNCT	-LRB-	_	15	punct	15:punct	Discourse=restatement:20->19|Lem=_|Len=1|SpaceAfter=No
13	_	_	NUM	CD	NumForm=Digit|NumType=Card	14	compound	14:compound	Entity=(abstract-24|Lem=_|Len=1
14	_	_	NOUN	NN	Number=Sing	15	nummod	15:nummod	Lem=_|Len=11
15	_	_	NOUN	NNS	Number=Plur	10	appos	10:appos	Entity=abstract-24)|Lem=dollar|Len=7|SpaceAfter=No
16	_	_	PUNCT	-RRB-	_	15	punct	15:punct	Lem=_|Len=1
17	_	_	ADP	IN	_	19	case	19:case	Discourse=same-unit:21->19|Lem=_|Len=2
18	_	_	DET	DT	Definite=Def|PronType=Art	19	det	19:det	Entity=(time-25|Lem=_|Len=3
19	_	_	NOUN	NN	Number=Sing	9	obl	9:obl:in	Lem=_|Len=4
20	_	_	ADP	IN	_	22	case	22:case	Lem=_|Len=2
21	_	_	DET	DT	Definite=Ind|PronType=Art	22	det	22:det	Lem=_|Len=1
22	_	_	NOUN	NN	Number=Sing	19	nmod	19:nmod:of	Entity=time-25)|Lem=_|Len=4|SpaceAfter=No
23	_	_	PUNCT	,	_	7	punct	7:punct	Lem=_|Len=1
24	_	_	DET	DT	Definite=Def|PronType=Art	25	det	25:det	Discourse=same-unit:22->18|Entity=(abstract-26|Lem=_|Len=3
25	_	_	NOUN	NN	Number=Sing	31	nsubj	31:nsubj	Lem=_|Len=5
26	_	_	ADP	IN	_	28	case	28:case	Lem=_|Len=2
27	_	_	DET	DT	Definite=Def|PronType=Art	28	det	28:det	Bridge=abstract-24<abstract-27|Entity=(abstract-27|Lem=_|Len=3
28	_	_	NOUN	NN	Number=Sing	25	nmod	25:nmod:of	Entity=abstract-26)abstract-27)|Lem=_|Len=6
29	_	_	AUX	MD	VerbForm=Fin	31	aux	31:aux	Lem=_|Len=5
30	_	_	ADV	RB	Degree=Pos	31	advmod	31:advmod	Lem=_|Len=8
31	_	_	VERB	VB	VerbForm=Inf	2	ccomp	2:ccomp	Lem=_|Len=5
32	_	_	ADV	RB	_	33	advmod	33:advmod	Lem=_|Len=6
33	_	_	ADV	RB	Degree=Pos	31	advmod	31:advmod	Lem=_|Len=4
34	_	_	PUNCT	-LRB-	_	35	punct	35:punct	Discourse=evaluation:23->18|Lem=_|Len=1|SpaceAfter=No
35	_	_	ADV	RB	Degree=Pos	31	advmod	31:advmod	Lem=_|Len=8
36	_	_	PUNCT	:	_	35	punct	35:punct	Lem=…|Len=3|SpaceAfter=No
37	_	_	PUNCT	-RRB-	_	35	punct	35:punct	Entity=event-22)|Lem=_|Len=1|SpaceAfter=No
38	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


