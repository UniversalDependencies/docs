---
layout: base
title:  'Statistics of cop in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `cop`

This relation is universal.

478 nodes (3%) are attached to their parents as `cop`.

464 instances of `cop` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.42677824267782.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (206; 43% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (186; 39% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (26; 5% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (24; 5% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (21; 4% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (7; 1% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="en_gumreddit-pos-DET.html">DET</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="en_gumreddit-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cop	color:blue
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
16	_	_	ADV	WRB	PronType=Int	19	obl	19:obl:from	Discourse=topic-question:5->6:0|Lem=_|Len=5
17	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	aux	19:aux	Lem=be|Len=3
18	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	19:nsubj	Entity=(3-place-giv:act-cf1-1-ana)|Lem=_|Len=4
19	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Lem=borrow|Len=9
20	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=4|SpaceAfter=No
21	_	_	PUNCT	.	_	19	punct	19:punct	Entity=2)|Lem=_|Len=1

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 10 cop	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=evaluation-comment:29->16:4|Entity=(34-abstract-new-cf5-3-sgl|Lem=*LOWER*|Len=3
2	_	_	ADJ	JJ	Degree=Pos	3	amod	3:amod	Lem=_|Len=4
3	_	_	NOUN	NN	Number=Sing	17	nsubj:outer	17:nsubj:outer	Lem=_|Len=6
4	_	_	SCONJ	IN	_	6	mark	6:mark	Discourse=elaboration-attribute:30->29:0|Lem=_|Len=4
5	_	_	PRON	DT	Number=Sing|PronType=Dem	6	nsubj	6:nsubj	Entity=(28-event-giv:act-cf1*-1-coref)|Lem=_|Len=4
6	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl	3:acl:that	Lem=result|Len=7
7	_	_	ADP	IN	_	8	case	8:case	Lem=_|Len=2
8	_	_	PRON	NN	Number=Sing|PronType=Ind	6	obl	6:obl:in	Entity=(35-abstract-new-cf8-1-sgl|Lem=_|Len=8
9	_	_	ADJ	JJ	Degree=Pos	8	amod	8:amod	Entity=35)34)|Lem=_|Len=9
10	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	17:cop	Discourse=same-unit_m:31->29:1|Lem=be|Len=2
11	_	_	SCONJ	IN	_	17	mark	17:mark	Lem=_|Len=7
12	_	_	NOUN	NNS	Number=Plur	17	nsubj	17:nsubj	Entity=(36-person-new-cf6-1-sgl|Lem=person|Len=6
13	_	_	ADV	RB	Degree=Pos	16	advmod	16:advmod	Lem=_|Len=3
14	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=4
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	16:det	Entity=(37-place-acc:com-cf4-2-sgl|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	12	nmod	12:nmod:over	Entity=37)36)|Lem=_|Len=5
17	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=_|Len=5
18	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	17	obj	17:obj	Entity=(27-abstract-giv:inact-cf2-1-coref-United_States_dollar)|Lem=_|Len=3
19	_	_	CCONJ	CC	_	23	cc	23:cc	Discourse=joint-list_m:32->31:0|Lem=_|Len=3
20	_	_	DET	DT	Number=Sing|PronType=Dem	22	det	22:det	Bridge=27<38|Entity=(38-object-acc:inf-cf3-3-sgl|Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	22	compound	22:compound	Lem=_|Len=5
22	_	_	NOUN	NN	Number=Sing	23	nsubj	23:nsubj	Entity=38)|Lem=_|Len=8
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	conj	17:conj:and	Lem=represent|Len=10
24	_	_	ADJ	JJ	Degree=Pos	25	amod	25:amod	Entity=(39-abstract-new-cf7-2-sgl|Lem=_|Len=9
25	_	_	NOUN	NN	Number=Sing	23	obj	23:obj	Entity=39)|Lem=_|Len=5|SpaceAfter=No
26	_	_	PUNCT	,	_	28	punct	28:punct	Lem=_|Len=1
27	_	_	ADJ	JJ	Degree=Pos	28	amod	28:amod	Entity=(40-abstract-new-cf9-2-sgl|Lem=_|Len=3
28	_	_	NOUN	NNS	Number=Plur	25	conj	23:obj|25:conj	Entity=40)|Lem=asset|Len=6|SpaceAfter=No
29	_	_	PUNCT	,	_	30	punct	30:punct	Lem=_|Len=1
30	_	_	NOUN	FW	Abbr=Yes|Number=Plur	25	conj	23:obj|25:conj	Lem=_|Len=4

~~~


