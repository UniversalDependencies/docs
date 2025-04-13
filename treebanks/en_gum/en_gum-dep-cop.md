---
layout: base
title:  'Statistics of cop in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `cop`

This relation is universal.

4263 nodes (2%) are attached to their parents as `cop`.

4164 instances of `cop` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.35585268590195.

The following 13 pairs of parts of speech are connected with `cop`: <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1706; 40% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1646; 39% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (212; 5% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (192; 5% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (181; 4% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (172; 4% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (91; 2% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (23; 1% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (15; 0% instances), <tt><a href="en_gum-pos-PART.html">PART</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	You	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Discourse=evaluation-comment:11->13:1:lex-indwd-68|Entity=(12-person-new-cf3-1-ana)
2	're	be	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	so	so	ADV	RB	_	4	advmod	4:advmod	_
4	stupid	stupid	ADJ	JJ	Degree=Pos	0	root	0:root	_
5	thinking	think	VERB	VBG	Tense=Pres|VerbForm=Part	4	advcl	4:advcl	Discourse=attribution-positive:12->13:0:sem-atsrc-65+lex-indwd-69|MSeg=think-ing
6	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	7:nsubj	Discourse=adversative-antithesis:13->14:1:_|Entity=(11-person-giv:act-cf1*-1-ana)
7	spent	spend	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	5	ccomp	5:ccomp	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	Entity=(6-time-giv:inact-cf2-2-coref
9	night	night	NOUN	NN	Number=Sing	7	obj	7:obj	Entity=6)|SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	4:nsubj	Discourse=evaluation-comment:5->3:1:_|Entity=(3-event-giv:act-cf1*-1-coref)|PDTB=Implicit:Contingency.Cause.Reason:because:_:9-27:28-32
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	4:cop	_
3	an	a	DET	DT	Definite=Ind|PronType=Art	4	det	4:det	Entity=(3-event-giv:act-cf1*-2-pred
4	accident	accident	NOUN	NN	Number=Sing	0	root	0:root	Entity=3)|SpaceAfter=No
5	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	What	what	PRON	WP	PronType=Int	3	nsubj	3:nsubj	CxnElt=3:Interrogative-WHInfo-Direct.WHWord|Discourse=topic-question:7->8:0:lex-indwd-40+grf-qst-45|PDTB=Implicit:Expansion.Conjunction:in fact:_:33-39:40-45
2	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	up	up	ADV	RB	Degree=Pos	0	root	0:root	Cxn=Interrogative-WHInfo-Direct|CxnElt=3:Interrogative-WHInfo-Direct.Clause
4	with	with	ADP	IN	_	5	case	5:case	_
5	that	that	PRON	DT	Number=Sing|PronType=Dem	3	obl	3:obl:with	Entity=(7-event-giv:inact-cf1-1-coref)|SpaceAfter=No
6	?	?	PUNCT	.	_	3	punct	3:punct	_

~~~


