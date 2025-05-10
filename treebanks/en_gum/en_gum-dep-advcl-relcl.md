---
layout: base
title:  'Statistics of advcl:relcl in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-advcl.html">advcl</a></tt>.

319 nodes (0%) are attached to their parents as `advcl:relcl`.

319 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.64576802507837.

The following 19 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (194; 61% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (32; 10% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (18; 6% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (12; 4% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (10; 3% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (9; 3% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl:relcl	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=attribution-positive:65->66:0:sem-atsrc-344+lex-indwd-345|Entity=(10-person-giv:inact-sssss-cf1-1-ana)|PDTB=Implicit:Contingency.Cause.Reason:because:_:335-343:344-349
2	know	know	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	how	how	ADV	WRB	PronType=Rel	2	obj	2:obj	Discourse=evaluation-comment:66->64:0:_
4	that	that	PRON	DT	Number=Sing|PronType=Dem	5	nsubj	5:nsubj	_
5	works	work	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl:relcl	3:advcl:relcl	MSeg=work-s|SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 advcl:relcl	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	2:nsubj|4:nsubj:xsubj	Discourse=attribution-positive:85->86:0:_|Entity=(72-event-giv:inact-n____-cf3-2-disc(73-person-giv:act-n____-cf1*-1-ana)
2	have	have	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root|11:csubj	_
3	to	to	PART	TO	_	4	mark	4:mark	_
4	declare	declare	VERB	VB	VerbForm=Inf	2	xcomp	2:xcomp	_
5	that	that	SCONJ	IN	_	7	mark	7:mark	Discourse=elaboration-additional:86->71:2:_
6	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	7	nsubj	7:nsubj	Entity=(73-person-giv:act-n____-cf1*-1-ana)
7	did	do	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	4	ccomp	4:ccomp	_
8	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	obj	7:obj	Entity=(76-event-giv:act-n____-cf2-1-coref)72)|SpaceAfter=No
9	,	,	PUNCT	,	_	11	punct	11:punct	_
10	which	which	PRON	WDT	PronType=Rel	11	nsubj	2:ref|11:nsubj	Discourse=organization-phatic:87->86:3:_|PDTB=Implicit:NoRel:_:_:638-646:647-649
11	means	mean	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	advcl:relcl	2:advcl:relcl	MSeg=mean-s
12	--	-	PUNCT	:	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 advcl:relcl	color:blue
1	When	when	ADV	WRB	PronType=Int	3	advmod	3:advmod	Discourse=context-circumstance:45->46:0:dm-when-325|PDTB=Explicit:Temporal.Synchronous:when:325:329-339:326-328;Implicit:Expansion.Conjunction:and:_:296-324:325-339
2	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	3:nsubj	Entity=(1-person-giv:act-snsns-cf1*-1-ana)
3	ate	eat	VERB	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	8	advcl	8:advcl:when	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	3:punct	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	8:nsubj	Discourse=joint-list_m:46->40:2:_|Entity=(1-person-giv:act-snsns-cf1*-1-ana)
6	did	do	AUX	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	8	aux	8:aux	_
7	not	not	PART	RB	Polarity=Neg	8	advmod	8:advmod	Negation=Yes
8	know	know	VERB	VB	VerbForm=Inf	0	root	0:root	_
9	when	when	ADV	WRB	PronType=Rel	8	obj	8:obj	_
10	the	the	DET	DT	Definite=Def|PronType=Art	12	det	12:det	Entity=(57-time-acc:com-nnnnn-cf2-3-sgl
11	next	next	ADJ	JJ	Degree=Pos	12	amod	12:amod	_
12	time	time	NOUN	NN	Number=Sing	14	nsubj	14:nsubj	Entity=57)
13	would	would	AUX	MD	VerbForm=Fin	14	aux	14:aux	_
14	be	be	AUX	VB	VerbForm=Inf	9	advcl:relcl	9:advcl:relcl	SpaceAfter=No
15	.	.	PUNCT	.	_	8	punct	8:punct	_

~~~


