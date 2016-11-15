

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

60 nodes (0%) are attached to their parents as `vocative`.

36 instances of `vocative` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.35.

The following 10 pairs of parts of speech are connected with `vocative`: [ro-pos/VERB]()-[ro-pos/NOUN]() (40; 67% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (7; 12% instances), [ro-pos/INTJ]()-[ro-pos/NOUN]() (3; 5% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (3; 5% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (2; 3% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (1; 2% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (1; 2% instances), [ro-pos/AUX]()-[ro-pos/NOUN]() (1; 2% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (1; 2% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 vocative	color:blue
1	Am	avea	AUX	Va--1	Person=1	2	aux	_	_
2	spus	spune	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
3	eu	eu	PRON	Pp1-sn--------s	Case=Nom|Number=Sing|Person=1|PronType=Prs|Strength=Strong	2	nsubj	_	_
4	,	,	PUNCT	COMMA	_	5	punct	_	_
5	mamă	mamă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	vocative	_	_
6	,	,	PUNCT	COMMA	_	5	punct	_	_
7	sau	sau	CONJ	Ccssp	Negative=Pos	2	cc	_	_
8	n-	nu	PART	Qz-y	Negative=Neg|Variant=Short	10	neg	_	_
9	am	avea	AUX	Va--1	Person=1	10	aux	_	_
10	spus	spune	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	conj	_	_
11	?	?	PUNCT	QUEST	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 vocative	color:blue
1	După	după	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
2	Oceania	Oceania	PROPN	Np	_	6	vocative	_	_
3	,	,	PUNCT	COMMA	_	2	punct	_	_
4	ție	tu	PRON	Pp2-sd--------s	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Strong	6	iobj	_	_
5	-ți	tu	PRON	Pp2-sd--y-----w	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak|Variant=Short	6	expl	_	_
6	cânt	cânta	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	advcl	_	_
7	,	,	PUNCT	COMMA	_	6	punct	_	_
8	urmă	urma	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	10	det	_	_
10	muzică	muzică	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	8	nsubj	_	_
11	mai	mai	ADV	Rp	_	12	advmod	_	_
12	lejeră	lejer	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	_
13	.	.	PUNCT	PERIOD	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 vocative	color:blue
1	Stăpâniți	stăpâni	VERB	Vmm-2p	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	0	root	_	_
2	-o	el	PRON	Pp3fsa--y-----w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	1	expl	_	_
3	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	Joiana	Joiana	PROPN	Np	_	1	dobj	_	_
5	,	,	PUNCT	COMMA	_	6	punct	_	_
6	voi	tu	PRON	Pp2-pr--------s	Case=Acc,Nom|Number=Plur|Person=2|PronType=Prs|Strength=Strong	1	vocative	_	_
7	,	,	PUNCT	COMMA	_	8	punct	_	_
8	băieți	băiat	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	6	appos	_	_
9	,	,	PUNCT	COMMA	_	8	punct	_	_
10	când	când	ADV	Rw	PronType=Int,Rel	14	advmod	_	_
11	n-	nu	PART	Qz-y	Negative=Neg|Variant=Short	14	neg	_	_
12	oi	vrea	AUX	Va--2s	Number=Sing|Person=2	14	aux	_	_
13	mai	mai	ADV	Rp	_	14	advmod	_	_
14	fi	fi	VERB	Vmnp	Tense=Pres|VerbForm=Inf	1	advcl	_	_
15	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


