---
layout: base
title:  'Statistics of xcomp in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `xcomp`

This relation is universal.

346 nodes (2%) are attached to their parents as `xcomp`.

344 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.38150289017341.

The following 13 pairs of parts of speech are connected with `xcomp`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (210; 61% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (66; 19% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (33; 10% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (19; 5% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 xcomp	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	3	nsubj:pass	_	Entity=(event-22)|Lem=*LOWER*|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	Lem=be|Len=2
3	_	_	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	Lem=relate|Len=7
4	_	_	SCONJ	IN	_	6	mark	_	Lem=_|Len=7
5	_	_	NOUN	NNS	Number=Plur	6	nsubj	_	Entity=(event-28(person-29)|Lem=_|Len=6
6	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	advcl	_	Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	6	obj	_	Entity=(abstract-12)|Lem=_|Len=5
8	_	_	PART	TO	_	9	mark	_	Lem=_|Len=2
9	_	_	VERB	VB	VerbForm=Inf	6	xcomp	_	Lem=_|Len=3
10	_	_	PROPN	NNP	Number=Sing	11	compound	_	Entity=(abstract-30(place-31)|Lem=_|Len=2
11	_	_	NOUN	NN	Number=Sing	9	obj	_	Entity=abstract-30)|Lem=_|Len=4
12	_	_	PUNCT	:	_	15	punct	_	Lem=_|Len=2
13	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	_	Entity=(person-32)|Lem=_|Len=2
14	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	15	aux	_	Lem=be|Len=3
15	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	6	parataxis	_	Lem=loan|Len=7
16	_	_	DET	DT	Definite=Def|PronType=Art	18	det	_	Entity=(organization-23|Lem=_|Len=3
17	_	_	PROPN	NNP	Number=Sing	18	compound	_	Entity=(place-31)|Lem=_|Len=2
18	_	_	NOUN	NN	Number=Sing	15	iobj	_	Entity=organization-23)|Lem=_|Len=4|Typo=Yes
19	_	_	DET	DT	Definite=Def|PronType=Art	21	det	_	Entity=(abstract-33|Lem=_|Len=3
20	_	_	ADJ	JJ	Degree=Pos	21	amod	_	Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	15	obj	_	Entity=abstract-33)|Lem=_|Len=5
22	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	23	nsubj	_	Entity=(organization-23)|Lem=_|Len=2
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl:relcl	_	Entity=event-28)|Lem=print|Len=6|SpaceAfter=No
24	_	_	PUNCT	.	_	3	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 xcomp	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	Entity=(person-63)|Lem=*LOWER*|Len=4
2	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Lem=print|Len=7
3	_	_	ADV	RB	_	4	advmod	_	Entity=(object-64|Lem=_|Len=2
4	_	_	ADJ	JJ	Degree=Pos	5	amod	_	Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	2	obj	_	Entity=object-64)|Lem=_|Len=5
6	_	_	PUNCT	-LRB-	_	10	punct	_	Lem=_|Len=1|SpaceAfter=No
7	_	_	ADP	IN	_	10	case	_	Lem=_|Len=7
8	_	_	ADJ	JJ	Degree=Pos	10	amod	_	Entity=(abstract-65|Lem=_|Len=6
9	_	_	ADJ	JJ	Degree=Pos	10	amod	_	Lem=_|Len=6
10	_	_	NOUN	NN	Number=Sing	2	obl	_	Lem=_|Len=7
11	_	_	ADP	IN	_	13	case	_	Lem=_|Len=2
12	_	_	DET	DT	Definite=Def|PronType=Art	13	det	_	Entity=(organization-66|Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing	10	nmod	_	Entity=abstract-65)organization-66)|Lem=_|Len=5|SpaceAfter=No|Typo=Yes
14	_	_	PUNCT	-RRB-	_	10	punct	_	Lem=_|Len=1
15	_	_	SCONJ	IN	_	18	mark	_	Lem=_|Len=4
16	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	Entity=(object-64)|Lem=_|Len=2
17	_	_	ADV	RB	_	18	advmod	_	Lem=_|Len=4
18	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	2	advcl	_	Lem=become|Len=6
19	_	_	ADJ	JJ	Degree=Pos	18	xcomp	_	Lem=_|Len=9|SpaceAfter=No
20	_	_	PUNCT	.	_	2	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 30 xcomp	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	_	Entity=(abstract-136|Lem=*LOWER*|Len=3
2	_	_	NUM	CD	NumType=Card	3	nummod	_	Lem=_|Len=3
3	_	_	NOUN	NN	Number=Sing	15	nsubj	_	Lem=_|Len=10
4	_	_	ADP	IN	_	6	case	_	Lem=_|Len=7
5	_	_	NOUN	NN	Number=Sing	6	compound	_	Entity=(object-137|Lem=_|Len=5
6	_	_	NOUN	NN	Number=Sing	3	nmod	_	Entity=object-137)|Lem=_|Len=8
7	_	_	CCONJ	CC	_	8	cc	_	Lem=_|Len=3
8	_	_	NOUN	NN	Number=Sing	6	conj	_	Entity=(substance-98)abstract-136)|Lem=_|Len=4
9	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	Lem=be|Len=2
10	_	_	SCONJ	IN	_	15	mark	_	Entity=(abstract-136|Lem=_|Len=4
11	_	_	SYM	SYM	_	15	nsubj	_	Entity=(object-138|Lem=_|Len=1
12	_	_	NUM	CD	NumType=Card	11	nummod	_	Lem=100000|Len=7
13	_	_	ADP	IN	_	14	case	_	Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	11	nmod	_	Entity=(object-139)object-138)|Lem=_|Len=4
15	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=weigh|Len=6
16	_	_	DET	DT	Definite=Ind|PronType=Art	17	det	_	Lem=_|Len=1
17	_	_	NOUN	NN	Number=Sing	18	obl:npmod	_	Lem=_|Len=3
18	_	_	ADJ	JJR	Degree=Cmp	21	advmod	_	Lem=_|Len=4
19	_	_	ADP	IN	_	18	fixed	_	Lem=_|Len=4
20	_	_	SYM	SYM	_	15	obj	_	Entity=(substance-140|Lem=_|Len=1
21	_	_	NUM	CD	NumType=Card	20	nummod	_	Lem=100000|Len=7
22	_	_	ADP	IN	_	23	case	_	Lem=_|Len=2
23	_	_	NOUN	NN	Number=Sing	20	nmod	_	Entity=(substance-98)substance-140)|Lem=_|Len=4
24	_	_	CCONJ	CC	_	28	cc	_	Lem=_|Len=3
25	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	_	Lem=be|Len=2
26	_	_	DET	DT	Definite=Ind|PronType=Art	27	det	_	Lem=_|Len=1
27	_	_	NOUN	NN	Number=Sing	28	obl:npmod	_	Lem=_|Len=3
28	_	_	ADJ	JJR	Degree=Cmp	15	conj	_	Lem=easy|Len=6
29	_	_	PART	TO	_	30	mark	_	Lem=_|Len=2
30	_	_	VERB	VB	VerbForm=Inf	28	xcomp	_	Lem=_|Len=4
31	_	_	ADV	RB	_	28	advmod	_	Entity=abstract-136)|Lem=_|Len=3|SpaceAfter=No
32	_	_	PUNCT	.	_	15	punct	_	Lem=_|Len=1

~~~


