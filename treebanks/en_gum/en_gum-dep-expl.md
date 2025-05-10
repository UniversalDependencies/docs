---
layout: base
title:  'Statistics of expl in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `expl`

This relation is universal.

714 nodes (0%) are attached to their parents as `expl`.

689 instances of `expl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.57983193277311.

The following 8 pairs of parts of speech are connected with `expl`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (541; 76% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (125; 18% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (37; 5% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl	color:blue
1	There	there	PRON	EX	PronType=Dem	3	expl	3:expl	Discourse=adversative-antithesis:27->26:1:_
2	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj|4:nsubj:xsubj	Entity=(5-person-giv:inact-sssss-cf1-1-ana)
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
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	3:expl	Discourse=elaboration-additional:18->17:0:sem-lxchn-124,130,133+lex-indwd-136|Entity=(21-abstract-new-nnnnn-cf3-1-cata)
2	’s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	best	good	ADJ	JJS	Degree=Sup	0	root	0:root	MSeg=be-st
4	to	to	PART	TO	_	5	mark	5:mark	Entity=(21-abstract-acc:com-nnnnn-cf3-2-coref
5	wash	wash	VERB	VB	VerbForm=Inf	3	csubj	3:csubj	_
6	adults	adult	NOUN	NNS	Number=Plur	8	nmod:poss	8:nmod:poss	Entity=(8-object-giv:inact-nnnnn-cf1-3-coref(9-person-giv:inact-nnnnn-cf2-1-coref|MSeg=adult-s
7	’	's	PART	POS	_	6	case	6:case	Entity=9)
8	overalls	overall	NOUN	NNS	Number=Plur	5	obj	5:obj	Entity=8)|MSeg=over-all-s
9	alone	alone	ADV	RB	Degree=Pos	5	advmod	5:advmod	Entity=21)|MSeg=a-lone|SpaceAfter=No
10	,	,	PUNCT	,	_	9	punct	9:punct	_
11	especially	especially	ADV	RB	Degree=Pos	12	advmod	12:advmod	MSeg=especial-ly|PDTB=AltLex:Expansion.Level-of-detail.Arg2-as-detail:especially:136:117-125:126-135,137-139
12	men	man	NOUN	NNS	Number=Plur	8	appos	8:appos	Entity=(22-person-new-nnnnn-cf4-1-sgl
13	’s	's	PART	POS	_	12	case	12:case	Entity=22)
14	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 expl	color:blue
1	It	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	5:expl	Discourse=adversative-contrast_m:107->106:1:_|PDTB=Implicit:Comparison.Contrast:but:_:898-920:921-932
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	only	only	ADV	RB	_	5	advmod	5:advmod	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	5:det	Entity=(96-event-giv:inact-sssns-cf2-2,4-coref(97-event-giv:inact-sssns-cf3-2-coref
5	loss	loss	NOUN	NN	Number=Sing	0	root	0:root|9:csubj	Entity=97)
6	or	or	CCONJ	CC	_	7	cc	7:cc	_
7	injury	injury	NOUN	NN	Number=Sing	5	conj	5:conj:or	Entity=(98-event-giv:inact-ssnnn-cf4-1-coref)96)|MSeg=injur-y
8	that	that	PRON	WDT	PronType=Rel	9	nsubj	5:ref|9:nsubj	_
9	makes	make	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	advcl:relcl	5:advcl:relcl	Cxn=Resultative|CxnElt=9:Resultative.Predicate|MSeg=make-s
10	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	obj	9:obj|11:nsubj:xsubj	Entity=(128-event-giv:act-nnnnn-cf1*-1-ana)
11	wrongful	wrongful	ADJ	JJ	Degree=Pos	9	xcomp	9:xcomp	CxnElt=9:Resultative.Result|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


