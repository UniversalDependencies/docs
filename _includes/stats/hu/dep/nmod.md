

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.
There are 4 language-specific subtypes of `nmod`: [nmod:att](), [nmod:attlvc](), [nmod:obl](), [nmod:obllvc]().

55 nodes (0%) are attached to their parents as `nmod`.

48 instances of `nmod` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.29090909090909.

The following 13 pairs of parts of speech are connected with `nmod`: [hu-pos/NOUN]()-[hu-pos/NOUN]() (19; 35% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (8; 15% instances), [hu-pos/NOUN]()-[hu-pos/PROPN]() (6; 11% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (4; 7% instances), [hu-pos/NOUN]()-[hu-pos/DET]() (4; 7% instances), [hu-pos/NUM]()-[hu-pos/NOUN]() (4; 7% instances), [hu-pos/PRON]()-[hu-pos/PROPN]() (3; 5% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (2; 4% instances), [hu-pos/NOUN]()-[hu-pos/NUM]() (1; 2% instances), [hu-pos/PRON]()-[hu-pos/NOUN]() (1; 2% instances), [hu-pos/PROPN]()-[hu-pos/PRON]() (1; 2% instances), [hu-pos/PROPN]()-[hu-pos/PROPN]() (1; 2% instances), [hu-pos/X]()-[hu-pos/X]() (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nmod	color:blue
1	Kiszivárogtatott	ki+szivárog	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	2	amod:att	_	_
2	információ	információ	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nmod	_	ToDo=nmod
3	szerint	szerint	ADP	_	_	2	case	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
5	valódi	valódi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	amod:att	_	_
6	ok	ok	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nsubj	_	_
7	az	az	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	értékesítés	értékesítés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	ideiglenes	ideiglenes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:att	_	_
3	helyettesítés	helyettesítés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nmod:att	_	_
4	dátumáról	dátum	NOUN	_	Case=Del|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	8	nmod:obl	_	_
5	maga	maga	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	7	nmod	_	_
6	az	az	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	államfő	államfő	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nsubj	_	_
8	dönt	dönt	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	írásban	írás	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nmod:obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 nmod	color:blue
1	Oroszország	Oroszország	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	nsubj	_	_
2	nagyhatalom	nagyhatalom	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
3	és	és	CCONJ	_	_	5	cc	_	_
4	fontos	fontos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
5	partner	partner	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	conj	_	_
6	Magyarország	Magyarország	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	nmod	_	ToDo=nmod
7	számára	számára	ADP	_	_	6	case	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


