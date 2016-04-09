

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

494 nodes (0%) are attached to their parents as `mwe`.

494 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01214574898785.

The following 29 pairs of parts of speech are connected with `mwe`: [fi-pos/ADV]()-[fi-pos/ADV]() (289; 59% instances), [fi-pos/PRON]()-[fi-pos/ADV]() (70; 14% instances), [fi-pos/ADV]()-[fi-pos/SCONJ]() (23; 5% instances), [fi-pos/INTJ]()-[fi-pos/INTJ]() (20; 4% instances), [fi-pos/CONJ]()-[fi-pos/ADV]() (13; 3% instances), [fi-pos/ADV]()-[fi-pos/ADP]() (12; 2% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (10; 2% instances), [fi-pos/PRON]()-[fi-pos/SCONJ]() (6; 1% instances), [fi-pos/ADV]()-[fi-pos/CONJ]() (5; 1% instances), [fi-pos/ADV]()-[fi-pos/INTJ]() (5; 1% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (5; 1% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (4; 1% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (4; 1% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (3; 1% instances), [fi-pos/CONJ]()-[fi-pos/CONJ]() (3; 1% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (3; 1% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/INTJ]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/SCONJ]()-[fi-pos/ADV]() (2; 0% instances), [fi-pos/SCONJ]()-[fi-pos/SCONJ]() (2; 0% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/INTJ]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/INTJ]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/X]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/ADP]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 mwe	color:blue
1	Shieldit	Shield	PROPN	N	Case=Nom|Number=Plur	2	nsubj	_	_
2	kiinnittyvät	kiinnittyä	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	Arduinoon	Arduino	PROPN	N	Case=Ill|Number=Sing	2	nmod	_	_
4	näin	näin	ADV	Adv	_	2	advmod	_	_
5	ikään	ikään	ADV	Adv	_	4	mwe	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mwe	color:blue
1	´	´	PUNCT	Punct	_	2	punct	_	_
2	kenelle	kuka	PRON	Pron	Case=All|Number=Sing|PronType=Int	0	root	_	_
3	hyvänsä	hyvänsä	ADV	Adv	_	2	mwe	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	8	punct	_	_
5	joka	joka	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	8	nsubj	_	_
6	ei	ei	VERB	V	Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	8	neg	_	_
7	ole	olla	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	rohjennut	rohjeta	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	2	acl:relcl	_	_
9	´	´	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	Entä	entä	ADV	Adv	_	5	advmod	_	_
2	jos	jos	SCONJ	C	_	1	mwe	_	_
3	minä	minä	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
4	en	ei	VERB	V	Negative=Neg|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	5	neg	_	_
5	kuolekaan	kuolla	VERB	V	Clitic=Kaan|Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	?	?	PUNCT	Punct	_	5	punct	_	_

~~~


