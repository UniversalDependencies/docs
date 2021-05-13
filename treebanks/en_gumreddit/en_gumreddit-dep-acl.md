---
layout: base
title:  'Statistics of acl in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="en_gumreddit-dep-acl-relcl.html">acl:relcl</a></tt>.

133 nodes (1%) are attached to their parents as `acl`.

121 instances of `acl` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.88721804511278.

The following 11 pairs of parts of speech are connected with `acl`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (105; 79% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (6; 5% instances), <tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (6; 5% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 acl	color:blue
1	_	_	CCONJ	CC	_	22	cc	22:cc	Discourse=antithesis:93->98|Lem=*LOWER*|Len=3
2	_	_	SCONJ	IN	_	4	mark	4:mark	Discourse=circumstance:94->95|Lem=_|Len=2
3	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	4:nsubj	Entity=(person-74)|Lem=_|Len=2
4	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	10	advcl	10:advcl:as	Lem=grow|Len=4
5	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
6	_	_	DET	DT	Definite=Ind|PronType=Art	7	det	7:det	Entity=(place-89|Lem=_|Len=1
7	_	_	NOUN	NN	Number=Sing	4	obl	4:obl:as	Entity=place-89)|Lem=_|Len=6|SpaceAfter=No
8	_	_	PUNCT	,	_	4	punct	4:punct	Lem=_|Len=1
9	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	10:nsubj	Discourse=same-unit:95->93|Entity=(event-90(person-74)|Lem=_|Len=2
10	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	Lem=run|Len=3
11	_	_	ADP	RP	_	10	compound:prt	10:compound:prt	Lem=_|Len=3
12	_	_	ADP	IN	_	13	case	13:case	Lem=_|Len=2
13	_	_	NOUN	NN	Number=Sing	10	obl	10:obl:of	Entity=(substance-88)|Lem=_|Len=4
14	_	_	PART	TO	_	15	mark	15:mark	Discourse=purpose:96->95|Lem=_|Len=2
15	_	_	VERB	VB	VerbForm=Inf	13	acl	13:acl:to	Lem=_|Len=4
16	_	_	DET	DT	_	17	det	17:det	Entity=(object-86|Lem=_|Len=5
17	_	_	NOUN	NN	Number=Sing	15	obj	15:obj	Entity=object-86)|Lem=_|Len=6
18	_	_	ADP	IN	_	15	obl	15:obl	Entity=event-90)|Lem=_|Len=4
19	_	_	CCONJ	CC	_	22	cc	22:cc	Discourse=evaluation:97->93|Lem=_|Len=3
20	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	22	nsubj	22:nsubj|24:nsubj:xsubj	Entity=(event-90)|Lem=_|Len=2
21	_	_	ADV	RB	_	22	advmod	22:advmod	Lem=_|Len=4
22	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	10	conj	10:conj:but	Lem=become|Len=6
23	_	_	DET	DT	Definite=Ind|PronType=Art	24	det	24:det	Entity=(event-90|Lem=_|Len=1
24	_	_	NOUN	NN	Number=Sing	22	xcomp	22:xcomp	Entity=event-90)|Lem=_|Len=9
25	_	_	PART	TO	_	26	mark	26:mark	Lem=_|Len=2
26	_	_	VERB	VB	VerbForm=Inf	24	acl	24:acl:to	Lem=_|Len=6|SpaceAfter=No
27	_	_	PUNCT	.	_	10	punct	10:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 acl	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl	color:blue
1	_	_	DET	DT	_	3	det	3:det	Discourse=restatement:6->5|Entity=(abstract-6|Lem=*LOWER*|Len=5
2	_	_	NOUN	NN	Number=Sing	3	compound	3:compound	Entity=(abstract-7)|Lem=_|Len=9
3	_	_	NOUN	NN	Number=Sing	15	nsubj:pass	15:nsubj:pass	Lem=_|Len=7
4	_	_	ADP	IN	_	5	case	5:case	Discourse=elaboration:7->6|Lem=_|Len=5
5	_	_	SCONJ	WRB	PronType=Int	3	nmod	3:nmod:about	Lem=_|Len=3
6	_	_	PART	TO	_	7	mark	7:mark	Lem=_|Len=2
7	_	_	VERB	VB	VerbForm=Inf	5	acl	5:acl:to	Lem=_|Len=4
8	_	_	SCONJ	WRB	PronType=Int	12	mark	12:mark	Discourse=circumstance:8->7|Lem=_|Len=4
9	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	12	nsubj	12:nsubj	Entity=(person-8)|Lem=_|Len=3
10	_	_	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	12	cop	12:cop	Lem=be|Len=3
11	_	_	DET	DT	Definite=Ind|PronType=Art	12	det	12:det	Entity=(person-8|Lem=a|Len=2
12	_	_	NOUN	NN	Number=Sing	7	advcl	7:advcl:when	Entity=abstract-6)person-8)|Lem=_|Len=9
13	_	_	AUX	MD	VerbForm=Fin	15	aux	15:aux	Discourse=same-unit:9->6|Lem=_|Len=3
14	_	_	AUX	VB	VerbForm=Inf	15	aux:pass	15:aux:pass	Lem=_|Len=2
15	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	Lem=summarize|Len=10
16	_	_	ADP	IN	_	20	case	20:case	Lem=_|Len=2
17	_	_	PUNCT	``	_	20	punct	20:punct	Lem=''|Len=1|SpaceAfter=No
18	_	_	AUX	VB	VerbForm=Inf	20	cop	20:cop	Lem=_|Len=2
19	_	_	DET	DT	Definite=Ind|PronType=Art	20	det	20:det	Entity=(person-9|Lem=a|Len=2
20	_	_	NOUN	NN	Number=Sing	15	advcl	15:advcl	Entity=person-9)|Lem=_|Len=9|SpaceAfter=No
21	_	_	PUNCT	''	_	20	punct	20:punct	Lem=''|Len=1|SpaceAfter=No
22	_	_	PUNCT	.	_	15	punct	15:punct	Lem=_|Len=1

~~~


