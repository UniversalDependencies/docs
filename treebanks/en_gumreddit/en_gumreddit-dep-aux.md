---
layout: base
title:  'Statistics of aux in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="en_gumreddit-dep-aux-pass.html">aux:pass</a></tt>.

559 nodes (3%) are attached to their parents as `aux`.

557 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84436493738819.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (503; 90% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (30; 5% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (23; 4% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 aux	color:blue
1	_	_	SCONJ	IN	_	7	mark	_	Entity=(abstract-2|Lem=*LOWER*|Len=2
2	_	_	DET	DT	_	4	det	_	Entity=(place-3|Lem=_|Len=5
3	_	_	ADJ	JJ	Degree=Pos	4	amod	_	Lem=_|Len=5
4	_	_	NOUN	NN	Number=Sing	7	nsubj	_	Entity=place-3)|Lem=_|Len=7
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	Lem=be|Len=2
6	_	_	ADP	IN	_	7	case	_	Lem=_|Len=2
7	_	_	NOUN	NNS	Number=Plur	19	advcl	_	Entity=(abstract-4|Lem=billion|Len=8
8	_	_	PUNCT	-LRB-	_	11	punct	_	Lem=_|Len=1|SpaceAfter=No
9	_	_	SCONJ	IN	_	11	mark	_	Lem=_|Len=2
10	_	_	PART	RB	Polarity=Neg	11	advmod	_	Lem=_|Len=3
11	_	_	NOUN	NNS	Number=Plur	7	acl	_	Lem=trillion|Len=9|SpaceAfter=No
12	_	_	PUNCT	-RRB-	_	11	punct	_	Lem=_|Len=1
13	_	_	ADP	IN	_	14	case	_	Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	7	nmod	_	Entity=abstract-4)|Lem=_|Len=4|SpaceAfter=No
15	_	_	PUNCT	,	_	7	punct	_	Lem=_|Len=1
16	_	_	SCONJ	WRB	PronType=Int	19	obl	_	Lem=_|Len=5
17	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	19	aux	_	Lem=be|Len=3
18	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	_	Entity=(place-3)|Lem=_|Len=4
19	_	_	VERB	VBG	VerbForm=Ger	0	root	_	Lem=borrow|Len=9
20	_	_	ADP	IN	_	16	case	_	Lem=_|Len=4|SpaceAfter=No
21	_	_	PUNCT	.	_	19	punct	_	Entity=abstract-2)|Lem=_|Len=1

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 16 aux	color:blue
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


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 10 aux	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	3	nsubj	_	Entity=(abstract-149)|Lem=*LOWER*|Len=4
2	_	_	ADV	RB	_	3	advmod	_	Lem=_|Len=5
3	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=seem|Len=5
4	_	_	PRON	DT	_	7	obl:npmod	_	Lem=_|Len=3
5	_	_	ADP	IN	_	7	case	_	Lem=_|Len=4
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	_	Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	3	obl	_	Lem=_|Len=5
8	_	_	CCONJ	CC	_	14	cc	_	Lem=_|Len=3
9	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	Entity=(abstract-149)|Lem=_|Len=2
10	_	_	AUX	MD	VerbForm=Fin	14	aux	_	Lem=_|Len=6
11	_	_	AUX	VB	VerbForm=Inf	14	cop	_	Lem=_|Len=2
12	_	_	ADJ	JJ	Degree=Pos	14	amod	_	Entity=(abstract-149|Lem=_|Len=4
13	_	_	NOUN	NN	Number=Sing	14	compound	_	Lem=_|Len=7
14	_	_	NOUN	NN	Number=Sing	3	conj	_	Lem=_|Len=11
15	_	_	ADP	IN	_	16	case	_	Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	14	nmod	_	Entity=(person-150)abstract-149)|Lem=_|Len=7
17	_	_	VERB	VBG	VerbForm=Ger	16	acl	_	Lem=try|Len=6
18	_	_	PART	TO	_	19	mark	_	Lem=_|Len=2
19	_	_	VERB	VB	VerbForm=Inf	17	xcomp	_	Lem=_|Len=10
20	_	_	NOUN	NN	Number=Sing	21	compound	_	Entity=(place-151(abstract-14)|Lem=_|Len=4
21	_	_	NOUN	NNS	Number=Plur	19	obj	_	Entity=place-151)|Lem=market|Len=7
22	_	_	CCONJ	CC	_	23	cc	_	Lem=_|Len=3
23	_	_	NOUN	NN	Number=Sing	21	conj	_	Entity=(abstract-152)|Lem=_|Len=14|SpaceAfter=No
24	_	_	PUNCT	,	_	26	punct	_	Lem=_|Len=1
25	_	_	ADP	IN	_	26	case	_	Lem=_|Len=2
26	_	_	NOUN	NN	Number=Sing	19	obl	_	Lem=_|Len=7|SpaceAfter=No
27	_	_	PUNCT	.	_	3	punct	_	Lem=_|Len=1

~~~


