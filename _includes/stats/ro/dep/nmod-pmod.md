

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:agent](), [nmod:tmod]().

1422 nodes (1%) are attached to their parents as `nmod:pmod`.

1333 instances of `nmod:pmod` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.07594936708861.

The following 23 pairs of parts of speech are connected with `nmod:pmod`: [ro-pos/VERB]()-[ro-pos/NOUN]() (999; 70% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (126; 9% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (107; 8% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (86; 6% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (53; 4% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (10; 1% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (7; 0% instances), [ro-pos/ADV]()-[ro-pos/PRON]() (5; 0% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (4; 0% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (4; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (3; 0% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (3; 0% instances), [ro-pos/NUM]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/AUX]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/DET]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 nmod:pmod	color:blue
1	Intră	intra	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	dindos	dindos	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	1	obl	_	_
4	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	sufragerie	sufragerie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nmod:pmod	_	SpaceAfter=No
6	,	,	PUNCT	COMMA	_	8	punct	_	_
7	unde	unde	ADV	Rw	PronType=Int,Rel	12	advmod	_	_
8	constată	constata	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	acl	_	_
9	că	că	SCONJ	Csssp	Polarity=Pos	12	mark	_	_
10	masa	masă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	12	nsubj	_	_
11	era	fi	AUX	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	12	cop	_	_
12	nepusă	nepus	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nmod:pmod	color:blue
1	A	a	PART	Qn	PartType=Inf	3	mark	_	_
2	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	3	expl:pv	_	_
3	feri	feri	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	căldură	căldură	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	3	nmod:pmod	_	_
6	excesivă	excesiv	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
7	și	și	CCONJ	Crssp	Polarity=Pos	9	cc	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	expunerea	expunere	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	5	conj	_	_
10	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	soare	soare	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	nmod:pmod	_	SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod:pmod	color:blue
1	Firma	firmă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubj:pass	_	_
2	a	avea	AUX	Va--3s	Number=Sing|Person=3	3	aux	_	_
3	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	4	aux:pass	_	_
4	amendată	amendat	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
5	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
6	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	7	det	_	_
7	total	total	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	nmod:pmod	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	2.437ý	2.437ý	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	7	nummod	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


