

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.
There are 1 language-specific subtypes of `dobj`: [dobj:lvc]().

1761 nodes (4%) are attached to their parents as `dobj`.

992 instances of `dobj` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.13344690516752.

The following 17 pairs of parts of speech are connected with `dobj`: [hu-pos/VERB]()-[hu-pos/NOUN]() (1277; 73% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (209; 12% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (118; 7% instances), [hu-pos/VERB]()-[hu-pos/PROPN]() (73; 4% instances), [hu-pos/ADV]()-[hu-pos/NOUN]() (21; 1% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (12; 1% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (11; 1% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (10; 1% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (7; 0% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (7; 0% instances), [hu-pos/ADJ]()-[hu-pos/PROPN]() (5; 0% instances), [hu-pos/VERB]()-[hu-pos/DET]() (5; 0% instances), [hu-pos/ADV]()-[hu-pos/PRON]() (2; 0% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/ADJ]()-[hu-pos/DET]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 dobj	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	LRI	LRI	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
3	szerdán	szerda	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
4	két	két	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	5	nummod	_	_
5	közleményt	közlemény	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	dobj	_	_
6	juttatott	jut	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	_
7	el	el	ADV	_	_	6	compound:preverb	_	_
8	szerkesztőségünkhöz	szerkesztőség	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	6	nmod:obl	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dobj	color:blue
1	Ezt	ez	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	3	dobj	_	_
2	este	este	ADV	_	_	3	advmod:tlocy	_	_
3	visszavonta	vissza+von	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	cég	cég	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nsubj	_	_
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 dobj	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	kiadvány	kiadvány	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:att	_	_
3	keddi	keddi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	amod:att	_	_
4	bécsi	bécsi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	amod:att	_	_
5	"	"	PUNCT	_	_	6	punct	_	_
6	premierjét	premier	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	8	dobj	_	_
7	"	"	PUNCT	_	_	6	punct	_	_
8	követően	követő	ADJ	_	Case=Ess|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	13	amod:mode	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	11	det	_	_
10	budapesti	budapesti	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	amod:att	_	_
11	sajtóbemutatót	sajtóbemutató	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	dobj:lvc	_	_
12	ma	ma	ADV	_	_	13	advmod:tlocy	_	_
13	tartják	tart	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
14	.	.	PUNCT	_	_	13	punct	_	_

~~~


