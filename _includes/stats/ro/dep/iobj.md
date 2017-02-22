

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

1558 nodes (1%) are attached to their parents as `iobj`.

891 instances of `iobj` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.02952503209243.

The following 19 pairs of parts of speech are connected with `iobj`: [ro-pos/VERB]()-[ro-pos/PRON]() (647; 42% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (630; 40% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (160; 10% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (54; 3% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (14; 1% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (11; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (11; 1% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (8; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (4; 0% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (4; 0% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (3; 0% instances), [ro-pos/ADV]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/AUX]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/PRON]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/CCONJ]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/ADJ]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 iobj	color:blue
1	Sunt	fi	AUX	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	0	root	_	_
3	partea	parte	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	fixed	_	_
4	ta	tău	DET	Ds2fsrs	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	3	det	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	6	punct	_	_
6	păruse	părea	VERB	Vmil3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	2	parataxis	_	_
7	a	a	PART	Qn	PartType=Inf	9	mark	_	SpaceAfter=No
8	-i	el	PRON	Pp3-sd--y-----w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	9	iobj	_	_
9	spune	spune	VERB	Vmnp	Tense=Pres|VerbForm=Inf	6	xcomp	_	_
10	O'Brien	O'Brien	PROPN	Np	_	6	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 iobj	color:blue
1	„	„	PUNCT	DBLQ	_	6	punct	_	SpaceAfter=No
2	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	tinerețe	tinerețe	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nmod:tmod	_	SpaceAfter=No
4	,	,	PUNCT	COMMA	_	3	punct	_	_
5	am	avea	AUX	Va--1	Person=1	6	aux	_	_
6	aruncat	arunca	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
7	discuției	discuție	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	6	iobj	_	_
8	cuvântul	cuvânt	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	6	obj	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	lirism	lirism	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	8	nmod	_	_
11	absolut	absolut	ADV	Rgp	Degree=Pos	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 iobj	color:blue
1	Istoricii	istoric	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	2	nsubj	_	_
2	au	avea	AUX	Va--3p	Number=Plur|Person=3	0	root	_	_
3	diferite	diferi	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	4	amod	_	_
4	teorii	teorie	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	2	obj	_	_
5	referitoare	referitor	ADJ	Afpf--n	Definite=Ind|Degree=Pos|Gender=Fem	4	advcl	_	_
6	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	originea	origine	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	5	iobj	_	_
8	numelui	nume	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	7	nmod	_	_
9	Iași	Iași	PROPN	Np	_	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


