

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [acl]().

1894 nodes (1%) are attached to their parents as `acl:relcl`.

1892 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.01847940865892.

The following 31 pairs of parts of speech are connected with `acl:relcl`: [fi-pos/NOUN]()-[fi-pos/VERB]() (1286; 68% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (135; 7% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (122; 6% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (82; 4% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (66; 3% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (51; 3% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (37; 2% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (13; 1% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (12; 1% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (11; 1% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (9; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (8; 0% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (8; 0% instances), [fi-pos/PROPN]()-[fi-pos/ADJ]() (7; 0% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (6; 0% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (5; 0% instances), [fi-pos/SYM]()-[fi-pos/VERB]() (5; 0% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (4; 0% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (4; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (3; 0% instances), [fi-pos/NUM]()-[fi-pos/NOUN]() (3; 0% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (3; 0% instances), [fi-pos/X]()-[fi-pos/VERB]() (3; 0% instances), [fi-pos/NOUN]()-[fi-pos/SYM]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (2; 0% instances), [fi-pos/INTJ]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Yli	yli	ADV	Adv	_	2	advmod	_	_
2	600	600	NUM	Num	NumType=Card	3	nummod	_	_
3	vastusta	vastus	NOUN	N	Case=Par|Number=Sing	0	root	_	_
4	(	(	PUNCT	Punct	_	6	punct	_	SpaceAfter=No
5	joista	joka	PRON	Pron	Case=Ela|Number=Plur|PronType=Rel	6	nmod	_	_
6	tarvin	tarvita	VERB	V	Mood=Ind|Number=Sing|Person=1|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
7	alle	alle	ADV	Adv	_	8	advmod	_	_
8	kymmentä	kymmenen	NUM	Num	Case=Par|Number=Sing|NumType=Card	6	dobj	_	SpaceAfter=No
9	)	)	PUNCT	Punct	_	6	punct	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	Olet	olla	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	mitä	mikä	PRON	Pron	Case=Par|Number=Sing|PronType=Rel	3	dobj	_	_
3	syöt	syödä	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	1	punct	_	_
5	sanotaan	sanoa	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	1	parataxis	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl:relcl	color:blue
1	Klinga	Klinga	PROPN	N	Case=Nom|Number=Sing	3	nsubj:cop	_	_
2	oli	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
3	ainoa	ainoa	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	0	root	_	_
4	suomalaisista	suomalainen	NOUN	N	Case=Ela|Number=Plur	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	8	punct	_	_
6	joka	joka	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	8	nsubj	_	_
7	joutui	joutua	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	aux	_	_
8	karsimaan	karsia	VERB	V	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	3	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


