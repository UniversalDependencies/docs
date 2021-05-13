---
layout: base
title:  'Statistics of amod in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `amod`

This relation is universal.

638 nodes (4%) are attached to their parents as `amod`.

629 instances of `amod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41065830721003.

The following 10 pairs of parts of speech are connected with `amod`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (600; 94% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (20; 3% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 amod	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	3	nsubj	3:nsubj|5:nsubj:xsubj	Discourse=attribution:32->33|Entity=(abstract-38(abstract-21)|Lem=*LOWER*|Len=4
2	_	_	AUX	MD	VerbForm=Fin	3	aux	3:aux	Lem=_|Len=5
3	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=4
4	_	_	PART	TO	_	5	mark	5:mark	Lem=_|Len=2
5	_	_	VERB	VB	VerbForm=Inf	3	xcomp	3:xcomp	Lem=_|Len=7
6	_	_	NOUN	NNS	Number=Plur	11	nsubj	11:nsubj	Discourse=joint:33->24|Entity=(person-39)|Lem=parent|Len=7
7	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	aux	11:aux	Lem=be|Len=3
8	_	_	PART	RB	Polarity=Neg	11	advmod	11:advmod	Lem=not|Len=3
9	_	_	PRON	DT	_	10	obl:npmod	10:obl:npmod	Entity=(person-40|Lem=_|Len=3
10	_	_	VERB	VBG	VerbForm=Ger	11	amod	11:amod	Lem=know|Len=7
11	_	_	NOUN	NNS	Number=Plur	5	ccomp	5:ccomp	Entity=abstract-38)person-40)|Lem=genius|Len=8|SpaceAfter=No
12	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	_	_	ADJ	JJ	Degree=Pos	2	amod	2:amod	Discourse=preparation:122->123|Entity=(abstract-138-xkcd|Lem=*LOWER*|Len=8
2	_	_	PROPN	NNP	Number=Sing	0	root	0:root	Entity=abstract-138-xkcd)|Lem=_|Len=4

~~~


