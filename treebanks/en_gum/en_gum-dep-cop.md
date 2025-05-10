---
layout: base
title:  'Statistics of cop in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `cop`

This relation is universal.

4785 nodes (2%) are attached to their parents as `cop`.

4676 instances of `cop` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.38620689655172.

The following 13 pairs of parts of speech are connected with `cop`: <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1889; 39% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1847; 39% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (244; 5% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (241; 5% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (199; 4% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (193; 4% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (103; 2% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (26; 1% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (15; 0% instances), <tt><a href="en_gum-pos-PART.html">PART</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (10; 0% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (5; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	You	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Discourse=evaluation-comment:11->13:1:lex-indwd-68|Entity=(12-person-new-n____-cf3-1-ana)
2	're	be	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	so	so	ADV	RB	_	4	advmod	4:advmod	_
4	stupid	stupid	ADJ	JJ	Degree=Pos	0	root	0:root	_
5	thinking	think	VERB	VBG	Tense=Pres|VerbForm=Part	4	advcl	4:advcl	Discourse=attribution-positive:12->13:0:sem-atsrc-65+lex-indwd-69|MSeg=think-ing
6	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	7:nsubj	Discourse=adversative-antithesis:13->14:1:_|Entity=(4-person-giv:act-nssss-cf1*-1-ana)
7	spent	spend	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	5	ccomp	5:ccomp	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	Entity=(7-time-giv:inact-sssss-cf2-2-coref
9	night	night	NOUN	NN	Number=Sing	7	obj	7:obj	Entity=7)|SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	4:nsubj	Discourse=evaluation-comment:5->3:1:_|Entity=(3-event-giv:act-nnnnn-cf1*-1-coref)|PDTB=Implicit:Contingency.Cause.Reason:because:_:9-27:28-32
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	4:cop	_
3	an	a	DET	DT	Definite=Ind|PronType=Art	4	det	4:det	Entity=(3-event-giv:act-nnnnn-cf1*-2-pred
4	accident	accident	NOUN	NN	Number=Sing	0	root	0:root	Entity=3)|SpaceAfter=No
5	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj:outer	4:nsubj:outer	Discourse=evaluation-comment:71->65:2:_|Entity=(76-abstract-giv:act-nnnnn-cf1*-1-coref)|PDTB=Implicit:Expansion.Level-of-detail.Arg2-as-detail:in short:_:456-483:484-494
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	like	like	SCONJ	IN	_	4	mark	4:mark	_
4	giving	give	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	MSeg=giv-ing
5	full	full	ADJ	JJ	Degree=Pos	7	amod	7:amod	Entity=(81-abstract-new-nnnnn-cf4-3-sgl
6	fridge	fridge	NOUN	NN	Number=Sing	7	compound	7:compound	Entity=(79-object-giv:act-nnnnn-cf2-1-coref)
7	privileges	privilege	NOUN	NNS	Number=Plur	4	obj	4:obj	Entity=81)|MSeg=privilege-s
8	to	to	ADP	IN	_	10	case	10:case	_
9	your	your	PRON	PRP$	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	10	nmod:poss	10:nmod:poss	Entity=(82-animal-new-nnnnn-cf5-2-sgl-Labrador_Retriever(36-person-giv:inact-nnnnn-cf3-1-ana)
10	Labrador	Labrador	PROPN	NNP	Number=Sing	4	obl	4:obl:to	Entity=82)|SpaceAfter=No
11	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


