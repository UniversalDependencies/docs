

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.
There are 4 language-specific subtypes of `expl`: [expl:impers](), [expl:pass](), [expl:poss](), [expl:pv]().

406 nodes (0%) are attached to their parents as `expl`.

361 instances of `expl` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36206896551724.

The following 7 pairs of parts of speech are connected with `expl`: [ro-pos/VERB]()-[ro-pos/PRON]() (398; 98% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/AUX]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/INTJ]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/AUX]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl	color:blue
1	Se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	2	expl:pv	_	_
2	uită	uita	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	ceasul	ceas	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	_
5	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	8	dobj	_	_
7	-l	el	PRON	Pp3msa--y-----w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	8	expl	_	_
8	avea	avea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	acl	_	_
9	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	mână	mână	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	8	nmod	_	_
11	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 expl	color:blue
1	Parsons	Parsons	PROPN	Np	_	3	nsubj	_	_
2	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
3	colegul	coleg	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
4	lui	lui	DET	Tf-so	Case=Dat,Gen|Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	Winston	Winston	PROPN	Np	_	3	nmod	_	_
6	,	,	PUNCT	COMMA	_	7	punct	_	_
7	funcționar	funcționar	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	appos	_	_
8	și	și	ADV	Rgp	Degree=Pos	9	advmod	_	_
9	el	el	PRON	Pp3msr--------s	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	7	expl	_	_
10	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	Ministerul	minister	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	nmod	_	_
12	Adevărului	adevăr	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	11	nmod	_	_
13	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl	color:blue
1	Conducătorii	conducător	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	7	nsubjpass	_	_
2	locali	local	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	1	amod	_	_
3	au	avea	AUX	Va--3p	Number=Plur|Person=3	7	aux	_	_
4	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	7	auxpass	_	_
5	și	și	CONJ	Crssp	Negative=Pos	6	advmod	_	_
6	ei	el	PRON	Pp3mpr--------s	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Strong	7	expl	_	_
7	menținuți	menținut	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
8	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


