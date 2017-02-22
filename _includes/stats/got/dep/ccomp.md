

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Gothic)

This relation is universal.

672 nodes (1%) are attached to their parents as `ccomp`.

647 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.50148809523809.

The following 17 pairs of parts of speech are connected with `ccomp`: [got-pos/VERB]()-[got-pos/VERB]() (530; 79% instances), [got-pos/VERB]()-[got-pos/SCONJ]() (40; 6% instances), [got-pos/ADJ]()-[got-pos/VERB]() (23; 3% instances), [got-pos/ADV]()-[got-pos/VERB]() (19; 3% instances), [got-pos/ADP]()-[got-pos/VERB]() (18; 3% instances), [got-pos/NOUN]()-[got-pos/VERB]() (17; 3% instances), [got-pos/VERB]()-[got-pos/ADV]() (4; 1% instances), [got-pos/VERB]()-[got-pos/CCONJ]() (4; 1% instances), [got-pos/VERB]()-[got-pos/NOUN]() (4; 1% instances), [got-pos/VERB]()-[got-pos/PRON]() (4; 1% instances), [got-pos/ADJ]()-[got-pos/ADJ]() (2; 0% instances), [got-pos/PRON]()-[got-pos/VERB]() (2; 0% instances), [got-pos/ADP]()-[got-pos/PRON]() (1; 0% instances), [got-pos/INTJ]()-[got-pos/VERB]() (1; 0% instances), [got-pos/NOUN]()-[got-pos/ADJ]() (1; 0% instances), [got-pos/VERB]()-[got-pos/ADJ]() (1; 0% instances), [got-pos/VERB]()-[got-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	ni	ni	ADV	Df	Polarity=Neg	2	advmod	_	ref=MATT_5.17
2	hugjaiþ	hugjan	VERB	V-	Mood=Opt|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.17
3	ei	ei	SCONJ	G-	_	4	mark	_	ref=MATT_5.17
4	qemjau	qiman	VERB	V-	Mood=Opt|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	ccomp	_	ref=MATT_5.17
5	gatairan	ga-tairan	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	4	advcl	_	ref=MATT_5.17
6	witoþ	witoþ	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	5	obj:dir	_	ref=MATT_5.17
7	aiþþau	aiþþau	CCONJ	C-	_	6	cc	_	ref=MATT_5.17
8	praufetuns	praufetes	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	6	conj	_	ref=MATT_5.17

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
1	qaþ	qiþan	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=MARK_6.18
2	auk	auk	ADV	Df	_	1	discourse	_	ref=MARK_6.18
3	Iohannes	Iohannes	PROPN	Ne	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	ref=MARK_6.18
4	du	du	ADP	R-	_	5	case	_	ref=MARK_6.18
5	Heroda	Herodes	PROPN	Ne	Case=Dat|Gender=Masc|Number=Sing	1	obl	_	ref=MARK_6.18
6	þatei	þatei	SCONJ	G-	_	1	ccomp	_	ref=MARK_6.18

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	duþei	duþe	ADV	Df	_	6	advmod	_	ref=LUKE_7.7
2	ni	ni	ADV	Df	Polarity=Neg	6	advmod	_	ref=LUKE_7.7
3	mik	ik	PRON	Pp	Case=Acc|Gender=Masc|Number=Sing|Person=1|PronType=Prs	6	obj:dir	_	ref=LUKE_7.7
4	silban	silba	PRON	Pk	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	3	det	_	ref=LUKE_7.7
5	wairþana	wairþs	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Strength=Strong	6	xcomp	_	ref=LUKE_7.7
6	rahnida	rahnjan	VERB	V-	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=LUKE_7.7
7	at	at	ADP	R-	_	8	case	_	ref=LUKE_7.7
8	þus	þu	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	9	obl	_	ref=LUKE_7.7
9	qiman	qiman	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	5	ccomp	_	ref=LUKE_7.7

~~~


