

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.
There are 1 language-specific subtypes of `compound`: [compound:preverb]().

147 nodes (0%) are attached to their parents as `compound`.

147 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `compound`: [hu-pos/NUM]()-[hu-pos/NUM]() (144; 98% instances), [hu-pos/NOUN]()-[hu-pos/X]() (2; 1% instances), [hu-pos/ADJ]()-[hu-pos/NUM]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	"	"	PUNCT	_	_	5	punct	_	_
2	6	6	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	3	compound	_	_
3	ezer	ezer	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	4	nummod	_	_
4	rendőrre	rendőr	NOUN	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:obl	_	_
5	lenne	lesz	VERB	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	szükségünk	szükség	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	5	nsubj	_	_
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Pilinszky	Pilinszky	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	name	_	_
2	János	János	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	nsubj	_	_
3	1964-ben	1964	NUM	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	11	nmod:obl	_	_
4	ars	ars	X	_	_	5	compound	_	_
5	poeticaként	poetica	NOUN	_	Case=Abs|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	nmod:obl	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
7	Magvető	Magvető	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	name	_	_
8	Kiadó	Kiadó	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:att	_	_
9	igazgatójának	igazgató	NOUN	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	11	iobj	_	_
10	azt	az	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	11	dobj	_	_
11	írta	ír	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
12	,	,	PUNCT	_	_	11	punct	_	_
13	hogy	hogy	SCONJ	_	_	14	mark	_	_
14	szeretné	szeret	VERB	_	Definite=Def|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	ccomp:obj	_	_
15	,	,	PUNCT	_	_	14	punct	_	_
16	ha	ha	SCONJ	_	_	18	mark	_	_
17	verseinek	vers	NOUN	_	Case=Gen|Number=Plur|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	18	nmod:att	_	_
18	halálraítélt	halálraítélt	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	14	advcl	_	_
19	legyen	lesz	VERB	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	cop	_	_
20	a	a	DET	_	Definite=Def|PronType=Art	21	det	_	_
21	lektora	lektor	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	18	nsubj	_	_
22	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 compound	color:blue
1	Ha	ha	SCONJ	_	_	2	mark	_	_
2	beigazolódik	be+igazolódik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	31	advcl	_	_
3	a	a	DET	_	Definite=Def|PronType=Art	4	det	_	_
4	jóslata	jóslat	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	2	nsubj	_	_
5	,	,	PUNCT	_	_	2	punct	_	_
6	és	és	CONJ	_	_	2	cc	_	_
7	tíz	tíz	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	8	nummod	_	_
8	éven	év	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	nmod:obl	_	_
9	belül	belül	ADP	_	_	8	case	_	_
10	háromszorosára	háromszoros	ADJ	_	Case=Sub|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	11	amod:obl	_	_
11	nő	nő	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
12	a	a	DET	_	Definite=Def|PronType=Art	17	det	_	_
13	jelenlegi	jelenlegi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	17	amod:att	_	_
14	350	350	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	15	compound	_	_
15	ezres	ezres	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	17	amod:att	_	_
16	fővárosi	fővárosi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	17	amod:att	_	_
17	járműpark	járműpark	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	nsubj	_	_
18	,	,	PUNCT	_	_	11	punct	_	_
19	akkor	akkor	ADV	_	PronType=Dem	31	advmod:tlocy	_	_
20	mindenki	mindenki	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Tot	31	nsubj	_	_
21	,	,	PUNCT	_	_	31	punct	_	_
22	legyen	lesz	VERB	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	24	cop	_	_
23	az	az	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	24	nsubj	_	_
24	kormányfő	kormányfő	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	20	acl	_	_
25	vagy	vagy	CONJ	_	_	24	cc	_	_
26	főpolgármester	főpolgármester	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	24	conj	_	_
27	,	,	PUNCT	_	_	31	punct	_	_
28	a	a	DET	_	Definite=Def|PronType=Art	30	det	_	_
29	saját	saját	DET	_	Definite=Def|PronType=Prs	30	det	_	_
30	bőrén	bőr	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	31	nmod:obl	_	_
31	tapasztalja	tapasztal	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
32	,	,	PUNCT	_	_	31	punct	_	_
33	hogy	hogy	SCONJ	_	_	39	mark	_	_
34	az	az	DET	_	Definite=Def|PronType=Art	36	det	_	_
35	elmúlt	elmúlt	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	36	amod:att	_	_
36	évek	év	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	38	nmod:att	_	_
37	fejlesztési	fejlesztési	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	38	amod:att	_	_
38	üteme	ütem	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	39	nsubj	_	_
39	megegyezik	meg+egyezik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	31	ccomp:obj	_	_
40	a	a	DET	_	Definite=Def|PronType=Art	43	det	_	_
41	csúcsidőben	csúcsidő	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	42	nmod:obl	_	_
42	araszoló	araszoló	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	43	amod:att	_	_
43	autók	autó	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	44	nmod:att	_	_
44	sebességével	sebesség	NOUN	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	39	nmod:obl	_	_
45	.	.	PUNCT	_	_	31	punct	_	_

~~~


