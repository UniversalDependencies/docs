---
layout: base
title:  'Statistics of reparandum in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `reparandum`

This relation is universal.

5 nodes (0%) are attached to their parents as `reparandum`.

5 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 4 pairs of parts of speech are connected with `reparandum`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PART.html">PART</a></tt> (1; 20% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt> (1; 20% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 reparandum	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	4:nsubj	Discourse=elaboration-additional:7->6:0|Entity=(10-person-giv:act-cf1*-1-ana)|Lem=*LOWER*|Len=2
2	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux	4:aux	Lem=be|Len=3
3	_	_	ADV	RB	Degree=Pos	4	advmod	4:advmod	Lem=_|Len=9
4	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Lem=bounce|Len=8
5	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=6
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	7:det	Bridge=2<14|Entity=(14-place-acc:inf-cf4-2-sgl|Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	4	obl	4:obl:around	Entity=14)|Lem=_|Len=4
8	_	_	VERB	VBG	VerbForm=Ger	4	advcl	4:advcl	Discourse=elaboration-additional:8->7:0|Lem=point|Len=8
9	_	_	ADP	RP	_	8	compound:prt	8:compound:prt	Lem=_|Len=3
10	_	_	NOUN	NNS	Number=Plur	8	obj	8:obj	Entity=(15-abstract-new-cf6-1-sgl|Lem=thing|Len=6
11	_	_	ADP	IN	_	16	nsubj	16:nsubj	Discourse=elaboration-attribute:9->8:0|Lem=_|Len=4
12	_	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nsubj	13:nsubj	Entity=(10-person-giv:act-cf1*-1-ana)|Lem=_|Len=2
13	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	acl:relcl	10:acl:relcl	Lem=think|Len=7
14	_	_	AUX	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	16	cop	16:cop	Lem=be|Len=4
15	_	_	NOUN	NNS	Number=Plur	16	reparandum	16:reparandum	Entity=(16-abstract-new-cf3-1-coref)|Lem=clue|Len=5
16	_	_	NOUN	NNS	Number=Plur	13	ccomp	13:ccomp	CorrectForm=_|Entity=(16-abstract-giv:act-cf3-1-coref)15)|Lem=clue|Len=5|XML=<sic ana:::""></sic>
17	_	_	SCONJ	IN	_	20	mark	20:mark	Discourse=adversative-contrast_m:10->7:1|Lem=_|Len=5
18	_	_	DET	DT	Definite=Def|PronType=Art	19	det	19:det	Entity=(9-person-giv:act-cf2-2-coref|Lem=_|Len=3
19	_	_	NOUN	NNS	Number=Plur	20	nsubj	20:nsubj	Entity=9)|Lem=parent|Len=7
20	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	4	advcl	4:advcl:while	Lem=dismiss|Len=9
21	_	_	DET	DT	PronType=Tot	22	det	22:det	Entity=(17-abstract-new-cf5-2-sgl|Lem=_|Len=5
22	_	_	NOUN	NN	Number=Sing	20	obj	20:obj	Entity=17)|Lem=_|Len=4
23	_	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	24	nsubj	24:nsubj|26:nsubj	Discourse=elaboration-attribute:11->10:0|Entity=(10-person-giv:act-cf1*-1-ana)|Lem=_|Len=2
24	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	22	acl:relcl	22:acl:relcl	Lem=have|Len=3
25	_	_	CCONJ	CC	_	26	cc	26:cc	Discourse=joint-list_m:12->10:1|Lem=_|Len=3
26	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	24	conj	22:acl:relcl|24:conj:and	Lem=tell|Len=4
27	_	_	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	26	iobj	26:iobj|29:nsubj:xsubj	Entity=(10-person-giv:act-cf1*-1-ana)|Lem=he|Len=3
28	_	_	PART	TO	_	29	mark	29:mark	Lem=_|Len=2
29	_	_	VERB	VB	VerbForm=Inf	26	xcomp	26:xcomp	Lem=_|Len=4
30	_	_	VERB	VBG	VerbForm=Ger	29	xcomp	29:xcomp	Lem=get|Len=7
31	_	_	ADV	RB	_	32	advmod	32:advmod	Lem=_|Len=2
32	_	_	ADJ	JJ	Degree=Pos	30	xcomp	30:xcomp	Lem=_|Len=7|SpaceAfter=No
33	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 reparandum	color:blue
1	_	_	NOUN	NN	Number=Sing	16	nsubj	3:nsubj|16:nsubj	Discourse=attribution-positive:22->25:0|Entity=(39-person-new-cf4-1-sgl|Lem=*LOWER*|Len=6
2	_	_	PRON	WP	PronType=Rel	3	nsubj	1:ref	Discourse=elaboration-attribute:23->22:0|Lem=_|Len=3
3	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	1:acl:relcl	Lem=bother|Len=7
4	_	_	PART	TO	_	6	mark	6:mark	Lem=_|Len=2
5	_	_	ADV	RB	Degree=Pos	6	advmod	6:advmod	Lem=_|Len=8
6	_	_	VERB	VB	VerbForm=Inf	3	xcomp	3:xcomp	Lem=_|Len=4
7	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=4|XML=<w>
8	_	_	PART	POS	Typo=Yes	10	reparandum	10:reparandum	CorrectForm=_|Lem=_|Len=2|XML=<sic ana:::""></sic></w>
9	_	_	DET	DT	Definite=Def|PronType=Art	10	det	10:det	Lem=_|Len=3
10	_	_	NOUN	NNS	Number=Plur	6	obl	6:obl:into	Lem=detail|Len=7
11	_	_	ADP	IN	_	14	case	14:case	Lem=_|Len=2
12	_	_	PROPN	NNP	Number=Sing	14	nmod:poss	14:nmod:poss	CorrectForm=NASA|Entity=(7-abstract-giv:inact-cf2-3-coref(8-organization-giv:inact-cf1-1-coref-NASA|Lem=NASA|Len=4|XML=<sic ana:::"NASA"></sic>
13	_	_	PART	POS	_	12	case	12:case	Entity=8)|Lem=_|Len=2
14	_	_	NOUN	NNS	Number=Plur	10	nmod	10:nmod:of	Entity=7)39)|Lem=claim|Len=6
15	_	_	AUX	MD	Number=Sing|Person=3|VerbForm=Fin	16	aux	16:aux	Discourse=same-unit_m:24->22:1|Lem=_|Len=4
16	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=7
17	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	19:nsubj	Discourse=joint-other_m:25->14:1|Entity=(8-organization-giv:act-cf1-1-ana-NASA)|Lem=_|Len=4
18	_	_	ADV	RB	Polarity=Neg	19	advmod	19:advmod	Lem=_|Len=5
19	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	16	ccomp	16:ccomp	Lem=go|Len=4
20	_	_	ADP	IN	_	22	case	22:case	Lem=_|Len=2
21	_	_	DET	DT	Definite=Def|PronType=Art	22	det	22:det	Entity=(40-place-acc:com-cf3-2-sgl|Lem=_|Len=3
22	_	_	NOUN	NN	Number=Sing	19	obl	19:obl:to	Entity=40)|Lem=_|Len=4|SpaceAfter=No
23	_	_	PUNCT	,	_	27	punct	27:punct	Lem=_|Len=1
24	_	_	VERB	VB	VerbForm=Inf	27	advmod	27:advmod	Lem=_|Len=3
25	_	_	ADV	RB	Degree=Pos	24	fixed	24:fixed	Lem=_|Len=5
26	_	_	NUM	CD	NumForm=Digit|NumType=Card	27	nummod	27:nummod	Entity=(41-event-new-cf5-2-sgl|Lem=_|Len=1
27	_	_	NOUN	NNS	Number=Plur	19	obl:npmod	19:obl:npmod	Entity=41)|Lem=time|Len=5|SpaceAfter=No
28	_	_	PUNCT	.	_	16	punct	16:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 reparandum	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	2:nsubj	Bridge=83<90|Discourse=mode-means:89->91:2|Entity=(89-event-new-cf8-2-disc(90-person-acc:inf-cf2-1-sgl)|Lem=*LOWER*|Len=4
2	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	Lem=_|Len=3
3	_	_	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(91-object-new-cf5-3-sgl|Lem=_|Len=1
4	_	_	NOUN	NN	Number=Sing	5	compound	5:compound	Lem=_|Len=5
5	_	_	NOUN	NN	Number=Sing	2	obj	2:obj	Entity=91)|Lem=_|Len=4
6	_	_	ADP	IN	_	8	case	8:case	Lem=_|Len=2
7	_	_	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod:poss	8:nmod:poss	Entity=(92-object-new-cf7-2-sgl(85-person-giv:act-cf1*-1-ana)|Lem=_|Len=3
8	_	_	NOUN	NN	Number=Sing	2	obl	2:obl:in	Entity=92)|Lem=_|Len=4
9	_	_	SCONJ	IN	_	14	mark	14:mark	Discourse=purpose-goal:90->89:0|Lem=_|Len=2
10	_	_	ADP	IN	_	9	fixed	9:fixed	Lem=_|Len=4
11	_	_	SCONJ	WRB	PronType=Int	14	reparandum	14:reparandum	Lem=_|Len=4
12	_	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	nsubj	14:nsubj	Entity=(85-person-giv:act-cf1*-1-ana)|Lem=_|Len=2
13	_	_	AUX	MD	VerbForm=Fin	14	aux	14:aux	Lem=_|Len=5
14	_	_	VERB	VB	VerbForm=Inf	2	advcl	2:advcl:so_that	Lem=_|Len=4
15	_	_	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	16	nmod:poss	16:nmod:poss	Entity=(93-object-new-cf6-2-sgl(85-person-giv:act-cf1*-1-ana)|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	14	obj	14:obj	Entity=93)|Lem=_|Len=4
17	_	_	ADP	IN	_	20	case	20:case	Lem=_|Len=2
18	_	_	DET	DT	Definite=Def|PronType=Art	20	det	20:det	Bridge=86<94|Entity=(94-abstract-acc:inf-cf3-3-sgl|Lem=_|Len=3
19	_	_	ADJ	JJ	Degree=Pos	20	amod	20:amod	Lem=_|Len=8
20	_	_	NOUN	NNS	Number=Plur	14	obl	14:obl:on	Entity=94)|Lem=answer|Len=7
21	_	_	CCONJ	CC	_	25	cc	25:cc	Lem=_|Len=3
22	_	_	PART	RB	Polarity=Neg	25	advmod	25:advmod	Lem=_|Len=3
23	_	_	ADP	IN	_	25	case	25:case	Lem=_|Len=2
24	_	_	DET	DT	Definite=Def|PronType=Art	25	det	25:det	Bridge=86<95|Entity=(95-abstract-acc:inf-cf4-2-sgl|Lem=_|Len=3
25	_	_	NOUN	NNS	Number=Plur	20	conj	14:obl:on|20:conj:and	Entity=95)|Lem=lie|Len=4|SpaceAfter=No
26	_	_	PUNCT	.	_	2	punct	2:punct	Entity=89)|Lem=_|Len=1

~~~


