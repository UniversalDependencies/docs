

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

47 nodes (1%) are attached to their parents as `acl`.

28 instances of `acl` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.76595744680851.

The following 9 pairs of parts of speech are connected with `acl`: [lt-pos/NOUN]()-[lt-pos/VERB]() (33; 70% instances), [lt-pos/NOUN]()-[lt-pos/ADJ]() (3; 6% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (2; 4% instances), [lt-pos/DET]()-[lt-pos/NOUN]() (2; 4% instances), [lt-pos/PROPN]()-[lt-pos/VERB]() (2; 4% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (2; 4% instances), [lt-pos/ADV]()-[lt-pos/ADJ]() (1; 2% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (1; 2% instances), [lt-pos/PROPN]()-[lt-pos/ADJ]() (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 acl	color:blue
1	Du	du	NUM	CD	Case=Nom|Gender=Masc	2	nummod	_	two|_
2	sodiečiai	sodietis	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	farmer|_
3	sėdi	sėdėti	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	sit|_
4	ant	ant	ADP	UH	_	8	case	_	on|_
5	potvynio	potvynis	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	flood|_
6	apsemtų	apsemti	VERB	VBNL	Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Part|Voice=Pass	7	acl	_	|_
7	namų	namai	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	8	nmod	_	house|_
8	stogo	stogas	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	9	obl	_	roof|_
9	.	.	PUNCT	PUNCT	_	3	punct	_	.|_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl	color:blue
1	Tai	tai	PRON	DT	_	7	nsubj	_	this|_
2	buvo	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	be|_
3	tiesiog	tiesiog	ADV	RB	Degree=Pos	4	advmod	_	just|_
4	sudėtingesnė	sudėtingas	ADJ	JJR	Case=Nom|Definite=Ind|Degree=Cmp|Gender=Fem|Number=Sing	7	amod	_	complex|_
5	tautinės	tautinis	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	ethnic|_
6	sąmonės	sąmonė	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	consciousness|_
7	forma	forma	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	form|_
8	,	,	PUNCT	PUNCT	_	9	punct	_	,|_
9	būdinga	būdingas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	acl	_	|_
10	tokiems	toks	DET	DT	Case=Dat|Gender=Masc|Number=Plur	11	det	_	these|_
11	žmonėms	žmogus	NOUN	NN	Case=Dat|Gender=Masc|Number=Plur	9	iobj	_	wife|_
12	kaip	kaip	SCONJ	UH	_	13	case	_	how|_
13	Mykolas	Mykolas	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	11	nmod	_	Mykolas|_
14	Riomeris	Riomeris	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	13	flat	_	|_
15	.	.	PUNCT	PUNCT	_	7	punct	_	.|_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 acl	color:blue
1	Žinoma	žinoti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Part|Voice=Pass	5	parataxis	_	of course|_
2	,	,	PUNCT	PUNCT	_	1	punct	_	,|_
3	tai	tai	PRON	DT	_	5	nsubj	_	this|_
4	tinkamiausias	tinkamas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Sup|Gender=Masc|Number=Sing	5	amod	_	suitable|_
5	būdas	būdas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	way|_
6	:	:	PUNCT	PUNCT	_	12	punct	_	:|_
7	todėl	todėl	ADV	RB	Degree=Pos	12	advmod	_	therefore|_
8	visą	visas	DET	DT	Case=Acc|Gender=Masc|Number=Sing	11	det	_	all|_
9	savo	savo	DET	PRP$	_	11	det	_	one's|_
10	sąmoningą	sąmoningas	ADJ	JJL	Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	sharp,smart|_
11	gyvenimą	gyvenimas	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	12	obl	_	life|_
12	pasisakydavau	pasisakyti	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Reflex=Yes|Tense=PastIter|VerbForm=Fin|Voice=Act	5	parataxis	_	speak|_
13	ir	ir	CCONJ	CC	_	15	cc	_	and|_
14	dabar	dabar	ADV	RB	Degree=Pos	15	advmod	_	now|_
15	pasisakau	pasisakyti	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	12	conj	_	say|_
16	už	už	ADP	UH	_	18	case	_	for|_
17	nepriklausomą	nepriklausyti	VERB	VBNL	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Neg|Reflex=No|Tense=Pres|VerbForm=Part|Voice=Pass	18	acl	_	substantive|_
18	Lietuvą	Lietuva	PROPN	NNP	Case=Acc|Gender=Fem|Number=Sing	12	obl	_	Lithuania|_
19	.	.	PUNCT	PUNCT	_	5	punct	_	.|_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is universal.

877 nodes (2%) are attached to their parents as `acl`.

672 instances of `acl` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84948688711517.

The following 8 pairs of parts of speech are connected with `acl`: [lt-pos/NOUN]()-[lt-pos/VERB]() (817; 93% instances), [lt-pos/CCONJ]()-[lt-pos/VERB]() (17; 2% instances), [lt-pos/PROPN]()-[lt-pos/VERB]() (15; 2% instances), [lt-pos/X]()-[lt-pos/VERB]() (12; 1% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (8; 1% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (5; 1% instances), [lt-pos/NUM]()-[lt-pos/VERB]() (2; 0% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 acl	color:blue
1	Ši	šis	PRON	Pgfsnn	Case=Nom|PronType=Tot	2	nmod	_	_
2	vienuolija	vienuolija	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
3	dalis	dalis	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	2	dep:predn	_	_
4	Ukrainoje	Ukraina	PROPN	Npfslng	Case=Loc|Gender=Fem|Number=Sing	8	dep:adj	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	Lvove	Lvovas	PROPN	Npmslng	Case=Loc|Gender=Masc|Number=Sing	4	dep:adj	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	6	punct	_	_
8	esančio	būti	VERB	Vgpp-smanngn-p	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	9	acl	_	_
9	vienuolyno	vienuolynas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 acl	color:blue
1	Anot	anot	ADP	Sgg	AdpType=Prep	2	case	_	_
2	jos	jis	PRON	Pgfsgn	Case=Nom|PronType=Tot	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	nesirinkti	nesirinkti	VERB	Vgi-----y--y--	Mood=Ind|Polarity=Neg|VerbForm=Fin	2	dep:predv	_	_
5	virtų	virti	VERB	Vgps-pfpnngn-p	Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	7	acl	_	_
6	dešrų	dešra	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	7	dep:obj_co	_	_
7	ar	ar	CCONJ	Cg	_	4	advmod	_	_
8	dešrelių	dešrelė	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	7	dep:obj_co	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 acl	color:blue
1	1990	1990	NUM	M----d-	NumForm=Digit	2	nummod	_	_
2	m	m.	X	Ys	Abbr=Yes	0	root	_	SpaceAfter=No
3	.	.	PUNCT	PUNCT	_	2	punct	_	_
4	Švedijoje	Švedija	PROPN	Npfslng	Case=Loc|Gender=Fem|Number=Sing	5	dep:adj	_	_
5	gimusi	gimti	VERB	Vgpa-sfannnn-p	Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	9	acl	_	_
6	kino	kinas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
7	žvaigždė	žvaigždė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	9	nmod	_	_
8	Greta	Greta	PROPN	Npfsnnf	Case=Nom|Gender=Fem|Number=Sing	9	nmod	_	_
9	Garbo	Garbo	PROPN	Npfsnns	Case=Nom|Gender=Fem|Number=Sing	2	dep:sub	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


