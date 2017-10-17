

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:foreign]().

436 nodes (1%) are attached to their parents as `flat:name`.

436 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.32798165137615.

The following 21 pairs of parts of speech are connected with `flat:name`: [lv-pos/PROPN]()-[lv-pos/PROPN]() (234; 54% instances), [lv-pos/SYM]()-[lv-pos/SYM]() (43; 10% instances), [lv-pos/NUM]()-[lv-pos/PUNCT]() (28; 6% instances), [lv-pos/PROPN]()-[lv-pos/X]() (19; 4% instances), [lv-pos/X]()-[lv-pos/X]() (18; 4% instances), [lv-pos/SYM]()-[lv-pos/PROPN]() (15; 3% instances), [lv-pos/NUM]()-[lv-pos/NUM]() (14; 3% instances), [lv-pos/NUM]()-[lv-pos/PROPN]() (14; 3% instances), [lv-pos/X]()-[lv-pos/SYM]() (14; 3% instances), [lv-pos/SYM]()-[lv-pos/NUM]() (8; 2% instances), [lv-pos/SYM]()-[lv-pos/X]() (7; 2% instances), [lv-pos/ADJ]()-[lv-pos/SYM]() (6; 1% instances), [lv-pos/PROPN]()-[lv-pos/NOUN]() (3; 1% instances), [lv-pos/PROPN]()-[lv-pos/SYM]() (3; 1% instances), [lv-pos/X]()-[lv-pos/PROPN]() (3; 1% instances), [lv-pos/X]()-[lv-pos/PUNCT]() (2; 0% instances), [lv-pos/NOUN]()-[lv-pos/PROPN]() (1; 0% instances), [lv-pos/NOUN]()-[lv-pos/X]() (1; 0% instances), [lv-pos/PROPN]()-[lv-pos/ADJ]() (1; 0% instances), [lv-pos/SYM]()-[lv-pos/PUNCT]() (1; 0% instances), [lv-pos/X]()-[lv-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Ģirts	Ģirts	PROPN	npmsn1	Case=Nom|Gender=Masc|Number=Sing	5	parataxis	_	_
2	Kuplais	Kuplais	PROPN	npmsn2	Case=Nom|Gender=Masc|Number=Sing	1	flat:name	_	SpaceAfter=No
3	:	:	PUNCT	zo	_	1	punct	_	_
4	Es	es	PRON	pp10snn	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	domāju	domāt	VERB	vmnipt21san	Evident=Fh,Nfh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	,	,	PUNCT	zc	_	9	punct	_	_
7	ka	ka	SCONJ	css	_	9	mark	_	_
8	vismaz	vismaz	ADV	r0q	_	9	advmod	_	_
9	pusmiljonu	pusmiljons	NOUN	ncmpa1	Case=Acc|Gender=Masc|Number=Plur	5	iobj	_	_
10	latu	lats	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	9	nmod	_	SpaceAfter=No
11	.	.	PUNCT	zs	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	[	[	PUNCT	zb	_	2	punct	_	SpaceAfter=No
2	1	1	NUM	xn	NumType=Card	4	parataxis	_	SpaceAfter=No
3	]	]	PUNCT	zb	_	2	punct	_	_
4	OV	OV	SYM	xx	_	0	root	_	_
5	C	C	SYM	xx	_	4	flat:name	_	_
6	154	154	NUM	xn	NumType=Card	4	flat:name	_	_
7	E	E	SYM	xx	_	4	flat:name	_	SpaceAfter=No
8	,	,	PUNCT	zc	_	9	punct	_	_
9	29.5.2001.	29.5.2001.	SYM	xx	_	4	parataxis	_	SpaceAfter=No
10	,	,	PUNCT	zc	_	12	punct	_	_
11	109.	109.	ADJ	xo	NumType=Ord	12	amod	_	_
12	lpp.	lpp.	SYM	y	Abbr=Yes	4	parataxis	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:name	color:blue
1	(	(	PUNCT	zb	_	2	punct	_	SpaceAfter=No
2	10	10	NUM	xn	NumType=Card	6	parataxis	_	SpaceAfter=No
3	)	)	PUNCT	zb	_	2	punct	_	_
4	Attiecīgi	attiecīgi	ADV	r0c	_	6	advmod	_	_
5	ir	būt	VERB	vcnipii30an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
6	jāgroza	grozīt	VERB	vmnd0t300an	Mood=Nec|Polarity=Pos|VerbForm=Fin|Voice=Act	0	root	_	_
7	Direktīva	direktīva	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	8	nmod	_	_
8	80	80	NUM	xn	NumType=Card	6	obj	_	SpaceAfter=No
9	/	/	PUNCT	zx	_	8	flat:name	_	SpaceAfter=No
10	987	987	NUM	xn	NumType=Card	8	flat:name	_	SpaceAfter=No
11	/	null	PUNCT	zx	_	8	flat:name	_	SpaceAfter=No
12	EEK	EEK	PROPN	y	Abbr=Yes	8	flat:name	_	SpaceAfter=No
13	.	.	PUNCT	zs	_	6	punct	_	_

~~~


