

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

5608 nodes (2%) are attached to their parents as `cop`.

5365 instances of `cop` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16422967189729.

The following 13 pairs of parts of speech are connected with `cop`: [en-pos/ADJ]()-[en-pos/VERB]() (2804; 50% instances), [en-pos/NOUN]()-[en-pos/VERB]() (1997; 36% instances), [en-pos/ADV]()-[en-pos/VERB]() (286; 5% instances), [en-pos/PROPN]()-[en-pos/VERB]() (187; 3% instances), [en-pos/PRON]()-[en-pos/VERB]() (133; 2% instances), [en-pos/NUM]()-[en-pos/VERB]() (92; 2% instances), [en-pos/VERB]()-[en-pos/VERB]() (35; 1% instances), [en-pos/SYM]()-[en-pos/VERB]() (23; 0% instances), [en-pos/DET]()-[en-pos/VERB]() (22; 0% instances), [en-pos/ADP]()-[en-pos/VERB]() (17; 0% instances), [en-pos/VERB]()-[en-pos/AUX]() (5; 0% instances), [en-pos/X]()-[en-pos/VERB]() (5; 0% instances), [en-pos/INTJ]()-[en-pos/VERB]() (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	3	nsubj	_	SpaceAfter=No
2	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	right	right	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	folks	folks	NOUN	UH	_	3	parataxis	_	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
2	was	be	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	_
3	on	on	ADP	IN	_	5	case	_	_
4	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	way	way	NOUN	NN	Number=Sing	0	root	_	_
6	to	to	ADP	IN	_	8	case	_	_
7	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	8	nmod:poss	_	_
8	wedding	wedding	NOUN	NN	Number=Sing	5	nmod	_	_
9	fearing	fear	VERB	VBG	VerbForm=Ger	1	acl	_	_
10	death	death	NOUN	NN	Number=Sing	9	dobj	_	SpaceAfter=No
11	,	,	PUNCT	,	_	9	punct	_	_
12	basically	basically	ADV	RB	_	9	advmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	_	SpaceAfter=No
14	"	"	PUNCT	''	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Here	here	ADV	RB	PronType=Dem	0	root	_	SpaceAfter=No
2	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	an	a	DET	DT	Definite=Ind|PronType=Art	4	det	_	_
4	excerpt	excerpt	NOUN	NN	Number=Sing	1	nsubj	_	_
5	from	from	ADP	IN	_	7	case	_	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	_	_
7	article	article	NOUN	NN	Number=Sing	4	nmod	_	SpaceAfter=No
8	:	:	PUNCT	:	_	1	punct	_	_

~~~


