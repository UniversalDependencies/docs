

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [cc]().

99 nodes (0%) are attached to their parents as `cc:preconj`.

86 instances of `cc:preconj` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.33333333333333.

The following 14 pairs of parts of speech are connected with `cc:preconj`: [ro-pos/VERB]()-[ro-pos/CONJ]() (45; 45% instances), [ro-pos/NOUN]()-[ro-pos/CONJ]() (19; 19% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (16; 16% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (5; 5% instances), [ro-pos/ADV]()-[ro-pos/CONJ]() (2; 2% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (2; 2% instances), [ro-pos/PRON]()-[ro-pos/CONJ]() (2; 2% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (2; 2% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/ADJ]()-[ro-pos/CONJ]() (1; 1% instances), [ro-pos/ADP]()-[ro-pos/CONJ]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/CONJ]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/PART]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Fie	fie	CONJ	Ccssp	Negative=Pos	3	cc:preconj	_	_
2	că	că	SCONJ	Csssp	Negative=Pos	3	mark	_	_
3	scria	scrie	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	csubj	_	_
4	JOS	jos	ADV	Rgp	Degree=Pos	3	ccomp	_	_
5	FRATELE	frate	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	dobj	_	_
6	CEL	acela	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	det	_	_
7	MARE	mare	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
8	,	,	PUNCT	COMMA	_	3	punct	_	_
9	fie	fie	CONJ	Ccssp	Negative=Pos	3	cc	_	_
10	că	că	SCONJ	Csssp	Negative=Pos	12	mark	_	_
11	nu	nu	PART	Qz	Negative=Neg	12	neg	_	_
12	scria	scrie	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	conj	_	_
13	,	,	PUNCT	COMMA	_	3	punct	_	_
14	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	cop	_	_
15	totuna	totuna	ADV	Rgp	Degree=Pos	0	root	_	_
16	.	.	PUNCT	PERIOD	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cc:preconj	color:blue
1	Riscau	risca	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	destul	destul	ADV	Rgp	Degree=Pos	1	advmod	_	_
3	să	să	PART	Qs	Mood=Sub	5	mark	_	_
4	fie	fi	AUX	Vasp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	5	auxpass	_	_
5	împușcați	împușca	VERB	Vmp--pm	Gender=Masc|Number=Plur|VerbForm=Part	1	ccomp	_	_
6	și	și	CONJ	Crssp	Negative=Pos	9	cc:preconj	_	_
7	într-	întru	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	9	case	_	_
8	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	9	det	_	_
9	caz	caz	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	_
10	și-	și	CONJ	Crssp	Negative=Pos	9	cc	_	_
11	n	în	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	12	case	_	_
12	altul	altul	PRON	Pi3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	9	conj	_	_
13	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cc:preconj	color:blue
1	Aspectul	aspect	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	nmod	_	_
2	gazetei	gazetă	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	_
3	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pass	_	_
4	schimbă	schimba	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pass	_	_
7	modernizează	moderniza	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	_
8	atât	atât	ADV	Rgp	Degree=Pos	10	cc:preconj	_	_
9	ca	ca	ADV	Rc	_	10	advmod	_	_
10	structură	structură	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	nmod	_	_
11	,	,	PUNCT	COMMA	_	10	punct	_	_
12	cât	cât	ADV	Rw	PronType=Int,Rel	15	cc	_	_
13	și	și	CONJ	Crssp	Negative=Pos	12	mwe	_	_
14	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
15	punct	punct	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	conj	_	_
16	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	_
17	vedere	vedere	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	15	nmod	_	_
18	grafic	grafic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	_
19	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


