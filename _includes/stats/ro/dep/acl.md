

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

4965 nodes (2%) are attached to their parents as `acl`.

4935 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.1766364551863.

The following 33 pairs of parts of speech are connected with `acl`: [ro-pos/NOUN]()-[ro-pos/VERB]() (4259; 86% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (225; 5% instances), [ro-pos/PRON]()-[ro-pos/VERB]() (173; 3% instances), [ro-pos/PROPN]()-[ro-pos/VERB]() (108; 2% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (52; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (31; 1% instances), [ro-pos/NUM]()-[ro-pos/VERB]() (19; 0% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (14; 0% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (14; 0% instances), [ro-pos/NOUN]()-[ro-pos/AUX]() (13; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (10; 0% instances), [ro-pos/PRON]()-[ro-pos/ADJ]() (6; 0% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (5; 0% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (5; 0% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (4; 0% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (3; 0% instances), [ro-pos/DET]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (2; 0% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/PRON]()-[ro-pos/NUM]() (2; 0% instances), [ro-pos/PROPN]()-[ro-pos/ADJ]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/INTJ]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/SYM]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/X]()-[ro-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl	color:blue
1	strânge	strânge	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	,	,	PUNCT	COMMA	_	16	punct	_	_
3	că	că	SCONJ	Csssp	Negative=Pos	16	mark	_	_
4	pielea	piele	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	16	nsubj	_	_
5	,	,	PUNCT	COMMA	_	10	punct	_	_
6	oricât	oricât	ADV	Rgp	Degree=Pos	10	advmod	_	_
7	ar	avea	AUX	Va--3	Person=3	10	aux	_	_
8	fi	fi	VERB	Vmnp	Tense=Pres|VerbForm=Inf	10	cop	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
10	catifelată	catifelat	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	4	acl	_	_
11	și	și	CONJ	Crssp	Negative=Pos	10	cc	_	_
12	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	remnant	_	_
13	elastică	elastic	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	10	remnant	_	_
14	,	,	PUNCT	COMMA	_	10	punct	_	_
15	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	16	expl:pv	_	_
16	strică	strica	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	advcl	_	_
17	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	Eu	eu	PRON	Pp1-sn--------s	Case=Nom|Number=Sing|Person=1|PronType=Prs|Strength=Strong	3	nsubj	_	_
2	sunt	fi	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	cel	acela	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	_
4	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	7	nsubj	_	_
5	ți-	tu	PRON	Pp2-sd--y-----w	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak|Variant=Short	7	iobj	_	_
6	a	avea	AUX	Va--3s	Number=Sing|Person=3	7	aux	_	_
7	stricat	strica	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	acl	_	_
8	întreaga	întreg	ADJ	Afpfsry	Case=Acc,Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	operațiune	operațiune	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	dobj	_	_
10	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


