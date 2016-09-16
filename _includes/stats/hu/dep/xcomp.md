

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

311 nodes (1%) are attached to their parents as `xcomp`.

281 instances of `xcomp` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.67845659163987.

The following 6 pairs of parts of speech are connected with `xcomp`: [hu-pos/VERB]()-[hu-pos/VERB]() (266; 86% instances), [hu-pos/ADJ]()-[hu-pos/VERB]() (34; 11% instances), [hu-pos/AUX]()-[hu-pos/VERB]() (8; 3% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	miniszter	miniszter	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nsubj	_	_
3	fel	fel	ADV	_	Degree=Pos	5	compound:preverb	_	_
4	akarja	akar	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	menteni	ment	VERB	_	VerbForm=Inf|Voice=Act	4	xcomp	_	_
6	Kovácsot	Kovács	PROPN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	dobj	_	_
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 xcomp	color:blue
1	Jó	jó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
2	lenne	lesz	VERB	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	ezt	ez	DET	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	5	det	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	tendenciát	tendencia	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	dobj	_	_
6	folytatni	folytat	VERB	_	VerbForm=Inf|Voice=Act	1	xcomp	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	9	det	_	_
8	2000.	2000.	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	9	amod:att	_	_
9	évben	év	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
10	is	is	CONJ	_	_	9	cc	_	_
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 xcomp	color:blue
1	Könnyen	könnyű	ADJ	_	Case=Ess|Degree=Pos|Number=Sing	2	nmod	_	_
2	lehet	lehet	VERB	_	Definite=Ind|Mood=Pot|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ugyanis	ugyanis	CONJ	_	_	2	cc	_	_
4	,	,	PUNCT	_	_	2	punct	_	_
5	hogy	hogy	SCONJ	_	_	9	mark	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	cég	cég	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	_
8	úgy	úgy	ADV	_	PronType=Dem	9	advmod:mode	_	_
9	fog	fog	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	_	_
10	taktikázni	taktikázik	VERB	_	VerbForm=Inf|Voice=Act	9	xcomp	_	_
11	,	,	PUNCT	_	_	9	punct	_	_
12	még	még	ADV	_	_	15	advmod:tlocy	_	_
13	véletlenül	véletlenül	ADV	_	_	15	advmod:mode	_	_
14	se	se	ADV	_	PronType=Neg	15	neg	_	_
15	találjon	talál	VERB	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	_	_
16	rájuk	rá	PRON	_	Case=Sub|Number=Plur|Person=3|PronType=Prs	15	nmod:obl	_	_
17	vevőt	vevő	NOUN	_	Case=Acc|Number=Sing	15	dobj	_	_
18	.	.	PUNCT	_	_	2	punct	_	_

~~~


