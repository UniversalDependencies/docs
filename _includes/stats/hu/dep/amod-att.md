

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [amod]().
There are also 3 other language-specific subtypes of `amod`: [amod:attlvc](), [amod:mode](), [amod:obl]().

3787 nodes (12%) are attached to their parents as `amod:att`.

3782 instances of `amod:att` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40163717982572.

The following 25 pairs of parts of speech are connected with `amod:att`: [hu-pos/NOUN]()-[hu-pos/ADJ]() (3203; 85% instances), [hu-pos/NOUN]()-[hu-pos/NUM]() (208; 5% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (124; 3% instances), [hu-pos/PROPN]()-[hu-pos/ADJ]() (90; 2% instances), [hu-pos/ADJ]()-[hu-pos/NUM]() (58; 2% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (56; 1% instances), [hu-pos/NOUN]()-[hu-pos/PROPN]() (13; 0% instances), [hu-pos/NUM]()-[hu-pos/NUM]() (9; 0% instances), [hu-pos/NUM]()-[hu-pos/ADJ]() (6; 0% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (3; 0% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (2; 0% instances), [hu-pos/ADV]()-[hu-pos/PRON]() (2; 0% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/ADJ]()-[hu-pos/PROPN]() (1; 0% instances), [hu-pos/ADJ]()-[hu-pos/X]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/X]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/PROPN]() (1; 0% instances), [hu-pos/SCONJ]()-[hu-pos/NUM]() (1; 0% instances), [hu-pos/X]()-[hu-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 amod:att	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	5	det	_	_
2	utolsó	utolsó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
3	hat	hat	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	4	nummod	_	_
4	hónapos	hónapos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
5	időszak	időszak	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	nsubj	_	_
6	azonban	azonban	CCONJ	_	_	10	cc	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	hét	hét	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:att	_	_
9	elején	eleje	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	nmod:obl	_	_
10	lejárt	le+jár	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod:att	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	dolgok	dolog	NOUN	_	Case=Nom|Number=Plur	4	nmod:att	_	_
3	pillanatnyi	pillanatnyi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	amod:att	_	_
4	állása	állás	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obl	_	_
5	szerint	szerint	ADP	_	_	4	case	_	_
6	az	az	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	utóbbira	utóbbi	NOUN	_	Case=Sub|Number=Sing	8	nmod:obl	_	_
8	mutatkozik	mutatkozik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	több	több	NUM	_	Case=Nom|Number=Sing|NumType=Card	10	amod:att	_	_
10	esély	esély	NOUN	_	Case=Nom|Number=Sing	8	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 amod:att	color:blue
1	Ha	ha	SCONJ	_	_	5	mark	_	_
2	a	a	DET	_	Definite=Def|PronType=Art	4	det	_	_
3	magasabb	magas	ADJ	_	Case=Nom|Degree=Cmp|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	amod:att	_	_
4	rendűre	rendű	ADJ	_	Case=Sub|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:obl	_	_
5	irányul	irányul	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	figyelmünk	figyelem	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	5	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	5	punct	_	_
9	mi	mi	PRON	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person=1|Person[psor]=None|PronType=Prs	12	nsubj	_	_
10	is	is	CCONJ	_	_	9	cc	_	ToDo=cc-without-conj
11	magasabb	magas	ADJ	_	Case=Nom|Degree=Cmp|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	amod:att	_	_
12	rendűek	rendű	ADJ	_	Case=Nom|Degree=Pos|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
13	leszünk	lesz	AUX	_	Definite=Ind|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	SpaceAfter=No
14	.	.	PUNCT	_	_	12	punct	_	_

~~~


