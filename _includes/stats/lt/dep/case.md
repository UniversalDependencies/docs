

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is universal.

198 nodes (4%) are attached to their parents as `case`.

197 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7979797979798.

The following 18 pairs of parts of speech are connected with `case`: [lt-pos/NOUN]()-[lt-pos/ADP]() (104; 53% instances), [lt-pos/PRON]()-[lt-pos/ADP]() (34; 17% instances), [lt-pos/PROPN]()-[lt-pos/ADP]() (23; 12% instances), [lt-pos/ADV]()-[lt-pos/ADP]() (10; 5% instances), [lt-pos/ADJ]()-[lt-pos/ADP]() (5; 3% instances), [lt-pos/NOUN]()-[lt-pos/SCONJ]() (4; 2% instances), [lt-pos/ADJ]()-[lt-pos/CCONJ]() (2; 1% instances), [lt-pos/ADV]()-[lt-pos/SCONJ]() (2; 1% instances), [lt-pos/DET]()-[lt-pos/ADP]() (2; 1% instances), [lt-pos/NOUN]()-[lt-pos/CCONJ]() (2; 1% instances), [lt-pos/PROPN]()-[lt-pos/SCONJ]() (2; 1% instances), [lt-pos/VERB]()-[lt-pos/ADP]() (2; 1% instances), [lt-pos/ADJ]()-[lt-pos/SCONJ]() (1; 1% instances), [lt-pos/CCONJ]()-[lt-pos/ADP]() (1; 1% instances), [lt-pos/DET]()-[lt-pos/SCONJ]() (1; 1% instances), [lt-pos/NOUN]()-[lt-pos/ADV]() (1; 1% instances), [lt-pos/NOUN]()-[lt-pos/NOUN]() (1; 1% instances), [lt-pos/PRON]()-[lt-pos/SCONJ]() (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 case	color:blue
1	Ko	kas	ADV	WRB	Degree=Pos	7	parataxis	_	En=what
2	gero	geras	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	fixed	_	En=good|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	1	punct	_	En=,
4	tas	tas	DET	DT	Case=Nom|Gender=Masc|Number=Sing	6	det	_	En=those
5	grįžtamasis	grįžti	VERB	VBNL	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Part|Voice=Pass	6	amod	_	En=return
6	ryšys	ryšys	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	En=connection
7	veikia	veikti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	En=operate
8	nuo	nuo	ADP	UH	_	10	case	_	En=since
9	1939	1939	ADJ	ORD	_	10	amod	_	En=1939
10	metų	metai	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	7	obl	_	En=years|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	7	punct	_	En=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	Po	po	ADP	UH	_	2	case	_	En=after
2	to	tas	PRON	DT	Case=Gen|Gender=Masc|Number=Sing	4	obl	_	En=that
3	buvo	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	En=be
4	įrašinėjama	įrašinėti	VERB	VBNH	Definite=Ind|Gender=Neut|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	En=write
5	iš	iš%naujo	ADV	RB	Degree=Pos	4	advmod	_	En=again
6	naujo	iš%naujo	ADV	RB	Degree=Pos	5	fixed	_	En=again|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	4	punct	_	En=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Grįžkime	grįžti	VERB	VBC	Mood=Imp|Number=Plur|Person=1|Polarity=Pos|Reflex=No|VerbForm=Fin|Voice=Act	0	root	_	En=return
2	prie	prie	ADP	UH	_	3	case	_	En=to
3	Aristofano	Aristofano	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	1	obl	_	En=Aristofane|SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	1	punct	_	En=.

~~~


