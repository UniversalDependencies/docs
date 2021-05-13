---
layout: base
title:  'Statistics of compound in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="en_gumreddit-dep-compound-prt.html">compound:prt</a></tt>.

313 nodes (2%) are attached to their parents as `compound`.

313 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.68690095846645.

The following 12 pairs of parts of speech are connected with `compound`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (245; 78% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (27; 9% instances), <tt><a href="en_gumreddit-pos-X.html">X</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (12; 4% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (8; 3% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 compound	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=evaluation:29->16|Entity=(abstract-34|Lem=*LOWER*|Len=3
2	_	_	ADJ	JJ	Degree=Pos	3	amod	3:amod	Lem=_|Len=4
3	_	_	NOUN	NN	Number=Sing	10	nsubj	10:nsubj	Lem=_|Len=6
4	_	_	SCONJ	IN	_	6	mark	6:mark	Discourse=antithesis:30->29|Lem=_|Len=4
5	_	_	PRON	DT	Number=Sing|PronType=Dem	6	nsubj	6:nsubj	Entity=(event-28)|Lem=_|Len=4
6	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	3:acl:relcl	Lem=result|Len=7
7	_	_	ADP	IN	_	8	case	8:case	Lem=_|Len=2
8	_	_	NOUN	NN	Number=Sing	6	obl	6:obl:in	Entity=(abstract-35|Lem=_|Len=8
9	_	_	ADJ	JJ	Degree=Pos	8	amod	8:amod	Entity=abstract-34)abstract-35)|Lem=_|Len=9
10	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Discourse=same-unit:31->29|Lem=be|Len=2
11	_	_	SCONJ	IN	_	17	mark	17:mark	Lem=_|Len=7
12	_	_	NOUN	NNS	Number=Plur	17	nsubj	17:nsubj	Entity=(person-36|Lem=person|Len=6
13	_	_	ADV	RB	Degree=Pos	16	advmod	16:advmod	Lem=_|Len=3
14	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=4
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	16:det	Entity=(place-37|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	12	nmod	12:nmod:over	Entity=person-36)place-37)|Lem=_|Len=5
17	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	10:ccomp	Lem=_|Len=5
18	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	17	obj	17:obj	Entity=(abstract-27)|Lem=_|Len=3
19	_	_	CCONJ	CC	_	23	cc	23:cc	Discourse=joint:32->31|Lem=_|Len=3
20	_	_	DET	DT	Number=Sing|PronType=Dem	22	det	22:det	Bridge=abstract-27<object-38|Entity=(object-38|Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	22	compound	22:compound	Lem=_|Len=5
22	_	_	NOUN	NN	Number=Sing	23	nsubj	23:nsubj	Entity=object-38)|Lem=_|Len=8
23	_	_	VERB	VBZ	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	17	conj	10:ccomp|17:conj:and	Lem=represent|Len=10
24	_	_	ADJ	JJ	Degree=Pos	25	amod	25:amod	Entity=(abstract-39|Lem=_|Len=9
25	_	_	NOUN	NN	Number=Sing	23	obj	23:obj	Entity=abstract-39)|Lem=_|Len=5|SpaceAfter=No
26	_	_	PUNCT	,	_	28	punct	28:punct	Lem=_|Len=1
27	_	_	ADJ	JJ	Degree=Pos	28	amod	28:amod	Entity=(abstract-40|Lem=_|Len=3
28	_	_	NOUN	NNS	Number=Plur	25	conj	23:obj|25:conj	Entity=abstract-40)|Lem=asset|Len=6|SpaceAfter=No
29	_	_	PUNCT	,	_	30	punct	30:punct	Lem=_|Len=1
30	_	_	X	FW	Abbr=Yes	25	conj	23:obj|25:conj	Lem=_|Len=4

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 compound	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	3	nsubj	3:nsubj	Discourse=evaluation:24->16|Entity=(event-22)|Lem=*LOWER*|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	Lem=be|Len=2
3	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=7
4	_	_	SCONJ	IN	_	6	mark	6:mark	Discourse=cause:25->24|Lem=_|Len=7
5	_	_	NOUN	NNS	Number=Plur	6	nsubj	6:nsubj	Entity=(event-28(person-29)|Lem=person|Len=6
6	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	3:advcl:because	Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	6	obj	6:obj|9:nsubj:xsubj	Entity=(abstract-12)|Lem=_|Len=5
8	_	_	PART	TO	_	9	mark	9:mark	Discourse=purpose:26->25|Lem=_|Len=2
9	_	_	VERB	VB	VerbForm=Inf	6	xcomp	6:xcomp	Lem=_|Len=3
10	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	11	compound	11:compound	Entity=(abstract-30(place-31-United_States)|Lem=_|Len=2
11	_	_	NOUN	NN	Number=Sing	9	obj	9:obj	Entity=abstract-30)|Lem=_|Len=4
12	_	_	PUNCT	:	_	15	punct	15:punct	Discourse=elaboration:27->25|Lem=-|Len=2
13	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	15:nsubj	Entity=(person-32)|Lem=_|Len=2|SpaceAfter=No
14	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	15	aux	15:aux	Lem=be|Len=3
15	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	6	parataxis	6:parataxis	Lem=loan|Len=7
16	_	_	DET	DT	Definite=Def|PronType=Art	18	det	18:det	Entity=(organization-23|Lem=_|Len=3
17	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	18	compound	18:compound	Entity=(place-31-United_States)|Lem=_|Len=2
18	_	_	NOUN	NN	Number=Sing	15	iobj	15:iobj	Entity=organization-23)|Lem=government|Len=4
19	_	_	DET	DT	Definite=Def|PronType=Art	21	det	21:det	Bridge=abstract-12<abstract-33|Entity=(abstract-33|Lem=_|Len=3
20	_	_	ADJ	JJ	Degree=Pos	21	amod	21:amod	Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	15	obj	15:obj	Lem=_|Len=5
22	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	23	nsubj	23:nsubj	Discourse=elaboration:28->27|Entity=(organization-23)|Lem=_|Len=2
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl:relcl	21:acl:relcl	Entity=event-28)abstract-33)|Lem=print|Len=6|SpaceAfter=No
24	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 24 compound	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	2	det	2:det	Discourse=elaboration:90->89|Entity=(abstract-89|Lem=*LOWER*|Len=3
2	_	_	X	FW	_	26	compound	26:compound	Lem=_|Len=2
3	_	_	PUNCT	:	_	2	punct	2:punct	Lem=_|Len=1
4	_	_	X	FW	_	26	compound	26:compound	Lem=_|Len=2
5	_	_	PUNCT	:	_	4	punct	4:punct	Lem=_|Len=1
6	_	_	X	FW	_	26	compound	26:compound	Lem=_|Len=2
7	_	_	PUNCT	:	_	6	punct	6:punct	Lem=_|Len=1
8	_	_	X	FW	_	26	compound	26:compound	Lem=_|Len=2
9	_	_	PUNCT	:	_	8	punct	8:punct	Lem=_|Len=1
10	_	_	X	FW	_	26	compound	26:compound	Lem=_|Len=2
11	_	_	PUNCT	:	_	10	punct	10:punct	Lem=_|Len=1
12	_	_	X	FW	_	26	compound	26:compound	Lem=_|Len=2
13	_	_	PUNCT	:	_	12	punct	12:punct	Lem=_|Len=1
14	_	_	X	FW	_	26	compound	26:compound	Lem=_|Len=2
15	_	_	PUNCT	:	_	14	punct	14:punct	Lem=_|Len=1
16	_	_	X	FW	_	26	compound	26:compound	Lem=_|Len=2
17	_	_	PUNCT	:	_	16	punct	16:punct	Lem=_|Len=1
18	_	_	X	FW	_	26	compound	26:compound	Lem=_|Len=2
19	_	_	PUNCT	:	_	18	punct	18:punct	Lem=_|Len=1
20	_	_	X	FW	_	26	compound	26:compound	Lem=_|Len=2
21	_	_	PUNCT	:	_	20	punct	20:punct	Lem=_|Len=1
22	_	_	X	FW	_	26	compound	26:compound	Lem=_|Len=2
23	_	_	PUNCT	:	_	22	punct	22:punct	Lem=_|Len=1
24	_	_	X	FW	_	26	compound	26:compound	Lem=_|Len=2
25	_	_	PUNCT	:	_	24	punct	24:punct	Lem=_|Len=1
26	_	_	X	FW	_	0	root	0:root	Entity=abstract-89)|Lem=_|Len=2
27	_	_	PUNCT	-LRB-	_	29	punct	29:punct	Discourse=elaboration:91->90|Lem=_|Len=1|SpaceAfter=No
28	_	_	DET	DT	Definite=Def|PronType=Art	29	det	29:det	Entity=(abstract-89|Lem=_|Len=3
29	_	_	NOUN	NN	Number=Sing	26	appos	26:appos	Lem=_|Len=3
30	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	31	nsubj	31:nsubj	Entity=(person-3)|Lem=_|Len=3
31	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	29	acl:relcl	29:acl:relcl	Lem=_|Len=2
32	_	_	ADP	IN	_	34	case	34:case	Lem=_|Len=2
33	_	_	DET	DT	Definite=Def|PronType=Art	34	det	34:det	Entity=(abstract-33|Lem=_|Len=3
34	_	_	NOUN	NN	Number=Sing	31	obl	31:obl:on	Entity=abstract-89)abstract-33)|Lem=_|Len=9|SpaceAfter=No
35	_	_	PUNCT	-RRB-	_	29	punct	29:punct	Lem=_|Len=1|SpaceAfter=No
36	_	_	PUNCT	.	_	26	punct	26:punct	Lem=_|Len=1

~~~


