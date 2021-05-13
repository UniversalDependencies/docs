---
layout: base
title:  'Statistics of aux in UD_Kurmanji-MG'
udver: '2'
---

## Treebank Statistics: UD_Kurmanji-MG: Relations: `aux`

This relation is universal.

147 nodes (1%) are attached to their parents as `aux`.

144 instances of `aux` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47619047619048.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt> (122; 83% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-PART.html">PART</a></tt> (17; 12% instances), <tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt>-<tt><a href="kmr_mg-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="kmr_mg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 aux	color:blue
1	Qesirekê	qesir	NOUN	n	Case=Con|Gender=Fem|Number=Sing|PronType=Ind	11	nsubj	_	_
2	kevinare	kevnare	ADJ	adj	Degree=Pos	1	amod	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	1	punct	_	_
4	berî	berî	ADP	pr	AdpType=Prep	9	case	_	_
5	du	du	NUM	num	Case=Nom|Definite=Def|Number=Plur|NumType=Card	6	compound	_	_
6	sed	sed	NUM	num	Number=Plur|NumType=Card	9	nummod	_	_
7	û	û	CCONJ	cnjcoo	_	6	cc	_	_
8	hin	hin	DET	det	Gender=Fem,Masc|Number=Plur,Sing|PronType=Ind	9	det	_	_
9	salan	sal	NOUN	n	Case=Acc|Definite=Def|Gender=Fem|Number=Plur	11	nmod	_	_
10	hate	hatin	VERB	vblex	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	aux	_	_
11	ava kirin	avakirin	VERB	vblex	VerbForm=Inf	0	root	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Honê	Hûn	PRON	prn	Case=Nom|Gender=Fem,Masc|Number=Plur|Person=2|PronType=Prs	5	nsubj	_	_
2	_	dê	PART	fut	Tense=Fut	5	aux	_	_
3	bi	bi	ADP	pr	AdpType=Prep	4	case	_	_
4	rahetî	rahetî	NOUN	n	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	5	nmod	_	_
5	bikarin	karîn	VERB	vblex	Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin	0	root	_	_
6	bi	bi	ADP	pr	AdpType=Prep	7	case	_	_
7	îşê	îş	NOUN	n	Case=Con|Definite=Def|Gender=Masc|Number=Sing	10	nmod	_	_
8	xwe	xwe	PRON	prn	Gender=Fem,Masc|Number=Plur,Sing|PronType=Prs|Reflex=Yes	7	nmod:poss	_	_
9	mijûl	mijûl	ADJ	adj	Degree=Pos	10	compound:lvc	_	_
10	bibin	bûn	AUX	vbcop	Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 aux	color:blue
1	Di	di	ADP	pr	AdpType=Prep	3	case	_	_
2	vê	ev	DET	det	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	çendê	çend	NOUN	n	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	6	nmod	_	_
4	de	de	ADP	post	AdpType=Post	3	case	_	_
5	ez	ez	PRON	prn	Case=Nom|Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	dikim	kirin	VERB	vblex	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	bizewicim	zewicîn	VERB	vblex	Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	ccomp	_	SpaceAfter=No
8	,	,	PUNCT	cm	_	13	punct	_	_
9	hingê	hingê	ADV	adv	_	13	mark	_	_
10	min	ez	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	13	nmod	_	_
11	pêre	pêre	NOUN	n	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	13	nsubj	_	_
12	de	dê	PART	fut	Tense=Fut	13	aux	_	_
13	hebit	hebûn	AUX	vbhaver	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	7	advcl	_	SpaceAfter=No
14	.	.	PUNCT	sent	_	6	punct	_	_

~~~


