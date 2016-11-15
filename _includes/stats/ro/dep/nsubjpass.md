

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

1859 nodes (1%) are attached to their parents as `nsubjpass`.

1213 instances of `nsubjpass` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.31414739107047.

The following 13 pairs of parts of speech are connected with `nsubjpass`: [ro-pos/VERB]()-[ro-pos/NOUN]() (1545; 83% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (161; 9% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (67; 4% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (44; 2% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (12; 1% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (8; 0% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (7; 0% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (6; 0% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (4; 0% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/AUX]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubjpass	color:blue
1	O	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	2	det	_	_
2	funcție	funcție	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	nsubjpass	_	_
3	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pass	_	_
4	definește	defini	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	prin	prin	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	antetul	antet	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	nmod	_	_
7	și	și	CONJ	Crssp	Negative=Pos	6	cc	_	_
8	corpul	corp	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	6	conj	_	_
9	funcției	funcție	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	6	nmod	_	_
10	.	.	PUNCT	PERIOD	_	4	punct	_	_

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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubjpass	color:blue
1	Pink	Pink	PROPN	Np	_	4	nsubjpass	_	_
2	Floyd	Floyd	PROPN	Np	_	1	name	_	_
3	fu	fi	AUX	Vais3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	auxpass	_	_
4	sfătuit	sfătui	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	discret	discret	ADV	Rgp	Degree=Pos	4	advmod	_	_
6	să	să	PART	Qs	Mood=Sub	8	mark	_	_
7	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	8	expl:pv	_	_
8	retragă	retrage	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	4	ccomp	_	_
9	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
10	acea	acel	DET	Dd3fsr---e	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|Position=Prenom|PronType=Dem	11	det	_	_
11	noapte	noapte	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	8	nmod	_	_
12	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


