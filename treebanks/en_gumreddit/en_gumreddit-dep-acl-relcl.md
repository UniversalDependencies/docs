---
layout: base
title:  'Statistics of acl:relcl in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-acl.html">acl</a></tt>.

212 nodes (1%) are attached to their parents as `acl:relcl`.

212 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.91509433962264.

The following 15 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (162; 76% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (10; 5% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (9; 4% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (7; 3% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (6; 3% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 acl:relcl	color:blue
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
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 acl:relcl	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Entity=(person-8)|Lem=_|Len=1|SpaceAfter=No
2	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	Lem=be|Len=2
3	_	_	ADJ	JJ	Degree=Pos	0	root	_	Lem=_|Len=4
4	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	Entity=(object-58)|Lem=_|Len=2|SpaceAfter=No
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	Lem=be|Len=2
6	_	_	ADV	RB	_	7	advmod	_	Lem=_|Len=6
7	_	_	ADJ	JJ	Degree=Pos	3	ccomp	_	Lem=_|Len=12|SpaceAfter=No
8	_	_	PUNCT	,	_	10	punct	_	Lem=_|Len=1
9	_	_	CCONJ	CC	_	10	cc	_	Lem=_|Len=3
10	_	_	VERB	VB	VerbForm=Inf	3	conj	_	Lem=come|Len=3|Typo=Yes
11	_	_	ADP	RP	_	10	compound:prt	_	Lem=_|Len=2|SpaceAfter=No|Typo=Yes
12	_	_	PUNCT	:	_	16	punct	_	Lem=_|Len=3
13	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	16	nsubj	_	Entity=(object-58)|Lem=_|Len=2
14	_	_	AUX	MD	VerbForm=Fin	16	aux	_	Lem=_|Len=2|SpaceAfter=No
15	_	_	PART	RB	Polarity=Neg	16	advmod	_	Lem=not|Len=3
16	_	_	VERB	VB	VerbForm=Inf	3	parataxis	_	Lem=_|Len=4
17	_	_	ADV	RBR	_	20	advmod	_	Entity=(abstract-60|Lem=_|Len=4
18	_	_	ADP	IN	_	17	fixed	_	Lem=_|Len=4
19	_	_	DET	DT	Definite=Ind|PronType=Art	20	det	_	Entity=(quantity-61|Lem=_|Len=1
20	_	_	NOUN	NN	Number=Sing	16	obj	_	Entity=quantity-61)|Lem=_|Len=8
21	_	_	ADP	IN	_	22	case	_	Lem=_|Len=2
22	_	_	PRON	WP	PronType=Int	20	nmod	_	Entity=(object-62|Lem=_|Len=4|SpaceAfter=No
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	acl:relcl	_	Lem=be|Len=2
24	_	_	ADP	IN	_	26	case	_	Lem=_|Len=2
25	_	_	DET	DT	Definite=Def|PronType=Art	26	det	_	Entity=(place-63|Lem=_|Len=3
26	_	_	NOUN	NN	Number=Sing	23	obl	_	Entity=abstract-60)object-62)place-63)|Lem=_|Len=11|SpaceAfter=No
27	_	_	PUNCT	.	_	3	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 18 acl:relcl	color:blue
1	_	_	SCONJ	IN	_	3	mark	_	Lem=*LOWER*|Len=2
2	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	Entity=(person-5)|Lem=_|Len=3
3	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	12	advcl	_	Lem=_|Len=3
4	_	_	DET	DT	Definite=Ind|PronType=Art	6	det	_	Entity=(object-41|Lem=_|Len=1
5	_	_	NOUN	NN	Number=Sing	6	compound	_	Lem=_|Len=8
6	_	_	NOUN	NN	Number=Sing	3	obj	_	Lem=_|Len=4
7	_	_	ADP	IN	_	8	case	_	Lem=_|Len=2
8	_	_	PROPN	NNP	Number=Sing	6	nmod	_	Entity=(person-42|Lem=_|Len=5
9	_	_	PROPN	NNP	Number=Sing	8	flat	_	Entity=object-41)person-42)|Lem=_|Len=4|SpaceAfter=No
10	_	_	PUNCT	,	_	3	punct	_	Lem=_|Len=1
11	_	_	PRON	EX	_	12	expl	_	Lem=_|Len=5
12	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=be|Len=2
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	_	Lem=_|Len=1
14	_	_	NOUN	NN	Number=Sing	12	nsubj	_	Lem=_|Len=6
15	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	Entity=(object-41)|Lem=_|Len=2
16	_	_	AUX	MD	VerbForm=Fin	18	aux	_	Lem=_|Len=5
17	_	_	AUX	VB	VerbForm=Inf	18	cop	_	Lem=_|Len=2
18	_	_	ADJ	JJ	Degree=Pos	14	acl:relcl	_	Lem=_|Len=5
19	_	_	DET	DT	Definite=Ind|PronType=Art	20	det	_	Entity=(abstract-43|Lem=_|Len=1
20	_	_	NOUN	NN	Number=Sing	18	xcomp	_	Lem=_|Len=3
21	_	_	ADP	IN	_	22	case	_	Lem=_|Len=2
22	_	_	NOUN	NN	Number=Sing	20	nmod	_	Entity=abstract-43)|Lem=_|Len=5|SpaceAfter=No
23	_	_	PUNCT	.	_	12	punct	_	Lem=_|Len=1

~~~


