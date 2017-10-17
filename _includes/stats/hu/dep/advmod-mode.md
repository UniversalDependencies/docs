

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [advmod]().
There are also 7 other language-specific subtypes of `advmod`: [advmod:locy](), [advmod:obl](), [advmod:que](), [advmod:tfrom](), [advmod:tlocy](), [advmod:to](), [advmod:tto]().

1041 nodes (3%) are attached to their parents as `advmod:mode`.

928 instances of `advmod:mode` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.88472622478386.

The following 27 pairs of parts of speech are connected with `advmod:mode`: [hu-pos/VERB]()-[hu-pos/ADV]() (584; 56% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (179; 17% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (105; 10% instances), [hu-pos/NUM]()-[hu-pos/ADV]() (44; 4% instances), [hu-pos/ADV]()-[hu-pos/ADV]() (38; 4% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (18; 2% instances), [hu-pos/PRON]()-[hu-pos/ADV]() (16; 2% instances), [hu-pos/DET]()-[hu-pos/ADV]() (10; 1% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (6; 1% instances), [hu-pos/PROPN]()-[hu-pos/ADV]() (6; 1% instances), [hu-pos/VERB]()-[hu-pos/INTJ]() (5; 0% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (4; 0% instances), [hu-pos/VERB]()-[hu-pos/ADP]() (4; 0% instances), [hu-pos/ADJ]()-[hu-pos/ADP]() (3; 0% instances), [hu-pos/NOUN]()-[hu-pos/INTJ]() (3; 0% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (3; 0% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (2; 0% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (2; 0% instances), [hu-pos/ADJ]()-[hu-pos/DET]() (1; 0% instances), [hu-pos/ADJ]()-[hu-pos/INTJ]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/AUX]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/ADP]() (1; 0% instances), [hu-pos/PRON]()-[hu-pos/INTJ]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/DET]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 advmod:mode	color:blue
1	Így	így	ADV	_	PronType=Dem	6	advmod:mode	_	_
2	a	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	térségek	térség	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nmod:att	_	_
4	közötti	közötti	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
5	különbségek	különbség	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
6	növekednek	növekedik	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod:mode	color:blue
1	Testületi	testületi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	amod:att	_	_
2	döntés	döntés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
3	leghamarabb	hamar	ADV	_	_	5	advmod:mode	_	_
4	januárban	január	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:obl	_	_
5	várható	várható	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 advmod:mode	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	4	det	_	_
2	vastagon	vastag	ADJ	_	Case=Sup|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:mode	_	_
3	behavazott	behavazott	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	4	amod:att	_	_
4	úton	út	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nmod:obl	_	_
5	tényleg	tényleg	ADV	_	_	8	advmod:mode	_	_
6	ez	ez	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	8	nsubj	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	helyzet	helyzet	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


