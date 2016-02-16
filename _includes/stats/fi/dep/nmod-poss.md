

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [nmod]().
There are also 3 other language-specific subtypes of `nmod`: [nmod:gobj](), [nmod:gsubj](), [nmod:own]().

9870 nodes (5%) are attached to their parents as `nmod:poss`.

9865 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39787234042553.

The following 32 pairs of parts of speech are connected with `nmod:poss`: [fi-pos/NOUN]()-[fi-pos/NOUN]() (5946; 60% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (2406; 24% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (693; 7% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (375; 4% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (116; 1% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (88; 1% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (81; 1% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (30; 0% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (28; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (27; 0% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (13; 0% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (11; 0% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (11; 0% instances), [fi-pos/ADP]()-[fi-pos/NOUN]() (7; 0% instances), [fi-pos/ADV]()-[fi-pos/PROPN]() (4; 0% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (4; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/NUM]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (3; 0% instances), [fi-pos/PROPN]()-[fi-pos/PRON]() (3; 0% instances), [fi-pos/ADV]()-[fi-pos/NUM]() (2; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (2; 0% instances), [fi-pos/X]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/X]()-[fi-pos/PROPN]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/ADP]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/ADP]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/X]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/X]()-[fi-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Canonin	Canon	PROPN	N	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	lankalaukaisin	lanka#laukaisin	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	5	punct	_	_
4	jonka	joka	PRON	Pron	Case=Gen|Number=Sing|PronType=Rel	5	dobj	_	_
5	purin	purkaa	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	acl:relcl	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Tämä	tämä	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	4	nsubj:cop	7:nsubj:cop|10:nsubj:cop	_
2	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	7:cop|10:cop	_
3	sinun	sinä	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	4	nmod:poss	_	_
4	levysi	levy	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	4	punct	_	_
6	sinun	sinä	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	7	nmod:poss	_	_
7	kirjasi	kirja	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	4	conj	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	4	punct	_	_
9	sinun	sinä	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	10	nmod:poss	_	_
10	televisiosi	televisio	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	4	conj	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	4	punct	_	_

~~~


