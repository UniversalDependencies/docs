

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [amod]().
There are also 3 other language-specific subtypes of `amod`: [amod:att](), [amod:attlvc](), [amod:obl]().

214 nodes (1%) are attached to their parents as `amod:mode`.

199 instances of `amod:mode` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.04672897196262.

The following 8 pairs of parts of speech are connected with `amod:mode`: [hu-pos/VERB]()-[hu-pos/ADJ]() (159; 74% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (41; 19% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (4; 2% instances), [hu-pos/ADV]()-[hu-pos/ADJ]() (3; 1% instances), [hu-pos/DET]()-[hu-pos/ADJ]() (3; 1% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (2; 1% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 amod:mode	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 amod:mode	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	árindex	árindex	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
3	várhatóan	várható	ADJ	_	Case=Ess|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	5	amod:mode	_	_
4	8	8	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	5	nummod	_	_
5	százalékos	százalékos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
6	lesz	lesz	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 amod:mode	color:blue
1	Így	így	CONJ	_	_	7	cc	_	_
2	már	már	ADV	_	_	7	advmod:mode	_	_
3	természetesen	természetes	ADJ	_	Case=Ess|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:mode	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	továbbjutás	továbbjutás	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	nsubj	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	célunk	cél	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	0	root	_	_
8	!	!	PUNCT	_	_	7	punct	_	_
9	"	"	PUNCT	_	_	7	punct	_	_

~~~


