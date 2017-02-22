

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is a language-specific subtype of [acl]().

46 nodes (1%) are attached to their parents as `acl:relcl`.

42 instances of `acl:relcl` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.28260869565217.

The following 9 pairs of parts of speech are connected with `acl:relcl`: [lt-pos/NOUN]()-[lt-pos/VERB]() (31; 67% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (3; 7% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (3; 7% instances), [lt-pos/DET]()-[lt-pos/VERB]() (2; 4% instances), [lt-pos/NOUN]()-[lt-pos/NOUN]() (2; 4% instances), [lt-pos/PROPN]()-[lt-pos/VERB]() (2; 4% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (1; 2% instances), [lt-pos/NOUN]()-[lt-pos/ADJ]() (1; 2% instances), [lt-pos/PRON]()-[lt-pos/ADJ]() (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Visa	visas	DET	DT	Case=Nom|Gender=Fem|Number=Sing	2	det	_	all|_
2	tai	tai	PRON	DT	_	3	nsubj	_	this|_
3	primena	priminti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	mention|_
4	karikatūra	karikatūra	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	3	obj	_	|_
5	,	,	PUNCT	PUNCT	_	8	punct	_	,|_
6	kurią	kuris	PRON	WPA	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	which|_
7	neseniai	neseniai	ADV	RB	Degree=Pos|Polarity=Neg	8	advmod	_	|_
8	mačiau	matyti	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	see|_
9	lenkų	lenkas	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	10	amod	_	Polish|_
10	žurnale	žurnalas	NOUN	NN	Case=Loc|Gender=Masc|Number=Sing	8	obl	_	magazine|_
11	.	.	PUNCT	PUNCT	_	10	punct	_	.|_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 acl:relcl	color:blue
1	Vienintelis	Vienintelis	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	alone|_
2	dalykas	dalykas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	thing|_
3	,	,	PUNCT	PUNCT	_	5	punct	_	,|_
4	kurį	kuris	PRON	WPA	Case=Acc|Gender=Masc|Number=Sing	5	obj	_	which|_
5	galiu	galėti	VERB	NN	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	8	acl:relcl	_	can|_
6	rekomenduoti	rekomenduoti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	5	xcomp	_	recommend|_
7	–	–	PUNCT	PUNCT	_	5	punct	_	–|_
8	nepilkime	pilti	VERB	VBC	Mood=Imp|Number=Plur|Person=1|Polarity=Neg|Reflex=No|VerbForm=Fin|Voice=Act	0	root	_	tap|_
9	benzino	benzinas	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	8	obj	_	gasoline|_
10	į	į	ADP	UH	_	11	case	_	to|_
11	ugnį	ugnis	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	8	obl	_	fire|_
12	.	.	PUNCT	PUNCT	_	8	punct	_	.|_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 acl:relcl	color:blue
1	Bet	Bet	CCONJ	CC	_	2	cc	_	but|_
2	reikia	reikėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	need|_
3	prie	prie	ADP	UH	_	4	case	_	to|_
4	jos	jis	PRON	PRP	Case=Gen	5	obl	_	they|_
5	prisidėti	prisidėti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	2	xcomp	_	|_
6	,	,	PUNCT	PUNCT	_	9	punct	_	,|_
7	o	o	CCONJ	CC	_	9	cc	_	and|_
8	ne	ne	PART	UH	Polarity=Neg	9	advmod	_	not|_
9	pasiduoti	pasiduoti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	5	conj	_	grasp|_
10	tiems	tie	PRON	DT	Case=Dat|Gender=Masc|Number=Plur	9	iobj	_	that|_
11	,	,	PUNCT	PUNCT	_	12	punct	_	,|_
12	kas	kas	PRON	WDT	Case=Nom	13	nsubj	_	who|_
13	bando	bandyti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	10	acl:relcl	_	try|_
14	įamžinti	įamžinti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	13	xcomp	_	commemorate|_
15	prieštvaninį	prieštvaninis	ADJ	NN	Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	16	amod	_	|_
16	mentalitetą	mentalitetas	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	14	obj	_	mentality|_
17	.	.	PUNCT	PUNCT	_	2	punct	_	.|_

~~~


