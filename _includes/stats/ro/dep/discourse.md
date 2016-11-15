

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

37 nodes (0%) are attached to their parents as `discourse`.

21 instances of `discourse` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.02702702702703.

The following 14 pairs of parts of speech are connected with `discourse`: [ro-pos/CONJ]()-[ro-pos/VERB]() (14; 38% instances), [ro-pos/VERB]()-[ro-pos/CONJ]() (6; 16% instances), [ro-pos/VERB]()-[ro-pos/INTJ]() (5; 14% instances), [ro-pos/ADV]()-[ro-pos/INTJ]() (2; 5% instances), [ro-pos/ADJ]()-[ro-pos/CONJ]() (1; 3% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (1; 3% instances), [ro-pos/CONJ]()-[ro-pos/ADP]() (1; 3% instances), [ro-pos/CONJ]()-[ro-pos/ADV]() (1; 3% instances), [ro-pos/CONJ]()-[ro-pos/AUX]() (1; 3% instances), [ro-pos/CONJ]()-[ro-pos/INTJ]() (1; 3% instances), [ro-pos/INTJ]()-[ro-pos/NOUN]() (1; 3% instances), [ro-pos/SCONJ]()-[ro-pos/VERB]() (1; 3% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (1; 3% instances), [ro-pos/VERB]()-[ro-pos/SCONJ]() (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 discourse	color:blue
1	Și	și	CONJ	Crssp	Negative=Pos	0	root	_	_
2	a	avea	AUX	Va--3s	Number=Sing|Person=3	3	aux	_	_
3	despărțit	despărți	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	1	discourse	_	_
4	Dumnezeu	Dumnezeu	PROPN	Np	_	3	nsubj	_	_
5	lumina	lumină	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	3	dobj	_	_
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	întuneric	întuneric	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	3	nmod	_	_
8	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 discourse	color:blue
1	Și	și	CONJ	Crssp	Negative=Pos	9	discourse	_	_
2	cum	cum	ADV	Rw	PronType=Int,Rel	3	advmod	_	_
3	vede	vedea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	advcl	_	_
4	ea	el	PRON	Pp3fsr--------s	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Strong	3	nsubj	_	_
5	poiana	poiană	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	3	dobj	_	_
6	,	,	PUNCT	COMMA	_	3	punct	_	_
7	nu	nu	PART	Qz	Negative=Neg	8	neg	_	_
8	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	răbda	răbda	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
10	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	14	mark	_	_
11	a	a	PART	Qn	PartType=Inf	10	mwe	_	_
12	nu	nu	PART	Qz	Negative=Neg	14	neg	_	_
13	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	14	dobj	_	_
14	apropia	apropia	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	ccomp	_	_
15	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	16	case	_	_
16	apă	apă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	14	iobj	_	_
17	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	Vai	vai	INTJ	I	_	2	discourse	_	_
2	pare	părea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	aglomerat	aglomerat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	xcomp	_	_
4	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


