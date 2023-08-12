---
layout: base
title:  'Statistics of nmod:tmod in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gentle-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_gentle-dep-nmod-poss.html">nmod:poss</a></tt>.

23 nodes (0%) are attached to their parents as `nmod:tmod`.

22 instances of `nmod:tmod` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.82608695652174.

The following 9 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (6; 26% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (4; 17% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (4; 17% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (2; 9% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (2; 9% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 34 nmod:tmod	color:blue
1	Prilosec	prilosec	NOUN	NN	Number=Sing	0	root	0:root	Discourse=joint-other_m:22->8:3|Entity=(27-substance-new-cf5-1-sgl-Omeprazole)
2	20	20	NUM	CD	NumForm=Digit|NumType=Card	3	nummod	3:nummod	Entity=(28-substance-new-cf1-2-coref
3	mg	milligram	NOUN	NN	Number=Sing	4	obl:npmod	4:obl:npmod	Entity=28)
4	b.i.d.	b.i.d.	NOUN	NN	Number=Sing	1	nmod:tmod	1:nmod:tmod	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	6:punct	_
6	levothyroxine	levothyroxine	NOUN	NN	Number=Sing	1	conj	1:conj:and	Entity=(29-substance-new-cf6-1-sgl)
7	50	50	NUM	CD	NumForm=Digit|NumType=Card	8	nummod	8:nummod	Entity=(30-substance-new-cf7-2-sgl
8	mcg	might	NOUN	NN	Number=Sing	9	obl:npmod	9:obl:npmod	Entity=30)
9	q.d.	q.d.	NOUN	NN	Number=Sing	6	nmod:tmod	6:nmod:tmod	SpaceAfter=No
10	,	,	PUNCT	,	_	11	punct	11:punct	_
11	Lopressor	Lopressor	PROPN	NNP	Number=Sing	1	conj	1:conj:and	Entity=(31-substance-new-cf4-1-sgl-Metoprolol)
12	75	75	NUM	CD	NumForm=Digit|NumType=Card	13	nummod	13:nummod	Entity=(32-substance-new-cf8-2-sgl
13	mg	milligram	NOUN	NN	Number=Sing	14	obl:npmod	14:obl:npmod	Entity=32)
14	q.d.	q.d.	NOUN	NN	Number=Sing	11	nmod:tmod	11:nmod:tmod	SpaceAfter=No
15	,	,	PUNCT	,	_	16	punct	16:punct	_
16	vitamin	vitamin	NOUN	NN	Number=Sing	1	conj	1:conj:and	Entity=(33-substance-new-cf9-1,2-sgl-Vitamin_C
17	C	C	PROPN	NNP	Number=Sing	16	flat	16:flat	Entity=33)
18	500	500	NUM	CD	NumForm=Digit|NumType=Card	19	nummod	19:nummod	Entity=(34-substance-new-cf10-2-sgl
19	mg	milligram	NOUN	NN	Number=Sing	20	obl:npmod	20:obl:npmod	Entity=34)
20	q.d.	q.d.	NOUN	NN	Number=Sing	16	nmod:tmod	16:nmod:tmod	SpaceAfter=No
21	,	,	PUNCT	,	_	22	punct	22:punct	_
22	multivitamin	multivitamin	NOUN	NN	Number=Sing	1	conj	1:conj:and	Entity=(35-substance-new-cf11-1-sgl)
23	q.d.	q.d.	NOUN	NN	Number=Sing	22	nmod:tmod	22:nmod:tmod	SpaceAfter=No
24	,	,	PUNCT	,	_	25	punct	25:punct	_
25	simvastatin	simvastatin	NOUN	NN	Number=Sing	1	conj	1:conj:and	Entity=(36-substance-new-cf12-1-sgl)
26	20	20	NUM	CD	NumForm=Digit|NumType=Card	27	nummod	27:nummod	Entity=(28-substance-giv:act-cf1-2-coref
27	mg	milligram	NOUN	NN	Number=Sing	28	obl:npmod	28:obl:npmod	Entity=28)
28	q.d.	q.d.	NOUN	NN	Number=Sing	25	nmod:tmod	25:nmod:tmod	SpaceAfter=No
29	,	,	PUNCT	,	_	31	punct	31:punct	_
30	and	and	CCONJ	CC	_	31	cc	31:cc	_
31	prednisone	prednisone	NOUN	NN	Number=Sing	1	conj	1:conj:and	Entity=(16-substance-giv:inact-cf2-1-coref)
32	5	5	NUM	CD	NumForm=Digit|NumType=Card	33	nummod	33:nummod	Entity=(17-substance-giv:inact-cf3-2-coref
33	mg	milligram	NOUN	NN	Number=Sing	34	obl:npmod	34:obl:npmod	Entity=17)
34	q.o.d.	q.o.d.	NOUN	NN	Number=Sing	31	nmod:tmod	31:nmod:tmod	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 nmod:tmod	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	Discourse=joint-other_m:53->13:4|Entity=(1-abstract-giv:inact-cf1-2-coref
2	course	course	NOUN	NN	Number=Sing	4	nsubj	4:nsubj	Entity=1)
3	will	will	AUX	MD	Number=Sing|Person=3|VerbForm=Fin	4	aux	4:aux	_
4	meet	meet	VERB	VB	VerbForm=Inf	0	root	0:root	_
5	in	in	ADP	IN	_	6	case	6:case	_
6	Sage	Sage	PROPN	NNP	Number=Sing	4	obl	4:obl:in	Entity=(70-place-new-cf2-1-sgl|XML=<hi rend:::"bold">
7	5510	5510	NUM	CD	NumForm=Digit|NumType=Card	6	dep	6:dep	Entity=70)|XML=</hi>
8	on	on	ADP	IN	_	9	case	9:case	_
9	Tuesdays	Tuesday	ADJ	JJ	Degree=Pos	4	obl	4:obl:on	Entity=(71-time-new-cf4-1-sgl)
10	and	and	CCONJ	CC	_	11	cc	11:cc	_
11	Fridays	friday	NOUN	NNS	Number=Plur	9	conj	4:obl:on|9:conj:and	Entity=(72-time-new-cf3-1-sgl)
12	from	from	ADP	IN	_	13	case	13:case	_
13	10:30	10:30	NUM	CD	NumForm=Word|NumType=Card	4	obl	4:obl:from	Entity=(73-time-new-cf5-1-sgl|XML=<time when:::"22:30">
14	pm	pm	NOUN	NN	Number=Sing	13	nmod:tmod	13:nmod:tmod	Entity=73)|XML=</time>
15	-	-	SYM	SYM	_	16	case	16:case	_
16	12:35	12:35	NUM	CD	NumForm=Word|NumType=Card	4	obl	4:obl:minus	Entity=(74-time-new-cf6-1-sgl|XML=<time when:::"12:35">
17	pm	pm	NOUN	NN	Number=Sing	16	nmod:tmod	16:nmod:tmod	Entity=74)|SpaceAfter=No|XML=</time>
18	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod:tmod	color:blue
1	Open	Open	ADJ	NNP	Degree=Pos|Number=Sing	2	amod	2:amod	Discourse=organization-heading:2->13:6|Entity=(1-abstract-giv:act-cf1*-1,2,3-coref(2-abstract-new-cf4-1,2-coref
2	Source	Source	PROPN	NNP	Number=Sing	3	compound	3:compound	Entity=2)
3	Software	Software	PROPN	NNP	Number=Sing	0	root	0:root	Entity=1)
4	Spring	spring	NOUN	NN	Number=Sing	5	compound	5:compound	Entity=(3-time-new-cf2-2-coref(4-time-new-cf5-1-sgl)
5	Semester	semester	NOUN	NN	Number=Sing	3	nmod:tmod	3:nmod:tmod	_
6	2022	2022	NUM	CD	NumForm=Digit|NumType=Card	5	nmod:tmod	5:nmod:tmod	Entity=(5-time-new-cf3-1-coref)3)|XML=<date when:::"2022"></date>

~~~


