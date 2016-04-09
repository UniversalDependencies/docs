

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

256 nodes (1%) are attached to their parents as `advcl`.

173 instances of `advcl` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.76171875.

The following 25 pairs of parts of speech are connected with `advcl`: [hu-pos/VERB]()-[hu-pos/VERB]() (153; 60% instances), [hu-pos/ADJ]()-[hu-pos/VERB]() (16; 6% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (16; 6% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (11; 4% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (9; 4% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (8; 3% instances), [hu-pos/ADV]()-[hu-pos/VERB]() (8; 3% instances), [hu-pos/DET]()-[hu-pos/NUM]() (7; 3% instances), [hu-pos/ADV]()-[hu-pos/NOUN]() (5; 2% instances), [hu-pos/DET]()-[hu-pos/NOUN]() (3; 1% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (2; 1% instances), [hu-pos/ADV]()-[hu-pos/PRON]() (2; 1% instances), [hu-pos/ADV]()-[hu-pos/PROPN]() (2; 1% instances), [hu-pos/NOUN]()-[hu-pos/NUM]() (2; 1% instances), [hu-pos/PRON]()-[hu-pos/VERB]() (2; 1% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/ADJ]()-[hu-pos/PROPN]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/DET]()-[hu-pos/VERB]() (1; 0% instances), [hu-pos/INTJ]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/PRON]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/VERB]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 advcl	color:blue
1	És	és	CONJ	_	_	7	cc	_	_
2	amint	amint	ADV	_	PronType=Rel	3	advmod:mode	_	_
3	lehetett	lehet	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	advcl	_	_
4	,	,	PUNCT	_	_	7	punct	_	_
5	el	el	ADV	_	_	7	compound:preverb	_	_
6	is	is	ADV	_	_	7	advmod:mode	_	_
7	jött	jön	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	érte	ő	PRON	_	Case=Cau|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	7	nmod:obl	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	11	det	_	_
10	"	"	PUNCT	_	_	11	punct	_	_
11	meseautó	meseautó	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	nsubj	_	_
12	"	"	PUNCT	_	_	11	punct	_	_
13	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 advcl	color:blue
1	—	—	PUNCT	_	_	2	punct	_	_
2	Vannak	van	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	15	ccomp:obj	_	_
3	gondok	gond	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	nsubj	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
5	tavaszi	tavaszi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	amod:att	_	_
6	idény	idény	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	nmod:att	_	_
7	időpontjaival	időpont	NOUN	_	Case=Ins|Number=Plur|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	2	nmod:obl	_	_
8	,	,	PUNCT	_	_	2	punct	_	_
9	mert	mert	SCONJ	_	_	11	mark	_	_
10	nagyon	nagyon	ADV	_	_	11	advmod:mode	_	_
11	sűrű	sűrű	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	advcl	_	_
12	a	a	DET	_	Definite=Def|PronType=Art	13	det	_	_
13	versenynaptár	versenynaptár	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	nsubj	_	_
14	—	—	PUNCT	_	_	2	punct	_	_
15	mondta	mond	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
16	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 5 advcl	color:blue
1	Ha	ha	SCONJ	_	_	5	mark	_	_
2	a	a	DET	_	Definite=Def|PronType=Art	4	det	_	_
3	magasabb	magas	ADJ	_	Case=Nom|Degree=Cmp|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	amod:att	_	_
4	rendűre	rendű	ADJ	_	Case=Sub|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:obl	_	_
5	irányul	irányul	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	figyelmünk	figyelem	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	5	nsubj	_	_
8	,	,	PUNCT	_	_	5	punct	_	_
9	mi	mi	PRON	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person=1|Person[psor]=None|PronType=Prs	12	nsubj	_	_
10	is	is	CONJ	_	_	9	cc	_	_
11	magasabb	magas	ADJ	_	Case=Nom|Degree=Cmp|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	amod:att	_	_
12	rendűek	rendű	ADJ	_	Case=Nom|Degree=Pos|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
13	leszünk	lesz	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
14	.	.	PUNCT	_	_	12	punct	_	_

~~~


