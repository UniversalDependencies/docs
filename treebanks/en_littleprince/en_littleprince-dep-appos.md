---
layout: base
title:  'Statistics of appos in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `appos`

This relation is universal.

7 nodes (0%) are attached to their parents as `appos`.

7 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.85714285714286.

The following 4 pairs of parts of speech are connected with `appos`: <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (4; 57% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-PROPN.html">PROPN</a></tt> (1; 14% instances), <tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt>-<tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt> (1; 14% instances), <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 appos	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
3	such	such	DET	PDT	_	6	advmod	_	_
4	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	_	_
5	secret	secret	ADJ	JJ	Degree=Pos	6	amod	_	_
6	place	place	NOUN	NN	Number=Sing	0	root	_	_
7	,	,	PUNCT	,	_	9	punct	_	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	_	_
9	land	land	NOUN	NN	Number=Sing	6	appos	_	_
10	of	of	ADP	IN	_	11	case	_	_
11	tears	tear	NOUN	NNS	Number=Plur	9	nmod	_	_
12	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 appos	color:blue
1	On	on	ADP	IN	_	3	case	_	_
2	one	one	NUM	CD	NumType=Card	3	nummod	_	_
3	star	star	NOUN	NN	Number=Sing	15	obl	_	_
4	,	,	PUNCT	,	_	6	punct	_	_
5	one	one	NUM	CD	NumType=Card	6	nummod	_	_
6	planet	planet	NOUN	NN	Number=Sing	3	appos	_	_
7	,	,	PUNCT	,	_	9	punct	_	_
8	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	9	nmod:poss	_	_
9	planet	planet	NOUN	NN	Number=Sing	3	appos	_	_
10	,	,	PUNCT	,	_	12	punct	_	_
11	the	the	DET	DT	Definite=Def|PronType=Art	12	det	_	_
12	Earth	Earth	PROPN	NNP	Number=Sing	3	appos	_	_
13	,	,	PUNCT	,	_	3	punct	_	_
14	there	there	PRON	EX	_	15	expl	_	_
15	was	be	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
16	a	a	DET	DT	Definite=Ind|PronType=Art	18	det	_	_
17	little	little	ADJ	JJ	Degree=Pos	18	amod	_	_
18	prince	prince	NOUN	NN	Number=Sing	15	nsubj	_	_
19	to	to	PART	TO	_	21	mark	_	_
20	be	be	AUX	VB	VerbForm=Inf	21	aux:pass	_	_
21	comforted	comfort	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	18	acl	_	_
22	.	.	PUNCT	.	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 26 appos	color:blue
1	"	"	PUNCT	``	_	9	punct	_	_
2	Five	five	NUM	CD	NumType=Card	4	nummod	_	_
3	-	-	PUNCT	HYPH	_	4	punct	_	_
4	hundred	hundred	NUM	CD	NumType=Card	9	compound	_	_
5	-	-	PUNCT	HYPH	_	4	punct	_	_
6	and	and	CCONJ	CC	_	8	cc	_	_
7	-	-	SYM	SYM	_	8	case	_	_
8	one	one	NUM	CD	NumType=Card	4	nmod	_	_
9	million	million	NUM	CD	NumType=Card	0	root	_	_
10	,	,	PUNCT	,	_	9	punct	_	_
11	six	six	NUM	CD	NumType=Card	13	nummod	_	_
12	-	-	PUNCT	HYPH	_	13	punct	_	_
13	hundred	hundred	NUM	CD	NumType=Card	18	compound	_	_
14	-	-	PUNCT	HYPH	_	18	punct	_	_
15	twenty	twenty	NUM	CD	NumType=Card	17	compound	_	_
16	-	-	PUNCT	HYPH	_	17	punct	_	_
17	two	two	NUM	CD	NumType=Card	18	compound	_	_
18	thousand	thousand	NUM	CD	NumType=Card	9	conj	_	_
19	,	,	PUNCT	,	_	26	punct	_	_
20	seven	seven	NUM	CD	NumType=Card	22	compound	_	_
21	-	-	PUNCT	HYPH	_	22	punct	_	_
22	hundred	hundred	NUM	CD	NumType=Card	26	nummod	_	_
23	-	-	PUNCT	HYPH	_	22	punct	_	_
24	thirty	thirty	NUM	CD	NumType=Card	26	nummod	_	_
25	-	-	PUNCT	HYPH	_	26	punct	_	_
26	one	one	NUM	CD	NumType=Card	18	appos	_	_
27	.	.	PUNCT	.	_	26	punct	_	_

~~~


