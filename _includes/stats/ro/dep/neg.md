

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

1191 nodes (1%) are attached to their parents as `neg`.

1190 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70864819479429.

The following 14 pairs of parts of speech are connected with `neg`: [ro-pos/VERB]()-[ro-pos/PART]() (1040; 87% instances), [ro-pos/ADJ]()-[ro-pos/PART]() (60; 5% instances), [ro-pos/NOUN]()-[ro-pos/PART]() (35; 3% instances), [ro-pos/ADV]()-[ro-pos/PART]() (23; 2% instances), [ro-pos/PRON]()-[ro-pos/PART]() (10; 1% instances), [ro-pos/AUX]()-[ro-pos/PART]() (9; 1% instances), [ro-pos/ADP]()-[ro-pos/PART]() (6; 1% instances), [ro-pos/DET]()-[ro-pos/PART]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/PART]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/CONJ]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 neg	color:blue
1	Dacă	dacă	SCONJ	Csssp	Negative=Pos	4	mark	_	_
2	n-	nu	PART	Qz-y	Negative=Neg|Variant=Short	4	neg	_	_
3	ai	avea	AUX	Va--2s	Number=Sing|Person=2	4	aux	_	_
4	avut	avea	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	11	advcl	_	_
5	destulă	destulă	PRON	Pi3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Ind	6	amod	_	_
6	vreme	vreme	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	dobj	_	_
7	să	să	PART	Qs	Mood=Sub	9	mark	_	_
8	mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	9	dobj	_	_
9	cunoști	cunoaște	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	advcl	_	_
10	,	,	PUNCT	COMMA	_	4	punct	_	_
11	păcat	păcat	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
12	!	!	PUNCT	EXCL	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 neg	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	realitate	realitate	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	_
3	,	,	PUNCT	COMMA	_	2	punct	_	_
4	nici	nici	ADV	Rz	PronType=Neg	7	advmod	_	_
5	nu	nu	PART	Qz	Negative=Neg	7	neg	_	_
6	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	cop	_	_
7	obișnuit	obișnuit	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
8	să	să	PART	Qs	Mood=Sub	9	mark	_	_
9	scrie	scrie	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp:pmod	_	_
10	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	mână	mână	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	nmod	_	_
12	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 neg	color:blue
1	Nu	nu	PART	Qz	Negative=Neg	4	neg	_	_
2	este	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	ușor	ușor	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
4	lucru	lucru	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
5	a	a	PART	Qn	PartType=Inf	7	mark	_	_
6	te	tu	PRON	Pp2-sa--------w	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	7	expl:pv	_	_
7	pune	pune	VERB	Vmnp	Tense=Pres|VerbForm=Inf	4	csubj	_	_
8	rău	rău	ADV	Rgp	Degree=Pos	7	advmod	_	_
9	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	viața	viață	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	7	nmod:pmod	_	_
11	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


