

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [ccomp]().
There are also 2 other language-specific subtypes of `ccomp`: [ccomp:obj](), [ccomp:pred]().

154 nodes (0%) are attached to their parents as `ccomp:obl`.

142 instances of `ccomp:obl` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.29220779220779.

The following 11 pairs of parts of speech are connected with `ccomp:obl`: [hu-pos/VERB]()-[hu-pos/VERB]() (110; 71% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (12; 8% instances), [hu-pos/ADJ]()-[hu-pos/VERB]() (8; 5% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (8; 5% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (6; 4% instances), [hu-pos/PRON]()-[hu-pos/VERB]() (4; 3% instances), [hu-pos/ADV]()-[hu-pos/VERB]() (2; 1% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (1; 1% instances), [hu-pos/PRON]()-[hu-pos/NOUN]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/AUX]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (1; 1% instances).


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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 ccomp:obl	color:blue
1	Ez	ez	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	3	nsubj	_	_
2	annak	az	PRON	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	3	nmod:obl	_	_
3	tudható	tudható	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	0	root	_	_
4	be	be	ADV	_	Degree=Pos	3	compound:preverb	_	_
5	,	,	PUNCT	_	_	3	punct	_	_
6	hogy	hogy	SCONJ	_	_	11	mark	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	9	det	_	_
8	meggyújtott	meggyújtott	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	9	amod:att	_	_
9	gyertyát	gyertya	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	dobj	_	_
10	magára	maga	PRON	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|Reflex=Yes	11	nmod:obl	_	_
11	hagyják	hagy	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp:obl	_	_
12	a	a	DET	_	Definite=Def|PronType=Art	13	det	_	_
13	dolgozók	dolgozó	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	nsubj	_	_
14	,	,	PUNCT	_	_	11	punct	_	_
15	az	az	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	17	nsubj	_	_
16	időközben	időközben	ADV	_	_	17	advmod:tlocy	_	_
17	végigég	végig+ég	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	conj	_	_
18	,	,	PUNCT	_	_	11	punct	_	_
19	és	és	CONJ	_	_	11	cc	_	_
20	lángra	láng	NOUN	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	21	nmod:obl	_	_
21	lobbantja	lobbant	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	conj	_	_
22	a	a	DET	_	Definite=Def|PronType=Art	23	det	_	_
23	koszorú	koszorú	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	25	nmod:att	_	_
24	száraz	száraz	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	25	amod:att	_	_
25	anyagát	anyag	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	21	dobj	_	_
26	.	.	PUNCT	_	_	3	punct	_	_

~~~


