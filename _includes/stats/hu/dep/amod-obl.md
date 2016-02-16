

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [amod]().
There are also 3 other language-specific subtypes of `amod`: [amod:att](), [amod:attlvc](), [amod:mode]().

57 nodes (0%) are attached to their parents as `amod:obl`.

48 instances of `amod:obl` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36842105263158.

The following 6 pairs of parts of speech are connected with `amod:obl`: [hu-pos/VERB]()-[hu-pos/ADJ]() (37; 65% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (14; 25% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (3; 5% instances), [hu-pos/ADJ]()-[hu-pos/NUM]() (1; 2% instances), [hu-pos/ADV]()-[hu-pos/ADJ]() (1; 2% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod:obl	color:blue
1	Felvetődik	fel+vetődik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	a	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	kérdés	kérdés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	nsubj	_	_
4	:	:	PUNCT	_	_	1	punct	_	_
5	vajon	vajon	ADV	_	PronType=Int	7	advmod:que	_	_
6	végtelenné	végtelen	ADJ	_	Case=Tra|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:obl	_	_
7	válik	válik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	_
8	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod:obl	color:blue
1	—	—	PUNCT	_	_	3	punct	_	_
2	Szakmailag	szakmai	ADJ	_	Case=Dis|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:obl	_	_
3	jobb	jó	ADJ	_	Case=Nom|Degree=Cmp|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
4	lenne	lesz	VERB	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
5	,	,	PUNCT	_	_	3	punct	_	_
6	ha	ha	SCONJ	_	_	13	mark	_	_
7	minél	minél	ADV	_	_	8	advmod:mode	_	_
8	több	több	DET	_	Definite=Ind|PronType=Ind	10	det	_	_
9	magyar	magyar	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	amod:att	_	_
10	edző	edző	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	nsubj	_	_
11	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
12	helyszínen	helyszín	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	nmod:obl	_	_
13	látná	lát	VERB	_	Definite=Def|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	_
14	a	a	DET	_	Definite=Def|PronType=Art	15	det	_	_
15	kontinensvetélkedőt	kontinensvetélkedő	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	dobj	_	_
16	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod:obl	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	üresség	üresség	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nmod:att	_	_
3	láthatóvá	látható	ADJ	_	Case=Tra|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	4	amod:obl	_	_
4	tétele	tétel	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	forma	forma	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


