

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

374 nodes (3%) are attached to their parents as `aux`.

371 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27807486631016.

The following 9 pairs of parts of speech are connected with `aux`: [ro-pos/VERB]()-[ro-pos/AUX]() (297; 79% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (50; 13% instances), [ro-pos/NOUN]()-[ro-pos/AUX]() (10; 3% instances), [ro-pos/ADJ]()-[ro-pos/AUX]() (6; 2% instances), [ro-pos/AUX]()-[ro-pos/VERB]() (4; 1% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (2; 1% instances), [ro-pos/AUX]()-[ro-pos/AUX]() (2; 1% instances), [ro-pos/VERB]()-[ro-pos/PART]() (2; 1% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Așa	așa	ADV	Rgp	Degree=Pos	2	advmod	_	_
2	bine	bine	ADV	Rgp	Degree=Pos	11	advmod	_	_
3	ce	ce	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	6	dobj	_	_
4	v	v	PRON	Pp2-pa--------w	Case=Acc|Number=Plur|Person=2|PronType=Prs|Strength=Weak	6	iobj	_	_
5	-am	avea	AUX	Vaip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	tălmăcit	tălmăci	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	advcl	_	_
7	,	,	PUNCT	COMMA	_	2	punct	_	_
8	și	și	ADV	Rgp	Degree=Pos	10	advmod	_	_
9	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	10	det	_	_
10	copil	copil	NOUN	Ncmsrn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	13	nsubj	_	_
11	putea	putea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
12	să	să	PART	Qs	Mood=Sub	13	mark	_	_
13	înțeleagă	înțelege	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	11	csubj	_	_
14	.	.	PUNCT	PERIOD	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Nu	nu	PART	Qz	Negative=Neg	3	neg	_	_
2	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pv	_	_
3	putea	putea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	aux	_	_
4	hotărî	hotărî	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
5	să	să	PART	Qs	Mood=Sub	7	mark	_	_
6	-i	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	7	iobj	_	_
7	cumpere	cumpăra	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	4	ccomp	_	_
8	nimic	nimic	PRON	Pz3msr	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Neg	7	dobj	_	_
9	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	O	O	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	3	det	_	_
2	altă	altă	DET	Di3fsr---e	Case=Nom|Gender=Fem|Number=Sing|Person=3|Position=Prenom|PronType=Ind	3	amod	_	_
3	explicație	explicație	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
4	ar	ar	AUX	Va--3	Person=3	3	aux	_	_
5	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	3	auxpass	_	_
6	că	că	SCONJ	Csssp	Negative=Pos	8	mark	_	_
7	numele	numele	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	_
8	are	are	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	3	nsubj	_	_
9	originea	originea	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	8	dobj	_	_
10	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	tribul	tribul	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	iobj	_	_
12	alanic	alanic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	_
13	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	14	det	_	_
14	jassilor	jassilor	NOUN	Ncmpoy	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	11	nmod	_	_
15	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


