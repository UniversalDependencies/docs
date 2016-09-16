

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

286 nodes (1%) are attached to their parents as `appos`.

244 instances of `appos` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.16433566433566.

The following 10 pairs of parts of speech are connected with `appos`: [hu-pos/NOUN]()-[hu-pos/PROPN]() (130; 45% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (76; 27% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (51; 18% instances), [hu-pos/PROPN]()-[hu-pos/PROPN]() (22; 8% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (2; 1% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/PROPN]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/PRON]()-[hu-pos/PROPN]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 appos	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	rendezvény	rendezvény	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nmod:att	_	_
3	szónoka	szónok	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	_
4	Tamás	Tamás	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	name	_	_
5	Gáspár	Gáspár	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	name	_	_
6	Miklós	Miklós	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	appos	_	_
7	filozófus	filozófus	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
8	lesz	lesz	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 appos	color:blue
1	Szent-Györgyi	Szent-Györgyi	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	name	_	_
2	Albert	Albert	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nsubj	_	_
3	segített	segít	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	rajta	rajta	PRON	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	3	nmod:obl	_	_
5	,	,	PUNCT	_	_	3	punct	_	_
6	apja	apa	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	7	nmod:att	_	_
7	barátja	barát	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	2	appos	_	_
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 appos	color:blue
1	Lezárásának	lezárás	NOUN	_	Case=Gen|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	2	nmod:att	_	_
2	határideje	határidő	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	0	root	_	_
3	:	:	PUNCT	_	_	2	punct	_	_
4	2000.	2000.	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	5	nmod:att	_	_
5	január	január	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:att	_	_
6	12.	12.	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	2	appos	_	_

~~~


