

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

128 nodes (1%) are attached to their parents as `cop`.

115 instances of `cop` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.0703125.

The following 12 pairs of parts of speech are connected with `cop`: [ro-pos/NOUN]()-[ro-pos/VERB]() (47; 37% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (36; 28% instances), [ro-pos/VERB]()-[ro-pos/AUX]() (14; 11% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (9; 7% instances), [ro-pos/PRON]()-[ro-pos/VERB]() (6; 5% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (4; 3% instances), [ro-pos/NOUN]()-[ro-pos/AUX]() (3; 2% instances), [ro-pos/NUM]()-[ro-pos/VERB]() (3; 2% instances), [ro-pos/ADJ]()-[ro-pos/AUX]() (2; 2% instances), [ro-pos/PROPN]()-[ro-pos/VERB]() (2; 2% instances), [ro-pos/NUM]()-[ro-pos/AUX]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cop	color:blue
1	Era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
2	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	3	det	_	_
3	plăcere	plăcere	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
4	să	să	PART	Qs	Mood=Sub	5	mark	_	_
5	asiști	asista	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	csubj	_	_
6	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
7	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	8	det	_	_
8	examinare	examinare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	5	nmod:pmod	_	_
9	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	10	det	_	_
10	lui	lui	DET	Ds3---s	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod	_	_
11	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cop	color:blue
1	N-	nu	PART	Qz	Negative=Neg	2	neg	_	_
2	am	avea	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	soră	soră	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	2	dobj	_	_
4	să	să	PART	Qs	Mood=Sub	6	mark	_	_
5	mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	6	dobj	_	_
6	cate	căta	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	2	advcl	_	_
7	,	,	PUNCT	COMMA	_	2	punct	_	_
8	maica	maica	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	10	nsubj	_	_
9	-i	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	slabă	slab	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	conj	_	_
11	,	,	PUNCT	COMMA	_	2	punct	_	_
12	nu	nu	PART	Qz	Negative=Neg	14	neg	_	_
13	mai	mai	ADV	Rp	_	14	advmod	_	_
14	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
15	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
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


