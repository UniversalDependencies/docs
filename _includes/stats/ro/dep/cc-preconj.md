

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [cc]().

71 nodes (0%) are attached to their parents as `cc:preconj`.

59 instances of `cc:preconj` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.53521126760563.

The following 13 pairs of parts of speech are connected with `cc:preconj`: [ro-pos/VERB]()-[ro-pos/CONJ]() (34; 48% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (11; 15% instances), [ro-pos/NOUN]()-[ro-pos/CONJ]() (9; 13% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (4; 6% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (3; 4% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (2; 3% instances), [ro-pos/ADV]()-[ro-pos/CONJ]() (2; 3% instances), [ro-pos/ADJ]()-[ro-pos/CONJ]() (1; 1% instances), [ro-pos/ADP]()-[ro-pos/CONJ]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/PART]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Fie	fie	CONJ	Ccssp	Negative=Pos	3	cc:preconj	_	_
2	că	că	SCONJ	Csssp	Negative=Pos	3	mark	_	_
3	scria	scrie	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	csubj	_	_
4	JOS	jos	ADV	Rgp	Degree=Pos	3	ccomp	_	_
5	FRATELE	frate	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	dobj	_	_
6	CEL	cel	DET	Tdmsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	MARE	mare	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
8	,	,	PUNCT	COMMA	_	3	punct	_	_
9	fie	fie	CONJ	Ccssp	Negative=Pos	3	cc	_	_
10	că	că	SCONJ	Csssp	Negative=Pos	12	mark	_	_
11	nu	nu	PART	Qz	Negative=Neg	12	neg	_	_
12	scria	scrie	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	conj	_	_
13	,	,	PUNCT	COMMA	_	3	punct	_	_
14	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	cop	_	_
15	totuna	totuna	ADV	Rgp	Degree=Pos	0	root	_	_
16	.	.	PUNCT	PERIOD	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Și	și	ADV	Rgp	Degree=Pos	2	cc:preconj	_	_
2	mama	mamă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	7	nsubj	_	_
3	și	și	CONJ	Crssp	Negative=Pos	2	cc	_	_
4	sora	soră	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	conj	_	_
5	lui	el	PRON	Pp3mso--------s	Case=Dat,Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	4	nmod	_	_
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pv	_	_
7	uitau	uita	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
8	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	sus	sus	ADV	Rgp	Degree=Pos	7	advmod	_	_
10	spre	spre	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	el	el	PRON	Pp3msr--------s	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	7	nmod	_	_
12	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	Solomonescu	Solomonescu	PROPN	Np	_	4	nsubj	_	_
2	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	_	_
3	și	și	CONJ	Crssp	Negative=Pos	4	cc:preconj	_	_
4	cântăreț	cântăreț	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
5	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	biserică	biserică	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	nmod	_	_
7	și	și	CONJ	Crssp	Negative=Pos	4	cc	_	_
8	artist	artist	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	conj	_	_
9	dramatic	dramatic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
10	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


