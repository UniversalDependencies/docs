---
layout: base
title:  'Statistics of nmod:npmod in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gumreddit-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_gumreddit-dep-nmod-tmod.html">nmod:tmod</a></tt>.

6 nodes (0%) are attached to their parents as `nmod:npmod`.

3 instances of `nmod:npmod` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66666666666667.

The following 3 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (4; 67% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 17% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:npmod	color:blue
1	_	_	ADJ	JJ	Degree=Pos	2	amod	_	Discourse=elaboration:88->86|Entity=(animal-94|Lem=_|Len=4
2	_	_	NOUN	NNS	Number=Plur	4	nsubj	_	Entity=animal-94)|Lem=specie|Len=7
3	_	_	AUX	MD	VerbForm=Fin	4	aux	_	Lem=_|Len=3
4	_	_	VERB	VB	VerbForm=Inf	0	root	_	Lem=_|Len=4
5	_	_	NOUN	NNS	Number=Plur	7	nmod:npmod	_	Entity=(time-95)|Lem=minute|Len=7
6	_	_	ADP	IN	_	7	case	_	Lem=_|Len=5
7	_	_	NOUN	NN	Number=Sing	4	obl	_	Entity=(event-96)|Lem=_|Len=5|SpaceAfter=No
8	_	_	PUNCT	.	_	4	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod:npmod	color:blue
1	_	_	ADJ	JJ	Degree=Pos	3	amod	_	Discourse=attribution:131->132|Entity=(person-99|Lem=*LOWER*|Len=7
2	_	_	NOUN	NN	Number=Sing	3	compound	_	Entity=(event-2)|Lem=_|Len=6
3	_	_	NOUN	NNS	Number=Plur	5	nsubj	_	Entity=person-99)|Lem=survivor|Len=9
4	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	Lem=_|Len=4
5	_	_	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	Lem=mention|Len=9
6	_	_	AUX	VBG	VerbForm=Ger	10	cop	_	Discourse=background:132->133|Lem=be|Len=5
7	_	_	DET	DT	Definite=Ind|PronType=Art	8	det	_	Lem=_|Len=1
8	_	_	ADJ	JJ	Degree=Pos	9	nmod:npmod	_	Lem=_|Len=6
9	_	_	ADV	RBR	_	10	advmod	_	Lem=_|Len=4
10	_	_	ADJ	JJ	Degree=Pos	5	xcomp	_	Lem=_|Len=9
11	_	_	ADP	IN	_	13	case	_	Lem=_|Len=5
12	_	_	DET	DT	Definite=Def|PronType=Art	13	det	_	Entity=(event-2|Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing	10	obl	_	Entity=event-2)|Lem=_|Len=6|SpaceAfter=No
14	_	_	PUNCT	,	_	18	punct	_	Lem=_|Len=1
15	_	_	ADP	IN	_	16	case	_	Discourse=background:133->124|Lem=_|Len=3
16	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	18	obl	_	Entity=(person-80)|Lem=I|Len=2
17	_	_	NOUN	NNS	Number=Plur	18	nsubj	_	Entity=(abstract-100)|Lem=thing|Len=6
18	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	5	parataxis	_	Lem=sneak|Len=5
19	_	_	ADP	RP	_	18	compound:prt	_	Lem=_|Len=2
20	_	_	CCONJ	CC	_	21	cc	_	Discourse=contrast:134->133|Lem=_|Len=3
21	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	18	conj	_	Lem=_|Len=3
22	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	21	obj	_	Entity=(person-80)|Lem=I|Len=2
23	_	_	ADP	IN	_	25	case	_	Lem=_|Len=2
24	_	_	DET	DT	Definite=Def|PronType=Art	25	det	_	Entity=(abstract-101|Lem=_|Len=3
25	_	_	NOUN	NNS	Number=Plur	21	obl	_	Entity=abstract-101)|Lem=feel|Len=5
26	_	_	ADV	RBR	Degree=Cmp	21	advmod	_	Lem=hard|Len=6
27	_	_	SCONJ	IN	_	28	mark	_	Discourse=antithesis:135->134|Lem=_|Len=4
28	_	_	VERB	VBN	Tense=Past|VerbForm=Part	26	advcl	_	Lem=expect|Len=8|SpaceAfter=No
29	_	_	PUNCT	.	_	5	punct	_	Lem=_|Len=1|SpaceAfter=No
30	_	_	PUNCT	-RRB-	_	5	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nmod:npmod	color:blue
1	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	Discourse=concession:30->32|Entity=(abstract-34(person-35)|Lem=*LOWER*|Len=3
2	_	_	AUX	MD	VerbForm=Fin	3	aux	_	Lem=_|Len=5
3	_	_	VERB	VB	VerbForm=Inf	0	root	_	Lem=_|Len=4
4	_	_	PART	TO	_	5	mark	_	Lem=_|Len=2
5	_	_	VERB	VB	VerbForm=Inf	3	xcomp	_	Lem=_|Len=3
6	_	_	NOUN	NN	Number=Sing	5	iobj	_	Entity=(person-36)|Lem=_|Len=7
7	_	_	CCONJ	CC	_	8	cc	_	Lem=_|Len=2
8	_	_	VERB	VB	VerbForm=Inf	5	conj	_	Lem=_|Len=6
9	_	_	DET	DT	Definite=Ind|PronType=Art	10	det	_	Lem=_|Len=1
10	_	_	NOUN	NN	Number=Sing	11	nmod:npmod	_	Lem=_|Len=3
11	_	_	ADV	RBR	_	8	advmod	_	Lem=_|Len=4
12	_	_	PART	TO	_	14	mark	_	Discourse=purpose:31->30|Lem=_|Len=2
13	_	_	AUX	VB	VerbForm=Inf	14	aux:pass	_	Lem=_|Len=2
14	_	_	VERB	VBN	Tense=Past|VerbForm=Part	5	advcl	_	Entity=abstract-34)|Lem=accommodate|Len=12|SpaceAfter=No
15	_	_	PUNCT	,	_	19	punct	_	Lem=_|Len=1
16	_	_	CCONJ	CC	_	19	cc	_	Discourse=elaboration:32->28|Lem=_|Len=3
17	_	_	NOUN	NN	Number=Sing	19	nsubj	_	Entity=(abstract-6)|Lem=_|Len=7
18	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	aux	_	Lem=have|Len=3
19	_	_	VERB	VBN	Tense=Past|VerbForm=Part	3	conj	_	Lem=deem|Len=6
20	_	_	DET	DT	Number=Sing|PronType=Dem	23	det	_	Entity=(abstract-34|Lem=_|Len=4
21	_	_	ADJ	JJ	Degree=Pos	23	amod	_	Lem=_|Len=5
22	_	_	ADJ	JJ	Degree=Pos	23	amod	_	Lem=_|Len=5
23	_	_	NOUN	NN	Number=Sing	19	obj	_	Entity=abstract-34)|Lem=_|Len=6
24	_	_	ADJ	JJ	Degree=Pos	19	xcomp	_	Lem=_|Len=10|SpaceAfter=No
25	_	_	PUNCT	,	_	30	punct	_	Lem=_|Len=1
26	_	_	SCONJ	IN	_	30	mark	_	Discourse=cause:33->32|Lem=_|Len=7
27	_	_	ADV	RB	_	28	advmod	_	Entity=(person-10|Lem=_|Len=4
28	_	_	ADJ	JJ	Degree=Pos	29	amod	_	Lem=_|Len=3
29	_	_	NOUN	NNS	Number=Plur	30	nsubj	_	Entity=person-10)|Lem=_|Len=6
30	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	19	advcl	_	Lem=_|Len=4
31	_	_	PART	TO	_	33	mark	_	Lem=_|Len=2
32	_	_	AUX	VB	VerbForm=Inf	33	aux:pass	_	Lem=_|Len=2
33	_	_	VERB	VBN	Tense=Past|VerbForm=Part	30	xcomp	_	Lem=accommodate|Len=12|SpaceAfter=No
34	_	_	PUNCT	.	_	3	punct	_	Lem=_|Len=1

~~~


