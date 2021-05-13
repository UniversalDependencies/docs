---
layout: base
title:  'Statistics of nmod:tmod in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="en_gumreddit-dep-nmod-poss.html">nmod:poss</a></tt>.

11 nodes (0%) are attached to their parents as `nmod:tmod`.

9 instances of `nmod:tmod` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.45454545454545.

The following 5 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (7; 64% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 9% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 nmod:tmod	color:blue
1	_	_	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=preparation:127->128|Lem=*LOWER*|Len=4
2	_	_	ADP	IN	_	3	case	3:case	Lem=_|Len=2
3	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	obl	1:obl:at	Entity=(event-119)|Lem=_|Len=2
4	_	_	DET	DT	Number=Sing|PronType=Dem	5	det	5:det	Entity=(abstract-132|Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	1	obl:npmod	1:obl:npmod	Entity=abstract-132)|Lem=_|Len=3|SpaceAfter=No
6	_	_	PUNCT	,	_	10	punct	10:punct	Lem=_|Len=1
7	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nsubj	10:nsubj|22:nsubj	Discourse=justify:128->124|Entity=(abstract-132(time-133)|Lem=_|Len=2
8	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	10	cop	10:cop	Lem=be|Len=1
9	_	_	NUM	CD	NumForm=Digit|NumType=Card	10	nummod	10:nummod	Entity=(time-133|Lem=_|Len=1
10	_	_	NOUN	NNS	Number=Plur	1	parataxis	1:parataxis	Lem=second|Len=7
11	_	_	ADP	IN	_	13	case	13:case	Lem=_|Len=2
12	_	_	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	13	nmod:poss	13:nmod:poss	Entity=(person-36)|Lem=_|Len=4
13	_	_	NOUN	NN	Number=Sing|Typo=Yes	10	nmod	10:nmod:of	Entity=time-133)|Lem=_|Len=4|SpaceAfter=No
14	_	_	PUNCT	,	_	22	punct	22:punct	Lem=_|Len=1|SpaceAfter=No
15	_	_	CCONJ	CC	Typo=Yes	22	cc	22:cc	Discourse=contrast:129->128|Lem=_|Len=3
16	_	_	ADV	RB	Degree=Pos	22	advmod	22:advmod	Lem=_|Len=8
17	_	_	DET	DT	Definite=Ind|PronType=Art|Typo=Yes	22	det	22:det	Entity=(abstract-134|Lem=_|Len=1
18	_	_	ADJ	JJ	Degree=Pos|Typo=Yes	19	amod	19:amod	Lem=_|Len=8
19	_	_	NOUN	NNS	Number=Plur|Typo=Yes	21	nmod:tmod	21:nmod:tmod	Lem=time|Len=5
20	_	_	DET	DT	Definite=Ind|PronType=Art|Typo=Yes	21	det	21:det	Entity=(time-135|Lem=_|Len=1
21	_	_	NOUN	NN	Number=Sing	22	compound	22:compound	Entity=time-135)|Lem=_|Len=3
22	_	_	NOUN	NN	Number=Sing	10	conj	10:conj:but	Entity=abstract-134)|Lem=_|Len=5
23	_	_	DET	DT	Number=Sing|PronType=Dem|Typo=Yes	25	det	25:det	Entity=(person-136|Lem=_|Len=4
24	_	_	ADJ	JJ	Degree=Pos|Typo=Yes	25	amod	25:amod	Lem=_|Len=24
25	_	_	NOUN	NN	Number=Sing	22	dep	22:dep	Lem=_|Len=5
26	_	_	ADP	IN	_	27	case	27:case	Lem=_|Len=2
27	_	_	PROPN	NNP	Number=Sing	25	nmod	25:nmod:at	Entity=(place-120)abstract-132)person-136)|Lem=_|Len=9|SpaceAfter=No
28	_	_	PUNCT	.	_	1	punct	1:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 nmod:tmod	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=justify:31->32|Entity=(person-29)|Lem=_|Len=1
2	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=_|Len=6
3	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	4:nmod:poss	Entity=(person-35(person-29)|Lem=_|Len=2
4	_	_	NOUN	NN	Number=Sing	2	obj	2:obj	Entity=person-35)|Lem=_|Len=6
5	_	_	SCONJ	IN	_	8	mark	8:mark	Discourse=justify:32->23|Lem=_|Len=4
6	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	expl	8:expl	Entity=(event-36)|Lem=_|Len=2
7	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	Lem=be|Len=2
8	_	_	ADJ	JJ	Degree=Pos	2	ccomp	2:ccomp	Lem=_|Len=10
9	_	_	PART	TO	_	10	mark	10:mark	Entity=(event-36|Lem=_|Len=2
10	_	_	VERB	VB	VerbForm=Inf	8	csubj	8:csubj	Lem=_|Len=6
11	_	_	ADP	IN	_	12	case	12:case	Lem=_|Len=2
12	_	_	ADJ	JJS	Degree=Sup	14	advmod	14:advmod	Lem=_|Len=5
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Lem=_|Len=1
14	_	_	ADJ	JJ	Degree=Pos	10	obj	10:obj	Lem=_|Len=3
15	_	_	DET	DT	Definite=Ind|PronType=Art	16	det	16:det	Entity=(time-37|Lem=_|Len=1
16	_	_	NOUN	NN	Number=Sing	14	nmod:tmod	14:nmod:tmod	Entity=event-36)time-37)|Lem=_|Len=4
17	_	_	ADP	IN	_	19	case	19:case	Lem=_|Len=3
18	_	_	DET	DT	Number=Plur|PronType=Dem|Typo=Yes	19	det	19:det	Entity=(abstract-38|Lem=this|Len=5
19	_	_	NOUN	NN	Number=Sing	10	obl	10:obl:for	Entity=abstract-38)|Lem=_|Len=7
20	_	_	SCONJ	IN	_	21	mark	21:mark	Discourse=elaboration:33->32|Lem=_|Len=2
21	_	_	VERB	VBG	VerbForm=Ger	19	acl	19:acl:of	Lem=network|Len=10
22	_	_	CCONJ	CC	_	23	cc	23:cc	Discourse=attribution:34->35|Lem=_|Len=3
23	_	_	VERB	VBG	VerbForm=Ger	21	conj	19:acl:of|21:conj:and	Lem=remind|Len=9
24	_	_	NOUN	NNS	Number=Plur	23	obj	23:obj	Entity=(person-39)|Lem=person|Len=6
25	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	26	nsubj	26:nsubj	Discourse=joint:35->33|Entity=(person-29)|Lem=_|Len=1
26	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	23	ccomp	23:ccomp	Lem=_|Len=5|SpaceAfter=No
27	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 27 nmod:tmod	color:blue
1	_	_	DET	DT	Polarity=Neg	2	det	2:det	Discourse=concession:159->160|Entity=(person-185|Lem=*LOWER*|Len=2
2	_	_	NOUN	NN	Number=Sing	3	nsubj	3:nsubj|8:nsubj	Entity=person-185)|Lem=_|Len=3
3	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=go|Len=4
4	_	_	ADP	IN	_	6	case	6:case	Lem=_|Len=2
5	_	_	DET	DT	_	6	det	6:det	Entity=(event-186|Lem=_|Len=5
6	_	_	NOUN	NN	Number=Sing	3	obl	3:obl:to	Entity=event-186)|Lem=_|Len=5
7	_	_	CCONJ	CC	_	8	cc	8:cc	Discourse=elaboration:160->158|Lem=_|Len=3
8	_	_	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	3	conj	3:conj:but	Lem=_|Len=4
9	_	_	DET	DT	Definite=Ind|PronType=Art	10	det	10:det	Entity=(abstract-187|Lem=_|Len=1
10	_	_	NOUN	NN	Number=Sing	8	obj	8:obj|12:nsubj	Lem=_|Len=8
11	_	_	PRON	WDT	PronType=Rel	12	nsubj	10:ref	Discourse=elaboration:161->160|Lem=_|Len=4
12	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	acl:relcl	10:acl:relcl	Lem=fit|Len=4
13	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=4
14	_	_	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	16	nmod:poss	16:nmod:poss	Entity=(abstract-188(person-136)|Lem=_|Len=4
15	_	_	ADJ	JJ	Degree=Pos	16	amod	16:amod	Lem=_|Len=5
16	_	_	NOUN	NNS	Number=Plur	12	obl	12:obl:with	Entity=abstract-187)abstract-188)|Lem=obligation|Len=11
17	_	_	CCONJ	CC	_	18	cc	18:cc	Discourse=attribution:162->163|Lem=_|Len=3
18	_	_	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	8	conj	3:conj|8:conj:and	Lem=_|Len=3
19	_	_	SCONJ	IN	_	22	mark	22:mark	Discourse=joint:163->160|Lem=_|Len=2
20	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	22	nsubj	22:nsubj	Entity=(person-136)|Lem=_|Len=3
21	_	_	AUX	MD	VerbForm=Fin	22	aux	22:aux	Lem=_|Len=3
22	_	_	VERB	VB	VerbForm=Inf	18	ccomp	18:ccomp	Lem=_|Len=4
23	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	22	obj	22:obj	Lem=_|Len=2
24	_	_	ADP	IN	_	25	case	25:case	Lem=_|Len=2
25	_	_	NUM	CD	NumForm=Word|NumType=Card	22	obl	22:obl:to	Bridge=event-186<event-190|Entity=(abstract-189(event-190)|Lem=_|Len=3
26	_	_	DET	DT	Definite=Ind|PronType=Art	27	det	27:det	Entity=(time-191|Lem=_|Len=1
27	_	_	NOUN	NN	Number=Sing	25	nmod:tmod	25:nmod:tmod	Entity=abstract-189)time-191)|Lem=_|Len=5
28	_	_	CCONJ	CC	_	29	cc	29:cc	Lem=_|Len=2
29	_	_	NOUN	NN	Number=Sing	25	conj	22:obl:to|25:conj:or	Entity=(abstract-192|Lem=_|Len=9
30	_	_	ADP	IN	_	31	case	31:case	Lem=_|Len=4
31	_	_	PRON	DT	Number=Sing|PronType=Dem	29	nmod	29:nmod:like	Entity=(abstract-189)abstract-192)|Lem=_|Len=4|SpaceAfter=No
32	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


