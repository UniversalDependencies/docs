---
layout: base
title:  'Statistics of expl in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `expl`

This relation is universal.

601 nodes (0%) are attached to their parents as `expl`.

581 instances of `expl` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55074875207987.

The following 7 pairs of parts of speech are connected with `expl`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (461; 77% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (105; 17% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (28; 5% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl	color:blue
1	There	there	PRON	EX	PronType=Dem	3	expl	3:expl	Discourse=adversative-antithesis:27->26:1:_
2	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj|4:nsubj:xsubj	Entity=(5-person-giv:inact-cf1-1-ana)
3	go	go	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	thinking	think	VERB	VBG	VerbForm=Ger	3	xcomp	3:xcomp	MSeg=think-ing
5	again	again	ADV	RB	Degree=Pos	3	advmod	3:advmod	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	3:expl	Discourse=elaboration-additional:18->17:0:sem-lxchn-124,130,133+lex-indwd-136|Entity=(21-abstract-new-cf3-1-cata)
2	’s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	best	good	ADJ	JJS	Degree=Sup	0	root	0:root	MSeg=be-st
4	to	to	PART	TO	_	5	mark	5:mark	Entity=(21-abstract-acc:com-cf3-2-coref
5	wash	wash	VERB	VB	VerbForm=Inf	3	csubj	3:csubj	_
6	adults	adult	NOUN	NNS	Number=Plur	8	nmod:poss	8:nmod:poss	Entity=(8-object-giv:inact-cf1-3-coref(9-person-giv:inact-cf2-1-coref|MSeg=adult-s
7	’	's	PART	POS	_	6	case	6:case	Entity=9)
8	overalls	overall	NOUN	NNS	Number=Plur	5	obj	5:obj	Entity=8)|MSeg=over-all-s
9	alone	alone	ADV	RB	Degree=Pos	5	advmod	5:advmod	Entity=21)|MSeg=a-lone|SpaceAfter=No
10	,	,	PUNCT	,	_	9	punct	9:punct	_
11	especially	especially	ADV	RB	Degree=Pos	12	advmod	12:advmod	MSeg=especial-ly
12	men	man	NOUN	NNS	Number=Plur	8	appos	8:appos	Entity=(22-person-new-cf4-1-sgl
13	’s	's	PART	POS	_	12	case	12:case	Entity=22)
14	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 expl	color:blue
1	What	what	PRON	WP	PronType=Int	0	root	0:root	Cxn=Conditional-Interrogative|Discourse=joint-list_m:85->83:1:_
2	if	if	SCONJ	IN	_	6	mark	6:mark	Discourse=contingency-condition:86->85:0:dm-if-648
3	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	6:expl	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	Entity=(61-organization-giv:inact-cf1-2-coref
6	state	state	NOUN	NN	Number=Sing	1	advcl	1:advcl:if|9:csubj	_
7	itself	itself	PRON	PRP	Gender=Neut|Number=Sing|Person=3|PronType=Emp|Reflex=Yes	6	nmod:npmod	6:nmod:npmod	Entity=61)|MSeg=it-self
8	that	that	PRON	WDT	PronType=Rel	9	nsubj	6:ref|9:nsubj	_
9	exhibits	exhibit	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	advcl:relcl	6:advcl:relcl	MSeg=exhibit-s
10	predatory	predatory	ADJ	JJ	Degree=Pos	11	amod	11:amod	Entity=(127-abstract-new-cf2-2-sgl|MSeg=predat-or-y
11	behavior	behavior	NOUN	NN	Number=Sing	9	obj	9:obj	Entity=127)|MSeg=behav-ior|SpaceAfter=No
12	?	?	PUNCT	.	_	1	punct	1:punct	_

~~~


