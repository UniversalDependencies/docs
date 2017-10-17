

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

24 nodes (0%) are attached to their parents as `orphan`.

19 instances of `orphan` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.83333333333333.

The following 14 pairs of parts of speech are connected with `orphan`: [en-pos/NOUN]()-[en-pos/NOUN]() (5; 21% instances), [en-pos/VERB]()-[en-pos/VERB]() (3; 13% instances), [en-pos/NOUN]()-[en-pos/ADV]() (2; 8% instances), [en-pos/PUNCT]()-[en-pos/NOUN]() (2; 8% instances), [en-pos/VERB]()-[en-pos/ADV]() (2; 8% instances), [en-pos/VERB]()-[en-pos/NOUN]() (2; 8% instances), [en-pos/ADV]()-[en-pos/NOUN]() (1; 4% instances), [en-pos/CCONJ]()-[en-pos/NOUN]() (1; 4% instances), [en-pos/DET]()-[en-pos/ADJ]() (1; 4% instances), [en-pos/NOUN]()-[en-pos/CCONJ]() (1; 4% instances), [en-pos/NUM]()-[en-pos/ADJ]() (1; 4% instances), [en-pos/NUM]()-[en-pos/NOUN]() (1; 4% instances), [en-pos/NUM]()-[en-pos/VERB]() (1; 4% instances), [en-pos/PROPN]()-[en-pos/NUM]() (1; 4% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 orphan	color:blue
1	Is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	there	there	PRON	EX	_	1	expl	_	_
3	an	a	DET	DT	Definite=Ind|PronType=Art	4	det	_	_
4	article	article	NOUN	NN	Number=Sing	1	nsubj	_	_
5	to	to	PART	TO	_	7	mark	_	_
6	be	be	AUX	VB	VerbForm=Inf	7	aux:pass	_	_
7	included	include	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	4	acl	_	_
8	in	in	ADP	IN	_	11	case	_	_
9	an	a	DET	DT	Definite=Ind|PronType=Art	11	det	_	_
10	Enron	Enron	PROPN	NNP	Number=Sing	11	compound	_	_
11	publication	publication	NOUN	NN	Number=Sing	7	obl	_	_
12	and	and	CCONJ	CC	_	16	cc	_	_
13	in	in	ADP	IN	_	14	case	_	_
14	addition	addition	NOUN	NN	Number=Sing	16	orphan	_	_
15	a	a	DET	DT	Definite=Ind|PronType=Art	16	det	_	_
16	letter	letter	NOUN	NN	Number=Sing	4	conj	_	_
17	to	to	PART	TO	_	19	mark	_	_
18	be	be	AUX	VB	VerbForm=Inf	19	aux:pass	_	_
19	sent	send	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	16	acl	_	_
20	under	under	ADP	IN	_	23	case	_	_
21	John	John	PROPN	NNP	Number=Sing	23	nmod:poss	_	SpaceAfter=No
22	's	's	PART	POS	_	21	case	_	_
23	name	name	NOUN	NN	Number=Sing	19	obl	_	_
24	(	(	PUNCT	-LRB-	_	34	punct	_	SpaceAfter=No
25	if	if	SCONJ	IN	_	26	mark	_	_
26	so	so	ADV	RB	_	34	advcl	_	SpaceAfter=No
27	,	,	PUNCT	,	_	34	punct	_	_
28	to	to	ADP	IN	_	29	case	_	_
29	whom	whom	PRON	WP	PronType=Int	34	obl	_	_
30	will	will	AUX	MD	VerbForm=Fin	34	aux	_	_
31	the	the	DET	DT	Definite=Def|PronType=Art	32	det	_	_
32	letter	letter	NOUN	NN	Number=Sing	34	nsubj:pass	_	_
33	be	be	AUX	VB	VerbForm=Inf	34	aux:pass	_	_
34	sent	send	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	1	conj	_	SpaceAfter=No
35	)	)	PUNCT	-RRB-	_	34	punct	_	SpaceAfter=No
36	?	?	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 orphan	color:blue
1	Gracee	Gracee	PROPN	NNP	Number=Sing	4	nsubj	_	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	more	more	ADV	RBR	_	4	advmod	_	_
4	excited	excited	ADJ	JJ	Degree=Pos	0	root	_	_
5	to	to	PART	TO	_	6	mark	_	_
6	see	see	VERB	VB	VerbForm=Inf	4	xcomp	_	_
7	her	she	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
8	than	than	SCONJ	IN	_	10	mark	10.1:mark	_
9	she	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	nsubj	10.1:nsubj	_
10	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	10.1:cop	_
10.1	excited	excited	ADJ	JJ	Degree=Pos	_	_	4:advcl	_
11	to	to	PART	TO	_	12	mark	_	_
12	see	see	VERB	VB	VerbForm=Inf	10	orphan	10.1:xcomp	_
13	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	12	obj	_	SpaceAfter=No
14	!!!!	!!!!	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 orphan	color:blue
1	Short	short	ADJ	JJ	Degree=Pos	2	amod	_	_
2	time	time	NOUN	NN	Number=Sing	3	obl:npmod	_	_
3	later	later	ADV	RBR	Degree=Cmp	7	advmod	_	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	_	_
5	guy	guy	NOUN	NN	Number=Sing	7	nsubj	_	_
6	would	would	AUX	MD	VerbForm=Fin	7	aux	_	_
7	leave	leave	VERB	VB	VerbForm=Inf	0	root	_	SpaceAfter=No
8	,	,	PUNCT	,	_	11	punct	_	_
9	then	then	ADV	RB	PronType=Dem	11	orphan	11.1:advmod	_
10	the	the	DET	DT	Definite=Def|PronType=Art	11	det	_	_
11	girl	girl	NOUN	NN	Number=Sing	7	parataxis	11.1:nsubj	SpaceAfter=No
11.1	leave	leave	VERB	VB	VerbForm=Inf	_	_	7:parataxis	_
12	.	.	PUNCT	.	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is universal.

10 nodes (0%) are attached to their parents as `orphan`.

9 instances of `orphan` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.3.

The following 7 pairs of parts of speech are connected with `orphan`: [en-pos/NOUN]()-[en-pos/NOUN]() (4; 40% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (1; 10% instances), [en-pos/NOUN]()-[en-pos/ADV]() (1; 10% instances), [en-pos/NOUN]()-[en-pos/NUM]() (1; 10% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (1; 10% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (1; 10% instances), [en-pos/SYM]()-[en-pos/NOUN]() (1; 10% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 19 orphan	color:blue
1	After	after	ADP	E	_	2	case	_	_
2	1608	1608	NUM	N	NumType=Card	5	obl	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	they	they	PRON	PE	Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
5	performed	perform	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	at	at	ADP	E	_	10	case	_	_
7	the	the	DET	RD	Definite=Def|PronType=Art	10	det	_	_
8	indoor	indoor	ADJ	A	Degree=Pos	10	amod	_	_
9	Blackfriars	Blackfriars	PROPN	SP	_	10	nmod	_	_
10	Theatre	theatre	NOUN	S	Number=Sing	5	obl	_	_
11	during	during	ADP	E	_	13	case	_	_
12	the	the	DET	RD	Definite=Def|PronType=Art	13	det	_	_
13	winter	winter	NOUN	S	Number=Sing	5	obl	_	_
14	and	and	CCONJ	CC	_	16	cc	_	_
15	the	the	DET	RD	Definite=Def|PronType=Art	16	det	_	_
16	Globe	globe	NOUN	S	Number=Sing	5	conj	_	_
17	during	during	ADP	E	_	19	case	_	_
18	the	the	DET	RD	Definite=Def|PronType=Art	19	det	_	_
19	summer	summer	NOUN	S	Number=Sing	16	orphan	_	SpaceAfter=No
20	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 21 orphan	color:blue
1	Honoré	Honoré	PROPN	SP	_	3	nmod	_	SpaceAfter=No
2	's	's	PART	PART	_	1	case	_	_
3	sisters	sister	NOUN	S	Number=Plur	8	nsubj	_	_
4	Laure	Laure	PROPN	SP	_	3	nmod	_	_
5	and	and	CCONJ	CC	_	6	cc	_	_
6	Laurence	Laurence	PROPN	SP	_	4	conj	_	_
7	were	be	AUX	VA	Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	8	aux	_	_
8	born	bear	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
9	in	in	ADP	E	_	10	case	_	_
10	1800	1800	NUM	N	NumType=Card	8	obl	_	_
11	and	and	CCONJ	CC	_	12	cc	_	_
12	1802	1802	NUM	N	NumType=Card	10	conj	_	SpaceAfter=No
13	,	,	PUNCT	FF	_	16	punct	_	_
14	and	and	CCONJ	CC	_	16	cc	_	_
15	his	his	DET	AP	Poss=Yes|PronType=Prs	16	nmod:poss	_	_
16	brother	brother	NOUN	S	Gender=Masc|Number=Sing	8	conj	_	_
17	Henry	Henry	PROPN	SP	_	16	nmod	_	SpaceAfter=No
18	-	-	PUNCT	FF	_	17	punct	_	SpaceAfter=No
19	François	François	PROPN	SP	_	17	flat:name	_	_
20	in	in	ADP	E	_	21	case	_	_
21	1807	1807	NUM	N	NumType=Card	16	orphan	_	SpaceAfter=No
22	.	.	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 21 orphan	color:blue
1	"	"	PUNCT	FB	_	7	punct	_	SpaceAfter=No
2	In	in	ADP	E	_	5	case	_	_
3	his	his	DET	AP	Poss=Yes|PronType=Prs	5	nmod:poss	_	_
4	own	own	ADJ	A	Degree=Pos	5	amod	_	_
5	novels	novel	NOUN	S	Number=Plur	7	obl	_	_
6	James	James	PROPN	SP	_	7	nsubj	_	_
7	explored	explore	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	more	more	ADJ	A	Degree=Cmp	7	obj	_	_
9	of	of	ADP	E	_	12	case	_	_
10	the	the	DET	RD	Definite=Def|PronType=Art	12	det	_	_
11	psychological	psychological	ADJ	A	Degree=Pos	12	amod	_	_
12	motives	motive	NOUN	S	Number=Plur	8	obl	_	_
13	of	of	ADP	E	_	15	case	_	_
14	the	the	DET	RD	Definite=Def|PronType=Art	15	det	_	_
15	characters	character	NOUN	S	Number=Plur	12	nmod	_	_
16	and	and	CCONJ	CC	_	17	cc	_	_
17	less	less	ADJ	A	Degree=Cmp	8	conj	_	_
18	of	of	ADP	E	_	21	case	_	_
19	the	the	DET	RD	Definite=Def|PronType=Art	21	det	_	_
20	historical	historic	ADJ	A	Degree=Pos	21	amod	_	_
21	sweep	sweep	NOUN	S	Number=Sing	17	orphan	_	_
22	exhibited	exhibit	VERB	V	Tense=Past|VerbForm=Part	21	acl	_	_
23	by	by	ADP	E	_	24	case	_	_
24	Balzac	Balzac	PROPN	SP	_	22	obl:agent	_	_
25	-	-	PUNCT	FF	_	7	punct	_	_
26	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	29	det	_	_
27	conscious	conscious	ADJ	A	Degree=Pos	29	amod	_	_
28	style	style	NOUN	S	Number=Sing	29	nmod	_	_
29	preference	preference	NOUN	S	Number=Sing	7	appos	_	SpaceAfter=No
30	.	.	PUNCT	FS	_	7	punct	_	_

~~~


