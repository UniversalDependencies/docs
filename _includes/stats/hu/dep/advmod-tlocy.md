

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [advmod]().
There are also 7 other language-specific subtypes of `advmod`: [advmod:locy](), [advmod:mode](), [advmod:obl](), [advmod:que](), [advmod:tfrom](), [advmod:to](), [advmod:tto]().

482 nodes (2%) are attached to their parents as `advmod:tlocy`.

432 instances of `advmod:tlocy` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.16182572614108.

The following 10 pairs of parts of speech are connected with `advmod:tlocy`: [hu-pos/VERB]()-[hu-pos/ADV]() (389; 81% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (49; 10% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (23; 5% instances), [hu-pos/ADV]()-[hu-pos/ADV]() (13; 3% instances), [hu-pos/NUM]()-[hu-pos/ADV]() (2; 0% instances), [hu-pos/PRON]()-[hu-pos/ADV]() (2; 0% instances), [hu-pos/DET]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:tlocy	color:blue
1	Ezt	ez	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	3	dobj	_	_
2	este	este	ADV	_	_	3	advmod:tlocy	_	_
3	visszavonta	vissza+von	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	cég	cég	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nsubj	_	_
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 advmod:tlocy	color:blue
1	—	—	PUNCT	_	_	9	punct	_	_
2	Ma	ma	ADV	_	_	9	advmod:tlocy	_	_
3	a	a	DET	_	Definite=Def|PronType=Art	5	det	_	_
4	kortárs	kortárs	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:att	_	_
5	zenére	zene	NOUN	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:obl	_	_
6	nagyon	nagyon	ADV	_	_	7	advmod:mode	_	_
7	szűk	szűk	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
8	réteg	réteg	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nsubj	_	_
9	kíváncsi	kíváncsi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:tlocy	color:blue
1	Akkor	akkor	ADV	_	PronType=Dem	3	advmod:tlocy	_	_
2	már	már	ADV	_	_	3	advmod:tlocy	_	_
3	diligyógyász	diligyógyász	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
4	volt	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	Lipótmezőn	Lipótmező	PROPN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nmod:obl	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


