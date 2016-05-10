

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [advmod]().

666 nodes (0%) are attached to their parents as `advmod:quant`.

650 instances of `advmod:quant` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40540540540541.

The following 11 pairs of parts of speech are connected with `advmod:quant`: [et-pos/NOUN]()-[et-pos/NOUN]() (282; 42% instances), [et-pos/NOUN]()-[et-pos/ADV]() (265; 40% instances), [et-pos/NOUN]()-[et-pos/PRON]() (92; 14% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (14; 2% instances), [et-pos/ADJ]()-[et-pos/ADV]() (4; 1% instances), [et-pos/NOUN]()-[et-pos/SYM]() (2; 0% instances), [et-pos/NUM]()-[et-pos/NOUN]() (2; 0% instances), [et-pos/NUM]()-[et-pos/PRON]() (2; 0% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/ADJ]()-[et-pos/PRON]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:quant	color:blue
1	Ilmselt	ilmselt	ADV	D	_	2	advmod	_	_
2	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ajavahe	aja_vahe	NOUN	S	Case=Nom|Number=Sing	2	nsubj	_	_
4	kuu	kuu	NOUN	S	Case=Nom|Number=Sing	5	advmod:quant	_	_
5	aega	aeg	NOUN	S	Case=Par|Number=Sing	2	nmod	_	_
6	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:quant	color:blue
1	Kas	kas	ADV	D	_	3	advmod	_	_
2	neil	tema	PRON	P	Case=Ade|Number=Plur|Person=3|PronType=Prs	3	nmod	_	_
3	oleks	olema	VERB	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	piisavalt	piisavalt	ADV	D	_	5	advmod:quant	_	_
5	mune	muna	NOUN	S	Case=Par|Number=Plur	3	nsubj	_	_
6	,	,	PUNCT	Z	_	11	punct	_	_
7	et	et	SCONJ	J	_	11	mark	_	_
8	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	11	dobj	_	_
9	mulle	mina	PRON	P	Case=All|Number=Sing|Person=1|PronType=Prs	11	nmod	_	_
10	silma	silm	NOUN	S	Case=Add|Number=Sing	11	nmod	_	_
11	suruda	suruma	VERB	V	VerbForm=Inf	3	dep	_	_
12	?	?	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:quant	color:blue
1	Olin	olema	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	_	_
2	haigena	haige	NOUN	S	Case=Ess|Number=Sing	5	nmod	_	_
3	mitu	mitu	PRON	P	Case=Nom|Number=Sing|PronType=Ind	4	advmod:quant	_	_
4	korda	kord	NOUN	S	Case=Par|Number=Sing	5	nmod	_	_
5	tõusnud	tõusma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	,	,	PUNCT	Z	_	8	punct	_	_
7	et	et	SCONJ	J	_	8	mark	_	_
8	lahkuda	lahkuma	VERB	V	VerbForm=Inf	5	dep	_	_
9	.	.	PUNCT	Z	_	5	punct	_	_

~~~


