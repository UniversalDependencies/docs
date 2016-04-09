

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [compound]().

329 nodes (1%) are attached to their parents as `compound:preverb`.

276 instances of `compound:preverb` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17021276595745.

The following 9 pairs of parts of speech are connected with `compound:preverb`: [hu-pos/VERB]()-[hu-pos/ADV]() (235; 71% instances), [hu-pos/VERB]()-[hu-pos/PART]() (63; 19% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (9; 3% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (8; 2% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (7; 2% instances), [hu-pos/ADV]()-[hu-pos/ADV]() (4; 1% instances), [hu-pos/ADJ]()-[hu-pos/PART]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/PART]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 compound:preverb	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	miniszter	miniszter	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nsubj	_	_
3	fel	fel	ADV	_	Degree=Pos	5	compound:preverb	_	_
4	akarja	akar	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	menteni	ment	VERB	_	VerbForm=Inf|Voice=Act	4	xcomp	_	_
6	Kovácsot	Kovács	PROPN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	dobj	_	_
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:preverb	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	jogegységi	jogegységi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:att	_	_
3	döntés	döntés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
4	várhatóan	várható	ADJ	_	Case=Ess|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	6	amod:mode	_	_
5	decemberben	december	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
6	születik	születik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	meg	meg	PART	_	_	6	compound:preverb	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 compound:preverb	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	mélységbe	mélység	NOUN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
3	pedig	pedig	CONJ	_	_	5	cc	_	_
4	most	most	ADV	_	_	6	advmod:tlocy	_	_
5	kellene	kell	VERB	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	belebámulni	bele+bámul	VERB	_	VerbForm=Inf|Voice=Act	5	xcomp	_	_
7	ahhoz	az	PRON	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	6	nmod:obl	_	_
8	,	,	PUNCT	_	_	5	punct	_	_
9	hogy	hogy	SCONJ	_	_	13	mark	_	_
10	később	későn	ADV	_	_	13	advmod:tlocy	_	_
11	bele	ő	PRON	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	13	compound:preverb	_	_
12	ne	ne	ADV	_	PronType=Neg	13	neg	_	_
13	szédüljön	szédül	VERB	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	_
14	az	az	DET	_	Definite=Def|PronType=Art	15	det	_	_
15	ember	ember	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	nsubj	_	_
16	.	.	PUNCT	_	_	5	punct	_	_

~~~


