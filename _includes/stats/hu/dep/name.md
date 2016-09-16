

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

1006 nodes (2%) are attached to their parents as `name`.

1006 instances of `name` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.00397614314115.

The following 15 pairs of parts of speech are connected with `name`: [hu-pos/PROPN]()-[hu-pos/PROPN]() (937; 93% instances), [hu-pos/ADJ]()-[hu-pos/PROPN]() (23; 2% instances), [hu-pos/CONJ]()-[hu-pos/PROPN]() (13; 1% instances), [hu-pos/PROPN]()-[hu-pos/CONJ]() (13; 1% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (6; 1% instances), [hu-pos/NOUN]()-[hu-pos/PROPN]() (5; 0% instances), [hu-pos/ADJ]()-[hu-pos/DET]() (1; 0% instances), [hu-pos/DET]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/DET]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/X]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/X]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/X]()-[hu-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 name	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	Adatvédelmi	Adatvédelmi	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	name	_	_
3	Hivatalba	Hivatal	PROPN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:obl	_	_
4	is	is	CONJ	_	_	3	cc	_	_
5	érkeznek	érkezik	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	hasonló	hasonló	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:att	_	_
7	bejelentések	bejelentés	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 name	color:blue
1	Például	például	ADV	_	_	2	advmod:mode	_	_
2	az	az	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	0	root	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	hogy	hogy	SCONJ	_	_	12	mark	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
6	Fillér	Fillér	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	name	_	_
7	utcai	utcai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
8	iskola	iskola	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	nmod:att	_	_
9	pedagógiai	pedagógiai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	amod:att	_	_
10	programjába	program	NOUN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	12	nmod:obl	_	_
11	nem	nem	ADV	_	PronType=Neg	12	neg	_	_
12	illene	illik	VERB	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	_	_
13	bele	ő	PRON	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	12	compound:preverb	_	_
14	a	a	DET	_	Definite=Def|PronType=Art	16	det	_	_
15	Fenyves	Fenyves	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	16	name	_	_
16	utcaié	utcai	NOUN	_	Case=Nom|Number=Sing|Number[psed]=Sing|Number[psor]=None|Person[psor]=None	12	nsubj	_	_
17	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 name	color:blue
1	1997	1997	NUM	_	Case=Nom|Number=Sing|NumType=Card	2	amod:att	_	_
2	decembere	december	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	14	nmod	_	_
3	óta	óta	ADP	_	_	2	case	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
5	London	London	PROPN	_	Case=Nom|Number=Sing	6	name	_	_
6	Bróker	Bróker	PROPN	_	Case=Nom|Number=Sing	7	name	_	_
7	Rt.	Rt.	PROPN	_	Case=Nom|Number=Sing	8	nmod:att	_	_
8	tulajdonosa	tulajdonos	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	14	nsubj	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	14	det	_	_
10	Portofinó	Portofinó	PROPN	_	Case=Nom|Number=Sing	11	name	_	_
11	Építő	Építő	PROPN	_	Case=Nom|Number=Sing	12	name	_	_
12	és	és	CONJ	_	_	13	name	_	_
13	Szolgáltató	Szolgáltató	PROPN	_	Case=Nom|Number=Sing	14	name	_	_
14	Kft	Kft	PROPN	_	Case=Nom|Number=Sing	0	root	_	_
15	.	.	PUNCT	_	_	14	punct	_	_

~~~


