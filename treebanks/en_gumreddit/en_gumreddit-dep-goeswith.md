---
layout: base
title:  'Statistics of goeswith in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `goeswith`

This relation is universal.

2 nodes (0%) are attached to their parents as `goeswith`.

2 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `goeswith`: <tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (1; 50% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 goeswith	color:blue
1	_	_	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	Discourse=context-circumstance:2->4:1:_;joint-list:2->2:2:1:orp-and-17|Entity=(2-person-new-cf1-2,4-coref(3-person-new-cf4-2-sgl(4-person-acc:com-cf2-1-ana)|Lem=*LOWER*|Len=2
2	_	_	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=3)|Lem=_|Len=4
3	_	_	CCONJ	CC	_	4	cc	4:cc	Lem=_|Len=3
4	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	conj	2:conj:and|7:nsubj	Entity=(4-person-giv:act-cf2-1-ana)2)|Lem=_|Len=1
5	_	_	AUX	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	cop	7:cop	Lem=be|Len=4
6	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
7	_	_	PROPN	NNP	Number=Sing	0	root	0:root	Entity=(5-place-new-cf7-1-coref-Panera_Bread)|Lem=_|Len=6
8	_	_	VERB	VBG	VerbForm=Ger	7	advcl	7:advcl	Discourse=elaboration-additional:3->2:0:syn-pres-15|Lem=eat|Len=6|MSeg=eat-ing
9	_	_	NOUN	NN	Number=Sing	8	obj	8:obj	Entity=(6-object-new-cf6-1-sgl)|Lem=_|Len=9
10	_	_	CCONJ	CC	_	12	cc	12:cc	Discourse=context-background:4->6:1:ref-prs-8-11,20-24,32,38|Lem=_|Len=3
11	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	12:nsubj	Entity=(2-person-giv:act-cf1-1-ana)|Lem=_|Len=2
12	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	7	conj	7:conj:and	Lem=notice|Len=7|MSeg=notic-ed
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Entity=(7-person-new-cf5-2-coref|Lem=_|Len=1
14	_	_	NOUN	NN	Number=Sing	12	obj	12:obj	Lem=_|Len=4
15	_	_	ADP	GW	Typo=Yes	17	case	17:case	CorrectForm=behind|Lem=behind|Len=2|XML=<sic ana:::"behind">
16	_	_	X	IN	_	15	goeswith	15:goeswith	CorrectForm=_|Lem=_|Len=4|XML=</sic>
17	_	_	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	14	nmod	14:nmod:behind	Entity=(2-person-giv:act-cf1-1-ana)7)|Lem=we|Len=2
18	_	_	VERB	VBG	VerbForm=Ger	14	acl	14:acl	Discourse=elaboration-attribute:5->4:0:syn-mdf-21+syn-nmn-25|Lem=talk|Len=7|MSeg=talk-ing
19	_	_	ADP	IN	_	21	case	21:case	Lem=_|Len=2
20	_	_	DET	DT	Definite=Def|PronType=Art	21	det	21:det	Bridge=7<8|Entity=(8-object-acc:inf-cf3-2-sgl|Lem=_|Len=3
21	_	_	NOUN	NN	Number=Sing	18	obl	18:obl:on	Entity=8)|Lem=_|Len=5
22	_	_	ADV	RB	_	23	advmod	23:advmod	Lem=_|Len=4
23	_	_	ADV	RB	Degree=Pos	18	advmod	18:advmod	Lem=_|Len=6|MSeg=loud-ly|SpaceAfter=No
24	_	_	PUNCT	.	_	7	punct	7:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 goeswith	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	4:nsubj	Discourse=context-background:6->13:4:ref-prs-32,38,64,74|Entity=(2-person-giv:act-cf1*-1-ana)|Lem=*LOWER*|Len=2
2	_	_	AUX	MD	VerbForm=Fin	4	aux	4:aux	Lem=_|Len=5
3	_	_	PART	RB	Polarity=Neg	4	advmod	4:advmod	Lem=not|Len=3
4	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=4
5	_	_	VERB	GW	Typo=Yes	4	ccomp	4:ccomp	CorrectForm=overhearing|Lem=overhear|Len=4|XML=<sic ana:::"overhearing">
6	_	_	X	VBG	_	5	goeswith	5:goeswith	CorrectForm=_|Lem=_|Len=7|MSeg=hear-ing|XML=</sic>
7	_	_	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nsubj	8:nsubj	Entity=(7-person-giv:act-cf2-1-ana)|Lem=she|Len=3
8	_	_	NOUN	NN	Number=Sing	5	ccomp	5:ccomp	Entity=(9-event-new-cf4-1-sgl|Lem=_|Len=4
9	_	_	SCONJ	IN	_	14	mark	14:mark	Lem=_|Len=5
10	_	_	DET	DT	Definite=Ind|PronType=Art	11	det	11:det	Entity=(10-object-new-cf3-2-sgl|Lem=_|Len=1
11	_	_	NOUN	NN	Number=Sing	14	nsubj:pass	14:nsubj:pass	Entity=10)|Lem=_|Len=4
12	_	_	PART	RB	Polarity=Neg	14	advmod	14:advmod	Discourse=elaboration-attribute:7->6:0:syn-mdf-39+syn-nmn-45|Lem=_|Len=3
13	_	_	AUX	VBG	VerbForm=Ger	14	aux:pass	14:aux:pass	Lem=be|Len=5|MSeg=be-ing
14	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	8	acl	8:acl:about	Entity=9)|Lem=pay|Len=4|SpaceAfter=No
15	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


