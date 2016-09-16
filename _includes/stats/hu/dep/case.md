

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

799 nodes (2%) are attached to their parents as `case`.

797 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.37922403003755.

The following 12 pairs of parts of speech are connected with `case`: [hu-pos/NOUN]()-[hu-pos/ADP]() (641; 80% instances), [hu-pos/PROPN]()-[hu-pos/ADP]() (72; 9% instances), [hu-pos/PRON]()-[hu-pos/ADP]() (48; 6% instances), [hu-pos/NUM]()-[hu-pos/ADP]() (15; 2% instances), [hu-pos/DET]()-[hu-pos/ADP]() (11; 1% instances), [hu-pos/ADJ]()-[hu-pos/ADP]() (6; 1% instances), [hu-pos/ADV]()-[hu-pos/ADP]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/X]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/ADP]() (1; 0% instances), [hu-pos/X]()-[hu-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 case	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 case	color:blue
1	Oroszország	Oroszország	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	nsubj	_	_
2	nagyhatalom	nagyhatalom	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
3	és	és	CONJ	_	_	2	cc	_	_
4	fontos	fontos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
5	partner	partner	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	conj	_	_
6	Magyarország	Magyarország	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	nmod	_	_
7	számára	számára	ADP	_	_	6	case	_	_
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Ezzel	ez	PRON	_	Case=Ins|Number=Sing|Person=3|PronType=Dem	10	advmod:mode	_	_
2	szemben	szemben	ADP	_	_	1	case	_	_
3	például	például	ADV	_	_	10	advmod:mode	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
5	jövedéki	jövedéki	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	6	amod:att	_	_
6	adó	adó	NOUN	_	Case=Nom|Number=Sing	9	nmod:att	_	_
7	7	7	NUM	_	Case=Nom|Number=Sing|NumType=Card	8	amod:att	_	_
8	százalékos	százalékos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	9	amod:att	_	_
9	növelésére	növelés	NOUN	_	Case=Sub|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	nmod:obl	_	_
10	tesz	tesz	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	javaslatot	javaslat	NOUN	_	Case=Acc|Number=Sing	10	dobj	_	_
12	.	.	PUNCT	_	_	10	punct	_	_

~~~


