

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

1074 nodes (1%) are attached to their parents as `xcomp`.

969 instances of `xcomp` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.68808193668529.

The following 22 pairs of parts of speech are connected with `xcomp`: [ro-pos/VERB]()-[ro-pos/NOUN]() (352; 33% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (341; 32% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (230; 21% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (35; 3% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (34; 3% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (16; 1% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (12; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (10; 1% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (10; 1% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (9; 1% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (8; 1% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (5; 0% instances), [ro-pos/AUX]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/INTJ]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
2	anumite	anumit	DET	Di3fp	Gender=Fem|Number=Plur|Person=3|PronType=Ind	3	det	_	_
3	cazuri	caz	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	5	obl	_	_
4	coletul	colet	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	_
5	constituie	constitui	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	7	det	_	_
7	ambalaj	ambalaj	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	xcomp	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	vânzare	vânzare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Această	acest	DET	Dd3fsr---e	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|Position=Prenom|PronType=Dem	2	det	_	_
2	observație	observație	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	3	nsubj	_	_
3	rămâne	rămâne	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	adevărată	adevărat	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	3	xcomp	_	_
5	și	și	CCONJ	Crssp	Polarity=Pos	7	advmod	_	_
6	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	matematici	matematică	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 xcomp	color:blue
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


