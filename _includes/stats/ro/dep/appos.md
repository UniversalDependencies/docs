

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

737 nodes (1%) are attached to their parents as `appos`.

709 instances of `appos` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.23473541383989.

The following 38 pairs of parts of speech are connected with `appos`: [ro-pos/NOUN]()-[ro-pos/NOUN]() (343; 47% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (150; 20% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (62; 8% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (28; 4% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (25; 3% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (15; 2% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (14; 2% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (9; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (8; 1% instances), [ro-pos/PRON]()-[ro-pos/PRON]() (8; 1% instances), [ro-pos/PROPN]()-[ro-pos/PROPN]() (8; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (7; 1% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (6; 1% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (6; 1% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (5; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (5; 1% instances), [ro-pos/PRON]()-[ro-pos/VERB]() (4; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (4; 1% instances), [ro-pos/NUM]()-[ro-pos/NOUN]() (3; 0% instances), [ro-pos/PROPN]()-[ro-pos/ADJ]() (3; 0% instances), [ro-pos/PROPN]()-[ro-pos/VERB]() (3; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (2; 0% instances), [ro-pos/ADV]()-[ro-pos/PROPN]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (2; 0% instances), [ro-pos/PRON]()-[ro-pos/PROPN]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (1; 0% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/AUX]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/SYM]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	Era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	cop	_	_
2	doamna	doamnă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
3	Parsons	Parsons	PROPN	Np	_	2	nmod	_	_
4	,	,	PUNCT	COMMA	_	5	punct	_	_
5	soția	soție	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	appos	_	_
6	unui	un	DET	Timso	Case=Dat,Gen|Gender=Masc|Number=Sing|PronType=Ind	7	det	_	_
7	vecin	vecin	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	palier	palier	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	7	nmod	_	_
10	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	Dar	dar	CONJ	Ccssp	Negative=Pos	10	discourse	_	_
2	,	,	PUNCT	COMMA	_	4	punct	_	_
3	mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	4	expl:pv	_	_
4	rog	ruga	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	parataxis	_	_
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	pe	pe	ADP	Sp	AdpType=Prep	7	case	_	_
7	duduca	duducă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	15	dobj	_	_
8	Luluța	Luluța	PROPN	Np	_	7	appos	_	_
9	nu	nu	PART	Qz	Negative=Neg	10	neg	_	_
10	știți	ști	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
11	unde	unde	ADV	Rw	PronType=Int,Rel	15	advmod	_	_
12	-aș	avea	AUX	Vaip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	putea	putea	VERB	Vmnp	Tense=Pres|VerbForm=Inf	15	aux	_	_
14	-o	el	PRON	Pp3fsa--------w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak	15	expl	_	_
15	găsi	găsi	VERB	Vmnp	Tense=Pres|VerbForm=Inf	10	ccomp	_	_
16	?	?	PUNCT	QUEST	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 appos	color:blue
1	4	4	NUM	Mc	NumType=Card	3	parataxis	_	_
2	.	.	PUNCT	PERIOD	_	1	punct	_	_
3	NAUMOV	NAUMOV	PROPN	Np	_	0	root	_	_
4	,	,	PUNCT	COMMA	_	5	punct	_	_
5	VLADIMIR	VLADIMIR	PROPN	Np	_	3	name	_	_
6	Vladimïrovici	Vladimïrovici	PROPN	Np	_	3	name	_	_
7	,	,	PUNCT	COMMA	_	5	punct	_	_
8	Ministru	ministru	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	3	appos	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	Interne	internă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	8	nmod	_	_
11	,	,	PUNCT	COMMA	_	12	punct	_	_
12	născut	naște	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	acl	_	_
13	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	1956	1956	NUM	Mc	NumType=Card	12	nmod:tmod	_	_
15	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


