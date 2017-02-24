

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is a language-specific subtype of [acl]().

46 nodes (1%) are attached to their parents as `acl:relcl`.

43 instances of `acl:relcl` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.3695652173913.

The following 8 pairs of parts of speech are connected with `acl:relcl`: [lt-pos/NOUN]()-[lt-pos/VERB]() (30; 65% instances), [lt-pos/DET]()-[lt-pos/VERB]() (3; 7% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (3; 7% instances), [lt-pos/PROPN]()-[lt-pos/VERB]() (3; 7% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (3; 7% instances), [lt-pos/NOUN]()-[lt-pos/NOUN]() (2; 4% instances), [lt-pos/NOUN]()-[lt-pos/ADJ]() (1; 2% instances), [lt-pos/PRON]()-[lt-pos/ADJ]() (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Visa	visas	DET	DT	Case=Nom|Gender=Fem|Number=Sing	2	det	_	En=all
2	tai	tai	PRON	DT	_	3	nsubj	_	En=this
3	primena	priminti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	En=mention
4	karikatūra	karikatūra	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	3	obj	_	En=cartoon|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	8	punct	_	En=,
6	kurią	kuris	PRON	WPA	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	En=which
7	neseniai	neseniai	ADV	RB	Degree=Pos|Polarity=Neg	8	advmod	_	En=recently
8	mačiau	matyti	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	En=see
9	lenkų	lenkas	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	10	amod	_	En=Polish
10	žurnale	žurnalas	NOUN	NN	Case=Loc|Gender=Masc|Number=Sing	8	obl	_	En=magazine|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	10	punct	_	En=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 acl:relcl	color:blue
1	Vienintelis	vienintelis	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	En=alone
2	dalykas	dalykas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	En=thing|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	En=,
4	kurį	kuris	PRON	WPA	Case=Acc|Gender=Masc|Number=Sing	5	obj	_	En=which
5	galiu	galėti	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	8	acl:relcl	_	En=can
6	rekomenduoti	rekomenduoti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	5	xcomp	_	En=recommend
7	–	–	PUNCT	PUNCT	_	5	punct	_	En=–
8	nepilkime	pilti	VERB	VBC	Mood=Imp|Number=Plur|Person=1|Polarity=Neg|Reflex=No|VerbForm=Fin|Voice=Act	0	root	_	En=tap
9	benzino	benzinas	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	8	obj	_	En=gasoline
10	į	į	ADP	UH	_	11	case	_	En=to
11	ugnį	ugnis	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	8	obl	_	En=fire|SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	8	punct	_	En=.

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 22 acl:relcl	color:blue
1	Ir	ir	CCONJ	CC	_	12	cc	_	En=and
2	nors	nors	SCONJ	UH	_	12	mark	_	En=though
3	pilotų	pilotas	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	4	nmod	_	En=pilot
4	kabinos	kabina	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	En=cabin
5	įrašuose	įrašas	NOUN	NN	Case=Loc|Gender=Masc|Number=Plur	12	obl	_	En=record|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	10	punct	_	En=,
7	anot	anot	ADP	UH	_	10	case	_	En=according_to
8	jų	jie	DET	PRP$	Case=Gen|Gender=Masc|Number=Plur	10	det	_	En=he
9	klausiusių	klausyti	VERB	VBNL	Case=Gen|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Reflex=No|Tense=PastSimp|VerbForm=Part|Voice=Act	10	amod	_	En=listen
10	ekspertų	ekspertas	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	12	parataxis	_	En=expert|SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	10	punct	_	En=,
12	gausu	gausas	NOUN	NN	Case=Ins|Gender=Masc|Number=Sing	0	root	_	En=plenty
13	pašalinio	pašalinis	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	En=side
14	triukšmo	triukšmas	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	12	nmod	_	En=noise|SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	10	punct	_	En=,
16	jis	jis	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	17	nsubj	_	En=which
17	įprastas	įprastas	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Part|Voice=Pass	14	acl:relcl	_	En=characteristic
18	triukšmingam	triukšmingas	ADJ	JJL	Case=Dat|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	En=noisy
19	Tu-154	tu-154	PROPN	NNP	Case=Dat|Gender=Masc|Number=Sing	17	obj	_	En=Tu-154|SpaceAfter=No
20	,	,	PUNCT	PUNCT	_	22	punct	_	En=,
21	kuris	kuris	PRON	WPA	Case=Nom|Gender=Masc|Number=Sing	22	nsubj	_	En=which
22	negarsėja	garsėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	19	acl:relcl	_	En=sound
23	puikia	puikus	ADJ	JJL	Case=Ins|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	24	amod	_	En=good
24	izoliacija	izoliacija	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	22	obj	_	En=izolation|SpaceAfter=No
25	.	.	PUNCT	PUNCT	_	12	punct	_	En=.

~~~


