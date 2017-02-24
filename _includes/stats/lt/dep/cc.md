

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is universal.

296 nodes (6%) are attached to their parents as `cc`.

296 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.48648648648649.

The following 12 pairs of parts of speech are connected with `cc`: [lt-pos/NOUN]()-[lt-pos/CCONJ]() (107; 36% instances), [lt-pos/VERB]()-[lt-pos/CCONJ]() (99; 33% instances), [lt-pos/ADJ]()-[lt-pos/CCONJ]() (42; 14% instances), [lt-pos/PROPN]()-[lt-pos/CCONJ]() (22; 7% instances), [lt-pos/ADV]()-[lt-pos/CCONJ]() (11; 4% instances), [lt-pos/NOUN]()-[lt-pos/PART]() (4; 1% instances), [lt-pos/VERB]()-[lt-pos/PART]() (3; 1% instances), [lt-pos/DET]()-[lt-pos/CCONJ]() (2; 1% instances), [lt-pos/PART]()-[lt-pos/CCONJ]() (2; 1% instances), [lt-pos/PRON]()-[lt-pos/CCONJ]() (2; 1% instances), [lt-pos/ADJ]()-[lt-pos/PART]() (1; 0% instances), [lt-pos/ADV]()-[lt-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Tėvynę	tėvynė	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	En=homeland|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	En=,
3	tautą	tauta	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	1	conj	_	En=nation
4	ir	ir	CCONJ	CC	_	5	cc	_	En=and
5	lietuvybę	lietuvybė	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	1	conj	_	En=Lithuanianism
6	dera	derėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	En=need
7	mylėti	mylėti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	6	xcomp	_	En=love|SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	6	punct	_	En=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Čia	čia	CCONJ	CC	_	5	cc	_	En=here
2	SSRS	SSRS	PROPN	NNP	_	3	nmod	_	En=SSRS
3	okupacijos	okupacija	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	En=0
4	laikais	laikas	NOUN	NN	Case=Ins|Gender=Masc|Number=Plur	5	obl	_	En=time
5	veikė	veikti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	En=function
6	milžiniška	milžiniškas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	En=big
7	gamykla	gamykla	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	En=factory
8	„	„	PUNCT	PUNCT	_	9	punct	_	En=„|SpaceAfter=No
9	Vilma	Vilma	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	7	appos	_	En=Vilma|SpaceAfter=No
10	“	“	PUNCT	PUNCT	_	9	punct	_	En=“|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	5	punct	_	En=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 cc	color:blue
1	Į	į	ADP	UH	_	2	case	_	En=to
2	tai	tai	PRON	DT	_	5	obl	_	En=this
3	man	aš	PRON	PRP	Case=Dat|Number=Sing|Person=1	5	iobj	_	En=I
4	bus	būti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Fut|VerbForm=Fin|Voice=Act	5	aux:pass	_	En=be
5	atsakyta	atsakyti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	En=answer|SpaceAfter=No
6	:	:	PUNCT	PUNCT	_	12	punct	_	En=:
7	„	„	PUNCT	PUNCT	_	12	punct	_	En=„|SpaceAfter=No
8	čia	čia	CCONJ	CC	_	12	cc	_	En=there
9	ne	ne	PART	UH	Polarity=Neg	10	advmod	_	En=not
10	mes	mes	PRON	PRP	Case=Nom|Number=Plur|Person=1	12	nsubj	_	En=we
11	vieni	vienas	DET	DT	Case=Nom|Gender=Masc|Number=Plur	10	amod	_	En=single
12	kalti	kaltas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	5	parataxis	_	En=guilty|SpaceAfter=No
13	“	“	PUNCT	PUNCT	_	12	punct	_	En=“|SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	5	punct	_	En=.

~~~


