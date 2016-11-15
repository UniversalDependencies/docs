

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

115 nodes (0%) are attached to their parents as `foreign`.

115 instances of `foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.54782608695652.

The following 20 pairs of parts of speech are connected with `foreign`: [ro-pos/PROPN]()-[ro-pos/PROPN]() (51; 44% instances), [ro-pos/X]()-[ro-pos/X]() (15; 13% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (12; 10% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (7; 6% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (7; 6% instances), [ro-pos/PROPN]()-[ro-pos/X]() (3; 3% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (3; 3% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (2; 2% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (2; 2% instances), [ro-pos/NOUN]()-[ro-pos/X]() (2; 2% instances), [ro-pos/PROPN]()-[ro-pos/ADJ]() (2; 2% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/ADP]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/ADP]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/DET]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/NUM]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/VERB]() (1; 1% instances), [ro-pos/X]()-[ro-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 foreign	color:blue
1	Atila	Atila	PROPN	Np	_	0	root	_	_
2	,	,	PUNCT	COMMA	_	3	punct	_	_
3	zis	zice	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	1	acl	_	_
4	Der	Der	PROPN	Np	_	3	xcomp	_	_
5	Etzell	Etzell	PROPN	Np	_	4	foreign	_	_
6	,	,	PUNCT	COMMA	_	3	punct	_	_
7	zis	zice	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	conj	_	_
8	Biciul	bici	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	xcomp	_	_
9	lui	lui	DET	Tf-so	Case=Dat,Gen|Definite=Def|Number=Sing|PronType=Art	10	det	_	_
10	Dumnezeu	Dumnezeu	PROPN	Np	_	8	nmod	_	_
11	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 foreign	color:blue
1	VM	VM	NOUN	Yn	Abbr=Yes	8	nmod	_	_
2	(	(	PUNCT	LPAR	_	3	punct	_	_
3	Virtual	Virtual	X	X	_	1	appos	_	_
4	8086	8086	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	3	nummod	_	_
5	Mode	Mode	X	X	_	3	foreign	_	_
6	)	)	PUNCT	RPAR	_	3	punct	_	_
7	-	-	PUNCT	DASH	_	1	punct	_	_
8	acest	acest	DET	Dd3msr---e	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|Position=Prenom|PronType=Dem	9	det	_	_
9	bit	bit	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	nsubj	_	_
10	indică	indica	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
11	că	că	SCONJ	Csssp	Negative=Pos	13	mark	_	_
12	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	13	expl:pass	_	_
13	execută	executa	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	ccomp	_	_
14	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	15	det	_	_
15	program	program	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	13	nsubjpass	_	_
16	8086	8086	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	15	nummod	_	_
17	,	,	PUNCT	COMMA	_	20	punct	_	_
18	dacă	dacă	SCONJ	Csssp	Negative=Pos	20	mark	_	_
19	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	auxpass	_	_
20	poziționat	poziționa	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	13	conj	_	_
21	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	22	case	_	_
22	1	1	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	20	nmod	_	_
23	.	.	PUNCT	PERIOD	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 foreign	color:blue
1	dintre	dintre	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
2	cele	cel	DET	Tdfpr	Case=Acc,Nom|Gender=Fem|Number=Plur|PronType=Dem	4	det	_	_
3	două	doi	NUM	Mcfp-l	Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	4	nummod	_	_
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


