---
layout: base
title:  'Statistics of compound:lvc in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="hy_armtdp-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="hy_armtdp-dep-compound-svc.html">compound:svc</a></tt>.

63 nodes (1%) are attached to their parents as `compound:lvc`.

59 instances of `compound:lvc` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41269841269841.

The following 8 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (24; 38% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (22; 35% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (9; 14% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (4; 6% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound:lvc	color:blue
1	Եվ	և	CCONJ	_	_	4	cc	_	_
2	զամբյուղները	զամբյուղ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	_
3	ցած	ցած	ADV	_	_	4	compound:lvc	_	_
4	իջան	իջնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
5	արդեն	արդեն	ADV	_	_	6	advmod	_	_
6	կատարյալ	կատարյալ	ADJ	_	Degree=Pos	7	amod	_	_
7	լռության	լռություն	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Coll	4	obl	_	_
8	մեջ	մեջ	ADP	_	AdpType=Post|Case=Nom	7	case	_	SpaceAfter=No
9	։	։	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 compound:lvc	color:blue
1	Նախագծողի	նախագծող	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	6	iobj	_	_
2	խելքին	խելք	NOUN	_	Animacy=Inan|Case=Dat|Definite=Def|Number=Sing	6	compound:lvc	_	_
3	ինչ	ինչ	PRON	_	Case=Nom|Number=Sing|PronType=Int	6	obj	_	_
4	՞	՞	PUNCT	_	_	3	punct	_	_
5	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	6	aux	_	_
6	փչել	փչել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
7	այստեղ	այստեղ	ADV	_	PronType=Dem	9	advmod	_	_
8	վանդակապատ	վանդակապատ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	9	obj	_	_
9	դնել	դնել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	6	xcomp	_	SpaceAfter=No
10	...	...	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 compound:lvc	color:blue
1	-	-	PUNCT	_	_	13	punct	_	_
2	Տիկին	տիկին	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	13	vocative	_	_
3	Թուխիկյան	Թուխիկյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	2	flat	_	SpaceAfter=No
4	,	,	PUNCT	_	_	13	punct	_	_
5	2016-ի	2016-ի	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	7	nmod:poss	_	_
6	վերջին	վերջին	ADJ	_	Degree=Pos	7	amod	_	_
7	օրը	օր	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	13	obl	_	_
8	Հաց	հաց	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	9	obj	_	_
9	բերող	բերել	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	10	acl	_	_
10	Արթուր	Արթուր	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	13	nsubj:pass	_	_
11	Սարգսյանն	Սարգսյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	10	flat	_	_
12	ազատ	ազատ	ADJ	_	Degree=Pos	13	compound:lvc	_	_
13	արձակվեց	արձակել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
14	,	,	PUNCT	_	_	18	punct	_	_
15	սակայն	սակայն	CCONJ	_	_	18	cc	_	_
16	հիմա	հիմա	ADV	_	_	18	advmod	_	_
17	երկամսյա	երկամսյա	ADJ	_	_	18	amod	_	_
18	կալանքի	կալանք	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	13	conj	_	_
19	տակ	տակ	ADP	_	AdpType=Post|Case=Nom	18	case	_	_
20	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	18	cop	_	SpaceAfter=No
21	:	:	PUNCT	_	_	13	punct	_	_

~~~


