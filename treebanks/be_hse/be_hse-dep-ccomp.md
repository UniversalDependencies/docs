---
layout: base
title:  'Statistics of ccomp in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `ccomp`

This relation is universal.

64 nodes (0%) are attached to their parents as `ccomp`.

63 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.375.

The following 5 pairs of parts of speech are connected with `ccomp`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (49; 77% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt> (5; 8% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (5; 8% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (4; 6% instances), <tt><a href="be_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 ccomp	color:blue
1	Як	як	ADV	WRB	Degree=Pos	3	advmod	_	_
2	гэта	гэта	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
3	скончылася	скончыцца	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	5	ccomp	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	можаце	магчы	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	бачыць	бачыць	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	5	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 ccomp	color:blue
1	Раптам	раптам	ADV	RB	Degree=Pos	2	advmod	_	_
2	аказалася	аказацца	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	14	punct	_	_
4	што	што	SCONJ	IN	_	14	mark	_	_
5	“	“	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No
6	мёртвая	мёртвы	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	SpaceAfter=No
7	”	”	PUNCT	PUNCT	_	6	punct	_	_
8	мова	мова	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	14	nsubj	_	_
9	зусім	зусім	ADV	RB	Degree=Pos	10	advmod	_	_
10	не	не	PART	UH	Polarity=Neg	11	advmod	_	_
11	такая	такi	DET	DT	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	14	det	_	_
12	ўжо	ўжо	PART	UH	_	14	advmod:discourse	_	_
13	і	і	PART	UH	_	14	advmod:discourse	_	_
14	мёртвая	мёртвы	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	ccomp	_	SpaceAfter=No
15	!	!	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 ccomp	color:blue
1	І	і	CCONJ	CC	_	3	cc	_	_
2	мне	я	PRON	PRP	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	obj	_	_
3	здаецца	здавацца	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	10	punct	_	_
5	што	што	SCONJ	IN	_	10	mark	_	_
6	ў	ў	ADP	IN	_	7	case	_	_
7	вас	вы	PRON	PRP	Case=Gen|Number=Plur|Person=2|PronType=Prs	10	nmod	_	_
8	тая	той	DET	DT	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	10	det	_	_
9	ж	ж	PART	UH	_	8	advmod:discourse	_	_
10	сітуацыя	сітуацыя	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


