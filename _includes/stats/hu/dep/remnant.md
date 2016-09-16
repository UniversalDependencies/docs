

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

182 nodes (0%) are attached to their parents as `remnant`.

99 instances of `remnant` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.55494505494505.

The following 23 pairs of parts of speech are connected with `remnant`: [hu-pos/NOUN]()-[hu-pos/NOUN]() (55; 30% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (30; 16% instances), [hu-pos/DET]()-[hu-pos/DET]() (23; 13% instances), [hu-pos/NUM]()-[hu-pos/NUM]() (21; 12% instances), [hu-pos/PROPN]()-[hu-pos/PROPN]() (19; 10% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (4; 2% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (4; 2% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (3; 2% instances), [hu-pos/ADV]()-[hu-pos/NOUN]() (3; 2% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (3; 2% instances), [hu-pos/NOUN]()-[hu-pos/CONJ]() (2; 1% instances), [hu-pos/NOUN]()-[hu-pos/NUM]() (2; 1% instances), [hu-pos/PRON]()-[hu-pos/PRON]() (2; 1% instances), [hu-pos/PUNCT]()-[hu-pos/PUNCT]() (2; 1% instances), [hu-pos/ADV]()-[hu-pos/ADV]() (1; 1% instances), [hu-pos/ADV]()-[hu-pos/CONJ]() (1; 1% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (1; 1% instances), [hu-pos/NOUN]()-[hu-pos/DET]() (1; 1% instances), [hu-pos/NOUN]()-[hu-pos/PUNCT]() (1; 1% instances), [hu-pos/NUM]()-[hu-pos/ADV]() (1; 1% instances), [hu-pos/NUM]()-[hu-pos/NOUN]() (1; 1% instances), [hu-pos/PRON]()-[hu-pos/NOUN]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 20 remnant	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	előadás	előadás	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nmod:att	_	_
3	első	első	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	4	amod:att	_	_
4	felében	fél	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	11	nmod:obl	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
6	Cosi	Cosi	X	_	_	7	name	_	_
7	fan	fan	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	name	_	_
8	tutte	tutte	X	_	_	10	nmod:att	_	_
9	I.	1.	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	10	amod:att	_	_
10	felvonása	felvonás	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	11	nsubj	_	_
11	hangzik	hangzik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
12	fel	fel	ADV	_	Degree=Pos	11	compound:preverb	_	_
13	,	,	PUNCT	_	_	11	punct	_	_
14	ezt	ez	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	15	dobj	_	_
15	követően	követő	ADJ	_	Case=Ess|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	4	remnant	_	_
16	pedig	pedig	CONJ	_	_	11	cc	_	_
17	a	a	DET	_	Definite=Def|PronType=Art	18	det	_	_
18	Cigánybáró	Cigánybáró	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	20	nmod:att	_	_
19	I.	1.	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	20	amod:att	_	_
20	felvonása	felvonás	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	remnant	_	_
21	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 remnant	color:blue
1	—	—	PUNCT	_	_	2	punct	_	_
2	Van	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	egy	egy	DET	_	Definite=Ind|PronType=Art	8	det	_	_
4	egyszerű	egyszerű	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
5	és	és	CONJ	_	_	8	cc	_	_
6	egy	egy	DET	_	Definite=Ind|PronType=Art	3	remnant	_	_
7	bonyolult	bonyolult	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	remnant	_	_
8	válaszom	válasz	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=1	2	nsubj	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 remnant	color:blue
1	—	—	PUNCT	_	_	2	punct	_	_
2	Van	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	egy	egy	DET	_	Definite=Ind|PronType=Art	8	det	_	_
4	egyszerű	egyszerű	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
5	és	és	CONJ	_	_	8	cc	_	_
6	egy	egy	DET	_	Definite=Ind|PronType=Art	3	remnant	_	_
7	bonyolult	bonyolult	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	remnant	_	_
8	válaszom	válasz	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=1	2	nsubj	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


