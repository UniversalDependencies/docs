

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [advmod]().

104 nodes (0%) are attached to their parents as `advmod:tmod`.

72 instances of `advmod:tmod` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.23076923076923.

The following 8 pairs of parts of speech are connected with `advmod:tmod`: [ro-pos/VERB]()-[ro-pos/ADV]() (80; 77% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (10; 10% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (4; 4% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (3; 3% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (2; 2% instances), [ro-pos/ADP]()-[ro-pos/ADV]() (2; 2% instances), [ro-pos/ADV]()-[ro-pos/ADV]() (2; 2% instances), [ro-pos/VERB]()-[ro-pos/CONJ]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod:tmod	color:blue
1	Puteți	putea	VERB	Vmm-2p	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	0	root	_	_
2	pe_urmă	pe_urmă	ADV	Rp	_	4	advmod:tmod	_	_
3	să	să	PART	Qs	Mood=Sub	4	mark	_	_
4	dormiți	dormi	VERB	Vmsp2p	Mood=Sub|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
5	până	până	ADP	Sp	AdpType=Prep	6	mark	_	_
6	poimâine	poimâine	ADV	Rp	_	4	advmod:tmod	_	_
7	dimineață	dimineață	ADV	Rp	_	6	advmod:tmod	_	_
8	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 advmod:tmod	color:blue
1	Oricum	oricum	ADV	Rgp	Degree=Pos	8	advmod	_	_
2	,	,	PUNCT	COMMA	_	1	punct	_	_
3	până	până	ADP	S	AdpType=Prep	8	advmod:tmod	_	_
4	acum	acum	ADV	Rgp	Degree=Pos	3	mwe	_	_
5	nu	nu	PART	Qz	Negative=Neg	8	neg	_	_
6	am	avea	AUX	Va--1	Person=1	8	aux	_	_
7	mai	mai	ADV	Rp	_	8	advmod	_	_
8	auzit	auzi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	cazuri	caz	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	8	nmod:pmod	_	_
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	strămutare	strămutare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	10	nmod	_	_
13	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	distanță	distanță	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	12	nmod	_	_
15	atât	atât	ADV	Rgp	Degree=Pos	17	advmod	_	_
16	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
17	mică	mic	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	_
18	.	.	PUNCT	PERIOD	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 advmod:tmod	color:blue
1	Sigur	sigur	ADV	Rgp	Degree=Pos	0	root	_	_
2	că	că	SCONJ	Csssp	Negative=Pos	4	mark	_	_
3	nu	nu	PART	Qz	Negative=Neg	4	neg	_	_
4	aveai	avea	VERB	Vmii2s	Mood=Ind|Number=Sing|Person=2|Tense=Imp|VerbForm=Fin	1	csubj	_	_
5	cum	cum	ADV	Rw	PronType=Int,Rel	4	advmod	_	_
6	ști	ști	VERB	Vmnp	Tense=Pres|VerbForm=Inf	4	ccomp	_	_
7	,	,	PUNCT	COMMA	_	10	punct	_	_
8	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
9	fiecare	fiecare	DET	Di3-sr---e	Case=Acc,Nom|Number=Sing|Person=3|Position=Prenom|PronType=Ind	10	det	_	_
10	moment	moment	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	6	advmod:tmod	_	_
11	,	,	PUNCT	COMMA	_	10	punct	_	_
12	dacă	dacă	SCONJ	Csssp	Negative=Pos	16	mark	_	_
13	ești	fi	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	16	auxpass	_	_
14	sau	sau	CONJ	Ccssp	Negative=Pos	16	cc	_	_
15	nu	nu	PART	Qz	Negative=Neg	16	conj	_	_
16	ascultat	ascultat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	ccomp	_	_
17	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


