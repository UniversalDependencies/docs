

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [advmod]().
There are also 7 other language-specific subtypes of `advmod`: [advmod:mode](), [advmod:obl](), [advmod:que](), [advmod:tfrom](), [advmod:tlocy](), [advmod:to](), [advmod:tto]().

57 nodes (0%) are attached to their parents as `advmod:locy`.

50 instances of `advmod:locy` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.31578947368421.

The following 5 pairs of parts of speech are connected with `advmod:locy`: [hu-pos/VERB]()-[hu-pos/ADV]() (41; 72% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (11; 19% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (3; 5% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (1; 2% instances), [hu-pos/ADV]()-[hu-pos/PROPN]() (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:locy	color:blue
1	"	"	PUNCT	_	_	6	punct	_	SpaceAfter=No
2	Az	az	DET	_	Definite=Def|PronType=Art	4	det	_	_
3	ő	ő	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	4	nmod:att	_	_
4	kocsija	kocsi	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
5	mindenhol	mindenhol	ADV	_	PronType=Tot	6	advmod:locy	_	_
6	átmegy	át+megy	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	SpaceAfter=No
8	"	"	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 advmod:locy	color:blue
1	—	—	PUNCT	_	_	5	punct	_	_
2	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	szobor	szobor	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
4	hálós	hálós	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
5	szerkezetű	szerkezetű	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	háló	háló	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nsubj	_	_
9	adja	ad	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
10	ki	ki	ADV	_	Degree=Pos	9	compound:preverb	_	_
11	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
12	jaguár	jaguár	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	nmod:att	_	_
13	formáját	forma	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	9	obj	_	SpaceAfter=No
14	,	,	PUNCT	_	_	9	punct	_	_
15	ami	ami	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Rel	18	nsubj	_	_
16	tehát	tehát	CCONJ	_	_	18	cc	_	_
17	belül	belül	ADV	_	_	18	advmod:locy	_	_
18	üres	üres	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	acl	_	SpaceAfter=No
19	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 advmod:locy	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	4	det	_	_
2	különböző	különböző	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	amod:att	_	_
3	szolgáltatási	szolgáltatási	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	amod:att	_	_
4	területeken	terület	NOUN	_	Case=Sup|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	nmod:obl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	ahol	ahol	ADV	_	PronType=Rel	9	advmod:locy	_	_
7	nagy	nagy	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	amod:att	_	_
8	a	a	DET	_	Definite=Def|PronType=Art	9	det	_	_
9	vendégforgalom	vendégforgalom	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	acl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	14	punct	_	_
11	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
12	biztonság	biztonság	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	nmod:att	_	_
13	szempontjából	szempont	NOUN	_	Case=Ela|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	14	nmod:obl	_	_
14	nélkülözhetetlen	nélkülözhetetlen	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
15	a	a	DET	_	Definite=Def|PronType=Art	16	det	_	_
16	megfigyelés	megfigyelés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	nsubj	_	SpaceAfter=No
17	.	.	PUNCT	_	_	14	punct	_	_

~~~


