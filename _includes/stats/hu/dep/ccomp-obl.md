

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [ccomp]().
There are also 2 other language-specific subtypes of `ccomp`: [ccomp:obj](), [ccomp:pred]().

96 nodes (0%) are attached to their parents as `ccomp:obl`.

87 instances of `ccomp:obl` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.26041666666667.

The following 9 pairs of parts of speech are connected with `ccomp:obl`: [hu-pos/VERB]()-[hu-pos/VERB]() (68; 71% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (7; 7% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (6; 6% instances), [hu-pos/ADJ]()-[hu-pos/VERB]() (5; 5% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (5; 5% instances), [hu-pos/PRON]()-[hu-pos/VERB]() (2; 2% instances), [hu-pos/ADV]()-[hu-pos/VERB]() (1; 1% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (1; 1% instances), [hu-pos/PRON]()-[hu-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 ccomp:obl	color:blue
1	"	"	PUNCT	_	_	4	punct	_	_
2	Mindegyik	mindegyik	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Tot	4	nsubj	_	_
3	ezt	ez	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	4	dobj	_	_
4	csinálja	csinál	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	ccomp:obl	_	_
5	"	"	PUNCT	_	_	4	punct	_	_
6	—	—	PUNCT	_	_	7	punct	_	_
7	panaszkodnak	panaszkodik	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	a	a	DET	_	Definite=Def|PronType=Art	9	det	_	_
9	közútkezelő	közútkezelő	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	nmod:att	_	_
10	dolgozói	dolgozó	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	_
11	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 ccomp:obl	color:blue
1	—	—	PUNCT	_	_	5	punct	_	_
2	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	meccs	meccs	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod	_	_
4	folyamán	folyamán	ADP	_	_	3	case	_	_
5	gondolt	gondol	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	arra	az	PRON	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	5	nmod:obl	_	_
7	,	,	PUNCT	_	_	5	punct	_	_
8	hogy	hogy	SCONJ	_	_	13	mark	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	10	det	_	_
10	köd	köd	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	nmod	_	_
11	miatt	miatt	ADP	_	_	10	case	_	_
12	igencsak	igencsak	ADV	_	_	13	advmod:mode	_	_
13	jó	jó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	ccomp:obl	_	_
14	lenne	lesz	VERB	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
15	,	,	PUNCT	_	_	13	punct	_	_
16	ha	ha	SCONJ	_	_	19	mark	_	_
17	a	a	DET	_	Definite=Def|PronType=Art	18	det	_	_
18	játékvezető	játékvezető	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	19	nsubj	_	_
19	lefújná	le+fúj	VERB	_	Definite=Def|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	csubj	_	_
20	a	a	DET	_	Definite=Def|PronType=Art	21	det	_	_
21	mérkőzést	mérkőzés	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	19	dobj	_	_
22	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 13 ccomp:obl	color:blue
1	Bozóky	Bozóky	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	nsubj	_	_
2	beszélt	beszél	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	arról	az	PRON	_	Case=Del|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	2	nmod:obl	_	_
4	is	is	CONJ	_	_	3	cc	_	_
5	,	,	PUNCT	_	_	2	punct	_	_
6	hogy	hogy	SCONJ	_	_	13	mark	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	szövetség	szövetség	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	nmod:att	_	_
9	kifizetetlen	kifizetetlen	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	amod:att	_	_
10	számlatartozása	számlatartozás	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	13	nsubj	_	_
11	200-300	200-300	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	12	compound	_	_
12	millió	millió	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	13	nummod	_	_
13	forint	forint	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	ccomp:obl	_	_
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


