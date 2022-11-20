---
layout: base
title:  'Statistics of iobj in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `iobj`

This relation is universal.

48 nodes (0%) are attached to their parents as `iobj`.

48 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.22916666666667.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (37; 77% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (11; 23% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 iobj	color:blue
1	_	_	SCONJ	IN	_	3	mark	3:mark	Discourse=contingency-condition:67->68:1|Lem=*LOWER*|Len=2
2	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj	Entity=(74-person-giv:act-cf1*-1-ana)|Lem=_|Len=3
3	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	advcl	9:advcl:if	Lem=_|Len=4
4	_	_	ADP	IN	_	6	case	6:case	Lem=_|Len=3
5	_	_	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	Entity=(79-organization-new-cf2-2-coref|Lem=_|Len=1
6	_	_	NOUN	NN	Number=Sing	3	obl	3:obl:for	Entity=79)|Lem=_|Len=7|SpaceAfter=No
7	_	_	PUNCT	,	_	3	punct	3:punct	Lem=_|Len=1
8	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	9	nsubj	9:nsubj	Discourse=restatement-repetition_m:68->65:2|Entity=(79-organization-giv:act-cf2-1-ana)|Lem=_|Len=4
9	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=_|Len=3
10	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	9	iobj	9:iobj	Entity=(74-person-giv:act-cf1*-1-ana)|Lem=_|Len=3
11	_	_	DET	DT	Number=Sing|PronType=Dem	12	det	12:det	Entity=(73-object-giv:act-cf3-2-coref|Lem=_|Len=4
12	_	_	NOUN	NN	Number=Sing	9	obj	9:obj	Entity=73)|Lem=_|Len=5
13	_	_	SCONJ	IN	_	15	mark	15:mark	Discourse=causal-cause:69->68:0|Lem=_|Len=7
14	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	15	nsubj	15:nsubj	Entity=(73-object-giv:act-cf3-1-ana)|Lem=_|Len=2
15	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	advcl	9:advcl:because	Lem=have|Len=3
16	_	_	NOUN	NN	Number=Sing	15	obj	15:obj	Entity=(80-abstract-new-cf4-1-coref)|Lem=_|Len=5
17	_	_	CCONJ	CC	_	20	cc	20:cc	Discourse=elaboration-additional:70->69:0|Lem=_|Len=3
18	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	20	nsubj	20:nsubj	Entity=(74-person-giv:act-cf1*-1-ana)|Lem=_|Len=3
19	_	_	AUX	MD	VerbForm=Fin	20	aux	20:aux	Lem=_|Len=3
20	_	_	VERB	VB	VerbForm=Inf	15	conj	9:advcl:because|15:conj:and	Lem=_|Len=3
21	_	_	NOUN	NNS	Number=Plur	20	obj	20:obj	Entity=(81-object-new-cf5-1-sgl)|Lem=thing|Len=6
22	_	_	ADP	IN	_	23	case	23:case	Lem=_|Len=4
23	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	20	obl	20:obl:with	Entity=(73-object-giv:act-cf3-1-ana)|Lem=_|Len=2|SpaceAfter=No
24	_	_	PUNCT	.	_	9	punct	9:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 iobj	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	3	nsubj	3:nsubj	Discourse=evaluation-comment:24->16:3|Entity=(22-event-giv:act-cf1*-1-coref)|Lem=*LOWER*|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	Lem=be|Len=2
3	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=7
4	_	_	SCONJ	IN	_	6	mark	6:mark	Discourse=causal-cause:25->24:0|Lem=_|Len=7
5	_	_	NOUN	NNS	Number=Plur	6	nsubj	6:nsubj	Entity=(28-event-new-cf9-2-disc(29-person-new-cf7-1-sgl)|Lem=person|Len=6
6	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	3:advcl:because	Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	6	obj	6:obj	Entity=(12-abstract-giv:inact-cf4-1-coref)|Lem=_|Len=5
8	_	_	PART	TO	_	9	mark	9:mark	Discourse=purpose-goal:26->25:0|Lem=_|Len=2
9	_	_	VERB	VB	VerbForm=Inf	6	advcl	6:advcl:to	Lem=_|Len=3
10	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	11	compound	11:compound	Entity=(30-abstract-new-cf8-2-sgl(31-place-new-cf3-1-coref-United_States)|Lem=_|Len=2
11	_	_	NOUN	NN	Number=Sing	9	obj	9:obj	Entity=30)|Lem=_|Len=4
12	_	_	PUNCT	:	_	15	punct	15:punct	Discourse=elaboration-additional:27->25:1|Lem=-|Len=2
13	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	15:nsubj	Entity=(32-person-acc:com-cf5-1-ana)|Lem=_|Len=2|SpaceAfter=No
14	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	15	aux	15:aux	Lem=be|Len=3
15	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	6	parataxis	6:parataxis	Lem=loan|Len=7
16	_	_	DET	DT	Definite=Def|PronType=Art	18	det	18:det	Entity=(23-organization-giv:act-cf2-3-coref|Lem=_|Len=3
17	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	18	compound	18:compound	Entity=(31-place-giv:act-cf3-1-coref-United_States)|Lem=_|Len=2
18	_	_	NOUN	NN	Number=Sing|Typo=Yes	15	iobj	15:iobj	CorrectForm=government|Entity=23)|Lem=government|Len=4|XML=<sic ana:::"government"></sic>
19	_	_	DET	DT	Definite=Def|PronType=Art	21	det	21:det	Bridge=12<33|Entity=(33-abstract-acc:inf-cf6-3-sgl|Lem=_|Len=3
20	_	_	ADJ	JJ	Degree=Pos	21	amod	21:amod	Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	15	obj	15:obj	Lem=_|Len=5
22	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	23	nsubj	23:nsubj	Discourse=elaboration-attribute:28->27:0|Entity=(23-organization-giv:act-cf2-1-ana)|Lem=_|Len=2
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl:relcl	21:acl:relcl	Entity=33)28)|Lem=print|Len=6|SpaceAfter=No
24	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


