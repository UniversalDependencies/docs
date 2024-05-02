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

The following 6 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (13; 68% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 5% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl:relcl	color:blue
1	_	_	VERB	VB	Person=2|VerbForm=Inf	0	root	0:root	Cxn=Interrogative-Polar|Discourse=context-background:8->16:2:_;adversative-antithesis:8->8:4:5:orp-but-117|Lem=*LOWER*|Len=8
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
2	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Cxn=Existential-There|Lem=be|Len=3
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
# visual-style 49	bgColor:blue
# visual-style 49	fgColor:white
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 40 49 advcl:relcl	color:blue
1	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	2	compound	2:compound	Discourse=ROOT:19:0|Entity=(50-abstract-new-cf6-2-coref-Society_of_the_United_States(4-place-giv:inact-cf3-1-coref-United_States)|Lem=_|Len=2
2	_	_	NOUN	NN	Number=Sing	4	nsubj	4:nsubj|6:nsubj:xsubj	Entity=50)|Lem=_|Len=7|MSeg=soci-ety
3	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	4:aux	Lem=do|Len=4|MSeg=doe-s
4	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=4
5	_	_	ADV	RB	_	6	advmod	6:advmod	Lem=_|Len=5
6	_	_	ADJ	JJ	Degree=Pos	4	xcomp	4:xcomp	Lem=_|Len=8|MSeg=obsess-ed
7	_	_	ADP	IN	_	8	case	8:case	Lem=_|Len=4
8	_	_	NOUN	NN	Number=Sing	6	obl	6:obl:with	Entity=(27-abstract-giv:inact-cf2-1-coref)|Lem=_|Len=4|SpaceAfter=No
9	_	_	PUNCT	,	_	10	punct	10:punct	Lem=_|Len=1
10	_	_	CCONJ	CC	_	26	cc	26:cc	Discourse=evaluation-comment:20->19:0:lex-indwd-253+lex-indwd-271;joint-other:20->19:1:0:orp-and-250|Lem=_|Len=3
11	_	_	SCONJ	IN	_	21	mark	21:mark	Discourse=adversative-concession:21->24:0:dm-while-251|Lem=_|Len=5
12	_	_	DET	DT	Definite=Def|PronType=Art	14	det	14:det	Entity=(51-abstract-new-cf5-3-sgl|Lem=_|Len=3
13	_	_	ADJ	JJ	Degree=Pos	14	amod	14:amod	Lem=_|Len=4
14	_	_	NOUN	NN	Number=Sing	21	nsubj	21:nsubj	Lem=_|Len=7
15	_	_	SCONJ	IN	_	16	mark	16:mark	Discourse=elaboration-attribute:22->21:0:syn-mdf-254+syn-nmn-255-256|Lem=_|Len=2
16	_	_	VERB	VBG	VerbForm=Ger	14	acl	14:acl:of	Lem=divide|Len=8|MSeg=divid-ing
17	_	_	NOUN	NNS	Number=Plur	16	obj	16:obj	Entity=(52-person-new-cf8-1-sgl)51)|Lem=person|Len=6
18	_	_	ADP	IN	_	19	case	19:case	Lem=_|Len=4|MSeg=in-to
19	_	_	NOUN	NNS	Number=Plur	16	obl	16:obl:into	Bridge=27<53|Entity=(53-abstract-acc:inf-cf4-1-sgl)|Lem=race|Len=5|MSeg=race-s
20	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	cop	21:cop	Discourse=same-unit_m:23->21:1:_|Lem=be|Len=2
21	_	_	ADJ	JJ	Degree=Pos	26	advcl	26:advcl:while	Lem=_|Len=9|MSeg=repuls-ive
22	_	_	ADP	IN	_	23	case	23:case	Lem=_|Len=2
23	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	21	obl	21:obl:to	Entity=(54-person-acc:com-cf1-1-ana)|Lem=I|Len=2|SpaceAfter=No
24	_	_	PUNCT	,	_	21	punct	21:punct	Lem=_|Len=1
25	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	26	nsubj	26:nsubj	Discourse=same-unit_m:24->20:0:_|Entity=(54-person-giv:act-cf1-1-ana)|Lem=_|Len=1
26	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	conj	4:conj:and	Lem=_|Len=10|MSeg=under-stand
27	_	_	ADV	WRB	PronType=Rel	26	obj	26:obj	Lem=_|Len=3
28	_	_	PRON	DT	Number=Sing|PronType=Dem	32	nsubj	32:nsubj	Entity=(27-abstract-giv:act-cf2-1-ana)|Lem=_|Len=4
29	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	cop	32:cop	Lem=be|Len=2
30	_	_	DET	DT	Definite=Ind|PronType=Art	32	det	32:det	Entity=(27-abstract-giv:act-cf2-3-coref|Lem=_|Len=1
31	_	_	ADJ	JJ	Degree=Pos	32	amod	32:amod	Lem=_|Len=3
32	_	_	NOUN	NN	Number=Sing	27	advcl:relcl	27:advcl:relcl	Entity=27)|Lem=_|Len=4
33	_	_	ADP	IN	_	35	case	35:case	Lem=_|Len=2
34	_	_	DET	DT	Definite=Def|PronType=Art	35	det	35:det	Entity=(4-place-giv:act-cf3-2-coref-United_States|Lem=_|Len=3
35	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	32	obl	32:obl:in	Entity=4)|Lem=_|Len=2
36	_	_	PUNCT	:	_	39	punct	39:punct	Discourse=adversative-contrast_m:25->19:1:_;joint-list:25->24:0:0:orp-and-277|Lem=_|Len=1
37	_	_	CCONJ	CC	_	39	cc	39:cc	Lem=_|Len=3
38	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	39	nsubj	39:nsubj	Entity=(54-person-giv:act-cf1-1-ana)|Lem=_|Len=1
39	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	conj	4:conj:and	Lem=_|Len=10|MSeg=under-stand
40	_	_	ADV	WRB	PronType=Rel	39	obj	39:obj	Lem=_|Len=3
41	_	_	ADJ	JJ	Degree=Pos	42	amod	42:amod	Entity=(55-abstract-new-cf7-2-sgl|Lem=_|Len=8|MSeg=Europe-an
42	_	_	NOUN	NNS	Number=Plur	49	nsubj	49:nsubj	Lem=view|Len=5|MSeg=view-s
43	_	_	ADP	IN	_	45	case	45:case	Lem=_|Len=2
44	_	_	DET	DT	Definite=Def|PronType=Art	45	det	45:det	Entity=(27-abstract-giv:act-cf2-2-coref|Lem=_|Len=3
45	_	_	NOUN	NN	Number=Sing	42	nmod	42:nmod:on	Entity=27)55)|Lem=_|Len=5
46	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	49	cop	49:cop	Lem=be|Len=3
47	_	_	ADV	RB	Degree=Pos	49	advmod	49:advmod	Lem=_|Len=7|MSeg=usual-ly
48	_	_	ADV	RB	Degree=Pos	49	advmod	49:advmod	Lem=_|Len=3
49	_	_	ADJ	JJ	Degree=Pos	40	advcl:relcl	40:advcl:relcl	Lem=_|Len=10|MSeg=simpl-istic|SpaceAfter=No
50	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


