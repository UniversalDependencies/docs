

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

171 nodes (1%) are attached to their parents as `discourse`.

154 instances of `discourse` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.0233918128655.

The following 15 pairs of parts of speech are connected with `discourse`: [uk-pos/VERB]()-[uk-pos/PART]() (61; 36% instances), [uk-pos/NOUN]()-[uk-pos/PART]() (38; 22% instances), [uk-pos/ADV]()-[uk-pos/PART]() (29; 17% instances), [uk-pos/ADJ]()-[uk-pos/PART]() (12; 7% instances), [uk-pos/PRON]()-[uk-pos/PART]() (8; 5% instances), [uk-pos/PROPN]()-[uk-pos/PART]() (7; 4% instances), [uk-pos/DET]()-[uk-pos/PART]() (5; 3% instances), [uk-pos/VERB]()-[uk-pos/INTJ]() (3; 2% instances), [uk-pos/CCONJ]()-[uk-pos/PART]() (2; 1% instances), [uk-pos/ADP]()-[uk-pos/PART]() (1; 1% instances), [uk-pos/NOUN]()-[uk-pos/INTJ]() (1; 1% instances), [uk-pos/NUM]()-[uk-pos/PART]() (1; 1% instances), [uk-pos/PART]()-[uk-pos/PART]() (1; 1% instances), [uk-pos/SCONJ]()-[uk-pos/PART]() (1; 1% instances), [uk-pos/VERB]()-[uk-pos/SYM]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	Ось	ось	PART	Q	_	2	discourse	_	_
2	пішов	піти	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	темп	темп	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc	2	nsubj	_	_
4	фокстроту	фокстрот	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc	3	nmod	_	SpaceAfter=No
5	.	.	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Ще	ще	PART	Q	_	3	discourse	_	_
2	перед	перед	ADP	Spsi	Case=Ins	3	case	_	_
3	відкриттям	відкриття	NOUN	Ncnsin	Animacy=Inan|Case=Ins|Gender=Neut	6	obl	_	_
4	біля	біля	ADP	Spsg	Case=Gen	5	case	_	_
5	каварень	каварня	NOUN	Ncfpgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur|Style=Odd	6	obl	_	_
6	утворювалася	утворюватися	VERB	Vmpis-sf	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	черга	черга	NOUN	Ncfsnn	Animacy=Inan|Case=Nom|Gender=Fem	6	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	U	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 discourse	color:blue
1	Колючим	колючий	ADJ	Ao-msif	Case=Ins|Gender=Masc	2	amod	_	_
2	дротом	дріт	NOUN	Ncmsin	Animacy=Inan|Case=Ins|Gender=Masc	4	obl	_	_
3	було	бути	AUX	Vapis-sn	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	4	aux	_	_
4	оточено	оточити	VERB	Vmeo	Aspect=Perf|Mood=Ind|Person=0|VerbForm=Fin	0	root	_	_
5	ще	ще	PART	Q	_	7	discourse	_	_
6	й	й	PART	Q	_	5	fixed	_	_
7	багато	багато	ADV	Rp	Degree=Pos	8	advmod	_	_
8	лісу	ліс	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc	4	obj	_	_
9	навколо	навколо	ADP	Spsg	Case=Gen	10	case	_	_
10	зони	зона	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	U	_	4	punct	_	_

~~~


