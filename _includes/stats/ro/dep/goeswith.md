

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

275 nodes (0%) are attached to their parents as `goeswith`.

270 instances of `goeswith` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20363636363636.

The following 29 pairs of parts of speech are connected with `goeswith`: [ro-pos/ADV]()-[ro-pos/DET]() (79; 29% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (75; 27% instances), [ro-pos/NUM]()-[ro-pos/SYM]() (55; 20% instances), [ro-pos/NUM]()-[ro-pos/PUNCT]() (17; 6% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (7; 3% instances), [ro-pos/NOUN]()-[ro-pos/SYM]() (7; 3% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (4; 1% instances), [ro-pos/PROPN]()-[ro-pos/PROPN]() (3; 1% instances), [ro-pos/X]()-[ro-pos/X]() (3; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (2; 1% instances), [ro-pos/DET]()-[ro-pos/NOUN]() (2; 1% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (2; 1% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (2; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (2; 1% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/ADJ]()-[ro-pos/PUNCT]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/AUX]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/PUNCT]() (1; 0% instances), [ro-pos/PUNCT]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/PUNCT]()-[ro-pos/PUNCT]() (1; 0% instances), [ro-pos/X]()-[ro-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	Nu	nu	PART	Qz	Polarity=Neg	2	advmod	_	_
2	avea	avea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	nici	nici	ADV	Rz	PronType=Neg	5	det	_	_
4	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	3	goeswith	_	_
5	rost	rost	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	fixed	_	_
6	să	să	PART	Qs	Mood=Sub	7	mark	_	_
7	încerce	încerca	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	2	csubj	_	_
8	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	lift	lift	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 goeswith	color:blue
1	Seringile	seringă	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	2	nsubj	_	_
2	conțin	conține	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	0	0	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	6	nummod	_	_
4	,	,	PUNCT	COMMA	_	3	goeswith	_	_
5	5	5	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	3	goeswith	_	_
6	ml	ml	NOUN	Yn	Abbr=Yes	11	nmod	_	_
7	(	(	PUNCT	LPAR	_	9	punct	_	SpaceAfter=No
8	1000	1000	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	9	nummod	_	_
9	UI	UI	NOUN	Yn	Abbr=Yes	6	nmod	_	SpaceAfter=No
10	)	)	PUNCT	RPAR	_	9	punct	_	_
11	soluție	soluție	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	obl	_	SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 goeswith	color:blue
1	Riscul	risc	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
2	bacteriuriei	bacteriurie	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	_
3	crește	crește	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
5	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det	_	_
6	doua	doi	NUM	Mofs-l	Gender=Fem|Number=Sing|NumForm=Word|NumType=Ord	7	nummod	_	_
7	zi	zi	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	3	obl	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	cateterizare	cateterizare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	_
10	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	5-10	5-10	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	3	nummod	_	_
12	%	%	SYM	PERCENT	_	11	goeswith	_	_
13	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	zi	zi	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
15	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


