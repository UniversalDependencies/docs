

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is a language-specific subtype of [expl]().

444 nodes (0%) are attached to their parents as `expl:pv`.

278 instances of `expl:pv` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.28378378378378.

The following 8 pairs of parts of speech are connected with `expl:pv`: [nl-pos/VERB]()-[nl-pos/PRON]() (349; 79% instances), [nl-pos/ADJ]()-[nl-pos/PRON]() (43; 10% instances), [nl-pos/ADP]()-[nl-pos/PRON]() (17; 4% instances), [nl-pos/AUX]()-[nl-pos/PRON]() (16; 4% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (14; 3% instances), [nl-pos/PROPN]()-[nl-pos/PRON]() (2; 0% instances), [nl-pos/SCONJ]()-[nl-pos/PRON]() (2; 0% instances), [nl-pos/PRON]()-[nl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl:pv	color:blue
1	De	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	2	det	_	_
2	aanvalsdrift	aanval_drift	NOUN	N|soort|ev|neut	Number=Sing	3	nsubj	_	_
3	openbaarde	openbaar	VERB	V|refl|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Reflex=Yes|Tense=Past|VerbForm=Fin	0	root	_	_
4	zich	zich	PRON	Pron|ref|3|evofmv	Number=Plur,Sing|Person=3|PronType=Prs|Reflex=Yes	3	expl:pv	_	_
5	op	op	ADP	Prep|voor	AdpType=Prep	7	case	_	_
6	het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	7	det	_	_
7	NK	NK	PROPN	N|eigen|ev|neut	Number=Sing	3	obl	_	_
8	al	al	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	3	advmod	_	_
9	direct	direct	ADJ	Adj|adv|stell|onverv	Degree=Pos|Variant=Short	3	obl	_	_
10	na	na	ADP	Prep|voor	AdpType=Prep	9	case	_	_
11	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	12	det	_	_
12	start	start	NOUN	N|soort|ev|neut	Number=Sing	9	obl	_	SpaceAfter=No
13	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 expl:pv	color:blue
1	Jarenlang	jarenlang	ADJ	Adj|adv|stell|onverv	Degree=Pos|Variant=Short	6	obl	_	_
2	heb	heb	AUX	V|hulp|ott|1|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	aux	_	_
3	ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
4	me	me	PRON	Pron|ref|1|ev	Number=Sing|Person=1|PronType=Prs|Reflex=Yes	6	expl:pv	_	_
5	daarover	daarover	ADV	Adv|pron|aanw	PronType=Dem	6	advmod	_	_
6	schuldig	schuldig	ADJ	Adj|attr|stell|onverv	Degree=Pos	0	root	_	_
7	gevoeld	voel	AUX	V|refl|verldw|onverv	Reflex=Yes|Tense=Past|VerbForm=Part	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	Punc|punt	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 expl:pv	color:blue
1	hij	hij	PRON	Pron|per|3|ev|nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	houdt	houd	VERB	V|trans|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Subcat=Tran|Tense=Pres|VerbForm=Fin	0	root	_	_
3	het	het	PRON	Pron|per|3|ev|datofacc	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
4	voor	voor	ADP	Prep|voor	AdpType=Prep	2	obj	_	_
5	zich	zich	PRON	Pron|ref|3|evofmv	Number=Plur,Sing|Person=3|PronType=Prs|Reflex=Yes	4	expl:pv	_	SpaceAfter=No
6	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


