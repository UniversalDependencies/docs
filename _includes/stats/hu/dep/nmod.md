

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.
There are 4 language-specific subtypes of `nmod`: [nmod:att](), [nmod:attlvc](), [nmod:obl](), [nmod:obllvc]().

421 nodes (2%) are attached to their parents as `nmod`.

344 instances of `nmod` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.31828978622328.

The following 19 pairs of parts of speech are connected with `nmod`: [hu-pos/VERB]()-[hu-pos/NOUN]() (264; 63% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (54; 13% instances), [hu-pos/VERB]()-[hu-pos/PROPN]() (23; 5% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (18; 4% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (14; 3% instances), [hu-pos/ADJ]()-[hu-pos/PROPN]() (11; 3% instances), [hu-pos/VERB]()-[hu-pos/DET]() (6; 1% instances), [hu-pos/NOUN]()-[hu-pos/PROPN]() (5; 1% instances), [hu-pos/ADV]()-[hu-pos/NOUN]() (4; 1% instances), [hu-pos/NOUN]()-[hu-pos/DET]() (4; 1% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (4; 1% instances), [hu-pos/PRON]()-[hu-pos/PROPN]() (3; 1% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (3; 1% instances), [hu-pos/NOUN]()-[hu-pos/NUM]() (2; 0% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (2; 0% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/VERB]() (1; 0% instances), [hu-pos/X]()-[hu-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod	color:blue
1	Szakmai	szakmai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	amod:att	_	_
2	szervezetek	szervezet	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nsubj	_	_
3	is	is	CONJ	_	_	2	cc	_	_
4	tiltakoznak	tiltakozik	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	Jeszenszky	Jeszenszky	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:att	_	_
6	levele	levél	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	4	nmod	_	_
7	ellen	ellen	ADP	_	_	6	case	_	_
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nmod	color:blue
1	És	és	CONJ	_	_	3	cc	_	_
2	ezt	ez	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	3	dobj	_	_
3	bizonyítja	bizonyít	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	az	az	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	út	út	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:att	_	_
6	szélén	szél	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	9	nmod:obl	_	_
7	órák	óra	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod	_	_
8	óta	óta	ADP	_	_	7	case	_	_
9	veszteglő	veszteglő	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	11	amod:att	_	_
10	távolsági	távolsági	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	amod:att	_	_
11	busz	busz	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nsubj	_	_
12	is	is	CONJ	_	_	11	cc	_	_
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nmod	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	Valencia	Valencia	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod	_	_
3	ellen	ellen	ADP	_	_	2	case	_	_
4	jobban	jól	ADV	_	_	6	advmod:mode	_	_
5	kell	kell	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	koncentrálunk	koncentrál	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	xcomp	_	_
7	,	,	PUNCT	_	_	5	punct	_	_
8	s	s	CONJ	_	_	5	cc	_	_
9	akkor	akkor	ADV	_	PronType=Dem	11	advmod:tlocy	_	_
10	nem	nem	ADV	_	PronType=Neg	11	neg	_	_
11	lehet	lesz	VERB	_	Definite=Ind|Mood=Pot|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
12	semmi	semmi	DET	_	Definite=Ind|PronType=Neg	13	det	_	_
13	probléma	probléma	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	nsubj	_	_
14	.	.	PUNCT	_	_	5	punct	_	_
15	"	"	PUNCT	_	_	5	punct	_	_

~~~


