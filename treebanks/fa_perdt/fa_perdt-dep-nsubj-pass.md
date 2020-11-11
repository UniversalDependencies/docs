---
layout: base
title:  'Statistics of nsubj:pass in UD_Persian-PerDT'
udver: '2'
---

## Treebank Statistics: UD_Persian-PerDT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="fa_perdt-dep-nsubj.html">nsubj</a></tt>.

533 nodes (0%) are attached to their parents as `nsubj:pass`.

532 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.74859287054409.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="fa_perdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_perdt-pos-NOUN.html">NOUN</a></tt> (484; 91% instances), <tt><a href="fa_perdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_perdt-pos-PROPN.html">PROPN</a></tt> (37; 7% instances), <tt><a href="fa_perdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_perdt-pos-PRON.html">PRON</a></tt> (12; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	در	در	ADP	PREP	_	2	case	_	_
2	معبر	معبر	NOUN	N_IANM	Number=Sing	7	obl	_	_
3	قتل‌عام	قتل‌عام	NOUN	N_IANM	Number=Sing	2	nmod	_	SpaceAfter=No
4	،	،	PUNCT	PUNC	_	3	punct	_	_
5	شمع‌های	شمع	NOUN	N_IANM	Number=Plur	7	nsubj:pass	_	_
6	خاطره	خاطره	NOUN	N_IANM	Number=Sing	5	nmod	_	_
7	افروخته	افروخت#افروز	VERB	V_PASS	Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
8	خواهد	خواست#خواه	AUX	AUX	Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	7	aux	_	_
9	شد	شد#شو	AUX	AUX	Number=Sing|Person=3|Tense=Past	7	aux:pass	_	SpaceAfter=No
10	.	.	PUNCT	PUNC	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:pass	color:blue
1	پاندای	پاندا	PROPN	N_ANM	Number=Sing	7	nsubj:pass	_	_
2	موقرمز	موقرمز	ADJ	ADJ_AJP	_	1	amod	_	_
3	از	از	ADP	PREP	_	4	case	_	_
4	خطر	خطر	NOUN	N_IANM	Number=Sing	7	obl:arg	_	_
5	انقراض	انقراض	NOUN	N_IANM	Number=Sing	4	nmod	_	_
6	نجات	نجات	NOUN	N_IANM	Number=Sing	7	compound:lvc	_	_
7	داده	داد#ده	VERB	V_PASS	Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
8	شد	شد#شو	AUX	AUX	Number=Sing|Person=3|Tense=Past	7	aux:pass	_	SpaceAfter=No
9	.	.	PUNCT	PUNC	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 1 nsubj:pass	color:blue
1	آنان	آنان	PRON	PR_SEPER	Number=Plur|Person=3	13	nsubj:pass	_	_
2	که	که	SCONJ	SUBR	_	7	mark	_	_
3	محضر	محضر	NOUN	N_IANM	Number=Sing	7	obj	_	_
4	پیامبر	پیامبر	PROPN	N_ANM	Number=Sing	3	nmod	_	_
5	را	را	ADP	POSTP	_	3	case	_	_
6	درک	درک	NOUN	N_IANM	Number=Sing	7	compound:lvc	_	_
7	کرده	کرد#کن	VERB	V_ACT	Number=Sing|Person=3|Tense=Past|Voice=Act	1	acl	_	_
8	بودند	بود#باش	AUX	AUX	Number=Plur|Person=3|Tense=Past	7	aux	_	SpaceAfter=No
9	،	،	PUNCT	PUNC	_	7	punct	_	_
10	«	«	PUNCT	PUNC	_	11	punct	_	SpaceAfter=No
11	صحابه	صحابه	NOUN	N_ANM	Number=Plur	13	xcomp	_	SpaceAfter=No
12	»	»	PUNCT	PUNC	_	11	punct	_	_
13	نامیده	نامید#نام	VERB	V_PASS	Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
14	می‌شدند	شد#شو	AUX	AUX	Number=Plur|Person=3|Tense=Past	13	aux:pass	_	SpaceAfter=No
15	.	.	PUNCT	PUNC	_	13	punct	_	_

~~~


