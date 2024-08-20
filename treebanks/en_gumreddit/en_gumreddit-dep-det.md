---
layout: base
title:  'Statistics of det in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="en_gumreddit-dep-det-predet.html">det:predet</a></tt>.

1180 nodes (7%) are attached to their parents as `det`.

1177 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.54067796610169.

The following 8 pairs of parts of speech are connected with `det`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (1107; 94% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (34; 3% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (16; 1% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (11; 1% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-X.html">X</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 det	color:blue
1	_	_	SCONJ	IN	_	7	mark	7:mark	Discourse=context-background:2->5:0:dm-if-3+ref-prs-4-6,20|Entity=(2-abstract-new-cf3-19-disc|Lem=*LOWER*|Len=2
2	_	_	DET	DT	PronType=Ind	4	det	4:det	Entity=(3-place-new-cf1-3-coref|Lem=_|Len=5
3	_	_	ADJ	JJ	Degree=Pos	4	amod	4:amod	Lem=_|Len=5
4	_	_	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=3)|Lem=_|Len=7
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	Lem=be|Len=2
6	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
7	_	_	NOUN	NNS	Number=Plur	19	advcl	19:advcl:if	Entity=(4-abstract-new-cf2-1-sgl|Lem=billion|Len=8|MSeg=billion-s
8	_	_	PUNCT	-LRB-	_	11	punct	11:punct	Discourse=adversative-antithesis:3->2:0:dm-if-11|Lem=_|Len=1|SpaceAfter=No
9	_	_	SCONJ	IN	_	11	mark	11:mark	Lem=_|Len=2
10	_	_	PART	RB	Polarity=Neg	11	advmod	11:advmod	Lem=_|Len=3
11	_	_	NOUN	NNS	Number=Plur	7	acl	7:acl:if	Lem=trillion|Len=9|MSeg=trillion-s|SpaceAfter=No
12	_	_	PUNCT	-RRB-	_	11	punct	11:punct	Lem=_|Len=1
13	_	_	ADP	IN	_	14	case	14:case	Discourse=same-unit_m:4->2:1:_|Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	7	nmod	7:nmod:of	Entity=4)|Lem=_|Len=4|SpaceAfter=No
15	_	_	PUNCT	,	_	7	punct	7:punct	Lem=_|Len=1
16	_	_	ADV	WRB	PronType=Int	19	obl	19:obl:from	Discourse=topic-question:5->6:0:lex-indwd-18+syn-sbinv-19+grf-qst-23|Lem=_|Len=5
17	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	aux	19:aux	Lem=be|Len=3
18	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	19:nsubj	Entity=(3-place-giv:act-cf1-1-ana)|Lem=_|Len=4
19	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Cxn=Interrogative-WHInfo-Direct|Lem=borrow|Len=9|MSeg=borrow-ing
20	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=4|SpaceAfter=No
21	_	_	PUNCT	.	_	19	punct	19:punct	Entity=2)|Lem=_|Len=1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 det	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	6	det	6:det	Discourse=joint-list_m:21->4:4:grf-seq-|Entity=(26-abstract-new-cf3-4,5,6-sgl|Lem=*LOWER*|Len=3
2	_	_	DET	DT	PronType=Ind	4	det	4:det	Lem=*LOWER*|Len=3|SpaceAfter=No|XML=<w>
3	_	_	PUNCT	HYPH	_	2	punct	2:punct	Lem=_|Len=1|SpaceAfter=No
4	_	_	PROPN	NNP	Number=Sing	6	compound	6:compound	Lem=_|Len=4|XML=</w>
5	_	_	PROPN	NNP	Number=Sing	6	compound	6:compound	Entity=(27-event-new-cf5-1-sgl)|Lem=_|Len=5
6	_	_	PROPN	NNP	Number=Sing	7	nsubj	7:nsubj	Entity=26)|Lem=_|Len=6
7	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=cover|Len=6|MSeg=cover-s
8	_	_	ADV	RB	_	9	advmod	9:advmod	Lem=_|Len=4
9	_	_	PROPN	NNPS	Number=Plur	7	obj	7:obj	Entity=(7-organization-giv:inact-cf2-1,3-coref-Monsters%2C_Inc.|Lem=Monster|Len=8|MSeg=Monster-s|SpaceAfter=No
10	_	_	PUNCT	,	_	11	punct	11:punct	Lem=_|Len=1
11	_	_	PROPN	NNP	Number=Sing	9	flat	9:flat	Entity=7)|Lem=_|Len=3|SpaceAfter=No
12	_	_	PUNCT	,	_	15	punct	15:punct	Lem=_|Len=1
13	_	_	ADP	IN	_	15	case	15:case	Lem=_|Len=4
14	_	_	DET	DT	Polarity=Neg|PronType=Neg	15	det	15:det	Lem=_|Len=2
15	_	_	NOUN	NN	Number=Sing	7	obl	7:obl:with	Lem=_|Len=10|MSeg=indicat-ion
16	_	_	SCONJ	IN	_	18	mark	18:mark	Discourse=elaboration-attribute:22->21:0:syn-mdf-198+syn-nmn-199,201|Lem=_|Len=4
17	_	_	PRON	EX	PronType=Dem	18	expl	18:expl	Lem=_|Len=5
18	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	acl	15:acl:that	Cxn=Existential-CopPred-ThereExpl|Lem=be|Len=2
19	_	_	PRON	NN	Number=Sing|PronType=Ind	18	nsubj	18:nsubj	Entity=(28-person-new-cf4-1-sgl|Lem=_|Len=6|MSeg=any-one
20	_	_	ADV	RB	Degree=Pos	19	advmod	19:advmod	Entity=28)|Lem=_|Len=4
21	_	_	ADP	IN	_	24	case	24:case	Lem=_|Len=2
22	_	_	DET	DT	PronType=Ind	24	det	24:det	Entity=(10-organization-giv:act-cf1*-3-coref|Lem=_|Len=3
23	_	_	ADJ	JJ	Degree=Pos	24	amod	24:amod	Lem=_|Len=5
24	_	_	NOUN	NNS	Number=Plur	18	obl	18:obl:at	Entity=10)|Lem=company|Len=9|MSeg=companie-s
25	_	_	PART	TO	_	26	mark	26:mark	Discourse=purpose-attribute:23->22:0:syn-mdf-202+syn-inf-208|Lem=_|Len=2
26	_	_	VERB	VB	VerbForm=Inf	19	acl	19:acl:to	Lem=_|Len=7
27	_	_	ADP	IN	_	26	obl	26:obl	Lem=_|Len=4|SpaceAfter=No
28	_	_	PUNCT	.	_	7	punct	7:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	_	_	ADP	IN	_	3	case	3:case	Discourse=evaluation-comment:78->1:9:lex-indwd-473|Lem=*LOWER*|Len=2
2	_	_	PRON	PRP$	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	Entity=(81-abstract-new-cf3-2-sgl(2-person-giv:inact-cf2-1-ana)|Lem=_|Len=3
3	_	_	NOUN	NN	Number=Sing	8	obl	8:obl:in	Entity=81)|Lem=_|Len=7
4	_	_	ADJ	JJ	Degree=Pos	5	amod	5:amod	Entity=(82-person-new-cf1-2-coref|Lem=_|Len=5
5	_	_	NOUN	NNS	Number=Plur	8	nsubj	8:nsubj	Entity=82)|Lem=baby|Len=6|MSeg=bab-ie-s
6	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	Lem=be|Len=3
7	_	_	DET	DT	Definite=Def|PronType=Art	8	det	8:det	Lem=_|Len=3
8	_	_	ADJ	JJS	Degree=Sup	0	root	0:root	Lem=bad|Len=5
9	_	_	ADP	IN	_	12	case	12:case	Lem=_|Len=2
10	_	_	DET	PDT	PronType=Tot	12	det:predet	12:det:predet	Entity=(82-person-giv:act-cf1-3-coref|Lem=_|Len=3
11	_	_	DET	DT	Definite=Def|PronType=Art	12	det	12:det	Lem=_|Len=3
12	_	_	NOUN	NNS	Number=Ptan	8	obl	8:obl:of	Entity=82)|Lem=_|Len=7|SpaceAfter=No
13	_	_	PUNCT	.	_	8	punct	8:punct	Lem=_|Len=1

~~~


