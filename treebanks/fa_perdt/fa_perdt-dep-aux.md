---
layout: base
title:  'Statistics of aux in UD_Persian-PerDT'
udver: '2'
---

## Treebank Statistics: UD_Persian-PerDT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="fa_perdt-dep-aux-pass.html">aux:pass</a></tt>.

12884 nodes (3%) are attached to their parents as `aux`.

6525 instances of `aux` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.69349580875504.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="fa_perdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_perdt-pos-AUX.html">AUX</a></tt> (12805; 99% instances), <tt><a href="fa_perdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa_perdt-pos-AUX.html">AUX</a></tt> (47; 0% instances), <tt><a href="fa_perdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa_perdt-pos-AUX.html">AUX</a></tt> (21; 0% instances), <tt><a href="fa_perdt-pos-AUX.html">AUX</a></tt>-<tt><a href="fa_perdt-pos-AUX.html">AUX</a></tt> (11; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux	color:blue
1	مشابه	مشابه	NOUN	N_IANM	Number=Sing	6	nsubj	_	_
2	این	این	DET	PREM_DEMAJ	_	3	det	_	_
3	کارها	کار	NOUN	N_IANM	Number=Plur	1	nmod	_	_
4	هم	هم	ADV	ADV_SADV	_	3	dep	_	_
5	نهی	نهی	NOUN	N_IANM	Number=Sing	6	compound:lvc	_	_
6	شده	شد#شو	VERB	V_ACT	Number=Sing|Person=3|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
7	است	#است	AUX	AUX	Number=Sing|Person=3|Tense=Pres	6	aux	_	SpaceAfter=No
8	.	.	PUNCT	PUNC	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	هر	هر	DET	PREM_AMBAJ	_	2	det	_	_
2	چیزی	چیز	NOUN	N_IANM	Number=Sing	7	nsubj	_	_
3	که	که	SCONJ	SUBR	_	5	mark	_	_
4	اختراع	اختراع	NOUN	N_IANM	Number=Sing	5	compound:lvc	_	_
5	می‌شود	شد#شو	VERB	V_ACT	Number=Sing|Person=3|Tense=Pres|Voice=Act	2	acl	_	_
6	باید	بایست#باید	AUX	V_MODL	_	7	aux	_	_
7	مطابق	مطابق	ADJ	ADJ_AJP	_	0	root	_	_
8	با	با	ADP	PREP	_	9	case	_	_
9	قوانین	قانون	NOUN	N_IANM	Number=Plur	7	obl:arg	_	_
10	علمی	علمی	ADJ	ADJ_AJP	_	9	amod	_	_
11	کشور	کشور	NOUN	N_IANM	Number=Sing	9	nmod	_	_
12	باشد	بود#باش	AUX	AUX	Number=Sing|Person=3	7	cop	_	SpaceAfter=No
13	.	.	PUNCT	PUNC	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	چرا	چرا	ADV	ADV_SADV	_	4	advmod	_	_
2	شما	شما	PRON	PR_SEPER	Number=Plur|Person=2	4	nsubj	_	_
3	باید	بایست#باید	AUX	V_MODL	_	4	aux	_	_
4	سردبیر	سردبیر	NOUN	N_ANM	Number=Sing	0	root	_	_
5	هفته‌نامهٔ	هفته‌نامه	PROPN	N_IANM	Number=Sing	4	nmod	_	_
6	دختران	دختر	PROPN	N_ANM	Number=Plur	5	flat:name	_	_
7	جوان	جوان	PROPN	ADJ_AJP	_	5	flat:name	_	_
8	باشید	بود#باش	AUX	AUX	Number=Plur|Person=2	4	cop	_	SpaceAfter=No
9	؟	؟	PUNCT	PUNC	_	4	punct	_	_

~~~


