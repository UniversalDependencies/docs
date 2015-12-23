

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [acl]().

2436 nodes (1%) are attached to their parents as `acl:relcl`.

2435 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.17282430213465.

The following 40 pairs of parts of speech are connected with `acl:relcl`: [en-pos/NOUN]()-[en-pos/VERB]() (1699; 70% instances), [en-pos/PRON]()-[en-pos/VERB]() (188; 8% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (118; 5% instances), [en-pos/PROPN]()-[en-pos/VERB]() (98; 4% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (66; 3% instances), [en-pos/DET]()-[en-pos/VERB]() (46; 2% instances), [en-pos/ADJ]()-[en-pos/VERB]() (29; 1% instances), [en-pos/ADV]()-[en-pos/VERB]() (28; 1% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (20; 1% instances), [en-pos/NUM]()-[en-pos/VERB]() (17; 1% instances), [en-pos/NOUN]()-[en-pos/AUX]() (15; 1% instances), [en-pos/NOUN]()-[en-pos/ADV]() (14; 1% instances), [en-pos/VERB]()-[en-pos/VERB]() (14; 1% instances), [en-pos/NOUN]()-[en-pos/ADP]() (13; 1% instances), [en-pos/PROPN]()-[en-pos/ADJ]() (11; 0% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (9; 0% instances), [en-pos/PRON]()-[en-pos/ADJ]() (4; 0% instances), [en-pos/PRON]()-[en-pos/ADV]() (4; 0% instances), [en-pos/PRON]()-[en-pos/NOUN]() (4; 0% instances), [en-pos/VERB]()-[en-pos/NOUN]() (4; 0% instances), [en-pos/ADV]()-[en-pos/ADJ]() (3; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (3; 0% instances), [en-pos/SYM]()-[en-pos/VERB]() (3; 0% instances), [en-pos/ADV]()-[en-pos/ADV]() (2; 0% instances), [en-pos/ADV]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/DET]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/DET]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/NUM]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/SYM]() (2; 0% instances), [en-pos/NUM]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/PRON]()-[en-pos/AUX]() (2; 0% instances), [en-pos/VERB]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/ADP]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/ADV]()-[en-pos/PRON]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/DET]() (1; 0% instances), [en-pos/NUM]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/PRON]()-[en-pos/ADP]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl:relcl	color:blue
1	Every	every	DET	DT	_	2	det	_	_
2	move	move	NOUN	NN	Number=Sing	5	nsubj	_	_
3	Google	Google	PROPN	NNP	Number=Sing	4	nsubj	_	_
4	makes	make	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	_
5	brings	bring	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	this	this	DET	DT	Number=Sing|PronType=Dem	8	det	_	_
7	particular	particular	ADJ	JJ	Degree=Pos	8	amod	_	_
8	future	future	NOUN	NN	Number=Sing	5	dobj	_	_
9	closer	closer	ADV	RBR	Degree=Cmp	5	advmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	Malach	Malach	PROPN	NNP	Number=Sing	6	vocative	_	SpaceAfter=No
2	,	,	PUNCT	,	_	6	punct	_	_
3	What	what	PRON	WP	PronType=Int	6	nsubj	_	_
4	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	5	nsubj	_	_
5	say	say	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
6	makes	make	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	sense	sense	NOUN	NN	Number=Sing	6	dobj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 acl:relcl	color:blue
1	Please	please	INTJ	UH	_	2	discourse	_	_
2	let	let	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	_
3	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	4	dobj	_	_
4	know	know	VERB	VB	VerbForm=Inf	2	xcomp	_	_
5	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	_	_
6	date	date	NOUN	NN	Number=Sing	4	dobj	_	_
7	and	and	CONJ	CC	_	6	cc	_	_
8	time	time	NOUN	NN	Number=Sing	6	conj	_	_
9	that	that	DET	WDT	PronType=Rel	11	nsubj	_	_
10	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	convenient	convenient	ADJ	JJ	Degree=Pos	6	acl:relcl	_	_
12	for	for	ADP	IN	_	13	case	_	_
13	you	you	PRON	PRP	Case=Acc|Person=2|PronType=Prs	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


