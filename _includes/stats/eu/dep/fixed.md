

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

230 nodes (0%) are attached to their parents as `fixed`.

230 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12173913043478.

The following 11 pairs of parts of speech are connected with `fixed`: [eu-pos/ADV]()-[eu-pos/ADV]() (74; 32% instances), [eu-pos/ADV]()-[eu-pos/CCONJ]() (60; 26% instances), [eu-pos/NUM]()-[eu-pos/CCONJ]() (31; 13% instances), [eu-pos/NOUN]()-[eu-pos/DET]() (17; 7% instances), [eu-pos/ADV]()-[eu-pos/ADJ]() (12; 5% instances), [eu-pos/DET]()-[eu-pos/DET]() (11; 5% instances), [eu-pos/NUM]()-[eu-pos/NUM]() (11; 5% instances), [eu-pos/DET]()-[eu-pos/NOUN]() (7; 3% instances), [eu-pos/CCONJ]()-[eu-pos/CCONJ]() (3; 1% instances), [eu-pos/VERB]()-[eu-pos/CCONJ]() (3; 1% instances), [eu-pos/NOUN]()-[eu-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 fixed	color:blue
1	Lehenik	lehenik	ADV	_	_	6	advmod	_	_
2	eta	eta	CCONJ	_	_	1	fixed	_	_
3	behin	behin	ADV	_	_	1	fixed	_	_
4	diskrezio	diskrezio	NOUN	_	_	6	obj	_	_
5	gutxi	gutxi	DET	_	Case=Abs|Definite=Ind	4	det	_	_
6	izan	izan	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
7	dutelako	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=3	6	aux	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 fixed	color:blue
1	Baina	baina	CCONJ	_	_	9	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	9	punct	_	_
3	iduriz	iduri	NOUN	_	Animacy=Inan|Case=Ins|Definite=Ind	9	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	9	punct	_	_
5	berriz	berriz	ADV	_	_	7	advmod	_	_
6	ere	ere	CCONJ	_	_	5	fixed	_	_
7	jokatzeko	jokatu	VERB	_	Case=Loc	8	advcl	_	_
8	moduan	modu	NOUN	_	Animacy=Inan|Case=Ine|Definite=Def|Number=Sing	9	obl	_	_
9	da	izan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	0	root	_	_
10	Aranzabal	Aranzabal	PROPN	_	Case=Abs|Definite=Def|Number=Sing	9	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Batez	bat	NUM	_	NumType=Card	7	obl	_	_
2	ere	ere	CCONJ	_	_	1	fixed	_	_
3	hiru	hiru	NUM	_	NumType=Card	4	nummod	_	_
4	jokalari	jokalari	NOUN	_	Animacy=Anim|Case=Abs|Definite=Ind	5	obj	_	_
5	fitxatu	fitxatu	VERB	_	VerbForm=Part	7	xcomp	_	_
6	nahi	nahi	NOUN	_	Case=Abs|Definite=Ind	7	compound	_	_
7	ditugu	ukan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Number[erg]=Plur|Person[abs]=3|Person[erg]=1	0	root	_	SpaceAfter=No
8	:	:	PUNCT	_	_	7	punct	_	_

~~~


