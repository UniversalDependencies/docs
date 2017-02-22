

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is universal.

344 nodes (6%) are attached to their parents as `nmod`.

275 instances of `nmod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.59302325581395.

The following 20 pairs of parts of speech are connected with `nmod`: [lt-pos/NOUN]()-[lt-pos/NOUN]() (204; 59% instances), [lt-pos/NOUN]()-[lt-pos/PROPN]() (83; 24% instances), [lt-pos/NOUN]()-[lt-pos/PRON]() (14; 4% instances), [lt-pos/NOUN]()-[lt-pos/ADJ]() (9; 3% instances), [lt-pos/PROPN]()-[lt-pos/NOUN]() (6; 2% instances), [lt-pos/VERB]()-[lt-pos/NOUN]() (6; 2% instances), [lt-pos/ADJ]()-[lt-pos/NOUN]() (4; 1% instances), [lt-pos/PROPN]()-[lt-pos/PROPN]() (4; 1% instances), [lt-pos/ADV]()-[lt-pos/NOUN]() (2; 1% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (2; 1% instances), [lt-pos/ADJ]()-[lt-pos/ADJ]() (1; 0% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (1; 0% instances), [lt-pos/NOUN]()-[lt-pos/PART]() (1; 0% instances), [lt-pos/NUM]()-[lt-pos/ADV]() (1; 0% instances), [lt-pos/PRON]()-[lt-pos/PRON]() (1; 0% instances), [lt-pos/PROPN]()-[lt-pos/PRON]() (1; 0% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/VERB]()-[lt-pos/PART]() (1; 0% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (1; 0% instances), [lt-pos/VERB]()-[lt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	Jis	jis	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	he|_
2	buvo	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	be|_
3	pagal	pagal	ADP	UH	_	4	case	_	under|_
4	išgales	išgalė	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur	5	obl	_	possibility|_
5	tęsiamas	tęsti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	continue|_
6	nacių	nacis	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	Nazi|_
7	okupacijos	okupacija	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	occupation|_
8	metais	metai	NOUN	NN	Case=Ins|Gender=Masc|Number=Plur	5	obl	_	years|_
9	.	.	PUNCT	PUNCT	_	5	punct	_	.|_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	Čia	čia	CCONJ	CC	_	5	cc	_	here|_
2	SSRS	SSRS	PROPN	NNP	_	3	nmod	_	SSRS|_
3	okupacijos	okupacija	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	0|_
4	laikais	laikas	NOUN	NN	Case=Ins|Gender=Masc|Number=Plur	5	obl	_	time|_
5	veikė	veikti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=PastSimp	0	root	_	function|_
6	milžiniška	milžiniškas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	_	big|_
7	gamykla	gamykla	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	factory|_
8	„	„	PUNCT	PUNCT	_	9	punct	_	„|_
9	Vilma	Vilma	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	7	flat	_	Vilma|_
10	“	“	PUNCT	PUNCT	_	9	punct	_	“|_
11	.	.	PUNCT	PUNCT	_	5	punct	_	.|_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod	color:blue
1	Tuo	tuo	SCONJ	UH	_	5	advmod	_	meanwhile|_
2	tarpu	tarpu	SCONJ	UH	_	1	fixed	_	while|_
3	nepriklausomybė	nepriklausomybė	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Polarity=Neg	5	nsubj	_	independence|_
4	nėra	būti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	be|_
5	tikslas	tikslas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	target|_
6	sau	savęs	PRON	PRP	Case=Dat	5	nmod	_	oneself|_
7	,	,	PUNCT	PUNCT	_	9	punct	_	,|_
8	o	o	CCONJ	CC	_	9	cc	_	and|_
9	būdas	būdas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	5	conj	_	way|_
10	užtikrinti	užtikrinti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	9	xcomp	_	|_
11	tautos	tauta	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	nation|_
12	gerovę	gerovė	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	10	obj	_	well-being|_
13	.	.	PUNCT	PUNCT	_	5	punct	_	.|_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is universal.

5196 nodes (13%) are attached to their parents as `nmod`.

4552 instances of `nmod` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49441878367975.

The following 40 pairs of parts of speech are connected with `nmod`: [lt-pos/NOUN]()-[lt-pos/NOUN]() (2661; 51% instances), [lt-pos/NOUN]()-[lt-pos/PRON]() (1116; 21% instances), [lt-pos/NOUN]()-[lt-pos/PROPN]() (318; 6% instances), [lt-pos/NOUN]()-[lt-pos/X]() (206; 4% instances), [lt-pos/PROPN]()-[lt-pos/PROPN]() (117; 2% instances), [lt-pos/PROPN]()-[lt-pos/X]() (114; 2% instances), [lt-pos/PROPN]()-[lt-pos/NOUN]() (104; 2% instances), [lt-pos/ADV]()-[lt-pos/NOUN]() (77; 1% instances), [lt-pos/NUM]()-[lt-pos/NOUN]() (64; 1% instances), [lt-pos/CCONJ]()-[lt-pos/NOUN]() (61; 1% instances), [lt-pos/X]()-[lt-pos/NOUN]() (55; 1% instances), [lt-pos/NUM]()-[lt-pos/X]() (42; 1% instances), [lt-pos/PRON]()-[lt-pos/NOUN]() (36; 1% instances), [lt-pos/PRON]()-[lt-pos/PRON]() (33; 1% instances), [lt-pos/X]()-[lt-pos/X]() (31; 1% instances), [lt-pos/ADJ]()-[lt-pos/PRON]() (21; 0% instances), [lt-pos/CCONJ]()-[lt-pos/PRON]() (21; 0% instances), [lt-pos/VERB]()-[lt-pos/NOUN]() (16; 0% instances), [lt-pos/PROPN]()-[lt-pos/PRON]() (15; 0% instances), [lt-pos/ADJ]()-[lt-pos/NOUN]() (13; 0% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (12; 0% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (10; 0% instances), [lt-pos/PUNCT]()-[lt-pos/PRON]() (8; 0% instances), [lt-pos/SYM]()-[lt-pos/NOUN]() (8; 0% instances), [lt-pos/NUM]()-[lt-pos/SYM]() (6; 0% instances), [lt-pos/X]()-[lt-pos/PRON]() (6; 0% instances), [lt-pos/CCONJ]()-[lt-pos/PROPN]() (4; 0% instances), [lt-pos/NUM]()-[lt-pos/PRON]() (4; 0% instances), [lt-pos/ADV]()-[lt-pos/PRON]() (2; 0% instances), [lt-pos/PRON]()-[lt-pos/PROPN]() (2; 0% instances), [lt-pos/PRON]()-[lt-pos/X]() (2; 0% instances), [lt-pos/VERB]()-[lt-pos/PROPN]() (2; 0% instances), [lt-pos/VERB]()-[lt-pos/X]() (2; 0% instances), [lt-pos/ADV]()-[lt-pos/X]() (1; 0% instances), [lt-pos/NOUN]()-[lt-pos/CCONJ]() (1; 0% instances), [lt-pos/PART]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/PART]()-[lt-pos/PRON]() (1; 0% instances), [lt-pos/PUNCT]()-[lt-pos/PROPN]() (1; 0% instances), [lt-pos/PUNCT]()-[lt-pos/X]() (1; 0% instances), [lt-pos/X]()-[lt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	viešinti	viešinti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	0	root	_	_
2	aukštųjų	aukštas	ADJ	Agpfpgy	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	3	amod	_	_
3	mokyklų	mokykla	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	4	nmod	_	_
4	vadovų	vadovas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	5	nmod	_	_
5	atlyginimus	atlyginimas	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	1	obj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	Dirbti	dirbti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	0	root	_	_
2	ne	ne	PART	Qg	_	3	advmod:emph	_	_
3	tos pačios	tas pats	PRON	Pgfpnn	Case=Nom|PronType=Tot	4	nmod	_	_
4	sąlygos	sąlyga	NOUN	Ncfpnn-	Case=Nom|Gender=Fem|Number=Plur	1	dep:predn	_	SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	Balandžio	balandis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	0	root	_	_
2	Lietuvos	Lietuva	PROPN	Npfsgng	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
3	istorijoje	istorija	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	1	dep:adj	_	_

~~~


