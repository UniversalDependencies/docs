

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

137 nodes (0%) are attached to their parents as `xcomp`.

90 instances of `xcomp` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.10948905109489.

The following 10 pairs of parts of speech are connected with `xcomp`: [nl-pos/VERB]()-[nl-pos/VERB]() (66; 48% instances), [nl-pos/AUX]()-[nl-pos/VERB]() (43; 31% instances), [nl-pos/ADJ]()-[nl-pos/VERB]() (11; 8% instances), [nl-pos/ADV]()-[nl-pos/VERB]() (4; 3% instances), [nl-pos/NOUN]()-[nl-pos/VERB]() (3; 2% instances), [nl-pos/SCONJ]()-[nl-pos/VERB]() (3; 2% instances), [nl-pos/X]()-[nl-pos/VERB]() (3; 2% instances), [nl-pos/AUX]()-[nl-pos/NOUN]() (2; 1% instances), [nl-pos/AUX]()-[nl-pos/ADJ]() (1; 1% instances), [nl-pos/VERB]()-[nl-pos/AUX]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
1	Ze	ze	PRON	Pron|per|3|evofmv|nom	Case=Nom|Number=Plur,Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	denkt	denk	VERB	V|intrans|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Subcat=Intr|Tense=Pres|VerbForm=Fin	0	root	_	_
3	aan	aan	ADP	Prep|voor	AdpType=Prep	5	mark	_	_
4	het	het	PRON	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	5	nmod	_	_
5	samenvoegen	voeg_samen	VERB	V|intrans|inf|subst	Subcat=Intr|VerbForm=Inf	2	xcomp	_	_
6	van	van	ADP	Prep|voor	AdpType=Prep	7	case	_	_
7	scholen	school	NOUN	N|soort|mv|neut	Number=Plur	5	nmod	_	_
8	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 4 xcomp	color:blue
1	Sterry	Sterry	PROPN	N|eigen|ev|neut	Number=Sing	2	nsubj	_	_
2	wist	weet	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
3	het	het	PRON	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	4	nmod	_	_
4	preken	preek	VERB	V|trans|inf|subst	Subcat=Tran|VerbForm=Inf	12	xcomp	_	_
5	28	28	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	6	nummod	_	_
6	uur	uur	NOUN	N|soort|ev|neut	Number=Sing	12	nmod	_	_
7	en	en	CONJ	Conj|neven	_	6	cc	_	_
8	45	45	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	9	nummod	_	_
9	minuten	minuut	NOUN	N|soort|mv|neut	Number=Plur	6	conj	_	_
10	vol	vol	ADJ	Adj|attr|stell|onverv	Degree=Pos	12	compound:prt	_	_
11	te	te	ADP	Prep|voorinf	AdpType=Prep|PartType=Inf	12	mark	_	_
12	houden	houd_vol	AUX	V|trans|inf	Subcat=Tran|VerbForm=Inf	2	aux	_	_
13	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 xcomp	color:blue
1	ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
2	vind	vind	VERB	V|trans|ott|1|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Subcat=Tran|Tense=Pres|VerbForm=Fin	12	cop	_	_
3	fietsen	fiets	VERB	V|intrans|inf	Subcat=Intr|VerbForm=Inf	12	xcomp	_	_
4	in	in	ADP	Prep|voor	AdpType=Prep	6	case	_	_
5	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	6	det	_	_
6	bergen	berg	NOUN	N|soort|mv|neut	Number=Plur	3	nmod	_	_
7	vind	vind	AUX	V|trans|ott|1|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Subcat=Tran|Tense=Pres|VerbForm=Fin	12	aux	_	_
8	ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
9	altijd	altijd	ADV	Adv|gew|aanw	PronType=Dem	12	advmod	_	_
10	wel	wel	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	12	advmod	_	_
11	heel	heel	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	12	advmod	_	_
12	lekker	lekker	ADJ	Adj|attr|stell|onverv	Degree=Pos	0	root	_	_

~~~


