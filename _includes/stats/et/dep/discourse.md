

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

251 nodes (0%) are attached to their parents as `discourse`.

209 instances of `discourse` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.27091633466135.

The following 9 pairs of parts of speech are connected with `discourse`: [et-pos/VERB]()-[et-pos/INTJ]() (147; 59% instances), [et-pos/NOUN]()-[et-pos/INTJ]() (31; 12% instances), [et-pos/ADV]()-[et-pos/INTJ]() (18; 7% instances), [et-pos/INTJ]()-[et-pos/INTJ]() (17; 7% instances), [et-pos/ADJ]()-[et-pos/INTJ]() (14; 6% instances), [et-pos/PRON]()-[et-pos/INTJ]() (13; 5% instances), [et-pos/PROPN]()-[et-pos/INTJ]() (8; 3% instances), [et-pos/X]()-[et-pos/INTJ]() (2; 1% instances), [et-pos/SYM]()-[et-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Kurat	kurat	INTJ	I	_	5	discourse	_	_
2	,	,	PUNCT	Z	_	5	punct	_	_
3	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	5	dobj	_	_
4	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	teen	tegema	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	dep	_	_
6	,	,	PUNCT	Z	_	5	punct	_	_
7	mõtles	mõtlema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
9	jahmunult	jahmunult	ADV	D	_	7	advmod	_	_
10	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 discourse	color:blue
1	"	"	PUNCT	Z	_	4	punct	_	_
2	Ah	ah	INTJ	I	_	4	discourse	_	_
3	mulgimaa	mulgi_maa	ADJ	G	_	4	amod	_	_
4	laulja	laulja	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
5	!	!	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	No	no	INTJ	I	_	2	discourse	_	_
2	lõpuks	lõpuks	ADV	D	_	3	advmod	_	_
3	saab	saama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	number	number	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	_
5	1	1	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	4	nummod	_	_
6	korda	kord	NOUN	S	Case=Add|Number=Sing	3	nmod	_	_
7	.	.	PUNCT	Z	_	3	punct	_	_

~~~


