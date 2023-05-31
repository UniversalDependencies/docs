---
layout: base
title:  'Statistics of expl in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `expl`

This relation is universal.

97 nodes (1%) are attached to their parents as `expl`.

93 instances of `expl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.78350515463918.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (66; 68% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (24; 25% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (6; 6% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 expl	color:blue
1	_	_	SCONJ	IN	_	3	mark	3:mark	Discourse=contingency-condition:33->34:1|Lem=*LOWER*|Len=2
2	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj	Entity=(5-person-giv:inact-cf2-1-ana)|Lem=_|Len=3
3	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	12	advcl	12:advcl:if	Lem=_|Len=3
4	_	_	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	Entity=(41-object-new-cf1-3,6-coref|Lem=_|Len=1
5	_	_	NOUN	NN	Number=Sing	6	compound	6:compound	Lem=_|Len=8
6	_	_	NOUN	NN	Number=Sing	3	obj	3:obj	Lem=_|Len=4
7	_	_	ADP	IN	_	8	case	8:case	Lem=_|Len=2
8	_	_	PROPN	NNP	Number=Sing	6	nmod	6:nmod:of	Entity=(42-person-new-cf4-1,2-coref-Sammy_Sosa|Lem=_|Len=5
9	_	_	PROPN	NNP	Number=Sing	8	flat	8:flat	Entity=42)41)|Lem=_|Len=4|SpaceAfter=No
10	_	_	PUNCT	,	_	3	punct	3:punct	Lem=_|Len=1
11	_	_	PRON	EX	PronType=Dem	12	expl	12:expl	Discourse=explanation-justify:34->51:4|Lem=_|Len=5
12	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=be|Len=2
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Lem=_|Len=1
14	_	_	NOUN	NN	Number=Sing	12	nsubj	12:nsubj	Lem=_|Len=6
15	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	nsubj	18:nsubj	Discourse=elaboration-attribute:35->34:0|Entity=(41-object-giv:act-cf1-1-ana)|Lem=_|Len=2
16	_	_	AUX	MD	VerbForm=Fin	18	aux	18:aux	Lem=_|Len=5
17	_	_	AUX	VB	VerbForm=Inf	18	cop	18:cop	Lem=_|Len=2
18	_	_	ADJ	JJ	Degree=Pos	14	acl:relcl	14:acl:relcl	Lem=_|Len=5
19	_	_	DET	DT	Definite=Ind|PronType=Art	20	det	20:det	Entity=(43-abstract-new-cf3-2-sgl|Lem=_|Len=1
20	_	_	NOUN	NN	Number=Sing	18	obj	18:obj	Lem=_|Len=3
21	_	_	ADP	IN	_	22	case	22:case	Lem=_|Len=2
22	_	_	NOUN	NN	Number=Sing	20	nmod	20:nmod:of	Entity=43)|Lem=_|Len=5|SpaceAfter=No
23	_	_	PUNCT	.	_	12	punct	12:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 expl	color:blue
1	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	Discourse=evaluation-comment:8->4:2|Lem=be|Len=2
2	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	4:expl	Lem=_|Len=2
3	_	_	ADV	RBR	Degree=Cmp	4	advmod	4:advmod	Lem=_|Len=4
4	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=6
5	_	_	SCONJ	IN	_	8	mark	8:mark	Lem=_|Len=4
6	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	8	nsubj	8:nsubj	Entity=(7-organization-giv:inact-cf1-1-ana-Monsters%2C_Inc.)|Lem=_|Len=4
7	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	aux	8:aux	Lem=be|Len=3
8	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	4	csubj	4:csubj	Lem=supply|Len=9
9	_	_	NOUN	NN	Number=Sing	8	obj	8:obj	Entity=(9-substance-giv:inact-cf2-1-coref)|Lem=_|Len=5
10	_	_	ADP	IN	_	13	case	13:case	Lem=_|Len=2
11	_	_	ADV	RB	_	12	advmod	12:advmod	Lem=_|Len=4
12	_	_	NUM	CD	NumForm=Word|NumType=Card	13	nummod	13:nummod	Entity=(3-place-giv:inact-cf3-2-coref|Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing	8	obl	8:obl:to	Entity=3)|Lem=_|Len=4|SpaceAfter=No
14	_	_	PUNCT	,	_	19	punct	19:punct	Lem=_|Len=1
15	_	_	CCONJ	CC	_	19	cc	19:cc	Lem=_|Len=2
16	_	_	ADP	IN	_	19	case	19:case	Lem=_|Len=2
17	_	_	DET	DT	Definite=Ind|PronType=Art	19	det	19:det	Entity=(4-place-giv:inact-cf4-3-coref|Lem=a|Len=2
18	_	_	ADJ	JJ	Degree=Pos	19	amod	19:amod	Lem=_|Len=6
19	_	_	NOUN	NN	Number=Sing	13	conj	8:obl:to|13:conj:or	Entity=4)|Lem=_|Len=5|SpaceAfter=No
20	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl	color:blue
1	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Discourse=adversative-concession:79->78:0|Lem=*LOWER*|Len=4
2	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	5:expl	Entity=(86-abstract-new-cf4-1-cata)|Lem=_|Len=2
3	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	5:cop	Lem=be|Len=3
4	_	_	DET	DT	Definite=Def|PronType=Art	5	det	5:det	Lem=_|Len=3
5	_	_	NOUN	NN	Number=Sing	1	ccomp	1:ccomp	Lem=_|Len=4
6	_	_	ADP	IN	_	10	obl	10:obl	Entity=(86-abstract-acc:com-cf4-5-coref|Lem=_|Len=4
7	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	10	nsubj	10:nsubj	Entity=(87-person-acc:com-cf3-1-sgl)|Lem=_|Len=3
8	_	_	AUX	MD	VerbForm=Fin	10	aux	10:aux	Lem=_|Len=5
9	_	_	ADV	RB	Degree=Pos	10	advmod	10:advmod	Lem=_|Len=6
10	_	_	VERB	VB	VerbForm=Inf	5	csubj	5:csubj	Lem=_|Len=4
11	_	_	NOUN	NN	Number=Sing	10	obj	10:obj	Entity=(49-abstract-giv:inact-cf1-1-coref)|Lem=_|Len=8
12	_	_	CCONJ	CC	_	13	cc	13:cc	Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing	11	conj	10:obj|11:conj:and	Entity=(67-abstract-giv:inact-cf2-1-coref)86)|Lem=_|Len=11
14	_	_	ADV	RB	Degree=Pos	1	advmod	1:advmod	Lem=_|Len=6|SpaceAfter=No
15	_	_	PUNCT	.	_	1	punct	1:punct	Lem=_|Len=1

~~~


