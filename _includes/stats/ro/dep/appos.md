

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

1061 nodes (1%) are attached to their parents as `appos`.

1058 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.00471253534401.

The following 45 pairs of parts of speech are connected with `appos`: [ro-pos/NOUN]()-[ro-pos/NOUN]() (499; 47% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (203; 19% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (84; 8% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (37; 3% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (29; 3% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (28; 3% instances), [ro-pos/NUM]()-[ro-pos/NOUN]() (20; 2% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (17; 2% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (15; 1% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (13; 1% instances), [ro-pos/PROPN]()-[ro-pos/PROPN]() (12; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (11; 1% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (10; 1% instances), [ro-pos/PRON]()-[ro-pos/PRON]() (9; 1% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (7; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (6; 1% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (6; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (4; 0% instances), [ro-pos/NOUN]()-[ro-pos/X]() (4; 0% instances), [ro-pos/PRON]()-[ro-pos/PROPN]() (4; 0% instances), [ro-pos/PROPN]()-[ro-pos/VERB]() (4; 0% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (3; 0% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (3; 0% instances), [ro-pos/PROPN]()-[ro-pos/ADJ]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (3; 0% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (2; 0% instances), [ro-pos/ADV]()-[ro-pos/ADJ]() (2; 0% instances), [ro-pos/ADV]()-[ro-pos/PROPN]() (2; 0% instances), [ro-pos/PRON]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/PROPN]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (2; 0% instances), [ro-pos/ADP]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/DET]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/PROPN]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/X]() (1; 0% instances), [ro-pos/SYM]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/X]()-[ro-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	Era	fi	AUX	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	cop	_	_
2	doamna	doamnă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
3	Parsons	Parsons	PROPN	Np	_	2	nmod	_	SpaceAfter=No|ToDo=nmod
4	,	,	PUNCT	COMMA	_	5	punct	_	_
5	soția	soție	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	appos	_	_
6	unui	un	DET	Timso	Case=Dat,Gen|Gender=Masc|Number=Sing|PronType=Ind	7	det	_	_
7	vecin	vecin	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	palier	palier	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 appos	color:blue
1	Câteva	câtva	DET	Di3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Ind	2	det	_	_
2	personaje	personaj	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	3	nsubj	_	_
3	reapar	reapărea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	și	și	CCONJ	Crssp	Polarity=Pos	8	advmod	_	_
5	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
6	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	7	det	_	_
7	doilea	doi	NUM	Moms-l	Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	8	nummod	_	_
8	roman	roman	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
9	,	,	PUNCT	COMMA	_	10	punct	_	_
10	Sybaris	Sybaris	PROPN	Np	_	8	appos	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	Transilvania	Transilvania	PROPN	Np	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	COMMA	_	3	punct	_	_
3	parte	parte	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	appos	_	_
4	de-a	de-a	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
5	lungul	lung	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	fixed	_	_
6	Evului	ev	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	3	nmod	_	_
7	Mediu	mediu	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
8	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	9	det	_	_
9	Regatului	regat	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	3	nmod	_	_
10	Ungariei	Ungaria	PROPN	Npfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	9	nmod	_	_

~~~


