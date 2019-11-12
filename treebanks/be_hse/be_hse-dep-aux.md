---
layout: base
title:  'Statistics of aux in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="be_hse-dep-aux-pass.html">aux:pass</a></tt>.

29 nodes (0%) are attached to their parents as `aux`.

25 instances of `aux` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27586206896552.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (26; 90% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (2; 7% instances), <tt><a href="be_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Пры	пры	ADP	IN	_	6	mark	_	_
2	чым	чым	SCONJ	IN	_	1	fixed	_	_
3	гэтыя	гэты	DET	DT	Case=Nom|Number=Plur|PronType=Dem	4	det	_	_
4	рэкамендацыі	рэкамендацыя	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	6	nsubj	_	_
5	будуць	быць	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	6	aux	_	_
6	тычыцца	тычыцца	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Mid	0	root	_	_
7	абодвух	абодва	NUM	CD	Case=Gen|Gender=Fem|NumType=Card	8	nummod	_	_
8	бакоў	бок	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 aux	color:blue
1	У	у	ADP	_	_	3	case	_	_
2	інтэлектуальным	інтэлектуальны	ADJ	_	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	конкурсе	конкурс	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	14	nmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	які	які	PRON	_	Case=Nom	6	nsubj	_	_
6	праходзіў	праходзіць	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
7	ў	ў	ADP	_	_	8	case	_	_
8	фармаце	фармат	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	_	_
9	бліц-інтэрв’ю	бліц-інтэрв’ю	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	6	punct	_	_
11	кожная	кожны	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	14	nsubj	_	_
12	з	з	ADP	_	_	13	case	_	_
13	дзяўчат	дзяўчына	NOUN	_	Animacy=Anim|Case=Acc|Gender=Fem|Number=Plur	11	nmod	_	_
14	павінна	павінны	ADJ	_	Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	0	root	_	_
15	была	быць	AUX	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	14	aux	_	_
16	расказаць	расказаць	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	14	xcomp	_	SpaceAfter=No
17	,	,	PUNCT	_	_	20	punct	_	_
18	якімі	які	PRON	_	Case=Ins|Number=Plur	20	xcomp	_	_
19	яна	яна	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3	20	nsubj	_	_
20	бачыць	бачыць	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	ccomp	_	_
21	навуковыя	навуковы	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	22	amod	_	_
22	дасягненні	дасягненне	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	20	obj	_	_
23	Беларусі	Беларусь	PROPN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	22	nmod	_	_
24	ў	ў	ADP	_	_	26	case	_	_
25	3017	3017	ADJ	_	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	26	amod	_	_
26	годзе	год	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	22	nmod	_	SpaceAfter=No
27	.	.	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Сёння	сёння	ADV	_	Degree=Pos	4	advmod	_	_
2	мне	я	PRON	_	Case=Dat|Number=Sing|Person=1	4	iobj	_	_
3	будзе	быць	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	дастаткова	дастаткова	ADV	_	Degree=Pos	0	root	_	_
5	прызнання	прызнанне	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	4	nsubj	_	_
6	з	з	ADP	_	_	8	case	_	_
7	боку	бок	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	fixed	_	_
8	аўдыторыі	аўдыторыя	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	буду	быць	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	_	_
11	спяваць	спяваць	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	4	conj	_	_
12	кампазіцыю	кампазіцыя	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	11	obj	_	_
13	з	з	ADP	_	_	14	case	_	_
14	рэпертуару	рэпертуар	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	12	nmod	_	_
15	Beyonce	Beyonce	PROPN	_	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	14	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	4	punct	_	_

~~~


