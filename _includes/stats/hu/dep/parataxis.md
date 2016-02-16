

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

151 nodes (1%) are attached to their parents as `parataxis`.

113 instances of `parataxis` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.4635761589404.

The following 22 pairs of parts of speech are connected with `parataxis`: [hu-pos/VERB]()-[hu-pos/VERB]() (44; 29% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (26; 17% instances), [hu-pos/PROPN]()-[hu-pos/ADJ]() (17; 11% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (10; 7% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (8; 5% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (8; 5% instances), [hu-pos/NOUN]()-[hu-pos/PROPN]() (7; 5% instances), [hu-pos/NOUN]()-[hu-pos/NUM]() (5; 3% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (5; 3% instances), [hu-pos/ADJ]()-[hu-pos/VERB]() (4; 3% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (4; 3% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (2; 1% instances), [hu-pos/VERB]()-[hu-pos/PROPN]() (2; 1% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (1; 1% instances), [hu-pos/ADJ]()-[hu-pos/CONJ]() (1; 1% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (1; 1% instances), [hu-pos/ADV]()-[hu-pos/VERB]() (1; 1% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (1; 1% instances), [hu-pos/NOUN]()-[hu-pos/CONJ]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/CONJ]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 parataxis	color:blue
1	Vele	vele	PRON	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	6	nmod:obl	_	_
2	még	még	ADV	_	_	6	advmod:tlocy	_	_
3	1991-ben	1991	NUM	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	6	nmod:obl	_	_
4	,	,	PUNCT	_	_	6	punct	_	_
5	Tampában	Tampa	PROPN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
6	ismerkedtem	ismerkedik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	össze	össze	ADV	_	Degree=Pos	6	compound:preverb	_	_
8	,	,	PUNCT	_	_	6	punct	_	_
9	szimpatikus	szimpatikus	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	amod:att	_	_
10	,	,	PUNCT	_	_	9	punct	_	_
11	közvetlen	közvetlen	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	conj	_	_
12	pasas	pasas	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	parataxis	_	_
13	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 50	bgColor:blue
# visual-style 50	fgColor:white
# visual-style 48	bgColor:blue
# visual-style 48	fgColor:white
# visual-style 48 50 parataxis	color:blue
1	A	A	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	nmod:att	_	_
2	csoport	csoport	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
3	:	:	PUNCT	_	_	2	punct	_	_
4	Hertha	Hertha	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	parataxis	_	_
5	(	(	PUNCT	_	_	6	punct	_	_
6	német	német	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	parataxis	_	_
7	)	)	PUNCT	_	_	6	punct	_	_
8	-	-	PUNCT	_	_	4	punct	_	_
9	Barcelona	Barcelona	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	conj	_	_
10	(	(	PUNCT	_	_	11	punct	_	_
11	spanyol	spanyol	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	parataxis	_	_
12	)	)	PUNCT	_	_	11	punct	_	_
13	1-1	1-1	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	appos	_	_
14	,	,	PUNCT	_	_	4	punct	_	_
15	góllövők	góllövő	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	conj	_	_
16	:	:	PUNCT	_	_	15	punct	_	_
17	Michalke	Michalke	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	parataxis	_	_
18	(	(	PUNCT	_	_	19	punct	_	_
19	33.	33.	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	17	parataxis	_	_
20	)	)	PUNCT	_	_	19	punct	_	_
21	,	,	PUNCT	_	_	17	punct	_	_
22	illetve	illetve	CONJ	_	_	17	cc	_	_
23	L.	L.	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	24	name	_	_
24	Enrique	Enrique	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	17	conj	_	_
25	(	(	PUNCT	_	_	26	punct	_	_
26	14.	14.	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	24	parataxis	_	_
27	)	)	PUNCT	_	_	26	punct	_	_
28	;	;	PUNCT	_	_	4	punct	_	_
29	Sparta	Sparta	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	30	name	_	_
30	Praha	Praha	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	list	_	_
31	(	(	PUNCT	_	_	32	punct	_	_
32	cseh	cseh	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	30	parataxis	_	_
33	)	)	PUNCT	_	_	32	punct	_	_
34	-	-	PUNCT	_	_	30	punct	_	_
35	Porto	Porto	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	30	conj	_	_
36	(	(	PUNCT	_	_	37	punct	_	_
37	portugál	portugál	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	35	parataxis	_	_
38	)	)	PUNCT	_	_	37	punct	_	_
39	0-2	0-2	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	30	appos	_	_
40	,	,	PUNCT	_	_	30	punct	_	_
41	góllövők	góllövő	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	30	conj	_	_
42	:	:	PUNCT	_	_	41	punct	_	_
43	Drulovics	Drulovics	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	41	parataxis	_	_
44	(	(	PUNCT	_	_	45	punct	_	_
45	77.	77.	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	43	parataxis	_	_
46	)	)	PUNCT	_	_	45	punct	_	_
47	,	,	PUNCT	_	_	43	punct	_	_
48	Jardel	Jardel	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	43	conj	_	_
49	(	(	PUNCT	_	_	50	punct	_	_
50	84.	84.	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	48	parataxis	_	_
51	)	)	PUNCT	_	_	50	punct	_	_
52	.	.	PUNCT	_	_	2	punct	_	_

~~~


