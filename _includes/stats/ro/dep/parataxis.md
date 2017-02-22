

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

1459 nodes (1%) are attached to their parents as `parataxis`.

977 instances of `parataxis` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.31871144619602.

The following 41 pairs of parts of speech are connected with `parataxis`: [ro-pos/VERB]()-[ro-pos/NUM]() (592; 41% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (273; 19% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (228; 16% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (96; 7% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (40; 3% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (34; 2% instances), [ro-pos/ADJ]()-[ro-pos/NUM]() (22; 2% instances), [ro-pos/ADV]()-[ro-pos/NUM]() (18; 1% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (18; 1% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (17; 1% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (15; 1% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (13; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (10; 1% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (10; 1% instances), [ro-pos/PROPN]()-[ro-pos/NUM]() (7; 0% instances), [ro-pos/ADP]()-[ro-pos/NUM]() (5; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (5; 0% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (4; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (4; 0% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (4; 0% instances), [ro-pos/ADV]()-[ro-pos/ADV]() (3; 0% instances), [ro-pos/INTJ]()-[ro-pos/VERB]() (3; 0% instances), [ro-pos/NUM]()-[ro-pos/NOUN]() (3; 0% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (3; 0% instances), [ro-pos/PART]()-[ro-pos/VERB]() (3; 0% instances), [ro-pos/PROPN]()-[ro-pos/VERB]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (3; 0% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/AUX]()-[ro-pos/NUM]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (2; 0% instances), [ro-pos/NUM]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/PRON]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/PROPN]()-[ro-pos/PROPN]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/AUX]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/INTJ]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 parataxis	color:blue
1	3	3	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	4	parataxis	_	SpaceAfter=No
2	.	.	PUNCT	PERIOD	_	1	punct	_	_
3	Se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pass	_	_
4	spală	spăla	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	plăcile	placă	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	4	nsubj:pass	_	_
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
7	trei	trei	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	8	nummod	_	_
8	ori	oară	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	4	nmod:tmod	_	_
9	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	PBS	PBS	PROPN	Np	_	4	obl	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 parataxis	color:blue
1	Textul	text	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	_
2	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	dedesubt	dedesubt	ADV	Rgp	Degree=Pos	1	advmod	_	_
4	suna	suna	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
5	:	:	PUNCT	COLON	_	4	punct	_	_
6	FRATELE	frate	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubj	_	_
7	CEL	acela	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	det	_	_
8	MARE	mare	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
9	ESTE	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
10	CU	cu	ADP	Spsa	AdpType=Prep|Case=Acc	9	fixed	_	_
11	OCHII	ochi	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	9	fixed	_	_
12	PE	pe	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	TINE	tu	PRON	Pp2-sa--------s	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Strong	9	nmod:pmod	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis	color:blue
1	Erai	fi	AUX	Vaii2s	Mood=Ind|Number=Sing|Person=2|Tense=Imp|VerbForm=Fin	2	aux:pass	_	_
2	abolit	aboli	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	4	punct	_	_
4	anihilat	anihila	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	conj	_	SpaceAfter=No
5	:	:	PUNCT	COLON	_	2	punct	_	_
6	vaporizat	vaporiza	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	8	nsubj	_	_
7	era	fi	AUX	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	termenul	termen	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	2	parataxis	_	_
9	uzual	uzual	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


