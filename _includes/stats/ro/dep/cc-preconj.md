

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [cc]().

86 nodes (0%) are attached to their parents as `cc:preconj`.

74 instances of `cc:preconj` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.44186046511628.

The following 14 pairs of parts of speech are connected with `cc:preconj`: [ro-pos/VERB]()-[ro-pos/CCONJ]() (35; 41% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (16; 19% instances), [ro-pos/NOUN]()-[ro-pos/CCONJ]() (15; 17% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (5; 6% instances), [ro-pos/ADJ]()-[ro-pos/CCONJ]() (2; 2% instances), [ro-pos/ADV]()-[ro-pos/CCONJ]() (2; 2% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (2; 2% instances), [ro-pos/PRON]()-[ro-pos/CCONJ]() (2; 2% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (2; 2% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/ADP]()-[ro-pos/CCONJ]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/CCONJ]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/PART]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Fie	fie	CCONJ	Ccssp	Polarity=Pos	3	cc:preconj	_	_
2	că	că	SCONJ	Csssp	Polarity=Pos	3	mark	_	_
3	scria	scrie	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	csubj	_	_
4	JOS	jos	ADV	Rgp	Degree=Pos	3	ccomp	_	_
5	FRATELE	frate	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	obj	_	_
6	CEL	acela	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	det	_	_
7	MARE	mare	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	12	punct	_	_
9	fie	fie	CCONJ	Ccssp	Polarity=Pos	12	cc	_	_
10	că	că	SCONJ	Csssp	Polarity=Pos	12	mark	_	_
11	nu	nu	PART	Qz	Polarity=Neg	12	advmod	_	_
12	scria	scrie	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	conj	_	SpaceAfter=No
13	,	,	PUNCT	COMMA	_	3	punct	_	_
14	era	fi	AUX	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	cop	_	_
15	totuna	totuna	ADV	Rgp	Degree=Pos	0	root	_	SpaceAfter=No
16	.	.	PUNCT	PERIOD	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cc:preconj	color:blue
1	Aspectul	aspect	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	obl	_	_
2	gazetei	gazetă	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	_
3	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pass	_	_
4	schimbă	schimba	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	7	punct	_	_
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pass	_	_
7	modernizează	moderniza	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	_
8	atât	atât	ADV	Rgp	Degree=Pos	10	cc:preconj	_	_
9	ca	ca	ADV	Rc	_	10	advmod	_	_
10	structură	structură	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
11	,	,	PUNCT	COMMA	_	15	punct	_	_
12	cât	cât	ADV	Rw	PronType=Int,Rel	15	cc	_	_
13	și	și	CCONJ	Crssp	Polarity=Pos	12	fixed	_	_
14	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
15	punct	punct	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	conj	_	_
16	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	_
17	vedere	vedere	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	15	nmod	_	_
18	grafic	grafic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	SpaceAfter=No
19	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Și	și	CCONJ	Crssp	Polarity=Pos	2	cc:preconj	_	_
2	mama	mamă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	7	nsubj	_	_
3	și	și	CCONJ	Crssp	Polarity=Pos	4	cc	_	_
4	sora	soră	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	conj	_	_
5	lui	lui	DET	Ds3---s	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	4	det	_	_
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pv	_	_
7	uitau	uita	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
8	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	sus	sus	ADV	Rgp	Degree=Pos	7	advmod	_	_
10	spre	spre	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	el	el	PRON	Pp3msr--------s	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


