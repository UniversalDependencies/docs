

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is a language-specific subtype of [obl]().

7 nodes (0%) are attached to their parents as `obl:agent`.

4 instances of `obl:agent` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.42857142857143.

The following 2 pairs of parts of speech are connected with `obl:agent`: [lt-pos/VERB]()-[lt-pos/NOUN]() (5; 71% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (2; 29% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 obl:agent	color:blue
1	Paskutiniai	paskutinis	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	_	_|_
2	žemyn	žemyn	ADV	RB	Degree=Pos|Polarity=Pos	3	advmod	_	down|_
3	smingančio	smigti	VERB	VBNL	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Part|Voice=Act	4	amod	_	fall|_
4	Tu-154	tu-154	PROPN	NNP	_	5	nmod	_	Tu-154|_
5	kapitono	kapitonas	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	capitain|_
6	padėjėjo	padėjėjas	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	assistant|_
7	žodžiai	žodis	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	8	nsubj	_	word|_
8	fiksuoti	fiksuoti	VERB	VBNH	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	fixate|_
9	lietuvišku	lietuviškas	ADJ	JJL	Case=Ins|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	amod	_	Lithianian|_
10	prietaisu	prietaisas	NOUN	NN	Case=Ins|Gender=Masc|Number=Sing	8	obl:agent	_	device|_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:agent	color:blue
1	Pasak	Pasak	ADP	UH	_	4	case	_	according to|_
2	jų	jų	PRON	PRP	Case=Gen	3	obl:agent	_	their|_
3	peršamo	piršti	VERB	VBC	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Part|Voice=Pass	4	nmod	_	|_
4	mentaliteto	mentalitetas	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	9	parataxis	_	mentality|_
5	,	,	PUNCT	PUNCT	_	4	punct	_	,|_
6	Rusijos	Rusija	PROPN	NNP	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	Russia|_
7	interesai	interesas	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	9	nsubj	_	interest|_
8	visada	visada	ADV	RB	Degree=Pos	9	advmod	_	always|_
9	priešiški	priešiškas	ADJ	RB	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	hodtile|_
10	Lietuvos	Lietuva	PROPN	NNP	Case=Gen|Gender=Fem|Number=Sing	11	nmod	_	Lithuania|_
11	interesams	interesas	NOUN	NN	Case=Dat|Gender=Masc|Number=Plur	9	obj	_	interest|_
12	,	,	PUNCT	PUNCT	_	15	punct	_	,|_
13	ir	ir	CCONJ	CC	_	15	cc	_	and|_
14	kitaip	kitaip	ADV	RB	Degree=Pos	15	advmod	_	otherwise|_
15	negali	galėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	9	conj	_	cannot|_
16	būti	būti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	15	xcomp	_	be|_
17	.	.	PUNCT	PUNCT	_	9	punct	_	.|_

~~~


