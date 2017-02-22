

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

7000 nodes (3%) are attached to their parents as `obj`.

5973 instances of `obj` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.89642857142857.

The following 31 pairs of parts of speech are connected with `obj`: [ro-pos/VERB]()-[ro-pos/NOUN]() (5487; 78% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (1135; 16% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (128; 2% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (81; 1% instances), [ro-pos/AUX]()-[ro-pos/NOUN]() (31; 0% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (26; 0% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (19; 0% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (18; 0% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (12; 0% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (11; 0% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (10; 0% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (8; 0% instances), [ro-pos/VERB]()-[ro-pos/PART]() (5; 0% instances), [ro-pos/VERB]()-[ro-pos/SCONJ]() (4; 0% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/DET]() (3; 0% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (2; 0% instances), [ro-pos/AUX]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/INTJ]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/INTJ]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/CCONJ]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/INTJ]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/PART]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/AUX]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/INTJ]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obj	color:blue
1	Tele-ecranul	tele-ecran	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
2	dădea	da	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	acum	acum	ADV	Rgp	Degree=Pos	2	advmod	_	_
4	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	5	det	_	_
5	muzică	muzică	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	obj	_	_
6	stridentă	strident	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	COMMA	_	8	punct	_	_
8	militărească	milităresc	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	conj	_	SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 obj	color:blue
1	P-	pe	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	2	case	_	SpaceAfter=No
2	ăsta	acesta	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	obj	_	_
3	ar	avea	AUX	Va--3	Person=3	4	aux	_	_
4	trebui	trebui	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
5	să	să	PART	Qs	Mood=Sub	7	mark	_	SpaceAfter=No
6	-l	el	PRON	Pp3msa--y-----w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	7	expl	_	_
7	luați	lua	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	4	csubj	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	11	punct	_	_
9	nu	nu	PART	Qz	Polarity=Neg	11	advmod	_	_
10	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	mine	eu	PRON	Pp1-sa--------s	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	2	conj	_	SpaceAfter=No
12	!	!	PUNCT	EXCL	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obj	color:blue
1	Stăpâniți	stăpâni	VERB	Vmm-2p	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
2	-o	el	PRON	Pp3fsa--y-----w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	1	expl	_	_
3	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	Joiana	Joiana	PROPN	Np	_	1	obj	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	6	punct	_	_
6	voi	tu	PRON	Pp2-pr--------s	Case=Acc,Nom|Number=Plur|Person=2|PronType=Prs|Strength=Strong	1	vocative	_	SpaceAfter=No
7	,	,	PUNCT	COMMA	_	8	punct	_	_
8	băieți	băiat	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	6	appos	_	SpaceAfter=No
9	,	,	PUNCT	COMMA	_	8	punct	_	_
10	când	când	ADV	Rw	PronType=Int,Rel	14	advmod	_	_
11	n-	nu	PART	Qz-y	Polarity=Neg|Variant=Short	14	advmod	_	SpaceAfter=No
12	oi	vrea	AUX	Va--2s	Number=Sing|Person=2	14	aux	_	_
13	mai	mai	ADV	Rp	_	14	advmod	_	_
14	fi	fi	VERB	Vmnp	Tense=Pres|VerbForm=Inf	1	advcl	_	SpaceAfter=No
15	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


