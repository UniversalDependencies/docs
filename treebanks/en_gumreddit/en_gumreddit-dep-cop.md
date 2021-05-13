---
layout: base
title:  'Statistics of cop in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `cop`

This relation is universal.

471 nodes (3%) are attached to their parents as `cop`.

455 instances of `cop` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.39490445859873.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (212; 45% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (188; 40% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (19; 4% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (19; 4% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (16; 3% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (9; 2% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="en_gumreddit-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cop	color:blue
1	_	_	SCONJ	IN	_	7	mark	7:mark	Discourse=background:2->5|Entity=(abstract-2|Lem=*LOWER*|Len=2
2	_	_	DET	DT	_	4	det	4:det	Entity=(place-3|Lem=_|Len=5
3	_	_	ADJ	JJ	Degree=Pos	4	amod	4:amod	Lem=_|Len=5
4	_	_	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=place-3)|Lem=_|Len=7
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	Lem=be|Len=2
6	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
7	_	_	NOUN	NNS	Number=Plur	19	advcl	19:advcl:if	Entity=(abstract-4|Lem=billion|Len=8
8	_	_	PUNCT	-LRB-	_	11	punct	11:punct	Discourse=antithesis:3->2|Lem=_|Len=1|SpaceAfter=No
9	_	_	SCONJ	IN	_	11	mark	11:mark	Lem=_|Len=2
10	_	_	PART	RB	Polarity=Neg	11	advmod	11:advmod	Lem=_|Len=3
11	_	_	NOUN	NNS	Number=Plur	7	acl	7:acl:if	Lem=trillion|Len=9|SpaceAfter=No
12	_	_	PUNCT	-RRB-	_	11	punct	11:punct	Lem=_|Len=1
13	_	_	ADP	IN	_	14	case	14:case	Discourse=same-unit:4->2|Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	7	nmod	7:nmod:of	Entity=abstract-4)|Lem=_|Len=4|SpaceAfter=No
15	_	_	PUNCT	,	_	7	punct	7:punct	Lem=_|Len=1
16	_	_	SCONJ	WRB	PronType=Int	19	obl	19:obl:from	Discourse=question:5->6|Lem=_|Len=5
17	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	aux	19:aux	Lem=be|Len=3
18	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	19:nsubj	Entity=(place-3)|Lem=_|Len=4
19	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Lem=borrow|Len=9
20	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=4|SpaceAfter=No
21	_	_	PUNCT	.	_	19	punct	19:punct	Entity=abstract-2)|Lem=_|Len=1

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 cop	color:blue
1	_	_	SCONJ	WRB	PronType=Int	3	mark	3:mark	Discourse=condition:15->16|Entity=(event-17|Lem=*LOWER*|Len=4
2	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj	Entity=(person-5)|Lem=_|Len=3
3	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	advcl	9:advcl:when	Lem=_|Len=5
4	_	_	ADJ	JJR	Degree=Cmp	5	amod	5:amod	Entity=(object-18|Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	3	obj	3:obj	Entity=object-18)|Lem=_|Len=5|SpaceAfter=No
6	_	_	PUNCT	,	_	3	punct	3:punct	Lem=_|Len=1
7	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	9	nsubj	9:nsubj	Discourse=joint:16->7|Entity=(person-5)|Lem=_|Len=3
8	_	_	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	aux	9:aux	Lem=be|Len=3
9	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Lem=devalue|Len=9
10	_	_	DET	DT	Definite=Def|PronType=Art	11	det	11:det	Entity=(abstract-19|Lem=_|Len=3
11	_	_	NOUN	NN	Number=Sing	9	obj	9:obj	Lem=_|Len=4
12	_	_	ADP	IN	_	14	case	14:case	Lem=_|Len=2
13	_	_	DET	DT	Definite=Def|PronType=Art	14	det	14:det	Entity=(abstract-20|Lem=_|Len=3
14	_	_	NOUN	NN	Number=Sing	11	nmod	11:nmod:of|17:nsubj	Entity=abstract-20)|Lem=_|Len=8
15	_	_	PRON	WDT	PronType=Rel	17	nsubj	14:ref	Discourse=elaboration:17->16|Lem=_|Len=4
16	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	17:cop	Lem=be|Len=2
17	_	_	ADV	RB	_	14	acl:relcl	14:acl:relcl	Lem=_|Len=7
18	_	_	ADP	IN	_	19	case	19:case	Lem=_|Len=2
19	_	_	NOUN	NN	Number=Sing	17	nmod	17:nmod:in	Entity=(abstract-21)abstract-19)|Lem=_|Len=11|SpaceAfter=No
20	_	_	PUNCT	.	_	9	punct	9:punct	Entity=event-17)|Lem=_|Len=1

~~~


