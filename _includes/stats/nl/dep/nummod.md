

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

1861 nodes (1%) are attached to their parents as `nummod`.

1595 instances of `nummod` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.48361096184847.

The following 9 pairs of parts of speech are connected with `nummod`: [nl-pos/NOUN]()-[nl-pos/NUM]() (1761; 95% instances), [nl-pos/PROPN]()-[nl-pos/NUM]() (30; 2% instances), [nl-pos/ADJ]()-[nl-pos/NUM]() (25; 1% instances), [nl-pos/ADV]()-[nl-pos/NUM]() (17; 1% instances), [nl-pos/VERB]()-[nl-pos/NUM]() (11; 1% instances), [nl-pos/PRON]()-[nl-pos/NUM]() (9; 0% instances), [nl-pos/X]()-[nl-pos/NUM]() (5; 0% instances), [nl-pos/SYM]()-[nl-pos/NUM]() (2; 0% instances), [nl-pos/SCONJ]()-[nl-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Hij	hij	PRON	Pron|per|3|ev|nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	rekende	reken	VERB	V|intrans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Intr|Tense=Past|VerbForm=Fin	0	root	_	_
3	op	op	ADP	Prep|voor	AdpType=Prep	5	case	_	_
4	drie	drie	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	5	nummod	_	_
5	overwinningen	overwinning	NOUN	N|soort|mv|neut	Number=Plur	2	dobj	_	_
6	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	BASISTAKENPAKKET	basis_taken_pakket	ADP	Prep|voor	AdpType=Prep	0	root	_	_
2	JEUGDGEZONDHEIDSZORG	jeugd_gezondheid_zorg	PROPN	N|eigen|ev|neut	Number=Sing	1	dep	_	_
3	0-19	0-19	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	4	nummod	_	_
4	JAAR	JAAR	PROPN	N|eigen|ev|neut	Number=Sing	1	dep	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Een_stuk_of	Een_stuk_of	X	Art_N_Conj	Number=Sing|PronType=Ind	3	advmod	_	_
2	drie	drie	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	3	cc	_	_
3	vier	vier	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	4	nummod	_	_
4	aanwezigen	aanwezig	ADJ	Adj|zelfst|stell|vervmv	Degree=Pos|Number=Plur	0	root	_	_

~~~


