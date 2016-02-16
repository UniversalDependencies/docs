

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

610 nodes (0%) are attached to their parents as `csubj`.

400 instances of `csubj` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.03606557377049.

The following 28 pairs of parts of speech are connected with `csubj`: [nl-pos/VERB]()-[nl-pos/VERB]() (172; 28% instances), [nl-pos/ADJ]()-[nl-pos/VERB]() (136; 22% instances), [nl-pos/NOUN]()-[nl-pos/VERB]() (100; 16% instances), [nl-pos/AUX]()-[nl-pos/VERB]() (71; 12% instances), [nl-pos/ADJ]()-[nl-pos/AUX]() (24; 4% instances), [nl-pos/VERB]()-[nl-pos/AUX]() (14; 2% instances), [nl-pos/ADV]()-[nl-pos/VERB]() (12; 2% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (12; 2% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (11; 2% instances), [nl-pos/PRON]()-[nl-pos/VERB]() (9; 1% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (7; 1% instances), [nl-pos/NOUN]()-[nl-pos/AUX]() (7; 1% instances), [nl-pos/AUX]()-[nl-pos/AUX]() (5; 1% instances), [nl-pos/ADJ]()-[nl-pos/ADJ]() (4; 1% instances), [nl-pos/ADJ]()-[nl-pos/NOUN]() (4; 1% instances), [nl-pos/AUX]()-[nl-pos/ADJ]() (4; 1% instances), [nl-pos/VERB]()-[nl-pos/PRON]() (3; 0% instances), [nl-pos/ADJ]()-[nl-pos/PRON]() (2; 0% instances), [nl-pos/X]()-[nl-pos/ADJ]() (2; 0% instances), [nl-pos/X]()-[nl-pos/AUX]() (2; 0% instances), [nl-pos/X]()-[nl-pos/VERB]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/SCONJ]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/AUX]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/AUX]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj	color:blue
1	het	het	PRON	Pron|per|3|ev|nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	verbaast	verbaas	VERB	V|trans|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Subcat=Tran|Tense=Pres|VerbForm=Fin	0	root	_	_
3	me	me	PRON	Pron|per|1|ev|datofacc	Case=Acc,Dat|Number=Sing|Person=1|PronType=Prs	2	dobj	_	_
4	dat	dat	SCONJ	Conj|onder|metfin	_	7	mark	_	_
5	je	je	PRON	Pron|onbep|neut|zelfst	PronType=Ind	7	nsubj	_	_
6	dat	dat	PRON	Pron|aanw|neut|zelfst	PronType=Dem	7	dobj	_	_
7	weet	weet	VERB	V|trans|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Subcat=Tran|Tense=Pres|VerbForm=Fin	2	csubj	_	_
8	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 csubj	color:blue
1	welke	welke	PRON	Pron|vrag|neut|zelfst	PronType=Int	2	nmod	_	_
2	boeken	boeken	NOUN	N|soort|mv|neut	Number=Plur	5	dobj	_	_
3	jij	jij	PRON	Pron|per|2|ev|nom	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
4	zoal	zoal	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	5	advmod	_	_
5	leest	lees	VERB	V|trans|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Subcat=Tran|Tense=Pres|VerbForm=Fin	8	csubj	_	_
6	laat	laat	VERB	V|hulp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	8	cop	_	_
7	me	me	PRON	Pron|per|1|ev|datofacc	Case=Acc,Dat|Number=Sing|Person=1|PronType=Prs	8	dobj	_	_
8	koud	koud	ADJ	Adj|attr|stell|onverv	Degree=Pos	0	root	_	_
9	.	.	PUNCT	Punc|punt	PunctType=Peri	8	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 csubj	color:blue
1	Het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	5	nsubj	_	_
2	is	ben	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux,Cop	5	cop	_	_
3	een	een	DET	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	5	det	_	_
4	publiek	publiek	NOUN	N|soort|ev|neut	Number=Sing	5	nmod	_	_
5	geheim	geheim	NOUN	N|soort|ev|neut	Number=Sing	0	root	_	_
6	dat	dat	SCONJ	Conj|onder|metfin	_	11	mark	_	_
7	er	er	ADV	Adv|gew|er	AdvType=Ex	11	advmod	_	_
8	in	in	ADP	Prep|voor	AdpType=Prep	9	case	_	_
9	Limburg	Limburg	PROPN	N|eigen|ev|neut	Number=Sing	11	nmod	_	_
10	atoomwapens	atoomwapen	NOUN	N|soort|mv|neut	Number=Plur	11	nsubj	_	_
11	liggen	lig	VERB	V|intrans|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Intr|Tense=Pres|VerbForm=Fin	5	csubj	_	_

~~~


