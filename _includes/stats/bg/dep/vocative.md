

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

10 nodes (0%) are attached to their parents as `vocative`.

5 instances of `vocative` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.6.

The following 4 pairs of parts of speech are connected with `vocative`: [bg-pos/NOUN]()-[bg-pos/NOUN]() (4; 40% instances), [bg-pos/VERB]()-[bg-pos/NOUN]() (3; 30% instances), [bg-pos/VERB]()-[bg-pos/PROPN]() (2; 20% instances), [bg-pos/VERB]()-[bg-pos/DET]() (1; 10% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 vocative	color:blue
1	-	-	PUNCT	punct	_	7	punct	_	_
2	Да	да	INTJ	Ta	_	7	discourse	_	_
3	,	,	PUNCT	punct	_	7	punct	_	_
4	докторе	доктор	NOUN	Ncms-v	Gender=Masc|Number=Sing	7	vocative	_	_
5	,	,	PUNCT	punct	_	7	punct	_	_
6	тази	този	DET	Pde-os-f	Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	нощ	нощ	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
8	...	...	PUNCT	punct	_	7	punct	_	_

~~~


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
5	ми	мой	PRON	Psot--1	Person=1|Poss=Yes|PronType=Prs	4	det	_	_
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


