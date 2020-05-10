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
1	_	_	PRON	DT	Number=Sing|PronType=Dem	4	nsubj	_	Entity=(time-58)|Lem=*LOWER*|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	Lem=be|Len=2
3	_	_	PRON	WP	PronType=Int	4	nsubj	_	Lem=_|Len=4
4	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Lem=happen|Len=8
5	_	_	ADP	IN	_	6	case	_	Lem=_|Len=2
6	_	_	PROPN	NNP	Number=Sing	4	obl	_	Entity=(place-60)|Lem=_|Len=8
7	_	_	SCONJ	WRB	PronType=Rel	13	mark	_	Lem=_|Len=5
8	_	_	DET	DT	Definite=Ind|PronType=Art	11	det	_	Entity=(event-61|Lem=_|Len=1
9	_	_	NUM	CD	NumType=Card	10	nummod	_	Lem=_|Len=7
10	_	_	NOUN	NN	Number=Sing	11	compound	_	Lem=_|Len=6
11	_	_	NOUN	NN	Number=Sing	13	nsubj	_	Entity=event-61)|Lem=_|Len=11
12	_	_	AUX	MD	VerbForm=Fin	13	aux	_	Lem=_|Len=5
13	_	_	VERB	VB	VerbForm=Inf	6	acl:relcl	_	Lem=_|Len=6
14	_	_	ADP	IN	_	16	case	_	Lem=_|Len=3
15	_	_	DET	DT	Definite=Ind|PronType=Art	16	det	_	Entity=(object-62|Lem=_|Len=1
16	_	_	NOUN	NN	Number=Sing	13	obl	_	Lem=_|Len=4
17	_	_	ADP	IN	_	18	case	_	Lem=_|Len=2
18	_	_	NOUN	NN	Number=Sing	16	nmod	_	Entity=object-62)|Lem=_|Len=5|SpaceAfter=No
19	_	_	PUNCT	.	_	4	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 nummod	color:blue
1	_	_	CCONJ	CC	_	11	cc	_	Lem=*LOWER*|Len=3
2	_	_	DET	DT	Definite=Def|PronType=Art	3	det	_	Entity=(organization-23|Lem=_|Len=3
3	_	_	NOUN	NN	Number=Sing	4	nsubj	_	Entity=organization-23)|Lem=_|Len=5|Typo=Yes
4	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=keep|Len=5
5	_	_	VERB	VBG	VerbForm=Ger	4	xcomp	_	Lem=issue|Len=7
6	_	_	ADJ	JJR	Degree=Cmp	7	amod	_	Entity=(object-56|Lem=_|Len=4
7	_	_	NOUN	NN	Number=Sing	5	obj	_	Entity=object-56)|Lem=_|Len=4
8	_	_	CCONJ	CC	_	11	cc	_	Lem=_|Len=3
9	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	Entity=(person-32)|Lem=_|Len=2
10	_	_	ADV	RB	_	11	advmod	_	Lem=_|Len=5
11	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	conj	_	Lem=_|Len=4
12	_	_	ADP	IN	_	13	case	_	Lem=_|Len=2
13	_	_	SYM	SYM	_	11	obl	_	Entity=(object-57|Lem=_|Len=1
14	_	_	NUM	CD	NumType=Card	13	nummod	_	Entity=object-57)|Lem=_|Len=2
15	_	_	SCONJ	IN	_	18	mark	_	Lem=_|Len=4
16	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	Entity=(object-57)|Lem=_|Len=2|SpaceAfter=No
17	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	_	Lem=be|Len=2
18	_	_	SYM	SYM	_	11	advcl	_	Entity=(object-57|Lem=_|Len=1
19	_	_	NUM	CD	NumType=Card	18	nummod	_	Entity=object-57)|Lem=_|Len=2|SpaceAfter=No
20	_	_	PUNCT	,	_	21	punct	_	Lem=_|Len=1
21	_	_	ADV	RB	_	4	discourse	_	Lem=_|Len=5|SpaceAfter=No
22	_	_	PUNCT	.	_	4	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nummod	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	2	nsubj	_	Entity=(event-17)|Lem=*LOWER*|Len=4
2	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=mean|Len=5
3	_	_	SCONJ	IN	_	31	mark	_	Lem=_|Len=4
4	_	_	SCONJ	IN	_	7	mark	_	Entity=(event-22|Lem=_|Len=2
5	_	_	DET	DT	Definite=Def|PronType=Art	6	det	_	Entity=(organization-23|Lem=_|Len=3
6	_	_	NOUN	NN	Number=Sing	7	nsubj	_	Entity=organization-23)|Lem=_|Len=4|Typo=Yes
7	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	31	advcl	_	Lem=decide|Len=7
8	_	_	PART	TO	_	9	mark	_	Lem=_|Len=2
9	_	_	VERB	VB	VerbForm=Inf	7	xcomp	_	Lem=_|Len=5
10	_	_	SYM	SYM	_	9	obj	_	Entity=(quantity-24|Lem=_|Len=1
11	_	_	NUM	CD	NumType=Card	10	nummod	_	Entity=quantity-24)|Lem=100000000000000000|Len=23
12	_	_	PUNCT	-LRB-	_	15	punct	_	Lem=_|Len=1|SpaceAfter=No
13	_	_	NUM	CD	NumType=Card	14	compound	_	Entity=(quantity-24|Lem=_|Len=1
14	_	_	NOUN	NN	Number=Sing	15	nummod	_	Lem=_|Len=11
15	_	_	NOUN	NNS	Number=Plur	10	appos	_	Entity=quantity-24)|Lem=dollar|Len=7|SpaceAfter=No
16	_	_	PUNCT	-RRB-	_	15	punct	_	Lem=_|Len=1
17	_	_	ADP	IN	_	19	case	_	Lem=_|Len=2
18	_	_	DET	DT	Definite=Def|PronType=Art	19	det	_	Entity=(time-25|Lem=_|Len=3
19	_	_	NOUN	NN	Number=Sing	9	obl	_	Lem=_|Len=4
20	_	_	ADP	IN	_	22	case	_	Lem=_|Len=2
21	_	_	DET	DT	Definite=Ind|PronType=Art	22	det	_	Lem=_|Len=1
22	_	_	NOUN	NN	Number=Sing	19	nmod	_	Entity=time-25)|Lem=_|Len=4|SpaceAfter=No
23	_	_	PUNCT	,	_	7	punct	_	Lem=_|Len=1
24	_	_	DET	DT	Definite=Def|PronType=Art	25	det	_	Entity=(abstract-26|Lem=_|Len=3
25	_	_	NOUN	NN	Number=Sing	31	nsubj	_	Lem=_|Len=5
26	_	_	ADP	IN	_	28	case	_	Lem=_|Len=2
27	_	_	DET	DT	Definite=Def|PronType=Art	28	det	_	Entity=(abstract-27|Lem=_|Len=3
28	_	_	NOUN	NN	Number=Sing	25	nmod	_	Entity=abstract-26)abstract-27)|Lem=_|Len=6
29	_	_	AUX	MD	VerbForm=Fin	31	aux	_	Lem=_|Len=5
30	_	_	ADV	RB	_	31	advmod	_	Lem=_|Len=8
31	_	_	VERB	VB	VerbForm=Inf	2	ccomp	_	Lem=_|Len=5
32	_	_	ADV	RB	_	33	advmod	_	Lem=_|Len=6
33	_	_	ADV	RB	Degree=Pos	31	advmod	_	Lem=_|Len=4
34	_	_	PUNCT	-LRB-	_	35	punct	_	Lem=_|Len=1|SpaceAfter=No
35	_	_	ADV	RB	_	31	advmod	_	Lem=_|Len=8
36	_	_	PUNCT	:	_	35	punct	_	Lem=_|Len=3|SpaceAfter=No
37	_	_	PUNCT	-RRB-	_	35	punct	_	Entity=event-22)|Lem=_|Len=1|SpaceAfter=No
38	_	_	PUNCT	.	_	2	punct	_	Lem=_|Len=1

~~~


