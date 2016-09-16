

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Gothic)

This relation is universal.

846 nodes (2%) are attached to their parents as `ccomp`.

815 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.50591016548463.

The following 21 pairs of parts of speech are connected with `ccomp`: [got-pos/VERB]()-[got-pos/VERB]() (677; 80% instances), [got-pos/VERB]()-[got-pos/SCONJ]() (49; 6% instances), [got-pos/ADJ]()-[got-pos/VERB]() (28; 3% instances), [got-pos/ADP]()-[got-pos/VERB]() (23; 3% instances), [got-pos/ADV]()-[got-pos/VERB]() (21; 2% instances), [got-pos/NOUN]()-[got-pos/VERB]() (19; 2% instances), [got-pos/VERB]()-[got-pos/ADV]() (4; 0% instances), [got-pos/VERB]()-[got-pos/CONJ]() (4; 0% instances), [got-pos/VERB]()-[got-pos/PRON]() (4; 0% instances), [got-pos/PRON]()-[got-pos/VERB]() (3; 0% instances), [got-pos/VERB]()-[got-pos/ADJ]() (3; 0% instances), [got-pos/VERB]()-[got-pos/NOUN]() (2; 0% instances), [got-pos/ADJ]()-[got-pos/ADJ]() (1; 0% instances), [got-pos/ADJ]()-[got-pos/SCONJ]() (1; 0% instances), [got-pos/ADP]()-[got-pos/NOUN]() (1; 0% instances), [got-pos/ADP]()-[got-pos/PRON]() (1; 0% instances), [got-pos/ADV]()-[got-pos/ADJ]() (1; 0% instances), [got-pos/INTJ]()-[got-pos/VERB]() (1; 0% instances), [got-pos/NOUN]()-[got-pos/ADJ]() (1; 0% instances), [got-pos/PROPN]()-[got-pos/VERB]() (1; 0% instances), [got-pos/VERB]()-[got-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Amen	amen	INTJ	I-	_	2	vocative	_	_
2	qiþa	qiþan	VERB	V-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	izwis	jūs	PRON	Pp	Case=Dat|Gender=Fem,Masc|Number=Plur|Person=2|PronType=Prs	2	iobj	_	_
4	þatei	þatei	SCONJ	G-	_	5	mark	_	_
5	haband	haban	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
6	mizdon	mizdo	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	5	dobj	_	_
7	seina	*seins	PRON	Pt	Case=Acc|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	6	nmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	jah	jah	CONJ	C-	_	2	cc	_	_
2	swor	swaran	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	izai	is	PRON	Pp	Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	iobj	_	_
4	þatei	þatei	SCONJ	G-	_	2	ccomp	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 ccomp	color:blue
1	frauja	frauja	NOUN	Nb	Case=Voc|Gender=Masc|Number=Sing	3	vocative	_	_
2	ni	ni	ADV	Df	_	3	neg	_	_
3	draibei	draibjan	VERB	V-	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	þuk	þu	PRON	Pp	Case=Acc|Gender=Masc|Number=Sing|Person=2|PronType=Prs	3	aux	_	_
5	unte	unte	SCONJ	G-	_	7	mark	_	_
6	ni	ni	ADV	Df	_	7	neg	_	_
7	im	wisan#1	VERB	V-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	_
8	wairþs	wairþs	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Strength=Strong	7	xcomp	_	_
9	ei	ei	SCONJ	G-	_	13	mark	_	_
10	uf	uf	ADP	R-	_	11	case	_	_
11	hrot	hrot	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	13	iobj	_	_
12	mein	meins	PRON	Ps	Case=Acc|Gender=Neut|Number=Sing|Person=1|Poss=Yes|PronType=Prs	11	nmod	_	_
13	inngaggais	inn-gaggan	VERB	V-	Mood=Opt|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	8	ccomp	_	_

~~~


