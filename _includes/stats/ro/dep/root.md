

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

6347 nodes (4%) are attached to their parents as `root`.

6347 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.09847171892233.

The following 12 pairs of parts of speech are connected with `root`: [ro-pos/ROOT]()-[ro-pos/VERB]() (5467; 86% instances), [ro-pos/ROOT]()-[ro-pos/NOUN]() (381; 6% instances), [ro-pos/ROOT]()-[ro-pos/ADJ]() (266; 4% instances), [ro-pos/ROOT]()-[ro-pos/ADV]() (113; 2% instances), [ro-pos/ROOT]()-[ro-pos/PRON]() (33; 1% instances), [ro-pos/ROOT]()-[ro-pos/NUM]() (19; 0% instances), [ro-pos/ROOT]()-[ro-pos/INTJ]() (18; 0% instances), [ro-pos/ROOT]()-[ro-pos/AUX]() (15; 0% instances), [ro-pos/ROOT]()-[ro-pos/PROPN]() (15; 0% instances), [ro-pos/ROOT]()-[ro-pos/ADP]() (14; 0% instances), [ro-pos/ROOT]()-[ro-pos/PART]() (4; 0% instances), [ro-pos/ROOT]()-[ro-pos/DET]() (2; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 13 root	color:blue
1	Târziu	târziu	ADV	Rgp	Degree=Pos	13	advmod	_	_
2	,	,	PUNCT	COMMA	_	1	punct	_	_
3	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	geamul	geam	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	13	nmod	_	_
5	tău	tău	DET	Ds2ms-s	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	4	det	_	_
6	,	,	PUNCT	COMMA	_	3	punct	_	_
7	încet	încet	ADV	Rgp	Degree=Pos	13	advmod	_	_
8	,	,	PUNCT	COMMA	_	7	punct	_	_
9	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
10	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	11	det	_	_
11	monedă	monedă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	13	nmod	_	_
12	voi	vrea	AUX	Va--1s	Number=Sing|Person=1	13	aux	_	_
13	suna	suna	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
14	.	.	PUNCT	PERIOD	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 11 root	color:blue
1	Dacă	dacă	SCONJ	Csssp	Negative=Pos	4	mark	_	_
2	n-	nu	PART	Qz-y	Negative=Neg|Variant=Short	4	neg	_	_
3	ai	avea	AUX	Va--2s	Number=Sing|Person=2	4	aux	_	_
4	avut	avea	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	11	advcl	_	_
5	destulă	destulă	PRON	Pi3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Ind	6	amod	_	_
6	vreme	vreme	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	dobj	_	_
7	să	să	PART	Qs	Mood=Sub	9	mark	_	_
8	mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	9	dobj	_	_
9	cunoști	cunoaște	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	advcl	_	_
10	,	,	PUNCT	COMMA	_	4	punct	_	_
11	păcat	păcat	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
12	!	!	PUNCT	EXCL	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	remarcabilă	remarcabil	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
2	este	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	aici	aici	ADV	Rgp	Degree=Pos	1	advmod	_	_
4	insistența	insistență	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	nsubj	_	_
5	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	mark	_	_
6	a	a	PART	Qn	PartType=Inf	9	mark	_	_
7	nu	nu	PART	Qz	Negative=Neg	9	neg	_	_
8	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	9	expl:impers	_	_
9	interveni	interveni	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	acl	_	_
10	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	text	text	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	nmod	_	_
12	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


