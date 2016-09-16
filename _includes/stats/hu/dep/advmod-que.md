

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [advmod]().
There are also 7 other language-specific subtypes of `advmod`: [advmod:locy](), [advmod:mode](), [advmod:obl](), [advmod:tfrom](), [advmod:tlocy](), [advmod:to](), [advmod:tto]().

22 nodes (0%) are attached to their parents as `advmod:que`.

19 instances of `advmod:que` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.31818181818182.

The following 2 pairs of parts of speech are connected with `advmod:que`: [hu-pos/VERB]()-[hu-pos/ADV]() (20; 91% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (2; 9% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 advmod:que	color:blue
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
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 advmod:que	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	támadásokkal	támadás	NOUN	_	Case=Ins|Number=Plur	4	nmod:obl	_	_
3	párhuzamosan	párhuzamos	ADJ	_	Case=Ess|Degree=Pos|Number=Sing	4	nmod	_	_
4	folytatódik	folytatódik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
6	"	"	PUNCT	_	_	7	punct	_	_
7	rábeszélés	rábeszélés	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
8	"	"	PUNCT	_	_	7	punct	_	_
9	is	is	CONJ	_	_	4	cc	_	_
10	:	:	PUNCT	_	_	4	punct	_	_
11	az	az	DET	_	Definite=Def|PronType=Art	12	det	_	_
12	albánok	albán	NOUN	_	Case=Nom|Number=Plur	14	nsubj	_	_
13	számtalanszor	számtalan	NUM	_	Case=Nom|Number=Sing|NumType=Card	14	nmod	_	_
14	érdeklődnek	érdeklődik	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	_
15	szerb	szerb	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	16	amod:att	_	_
16	szomszédaiknál	szomszéd	NOUN	_	Case=Ade|Number=Plur|Number[psor]=Plur|Person[psor]=3	14	nmod:obl	_	_
17	,	,	PUNCT	_	_	14	punct	_	_
18	eladó	eladó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|VerbForm=PartPres	14	ccomp:obl	_	_
19	-e	-e	ADV	_	PronType=Int	18	advmod:que	_	_
20	az	az	DET	_	Definite=Def|PronType=Art	21	det	_	_
21	ingatlan	ingatlan	NOUN	_	Case=Nom|Number=Sing	18	nsubj	_	_
22	.	.	PUNCT	_	_	4	punct	_	_

~~~


