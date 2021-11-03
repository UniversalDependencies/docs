---
layout: base
title:  'Statistics of aux in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="en_gumreddit-dep-aux-pass.html">aux:pass</a></tt>.

566 nodes (3%) are attached to their parents as `aux`.

565 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84805653710247.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (510; 90% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (30; 5% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (24; 4% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 aux	color:blue
1	_	_	SCONJ	IN	_	7	mark	7:mark	Discourse=background:2->5:0|Entity=(abstract-2-new-19-disc|Lem=*LOWER*|Len=2
2	_	_	DET	DT	_	4	det	4:det	Entity=(place-3-new-3-coref|Lem=_|Len=5
3	_	_	ADJ	JJ	Degree=Pos	4	amod	4:amod	Lem=_|Len=5
4	_	_	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=3)|Lem=_|Len=7
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	Lem=be|Len=2
6	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
7	_	_	NOUN	NNS	Number=Plur	19	advcl	19:advcl:if	Entity=(abstract-4-new-1-sgl|Lem=billion|Len=8
8	_	_	PUNCT	-LRB-	_	11	punct	11:punct	Discourse=antithesis:3->2:0|Lem=_|Len=1|SpaceAfter=No
9	_	_	SCONJ	IN	_	11	mark	11:mark	Lem=_|Len=2
10	_	_	PART	RB	Polarity=Neg	11	advmod	11:advmod	Lem=_|Len=3
11	_	_	NOUN	NNS	Number=Plur	7	acl	7:acl:if	Lem=trillion|Len=9|SpaceAfter=No
12	_	_	PUNCT	-RRB-	_	11	punct	11:punct	Lem=_|Len=1
13	_	_	ADP	IN	_	14	case	14:case	Discourse=same-unit_m:4->2:1|Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	7	nmod	7:nmod:of	Entity=4)|Lem=_|Len=4|SpaceAfter=No
15	_	_	PUNCT	,	_	7	punct	7:punct	Lem=_|Len=1
16	_	_	SCONJ	WRB	PronType=Int	19	obl	19:obl:from	Discourse=question:5->6:0|Lem=_|Len=5
17	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	aux	19:aux	Lem=be|Len=3
18	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	19:nsubj	Entity=(place-3-giv:act-1-ana)|Lem=_|Len=4
19	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Lem=borrow|Len=9
20	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=4|SpaceAfter=No
21	_	_	PUNCT	.	_	19	punct	19:punct	Entity=2)|Lem=_|Len=1

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 16 aux	color:blue
1	_	_	SCONJ	IN	_	3	mark	3:mark	Discourse=condition:33->34:1|Lem=*LOWER*|Len=2
2	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj	Entity=(person-5-giv:inact-1-ana)|Lem=_|Len=3
3	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	12	advcl	12:advcl:if	Lem=_|Len=3
4	_	_	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	Entity=(object-41-new-3,6-coref|Lem=_|Len=1
5	_	_	NOUN	NN	Number=Sing	6	compound	6:compound	Lem=_|Len=8
6	_	_	NOUN	NN	Number=Sing	3	obj	3:obj	Lem=_|Len=4
7	_	_	ADP	IN	_	8	case	8:case	Lem=_|Len=2
8	_	_	PROPN	NNP	Number=Sing	6	nmod	6:nmod:of	Entity=(person-42-new-1,2-coref-Sammy_Sosa|Lem=_|Len=5
9	_	_	PROPN	NNP	Number=Sing	8	flat	8:flat	Entity=42)41)|Lem=_|Len=4|SpaceAfter=No
10	_	_	PUNCT	,	_	3	punct	3:punct	Lem=_|Len=1
11	_	_	PRON	EX	_	12	expl	12:expl	Discourse=justify:34->51:4|Lem=_|Len=5
12	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=be|Len=2
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Lem=_|Len=1
14	_	_	NOUN	NN	Number=Sing	12	nsubj	12:nsubj	Lem=_|Len=6
15	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	nsubj	18:nsubj	Discourse=elaboration:35->34:0|Entity=(object-41-giv:act-1-ana)|Lem=_|Len=2
16	_	_	AUX	MD	VerbForm=Fin	18	aux	18:aux	Lem=_|Len=5
17	_	_	AUX	VB	VerbForm=Inf	18	cop	18:cop	Lem=_|Len=2
18	_	_	ADJ	JJ	Degree=Pos	14	acl:relcl	14:acl:relcl	Lem=_|Len=5
19	_	_	DET	DT	Definite=Ind|PronType=Art	20	det	20:det	Entity=(abstract-43-new-2-sgl|Lem=_|Len=1
20	_	_	NOUN	NN	Number=Sing	18	obj	18:obj	Lem=_|Len=3
21	_	_	ADP	IN	_	22	case	22:case	Lem=_|Len=2
22	_	_	NOUN	NN	Number=Sing	20	nmod	20:nmod:of	Entity=43)|Lem=_|Len=5|SpaceAfter=No
23	_	_	PUNCT	.	_	12	punct	12:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 10 aux	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	3	nsubj	3:nsubj	Discourse=concession:156->157:1|Entity=(abstract-149-acc:com-1-ana)|Lem=*LOWER*|Len=4
2	_	_	ADV	RB	Degree=Pos	3	advmod	3:advmod	Lem=_|Len=5
3	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=seem|Len=5
4	_	_	ADV	RB	Degree=Pos	7	advmod	7:advmod	Lem=_|Len=3
5	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=4
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	7:det	Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	3	obl	3:obl:over	Lem=_|Len=5
8	_	_	CCONJ	CC	_	14	cc	14:cc	Discourse=preparation:157->159:2|Lem=_|Len=3
9	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	nsubj	14:nsubj	Entity=(abstract-149-giv:act-1-ana)|Lem=_|Len=2
10	_	_	AUX	MD	VerbForm=Fin	14	aux	14:aux	Lem=_|Len=6
11	_	_	AUX	VB	VerbForm=Inf	14	cop	14:cop	Lem=_|Len=2
12	_	_	ADJ	JJ	Degree=Pos	14	amod	14:amod	Entity=(abstract-149-giv:act-3-pred|Lem=_|Len=4
13	_	_	NOUN	NN	Number=Sing	14	compound	14:compound	Lem=_|Len=7
14	_	_	NOUN	NN	Number=Sing	3	conj	3:conj:but	Lem=_|Len=11
15	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	14	nmod	14:nmod:for	Entity=(person-150-new-1-sgl|Lem=_|Len=7
17	_	_	VERB	VBG	VerbForm=Ger	16	acl	16:acl	Discourse=elaboration:158->157:0|Lem=try|Len=6
18	_	_	PART	TO	_	19	mark	19:mark	Lem=_|Len=2
19	_	_	VERB	VB	VerbForm=Inf	17	xcomp	17:xcomp	Lem=_|Len=10
20	_	_	NOUN	NN	Number=Sing	21	compound	21:compound	Entity=(place-151-new-2-sgl(abstract-14-giv:inact-1-coref)|Lem=_|Len=4
21	_	_	NOUN	NNS	Number=Plur	19	obj	19:obj	Entity=151)|Lem=market|Len=7
22	_	_	CCONJ	CC	_	23	cc	23:cc	Lem=_|Len=3
23	_	_	NOUN	NN	Number=Sing	21	conj	19:obj|21:conj:and	Entity=(abstract-152-new-1-sgl)|Lem=_|Len=14|SpaceAfter=No
24	_	_	PUNCT	,	_	26	punct	26:punct	Lem=_|Len=1
25	_	_	ADP	IN	_	26	case	26:case	Lem=_|Len=2
26	_	_	NOUN	NN	Number=Sing	19	obl	19:obl:in	Entity=150)149)|Lem=_|Len=7|SpaceAfter=No
27	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


