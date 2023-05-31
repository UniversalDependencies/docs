---
layout: base
title:  'Statistics of nsubj:nc in UD_Persian-Seraji'
udver: '2'
---

## Treebank Statistics: UD_Persian-Seraji: Relations: `nsubj:nc`

This relation is a language-specific subtype of <tt><a href="fa_seraji-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fa_seraji-dep-nsubj-pass.html">nsubj:pass</a></tt>.

22 nodes (0%) are attached to their parents as `nsubj:nc`.

18 instances of `nsubj:nc` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `nsubj:nc`: <tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa_seraji-pos-PRON.html">PRON</a></tt> (9; 41% instances), <tt><a href="fa_seraji-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa_seraji-pos-PRON.html">PRON</a></tt> (5; 23% instances), <tt><a href="fa_seraji-pos-ADV.html">ADV</a></tt>-<tt><a href="fa_seraji-pos-PRON.html">PRON</a></tt> (4; 18% instances), <tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_seraji-pos-PRON.html">PRON</a></tt> (4; 18% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nsubj:nc	color:blue
1	احمد	احمد	NOUN	N_SING	Number=Sing	0	root	_	SpaceAfter=No|Translit=āḥmd|LTranslit=āḥmd
2	:	:	PUNCT	DELM	_	3	punct	_	Translit=:|LTranslit=:
3	ا	ا	INTJ	INT	_	1	parataxis	_	SpaceAfter=No|Translit=ā|LTranslit=ā
4	…	…	PUNCT	DELM	_	9	punct	_	Translit=…|LTranslit=…
5	آره	آره	INTJ	INT	_	9	parataxis	_	Translit=Ārh|LTranslit=Ārh
6	-	-	PUNCT	DELM	_	5	punct	_	Translit=-|LTranslit=-
7	یاد	یاد	NOUN	N_SING	Number=Sing	9	compound:lvc	_	Translit=īād|LTranslit=īād
8	م	من	PRON	PRO	Number=Sing|Person=1|PronType=Prs	7	nsubj:nc	_	Translit=m|LTranslit=mn
9	رفته	رفت	VERB	V_PP	Number=Sing|Person=3|VerbForm=Part	1	parataxis	_	OrigLemma=رفت#رو|Translit=rfth|LTranslit=rft
10	بود	بود	AUX	V_PA	Number=Sing|Person=3|Tense=Past	9	aux	_	OrigLemma=بود#باش|Translit=būd|LTranslit=būd
11	ها	ها	NOUN	N_SING	Number=Sing	9	parataxis	_	SpaceAfter=No|Translit=hā|LTranslit=hā
12	.	.	PUNCT	DELM	_	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nsubj:nc	color:blue
1	مردم	مردم	NOUN	N_SING	Number=Sing	14	nsubj	_	Translit=mrdm|LTranslit=mrdm
2	هم	هم	SCONJ	CON	_	14	mark	_	Translit=hm|LTranslit=hm
3	حتی	حتی	ADV	ADV	_	14	advmod	_	Translit=ḥtī|LTranslit=ḥtī
4	اگر	اگر	SCONJ	CON	_	10	mark	_	Translit=āgr|LTranslit=āgr
5	بخواهی	خواست	AUX	V_SUB	Mood=Sub|Number=Sing|Person=2|Tense=Pres	10	aux	_	Translit=bḫūāhī|LTranslit=ḫūāst
6	یک	یک	NUM	NUM	NumType=Card	7	nummod	_	Translit=īk|LTranslit=īk
7	چیز	چیز	NOUN	N_SING	Number=Sing	10	obj	_	Translit=čīz|LTranslit=čīz
8	غیرکلیشه	غیرکلیشه	ADJ	ADJ	Degree=Pos	7	amod	_	Translit=ġīrklīšh|LTranslit=ġīrklīšh
9	نشان	نشان	NOUN	N_SING	Number=Sing	10	compound:lvc	_	Translit=nšān|LTranslit=nšān
10	بدهی	_	VERB	V_SUB	Mood=Sub|Number=Sing|Person=2|Tense=Pres	14	advcl	_	SpaceAfter=No|Translit=bdhī
11	،	،	PUNCT	DELM	_	10	punct	_	Translit=,|LTranslit=,
12	بد	بد	ADJ	ADJ	Degree=Pos	14	compound:lvc	_	Translit=bd|LTranslit=bd
13	شان	آن‌ها	PRON	PRO	Number=Plur|Person=3|PronType=Prs	12	nsubj:nc	_	Translit=šān|LTranslit=Ānhā
14	می‌آید	آمد	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	OrigLemma=آمد#آ|SpaceAfter=No|Translit=mīĀīd|LTranslit=Āmd
15	.	.	PUNCT	DELM	_	14	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nsubj:nc	color:blue
1	مادر	مادر	NOUN	N_SING	Number=Sing	0	root	_	SpaceAfter=No|Translit=mādr|LTranslit=mādr
2	:	:	PUNCT	DELM	_	3	punct	_	Translit=:|LTranslit=:
3	احمد	احمد	NOUN	N_SING	Number=Sing	1	vocative	_	SpaceAfter=No|Translit=āḥmd|LTranslit=āḥmd
4	!	!	PUNCT	DELM	_	1	punct	_	Translit=!|LTranslit=!
5	احمد	احمد	NOUN	N_SING	Number=Sing	1	vocative	_	SpaceAfter=No|Translit=āḥmd|LTranslit=āḥmd
6	!	!	PUNCT	DELM	_	1	punct	_	Translit=!|LTranslit=!
7	دیر	دیر	ADV	ADV_TIME	Case=Tem	1	parataxis	_	Translit=dīr|LTranslit=dīr
8	ت	تو	PRON	PRO	Number=Sing|Person=2|PronType=Prs	7	nsubj:nc	_	Translit=t|LTranslit=tū
9	شد	کرد	VERB	V_PA	Number=Sing|Person=3|Tense=Past	7	compound	_	OrigLemma=کرد#کن|SpaceAfter=No|Translit=šd|LTranslit=krd
10	.	.	PUNCT	DELM	_	1	punct	_	Translit=.|LTranslit=.

~~~


