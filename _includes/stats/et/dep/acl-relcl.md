

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [acl]().

1739 nodes (1%) are attached to their parents as `acl:relcl`.

1736 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.03852788959172.

The following 18 pairs of parts of speech are connected with `acl:relcl`: [et-pos/NOUN]()-[et-pos/VERB]() (1218; 70% instances), [et-pos/PRON]()-[et-pos/VERB]() (184; 11% instances), [et-pos/PROPN]()-[et-pos/VERB]() (139; 8% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (70; 4% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (33; 2% instances), [et-pos/ADJ]()-[et-pos/VERB]() (27; 2% instances), [et-pos/PRON]()-[et-pos/ADJ]() (17; 1% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (13; 1% instances), [et-pos/VERB]()-[et-pos/VERB]() (12; 1% instances), [et-pos/PRON]()-[et-pos/NOUN]() (5; 0% instances), [et-pos/PROPN]()-[et-pos/ADJ]() (5; 0% instances), [et-pos/NOUN]()-[et-pos/PRON]() (4; 0% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (3; 0% instances), [et-pos/NOUN]()-[et-pos/NUM]() (3; 0% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (2; 0% instances), [et-pos/PRON]()-[et-pos/PRON]() (2; 0% instances), [et-pos/PROPN]()-[et-pos/NUM]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 acl:relcl	color:blue
1	"	"	PUNCT	Z	_	3	punct	_	_
2	Teil	sina	PRON	P	Case=Ade|Number=Plur|Person=2|PronType=Prs	3	nmod	_	_
3	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	väga	väga	ADV	D	_	5	advmod	_	_
5	vedel	vedel	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	_	_
6	veri	veri	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	_
7	,	,	PUNCT	Z	_	3	punct	_	_
8	"	"	PUNCT	Z	_	3	punct	_	_
9	ütles	ütlema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis	_	_
10	õde	õde	NOUN	S	Case=Nom|Number=Sing	9	nsubj	_	_
11	,	,	PUNCT	Z	_	14	punct	_	_
12	kes	kes	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	14	nsubj	_	_
13	vereproovi	vere_proov	NOUN	S	Case=Par|Number=Sing	14	dobj	_	_
14	võttis	võtma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	acl:relcl	_	_
15	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 acl:relcl	color:blue
1	Alati	alati	ADV	D	_	2	advmod	_	_
2	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	kambas	kamp	NOUN	S	Case=Ine|Number=Sing	2	nmod	_	_
4	keegi	keegi	PRON	P	Case=Nom|Number=Sing|PronType=Ind	2	nsubj	_	_
5	,	,	PUNCT	Z	_	9	punct	_	_
6	kes	kes	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	9	nsubj	_	_
7	midagi	miski	PRON	P	Case=Par|Number=Sing|PronType=Ind	9	dobj	_	_
8	kokku	kokku	ADV	D	_	9	compound:prt	_	_
9	keerab	keerama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
10	.	.	PUNCT	Z	_	2	punct	_	_
11	"	"	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Jah	jah	ADV	D	_	4	advmod	_	_
2	,	,	PUNCT	Z	_	4	punct	_	_
3	sama	sama	ADJ	P	Case=Nom|Number=Sing|PronType=Dem	4	amod	_	_
4	Madis	Madis	PROPN	S	Case=Nom|Number=Sing	0	root	_	_
5	,	,	PUNCT	Z	_	7	punct	_	_
6	kes	kes	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	7	nsubj	_	_
7	elab	elama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
8	erakas	erakas	NOUN	S	Case=Ine|Number=Sing	7	nmod	_	_
9	-	-	PUNCT	Z	_	7	punct	_	_
10	prillidega	prill	NOUN	S	Case=Com|Number=Plur	4	nmod	_	_
11	.	.	PUNCT	Z	_	4	punct	_	_
12	"	"	PUNCT	Z	_	4	punct	_	_

~~~


