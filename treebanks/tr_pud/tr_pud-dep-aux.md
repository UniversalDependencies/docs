---
layout: base
title:  'Statistics of aux in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `aux`

This relation is universal.

21 nodes (0%) are attached to their parents as `aux`.

19 instances of `aux` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38095238095238.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (9; 43% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (6; 29% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (3; 14% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (2; 10% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Teoride	Teori	NOUN	NN	Case=Loc|Number=Sing	8	advmod	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	eğer	eğer	SCONJ	SCONJ	_	5	advmod:emph	_	_
4	doğru	doğru	ADV	RB	Number=Sing	5	advmod	_	_
5	yapılırsa	yap	VERB	VB	Aspect=Hab|Mood=CndGen|Number=Sing|Person=3|Tense=Pres|Voice=Pass	8	advcl	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	anlaşılamaz	anlaşıla	VERB	VB	Aspect=Hab|Mood=AbilGen|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|Voice=Pass	8	aux	_	_
8	olmalı	ol	VERB	VB	Mood=Nec|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Paris	Paris	PROPN	PROPN	Number=Sing	2	compound	_	Proper=True
2	Anlaşması'nı	Anlaşması'n	NOUN	VN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	xcomp	_	Proper=True
3	yapmış	yap	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	4	aux	_	_
4	olmaları	ol	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Plur|Person[psor]=3|Tense=Pres|VerbForm=Ger	5	csubj	_	_
5	harika	harika	ADJ	JJ	Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	,	_	17	punct	_	_
7	ama	ama	ADV	RB	_	17	cc	_	_
8	şu	şu	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	9	det	_	_
9	an	_	NOUN	NN	Number=Sing	11	amod	_	_
10	ki	_	ADP	JJ	_	9	case	_	_
11	katkıları	katkı	NOUN	NN	Case=Nom|Number=Plur|Number[psor]=Plur|Person[psor]=3	17	nsubj	_	_
12	1,5	1,5	NUM	CD	Number=Sing	13	nummod	_	_
13	derece	derece	NOUN	NN	Number=Sing	14	compound	_	_
14	hedefinin	hedef	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	15	nmod:poss	_	_
15	yakınından	yakın	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	17	advmod	_	_
16	bile	bile	ADV	RB	_	15	advmod:emph	_	_
17	geçmiyor	geç	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	conj	_	SpaceAfter=No
18	.	.	PUNCT	.	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	Sezar	Sezar	PROPN	PROPN	Case=Nom|Number=Sing	12	nsubj	_	Proper=True
2	o	o	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	3	det	_	_
3	dönemde	dönem	NOUN	NN	Case=Loc|Number=Sing	12	obl:tmod	_	_
4	görev	görev	NOUN	NN	Number=Sing	5	compound	_	_
5	süresinin	süre	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obj	_	_
6	tamamlamış	tamamla	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	7	aux	_	_
7	olan	ol	ADJ	VJ	Number=Sing|Polarity=Pos	8	acl:relcl	_	_
8	Curio	Curio	PROPN	PROPN	Number=Sing	9	compound	_	Proper=True
9	tarafından	taraf	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	advmod	_	_
10	Pompey'in	Pompey	PROPN	PROPN	Case=Gen|Number=Sing	11	nmod:poss	_	Proper=True
11	eylemlerinden	eylem	NOUN	NN	Case=Abl|Number=Plur|Number[psor]=Sing|Person[psor]=3	12	advmod	_	_
12	haberdar	haberdar	ADJ	JJ	Number=Sing	0	root	_	_
13	edilmiştir	et	AUX	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past|Voice=Pass	12	cop	_	SpaceAfter=No
14	.	.	PUNCT	.	_	12	punct	_	_

~~~


