---
layout: base
title:  'Statistics of csubj in UD_Persian-PerDT'
udver: '2'
---

## Treebank Statistics: UD_Persian-PerDT: Relations: `csubj`

This relation is universal.

682 nodes (0%) are attached to their parents as `csubj`.

675 instances of `csubj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.90615835777126.

The following 20 pairs of parts of speech are connected with `csubj`: <tt><a href="fa_perdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa_perdt-pos-VERB.html">VERB</a></tt> (232; 34% instances), <tt><a href="fa_perdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa_perdt-pos-SCONJ.html">SCONJ</a></tt> (103; 15% instances), <tt><a href="fa_perdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa_perdt-pos-SCONJ.html">SCONJ</a></tt> (92; 13% instances), <tt><a href="fa_perdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_perdt-pos-SCONJ.html">SCONJ</a></tt> (80; 12% instances), <tt><a href="fa_perdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_perdt-pos-VERB.html">VERB</a></tt> (74; 11% instances), <tt><a href="fa_perdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa_perdt-pos-VERB.html">VERB</a></tt> (69; 10% instances), <tt><a href="fa_perdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa_perdt-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="fa_perdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa_perdt-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="fa_perdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_perdt-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="fa_perdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fa_perdt-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="fa_perdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa_perdt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fa_perdt-pos-ADP.html">ADP</a></tt>-<tt><a href="fa_perdt-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="fa_perdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa_perdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fa_perdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_perdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fa_perdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa_perdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fa_perdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa_perdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fa_perdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fa_perdt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fa_perdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fa_perdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fa_perdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_perdt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fa_perdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_perdt-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 csubj	color:blue
1	تمرکز	تمرکز	NOUN	N_IANM	Number=Sing	10	nsubj	_	_
2	بر	بر	ADP	PREP	_	3	case	_	_
3	داستان	داستان	NOUN	N_IANM	Number=Sing	1	nmod	_	_
4	ممکن	ممکن	ADJ	ADJ_AJP	_	0	root	_	_
5	است	است	AUX	AUX	Number=Sing|Person=3	4	cop	_	OrigLemma=#است
6	شما	شما	PRON	PR_SEPER	Number=Plur|Person=2	10	obj	_	_
7	را	را	ADP	POSTP	_	6	case	_	_
8	فردی	فرد	NOUN	N_ANM	Number=Sing	10	xcomp	_	_
9	تک‌بعدی	تک‌بعدی	ADJ	ADJ_AJP	_	8	amod	_	_
10	کند	کرد	VERB	V_ACT	Number=Sing|Person=3|Voice=Act	4	csubj	_	OrigLemma=کرد#کن|SpaceAfter=No
11	.	.	PUNCT	PUNC	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	پس	پس	ADV	ADV_SADV	_	2	advmod	_	_
2	ارزنده	ارزنده	ADJ	ADJ_AJP	_	0	root	_	_
3	است	است	AUX	AUX	Number=Sing|Person=3	2	cop	_	OrigLemma=#است
4	که	که	SCONJ	SUBR	_	2	csubj	_	_
5	هر	هر	DET	PREM_AMBAJ	_	6	det	_	_
6	نسلی	نسل	NOUN	N_ANM	Number=Sing	12	nsubj	_	SpaceAfter=No
7	،	،	PUNCT	PUNC	_	6	punct	_	_
8	آن	آن	DET	PREM_DEMAJ	_	9	det	_	_
9	چه	چه	NOUN	N_IANM	Number=Sing	16	obj	_	_
10	در	در	ADP	PREP	_	11	case	_	_
11	توان	توان	NOUN	N_IANM	Number=Sing	12	obl	_	_
12	دارد	داشت	VERB	V_ACT	Number=Sing|Person=3|Tense=Pres|Voice=Act	9	acl	_	OrigLemma=داشت#دار|SpaceAfter=No
13	،	،	PUNCT	PUNC	_	12	punct	_	_
14	به	به	ADP	PREP	_	15	case	_	_
15	کار	کار	NOUN	N_IANM	Number=Sing	16	compound:lvc	_	_
16	بندد	بست	VERB	V_ACT	Number=Sing|Person=3|Voice=Act	4	ccomp	_	OrigLemma=بست#بند|SpaceAfter=No
17	.	.	PUNCT	PUNC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	از	از	ADP	PREP	_	3	case	_	_
2	آن	آن	DET	PREM_DEMAJ	_	3	det	_	_
3	روز	روز	NOUN	N_IANM	Number=Sing	0	root	_	_
4	بود	بود	AUX	AUX	Number=Sing|Person=3	3	cop	_	OrigLemma=بود#باش
5	که	که	SCONJ	SUBR	_	3	csubj	_	_
6	ما	ما	PRON	PR_SEPER	Number=Sing|Person=1	14	nsubj	_	_
7	نیز	نیز	ADV	ADV_SADV	_	6	dep	_	_
8	در	در	ADP	PREP	_	9	case	_	_
9	میانهٔ	میانه	NOUN	N_IANM	Number=Sing	14	obl	_	_
10	راه	راه	NOUN	N_IANM	Number=Sing	9	nmod	_	_
11	به	به	ADP	PREP	_	13	case	_	_
12	این	این	DET	PREM_DEMAJ	_	13	det	_	_
13	کاروان	کاروان	NOUN	N_IANM	Number=Sing	14	obl:arg	_	_
14	پیوسته	پیوست	VERB	V_ACT	Number=Sing|Person=3|Tense=Past|Voice=Act	5	ccomp	_	OrigLemma=پیوست#پیوند
15	بودیم	بود	AUX	AUX	Number=Plur|Person=1|Tense=Past	14	aux	_	OrigLemma=بود#باش|SpaceAfter=No
16	.	.	PUNCT	PUNC	_	3	punct	_	_

~~~


