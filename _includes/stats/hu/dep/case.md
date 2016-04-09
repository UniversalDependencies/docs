

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

479 nodes (2%) are attached to their parents as `case`.

477 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29436325678497.

The following 12 pairs of parts of speech are connected with `case`: [hu-pos/NOUN]()-[hu-pos/ADP]() (376; 78% instances), [hu-pos/PROPN]()-[hu-pos/ADP]() (45; 9% instances), [hu-pos/PRON]()-[hu-pos/ADP]() (32; 7% instances), [hu-pos/DET]()-[hu-pos/ADP]() (11; 2% instances), [hu-pos/NUM]()-[hu-pos/ADP]() (6; 1% instances), [hu-pos/ADJ]()-[hu-pos/ADP]() (3; 1% instances), [hu-pos/ADV]()-[hu-pos/ADP]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/X]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/ADP]() (1; 0% instances), [hu-pos/X]()-[hu-pos/X]() (1; 0% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	Ázsiában	Ázsia	PROPN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	nmod:obl	_	_
2	ezzel	ez	PRON	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	7	nmod:obl	_	_
3	szemben	szemben	ADP	_	_	2	case	_	_
4	mind	mind	ADV	_	PronType=Tot	6	advmod:mode	_	_
5	több	több	DET	_	Definite=Ind|PronType=Ind	6	det	_	_
6	sikerrel	siker	NOUN	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	nmod:obl	_	_
7	veszik	vesz	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	fel	fel	ADV	_	Degree=Pos	7	compound:preverb	_	_
9	az	az	DET	_	Definite=Def|PronType=Art	10	det	_	_
10	AIDS-szel	AIDS	NOUN	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	nmod:obl	_	_
11	szembeni	szembeni	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	amod:att	_	_
12	küzdelmet	küzdelem	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	dobj	_	_
13	.	.	PUNCT	_	_	7	punct	_	_

~~~


