---
layout: base
title:  'Statistics of aux in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="orv_rnc-dep-aux-pass.html">aux:pass</a></tt>.

178 nodes (0%) are attached to their parents as `aux`.

115 instances of `aux` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.7752808988764.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (142; 80% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (16; 9% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (12; 7% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (4; 2% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	А	а	CCONJ	_	_	5	cc	_	_
2	гдѣ	гдѣ	ADV	_	Degree=Pos	5	advmod	_	_
3	бꙋдеш[ь]	быти	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	5	aux	_	_
4	хотѧ	хотѣти	PART	_	_	5	advmod	_	_
5	послал	послати	VERB	Analyt=Yes|Tense=Fut2	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Fut|VerbForm=PartRes|Voice=Act	12	advcl	_	_
6	на	на	ADP	_	_	7	case	_	_
7	н[а]ше	нашъ	DET	_	Case=Acc|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	5	obl	_	_
8	лихо	лихо	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	5	obj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	5	punct	_	_
10	тамо	тамо	ADV	_	Degree=Pos	12	advmod	_	_
11	ти	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	12	iobj	_	_
12	ѡтослати	отослати	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	0	root	_	SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	А	а	CCONJ	_	_	3	cc	_	_
2	за	за	ADP	_	_	3	case	_	_
3	лошадьми	лошадь	NOUN	_	Case=Ins|Gender=Fem|Number=Plur	7	obl	_	_
4	б	бъ	AUX	_	Analyt=Yes|Mood=Cnd	3	aux	_	_
5	тебе	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	7	iobj	_	_
6	самому	самъ	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	5	nmod	_	_
7	ехать	ехати	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 21 aux	color:blue
1	И	и	CCONJ	_	_	2	cc	_	wf="И"|SpaceAfter=Yes
2	мяса	мясо	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	0	root	_	wf="мяса"|SpaceAfter=Yes
3	б	бъ	AUX	_	Analyt=Yes|Mood=Cnd	2	orphan	_	wf="б"|SpaceAfter=Yes
4	свиные	свиной	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	2	amod	_	wf="свиные"|SpaceAfter=No
5	,	,	PUNCT	_	_	9	punct	_	wf=","|SpaceAfter=Yes
6	чтоб	чтобъ	SCONJ	_	_	9	mark	_	wf="чтоб"|SpaceAfter=Yes
7	не	не	PART	_	Polarity=Neg	9	advmod	_	wf="не"|SpaceAfter=Yes
8	по	по	ADP	_	_	9	case	_	wf="по"|SpaceAfter=Yes
9	летошнему	летошнему	ADV	_	Degree=Pos	2	advcl	_	wf="летошнему"|SpaceAfter=Yes
10	–	–	PUNCT	_	_	17	punct	_	wf="–"|SpaceAfter=Yes
11	лбов	лобъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	17	obj	_	wf="лбов"|SpaceAfter=Yes
12	и	и	CCONJ	_	_	13	cc	_	wf="и"|SpaceAfter=Yes
13	спин	спина	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	11	conj	_	wf="спин"|SpaceAfter=Yes
14	к	къ	ADP	_	_	15	case	_	wf="к"|SpaceAfter=Yes
15	полтям	полоть	NOUN	_	Case=Dat|Gender=Fem|Number=Plur	17	obl	_	wf="полтям"|SpaceAfter=Yes
16	не	не	PART	_	Polarity=Neg	17	advmod	_	wf="не"|SpaceAfter=Yes
17	припущат(ь)	припущати	VERB	_	VerbForm=Inf|Voice=Act	2	parataxis	_	wf="припущать"|SpaceAfter=No
18	,	,	PUNCT	_	_	23	punct	_	wf=","|SpaceAfter=Yes
19	и	и	CCONJ	_	_	23	cc	_	wf="и"|SpaceAfter=Yes
20	ососы	ососъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	23	nsubj	_	wf="ососы"|SpaceAfter=Yes
21	б	бъ	AUX	_	Analyt=Yes|Mood=Cnd	23	aux	_	wf="б"|SpaceAfter=Yes
22	были	быти	AUX	_	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	23	cop	_	wf="были"|SpaceAfter=Yes
23	добрые	добрый	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	17	conj	_	wf="добрые"|SpaceAfter=No
24	.	.	PUNCT	_	_	17	punct	_	wf="."|SpaceAfter=Yes

~~~


