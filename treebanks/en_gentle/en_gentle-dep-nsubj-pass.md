---
layout: base
title:  'Statistics of nsubj:pass in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_gentle-dep-nsubj-outer.html">nsubj:outer</a></tt>.

92 nodes (1%) are attached to their parents as `nsubj:pass`.

92 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.60869565217391.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (55; 60% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (34; 37% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nsubj:pass	color:blue
1	Many	many	ADJ	JJ	Degree=Pos	4	amod	4:amod	Discourse=explanation-evidence:154->152:2:_|Entity=(210-person-new-cf2-4-sgl
2	future	future	ADJ	JJ	Degree=Pos	4	amod	4:amod	_
3	prime	prime	ADJ	JJ	Degree=Pos	4	amod	4:amod	_
4	ministers	minister	NOUN	NNS	Number=Plur	6	nsubj:pass	6:nsubj:pass	Entity=210)|MSeg=minister-s
5	were	be	AUX	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	6	aux:pass	6:aux:pass	_
6	schooled	school	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	MSeg=school-ed
7	in	in	ADP	IN	_	8	case	8:case	_
8	Eton	Eton	PROPN	NNP	Number=Sing	6	obl	6:obl:in	Entity=(134-place-giv:inact-cf1-1-coref-Eton_College)|SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 nsubj:pass	color:blue
1	When	when	ADV	WRB	PronType=Int	4	advmod	4:advmod	Discourse=context-circumstance:117->118:0:_|XML=<hi rend:::"italic">
2	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	4:nsubj	Entity=(165-person-acc:com-cf1-1-sgl)
3	next	next	ADV	RB	Degree=Pos	4	advmod	4:advmod	_
4	meet	meet	VERB	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	9	advcl	9:advcl:when	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	4:punct	_
6	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	9	nsubj:pass	9:nsubj:pass	Discourse=joint-list_m:118->116:1:_|Entity=(166-person-acc:com-cf2-1-sgl)
7	'll	will	AUX	MD	VerbForm=Fin	9	aux	9:aux	_
8	be	be	AUX	VB	VerbForm=Inf	9	aux:pass	9:aux:pass	_
9	married	marry	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	MSeg=marri-ed|SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	9:punct	XML=</hi>

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	Open	Open	ADJ	NNP	Degree=Pos	2	amod	2:amod	Discourse=context-background:3->7:1:_|Entity=(2-abstract-giv:act-cf1*-1,2-coref
2	Source	Source	PROPN	NNP	Number=Sing	5	nsubj:pass	5:nsubj:pass	Entity=2)
3	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	5:aux	MSeg=ha-s
4	been	be	AUX	VBN	Tense=Past|VerbForm=Part	5	aux:pass	5:aux:pass	_
5	taught	teach	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	Entity=(6-abstract-new-cf9-1-disc
6	at	at	ADP	IN	_	7	case	7:case	_
7	RPI	RPI	PROPN	NNP	Number=Sing	5	obl	5:obl:at	Entity=(7-organization-new-cf6-1-coref-Rensselaer_Polytechnic_Institute)
8	since	since	ADP	IN	_	9	case	9:case	_
9	Fall	Fall	PROPN	NNP	Number=Sing	5	obl	5:obl:since	Entity=(8-time-new-cf7-1-sgl
10	of	of	ADP	IN	_	11	case	11:case	_
11	2007	2007	NUM	CD	NumForm=Digit|NumType=Card	9	nmod	9:nmod:of	Entity=(9-time-new-cf10-1-sgl)8)
12	(	(	PUNCT	-LRB-	_	13	punct	13:punct	Discourse=elaboration-additional:4->3:0:_|SpaceAfter=No
13	taught	teach	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	5	advcl	5:advcl	_
14	jointly	jointly	ADV	RB	Degree=Pos	13	advmod	13:advmod	_
15	by	by	ADP	IN	_	16	case	16:case	_
16	Dr.	Dr.	PROPN	NNP	Abbr=Yes|Number=Sing	13	obl	13:obl:by	Entity=(10-person-new-cf4-1,2,3,5,6,7-coref(11-person-new-cf2-1,2,3-coref
17	William	William	PROPN	NNP	Number=Sing	16	flat	16:flat	_
18	Shroeder	Shroeder	PROPN	NNP	Number=Sing	16	flat	16:flat	Entity=11)
19	and	and	CCONJ	CC	_	20	cc	20:cc	_
20	Dr.	Dr.	PROPN	NNP	Abbr=Yes|Number=Sing	16	conj	13:obl:by|16:conj:and	Entity=(11-person-giv:act-cf2-1,2,3-coref
21	Luis	Luis	PROPN	NNP	Number=Sing	20	flat	20:flat	_
22	Ibanez	Ibanez	PROPN	NNP	Number=Sing	20	flat	20:flat	Entity=11)10)|SpaceAfter=No
23	)	)	PUNCT	-RRB-	_	13	punct	13:punct	_
24	as	as	ADP	IN	_	28	case	28:case	Discourse=same-unit_m:5->3:1:_
25	a	a	DET	DT	Definite=Ind|PronType=Art	28	det	28:det	Entity=(1-abstract-giv:act-cf3-4-pred
26	4000	4000	NUM	CD	NumForm=Digit|NumType=Card	27	compound	27:compound	Entity=(12-abstract-new-cf11-2-sgl
27	level	level	NOUN	NN	Number=Sing	28	compound	28:compound	Entity=12)
28	class	class	NOUN	NN	Number=Sing	5	obl	5:obl:as	Entity=1)6)|SpaceAfter=No
29	,	,	PUNCT	,	_	33	punct	33:punct	_
30	and	and	CCONJ	CC	_	33	cc	33:cc	Discourse=joint-sequence_m:6->3:2:_
31	then	then	ADV	RB	PronType=Dem	33	advmod	33:advmod	_
32	by	by	ADP	IN	_	33	case	33:case	_
33	Mukkai	Mukkai	PROPN	NNP	Number=Sing	5	conj	5:conj:and	Entity=(13-person-new-cf5-1,2-sgl
34	Krishnamoorthy	Krishnamoorthy	PROPN	NNP	Number=Sing	33	flat	33:flat	Entity=13)
35	as	as	ADP	IN	_	39	case	39:case	_
36	a	a	DET	DT	Definite=Ind|PronType=Art	39	det	39:det	Entity=(14-abstract-new-cf8-4-coref
37	2000	2000	NUM	CD	NumForm=Digit|NumType=Card	38	compound	38:compound	Entity=(15-abstract-new-cf12-2-sgl|XML=<date when:::"2000"></date>
38	level	level	NOUN	NN	Number=Sing	39	compound	39:compound	Entity=15)
39	class	class	NOUN	NN	Number=Sing	33	orphan	33:orphan	Entity=14)|SpaceAfter=No
40	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


