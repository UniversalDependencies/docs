

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

77 nodes (0%) are attached to their parents as `dep`.

41 instances of `dep` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.5974025974026.

The following 7 pairs of parts of speech are connected with `dep`: [da-pos/VERB]()-[da-pos/NOUN]() (58; 75% instances), [da-pos/VERB]()-[da-pos/PRON]() (12; 16% instances), [da-pos/SCONJ]()-[da-pos/NOUN]() (2; 3% instances), [da-pos/VERB]()-[da-pos/PROPN]() (2; 3% instances), [da-pos/ADJ]()-[da-pos/NOUN]() (1; 1% instances), [da-pos/ADJ]()-[da-pos/VERB]() (1; 1% instances), [da-pos/ADV]()-[da-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 dep	color:blue
1	Men	men	CONJ	_	_	0	root	_	_
2	som	som	ADP	_	PartType=Inf	1	case	_	_
3	sagt	sige	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	1	conj	_	_
4	:	:	PUNCT	_	_	3	punct	_	_
5	hendes	hendes	DET	_	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
6	kredse	kreds	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	10	nsubj	_	_
7	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
8	ikke	ikke	ADV	_	_	10	neg	_	_
9	mine	min	DET	_	Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	10	det	_	_
10	kredse	kreds	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	3	dep	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 5 dep	color:blue
1	"	"	PUNCT	_	_	5	punct	_	_
2	Det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
3	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	ikke	ikke	ADV	_	_	5	neg	_	_
5	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	dep	_	_
6	,	,	PUNCT	_	_	9	punct	_	_
7	vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
8	skal	skulle	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
9	satse	satse	VERB	_	VerbForm=Inf|Voice=Act	2	acl:relcl	_	_
10	på	på	ADP	_	AdpType=Prep	9	mark	_	_
11	,	,	PUNCT	_	_	9	punct	_	_
12	"	"	PUNCT	_	_	5	punct	_	_
13	siger	sige	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
14	han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
15	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 4 dep	color:blue
1	"	"	PUNCT	_	_	4	punct	_	_
2	Det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
3	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
4	Beatles	Beatles	PROPN	_	_	36	dep	_	_
5	,	,	PUNCT	_	_	7	punct	_	_
6	der	der	PRON	_	PartType=Inf	7	nsubj	_	_
7	satte	sætte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	acl:relcl	_	_
8	mig	jeg	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=1|PronType=Prs	7	dobj	_	_
9	i	i	ADP	_	AdpType=Prep	7	compound:prt	_	_
10	gang	gang	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	9	mwe	_	_
11	i	i	ADP	_	AdpType=Prep	12	case	_	_
12	rockmusikken	rockmusik	NOUN	_	Definite=Def|Gender=Com|Number=Sing	7	nmod	_	_
13	,	,	PUNCT	_	_	7	punct	_	_
14	og	og	CONJ	_	_	4	cc	_	_
15	jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	16	nsubj	_	_
16	syntes	synes	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	_	_
17	stadigvæk	stadigvæk	ADV	_	_	16	advmod	_	_
18	i	i	ADP	_	AdpType=Prep	16	advmod	_	_
19	dag	dag	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	18	mwe	_	_
20	,	,	PUNCT	_	_	28	punct	_	_
21	at	at	SCONJ	_	_	28	mark	_	_
22	Beatles'	Beatles	PROPN	_	Case=Gen	24	nmod:poss	_	_
23	samlede	samle	VERB	_	Definite=Def|Number=Sing|Tense=Past|VerbForm=Part	24	amod	_	_
24	produktion	produktion	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	28	nsubj	_	_
25	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	28	cop	_	_
26	det	den	DET	_	Gender=Neut|Number=Sing|PronType=Dem	28	det	_	_
27	bedste	god	ADJ	_	Definite=Def|Degree=Sup	28	amod	_	_
28	musik	musik	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	16	ccomp	_	_
29	,	,	PUNCT	_	_	33	punct	_	_
30	der	der	PRON	_	PartType=Inf	33	nsubjpass	_	_
31	nogensinde	nogensinde	ADV	_	_	33	advmod	_	_
32	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	33	auxpass	_	_
33	lavet	lave	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	28	acl:relcl	_	_
34	,	,	PUNCT	_	_	33	punct	_	_
35	"	"	PUNCT	_	_	4	punct	_	_
36	siger	sige	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
37	Nils	Nils	PROPN	_	_	36	nsubj	_	_
38	Lofgren	Lofgren	PROPN	_	_	37	name	_	_
39	.	.	PUNCT	_	_	36	punct	_	_

~~~


