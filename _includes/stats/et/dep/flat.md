

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

256 nodes (1%) are attached to their parents as `flat`.

256 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.21484375.

The following 14 pairs of parts of speech are connected with `flat`: [et-pos/PROPN]()-[et-pos/PROPN]() (197; 77% instances), [et-pos/NUM]()-[et-pos/NUM]() (23; 9% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (15; 6% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (7; 3% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (3; 1% instances), [et-pos/PROPN]()-[et-pos/SYM]() (3; 1% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (1; 0% instances), [et-pos/ADJ]()-[et-pos/NUM]() (1; 0% instances), [et-pos/ADV]()-[et-pos/ADV]() (1; 0% instances), [et-pos/ADV]()-[et-pos/PROPN]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/SYM]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/NUM]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Foto	foto	NOUN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	Z	_	3	punct	_	_
3	Marko	Marko	PROPN	S	Case=Nom|Number=Sing	1	parataxis	_	_
4	Mumm	mumm	PROPN	S	Case=Nom|Number=Sing	3	flat	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 flat	color:blue
1	Finaalis	finaal	NOUN	S	Case=Ine|Number=Sing	2	obl	_	_
2	alistas	alistama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
4	soomlase	soomlane	NOUN	S	Case=Gen|Number=Sing	5	nmod	_	_
5	Toni	Toni	PROPN	S	Case=Nom|Number=Sing	2	obj	_	_
6	Gardemeisteri	Gardemeister	PROPN	S	Case=Gen|Number=Sing	5	flat	_	_
7	3	3	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	2	nummod	_	SpaceAfter=No
8	:	:	PUNCT	Z	_	2	punct	_	SpaceAfter=No
9	2	2	NUM	N	NumForm=Digit|NumType=Card	7	flat	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Liina	Liina	PROPN	S	Case=Nom|Number=Sing	3	nsubj	_	_
2	Kolk	kolk	NOUN	S	Case=Nom|Number=Sing	1	flat	_	_
3	võitis	võitma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	56.	56.	ADJ	N	Case=Par|Number=Sing|NumForm=Digit|NumType=Ord	5	amod	_	_
5	koha	koht	NOUN	S	Case=Gen|Number=Sing	3	obj	_	_
6	337	337	NUM	N	Case=Gen|Number=Sing|NumForm=Digit|NumType=Card	7	nummod	_	_
7	punktiga	punkt	NOUN	S	Case=Com|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	3	punct	_	_

~~~


