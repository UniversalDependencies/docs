

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

2110 nodes (1%) are attached to their parents as `cop`.

1986 instances of `cop` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76445497630332.

The following 19 pairs of parts of speech are connected with `cop`: [ro-pos/NOUN]()-[ro-pos/VERB]() (758; 36% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (610; 29% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (266; 13% instances), [ro-pos/VERB]()-[ro-pos/AUX]() (222; 11% instances), [ro-pos/PRON]()-[ro-pos/VERB]() (83; 4% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (57; 3% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (30; 1% instances), [ro-pos/NUM]()-[ro-pos/VERB]() (30; 1% instances), [ro-pos/ADJ]()-[ro-pos/AUX]() (18; 1% instances), [ro-pos/PROPN]()-[ro-pos/VERB]() (13; 1% instances), [ro-pos/NOUN]()-[ro-pos/AUX]() (11; 1% instances), [ro-pos/DET]()-[ro-pos/VERB]() (3; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/PRON]()-[ro-pos/AUX]() (2; 0% instances), [ro-pos/ADV]()-[ro-pos/AUX]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/PART]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/SYM]()-[ro-pos/AUX]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	Una	unul	PRON	Pi3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	_
2	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	_	_
3	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	4	det	_	_
4	fată	fată	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
5	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	8	nmod:pmod	_	_
7	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	8	expl:pv	_	_
8	întâlnea	întâlni	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	acl	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
10	multe	mult	DET	Di3fp	Gender=Fem|Number=Plur|Person=3|PronType=Ind	11	det	_	_
11	ori	oară	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	8	nmod	_	_
12	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	coridoare	coridor	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	8	nmod	_	_
14	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Parlamentul	parlament	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	_
2	României	România	PROPN	Npfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	_
3	este	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	bicameral	bicameral	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
5	,	,	PUNCT	COMMA	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 cop	color:blue
1	Un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	4	det	_	_
2	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	3	det	_	_
3	doilea	doi	NUM	Moms-l	Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	4	nummod	_	_
4	Maiorescu	maiorescu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	8	nsubj	_	_
5	e	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
6	dureros	dureros	ADV	Rgp	Degree=Pos	8	advmod	_	_
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
8	necesar	necesar	ADV	Rgp	Degree=Pos	0	root	_	_
9	.	.	PUNCT	PERIOD	_	8	punct	_	_

~~~


