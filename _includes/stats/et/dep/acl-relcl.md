

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [acl]().

220 nodes (1%) are attached to their parents as `acl:relcl`.

218 instances of `acl:relcl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.36818181818182.

The following 15 pairs of parts of speech are connected with `acl:relcl`: [et-pos/NOUN]()-[et-pos/VERB]() (149; 68% instances), [et-pos/PRON]()-[et-pos/VERB]() (25; 11% instances), [et-pos/PROPN]()-[et-pos/VERB]() (16; 7% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (8; 4% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (6; 3% instances), [et-pos/ADJ]()-[et-pos/VERB]() (3; 1% instances), [et-pos/NOUN]()-[et-pos/PRON]() (3; 1% instances), [et-pos/PRON]()-[et-pos/NOUN]() (2; 1% instances), [et-pos/PROPN]()-[et-pos/ADJ]() (2; 1% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/NUM]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/PRON]()-[et-pos/ADJ]() (1; 0% instances), [et-pos/PRON]()-[et-pos/NUM]() (1; 0% instances), [et-pos/PRON]()-[et-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl:relcl	color:blue
1	Lõpuks	lõpuks	ADV	D	_	2	advmod	_	_
2	leidsin	leidma	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	koha	koht	NOUN	S	Case=Gen|Number=Sing	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	_	_
5	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Rel	8	nsubj	_	_
6	näis	näima	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	aux	_	_
7	ööbimiseks	ööbimine	NOUN	S	Case=Tra|Number=Sing	8	obl	_	_
8	sobivat	sobima	VERB	V	Mood=Qot|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 acl:relcl	color:blue
1	Ega	ega	CCONJ	J	Polarity=Neg	5	cc	_	_
2	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
3	selleks	see	PRON	P	Case=Tra|Number=Sing|PronType=Dem	5	obl	_	_
4	maailma	maa_ilm	NOUN	S	Case=Add|Number=Sing	5	obl	_	_
5	tulnud	tulema	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Z	_	11	punct	_	_
7	et	et	SCONJ	J	_	11	mark	_	_
8	pimedas	pime	NOUN	S	Case=Ine|Number=Sing	11	obl	_	_
9	tiiva	tiib	NOUN	S	Case=Gen|Number=Sing	11	obl	_	_
10	all	all	ADP	K	AdpType=Post	9	case	_	_
11	lösutada	lösutama	VERB	V	VerbForm=Inf	3	acl:relcl	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 acl:relcl	color:blue
1	Teisena	teine	PRON	P	Case=Ess|Number=Sing|PronType=Dem	2	obl	_	_
2	lõpetas	lõpetama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	sakslane	sakslane	NOUN	S	Case=Nom|Number=Sing	4	nmod	_	_
4	Maro	Maro	PROPN	S	Case=Nom|Number=Sing	2	nsubj	_	_
5	Engel	Engel	PROPN	S	Case=Nom|Number=Sing	4	flat	_	_
6	(	(	PUNCT	Z	_	7	punct	_	SpaceAfter=No
7	Carlin	Carlin	PROPN	S	Case=Nom|Number=Sing	4	nmod	_	_
8	Motorsport	Motor_sport	PROPN	S	Case=Nom|Number=Sing	7	flat	_	SpaceAfter=No
9	)	)	PUNCT	Z	_	7	punct	_	SpaceAfter=No
10	,	,	PUNCT	Z	_	12	punct	_	_
11	kes	kes	PRON	P	Case=Nom|Number=Sing|PronType=Rel	12	nsubj	_	_
12	kaotas	kaotama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
13	talle	tema	PRON	P	Case=All|Number=Sing|Person=3|PronType=Prs	12	obl	_	_
14	6,771	6,771	NUM	N	Case=Gen|Number=Sing|NumForm=Digit|NumType=Card	15	nummod	_	_
15	sekundiga	sekund	NOUN	S	Case=Com|Number=Sing	12	obl	_	SpaceAfter=No
16	.	.	PUNCT	Z	_	2	punct	_	_

~~~


