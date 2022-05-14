---
layout: base
title:  'Statistics of punct in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `punct`

This relation is universal.

1869 nodes (11%) are attached to their parents as `punct`.

1286 instances of `punct` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.81808453718566.

The following 16 pairs of parts of speech are connected with `punct`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (965; 52% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (446; 24% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (200; 11% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (80; 4% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (35; 2% instances), <tt><a href="en_gumreddit-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (31; 2% instances), <tt><a href="en_gumreddit-pos-X.html">X</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (26; 1% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (20; 1% instances), <tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (14; 1% instances), <tt><a href="en_gumreddit-pos-DET.html">DET</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (14; 1% instances), <tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (13; 1% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (11; 1% instances), <tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (8; 0% instances), <tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="en_gumreddit-pos-PART.html">PART</a></tt>-<tt><a href="en_gumreddit-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 21 punct	color:blue
1	_	_	SCONJ	IN	_	7	mark	7:mark	Discourse=context-background:2->5:0|Entity=(2-abstract-new-cf3-19-disc|Lem=*LOWER*|Len=2
2	_	_	DET	DT	PronType=Tot	4	det	4:det	Entity=(3-place-new-cf1-3-coref|Lem=_|Len=5
3	_	_	ADJ	JJ	Degree=Pos	4	amod	4:amod	Lem=_|Len=5
4	_	_	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=3)|Lem=_|Len=7
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	Lem=be|Len=2
6	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
7	_	_	NOUN	NNS	Number=Plur	19	advcl	19:advcl:if	Entity=(4-abstract-new-cf2-1-sgl|Lem=billion|Len=8
8	_	_	PUNCT	-LRB-	_	11	punct	11:punct	Discourse=adversative-antithesis:3->2:0|Lem=_|Len=1|SpaceAfter=No
9	_	_	SCONJ	IN	_	11	mark	11:mark	Lem=_|Len=2
10	_	_	PART	RB	Polarity=Neg	11	advmod	11:advmod	Lem=_|Len=3
11	_	_	NOUN	NNS	Number=Plur	7	acl	7:acl:if	Lem=trillion|Len=9|SpaceAfter=No
12	_	_	PUNCT	-RRB-	_	11	punct	11:punct	Lem=_|Len=1
13	_	_	ADP	IN	_	14	case	14:case	Discourse=same-unit_m:4->2:1|Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	7	nmod	7:nmod:of	Entity=4)|Lem=_|Len=4|SpaceAfter=No
15	_	_	PUNCT	,	_	7	punct	7:punct	Lem=_|Len=1
16	_	_	SCONJ	WRB	PronType=Int	19	obl	19:obl:from	Discourse=topic-question:5->6:0|Lem=_|Len=5
17	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	aux	19:aux	Lem=be|Len=3
18	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	19:nsubj	Entity=(3-place-giv:act-cf1-1-ana)|Lem=_|Len=4
19	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Lem=borrow|Len=9
20	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=4|SpaceAfter=No
21	_	_	PUNCT	.	_	19	punct	19:punct	Entity=2)|Lem=_|Len=1

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 punct	color:blue
1	_	_	SCONJ	IN	_	7	mark	7:mark	Discourse=context-background:2->5:0|Entity=(2-abstract-new-cf3-19-disc|Lem=*LOWER*|Len=2
2	_	_	DET	DT	PronType=Tot	4	det	4:det	Entity=(3-place-new-cf1-3-coref|Lem=_|Len=5
3	_	_	ADJ	JJ	Degree=Pos	4	amod	4:amod	Lem=_|Len=5
4	_	_	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=3)|Lem=_|Len=7
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	Lem=be|Len=2
6	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
7	_	_	NOUN	NNS	Number=Plur	19	advcl	19:advcl:if	Entity=(4-abstract-new-cf2-1-sgl|Lem=billion|Len=8
8	_	_	PUNCT	-LRB-	_	11	punct	11:punct	Discourse=adversative-antithesis:3->2:0|Lem=_|Len=1|SpaceAfter=No
9	_	_	SCONJ	IN	_	11	mark	11:mark	Lem=_|Len=2
10	_	_	PART	RB	Polarity=Neg	11	advmod	11:advmod	Lem=_|Len=3
11	_	_	NOUN	NNS	Number=Plur	7	acl	7:acl:if	Lem=trillion|Len=9|SpaceAfter=No
12	_	_	PUNCT	-RRB-	_	11	punct	11:punct	Lem=_|Len=1
13	_	_	ADP	IN	_	14	case	14:case	Discourse=same-unit_m:4->2:1|Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	7	nmod	7:nmod:of	Entity=4)|Lem=_|Len=4|SpaceAfter=No
15	_	_	PUNCT	,	_	7	punct	7:punct	Lem=_|Len=1
16	_	_	SCONJ	WRB	PronType=Int	19	obl	19:obl:from	Discourse=topic-question:5->6:0|Lem=_|Len=5
17	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	aux	19:aux	Lem=be|Len=3
18	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	19:nsubj	Entity=(3-place-giv:act-cf1-1-ana)|Lem=_|Len=4
19	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Lem=borrow|Len=9
20	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=4|SpaceAfter=No
21	_	_	PUNCT	.	_	19	punct	19:punct	Entity=2)|Lem=_|Len=1

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 24 punct	color:blue
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
18	_	_	NOUN	NN	Number=Sing	15	iobj	15:iobj	CorrectForm=government|Entity=23)|Lem=government|Len=4|XML=<sic ana:::"government"></sic>
19	_	_	DET	DT	Definite=Def|PronType=Art	21	det	21:det	Bridge=12<33|Entity=(33-abstract-acc:inf-cf6-3-sgl|Lem=_|Len=3
20	_	_	ADJ	JJ	Degree=Pos	21	amod	21:amod	Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	15	obj	15:obj	Lem=_|Len=5
22	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	23	nsubj	23:nsubj	Discourse=elaboration-attribute:28->27:0|Entity=(23-organization-giv:act-cf2-1-ana)|Lem=_|Len=2
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl:relcl	21:acl:relcl	Entity=33)28)|Lem=print|Len=6|SpaceAfter=No
24	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


