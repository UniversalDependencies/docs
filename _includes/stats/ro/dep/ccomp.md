

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: [ccomp:pmod]().

1589 nodes (1%) are attached to their parents as `ccomp`.

1583 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.33417243549402.

The following 17 pairs of parts of speech are connected with `ccomp`: [ro-pos/VERB]()-[ro-pos/VERB]() (1384; 87% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (103; 6% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (36; 2% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (13; 1% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (12; 1% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (9; 1% instances), [ro-pos/INTJ]()-[ro-pos/VERB]() (6; 0% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (5; 0% instances), [ro-pos/AUX]()-[ro-pos/VERB]() (4; 0% instances), [ro-pos/VERB]()-[ro-pos/AUX]() (4; 0% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (3; 0% instances), [ro-pos/ADV]()-[ro-pos/ADJ]() (2; 0% instances), [ro-pos/PART]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Aici	aici	ADV	Rgp	Degree=Pos	3	nmod	_	_
2	n-	nu	PART	Qz-y	Negative=Neg|Variant=Short	3	neg	_	_
3	avem	avea	VERB	Vmip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	7	nmod	_	_
6	ne	noi	PRON	Pp1-pa--------w	Case=Acc|Number=Plur|Person=1|PronType=Prs|Strength=Weak	7	expl:pv	_	_
7	teme	teme	VERB	Vmnp	Tense=Pres|VerbForm=Inf	3	ccomp	_	_
8	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	Iar	iar	ADV	Rc	_	3	cc	_	_
2	el	el	PRON	Pp3msr--------s	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	3	nsubj	_	_
3	bănuia	bănui	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	că	că	SCONJ	Csssp	Negative=Pos	8	mark	_	_
5	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
6	mult	mult	ADV	Rgp	Degree=Pos	8	advmod	_	_
7	mai	mai	ADV	Rp	_	8	advmod	_	_
8	veche	vechi	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	3	ccomp	_	_
9	de-	de	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	10	case	_	_
10	atâta	atâta	ADV	Rgp	Degree=Pos	8	advmod	_	_
11	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	Când	când	ADV	Rw	PronType=Int,Rel	3	advmod	_	_
2	am	avea	AUX	Va--1	Person=1	3	aux	_	_
3	terminat	termina	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	10	advcl	_	_
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	transcris	transcris	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	3	ccomp	_	_
6	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	curat	curat	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	_
8	,	,	PUNCT	COMMA	_	3	punct	_	_
9	a	avea	AUX	Va--3s	Number=Sing|Person=3	10	aux	_	_
10	sosit	sosi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
11	și	și	CONJ	Crssp	Negative=Pos	12	advmod	_	_
12	tata	tată	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	10	conj	_	_
13	.	.	PUNCT	PERIOD	_	10	punct	_	_

~~~


