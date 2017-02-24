

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

17 nodes (0%) are attached to their parents as `discourse`.

9 instances of `discourse` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.41176470588235.

The following 10 pairs of parts of speech are connected with `discourse`: [ro-pos/VERB]()-[ro-pos/INTJ]() (4; 24% instances), [ro-pos/CCONJ]()-[ro-pos/VERB]() (3; 18% instances), [ro-pos/ADV]()-[ro-pos/INTJ]() (2; 12% instances), [ro-pos/VERB]()-[ro-pos/CCONJ]() (2; 12% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (1; 6% instances), [ro-pos/CCONJ]()-[ro-pos/ADP]() (1; 6% instances), [ro-pos/CCONJ]()-[ro-pos/ADV]() (1; 6% instances), [ro-pos/CCONJ]()-[ro-pos/INTJ]() (1; 6% instances), [ro-pos/INTJ]()-[ro-pos/NOUN]() (1; 6% instances), [ro-pos/SCONJ]()-[ro-pos/VERB]() (1; 6% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	Vai	vai	INTJ	I	_	2	discourse	_	_
2	pare	părea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	aglomerat	aglomerat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	xcomp	_	SpaceAfter=No
4	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 discourse	color:blue
1	Domnule	domn	NOUN	Ncmsvy	Case=Voc|Definite=Def|Gender=Masc|Number=Sing	7	vocative	_	_
2	sergent	sergent	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	1	punct	_	_
4	dar	dar	CCONJ	Ccssp	Polarity=Pos	0	root	_	_
5	n-	nu	PART	Qz-y	Polarity=Neg|Variant=Short	7	advmod	_	SpaceAfter=No
6	am	avea	AUX	Va--1	Person=1	7	aux	_	_
7	știut	ști	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	4	discourse	_	SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	Ei	ei	INTJ	I	_	7	discourse	_	_
2	bine	bine	ADV	Rgp	Degree=Pos	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	1	punct	_	_
4	nu	nu	PART	Qz	Polarity=Neg	7	advmod	_	_
5	a	avea	AUX	Va--3s	Number=Sing|Person=3	7	aux	_	_
6	fost	fi	AUX	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	7	cop	_	_
7	așa	așa	ADV	Rgp	Degree=Pos	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


