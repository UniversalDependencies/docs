

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

4041 nodes (2%) are attached to their parents as `aux`.

3895 instances of `aux` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.60529571888146.

The following 3 pairs of parts of speech are connected with `aux`: [et-pos/VERB]()-[et-pos/AUX]() (4038; 100% instances), [et-pos/NOUN]()-[et-pos/AUX]() (2; 0% instances), [et-pos/ADJ]()-[et-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	Vana	vana	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	2	amod	_	_
2	mehe	mees	NOUN	S	Case=Gen|Number=Sing	3	nmod	_	_
3	pea	pea	NOUN	S	Case=Nom|Number=Sing	6	nsubj	_	_
4	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	aux	_	_
5	rinnale	rind	NOUN	S	Case=All|Number=Sing	6	nmod	_	_
6	langenud	langema	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
7	,	,	PUNCT	Z	_	6	punct	_	_
8	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
9	magas	magama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	conj	_	_
10	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 aux	color:blue
1	Referentshinna	referents_hind	NOUN	S	Case=Gen|Number=Sing	2	nmod	_	_
2	kehtestamine	kehtestamine	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	_
3	annab	andma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	võimaluse	võimalus	NOUN	S	Case=Gen|Number=Sing	3	dobj	_	_
5	kompenseerida	kompenseerima	VERB	V	VerbForm=Inf	4	acl	_	_
6	uusi	uus	ADJ	A	Case=Par|Degree=Pos|Number=Plur	7	amod	_	_
7	originaalravimeid	originaal_ravim	NOUN	S	Case=Par|Number=Plur	5	dobj	_	_
8	,	,	PUNCT	Z	_	12	punct	_	_
9	millele	mis	PRON	P	Case=All|Number=Plur|PronType=Int,Rel	12	nmod	_	_
10	asendajat	asendaja	NOUN	S	Case=Par|Number=Sing	12	nsubj	_	_
11	ei	ei	AUX	V	Mood=Ind|Negative=Neg|VerbForm=Fin	12	neg	_	_
12	ole	olema	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
13	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux	color:blue
1	Lennart	Lennart	PROPN	S	Case=Nom|Number=Sing	6	nsubj:cop	_	_
2	omakorda	oma_korda	ADV	D	_	6	advmod	_	_
3	on	ole	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
4	alati	alati	ADV	D	_	6	advmod	_	_
5	olnud	ole	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	6	cop	_	_
6	tugevam	tuge=vam	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	_
7	poliitilise	poliitiline	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	8	amod	_	_
8	ämblikuvõrgu	ämbliku_võrk	NOUN	S	Case=Gen|Number=Sing	9	nmod	_	_
9	punumises	punu=mine	NOUN	S	Case=Ine|Number=Sing	6	nmod	_	_
10	.	.	PUNCT	Z	_	6	punct	_	_

~~~


