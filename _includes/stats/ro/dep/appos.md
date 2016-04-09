

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

81 nodes (1%) are attached to their parents as `appos`.

81 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.53086419753086.

The following 12 pairs of parts of speech are connected with `appos`: [ro-pos/NOUN]()-[ro-pos/NOUN]() (41; 51% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (15; 19% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (9; 11% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (5; 6% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (2; 2% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (2; 2% instances), [ro-pos/PRON]()-[ro-pos/PRON]() (2; 2% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/PRON]()-[ro-pos/NUM]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/ADJ]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 appos	color:blue
1	Are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	3	det	_	_
3	soră	soră	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	1	dobj	_	_
4	,	,	PUNCT	COMMA	_	6	punct	_	_
5	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	6	det	_	_
6	soră	soră	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	3	appos	_	_
7	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	12	iobj	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	mică	mic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	12	advcl	_	_
11	a	avea	AUX	Va--3s	Number=Sing|Person=3	12	aux	_	_
12	învățat	învăța	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	6	acl	_	_
13	-o	el	PRON	Pp3fsa--y-----w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	12	expl	_	_
14	să	să	PART	Qs	Mood=Sub	15	mark	_	_
15	fure	fura	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	12	ccomp	_	_
16	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	Dar	dar	CONJ	Ccssp	Negative=Pos	10	discourse	_	_
2	,	,	PUNCT	COMMA	_	4	punct	_	_
3	mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	4	expl:pv	_	_
4	rog	ruga	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	parataxis	_	_
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	pe	pe	ADP	Sp	AdpType=Prep	7	case	_	_
7	duduca	duducă	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	15	dobj	_	_
8	Luluța	Luluța	PROPN	Np	_	7	appos	_	_
9	nu	nu	PART	Qz	Negative=Neg	10	neg	_	_
10	știți	ști	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
11	unde	unde	ADV	Rw	PronType=Int,Rel	15	advmod	_	_
12	-aș	avea	AUX	Vaip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	putea	putea	VERB	Vmnp	Tense=Pres|VerbForm=Inf	15	aux	_	_
14	-o	el	PRON	Pp3fsa--------w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak	15	expl	_	_
15	găsi	găsi	VERB	Vmnp	Tense=Pres|VerbForm=Inf	10	ccomp	_	_
16	?	?	PUNCT	QUEST	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 appos	color:blue
1	Orașul	Orașul	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
2	se	se	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	3	expl:pv	_	_
3	află	află	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	râul	râul	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	nmod	_	_
6	Bahlui	Bahlui	PROPN	Np	_	5	nmod	_	_
7	,	,	PUNCT	COMMA	_	9	punct	_	_
8	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	9	det	_	_
9	afluent	afluent	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	6	appos	_	_
10	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	11	det	_	_
11	Jijiei	Jijiei	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	9	nmod	_	_
12	,	,	PUNCT	COMMA	_	15	punct	_	_
13	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	15	nsubj	_	_
14	se	se	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	15	expl:pv	_	_
15	varsă	varsă	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	_
16	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	_
17	râul	râul	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	15	nmod	_	_
18	Prut	Prut	PROPN	Np	_	17	nmod	_	_
19	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


