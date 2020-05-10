---
layout: base
title:  'Statistics of nsubj:pass in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-nsubj.html">nsubj</a></tt>.

71 nodes (0%) are attached to their parents as `nsubj:pass`.

71 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.07042253521127.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (42; 59% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (22; 31% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (4; 6% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
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
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 20 nsubj:pass	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Entity=(person-76)|Lem=_|Len=1
2	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	Lem=_|Len=5
3	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	Entity=(animal-77)|Lem=_|Len=2|SpaceAfter=No
4	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	Lem=be|Len=2
5	_	_	NOUN	NNS	Number=Plur	2	ccomp	_	Entity=(event-78(animal-77)|Lem=coyote|Len=7
6	_	_	PRON	WDT	PronType=Rel	8	nsubj	_	Lem=_|Len=4
7	_	_	AUX	MD	VerbForm=Fin	8	aux	_	Lem=_|Len=4
8	_	_	VERB	VB	VerbForm=Inf	5	acl:relcl	_	Lem=_|Len=4
9	_	_	ADP	IN	_	11	case	_	Lem=_|Len=2
10	_	_	ADJ	JJ	Degree=Pos	11	amod	_	Entity=(time-79|Lem=_|Len=7
11	_	_	NOUN	NNS	Number=Plur	8	obl	_	Entity=time-79)|Lem=time|Len=5
12	_	_	CCONJ	CC	_	13	cc	_	Lem=_|Len=3
13	_	_	VERB	VB	VerbForm=Inf	8	conj	_	Lem=_|Len=6
14	_	_	ADP	IN	_	15	case	_	Lem=_|Len=3
15	_	_	NOUN	NNS	Number=Plur	13	obl	_	Entity=(event-80)|Lem=response|Len=9
16	_	_	PART	TO	_	17	mark	_	Lem=_|Len=2
17	_	_	VERB	VB	VerbForm=Inf	13	advcl	_	Lem=_|Len=6
18	_	_	SCONJ	IN	_	23	mark	_	Lem=_|Len=2
19	_	_	DET	DT	Definite=Ind|PronType=Art	20	det	_	Entity=(place-81|Lem=a|Len=2
20	_	_	NOUN	NN	Number=Sing	23	nsubj:pass	_	Entity=place-81)|Lem=_|Len=4
21	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	aux:pass	_	Lem=be|Len=2
22	_	_	ADV	RB	_	23	advmod	_	Lem=_|Len=4|Typo=Yes
23	_	_	VERB	VBN	Tense=Past|VerbForm=Part	17	advcl	_	Entity=event-78)|Lem=populate|Len=9|SpaceAfter=No|Typo=Yes
24	_	_	PUNCT	.	_	2	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	_	_	PROPN	NNP	Number=Sing	3	nsubj:pass	_	Entity=(abstract-77)|Lem=_|Len=4
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	Lem=get|Len=4
3	_	_	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	Lem=steal|Len=6|SpaceAfter=No
4	_	_	PUNCT	:	_	3	punct	_	Lem=_|Len=1

~~~


