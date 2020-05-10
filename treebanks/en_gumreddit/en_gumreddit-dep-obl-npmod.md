---
layout: base
title:  'Statistics of obl:npmod in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `obl:npmod`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_gumreddit-dep-obl-tmod.html">obl:tmod</a></tt>.

42 nodes (0%) are attached to their parents as `obl:npmod`.

28 instances of `obl:npmod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.73809523809524.

The following 8 pairs of parts of speech are connected with `obl:npmod`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (19; 45% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (11; 26% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (6; 14% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 obl:npmod	color:blue
1	_	_	ADP	IN	_	3	case	_	Lem=*LOWER*|Len=2
2	_	_	DET	DT	Definite=Def|PronType=Art	3	det	_	Entity=(event-11|Lem=_|Len=3
3	_	_	NOUN	NN	Number=Sing	8	obl	_	Lem=_|Len=5
4	_	_	ADV	RB	_	3	advmod	_	Entity=event-11)|Lem=_|Len=4|SpaceAfter=No
5	_	_	PUNCT	,	_	3	punct	_	Lem=_|Len=1
6	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	7	nmod:poss	_	Entity=(person-7(person-3)|Lem=_|Len=2
7	_	_	NOUN	NN	Number=Sing	8	nsubj	_	Entity=person-7)|Lem=_|Len=4
8	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Lem=reiterate|Len=10
9	_	_	ADJ	JJ	Degree=Pos	10	amod	_	Entity=(time-12|Lem=_|Len=4
10	_	_	NOUN	NNS	Number=Plur	8	obl:npmod	_	Entity=time-12)|Lem=time|Len=5
11	_	_	ADP	IN	_	12	case	_	Lem=_|Len=2
12	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	8	obl	_	Entity=(person-3)|Lem=I|Len=2
13	_	_	ADV	RB	_	15	advmod	_	Lem=_|Len=4
14	_	_	SCONJ	WRB	PronType=Int	15	mark	_	Lem=_|Len=3
15	_	_	ADJ	JJ	Degree=Pos	8	ccomp	_	Lem=_|Len=9
16	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	Entity=(abstract-13)|Lem=_|Len=2
17	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	15	cop	_	Lem=be|Len=3
18	_	_	PART	TO	_	19	mark	_	Entity=(abstract-13|Lem=_|Len=2
19	_	_	VERB	VB	VerbForm=Inf	15	xcomp	_	Lem=_|Len=4
20	_	_	DET	DT	Definite=Ind|PronType=Art	22	det	_	Entity=(abstract-14|Lem=_|Len=1
21	_	_	ADJ	JJ	Degree=Pos	22	amod	_	Lem=_|Len=4
22	_	_	NOUN	NN	Number=Sing	19	obj	_	Entity=abstract-13)abstract-14)|Lem=_|Len=10|SpaceAfter=No
23	_	_	PUNCT	.	_	8	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 obl:npmod	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	_	Entity=(abstract-136|Lem=*LOWER*|Len=3
2	_	_	NUM	CD	NumType=Card	3	nummod	_	Lem=_|Len=3
3	_	_	NOUN	NN	Number=Sing	15	nsubj	_	Lem=_|Len=10
4	_	_	ADP	IN	_	6	case	_	Lem=_|Len=7
5	_	_	NOUN	NN	Number=Sing	6	compound	_	Entity=(object-137|Lem=_|Len=5
6	_	_	NOUN	NN	Number=Sing	3	nmod	_	Entity=object-137)|Lem=_|Len=8
7	_	_	CCONJ	CC	_	8	cc	_	Lem=_|Len=3
8	_	_	NOUN	NN	Number=Sing	6	conj	_	Entity=(substance-98)abstract-136)|Lem=_|Len=4
9	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	Lem=be|Len=2
10	_	_	SCONJ	IN	_	15	mark	_	Entity=(abstract-136|Lem=_|Len=4
11	_	_	SYM	SYM	_	15	nsubj	_	Entity=(object-138|Lem=_|Len=1
12	_	_	NUM	CD	NumType=Card	11	nummod	_	Lem=100000|Len=7
13	_	_	ADP	IN	_	14	case	_	Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	11	nmod	_	Entity=(object-139)object-138)|Lem=_|Len=4
15	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=weigh|Len=6
16	_	_	DET	DT	Definite=Ind|PronType=Art	17	det	_	Lem=_|Len=1
17	_	_	NOUN	NN	Number=Sing	18	obl:npmod	_	Lem=_|Len=3
18	_	_	ADJ	JJR	Degree=Cmp	21	advmod	_	Lem=_|Len=4
19	_	_	ADP	IN	_	18	fixed	_	Lem=_|Len=4
20	_	_	SYM	SYM	_	15	obj	_	Entity=(substance-140|Lem=_|Len=1
21	_	_	NUM	CD	NumType=Card	20	nummod	_	Lem=100000|Len=7
22	_	_	ADP	IN	_	23	case	_	Lem=_|Len=2
23	_	_	NOUN	NN	Number=Sing	20	nmod	_	Entity=(substance-98)substance-140)|Lem=_|Len=4
24	_	_	CCONJ	CC	_	28	cc	_	Lem=_|Len=3
25	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	_	Lem=be|Len=2
26	_	_	DET	DT	Definite=Ind|PronType=Art	27	det	_	Lem=_|Len=1
27	_	_	NOUN	NN	Number=Sing	28	obl:npmod	_	Lem=_|Len=3
28	_	_	ADJ	JJR	Degree=Cmp	15	conj	_	Lem=easy|Len=6
29	_	_	PART	TO	_	30	mark	_	Lem=_|Len=2
30	_	_	VERB	VB	VerbForm=Inf	28	xcomp	_	Lem=_|Len=4
31	_	_	ADV	RB	_	28	advmod	_	Entity=abstract-136)|Lem=_|Len=3|SpaceAfter=No
32	_	_	PUNCT	.	_	15	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 obl:npmod	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	11	obl:npmod	_	Lem=*LOWER*|Len=4
2	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	fixed	_	Lem=be|Len=2|SpaceAfter=No
3	_	_	PUNCT	,	_	1	punct	_	Lem=_|Len=1
4	_	_	SCONJ	IN	_	11	mark	_	Lem=_|Len=5
5	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	8	nmod:poss	_	Entity=(object-2(person-3)|Lem=_|Len=2
6	_	_	ADV	RB	_	7	advmod	_	Lem=_|Len=6
7	_	_	ADJ	JJ	Degree=Pos	8	amod	_	Lem=_|Len=3
8	_	_	NOUN	NN	Number=Sing	11	nsubj	_	Lem=_|Len=4
9	_	_	ADP	IN	_	10	case	_	Lem=_|Len=2
10	_	_	NOUN	NN	Number=Sing	8	nmod	_	Entity=object-2)|Lem=_|Len=5
11	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Lem=slam|Len=7
12	_	_	ADP	RP	_	11	compound:prt	_	Lem=_|Len=2
13	_	_	ADP	IN	_	14	case	_	Lem=_|Len=7
14	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	11	obl	_	Entity=(object-4)|Lem=_|Len=2
15	_	_	CCONJ	CC	_	17	cc	_	Lem=_|Len=3
16	_	_	ADV	RB	_	17	advmod	_	Lem=_|Len=6
17	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	11	conj	_	Lem=slide|Len=4
18	_	_	ADV	RB	_	17	advmod	_	Lem=_|Len=4
19	_	_	VERB	VBG	VerbForm=Ger	17	advcl	_	Lem=leave|Len=7
20	_	_	DET	DT	Definite=Ind|PronType=Art	21	det	_	Entity=(substance-46|Lem=_|Len=1
21	_	_	NOUN	NN	Number=Sing	19	obj	_	Lem=_|Len=5
22	_	_	ADP	IN	_	24	case	_	Lem=_|Len=2
23	_	_	ADJ	JJ	Degree=Pos	24	amod	_	Lem=_|Len=6
24	_	_	NOUN	NN	Number=Sing	21	nmod	_	Entity=substance-46)|Lem=_|Len=5
25	_	_	ADP	IN	_	27	case	_	Lem=_|Len=2
26	_	_	PRON	PRP$	Gender=Neut|Number=Sing|Person=3|Poss=Yes|PronType=Prs	27	nmod:poss	_	Entity=(object-2)|Lem=_|Len=3
27	_	_	NOUN	NN	Number=Sing	24	nmod	_	Lem=_|Len=4|SpaceAfter=No
28	_	_	PUNCT	.	_	11	punct	_	Lem=_|Len=1

~~~


