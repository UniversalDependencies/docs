---
layout: base
title:  'Statistics of compound in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="en_gumreddit-dep-compound-prt.html">compound:prt</a></tt>.

309 nodes (2%) are attached to their parents as `compound`.

308 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70226537216828.

The following 12 pairs of parts of speech are connected with `compound`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (236; 76% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (27; 9% instances), <tt><a href="en_gumreddit-pos-X.html">X</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (12; 4% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (10; 3% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (9; 3% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 compound	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	_	Discourse=evaluation:29->16|Entity=(abstract-34|Lem=*LOWER*|Len=3
2	_	_	ADJ	JJ	Degree=Pos	3	amod	_	Lem=_|Len=4
3	_	_	NOUN	NN	Number=Sing	10	nsubj	_	Lem=_|Len=6
4	_	_	SCONJ	IN	_	6	mark	_	Discourse=antithesis:30->29|Lem=_|Len=4
5	_	_	PRON	DT	Number=Sing|PronType=Dem	6	nsubj	_	Entity=(event-28)|Lem=_|Len=4
6	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	Lem=result|Len=7
7	_	_	ADP	IN	_	8	case	_	Lem=_|Len=2
8	_	_	NOUN	NN	Number=Sing	6	obl	_	Entity=(abstract-35|Lem=_|Len=8
9	_	_	ADJ	JJ	Degree=Pos	8	amod	_	Entity=abstract-34)abstract-35)|Lem=_|Len=9
10	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Discourse=same-unit:31->29|Lem=be|Len=2
11	_	_	SCONJ	IN	_	17	mark	_	Lem=_|Len=7
12	_	_	NOUN	NNS	Number=Plur	17	nsubj	_	Entity=(person-36|Lem=_|Len=6
13	_	_	ADV	RB	_	16	advmod	_	Lem=_|Len=3
14	_	_	ADP	IN	_	16	case	_	Lem=_|Len=4
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	_	Entity=(place-37|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	12	nmod	_	Entity=person-36)place-37)|Lem=_|Len=5
17	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	10	ccomp	_	Lem=_|Len=5
18	_	_	PROPN	NNP	Number=Sing	17	obj	_	Entity=(abstract-27)|Lem=_|Len=3
19	_	_	CCONJ	CC	_	23	cc	_	Discourse=joint:32->31|Lem=_|Len=3
20	_	_	DET	DT	Number=Sing|PronType=Dem	22	det	_	Entity=(object-38|Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	22	compound	_	Lem=_|Len=5
22	_	_	NOUN	NN	Number=Sing	23	nsubj	_	Entity=object-38)|Lem=_|Len=8
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	conj	_	Lem=represent|Len=10
24	_	_	ADJ	JJ	Degree=Pos	25	amod	_	Entity=(abstract-39|Lem=_|Len=9
25	_	_	NOUN	NN	Number=Sing	23	obj	_	Entity=abstract-39)|Lem=_|Len=5|SpaceAfter=No
26	_	_	PUNCT	,	_	28	punct	_	Lem=_|Len=1
27	_	_	ADJ	JJ	Degree=Pos	28	amod	_	Entity=(abstract-40|Lem=_|Len=3
28	_	_	NOUN	NNS	Number=Plur	25	conj	_	Entity=abstract-40)|Lem=asset|Len=6|SpaceAfter=No
29	_	_	PUNCT	,	_	30	punct	_	Lem=_|Len=1
30	_	_	X	FW	_	25	conj	_	Lem=_|Len=4

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 compound	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	3	nsubj:pass	_	Discourse=evaluation:24->16|Entity=(event-22)|Lem=*LOWER*|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	Lem=be|Len=2
3	_	_	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	Lem=relate|Len=7
4	_	_	SCONJ	IN	_	6	mark	_	Discourse=cause:25->24|Lem=_|Len=7
5	_	_	NOUN	NNS	Number=Plur	6	nsubj	_	Entity=(event-28(person-29)|Lem=_|Len=6
6	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	advcl	_	Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	6	obj	_	Entity=(abstract-12)|Lem=_|Len=5
8	_	_	PART	TO	_	9	mark	_	Discourse=purpose:26->25|Lem=_|Len=2
9	_	_	VERB	VB	VerbForm=Inf	6	xcomp	_	Lem=_|Len=3
10	_	_	PROPN	NNP	Number=Sing	11	compound	_	Entity=(abstract-30(place-31)|Lem=_|Len=2
11	_	_	NOUN	NN	Number=Sing	9	obj	_	Entity=abstract-30)|Lem=_|Len=4
12	_	_	PUNCT	:	_	15	punct	_	Discourse=elaboration:27->25|Lem=_|Len=2
13	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	_	Entity=(person-32)|Lem=_|Len=2
14	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	15	aux	_	Lem=be|Len=3
15	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	6	parataxis	_	Lem=loan|Len=7
16	_	_	DET	DT	Definite=Def|PronType=Art	18	det	_	Entity=(organization-23|Lem=_|Len=3
17	_	_	PROPN	NNP	Number=Sing	18	compound	_	Entity=(place-31)|Lem=_|Len=2
18	_	_	NOUN	NN	Number=Sing	15	iobj	_	Entity=organization-23)|Lem=_|Len=4
19	_	_	DET	DT	Definite=Def|PronType=Art	21	det	_	Entity=(abstract-33|Lem=_|Len=3
20	_	_	ADJ	JJ	Degree=Pos	21	amod	_	Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	15	obj	_	Entity=abstract-33)|Lem=_|Len=5
22	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	23	nsubj	_	Discourse=elaboration:28->27|Entity=(organization-23)|Lem=_|Len=2
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl:relcl	_	Entity=event-28)|Lem=print|Len=6|SpaceAfter=No
24	_	_	PUNCT	.	_	3	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 24 compound	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	2	det	_	Discourse=elaboration:90->89|Entity=(abstract-90|Lem=*LOWER*|Len=3
2	_	_	X	FW	_	26	compound	_	Lem=_|Len=2
3	_	_	PUNCT	:	_	2	punct	_	Lem=_|Len=1
4	_	_	X	FW	_	26	compound	_	Lem=_|Len=2
5	_	_	PUNCT	:	_	4	punct	_	Lem=_|Len=1
6	_	_	X	FW	_	26	compound	_	Lem=_|Len=2
7	_	_	PUNCT	:	_	6	punct	_	Lem=_|Len=1
8	_	_	X	FW	_	26	compound	_	Lem=_|Len=2
9	_	_	PUNCT	:	_	8	punct	_	Lem=_|Len=1
10	_	_	X	FW	_	26	compound	_	Lem=_|Len=2
11	_	_	PUNCT	:	_	10	punct	_	Lem=_|Len=1
12	_	_	X	FW	_	26	compound	_	Lem=_|Len=2
13	_	_	PUNCT	:	_	12	punct	_	Lem=_|Len=1
14	_	_	X	FW	_	26	compound	_	Lem=_|Len=2
15	_	_	PUNCT	:	_	14	punct	_	Lem=_|Len=1
16	_	_	X	FW	_	26	compound	_	Lem=_|Len=2
17	_	_	PUNCT	:	_	16	punct	_	Lem=_|Len=1
18	_	_	X	FW	_	26	compound	_	Lem=_|Len=2
19	_	_	PUNCT	:	_	18	punct	_	Lem=_|Len=1
20	_	_	X	FW	_	26	compound	_	Lem=_|Len=2
21	_	_	PUNCT	:	_	20	punct	_	Lem=_|Len=1
22	_	_	X	FW	_	26	compound	_	Lem=_|Len=2
23	_	_	PUNCT	:	_	22	punct	_	Lem=_|Len=1
24	_	_	X	FW	_	26	compound	_	Lem=_|Len=2
25	_	_	PUNCT	:	_	24	punct	_	Lem=_|Len=1
26	_	_	X	FW	_	0	root	_	Entity=abstract-90)|Lem=_|Len=2
27	_	_	PUNCT	-LRB-	_	29	punct	_	Discourse=elaboration:91->90|Lem=_|Len=1|SpaceAfter=No
28	_	_	DET	DT	Definite=Def|PronType=Art	29	det	_	Entity=(abstract-90|Lem=_|Len=3
29	_	_	NUM	CD	NumType=Card	26	appos	_	Entity=abstract-90)|Lem=_|Len=3
30	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	31	nsubj	_	Entity=(person-3)|Lem=_|Len=3
31	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	29	acl:relcl	_	Lem=_|Len=2
32	_	_	ADP	IN	_	34	case	_	Lem=_|Len=2
33	_	_	DET	DT	Definite=Def|PronType=Art	34	det	_	Entity=(abstract-33|Lem=_|Len=3
34	_	_	NOUN	NN	Number=Sing	31	obl	_	Entity=abstract-33)|Lem=_|Len=9|SpaceAfter=No
35	_	_	PUNCT	-RRB-	_	29	punct	_	Lem=_|Len=1|SpaceAfter=No
36	_	_	PUNCT	.	_	26	punct	_	Lem=_|Len=1

~~~


