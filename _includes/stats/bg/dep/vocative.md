

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

6 nodes (0%) are attached to their parents as `vocative`.

3 instances of `vocative` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 3 pairs of parts of speech are connected with `vocative`: [bg-pos/VERB]()-[bg-pos/NOUN]() (3; 50% instances), [bg-pos/VERB]()-[bg-pos/PROPN]() (2; 33% instances), [bg-pos/VERB]()-[bg-pos/DET]() (1; 17% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 vocative	color:blue
1	Не	не	INTJ	Tn	_	2	neg	_	_
2	плачи	плача-(се)	VERB	Vpiiz--2s	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
3	,	,	PUNCT	punct	_	4	punct	_	_
4	момчето	момче	NOUN	Ncnsd	Definite=Def|Gender=Neut|Number=Sing	2	vocative	_	_
5	ми	мой	PRON	Psot--1	Person=1|Poss=Yes|PronType=Prs	4	case	_	_
6	,	,	PUNCT	punct	_	2	punct	_	_
7	стига	стига	PART	Tv	_	2	conj	_	_
8	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Калине	калин	PROPN	Npms-v	Case=Voc|Gender=Masc|Number=Sing	3	vocative	_	_
2	,	,	PUNCT	punct	_	1	punct	_	_
3	докарай	докарам-(се)	VERB	Vpptz--2s	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
4	колата	кола	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	3	dobj	_	_
5	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 vocative	color:blue
1	Стихна	стихна	VERB	Vppif-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	боят	бой	NOUN	Ncmsf	Definite=Def|Gender=Masc|Number=Sing	1	nsubj	_	_
3	,	,	PUNCT	punct	_	5	punct	_	_
4	мили	мил	ADJ	Ams-e	Case=Voc|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
5	мой	мой	DET	Psol-s1mi	Definite=Ind|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	1	vocative	_	_
6	,	,	PUNCT	punct	_	5	punct	_	_
7	ала	ала	CONJ	Cc	_	1	cc	_	_
8	ти	аз	PRON	Ppe-os2	Case=Nom|Number=Sing|Person=2|PronType=Prs	11	nsubj	_	_
9	не	не	INTJ	Tn	_	11	neg	_	_
10	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	11	expl	_	_
11	завръщаш	завръщам-(се)	VERB	Vpitf-r2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
12	.	.	PUNCT	punct	_	1	punct	_	_

~~~


