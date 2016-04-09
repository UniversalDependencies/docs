

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

246 nodes (2%) are attached to their parents as `acl`.

239 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.6219512195122.

The following 15 pairs of parts of speech are connected with `acl`: [ro-pos/NOUN]()-[ro-pos/VERB]() (179; 73% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (20; 8% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (13; 5% instances), [ro-pos/PRON]()-[ro-pos/VERB]() (9; 4% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (7; 3% instances), [ro-pos/NUM]()-[ro-pos/VERB]() (3; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (3; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (2; 1% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (2; 1% instances), [ro-pos/PROPN]()-[ro-pos/VERB]() (2; 1% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (2; 1% instances), [ro-pos/DET]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/INTJ]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl	color:blue
1	Va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	putea	putea	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
3	să	să	PART	Qs	Mood=Sub	4	mark	_	_
4	fugă	fugi	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
5	din	din	ADP	Sp	AdpType=Prep	6	case	_	_
6	turnul	turn	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nmod	_	_
7	unde	unde	ADV	Rw	PronType=Int,Rel	9	advmod	_	_
8	era	fi	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	auxpass	_	_
9	închisă	închis	VERB	Vmp--sf	Gender=Fem|Number=Sing|VerbForm=Part	6	acl	_	_
10	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl	color:blue
1	Holul	hol	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
2	blocului	bloc	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	nmod	_	_
3	mirosea	mirosi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	a	a	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	varză	varză	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	3	iobj	_	_
6	călită	călit	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	5	acl	_	_
7	și	și	CONJ	Crssp	Negative=Pos	5	cc	_	_
8	a	a	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	preșuri	preș	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	5	conj	_	_
10	vechi	vechi	ADJ	Afp-p-n	Definite=Ind|Degree=Pos|Number=Plur	9	amod	_	_
11	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl	color:blue
1	Întregul	Întregul	ADJ	Afpmsry	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	proces	proces	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	nsubj	_	_
3	este	este	AUX	Va--3s	Number=Sing|Person=3	4	cop	_	_
4	estimat	estimat	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	să	să	PART	Qs	Mood=Sub	7	mark	_	_
6	fie	fie	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	completat	completat	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	4	acl	_	_
8	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	1938	1938	NUM	M	NumType=Card	7	nmod:tmod	_	_
10	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


