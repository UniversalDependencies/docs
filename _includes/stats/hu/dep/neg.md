

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

299 nodes (1%) are attached to their parents as `neg`.

282 instances of `neg` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49163879598662.

The following 6 pairs of parts of speech are connected with `neg`: [hu-pos/VERB]()-[hu-pos/ADV]() (214; 72% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (35; 12% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (32; 11% instances), [hu-pos/PRON]()-[hu-pos/ADV]() (9; 3% instances), [hu-pos/ADV]()-[hu-pos/ADV]() (6; 2% instances), [hu-pos/DET]()-[hu-pos/ADV]() (3; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 neg	color:blue
1	Farkas	Farkas	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	name	_	_
2	Helga	Helga	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
3	azóta	azóta	ADV	_	PronType=Dem	5	advmod:tfrom	_	_
4	nem	nem	ADV	_	PronType=Neg	5	neg	_	_
5	került	kerül	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	elő	elő	ADV	_	Degree=Pos	5	compound:preverb	_	_
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 neg	color:blue
1	Ez	ez	DET	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	2	det	_	_
2	utóbbi	utóbbi	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nsubj	_	_
3	nem	nem	ADV	_	PronType=Neg	4	neg	_	_
4	iskolaérett	iskolaérett	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	7	amod:att	_	_
5	,	,	PUNCT	_	_	7	punct	_	_
6	problémás	problémás	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:att	_	_
7	gyerekekkel	gyerek	NOUN	_	Case=Ins|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:obl	_	_
8	is	is	CONJ	_	_	7	cc	_	_
9	foglalkozik	foglalkozik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 neg	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	természet	természet	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
3	nem	nem	ADV	_	PronType=Neg	5	neg	_	_
4	könnyű	könnyű	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
5	ellenfél	ellenfél	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


