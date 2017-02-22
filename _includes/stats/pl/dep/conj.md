

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

2368 nodes (3%) are attached to their parents as `conj`.

2368 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.98648648648649.

The following 39 pairs of parts of speech are connected with `conj`: [pl-pos/VERB]()-[pl-pos/VERB]() (1031; 44% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (729; 31% instances), [pl-pos/ADJ]()-[pl-pos/ADJ]() (220; 9% instances), [pl-pos/PROPN]()-[pl-pos/PROPN]() (102; 4% instances), [pl-pos/ADJ]()-[pl-pos/VERB]() (74; 3% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (57; 2% instances), [pl-pos/VERB]()-[pl-pos/NOUN]() (27; 1% instances), [pl-pos/NOUN]()-[pl-pos/VERB]() (21; 1% instances), [pl-pos/PROPN]()-[pl-pos/NOUN]() (20; 1% instances), [pl-pos/NUM]()-[pl-pos/NUM]() (15; 1% instances), [pl-pos/NOUN]()-[pl-pos/PROPN]() (11; 0% instances), [pl-pos/PRON]()-[pl-pos/NOUN]() (7; 0% instances), [pl-pos/VERB]()-[pl-pos/AUX]() (6; 0% instances), [pl-pos/NUM]()-[pl-pos/NOUN]() (5; 0% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (4; 0% instances), [pl-pos/PRON]()-[pl-pos/PRON]() (4; 0% instances), [pl-pos/NOUN]()-[pl-pos/ADJ]() (3; 0% instances), [pl-pos/NOUN]()-[pl-pos/NUM]() (3; 0% instances), [pl-pos/VERB]()-[pl-pos/PRON]() (3; 0% instances), [pl-pos/X]()-[pl-pos/X]() (3; 0% instances), [pl-pos/DET]()-[pl-pos/DET]() (2; 0% instances), [pl-pos/NOUN]()-[pl-pos/PRON]() (2; 0% instances), [pl-pos/PRON]()-[pl-pos/VERB]() (2; 0% instances), [pl-pos/VERB]()-[pl-pos/PROPN]() (2; 0% instances), [pl-pos/ADJ]()-[pl-pos/AUX]() (1; 0% instances), [pl-pos/ADJ]()-[pl-pos/DET]() (1; 0% instances), [pl-pos/ADJ]()-[pl-pos/NUM]() (1; 0% instances), [pl-pos/ADJ]()-[pl-pos/SCONJ]() (1; 0% instances), [pl-pos/ADV]()-[pl-pos/VERB]() (1; 0% instances), [pl-pos/DET]()-[pl-pos/VERB]() (1; 0% instances), [pl-pos/NOUN]()-[pl-pos/ADV]() (1; 0% instances), [pl-pos/PART]()-[pl-pos/VERB]() (1; 0% instances), [pl-pos/PRON]()-[pl-pos/PROPN]() (1; 0% instances), [pl-pos/PROPN]()-[pl-pos/NUM]() (1; 0% instances), [pl-pos/PROPN]()-[pl-pos/PRON]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/ADV]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/DET]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/SCONJ]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 conj	color:blue
1	-	-	PUNCT	interp	_	2	punct	_	_
2	Pojedziecie	pojechać	VERB	fin:pl:sec:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	z	z	ADP	prep:inst:nwok	AdpType=Prep|Case=Ins|Variant=Short	4	case	_	_
4	nami	my	PRON	ppron12:pl:inst:m1:pri	Animacy=Hum|Case=Ins|Gender=Masc|Number=Plur|Person=1|PronType=Prs	2	obl	_	SpaceAfter=No
5	,	,	PUNCT	interp	_	6	punct	_	_
6	zabawicie	zabawić	VERB	fin:pl:sec:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	2	conj	_	_
7	się	się	PRON	qub	PronType=Prs|Reflex=Yes	6	expl:pv	_	SpaceAfter=No
8	.	.	PUNCT	interp	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 conj	color:blue
1	Będziesz	być	AUX	bedzie:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	2	aux	_	_
2	mieć	mieć	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf	0	root	_	_
3	prawdopodobnie	prawdopodobnie	ADV	adv:pos	Degree=Pos	2	advmod	_	_
4	zyski	zysk	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	2	obj	_	_
5	dzięki	dzięki	ADP	prep:dat	AdpType=Prep|Case=Dat	7	case	_	_
6	swej	swój	DET	adj:sg:dat:f:pos	Case=Dat|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	7	det	_	_
7	pracy	praca	NOUN	subst:sg:dat:f	Case=Dat|Gender=Fem|Number=Sing	2	obl	_	_
8	i	i	CCONJ	conj	_	9	cc	_	_
9	zawodowi	zawód	NOUN	subst:sg:dat:m3	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	interp	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 conj	color:blue
1	Zmiany	zmiana	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	_	_
2	wart	warta	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	1	nmod	_	_
3	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	coraz	coraz	ADV	adv	_	5	advmod	_	_
5	częstsze	częsty	ADJ	adj:pl:nom:f:com	Case=Nom|Gender=Fem|Number=Plur	0	root	_	_
6	i	i	CCONJ	conj	_	7	cc	_	_
7	szybsze	szybki	ADJ	adj:pl:nom:f:com	Case=Nom|Gender=Fem|Number=Plur	5	conj	_	SpaceAfter=No
8	.	.	PUNCT	interp	_	5	punct	_	_

~~~


