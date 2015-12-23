

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

2453 nodes (2%) are attached to their parents as `cop`.

1976 instances of `cop` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.73216469629026.

The following 19 pairs of parts of speech are connected with `cop`: [eu-pos/NOUN]()-[eu-pos/VERB]() (1071; 44% instances), [eu-pos/ADJ]()-[eu-pos/VERB]() (672; 27% instances), [eu-pos/VERB]()-[eu-pos/VERB]() (454; 19% instances), [eu-pos/ADV]()-[eu-pos/VERB]() (81; 3% instances), [eu-pos/NUM]()-[eu-pos/VERB]() (59; 2% instances), [eu-pos/DET]()-[eu-pos/VERB]() (49; 2% instances), [eu-pos/PROPN]()-[eu-pos/VERB]() (22; 1% instances), [eu-pos/NOUN]()-[eu-pos/AUX]() (12; 0% instances), [eu-pos/ADJ]()-[eu-pos/AUX]() (9; 0% instances), [eu-pos/VERB]()-[eu-pos/AUX]() (9; 0% instances), [eu-pos/PRON]()-[eu-pos/VERB]() (6; 0% instances), [eu-pos/ADJ]()-[eu-pos/ADJ]() (2; 0% instances), [eu-pos/ADJ]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/ADV]()-[eu-pos/AUX]() (1; 0% instances), [eu-pos/AUX]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/CONJ]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/VERB]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/X]()-[eu-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	292	292	NUM	_	_	2	nummod	_	_
2	kiloko	kilo	NOUN	_	Animacy=Inan	3	nmod	_	_
3	harria	harri	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	0	root	_	_
4	da	izan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	3	cop	_	_
5	,	,	PUNCT	_	_	3	punct	_	_
6	eta	eta	CONJ	_	_	4	cc	_	_
7	harrezkero	harrezkero	ADV	_	_	10	advmod	_	_
8	harri	harri	NOUN	_	_	10	dobj	_	_
9	bera	bera	DET	_	Case=Abs|Definite=Def|Number=Sing	8	det	_	_
10	darabilgu	erabili	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=1	4	conj	_	_
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	Hurrengo	hurrengo	ADJ	_	_	2	amod	_	_
2	orrialdeko	orrialde	NOUN	_	Animacy=Inan|Case=Loc|Definite=Def|Number=Sing	3	nmod	_	_
3	mapa	mapa	NOUN	_	Case=Abs|Definite=Def|Number=Sing	4	nsubj	_	_
4	baliagarria	baliagarri	ADJ	_	Case=Abs|Definite=Def|Number=Sing	0	root	_	_
5	izan	izan	VERB	_	VerbForm=Inf	4	cop	_	_
6	dakizuke	*edin	AUX	_	Mood=Pot|Number[abs]=Sing|Number[dat]=Sing|Person[abs]=3|Person[dat]=2	5	aux	_	_
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	Kartzelak	kartzela	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Plur	4	nsubj	_	_
2	gure	gu	PRON	_	PronType=Prs	3	nmod	_	_
3	ezagunez	ezagun	NOUN	_	Case=Ins|Definite=Def|Number=Plur	4	nmod	_	_
4	beteta	bete	VERB	_	VerbForm=Part	0	root	_	_
5	daude	egon	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Person[abs]=3	4	cop	_	_
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


