---
layout: base
title:  'Statistics of obl:tmod in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="be_hse-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="be_hse-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="be_hse-dep-obl-float.html">obl:float</a></tt>.

2 nodes (0%) are attached to their parents as `obl:tmod`.

1 instances of `obl:tmod` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt> (1; 50% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 obl:tmod	color:blue
1	Да	да	ADP	IN	_	2	case	2:case	_
2	Курапатаў	Курапаты	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Plur	7	nmod	7:nmod	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	5:punct	_
4	з	з	ADP	IN	_	5	case	5:case	_
5	Малінаўкі	Малінаўка	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	7	punct	7:punct	_
7	дабірацца	дабірацца	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Mid	0	root	0:root	_
8	ёй	яна	PRON	PRP	Case=Ins|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	iobj	7:iobj	_
9	ля	ля	ADP	IN	_	10	case	10:case	_
10	гадзіны	гадзіна	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	obl:tmod	7:obl:ля:gen	_
11	і	і	CCONJ	CC	_	12	cc	12:cc	_
12	недзе	недзе	ADV	RB	Degree=Pos	10	conj	7:obl:ля:gen|10:conj	_
13	а	а	ADP	IN	_	17	case	17:case	_
14	19	19	ADJ	ORD	_	17	obl:tmod	17:obl:а	_
15	Таня	Таня	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|NameType=Giv|Number=Sing	17	nsubj	17:nsubj	_
16	ўжо	ужо	ADV	RB	Degree=Pos	17	advmod	17:advmod	_
17	падыходзіць	падыхадзіць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	0:root|7:conj	_
18	да	да	ADP	IN	_	20	case	20:case	_
19	бел-чырвона-белых	бел-чырвона-белы	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	20	amod	20:amod	_
20	сьцягоў	сьцяг	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	17	obl	17:obl:да:gen	_
21	Курапацкай	курапацкі	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	22	amod	22:amod	_
22	варты	варта	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	20	nmod	20:nmod:gen	SpaceAfter=No
23	.	.	PUNCT	PUNCT	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 obl:tmod	color:blue
1	Да	да	ADP	IN	_	2	case	2:case	_
2	Курапатаў	Курапаты	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Plur	7	nmod	7:nmod	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	5:punct	_
4	з	з	ADP	IN	_	5	case	5:case	_
5	Малінаўкі	Малінаўка	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	7	punct	7:punct	_
7	дабірацца	дабірацца	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Mid	0	root	0:root	_
8	ёй	яна	PRON	PRP	Case=Ins|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	iobj	7:iobj	_
9	ля	ля	ADP	IN	_	10	case	10:case	_
10	гадзіны	гадзіна	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	obl:tmod	7:obl:ля:gen	_
11	і	і	CCONJ	CC	_	12	cc	12:cc	_
12	недзе	недзе	ADV	RB	Degree=Pos	10	conj	7:obl:ля:gen|10:conj	_
13	а	а	ADP	IN	_	17	case	17:case	_
14	19	19	ADJ	ORD	_	17	obl:tmod	17:obl:а	_
15	Таня	Таня	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|NameType=Giv|Number=Sing	17	nsubj	17:nsubj	_
16	ўжо	ужо	ADV	RB	Degree=Pos	17	advmod	17:advmod	_
17	падыходзіць	падыхадзіць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	0:root|7:conj	_
18	да	да	ADP	IN	_	20	case	20:case	_
19	бел-чырвона-белых	бел-чырвона-белы	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	20	amod	20:amod	_
20	сьцягоў	сьцяг	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	17	obl	17:obl:да:gen	_
21	Курапацкай	курапацкі	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	22	amod	22:amod	_
22	варты	варта	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	20	nmod	20:nmod:gen	SpaceAfter=No
23	.	.	PUNCT	PUNCT	_	7	punct	7:punct	_

~~~


