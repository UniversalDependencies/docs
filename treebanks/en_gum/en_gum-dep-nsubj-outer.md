---
layout: base
title:  'Statistics of nsubj:outer in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_gum-dep-nsubj-pass.html">nsubj:pass</a></tt>.

270 nodes (0%) are attached to their parents as `nsubj:outer`.

270 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.59259259259259.

The following 21 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (139; 51% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (81; 30% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (11; 4% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (6; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PART.html">PART</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nsubj:outer	color:blue
1	(	(	PUNCT	-LRB-	_	4	punct	4:punct	Discourse=attribution-positive:37->38:0:_|PDTB=Implicit:Contingency.Cause.Result:so:_:262-281:282-291|SpaceAfter=No
2	Have	have	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
3	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Entity=(58-person-acc:com-nnnnn-cf1-1-ana)
4	noticed	notice	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	Cxn=Interrogative-Polar-Direct|CxnElt=4:Interrogative-Polar-Direct.Clause|MSeg=notic-ed
5	that	that	SCONJ	IN	_	8	mark	8:mark	Discourse=causal-result:38->35:1:_
6	prices	price	NOUN	NNS	Number=Plur	8	nsubj:outer	8:nsubj:outer	Entity=(59-abstract-new-nnnnn-cf2-1-sgl)|MSeg=price-s
7	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	_
8	rising	rise	VERB	VBG	VerbForm=Ger	4	ccomp	4:ccomp	MSeg=ris-ing|SpaceAfter=No
9	?	?	PUNCT	.	_	4	punct	4:punct	SpaceAfter=No
10	)	)	PUNCT	-RRB-	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:outer	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj:outer	2:nsubj:outer	Discourse=attribution-positive:72->73:1:_|Entity=(88-person-giv:inact-nnnnn-cf1-1-ana)
2	take	take	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	2:expl	_
4	this	this	PRON	DT	Number=Sing|PronType=Dem	7	nsubj	7:nsubj	Discourse=topic-question:73->76:2:_|Entity=(3-abstract-giv:inact-sssnn-cf2-1-ana)
5	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	7:det	Entity=(106-abstract-new-nsnnn-cf3-2-coref
7	motion	motion	NOUN	NN	Number=Sing	2	ccomp	2:ccomp	MSeg=mot-ion
8	to	to	PART	TO	_	9	mark	9:mark	Discourse=purpose-attribute:74->73:0:_
9	strike	strike	VERB	VB	VerbForm=Inf	7	acl	7:acl:to	Entity=106)|SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:outer	color:blue
1	And	and	CCONJ	CC	_	7	cc	7:cc	Discourse=elaboration-additional:34->32:1:ref-dem-190-193,196+dm-and-195|PDTB=Explicit:Expansion.Level-of-detail.Arg2-as-detail:and:195:155-194:196-202
2	that	that	PRON	DT	Number=Sing|PronType=Dem	7	nsubj:outer	7:nsubj:outer	Entity=(18-abstract-giv:act-nnnnn-cf1*-1-ana)
3	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
4	where	where	ADV	WRB	PronType=Int	7	advmod	7:advmod	_
5	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	nsubj	7:nsubj	Entity=(18-abstract-giv:act-nnnnn-cf1*-1-ana)
6	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
7	fatal	fatal	ADJ	JJ	Degree=Pos	0	root	0:root	MSeg=fat-al|SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


