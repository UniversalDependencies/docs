---
layout: base
title:  'Statistics of expl in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `expl`

This relation is universal.

34 nodes (0%) are attached to their parents as `expl`.

30 instances of `expl` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 3 pairs of parts of speech are connected with `expl`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (30; 88% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (3; 9% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl	color:blue
1	There	there	PRON	EX	PronType=Dem	2	expl	2:expl	Discourse=joint-list_m:44->39:0:_
2	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Cxn=Existential-There
3	mild	mild	ADJ	JJ	Degree=Pos	4	amod	4:amod	Entity=(79-abstract-new-cf1-2-sgl
4	pallor	pallor	NOUN	NN	Number=Sing	2	nsubj	2:nsubj	Entity=79)
5	noted	note	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	4	acl	4:acl	Discourse=elaboration-attribute:45->44:0:_|MSeg=not-ed|SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 expl	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	5:expl	Discourse=explanation-motivation:90->88:1:_|Entity=(105-abstract-new-cf2-1-sgl)
2	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	not	not	PART	RB	Polarity=Neg	5	advmod	5:advmod	_
4	too	too	ADV	RB	Degree=Pos	5	advmod	5:advmod	_
5	late	late	ADJ	JJ	Degree=Pos	0	root	0:root	_
6	to	to	PART	TO	_	7	mark	7:mark	Discourse=purpose-goal:91->90:0:_
7	change	change	VERB	VB	VerbForm=Inf	5	csubj	5:csubj	_
8	your	your	PRON	PRP$	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	9	nmod:poss	9:nmod:poss	Entity=(106-abstract-new-cf3-2-sgl(1-person-giv:act-cf1*-1-ana)
9	mind	mind	NOUN	NN	Number=Sing	7	obj	7:obj	Entity=106)|SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 expl	color:blue
1	IT	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	expl	8:expl	Discourse=context-background:2->9:3:_|Entity=(2-event-new-cf3-1-cata)
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	cop	8:cop	_
3	many	many	ADJ	JJ	Degree=Pos	7	amod	7:amod	Entity=(3-time-new-cf8-6-sgl
4	and	and	CCONJ	CC	_	5	cc	5:cc	_
5	many	many	ADJ	JJ	Degree=Pos	3	conj	3:conj:and|7:amod	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	7:det	_
7	year	year	NOUN	NN	Number=Sing	8	obl:tmod	8:obl:tmod	_
8	ago	ago	ADV	RB	Degree=Pos	0	root	0:root	Entity=3)|MSeg=a-go|SpaceAfter=No
9	,	,	PUNCT	,	_	12	punct	12:punct	_
10	In	in	ADP	IN	_	12	case	12:case	_
11	a	a	DET	DT	Definite=Ind|PronType=Art	12	det	12:det	Entity=(4-place-new-cf7-2-coref
12	kingdom	kingdom	NOUN	NN	Number=Sing	8	obl	8:obl:in	MSeg=king-dom
13	by	by	ADP	IN	_	15	case	15:case	_
14	the	the	DET	DT	Definite=Def|PronType=Art	15	det	15:det	Entity=(5-place-acc:com-cf4-2-coref
15	sea	sea	NOUN	NN	Number=Sing	12	nmod	12:nmod:by	Entity=5)4)|SpaceAfter=No
16	,	,	PUNCT	,	_	21	punct	21:punct	_
17	That	that	SCONJ	IN	_	21	mark	21:mark	Entity=(2-event-acc:com-cf3-5,15-coref
18	a	a	DET	DT	Definite=Ind|PronType=Art	19	det	19:det	Entity=(1-person-giv:act-cf1*-2-coref
19	maiden	maiden	NOUN	NN	Number=Sing	21	nsubj	21:nsubj|25:obj	Entity=1)
20	there	there	ADV	RB	PronType=Dem	21	advmod	21:advmod	_
21	lived	live	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	csubj	8:csubj	MSeg=liv-ed
22	whom	who	PRON	WP	PronType=Rel	25	obj	19:ref	Discourse=elaboration-attribute:3->2:0:_
23	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	25	nsubj	25:nsubj	Entity=(6-person-acc:com-cf2-1-sgl)
24	may	may	AUX	MD	VerbForm=Fin	25	aux	25:aux	_
25	know	know	VERB	VB	VerbForm=Inf	19	acl:relcl	19:acl:relcl	_
26	By	by	ADP	IN	_	28	case	28:case	_
27	the	the	DET	DT	Definite=Def|PronType=Art	28	det	28:det	Entity=(7-abstract-new-cf5-2,5-sgl
28	name	name	NOUN	NN	Number=Sing	25	obl	25:obl:by	_
29	of	of	ADP	IN	_	30	case	30:case	_
30	ANNABEL	Annabel	PROPN	NNP	Number=Sing	28	nmod	28:nmod:of	Entity=(8-abstract-new-cf6-1,2-sgl
31	LEE	Lee	PROPN	NNP	Number=Sing	30	flat	30:flat	Entity=8)7)2)|SpaceAfter=No
32	;	;	PUNCT	:	_	8	punct	8:punct	_

~~~


