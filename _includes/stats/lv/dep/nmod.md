

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

4336 nodes (10%) are attached to their parents as `nmod`.

3976 instances of `nmod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5984778597786.

The following 29 pairs of parts of speech are connected with `nmod`: [lv-pos/NOUN]()-[lv-pos/NOUN]() (3323; 77% instances), [lv-pos/NOUN]()-[lv-pos/PROPN]() (550; 13% instances), [lv-pos/PROPN]()-[lv-pos/NOUN]() (185; 4% instances), [lv-pos/VERB]()-[lv-pos/NOUN]() (53; 1% instances), [lv-pos/NUM]()-[lv-pos/NOUN]() (40; 1% instances), [lv-pos/PROPN]()-[lv-pos/PROPN]() (40; 1% instances), [lv-pos/NOUN]()-[lv-pos/SYM]() (35; 1% instances), [lv-pos/SYM]()-[lv-pos/NOUN]() (17; 0% instances), [lv-pos/X]()-[lv-pos/NOUN]() (13; 0% instances), [lv-pos/ADJ]()-[lv-pos/NOUN]() (12; 0% instances), [lv-pos/NOUN]()-[lv-pos/ADJ]() (9; 0% instances), [lv-pos/NOUN]()-[lv-pos/NUM]() (9; 0% instances), [lv-pos/NOUN]()-[lv-pos/X]() (9; 0% instances), [lv-pos/VERB]()-[lv-pos/PROPN]() (8; 0% instances), [lv-pos/NUM]()-[lv-pos/SYM]() (7; 0% instances), [lv-pos/SYM]()-[lv-pos/PROPN]() (5; 0% instances), [lv-pos/PRON]()-[lv-pos/NOUN]() (3; 0% instances), [lv-pos/ADJ]()-[lv-pos/PROPN]() (2; 0% instances), [lv-pos/ADJ]()-[lv-pos/SYM]() (2; 0% instances), [lv-pos/NOUN]()-[lv-pos/PRON]() (2; 0% instances), [lv-pos/NUM]()-[lv-pos/PROPN]() (2; 0% instances), [lv-pos/PROPN]()-[lv-pos/NUM]() (2; 0% instances), [lv-pos/X]()-[lv-pos/PROPN]() (2; 0% instances), [lv-pos/NOUN]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/PRON]()-[lv-pos/PRON]() (1; 0% instances), [lv-pos/PRON]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/PROPN]()-[lv-pos/SYM]() (1; 0% instances), [lv-pos/PUNCT]()-[lv-pos/NOUN]() (1; 0% instances), [lv-pos/SYM]()-[lv-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	Somiņa	somiņa	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	ar	ar	ADP	spsan	_	4	case	_	_
3	zelta	zelts	NOUN	ncmvg1	Case=Gen|Gender=Masc|Number=Coll	4	nmod	_	_
4	ķēdi	ķēde	NOUN	ncfsa5	Case=Acc|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
5	,	,	PUNCT	zc	_	6	punct	_	_
6	auskari	auskars	NOUN	ncmpn1	Case=Nom|Gender=Masc|Number=Plur	1	conj	_	_
7	spoži	spožs	ADJ	afmpnnp	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	_
8	un	un	CCONJ	ccs	_	9	cc	_	_
9	gari	garš	ADJ	afmpnnp	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	zs	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	Es	es	PRON	pp10snn	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	izvilku	izvilkt	VERB	vmnist11san	Evident=Fh,Nfh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	Dunhill	Dunhill	PROPN	np0sg0	Case=Gen|Number=Sing	4	nmod	_	_
4	paciņu	paciņa	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	SpaceAfter=No
5	.	.	PUNCT	zs	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nmod	color:blue
1	Piedalīsies	piedalīties	VERB	vmyifi330an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Reflex=Yes|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
2	Samanta	Samanta	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
3	Tīna	Tīna	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	2	flat:name	_	SpaceAfter=No
4	,	,	PUNCT	zc	_	6	punct	_	_
5	DJ	DJ	PROPN	y	Abbr=Yes	6	nmod	_	_
6	Japānis	japānis	PROPN	npmsn2	Case=Nom|Gender=Masc|Number=Sing	2	conj	_	SpaceAfter=No
7	,	,	PUNCT	zc	_	10	punct	_	_
8	grupa	grupa	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	10	nmod	_	_
9	„	„	PUNCT	zq	_	10	punct	_	SpaceAfter=No
10	Mono	Mono	PROPN	np__d0	Case=Dat	2	conj	_	SpaceAfter=No
11	"	"	PUNCT	zq	_	10	punct	_	SpaceAfter=No
12	.	.	PUNCT	zs	_	1	punct	_	_

~~~


