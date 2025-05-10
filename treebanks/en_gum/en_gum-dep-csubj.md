---
layout: base
title:  'Statistics of csubj in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="en_gum-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="en_gum-dep-csubj-pass.html">csubj:pass</a></tt>.

354 nodes (0%) are attached to their parents as `csubj`.

205 instances of `csubj` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.93785310734463.

The following 21 pairs of parts of speech are connected with `csubj`: <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (144; 41% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (100; 28% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (57; 16% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (6; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 csubj	color:blue
1	To	to	PART	TO	_	2	mark	2:mark	Discourse=causal-cause:30->28:1:_
2	make	make	VERB	VB	VerbForm=Inf	8	csubj	8:csubj	_
3	that	that	DET	DT	Number=Sing|PronType=Dem	4	det	4:det	Entity=(43-event-giv:act-nnnnn-cf1*-2-coref
4	transition	transition	NOUN	NN	Number=Sing	2	obj	2:obj	Entity=43)|MSeg=transit-ion
5	would	would	AUX	MD	VerbForm=Fin	8	aux	8:aux	_
6	be	be	AUX	VB	VerbForm=Inf	8	cop	8:cop	_
7	cost	cost	NOUN	NN	Number=Sing	8	compound	8:compound	_
8	prohibitive	prohibitive	ADJ	JJ	Degree=Pos	0	root	0:root	MSeg=prohibit-ive|SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	8:punct	SpaceAfter=No
10	”	"	PUNCT	''	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 csubj	color:blue
1	When	when	ADV	WRB	PronType=Int	3	advmod	3:advmod	Discourse=topic-solutionhood:161->162:0:_;context-circumstance:161->162:0:0:orp-when-1117|PDTB=Explicit:Temporal.Synchronous:when:1117:1123-1126:1118-1122
2	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
3	comes	come	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	advcl	9:advcl:when	MSeg=come-s
4	to	to	ADP	IN	_	5	case	5:case	_
5	sleep	sleep	NOUN	NN	Number=Sing	3	obl	3:obl:to	Entity=(175-abstract-new-ssnnn-cf2-1-coref)|SpaceAfter=No
6	,	,	PUNCT	,	_	3	punct	3:punct	_
7	changing	change	VERB	VBG	VerbForm=Ger	9	csubj	9:csubj	Discourse=joint-list_m:162->111:3:_|MSeg=chang-ing
8	behavior	behavior	NOUN	NN	Number=Sing	7	obj	7:obj	Entity=(176-abstract-new-snnnn-cf1-1-sgl)|MSeg=behav-ior
9	works	work	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	MSeg=work-s|SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	No	no	DET	DT	PronType=Neg	2	det	2:det	Discourse=evaluation-comment:171->172:0:_|Negation=Yes
2	wonder	wonder	NOUN	NN	Number=Sing	0	root	0:root	Cxn=No-Wonder|CxnElt=2:No-Wonder.Wonder
3	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	4:nsubj	Discourse=evaluation-comment:172->76:8:_|Entity=(87-person-acc:com-nnnnn-cf2-1-sgl)
4	forbid	forbid	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	csubj	2:csubj	MSeg=for-bid
5	this	this	DET	DT	Number=Sing|PronType=Dem	6	det	6:det	Entity=(34-abstract-giv:inact-snnns-cf1-2-coref
6	dance	dance	NOUN	NN	Number=Sing	4	obj	4:obj	Entity=34)|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


