---
layout: base
title:  'Statistics of ccomp in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `ccomp`

This relation is universal.

289 nodes (2%) are attached to their parents as `ccomp`.

284 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.10726643598616.

The following 18 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (189; 65% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (28; 10% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (28; 10% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (12; 4% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (9; 3% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (6; 2% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 17 ccomp	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	_	Entity=(abstract-34|Lem=*LOWER*|Len=3
2	_	_	ADJ	JJ	Degree=Pos	3	amod	_	Lem=_|Len=4
3	_	_	NOUN	NN	Number=Sing	10	nsubj	_	Entity=abstract-34)|Lem=_|Len=6
4	_	_	SCONJ	IN	_	6	mark	_	Lem=_|Len=4
5	_	_	PRON	DT	Number=Sing|PronType=Dem	6	nsubj	_	Entity=(event-28)|Lem=_|Len=4
6	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	Lem=result|Len=7
7	_	_	ADP	IN	_	8	case	_	Lem=_|Len=2
8	_	_	NOUN	NN	Number=Sing	6	obl	_	Entity=(abstract-35|Lem=_|Len=8
9	_	_	ADJ	JJ	Degree=Pos	8	amod	_	Entity=abstract-35)|Lem=_|Len=9
10	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=be|Len=2
11	_	_	SCONJ	IN	_	17	mark	_	Lem=_|Len=7
12	_	_	NOUN	NNS	Number=Plur	17	nsubj	_	Entity=(person-36|Lem=_|Len=6
13	_	_	ADV	RB	_	16	advmod	_	Lem=_|Len=3
14	_	_	ADP	IN	_	16	case	_	Lem=_|Len=4
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	_	Entity=(place-37|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	12	nmod	_	Entity=person-36)place-37)|Lem=_|Len=5
17	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	10	ccomp	_	Lem=_|Len=5
18	_	_	PROPN	NNP	Number=Sing	17	obj	_	Entity=(abstract-27)|Lem=_|Len=3
19	_	_	CCONJ	CC	_	23	cc	_	Lem=_|Len=3
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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 17 ccomp	color:blue
1	_	_	ADV	RB	_	2	advmod	_	Lem=*LOWER*|Len=2
2	_	_	ADV	RB	Degree=Pos	13	advmod	_	Lem=_|Len=4
3	_	_	SCONJ	IN	_	5	mark	_	Lem=_|Len=2
4	_	_	NOUN	NNS	Number=Plur	5	nsubj	_	Entity=(person-130)|Lem=_|Len=6
5	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	_	Lem=_|Len=8
6	_	_	PART	TO	_	7	mark	_	Lem=_|Len=2
7	_	_	VERB	VB	VerbForm=Inf	5	xcomp	_	Lem=_|Len=5
8	_	_	NOUN	NNS	Number=Plur	7	obj	_	Entity=(object-86)|Lem=dollar|Len=7|SpaceAfter=No
9	_	_	PUNCT	,	_	2	punct	_	Lem=_|Len=1
10	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	Entity=(abstract-131(abstract-132)|Lem=_|Len=2
11	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	Lem=do|Len=4|SpaceAfter=No
12	_	_	PART	RB	Polarity=Neg	13	advmod	_	Lem=not|Len=3
13	_	_	VERB	VB	VerbForm=Inf	0	root	_	Lem=_|Len=6
14	_	_	PRON	WP	PronType=Int	17	xcomp	_	Entity=(abstract-132|Lem=_|Len=4
15	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	17	nsubj	_	Entity=(object-86)|Lem=_|Len=2|SpaceAfter=No
16	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	Lem=be|Len=2
17	_	_	ADJ	JJ	Degree=Pos	13	ccomp	_	Entity=abstract-132)|Lem=_|Len=5|SpaceAfter=No
18	_	_	PUNCT	,	_	25	punct	_	Lem=_|Len=1
19	_	_	ADP	IN	_	25	case	_	Lem=_|Len=4
20	_	_	DET	DT	_	25	det	_	Entity=(abstract-133|Lem=_|Len=4
21	_	_	ADJ	JJ	Degree=Pos	25	amod	_	Lem=_|Len=7
22	_	_	NOUN	NN	Number=Sing	25	compound	_	Entity=(abstract-134)|Lem=_|Len=6
23	_	_	CCONJ	CC	_	24	cc	_	Lem=_|Len=3
24	_	_	NOUN	NN	Number=Sing	22	conj	_	Entity=(abstract-135)|Lem=_|Len=6
25	_	_	NOUN	NNS	Number=Plur	13	obl	_	Entity=abstract-131)abstract-133)|Lem=law|Len=4|SpaceAfter=No
26	_	_	PUNCT	.	_	13	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 22 ccomp	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Entity=(person-11)|Lem=_|Len=1
2	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	Lem=_|Len=4
3	_	_	DET	DT	Definite=Ind|PronType=Art	5	det	_	Entity=(abstract-12|Lem=_|Len=1
4	_	_	ADJ	JJ	Degree=Pos	5	amod	_	Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	2	obj	_	Entity=abstract-12)|Lem=_|Len=6
6	_	_	PUNCT	-LRB-	_	9	punct	_	Lem=_|Len=1|SpaceAfter=No
7	_	_	DET	DT	_	9	det	_	Entity=(abstract-12|Lem=_|Len=7
8	_	_	PROPN	NNP	Number=Sing	9	compound	_	Entity=(place-13)|Lem=_|Len=6
9	_	_	NOUN	NN	Number=Sing	5	appos	_	Entity=abstract-12)|Lem=_|Len=7|SpaceAfter=No
10	_	_	PUNCT	-RRB-	_	9	punct	_	Lem=_|Len=1
11	_	_	PRON	WDT	PronType=Rel	12	nsubj	_	Lem=_|Len=5
12	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	5	acl:relcl	_	Lem=state|Len=6
13	_	_	SCONJ	IN	_	22	mark	_	Lem=_|Len=4
14	_	_	NOUN	NNS	Number=Plur	17	nsubj	_	Entity=(animal-7)|Lem=panda|Len=6
15	_	_	AUX	VBG	VerbForm=Ger	17	cop	_	Lem=be|Len=5
16	_	_	ADV	RB	_	17	advmod	_	Lem=_|Len=11
17	_	_	ADJ	JJ	Degree=Pos	22	csubj	_	Lem=_|Len=4
18	_	_	SCONJ	IN	_	19	mark	_	Lem=_|Len=2
19	_	_	VERB	VBG	VerbForm=Ger	17	advcl	_	Entity=(event-14)|Lem=reproduce|Len=11
20	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	cop	_	Lem=be|Len=2
21	_	_	DET	DT	Definite=Ind|PronType=Art	22	det	_	Entity=(abstract-15|Lem=_|Len=1
22	_	_	NOUN	NN	Number=Sing	12	ccomp	_	Entity=abstract-15)|Lem=_|Len=4|SpaceAfter=No
23	_	_	PUNCT	.	_	2	punct	_	Lem=_|Len=1

~~~


