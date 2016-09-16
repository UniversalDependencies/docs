

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

1246 nodes (1%) are attached to their parents as `iobj`.

671 instances of `iobj` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.01765650080257.

The following 21 pairs of parts of speech are connected with `iobj`: [ro-pos/VERB]()-[ro-pos/PRON]() (557; 45% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (460; 37% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (124; 10% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (45; 4% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (14; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (11; 1% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (6; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (6; 0% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (4; 0% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (4; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADP]() (2; 0% instances), [ro-pos/ADV]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/ADJ]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/CONJ]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/SYM]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Ăsta	ăsta	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
2	e	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	cel	cel	DET	Tdmsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Dem	0	root	_	_
4	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	6	nsubj	_	_
5	vă	voi	PRON	Pp2-pd--------w	Case=Dat|Number=Plur|Person=2|PronType=Prs|Strength=Weak	6	iobj	_	_
6	trebuie	trebui	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	3	acl	_	_
7	,	,	PUNCT	COMMA	_	1	punct	_	_
8	nu	nu	PART	Qz	Negative=Neg	9	neg	_	_
9	eu	eu	PRON	Pp1-sn--------s	Case=Nom|Number=Sing|Person=1|PronType=Prs|Strength=Strong	1	conj	_	_
10	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Somnul	somn	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
2	e	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	asimilat	asimila	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	morții	moarte	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	3	iobj	_	_
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	inerției	inerție	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	4	conj	_	_
7	,	,	PUNCT	COMMA	_	5	punct	_	_
8	opririi	oprire	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	4	conj	_	_
9	sterpe	sterp	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
10	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	11	det	_	_
11	vieții	viață	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	8	nmod	_	_
12	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 iobj	color:blue
1	Aici	aici	ADV	Rgp	Degree=Pos	6	advmod	_	_
2	,	,	PUNCT	COMMA	_	1	punct	_	_
3	însă	însă	CONJ	Ccssp	Negative=Pos	6	advmod	_	_
4	,	,	PUNCT	COMMA	_	3	punct	_	_
5	vom	vrea	AUX	Va--1p	Number=Plur|Person=1	6	aux	_	_
6	risca	risca	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
7	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	8	det	_	_
8	judecată	judecată	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	dobj	_	_
9	personală	personal	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
10	,	,	PUNCT	COMMA	_	11	punct	_	_
11	contrară	contrar	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	9	conj	_	_
12	opiniei	opinie	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	11	iobj	_	_
13	admise	admis	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	_
14	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


