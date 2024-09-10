---
layout: base
title:  'Statistics of goeswith in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `goeswith`

This relation is universal.

5 nodes (0%) are attached to their parents as `goeswith`.

5 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `goeswith`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (4; 80% instances), <tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 goeswith	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=elaboration-additional:70->1:8:syn-relcl-425|Entity=(75-person-acc:com-cf1-1-sgl)|Lem=_|Len=1
2	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=_|Len=5
3	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	5:expl	Entity=(76-animal-new-cf2-1-cata)|Lem=_|Len=2
4	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	Lem=be|Len=2
5	_	_	NOUN	NNS	Number=Plur	2	ccomp	2:ccomp|8:csubj	Entity=(77-event-new-cf4-1-coref(76-animal-acc:com-cf2-1-coref|Lem=coyote|Len=7|MSeg=coyote-s
6	_	_	PRON	WDT	PronType=Rel	8	nsubj	5:ref|8:nsubj|13:nsubj	Lem=_|Len=4
7	_	_	AUX	MD	VerbForm=Fin	8	aux	8:aux|13:aux	Lem=_|Len=4
8	_	_	VERB	VB	VerbForm=Inf	5	advcl:relcl	5:advcl:relcl	Lem=_|Len=4
9	_	_	ADP	IN	_	11	case	11:case	Lem=_|Len=2
10	_	_	ADJ	JJ	Degree=Pos	11	amod	11:amod	Entity=(78-time-new-cf5-2-sgl|Lem=_|Len=7
11	_	_	NOUN	NNS	Number=Plur	8	obl	8:obl:at	Entity=78)|Lem=time|Len=5|MSeg=time-s
12	_	_	CCONJ	CC	_	13	cc	13:cc	Discourse=joint-sequence_m:71->70:0:dm-and-431|Lem=_|Len=3
13	_	_	VERB	VB	VerbForm=Inf	8	conj	5:advcl:relcl|8:conj:and	Lem=_|Len=6
14	_	_	ADP	IN	_	15	case	15:case	Lem=_|Len=3
15	_	_	NOUN	NNS	Number=Plur	13	obl	13:obl:for	Entity=(79-event-new-cf6-1-sgl)76)|Lem=response|Len=9|MSeg=respon-se-s
16	_	_	PART	TO	_	17	mark	17:mark	Discourse=purpose-goal:72->70:1:syn-inf-435|Lem=_|Len=2
17	_	_	VERB	VB	VerbForm=Inf	13	advcl	13:advcl:to	Lem=_|Len=6
18	_	_	SCONJ	IN	_	22	mark	22:mark	Lem=_|Len=2
19	_	_	DET	DT	Definite=Ind|PronType=Art	20	det	20:det	Entity=(80-place-new-cf3-2-sgl|Lem=a|Len=2
20	_	_	NOUN	NN	Number=Sing	22	nsubj:pass	22:nsubj:pass	Entity=80)|Lem=_|Len=4
21	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	aux:pass	22:aux:pass	Lem=be|Len=2
22	_	_	VERB	GW	Typo=Yes	17	ccomp	17:ccomp	CorrectForm=overpopulated|Cxn=Interrogative-Polar-Indirect|Lem=overpopulate|Len=4|XML=<sic ana:::"overpopulated">
23	_	_	X	VBN	_	22	goeswith	22:goeswith	CorrectForm=_|Entity=77)|Lem=_|Len=9|MSeg=populat-ed|SpaceAfter=No|XML=</sic>
24	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


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
8	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	7	advcl	7:advcl	Discourse=elaboration-additional:3->2:0:syn-pres-15|Lem=eat|Len=6|MSeg=eat-ing
9	_	_	NOUN	NN	Number=Sing	8	obj	8:obj	Entity=(6-object-new-cf6-1-sgl)|Lem=_|Len=9
10	_	_	CCONJ	CC	_	12	cc	12:cc	Discourse=context-background:4->6:1:ref-prs-8-11,32+ref-prs-20-24,38|Lem=_|Len=3
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


