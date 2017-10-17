

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

199 nodes (0%) are attached to their parents as `dep`.

197 instances of `dep` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.41708542713568.

The following 43 pairs of parts of speech are connected with `dep`: [eu-pos/PROPN]()-[eu-pos/NOUN]() (27; 14% instances), [eu-pos/PROPN]()-[eu-pos/PROPN]() (23; 12% instances), [eu-pos/ADV]()-[eu-pos/VERB]() (15; 8% instances), [eu-pos/ADV]()-[eu-pos/CCONJ]() (11; 6% instances), [eu-pos/NOUN]()-[eu-pos/NOUN]() (11; 6% instances), [eu-pos/VERB]()-[eu-pos/NOUN]() (8; 4% instances), [eu-pos/ADV]()-[eu-pos/ADJ]() (7; 4% instances), [eu-pos/ADV]()-[eu-pos/ADV]() (7; 4% instances), [eu-pos/ADJ]()-[eu-pos/NOUN]() (6; 3% instances), [eu-pos/NOUN]()-[eu-pos/NUM]() (6; 3% instances), [eu-pos/DET]()-[eu-pos/DET]() (5; 3% instances), [eu-pos/NUM]()-[eu-pos/NOUN]() (5; 3% instances), [eu-pos/VERB]()-[eu-pos/ADJ]() (5; 3% instances), [eu-pos/ADJ]()-[eu-pos/ADV]() (4; 2% instances), [eu-pos/INTJ]()-[eu-pos/NUM]() (4; 2% instances), [eu-pos/INTJ]()-[eu-pos/VERB]() (4; 2% instances), [eu-pos/NOUN]()-[eu-pos/ADJ]() (4; 2% instances), [eu-pos/NOUN]()-[eu-pos/VERB]() (4; 2% instances), [eu-pos/NUM]()-[eu-pos/DET]() (4; 2% instances), [eu-pos/VERB]()-[eu-pos/CCONJ]() (4; 2% instances), [eu-pos/X]()-[eu-pos/ADV]() (3; 2% instances), [eu-pos/ADJ]()-[eu-pos/ADJ]() (2; 1% instances), [eu-pos/ADV]()-[eu-pos/DET]() (2; 1% instances), [eu-pos/ADV]()-[eu-pos/PROPN]() (2; 1% instances), [eu-pos/CCONJ]()-[eu-pos/ADV]() (2; 1% instances), [eu-pos/CCONJ]()-[eu-pos/VERB]() (2; 1% instances), [eu-pos/PRON]()-[eu-pos/CCONJ]() (2; 1% instances), [eu-pos/PRON]()-[eu-pos/DET]() (2; 1% instances), [eu-pos/PROPN]()-[eu-pos/CCONJ]() (2; 1% instances), [eu-pos/VERB]()-[eu-pos/VERB]() (2; 1% instances), [eu-pos/X]()-[eu-pos/PART]() (2; 1% instances), [eu-pos/ADJ]()-[eu-pos/PROPN]() (1; 1% instances), [eu-pos/ADV]()-[eu-pos/NOUN]() (1; 1% instances), [eu-pos/DET]()-[eu-pos/CCONJ]() (1; 1% instances), [eu-pos/DET]()-[eu-pos/PROPN]() (1; 1% instances), [eu-pos/INTJ]()-[eu-pos/NOUN]() (1; 1% instances), [eu-pos/NOUN]()-[eu-pos/CCONJ]() (1; 1% instances), [eu-pos/NOUN]()-[eu-pos/DET]() (1; 1% instances), [eu-pos/NOUN]()-[eu-pos/X]() (1; 1% instances), [eu-pos/NUM]()-[eu-pos/PROPN]() (1; 1% instances), [eu-pos/PRON]()-[eu-pos/NOUN]() (1; 1% instances), [eu-pos/PRON]()-[eu-pos/PROPN]() (1; 1% instances), [eu-pos/PROPN]()-[eu-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 dep	color:blue
1	Langabeziaren	langabezia	NOUN	_	Case=Gen	3	nmod	_	_
2	aurkako	aurkako	ADP	_	Case=Loc|Definite=Def|Number=Sing	1	case	_	_
3	borroka	borroka	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	8	nsubj	_	_
4	da	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	8	cop	_	_
5	Gerhard	Gerhard	PROPN	_	_	8	nmod	_	_
6	Schroederren	Schroeder	PROPN	_	Case=Gen|Definite=Def|Number=Sing	5	dep	_	_
7	Gobernuaren	gobernu	NOUN	_	Case=Gen|Definite=Def|Number=Sing	5	dep	_	_
8	helburu	helburu	NOUN	_	_	0	root	_	_
9	nagusia	nagusi	ADJ	_	Case=Abs|Definite=Def|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dep	color:blue
1	ETBko	ETB	PROPN	_	Case=Loc|Definite=Def|Number=Sing	4	nmod	_	_
2	Bertatik	Bertatik	PROPN	_	_	4	nmod	_	_
3	Bertara	Bertara	PROPN	_	_	2	dep	_	_
4	saioko	saio	NOUN	_	Animacy=Inan|Case=Loc|Definite=Def|Number=Sing	5	nmod	_	_
5	aurkezlea	aurkezle	NOUN	_	Animacy=Anim|Case=Abs|Definite=Def|Number=Sing	0	root	_	_
6	da	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	10	cop	_	SpaceAfter=No
7	,	,	PUNCT	_	_	5	punct	_	_
8	eta	eta	CCONJ	_	_	6	cc	_	_
9	eguraldi	eguraldi	NOUN	_	_	10	nmod	_	_
10	gizona	gizon	NOUN	_	Animacy=Anim|Case=Abs|Definite=Def|Number=Sing	5	cop	_	SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dep	color:blue
1	Jokatzeko	jokatu	VERB	_	Case=Loc	3	advcl	_	_
2	prest	prest	ADV	_	_	0	root	_	_
3	nago	egon	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=1	2	dep	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	baina	baina	CCONJ	_	_	9	cc	_	_
6	belauna	belaun	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	9	obj	_	_
7	oraindik	oraindik	ADV	_	_	9	advmod	_	_
8	ez	ez	PART	_	Polarity=Neg	9	advmod	_	_
9	dut	ukan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=1	2	conj	_	_
10	erabat	erabat	ADV	_	_	11	advmod	_	_
11	ongi	ongi	ADV	_	_	9	advmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


