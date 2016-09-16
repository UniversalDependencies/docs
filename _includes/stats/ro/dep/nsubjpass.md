

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

1201 nodes (1%) are attached to their parents as `nsubjpass`.

735 instances of `nsubjpass` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.19733555370525.

The following 14 pairs of parts of speech are connected with `nsubjpass`: [ro-pos/VERB]()-[ro-pos/NOUN]() (931; 78% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (84; 7% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (76; 6% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (51; 4% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (22; 2% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (10; 1% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (8; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (6; 0% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (5; 0% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (3; 0% instances), [ro-pos/INTJ]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nsubjpass	color:blue
1	Pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	lista	listă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	9	nmod	_	_
3	completă	complet	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	_
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	restricții	restricție	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	2	nmod	_	_
6	,	,	PUNCT	COMMA	_	2	punct	_	_
7	a	a	PART	Qn	PartType=Inf	9	mark	_	_
8	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	9	expl:pass	_	_
9	consulta	consulta	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
10	prospectul	prospect	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubjpass	_	_
11	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nsubjpass	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	lipsă	lipsă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nmod	_	_
3	,	,	PUNCT	COMMA	_	2	punct	_	_
4	el	el	PRON	Pp3msr--------s	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	6	nsubjpass	_	_
5	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	auxpass	_	_
6	lăsat	lăsa	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
7	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	aprecierea	apreciere	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	6	nmod	_	_
9	judecatei	judecat	ADJ	Afpfsoy	Case=Dat,Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	8	nmod	_	_
10	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubjpass	color:blue
1	Conducătorii	conducător	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	7	nsubjpass	_	_
2	locali	local	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	1	amod	_	_
3	au	avea	AUX	Va--3p	Number=Plur|Person=3	7	aux	_	_
4	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	7	auxpass	_	_
5	și	și	CONJ	Crssp	Negative=Pos	6	advmod	_	_
6	ei	el	PRON	Pp3mpr--------s	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Strong	7	expl	_	_
7	menținuți	menținut	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
8	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


