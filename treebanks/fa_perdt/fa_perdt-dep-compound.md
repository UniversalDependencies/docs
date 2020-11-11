---
layout: base
title:  'Statistics of compound in UD_Persian-PerDT'
udver: '2'
---

## Treebank Statistics: UD_Persian-PerDT: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="fa_perdt-dep-compound-lv.html">compound:lv</a></tt>, <tt><a href="fa_perdt-dep-compound-lvc.html">compound:lvc</a></tt>.

42 nodes (0%) are attached to their parents as `compound`.

42 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="fa_perdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fa_perdt-pos-NUM.html">NUM</a></tt> (39; 93% instances), <tt><a href="fa_perdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa_perdt-pos-NUM.html">NUM</a></tt> (3; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	دو	دو	NUM	PRENUM	_	3	nummod	_	_
2	سه	سه	NUM	PRENUM	_	1	compound	_	_
3	جلسه	جلسه	NOUN	N_IANM	Number=Sing	9	obl	_	_
4	که	که	SCONJ	SUBR	_	6	mark	_	_
5	مرتب	مرتب	ADV	ADV_SADV	_	6	advmod	_	_
6	بیایی	آمد#آ	VERB	V_ACT	Number=Sing|Person=2|Voice=Act	3	acl	_	_
7	کاملاً	کاملاً	ADV	ADV_SADV	_	9	advmod	_	_
8	حرفه‌ای	حرفه‌ای	ADJ	ADJ_AJP	_	9	xcomp	_	_
9	می‌شوی	شد#شو	VERB	V_ACT	Number=Sing|Person=2|Tense=Pres|Voice=Act	0	root	_	SpaceAfter=No
10	.	.	PUNCT	PUNC	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 compound	color:blue
1	نرمه‌های	نرمه	NOUN	N_IANM	Number=Plur	8	obj	_	_
2	هر	هر	DET	PREM_AMBAJ	_	3	det	_	_
3	گوش	گوش	NOUN	N_IANM	Number=Sing	1	nmod	_	_
4	را	را	ADP	POSTP	_	1	case	_	_
5	دو	دو	NUM	PRENUM	_	6	nummod	_	_
6	بار	بار	NOUN	N_IANM	Number=Sing	8	obl	_	_
7	سوراخ	سوراخ	NOUN	N_IANM	Number=Sing	8	xcomp	_	_
8	کنید	کرد#کن	VERB	V_ACT	Mood=Imp|Number=Plur|Person=2|Tense=Pres|Voice=Act	0	root	_	_
9	تا	تا	SCONJ	SUBR	_	17	mark	_	_
10	از	از	ADP	PREP	_	12	case	_	_
11	هر	هر	DET	PREM_AMBAJ	_	12	nmod	_	_
12	یک	یک	NOUN	N_IANM	Number=Sing	16	obl:arg	_	_
13	دو	دو	NUM	PRENUM	_	12	compound	_	_
14	قطره	قطره	NOUN	N_IANM	Number=Sing	17	nsubj	_	_
15	خون	خون	NOUN	N_IANM	Number=Sing	14	nmod	_	_
16	خارج	خارج	ADJ	ADJ_AJP	_	17	xcomp	_	_
17	شود	شد#شو	VERB	V_ACT	Number=Sing|Person=3|Voice=Act	8	advcl	_	SpaceAfter=No
18	.	.	PUNCT	PUNC	_	8	punct	_	_

~~~


