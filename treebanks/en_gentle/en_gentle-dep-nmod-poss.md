---
layout: base
title:  'Statistics of nmod:poss in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="en_gentle-dep-nmod-unmarked.html">nmod:unmarked</a></tt>.

283 nodes (2%) are attached to their parents as `nmod:poss`.

283 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.60777385159011.

The following 7 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (233; 82% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (23; 8% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (14; 5% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (7; 2% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Our	our	PRON	PRP$	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	Discourse=explanation-evidence:101->98:3:_|Entity=(124-person-new-cf2-2-sgl(125-person-acc:com-cf1-1-ana)|PDTB=NoRel:NoRel:_:_:485-501:502-511
2	children	child	NOUN	NNS	Number=Plur	3	nsubj	3:nsubj	Entity=124)|MSeg=child-ren
3	attend	attend	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	Entity=(126-organization-new-cf3-3-sgl
5	public	public	ADJ	JJ	Degree=Pos	6	amod	6:amod	MSeg=publ-ic
6	school	school	NOUN	NN	Number=Sing	3	obj	3:obj	_
7	in	in	ADP	IN	_	9	case	9:case	_
8	our	our	PRON	PRP$	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	9	nmod:poss	9:nmod:poss	Entity=(127-place-new-cf4-2-sgl(125-person-giv:act-cf1-1-ana)
9	neighborhood	neighborhood	NOUN	NN	Number=Sing	6	nmod	6:nmod:in	Entity=127)126)|MSeg=neighbor-hood|SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nmod:poss	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=explanation-evidence:77->73:2:_|Entity=(103-person-new-cf1-1-ana)
2	put	put	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	Entity=(104-place-new-cf2-2-sgl
4	house	house	NOUN	NN	Number=Sing	2	obj	2:obj	Entity=104)
5	into	into	ADP	IN	_	9	case	9:case	MSeg=in-to
6	my	my	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	7	nmod:poss	7:nmod:poss	Entity=(105-abstract-new-cf4-4-sgl(106-person-new-cf3-2-sgl(103-person-giv:act-cf1-1-ana)
7	sister	sister	NOUN	NN	Number=Sing	9	nmod:poss	9:nmod:poss	_
8	's	's	PART	POS	_	7	case	7:case	Entity=106)
9	trust	trust	NOUN	NN	Number=Sing	2	obl	2:obl:into	Entity=105)|SpaceAfter=No|XML=<hi rend:::"bold"></hi>
10	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:poss	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	Discourse=joint-other_m:37->36:1:_|Entity=(31-organization-giv:act-cf1*-2-coref-United_States_District_Court_for_the_Northern_District_of_Texas|PDTB=Implicit:Expansion.Conjunction:further:_:188-220:221-230
2	court	court	NOUN	NN	Number=Sing	3	nsubj	3:nsubj	Entity=31)
3	ruled	rule	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	Cxn=Resultative|CxnElt=3:Resultative.Predicate|MSeg=rul-ed
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	5:det	Entity=(13-event-giv:inact-cf2-4-coref(22-person-giv:inact-cf3-2-coref
5	Does	Doe	PROPN	NNPS	Number=Plur	7	nmod:poss	7:nmod:poss	MSeg=Doe-s
6	'	's	PART	POS	_	5	case	5:case	Entity=22)
7	complaint	complaint	NOUN	NN	Number=Sing	3	obj	3:obj|9:nsubj:xsubj	Entity=13)|MSeg=complain-t
8	not	not	PART	RB	Polarity=Neg	9	advmod	9:advmod	Negation=Yes
9	justiciable	justiciable	ADJ	JJ	Degree=Pos	3	xcomp	3:xcomp	CxnElt=3:Resultative.Result|MSeg=justic-i-able|SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


