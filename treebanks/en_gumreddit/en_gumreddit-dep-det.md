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
Average distance between parent and child is 1.53050847457627.

The following 8 pairs of parts of speech are connected with `det`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (1110; 94% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (31; 3% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (22; 2% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-X.html">X</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 det	color:blue
1	_	_	SCONJ	IN	_	7	mark	7:mark	Discourse=background:2->5:0|Entity=(abstract-2-new-19-disc|Lem=*LOWER*|Len=2
2	_	_	DET	DT	_	4	det	4:det	Entity=(place-3-new-3-coref|Lem=_|Len=5
3	_	_	ADJ	JJ	Degree=Pos	4	amod	4:amod	Lem=_|Len=5
4	_	_	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=3)|Lem=_|Len=7
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	Lem=be|Len=2
6	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
7	_	_	NOUN	NNS	Number=Plur	19	advcl	19:advcl:if	Entity=(abstract-4-new-1-sgl|Lem=billion|Len=8
8	_	_	PUNCT	-LRB-	_	11	punct	11:punct	Discourse=antithesis:3->2:0|Lem=_|Len=1|SpaceAfter=No
9	_	_	SCONJ	IN	_	11	mark	11:mark	Lem=_|Len=2
10	_	_	PART	RB	Polarity=Neg	11	advmod	11:advmod	Lem=_|Len=3
11	_	_	NOUN	NNS	Number=Plur	7	acl	7:acl:if	Lem=trillion|Len=9|SpaceAfter=No
12	_	_	PUNCT	-RRB-	_	11	punct	11:punct	Lem=_|Len=1
13	_	_	ADP	IN	_	14	case	14:case	Discourse=same-unit_m:4->2:1|Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	7	nmod	7:nmod:of	Entity=4)|Lem=_|Len=4|SpaceAfter=No
15	_	_	PUNCT	,	_	7	punct	7:punct	Lem=_|Len=1
16	_	_	SCONJ	WRB	PronType=Int	19	obl	19:obl:from	Discourse=question:5->6:0|Lem=_|Len=5
17	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	aux	19:aux	Lem=be|Len=3
18	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	19:nsubj	Entity=(place-3-giv:act-1-ana)|Lem=_|Len=4
19	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Lem=borrow|Len=9
20	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=4|SpaceAfter=No
21	_	_	PUNCT	.	_	19	punct	19:punct	Entity=2)|Lem=_|Len=1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 det	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	6	det	6:det	Discourse=joint_m:21->4:4|Entity=(abstract-26-new-4,5,6-sgl|Lem=*LOWER*|Len=3
2	_	_	DET	DT	_	4	det	4:det	Lem=*LOWER*|Len=3|SpaceAfter=No|XML=<w>
3	_	_	PUNCT	HYPH	_	2	punct	2:punct	Lem=_|Len=1|SpaceAfter=No
4	_	_	PROPN	NNP	Number=Sing	6	compound	6:compound	Lem=_|Len=4|XML=</w>
5	_	_	PROPN	NNP	Number=Sing	6	compound	6:compound	Entity=(event-27-new-1-sgl)|Lem=_|Len=5
6	_	_	PROPN	NNP	Number=Sing	7	nsubj	7:nsubj	Entity=26)|Lem=_|Len=6
7	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=cover|Len=6
8	_	_	ADV	RB	_	9	advmod	9:advmod	Lem=_|Len=4
9	_	_	PROPN	NNPS	Number=Plur	7	obj	7:obj	Entity=(organization-7-giv:inact-1,3-coref-Monsters%2C_Inc.|Lem=Monster|Len=8|SpaceAfter=No
10	_	_	PUNCT	,	_	11	punct	11:punct	Lem=_|Len=1
11	_	_	PROPN	NNP	Number=Sing	9	flat	9:flat	Entity=7)|Lem=_|Len=3|SpaceAfter=No
12	_	_	PUNCT	,	_	15	punct	15:punct	Lem=_|Len=1
13	_	_	ADP	IN	_	15	case	15:case	Lem=_|Len=4
14	_	_	DET	DT	Polarity=Neg	15	det	15:det	Lem=_|Len=2
15	_	_	NOUN	NN	Number=Sing	7	obl	7:obl:with	Lem=_|Len=10
16	_	_	SCONJ	IN	_	18	mark	18:mark	Discourse=elaboration:22->21:0|Lem=_|Len=4
17	_	_	PRON	EX	_	18	expl	18:expl	Lem=_|Len=5
18	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	acl	15:acl:that	Lem=be|Len=2
19	_	_	NOUN	NN	Number=Sing	18	nsubj	18:nsubj	Entity=(person-28-new-1-sgl|Lem=_|Len=6
20	_	_	ADV	RB	Degree=Pos	19	advmod	19:advmod	Entity=28)|Lem=_|Len=4
21	_	_	ADP	IN	_	24	case	24:case	Lem=_|Len=2
22	_	_	DET	DT	_	24	det	24:det	Entity=(organization-10-giv:act-3-coref|Lem=_|Len=3
23	_	_	ADJ	JJ	Degree=Pos	24	amod	24:amod	Lem=_|Len=5
24	_	_	NOUN	NNS	Number=Plur	18	obl	18:obl:at	Entity=10)|Lem=company|Len=9
25	_	_	PART	TO	_	26	mark	26:mark	Discourse=elaboration:23->22:0|Lem=_|Len=2
26	_	_	VERB	VB	VerbForm=Inf	19	acl	19:acl:to	Lem=_|Len=7
27	_	_	ADP	IN	_	26	obl	26:obl	Lem=_|Len=4|SpaceAfter=No
28	_	_	PUNCT	.	_	7	punct	7:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	_	_	CCONJ	CC	_	7	cc	7:cc	Discourse=contrast_m:12->10:1|Lem=*LOWER*|Len=3
2	_	_	ADP	IN	_	4	case	4:case	Lem=_|Len=2
3	_	_	DET	DT	Definite=Def|PronType=Art	4	det	4:det	Lem=_|Len=3
4	_	_	ADJ	JJ	Degree=Pos	7	obl	7:obl:in	Lem=_|Len=4
5	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	7	nsubj	7:nsubj	Entity=(animal-7-giv:inact-1-ana-Giant_panda)|Lem=_|Len=4
6	_	_	AUX	MD	VerbForm=Fin	7	aux	7:aux	Lem=_|Len=5
7	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=9
8	_	_	ADV	RB	_	9	advmod	9:advmod	Lem=_|Len=4
9	_	_	ADV	RB	Degree=Pos	7	advmod	7:advmod	Lem=_|Len=4|SpaceAfter=No
10	_	_	PUNCT	,	_	19	punct	19:punct	Lem=_|Len=1
11	_	_	DET	DT	Definite=Def|PronType=Art	13	det	13:det	Discourse=elaboration:13->9:2|Entity=(abstract-22-new-9,19-disc(abstract-23-new-3-coref|Lem=_|Len=3
12	_	_	ADJ	JJS	Degree=Sup	13	amod	13:amod	Lem=large|Len=7
13	_	_	NOUN	NN	Number=Sing	19	nsubj	19:nsubj|29:nsubj	Lem=_|Len=6
14	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=2
15	_	_	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	16	nmod:poss	16:nmod:poss	Entity=(event-14-giv:inact-2-coref(animal-7-giv:act-1-ana-Giant_panda)|Lem=_|Len=5
16	_	_	NOUN	NN	Number=Sing	13	nmod	13:nmod:to	Entity=14)23)|Lem=_|Len=12
17	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	cop	19:cop	Lem=be|Len=2
18	_	_	DET	DT	Definite=Def|PronType=Art	19	det	19:det	Entity=(abstract-23-giv:act-2-coref|Lem=_|Len=3
19	_	_	NOUN	NN	Number=Sing	7	parataxis	7:parataxis	Lem=_|Len=9
20	_	_	ADP	IN	_	22	case	22:case	Lem=_|Len=2
21	_	_	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	22	nmod:poss	22:nmod:poss	Entity=(abstract-24-new-2-sgl(animal-7-giv:act-1-ana-Giant_panda)|Lem=_|Len=5
22	_	_	NOUN	NNS	Number=Plur	19	nmod	19:nmod:of	Entity=24)|Lem=ecosystem|Len=10
23	_	_	ADP	IN	_	24	case	24:case	Lem=_|Len=2
24	_	_	NOUN	NNS	Number=Plur	19	nmod	19:nmod:by	Entity=(person-25-new-1-sgl)23)|Lem=human|Len=6|SpaceAfter=No
25	_	_	PUNCT	,	_	29	punct	29:punct	Lem=_|Len=1
26	_	_	PART	RB	Polarity=Neg	29	advmod	29:advmod	Lem=_|Len=3
27	_	_	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	29	nmod:poss	29:nmod:poss	Entity=(abstract-26-new-3-sgl(animal-7-giv:act-1-ana-Giant_panda)|Lem=_|Len=5
28	_	_	ADJ	JJ	Degree=Pos	29	amod	29:amod	Lem=_|Len=4
29	_	_	NOUN	NN	Number=Sing	19	conj	19:conj	Lem=_|Len=6
30	_	_	SCONJ	IN	_	31	mark	31:mark	Lem=_|Len=2
31	_	_	VERB	VBG	VerbForm=Ger	29	acl	29:acl:in	Entity=(event-14-giv:act-1-coref)26)22)|Lem=reproduce|Len=11|SpaceAfter=No
32	_	_	PUNCT	.	_	7	punct	7:punct	Lem=_|Len=1

~~~


