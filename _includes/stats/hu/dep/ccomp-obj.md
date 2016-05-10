

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [ccomp]().
There are also 2 other language-specific subtypes of `ccomp`: [ccomp:obl](), [ccomp:pred]().

209 nodes (0%) are attached to their parents as `ccomp:obj`.

169 instances of `ccomp:obj` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.42583732057416.

The following 9 pairs of parts of speech are connected with `ccomp:obj`: [hu-pos/VERB]()-[hu-pos/VERB]() (166; 79% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (16; 8% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (11; 5% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (5; 2% instances), [hu-pos/PRON]()-[hu-pos/VERB]() (4; 2% instances), [hu-pos/ADV]()-[hu-pos/VERB]() (3; 1% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (2; 1% instances), [hu-pos/ADJ]()-[hu-pos/VERB]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp:obj	color:blue
1	Persze	persze	ADV	_	_	3	advmod:mode	_	_
2	könnyen	könnyű	ADJ	_	Case=Ess|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:mode	_	_
3	tehette	tesz	VERB	_	Definite=Def|Mood=Pot|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	hogy	hogy	SCONJ	_	_	7	mark	_	_
6	ilyeneket	ilyen	PRON	_	Case=Acc|Number=Plur|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	7	dobj	_	_
7	mondjon	mond	VERB	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp:obj	_	_
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp:obj	color:blue
1	Tudják	tud	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	sehova	sehova	ADV	_	PronType=Neg	6	advmod:to	_	_
4	nem	nem	ADV	_	PronType=Neg	5	neg	_	_
5	érdemes	érdemes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	ccomp:obj	_	_
6	elindulni	el+indul	VERB	_	VerbForm=Inf|Voice=Act	5	xcomp	_	_
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 ccomp:obj	color:blue
1	—	—	PUNCT	_	_	3	punct	_	_
2	Úgy	úgy	ADV	_	PronType=Dem	3	advmod:mode	_	_
3	vélem	vél	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	aki	aki	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Rel	7	nsubj	_	_
6	színpadra	színpad	NOUN	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	nmod:obl	_	_
7	lép	lép	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	ccomp:obl	_	_
8	,	,	PUNCT	_	_	7	punct	_	_
9	annak	az	PRON	_	Case=Gen|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	10	nmod:att	_	_
10	kötelessége	kötelesség	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	3	ccomp:obj	_	_
11	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
12	nyelv	nyelv	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	nmod:att	_	_
13	ápolása	ápolás	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	nmod:att	_	_
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


