---
layout: base
title:  'Statistics of dislocated in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `dislocated`

This relation is universal.

4 nodes (0%) are attached to their parents as `dislocated`.

3 instances of `dislocated` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5.

The following 4 pairs of parts of speech are connected with `dislocated`: <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 dislocated	color:blue
1	_	_	NOUN	NN	Number=Sing	2	compound	2:compound	Discourse=preparation:1->2|Entity=(person-1(event-2)|Lem=*LOWER*|Len=6
2	_	_	NOUN	NNS	Number=Plur	6	dislocated	6:dislocated	Entity=person-1)|Lem=survivor|Len=9|SpaceAfter=No
3	_	_	PUNCT	:	_	2	punct	2:punct	Lem=_|Len=1
4	_	_	ADV	WRB	PronType=Int	6	advmod	6:advmod	Discourse=question:2->17|Lem=_|Len=3
5	_	_	PUNCT	``	_	6	punct	6:punct	Lem=''|Len=1|SpaceAfter=No
6	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=5|SpaceAfter=No
7	_	_	PUNCT	''	_	6	punct	6:punct	Lem=''|Len=1
8	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	6	cop	6:cop	Lem=be|Len=4
9	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	6:nsubj	Entity=(person-1)|Lem=_|Len=3
10	_	_	ADV	RB	_	13	advmod	13:advmod	Discourse=circumstance:3->2|Lem=_|Len=4
11	_	_	SCONJ	IN	_	13	mark	13:mark	Lem=_|Len=5
12	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	13	nsubj	13:nsubj|18:nsubj:xsubj	Entity=(person-1)|Lem=_|Len=3
13	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	6	advcl	6:advcl:after	Lem=stabilize|Len=10
14	_	_	CCONJ	CC	_	16	cc	16:cc	Discourse=joint:4->3|Lem=_|Len=3
15	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	16	cop	16:cop	Lem=be|Len=4
16	_	_	ADJ	JJ	Degree=Pos|Polarity=Neg	13	conj	6:advcl:after|13:conj:and	Lem=_|Len=6
17	_	_	PART	TO	_	18	mark	18:mark	Lem=_|Len=2
18	_	_	VERB	VB	VerbForm=Inf	16	xcomp	16:xcomp	Lem=_|Len=5|SpaceAfter=No
19	_	_	PUNCT	.	_	6	punct	6:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 dislocated	color:blue
1	_	_	NOUN	NN	Number=Sing	2	compound	2:compound	Discourse=preparation:53->54|Entity=(abstract-66(abstract-67)|Lem=*LOWER*|Len=4
2	_	_	NOUN	NN	Number=Sing	0	root	0:root	Entity=abstract-66)|Lem=_|Len=5|SpaceAfter=No
3	_	_	PUNCT	:	_	8	punct	8:punct	Lem=_|Len=1
4	_	_	NOUN	NNS	Number=Plur	8	nsubj	8:nsubj|13:nsubj	Discourse=contrast:54->49|Entity=(abstract-66(animal-68)|Lem=cat|Len=4
5	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	Lem=be|Len=3
6	_	_	DET	DT	Definite=Def|PronType=Art	8	det	8:det	Entity=(animal-68|Lem=_|Len=3
7	_	_	ADJ	JJS	Degree=Sup	8	amod	8:amod	Lem=smart|Len=8
8	_	_	NOUN	NN	Number=Sing	2	dislocated	2:dislocated	Lem=_|Len=7
9	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=2
10	_	_	NOUN	NN	Number=Sing	8	nmod	8:nmod:on	Entity=(place-69)animal-68)|Lem=_|Len=5
11	_	_	CCONJ	CC	_	13	cc	13:cc	Discourse=joint:55->54|Lem=_|Len=3
12	_	_	AUX	MD	VerbForm=Fin	13	aux	13:aux	Lem=_|Len=4
13	_	_	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	8	conj	2:dislocated|8:conj:and	Lem=_|Len=9
14	_	_	NOUN	NNS	Number=Plur	13	obj	13:obj	Entity=(person-2)|Lem=human|Len=6
15	_	_	SCONJ	WRB	PronType=Int	17	mark	17:mark	Discourse=circumstance:56->55|Lem=_|Len=4
16	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	17	nsubj	17:nsubj	Entity=(person-2)|Lem=_|Len=2
17	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	13	advcl	13:advcl:when	Lem=_|Len=7
18	_	_	SCONJ	IN	_	22	mark	22:mark	Discourse=elaboration:57->56|Lem=_|Len=4
19	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	22	nsubj	22:nsubj	Entity=(person-2)|Lem=_|Len=2|SpaceAfter=No
20	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	22	cop	22:cop	Lem=be|Len=3
21	_	_	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	22	nmod:poss	22:nmod:poss	Entity=(person-2(animal-68)|Lem=_|Len=5
22	_	_	NOUN	NNS	Number=Plur	17	ccomp	17:ccomp	Entity=abstract-66)person-2)|Lem=servant|Len=8|SpaceAfter=No
23	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 dislocated	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	Discourse=evaluation:39->36|Entity=(abstract-43)|Lem=*LOWER*|Len=2
2	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=amaze|Len=6
3	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	2	obj	2:obj	Entity=(person-44)|Lem=I|Len=2
4	_	_	DET	DT	Definite=Def|PronType=Art	5	det	5:det	Entity=(abstract-43(object-45|Lem=_|Len=3
5	_	_	NOUN	NNS	Number=Plur	2	dislocated	2:dislocated	Lem=chunk|Len=6
6	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
7	_	_	NOUN	NN	Number=Sing	5	nmod	5:nmod:of	Entity=(time-46)object-45)|Lem=_|Len=4
8	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	expl	9:expl	Discourse=elaboration:40->39|Entity=(abstract-47)|Lem=_|Len=2
9	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	7:acl:relcl	Lem=take|Len=5
10	_	_	SCONJ	IN	_	13	mark	13:mark	Entity=(abstract-47|Lem=_|Len=3
11	_	_	NOUN	NNS	Number=Plur	13	nsubj	13:nsubj	Entity=(person-48)|Lem=person|Len=6
12	_	_	PART	TO	_	13	mark	13:mark	Lem=_|Len=2
13	_	_	VERB	VB	VerbForm=Inf	9	csubj	9:csubj	Lem=_|Len=7
14	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=2
15	_	_	DET	DT	Number=Plur|PronType=Dem	16	det	16:det	Entity=(abstract-49|Lem=this|Len=5
16	_	_	NOUN	NNS	Number=Plur	13	obl	13:obl:to	Entity=abstract-43)abstract-47)abstract-49)|Lem=thing|Len=6
17	_	_	SYM	SYM	_	2	discourse	2:discourse	Lem=_|Len=3

~~~


