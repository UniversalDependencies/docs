---
layout: base
title:  'Statistics of acl:relcl in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-acl.html">acl</a></tt>.

152 nodes (1%) are attached to their parents as `acl:relcl`.

151 instances of `acl:relcl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.72368421052632.

The following 21 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (81; 53% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (22; 14% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (10; 7% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (6; 4% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl:relcl	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	Discourse=joint-other_m:128->4:3|Entity=(173-abstract-new-cf1-2-sgl
2	one	one	NOUN	NN	Number=Sing	0	root	0:root|4:nsubj	_
3	that	that	PRON	WDT	PronType=Rel	4	nsubj	2:ref	Discourse=elaboration-attribute:129->128:0
4	follows	follow	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	2:acl:relcl	_
5	after	after	ADP	IN	_	7	case	7:case	_
6	this	this	DET	DT	Number=Sing|PronType=Dem	7	det	7:det	Entity=(174-abstract-new-cf2-2-sgl
7	one	one	NOUN	NN	Number=Sing	4	obl	4:obl:after	Entity=174)173)|SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	4:nsubj	Discourse=explanation-evidence:113->110:2|Entity=(151-person-acc:com-cf1-1-ana)
2	can	can	AUX	MD	VerbForm=Fin	4	aux	4:aux	XML=<w>
3	not	not	PART	RB	Polarity=Neg	4	advmod	4:advmod	XML=</w>
4	trust	trust	VERB	VB	VerbForm=Inf	0	root	0:root	XML=<hi rend:::"bold"></hi>
5	anyone	anyone	PRON	NN	Number=Sing|PronType=Ind	4	obj	4:obj|7:nsubj	Entity=(152-person-new-cf2-1-sgl
6	who	who	PRON	WP	PronType=Rel	7	nsubj	5:ref	Discourse=elaboration-attribute:114->113:0
7	deceives	deceive	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	5:acl:relcl	_
8	us	we	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	7	obj	7:obj	Entity=(151-person-giv:act-cf1-1-ana)152)|SpaceAfter=No
9	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	But	but	CCONJ	CC	_	3	cc	3:cc	Discourse=causal-cause:9->14:2
2	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	3:nsubj	Entity=(11-abstract-new-cf1-2-disc(12-person-acc:com-cf2-1-ana)
3	loved	love	VERB	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	with	with	ADP	IN	_	6	case	6:case	_
5	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	Entity=(11-abstract-giv:act-cf1-2-coref
6	love	love	NOUN	NN	Number=Sing	3	obl	3:obl:with|9:nsubj	_
7	that	that	PRON	WDT	PronType=Rel	9	nsubj	6:ref	Discourse=elaboration-attribute:10->9:0
8	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	cop	9:cop	_
9	more	more	ADJ	JJR	Degree=Cmp	6	acl:relcl	6:acl:relcl	_
10	than	than	ADP	IN	_	11	case	11:case	_
11	love	love	NOUN	NN	Number=Sing	9	obl	9:obl:than	Entity=(13-abstract-new-cf3-1-sgl)11)11)
12	—	—	PUNCT	:	_	3	punct	3:punct	_

~~~


