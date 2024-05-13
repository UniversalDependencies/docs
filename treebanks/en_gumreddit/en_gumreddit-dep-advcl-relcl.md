---
layout: base
title:  'Statistics of advcl:relcl in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-advcl.html">advcl</a></tt>.

21 nodes (0%) are attached to their parents as `advcl:relcl`.

21 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 8 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (13; 62% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl:relcl	color:blue
1	_	_	VERB	VB	Person=2|VerbForm=Inf	0	root	0:root	Cxn=Interrogative-Polar-Direct|Discourse=context-background:8->16:2:_;adversative-antithesis:8->8:4:5:orp-but-117|Lem=*LOWER*|Len=8
2	_	_	ADV	WRB	PronType=Rel	1	obj	1:obj	Lem=_|Len=4
3	_	_	PROPN	NNP	Number=Sing	5	nsubj	5:nsubj|13:nsubj	Entity=(13-person-new-cf2-1,2-coref-Anne_Burrell|Lem=_|Len=4
4	_	_	PROPN	NNP	Number=Sing	3	flat	3:flat	Entity=13)|Lem=_|Len=7
5	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	advcl:relcl	2:advcl:relcl	Entity=(14-event-new-cf4-1-disc|Lem=challenge|Len=10|MSeg=challeng-ed
6	_	_	PROPN	NNP	Number=Sing	5	obj	5:obj	Entity=(2-person-giv:inact-cf1-1-coref-Bobby_Flay)|Lem=_|Len=5|MSeg=Bobb-y
7	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=2
8	_	_	DET	DT	Definite=Ind|PronType=Art	10	det	10:det	Entity=(15-event-new-cf3-3-sgl|Lem=_|Len=1
9	_	_	NOUN	NN	Number=Sing	10	compound	10:compound	Entity=(16-object-new-cf5-1-coref)|Lem=_|Len=10
10	_	_	NOUN	NN	Number=Sing	5	obl	5:obl:to	Entity=15)14)|Lem=_|Len=6|SpaceAfter=No
11	_	_	PUNCT	,	_	13	punct	13:punct	Lem=_|Len=1
12	_	_	CCONJ	CC	_	13	cc	13:cc	Discourse=joint-sequence_m:9->8:0:dm-and-62|Lem=_|Len=3
13	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	conj	2:advcl:relcl|5:conj:and	Lem=win|Len=3|SpaceAfter=No
14	_	_	PUNCT	.	_	1	punct	1:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 15 advcl:relcl	color:blue
1	_	_	PRON	EX	PronType=Dem	2	expl	2:expl	Discourse=joint-list_m:41->32:4:_|Lem=*LOWER*|Len=5
2	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Cxn=Existential-CopPred-ThereExpl|Lem=be|Len=3
3	_	_	NOUN	NNS	Number=Plur	2	nsubj	2:nsubj|7:obl	Entity=(56-abstract-new-cf4-1-sgl)|Lem=video|Len=6|MSeg=video-s
4	_	_	ADV	WRB	PronType=Rel	7	advmod	3:ref|7:advmod	Discourse=elaboration-attribute:42->41:0:syn-mdf-323+syn-relcl-324,327,332,335+grf-prn-331,336|Lem=_|Len=5
5	_	_	NOUN	NNS	Number=Plur	6	compound	6:compound	Entity=(57-person-new-cf1-2-coref|Lem=woman|Len=5
6	_	_	NOUN	NNS	Number=Plur	7	nsubj	7:nsubj	Entity=57)|Lem=astronaut|Len=10|MSeg=astronaut-s
7	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	3:acl:relcl|15:csubj	Lem=_|Len=4
8	_	_	ADJ	JJ	Degree=Pos	10	amod	10:amod	Entity=(58-object-new-cf2-3-coref|Lem=_|Len=5
9	_	_	ADJ	JJ	Degree=Pos	10	amod	10:amod	Lem=_|Len=5|MSeg=puff-y
10	_	_	NOUN	NN	Number=Sing	7	obj	7:obj	Entity=58)|Lem=_|Len=4
11	_	_	PUNCT	-LRB-	_	15	punct	15:punct	Discourse=evaluation-comment:43->42:0:_|Lem=_|Len=1|SpaceAfter=No
12	_	_	PRON	WDT	PronType=Rel	15	nsubj	7:ref|15:nsubj	Lem=_|Len=5
13	_	_	AUX	MD	VerbForm=Fin	15	aux	15:aux	Lem=_|Len=6
14	_	_	PART	RB	Polarity=Neg	15	advmod	15:advmod	Lem=not|Len=3
15	_	_	VERB	VB	VerbForm=Inf	7	advcl:relcl	7:advcl:relcl	Lem=_|Len=6|MSeg=happ-en|SpaceAfter=No
16	_	_	PUNCT	-RRB-	_	15	punct	15:punct	Lem=_|Len=1
17	_	_	ADP	IN	_	19	case	19:case	Discourse=same-unit_m:44->42:1:_|Lem=_|Len=2
18	_	_	DET	DT	Definite=Def|PronType=Art	19	det	19:det	Entity=(29-object-giv:inact-cf3-2-coref-International_Space_Station|Lem=_|Len=3
19	_	_	PROPN	NNP	Number=Sing|Typo=Yes	7	obl	7:obl:in	CorrectForm=ISS|Entity=29)|Lem=ISS|Len=3|XML=<sic ana:::"ISS"></sic>
20	_	_	ADV	WRB	PronType=Int	25	advmod	25:advmod	Discourse=adversative-contrast_m:45->42:2:dm-when-340|Lem=_|Len=4
21	_	_	PRON	PRP$	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	22	nmod:poss	22:nmod:poss	Entity=(58-object-giv:act-cf2-2-coref(57-person-giv:act-cf1-1-ana)|Lem=_|Len=5
22	_	_	NOUN	NN	Number=Sing	25	nsubj	25:nsubj	Entity=58)|Lem=_|Len=4
23	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	aux	25:aux	Lem=do|Len=4|MSeg=doe-s
24	_	_	PART	RB	Polarity=Neg	25	advmod	25:advmod	Lem=not|Len=3
25	_	_	VERB	VB	VerbForm=Inf	7	advcl	7:advcl:when	Lem=_|Len=3
26	_	_	ADP	IN	_	29	case	29:case	Lem=_|Len=2
27	_	_	DET	PDT	PronType=Dem	29	det:predet	29:det:predet	Lem=_|Len=4
28	_	_	DET	DT	Definite=Ind|PronType=Art	29	det	29:det	Lem=_|Len=1
29	_	_	NOUN	NN	Number=Sing	25	obl	25:obl:in	Lem=_|Len=3
30	_	_	ADP	IN	_	33	case	33:case	Lem=_|Len=2
31	_	_	NUM	CD	NumForm=Word|NumType=Card	32	nummod	32:nummod	Entity=(59-object-new-cf5-3-sgl|Lem=_|Len=4
32	_	_	NOUN	NN	Number=Sing	33	compound	33:compound	Lem=_|Len=7|MSeg=grav-ity
33	_	_	NOUN	NNS	Number=Plur	25	obl	25:obl:on	Entity=59)|Lem=plane|Len=6|MSeg=plane-s|SpaceAfter=No
34	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 25 advcl:relcl	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj	Discourse=joint-other_m:31->16:3:_;explanation-justify:31->35:1:2:orp-so-230|Entity=(24-person-acc:com-cf1-1-ana)|Lem=_|Len=1
2	_	_	AUX	MD	VerbForm=Fin	4	aux	4:aux	Lem=_|Len=5
3	_	_	ADV	RB	_	4	advmod	4:advmod	Lem=_|Len=6
4	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Entity=(25-event-new-cf2-1-disc)|Lem=_|Len=5
5	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
6	_	_	DET	DT	PronType=Ind	7	det	7:det	Lem=_|Len=4
7	_	_	NOUN	NN	Number=Sing	4	obl	4:obl:to	Lem=_|Len=6|SpaceAfter=No
8	_	_	PUNCT	,	_	12	punct	12:punct	Lem=_|Len=1
9	_	_	ADV	RB	_	12	advmod	12:advmod	Discourse=adversative-concession:32->33:0:dm-but-225|Lem=_|Len=9|MSeg=sometime-s
10	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	nsubj	12:nsubj	Entity=(25-event-giv:act-cf2-1-coref)|Lem=_|Len=2
11	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	cop	12:cop	Lem=be|Len=3
12	_	_	ADJ	JJ	Degree=Pos	4	parataxis	4:parataxis	Entity=(25-event-giv:act-cf2-1-coref)|Lem=_|Len=9
13	_	_	CCONJ	CC	_	16	cc	16:cc	Discourse=restatement-repetition_m:33->31:0:ref-prs-213,226+ref-prop-216,222+sem-lxchn-216,228+ref-prop-216,228|Lem=_|Len=3
14	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	16	nsubj	16:nsubj	Entity=(24-person-giv:act-cf1-1-ana)|Lem=_|Len=1
15	_	_	AUX	MD	VerbForm=Fin	16	aux	16:aux	Lem=_|Len=5
16	_	_	VERB	VB	VerbForm=Inf	12	conj	12:conj:but	Entity=(25-event-giv:act-cf2-1-coref)|Lem=_|Len=5
17	_	_	PUNCT	:	_	20	punct	20:punct	Lem=…|Len=3
18	_	_	ADV	RB	_	20	advmod	20:advmod	Discourse=attribution-negative:34->35:0:sem-atsrc-226+sem-ngt-231+lex-indwd-232|Lem=_|Len=2
19	_	_	PART	RB	Polarity=Neg	20	advmod	20:advmod	Lem=_|Len=3
20	_	_	ADJ	JJ	Degree=Pos	12	parataxis	12:parataxis	Lem=_|Len=4
21	_	_	ADV	WRB	PronType=Rel	22	advmod	22:advmod	Discourse=adversative-concession:35->31:1:_|Lem=_|Len=3
22	_	_	ADJ	JJ	Degree=Pos	20	ccomp	20:ccomp	Lem=_|Len=6|MSeg=use-ful
23	_	_	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	24	nmod:poss	24:nmod:poss	Entity=(11-abstract-giv:inact-cf4-2-coref(24-person-giv:act-cf1-1-ana)|Lem=_|Len=2
24	_	_	NOUN	NN	Number=Sing	25	nsubj	25:nsubj	Entity=11)|Lem=_|Len=10
25	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	advcl:relcl	22:advcl:relcl	Lem=be|Len=2
26	_	_	ADP	IN	_	27	case	27:case	Lem=_|Len=3
27	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	25	obl	25:obl:for	Entity=(4-person-giv:inact-cf3-1-ana)|Lem=_|Len=3|SpaceAfter=No
28	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


