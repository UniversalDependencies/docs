

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

449 nodes (4%) are attached to their parents as `dobj`.

342 instances of `dobj` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.89977728285078.

The following 17 pairs of parts of speech are connected with `dobj`: [ro-pos/VERB]()-[ro-pos/NOUN]() (311; 69% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (106; 24% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (10; 2% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (4; 1% instances), [ro-pos/AUX]()-[ro-pos/NOUN]() (3; 1% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (3; 1% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/CONJ]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/PUNCT]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/AUX]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/INTJ]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dobj	color:blue
1	Nimeni	nimeni	PRON	Pz3msr	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Neg	3	nsubj	_	_
2	nu	nu	PART	Qz	Negative=Neg	3	neg	_	_
3	putu	putea	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	să	să	PART	Qs	Mood=Sub	5	mark	_	_
5	lămurească	lămuri	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
6	taina	taină	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	5	dobj	_	_
7	țipătului	țipăt	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	nmod	_	_
8	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dobj	color:blue
1	Deasupra	deasupra	ADP	Sp	AdpType=Prep	2	case	_	_
2	tuturora	totul	PRON	Pi3-po	Case=Gen|Number=Plur|Person=3|PronType=Ind	4	nmod	_	_
3	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	dobj	_	_
4	ridică	ridica	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	cine	cine	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	6	nsubj	_	_
6	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	csubj	_	_
7	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 dobj	color:blue
1	dintre	dintre	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
2	cele	cel	DET	Tdfpr	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	4	det	_	_
3	două	două	NUM	Mcfp-l	Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	4	nummod	_	_
4	albume	album	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	8	nmod	_	_
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	Pink	Pink	PROPN	Np	_	8	nsubj	_	_
7	Floyd	Floyd	PROPN	Np	_	6	name	_	_
8	execută	executa	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	"	"	PUNCT	DBLQ	_	10	punct	_	_
10	See	See	PROPN	Np	_	8	dobj	_	_
11	Emily	Emily	PROPN	Np	_	10	foreign	_	_
12	Play	play	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	foreign	_	_
13	"	"	PUNCT	DBLQ	_	10	punct	_	_
14	.	.	PUNCT	PERIOD	_	8	punct	_	_

~~~


