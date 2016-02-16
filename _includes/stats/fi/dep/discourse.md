

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

269 nodes (0%) are attached to their parents as `discourse`.

150 instances of `discourse` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.22304832713755.

The following 27 pairs of parts of speech are connected with `discourse`: [fi-pos/VERB]()-[fi-pos/INTJ]() (84; 31% instances), [fi-pos/VERB]()-[fi-pos/SYM]() (70; 26% instances), [fi-pos/NOUN]()-[fi-pos/SYM]() (26; 10% instances), [fi-pos/NOUN]()-[fi-pos/INTJ]() (22; 8% instances), [fi-pos/ADJ]()-[fi-pos/SYM]() (18; 7% instances), [fi-pos/ADJ]()-[fi-pos/INTJ]() (9; 3% instances), [fi-pos/ADV]()-[fi-pos/INTJ]() (6; 2% instances), [fi-pos/VERB]()-[fi-pos/X]() (6; 2% instances), [fi-pos/ADV]()-[fi-pos/SYM]() (3; 1% instances), [fi-pos/PRON]()-[fi-pos/INTJ]() (3; 1% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (3; 1% instances), [fi-pos/NOUN]()-[fi-pos/X]() (2; 1% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (2; 1% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (2; 1% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/ADJ]()-[fi-pos/X]() (1; 0% instances), [fi-pos/AUX]()-[fi-pos/INTJ]() (1; 0% instances), [fi-pos/INTJ]()-[fi-pos/INTJ]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/INTJ]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/INTJ]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/X]()-[fi-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Ai	ai	INTJ	Interj	_	4	discourse	_	_
2	niin	niin	INTJ	Interj	_	1	mwe	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	1	punct	_	_
4	meinasi	meinata	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	julkinen	julkinen	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	_	_
6	painostus	painostus	NOUN	N	Case=Nom|Number=Sing	4	nsubj	7:nsubj	_
7	unohtua	unohtua	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	4	xcomp	_	SpaceAfter=No
8	:	:	PUNCT	Punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 discourse	color:blue
1	Sallalle	Salla	PROPN	N	Case=All|Number=Sing	5	nmod	_	_
2	osaan	osata	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	kyllä	kyllä	ADV	Adv	_	2	advmod	_	_
4	neuleen	neule	NOUN	N	Case=Gen|Number=Sing	5	dobj	_	_
5	kuvitella	kuvitella	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	2	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
7	:)	:)	SYM	Symb	_	2	discourse	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 discourse	color:blue
1	2.5mm	2.5#mm	NOUN	N	Abbr=Yes|Case=Gen|Number=Sing|Typo=Yes	2	nmod:poss	_	_
2	plugeilla	plugi	NOUN	N	Case=Ade|Number=Plur	3	nmod	_	_
3	olevaa	olla	VERB	V	Case=Par|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	4	acl	_	_
4	piuhaa	piuha	NOUN	N	Case=Par|Number=Sing	0	root	_	_
5	kun	kun	SCONJ	C	_	9	mark	_	_
6	ei	ei	VERB	V	Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	9	neg	_	_
7	itseltäni	itse	PRON	Pron	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=1|Reflex=Yes	9	nmod	_	_
8	muualta	muualta	ADV	Adv	_	9	advmod	_	_
9	löytynyt	löytyä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	4	advcl	_	_
10	:)	:)	SYM	Symb	_	4	discourse	_	_

~~~


