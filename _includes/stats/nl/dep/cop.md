

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

4171 nodes (2%) are attached to their parents as `cop`.

2489 instances of `cop` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.56581155598178.

The following 49 pairs of parts of speech are connected with `cop`: [nl-pos/NOUN]()-[nl-pos/AUX]() (1391; 33% instances), [nl-pos/ADJ]()-[nl-pos/AUX]() (1358; 33% instances), [nl-pos/PRON]()-[nl-pos/AUX]() (311; 7% instances), [nl-pos/VERB]()-[nl-pos/AUX]() (281; 7% instances), [nl-pos/ADJ]()-[nl-pos/VERB]() (275; 7% instances), [nl-pos/X]()-[nl-pos/AUX]() (122; 3% instances), [nl-pos/NOUN]()-[nl-pos/VERB]() (109; 3% instances), [nl-pos/ADV]()-[nl-pos/AUX]() (86; 2% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (56; 1% instances), [nl-pos/PROPN]()-[nl-pos/AUX]() (35; 1% instances), [nl-pos/NUM]()-[nl-pos/AUX]() (27; 1% instances), [nl-pos/X]()-[nl-pos/VERB]() (20; 0% instances), [nl-pos/SCONJ]()-[nl-pos/AUX]() (12; 0% instances), [nl-pos/ADV]()-[nl-pos/VERB]() (11; 0% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (9; 0% instances), [nl-pos/ADJ]()-[nl-pos/NOUN]() (5; 0% instances), [nl-pos/PROPN]()-[nl-pos/VERB]() (5; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (4; 0% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (4; 0% instances), [nl-pos/NOUN]()-[nl-pos/X]() (4; 0% instances), [nl-pos/SCONJ]()-[nl-pos/VERB]() (4; 0% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (4; 0% instances), [nl-pos/ADJ]()-[nl-pos/NUM]() (3; 0% instances), [nl-pos/ADJ]()-[nl-pos/PRON]() (3; 0% instances), [nl-pos/ADJ]()-[nl-pos/PROPN]() (3; 0% instances), [nl-pos/ADV]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/DET]()-[nl-pos/AUX]() (2; 0% instances), [nl-pos/NOUN]()-[nl-pos/NUM]() (2; 0% instances), [nl-pos/NOUN]()-[nl-pos/PROPN]() (2; 0% instances), [nl-pos/VERB]()-[nl-pos/PRON]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/ADP]()-[nl-pos/AUX]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/AUX]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/SYM]() (1; 0% instances), [nl-pos/NUM]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/SCONJ]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/SCONJ]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/X]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/X]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/X]()-[nl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	5	punct	_	_
2	Ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
3	ben	ben	AUX	V|hulpofkopp|ott|1|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|VerbType=Aux,Cop	5	cop	_	_
4	geen	geen	PRON	Pron|onbep|neut|attr	PronType=Ind	5	nmod	_	_
5	lap	lap	NOUN	N|soort|ev|neut	Number=Sing	0	root	_	_
6	vlees	vlees	NOUN	N|soort|ev|neut	Number=Sing	5	nmod	_	_
7	.	.	PUNCT	Punc|punt	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 cop	color:blue
1	Lurling	Lurling	NOUN	N|soort|ev|neut	Number=Sing	7	nsubj	_	_
2	was	ben	AUX	V|hulpofkopp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|VerbType=Aux,Cop	7	cop	_	_
3	in	in	ADP	Prep|voor	AdpType=Prep	6	case	_	_
4	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	6	det	_	_
5	51ste	51ste	ADJ	Num|rang|bep|attr|onverv	Definite=Def|NumType=Ord	6	amod	_	_
6	minuut	minuut	NOUN	N|soort|ev|neut	Number=Sing	7	nmod	_	_
7	succesvol	succesvol	ADJ	Adj|attr|stell|onverv	Degree=Pos	0	root	_	_
8	.	.	PUNCT	Punc|punt	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cop	color:blue
1	Dat	dat	PRON	Pron|aanw|neut|zelfst	PronType=Dem	2	nsubj	_	_
2	kan	kan	VERB	V|hulp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	0	root	_	_
3	er	er	ADV	Adv|gew|er	AdvType=Ex	5	advmod	_	_
4	maar	maar	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	5	advmod	_	_
5	een	één	PRON	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	2	aux	_	_
6	zijn	ben	AUX	V|intrans|inf|subst	Subcat=Intr|VerbForm=Inf	5	cop	_	_
7	en	en	CONJ	Conj|neven	_	2	cc	_	_
8	dat	dat	PRON	Pron|aanw|neut|zelfst	PronType=Dem	11	nsubj	_	_
9	is	ben	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux,Cop	11	cop	_	_
10	nu	nu	ADV	Adv|gew|aanw	PronType=Dem	11	advmod	_	_
11	Willem-Alexander	Willem-Alexander	PROPN	N|eigen|ev|neut	Number=Sing	2	conj	_	_
12	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


