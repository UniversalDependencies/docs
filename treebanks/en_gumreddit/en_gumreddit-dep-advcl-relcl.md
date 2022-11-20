---
layout: base
title:  'Statistics of advcl:relcl in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-advcl.html">advcl</a></tt>.

19 nodes (0%) are attached to their parents as `advcl:relcl`.

19 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.26315789473684.

The following 7 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (12; 63% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl:relcl	color:blue
1	_	_	VERB	VB	Person=2|VerbForm=Inf	0	root	0:root	Discourse=context-background:8->16:2|Lem=*LOWER*|Len=8
2	_	_	SCONJ	WRB	PronType=Rel	1	obj	1:obj	Lem=_|Len=4
3	_	_	PROPN	NNP	Number=Sing	5	nsubj	5:nsubj|13:nsubj	Entity=(13-person-new-cf2-1,2-coref-Anne_Burrell|Lem=_|Len=4
4	_	_	PROPN	NNP	Number=Sing	3	flat	3:flat	Entity=13)|Lem=_|Len=7
5	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	advcl:relcl	2:advcl:relcl	Entity=(14-event-new-cf4-1-disc|Lem=challenge|Len=10
6	_	_	PROPN	NNP	Number=Sing	5	obj	5:obj	Entity=(2-person-giv:inact-cf1-1-coref-Bobby_Flay)|Lem=_|Len=5
7	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=2
8	_	_	DET	DT	Definite=Ind|PronType=Art	10	det	10:det	Entity=(15-event-new-cf3-3-sgl|Lem=_|Len=1
9	_	_	NOUN	NN	Number=Sing	10	compound	10:compound	Entity=(16-object-new-cf5-1-coref)|Lem=_|Len=10
10	_	_	NOUN	NN	Number=Sing	5	obl	5:obl:to	Entity=15)14)|Lem=_|Len=6|SpaceAfter=No
11	_	_	PUNCT	,	_	13	punct	13:punct	Lem=_|Len=1
12	_	_	CCONJ	CC	_	13	cc	13:cc	Discourse=joint-sequence_m:9->8:0|Lem=_|Len=3
13	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	conj	2:advcl:relcl|5:conj:and	Lem=win|Len=3|SpaceAfter=No
14	_	_	PUNCT	.	_	1	punct	1:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 15 advcl:relcl	color:blue
1	_	_	PRON	EX	PronType=Dem	2	expl	2:expl	Discourse=joint-list_m:41->32:4|Lem=*LOWER*|Len=5
2	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=be|Len=3
3	_	_	NOUN	NNS	Number=Plur	2	nsubj	2:nsubj	Entity=(56-abstract-new-cf4-1-sgl)|Lem=video|Len=6
4	_	_	ADV	WRB	PronType=Rel	7	advmod	7:advmod	Discourse=elaboration-attribute:42->41:0|Lem=_|Len=5
5	_	_	NOUN	NNS	Number=Plur	6	compound	6:compound	Entity=(57-person-new-cf1-2-coref|Lem=woman|Len=5
6	_	_	NOUN	NNS	Number=Plur	7	nsubj	7:nsubj	Entity=57)|Lem=astronaut|Len=10
7	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	3:acl:relcl|15:csubj	Lem=_|Len=4
8	_	_	ADJ	JJ	Degree=Pos	10	amod	10:amod	Entity=(58-object-new-cf2-3-coref|Lem=_|Len=5
9	_	_	ADJ	JJ	Degree=Pos	10	amod	10:amod	Lem=_|Len=5
10	_	_	NOUN	NN	Number=Sing	7	obj	7:obj	Entity=58)|Lem=_|Len=4
11	_	_	PUNCT	-LRB-	_	15	punct	15:punct	Discourse=evaluation-comment:43->42:0|Lem=_|Len=1|SpaceAfter=No
12	_	_	PRON	WDT	PronType=Rel	15	nsubj	7:ref|15:nsubj	Lem=_|Len=5
13	_	_	AUX	MD	VerbForm=Fin	15	aux	15:aux	Lem=_|Len=6
14	_	_	PART	RB	Polarity=Neg	15	advmod	15:advmod	Lem=not|Len=3
15	_	_	VERB	VB	VerbForm=Inf	7	advcl:relcl	7:advcl:relcl	Lem=_|Len=6|SpaceAfter=No
16	_	_	PUNCT	-RRB-	_	15	punct	15:punct	Lem=_|Len=1
17	_	_	ADP	IN	_	19	case	19:case	Discourse=same-unit_m:44->42:1|Lem=_|Len=2
18	_	_	DET	DT	Definite=Def|PronType=Art	19	det	19:det	Entity=(29-object-giv:inact-cf3-2-coref-International_Space_Station|Lem=_|Len=3
19	_	_	PROPN	NNP	Number=Sing|Typo=Yes	7	obl	7:obl:in	CorrectForm=ISS|Entity=29)|Lem=ISS|Len=3|XML=<sic ana:::"ISS"></sic>
20	_	_	ADV	WRB	PronType=Int	25	advmod	25:advmod	Discourse=adversative-contrast_m:45->42:2|Lem=_|Len=4
21	_	_	PRON	PRP$	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	22	nmod:poss	22:nmod:poss	Entity=(58-object-giv:act-cf2-2-coref(57-person-giv:act-cf1-1-ana)|Lem=_|Len=5
22	_	_	NOUN	NN	Number=Sing	25	nsubj	25:nsubj	Entity=58)|Lem=_|Len=4
23	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	aux	25:aux	Lem=do|Len=4
24	_	_	PART	RB	Polarity=Neg	25	advmod	25:advmod	Lem=not|Len=3
25	_	_	VERB	VB	VerbForm=Inf	7	advcl	7:advcl:when	Lem=_|Len=3
26	_	_	ADP	IN	_	29	case	29:case	Lem=_|Len=2
27	_	_	DET	PDT	PronType=Dem	29	det:predet	29:det:predet	Lem=_|Len=4
28	_	_	DET	DT	Definite=Ind|PronType=Art	29	det	29:det	Lem=_|Len=1
29	_	_	NOUN	NN	Number=Sing	25	obl	25:obl:in	Lem=_|Len=3
30	_	_	ADP	IN	_	33	case	33:case	Lem=_|Len=2
31	_	_	NUM	CD	NumForm=Word|NumType=Card	32	nummod	32:nummod	Entity=(59-object-new-cf5-3-sgl|Lem=_|Len=4
32	_	_	NOUN	NN	Number=Sing	33	compound	33:compound	Lem=_|Len=7
33	_	_	NOUN	NNS	Number=Plur	25	obl	25:obl:on	Entity=59)|Lem=plane|Len=6|SpaceAfter=No
34	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 advcl:relcl	color:blue
1	_	_	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	Discourse=adversative-antithesis:52->60:1|Entity=(62-person-new-cf2-2-coref(63-person-acc:com-cf1-1-ana)|Lem=*LOWER*|Len=2
2	_	_	NOUN	NNS	Number=Plur	4	nsubj	4:nsubj	Entity=62)|Lem=parent|Len=7
3	_	_	ADV	RB	_	4	advmod	4:advmod	Lem=_|Len=6
4	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	Lem=do|Len=3
5	_	_	PRON	DT	Number=Sing|PronType=Dem	4	obj	4:obj	Entity=(24-abstract-giv:inact-cf5-1-coref)|Lem=_|Len=4
6	_	_	ADV	WRB	PronType=Int	10	advmod	10:advmod	Discourse=context-circumstance:53->52:0|Lem=_|Len=4
7	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	10:nsubj	Entity=(63-person-giv:act-cf1-1-ana)|Lem=_|Len=1
8	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	10	cop	10:cop	Lem=be|Len=3
9	_	_	DET	DT	Definite=Ind|PronType=Art	10	det	10:det	Entity=(63-person-giv:act-cf1-2-pred|Lem=_|Len=1
10	_	_	NOUN	NN	Number=Sing	4	advcl	4:advcl:when	Entity=63)|Lem=_|Len=3
11	_	_	ADV	WRB	PronType=Rel	22	advmod	22:advmod	Discourse=contingency-condition:54->56:1|Lem=_|Len=8
12	_	_	PRON	EX	PronType=Dem	13	expl	13:expl	Lem=_|Len=5
13	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	advcl:relcl	11:advcl:relcl	Lem=be|Len=3
14	_	_	DET	DT	Definite=Ind|PronType=Art	15	det	15:det	Entity=(64-abstract-new-cf6-2-sgl|Lem=_|Len=1
15	_	_	NOUN	NN	Number=Sing	13	nsubj	13:nsubj	Lem=_|Len=7
16	_	_	PRON	WDT	PronType=Rel	18	obj	18:obj	Discourse=elaboration-attribute:55->54:0|Lem=_|Len=4
17	_	_	VERB	VBG	Typo=Yes|VerbForm=Ger	15	acl:relcl	15:acl:relcl	CorrectForm=needed|Lem=need|Len=7|XML=<sic ana:::"needed"></sic>
18	_	_	VERB	VBG	VerbForm=Ger	17	xcomp	17:xcomp	Lem=think|Len=8
19	_	_	ADP	RP	_	18	compound:prt	18:compound:prt	Entity=64)|Lem=_|Len=7
20	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	22	nsubj	22:nsubj|26:nsubj	Discourse=elaboration-additional:56->52:1|Entity=(62-person-giv:act-cf2-1-ana)|Lem=_|Len=4
21	_	_	ADV	RB	Polarity=Neg	22	advmod	22:advmod	Lem=_|Len=5
22	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	4	parataxis	4:parataxis	Lem=_|Len=3
23	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	22	obj	22:obj|24:nsubj:xsubj	Entity=(63-person-giv:act-cf1-1-ana)|Lem=I|Len=2
24	_	_	VERB	VB	VerbForm=Inf	22	xcomp	22:xcomp	Lem=_|Len=4
25	_	_	CCONJ	CC	_	26	cc	26:cc	Discourse=joint-disjunction_m:57->56:0|Lem=_|Len=2
26	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	22	conj	22:conj:or	Lem=dismiss|Len=9
27	_	_	DET	DT	PronType=Tot	28	det	28:det	Entity=(65-abstract-new-cf7-2-sgl|Lem=_|Len=5
28	_	_	NOUN	NN	Number=Sing	26	obj	26:obj	Entity=65)|Lem=_|Len=4
29	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	30	nsubj	30:nsubj	Discourse=elaboration-attribute:58->57:0|Entity=(63-person-giv:act-cf1-1-ana)|Lem=_|Len=1
30	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	28	acl:relcl	28:acl:relcl	Lem=have|Len=3
31	_	_	ADV	RB	Degree=Pos	37	advmod	37:advmod	Discourse=causal-cause:59->56:2|Lem=_|Len=6
32	_	_	SCONJ	IN	_	37	mark	37:mark	Lem=_|Len=7
33	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	37	nsubj	37:nsubj	Entity=(63-person-giv:act-cf1-1-ana)|Lem=_|Len=1
34	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	37	cop	37:cop	Lem=be|Len=3
35	_	_	ADV	RB	Degree=Pos|Polarity=Neg	37	advmod	37:advmod	Lem=_|Len=14
36	_	_	DET	DT	Definite=Ind|PronType=Art	37	det	37:det	Entity=(63-person-giv:act-cf1-2-pred|Lem=_|Len=1
37	_	_	NOUN	NN	Number=Sing	22	advcl	22:advcl:because	Entity=63)|Lem=_|Len=3
38	_	_	CCONJ	CC	_	41	cc	41:cc	Discourse=joint-other_m:60->24:3|Lem=_|Len=3
39	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	41	nsubj	41:nsubj|45:nsubj:xsubj|48:nsubj:xsubj|52:nsubj:xsubj	Entity=(66-person-acc:com-cf3-1-ana)|Lem=_|Len=3
40	_	_	ADV	RB	Degree=Pos	41	advmod	41:advmod	Lem=_|Len=5
41	_	_	VERB	VB	VerbForm=Inf	22	conj	22:conj:but	Lem=_|Len=4
42	_	_	PART	TO	_	45	mark	45:mark	Lem=_|Len=2
43	_	_	ADV	IN	_	45	advmod	45:advmod	Lem=_|Len=2
44	_	_	ADJ	JJS	Degree=Sup	43	fixed	43:fixed	Lem=_|Len=5
45	_	_	VERB	VB	VerbForm=Inf	41	xcomp	41:xcomp	Lem=_|Len=3
46	_	_	PRON	PRP$	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	47	nmod:poss	47:nmod:poss	Entity=(67-person-new-cf4-2-coref(66-person-giv:act-cf3-1-ana)|Lem=_|Len=4
47	_	_	NOUN	NNS	Number=Plur	45	obj	45:obj|48:nsubj:xsubj|50:nsubj:xsubj|52:nsubj:xsubj	Entity=67)|Lem=kid|Len=4
48	_	_	VERB	VB	VerbForm=Inf	45	xcomp	45:xcomp	Lem=_|Len=3
49	_	_	CCONJ	CC	_	50	cc	50:cc	Lem=_|Len=3
50	_	_	VERB	VB	VerbForm=Inf	48	conj	45:xcomp|48:conj:and	Lem=_|Len=4
51	_	_	CCONJ	CC	_	52	cc	52:cc	Discourse=joint-disjunction_m:61->60:0|Lem=_|Len=2
52	_	_	VERB	VB	VerbForm=Inf	45	conj	41:xcomp|45:conj:or	Lem=_|Len=4
53	_	_	PRON	PRP$	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	54	nmod:poss	54:nmod:poss	Entity=(68-abstract-new-cf8-2-sgl(67-person-giv:act-cf4-1-ana)|Lem=_|Len=5
54	_	_	NOUN	NNS	Number=Plur	52	obj	52:obj	Entity=68)|Lem=suggestion|Len=11
55	_	_	ADV	RB	Degree=Pos	52	advmod	52:advmod	Lem=_|Len=9

~~~


