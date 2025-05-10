---
layout: base
title:  'Statistics of advmod:emph in UD_Kyrgyz-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-TueCL: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="ky_tuecl-dep-advmod.html">advmod</a></tt>.

14 nodes (1%) are attached to their parents as `advmod:emph`.

14 instances of `advmod:emph` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.21428571428571.

The following 5 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_tuecl-pos-ADV.html">ADV</a></tt> (7; 50% instances), <tt><a href="ky_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ky_tuecl-pos-ADV.html">ADV</a></tt> (3; 21% instances), <tt><a href="ky_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ky_tuecl-pos-ADV.html">ADV</a></tt> (2; 14% instances), <tt><a href="ky_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ky_tuecl-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-ADV.html">ADV</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 advmod:emph	color:blue
1	Алар	алар	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	8	nsubj:outer	_	_
2	кимдин	ким	PRON	_	_	3	nsubj	_	_
3	жазгандыгы	жаз	VERB	_	_	8	obl	_	_
4	жөнүндө	жөнүндө	ADP	_	_	3	case	_	_
5	эч	эч	DET	_	_	6	det	_	_
6	ойлору	ой	NOUN	_	_	8	nsubj	_	_
7	да	да	ADV	_	_	6	advmod:emph	_	_
8	жок	жок	ADJ	_	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advmod:emph	color:blue
1	Питер	Питер	PROPN	_	_	8	nsubj	_	_
2	Смит	Смит	PROPN	_	_	1	flat	_	_
3	да	да	ADV	_	_	1	advmod:emph	_	SpaceAfter=No
4	,	,	PUNCT	_	_	1	punct	_	_
5	Мэри	Мэри	PROPN	_	_	1	conj	_	_
6	Браун	Браун	PROPN	_	_	5	flat	_	_
7	да	да	ADV	_	_	5	advmod:emph	_	_
8	өтө	өт	VERB	_	_	0	root	_	_
9	албай	ал	AUX	_	_	8	aux	_	_
10	калды	кал	AUX	_	_	8	aux	_	SpaceAfter=No
11	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 advmod:emph	color:blue
1	Ал	ал	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	унаа	унаа	NOUN	_	_	4	obj	_	_
3	сатып	сат	VERB	_	_	4	compound	_	_
4	алды	ал	VERB	_	_	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	бирок	бирок	CCONJ	_	_	8	cc	_	_
7	анын	ал	PRON	_	_	8	nmod	_	_
8	иниси	ини	NOUN	_	_	4	conj	_	_
9	жөн	жөн	ADV	_	_	11	advmod	_	_
10	гана	гана	ADV	_	_	9	advmod:emph	_	_
11	велосипед	велосипед	NOUN	_	_	8	orphan	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


